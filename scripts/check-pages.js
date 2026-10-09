#!/usr/bin/env node
/**
 * Checks every page under docs/ for the conventions in README.md:
 *   1. front matter containing only `sidebar_position` and `title`;
 *   2. a provenance comment ("Grounded in:" and "Migrated from:") directly
 *      after the front matter;
 *   3. a bold "In short:" opening paragraph;
 *   4. the feedback footer linking to this repository's issue tracker.
 *
 * If a production build exists (build/), it also checks that every
 * in-site link with a #fragment points at an anchor that exists on the
 * target page. Docusaurus 2 checks pages but not fragments.
 *
 * Usage: node scripts/check-pages.js        (exit code 1 on any failure)
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const buildDir = path.join(root, "build");
const FOOTER =
  /^Please submit any comments you have \[here\]\(https:\/\/github\.com\/Green-Software-Foundation\/sci-for-web-guidelines\/issues\/new\?labels=Guidelines\+Feedback&title=Feedback%3A\+[^)]+\)\.$/;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

const failures = [];
const fail = (file, msg) => failures.push(`${path.relative(root, file)}: ${msg}`);
const files = walk(docsDir).sort();

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    fail(file, "missing front matter");
    continue;
  }
  const keys = fm[1]
    .split("\n")
    .filter((l) => /^\S/.test(l))
    .map((l) => l.split(":")[0].trim())
    .sort();
  if (keys.join(",") !== "sidebar_position,title") {
    fail(file, `front matter keys must be exactly sidebar_position and title (found: ${keys.join(", ")})`);
  }

  const rest = text.slice(fm[0].length).replace(/^\n+/, "");
  const comment = rest.match(/^<!--([\s\S]*?)-->/);
  if (!comment) {
    fail(file, "provenance comment must follow the front matter");
  } else {
    if (!/Grounded in:/.test(comment[1])) fail(file, 'provenance comment lacks "Grounded in:"');
    if (!/Migrated from:/.test(comment[1])) fail(file, 'provenance comment lacks "Migrated from:"');
  }

  if (!/^\*\*In short:\*\*/m.test(text)) fail(file, 'missing bold "**In short:**" paragraph');

  const lastLine = text.trimEnd().split("\n").pop();
  if (!FOOTER.test(lastLine)) fail(file, "missing or malformed feedback footer on the last line");
}

// Fragment check against the built site, when available.
let fragmentsChecked = 0;
if (fs.existsSync(buildDir)) {
  const slugify = (f) =>
    path
      .relative(docsDir, f)
      .replace(/\.mdx?$/, "")
      .replace(/(^|\/)index$/, "");
  const htmlFor = (route) => {
    const candidates = [path.join(buildDir, route, "index.html"), path.join(buildDir, `${route}.html`)];
    return candidates.find((c) => fs.existsSync(c));
  };
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const fromRoute = slugify(file);
    for (const m of text.matchAll(/\]\((\.{1,2}\/[^)#\s]*)?#([^)\s]+)\)/g)) {
      const target = m[1]
        ? slugify(path.join(docsDir, path.normalize(path.join(path.dirname(path.relative(docsDir, file)), m[1]))))
        : fromRoute;
      const html = htmlFor(target === "." ? "" : target);
      fragmentsChecked++;
      if (!html) {
        fail(file, `link target not found in build: ${m[0]}`);
        continue;
      }
      const ids = new Set([...fs.readFileSync(html, "utf8").matchAll(/id="([^"]+)"/g)].map((x) => x[1]));
      if (!ids.has(m[2])) fail(file, `anchor #${m[2]} not found on ${path.relative(buildDir, html)}`);
    }
  }
}

console.log(`Checked ${files.length} pages${fs.existsSync(buildDir) ? ` and ${fragmentsChecked} #fragment links` : " (no build/ found: fragment links not checked)"}.`);
if (failures.length) {
  console.error(failures.map((f) => `  ✗ ${f}`).join("\n"));
  process.exit(1);
}
console.log("All pages pass.");

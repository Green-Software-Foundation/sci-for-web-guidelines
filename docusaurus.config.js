// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SCI for Web Guidelines",
  tagline:
    "Explanatory guidance, worked examples and data-source references for implementers calculating an SCI for Web score. Companion to the SCI for Web Specification; not itself normative.",
  favicon: "img/favicon.svg",

  // TODO(domain): confirm the production domain before the first deployment.
  url: "https://sci-for-web-guidelines.greensoftware.foundation/",
  baseUrl: "/",

  organizationName: "Green-Software-Foundation",
  projectName: "sci-for-web-guidelines",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Green-Software-Foundation/sci-for-web-guidelines/tree/web",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SCI for Web Guidelines",
        logo: {
          alt: "SCI for Web Guidelines Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Guidelines",
          },
          {
            href: "https://github.com/Green-Software-Foundation/sci-for-web-guidelines",
            label: "GitHub",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a href="https://greensoftware.foundation/" target="_blank" rel="noopener noreferrer" class="navbar__link" style="display:flex;align-items:center;gap:6px;"><span style="font-size:0.8rem;">a project of</span><img src="/img/gsf-logo.svg" alt="Green Software Foundation" style="height:14px;width:auto;" /></a>',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/sci-for-web-guidelines",
              },
              {
                label: "SCI for Web Specification",
                // TODO(spec-url): replace with the published SCI for Web Specification URL.
                href: "#",
              },
              {
                label: "ISO/IEC 21031:2024 (SCI)",
                href: "https://www.iso.org/standard/86612.html",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms of Use",
                href: "https://greensoftware.foundation/terms-of-use",
              },
              {
                label: "Privacy Policy",
                href: "https://greensoftware.foundation/privacy-policy",
              },
            ],
          },
          {
            title: "GSF Info",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
              {
                label: "Twitter / X",
                href: "https://twitter.com/GrnSoftwareFdn",
              },
            ],
          },
        ],
        logo: {
          alt: "Green Software Foundation",
          src: "img/gsf-footer-mark.svg",
          href: "https://greensoftware.foundation/",
          width: 48,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Green Software Foundation. Content licensed CC-BY-4.0, code licensed MIT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

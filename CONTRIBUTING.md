# Contributing to SCI for Web Guidelines

Thank you for your interest in contributing to the SCI for Web Guidelines
project.

## Branching model

This repository uses three long-lived branches:

- **`dev`**: the working branch. All pull requests should be opened
  against `dev`.
- **`main`**: the reviewed, official GSF version of the guideline
  content. Changes land here from `dev` after Standards Working Group
  (SSWG) review.
- **`web`**: the branch that is actually deployed. Netlify builds `web`
  and publishes the result directly; see `netlify.toml`.

## What belongs here

This repository holds **non-normative guidance**: explanation, worked
examples, data-source references and interpretive context for the SCI for
Web Specification. It does not define requirements. If a change would add,
relax or tighten a `shall` / `should` / `may` requirement, it belongs in
the specification, not here: please raise it with the SSWG instead.

## Types of contribution

- **Corrections and clarifications** to existing pages.
- **New data-source or tool references** for any SCI for Web component
  (see [`docs/DataSources`](docs/DataSources/index.md)). Each named tool,
  vendor or product carries a "last reviewed" date on the page where it is
  listed.
- **Case studies**: see [`docs/CaseStudies.md`](docs/CaseStudies.md) and
  the `case-study-template` issue form.
- **Worked examples**, added under `use-case-submissions/`.

Do not submit content that resolves one of the open questions tracked in
[`docs/OpenQuestions.md`](docs/OpenQuestions.md) on the SSWG's behalf:
flag it as open and let the working group's own process settle it.

## Review process

See [`docs/ReviewProcess/Data.md`](docs/ReviewProcess/Data.md) for the
full intake → discussion → draft PR → initial review → working-group
review → consistency review workflow.

## Developing locally

```bash
yarn install
yarn start
```

Before opening a pull request, run `yarn build` and
`node scripts/check-pages.js` locally and confirm both complete without
errors.

## Code of Conduct

All contributors are expected to follow the
[Code of Conduct](CODE-OF-CONDUCT.md).

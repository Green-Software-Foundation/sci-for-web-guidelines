---
sidebar_position: 14
title: Architecture Patterns
---

<!--
Grounded in: proposed spec Clause 5 (Software boundary, including 5.3 exclusions); Clause 6 (Functional unit); Clause 7 (Methodology, including 7.2 allocation disclosure).
Migrated from: original draft §13.1 (Static site generation); §13.2 (Single-page applications); §13.3 (Progressive web applications); §13.4 (Serverless and edge computing); §13.5 (API-first architectures); §2.3 (architectural patterns, cross-referenced).
-->

**In short:** the rules are the same for every kind of web application,
but different architectures put work in different places. This page
shows where each common pattern's energy lands in the formula, so that
nothing is missed and nothing is counted twice.

The patterns below were the edge cases the original draft singled out.
Every application in scope ([Scope and Application Types](../Scope/index.md))
follows the same boundary; these notes simply apply it.

## Static site generation (SSG)

- `O_server` covers only the energy to **serve** static files: the web
  server and CDN edge.
- The energy to **build** the site is development and build
  infrastructure, which Clause 5.3 excludes from the score. It can be
  assessed separately: see
  [Development Lifecycle Emissions](../DevLifecycle/index.md).
- `O_client` is included as normal, and `O_network` is reported or not as
  for any other application.

## Single-page applications (SPAs)

- Include the initial page load **and** all the API calls the application
  makes afterwards.
- We recommend a functional unit that represents a complete user
  workflow, not just the initial load: an SPA does much of its work after
  the first page appears.
- Client-side hydration and ongoing JavaScript execution belong in
  `O_client`.

## Progressive web applications (PWAs)

- Online use is counted as normal.
- When the application runs **offline** from cached resources, there is no
  `O_server` or `O_network` for that use, but `O_client` is still
  measured.
- Service worker execution belongs in `O_client`.

## Serverless and edge computing

- Serverless function execution belongs in `O_server`, including
  cold-start overhead, which is real resource use.
- Edge function execution at CDN nodes belongs in `O_server`.
- Clause 7.2 requires the allocation method for shared infrastructure to
  be disclosed.

Details are on [Server-Side Emissions](../O/Server.md#serverless-and-edge-functions).

## API-first architectures

- The back-end API's serving energy belongs in `O_server`.
- The front-end application that consumes the API belongs in `O_client`.
- We recommend a functional unit that represents value delivered to the
  end user, not individual API calls (see
  [Choosing a Functional Unit](../R/index.md#technical-units-acceptable-with-justification)).

If the API is also used directly by programmatic clients, only the
browser-facing use is in scope; see
[Scope](../Scope/index.md#boundary-case-apis).

## Patterns at a glance

| Pattern | `O_server` | `O_client` | Watch out for |
| --- | --- | --- | --- |
| SSG | Serving only | As normal | Build energy is excluded (Clause 5.3) |
| SPA | Initial load and later API calls | Hydration and ongoing JavaScript | A functional unit that only counts first loads |
| PWA | Online use only | Always, including offline | Service worker work |
| Serverless and edge | Functions, including cold starts | As normal | Disclosing the shared-infrastructure allocation |
| API-first | API serving | Front-end consumption | A functional unit of raw API calls |

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Architecture+Patterns).

---
sidebar_position: 4
title: Personas and Responsibilities
---

<!--
Grounded in: proposed spec Clause 5 (Software boundary), in particular 5.1 (Mandatory components) and 5.4 (Third-party services).
Migrated from: original draft §6 (Persona-based boundary introduction); §6.1 (Frontend developer); §6.2 (Backend and infrastructure engineer); §6.3 (Product owner and technical manager); §6.3.1 ("decision maker who introduced the dependency", moved here as responsibility per correction C6); §6.4 (consolidated boundary rationale).
-->

**In short:** different people on a web team control different parts of
an application's emissions. This page describes three personas and what
each can change. **Personas assign responsibility for reducing emissions;
they do not define separate boundaries or separate scores.** There is one
software boundary (Clause 5) and one score per functional unit.

## One boundary, shared responsibility

The original draft drew a "boundary" for each persona, but even there the
score was calculated across one consolidated boundary spanning every
component. The proposed specification keeps only that consolidated
boundary. The personas below are therefore
a way to answer *"who can act on this number?"*, not *"what goes in the
score?"*

This follows the parent SCI's principle that teams should be accountable
for what they can reasonably control or influence.

## Frontend developers and designers

**What they control directly:**

- client-side code efficiency (JavaScript bundle size, execution time);
- asset delivery and optimisation (images, fonts, video, CSS);
- rendering strategies (progressive enhancement, code splitting, lazy
  loading);
- third-party client-side dependencies (analytics scripts, advertising
  trackers, external fonts);
- interaction patterns (infinite scroll versus pagination, auto-playing
  media);
- browser caching (service workers, cache headers).

**Where it shows up:** `O_client`, including its third-party sub-total
for the scripts they chose to include, and the data sent to the client
(which affects `O_network` where reported).

**What they do not control:** server-side infrastructure, database
architecture, choice of hosting provider, the network between data centre
and user, and the hardware users own.

## Backend and infrastructure engineers

**What they control directly:**

- server-side compute and storage resources;
- database efficiency and architecture;
- hosting location, and so exposure to grid carbon intensity;
- capacity relative to real traffic (right-sizing);
- caching at server and CDN level;
- API efficiency and server-side code performance.

**Where it shows up:** `O_server`, including its third-party sub-total
for server-side API dependencies, `M_server`, and server-side network
configuration (which affects `O_network` where reported).

**What they do not control:** users' devices, browser implementations and
how client-side third-party scripts behave, although they may decide
whether such scripts are included.

## Product owners and technical managers

**What they control:** strategic and architectural decisions:

- feature prioritisation and lifecycle management ("feature gardening");
- performance and environmental budgets;
- vendor selection and third-party services;
- team time allocated to optimisation;
- architectural standards and patterns;
- non-functional requirements, including sustainability targets.

**Where it shows up:** every component (`O_server`, `O_client`, the
optional `O_network`, `M_server`, `M_network`, `M_client`), through
architecture and prioritisation. Vendor choices show up in the
third-party sub-totals of the operational components.

**What they do not control:** day-to-day implementation details,
suppliers' internal implementations, and what devices users own or how
they behave.

## Who introduced a dependency?

When a third-party service is added, the useful question for
responsibility is **who decided to add it**, not which company wrote the
code:

| Decision | Who can act on it |
| --- | --- |
| A frontend developer adds an analytics widget | Frontend developer |
| A backend developer integrates a payment API | Backend developer |
| An infrastructure team selects a CDN provider | Infrastructure team |
| A user installs a browser extension | Nobody on the team: it is outside the boundary (Clause 5.3) |

This tells you who should review the dependency. It does **not** decide
which component the emissions are counted in. Accounting follows a
different rule: Clause 5.4 attributes a third-party service to the
component **in which it executes** (`O_server`, `O_network` or
`O_client`), and Clause 5.5 places CDN energy measured as facility energy
in `O_server`. So the CDN selected by the infrastructure team is
*their responsibility*, but its facility-measured energy is *counted in*
`O_server`. See [Third-Party Attribution](../ThirdParty/index.md).

:::note Correction to the original draft
The original draft (§6.3.1) used "the decision maker who introduced the
dependency" as the accounting rule, and placed a selected CDN in
`O_network`. The proposed specification attributes by where a service
executes instead, so the decision-maker idea now lives here, as
responsibility only.
:::

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Personas+and+Responsibilities).

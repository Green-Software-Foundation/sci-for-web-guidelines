---
sidebar_position: 3
title: Scope and Application Types
---

<!--
Grounded in: proposed spec Clause 1 (Scope); Clause 3.1 (web application); Clause 5.3 (Exclusions).
Migrated from: original draft §2 (Scope criteria); §2.1 (Application types in scope); §2.2 (Boundary cases); §2.3 (Architectural patterns in scope); §6.4 (Explicit exclusions: native applications, browser extensions).
-->

**In short:** SCI for Web applies to software that people use through a
web browser. If your product is delivered over HTTP or HTTPS, runs mainly
in a browser and is built for people rather than other programs, it is in
scope. This page helps you decide borderline cases.

## The three tests

Clause 1 puts a software system in scope when **all three** of these hold:

1. **Delivery**: content and functionality are delivered over HTTP or
   HTTPS.
2. **Execution**: rendering and execution happen mainly in a web browser
   or an equivalent web rendering engine.
3. **Interaction**: the interface is designed for direct human
   interaction.

If any test fails, the parent SCI ([ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html))
is usually the right method instead.

## Application types in scope

The original draft listed the kinds of application the method was written
for. All of these pass the three tests:

- static content websites (blogs, documentation, marketing pages);
- dynamic web platforms (content management systems, portals);
- single-page applications (SPAs);
- progressive web applications (PWAs);
- server-side rendered applications;
- e-commerce systems;
- media streaming services delivered through a browser;
- software-as-a-service (SaaS) platforms;
- real-time collaborative tools (document editors, whiteboards,
  messaging);
- API-driven applications with a browser-based interface.

The list is indicative, not exhaustive. Clause 1 covers static, dynamic,
server-rendered, single-page, progressive and hybrid applications,
whatever the hosting model.

## Architecture patterns in scope

The same is true of rendering and hosting architectures. The draft named:

- client-side rendering (CSR);
- server-side rendering (SSR);
- static site generation (SSG);
- hybrid and incremental rendering (ISR);
- serverless and edge computing architectures;
- micro-frontend architectures.

How each pattern affects the calculation is covered on
[Architecture Patterns](../ArchitecturePatterns/index.md).

## Boundary case: APIs

APIs are the most common borderline case. Classify an API by its main
access pattern:

- **In scope**: APIs used mainly through a browser interface, such as an
  API whose interactive documentation is the main way people use it, or
  one paired with a browser-based management dashboard that is the main
  way people interact with it.
- **Out of scope**: machine-to-machine APIs that serve only programmatic
  clients. Clause 1 directs these to ISO/IEC 21031:2024 directly.

The deciding question is whether people get the service's value through
browser rendering, not whether HTTP is involved.

## Boundary case: native apps and web views

Native mobile and desktop applications are out of scope, **including
those that embed a web view** (Clause 1). The original draft took the same
position. Assess such apps with the parent SCI.

If the same service also has a browser version, that version can have its
own SCI for Web score. Keep the two assessments separate: they have
different boundaries.

## Also out of scope

- **Browser extensions, plug-ins and assistive technologies.** They run in
  the browser but are not part of the web application. Clause 5.3 also
  excludes software the user installs, including extensions, from any web
  application's score.
- **Post-delivery processing** not triggered by the user's interaction
  with the application, such as an email delivered after sending or a
  file's life after download (Clause 5.3).
- **Development and build infrastructure.** This is excluded from the
  score but can be assessed separately: see
  [Development Lifecycle Emissions](../DevLifecycle/index.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Scope+and+Application+Types).

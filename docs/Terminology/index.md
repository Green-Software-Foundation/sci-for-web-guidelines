---
sidebar_position: 24
title: Terminology and Language Guide
---

<!--
Grounded in: proposed spec Clause 3 (Terms and definitions, 3.1–3.8); Clause 2 (Normative references).
Migrated from: original draft §3 (Normative references); §4 (Terms and definitions: T.6 operational serving, T.7 functional unit (web-specific), T.8 implementation tier, T.9 reference device, and the O_dev abbreviation, none of which are carried into spec Clause 3; T.2–T.4 component energy terms, which Clause 3 replaces with 3.2–3.4).
-->

**In short:** the specification defines the terms it needs to state its
requirements (Clause 3). This page explains the extra working terms from
the original draft that implementers still meet, and how to read the
verbs "shall", "should" and "may".

## Terms defined in the specification

Clause 3 adopts the terms of ISO/IEC 21031:2024, its only normative
reference (Clause 2), and adds: web application (3.1), server-side
infrastructure (3.2), network transfer (3.3), client-side execution (3.4),
end-user device (3.5), third-party service (3.6), energy displacement
(3.7), and the component symbols (3.8). Always use the specification's
wording for these; this page does not redefine them.

## Working terms from the original draft

These terms appeared in the original draft but are not carried into
Clause 3. They are useful shorthand, with the meanings below.

### Operational serving

The runtime operation of a web application serving end-user requests,
excluding development, testing and build infrastructure. In the proposed
specification this idea is expressed through the boundary and its
exclusions (Clause 5.3) rather than as a defined term.

### Functional unit (web-specific)

The unit by which a web application's usage scales, measuring delivered
functionality such as user sessions, transactions completed, content
items consumed or tasks performed. The parent SCI defines "functional
unit"; Clause 6 adds the web-specific expectations. See
[Choosing a Functional Unit](../R/index.md).

### Implementation tier

The level of measurement sophistication an organisation adopts, from
entry-level automated measurement to comprehensive instrumentation:
**Entry**, **Standard** or **Advanced**. Tiers are guidance only and are
always named, never numbered. See
[Implementation Tiers and Data Quality](../DataQuality/index.md) and
[Open Question 1](../OpenQuestions.md).

### Reference device

A representative end-user device used for standardised client-side
energy measurement, selected from defined device categories and
performance classes. See [Reference Devices](../ReferenceDevices/index.md).

### Client-side, server-side and network transfer energy

The original draft defined these as energy terms (T.2–T.4). The proposed
specification defines the underlying infrastructure and activities
instead (Clauses 3.2–3.4), which makes the line between components
explicit: server-side infrastructure runs **up to data-centre facility
egress**, and network transfer runs **from facility egress to the
device's network interface**. The draft's network term also included
content delivery networks; under Clause 5.5, CDN energy measured as
facility energy is server-side.

### `O_dev`

The original draft's abbreviation for development lifecycle operational
emissions. It is not a component of SCI for Web: see
[Development Lifecycle Emissions](../DevLifecycle/index.md).

### First-party and third-party sub-totals

`O_client_first`, `O_client_third` and the equivalents for `O_server` and
`O_network` are this site's shorthand for the sub-totals Clause 7.6
requires. "Undifferentiated" marks a component whose sub-totals could not
be separated.

## Reading "shall", "should" and "may"

The proposed specification follows ISO drafting rules, which use three
verb forms:

| Verb form | Meaning in ISO drafting |
| --- | --- |
| **shall** | A requirement: to conform, you do this |
| **should** | A recommendation: the preferred course, but not a condition of conformance |
| **may** | A permission: allowed, not expected |

The original draft mixed "MUST" with "SHALL", in the style of internet
standards. ISO documents do not use "must" for requirements, so the
proposed specification uses "shall" throughout.

These guidelines never use requirement language of their own. Where a
page relies on a requirement, it attributes it ("Clause 7.5 requires…").
Everything else on this site is advice: "we recommend", "a common
approach is".

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Terminology+and+Language+Guide).

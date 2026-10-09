---
sidebar_position: 26
title: Review Process
---

<!--
Grounded in: none directly (process page); Clause 4 and Clause 8 inform what a submission discloses.
Migrated from: none (adapted from the SWI Guidance review process, itself adapted from the SCI Open Data project).
-->

**In short:** contributions start as a GitHub issue, become a pull
request against `dev`, and are reviewed first for completeness and then
by the SSWG for methodological soundness. This page sets out the steps
and what reviewers look for.

This guideline site adapts the intake workflow used by the GSF's SWI
Guidance and SCI Open Data projects.

## Intake workflow

1. **Discussion**: raise the submission (a data source, a tool, a case
   study or a correction) as a GitHub issue first, using the relevant
   template. This gives the SSWG and the wider community a chance to weigh
   in before content is written.
2. **Draft PR against `dev`**: once discussion settles, open a pull
   request targeting the `dev` branch with the content change.
3. **Initial review**: a maintainer checks basic completeness. Does it
   follow the page conventions? Are sources cited and numbers labelled?
   Are assumptions disclosed? Does `node scripts/check-pages.js` pass?
4. **Working group review**: the SSWG checks methodological soundness.
   Does it represent the SCI for Web Specification correctly? Does it
   avoid creating, relaxing or tightening a requirement? Does it avoid
   resolving an [open question](../OpenQuestions.md) on the group's
   behalf?
5. **Consistency review**: periodically, on merge from `dev` to `main`,
   the whole site is reviewed for internal consistency: cross-references
   still resolve, and new pages do not contradict existing ones.

## What a submission should include

Whether it is a data source, a tool or a case study, a submission
should identify:

- **Title and description**: what is being submitted and why.
- **Type**: for example carbon intensity source, embodied-emissions
  dataset, measurement tool or case study.
- **Components served**: which of `O_server`, `O_client`, `O_network`,
  `M_server`, `M_network` and `M_client` it applies to.
- **Method**: how any figures were measured, calculated or derived.
- **Submitter**: for attribution and follow-up.
- **Dates**: when the data was collected or the assessment performed,
  and when it was last reviewed.
- **Pages affected**: which page(s) of this site it relates to.
- **Gap filled**: what was missing without it.
- **Assumptions** and **exclusions**, with reasons.

## Questions reviewers ask

For a data source or tool specifically:

- Who publishes and maintains it, and is it actively maintained?
- Is it public, and under what licence?
- Does it measure, or model? If it models, is the method documented
  well enough to evaluate?
- Does it rely on bytes transferred? If so, is it presented only where
  the specification allows (the last-resort `O_network` method, and never
  as an allocation basis for `M_network`)?
- Are its limitations and exclusions stated?

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Review+Process).

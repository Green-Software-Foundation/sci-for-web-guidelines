---
sidebar_position: 23
title: Implementation Templates
---

<!--
Grounded in: proposed spec Clause 5.5 (Component boundaries: bundled supplier figures, allocation disclosed, no double counting); Clause 7.5 (Embodied emissions); Clause 10 (energy displacement does not reduce the score).
Migrated from: original draft Appendix A.1 (introduction to non-normative templates); Appendix A.1.4 (CDN bundled-vendor-data allocation template). Templates A.1.1–A.1.3 are hosted on their topic pages and linked from here.
Corrections applied: C3 (the template records the effect of omitting O_network on a transmission-basis allocation).
-->

**In short:** fill-in-the-blanks templates for the analyses that most
often need careful disclosure. They are illustrative, not prescribed:
adapt them to your context. Three live on the pages they support; the
fourth, for bundled CDN energy, is below.

## Templates on other pages

- **`M_network` materiality assessment**, for deciding whether
  `M_network` can be declared unpopulated:
  [Embodied Emissions: Network](../M/Network.md#materiality-assessment-template).
- **Functional units for several user journeys**:
  [Choosing a Functional Unit](../R/index.md#template-several-user-journeys).
- **First-party and third-party `O_client` breakdown**:
  [Third-Party Attribution](../ThirdParty/index.md#example-an-o_client-breakdown).
- **Full disclosure (YAML)**: [Disclosure Template](./index.md).

## CDN bundled-energy allocation

Use this when a CDN provider publishes a single bundled energy figure for
your traffic. Clause 5.5 requires the allocation between components to be
disclosed and forbids counting energy in more than one component. The
rule for where CDN energy belongs, and a worked example, are on
[Network Emissions](../O/Network.md#cdn-and-edge-energy-where-it-belongs).

```
Supplier figure:
  - Source:                     [e.g. CDN provider sustainability portal]
  - Period:                     [e.g. 2026-01-01 to 2026-01-31]
  - Bundled energy:             [X kWh] for this application's traffic
  - Carbon intensity applied:   [y gCO2eq/kWh — source]
  - Bundled carbon:             [X × y] gCO2eq

Allocation rule:
  - Rationale:                  [e.g. cache-hit ratio split]
  - Split:                      [e.g. a% O_network (transmission) / b% O_server (facility or edge compute)]
  - Assumptions:                [e.g. cache hits are transmission-only;
                                 dynamic edge functions are compute-equivalent]
  - Data sources for split:     [e.g. CDN analytics dashboard]

Effect on the reported score:
  - O_network reported?         [yes / no]
  - If no: energy allocated to O_network ([a% × X] kWh) is excluded from
    the score. Name it, with its quantity, in the limitations disclosure.
    The split is not score-neutral.

Disclosure statement:
  "Allocation will move to component-specific figures if and when the
   provider publishes them."
```

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Implementation+Templates).

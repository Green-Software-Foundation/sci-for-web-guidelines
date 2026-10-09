---
sidebar_position: 22
title: Disclosure Template
---

<!--
Grounded in: proposed spec Clause 8 (Reporting, items 1–11 and machine-readable format); Clause 7.1 (two-score reporting); Clause 7.6 (first-party / third-party sub-totals).
Migrated from: original draft §12.1 (Mandatory disclosures, mapped onto Clause 8); §12.2 (Recommended disclosures); §12.3 (Disclosure format); Appendix A (Disclosure template, "to be developed").
-->

**In short:** a score means little without the story of how it was
reached. Clause 8 lists eleven things every SCI for Web report discloses.
This page gives a YAML template with one section for each, plus an
optional section for further details we recommend sharing.

:::caution Draft template
This template is a draft. Its keys and structure may change as the
specification and these guidelines mature. It is not a schema the
specification requires.
:::

## Human-readable and machine-readable

Clause 8 recommends providing disclosures in a machine-readable format
(such as JSON or YAML) as well as a human-readable one. The template below
is one way to do that; write the human-readable report from the same
content.

## What Clause 8 requires

| Item | Clause 8 asks for | Template key |
| --- | --- | --- |
| 1 | The score in gCO2eq per R, and the score including `O_network` where reported | `score` |
| 2 | The version of the specification applied | `specification_version` |
| 3 | The boundary: included, optional and excluded components, with the rationale for each exclusion | `boundary` |
| 4 | The functional unit: definition, rationale, measurement source, any engagement threshold, treatment of automated traffic | `functional_unit` |
| 5 | For each component: measured or calculated, and the data sources, models, coefficients and allocation methods | `components` |
| 6 | First-party and third-party sub-totals for each operational component | `attribution` |
| 7 | Carbon intensity sources and their spatial and temporal granularity | `carbon_intensity` |
| 8 | End-user devices used for client-side quantification, by type, model, OS and browser version | `devices` |
| 9 | Measurement period and traffic characterisation, including volumes and geographic and device distribution | `measurement_period` |
| 10 | Population status of `M_network`, with the materiality assessment where unpopulated | `m_network_status` |
| 11 | Limitations, data gaps, exclusions and uncertainty | `limitations` |

## The template

```yaml
# SCI for Web disclosure — DRAFT template
# Keys 1–11 map one-to-one to the Clause 8 reporting items.
# The "recommended" section is optional.

score:                                   # Clause 8 item 1
  value: 0.00                            # gCO2eq per R
  unit: "gCO2eq per [functional unit]"
  o_network_included: false              # headline score never includes O_network (Clause 7.1)
  value_with_o_network: null             # second, labelled score, only if O_network is quantified

specification_version: "[SCI for Web version]"   # Clause 8 item 2

boundary:                                # Clause 8 item 3
  included: [O_server, O_client, M_server, M_network, M_client]
  optional:
    O_network: { reported: false, rationale: "" }
    monitoring_redundancy_failover: { included: true, rationale: "" }
  excluded:
    - item: development and build infrastructure
      rationale: "Excluded by Clause 5.3"
  third_party_services_in_boundary: []   # name and component for each

functional_unit:                         # Clause 8 item 4
  definition: ""
  rationale: ""                          # include justification if a technical unit is used (Clause 6.1)
  measurement_source: ""                 # analytics event, server log, order records…
  engagement_threshold: null             # e.g. minimum session duration, with rationale
  automated_traffic:
    treatment: excluded                  # included | excluded | separate_functional_unit
    detection_method: ""
    estimated_share_of_traffic: null     # proportion of total traffic

components:                              # Clause 8 item 5
  O_server:
    approach: measured                   # measured | calculated
    data_sources: []
    models_and_coefficients: []
    allocation_method: ""                # shared infrastructure (Clause 7.2)
    value_kgco2eq: null
  O_client: { approach: measured, data_sources: [], models_and_coefficients: [], value_kgco2eq: null }
  O_network:
    reported: false
    method: null                         # direct | hybrid | data_transfer (Clause 7.3)
    why_not_more_direct: null
    cdn_bundled_allocation: null         # Clause 5.5, if a supplier gave one bundled figure
  M_server: { approach: calculated, data_sources: [], allocation_method: "", value_kgco2eq: null }
  M_network: { approach: calculated, data_sources: [], allocation_basis: "", value_kgco2eq: null }  # never data volume (Clause 7.5)
  M_client: { approach: calculated, data_sources: [], value_kgco2eq: null }
  functional_unit_conversions: []        # Clause 7.7, with conversion factors

attribution:                             # Clause 8 item 6
  O_server:  { first_party: null, third_party: null, undifferentiated: false }
  O_client:  { first_party: null, third_party: null, undifferentiated: false }
  O_network: { first_party: null, third_party: null, undifferentiated: false }   # where reported
  excluded_below_1_percent: []           # each listed (Clause 7.6)

carbon_intensity:                        # Clause 8 item 7
  - component: O_server
    source: ""
    spatial_granularity: ""              # e.g. grid zone, country
    temporal_granularity: ""             # e.g. hourly, daily, annual
  - component: O_client
    source: ""
    basis: ""                            # user-location weighted | conservative estimate | disclosed assumption

devices:                                 # Clause 8 item 8
  - { type: "", model: "", os: "", browser: "" }

measurement_period:                      # Clause 8 item 9
  start: "YYYY-MM-DD"
  end: "YYYY-MM-DD"
  traffic:
    volume: null
    average_and_peak: ""
    geographic_distribution: ""
    device_distribution: ""
    deviation_from_typical: ""
    seasonal_factors: ""

m_network_status:                        # Clause 8 item 10
  populated: true
  materiality_assessment: null           # required where unpopulated (Clause 7.5)
  next_review: null                      # at least annually where unpopulated (Clause 7.5)

limitations:                             # Clause 8 item 11
  - ""                                   # include any bundled CDN energy left out with O_network

recommended:                             # optional; see "Recommended disclosures" below
  component_breakdown: {}
  baseline_comparison: null
  improvement_actions: []
  third_party_details: []                # services measured, estimated or excluded
  device_testing_details: []
  geographic_distribution: {}
  temporal_patterns: ""
  calculation_date: "YYYY-MM-DD"
  implementation_tier: null              # optional label only; see Open Question 1
```

## Recommended disclosures

These go beyond Clause 8 and are optional. The original draft recommended
them (§12.2), and they make a report much easier to learn from:

1. **Component breakdown**: the value of each component, not just the
   total.
2. **Baseline comparison**: the previous version, or an alternative
   implementation (see [Measurement Periods and Traffic](../MeasurementPeriods/index.md#comparing-against-a-baseline)).
3. **Improvement actions** taken between measurements.
4. **Third-party details**: which services were measured, estimated or
   excluded.
5. **Device testing details**: the specific models used.
6. **Geographic distribution** of server regions and users.
7. **Temporal patterns**: how carbon intensity varied over the period.

Two further items from the original draft's mandatory list are not in
Clause 8, and the SSWG has yet to decide whether they belong in the
specification. We recommend including them meanwhile:

- **Calculation date**: when the score was calculated.
- **Implementation tier**, as an optional label only
  ([Open Question 1](../OpenQuestions.md)).

A worked set of disclosures is at the end of
[Example 1](../QuickGuide.md#step-5-report).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Disclosure+Template).

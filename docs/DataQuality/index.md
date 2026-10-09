---
sidebar_position: 15
title: Implementation Tiers and Data Quality
---

<!--
Grounded in: proposed spec Clause 8 item 5 (measured or calculated, data sources, models, coefficients and allocation methods); Clause 7.3 (O_network method hierarchy); Clause 7.5 (M_network materiality); Clause 10 (score calculable without cost using disclosed modelled data).
Migrated from: original draft §1 (tier narrative); §9.1 (Entry tier); §9.2 (Standard tier); §9.3 (Advanced tier); §9.4 (Quantification method by tier); §15 (temporal granularity by tier); §10 step 1 (tier selection, dropped from the procedure); §17 (progressive adoption).
Corrections applied: C5 (Entry / Standard / Advanced throughout, never numbered); C7 (M_network unpopulated only with a materiality assessment below 5 %); C10 (no tier implies O_network is expected).
-->

**In short:** you do not need perfect data to calculate a valid SCI for
Web score. You need to say honestly how you got each number. This page
describes three levels of data maturity (Entry, Standard and Advanced)
as a way to plan improvements. They are guidance, not something the
specification asks you to declare.

## Tiers are guidance, not a requirement

The original draft required every organisation to select an
implementation tier and report it. The proposed specification does not:
there is no tier-selection step in the Clause 4 procedure and no tier
item in the Clause 8 reporting list. What the specification does require
is disclosure, for each component, of whether it was measured or
calculated and which data sources, models, coefficients and allocation
methods were used (Clause 8 item 5). Clause 10 adds that a score can
always be calculated without cost, using modelled data where measured
data is unavailable, provided the method is disclosed.

The tiers remain useful as a description of maturity. Whether "tier"
should come back as an optional disclosure label is
[Open Question 1](../OpenQuestions.md). Until it is settled, you may
mention a tier in your report as an optional, informal label.

Tiers are always named, never numbered. The original draft used
"Tier 1" to "Tier 3" for client-side measurement approaches, and the SWI
guidance uses "Tier 1" for its *best* data, so numbers invite confusion.

## Entry

**For:** teams beginning with SCI for Web, with limited measurement
infrastructure.

**Typical practice:**

- automated measurement using freely available tools;
- server energy measured directly where possible (cloud provider APIs,
  infrastructure monitoring);
- client energy measured on [reference devices](../ReferenceDevices/index.md),
  at least one per major device category;
- third-party services estimated with conservative defaults, or excluded
  within the Clause 7.6 limits;
- `M_network` populated with industry-default factors and a non-bytes
  allocation basis, or declared unpopulated **only** with a materiality
  assessment showing it below 5 % of embodied emissions (Clause 7.5);
- annual-average carbon intensity;
- a measurement period of at least 7 consecutive days (see
  [Measurement Periods and Traffic](../MeasurementPeriods/index.md));
- full disclosure of methods, tools and limitations.

**Typical data sources:** cloud provider energy or carbon APIs; browser
developer tools for client profiling; [reference values](../ReferenceValues/index.md)
for device embodied emissions; industry-default coefficients for
third-party services.

## Standard

**For:** teams with an established measurement practice seeking better
accuracy.

**Typical practice:**

- server and client energy measured directly across representative
  scenarios;
- client measurements weighted by device mix, with at least two devices
  per major category;
- third-party services included using vendor data or a documented
  estimation method;
- `M_network` calculated from industry-default factors with a disclosed
  non-bytes allocation basis;
- carbon intensity at daily granularity or finer;
- a measurement period of at least 30 consecutive days or one complete
  business cycle;
- results checked against published benchmarks where available;
- full disclosure of methods, data sources and uncertainty.

**Typical data sources:** infrastructure instrumentation and telemetry;
browser profiling across device types; vendor disclosures or API-based
estimates for third parties; regional grid carbon intensity data (see
[Carbon Intensity and Data Sources](../DataSources/index.md)).

## Advanced

**For:** organisations with sophisticated measurement capability and
sustainability commitments.

**Typical practice:**

- continuous measurement of server-side infrastructure;
- real-user monitoring for client energy, with statistical sampling;
- comprehensive third-party inclusion, with vendor engagement;
- hourly carbon intensity, enabling carbon-aware optimisation, with
  geographic and temporal distribution;
- continuous measurement with regular (monthly or quarterly) reporting;
- independent validation or audit of the method;
- public disclosure of method, data sources and results;
- device-specific lifecycle assessment data for embodied emissions where
  available.

## `O_network` at every tier

`O_network` is optional at **every** tier: no level of maturity implies
that it is expected. If you choose to report it, the method follows the
Clause 7.3 hierarchy whatever your tier: direct measurement first, a
hybrid model second, and a data-transfer model only where neither is
available. Better data simply makes the more direct methods reachable.
See [Network Emissions](../O/Network.md#choosing-a-method).

:::note Correction to the original draft
The original draft listed "industry default coefficients for network
energy" as an Entry-tier requirement and "SWDM or equivalent" as a
Standard-tier requirement, implying that `O_network` was expected. These
guidelines remove that implication.
:::

## Methods by tier

Clause 8 item 5 requires you to disclose, for each component, whether it
was measured or calculated. This table shows typical choices at each
level:

| Component | Entry | Standard | Advanced |
| --- | --- | --- | --- |
| `O_server` | Measurement or calculation | Measurement preferred | Continuous measurement |
| `O_network` (optional at every tier) | If reported: Clause 7.3 hierarchy | If reported: Clause 7.3 hierarchy | If reported: Clause 7.3 hierarchy |
| `O_client` | Measurement (reference devices) | Measurement (device mix) | Measurement (real-user monitoring) |
| `M_server` | Calculation (defaults or LCA) | Calculation (LCA databases) | Calculation (specific LCA) |
| `M_network` | Calculation (industry defaults), or unpopulated with a materiality assessment below 5 % | Calculation (industry defaults) | Calculation (vendor-specific) |
| `M_client` | Calculation (defaults) | Calculation (device-specific) | Calculation (device-specific LCA) |

Third-party emissions are sub-totals within the operational components,
not a separate row. Development lifecycle emissions are assessed
separately and never added to the score; see
[Development Lifecycle Emissions](../DevLifecycle/index.md).

## Carbon intensity granularity by tier

| Tier | Typical temporal granularity |
| --- | --- |
| Entry | Annual average |
| Standard | Daily average or finer |
| Advanced | Hourly |

Clause 8 item 7 requires the spatial and temporal granularity of your
carbon intensity data to be disclosed, whatever you choose.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Implementation+Tiers+and+Data+Quality).

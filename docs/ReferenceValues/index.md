---
sidebar_position: 19
title: Reference Values
---

<!--
Grounded in: proposed spec Clause 7.5 (Embodied emissions: M_client per device type); Clause 8 item 5 (coefficients disclosed).
Migrated from: original draft §8.7 (default embodied emissions values for end-user devices, disclosure of defaults); Appendix C (Reference values and coefficients, "to be developed").
Corrections applied: C11 (device embodied defaults kept, labelled as draft defaults with source to be confirmed, listed as an open question).
-->

**In short:** this page collects default values implementers can fall
back on when they lack specific data. Today it holds one table, default
embodied emissions for end-user devices, and that table **still needs a
confirmed source**. Use specific data wherever you have it.

## Device embodied emissions: draft defaults

:::caution Draft defaults, source to be confirmed
The values below come from the original SCI for Web draft (§8.7), which
gives no source for them. They are kept here so that implementations
using them can be traced, but they should not be cited as published
data until a source is confirmed. See
[Open Question 7](../OpenQuestions.md).
:::

<!-- TODO(source): identify and cite a published lifecycle-assessment source for these device values, with access date, or replace them. -->

| Device type | Embodied emissions (TE) | Expected lifespan (EL) |
| --- | --- | --- |
| Desktop computer | 400 kg CO2eq *(draft default, source to be confirmed)* | 5 years |
| Laptop computer | 300 kg CO2eq *(draft default, source to be confirmed)* | 4 years |
| Tablet | 100 kg CO2eq *(draft default, source to be confirmed)* | 4 years |
| Smartphone | 80 kg CO2eq *(draft default, source to be confirmed)* | 3 years |

How to use them:

- **Prefer specific data.** Where you have device-specific lifecycle
  assessment data, for example from manufacturers' product environmental
  reports or an embodied-emissions database, use it instead.
- **Disclose the choice.** Clause 8 item 5 requires the coefficients you
  used to be disclosed; say that you used these draft defaults.
- **Keep lifespan in the same units as time-share.** If session time is
  in hours, convert the lifespan to hours too (for example 3 years ≈
  26,280 hours).

The calculation itself is on
[Embodied Emissions: Server and Device](../M/ServerAndClient.md#end-user-devices-m_client).

## Still to be compiled

The original draft planned a fuller appendix of reference values. These
remain to be gathered, each with a source and access date:

- embodied emissions for server and network hardware;
- network energy coefficients for data-transfer models;
- default PUE values for data centres;
- default energy per call for common third-party API types;
- other constants used in the calculation.

Until then, take these values from the sources on
[Carbon Intensity and Data Sources](../DataSources/index.md) and disclose
them.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Reference+Values).

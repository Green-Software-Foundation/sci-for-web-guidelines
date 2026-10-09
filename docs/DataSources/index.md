---
sidebar_position: 17
title: Carbon Intensity and Data Sources
---

<!--
Grounded in: proposed spec Clause 7.1 (location-based carbon intensity; market-based measures not applied); Clause 8 item 7 (carbon intensity sources and granularity); Clause 11 (Exclusions).
Migrated from: original draft §15 (Carbon intensity data sources: named providers, temporal granularity); §20 bibliography items [2] SWDM v4, [4] GHG Protocol ICT Sector Guidance, [6] CO2.js, [7] Boavizta, [8] Cloud Carbon Footprint.
-->

**In short:** every operational component needs a carbon intensity: how
much CO2eq the grid emitted for each kWh. Use location-based figures for
the places where the electricity was actually used, say where they came
from, and say how fine-grained they are. This page lists sources the
community already uses.

*(Named providers, models and tools on this page last reviewed: 2026-10.
The specification names none of them; inclusion here is not an
endorsement.)*

## What the specification asks

- **Location-based only.** Clause 7.1 requires location-based carbon
  intensity for every operational component, and Clause 11 excludes
  market-based measures. Renewable energy certificates, power purchase
  agreements and "green hosting" claims based only on such purchases do
  not change the figure you use.
- **Disclosed.** Clause 8 item 7 requires the carbon intensity sources,
  and their spatial and temporal granularity, to be disclosed.
- **Per region.** Clause 7.2 requires server carbon intensity to be
  applied per grid region; Clause 7.4 asks for client intensity to
  reflect where users are, where that is known.

## Grid carbon intensity sources

| Source | What it offers |
| --- | --- |
| [Electricity Maps](https://www.electricitymaps.com/) | Location-based grid carbon intensity by zone, historical and real-time |
| [WattTime](https://www.watttime.org/) | Grid emissions data by region, historical and real-time |
| International Energy Agency (IEA) | National emission factors |
| Regional and national grid operators | Published carbon intensity for their grid |
| UNFCCC | National emission factors |

Choose the most granular source that covers your regions, and use the
same source for the baseline and the comparison when evaluating an action
(Clause 9).

## Temporal granularity

The original draft linked granularity to maturity: annual averages at
Entry, daily at Standard and hourly at Advanced. The table is on
[Implementation Tiers and Data Quality](../DataQuality/index.md#carbon-intensity-granularity-by-tier).
Finer granularity lets the score reflect when work happens, which matters
for carbon-aware scheduling.

## Models and reference datasets

The original draft's bibliography named these models and datasets. They
are referenced from the component pages where they apply:

- **Sustainable Web Design Model (SWDM) v4**, Sustainable Web Design
  Community Group:
  [sustainablewebdesign.org](https://sustainablewebdesign.org/calculating-digital-emissions/).
  A data-transfer model; used for `O_network` only as the last-resort
  method in Clause 7.3. See [Network Emissions](../O/Network.md).
- **CO2.js**, Green Web Foundation:
  [developers.thegreenwebfoundation.org](https://developers.thegreenwebfoundation.org/co2js/overview/).
  A JavaScript library implementing data-transfer models, including SWDM.
- **Boavizta** environmental footprint data:
  [boavizta.org](https://www.boavizta.org/). Embodied emissions for
  servers, cloud instances, devices and network hardware.
- **Cloud Carbon Footprint** methodology:
  [cloudcarbonfootprint.org](https://www.cloudcarbonfootprint.org/docs/methodology).
  Coefficients for estimating cloud energy and embodied emissions.
- **GHG Protocol ICT Sector Guidance**:
  [ghgprotocol.org](https://ghgprotocol.org/). Sector guidance on
  allocating ICT emissions, useful background for allocation choices.

A component-by-component list of tools is on the
[Tools Directory](./Tools.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Carbon+Intensity+and+Data+Sources).

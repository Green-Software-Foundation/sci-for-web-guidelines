---
sidebar_position: 10
title: Embodied Emissions
---

<!--
Grounded in: proposed spec Clause 7.5 (Embodied emissions); Clause 7.1 (M = TE × TS × RS as specified in ISO/IEC 21031:2024); Clause 5.1 (Mandatory components).
Migrated from: original draft §8.1 (M decomposition); §8.6 (parent SCI embodied pattern, TS and RS expansion).
-->

**In short:** embodied emissions are your fair share of the carbon
released making the hardware your application depends on: the servers it
runs on, the network equipment that carries it and the devices people use
it on. All three are always part of the score.

**Shape:** server hardware share + network hardware share + device
hardware share = embodied emissions.

**Worked:** 40 kg + 10 kg + 50 kg = 100 kg CO2eq for the month.
*(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
M = M_server + M_network + M_client
```

## The allocation pattern

Each embodied component uses the same allocation as the parent SCI,
[ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html), which
Clause 7.1 adopts:

```
M  = TE × TS × RS
TS = TiR / EL     time-share: time reserved ÷ expected lifespan
RS = RR / ToR     resource-share: resources reserved ÷ total resources
```

- `TE`: total embodied emissions of the hardware (gCO2eq);
- `TS`: the share of the hardware's lifespan used by the application;
- `RS`: the share of the hardware's resources used during that time.

**Worked:** a server with 1,200 kg CO2eq embodied and a 4-year life,
reserved for one month (TS = 1/48) with 8 of its 64 vCPUs reserved
(RS = 1/8): 1,200 × (1/48) × (1/8) = 3.125 kg CO2eq. *(illustrative
placeholder, not a real measurement)*

The SCI for Web Specification does not restate the parent's rules here;
it inherits them. Read ISO/IEC 21031:2024 for the full definition.

## The three components

- **[`M_server` and `M_client`](./ServerAndClient.md)**: server hardware
  (calculated as the parent SCI specifies) and end-user devices
  (calculated per device type across your device distribution).
- **[`M_network`](./Network.md)**: network hardware such as routers,
  switches, cell towers, cables and exchange points. Clause 7.5 rules out
  data volume as its allocation basis, and allows it to be declared
  unpopulated only after a materiality assessment.

Reference values for device embodied emissions are collected on
[Reference Values](../ReferenceValues/index.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Emissions).

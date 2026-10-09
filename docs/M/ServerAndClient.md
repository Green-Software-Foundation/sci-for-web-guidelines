---
sidebar_position: 11
title: "Embodied Emissions: Server and Device"
---

<!--
Grounded in: proposed spec Clause 7.5 (M_server as specified in ISO/IEC 21031:2024; M_client per device type, time-share and resource-share definitions); Clause 7.4 (device distribution).
Migrated from: original draft §8.6 (M_server formula and cloud proxies); §8.7 (M_client formula, time-share, resource-share, device-type distribution).
-->

**In short:** for servers, follow the parent SCI exactly: take the
hardware's embodied emissions and charge yourself for the share of its
life and capacity you reserved. For users' devices, do the same for each
kind of device (desktop, laptop, tablet, smartphone), using the time
people spend in your application, and weight by how many of your users
use each kind.

## Server hardware: `M_server`

**Shape:** server's embodied emissions × share of its life reserved ×
share of its resources reserved = your share.

**Worked:** 1,200 kg CO2eq × (1 month ÷ 48 months) × (8 vCPUs ÷ 64 vCPUs)
= 3.125 kg CO2eq. *(illustrative placeholder, not a real measurement)*

**Precise notation:** Clause 7.5 requires `M_server` to be calculated as
ISO/IEC 21031:2024 specifies:

```
M_server = TE_server × TS_server × RS_server
         = TE_server × (TiR_server / EL_server) × (RR_server / ToR_server)
```

### When you cannot see the hardware

On public cloud you rarely know the physical machine. Common proxies:

- **instance-type specifications** combined with an embodied-emissions
  database such as Boavizta or the Cloud Carbon Footprint coefficients;
- **virtual resources reserved** (vCPUs, memory) as a share of the host's
  capacity, as the resource-share;
- **the cloud provider's own embodied emissions data**, where it is
  disclosed.

Disclose which proxy you used and its source (Clause 8 item 5).
*(Named tools and datasets last reviewed: 2026-10. See the
[Tools Directory](../DataSources/Tools.md).)*

## End-user devices: `M_client`

**Shape:** for each device type, device embodied emissions × share of its
life spent in your application × share of its resources used; then add
the device types together, weighted by your device mix.

**Worked:** a smartphone with 70 kg CO2eq embodied and a 3-year life
(26,280 hours); a 10-minute session is 1/6 hour, so TS ≈ 0.0000063; with
RS = 0.5, the session's share is 70,000 g × 0.0000063 × 0.5 ≈ 0.22 g
CO2eq. *(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
M_client = Σ over device types d of (TE_d × TS_d × RS_d)
TS_d = D / EL_d
```

where `D` is the device time attributable to the functional unit (hours)
and `EL_d` the device's expected lifespan (hours). Clause 7.5 requires
`M_client` to be calculated for each device type in your device
distribution, with time-share and resource-share defined as above.

### Time-share

Time-share is device time attributable to the functional unit divided by
the device's expected lifespan (Clause 7.5). For a session-based unit,
`D` is the session length; for a transaction, it is the time spent
completing it. Take session or task durations from your analytics.

### Resource-share

Resource-share is the share of the device's resources the application
uses during that time (Clause 7.5). The original draft suggested
estimating it as **average CPU utilisation during use of the
application**, relative to the device's total active capacity. Disclose
how you estimated it.

### Embodied values

Use device-specific lifecycle assessment data where you have it. Where you
do not, the [Reference Values](../ReferenceValues/index.md) page lists the
original draft's default values, which are still awaiting a confirmed
source. Disclose which values you used and where they came from.

## Device mix

Clause 7.4 requires the basis for your device distribution to be
disclosed, and `M_client` is calculated across that same distribution.
Common sources:

- **your own analytics**, showing the split by device type (preferred);
- **an industry default distribution**, with disclosure, where you have
  no analytics.

Use the same distribution for `O_client` and `M_client`.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Emissions%3A+Server+and+Device).

---
sidebar_position: 8
title: Client-Side Emissions (O_client)
---

<!--
Grounded in: proposed spec Clause 7.4 (Client-side operational emissions); Clause 3.4 (client-side execution); Clause 3.5 (end-user device); Clause 8 item 8.
Migrated from: original draft §8.4 (O_client: formula, energy scope, three measurement approaches, I_client options); §5.3 (client-side execution inventory, summarised).
Corrections applied: C5 (approaches renamed reference-device, device-mix and real-user monitoring; tiers named, never numbered).
-->

**In short:** `O_client` is the carbon from the electricity users' phones,
tablets and computers spend running your application: laying out and
painting pages, running JavaScript, decoding images and video. Because it
is inside the boundary, moving work out of the data centre and onto
users' devices shows up here instead of disappearing.

**Shape:** device energy spent on the application × carbon intensity of
the grids where users are = device emissions.

**Worked:** 400 kWh across all users' devices for the month × 375
gCO2eq/kWh = 150 kg CO2eq. *(illustrative placeholder, not a real
measurement)*

**Precise notation:**

```
O_client = E_client × I_client
```

where `E_client` is device energy per functional unit (kWh) and
`I_client` is the carbon intensity of the electricity those devices use
(gCO2eq/kWh).

## What counts as client energy

`E_client` covers the work the device does for your application:

- the browser rendering engine (layout, paint, composite);
- JavaScript parsing, compilation and execution;
- CSS processing and style calculation;
- asset decoding (images, video, audio);
- user interaction processing;
- service worker execution.

It includes third-party scripts running in the page, with their own
sub-total (Clause 7.6; see [Third-Party Attribution](../ThirdParty/index.md)).
It excludes software the user installed, such as browser extensions
(Clause 5.3).

## Three ways to measure

Clause 7.4 requires energy to be quantified on, or for, devices
representative of your users, and the basis for the device distribution
to be disclosed. The original draft described three approaches of
increasing fidelity:

| Approach | What you do | Typical [implementation tier](../DataQuality/index.md) |
| --- | --- | --- |
| **Reference-device testing** | Measure energy on a small set of [reference devices](../ReferenceDevices/index.md) representing your user base, using browser profiling tools. Record the device types and models used. | Entry |
| **Device-mix weighting** | Measure across several device categories (desktop, laptop, tablet, smartphone) and weight results by your real device distribution from analytics. | Standard |
| **Real-user monitoring (RUM)** | Instrument browsers to collect energy-related telemetry from actual users, with privacy-preserving sampling and anonymisation. | Advanced |

:::note Naming
The original draft (§8.4) labelled these approaches "Tier 1" to "Tier 3",
which clashed with its own Entry, Standard and Advanced tiers (§9). These
guidelines use descriptive names for the approaches and never number
tiers.
:::

Whichever approach you use, Clause 8 item 8 requires you to disclose the
devices by type, model, operating system and browser version.

### Privacy and real-user monitoring

Clause 7.4 requires telemetry collected from real users to be
privacy-preserving. Good practice includes:

- **sampling** a fraction of sessions rather than instrumenting everyone;
- **anonymising** data at collection, keeping only what the calculation
  needs (device class, timing, coarse region);
- **aggregating** before storage or reporting, so no individual user's
  behaviour can be reconstructed;
- following your existing consent and data-protection obligations for
  analytics.

## Choosing a carbon intensity

The original draft offered three options for `I_client`:

- **User-location-based**: a weighted average of grid carbon intensity
  across your users' geographic distribution. This is the option Clause
  7.4 points to where the distribution is known.
- **Conservative estimate**: a high percentile (for example the 75th
  percentile) of global grid carbon intensity, so that uncertainty errs
  towards a higher score.
- **Disclosed assumption**: global average grid carbon intensity, clearly
  disclosed.

Where the geographic distribution is not known, Clause 7.4 requires the
assumed value and its basis to be disclosed. The conservative and
global-average options are both ways of meeting that.

## Device mix in practice

Your device distribution comes from analytics. If you have none, an
industry distribution can be used with disclosure; see
[Embodied Emissions: Server and Device](../M/ServerAndClient.md#device-mix)
for sources. The same distribution should drive both `O_client` and
`M_client`, so the two components describe the same population of
devices.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Client-Side+Emissions).

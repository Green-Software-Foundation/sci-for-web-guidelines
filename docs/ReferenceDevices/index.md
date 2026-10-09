---
sidebar_position: 20
title: Reference Devices
---

<!--
Grounded in: proposed spec Clause 7.4 (devices representative of the application's users; basis for device distribution disclosed); Clause 8 item 8 (devices by type, model, operating system and browser version).
Migrated from: original draft §16 (Reference devices: category table, disclosure of make, model, OS and browser version); §4 T.9 (reference device).
-->

**In short:** a reference device is a real phone, tablet or computer you
test on, chosen to stand for the devices your users actually have. Pick
devices across the range your users own, not just your team's own
high-end machines, and record exactly what you tested.

## Choosing devices

Clause 7.4 requires client-side energy to be quantified on, or for,
devices representative of your users. A practical way to do that is to
choose from a grid of device categories and performance classes, guided
by your analytics:

| Category | High-end | Mid-range | Low-end |
| --- | --- | --- | --- |
| Desktop | Modern workstation (6+ cores, dedicated GPU) | Standard desktop (4 cores, integrated graphics) | Budget desktop (2 cores, integrated graphics) |
| Laptop | Performance laptop (MacBook Pro 16-inch class) | Standard laptop (MacBook Air class) | Budget laptop (Chromebook class) |
| Smartphone | Current-generation flagship | Mid-tier smartphone | Budget or older-generation |
| Tablet | iPad Pro class | iPad Air class | Entry-level tablet |

The brand names describe a **class** of device, not a recommendation of a
product. Any device with similar performance fits the cell. The classes
and core counts come from the original draft (§16). *(Device class
examples last reviewed: 2026-10.)*

Some practical points:

- **Weight towards your users.** If most of your traffic is mid-range
  smartphones, test more of those.
- **Do not test only high-end devices.** A test set made up of your
  team's fastest machines is unlikely to represent your users.
- **Cover each major category** you serve. At Entry level, a common
  starting point is one device per major category; at Standard, at least
  two (see [Implementation Tiers and Data Quality](../DataQuality/index.md)).

## What to record

Clause 8 item 8 requires the devices used for client-side quantification
to be disclosed **by type, model, operating system and browser version**.
For example:

```
- type: smartphone
  model: [manufacturer and model]
  os: [operating system and version]
  browser: [browser and version]
  performance_class: mid-range
```

This is what makes a client-side measurement repeatable and lets readers
judge how representative it is.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Reference+Devices).

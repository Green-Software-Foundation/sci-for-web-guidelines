---
sidebar_position: 5
title: Operational Emissions
---

<!--
Grounded in: proposed spec Clause 7.1 (General); Clause 5.1–5.2 (Mandatory and optional components); Clause 11 (Exclusions).
Migrated from: original draft §8.1 (General formula: O decomposition and O = E × I); §18.1 (Market-based measures).
-->

**In short:** operational emissions come from the electricity a web
application uses while it runs: on servers, on users' devices and,
optionally, in the network between them. Each part is the energy used
multiplied by the carbon intensity of the electricity grid that supplied
it.

**Shape:** server emissions + device emissions (+ network emissions, if
reported) = operational emissions.

**Worked:** 300 kg CO2eq (servers) + 150 kg CO2eq (devices) = 450 kg
CO2eq for a month; adding 20 kg CO2eq of network emissions gives 470 kg
for the second, labelled score. *(illustrative placeholder, not a real
measurement)*

**Precise notation:**

```
O = O_server + O_client  [+ O_network, optional]
O_x = E_x × I_x          (E in kWh, I in gCO2eq/kWh, location-based)
```

## The components

- **[Server-side emissions (`O_server`)](./Server.md)**: origin,
  application, database, storage, caching, edge and serverless
  infrastructure, up to the data centre's exit point to the network.
- **[Client-side emissions (`O_client`)](./Client.md)**: rendering and
  running the application on end-user devices.
- **[Network emissions (`O_network`)](./Network.md)**, optional:
  transmitting data from the data centre's exit point to the user's
  device.

Clause 5.1 makes `O_server` and `O_client` mandatory. Clause 5.2 makes
`O_network` optional, and Clause 7.1 requires the score without it always
to be reported. The [Formula Walkthrough](../FormulaWalkthrough.md#why-o_network-is-optional)
explains why.

## Location-based carbon intensity only

Clause 7.1 requires every operational component to use location-based
carbon intensity, and Clause 11 excludes market-based measures. In
practice that means the following never reduce an SCI for Web score:

- carbon offsets or credits;
- renewable energy certificates (RECs) and other energy attribute
  certificates (EACs);
- power purchase agreements used to claim carbon-neutral energy;
- "green hosting" claims based only on renewable energy purchases.

These may be worth reporting elsewhere, but not as a reduction in the
score. Where to find location-based data is covered on
[Carbon Intensity and Data Sources](../DataSources/index.md).

## Third-party services

Third-party operational emissions are not a separate component. They are
counted inside `O_server`, `O_client` or `O_network`, wherever the
service executes, and Clause 7.6 requires each reported operational
component to show first-party and third-party sub-totals. See
[Third-Party Attribution](../ThirdParty/index.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Operational+Emissions).

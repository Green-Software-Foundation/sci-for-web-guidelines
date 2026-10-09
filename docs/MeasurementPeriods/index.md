---
sidebar_position: 16
title: Measurement Periods and Traffic
---

<!--
Grounded in: proposed spec Clause 8 item 9 (measurement period and traffic characterisation); Clause 9 (Comparing an SCI for Web score to a baseline).
Migrated from: original draft §14.1 (Minimum measurement periods, converted to recommendations); §14.2 (Traffic characterisation); §14.3 (Normalisation); §19 (Baseline comparison).
-->

**In short:** measure over long enough to capture how your application is
really used: a full week at the very least, ideally a month or a whole
business cycle. Record what traffic looked like during that time, so that
anyone comparing your scores can tell whether a change came from the
application or from its users.

## How long to measure

The specification sets no minimum period. Clause 8 item 9 requires the
period to be disclosed. The original draft's minimums remain good
recommendations:

| Maturity | Recommended period |
| --- | --- |
| Entry | At least 7 consecutive days |
| Standard | At least 30 consecutive days, or one complete business cycle, whichever is longer |
| Advanced | Continuous measurement, reported monthly or quarterly |

*(Periods from the original draft §14.1; recommendations, not
requirements.)* A week captures weekday and weekend patterns; a month or
business cycle captures billing runs, campaigns and other recurring
peaks. Choose a period that does not cut through an unusual event, or
disclose the event if it does.

## Characterising traffic

Clause 8 item 9 requires a traffic characterisation alongside the period,
including volumes and geographic and device distribution. A useful
characterisation covers:

- **average and peak traffic** levels;
- **distribution**: where users are, and which device types they use;
- **deviation from typical traffic**: was this period normal?
- **seasonal factors**, if any apply.

The same geographic and device distributions feed `I_client`,
`O_client` and `M_client` (see [Client-Side Emissions](../O/Client.md)).

## Comparing against a baseline

When you evaluate an action ("did moving to static rendering help?"),
Clause 9 requires the baseline and the comparison to use the same
boundary, functional unit, component set (including whether `O_network`
is included), data sources and methods. Only the action being evaluated
may differ.

Traffic, however, rarely stays still. Where volumes or patterns differ
between the two periods, Clause 9 requires the normalisation you applied
to be disclosed. Common approaches:

- **Per-unit comparison**: because the score is already per functional
  unit, many volume changes cancel out. Check that idle capacity or fixed
  overheads have not distorted it.
- **Mix adjustment**: if the device or geographic mix shifted, recalculate
  one period with the other period's mix to separate the effect of the
  action from the effect of the mix.
- **Matched periods**: compare like with like (the same weeks of the
  business cycle, or periods with similar traffic).

We also recommend that baseline reports document what changed between
the two measurements, and disclose both scores with their methods.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Measurement+Periods+and+Traffic).

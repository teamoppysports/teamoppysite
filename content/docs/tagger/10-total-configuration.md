---
title: Totals Configuration
description: Configure totals that can be used in Comparison Tables and Info Cards
---

## Totals

Tagger has a simple yet very flexible way to configure totals for display in the Dashboard. You can create simple Count Totals or Calulated Totals which are based off of existing Count Totals or other Calculated Totals. This mechanism allows for more complex Total calculations.


### Count Totals

Count Totals as mentioned as simple counts of Events and Linked Events where applicable.

<ul>

#### Name

The name of the total.

#### Event Team

The Event team that triggered the event.

#### Event

The Event that this total is based on.

#### Event Zone(s)

Optionally setone or more zone(s) to filter the events on.

#### Event Label Option Filters

Set the Event Label Options to filter the total on.

#### Event Link

Set this if you want the total to be based on a linked event.

#### Linked To Event Team

The Team of the target linked Event.

#### Linked To Events

The target Linked To Events. Can choose multiple.

#### Linked To Event Zone(s)

Optionally setone or more zone(s) to filter the linked events on.

</ul>

### Calculated Totals

Calculated Totals allow you to configure more complex totals. You apply 2 operators and an operand to the total. The operators can be a Count Total or another Calculated Total. So you can build up complex calculations over a number of Calculated Totals.

<ul>


#### Name

Set the name for the calculated total.

#### Operand 1

Select from exiting Count Totals or other Calculated Totals.

#### Operator

The following operators are available to select:
- '+' - Plus
- '-' - Minus
- '*' - Multiply
- '/' - Divide
- '%' - Percentage

#### Operand 2

Select from exiting Count Totals or other Calculated Totals.

</ul>
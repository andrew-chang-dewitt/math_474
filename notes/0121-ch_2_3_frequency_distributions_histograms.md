---
title: "Probability & Statistics: frequency distributions/histograms & box plots (&sect;'s 2.3, & 2.4)"
description: "using distributions to understand & visualize datasets; helping to model a population"
keywords:
  - "box plots"
  - "histograms"
  - "distributions"
  - "descriptive statistics"
  - "data analysis"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-21T12:00-06:00"
---

recall the definition from [last lecture](../0114-ch_2_1_numerical_summaries/):

> _**def: descriptive statistics**_&mdash;organizing & summarizing data
> using numerical & graphical (visual) methods

here we continue this, now focusing on the _graphical_ part.

## &sect; 2.3: frequency distributions & histograms

a visualzation of a _**frequency distribution**_.

created by the following steps, letting $n$ denotes the number of observations (datapoints):

1. divide the range of data into _class internals_/_bins_/_cells_. typ. choosing $n$ s.t. $n \approx \sqrt{n}.
2. determine freq., $f$ in each bin, or _relative_ freq via $\frac{f}{n}$
3. create bars w/ height equivalent to frequency/relative frequency

an examples:

a histogram showing frequency (& relative frequency) on the y-axis &
compressive strength in psi on the x-axis. exemplifies the _**normal
distribution**_ (covered later).

```no-linenums
25 (0.3125) -|
             |
             |                 +---+
20 (0.2500) -|                 |   |
             |                 |   +---+
             |                 |   |   |
15 (0.1895) -|             +---+   |   |
             |             |   |   |   |
             |             |   |   |   |
10 (0.1250) -|             |   |   |   +---+
             |             |   |   |   |   |
             |         +---+   |   |   |   |
 5 (0.0625) -|         |   |   |   |   |   |
             |     +---+   |   |   |   |   +---+
             | +---+   |   |   |   |   |   |   +---+
 0 (0.0000) -|-|---|---|---|---|---|---|---|---|---|---
               70  90  110 130 150 170 190 210 230 250
```

histograms can be used to help classify distributions by their shape:

```no-linenums
                            .
                           / \
                 _________/   \_________
                /                       \
            symmetric               asymmetric
              / \                       / \
         ____/   \____             ____/   \____
        /             \           /             \
    unimodal       bimodal     negative       positive
                              (left-skewed)  (right-skewed)

       |           |   |                |     |
      |||         ||| |||              ||     ||
     ||||         ||||||||           ||||     ||||
    ||||||       ||||||||||       |||||||     |||||||
```

for each of these classifications, the following relations hold true:

- symmetric & unimodal: $\text{mean} \approx \text{median} \approx \text{mode}$
- symmetric & bimodal: $\text{mode}_1 < \text{mean} \approx \text{median} < \text{mode}_2$
- left-skew (negative): $\text{mean} < \text{median} < \text{mode}$
- right-skew (positive): $\text{mode} < \text{median} < \text{mean}$

occasionally, using variable (or unequal) bin widths can be useful; such as when data has several extreme outliers

for example, given data $\{30, 32, 34, 35, 37, 38, 39, 40, 42, 45, 120, 200\}$, a histogram w/ equal bin widths looks like:

```no-linenums
10 - +---+
   | |   |
 8 - |   |
   | |   |
 6 - |   |
   | |   |
 4 - |   |
   | |   |
 2 - |   |
   | |   |   +---+   +---+
 0 --|---|---|---|---|---|
     0   50  100 150 200 250
```

not v useful.

to adjust, use narrower bins in highly populated region w/ wide bins for outliers, computing bin height as $\frac{frequency}{\text{bin width}}, which makes each region's _area_ (not height) proportional to the bin's frequency:

```no-linenums
1.0 -   +-+
    |   | |
    |   | |
    |   | |
0.8 -   | |
    |   | |
    |   | |
    |   | |
0.6 - +-+ |
    | | | |
    | | | |
    | | | |
0.4 - | | |
    | | | |
    | | | +-+
    | | | | |
0.2 - | | | |
    | | | | |
    | | | | |
    | | | | +-----------------------+
  0 |-|-|-|-|-----|-----|-----|-----|
      0     50    100   150   200   250
```

## &sect; 2.4: box plots

_**def:**_&mdash;an ordering of data from smallest to largest, divided
into 4 equal parts at 3 points (called _**quartiles**_).

we define the quartiles as...

1. $q_1$: the lower quartile, has 25% of data below it
2. $q_2$: the median quartile, has 50% of data below it
3. $q_3$: the upper quartile, has 75% of data below it

we can further subdivide a dataset into _**quantiles**_, defined as a
value, $nk\%$ where n is some percentage. e.g. the $100kth$ quantile has $100k\%$ of data below it.

the _**interquartile range**_, defined as $\text{IQR} = q_3 - q_1$, is
a measure of variability.

we construct a box (or box & whisker) plot using these values (plus outliers):

```no-linenums
   \-
   |
   |
1.5 IQR
   |     *     <-\
   |              >-- outliers
   \-    *     <-/
   |                  whiskers extend to largest
   |    ___    <----- (& smallest) data points
1.5 IQR  |            w/in 1.5 IQR from third
   |     |            (& first) quartile
   |     |
   \-  +-+-+   <----- third quartile
   |   |   |
   |   +---+   <----- second quartile
  IQR  |   |
   |   |   |
   \-  +-+-+   <----- first quartile
   |     |
   |     |
1.5 IQR  |
   |    _|_
   |
   \-
   |     *     <-\
   |     *     <--+-- outliers: data points past
1.5 IQR               the whisker, but w/in
   |                  3 IQR of box edge
   |
   \-
   |
   |     *     <---- extreme outlier: data point
1.5 IQR              more than 3 IQR from
   |                 box edge
   |
   \-
```

---
title: "Probability & Statistics: numerical summaries of data (&sect; 2.1)"
description: "Notes on exploratory data analysis, a set of techniques where statistic are use to help describe data in meaningful ways."
keywords:
  - "descriptive statistics"
  - "data analysis"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-14T12:00-06:00"
  updated: "2026-01-21T11:25-06:00"
---

_**def: descriptive statistics**_&mdash;organizing & summarizing data using numerical & graphical (visual) methods

## sample mean, $\bar{x}$

if we have a sample $S$ containing $n$ observations ( $S := \{x_1, x_2, ..., x_n\}$ ),
the _**sample mean**_ is found as

$$
\begin{align}
\bar{x} = \frac{1}{n} \sum^n_{i \coloneqq 1} x_i
\end{align}
$$

a physical example: a number representing the "balance point", e.g. if
each observation is a 1-pound mass at some position along a beam, then
placing a fulcrum at $\bar{x}$ would balance the weights.
assuming we have good sampling methods, we can use $\bar{x}$ as a reasonable approximation of the _**population mean**_.

## sample variance, $s^2$, & standard deviation, $s$

to tell how much our data changes across datapoints, we use notions of
_**variance**_&mdash;the measure of variability, or _deviation from the
mean_. two key measures of variance are _sample variance_ & \_sample
standard deviation\_.

for `n` observations, $x_1, x_2, ..., x_n$, the _**sample variance**_ is found as

$$
\begin{align}
s^2 = \frac{1}{n - 1} \sum^n_{i \coloneqq 1} (x_i - \bar{x})^2
\end{align}
$$

the sample _**standard deviation**_ is simply $s$, e.g.

$$
\begin{align}
s = \sqrt{s^2}
\end{align}
$$

alternatively, $s^2$ can be found by expanding the summation term, $(x_i - \bar{x})^2$ & substituting the definition of $\bar{x}$

$$
\begin{aligned}
s^2 &= \frac{1}{n - 1} \sum^n_{i \coloneqq 1} (x_i^2 - 2x_i \bar{x} + \bar{x}^2) \\
    &= \frac{1}{n - 1} \sum^n_{i \coloneqq 1} x_i^2
       - 2 \bar{x} \sum^n_{i \coloneqq 1} x_i
       + n \bar{x}^2 \\
    &= \frac{1}{n - 1} \sum^n_{i \coloneqq 1} x_i^2
       - \frac{2}{n} (\sum^n_{i \coloneqq 1} x_i)^2
       + \frac{n}{n^2} (\sum^n_{i \coloneqq 1} x_i)^2
       && \textit{\{2.1\}} \\
s^2 &= \frac{1}{n - 1} \sum^n_{i \coloneqq 1} x_i^2
       - \frac{1}{n} (\sum^n_{i \coloneqq 1} x_i)^2
       \space\blacksquare
       && \textit{simplify} \\
\end{aligned}
$$

which is also written in terms of expectation of a random variable as

$$
\begin{aligned}
\text{Var}(X) &= \mathbb{E}[(X - \mu)^2]
\end{aligned}
$$

_sample variance_ is an estimate of _**population variance**_, $\sigma^2$. for a population consisting of $N$ equally likely outcomes

$$
\begin{aligned}
\sigma^2 &= \frac{1}{N} \sum^N_{i \coloneqq 1} (x_i - \mu)^2, \text{ where}
         & \mu \coloneqq \text{population mean}
\end{aligned}
$$

note the difference in the leading terms for the definitions of $s^2$
& $\sigma^2$: $\frac{1}{n - 1}$ vs $\frac{1}{N}$. why does sample variance
require subtracting 1 from our size, while population variance does not?

two explanations:

1. we don't know $\mu$ in practice. if we knew it, then we _could_
   define sample variance
   as $s^2 = \frac{1}{n} \sum^n_{i \coloneqq 1} (x_i - \mu)^2$
   w/out any problems. but since we don't know $\mu$, we
   use $\bar{x}$. because $\bar{x}$ is based on observations $x_i$ &
   these observations tend to be closer to $\bar{x}$ than to $\mu$, we
   must compensate by using $n-1$ as our divisor. using $n$ gives a
   value that is _biased_ (smaller than the true variance
   of $\sigma^2$ ).
2. the set of $n$ deviations, $x_1 - \bar{x}, x_2 - \bar{x}, ..., x_n - \bar{x}$
   aways sums to `0`. thus, there are only `n - 1` ways to separate them

### example:

given $x = \{ 12.6, 12.9, 13.4, 12.3, 13.6, 13.5, 12.6, 13.1 \}$, find $s^2$:

using a table:

| i         | $x_i$ | $x_i - \bar x$ | $(x_i - \bar x)^2$ |
| --------- | ----- | -------------- | ------------------ |
| 1         | 12.6  | -0.4           | 0.16               |
| 2         | 12.9  | -0.1           | 0.01               |
| 3         | 13.4  | 0.4            | 0.16               |
| 4         | 12.3  | -0.7           | 0.49               |
| 5         | 13.6  | 0.6            | 0.36               |
| 6         | 13.5  | 0.5            | 0.25               |
| 7         | 12.6  | -0.4           | 0.16               |
| 8         | 13.1  | 0.1            | 0.01               |
| **total** |       | **0**          | **1.6**            |

or w/ the formula:

$$
\begin{aligned}
s^2 &= \frac{1}{n - 1} \sum^n_{i \coloneqq 1} (x_i - \bar{x})^2 && \textit{\{2\}} \\
    &= \frac{1}{8 - 1} \sum^8_{i \coloneqq 1} (x_i - \bar{x})^2 \\
    &= \frac{1}{7} 1.6 \\
s^2 &\approx 0.229 \space_\blacksquare
\end{aligned}
$$

## sample range, $r$

for $n$ observations in a sample $x_1, x_2, ..., x_n$, the _**sample
range**_ is

$$
\begin{align}
r &= max(x_i) - min(x_i)
\end{align}
$$

## sample median

for sample $x_1, x_2, ..., x_n$, the _**sample median**_,or central
value, is the point at which exactly half the data lies below it &
exactly half lies above it

$$
\begin{align}
x_{med} &= \Bigg\lbrace\begin{aligned}
             & x_{\Big(\Big\lfloor\frac{n}{2}\Big\rfloor + 1\Big)}, & \text{if } & |X| \mod 2 \equiv 0 \\
             & \frac{
                   x_{\frac{n}{2}}
                 + x_{\frac{n}{2} + 1}
               }{ 2 }, & \text{else} &
           \end{aligned}, &&
\end{align}
$$

unlike $\bar{x}$, sample median isn't susceptible to bias introduced by
outliers, making it often a better measure of the "typical" value in a
sample.

## sample mode

the most frequently occurring value is known as the _**sample mode**_.

> [!NOTE]
>
> there can be more than one mode! if there are two modes, the _distribution_ is known as _**bimodal**_.

the sample mean, median, & mode are all measures of _**central tendency**_.

---
title: "Probability & Statistics: some probability distributions (&sect;'s 4.5, & 4.7)"
description: "Coverage of the binomial & hypergeometric distributuions."
keywords:
  - "hypergeometric distribution"
  - "binomial distribution"
  - "probability distribution"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-02-16T11:25-06:00"
---

## agenda

- &sect; 4.5: binomial distribution
- &sect; 4.7: hypergeometric distribution

## &sect; 4.5: binomial distribution

many RVs can be thought of as a set of repeated, independent trials, each /w two outcomes (typ. labeled "success" & "failure").

> [!ASIDE]
>
> this type of experiment is called a _**Bernoulli trial**_

:::

given a random experiment consisting of $n$ repetitions & an RV, $X$,
representing the # of trials resulting in success, it fits a _**binomial
distribution**_ if the following are true:

1. each trial is independent
2. each trial has only 2 outcomes (success, failure)
3. probability of success (denoted as little p&mdash; $p$ ) in each trial
   remains constant

the pmf of a binomial distribution can always be calculated as:

$$
\begin{aligned}
f(x) = \mathbb{P}(X = x) = \begin{pmatrix} n \\ x \end{pmatrix} p^x (1 - p)^{n - x}, x = 0, 1, ..., n
\tag{4.5.1}
\end{aligned}
$$

as you might expect, if we sum a pmf $f(x)$ for all $x$ in $X$ we always get 1:

$$
\begin{aligned}
\sum_{x=0}^n f(x) &= \sum_{x=0}^n \begin{pmatrix} n \\ x \end{pmatrix} p^x (1 - p)^{n - x} \\
                  &= (p + (1 - p))^n \\
                  &= 1^n \\
                  &= 1 \space_\blacksquare \\
\end{aligned}
$$

:::

> [!ASIDE]
>
> **example:**
>
> <details>
>   <summary>
>
> Each water sample has 10% chance of being polluted. Assume that sampels are independent. Find prob that in the next 18 samples, exactly 2 are polluted:
>
>   </summary>
>
> $$
> \begin{aligned}
> X &\coloneqq \text{num. samples polluted in next 18} \\
> \\
> \mathbb(X = 2) &= \begin{pmatrix} 18 \\ 2 \end{pmatrix} 0.1^2 (0.9)^{18 - 2} &&
>   \htmlClass{hljs-comment}{\textit{// by 4.5.1}} \\
>                &= \frac{18!}{2! (18 - 2)!} 0.1^2 (0.9)^{18 - 2} \\
>                &= \frac{18!}{2! (16)!} 0.1^2 (0.9)^{16} \\
>                &= \frac{18 \cdot 17}{2 \cdot 1} 0.1^2 (0.9)^{16} \\
>                &= 153 \cdot 0.01 \cdot (0.9)^{16} \\
>                &\approx 0.284 \space_\blacksquare
> \end{aligned}
> $$
>
> </details>

because the pmf is always fitting a formula (4.5.1), some measures of a
binomial distribution can always be found by the same formulas as well:

- _**mean**_

  $$
  \begin{aligned}
  \mu &= \mathbb{E}[X] = np, \;\text{where} \\
      &\quad n \text{ is the number of trials, \&} \\
      &\quad p \text{ is the probability of success} \tag{4.5.2}
  \end{aligned}
  $$

  proof: because a "binomial rv is the _sum of independent Bernoulli rvs_"

  $$
  \begin{alignat}{4}
  &\quad\quad\;\;\,     X_i &\coloneqq&\, \begin{cases}
                                         1, &\text{if } i^{\text{th}} \text{ trial is successful}, \\
                                         0, &\text{otherwise}
                                       \end{cases} \tag{4.5.3} \\
  &                         &         &\quad\quad \text{for}\space i = 1, 2, ..., n &&\quad
    \htmlClass{hljs-comment}{\textit{// $X_i$ as a Bernoulli rv}} \tag{4.5.4} \\
  &\implies               X &\coloneqq&\, \sum_{i=1}^n X_i &&\quad
    \htmlClass{hljs-comment}{\textit{// $X$ as a sum of Bernoulli rv; i.e. a binomial rv}} \notag \\
  &\implies \mathbb{E}[X_i] &=&\, 1 \cdot p + 0(1 - p) = p &&\quad
    \htmlClass{hljs-comment}{\textit{// the expectation of a Bernoulli rv is just $p$}} \notag \\
  &\implies \mathbb{E}[X]   &=&\, \mathbb{E}\bigg[ \sum_{i=1}^n X_i \bigg] &&\quad
    \htmlClass{hljs-comment}{\textit{// an expectation of a sum of rvs...}} \notag \\
  &                         &=&\, \sum_{i=1}^n \mathbb{E}[X_i] &&\quad
    \htmlClass{hljs-comment}{\textit{// ...is equiv. the sum of expectations of rvs}} \notag \\
  &                         &=&\, np \space_\blacksquare \notag
  \end{alignat}
  $$

- _**variance**_

  $$
  \begin{aligned}
  \sigma^2 &= \mathbb{E}[(X - \mu)^2] = np(1 - p), \;\text{where} \\
           &\quad n \text{ is the number of trials, \&} \\
           &\quad p \text{ is the probability of success} \tag{4.5.5}
  \end{aligned}
  $$

  proof: similar to that of the mean

  $$
  \begin{alignat}{5}
  &\quad\quad\;\;\, (4.5.3) &\land& (4.5.4) \\
  &\implies Var(X_i) &=&\, \mathbb{E}\bigg[ (X_i - p)^2 \bigg] = p(1 - p) &&\quad
    \htmlClass{hljs-comment}{\textit{// the variance of a Bernoulli rv is multiple of both probabilities}} \notag \\
  &\implies Var(X)   &=&\, Var\bigg( \sum_{i=1}^n X_i \bigg) &&\quad
    \htmlClass{hljs-comment}{\textit{// the variance of a sum of rvs...}} \notag \\
  &                  &=&\, \sum_{i=1}^n Var(X_i) &&\quad
    \htmlClass{hljs-comment}{\textit{// ...is equiv. the sum of variances of rvs}} \notag \\
  &                  &=&\, np(1 - p) \space_\blacksquare \notag
  \end{alignat}
  $$




## &sect; 4.7: hypergeometric distribution

> [!TODO]

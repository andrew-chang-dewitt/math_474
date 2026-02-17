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

for a random experiment consisting of $n$ repetitions s.t. each trial is independent & has only 2 outcomes (success, failure) & probability of success (denoted as little p&mdash; $p$ ) in each trial remains constant, where we call the RV repr the # of trials resulting in success $X$, we can find the pmf as follows:

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
>   \htmlClass{hljs-comment}{\textit{by 4.5.1}} \\
>                &= \frac{18!}{2! (18 - 2)!} 0.1^2 (0.9)^{18 - 2} \\
>                &= \frac{18!}{2! (16)!} 0.1^2 (0.9)^{16} \\
>                &= \frac{18 \cdot 17}{2 \cdot 1} 0.1^2 (0.9)^{16} \\
>                &= 153 \cdot 0.01 \cdot (0.9)^{16} \\
>                &\approx 0.284 \space_\blacksquare
> \end{aligned}
> $$
>
> </details>

> [!TODO]

## &sect; 4.7: hypergeometric distribution

> [!TODO]

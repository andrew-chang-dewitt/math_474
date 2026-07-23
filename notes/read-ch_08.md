## &sect; 8.1 random sampling

### definition 8.1, population

> [!IMPORTANT]
>
> A **population** consists of the totality of the observations with which we
> are concerned.

Frames the target of any inference — whether finite (a batch of parts) or
effectively infinite (an ongoing process). Everything that follows (sample
mean, sampling distributions, hypothesis tests) exists to say something
about this population without observing all of it.

### definition 8.2, sample

> [!IMPORTANT]
>
> A **sample** is a subset of a population.

Used whenever observing the whole population is impossible or
impractical; validity of any inference depends on the sample being
representative (random), not just convenient.

### definition 8.3, random sample

> [!IMPORTANT]
>
> Let $X_1, X_2, \ldots, X_n$ be `n` independent random variables, each
> having the same probability distribution $f(x)$. Define $X_1, \ldots, X_n$
> to be a **random sample** of size `n` from the population $f(x)$ and write
> its joint probability distribution as
>
> $$
> f(x_1, x_2, \ldots, x_n) = f(x_1)f(x_2) \cdots f(x_n)
> $$

The formal justification for treating repeated measurements as iid
draws — needed before any sampling-distribution result (CLT, $\chi^2$,
`t`, `F`) can be invoked.

## &sect; 8.2 some important statistics

### definition 8.4, statistic

> [!IMPORTANT]
>
> Any function of the random variables constituting a random sample is
> called a **statistic**.

Distinguishes the fixed, unknown population parameter (`μ`) from the
random, sample-computed quantity ( $\bar{X}$ ) used to estimate it —
a statistic has its own probability distribution.

### location & variability statistics (sample mean, median, mode, variance, sd, range)

> [!IMPORTANT]
>
> For a random sample $X_1, \ldots, X_n$:
>
> $$
> \bar{X} = \frac{1}{n}\sum_{i=1}^n X_i, \qquad
> \tilde{x} = \begin{cases}
>               x_{(n+1)/2}, &\text{if } n \text{ odd}, \\
>               \frac12(x_{n/2} + x_{n/2+1}), &\text{if } n \text{ even}.
>             \end{cases}
> $$
>
> $$
> S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2, \qquad
> S = \sqrt{S^2}, \qquad
> R = X_{\max} - X_{\min}
> $$

These are the sample-level counterparts of the population `μ` and
`σ²` introduced in Chapter 4/1 — the raw material every later
sampling-distribution result (this chapter) and every estimator/test
(Chapters 9-10) is built from.

### theorem 8.1, computational form of the sample variance

> [!IMPORTANT]
>
> If $S^2$ is the variance of a random sample of size `n`,
>
> $$
> S^2 = \frac{1}{n(n-1)}\left[n\sum_{i=1}^n X_i^2 - \left(\sum_{i=1}^n X_i\right)^2\right]
> $$

Avoids computing $\bar{X}$ first — useful for hand/quick calculation of $s^2$ directly from $\sum x_i$ and $\sum x_i^2$.

## &sect; 8.3 sampling distributions

### definition 8.5, sampling distribution

> [!IMPORTANT]
>
> The probability distribution of a statistic is called a **sampling
> distribution**.

The central object of this chapter: knowing the sampling distribution of $\bar{X}$ or $S^2$ is what lets sample data support or refute a claim about `μ` or `σ²` (the machinery behind all of Chapters 9-10).

## &sect; 8.4 sampling distribution of means and the central limit theorem

### theorem 8.2, central limit theorem

> [!IMPORTANT]
>
> If $\bar{X}$ is the mean of a random sample of size `n` from a
> population with mean `μ` and finite variance $\sigma^2$, the limiting
> distribution of
>
> $$
> Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}}
> $$
>
> as $n \to \infty$ is the standard normal $n(z; 0, 1)$.

The single most-used result for inference on a mean: lets you compute $P(\bar{X} \in \text{interval})$ for _any_ population shape once `n` is large (rule of thumb $n \ge 30$ ), or exactly for any `n` if the population itself is normal.

### theorem 8.3, sampling distribution of the difference of two means

> [!IMPORTANT]
>
> If independent samples of size $n_1, n_2$ are drawn from two populations
> with means $\mu_1, \mu_2$ and variances $\sigma_1^2, \sigma_2^2$, then $\bar{X}_1 - \bar{X}_2$
> is approximately normal with
>
> $$
> \mu_{\bar{X}_1 - \bar{X}_2} = \mu_1 - \mu_2, \qquad
> \sigma^2_{\bar{X}_1 - \bar{X}_2} = \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}
> $$
>
> so that
>
> $$
> Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}}
> $$
>
> is approximately standard normal.

Two-sample analog of the CLT — used to test/estimate whether two
population means differ (e.g. comparing two manufacturing processes)
when both $\sigma_1, \sigma_2$ are known.

## &sect; 8.5 sampling distribution of $S^2$

### theorem 8.4, sampling distribution of $(n-1)S^2/\sigma^2$

> [!IMPORTANT]
>
> If $S^2$ is the variance of a random sample of size `n` from a normal
> population with variance $\sigma^2$, then
>
> $$
> \chi^2 = \frac{(n-1)S^2}{\sigma^2} = \sum_{i=1}^n \frac{(X_i - \bar{X})^2}{\sigma^2}
> $$
>
> has a chi-squared distribution with $v = n - 1$ degrees of freedom.

Lets you make probability statements about the sample variance $s^2$
relative to an assumed $\sigma^2$ — the basis for confidence
intervals/tests on a single variance in Chapters 9-10. One degree of
freedom is spent estimating `μ` via $\bar{X}$.

## &sect; 8.6 t-distribution

### theorem 8.5, the t-distribution

> [!IMPORTANT]
>
> Let `Z` be standard normal and `V` chi-squared with `v` degrees of
> freedom, independent. Then
>
> $$
> T = \frac{Z}{\sqrt{V/v}}
> $$
>
> has density
>
> $$
> h(t) = \frac{\Gamma[(v+1)/2]}{\Gamma(v/2)\sqrt{\pi v}} \left(1 + \frac{t^2}{v}\right)^{-(v+1)/2}, \quad -\infty < t < \infty
> $$
>
> — the **t-distribution** with `v` degrees of freedom.

Defines the shape (symmetric, heavier tails than normal, `v`-dependent
variance) underlying inference on `μ` when `σ` is unknown and estimated
by `S`. Approaches $N(0,1)$ as $v \to \infty$.

### corollary 8.1, t-statistic for a normal sample mean with unknown $\sigma$

> [!IMPORTANT]
>
> If $X_1, \ldots, X_n$ are iid normal with mean `μ` and standard
> deviation `σ`, then
>
> $$
> T = \frac{\bar{X} - \mu}{S/\sqrt{n}}
> $$
>
> has a t-distribution with $v = n - 1$ degrees of freedom.

The workhorse statistic for small-sample inference on a single mean
(confidence intervals & hypothesis tests, Chapters 9-10) — replaces `σ`
with `S` at the cost of switching from `Z` to `T`. Safe to use `Z`
instead once $n \ge 30$.

## &sect; 8.7 f-distribution

### theorem 8.6, the f-distribution

> [!IMPORTANT]
>
> If `U`, `V` are independent chi-squared with $v_1, v_2$ degrees of
> freedom, then $F = \frac{U/v_1}{V/v_2}$ has density
>
> $$
> h(f) = \frac{\Gamma[(v_1+v_2)/2](v_1/v_2)^{v_1/2}}{\Gamma(v_1/2)\Gamma(v_2/2)} \cdot \frac{f^{(v_1/2)-1}}{(1+v_1 f/v_2)^{(v_1+v_2)/2}}, \quad f > 0
> $$
>
> — the **F-distribution** ("variance ratio distribution") with $v_1, v_2$
> degrees of freedom (order matters).

Foundation for comparing two variances, and later (analysis of variance,
Chapters 13-15) for comparing more than two means via ratios of
variability.

### theorem 8.7, reciprocal relation for f-tail values

> [!IMPORTANT]
>
> Writing $f_\alpha(v_1, v_2)$ for the upper $\alpha$ point,
>
> $$
> f_{1-\alpha}(v_1, v_2) = \frac{1}{f_\alpha(v_2, v_1)}
> $$

`F`-tables (e.g. Table A.6) only list upper-tail values ( $\alpha = 0.05, 0.01$ ) — this lets you recover the lower-tail values $f_{0.95}$, $f_{0.99}$ needed for two-sided intervals/tests without a separate table.

### theorem 8.8, f-statistic for the ratio of two sample variances

> [!IMPORTANT]
>
> If $S_1^2, S_2^2$ are variances of independent random samples of size $n_1, n_2$
> from normal populations with variances $\sigma_1^2, \sigma_2^2$, then
>
> $$
> F = \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} = \frac{\sigma_2^2 S_1^2}{\sigma_1^2 S_2^2}
> $$
>
> has an F-distribution with $v_1 = n_1 - 1$, $v_2 = n_2 - 1$ degrees of
> freedom.

Directly enables tests/confidence intervals comparing two population
variances (e.g. "are two processes equally variable?") — Chapters 9-10
use this exact statistic.

## &sect; 8.8 quantile and probability plots

### definition 8.6, quantile

> [!IMPORTANT]
>
> A **quantile** of a sample, $q(f)$, is a value for which a specified
> fraction `f` of the data values is less than or equal to $q(f)$.

Generalizes median/quartiles ( $q(0.5)$, $q(0.75)$, $q(0.25)$ ) to any
fraction — the basis of the quantile plot, a quick visual check of a
sample's spread and density without assuming a distributional form.

### definition 8.7, normal quantile-quantile plot

> [!IMPORTANT]
>
> The **normal quantile-quantile plot** is a plot of $y_{(i)}$ (ordered
> observations) against $q_{0,1}(f_i)$, where
>
> $$
> f_i = \frac{i - 3/8}{n + 1/4}
> $$

A near-straight-line plot supports the assumption of normality
(intercept $\approx \mu$, slope $\approx \sigma$ ) — a graphical
diagnostic used before applying any of the normal-theory results above
(`t`, $\chi^2$, `F`) or the formal goodness-of-fit tests of Chapter 10.

## &sect; 8.1 random sampling

Population vs. sample, and the formal definition of a random sample as
`n` iid draws — the basis every later sampling-distribution result
depends on.

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

**Example.** Selecting `n = 8` storage batteries at random from a manufacturing
process that has held the same specification throughout, and recording each
battery's length of life as $x_1, \ldots, x_8$, gives the values of a random sample $X_1, \ldots, X_8$.
Assuming the population of battery lives is normal, each $X_i$
has that same normal distribution as the population.

## &sect; 8.2 some important statistics

Defines "statistic" and lists the standard sample-level summaries
(mean, median, variance, sd, range) plus a computational shortcut for
`S²`.

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

**Example (mode).** The data set $0.32, 0.53, 0.28, 0.37, 0.47, 0.43, 0.36, 0.42, 0.38, 0.43$
has sample mode $0.43$, since it occurs more than any other value.

**Example (variance).** Coffee prices at 4 grocery stores increased 12, 15, 17, and
20 cents for a 1-lb bag. Then $\bar x = (12+15+17+20)/4 = 16$ cents, and

$$
s^2 = \frac{(12-16)^2 + (15-16)^2 + (17-16)^2 + (20-16)^2}{3} = \frac{34}{3}.
$$

### theorem 8.1, computational form of the sample variance

> [!IMPORTANT]
>
> If $S^2$ is the variance of a random sample of size `n`,
>
> $$
> S^2 = \frac{1}{n(n-1)}\left[n\sum_{i=1}^n X_i^2 - \left(\sum_{i=1}^n X_i\right)^2\right]
> $$

Avoids computing $\bar{X}$ first — useful for hand/quick calculation of $s^2$ directly from $\sum x_i$ and $\sum x_i^2$.

**Example.** For the sample $3, 4, 5, 6, 6, 7$ (trout caught by 6 fishermen), $\sum x_i^2 = 171$, $\sum x_i = 31$, $n = 6$, so

$$
s^2 = \frac{1}{(6)(5)}\left[(6)(171) - (31)^2\right] = \frac{13}{6},
$$

giving $s = \sqrt{13/6} \approx 1.47$ and range $R = 7 - 3 = 4$.

## &sect; 8.3 sampling distributions

Names the chapter's central object: a statistic's own probability
distribution, which is what lets sample data support inference about
a population parameter.

### definition 8.5, sampling distribution

> [!IMPORTANT]
>
> The probability distribution of a statistic is called a **sampling
> distribution**.

The central object of this chapter: knowing the sampling distribution of $\bar{X}$ or $S^2$ is what lets sample data support or refute a claim about `μ` or `σ²` (the machinery behind all of Chapters 9-10).

## &sect; 8.4 sampling distribution of means and the central limit theorem

The Central Limit Theorem: $\bar{X}$ is approximately normal for large
`n` regardless of the population's shape, plus its two-sample
extension for $\bar{X}_1 - \bar{X}_2$.

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

**Example.** Light bulbs from a certain firm have lifetimes approximately normal
with $\mu = 800$ hours, $\sigma = 40$ hours. For a random sample of $n = 16$ bulbs, $\mu_{\bar X} = 800$
and $\sigma_{\bar X} = 40/\sqrt{16} = 10$, so

$$
P(\bar X < 775) = P\!\left(Z < \frac{775-800}{10}\right) = P(Z < -2.5) = 0.0062.
$$

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

**Example.** Manufacturer A's picture tubes have $\mu_1 = 6.5$ years, $\sigma_1 = 0.9$ year, and manufacturer B's have $\mu_2 = 6.0$ years, $\sigma_2 = 0.8$ year. For samples of $n_1 = 36$ from A and $n_2 = 49$ from B,

$$
\mu_{\bar X_1 - \bar X_2} = 0.5, \qquad
\sigma_{\bar X_1 - \bar X_2} = \sqrt{0.81/36 + 0.64/49} = 0.189,
$$

so $P(\bar X_1 - \bar X_2 \ge 1.0) = P(Z > (1.0-0.5)/0.189) = P(Z > 2.65) = 0.0040$.

## &sect; 8.5 sampling distribution of $S^2$

Under normality, $(n-1)S^2/\sigma^2$ has a chi-squared distribution —
the basis for variance CIs/tests in Chapters 9-10.

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

**Example.** A car-battery maker claims lifetimes average 3 years with `σ = 1`
year. Five batteries last 1.9, 2.4, 3.0, 3.5, 4.2 years, giving $s^2 = 0.815$ (via
theorem 8.1), so

$$
\chi^2 = \frac{(4)(0.815)}{1} = 3.26,
$$

a value with $v = 4$ degrees of freedom. Since 95% of that $\chi^2$ distribution
falls between 0.484 and 11.143, this is a reasonable value, and the maker has no
reason to doubt $\sigma = 1$ year.

## &sect; 8.6 t-distribution

Defines the t-distribution, which replaces `Z` with `T = (X̄-μ)/(S/√n)`
for small-sample inference on a mean when `σ` is unknown.

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

**Example.** The `t`-value with $v = 14$ leaving an area of 0.025 to the left (0.975 to the right) is $t_{0.975} = -t_{0.025} = -2.145$, using symmetry ( $t_{1-\alpha} = -t_\alpha$ ). Similarly, since $t_{0.05} = 1.761$ and $-t_{0.025} = -2.145$ for $v=14$, $P(-t_{0.025} < T < t_{0.05}) = 1 - 0.05 - 0.025 = 0.925$.

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

**Example.** An engineer claims a batch process yields $\mu = 500$ grams per mL
on average, and will accept the claim if a sample of $n = 25$ batches gives a
`t`-value between $-t_{0.05}$ and $t_{0.05}$ (so between $\pm 1.711$, $v=24$ ). A
sample gives $\bar x = 518$, $s = 40$, so

$$
t = \frac{518 - 500}{40/\sqrt{25}} = 2.25,
$$

well above 1.711 — evidence the process actually yields more than 500 g/mL.

## &sect; 8.7 f-distribution

The F-distribution (ratio of two independent chi-squareds), used to
compare two variances, plus the upper/lower-tail reciprocal relation
needed to read F-tables.

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

**Example.** Since $f_{0.05}(10, 6) = 4.06$ (from Table A.6),

$$
f_{0.95}(6, 10) = \frac{1}{f_{0.05}(10, 6)} = \frac{1}{4.06} = 0.246.
$$

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

Quantiles and the normal Q-Q plot as a visual check of whether a
sample's distribution (esp. normality) matches an assumed shape.

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

**Example.** Density measurements (organisms per square meter) from two
sampling stations in a stream-ecosystem study are plotted on a shared normal
quantile-quantile plot. The plot is far from a single straight line — station 1
shows extra values clustered in both tails — so it's unlikely both samples came
from a common $N(\mu, \sigma)$ distribution.

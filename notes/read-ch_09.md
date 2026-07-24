## &sect; 9.3 classical methods of estimation

Unbiasedness and efficiency: the two criteria used to judge/choose
between competing estimators of a parameter.

### definition 9.1, unbiased estimator

> [!IMPORTANT]
>
> A statistic $\hat\Theta$ is said to be an **unbiased estimator** of the
> parameter `θ` if
>
> $$
> \mu_{\hat\Theta} = E(\hat\Theta) = \theta.
> $$

Use this to check whether an estimator is "right on average" — e.g.
`S²` is unbiased for `σ²` (which is why we divide by `n - 1`, not
`n`), but `S` is a biased estimator of `σ`.

**example 9.1** — show $S^2$ is unbiased for $\sigma^2$. From $\sum(X_i-\bar X)^2 = \sum(X_i-\mu)^2 - n(\bar X-\mu)^2$,

$$
E(S^2) = \frac{1}{n-1}\left[\sum_{i=1}^n E(X_i-\mu)^2 - nE(\bar X-\mu)^2\right] = \frac{1}{n-1}\left[n\sigma^2 - n\frac{\sigma^2}{n}\right] = \sigma^2.
$$

This is exactly why the sample-variance divisor is $n-1$, not `n`.

### definition 9.2, most efficient estimator

> [!IMPORTANT]
>
> If we consider all possible unbiased estimators of some parameter
> `θ`, the one with the smallest variance is called the **most
> efficient estimator** of `θ`.

Use this to choose between competing unbiased estimators (e.g. $\bar X$
vs. the sample median $\tilde X$ for `μ` under normality) — the
smaller-variance one gives estimates that land closer to the true
parameter more consistently.

## &sect; 9.4 single sample: estimating the mean

Confidence intervals for a single mean `μ`, using `z` when `σ` is
known and `t` when it isn't.

### confidence interval on μ, σ² known

> [!IMPORTANT]
>
> If $\bar x$ is the mean of a random sample of size `n` from a
> population with known variance `σ²`, a $100(1-\alpha)\%$ **confidence
> interval** for `μ` is
>
> $$
> \bar x - z_{\alpha/2}\frac{\sigma}{\sqrt n} < \mu < \bar x + z_{\alpha/2}\frac{\sigma}{\sqrt n}
> $$
>
> where $z_{\alpha/2}$ is the `z`-value leaving an area of $\alpha/2$ to
> the right.

Use whenever `σ` is (unrealistically) known and `n` is either large
or the population normal — this is the baseline CI construction every
later variant (unknown `σ`, two samples, proportions) modifies.

**example 9.2** — zinc concentration from `n = 36` river-sample locations has $\bar x = 2.6$ g/mL, $\sigma = 0.3$. With $z_{0.025}=1.96$, the 95% CI is $2.6 \pm 1.96(0.3/\sqrt{36})$, i.e. $2.50 < \mu < 2.70$. With $z_{0.005}=2.575$, the 99% CI is $2.6 \pm 2.575(0.3/\sqrt{36})$, i.e. $2.47 < \mu < 2.73$ — wider, for the higher confidence level.

### theorem 9.1, bound on the error of $\bar x$ as an estimate of μ (σ known)

> [!IMPORTANT]
>
> If $\bar x$ is used as an estimate of `μ`, we can be $100(1-\alpha)\%$
> confident that the error will not exceed
>
> $$
> z_{\alpha/2}\frac{\sigma}{\sqrt n}.
> $$

Use to state a margin of error alongside a point estimate, e.g. "we
are 95% confident $\bar x$ differs from `μ` by less than 0.1."

**example** — continuing example 9.2 ( $\bar x = 2.6$, $\sigma=0.3$, $n=36$ ): we're 95% confident the error is less than $(1.96)(0.3)/\sqrt{36} = 0.1$, and 99% confident it's less than $(2.575)(0.3)/\sqrt{36} = 0.13$.

### theorem 9.2, sample size to bound the error of $\bar x$ (σ known)

> [!IMPORTANT]
>
> If $\bar x$ is used as an estimate of `μ`, we can be $100(1-\alpha)\%$
> confident that the error will not exceed a specified amount `e` when
> the sample size is
>
> $$
> n = \left(\frac{z_{\alpha/2}\sigma}{e}\right)^2.
> $$

Always round `n` up. Use this before collecting data, to plan how
large a sample you need for a target margin of error `e`.

**example 9.3** — how large a sample is needed to be 95% confident the estimate of `μ` in example 9.2 is off by less than 0.05, given $\sigma = 0.3$? $n = \left(\frac{(1.96)(0.3)}{0.05}\right)^2 = 138.3$, so round up: a sample of `139` is needed.

### one-sided confidence bounds on μ, σ² known

> [!IMPORTANT]
>
> If $\bar X$ is the mean of a random sample of size `n` from a
> population with variance `σ²`, the one-sided $100(1-\alpha)\%$
> confidence bounds for `μ` are
>
> $$
> \text{upper: } \bar x + z_\alpha \sigma/\sqrt n, \qquad
> \text{lower: } \bar x - z_\alpha \sigma/\sqrt n.
> $$

Use when only one direction matters (e.g. a worst-case lower bound on
strength, or an upper bound on contaminant concentration) instead of
a two-sided interval.

**example 9.4** — 25 subjects have reaction times with $\bar x = 6.2$ sec, assumed variance $\sigma^2 = 4$, normal population. The upper 95% bound is $\bar x + z_\alpha \sigma/\sqrt n = 6.2 + 1.645\sqrt{4/25} = 6.858$ seconds — 95% confident the mean reaction time is less than 6.858 seconds.

### confidence interval on μ, σ² unknown

> [!IMPORTANT]
>
> If $\bar x$ and `s` are the mean and standard deviation of a random
> sample from a normal population with unknown variance `σ²`, a $100(1-\alpha)\%$
> confidence interval for `μ` is
>
> $$
> \bar x - t_{\alpha/2}\frac{s}{\sqrt n} < \mu < \bar x + t_{\alpha/2}\frac{s}{\sqrt n}
> $$
>
> where $t_{\alpha/2}$ is the `t`-value with $v = n-1$ degrees of
> freedom, leaving an area of $\alpha/2$ to the right.

Use this — not the `z` version — whenever `σ` isn't known, which is
the realistic case in practice; requires (approximate) normality.
One-sided bounds replace $t_{\alpha/2}$ with $t_\alpha$.

**example 9.5** — contents of 7 containers of sulfuric acid: 9.8, 10.2, 10.4, 9.8, 10.0, 10.2, 9.6 liters, giving $\bar x = 10.0$, $s = 0.283$. For $v=6$, $t_{0.025}=2.447$, so the 95% CI is $10.0 \pm 2.447(0.283/\sqrt 7)$, i.e. $9.74 < \mu < 10.26$.

### large-sample confidence interval on μ (σ unknown, n ≥ 30)

> [!IMPORTANT]
>
> When normality can't be assumed but `σ` is unknown and $n \geq 30$,
> `s` can replace `σ` and
>
> $$
> \bar x \pm z_{\alpha/2}\frac{s}{\sqrt n}
> $$
>
> may be used.

Use as an approximation for large, non-normal samples, relying on
the Central Limit Theorem rather than an assumption of normality —
accuracy improves as `n` grows.

**example 9.6** — SAT math scores for a random sample of 500 seniors give $\bar x = 501$, $s = 112$. With $z_{0.005}=2.575$, the 99% CI is $501 \pm 2.575(112/\sqrt{500}) = 501 \pm 12.9$, i.e. $488.1 < \mu < 513.9$.

## &sect; 9.6 prediction intervals

An interval expected to contain a single future observation — distinct
from a CI, which bounds the mean itself.

### prediction interval for a future observation, σ² known

> [!IMPORTANT]
>
> For a normal distribution of measurements with unknown mean `μ` and
> known variance `σ²`, a $100(1-\alpha)\%$ **prediction interval** for a
> future observation $x_0$ is
>
> $$
> \bar x - z_{\alpha/2}\sigma\sqrt{1 + 1/n} < x_0 < \bar x + z_{\alpha/2}\sigma\sqrt{1 + 1/n}.
> $$

Use when you need to bound a single future observation (e.g. "will
the next part meet spec?"), not the population mean — wider than a
CI on `μ` because it also accounts for the variance of one new
observation.

**example 9.7** — a bank's sample of 50 mortgage loans has mean loan amount $\bar x = 257{,}300$ dollars, assumed $\sigma = 25{,}000$ dollars. A 95% prediction interval for the next loan amount is $257{,}300 \pm 1.96(25{,}000)\sqrt{1+1/50}$, giving an interval of 207,812.43 to 306,787.57 dollars.

### prediction interval for a future observation, σ² unknown

> [!IMPORTANT]
>
> For a normal distribution of measurements with unknown mean `μ` and
> unknown variance `σ²`, a $100(1-\alpha)\%$ prediction interval for a
> future observation $x_0$ is
>
> $$
> \bar x - t_{\alpha/2}s\sqrt{1 + 1/n} < x_0 < \bar x + t_{\alpha/2}s\sqrt{1 + 1/n}
> $$
>
> where $t_{\alpha/2}$ has $v = n - 1$ degrees of freedom.

Use the same way as the σ-known version, but with sample variance —
also the basis for a simple outlier rule: flag a new observation as
an outlier if it falls outside a prediction interval computed
without it.

**example 9.8** — 30 packs of 95% lean beef have $\bar x = 96.2\%$, $s = 0.8\%$. For $v=29$, $t_{0.005}=2.756$, so a 99% prediction interval for a new pack's leanness is $96.2 \pm 2.756(0.8)\sqrt{1+1/30}$, i.e. $(93.96, 98.44)$ — a new pack outside this range is flagged an outlier.

## &sect; 9.7 tolerance limits

An interval built to contain a specified proportion of the whole
population, at a stated confidence — different again from a CI or a
prediction interval.

### tolerance limits

> [!IMPORTANT]
>
> For a normal distribution of measurements with unknown mean `μ` and
> unknown standard deviation `σ`, **tolerance limits** are given by $\bar x \pm ks$,
> where `k` is determined (Table A.7) such that one can
> assert with $100(1-\gamma)\%$ confidence that the given limits contain
> at least the proportion $1-\alpha$ of the measurements.

Use when interest is in covering a proportion of the _population_
(e.g. "95% of parts fall in this range"), not the mean (confidence
interval) or a single future value (prediction interval) — the three
interval types answer different questions and aren't interchangeable.

**example 9.9** — continuing example 9.8 (n=30, $\bar x=96.2\%$, $s=0.8\%$ ): for two-sided 95% bounds on 90% of the distribution, Table A.7 gives $k=2.14$, so $\bar x \pm ks = 96.2 \pm (2.14)(0.8)$ gives bounds 94.5 and 97.9 — 95% confident this range covers the central 90% of lean-beef packages (much wider than a CI on the mean would be, since it targets the whole population, not `μ`).

## &sect; 9.8 two samples: estimating the difference between two means

CIs for `μ₁ − μ₂` across three variance cases: both known, unknown but
equal (pooled `t`), and unknown/unequal (Satterthwaite-approximated
`t`).

### confidence interval for μ₁ − μ₂, σ₁² and σ₂² known

> [!IMPORTANT]
>
> If $\bar x_1$ and $\bar x_2$ are means of independent random samples
> of sizes $n_1$ and $n_2$ from populations with known variances $\sigma_1^2$
> and $\sigma_2^2$, a $100(1-\alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is
>
> $$
> (\bar x_1 - \bar x_2) - z_{\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar x_1 - \bar x_2) + z_{\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}.
> $$

Use to compare two population means directly (e.g. two engine types'
mileage) when both variances are known; if the interval excludes 0,
that's evidence the means differ.

**example 9.10** — engine A (n=50, $\bar x_A=36$ mpg, $\sigma_A=6$ ) vs. engine B (n=75, $\bar x_B=42$ mpg, $\sigma_B=8$ ). With $z_{0.02}=2.05$ (96% CI), $\mu_B-\mu_A$ is $6 \pm 2.05\sqrt{64/75+36/50}$, i.e. $3.43 < \mu_B-\mu_A < 8.57$ — since both bounds are positive, engine B's mean mileage exceeds engine A's.

### pooled estimate of variance

> [!IMPORTANT]
>
> $$
> S_p^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}.
> $$

A weighted average of the two sample variances (weighted by degrees
of freedom). Use as the plug-in estimate of the common variance `σ²`
whenever assuming $\sigma_1^2 = \sigma_2^2$ but both unknown — feeds
directly into the CI below.

### confidence interval for μ₁ − μ₂, σ₁² = σ₂² but both unknown

> [!IMPORTANT]
>
> If $\bar x_1$ and $\bar x_2$ are means of independent random samples
> of sizes $n_1$, $n_2$ from approximately normal populations with
> unknown but equal variances, a $100(1-\alpha)\%$ confidence interval
> for $\mu_1 - \mu_2$ is
>
> $$
> (\bar x_1 - \bar x_2) - t_{\alpha/2}s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}} < \mu_1 - \mu_2 < (\bar x_1 - \bar x_2) + t_{\alpha/2}s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}
> $$
>
> where $s_p$ is the pooled standard deviation and $t_{\alpha/2}$ has $v = n_1+n_2-2$
> degrees of freedom.

Use as the default two-sample-mean CI when variances are unknown but
assumed equal (check with the ratio-of-variances CI in &sect; 9.13 first) —
works best with $n_1 = n_2$, since unequal sample sizes make results
sensitive to the equal-variance assumption being wrong.

**example 9.11** — species diversity index downstream ( $n_1=12$, $\bar x_1=3.11$, $s_1=0.771$ ) vs. upstream ( $n_2=10$, $\bar x_2=2.04$, $s_2=0.448$ ) of an acid mine discharge, equal variances assumed. Pooled variance $s_p^2 = \frac{11(0.771)^2+9(0.448)^2}{20} = 0.417$, so $s_p=0.646$. With $v=20$, $t_{0.05}=1.725$, the 90% CI for $\mu_1-\mu_2$ is $1.07 \pm 1.725(0.646)\sqrt{1/12+1/10}$, i.e. $0.593 < \mu_1-\mu_2 < 1.547$ — both bounds positive, so the downstream index is on average higher.

### confidence interval for μ₁ − μ₂, σ₁² ≠ σ₂² and both unknown

> [!IMPORTANT]
>
> If $\bar x_1, s_1^2$ and $\bar x_2, s_2^2$ are the means/variances of
> independent random samples of sizes $n_1, n_2$ from approximately
> normal populations with unknown, unequal variances, an approximate $100(1-\alpha)\%$
> confidence interval for $\mu_1 - \mu_2$ is
>
> $$
> (\bar x_1 - \bar x_2) - t_{\alpha/2}\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar x_1 - \bar x_2) + t_{\alpha/2}\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}
> $$
>
> where $t_{\alpha/2}$ has the Satterthwaite-approximated degrees of
> freedom
>
> $$
> v = \frac{(s_1^2/n_1 + s_2^2/n_2)^2}{(s_1^2/n_1)^2/(n_1-1) + (s_2^2/n_2)^2/(n_2-1)}
> $$
>
> (round down to the nearest integer).

Use when variances are unknown _and_ can't be assumed equal — this
is the general-purpose two-sample-mean CI (Welch's approach);
reaches for the same $\text{estimate} \pm t_{\alpha/2}\,\text{s.e.}$ pattern as every other CI in this
chapter.

**example 9.12** — orthophosphorus content at station 1 ( $n_1=15$, $\bar x_1=3.84$, $s_1=3.07$ ) vs. station 2 ( $n_2=12$, $\bar x_2=1.49$, $s_2=0.80$ ), variances assumed unequal. Satterthwaite `v` $= \frac{(3.07^2/15+0.80^2/12)^2}{(3.07^2/15)^2/14+(0.80^2/12)^2/11} \approx 16.3 \to 16$. With $t_{0.025}=2.120$, the 95% CI is $2.35 \pm 2.120\sqrt{3.07^2/15+0.80^2/12}$, i.e. $0.60 < \mu_1-\mu_2 < 4.10$ milligrams per liter.

## &sect; 9.9 paired observations

CI on the mean difference for dependent/paired samples — trades
degrees of freedom for reduced variance when pairing is effective.

### confidence interval for μ_D = μ₁ − μ₂ for paired observations

> [!IMPORTANT]
>
> If $\bar d$ and $s_d$ are the mean and standard deviation of the
> normally distributed differences of `n` random pairs of measurements,
> a $100(1-\alpha)\%$ confidence interval for $\mu_D = \mu_1 - \mu_2$ is
>
> $$
> \bar d - t_{\alpha/2}\frac{s_d}{\sqrt n} < \mu_D < \bar d + t_{\alpha/2}\frac{s_d}{\sqrt n}
> $$
>
> where $t_{\alpha/2}$ has $v = n-1$ degrees of freedom.

Use instead of the two-independent-sample CI when each experimental
unit receives both conditions (before/after, matched pairs) — pairing
reduces variance by cancelling shared unit-level noise, at the cost
of fewer degrees of freedom (`n-1` instead of $n_1+n_2-2$ ), so it
only pays off when within-pair correlation is strong.

**example 9.13** — TCDD dioxin levels in plasma vs. fat tissue for 20 veterans (paired by subject). Differences give $\bar d = -0.87$, $s_d = 2.9773$. With $v=19$, $t_{0.025}=2.093$, the 95% CI is $-0.87 \pm 2.093(2.9773/\sqrt{20})$, i.e. $-2.2634 < \mu_D < 0.5234$ — since the interval contains 0, no significant difference between plasma and fat-tissue TCDD levels.

## &sect; 9.10 single sample: estimating a proportion

CI for a population proportion `p` via the normal approximation, plus
the sample-size formula for a target margin of error.

### large-sample confidence intervals for p

> [!IMPORTANT]
>
> If $\hat p$ is the proportion of successes in a random sample of size
> `n` and $\hat q = 1 - \hat p$, an approximate $100(1-\alpha)\%$
> confidence interval for the binomial parameter `p` is (method 1)
>
> $$
> \hat p - z_{\alpha/2}\sqrt{\frac{\hat p\hat q}{n}} < p < \hat p + z_{\alpha/2}\sqrt{\frac{\hat p\hat q}{n}}
> $$
>
> (method 2, more accurate but more complex, solves the quadratic in
> `p` directly rather than plugging in $\hat p$ under the radical).

Use for estimating a population proportion from a sample (needs $n\hat p \geq 5$
and $n\hat q \geq 5$ ); method 1 is standard practice, method 2 only
matters for small `n`.

**example 9.14** — of $n=500$ Hamilton families owning TVs, $x=340$ subscribe to HBO, so $\hat p = 0.68$. With $z_{0.025}=1.96$ (method 1), the 95% CI is $0.68 \pm 1.96\sqrt{(0.68)(0.32)/500}$, i.e. $0.6391 < p < 0.7209$. Method 2 gives the close approximation $0.6378 < p < 0.7194$ — the two methods agree closely once `n` is this large.

### theorem 9.3, bound on the error of p̂ as an estimate of p

> [!IMPORTANT]
>
> If $\hat p$ is used as an estimate of `p`, we can be $100(1-\alpha)\%$
> confident that the error will not exceed
>
> $$
> z_{\alpha/2}\sqrt{\hat p \hat q / n}.
> $$

Use to report a margin of error for a proportion estimate, mirroring
theorem 9.1 for the mean.

**example** — continuing example 9.14: we're 95% confident $\hat p = 0.68$ differs from the true `p` by an amount not exceeding 0.04.

### theorem 9.4, sample size to bound the error of p̂ (using p̂)

> [!IMPORTANT]
>
> If $\hat p$ is used as an estimate of `p`, we can be $100(1-\alpha)\%$
> confident that the error will be less than a specified amount `e`
> when the sample size is approximately
>
> $$
> n = \frac{z_{\alpha/2}^2 \hat p \hat q}{e^2}.
> $$

Use when a rough prior estimate of `p` is available (from a
preliminary sample or prior knowledge) to plan sample size for a
target margin of error.

**example 9.15** — using $\hat p = 0.68$ from example 9.14 as a preliminary estimate, how large a sample gives 95% confidence the error is within 0.02? $n = \frac{(1.96)^2(0.68)(0.32)}{(0.02)^2} = 2089.8$, so round up to `2090`.

### theorem 9.5, sample size to bound the error of p̂ (no prior estimate)

> [!IMPORTANT]
>
> If $\hat p$ is used as an estimate of `p`, we can be at least $100(1-\alpha)\%$
> confident that the error will not exceed a specified
> amount `e` when the sample size is
>
> $$
> n = \frac{z_{\alpha/2}^2}{4e^2}.
> $$

Use when no prior estimate of `p` exists — substitutes the
worst-case $\hat p = 1/2$ (which maximizes $\hat p\hat q$ ), giving a
conservative (larger than necessary) sample size.

**example 9.16** — with no preliminary sample, to be at least 95% confident the estimate of `p` from example 9.14 is within 0.02, $n = \frac{(1.96)^2}{4(0.02)^2} = 2401$ — larger than the 2090 from example 9.15, the cost of not having a prior estimate of `p`.

## &sect; 9.11 two samples: estimating the difference between two proportions

CI for `p₁ − p₂`, the two-proportion analog of &sect; 9.10.

### large-sample confidence interval for p₁ − p₂

> [!IMPORTANT]
>
> If $\hat p_1, \hat p_2$ are proportions of successes in random samples
> of sizes $n_1, n_2$, an approximate $100(1-\alpha)\%$ confidence
> interval for $p_1 - p_2$ is
>
> $$
> (\hat p_1 - \hat p_2) - z_{\alpha/2}\sqrt{\frac{\hat p_1\hat q_1}{n_1}+\frac{\hat p_2\hat q_2}{n_2}} < p_1 - p_2 < (\hat p_1 - \hat p_2) + z_{\alpha/2}\sqrt{\frac{\hat p_1\hat q_1}{n_1}+\frac{\hat p_2\hat q_2}{n_2}}
> $$
>
> (requires: $n_1\hat p_1, n_1\hat q_1, n_2\hat p_2, n_2\hat q_2$ all $\geq 5$ ).

Use to compare two proportions (e.g. defect rates between an
existing and a new process) — if the interval excludes 0, that's
evidence the proportions differ.

**example 9.17** — existing process: 75 of 1500 items defective, $\hat p_1=0.05$. New process: 80 of 2000 items defective, $\hat p_2=0.04$. With $z_{0.05}=1.645$, the 90% CI for $p_1-p_2$ is $0.01 \pm 1.645\sqrt{(0.05)(0.95)/1500+(0.04)(0.96)/2000}$, i.e. $-0.0017 < p_1-p_2 < 0.0217$ — since the interval contains 0, no evidence the new process reduces defects.

## &sect; 9.12 single sample: estimating the variance

Chi-squared-based CI for a single population variance `σ²`.

### confidence interval for σ²

> [!IMPORTANT]
>
> If $s^2$ is the variance of a random sample of size `n` from a normal
> population, a $100(1-\alpha)\%$ confidence interval for `σ²` is
>
> $$
> \frac{(n-1)s^2}{\chi^2_{\alpha/2}} < \sigma^2 < \frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}
> $$
>
> where $\chi^2_{\alpha/2}$ and $\chi^2_{1-\alpha/2}$ have $v = n-1$
> degrees of freedom.

Use to bound a population variance (relies on the chi-squared
sampling distribution of $(n-1)S^2/\sigma^2$ — requires normality,
and is _not_ robust to violations of it, unlike the `t`-based CIs on
`μ`). Take square roots of both endpoints for an approximate CI on `σ`.

**example 9.18** — weights (decagrams) of 10 grass-seed packages give $s^2 = 0.286$. For $v=9$, $\chi^2_{0.025}=19.023$ and $\chi^2_{0.975}=2.700$, so the 95% CI for $\sigma^2$ is $\frac{9(0.286)}{19.023} < \sigma^2 < \frac{9(0.286)}{2.700}$, i.e. $0.135 < \sigma^2 < 0.953$.

## &sect; 9.13 two samples: estimating the ratio of two variances

F-based CI for `σ₁²/σ₂²` — use to check the equal-variance assumption
before picking which two-mean CI (&sect; 9.8) applies.

### confidence interval for σ₁²/σ₂²

> [!IMPORTANT]
>
> If $s_1^2, s_2^2$ are the variances of independent samples of sizes $n_1, n_2$
> from normal populations, a $100(1-\alpha)\%$ confidence interval for $\sigma_1^2/\sigma_2^2$ is
>
> $$
> \frac{s_1^2}{s_2^2}\frac{1}{f_{\alpha/2}(v_1,v_2)} < \frac{\sigma_1^2}{\sigma_2^2} < \frac{s_1^2}{s_2^2}f_{\alpha/2}(v_2,v_1)
> $$
>
> where $v_1 = n_1-1$, $v_2 = n_2-1$.

Use this to test/justify whether two population variances can be
assumed equal (e.g. before choosing the pooled- vs. unequal-variance
CI for $\mu_1-\mu_2$ in &sect; 9.8) — if the interval contains 1, equal
variances is a reasonable assumption. Square-root both endpoints for
a CI on $\sigma_1/\sigma_2$.

**example 9.19** — justifying the unequal-variance assumption used in example 9.12 ( $n_1=15, s_1=3.07$, and $n_2=12, s_2=0.80$ ): with $f_{0.01}(14,11)\approx 4.30$ and $f_{0.01}(11,14)\approx 3.87$, the 98% CI for $\sigma_1^2/\sigma_2^2$ is $\frac{3.07^2}{0.80^2}\cdot\frac{1}{4.30} < \frac{\sigma_1^2}{\sigma_2^2} < \frac{3.07^2}{0.80^2}(3.87)$, i.e. $3.425 < \sigma_1^2/\sigma_2^2 < 56.991$ — since this excludes 1, the unequal-variance assumption was justified.

## &sect; 9.14 maximum likelihood estimation (optional)

MLE as a general-purpose method for deriving an estimator: pick the
parameter value that maximizes the likelihood of the observed sample.

### definition 9.3, maximum likelihood estimator

> [!IMPORTANT]
>
> Given independent observations $x_1, \ldots, x_n$ from a density/mass
> function $f(x;\theta)$, the **maximum likelihood estimator** $\hat\theta$
> is the value that maximizes the likelihood function
>
> $$
> L(x_1,\ldots,x_n;\theta) = f(x_1,\theta)f(x_2,\theta)\cdots f(x_n,\theta).
> $$

Use as a general-purpose recipe for deriving an estimator when no
obvious one exists (unlike $\bar X$ for `μ` or $\hat p$ for `p`) —
in practice, maximize $\ln L$ instead of `L` (same maximizer, easier
derivatives) by differentiating w.r.t. `θ` and setting to zero.

**example 9.20** — for a Poisson sample $x_1,\ldots,x_n$ with mass function $f(x|\mu)=e^{-\mu}\mu^x/x!$, $\ln L = -n\mu + \sum x_i \ln\mu - \ln\prod x_i!$. Setting $\partial \ln L/\partial \mu = -n + \sum x_i/\mu = 0$ gives $\hat\mu = \bar x$ — the sample mean is the MLE of the Poisson mean, matching intuition.

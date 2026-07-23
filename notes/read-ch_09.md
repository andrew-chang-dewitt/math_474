## &sect; 9.3 classical methods of estimation

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

## &sect; 9.6 prediction intervals

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

## &sect; 9.7 tolerance limits

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

## &sect; 9.8 two samples: estimating the difference between two means

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

## &sect; 9.9 paired observations

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

## &sect; 9.10 single sample: estimating a proportion

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

## &sect; 9.11 two samples: estimating the difference between two proportions

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

## &sect; 9.12 single sample: estimating the variance

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

## &sect; 9.13 two samples: estimating the ratio of two variances

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

## &sect; 9.14 maximum likelihood estimation (optional)

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

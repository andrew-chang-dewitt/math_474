## &sect; 10.1 statistical hypotheses: general concepts

Core vocabulary for every test in the chapter: `H0`/`H1`, type I/II
error, power, and the P-value.

### definition 10.1, statistical hypothesis

> [!IMPORTANT]
>
> A **statistical hypothesis** is an assertion or conjecture concerning one
> or more populations.

The **null hypothesis** `H0` is the hypothesis being tested; rejecting
`H0` leads to acceptance of the **alternative hypothesis** `H1`. `H0`
is never formally "accepted" — the only conclusions are "reject `H0`"
or "fail to reject `H0`." Use this framing whenever you need to
translate a research question into a testable claim: state the
status-quo/no-effect position as `H0` and the claim you want evidence
for as `H1`, since rejection is the stronger, evidence-based
conclusion.

A vaccine trial inoculates 20 people; if more than 8 avoid the
virus for 2 years, the new vaccine is judged superior to the old one
(known to be 25% effective). This is $H_0: p = 0.25$ vs. $H_1: p > 0.25$,
tested via $X$, the number protected.

### definition 10.2, type I error

> [!IMPORTANT]
>
> Rejection of the null hypothesis when it is true is called a
> **type I error**.

Its probability is $\alpha$, the **level of significance** (also
called the size of the test). Use `α` to set how much risk you'll
tolerate of a false positive before running the test — it fixes the
critical region.

In the vaccine trial (critical value 8, testing $p=1/4$ ), a type I error is rejecting $H_0$ when the new vaccine is really no better: $\alpha = P(X > 8 \mid p = 1/4) = 1 - \sum_{x=0}^8 b(x;20,1/4) = 1 - 0.9591 = 0.0409$.

### definition 10.3, type II error

> [!IMPORTANT]
>
> Nonrejection of the null hypothesis when it is false is called a
> **type II error**.

Its probability is $\beta$, and it can only be computed against a specific
alternative value, unlike $\alpha$. Use this to reason about a test's
blind spots — increasing `n` shrinks both $\alpha$ and $\beta$
simultaneously, but for fixed `n` decreasing one increases the other.

Same trial: against the specific alternative $p = 1/2$, a type II error is failing to reject $p=1/4$ when the vaccine is really 50% effective: $\beta = P(X \le 8 \mid p=1/2) = \sum_{x=0}^8 b(x;20,1/2) = 0.2517$. Against $p = 0.7$ instead, $\beta$ drops to $0.0051$ — moving `n` from 20 to 100 shrinks both $\alpha \approx 0.0039$ and (against $p=1/2$ ) $\beta \approx 0.0035$ at once.

### definition 10.4, power of a test

> [!IMPORTANT]
>
> The **power** of a test is the probability of rejecting `H0` given
> that a specific alternative is true:
>
> $$
> \text{power} = 1 - \beta
> $$

Use power to compare competing test procedures or to justify a sample
size — a desirable power (commonly $> 0.8$ ) against a practically
important alternative is achieved by increasing $\alpha$ or `n`.

Testing $H_0: \mu = 68$ kg vs. $H_1: \mu \ne 68$ with $n = 64$, using
critical region $\bar x < 67$ or $\bar x > 69$, gives $\beta = 0.8661$
against the true alternative $\mu = 68.5$, so the power to detect
that small a shift is only $1 - 0.8661 = 0.1339$ — a weak test for
distinguishing $68$ from $68.5$.

### definition 10.5, P-value

> [!IMPORTANT]
>
> A **P-value** is the lowest level of significance at which the
> observed value of the test statistic is significant.

Equivalently, it's the probability of obtaining a result at least as
extreme as the one observed, assuming `H0` is true. Use it instead of
a fixed $\alpha$ critical region when you want to report the strength
of evidence directly (small P-value = strong evidence against `H0`)
rather than a binary reject/fail-to-reject call — this is what
statistical software reports by default.

Testing $H_0: \mu = 10$ vs. $H_1: \mu \ne 10$, an observed $z = 1.87$ is not significant at $\alpha = 0.05$ (needs $|z| > 1.96$ ), but the risk of a type I error if rejecting anyway is quantifiable directly: $P = 2P(Z > 1.87) = 2(0.0307) = 0.0614$ — closer to significant than a strict pass/fail at $\alpha=0.05$ would suggest.

## &sect; 10.2 testing a statistical hypothesis

The CI/test-decision equivalence, and one- vs. two-tailed critical
region mechanics.

### theorem, one- and two-tailed tests

> [!IMPORTANT]
>
> A test where the alternative is one-sided,
>
> $$
> H_0: \theta = \theta_0, \quad H_1: \theta > \theta_0 \ \text{(or } \theta < \theta_0\text{)}
> $$
>
> is a **one-tailed test**, with critical region entirely in the
> right (or left) tail. A test where the alternative is two-sided,
>
> $$
> H_0: \theta = \theta_0, \quad H_1: \theta \neq \theta_0
> $$

is a **two-tailed test**, with critical region split between both
tails. Decide which form to use based on the direction of the
question being asked — "is the new process _better_" is one-tailed,
"is the new process _different_" is two-tailed — since it changes
where the critical region falls and thus the critical value used.

A cereal maker claims average saturated fat "does not exceed" 1.5 g: rejecting only when the mean is *higher* gives $H_0: \mu = 1.5$, $H_1: \mu > 1.5$, one-tailed, critical region in the right tail. A realtor claims 60% of new homes have 3 bedrooms: rejecting on either an unusually high or low sample proportion gives $H_0: p = 0.6$, $H_1: p \ne 0.6$, two-tailed, critical region split between both tails.

### theorem, relationship between hypothesis tests and confidence intervals

> [!IMPORTANT]
>
> Testing $H_0: \mu = \mu_0$ against $H_1: \mu \neq \mu_0$ at
> significance level $\alpha$ is equivalent to computing a $100(1-\alpha)\%$
> confidence interval on $\mu$ and rejecting `H0`
> iff $\mu_0$ falls outside that interval.

This equivalence extends to differences of two means, variances, and
ratios of variances (Chapter 9). Use it as a shortcut: if you already
have a confidence interval, you can read off the test decision for
any hypothesized value without recomputing a test statistic.

If a 95% CI on `μ` is $(2.50, 2.70)$, then any two-sided test $H_0: \mu = \mu_0$ with $\mu_0$ inside that band fails to reject at $\alpha = 0.05$ — no need to recompute `z` or `t` for each candidate $\mu_0$.

## &sect; 10.4 single sample: tests concerning a single mean

`z`- and `t`-test procedures for testing one mean, depending on
whether `σ` is known.

### theorem, z-test for a single mean (variance known)

> [!IMPORTANT]
>
> For $H_0: \mu = \mu_0$ with $\sigma$ known, the test statistic
>
> $$
> z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}
> $$

is compared against the standard normal critical region appropriate to `H1` ( $z > z_\alpha$, $z < -z_\alpha$, or $z < -z_{\alpha/2}$ or $z > z_{\alpha/2}$ ). Use this whenever $\sigma$ is known (or `n` is large enough, $\gtrsim 30$, to substitute `s` for $\sigma$ under the Central Limit Theorem) and you need to test a claim about a population mean.

A sample of 100 recorded deaths gives $\bar x = 71.8$ years; testing whether mean life span exceeds 70 years ( $\sigma = 8.9$, $\alpha = 0.05$ ) against $H_0: \mu = 70$, $H_1: \mu > 70$: $z = (71.8-70)/(8.9/\sqrt{100}) = 2.02 > 1.645$, so reject $H_0$ ( $P = 0.0217$ ) — life span today exceeds 70 years.

### theorem, t-test for a single mean (variance unknown)

> [!IMPORTANT]
>
> For $H_0: \mu = \mu_0$ with $\sigma$ unknown and the population
> assumed normal, the test statistic
>
> $$
> t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
> $$

follows a Student `t`-distribution with $n - 1$ degrees of freedom
and is compared against $t_\alpha$ or $t_{\alpha/2}$ critical values
as appropriate to `H1`. Use this — the far more common real-world
case — whenever $\sigma$ isn't known and the sample is small enough
( $n \lesssim 30$ ) that substituting `s` for $\sigma$ in the z-test
would be unreliable.

A claim of 46 kWh/year for vacuum cleaners is tested against a sample of 12 homes ( $\bar x = 42$, $s = 11.9$, $\alpha = 0.05$ ): $H_0: \mu = 46$, $H_1: \mu < 46$, critical region $t < -1.796$ with $v=11$. Computed $t = (42-46)/(11.9/\sqrt{12}) = -1.16$, $P \approx 0.135$ — do not reject $H_0$, usage is not significantly below 46 kWh.

## &sect; 10.5 two samples: tests on two means

Tests for `μ₁ − μ₂` across known/pooled/unequal-variance and paired
cases — the testing counterpart of the CIs in &sect; 9.8-9.9.

### theorem, z-test for two means (variances known)

> [!IMPORTANT]
>
> For $H_0: \mu_1 - \mu_2 = d_0$ with $\sigma_1, \sigma_2$ known,
>
> $$
> z = \frac{(\bar{x}_1 - \bar{x}_2) - d_0}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}}
> $$

is a standard normal variable. Use when comparing two independent
sample means and both population variances are known (or both
samples are large enough for the CLT to apply).

### theorem, pooled t-test for two means (unknown but equal variances)

> [!IMPORTANT]
>
> For $H_0: \mu_1 = \mu_2$, assuming both populations normal with $\sigma_1 = \sigma_2$,
>
> $$
> t = \frac{(\bar{x}_1 - \bar{x}_2) - d_0}{s_p\sqrt{1/n_1 + 1/n_2}}, \qquad
> s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}
> $$

follows a `t`-distribution with $n_1 + n_2 - 2$ degrees of freedom.
Use this — the standard two-sample t-test — when comparing two
independent sample means with unknown but plausibly equal variances
(check equal-variance plausibility first with the F-test in
&sect;10.10).

Comparing abrasive wear of two laminated materials ( $n_1=12$, $\bar x_1=85$, $s_1=4$, and $n_2=10$, $\bar x_2=81$, $s_2=5$ ), testing whether material 1 exceeds material 2 by more than 2 units at $\alpha=0.05$: $H_0: \mu_1-\mu_2=2$, $H_1: \mu_1-\mu_2>2$, critical region $t>1.725$ with $v=20$. $s_p = \sqrt{[(11)(16)+(9)(25)]/20} = 4.478$, so $t = [(85-81)-2]/(4.478\sqrt{1/12+1/10}) = 1.04$, $P \approx 0.16$ — do not reject $H_0$.

### theorem, Welch t-test for two means (unknown, unequal variances)

> [!IMPORTANT]
>
> When $\sigma_1 \neq \sigma_2$ cannot be assumed equal,
>
> $$
> t' = \frac{(\bar{x}_1 - \bar{x}_2) - d_0}{\sqrt{s_1^2/n_1 + s_2^2/n_2}}
> $$
>
> has an approximate `t`-distribution with degrees of freedom
>
> $$
> v = \frac{(s_1^2/n_1 + s_2^2/n_2)^2}{(s_1^2/n_1)^2/(n_1-1) + (s_2^2/n_2)^2/(n_2-1)}
> $$

Use this when the equal-variance assumption behind the pooled t-test
is rejected or doubtful — it's the safer default when unsure.

### theorem, paired t-test

> [!IMPORTANT]
>
> For paired observations, reduce to a one-sample problem on the
> differences $d_i = x_{1i} - x_{2i}$. For $H_0: \mu_D = d_0$,
>
> $$
> t = \frac{\bar{d} - d_0}{s_d/\sqrt{n}}
> $$

with $n - 1$ degrees of freedom. Use this instead of the two-sample
t-test whenever observations are naturally paired on a common
experimental unit (before/after, same subject under two treatments)
— pairing removes unit-to-unit variability and increases power,
_unless_ interaction between treatment and unit inflates $\text{Var}(D)$
and erodes that advantage.

Blood-androgen levels for 15 deer, measured at injection and 30 minutes later, testing whether the levels change ( $\alpha = 0.05$ ): $H_0: \mu_D = 0$, $H_1: \mu_D \ne 0$, critical region $|t| > 2.145$ with $v=14$. The differences give $\bar d = 9.848$, $s_d = 18.474$, so $t = 9.848/(18.474/\sqrt{15}) = 2.06$ — not quite significant at 0.05, but $P \approx 0.06$ suggests a real increase in androgen levels.

## &sect; 10.6 choice of sample size for testing means

Solving for the `n` needed to hit a target power against a specific
alternative.

### theorem, sample size for a one-sided z-test on a mean

> [!IMPORTANT]
>
> To achieve power $1-\beta$ against a specific alternative $\mu = \mu_0 + \delta$
> at significance level $\alpha$ (one-tailed):
>
> $$
> n = \frac{(z_\alpha + z_\beta)^2 \sigma^2}{\delta^2}
> $$
>
> For a two-tailed test, replace $z_\alpha$ with $z_{\alpha/2}$:
>
> $$
> n \approx \frac{(z_{\alpha/2} + z_\beta)^2 \sigma^2}{\delta^2}
> $$

Use this at the experiment-design stage — before collecting data —
to pick a sample size large enough to reliably detect a
practically-meaningful effect size $\delta$ given a target power.

Testing $H_0: \mu = 68$ kg vs. $H_1: \mu > 68$ at $\alpha = 0.05$ with $\sigma = 5$, wanting power $0.95$ against the alternative $\mu = 69$ ( $\delta = 1$ ): $z_\alpha = z_\beta = 1.645$, so $n = (1.645+1.645)^2(25)/1^2 = 270.6 \to 271$ observations. For a two-sample sample size ( $\sigma_1=\sigma_2$, unknown, using Table A.9 rather than the formula above): detecting a difference of $0.8\sigma$ with $\alpha=0.05$ two-tailed and power $0.9$ needs $n = 34$ per group.

## &sect; 10.8 one sample: test on a single proportion

`z`-test for `H0: p = p0`, with a note on falling back to the exact
binomial P-value for small `n`.

### theorem, z-test for a single proportion

> [!IMPORTANT]
>
> For $H_0: p = p_0$ with `n` large enough for the normal
> approximation to the binomial ( $p_0$ not too close to 0 or 1 ),
>
> $$
> z = \frac{x - np_0}{\sqrt{np_0 q_0}} = \frac{\hat{p} - p_0}{\sqrt{p_0 q_0/n}}
> $$

is a standard normal variable ( $q_0 = 1 - p_0$ ). Use this for large
samples; for small `n`, instead compute an exact P-value directly
from the binomial distribution ( $P(X \le x)$, $P(X \ge x)$, or double
the smaller tail for a two-sided test ) rather than relying on the
normal approximation.

A drug believed 60% effective is given to 100 patients and 70 improve; testing at $\alpha = 0.05$ whether the new drug is superior: $H_0: p = 0.6$, $H_1: p > 0.6$, critical region $z > 1.645$. $\hat p = 0.7$, so $z = (0.7-0.6)/\sqrt{(0.6)(0.4)/100} = 2.04 > 1.645$ — reject $H_0$ ( $P < 0.0207$ ), the new drug is superior.

## &sect; 10.9 two samples: tests on two proportions

`z`-test for `H0: p₁ = p₂` using a pooled `p̂`.

### theorem, z-test for two proportions

> [!IMPORTANT]
>
> For $H_0: p_1 = p_2$, using the pooled estimate
> $\hat{p} = (x_1+x_2)/(n_1+n_2)$, $\hat{q} = 1-\hat{p}$:
>
> $$
> z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}\hat{q}(1/n_1 + 1/n_2)}}
> $$

Use this to compare two independent binomial proportions (e.g. two
treatment groups' success rates) for large samples — pooling is valid
specifically because `H0` asserts a common `p`.

Testing whether town voters favor a construction proposal more than county voters, at $\alpha = 0.05$: 120 of 200 town voters ( $\hat p_1=0.60$ ) and 240 of 500 county voters ( $\hat p_2=0.48$ ) favor it. $H_0: p_1=p_2$, $H_1: p_1>p_2$, critical region $z>1.645$. Pooled $\hat p = 360/700 = 0.51$, so $z = (0.60-0.48)/\sqrt{(0.51)(0.49)(1/200+1/500)} = 2.9$ — reject $H_0$ ( $P=0.0019$ ), town voters favor it more.

## &sect; 10.10 one- and two-sample tests concerning variances

Chi-squared test for a single `σ²` and F-test for equality of two
variances — both very sensitive to non-normality.

### theorem, chi-squared test for a single variance

> [!IMPORTANT]
>
> For $H_0: \sigma^2 = \sigma_0^2$, assuming the population normal,
>
> $$
> \chi^2 = \frac{(n-1)s^2}{\sigma_0^2}
> $$

follows a chi-squared distribution with $n-1$ degrees of freedom
(see theorem 8.4). Use this to test/verify a claimed process variance
— but note it is **very nonrobust to non-normality**: a significant
result may just reflect a violated normality assumption rather than $\sigma \ne \sigma_0$,
so check normality first.

A battery maker claims $\sigma = 0.9$ year; 10 batteries give $s = 1.2$ years — is $\sigma > 0.9$ at $\alpha = 0.05$? $H_0: \sigma^2 = 0.81$, $H_1: \sigma^2 > 0.81$, critical region $\chi^2 > 16.919$ with $v=9$. $\chi^2 = (9)(1.44)/0.81 = 16.0 < 16.919$, so the test doesn't formally reject $H_0$, but $P \approx 0.07$ still points toward $\sigma > 0.9$.

### theorem, F-test for equality of two variances

> [!IMPORTANT]
>
> For $H_0: \sigma_1^2 = \sigma_2^2$, assuming both populations normal,
>
> $$
> f = \frac{s_1^2}{s_2^2}
> $$

follows an F-distribution with $v_1 = n_1-1$, $v_2 = n_2-1$ degrees
of freedom (see theorem 8.8). Use this to check the equal-variance
assumption before choosing between the pooled t-test and Welch's
t-test (&sect;10.5) — remember $f_{1-\alpha}(v_1,v_2) = 1/f_\alpha(v_2,v_1)$
(theorem 8.7) to get lower-tail critical values from the standard
upper-tail F-tables.

Checking the equal-variance assumption behind the abrasive-wear pooled t-test ( $s_1^2=16$, $v_1=11$, and $s_2^2=25$, $v_2=9$ ) at $\alpha = 0.10$: $H_0: \sigma_1^2=\sigma_2^2$, $H_1: \sigma_1^2 \ne \sigma_2^2$. $f_{0.05}(11,9)=3.11$ and $f_{0.95}(11,9) = 1/f_{0.05}(9,11) = 0.34$, so reject only if $f<0.34$ or $f>3.11$. Computed $f = 16/25 = 0.64$ — do not reject $H_0$, the equal-variance assumption is reasonable.

## &sect; 10.11 goodness-of-fit test

Chi-squared test comparing observed category counts against a
hypothesized distribution's expected counts.

### theorem, chi-squared goodness-of-fit test

> [!IMPORTANT]
>
> To test whether a population follows a specified distribution,
> partition outcomes into `k` cells and compute
>
> $$
> \chi^2 = \sum_{i=1}^k \frac{(o_i - e_i)^2}{e_i}
> $$

where $o_i$, $e_i$ are observed/expected cell frequencies. Under
`H0`, $\chi^2$ is approximately chi-squared with $v = k - 1$ degrees
of freedom; reject `H0` when $\chi^2 > \chi^2_\alpha$. Use this to
check whether data plausibly came from a hypothesized distribution
(e.g. "is this die fair," "is this sample normal") — requires each
expected frequency $e_i \geq 5$ (combine adjacent cells if not),
which reduces the degrees of freedom accordingly.

A die rolled many times gives 6 observed cell counts against an expected count of 20 each (uniform, fair die): $\chi^2 = \sum (o_i-20)^2/20 = 1.7$, well below $\chi^2_{0.05} = 11.070$ for $v=5$ — fail to reject, insufficient evidence the die is unbalanced.

## &sect; 10.12 test for independence (categorical data)

Chi-squared test of independence between two categorical variables in
a contingency table.

### theorem, chi-squared test for independence

> [!IMPORTANT]
>
> For an $r \times c$ contingency table with grand total `N`, the
> expected count for each cell is
>
> $$
> e_{ij} = \frac{(\text{row total}_i)(\text{column total}_j)}{N}
> $$
>
> and
>
> $$
> \chi^2 = \sum_{i,j} \frac{(o_{ij} - e_{ij})^2}{e_{ij}}
> $$
>
> is approximately chi-squared with $v = (r-1)(c-1)$ degrees of
> freedom under `H0` of independence. Use this to test whether two
> categorical classifications (e.g. income level & opinion) are
> statistically independent, given a single random sample cross-
> classified both ways. For a $2\times 2$ table (1 degree of freedom)
> with expected frequencies between 5 and 10, apply **Yates'
> correction for continuity**,
>
> $$
> \chi^2_{\text{corrected}} = \sum_i \frac{(|o_i - e_i| - 0.5)^2}{e_i},
> $$

and for expected frequencies below 5, use the Fisher-Irwin exact
test instead.

1000 voters cross-classified by income (low/medium/high) and opinion
on tax reform (for/against) give a $2\times 3$ table. Expected counts
(e.g. $e_{\text{low,for}} = (336)(598)/1000 = 200.9$ ) are compared to
observed via $\chi^2 = \sum (o_{ij}-e_{ij})^2/e_{ij} = 7.85$, exceeding
$\chi^2_{0.05} = 5.991$ for $v=(2-1)(3-1)=2$ — reject $H_0$, opinion
and income are not independent.

## &sect; 10.13 test for homogeneity

Chi-squared test for whether several populations share the same
categorical distribution — same statistic as &sect; 10.12, different
sampling design.

### theorem, chi-squared test for homogeneity

> [!IMPORTANT]
>
> When row (or column) totals of a contingency table are fixed by the
> sampling design (rather than arising by chance, as in
> &sect;10.12), the same statistic
>
> $$
> \chi^2 = \sum_{i,j} \frac{(o_{ij} - e_{ij})^2}{e_{ij}}, \qquad v = (r-1)(c-1)
> $$

tests $H_0$: the population proportions in each column are the same
across all rows (i.e. the row populations are **homogeneous**) rather
than independence. Use this when you deliberately sampled fixed
numbers from several distinct populations/groups (e.g. 200
Democrats, 150 Republicans, 150 Independents) and want to know if
their response distributions match — mechanically identical to the
independence test, but the sampling design changes the hypothesis
being tested.

Fixed samples of 200 Democrats, 150 Republicans, and 150 Independents are cross-tabulated by opinion on an abortion law (for/against/undecided) at $\alpha=0.05$: $H_0$: opinion proportions are the same across affiliations, critical region $\chi^2 > 9.488$ with $v=4$. Comparing observed to expected counts (e.g. $82$ vs. $85.6$ for Democrats-for) gives $\chi^2 = 1.53 < 9.488$ — do not reject $H_0$, insufficient evidence the affiliations differ.

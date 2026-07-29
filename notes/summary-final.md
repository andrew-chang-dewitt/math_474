## ch 8 &mdash; sampling distributions

- **population**: totality of observations of interest; **sample**: subset of it; **random sample**: `n` iid $X_1,\ldots,X_n$ from $f(x)$, joint dist $f(x_1)\cdots f(x_n)$
- **statistic**: any function of the random variables in a random sample (e.g. $\bar X$ or $S^2$ ) — has its own probability distribution
- **sample mean/median/variance/sd/range** $\bar{X} = \frac1n\sum X_i$, $\tilde x$ = middle sorted value, $S^2 = \frac{1}{n-1}\sum(X_i-\bar X)^2$, $S=\sqrt{S^2}$, $R = X_{\max}-X_{\min}$
- **computational form of $S^2$** (thm 8.1) $S^2 = \frac{1}{n(n-1)}\left[n\sum X_i^2 - (\sum X_i)^2\right]$ — avoids computing $\bar X$ first
- **sampling distribution**: the probability distribution of a statistic — central object of chapters 9-10 inference
- **central limit theorem** (thm 8.2): for large `n` (rule of thumb $n\ge30$ ), $Z=\dfrac{\bar X-\mu}{\sigma/\sqrt n} \to n(z;0,1)$ regardless of population shape; exact for any `n` if population itself normal
- **CLT, difference of two means** (thm 8.3) $Z=\dfrac{(\bar X_1-\bar X_2)-(\mu_1-\mu_2)}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$ approx standard normal, independent samples
- **sampling dist of $S^2$** (thm 8.4) $\chi^2 = \dfrac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$, normal population — basis for variance CIs/tests
- **`t`-distribution** (thm 8.5): $T = Z/\sqrt{V/v}$ (`Z` standard normal, `V` independent $\chi^2(v)$ ); symmetric, heavier tails than normal, $\to n(0,1)$ as $v\to\infty$
- **`t`-statistic for a normal mean, $\sigma$ unknown** (cor 8.1) $T = \dfrac{\bar X-\mu}{S/\sqrt n} \sim t(n-1)$ — workhorse for small-sample mean inference; use `z` instead once $n\ge30$
- **`F`-distribution** (thm 8.6): $F = \dfrac{U/v_1}{V/v_2}$ (`U`,`V` independent $\chi^2$ w/ $v_1,v_2$ df ); order of `v1`,`v2` matters
- **`F`-tail reciprocal relation** (thm 8.7) $f_{1-\alpha}(v_1,v_2) = 1/f_\alpha(v_2,v_1)$ — recovers lower-tail values from upper-tail-only tables
- **`F`-statistic, ratio of two sample variances** (thm 8.8) $F = \dfrac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F(n_1-1,n_2-1)$, independent normal samples
- **quantile** $q(f)$: value below/at which fraction `f` of data falls; **normal Q-Q plot**: ordered obs vs. $q_{0,1}(f_i)$ — near-straight-line supports normality assumption (used before applying `t`, $\chi^2$, or `F` results, or ch. 10 goodness-of-fit tests)

## ch 9 &mdash; estimation

- **unbiased estimator** $\hat\Theta$ of `θ`: $E(\hat\Theta)=\theta$ — e.g. $S^2$ unbiased for $\sigma^2$ (why divisor is $n-1$ ), but `S` is biased for `σ`
- **most efficient estimator**: among unbiased estimators of `θ`, the one w/ smallest variance
- **CI on `μ`, `σ` known** $\bar x \pm z_{\alpha/2}\,\sigma/\sqrt n$ — baseline construction every later CI modifies
- **error bound on $\bar x$** (thm 9.1) error $< z_{\alpha/2}\,\sigma/\sqrt n$ w/ $100(1-\alpha)\%$ confidence
- **sample size for target error `e`, `μ`** (thm 9.2) $n = (z_{\alpha/2}\sigma/e)^2$, round up
- **one-sided CI bound on `μ`, `σ` known** upper/lower $= \bar x \pm z_\alpha\,\sigma/\sqrt n$
- **CI on `μ`, `σ` unknown** $\bar x \pm t_{\alpha/2}\,s/\sqrt n$, $v=n-1$ df — the realistic case; one-sided swaps in $t_\alpha$
- **large-sample CI on `μ` (`σ` unknown, $n\ge30$ )** $\bar x \pm z_{\alpha/2}\,s/\sqrt n$ — CLT-based approx when normality can't be assumed
- **prediction interval, future obs, `σ` known** $\bar x \pm z_{\alpha/2}\,\sigma\sqrt{1+1/n}$ — bounds one future value $x_0$, not `μ`; wider than a CI
- **prediction interval, future obs, `σ` unknown** $\bar x \pm t_{\alpha/2}\,s\sqrt{1+1/n}$, $v=n-1$ — also gives a simple outlier rule (flag obs outside interval computed w/o it)
- **tolerance limits** $\bar x \pm ks$ (`k` from Table A.7): $100(1-\gamma)\%$ confident the limits contain proportion $1-\alpha$ of the *population* — distinct question from CI (targets `μ`) or prediction interval (targets one future value)
- **CI for $\mu_1-\mu_2$, both `σ` known** $(\bar x_1-\bar x_2) \pm z_{\alpha/2}\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}$ — interval excluding 0 signals the means differ
- **pooled variance** $S_p^2 = \dfrac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}$ — plug-in for common `σ²` when $\sigma_1=\sigma_2$ assumed but unknown
- **CI for $\mu_1-\mu_2$, `σ`'s unknown but equal** (pooled `t`) $(\bar x_1-\bar x_2) \pm t_{\alpha/2}\,s_p\sqrt{1/n_1+1/n_2}$, $v=n_1+n_2-2$ — check equal-variance first (&sect;9.13 `F`-CI)
- **CI for $\mu_1-\mu_2$, `σ`'s unknown & unequal** (Welch) $(\bar x_1-\bar x_2) \pm t_{\alpha/2}\sqrt{s_1^2/n_1+s_2^2/n_2}$, Satterthwaite `v` $= \dfrac{(s_1^2/n_1+s_2^2/n_2)^2}{(s_1^2/n_1)^2/(n_1-1)+(s_2^2/n_2)^2/(n_2-1)}$ (round down) — general-purpose default
- **CI for paired-difference mean $\mu_D$** $\bar d \pm t_{\alpha/2}\,s_d/\sqrt n$, $v=n-1$ — use when both conditions hit the same unit (before/after); trades df for reduced variance, only pays off w/ strong within-pair correlation
- **large-sample CI for `p`** $\hat p \pm z_{\alpha/2}\sqrt{\hat p\hat q/n}$ — needs $n\hat p, n\hat q \ge 5$
- **error bound on $\hat p$** (thm 9.3) error $< z_{\alpha/2}\sqrt{\hat p\hat q/n}$
- **sample size for target error `e`, `p`, w/ prior $\hat p$** (thm 9.4) $n = z_{\alpha/2}^2\hat p\hat q/e^2$
- **sample size for target error `e`, `p`, no prior estimate** (thm 9.5) $n = z_{\alpha/2}^2/(4e^2)$ — conservative, substitutes worst case $\hat p=1/2$
- **CI for $p_1-p_2$** $(\hat p_1-\hat p_2) \pm z_{\alpha/2}\sqrt{\hat p_1\hat q_1/n_1+\hat p_2\hat q_2/n_2}$ — needs all four of $n_1\hat p_1,n_1\hat q_1,n_2\hat p_2,n_2\hat q_2 \ge 5$, excludes 0 &rArr; proportions differ
- **CI for $\sigma^2$** $\dfrac{(n-1)s^2}{\chi^2_{\alpha/2}} < \sigma^2 < \dfrac{(n-1)s^2}{\chi^2_{1-\alpha/2}}$, $v=n-1$ — not robust to non-normality; sqrt endpoints for CI on `σ`
- **CI for $\sigma_1^2/\sigma_2^2$** $\dfrac{s_1^2}{s_2^2}\cdot\dfrac{1}{f_{\alpha/2}(v_1,v_2)} < \dfrac{\sigma_1^2}{\sigma_2^2} < \dfrac{s_1^2}{s_2^2}f_{\alpha/2}(v_2,v_1)$ — contains 1 &rArr; equal-variance assumption reasonable (checks which &sect;9.8 CI to use)
- **maximum likelihood estimator**: `θ̂` maximizing $L=f(x_1;\theta)\cdots f(x_n;\theta)$ — general-purpose recipe when no obvious estimator exists; maximize $\ln L$ in practice, same maximizer

## ch 10 &mdash; hypothesis testing

- **statistical hypothesis**: assertion about one or more populations; **`H0`** = hypothesis tested (status quo), **`H1`** = alternative accepted on rejection — `H0` never formally "accepted," only "reject" or "fail to reject"
- **type I error**: reject `H0` when true, probability $\alpha$ (level of significance / size of test); **type II error**: fail to reject `H0` when false, probability $\beta$ — computable only vs. a *specific* alternative
- raising `n` shrinks $\alpha$ and $\beta$ simultaneously; for fixed `n`, lowering one raises the other
- **power of a test**: $1-\beta$ = P(reject `H0` | specific alternative true); desirable power commonly $>0.8$, raised via bigger $\alpha$ or `n`
- **P-value**: lowest significance level at which the observed test statistic is significant $=P(\text{result this extreme or more}\mid H_0\text{ true})$ — small P = strong evidence against `H0`
- **one-tailed test**: $H_1:\theta>\theta_0$ or $\theta<\theta_0$, critical region in direction of inequality; **two-tailed**: $H_1:\theta\ne\theta_0$, critical region split both tails
- **CI/test equivalence**: testing $H_0:\mu=\mu_0$ vs $H_1:\mu\ne\mu_0$ at $\alpha$ &equiv; computing a $100(1-\alpha)\%$ CI & rejecting iff $\mu_0$ falls outside it — extends to two-mean/variance CIs too
- **`z`-test, single mean, `σ` known** $z = \dfrac{\bar x-\mu_0}{\sigma/\sqrt n}$ vs. $\pm z_{\alpha/2}$ (or $z_\alpha$ one-tailed)
- **`t`-test, single mean, `σ` unknown** $t = \dfrac{\bar x-\mu_0}{s/\sqrt n} \sim t(n-1)$ vs. $\pm t_{\alpha/2}$ (or $t_\alpha$ one-tailed) — the common real-world case
- **`z`-test, two means, `σ`'s known** $z = \dfrac{(\bar x_1-\bar x_2)-d_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$
- **pooled `t`-test, two means, `σ`'s unknown but equal** $t = \dfrac{(\bar x_1-\bar x_2)-d_0}{s_p\sqrt{1/n_1+1/n_2}} \sim t(n_1+n_2-2)$, $s_p$ as in ch. 9
- **Welch `t`-test, two means, `σ`'s unknown & unequal** $t' = \dfrac{(\bar x_1-\bar x_2)-d_0}{\sqrt{s_1^2/n_1+s_2^2/n_2}}$, Satterthwaite `v` as in ch. 9
- **paired `t`-test** reduce to one-sample on differences $d_i$: $t = \dfrac{\bar d-d_0}{s_d/\sqrt n} \sim t(n-1)$
- **sample size for target power, one-sided `z`-test on mean** $n = \dfrac{(z_\alpha+z_\beta)^2\sigma^2}{\delta^2}$ against alternative $\mu_0+\delta$ (swap $z_\alpha \to z_{\alpha/2}$ for two-tailed)
- **`z`-test, single proportion** $z = \dfrac{\hat p-p_0}{\sqrt{p_0q_0/n}}$ — large `n`; for small `n`, use exact binomial P-value instead
- **`z`-test, two proportions** $z = \dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p\hat q(1/n_1+1/n_2)}}$, pooled $\hat p=(x_1+x_2)/(n_1+n_2)$ — valid pooling because `H0` asserts common `p`
- **$\chi^2$ test, single variance** $\chi^2 = \dfrac{(n-1)s^2}{\sigma_0^2} \sim \chi^2(n-1)$ — very nonrobust to non-normality, check normality first
- **`F`-test, equality of two variances** $f = s_1^2/s_2^2 \sim F(n_1-1,n_2-1)$ — checked before choosing pooled vs. Welch `t`-test; use $f_{1-\alpha}(v_1,v_2)=1/f_\alpha(v_2,v_1)$ for lower tail
- **$\chi^2$ goodness-of-fit test** $\chi^2 = \sum(o_i-e_i)^2/e_i \sim \chi^2(k-1)$ — checks whether data plausibly came from a hypothesized distribution; needs $e_i\ge5$ per cell (combine if not)
- **$\chi^2$ test for independence** $r\times c$ table, $e_{ij}=(\text{row}_i)(\text{col}_j)/N$, $\chi^2=\sum(o_{ij}-e_{ij})^2/e_{ij} \sim \chi^2((r-1)(c-1))$ — for $2\times2$ w/ expected freq 5-10, apply Yates' correction $\sum(|o_i-e_i|-0.5)^2/e_i$, below 5, use Fisher-Irwin exact test
- **$\chi^2$ test for homogeneity** — mechanically identical statistic to independence test, but row/col totals fixed by sampling design (not chance): tests whether several populations share the same categorical-response distribution

## ch 11 &mdash; simple linear regression & correlation

- **SLR model** $Y=\beta_0+\beta_1x+\epsilon$, $E(\epsilon)=0$, $\text{Var}(\epsilon)=\sigma^2$ constant (homogeneous variance assumption); `x` fixed/error-free, `Y` random only via $\epsilon$
- **residual** $e_i = y_i-\hat y_i$ — observed counterpart to unobservable $\epsilon_i$, small residuals signal good fit
- **least squares estimators** $b_1 = S_{xy}/S_{xx} = \dfrac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$, $b_0 = \bar y - b_1\bar x$ — minimizes $SSE=\sum(y_i-b_0-b_1x_i)^2$
- **mean/var of the LS estimators** $B_1$ normal, $\mu_{B_1}=\beta_1$, $\sigma_{B_1}^2=\sigma^2/S_{xx}$, and $B_0$ normal, $\mu_{B_0}=\beta_0$, $\sigma_{B_0}^2=(\sum x_i^2/(nS_{xx}))\sigma^2$ — both unbiased
- **unbiased estimator of $\sigma^2$** $s^2 = SSE/(n-2) = (S_{yy}-b_1S_{xy})/(n-2)$ — divisor $n-2$ since two params estimated
- **CI/`t`-test for $\beta_1$** $b_1 \pm t_{\alpha/2}\,s/\sqrt{S_{xx}}$, test stat $t=(b_1-\beta_{10})/(s/\sqrt{S_{xx}})$, $v=n-2$ — $H_0:\beta_1=0$ tests whether `x` has any linear relationship w/ `Y`
- **CI/`t`-test for $\beta_0$** $b_0 \pm t_{\alpha/2}\,s\sqrt{\sum x_i^2/(nS_{xx})}$ — mechanically identical, less commonly of scientific interest
- **coefficient of determination** $R^2 = 1-SSE/SST$, $SST=\sum(y_i-\bar y)^2$ — proportion of `y`-variability explained; adding any regressor can only raise it, so don't compare models of different size by $R^2$ alone
- **CI for mean response $\mu_{Y|x_0}$** $\hat y_0 \pm t_{\alpha/2}\,s\sqrt{1/n+(x_0-\bar x)^2/S_{xx}}$ — targets the (fixed) mean of `Y` at $x_0$
- **prediction interval for future $y_0$** $\hat y_0 \pm t_{\alpha/2}\,s\sqrt{1+1/n+(x_0-\bar x)^2/S_{xx}}$ — always wider than the CI on the mean (extra "+1" for the new obs's own error); targets a random future value, not a parameter
- **ANOVA `F`-test for $H_0:\beta_1=0$** $f = SSR/s^2 \sim F(1,n-2)$, $SST=SSR+SSE$ — algebraically identical to the two-sided `t`-test ( $t^2=f$ ); use `F` form for the standard regression printout (Source/DF/SS/MS/F/P)
- **lack-of-fit test**: needs repeated obs at each `x`; splits `SSE` into pure-error (always unbiased for $\sigma^2$ ) + lack-of-fit (curvature) components — significant lack-of-fit signals the linear model itself is wrong, not just noise
- **correlation coefficient** $r = S_{xy}/\sqrt{S_{xx}S_{yy}} = b_1\sqrt{S_{xx}/S_{yy}}$, estimates population $\rho$ ( $-1\le\rho\le1$, $\rho=0 \Leftrightarrow \beta_1=0$ ); $r^2=SSR/S_{yy}$ same quantity as $R^2$, and $r\approx0$ only rules out *linear* association
- **test for $\rho=0$** $t = r\sqrt{n-2}/\sqrt{1-r^2} \sim t(n-2)$ — equivalent to the $\beta_1=0$ test, usable from `r` alone
- **test for general $\rho=\rho_0$** Fisher's transform $\frac12\ln\frac{1+r}{1-r}$ approx normal, mean $\frac12\ln\frac{1+\rho}{1-\rho}$, var $1/(n-3)$, giving test statistic $z = \dfrac{\sqrt{n-3}}{2}\ln\left[\dfrac{(1+r)(1-\rho_0)}{(1-r)(1+\rho_0)}\right]$ — needed whenever $\rho_0\ne0$

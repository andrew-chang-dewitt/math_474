---
title: "Probability & Statistics: simple linear regression & correlation (ch. 11)"
description: "Reading notes on Chapter 11 from Walpole & Meyers."
keywords:
  - "simple linear regression"
  - "least squares"
  - "correlation"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-07-29T11:25-06:00"
  updated: "2026-07-29T11:25-06:00"
---

## &sect; 11.1 introduction to linear regression

Chapter subject: modeling a non-deterministic linear relationship between a
**response** (dependent variable) `Y` and a **regressor** (independent
variable) `x`, e.g. `Y = β0 + β1x`, when repeated trials at the same `x`
don't give the same `Y` (tar content vs. inlet temperature, mpg vs. engine
size, house price vs. square footage). Single-regressor case is **simple
regression** (this chapter); multiple regressors (e.g. price on both
square footage and age) is **multiple regression** (Chapter 12).

## &sect; 11.2 the simple linear regression (SLR) model

`x` is treated as fixed/measured without error; `Y` is random only because
of the model's error term. Use this model whenever you're relating a
scientific response to one regressor and expect scatter around the trend
rather than an exact functional relationship.

:::

> [!IMPORTANT]
>
> #### simple linear regression model
>
> $$
> Y = \beta_0 + \beta_1 x + \epsilon
> $$
>
> where $\beta_0$ (intercept) and $\beta_1$ (slope) are unknown parameters
> and $\epsilon$ is a random error with $E(\epsilon)=0$, $\text{Var}(\epsilon)=\sigma^2$
> (constant across all `x` — the **homogeneous variance assumption**).

The **true regression line** $\mu_{Y|x} = \beta_0+\beta_1x$ passes through
the mean of `Y` at each `x` — it's never observed directly, only
estimated.

:::

> [!ASIDE]
>
> Pollution study (Table 11.1, used throughout the chapter): $x$ = percent reduction in total solids, $y$ = percent reduction in chemical oxygen demand, 33 samples of chemically treated tannery waste. Points scatter tightly around a line, consistent with the linearity assumption.

## &sect; 11.3 least squares and the fitted model

Before fitting a line, first define the error in that fit.

:::

> [!IMPORTANT]
>
> #### residual
>
> For fitted model $\hat y_i = b_0 + b_1 x_i$, the residual for
> observation $i$ is
>
> $$
> e_i = y_i - \hat y_i
> $$

Residuals are the *observed*, empirical counterpart to the *unobservable*
model errors $\epsilon_i$. Small residuals signal a good fit. Use residual
plots (vs. `x` or vs. fitted values) as your primary diagnostic for
whether a linear model is adequate.

> [!IMPORTANT]
>
> #### least squares estimators
>
> Minimizing $SSE = \sum_i (y_i-b_0-b_1x_i)^2$ over $b_0, b_1$ gives
>
> $$
> b_1 = \frac{\sum_i (x_i-\bar x)(y_i-\bar y)}{\sum_i (x_i-\bar x)^2} = \frac{S_{xy}}{S_{xx}}, \qquad b_0 = \bar y - b_1 \bar x
> $$

This is **the method of least squares** — it minimizes the sum of squared vertical deviations from points to the fitted line, i.e. forces residuals to be small in aggregate. Use these formulas any time you need a point estimate of the regression line from raw $(x_i,y_i)$ pairs. Everything else in the chapter (inference, prediction, correlation) builds on $b_0$, $b_1$, and the sums $S_{xx}, S_{yy}, S_{xy}$.

:::

> [!ASIDE]
>
> **Example 11.1 (pollution data, n=33):** $\sum x_i=1104$, $\sum y_i=1124$, $\sum x_iy_i=41{,}355$, $\sum x_i^2=41{,}086$. Then $b_1 = \frac{(33)(41355)-(1104)(1124)}{(33)(41086)-(1104)^2} = 0.903643$, $b_0 = \frac{1124-(0.903643)(1104)}{33}=3.829633$, giving $\hat y = 3.8296+0.9036x$. At $x=30$, predicted reduction is $\approx 31\%$ — note actual data at $x=30$ ranged 25%-35%, illustrating that a fitted point is an estimate, not an exact prediction.

## &sect; 11.4 properties of the least squares estimators

Treat $B_0, B_1$ (capital) as random variables — different samples with the same fixed `x` values give different $b_0, b_1$ realizations.

:::

> [!IMPORTANT]
>
> #### mean and variance of the slope & intercept estimators
>
> Assuming $\epsilon_1,\dots,\epsilon_n$ independent with mean 0, variance $\sigma^2$, $B_1$ is normal with
>
> $$
> \mu_{B_1} = \beta_1, \qquad \sigma_{B_1}^2 = \frac{\sigma^2}{S_{xx}}
> $$
>
> and $B_0$ is normal with $\mu_{B_0}=\beta_0$, $\sigma_{B_0}^2 = \frac{\sum_i x_i^2}{nS_{xx}}\sigma^2$.

Both least-squares estimators are **unbiased**. Use this as the foundation for every CI/test on $\beta_0,\beta_1$ that follows — they all come from standardizing $B_0$ or $B_1$ and substituting an estimate of $\sigma^2$ for the unknown $\sigma^2$.

> [!IMPORTANT]
>
> #### theorem 11.1, unbiased estimator of $\sigma^2$
>
> $$
> s^2 = \frac{SSE}{n-2} = \frac{S_{yy}-b_1S_{xy}}{n-2}
> $$

Divisor is $n-2$, not $n-1$, because **two** parameters, $\beta_0$ and $\beta_1$, are estimated from the data (vs. one, $\mu$, in the ordinary one-sample case) — this is why $s^2$ is called a *mean squared error*. Use this whenever you need $s$ to plug into a CI or test statistic for $\beta_0$, $\beta_1$, $\mu_{Y|x_0}$, or a predicted $y_0$.

:::

> [!ASIDE]
>
> **Example 11.2** (pollution data) computes $s^2 = \frac{3713.88-(0.903643)(3752.09)}{31}=10.4299$, so $s = 3.2295$ — reused in every subsequent example on this data set.

## &sect; 11.5 inferences concerning the regression coefficients

Requires the added assumption that each $\epsilon_i$ is normally distributed: $Y_i \sim n(y_i;\beta_0+\beta_1x_i,\sigma)$.

:::

> [!IMPORTANT]
>
> #### CI and t-test for $\beta_1$
>
> $T = \dfrac{B_1-\beta_1}{S/\sqrt{S_{xx}}}$ has a `t`-distribution with $n-2$ df. A $100(1-\alpha)\%$ CI for $\beta_1$ is
>
> $$
> b_1 \pm t_{\alpha/2}\,\frac{s}{\sqrt{S_{xx}}}
> $$
>
> and $H_0:\beta_1=\beta_{10}$ is tested via $t = \dfrac{b_1-\beta_{10}}{s/\sqrt{S_{xx}}}$.

The special case $H_0:\beta_1=0$ vs $H_1:\beta_1\neq0$ is the most important regression test in practice — rejecting it means there **is** a significant linear relationship between $x$ and $E(Y)$, while failing to reject means either $x$ has little effect on $Y$, or the true relationship is nonlinear (a plot can't always distinguish these). Use this whenever software gives you a coefficient's t-stat/p-value ("Coef" / "SE Coef" / "T" / "P" in a MINITAB-style printout) — that's exactly this test.

:::

> [!ASIDE]
>
> **Example 11.2:** 95% CI for $\beta_1$ (pollution data, $S_{xx}=4152.18$, $b_1=0.903643$, $s=3.2295$, $t_{0.025}\approx2.045$ at 31 df): $0.8012 < \beta_1 < 1.0061$. **Example 11.3:** testing $H_0:\beta_1=1.0$ vs $H_1:\beta_1<1.0$: $t = \frac{0.903643-1.0}{3.2295/\sqrt{4152.18}} = -1.92$, $P\approx0.03$ — evidence that the true slope is less than 1.

:::

> [!IMPORTANT]
>
> #### CI and t-test for $\beta_0$
>
> $T = \dfrac{B_0-\beta_0}{S\sqrt{\sum_i x_i^2/(nS_{xx})}}$ has a `t`-distribution with $n-2$ df, giving CI
>
> $$
> b_0 \pm t_{\alpha/2}\, s\sqrt{\textstyle\sum_i x_i^2/(nS_{xx})}
> $$
>
> and test statistic $t=\dfrac{b_0-\beta_{00}}{s\sqrt{\sum_i x_i^2/(nS_{xx})}}$.

Mechanically identical to the $\beta_1$ case, just with the intercept's own standard error. Less commonly the target of scientific interest than $\beta_1$, but needed to fully characterize the fitted line.

:::

> [!ASIDE]
>
> **Example 11.4:** 95% CI for $\beta_0$ (same data): $0.2132 < \beta_0 < 7.4461$. **Example 11.5:** testing $H_0:\beta_0=0$ vs $H_1:\beta_0\neq0$: $t=\frac{3.829633-0}{3.2295\sqrt{41086/[(33)(4152.18)]}}=2.17$, $P\approx0.038$ — reject, $\beta_0\neq0$.

:::

> [!IMPORTANT]
>
> #### coefficient of determination $R^2$
>
> $$
> R^2 = 1 - \frac{SSE}{SST}, \qquad SST=\textstyle\sum_i(y_i-\bar y)^2
> $$

Proportion of total variability in `y` explained by the fitted model. $R^2=1$ for a perfect fit, $R^2\approx0$ when the model explains almost nothing. Use it to gauge overall fit quality, but **don't** use it alone to compare models with different numbers of terms — adding *any* regressor can only increase (never decrease) $R^2$, so it rewards overfitting rather than genuine improvement (this issue is revisited in Ch. 12).

:::

> [!ASIDE]
>
> Pollution data: MINITAB printout reports $R^2=91.3\%$ — the straight-line model explains 91.3% of the variability in COD reduction.

## &sect; 11.6 prediction

Two distinct interval types for a given $x_0$ — don't conflate them.

:::

> [!IMPORTANT]
>
> #### CI for the mean response $\mu_{Y|x_0}$
>
> $$
> \hat y_0 \pm t_{\alpha/2}\, s\sqrt{\frac{1}{n}+\frac{(x_0-\bar x)^2}{S_{xx}}}
> $$

Interpreted like any ordinary CI on a population parameter — it targets the (unknown, fixed) mean of `Y` at `x0`. Use when the question is "what's the average `Y` at this `x`?"

:::

> [!ASIDE]
>
> **Example 11.6:** at $x_0=20$: $\hat y_0 = 3.829633+(0.903643)(20)=21.9025$, and the 95% CI on $\mu_{Y|20}$ is $20.1071 < \mu_{Y|20} < 23.6979$.

:::

> [!IMPORTANT]
>
> #### prediction interval for a single future $y_0$
>
> $$
> \hat y_0 \pm t_{\alpha/2}\, s\sqrt{1+\frac{1}{n}+\frac{(x_0-\bar x)^2}{S_{xx}}}
> $$

Always **wider** than the CI on the mean (extra "+1" term accounts for the individual observation's own error, not just uncertainty in estimating the mean). This interval covers a *future random value* $y_0$, not a fixed parameter — 95% of such intervals will contain the corresponding future observation, not "the mean." Use when the question is "what will *this* observation actually be?" — usually the more practically relevant interval.

:::

> [!ASIDE]
>
> **Example 11.7:** same $x_0=20$: 95% prediction interval $15.0585 < y_0 < 28.7464$ — much wider than the $\mu_{Y|20}$ CI above, as expected.

## &sect; 11.7-11.9 model choice, ANOVA F-test, and lack-of-fit

Compressed — mostly procedural/qualitative material building toward the ANOVA-based alternative to the `t`-test on $\beta_1$.

Choice of model (§11.7): everything so far assumes the linear model is *correct*. If the true relationship involves an omitted regressor or is nonlinear, $b_1$ becomes a **biased** estimator of $\beta_1$ and $s^2$ is a biased estimator of $\sigma^2$. A simple linear fit is often still used as a reasonable local approximation when `x`'s range is narrow.

:::

> [!IMPORTANT]
>
> #### ANOVA F-test for $H_0:\beta_1=0$
>
> Partition total variability $SST = SSR + SSE$ where $SSR=\sum_i(\hat y_i-\bar y)^2$ (regression sum of squares, "explained"), $SSE=\sum_i(y_i-\hat y_i)^2$ (error sum of squares, "unexplained"). Under $H_0:\beta_1=0$,
>
> $$
> f = \frac{SSR/1}{SSE/(n-2)} = \frac{SSR}{s^2} \sim F(1, n-2)
> $$
>
> reject $H_0$ if $f > f_\alpha(1,n-2)$.

This is algebraically **identical** to the two-sided `t`-test on $\beta_1$ from §11.5 — in fact $t^2 = f(1,n-2)$ exactly. Use the `t`-test when you need a one-sided alternative or a CI; use the `F`/ANOVA form when you want the standard regression-output table (Source/DF/SS/MS/F/P), which is what most statistical software reports by default.

:::

> [!ASIDE]
>
> Pollution-data printout: Regression 1 df, $F=325.08$, $P<0.001$.

Lack-of-fit test (§11.9): available only with *repeated* observations at each distinct `x` value. Splits $SSE$ into a **pure error** component (variation among repeats at the same `x` — always unbiased for $\sigma^2$ regardless of model correctness) and a **lack-of-fit** component (variation of the repeat-group means around the fitted line, $k-2$ df for `k` distinct `x` values). A significant lack-of-fit `F`-test signals the linear model itself is inadequate, independent of pure random noise — useful for diagnosing whether $s^2$ is inflated by real curvature, or just by noise.

§11.10-11.11 (data plots/transformations, case study): practical guidance only — plot residuals to check assumptions, and consider transformations (e.g. plotting `ln y` against `x`) when a residual or normal probability plot shows systematic curvature rather than random scatter; compare $R^2$ and residual patterns before vs. after transforming to judge whether it helped. No new formulas.

## &sect; 11.12 correlation

Reframes the setup: instead of `x` fixed/measured without error, treat *both* `X` and `Y` as random, jointly following a **bivariate normal distribution** with population correlation coefficient $\rho$.

:::

> [!IMPORTANT]
>
> #### population and sample correlation coefficient
>
> Population correlation $\rho$ satisfies $\rho^2 = \beta_1^2 \sigma_X^2/\sigma_Y^2$, with $-1\le\rho\le1$, and $\rho=\pm1$ iff the relationship is perfectly linear, $\rho=0$ iff $\beta_1=0$ (no linear relationship). Estimated by the **sample (Pearson) correlation coefficient**
>
> $$
> r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}} = b_1\sqrt{S_{xx}/S_{yy}}
> $$

$r^2$ (the **sample coefficient of determination**) equals $SSR/S_{yy}$ — same quantity as $R^2$ in §11.5, just derived from the correlation framework: it's the proportion of `Y`'s variation explained by the linear relationship with `X`. Don't over-interpret magnitude linearly — $r=0.6$ is not "twice as good" as $r=0.3$, compare via $r^2$ instead. Also, $r \approx 0$ signals lack of *linear* association, not lack of association — a strong quadratic relationship can still yield $r\approx0$.

:::

> [!ASIDE]
>
> **Example 11.10** (29 loblolly pines, specific gravity `x` vs. modulus of rupture `y`): $S_{xx}=0.11273$, $S_{yy}=11{,}807{,}324{,}805$, $S_{xy}=34{,}422.27572$, so $r = \frac{34422.276}{\sqrt{(0.11273)(11807324805)}}=0.9435$, $r^2=0.8902$ — about 89% of the variation in `y` is explained by the linear relationship with `x`.

:::

> [!IMPORTANT]
>
> #### test for $\rho=0$
>
> Equivalent to testing $\beta_1=0$, and can be computed directly from $r$ alone via
>
> $$
> t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}} \sim t(n-2)
> $$

Use this shortcut when you only have `r` (not the full regression output) and want to test for any linear association.

:::

> [!ASIDE]
>
> **Example 11.11:** same pine data, $H_0:\rho=0$ vs $H_1:\rho\neq0$, $\alpha=0.05$: $t = \frac{0.9435\sqrt{27}}{\sqrt{1-0.9435^2}}=14.79$, $P<0.0001$ — reject, strong linear association.

:::

> [!IMPORTANT]
>
> #### test for general $\rho=\rho_0$
>
> Using Fisher's transformation, $\frac{1}{2}\ln\frac{1+r}{1-r}$ is approximately normal with mean $\frac{1}{2}\ln\frac{1+\rho}{1-\rho}$ and variance $1/(n-3)$. Test statistic:
>
> $$
> z = \frac{\sqrt{n-3}}{2}\ln\left[\frac{(1+r)(1-\rho_0)}{(1-r)(1+\rho_0)}\right]
> $$

Use when testing a *specific* nonzero hypothesized correlation — the `t`-test above only handles $\rho_0=0$.

:::

> [!ASIDE]
>
> **Example 11.12:** same pine data, $H_0:\rho=0.9$ vs $H_1:\rho>0.9$, $\alpha=0.05$: $z=\frac{\sqrt{26}}{2}\ln\frac{(1.9435)(0.1)}{(0.0565)(1.9)}=1.51$, $P=0.0655$ — do not reject at 0.05, but evidence leans toward $\rho\le0.9$.

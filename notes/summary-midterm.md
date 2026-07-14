## ch 1 &mdash; descriptive statistics

- **sample mean** $\bar{x} = \sum_{i=1}^n x_i / n$
- **sample median** $\tilde{x}$: middle value of sorted sample (avg of two middle values if `n` even); robust to outliers
- **sample variance/std dev** $s^2 = \sum (x_i-\bar{x})^2/(n-1)$, $s = \sqrt{s^2}$, `n-1` = degrees of freedom

## ch 2 &mdash; probability

- **sample space** `S`: set of all possible outcomes
- **event**: subset of `S`
- **complement** `A'`: elements of `S` not in `A`
- **intersection** $A \cap B$: elements common to both
- **mutually exclusive**: $A \cap B = \phi$
- **union** $A \cup B$: elements in `A` or `B` or both
- **multiplication rule**: `n_1` ways then `n_2` ways &rarr; $n_1 n_2$ total, generalizes to `k` ops: $n_1 n_2 \cdots n_k$.
- **permutation**: ordered arrangement of objects
- **factorial** $n! = n(n-1)\cdots 1$, $0!=1$
- **permutations of n objects**: `n!`
- **permutations, n objects taken r at a time** ${}_nP_r = n!/(n-r)!$
- **circular permutations**: $(n-1)!$
- **permutations w/ repeated objects** (`n_1` of kind 1, ..., `n_k` of kind k): $n!/(n_1! \cdots n_k!)$
- **partitioning n objects into r cells**, $n_1, \ldots, n_r$ per cell where $\sum n_i = n$: $\binom{n}{n_1,\ldots,n_r} = n!/(n_1!\cdots n_r!)$
- **combinations** $\binom{n}{r} = n!/(r!(n-r)!)$
- **probability of event A**: sum of weights of sample points in `A`; $0 \le P(A) \le 1$, $P(\phi)=0$, $P(S)=1$, additive over mutually exclusive events
- **equally likely outcomes**: $P(A) = n/N$
- **additive rule (2 events)**: $P(A\cup B) = P(A)+P(B)-P(A\cap B)$
  - mutually exclusive: $P(A\cup B)=P(A)+P(B)$, extends to `n` mutually exclusive events; if $A_1,\ldots,A_n$ partition `S`, sums to 1
- **additive rule (3 events)**: $P(A\cup B\cup C) = P(A)+P(B)+P(C) - P(A\cap B)-P(A\cap C)-P(B\cap C) + P(A\cap B\cap C)$
- **complementary events**: $P(A)+P(A')=1$
- **conditional probability** $P(B|A) = P(A\cap B)/P(A)$, for $P(A)>0$
- **independent events**: $P(B|A)=P(B)$ or $P(A|B)=P(A)$, else dependent
- **product rule**: $P(A\cap B) = P(A)P(B|A) = P(B)P(A|B)$
- **special product rule (independent)**: $P(A\cap B) = P(A)P(B)$
- **multiplicative rule, k events**: $P(A_1\cap\cdots\cap A_k) = P(A_1)P(A_2|A_1)\cdots P(A_k|A_1\cap\cdots\cap A_{k-1})$, if independent, $= P(A_1)\cdots P(A_k)$
- **mutual independence**: every subset $A_{i_1},\ldots,A_{i_k}$ satisfies $P(A_{i_1}\cap\cdots\cap A_{i_k}) = P(A_{i_1})\cdots P(A_{i_k})$, pairwise independence alone insufficient

### approaches: cards, dice, & urns

- **card problems**: count via combinations. Pick `r` from a suit/rank group with $\binom{k}{r}$, multiply the counts of independent groups together (multiplication rule, e.g. 2 aces & 3 jacks: $\binom{4}{2}\binom{4}{3}$), then divide by the total ways to draw the hand, $\binom{N}{n}$ (e.g. $\binom{52}{5}$ for a 5-card hand). For cards drawn **in succession without replacement**, chain conditional probabilities instead (product rule/theorem 2.10 & 2.12) &mdash; each successive draw's denominator shrinks by 1 (e.g. $P(A_1)=\frac{2}{52}$, $P(A_2|A_1)=\frac{8}{51}$, ...).
- **dice problems**: each die is an independent trial &mdash; use the multiplication rule for sample space size ($6^k$ for `k` dice), then either enumerate favorable outcomes directly or multiply per-die probabilities together (independence). Joint outcomes across dice (e.g. sum, or one die's value vs. another's) are handled as a joint pmf over the pair (ch 3).
- **urn problems**: sampling **without replacement** &mdash; count via combinations, $\frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}}$, i.e. the hypergeometric distribution (ch 5). Sampling **with replacement** &mdash; draws are independent trials with a fixed probability each time, i.e. the binomial distribution (ch 5).

## ch 3 &mdash; random variables & distributions

- **random variable**: function mapping each sample-space element to a real number
- **discrete sample space**: finite, or countably infinite (like whole numbers)
- **continuous sample space**: as many possibilities as points on a line segment; **discrete RV** = countable outcomes (counts); **continuous RV** = values on a continuous interval (measurements)
- **pmf** `f(x)` of discrete `X`: $f(x)\ge 0$, $\sum_x f(x)=1$, $P(X=x)=f(x)$
- **CDF (discrete)** $F(x) = P(X\le x) = \sum_{t\le x} f(t)$
- **pdf** `f(x)` of continuous `X`: $f(x)\ge0$, $\int_{-\infty}^{\infty} f(x)dx=1$, $P(a<X<b)=\int_a^b f(x)dx$
- **CDF (continuous)** $F(x) = \int_{-\infty}^x f(t)dt$
- **joint pmf** `f(x,y)`: $f\ge0$, $\sum_x\sum_y f(x,y)=1$, $P(X=x,Y=y)=f(x,y)$
- **joint pdf** `f(x,y)`: $f\ge0$, $\iint f(x,y)\,dx\,dy=1$, $P[(X,Y)\in A]=\iint_A f$
- **marginal distributions**: $g(x)=\sum_y f(x,y)$, $h(y)=\sum_x f(x,y)$ (discrete); $g(x)=\int f(x,y)dy$, $h(y)=\int f(x,y)dx$ (continuous)
- **conditional distribution**: $f(y|x) = f(x,y)/g(x)$, $g(x)>0$, symmetric $f(x|y)=f(x,y)/h(y)$
- **statistical independence**: $f(x,y) = g(x)h(y)$ for all $(x,y)$
- **mutual statistical independence** (n vars): $f(x_1,\ldots,x_n) = f_1(x_1)\cdots f_n(x_n)$

## ch 4 &mdash; expectation

- **mean/expected value** $\mu = E(X) = \sum_x xf(x)$ or $\int xf(x)dx$
- **E of function of RV** $E[g(X)] = \sum_x g(x)f(x)$ or $\int g(x)f(x)dx$
- **E of function of two RVs** $E[g(X,Y)] = \sum\sum g(x,y)f(x,y)$ or $\iint g(x,y)f(x,y)\,dx\,dy$, $g=X$ gives $\mu_X$, $g=Y$ gives $\mu_Y$
- **variance** $\sigma^2 = E[(X-\mu)^2]$, std dev $\sigma = \sqrt{\sigma^2}$
- **variance, preferred form** $\sigma^2 = E(X^2)-\mu^2$
- **variance of g(X)** $\sigma^2_{g(X)} = E\{[g(X)-\mu_{g(X)}]^2\}$
- **covariance** (abbrev. _**cov**_) $\sigma_{XY} = E[(X-\mu_X)(Y-\mu_Y)]$, 0 if `X`,`Y` independent (converse not generally true &mdash; only captures linear relation)
- **covariance, preferred form** $\sigma_{XY} = E(XY) - \mu_X\mu_Y$
- **correlation coefficient** $\rho_{XY} = \sigma_{XY}/(\sigma_X\sigma_Y)$, $-1\le\rho_{XY}\le1$, unit-free; $\rho=\pm1$ iff exact linear dependency
- **E of linear function**: $E(aX+b) = aE(X)+b$, so $E(b)=b$, $E(aX)=aE(X)$
- **E of sum/diff, one RV**: $E[g(X)\pm h(X)] = E[g(X)]\pm E[h(X)]$
- **E of sum/diff, two RVs**: $E[g(X,Y)\pm h(X,Y)] = E[g(X,Y)]\pm E[h(X,Y)]$, so $E[g(X)\pm h(Y)]=E[g(X)]\pm E[h(Y)]$ and $E[X\pm Y]=E[X]\pm E[Y]$
- **E of product, independent RVs**: $E(XY) = E(X)E(Y)$, implies $\sigma_{XY}=0$
- **variance of linear combo (2 RVs)** $\sigma^2_{aX+bY+c} = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\sigma_{XY}$
  - const doesn't change var, scaling by `a` scales var by $a^2$, if independent cross term drops (holds with `+` or `-`), for `n` mutually independent $X_i$: $\sigma^2_{\sum a_iX_i} = \sum a_i^2\sigma_{X_i}^2$

## ch 5 &mdash; discrete distributions

- **binomial distribution** $b(x;n,p) = \binom{n}{x}p^xq^{n-x}$, $q=1-p$, `x`=# successes in `n` independent trials; mean/var: $\mu=np$, $\sigma^2=npq$
- **multinomial distribution**: generalizes binomial to `k` outcomes $E_1,\ldots,E_k$ w/ probs $p_1,\ldots,p_k$, $f(x_1,\ldots,x_k;p_1,\ldots,p_k,n) = \binom{n}{x_1,\ldots,x_k}p_1^{x_1}\cdots p_k^{x_k}$, $\sum x_i=n$, $\sum p_i=1$
- **negative binomial distribution**: repeated trials where X is number of trial on which `k`th success occurs: $b^*(x; k, p) = \binom{x-1}{k-1} p^k q^{x-k}, \quad x = k, k+1, k+2, \ldots$
- **geometric distribution**: special case of negative binomial where $k = 1$ to find number of trial on which _first_ success occurs: $g(x; p) = pq^{x-1}, \quad x = 1, 2, 3, \ldots$ ; mean/var: $\mu = \frac{1}{p}$, $\sigma^2 = \frac{1-p}{p^2}$
- **Poisson process properties**: (1) outcome counts in disjoint intervals/regions independent; (2) prob of one outcome in short interval $\propto$ length, indep of outside count; (3) prob of >1 outcome in short interval negligible
- **Poisson distribution** $p(x;\lambda t) = e^{-\lambda t}(\lambda t)^x/x!$, `λ` = avg outcomes per unit time/space, mean = variance = $\lambda t$
- **Poisson approx to binomial**: as $n\to\infty$, $p\to0$, $np\to\mu$ constant, $b(x;n,p)\to p(x;\mu)$, useful when `n` large & `p` near 0 (or 1, by swapping success/failure)

## ch 6 &mdash; continuous distributions

- **uniform distribution** $f(x;A,B) = 1/(B-A)$ on $[A,B]$, else 0; mean/var: $\mu=(A+B)/2$, $\sigma^2=(B-A)^2/12$
- **normal distribution** $n(x;\mu,\sigma) = \frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/2\sigma^2}$, mode/symmetric about $\mu$, inflection at $\mu\pm\sigma$, asymptotic, area=1; mean = $\mu$, var = $\sigma^2$
- **standard normal**, $\mu=0,\sigma^2=1$: $Z = (X-\mu)/\sigma$, giving $P(x_1<X<x_2)=P(z_1<Z<z_2)$
- **normal approx to binomial**: $Z=(X-np)/\sqrt{npq} \to n(z;0,1)$ as $n\to\infty$, good for large `n`, `p` not near 0/1, or small `n` if $p\approx1/2$.
- **chi-squared distribution** $f(x;v) = \frac{1}{2^{v/2}\Gamma(v/2)}x^{v/2-1}e^{-x/2}$, `v` = degrees of freedom (positive integer); mean = `v`, var = $2v$, central to inference/hypothesis testing/ANOVA

## ch 7 &mdash; moments, mgfs, sums of RVs

- **rth moment about origin** $\mu_r' = E(X^r)$, $\mu=\mu_1'$, $\sigma^2 = \mu_2'-\mu^2$
- **moment-generating function** $M_X(t) = E(e^{tX})$, exists only if sum/integral converges
- **generating moments from mgf**: $\left.d^rM_X(t)/dt^r\right|_{t=0} = \mu_r'$
- **uniqueness theorem**: $M_X(t)=M_Y(t)$ for all `t` &rArr; `X`,`Y` same distribution
- **mgf of X+a**: $M_{X+a}(t) = e^{at}M_X(t)$
- **mgf of aX**: $M_{aX}(t) = M_X(at)$
- **mgf of sum of independent RVs**: $M_{X_1+\cdots+X_n}(t) = M_{X_1}(t)\cdots M_{X_n}(t)$, combined w/ uniqueness thm, IDs distribution of sum from product of mgfs (e.g. sum of independent Poissons is Poisson)
- **linear combo of independent normals**: $Y=a_1X_1+\cdots+a_nX_n$ is normal w/ $\mu_Y=\sum a_i\mu_i$, $\sigma_Y^2=\sum a_i^2\sigma_i^2$ (normal & Poisson are "reproductive")
- **sum of independent chi-squareds**: $Y=X_1+\cdots+X_n$, with $X_i$ having $v_i$ df, is chi-squared w/ $v=\sum v_i$ (also reproductive)
- **sum of squared standardized iid normals**: $Y=\sum\left(\frac{X_i-\mu}{\sigma}\right)^2$ is chi-squared w/ $v=n$
- **sum of squared standardized independent normals**, differing $\mu_i,\sigma_i$: $Y=\sum\left(\frac{X_i-\mu_i}{\sigma_i}\right)^2$ is chi-squared w/ $v=n$

## &sect; 3.1 concept of a random variable

### definition 3.1, random variable

> [!IMPORTANT]
>
> A **random variable** is a function that associates a real number with
> each element in the sample space.

Signal: foundational — invoked implicitly whenever a problem defines
`X` as "the number of...", "the amount of...", or "the outcome
when..." mapping an experiment's results onto numbers.

### definition 3.2, discrete sample space

> [!IMPORTANT]
>
> If a sample space contains a finite number of possibilities or an
> unending sequence with as many elements as there are whole numbers,
> it is called a **discrete sample space**.

### definition 3.3, continuous sample space

> [!IMPORTANT]
>
> If a sample space contains an infinite number of possibilities equal
> to the number of points on a line segment, it is called a
> **continuous sample space**.
>
> A random variable is a **discrete random variable** if its set of
> possible outcomes is countable, & a **continuous random variable** if
> it can take on values on a continuous scale (an entire interval of
> numbers). Discrete random variables typically represent count data;
> continuous random variables typically represent measured data.

Signal: the first fork in any ch3+ problem — does `X` count things
(die face, # defectives: discrete, e.g. hw-03 #10, #15) or measure
something on a continuum (shelf life in days, hours of use: continuous,
e.g. hw-03 #6, #7)? That answer decides pmf/discrete-cdf (§3.2) vs.
pdf/continuous-cdf (§3.3) machinery for the rest of the problem.

## &sect; 3.2 discrete probability distributions

### definition 3.4, discrete probability mass function requirements:

> [!IMPORTANT]
>
> The function `f(x)` is a **probability mass function** (pmf) of the discrete random variable `X` if:
>
> 1. $f(x) \geq 0$
> 2. $\sum_x f(x) = 1$
> 3. $\mathbb{P}(X = x) = f(x)$

Signal: a problem gives (or asks you to derive) `X`'s probabilities at
specific countable values, often as a table — e.g. hw-04 #1's
imperfections-per-10-meters table — and possibly asks you to check
these three conditions hold.

### definition 3.5, cumulative distribution function

> [!IMPORTANT]
>
> The cumulative distribution function `F(x)` of a discrete random variable `X`
> with probability distribution `f(x)` is
>
> $$
> F(x) = P(X \leq x) = \sum_{t \leq x} f(t), \text{ for } -\infty < x < \infty
> $$

Signal: wording asks for `F(x)` directly, "at most `x`" probabilities,
or to graph a step function from a known pmf — e.g. hw-03 #15
(build `F(x)` from exercise 3.11's hypergeometric-shaped pmf), #16
(graph it).

## &sect; 3.3 continuous probability distributions

### definition 3.6, continuous probability density function requirements:

> [!IMPORTANT]
>
> The function `f(x)` is a **probability density function** (pdf) for the
> continuous random variable `X`, defined over the set of real numbers, if:
>
> 1. $f(x) \geq 0, \text{ for all } x \in \mathcal{R}$
> 2. $\int_{-\infty}^{\infty} f(x) dx = 1$
> 3. $\mathbb{P}(a < X < b) = \int_a^b f(x) dx$

Signal: `X` is measured (§3.1), `f(x)` is given as a formula over an
interval, & the problem either asks to verify it's a valid density
(integrates to 1, e.g. hw-03 #32(a)) or to integrate it over a range
for a probability (hw-03 #6, #7, #36).

### definition 3.7, continuous cumulative distribution function

> [!IMPORTANT]
>
> The cumulative distribution function `F(x)` of a continuous random variable
> `X` with density function `f(x)` is
>
> $$
> F(x) = P(X \leq x) = \int_{-\infty}^x f(t) dt, \text{ for } -\infty < x < \infty
> $$

Signal: works in either direction from definition 3.6 — a problem may
give `F(x)` directly & ask you to differentiate for `f(x)`, or vice
versa — e.g. hw-03 #14, which asks for the same probability computed
both from a given `F(x)` and from the `f(x)` recovered from it.

## &sect; 3.4 joint probability distributions

### definition 3.8, joint pmf for discrete variables

> [!IMPORTANT]
>
> The function `f(x,y)` is a joint pmf of the discrete random variables
> `X` & `Y` if
>
> 1. $f(x,y) \geq 0$ for all $(x,y)$,
> 2. $\sum_x \sum_y f(x,y) = 1$,
> 3. $P(X = x, Y = y) = f(x,y)$.
>
> For any region `A` in the `xy` plane, $P[(X,Y) \in A] = \sum \sum_A f(x,y)$.

Signal: two *discrete* random variables presented together in an
`x` vs. `y` probability table — e.g. hw-03 #49, #50, #51, #52.

### definition 3.9, joint pdf for continuous variables

> [!IMPORTANT]
>
> The function `f(x,y)` is a joint pdf of the continous random variables
> `X` & `Y` if
>
> 1. $f(x,y) \geq 0$ for all $(x,y)$,
> 2. $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dx dy = 1$,
> 3. $P[(X,Y) \in A] = \sum \sum_A f(x,y)$, for any region `A` in the `xy` plane.

Signal: two *continuous* random variables with a single formula
$f(x,y)$ given over a 2D region — e.g. hw-03 #42, #45, #47 (kerosene
tank levels, cable/mold diameters).

### definition 3.10, marginal distributions in joint probability

> [!IMPORTANT]
>
> The marginal distribution of `X` & `Y` alone are
>
> $$
> g(x) = \sum_y f(x,y) \text{ and } h(y) = \sum_x f(x,y)
> $$
>
> for the discrete case, and
>
> $$
> g(x) = \int_{-\infty}^{\infty} f(x,y) dy \text{ and } h(y) = \int_{-\infty}^{\infty} f(x,y) dx
> $$
>
> for the continuous case.

Signal: phrase "find the marginal distribution of `X` (or `Y`)" —
sum/integrate the joint distribution over the *other* variable — e.g.
hw-03 #49(a)/(b), #50, #52(b)/(c).

### definition 3.11, conditional joint probability distributions

> [!IMPORTANT]
>
> Let `X` & `Y` be two random variables (discrete or continuous). The conditional distribution of the random variable `Y` given that `X = x` is
>
> $$
> f(y|x) = \frac{f(x,y)}{g(x)}, \text{ provided } g(x) > 0.
> $$
>
> Similarly, the conditional distribution of `X` given that `Y = y` is
>
> $$
> f(x|y) = \frac{f(x,y)}{h(y)}, \text{ provided } h(y) > 0.
> $$
>
> for the continuous case.

Signal: "find $P(\ldots \mid Y = y)$ " (or `X = x`) starting from a
joint distribution — divide the joint by the relevant marginal
(definition 3.10) — e.g. hw-03 #42, #47(b), #49(c).

### definition 3.12, statistical independence

> [!IMPORTANT]
>
> Let `X` & `Y` be two random variables (discrete or continuous) with joint
> distribution $f(x,y)$ & marginal distributions $g(x)$ & $h(y)$ respectively.
> The random variables `X` & `Y` are said to be statistically independent if &
> only if
>
> $$
> f(x,y) = g(x)h(y)
> $$
>
> for all $(x,y)$ within their range.

Signal: "determine if `X` and `Y` are independent" given a joint
density/table — compute the marginals (definition 3.10) & check
whether their product reconstructs the joint — e.g. hw-03 #47(a).

### definition 3.13, mutual statistical independence

> [!IMPORTANT]
>
> Generalizes definition 3.12, above, to `n` random variables.
> Let `X_1, X_2, ..., X_n` be `n` random variables (discrete or
> continuous) with joint distribution $f(x_1, x_2, \ldots, x_n)$ &
> marginal distributions $f_1(x_1), f_2(x_2), \ldots, f_n(x_n)$,
> respectively. The random variables `X_1, X_2, ..., X_n` are said to be
> **mutually statistically independent** if & only if
>
> $$
> f(x_1, x_2, \ldots, x_n) = f_1(x_1) f_2(x_2) \cdots f_n(x_n)
> $$
>
> for all $(x_1, x_2, \ldots, x_n)$ within their range.

Signal: same check as definition 3.12, extended to 3+ variables at
once — e.g. underlies why $n$ independent Bernoulli trials multiply
together in the binomial pmf (§5.2).

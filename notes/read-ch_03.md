## &sect; 3.1 concept of a random variable

### definition 3.1, random variable

> [!IMPORTANT]
>
> A **random variable** is a function that associates a real number with
> each element in the sample space.

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

## &sect; 3.2 discrete probability distributions

### definition 3.4, discrete probability mass function requirements:

> [!IMPORTANT]
>
> The function `f(x)` is a **probability mass function** (pmf) of the discrete random variable `X` if:
>
> 1. $f(x) \geq 0$
> 2. $\sum_x f(x) = 1$
> 3. $\mathbb{P}(X = x) = f(x)$

### definition 3.5, cumulative distribution function

> [!IMPORTANT]
>
> The cumulative distribution function `F(x)` of a discrete random variable `X`
> with probability distribution `f(x)` is
>
> $$
> F(x) = P(X \leq x) = \sum_{t \leq x} f(t), \text{ for } -\infty < x < \infty
> $$

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

### definition 3.7, continuous cumulative distribution function

> [!IMPORTANT]
>
> The cumulative distribution function `F(x)` of a continuous random variable
> `X` with density function `f(x)` is
>
> $$
> F(x) = P(X \leq x) = \int_{-\infty}^x f(t) dt, \text{ for } -\infty < x < \infty
> $$

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

### definition 3.9, joint pdf for continuous variables

> [!IMPORTANT]
>
> The function `f(x,y)` is a joint pdf of the continous random variables
> `X` & `Y` if
>
> 1. $f(x,y) \geq 0$ for all $(x,y)$,
> 2. $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dx dy = 1$,
> 3. $P[(X,Y) \in A] = \sum \sum_A f(x,y)$, for any region `A` in the `xy` plane.

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

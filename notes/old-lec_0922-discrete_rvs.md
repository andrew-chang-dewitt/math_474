# discrete random variables

## some practice

$$
\begin{aligned}
(1) &&      \mu_X &= \sum_{i=1}^n x_i * P(X=x_i)             && \textit{Mean of $X$} \\
(2) && \sigma_X^2 &= \sum_{i=1}^n (x_i - /mu_X)^2 * P(X=x_i) && \textit{Variance of R.V. $X$} \\
(3) &&   \sigma_X &= \sqrt{\sigma_X^2}                       && \textit{Std. dev. of $X$} \\
\end{aligned}
$$

an ex:

> Xavier's production line & num. faulty items per hour, expressed by table:
>
> | x      | 0    | 1   | 2    | 3   | 4   |
> | ------ | ---- | --- | ---- | --- | --- |
> | P(X=x) | 0.15 | 0.3 | 0.25 | 0.2 | 0.1 |

$$
\begin{aligned}
(4)  && \because   &&         x &:= \textit{num hours}, \& \\
(5)  &&            &&      P(X) &:= \textit{prob of broken part for some random nubmer of hours} \\
\\
     &&            &&      \mu_x &= \sum_{i=1}^n x_i * P(X=x_i) &&
  \textit{\{1\}} \\
     &&            &&            &= (0 * 0.15) + (1 * 0.30) + (2 * 0.25) + (3 * 0.20) + (4 * 0.10) &&
  \textit{\{4,5\}} \\
     &&            &&            &= 0 + 0.3 + 0.5 + 0.6 + 0.4 \\
(6)  && \therefore &&      \mu_x &= 1.8 \\
\\
     &&            && \sigma_X^2 &= \sum_{i=1}^n (x_i - /mu_X)^2 * P(X=x_i) &&
  \textit{\{2\}} \\
     &&            &&            &= [(0 - 1.8)^2 * (0.15)] \\
     &&            &&            &+ [(1 - 1.8)^2 * (0.30)] \\
     &&            &&            &+ [(2 - 1.8)^2 * (0.25)] \\
     &&            &&            &+ [(3 - 1.8)^2 * (0.20)] \\
     &&            &&            &+ [(4 - 1.8)^2 * (0.10)] &&
  \textit{\{4,5,6\}} \\
     &&            &&            &= (3.24 * 0.15) + (0.64 * 0.3) + (0.04 * 0.25) + (1.44 * 0.20) + (4.84 * 0.10) \\
(7)  && \therefore && \sigma_X^2 &= 1.46 \\
\\
     &&            &&   \sigma_X &= \sqrt{\sigma_X^2} &&
  \textit{\{3\}} \\
     &&            &&            &= \sqrt{1.46} &&
  \textit{\{7\}} \\
(8)  && \therefore &&   \sigma_X &\approx 1.21 \quad\blacksquare
\end{aligned}
$$

## transformations

R.V.s can have their shape changed using _transformations_.

### linear: $X \text{ -> } aX + b$

does two things:

1. adding $b$:
   - shifts histogram horizontally
   - $\mu$ increases by $b$
   - $\sigma$ has no change
2. multiplying by $a$ does one of two things:
   1. $a > 1$
      - "stretches" histogram
      - $\mu$ has no change, $iff \mu_X \equiv 0$, else shifts
      - $\sigma$ multiplies by $a$
   2. $a < 1$
      - "shrinks" histogram
      - $\mu$ has no change, $iff \mu_X \equiv 0$, else shifts
      - $\sigma$ ???

### examples?

> [!TODO]
>
> catch up this...

## probability mass function $pmf$

$$
\begin{aligned}
    && \because   && X    &:= \text{some R.V. of $x$}, \\
    &&            &&      &\land P(X) \\
\\
(1) &&            &&      &f(x) > 0 \\
(2) &&            &&      &f x \in S \\
(3) &&            &&      &\sum_{x \in S} f(x) = 1 \\
\\
    && \therefore && (1) \land (2) \land (3) &\implies f(x) = P(X=x) \\
\end{aligned}
$$

## recap:

we talked about...

- histograms
- distributions (tables, forumulas)
- mean $\mu$
- variance $\sigma^2$
- std. dev $\sigma$

...of discrete random variables.

discrete R.V.s are _models_, **not** _data_

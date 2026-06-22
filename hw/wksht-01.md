---
title: Worksheet 1
meta:
  skipRenderTitle: true
---

MATH 474 Probability and Statistics \
Summer 2026

Andrew Chang-DeWitt \
Jun. 18, 2026

# Worksheet 1

## intro questions

- I am an IIT student, graduating at the end of the summer.
- After Calculus, I have taken differential equations, linear algebra, & some forms of discrete math (focused on computer science fundamentals).
- For office hours, I'm generally most available on weekdays after 10am & before 2pm.

## titanic questions

:::{.question}

> given this data about the titanic, answer the following questions:
>
> | class | 1st | 2nd | 3rd | crew | total |
> | ----- | --- | --- | --- | ---- | ----- |
> | alive | 203 | 118 | 178 | 212  | 711   |
> | dead  | 122 | 167 | 528 | 673  | 1490  |
> | total | 325 | 285 | 706 | 885  | 2201  |
>
> | class | 1st  | 2nd  | 3rd  | crew | total |
> | ----- | ---- | ---- | ---- | ---- | ----- |
> | alive | 9.2  | 5.4  | 8.1  | 9.6  | 32.3  |
> | dead  | 5.5  | 7.6  | 24.0 | 30.6 | 67.7  |
> | total | 14.8 | 12.9 | 32.1 | 40.2 | 100   |

:::

> [!NOTE]
>
> the following assumptions were made while answering the below questions:
>
> - what character was used in $\mathbb{P}(\text{survive} ? \text{3rd class})$
>   was a little unclear; I've assumed it is $|$ for conditional
>   probability in my answers below
> - questions 6, 7, & 8 in the slides duplicated questions 4, 2, & 3.
>   they have been omitted below.

### q1

:::{.question}

> $$
> \begin{aligned}
> \mathbb{P}(\text{survive} | \text{3rd class})
> \end{aligned}
> $$

:::

using the definition of conditional probability [Walpole, 9th edition, definition 2.10]:

$$
\begin{aligned}
\mathbb{P}(B|A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}, \;\text{for}\; \mathbb{P}(A) > 0
\tag{2.10}
\end{aligned}
$$

& defining `3rd class` & `survive` as the following events:

$$
\begin{aligned}
A &\coloneqq \text{3rd class} \\
B &\coloneqq \text{survived}
\end{aligned}
$$

we find the probability a passenger survived, provided they are in third class to be:

$$
\begin{aligned}
\mathbb{P}(B|A) &= \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}
  && \htmlClass{hljs-comment}{\textit{by def 2.10}} \\
                &= \frac{0.081}{0.321}
                  && \htmlClass{hljs-comment}{\textit{by percentages table above}} \\
\mathbb{P}(B|A) &\approx 0.252 \space_\blacksquare
\end{aligned}
$$

### q2

:::{.question}

> $$
> \begin{aligned}
> \mathbb{P}(\text{1st class} | \text{survive})
> \end{aligned}
> $$

:::

define an event for `1st class` as `C`:

$$
\begin{aligned}
C &\coloneqq \text{1st class}
\end{aligned}
$$

then the probability that a passenger who survived is in first class is:

$$
\begin{aligned}
\mathbb{P}(C|B) &= \frac{\mathbb{P}(B \cap C)}{\mathbb{P}(B)}
  && \htmlClass{hljs-comment}{\textit{by def 2.10}} \\
                &= \frac{0.092}{0.323}
                  && \htmlClass{hljs-comment}{\textit{by percentages table above}} \\
\mathbb{P}(C|B) &\approx 0.285 \space_\blacksquare
\end{aligned}
$$

### q3

:::{.question}

> $$
> \begin{aligned}
> \mathbb{P}(\text{1st class})
> \end{aligned}
> $$

:::

this one's just a simple single event probability:

$$
\begin{aligned}
\mathbb{P}(C) &= 0.092 \space_\blacksquare && \htmlClass{hljs-comment}{\textit{by percentages table above}}
\end{aligned}
$$

### q4

:::{.question}

> $$
> \begin{aligned}
> \mathbb{P}(\text{survive} | \text{1st class})
> \end{aligned}
> $$

:::

the probability a passenger survives, provided they are in first class:

$$
\begin{aligned}
\mathbb{P}(B|C) &= \frac{\mathbb{P}(C \cap B)}{\mathbb{P}(C)}
  && \htmlClass{hljs-comment}{\textit{by def 2.10}} \\
                &= \frac{0.092}{0.148}
                  && \htmlClass{hljs-comment}{\textit{by percentages table above}} \\
\mathbb{P}(B|C) &\approx 0.622 \space_\blacksquare
\end{aligned}
$$

### q5

:::{.question}

> $$
> \begin{aligned}
> \mathbb{P}(\text{survive})
> \end{aligned}
> $$

:::

this one's just a simple single event probability:

$$
\begin{aligned}
\mathbb{P}(B) &= 0.323 \space_\blacksquare && \htmlClass{hljs-comment}{\textit{by percentages table above}}
\end{aligned}
$$

## ex. 2.10

:::{.question}

> given
>
> $$
> \begin{aligned}
> A &\coloneqq \{a, b, c\} \\
> B &\coloneqq \{b, c, d, e\}
> \end{aligned}
> $$
>
> find $A \cap B$, $A \cup B$, & $A^C$:

:::

$$
\begin{aligned}
A \cap B &= \{b, c\} \space_\blacksquare \\
A \cup B &= \{a, b, c, d, e\} \space_\blacksquare \\
     A^C &= S \setminus A, \text{ where $S$ is the sample space } \\
         &\quad\quad \text{unable to calculate as $S$ is undefined!} \\
\end{aligned}
$$

## important results

1. defined probability as the relationship between an event and the sample space
2. explored ways to count elements in a set/event & determine probabilities from related events

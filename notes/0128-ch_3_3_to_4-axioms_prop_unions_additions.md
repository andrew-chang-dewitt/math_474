---
title: "Probability & Statistics: axioms of probability & unions of events (&sect; 3.3, 3.4)"
description: "Starts with covering how to interpret probabilities & some axioms used to assist. Moves on to some set theory/operations (namely unions) & applies them to events & illustrates how that effects associated probabilities."
keywords:
  - "probability axioms"
  - "events"
  - "set theory"
  - "discrete math"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-28T11:25-06:00"
---

## agenda

- &sect; 3.3: interpretations & axioms of probability
- &sect; 3.4: unions of events & addition rules

## &sect; 3.3: interpretations & axioms of probability

remember, probability "quantifies the likihood of an
outcome of a random experiment occuring" as a number from
0 to 1, inclusive.

we can interpret this as a _relative frequency_; wherein
given a probability of some event, if we repeat the
experiment many times, the proportion/relative frequency
of that event's outcome is equal to it's probability.

a common type of problem in beginner settings is that of _equal probability_; e.g. a sample space of $N$ possible outcomes, each w/ a probability of $\frac{1}{N}$. if we have probabilities for every outcome in a sample space, $S$, then the probability of any event $E$ (denoted as $\mathbb{P}(E)$ ) is the sum of all the probabilities of all the outcomes in $E$:

$$
\begin{aligned}
  \mathbb{P}(E) &= \sum_{e \in E} \mathbb{P}(e), \text{ where} \\
                &S \coloneqq \text{some sample space} \\
                &E \subseteq S
\end{aligned}
$$

this holds even in the case of _un_-equal probabilities.

### axioms of probability

A Probability, $\mathbb{P}$, is a number assigned to each event, satisfying...

$$
\begin{align}
&\mathbb{P}(S) = 1 \\
&0 <= \mathbb{P}(E) <= 1 \\
&E_1 \cap E_2 = \empty \implies \mathbb{P}(E_1 \cup E_2) = \mathbb{P}(E_1) + \mathbb{P}(E_2), \text{ where} \\
\notag \\
&\quad\quad S \coloneqq \text{some sample space}, \notag \\
&\quad\quad E \subseteq S \notag \\
\end{align}
$$

these axioms begat some important consequences:

- $\mathbb{P}(\empty) = 0$, proven by:

  $$
  \begin{alignedat}{3}
  S \cap \empty = \empty
      &\implies \mathbb{P}(S \cup \empty)&\space = &\space \mathbb{P}(S) + \mathbb{P}(\empty)
          && \quad \textit{domination of $\cap$ \& axiom 3} \\
      &\implies             \mathbb{P}(S)&\space = &\space \mathbb{P}(S) + \mathbb{P}(\empty)
          && \quad \textit{identity of $\cup$} \\
      &\implies                         1&\space = &\space 1 + \mathbb{P}(\empty)
          && \quad \textit{axiom 1} \\
      &\implies        \mathbb{P}(\empty)&\space = &\space 1 - 1
          && \quad \textit{rearrange} \\
      &\implies        \mathbb{P}(\empty)&\space = &\space 0 \space_\blacksquare
          && \quad \textit{simplify} \\
  \end{alignedat}
  $$

- $\mathbb{P}(E') = 1 - \mathbb{P}(E)$

  $$
  \begin{alignedat}{3}
  E \cup E' = S
      &\implies  \mathbb{P}(S)&\space = &\space \mathbb{P}(E \cup E')
          && \quad \textit{definition of complement} \\
      &\implies  \mathbb{P}(S)&\space = &\space \mathbb{P}(E) + \mathbb{P}(E')
          && \quad \textit{axiom 3} \\
      &\implies \mathbb{P}(E')&\space = &\space \mathbb{P}(S) - \mathbb{P}(E)
          && \quad \textit{rearrange} \\
      &\implies \mathbb{P}(E')&\space = &\space 1 - \mathbb{P}(E) \space_\blacksquare
          && \quad \textit{axiom 1} \\
  \end{alignedat}
  $$

- $E_1 \subseteq E_2 \implies \mathbb{P}(E_1) \leq \mathbb{P}(E_2)$

  $$
  \begin{aligned}
  E_1 \subseteq E_2
      &\implies (\exist E_3 \neq \empty \text{ s.t. } E_3 = E_2 \setminus E_1)
          && \quad \textit{$\subseteq$ implies non-empty $E_3$} \\
      &\quad\quad\quad \lor (E_1 = E_2)
          && \quad \textit{or $E_1$ \& $E_2$ are equal} \\
      &\implies (E_1 \cup E_3 = E_2) \lor (E_1 = E_2)
          && \quad \textit{rearrange} \\
      &\implies (\mathbb{P}(E_1 \cup E_3) = \mathbb{P}(E_2)) \\
      &\quad\quad\quad \lor (\mathbb{P}(E_1) = \mathbb{P}(E_2))
          && \quad \textit{probabilities of each event} \\
      &\implies (\mathbb{P}(E_1) + \mathbb{P}(E_3) = \mathbb{P}(E_2))
          && \quad \textit{axiom 3} \\
      &\quad\quad\quad \lor (\mathbb{P}(E_1) = \mathbb{P}(E_2)) \\
      &\implies (\mathbb{P}(E_1) = \mathbb{P}(E_2) - \mathbb{P}(E_3))
          && \quad \textit{rearrange} \\
      &\quad\quad\quad \lor (\mathbb{P}(E_1) = \mathbb{P}(E_2)) \\
      &\implies (\mathbb{P}(E_1) < \mathbb{P}(E_2))
          && \quad \textit{$E_3 \cap E_1 \ne \empty \implies \mathbb{P}(E_3) > 0$} \\
      &\quad\quad\quad \lor (\mathbb{P}(E_1) = \mathbb{P}(E_2)) \\
      &\implies \mathbb{P}(E_1) \leq \mathbb{P}(E_2) \space_\blacksquare
          && \quad \textit{definition of $\leq$} \\
  \end{aligned}
  $$

## &sect; 3.4: unions of events & addition rules

> [!TODO]
>
> finish this section!

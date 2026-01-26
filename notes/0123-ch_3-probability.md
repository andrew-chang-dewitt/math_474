---
title: "Probability & Statistics: sample spaces & events (&sect; 3.1)"
description: "Introduction to probability core concepts&mdash;sample spaces & events."
keywords:
  - "events"
  - "sample spaces"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-23T11:25-06:00"
---

## &sect; 3.1.1: probability & random experiments

we're beginning the probability portion now, covering _**random
experiments**_&mdash;an experiment w/ uncontrollable inputs/noise
variables leading to variability (i.e. it gives different outcomes when
repeated).

```no-linenums
      controlled variables
            | | |
            v v v
          +--------+
input --> | system | --> output
          +--------+
            ^ ^ ^
            | | |
         noise variables
```

when discussing the chance of an outcome (or _**event**_) for a random
experiment we are talking about _**probability**_.

## &sect; 3.1.2: sample space

the set of all possible events for a random experiment is the _**sample
space**_, which we denote by $S$.

ex: rolling two dice:

$$
\begin{align}
S &\coloneqq \{ (i,j) : \forall i \in [1,6] \& \forall j \in [1,6] \} \\
  & \space = \{ (1,1), (1,2), ..., (1,6), (2,1), ... (6,6) \} \notag
\end{align}
$$

when you know something about your experiment/goals/etc., you can
attempt to make your data more useful by adjusting the size &
granularity of your sample space. consider if we were studying
something about a camera flash's wait time between flashes.

if we know nothing, we might consider S as all positive reals:

$$
\begin{align}
S &\coloneqq \{ x \in \real : x > 0 \}
\end{align}
$$

however, if we know they're between 1.5 & 5 seconds, we can narrow the
space:

$$
\begin{align}
S &\coloneqq \{ x \in \real : 1.5 < x < 5 \}
\end{align}
$$

likewise, if what we want to know is if the time satisfies some minimum
requirement, then we might consider setting S as either yes, it
satisfies, or no, it does not:

$$
\begin{align}
S &\coloneqq \{ yes, no \}
\end{align}
$$

experiments can be repeated to build one sample space; e.g. we might
test two cameras which we know nothing about (or two dice as above):

$$
\begin{align}
S &\coloneqq \real^+ \times \real^+
\end{align}
$$

repetitions can also continue until some condition is met, e.g. we
might test if cameras satisfy some minimum until one fails:

$$
\begin{align}
S &\coloneqq \{ n, yn, yyn, yyyn, yyyyn, ... \}
\end{align}
$$

### discrete vs continuous

a sample space is said to be _**discrete**_ if the number of events in
it is countable. in the examples above, numbers (1), (4), (6) are
discrete.

> [!NOTE]
>
> example (6) is subtly tricky here. while the number of experiments to
> get a failure could possibly reach infinity, it is still countable
> because each event in the space contains one more success than the
> last. because of this, it is still considered discrete.

on the other hand, if the number of outcomes is _not_ countable, than
the sample space is said to be _**continuous**_. above, nubmers (2), (3), (5)
are continuous.

### representing sample spaces

above, we used set notation to describe sample spaces. another common
representation is as a tree, where each stage (where a stage is some
portion of an event) is a level in the tree & w/in each level, each
possible outcome forms a branch. the paths from the root to each leaf
then describes a possible event in the sample space.

consider an example where three messages are sent, & the receipt of
each is clasified as on time, $y$, or late, $n$:

```no-linenums
               .
             y/ \n
         -----   -----
        /             \
       .               .
     y/ \n           y/ \n
     /   \           /   \
    /     \         /     \
   .       .       .       .
 y/ \n   y/ \n   y/ \n   y/ \n
 /   \   /   \   /   \   /   \
.     . .     . .     . .     .
```

## &sect; 3.1.3: events

in many cases, what is needed is a collection of related outcomes
(instead of a single one), which we call an _**event**_. all events are
subsets of their sample spaces, e.g. consider rolling two dice again
(sample space (1), above); let's describe the event where the sum of
the rolls is 7:

$$
\begin{align}
E &\subseteq S \notag \\
E &\coloneqq \{ (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \} \notag
\end{align}
$$

events, being sets themselves, follow typical set theory rules, notably
(for our purposes) union, intersection, & complement.

assuming events $E_1$ & $E_2$ are in the same sample space $S$, these are defined as:

1. union: $E_1 \cup E_2 = \{ x: x \in E_1 \lor x \in E_2 \}$
2. intersection: $E_1 \cap E_2 = \{ x: x \in E_1 \land x \in E_2 \}$
3. complement: $E_1' = S \setminus\ E_1= \{ x: x \in S \land x \not \in E_1 \}$

### properties/laws of events

two sets are considered _**mutually exclusive**_ (or _**disjoint**_) if they share no elements, e.g. $E_1 \cap E_2 = \empty$

a set of events, $E_1, E_2, ..., E_n$ is called _**exhaustive**_ if together they contain the entire sample space, e.g. $\bigcup^n_{i\coloneqq1} E_i = E_1 \cup E_2 \cup ...\cup E_n = S$

some other laws (deriving from set theory):

:::

- double complement: $(E')' = E$
- commutative law: $A \cap B = B \cap A$ and $A\cup B = B \cup A$
- associative law: $(A \cap B) \cap C = A \cap (B \cap C)$ and $(A \cup B) \cup C = A \cup (B \cup C)$
- distributive laws:
  - $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$
  - $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$
- DeMorgan's laws
  - $(A \cup B)' = A' \cap B'$, expands to $(\bigcup^n_{i\coloneqq1} E_i)' = \bigcap^n_{i\coloneqq1} E_i'$
  - $(A \cap B)' = A' \cup B'$, expands to $(\bigcap^n_{i\coloneqq1} E_i)' = \bigcup^n_{i\coloneqq1} E_i'$

:::

> [!NOTE]
>
> each of these laws can be found (in vv similar form) in my [notes on
> propisitional logic](../../cs_536/0116-more_prop_logic/) from CS 536.

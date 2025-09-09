---
title: probability
description: lecture notes introducing basic probability concepts & definitions
---

:::hgroup{.titlegroup}

# probability

week 2, day 2 \
Aug 25 2025

:::

agenda:

- review big picture
- def
- notation
- calculation

## big picture

we're going to use data collected from a sample to infer something about a
population. **probability** the tool we'll use to make this inference.

## what is probability?

_**def:** probability_&mdash;the chance some event might occurr. "a
mathematical description of uncertainty."

not always intuitive!

## notation

```
P(A) := probability of A, where
   A := some event
```

ex:

```
let
  A <- person wins lottery
then
  P(A): probability that person wins the lottery
```

let's give this some meaning

```
P(A) === 0 -> never will happen
P(A) === 1 -> always will happen
```

## calculation

how to determine `P(A)`?

1. theoretical: for things w/ known quantities (games, coins, dice, etc.)
2. empirical: for unknowable things

### empirical

create samples w/ large number of variables, then calculate occurrences of events in that sample

### theoretical

ex: flipping a fair coin

```
H := heads
T := tails
P(H) == P(T) == 0.5
```

ex: rolling a fair die

```
S := {1,2,3,4,5,6}
A := some x in S
P(A) === 1/6
```

a more useful example: selecting 1 student from a set of students

```
S := {s1, s2, s3} where
  Female(s1,s2)
  Male(s3)

P(any s in S) === 1/3

F := selected student is female
P(F) === 2/3
```

---
title: "UNSW MATH3411"
date: 2019-12-05T09:00:10+11:00
description: "Information, Codes and Ciphers"
categories: ["UNSW"]
featuredImage: "/post/unsw-math3411/20191120_134300.jpg"
displayInMenu: false
displayInList: true
---

_Now most of these "UNSW-XXXXYYYY" pages are just redirects, but not this one!_

[Click here to go to the MATH3411 blog site](//featherbear.github.io/UNSW-MATH3411/)

---

I took this course in Trimester 3, 2019 with the amazing Thomas Britz.

This time around, we were the guinea pigs for this course's [Digital Uplift](https://teaching.unsw.edu.au/digital-uplift).  

> The Digital Uplift initiative will enhance [courses] across the university for blended and fully online delivery over 5 years to improve the student experience and learning outcomes.  
This involves considerable improvements in learning design, digital capability, from enhanced integration of media and technology to a redesign of courses for a more flexible and personalised learning experience with support for active and student-led learning spaces.

**What does that mean as student?**  
It means that as students we will/should get better access as well as higher quality digital resources to aid our studies

```
,    ,
 \   |  \ / / / / 
 / o    ')       \
c       /     /  \
 \_          (  /
  mm --- moooo-
```

# Background / Context

I entered UNSW in 2018, undertaking an Electrical Engineering (Honours) and Computer Science (Security) double degree.  
Being an [elective](http://legacy.handbook.unsw.edu.au/undergraduate/plans/2018/COMPY13785.html) for my Computer Science stream, I decided to pick up MATH3411.  
_That said, out of sheer enjoyment for computing I'm still doing more than the needed number of electives!_  

So this trimester I was studying under full load: MATH3411, MATH2069, and COMP2511.

# Course Content

The course effectively began with an introduction to ISBN numbers - those things you see in libraries (If anyone goes to those anymore), and how they have a checkbit to ensure the integrity of the code.  

Next were code protocols that could detect and correct errors - Binary Hamming codes.  
I found this topic really cool, as it (as childish as it sounds) felt like being a detective cracking a code. (Well, more of that feeling goes to cryptography and [COMP6441](https://featherbear.github.io/UNSW-COMP6441/), but you get the gist)

My next highlight was compression coding and Markov sources, where encoding was dependent on the previously encoded data.  
We also went over LZ78, which was a lossless text compression algorithm. Fun but probably not practical.

Next was polynomial fields - needless to say, it was quite confusing. Especially when missing out 3 weeks of Friday content due to volunteering at Sculpture by the Sea.  
But after understanding the theory and knowing how to approach the questions, it became fun.  
_Although very prone to mistakes being made which would detrimentally ruin everything else..._  
More Sherlock Holmes vibes though!

Chapter six went over algebraic coding and BCH codes.  
This was **probably the hardest chapter for me**. And it really took some time to sit down and read over a few times to _start_ understanding.  
I didn't like this chapter too much.

The final chapter was Cryptography!  
I understand that alot of this chapter was "More for your interest" - so not too much of this chapter was assessable.  
Because of other commitments I wasn't able to attend these lectures, but thankfully I had a prior knowledge to crypto [inside](https://featherbear.github.io/UNSW-COMP6441/) and outside of UNSW.

---

From all of the topics, I struggled a bit with Two-error BCH codes and Binary Channels.  
Entropy and probability aren't my forte :P

## Trimesters

I believe trimesters did not have too much of a considerable impact on my experience of this course.  
However several topics were skipped over due to there being a lack of time to cover everything in assessable depth.

# Digital Uplift

Being the test subjects of the course's Digital Uplift - we were the first to experience the online lab tests.  

From doing each of the three lab tests multiple times, I understand that there is a bank of questions where each generated test will pick from.  
After a while, you would see the exact same question appear again meaning you could technically memorise the answers.  
Whilst this is good (as a student), I think <u>it would be even better if each question also had its values randomised</u> - much like how the PHYS1131 and PHYS1231 lab test questions were.  


My rationale behind this is that given values might (or might not) fall into a specific edge case.  
Since these tests are practised individually without any authoritative guidance, one might correlate values and come to the conclusion that there is a link between those values - when in fact there might not be.

---

For example, if I said that a function $f$ behaves like the following:

* $f(1,0) = 1$
* $f(2,1) = 3$
* $f(3,3) = 6$

You might infer that $f(a,b) = a + b$  

If you were asked $f(20,5)$, you'd probably then think _"Okay to solve this question, I add 20 and 5 to get 25"_.  
You submit the answer, and then ... **WRONG - Correct answer: 395**.  

That's because $f(a,b) = a^2 - b$ !!!

Now, if the question only ever asked for $f(4,6)$, you would **never realise that you were doing it wrong**.  
You'd write 10 as the answer, and see it marked as correct. But as soon as $f(20,5)$ appears in your written final exam - You'd be oblivious that your methodology, and ultimate your answer is wrong.

---

# Farewell

It was cool to see how matrices could be used, and how topics from other courses tied in (Such as using eigenvalues and eigenvectors in Markov sources).  
Being a security student, I also especially enjoyed the cryptographic topics - though glossed over due to time.

Overall I found MATH3411 a very enjoyable course!  

Thomas was an amazing lecturer, as also thought by a few of my friends too!  
During the final lecture, we (... Well I did, they were too scared to go up) gave Thomas a little gift! _(No - not the apartment, and no - not the wooden stick)_.

![](screely-1575511118873.png)

May your proof-by-hand-waving forever hold true ~


<script type="text/javascript">window.MathJax={tex2jax:{inlineMath:[['$','$'],['\\(','\\)']]},showProcessingMessages:false,messageStyle:'none'};</script>

<script async src="https://cdn.jsdelivr.net/npm/mathjax@2.7.5/MathJax.js?config=TeX-MML-AM_CHTML" integrity="sha256-nvJJv9wWKEm88qvoQl9ekL2J+k/RWIsaSScxxlsrv8k=" crossorigin="anonymous"></script>

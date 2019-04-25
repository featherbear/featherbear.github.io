---
title: "Repl.it"
description: "RIP l.it - the rise and fall of online code sandboxes"
categories: ["WebDev", "Programming", "Python"]
date: 2019-01-09T14:12:31+11:00
---

[Repl.it](https://repl.it) is an online code sandbox and IDE.  
It supports many languages, and makes demoing and prototyping code a piece of cake.

It has some caveats though.
# PyGame
There's no [`PyGame`](https://www.pygame.org/) environment available on repl.it, making any PyGame project impossible.

# Turtle
The `Turtle` environment on repl.it is Python 2.7 - can't teach Python 3.6 syntax here!

# Showing Images
For the [UNSW CompClub 2019 Summer Workshop](../unsw-compclub2019summer), the [Security workshop](https://summer2019.compclub.com.au/day5#mentor) introduced students to LSB steganography.  
Sometimes repl.it would show the result image created by [`PIL`](https://python-pillow.org/), but other times it wouldn't...  
I ended up asking the students to use the local Python instance on their machines instead of working through repl.it

# Jinja2 x Flask
https://aryaboudaie.com/python/technical/educational/web/flask/2018/10/17/flask.html  

"Note - for using templates on repl.it, you need to have at least two python files in your workspace because of a bug. The second Python file can be completely empty, but that's why I have the dummy.py file in the REPL."

Uhm okay...

---

Overall, I'm really pleased with what repl.it has to offer.  
Other sites like trinket.io are also promising, but their pricing model makes it hard to use in an educational environment
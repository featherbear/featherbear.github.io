---
title: "Dungeon Console"
description: "Going the \"extra mile\" for assignments"
categories: ["UNSW", "Programming"]
date: 2019-11-16T17:15:24+11:00
---

For my [COMP2511](https://featherbear.github.io/UNSW-COMP2511) course, I was given a group assignment to make a dungeon crawler type of game in Java. As an "Object-Oriented design focused" course, the backend was to be made in Java, with a front-end written in JavaFX.

The aim of the game was to complete different goals and challenges to finish the level... Killing the enemies, picking up treasure, activating all switches, reaching the exit - or perhaps a combination of all of them.

While arduously waiting for my group partner to do his part, I decided to sit down and make another frontend for the game - a completely text-based, terminal version of the game which could even be played over telnet or SSH!

> [<i class="fab fa-github" aria-hidden="true"></i> GitHub: github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/](https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/)

![](https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif)

![](https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/blob/master/demo_boulders.gif)

---

Whilst I had written the majority of the backend without reliance of JavaFX, there were some useful classes (namely the `BooleanProperty` and `IntegerProperty` classes). If I have time to kill, I might implement my own property change listeners so I can remove JavaFX as a dependency on the backend, and only for the JavaFX UI.

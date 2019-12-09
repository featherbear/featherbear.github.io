---
title: "Dungeon Console"
description: "Going the \"extra mile\" for assignments"
categories: ["UNSW", "Programming"]
featuredImage: "https://featherbear.github.io/UNSW-COMP2511/post/assign2/demo.gif"
date: 2019-11-04T22:31:24+11:00
---

For my [COMP2511](https://featherbear.github.io/UNSW-COMP2511/post/assign2/) course, I was given a group assignment to make a dungeon crawler type of game in Java. As an "Object-Oriented design focused" course, the backend was to be made in Java, with a front-end written in JavaFX.

The aim of the game was to complete different goals and challenges to finish the level... Killing the enemies, picking up treasure, activating all switches, reaching the exit - or perhaps a combination of all of them.

While arduously waiting for my group partner to do his part, I decided to sit down and make another frontend for the game - a completely text-based, terminal version of the game which could even be played over telnet or SSH!

![](20191102_152045.jpg)

> [<i class="fab fa-github" aria-hidden="true"></i> GitHub: github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/](https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/)  
[Blog Post](https://featherbear.github.io/UNSW-COMP2511/post/assign2/)

|    |    |
|:--:|:--:|
|![](https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif)|![](https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_boulders.gif)|

# Challenges 

One challenge in getting this application to work was capturing key presses.  
Java reads its lines in buffers / strings of characters rather than single characters one at a time - this meant that I was unable to capture each key press _as they were being pressed_.

Because there was no GUI / Window, I could not use Java AWT's `KeyEvent`.  
There were other libraries like JLine - but were massive libraries for such little needed functionality.  
Luckily I found a library called [`RawConsoleInput.java`](https://github.com/featherbear/RawConsoleInput.java/) which worked wonders (not say without any hitches)!

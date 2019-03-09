---
title: "Floobits"
date: 2019-01-11T18:42:59+11:00
description: "Collaborative code editing!"
categories: ["Programming"]
featuredImage: "https://floobits.com/static/images/logos/logo_with_name.png"
displayInMenu: false
displayInList: true
---

Group work is always ... interesting.  
For software development especially, there are so different many ways that you could write a procedure.  
And for the exact same procedure, there so many different syntactical nuances that could differ too.  

And that's why style guides, and documentation is important!

---

That said, my [COMP2521 Assignment 2 (Fury of Dracula)](https://featherbear.github.io/UNSW-COMP2521/blog/post/ass02/) was a group assignment.  

So, the obvious question is - who does what part, but more importantly; how do we edit **together**.  

The usual response would be something along the lines of "So that we don't overwrite each others' work, you do this file, and I do that file"  
Or, use some sort of version control system like Git or SVN.  

...

I stumbled upon this service called [Floobits](http://floobits.com/).  

It has a Free plan which gives you 5 public workspaces (no private workspaces on the free plan).  
The Small plan offers 5 private workspaces for USD$15/mo. But I'm poor so no thanks, free will do.

Unlike the online code scratchpads like Codeshare, Floobits gives you a 'project view', allowing you to upload multiple files

# IDE
Floobits has IDE extensions for the 'most popular' editors: Atom, Sublime, and the JetBrains suite.  
They also have an online in-browser editor!

_No VS Code support though!?_


# Flootty
[flooty](https://github.com/Floobits/flootty) allows you to connect your terminal to the workspace, allowing other members to access your terminal.

# Issues
Sublime Text Editor went crazy with **SOURCE FILE CHANGED RELOAD PLS** messages (paraphrased.)  
Effectively it made it impossible to code together with my partner.  

The compromise was that I would use my IDE, whilst my partner used the Floobits online editor (it's not bad!)

(I have a tendency to press `Ctrl`+`S` alot..)  
Also (I think) pressing `Ctrl`+`Z` (Undo) plays up a bit.

--- 
# Summary
It was something new and looked promising, but files got overwritten, it's not case sensitive (file naming), and a whole lot of small issues made Floobits a very scary experience.  

I found myself having to take lots of snapshots of my code, as the code would magically get overwritten with content from another file.

I'll try out VS Code Live Share next time...  
_(or just implement proper version control practices...)_
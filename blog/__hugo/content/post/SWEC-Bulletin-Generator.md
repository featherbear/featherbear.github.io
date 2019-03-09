---
title: "SWEC Bulletin Generator"
date: 2018-12-20T18:33:35+11:00
description: ""
categories: ["Python", "WebDev", "Programming"]
displayInMenu: false
displayInList: true
---

At the start of 2018 I wrote a Python script called `swec-elvanto-automation`.  
It was a set of task runners that would manage the automatic generation of the service bulletin, as well as pretty roster emails

... _well_, I'm officially marking it as abandonware!  
It worked flawlessly, but it wasn't user friendly.  

And also, with my other commitments taking more time, I don't want my involvement and role at my church to become irreplaceable.

So off I went to write a website application that would manage the generation of the service bulletins...  

And that's what [SWEC Bulletin Generator](https://github.com/featherbear/SWEC-Dashboard) is!  
(At least I wrote the `python-Elvanto-API-Extensions` library separately)

It's a Python server that uses [Tornado](https://www.tornadoweb.org/), [Jinja2](https://bibhasdn.com/blog/using-jinja2-as-the-template-engine-for-tornado-web-framework/), and SQLite as its backend.

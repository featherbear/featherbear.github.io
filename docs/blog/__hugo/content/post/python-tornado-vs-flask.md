---
title: "Python Tornado vs Flask"
date: 2018-11-24T01:27:03+11:00
description: "A 'battle' of the Python web microframeworks"
categories: ["Python", "WebDev", "Programming"]
displayInMenu: false
displayInList: true
---

Python has two great web server libraries - [Flask](http://flask.pocoo.org/) and [Tornado](https://www.tornadoweb.org/).

# Flask vs Tornado
## Why Flask
Flask has a much easier to use routing functionality, where you just need a Python decorator `@app.get(...)`.  
In Tornado you need to set up a site router, and all these other things (_or I didn't do it right_)

## Why Tornado
Tornado is a non-blocking server, which is able to handle multiple requests at the same time.  
Flask is blocking, and does not perform well when multiple requests are received

# Porque les nos dos!?
Flask has the better routing engine than Tornado.  
Tornado has the better server performance than Flask.  

So... why not use them both!

Flask for the template engine (Routing + Jinja2 rendering)
Tornado for the server

> If we only want to use Flask for Jinja rendering, we could just implement [Jinja in Tornado](https://bibhasdn.com/blog/using-jinja2-as-the-template-engine-for-tornado-web-framework/) ourselves.


---

# (a)sync
When we talk about servers, two terms often pop up - synchronous and **a**synchronous.  

A _synchronous server_ performs each operation in order.  
An _asynchronous server_ performs its operations as they please.

Flask's inbuilt server is synchronous (blocking); meaning that newer requests not performed until the previous request is completed.  
Tornado's inbuilt server is asynchronous (non-blocking); meaning that several requests can be handled at the same time.

Hence, where a website might load many files (js, css, images, etc) - Tornado wins here.  

Although...  
Flask's inbuilt server is **not meant to be used for production environments**, only development / testing. They recommend setting up a WSGI container, like Gunicorn.


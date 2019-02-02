---
title: "ProPresenter 6 Stage Display Messages"
date: 2018-08-04T23:14:04+11:00
description: "A HTML interface for sending Stage Display messages to ProPresenter 6!"
categories: ["Audio/Visual", "Networking", "WebDev"]
displayInMenu: false
displayInList: true
---

ProPresenter 6 is great!  
**Except for the times when it's not...** (then, it's not great! _[Wow who knew!]_)

PP6 allows you to send stage messages remotely from the ProPresenter 6 iOS / Android app.  
Unfortunately that application is a bit clunky, and there's no Windows / desktop app...

> [RICE Rally 2018](../rice-rally-2018-sydney) was coming up, and I needed some way to send Stage Display messages via my laptop.  
If only there was a HTML/JavaScript solution... that'd really come in handy...  
... lol jk I'll write my own!

See site -> [PP6 Stage Display Messages](http://featherbear.navhaxs.au.eu.org/pp6sdm)  
![](screenshot.png)

It works only on HTTP (no HTTPS), because PP6 is serving WebSocket, and not Secure WebSocket.  
Browser security prevents a HTTPS site from accessing insecure resources.
Unless you use a WSS to WS proxy, the site needs to be HTTP then

---

App uses Tachyons because my [brother](//navhaxs.au.eu.org) quite likes it.

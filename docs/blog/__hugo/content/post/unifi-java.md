---
title: "Unifi and Java"
date: 2019-02-04T23:06:34+11:00
description: "Trusting in the ability of programmers to implement working auto updaters"
categories: ["Networking"]
displayInMenu: false
displayInList: true
---

Overnight Java decided to auto update itself even though I disabled automatic updates!?!  
Consequently there wasn't a firewall rule for the new Java installation path so my UniFi SDN went MIA.

---

That said, for my own future reference...

Admin username: To log into controller  
Device username: To log into devices (ssh, usg http) - unique per site

---

Lesson learned - Don't trust auto updaters D:
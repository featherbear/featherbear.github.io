---
title: "JavaScript Map"
date: 2018-12-14T17:20:18+11:00
description: "Did you know: Array.map() takes a function with two parameters!"
categories: ["WebDev", "Programming"]
displayInMenu: false
displayInList: true
---

![](48377057_974369622753266_8079595045902090240_n.png)
Don't be lazy kids.

# Don't 
`[].map(parseInt)`

# Do
`[].map(function(val) { parseInt(val) })`

# Also do
`[].map(val => parseInt(val))`

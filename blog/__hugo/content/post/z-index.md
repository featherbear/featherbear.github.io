---
title: "z-index"
date: 2018-11-25T20:46:10+11:00
description: "Negative z-indexes - Argh!"
categories: ["WebDev", "Programming"]
displayInMenu: false
displayInList: true
---

> Soooo, you can't interact with an element that has a negative z-index.

```html
<div>A</div> --> z-index of 5
<div>B</div> --> z-index of -1
```
Even if A has pointer-events: none; you won't be able to touch B

```html
<div>A</div> --> z-index of 5
<div>B</div> --> z-index of 0
```
Can touch B
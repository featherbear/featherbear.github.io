---
title: "Making a Vue App"
date: 2019-04-25T18:10:39+10:00
description: "<s>Revive</s> Rewrite the dead"
categories: ["Programming", "WebDev"]
featuredImage: ""
displayInList: true
draft: true
---

[Vue]:http://vuejs.org
I had been meaning to recreate my personal website with the [Vue] framework, but it never happened.  
And lowkey it probably won't ever happen.

Instead, I'll be <s>reviving</s> rewriting `wyd` (my ["What ya doin"](https://www.youtube.com/watch?v=-UapogBimLU) app).

---

First was sourcing the assets and libraries that I needed.

**Web host**: GitHub Pages - Since it's a static site host, everything will need to be performed client-side, or with a third-party service.  
**Website framework**: [Vue] of course  
**CSS framework**: [Bulma](https://bulma.io/) (via [Buefy](https://buefy.org/))

**Libraries**

* iCalendar parser - [ical.js](https://www.npmjs.com/package/ical.js)
* Time library - [luxon](https://www.npmjs.com/package/luxon)

---

Reading the Buefy documentation, it recommended to create the app using [Nuxt.js](https://nuxtjs.org/).

> [Nuxt.js](https://nuxtjs.org/) is a "framework for Vue".  
_A framework for frameworks??? Why!?_  
&nbsp;  
There are more components to a web app than just the web pages. We have to consider the site routing, data and management, etcetera.  
These stuff can get difficult to organise, and you could easily overcomplicate the situation.  
&nbsp;  
[Nuxt.js](https://nuxtjs.org/) aims to mitigate this problem by effectively managing all of this stuff for us!

Okay, sure, whatever.

`$> npx create-nuxt-app`

```
? Project name: wyd
? Project description: What you doing?
? Use a custom server framework: none
? Choose features to install: Progressive Web App (PWA) Support, Linter / Formatter, Prettier, Axios
? Use a custom UI framework: buefy
? Use a custom test framework: none
? Choose rendering mode: Single Page App
? Author name: Andrew Wong
? Choose a package manager: npm
```

---

# Single-file Components
With website frameworks, we are able to define our own elements with custom tag names. They then get converted (either dynamically or during compilation) into the base HTML element. To organise my DOM components, they would be stored in separate .vue files  

[Read More: vuejs.org/.../single-file-components.html](https://vuejs.org/v2/guide/single-file-components.html)

# Workbox

# Vuex
Vuex is "a state management pattern + library for Vue.js applications"  
In my eyes, it's basically a data storage and persitence model - a Vue implementation of localStorage and sessionStorage

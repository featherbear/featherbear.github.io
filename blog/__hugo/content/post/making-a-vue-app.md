---
title: "Making a Vue App"
date: 2019-04-25T18:10:39+10:00
description: ""
categories: []
featuredImage: ""
featuredImageDescription: ""
dropCap: true
displayInMenu: false
displayInList: true
draft: true
---

Rewrite my old shabby thing


I had been meaning to recreate my personal website with the Vue framework.

---

First was sourcing the assets and libraries that I needed.

Host: GitHub Pages - Static site so everything will need to be performed client-side, or with a third-party service  
Website Framework: Vue
CSS Framework: Bulma (via Buefy)

Libraries:
iCalendar parser - [ical.js](https://www.npmjs.com/package/ical.js)
Time library - [luxon](https://www.npmjs.com/package/luxon)
---

Reading the Buefy documentation, it recommended to create the app using `Nuxt.js`.
Okay, sure!

`npx create-nuxt-app`

```
? Project name wyd
? Project description What you doing?
? Use a custom server framework none
? Choose features to install Progressive Web App (PWA) Support, Linter / Formatter, Prettier, Axios
? Use a custom UI framework buefy
? Use a custom test framework none
? Choose rendering mode Single Page App
? Author name Andrew Wong
? Choose a package manager npm
```

---

# Single-file Components
To organise my DOM components, they would be stored in separate .vue files
https://vuejs.org/v2/guide/single-file-components.html

# Workbox

# Vuex
Vuex is "a state management pattern + library for Vue.js applications"  
In my eyes, it's basically a data storage and persitence model - a Vue implementation of localStorage and sessionStorage

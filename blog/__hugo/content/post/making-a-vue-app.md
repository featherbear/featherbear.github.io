---
title: "Making a Vue App"
date: 2019-04-25T18:10:39+10:00
description: "Revive, no... Rewrite the dead"
categories: ["Programming", "WebDev"]
featuredImage: ""
displayInList: true
draft: true
---

[Vue]: http://vuejs.org
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
* Calendar widget - [vue-cal](https://antoniandre.github.io/vue-cal/)

---

Reading the Buefy documentation, it recommended to create the app using [Nuxt.js](https://nuxtjs.org/).

EDIT: Fun story, I got rid of Nuxt because it made my site feel too... clunky
<details>
<summary>If you still want to read...</summary>
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

</details>

# Code
Next was to mash some keys on keyboard and write up the HTML code.  

## Fetching the calendar data

Because of Cross-Origin request policies, the browser won't be able to fetch the iCal file from Google Calendar, where my calendar data is stored.  
Consequently, I have to use a CORS proxy (in my case, [`cors-anywhere`](https://github.com/Rob--W/cors-anywhere/))

## Parsing the calendar data

After fetching the data, I had to parse the iCal data into some format that I can use with [vue-cal](https://antoniandre.github.io/vue-cal/).  
I adapted some [code from this guy](https://www.raymondcamden.com/2017/08/24/serverless-ical-parsing) and integrated [luxon](https://www.npmjs.com/package/luxon), so that I could work with times and dates easier.

## The display

Finally was putting the calendar data into the calendar itself.  
Using [vue-cal](https://antoniandre.github.io/vue-cal/) was simple and straight-forward(s enough) to use.

There is also a "Right now" box, which shows the events that are currently happening (to the minute).  
Each minnute this activity box updates

---

And so there you have it, I finally ***touched*** on [Vue].  
I definitely did not use [Vue] to its full potential, and basically just used it because the [vue-cal](https://antoniandre.github.io/vue-cal/) library needs it.  
I could've just found another calendar library without [Vue] as a dependency.

So here's the result of this little activity: [What you doing?](https://featherbear.github.io/wyd/)

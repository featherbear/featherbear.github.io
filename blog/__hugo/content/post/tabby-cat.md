---
title: "Tabby Cat"
date: 2019-06-24T16:17:56+10:00
description: "The new tab browser extension you'll never need"
categories: ["Life", "Programming"]
featuredImage: ""
displayInList: true
breadcrumb: true
---

My friend introduced me to the [Tabby Cat](http://tabbycats.club) <s>cult</s> club.  
It's a browser extension for Chrome and Firefox which shows you a cute animal as your new tab page.  

![](https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8)

Essentially, as you open more tabs , you unlock new toys (and characters _*_).

Snooping around the source code (Firefox) we can see this

```javascript
function shouldPickNewGoody(visits) {
	if (visits === 1) {
		return true;
	} else if (visits % 200 === 0) {
		return true;
	} else {
		return Math.random() < 0.005 ? true : false;
	}
}
```

Every 200 visits, you get a new goody.  
Otherwise you have a 0.5% chance of getting a new goody

**But I want it nowwwwww**

On their [wiki page](https://tabbycat.fandom.com/wiki/Hacks) there are some hacks to unlock all the toys (and characters _*_).  
But you can also just run `getNewGoody()` a bunch of times in the browser console!

# Characters

The Firefox version is a stripped version of the more feature-packed Chrome version.  
Namely, _only_ the Chrome version has extra characters - and you have to pay to unlock them. (Only $1 USD!)

> No doggos :(((

I don't use Chrome as much anymore, so paying or not, I still won't be able to use other characters. Ah well.  
Possibly if I had time, I would have a peek into the source code to figure out how to circumvent the payment.  
But supporting the developers is a good thing! More money = more toys and characters = more fun!

---
title: "Whoops There Goes My AI"
date: 2018-10-22T00:44:41+11:00
description: "if (aboutToCrash) dont();"
categories: ["Python", "AI"]
displayInMenu: false
displayInList: true
---

> GitHub: [featherbear/Whoops-There-Goes-My-AI](https://github.com/featherbear/Whoops-There-Goes-My-AI/)

So there's a game on the [Google Play Store](https://play.google.com/store/apps/details?id=com.NoMossStudios.WhoopsThereGoesMyOrange) and [Apple App Store](https://itunes.apple.com/au/app/whoops-there-goes-my-orange/id1439146494) called _Whoops! There Goes My Orange_.

You play as an orange falling from the sky, and you have to avoid the red bars. Simple, right?  
Yep! But rage-inducing.

Anyway, so I decided to have a crack at writing some sort of AI for this game...  
It'd just be a collision avoidance algorithm... not really an AI.

## Summarised something like this
```pseudo
if (aboutToCrash) {
  dont();
}
```

And here's a little demo...
<video controls src="https://github.com/featherbear/Whoops-There-Goes-My-AI/blob/master/Demo.mp4?raw=true" style="width: 100%"></video>

---

The sort of data you'd need for analysis...
![](https://raw.githubusercontent.com/featherbear/Whoops-There-Goes-My-AI/master/docs/velcocity.png)
![](https://raw.githubusercontent.com/featherbear/Whoops-There-Goes-My-AI/master/docs/data.png)
![](https://raw.githubusercontent.com/featherbear/Whoops-There-Goes-My-AI/master/docs/effective%20player%20space.png)

---

Speaking of which...
![](https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/5d/73/bc/5d73bc2a-8f99-4cd2-ef20-3689ebcc8c1e/pr_source.jpg/690x0w.jpg)

Oh hey, that's me (#10)...  
But wait, that's also me (#8), and me (#9)... --> _wow I suck_

To store the high scores online, there must be some database...  
If we have a look at the network activity from this application, we get this URL: `http://nomossgames.com/whoops/score.php`.  

It's got **some** sort of anti-spam prevention.  
It requires a `secret` query argument, as well as a `secret` body argument (POST).  

So then I was able to do something like this:
```bash
curl "http://nomossgames.com/whoops/score.php?secret=[QUERY_SECRET]" -d "score=26.16&secret=[POST_SECRET]&name=z5206677"
```

And, tada! I'm on the leaderboard!

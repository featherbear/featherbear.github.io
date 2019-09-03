---
title: "Production on a Budget"
date: 2019-07-07T00:55:05+10:00
description: ""
categories: []
featuredImage: ""
displayInList: true
breadcrumb: true
---

[Caspar CG]: https://casparcg.com
[OBS]: https://obsproject.com
[NDI]: https://www.newtek.com/ndi

So [RICE Rally 2019 Sydney](../rice-rally-2019-sydney) is happening again, and I've been asked to help out again with lyrics and video playout for the event!  

Being you know, _poor_ - I love free software that can do the job.  
And as a _software developer_, open source software makes me really excited too (but free is better).  

# NewTek NDI

The magic glue that holds all of this together is NewTek's [NDI] protocol - a video and audio over IP solution that works pretty darn well.

# Caspar CG

[Caspar CG] is a media playout client/server software - similar to something like [ProVideoPlayer](https://renewedvision.com/provideoplayer/) and [Watchout](https://www.dataton.com/products/watchout) (but free)

Like last year for [RICE Rally 2018 Sydney](../rice-rally-2018-sydney), I'll be using [Caspar CG] again to play the background motion loops.  

To get [NDI] support, there's a guide that I followed [here](https://gist.github.com/Lange/b9f056910b12ed156834f63cb68bc785) - Thanks [Lange](https://gist.github.com/Lange/b9f056910b12ed156834f63cb68bc785)!

# Open Broadcaster Software (OBS)

[OBS] is a free and open source broadcast software that allows you to live stream, as well as record.  
For my purpose, I use it as a budget vision switcher and overlay program.

To get [NDI] support, install [`obs-ndi`](https://obsproject.com/forum/resources/-.528/).

Here, we can then ingest CasparCG and ProPresenter 6's NDI feeds and combine them together, as well as apply a Chroma Key filter on to the ProPresenter 6 source to achieve transparency

![](20190812_024750.jpg)

---

# Case

I don't have a means of transporting my desktop tower... If only I had a rack-mount computer case...  
My church does! So I switched the parts.

![](20190818_180959.jpg)

# Networking

I had a spare Ubiquiti Unifi UAP (the very first model) lying around, so I configured it with the UniFi app on my phone, and screwed it onto a 1RU rack shelf.  
I also mounted on a D-Link gigabit router, with its wireless radio turned off.

![](20190822_145046.jpg)
Good enough

---

Well aren't we on a budget eh.

![](20190823_221502.jpg)

---

And the results!

<video autoplay loop muted src="20190812_145159.mp4" style="height: 50vh"></video>
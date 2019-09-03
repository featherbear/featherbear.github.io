---
title: "Brilliant Smart - WiFi LED Lights"
date: 2019-09-03T16:45:40+10:00
description: "Smart lights that are TOO smart :("
categories: ["Life"]
featuredImage: ""
displayInList: true
breadcrumb: true
---

I went to ALDI today and impulsively bought two boxes of these Brilliant Smart WiFi LED lights

![](1567146997448.jpeg)

$50 for three bulbs... $100 for six bulbs...  

Seemed like a pretty good purchase to me - I could use them with my [Home Assistant](../home-assistant) setup in my house!

These Brilliant Smart lights are just rebranded Tuya lights.  
The first thing to do was to flash the bulb's firmware with either Tasmota or ESPHome - custom firmwares for smart devices that would allow me to interact with them.  
That way, the bulbs wouldn't be connected to some random (probably Chinese) server exposing my house to the internet.

Home Assistant _does_ have an [integration](https://www.home-assistant.io/components/tuya/) for Tuya lights, but my bulbs did not get detected.  
Scenes worked, but it strippeed away control of my lights, offering me only a single button to change lights.

**If only it worked though.**

Unfortunately, I was not able to flash a custom firmware with [`tuya-convert`](https://github.com/ct-Open-Source/tuya-convert).

> As of January 28th, 2019, Tuya has started [distributing a patch](https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html) that prevents tuya-convert from completing successfully. It is up to the individual brands to adopt the patch, so some devices may be affected sooner than others. To ensure the best chance of success, do not connect your device with the official app as it may automatically update the device, preventing you from flashing with tuya-convert. Some devices are already being shipped with the update, in which case there is unfortunately no work around available at this time.

Now, I could open up the lights, hook up some wires and manually flash it.  
But my soldering iron isn't good enough for that... or maybe I've just lost my soldering skills.

_... Let's stick with the first excuse_

So that said, I've returned the two boxes I've bought.

And life goes on.

:( awh

---
title: "Parsec"
date: 2019-06-30T15:43:17+10:00
description: "Low-latency desktop streaming? With keyboard and mouse emulation!?"
categories: ["Life"]
featuredImage: ""
displayInList: true
breadcrumb: true
---

[Parsec]: https://parsecgaming.com

[Parsec] is a software designed to help people play offline multiplayer games - online.  
This is done by streaming the display, whilst also emulating keyboard, mouse, and even game controller input.

# Getting started

Getting [Parsec] set up was straightforward.  
Firstly, [_download_](https://parsecgaming.com/downloads) the server software.  
Then install the client software (ie on Google Play store, Google Chrome extension).

Create an account, log in, press connect and you're good to go!

# Experience

## Multiscreen

There is an issue where if your mouse cursor is on another monitor that Parsec is not watching, the pointer movements and clicks from the phone will not function on the watched screen.  
If the mouse in on the watched screen, then pointer jumps will work.  
Otherwise mouse movements will be relative to the current mouse position

## Latency

(Mind you I live in Australia.)

From my home computer (cable internet) to my phone (4G) - I experienced latency from the range of about 200 milliseconds, all the way to about 2 seconds.  
For update intensive applications (YouTube videos, games, etc...) the delay is definitely noticable - sometimes the screen would just freeze for about 10 seconds; then you see a burst of frames quickly play to catch up to the latest frame.
In a LAN environment, I had about a 366ms delay.  

# Technical

## Low Latency Streaming

> https://parsecgaming.com/game-streaming-technology

[Parsec] 

To achieve their low latency video performance, they developed BUD, a proprietary UDP video protocol - oh and they've got [proof](https://blog.parsecgaming.com/testing-game-streaming-input-latency-on-parsec-with-diy-instructions-49ae838f45a7).  
Have a look at their [presentation](https://www.slideshare.net/BenjyBoxer/building-a-udp-protocol-for-cloud-gaming) too!

Essentially, low(-enough) code makes everyone happy.

## Interface

The software is controlled via an online web interface (that actually connects back to a local websocket server)

## Authentication

8 character password. Decent.

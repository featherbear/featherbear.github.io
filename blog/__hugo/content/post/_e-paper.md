---
title: "e-paper | Digital Ink"
date: 2019-12-08T12:53:11+10:00
description: ""
categories: []
featuredImage: ""
displayInList: true
draft: true
breadcrumb: true
---

So back in June 2019 I bought a 7.5 inch "e-paper" display, with the intent of using it as an "Upcoming events" board.. or a TODO List.  
Given the lack of time during then, to curb my initial curiousity I modified some starter code to make the display show me the current time and date.

Fast-forward to today, exams are over and time wasting is ready to begin!  

But small problem, the display stopped working... So I had to go purchase another one

>>INSERT IMAGE OF AUG 31 PHOTO<<
- August 31st 2019 1:45am - the last screen update this display ever made. Rest in peace.

---

I bought the [Waveshare 7.5 inch Model B e-Paper screen](www.waveshare.com/7.5inch-e-paper-hat-b.htm) from eBay for about AUD$70.

The screen comes with a driver board that communicates over SPI - something my spare Raspberry Pi 3B is able to do!  

# Raspberry Pi Setup

The first thing to do is to install an operating system that the Pi will run off.  
In my case, I'll be installing Raspbian (08/04/2019 DD/MM/YYYY).

As per the usual headless Raspberry Pi installations go... after [flashing](https://www.balena.io/etcher/) Raspbian onto a microSD card, enable SSH by creating a blank file called `ssh` in the `boot` partition of the card.  
Then insert the microSD card into the Pi and power it up!

After a while, we'll be able to SSH into the Pi with the default credentials `pi`:`raspberry`.  
_If you don't know the IP, you can try your luck and SSH into it with the hostname `raspberrypi`._  

![](raspberrypi-login.png)

Next is to enable SPI.  
SPI is the communication protocol used to communicate between the Pi and the screen('s driver board).  
With `raspi-config` we can go down to `Interfacing Settings`, and find the option that will enable SPI.

# Package Installation

Then to do some package updates

```
sudo apt update -y
sudo apt install python3-pip python3-pil python3-spidev git screen -y
sudo pip3 install RPi.GPIO
```

Installing `screen` is up to you, but I tend to use it alot to background my tasks.  

EDIT: So I initially installed Raspbian Buster Lite (26/09/2019 DD/MM/YYYY) and it didn't have `PIL`, `spidev` or `pip` installed, but the version of Raspbian Stretch I'm using does - So only `screen` had to be installed

# e-Paper Software

```
git clone https://github.com/waveshare/e-Paper
cd e-Paper
```
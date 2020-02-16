---
title: "BlueClick BLE"
date: 2020-01-10T14:10:11+11:00
description: "Making a Bluetooth clicker"
categories: ["Programming", "Audio Visual", "Life"]
featuredImage: ""
displayInList: true
breadcrumb: true

stickyInGlobal: false
stickyInCategory: false

showDateInList: true
showDateInPost: true

showCategoriesInList: true
---

[OnSong]: http://onsongapp.com

I'm a musical worship leader at my church, regularly being on acoustic guitar and vocals.  
For the past 5 years I've been using an app called [OnSong] to hold my music sheets on my Apple iPad 2.  

My iPad 2 has definitely started to meet its end of life, with [OnSong] regularly crashing the first time it's opened after a screen lock - And overall general sluggishness.

I wanted to make a device that would flip the pages in [OnSong], which supports many different input technologies: AirTurn, CODA, PageFlip, MIDI, Bluetooth MIDI, and various others. It also allows for keyboard presses to be recognised as an action. I did not want to use a foot pedal, as I don't use any other pedals; apart from a volume pedal.

I wanted to make some sort of button that I could mount on the headstock of the guitar, which would communicate to [OnSong] through either Bluetooth MIDI, or Bluetooth key strokes. Deciding to go with the ESP32 microcontroller, I realised that the iPad 2 didn't support Bluetooth Low Energy!

So... I ended up buying a second-hand iPad Air 2 for about $200 AUD.

---

# Plan

* Power the ESP32 off the 9V battery in the guitar (Buck converter to 3.3V)
* Emulate a BLE MIDI device (ESP32)
* Send MIDI notes to the connected client (Pin interrupts)
* Physically attach the device to the guitar (Button pads)

# Breakdown

The ESP32 has a deep-sleep mode which, when entered, consumes as little as around 7 microamps of current!  
Theoretically this would allow the device to stay powered on for several years!  
For my use case though, I decided not to enter any power saving modes, since all functions had to be relatively time-accurate. In addition, I wasn't sure how Bluetooth Low Energy would work on deep sleep mode.

# Building


<!-- https://github.com/featherbear/BlueClick_BLE -->
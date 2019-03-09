---
title: "PreSonus StudioLive 16"
date: 2018-12-20T18:20:04+11:00
categories: ["Audio Visual"]
displayInMenu: false
displayInList: true
---

My church recently bought a PreSonus StudioLive 16, and a PreSonus StudioLive 24R III as part of our [Production upgrade plan](../swec-audio-mixer-upgrade).

It was a fairly straightforward process to set up everything.  

A graphic equaliser with a visualiser was a big step up from the old Yamaha MG24/14FX mixer that used in the past



---
# Issues / Feature Requests

# Stagebox disconnect
After a long period of the SL16 being turned off, the 24R (having been on for a week) wouldn't be detected by the SL16.  
I had to power cycle the 24R by turning it off and on by the wall switch.  

In the future operational procedure - the 24R will be included in the power off and power on instructions

# Routing
_For output routing, the process map goes like: '`THIS` port takes input from `THIS` stream'.)_  
There are only 10 physical auxiliary outputs on the SL16, (12 on the 24R) but on the configuration page there are 16 pairs.  
I understand that this is probably due to how the firmware was written - but the UX could be improved by only showing the available output ports.

# UC Control
There are a few bugs with the desktop / tablet control software.  

One big issue is making backups.  
If there is a channel preset with any of the parantheses characters `(` / `)`, the backup will fail.  
This happens when saving a preset with the same name as an already existing preset.

# Lockdown
There seems to be no lockdown / user permission feature - meaning that anyone can change any setting on the mixer.  
UC Control has the capability to specify which device has access to what settings - but on the console itself, this doesn't exist.  

(I guess there's the thought that the operator on the console should have access to everything)

# Channel Images
Can't set channel pictures unfortunately.

---

![](received_446469612.mp4)

---

Anyway, just a few notes to myself:

# Link Aux Mutes
**Unlinked** - Each aux bus is independent to each other  
**Main Mutes Auxes** - Each aux bus is independent, but the Main channel mute will mute that channel on all aux buses  
**All Aux Mute Link** - All aux buses mute together, independent of the main mute  
**Global Mute Link** - All channel mutes link with all auxes
---
title: "Laptop Dock"
date: 2019-11-16T00:17:54+11:00

description: "Finally connecting my laptop to my monitors..."
categories: ["Life", "Audio Visual"]
featuredImage: ""
displayInList: true
breadcrumb: true

stickyInGlobal: false
stickyInCategory: false

showDateInList: true
showDateInPost: true

showCategoriesInList: true
---

November was the month of spending for me. From preparing Christmas gifts, to being too eager and impatient to wait for Black Friday / Cyber Monday sales (_But do they even happen down here in Australia???_).

> 2x [Mi Band 4](../mi-band-4) smart watches  
1x [Shure SE215](https://www.shure.com/en-US/products/earphones/se215) earphones  
1x [Knowledge Zenith ZS10 Pro](https://audiobudget.com/product/KZ/ZS10PRO) earphones  
2x [Logitech Spotlight](https://www.logitech.com/en-au/product/spotlight-presentation-remote) wireless clickers  
2x [Satechi Type-C 75W Travel Charger](https://satechi.net/products/type-c-75w-travel-charger)  
1x [Canon EF 35mm f/2 IS USM](https://www.canon.com.au/camera-lenses/ef-35mm-f-2-is-usm) camera lens  
**1x [Dell WD15 USB-C Business Dock](https://www.dell.com/en-au/work/shop/dell-business-dock-wd15-with-180w-adapter/apd/452-bcfx/pc-accessories)**  
**2x [HDMI KVM](https://www.ebay.com.au/itm/4K-Ultra-HD-HDMI-Port-USB-2-0-Sharing-KVM-Switch-Box-For-Keyboard-Plug-Play/163970343544)**

In anticipation for Cyber Monday, I had started to look and prepare for a [new computer build](https://au.pcpartpicker.com/list/gvfK4n) - but after a few unforeseen turn of events, I had decided to delay those purchases, and opt for buying a collection of other things.  
One of these things included buying some equipment to connect my laptop (Dell Latitude 7390) to my multi-monitor setup at home.

Previously, I had been connecting my laptop to a USB-C PD + Gigabit Ethernet dongle, then using either [Synergy](https://symless.com/synergy) or [TeamViewer](https://www.teamviewer.com/). Whilst both great products, I did wish that I could get the same instantaneous responsiveness from physical interaction.  
When using Synergy, the keyboard kept popping up when clicking on any text-field on [Pop OS](../laptop-reinstall).  
And with TeamViewer, I had to keep my laptop opened ajar - No amount of configuration could fix it..

To actualise my idea, I opted for a USB-C Dock and DisplayPort KVM solution.

![](diagram-no_peripheral.svg)

USB-C Dock - I want to have _one_ cable, which can charge my laptop, extend the video signal, provide audio out and also carry a gigabit network connection. USB-C was clearly the choice here, with its Power Delivery standards.  
I decided upon the **[Dell WD15 USB-C Business Dock](https://www.dell.com/en-au/work/shop/dell-business-dock-wd15-with-180w-adapter/apd/452-bcfx/pc-accessories)**, as I had found a good deal for AUD $89 - what a steal!

DisplayPort KVM - As DisplayPort MST exists, I would be able to connect just one cable from my laptop, and daisy-chain DisplayPort MST-compatible displays together to get an extended display.  
I decided upon the **[ATEN CS782DP DisplayPort KVM](https://www.aten.com/au/en/products/kvm/desktop-kvm-switches/cs782dp/)** as it had good reviews and, whilst pricey, had support for the MST feature I needed for multi-displays

---

EDIT: I decided against the ATEN ($220), and instead ended up purchasing two [generic HDMI KVMs](https://www.ebay.com.au/itm/4K-Ultra-HD-HDMI-Port-USB-2-0-Sharing-KVM-Switch-Box-For-Keyboard-Plug-Play/163970343544) ($70 for both).  
There were a few reasons for this:

* It was externally powered, rather than being powered by the USB bus - which I read could be bad.
* I would have the option to switch just one display by manually triggering a single KVM
* I would be able to switch an infinite number of displays by bridging all of the remote input ports together
* Cheap!

<s>I'm currently waiting for the KVM's to arrive.  
When they do,</s> I'm planning of adding a physical button to each unit, as well as bridging the units together (probably externally via cable between the input jacks)

---

![](20191226_182823.jpg)  
So they arrived!  
In the packaging is the KVM switch, two USB type-A  male to USB Type-B male cables, a 3.5mm TRS M-M cable and a 3.5mm switch.  
(That TRS cable only works on the tip and sleeve though).

I went ahead and made a TS to 2x TS (Though I used a TRS jack) cable, so that one switch could control both KVMs.  
![](20191227_202737.jpg)

After everything was set up, my displays were switching well! However, USB wasn't working great...

* My HyperX Alloy Elite RGB gaming keyboard wouldn't power on
* Switching the input whilst a USB device was plugged in occasionally caused the KVM to freeze - Requiring all cables to be removed then plugged back in

Unfortunately this seems to be an error of the KVM's microcontroller - something I wouldn't be able to fix.

I decided to go and purchase a separate USB switch. While waiting for it to arrive, I was to use an old Belkin VGA USB KVM to switch between devices.

The USB Switch (UGreen) didn't have any 3.5mm / auxiliary / remote port for switching; just the push button at the top of the unit - Meaning I couldn't use the same switch to change the USB Switch and both the KVMs... We can fix that.

I used a rotary tool and cut out a chunk from the free space of the PCB.  

![](USER_SCOPED_TEMP_DATA_MSGR_PHOTO_FOR_UPLOAD_1579662159235.jpeg) ![](USER_SCOPED_TEMP_DATA_MSGR_PHOTO_FOR_UPLOAD_1579662898253.jpeg)

Then I soldered in and slotted a 3.5mm socket (Note: In the picture I have the wires soldered in the _wrong polarity_, which caused issues when pressing the button)

![](20200122_152706.jpg) ![](20200122_152709.mp4)

Finally I made holes and cuts in the enclosure to fit the socket in, and closed it up.

Looking good!  
![](20200122_163516.jpg) ![](20200122_163547.jpg)

---

So there's that, finally on the 22nd of January 2020, I've finished setting up my laptop dock!  

* 2 HDMI KVMs switch my monitors between the desktop and the dock
* A USB Switch assigns my keyboard and mouse to the desktop or dock
* A button toggles both the two HDMI KVMs and the USB Switch
* The desktop and dock have their own Gigabit Ethernet connection
* Audio comes out from the dock, my desktop, a Bluetooth audio receiver, an auxiliary cable, and a generic 1/4 jack into my Behringer Eurorack RX1602 into my sound system!

---

![](diagram-with_peripheral.svg)

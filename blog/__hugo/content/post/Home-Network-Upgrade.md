---
title: "Home Network Upgrade"
date: 2019-01-13T21:01:21+11:00
description: "Retrofitting second hand equipment to make my network negligibly better"
categories: ["Networking", "Life"]
displayInMenu: false
displayInList: true
---

![](20190112_142642.jpg)

When I'm bored I often find myself scrolling Gumtree and Facebook Marketplace for deals - audio gear, camera gear, furniture, and when in 'need' - network gear!

So I found a classified on Gumtree...

8x <u>**[Ubiquiti UniFi UAP](https://store.ubnt.com/products/unifi-ap)**</u> - $10 each!!!  
Unfortunately they were the UAP's not the UAP-AC's.  
The UAP isn't 10/100/1000, which is a shame, but nor were my old APs (but.. awhh)  
And hey, $50 savings per unit.  

<u>**[MikroTik RouterBOARD RB1200](https://mikrotik.com/product/RB1200)**</u> - $40  
An EOL MikroTik router - but still works flawlessly!  
Getting this thing set up was a bit of a journey...

Firstly the reset button at the back only does a power reset.  
Unlike my old OpenWRT router, there's no 30/30/30 reset. Instead - you have to open up the router and short the reset contacts.  
Okay so Philips head screwdriver out and... AAAAH I NEED A PHILIPS P2 HEAD.  
Lucky my HP ProLiant MicroServer came with a Philip P2 tool - phew!

Secondly, there wasn't any DHCP host name DNS entry mapping functionality built in?  
So I used [this](https://forum.mikrotik.com/viewtopic.php?t=119469#) handy script (_Thanks dse_)!

<u>**[D-Link DGS-1210-28](https://www.dlink.com.au/business-solutions/DGS-1210-28-28-port-gigabit-websmart-switch)**</u> - $50  
A quiet (fanless) managed gigabit switch!  
Over the time I've used it, I've felt like it has some issues with saving its settings...  
After a power cycle, the DHCP/Static settings had reset and I was unable to connect to it

<u>**[Dell PowerConnect 2848](https://www.dell.com/en-us/work/shop/cty/powerconnect-2848-switch/spd/powerconnect-2848)**</u> - $80  
A 48 port managed gigabit switch... MAN THIS THING IS LOUD.  
Into the church it goes

---

So I was going to go to Ikea to buy the [Lack Table](https://www.ikea.com/au/en/catalog/products/00352988/#/00352988) to make the [Lack Rack](https://wiki.eth0.nl/index.php/LackRack), but I ended up finding some pieces of wood in the garage that had basically just the right dimensions!!!  

![](20190217_144006.jpg)
![](20190217_223814.jpg)

Yeet.



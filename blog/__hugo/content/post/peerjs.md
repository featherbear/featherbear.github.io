---
title: "PeerJS Revived"
date: 2019-03-01T11:34:37+11:00
description: "P2P connections with JavaScript!"
categories: ["WebDev", "Programming", "Networking"]
displayInMenu: false
displayInList: true
---

Near the end of 2017, I <s>wrote</s> attempted to write a [delivery tracker webpage](https://github.com/featherbear/deliverytrack) that would list all of my tracked packages and their status information.  

To sync my list of packages between my devices, I used a library called [`PeerJS`](https://github.com/peers/peerjs/) that established P2P connections between my devices to send and receive data.
PeerJS was dormant since 2015, and amazingly it worked for the duration of my code.

After a 3 year period of inactivity, PeerJS is back and alive (in active commits) so yay!

I'm using PeerJS in my Mafia game helper [`Jebabej`](../jebabej) to establish client-server connections between different the players and the host.

---

The other options I was considering was [`EasyRTC`](https://github.com/priologic/easyrtc) and [`simple-peer`](https://github.com/feross/simple-peer)

---
title: "Portforwarding with SSH"
date: 2018-11-12T14:34:38+11:00
description: ""
categories: ["Networking"]
featuredImage: ""
displayInMenu: false
displayInList: true
---
$> `ssh [SERVER] -L srcAddr:srcPort:dstAddr:dstPort`
listens on srcAddr:srcPort which results in [SERVER] connecting to dstAddr:dstPort  
> Useful for connecting to a device in a network  

$> `ssh [SERVER] -L srcPort:dstAddr:dstPort`  
[SERVER] listens on srcPort which is connecting to connecting to dstAddr:dstPort

# -R?
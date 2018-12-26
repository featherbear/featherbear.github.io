---
title: "Portforwarding with Shootback"
date: 2018-11-12T16:25:09+11:00
description: ""
categories: ["Networking"]
displayInMenu: false
displayInList: true
---

WITHOUT SHADOWSOCKS
```
./master.py -m 0.0.0.0:58370 -c 0.0.0.0:8380
./slaver.py -m direct.navhaxs.au.eu.org:58370
```

---

WITH SHADOWSOCKS
```
./master.py -m 127.0.0.1:58370 -c 0.0.0.0:8380`

ss-tunnel -c /etc/shadowsocks/config.json -s direct.navhaxs.au.eu.org -l 58370 -L localhost:58370 -u
./slaver.py -m localhost:58370 -t localhost:8001
```

---

:: config.json
```
{
	"server_port": 58388,
	"password": "",
	"method": "aes-128-cfb",
}
```

// I mean we could've always just used reverse ssh port forwarding
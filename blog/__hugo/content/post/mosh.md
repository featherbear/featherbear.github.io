---
title: "Mosh"
date: 2019-06-09T14:39:16+10:00
description: "SSH, but better?"
categories: ["Networking"]
featuredImage: "https://mosh.org/mosh.png"
displayInList: true
breadcrumb: true
---

[Mosh]: https://mosh.org
[PuTTY]: https://www.chiark.greenend.org.uk/~sgtatham/putty/

[Mosh] is a remote terminal application that aims to overcome the issues that many other protocols face.  
For me, [Mosh] addresses the lack of roaming support and intermittent network connectivity that I would face when trying to connect to servers whilst on the train or anywhere on the go.  

# (semi)technicalities
[Mosh] connects to the server machine over SSH, meaning that there is no concern of a new avenue of vulnerability. Rather we get the same security as we would if SSH'ing into the server ourselves.  
Once the connection has been established, a port is opened and [Mosh] communicates with that port.

# Installation
On Debian/Ubuntu, [Mosh] is available in the mainstream repository, so a simple `sudo apt install mosh` is all that's needed.

If you want to set up [Mosh] on a device where you don't have root privileges, you ca

<!--
```bash
# protobuf probably isn't installed so we'll compile that too
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protobuf-all-3.6.1.tar.gz
tar -zxf protobuf-all-3.6.1.tar.gz
cd protobuf-all-3.6.1
./autogen.sh
./configure --prefix=/home/you/usr
./make

git clone https://github.com/mobile-shell/mosh
cd mosh
./autogen.sh
./configure --prefix=$HOME/Software/mosh/
```
-->


# Client Support
The SSH client I used ([PuTTY]) doesn't support [Mosh] connections - meaning that I can't use it anymore. But hey - here's to progression.

## [MobaXterm](https://mobaxterm.mobatek.net/)
Well, uh not gonna lie but because of the UI I don't even want to try this one out.

## [Termius](../termius) (Formerly Server Auditor)  

> See related post here: [Termius - My new SSH client](../termius)

A bit big (108MB!) for a terminal client... Maybe I should've tried MobaXterm..  
_EDIT: It uses Electron. Well no wonder it's so large._  

Anyhow, the free version of Termius was more than enough for me. You get an ad-free experience with SSH, Telnet and Mosh support, as well as port forwarding capabilities.  

# Experience

The first thing I got trying to connect to my server was a nice little error message telling me that I didn't have the UTF-8 locales.

```
The locale requested by LANG=en_US.UTF-8 isn't available here.
Running `locale-gen en_US.UTF-8' may be necessary.

mosh-server needs a UTF-8 native locale to run..

Unfortunately, the local environment ([no charset variables]) specifies the character set "US-ASCII",
The client-supplied environment (LANG=en_US.UTF-8) specifies the character set "US-ASCII".

locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
```

blah blah blah [fix that like this](https://askubuntu.com/a/1060694):
```bash
apt-get update
apt-get install -y locales
locale-gen "en_US.UTF-8"
update-locale LC_ALL="en_US.UTF-8"
```

aaand we're in!



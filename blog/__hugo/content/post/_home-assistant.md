---
title: "Home Assistant"
date: 2019-06-30T23:34:36+10:00
description: "Let's get this home automation rollin'"
categories: ["Life", "Programming"]
featuredImage: ""
displayInList: true
breadcrumb: true
draft: true
---

[Home Assistant]: https://www.home-assistant.io/

My [brother](https://navhaxs.au.eu.org) and I decided to <s>get hacked</s> set up a home automation system for our lighting, heating/cooling and multimedia systems (amongst other purposes).  

# The Software

The main two competitors that we looked at were [Home Assistant] and [OpenHAB](https://www.openhab.org/).  
Whilst [OpenHAB](https://www.openhab.org/) was more stable and feature-rich, we opted for [Home Assistant] because it looked nicer. (wow...)  
Although there was no official Android client, there are (I haven't tested) third party apps, like HomeAssist, Ariela, HA Client, Homy, Home Habit, WallPanel and Project Rotini.  
In addition, the new [Lovelace Web UI](https://www.home-assistant.io/lovelace/) looks fantastic - so perhaps we won't even need a native app.

Also, [Home Assistant] is written in Python, whilst [OpenHAB](https://www.openhab.org/) is written in Java.  
From what I envision, by the nature of a home automation system - it would be better suited to write scripts in Python than Java.

[Home Assistant] also supports [ESPHome](https://esphome.io/devices/nodemcu_esp8266.html)-compatible devices, like my [NodeMCU ESP8266 boards](https://esphome.io/devices/nodemcu_esp8266.html), so I'll be able to use them as wireless I/O devices!

# Installation












EDIT: So [Home Assistant] and Hass.io are [different things](https://www.home-assistant.io/faq/#home-assistant-vs-hassio).  
[Home Assistant] ist he software, whilst Hass.io is the ochestrator (makes things work together).

Installing [Home Assistant] manually stops you from (easily) installing community addons.

```bash
apt-get install -y apparmor-utils apt-transport-https avahi-daemon ca-certificates curl dbus jq network-manager socat
curl -fsSL get.docker.com | sh
curl -sL "https://raw.githubusercontent.com/home-assistant/hassio-installer/master/hassio_install.sh" | bash -s
```

```bash
Client:
 Version:           18.09.7
 API version:       1.39
 Go version:        go1.10.8
 Git commit:        2d0083d
 Built:             Thu Jun 27 17:56:17 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          18.09.7
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.8
  Git commit:       2d0083d
  Built:            Thu Jun 27 17:23:02 2019
  OS/Arch:          linux/amd64
  Experimental:     false
If you would like to use Docker as a non-root user, you should now consider
adding your user to the "docker" group with something like:

  sudo usermod -aG docker your-user

Remember that you will have to log out and back in for this to take effect!

WARNING: Adding a user to the "docker" group will grant the ability to run
         containers which can be used to obtain root privileges on the
         docker host.
         Refer to https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface
         for more information.

```

```bash
docker ps
# CONTAINER ID        IMAGE                                    COMMAND                  CREATED             STATUS              PORTS               NAMES
# 2bec2ff521ce        homeassistant/qemux86-64-homeassistant   "/usr/bin/entry.sh"      10 seconds ago      Up 9 seconds                            homeassistant
# 21c9de4deeb0        homeassistant/amd64-hassio-supervisor    "/bin/entry.sh pytho�"   28 seconds ago      Up 27 seconds                           hassio_supervisor

```
OLD INSTRUCTIONS


<details>

![](preparing-hassio.png)

https://dzone.com/articles/a-comparison-of-docker-guis
https://rancher.com/
https://swarmpit.io/
https://www.portainer.io/

ZeroTier




> Btw `sudo` everything - you know the drill.

Most guides say to install [Home Assistant] onto a Raspberry Pi, or a NUC via Hass.io.  
But I've already got my Debian virtual machine (`sandbox`) set up on the server's Hyper-V - we we'll use that.

Ignoring all advice to use Docker and/or Python virtual environments:
```bash
python3 -m pip install homeassistant
```

> As of installing (30/06/2019), [Home Assistant] requires Python >= `3.5.3`

We'll also create a new user account `homeassistant` to run the software, locking down some settings too.

```bash
useradd --shell /bin/false --system --no-user-group --no-create-home homeassistant
```

## Configuring [Home Assistant] to run as a service

They recommend to use [`systemd`](https://www.home-assistant.io/docs/autostart/systemd/), but I'm more familiar with the [`init.d`](https://www.home-assistant.io/docs/autostart/init.d/) approach.

`/etc/init.d/hass-daemon`

<details>
> EDIT: The original script was broken, I submitted a [pull request #9741](https://github.com/home-assistant/home-assistant.io/pull/9741) to fix it

```sh
#!/bin/sh
### BEGIN INIT INFO
# Provides:          hass
# Required-Start:    $local_fs $network $named $time $syslog
# Required-Stop:     $local_fs $network $named $time $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Description:       Home\ Assistant
### END INIT INFO

# /etc/init.d Service Script for Home Assistant
PRE_EXEC=""
HASS_BIN="/usr/local/bin/hass"
RUN_AS="homeassistant"
CONFIG_DIR="/etc/homeassistant"
PID_FILE="$CONFIG_DIR/hass.pid"
LOG_DIR="/var/log/homeassistant"
LOG_FILE="$LOG_DIR/home-assistant.log"
FLAGS="-v --config $CONFIG_DIR --pid-file $PID_FILE --log-file $LOG_FILE --daemon"


start() {
  if [ -f $PID_FILE ] && kill -0 $(cat $PID_FILE) 2> /dev/null; then
    echo 'Service already running' >&2
    return 1
  fi
  echo -n 'Starting service� ' >&2
  local CMD="$PRE_EXEC $HASS_BIN $FLAGS"
  su -s /bin/bash -c "$CMD" $RUN_AS
  if [ $? -ne 0 ]; then
    echo "Failed" >&2
  else
    echo 'Done' >&2
  fi
}

stop() {
  if [ ! -f "$PID_FILE" ] || ! kill -0 $(cat "$PID_FILE") 2> /dev/null; then
    echo 'Service not running' >&2
    return 1
  fi
  echo -n 'Stopping service� ' >&2
  kill $(cat "$PID_FILE")
  while ps -p $(cat "$PID_FILE") > /dev/null 2>&1; do sleep 1;done;
  rm -f $PID_FILE
  echo 'Done' >&2
}

install() {
  echo "Installing Home Assistant Daemon (hass-daemon)"
  update-rc.d hass-daemon defaults
  mkdir -p $CONFIG_DIR
  chown $RUN_AS $CONFIG_DIR
  mkdir -p $LOG_DIR
  chown $RUN_AS $LOG_DIR
}

uninstall() {
  echo "Are you really sure you want to uninstall this service? The INIT script will"
  echo -n "also be deleted! That cannot be undone. [yes|No] "
  local SURE
  read SURE
  if [ "$SURE" = "yes" ]; then
    stop
    echo "Notice: The config directory has not been removed"
    echo $CONFIG_DIR
    echo "Notice: The log directory has not been removed"
    echo $LOG_DIR
    update-rc.d -f hass-daemon remove
    rm -fv "$0"
    echo "Home Assistant Daemon has been removed. Home Assistant is still installed."
  fi
}

case "$1" in
  start)
    start
    ;;
  stop)
    stop
    ;;
  install)
    install
    ;;
  uninstall)
    uninstall
    ;;
  restart)
    stop
    start
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|install|uninstall}"
esac
```
</details>

Then run the service installer with `service hass-daemon install`.

Finally, start the service with `service hass-daemon start`, and head to `http://<SERVER_IP>:8123`  
Let it run for a bit while it sets everything up. It took about a minute before I could access the webpage.

</details>

# Setup &amp; Configuration

When you first visit the control panel, you should be greeted with the Administrator account creation page

![](onboarding.png)

Fill in those details, and hit Create Account. Then follow the rest of the instructions - should be straightforward!

---

# Usage

...

---
title: "Arduino - WiFi DMX"
date: 2019-04-20T21:58:58+10:00
description: "DMX via ArtNet, via WiFi, via Arduino!"
categories: ["Programming", "Audio Visual", "Networking"]
featuredImage: ""
displayInList: true
breadcrumb: true
---

At the start of 2018, I built a cheap wireless DMX receiver as a parting 'gift' to my high school (Heck, I even wrote a [training manual](https://sydneytech.github.io/sal/)).  
Their system had **i s s u e s**.  

Two broken lighting consoles, and the DMX cable that connects from the control room was damaged due to water damage.  
So something had to be done!

<style>
img {
max-height: 50vh;
}
</style>
![](PHOTO_20180124_113134.jpg)

<video autoplay loop muted src="VIDEO_20170207_144659-1-1.mp4" style="max-height: 50vh" />
I threw together an ESP8266 NodeMCU V3, a MAX485 chip, and added a barrel type DC socket

---

Fast forward to 2019, it was time to remake it - saying as I was needing to wireless control some DMX fixtures  
![](USER_SCOPED_TEMP_DATA_MSGR_PHOTO_FOR_UPLOAD_1554983905342.jpg_1554983906885.jpeg)

---

Using the [LXDMXWiFi_Library](https://github.com/claudeheintz/LXDMXWiFi_Library) by Claude Heintz

```arduino
/*
  Attach (ESP8266) D4 to (RS485) DI
  Attach VCC to 3V3
  Attach GNDs together

  Supposedly meant to short DE and RE to VCC

  1B
  2G
  3A

  D4 is the DMX out
*/


///

static const uint8_t ACTIVITY_INDICATOR_PIN = D0;
static const char *SSID = "< YOUR WIFI SSID >";
static const char *PASS = "< YOUR WIFI PASS >";

static const int subnet = 0;
static const int universe = 0;

static char* name = "ESP8266 Receiver";
// "ESP8266 ArtNet to DMX Receiver"

///

#include <LXESP8266UARTDMX.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <LXDMXWiFi.h>
#include <LXWiFiArtNet.h>

LXDMXWiFi* interface;
WiFiUDP wUDP;

uint8_t led_state_activity = 0;
void blinkActivity() {
  digitalWrite(ACTIVITY_INDICATOR_PIN, !(led_state_activity = !led_state_activity) ? HIGH : LOW);
}

void setup() {
  Serial.begin(115200);
  Serial.println("Starting WiFi to DMX bridge");

  pinMode(ACTIVITY_INDICATOR_PIN, OUTPUT);

  ESP8266DMX.startOutput();

  WiFi.mode(WIFI_STA);
  WiFi.begin(SSID, PASS);

  Serial.print("Connecting to wireless network: ");
  Serial.println(SSID);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    blinkActivity();
  }
  Serial.print("Connected with IP: ");
  Serial.print(WiFi.localIP());

  interface = new LXWiFiArtNet(WiFi.localIP(), WiFi.subnetMask());
  ((LXWiFiArtNet*)interface)->setSubnetUniverse(subnet, universe); // 0 based! So subnet 1 (which is 0,), and universe 4
  strcpy(((LXWiFiArtNet*)interface)->shortName(), name);
  strcpy(((LXWiFiArtNet*)interface)->longName(), name);

  wUDP.begin(interface->dmxPort());

  ((LXWiFiArtNet*)interface)->send_art_poll_reply(&wUDP);

  digitalWrite(ACTIVITY_INDICATOR_PIN, HIGH);
  led_state_activity = 0;
}


void loop() {
  if ( interface->readDMXPacket(&wUDP) ) {
    Serial.print("data");
    for (int i = 1; i <= interface->numberOfSlots(); i++) {
      ESP8266DMX.setSlot(i , interface->getSlot(i));
    }
    blinkActivity();
  }
}

```
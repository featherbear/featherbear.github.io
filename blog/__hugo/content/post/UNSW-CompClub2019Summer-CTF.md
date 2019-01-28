---
title: "CompClub 2019 Summer CTF"
date: 2018-12-20T18:32:46+11:00
description: "Hosting a Capture The Flag secgame"
categories: ["UNSW", "Python", "WebDev"]
featuredImage: "/post/unsw-compclub2019summer/compclub.logo.svg"
displayInMenu: false
displayInList: true
---
> [Read the whole CompClub 2019 Summer Workshop post](../unsw-compclub2019summer)

GitHub: [featherbear/UNSW-CompClub2019Summer-CTF](https://github.com/featherbear/UNSW-CompClub2019Summer-CTF)  
Demo: [featherbear.github.io/UNSW-CompClub2019Summer-CTF](https://featherbear.github.io/UNSW-CompClub2019Summer-CTF)

---

During the [Winter 2018 Workshop](https://winter2018.compclub.com.au), the organiser for the security day coded up a CTF website.  

> **Technologies**  
Server: [Flask](http://flask.pocoo.org/) (Python)  
CSS: [Bootstrap](https://getbootstrap.com/)  
Performance: **RIP**

Yeah so, Flask is a great Python web framework, with all of its routing magic.  
But running a server with Flask alone is not a good idea...  
Flask should be run in a WSGI environment, but the inbuilt Flask server **is not** such.  
As a result, as the server load goes up, the performance goes down. Alot.

We got Gunicorn set up half-way through the competition, and it did help; but started to get CPU bottlenecks from the VPS.  

Well that was fun times.

Anyway, so despite that, I had this "_great_" idea of also writing my own CTF site - inspired from [Facebook's CTF platform](https://github.com/facebook/fbctf).


> **Technologies**  
Server: [Tornado](https://www.tornadoweb.org/) (Python)  
CSS: [Bulma](https://bulma.io)

**Tornado vs Flask**  
I could have just set up a WSGI container for Flask and called it a day, but might as well try out Tornado. I haven't used either frameworks for a while, so I decided to use Tornado, since it was faster to set up as a non-blocking server.

**Bulma vs Bootstrap**  
To be honest, Bootstrap is way more polished and refined than Bulma.  
I decided to use Bulma because I've been using it for another project.  
This site had components similary needed to create for that other project.  
So I uh, <s>stole</s> 'dutifully copied' that other code for this site.

---

In terms of the site, it was definitely arduous and very time consuming...  
But I definitely had fun designing it.  

I grabbed a dotted world map, to which I could write some CSS so that the dot would grow red when hovered. But to get a whole region to light up, I had to modify the SVG map, and that meant PATH TRACING! Aaah!
<video autoplay loop muted src="2018-11-26 00-43-38.mov"></video>
Results were pretty neat!
<video autoplay loop muted src="received_1119077157.mp4" style="height: 50vh"></video>

Take a look!  
GitHub: [featherbear/UNSW-CompClub2019Summer-CTF](https://github.com/featherbear/UNSW-CompClub2019Summer-CTF)  
Demo: [featherbear.github.io/UNSW-CompClub2019Summer-CTF](https://featherbear.github.io/UNSW-CompClub2019Summer-CTF)

---

Performance
So it turned out surprisingly very well. With at least 35 concurrent clients - there was no noticable server delay!
Score!

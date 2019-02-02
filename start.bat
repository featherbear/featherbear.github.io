@echo off
title featherbear.au.eu.org developmental server
start http://localhost:8080
http-server -p 8080
; npm install http-server -g
python -m SimpleHTTPServer 8080
python -m http.server 8080

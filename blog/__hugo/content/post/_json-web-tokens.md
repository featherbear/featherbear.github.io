---
title: "JSON Web Tokens"
date: 2019-06-12T19:20:54+10:00
description: ""
categories: ["Programming", "Networking"]
featuredImage: ""
displayInList: true
breadcrumb: true
draft: true
---

Pronounced 'jot'

* JSON Web Tokens
  * JWT does _not_ obscure the data, it only validates it
     * Only use JWT if the transport is secured
  * Validate against key-hash of the data (head+payload)
  * Key known only by auth provider and application server

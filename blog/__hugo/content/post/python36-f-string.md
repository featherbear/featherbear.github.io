---
title: "Python 3.6 F-strings"
date: 2019-02-13T18:59:13+11:00
description: "I finally looked at What's New in Python 3.6"
categories: ["Python", "Programming"]
displayInMenu: false
displayInList: true
---

[PEP 498](https://www.python.org/dev/peps/pep-0498/) introduced a new string formatting mechanism called Literal String Interpolation.  
We'll call them F-strings, because of the leading `f` character that appears before the string literals.

---

The PEP really says it all but sure we'll go through it again, why not!

**Format**:  
`f ' <text> { <expression> <optional !s, !r, or !a> <optional : format specifier> } <text> ... '`

_Using string format_  
`nameVar = Andrew`  
`print("Hello, {}!".format(nameVar))`  
> Hello, Andrew!

`nameVar = Andrew`  
`print("Hello, {name}!".format(name=nameVar))`  
> Hello, Andrew!

_Using %-formatting_  
`nameVar = Andrew`  
`print("Hello, %s!" % nameVar)`  
> Hello, Andrew!  

**Using f-strings**  
`nameVar = Andrew`  
`print(f"Hello, {nameVar}!")`  
> Hello, Andrew!  

---

**Escaping f-strings**  
What if we wanted to print out "{var}"  
`print(f"{{var}}")`  
> {var}

What if we wanted to print out "{{var}}"  
`print(f"{{{{var}}}}")`  
> {{var}}

---

In terms of speed, they're much faster than `%-formatting` and the `str.format()` function! (source: [Hacker Noon](https://hackernoon.com/a-closer-look-at-how-python-f-strings-work-f197736b3bdb))

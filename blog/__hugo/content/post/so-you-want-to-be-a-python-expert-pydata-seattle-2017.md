---
title: "So You Want to Be a Python Expert? | PyData Seattle 2017"
date: 2019-04-24T23:17:45+10:00
description: "Things you should know as as a Python expert"
categories: ["Programming"]
displayInList: true
---

So I got bored and decided to watch [this video](https://www.youtube.com/watch?v=cKPlPJyQrt4)
{{< youtube cKPlPJyQrt4 >}}

These were the things covered in the presentation...

---

# Using data model methods
Or (double-)underscore functions...

The Python data model is a means by which we can implement protocols that have abstract meaning that is dependent on the object

For example, the methods:  

* `__init__`
* `__new__`
* `__add__`
* `__str__`
* `__repr__`

&nbsp;  


**Aside**  
There also exists class methods, and static methods.  
**Class methods** are bound to a class rather than an instance of an object, and look like the following

```python3
class dummy():
  @classmethod
  def createThisClass(cls):
    return cls()


dummy.createThisClass()
dummy().createThisClass()
```

**Static methods** are methods that exist within a class, but are not bounded to the scope of a class nor an object instance.

```python3
class dummy():
  @staticmethod
  def doSomething():
    #             ^ notice there is no `self` parameter
    return "blah"

dummy.doSomething()
dummy().doSomething()
```

# Metaclasses

_Consider a library that will be subclassed in user code  
A derived class is able to enforce a constraint on the base class_  
ie `assert hasattr(Base, 'foo'), "Uh oh, it broke!"`  

But how could we check if a derived class has a method defined...


Metaclasses are classes derived from the class `type` that allow derived types to be intercepted

```python3
class BaseMeta(type):
  def __new__(cls, name, bases, body):
    if not 'bar' in body: raise TypeError()
    return super().__new__(cls, name, bases, body)

class Base(metaclass=BaseMeta):
  def foo():
    return self.bar()

# A TypeError will be raised and will not allow the Base class to be defined!
```

---

`__init_class__` (PEP 487)

Called when a class is inherited from another class

```python3
def __init_subclass__(cls, *a, **kw):
  return super().__init_subclass__(cls, *a, **kw)
```

---

We could also use the abstract method library in Python to prevent code from being run, however this will only cause failure during runtime.  

```python3
from abc import ABC, abstractmethod
```

--- 

**The unused approach:**  
Like the other data model methods, there exists a function `builtins.__build_class__` which hooks into the building of a class.  
We could wrap around this function to check that, if a class inherits Base, it has has methods defined.

# Decorators
```python3
def decorator_function(fn):
  def function_wrapper(*args, **kwargs):
    return fn(*args, **kwargs)
  return function_wrapper
```

A decorator is Python syntax to represent `func = wrapper(func)`  
i.e Create a new function that takes in a function and returns another function

We could use this to time the execution of a function, or even make a function repeat `n` times!

# Generators
Eager evaluation of code can be bad.  

i.e In the below code, we are unable to start processing the queue until it is all completed
```python3
from time import sleep
def compute():
  rv = []
  for i in range(10):
    rv.append(i)
    sleep(0.5)
```

We can improve this code and use the `yield` keyword
```python3
from time import sleep
def compute():
  for i in range(10):
    yield i
    sleep(0.5)
```

When we call the `compute` function, we are returned a generator object.  
Only when the generator is iterated through, does the code after the yield statement execute.  
Essentially, `yield`ing a value (or even `yield`ing nothing) pauses the code, and hands control back to the user (code)!

_// TLDR; Yield does not actually execute the code until the previous item is retrieved_

If we didn't use yield, we would do something like
```python3
class Compute:
  def __iter__(self):
    self.last = 0
    return self
  def __next__(self):
    rv = self.last
    self.last += 1
    if self.last > 10:
      raise StopIteration()
    sleep(0.5)
    return rv
```

---

We don't even need a generator to return values... - We could use it as a sequence

**Lazy-divide**
```python3
def api()
  first()
  yield
  second()
  yield
  third()
```

We might not yield a value, but we yield control back to the user

# Context Managers
For all file interactions in Python, we need to open and close that file - mandatory setup and teardown.

```python3
f = open('file', 'r')
f.close()
```

To simplify our code, there exists a mechanism known as a context manager.
```python3
with open('file', 'r') as f:
  doSomething()
  # f.close() performed automatically during the teardown
```

Context managers handle the setup and teardown of data structures for us.

Behind the scenes, a context manager would perform the below
```python3
with ctx() as x:
  pass
  
### IS THE SAME AS ###

x = ctx().__enter__()
try:
  ...
finally:
  x.__exit__()
```

To modify the parameters of a context generator, we would modify the `__call__` data model method

```python3
class ctx:
  def __call__(self, *args, **kwargs):
    self.args, self.kwargs = args, kwargs
    return self
  def __enter__(self):
    pass
  def __exit__(self):
    pass


ctxObj = ctx()
with ctxObj() as x:
  pass
```

**jk though!**  

There exists a decorator function `contextlib.contextmanager` which turns a generator into a context manager

```python3
from contextlib import contextmanager

@contextmanager
def something(arg):
  doSomething(arg)
  try:
    yield
  finally:
    doSomethingElse()
```

  $.getJSON("../data/items-photos.json", function(res) {
  	var nav = document.createElement('nav')
  	nav.className = 'thumb-nav'
  	for (var i = 1; i <= res.length; i++) {
  		var page = document.createElement('div');
  		page.id = "container-" + i
  		page.className = "container"
  			var header = document.createElement('header');
  			header.className = "intro"
				var header_img = document.createElement('img');
				header_img.src = res[i - 1].cover.image
				header_img.className = "intro__image"
				header_img.alt = res[i - 1].cover.title
				header.appendChild(header_img)
  				var header_content = document.createElement('div')
				header_content.className = "intro__content"
					var header_content_title = document.createElement('h1')
  					header_content_title.className = "intro__title"
  					header_content_title.innerText = res[i - 1].cover.title
  					header_content.appendChild(header_content_title)
  					var header_content_subtitle = document.createElement('div')
  					header_content_subtitle.className = "intro__subtitle"
  						header_content_subtitle_description = document.createElement('div')
  						header_content_subtitle_description.className = "intro__description"
  						header_content_subtitle_description.innerText = res[i - 1].cover.description
  						header_content_subtitle.appendChild(header_content_subtitle_description)
  						var header_content_trigger = document.createElement('button')
  						header_content_trigger.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 60 60" preserveAspectRatio="none"><use class="icon icon--grid" xlink:href="#icon-grid" /><use class="icon icon--cross" xlink:href="#icon-cross" /><\/svg>`
  						header_content_trigger.className = "trigger"
						header_content_subtitle.appendChild(header_content_trigger)
  				header_content.appendChild(header_content_subtitle)
  			header.appendChild(header_content)
  		page.appendChild(header)
		
  		var section = document.createElement('section')
  		section.className = "items-wrap"
  		res[i - 1].content.map(function(s) {
  			var img = document.createElement('img');
  			img.src = s.src
  			img.alt = s.title
  			img.className = "item__image"
  			var title = document.createElement('h2')
  			title.className = "item__title"
  			title.innerText = s.title
  			var div = document.createElement('div')
  			div.className = "item"
  			div.appendChild(img)
  			div.appendChild(title)
  			section.appendChild(div)
  		})
  		page.appendChild(section)
  		document.body.appendChild(page)
  		var navIcon = document.createElement('a');
  		navIcon.className = "thumb-nav__item"
  		navIcon.setAttribute("data-container", page.id)
  			var navIcon_img = document.createElement('img')
  			navIcon_img.alt = res[i - 1].cover.title
  			navIcon_img.src = res[i - 1].cover.image
  			navIcon.appendChild(navIcon_img)
			/* var navIcon_span = document.createElement('span')
  			navIcon.appendChild(navIcon_span) */
		nav.appendChild(navIcon)
  	}
  	document.body.appendChild(nav)
  	
	var support = {
  			animations: Modernizr.cssanimations
  		},
  		animEndEventNames = {
  			'WebkitAnimation': 'webkitAnimationEnd',
  			'OAnimation': 'oAnimationEnd',
  			'msAnimation': 'MSAnimationEnd',
  			'animation': 'animationend'
  		},
  		animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
  		onEndAnimation = function(el, callback) {
  			var onEndCallbackFn = function(ev) {
  				if (support.animations) {
  					if (ev.target != this) return;
  					this.removeEventListener(animEndEventName, onEndCallbackFn);
  				}
  				if (callback && typeof callback === 'function') {
  					callback.call();
  				}
  			};
  			if (support.animations) {
  				el.addEventListener(animEndEventName, onEndCallbackFn);
  			} else {
  				onEndCallbackFn();
  			}
  		};
  	var containers = [].slice.call(document.querySelectorAll('.container')),
  		containersCount = containers.length,
  		nav = document.querySelector('nav.thumb-nav'),
  		pageTriggers = [].slice.call(nav.children),
  		isAnimating = false,
  		current = 0;

  	function init() {
  		resetScroll();
  		// disable scrolling
  		window.addEventListener('scroll', noscroll);
  		// set current page trigger
  		classie.add(pageTriggers[current], 'thumb-nav__item--current');
  		// set current container
  		classie.add(containers[current], 'container--current');
  		// initialize events
  		initEvents();
  	}

  	function initEvents() {
  		// slideshow navigation
  		pageTriggers.forEach(function(pageTrigger) {
  			pageTrigger.addEventListener('click', function(ev) {
  				ev.preventDefault();
  				navigate(this);
  			});
  		});
  		// open each container's content area when clicking on the respective trigger button
  		containers.forEach(function(container) {
  			container.querySelector('button.trigger').addEventListener('click', function() {
  				toggleContent(container, this);
  			});
  		});
  		// keyboard navigation events
  		document.addEventListener('keydown', function(ev) {
  			var keyCode = ev.keyCode || ev.which,
  				isContainerOpen = containers[current].getAttribute('data-open') == 'open';
  			switch (keyCode) {
  				// left key
  				case 37:
  					if (current > 0 && !isContainerOpen) {
  						navigate(pageTriggers[current - 1]);
  					}
  					break;
  					// right key
  				case 39:
  					if (current < containersCount - 1 && !isContainerOpen) {
  						navigate(pageTriggers[current + 1]);
  					}
  					break;
  			}
  		});
  	}

  	function navigate(pageTrigger) {
  		var oldcurrent = current,
  			newcurrent = pageTriggers.indexOf(pageTrigger);
  		if (isAnimating || oldcurrent === newcurrent) return;
  		isAnimating = true;
  		// reset scroll
  		allowScroll();
  		resetScroll();
  		preventScroll();
  		var currentPageTrigger = pageTriggers[current],
  			nextContainer = document.getElementById(pageTrigger.getAttribute('data-container')),
  			currentContainer = containers[current],
  			dir = newcurrent > oldcurrent ? 'left' : 'right';
  		classie.remove(currentPageTrigger, 'thumb-nav__item--current');
  		classie.add(pageTrigger, 'thumb-nav__item--current');
  		// update current
  		current = newcurrent;
  		// add animation classes
  		classie.add(nextContainer, dir === 'left' ? 'container--animInRight' : 'container--animInLeft');
  		classie.add(currentContainer, dir === 'left' ? 'container--animOutLeft' : 'container--animOutRight');
  		onEndAnimation(currentContainer, function() {
  			// clear animation classes
  			classie.remove(currentContainer, dir === 'left' ? 'container--animOutLeft' : 'container--animOutRight');
  			classie.remove(nextContainer, dir === 'left' ? 'container--animInRight' : 'container--animInLeft');
  			// clear current class / set current class
  			classie.remove(currentContainer, 'container--current');
  			classie.add(nextContainer, 'container--current');
  			isAnimating = false;
  		});
  	}
  	// show content section
  	function toggleContent(container, trigger) {
  		if (classie.has(container, 'container--open')) {
  			classie.remove(container, 'container--open');
  			classie.remove(trigger, 'trigger--active');
  			classie.remove(nav, 'thumb-nav--hide');
  			container.setAttribute('data-open', '');
  			preventScroll();
  		} else {
  			classie.add(container, 'container--open');
  			classie.add(trigger, 'trigger--active');
  			classie.add(nav, 'thumb-nav--hide');
  			container.setAttribute('data-open', 'open');
  			allowScroll();
  		}
  	}
  	// scroll functions
  	function resetScroll() {
  		document.body.scrollTop = document.documentElement.scrollTop = 0;
  	}

  	function preventScroll() {
  		window.addEventListener('scroll', noscroll);
		classie.add(document.body, 'hidescroll')
  	}

  	function allowScroll() {
  		window.removeEventListener('scroll', noscroll);
		classie.remove(document.body, 'hidescroll')
  	}

  	function noscroll() {
  		window.scrollTo(0, 0);
  	}

  	init();
	classie.add(document.body, 'hidescroll')
  })
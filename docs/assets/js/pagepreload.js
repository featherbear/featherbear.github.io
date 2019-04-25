/**
 * SVGPathLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function(window) {
	'use strict';

	function SVGPathLoader(el) {
		this.el = el;
		// clear stroke
		this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
	}
	SVGPathLoader.prototype._draw = function(val) {
		this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - val);
	}
	SVGPathLoader.prototype.setProgress = function(val, callback) {
		this._draw(val);
		if (callback && typeof callback === 'function') {
			// give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
			setTimeout(callback, 200);
		}
	}
	SVGPathLoader.prototype.setProgressFn = function(fn) {
		if (typeof fn === 'function') {
			fn(this);
		}
	}
	// add to global namespace
	window.SVGPathLoader = SVGPathLoader;
})(window);
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {
	if (sessionStorage.preloaded != "true") {
		var elem = document.createElement('header');
		elem.innerHTML = `<h1 class="ip-logo"> </h1>
    <div class="ip-loader">
      <svg class="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
        <path class="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
        <path id="animation" class="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
      </svg>
    </div>`;
		document.body.appendChild(elem)
		var support = {
				animations: Modernizr.cssanimations
			},
			header = elem,
			animation = new SVGPathLoader(document.getElementById('animation')),
			animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			},
			interval = null,
			animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

		function init() {
			var onEndInitialAnimation = function() {
				if (support.animations) {
					this.removeEventListener(animEndEventName, onEndInitialAnimation);
				}
				startLoading();
			};
			// disable scrolling
			window.addEventListener('scroll', noscroll);
			// initial animation
			classie.add(header, 'loading');
			if (support.animations) {
				header.addEventListener(animEndEventName, onEndInitialAnimation);
			} else {
				onEndInitialAnimation();
			}
		}

		function finishLoad() {
			classie.remove(header, 'loading');
			classie.add(header, 'loaded');
			clearInterval(interval);
			var onEndHeaderAnimation = function(ev) {
				if (support.animations) { //if (ev.target !== header) return;
					this.removeEventListener(animEndEventName, onEndHeaderAnimation);
				}
				header.style.top = "-100vh";
				window.removeEventListener('scroll', noscroll);
			};
			if (support.animations) {
				header.addEventListener(animEndEventName, onEndHeaderAnimation);
			} else {
				onEndHeaderAnimation();
			}
		}

		function startLoading() {
			// simulate loading something..
			var simulationFn = function(instance) {
				var progress = 0;
				interval = setInterval(function() {
					progress = Math.min(progress + Math.random() * 0.1, 1);
					instance.setProgress(progress);
					if (progress === 1) finishLoad()
				}, 80);
			};
			animation.setProgressFn(simulationFn);
		}

		function noscroll() {
			window.scrollTo(0, 0);
		}
		init();
		sessionStorage.preloaded = "true";
	}
})();
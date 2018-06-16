/**
 * cbpBGSlideshow.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function() {
	/* https://stackoverflow.com/a/6274381 */
	var $slideshow = $('#cbp-bislideshow'),
		$items = $slideshow.children('li'),
		itemsCount = $items.length,
		$controls = $('#cbp-bicontrols'),
		navigation = {
			$navPrev: $controls.find('span.cbp-biprev'),
			$navNext: $controls.find('span.cbp-binext'),
			$navPlayPause: $controls.find('span.cbp-bipause')
		},
		// current item´s index
		current = Math.floor(Math.random() * itemsCount),
		// timeout
		slideshowtime,
		// true if the slideshow is active
		isSlideshowActive = true,
		interval = 8000;
	for (var itemsRandomOrder = [], i = 0; i < itemsCount; ++i) itemsRandomOrder[i] = i;
	var j, x, i;
	for (i = itemsRandomOrder.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = itemsRandomOrder[i];
		itemsRandomOrder[i] = itemsRandomOrder[j];
		itemsRandomOrder[j] = x;
	}

	function init(config) {
		// preload the images
		$slideshow.imagesLoaded(function() {
			if (Modernizr.backgroundsize) {
				$items.each(function() {
					var $item = $(this);
					$item.css('background-image', 'url(' + $item.find('img').attr('src') + ')');
				});
			} else {
				$slideshow.find('img').show();
				// for older browsers add fallback here (image size and centering)
			}
			// show first item
			$items.eq(itemsRandomOrder[current]).css('opacity', 1);
			// initialize/bind the events
			initEvents();
			// start the slideshow
			startSlideshow();
		});
	}

	function initEvents() {
		navigation.$navPlayPause.on('click', function() {
			var $control = $(this);
			if ($control.hasClass('cbp-biplay')) {
				$control.removeClass('cbp-biplay').addClass('cbp-bipause');
				startSlideshow();
			} else {
				$control.removeClass('cbp-bipause').addClass('cbp-biplay');
				stopSlideshow();
			}
		});
		navigation.$navPrev.on('click', function() {
			navigate(-1);
			if (isSlideshowActive) {
				startSlideshow();
			}
		});
		navigation.$navNext.on('click', function() {
			navigate(1);
			if (isSlideshowActive) {
				startSlideshow();
			}
		});
	}

	function navigate(direction) {
		// current item
		var $oldItem = $items.eq(itemsRandomOrder[current]);
		if (direction === 1) {
			current = current < itemsCount - 1 ? ++current : 0;
		} else if (direction === -1) {
			current = current > 0 ? --current : itemsCount - 1;
		}
		// new item
		var $newItem = $items.eq(itemsRandomOrder[current]);
		// show / hide items
		$oldItem.css('opacity', 0);
		$newItem.css('opacity', 1);
	}

	function startSlideshow() {
		isSlideshowActive = true;
		clearTimeout(slideshowtime);
		slideshowtime = setTimeout(function() {
			navigate(1);
			startSlideshow();
		}, interval);
	}

	function stopSlideshow() {
		isSlideshowActive = false;
		clearTimeout(slideshowtime);
	}
	init();
	
	$('a').click(function(e) {
		if (e.currentTarget.href.startsWith("//")) {
			window.parent.location=e.currentTarget.href;
		}
	});
})();
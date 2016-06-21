/* globals imagesLoaded, console */
(function( root, $, undefined ) {
	"use strict";

	// fade in images
	$(function () {
		// disable fade in for small viewports so progressive gifs can display their initial frame immediately
		var fadeFromWidth = 640;
		var width = $(window).width();
		var timeout = 3000; // show images after timeout, even if not loaded

		if (width >= fadeFromWidth) {
			$("img").css("visibility", "hidden");
			$("img").each(function () {
				var $image = $(this);
				var myLoaded = $.Deferred();
				// fade in image
				myLoaded.then(function() {
					$image.css("visibility", "visible").fadeOut(0).fadeIn(300);
				});
				imagesLoaded($(this), myLoaded.resolve); // resolve after images are loaded
				setTimeout(myLoaded.resolve, timeout); // resolve after timeout
			});
		} else {
			$("img").css("visibility", "visible");
		}
	});

	// fix 'Arbeiten' menu highlight in single works and category archives
	$(function () {
		$('body.category, body.single-arbeiten').find('#menu-item-534').addClass('current-menu-item');
	});

} ( this, jQuery ));

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
				var loader = imagesLoaded($(this), function (iL) {
					// console.log(iL.images[0]);
					$(iL.images[0].img).css("visibility", "visible").fadeOut(0).fadeIn(300);
				});
				setTimeout(function() {
					loader.complete();
				}, timeout);

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

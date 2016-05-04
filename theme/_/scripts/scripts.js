/* globals imagesLoaded */
(function( root, $, undefined ) {
	"use strict";

	// fade in images
	$(function () {
		$("img").css("visibility", "hidden");
		$("img").each(function () {
			imagesLoaded($(this), function (iL) {
				// console.log(iL.images[0]);
				$(iL.images[0].img).css("visibility", "visible").fadeOut(0).fadeIn(300);
			});
		});

	});

	// fix 'Arbeiten' menu highlight in single works and category archives
	$(function () {
		$('body.category, body.single-arbeiten').find('#menu-item-534').addClass('current-menu-item');
	});

} ( this, jQuery ));

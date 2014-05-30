/*
 * @author Rukmal Weerawarana
 *
 * Script containing all global JS elements, including all global
 * jQuery functions.
 */

'use strict';

$(document).ready(function () {

	// Menu selection animations
	$('.navoption').mouseleave(function () {
		$(this).animate({'background-color': 'rgb(0,0,0)'}, 100);
	});

    $('.navoption').mouseenter(function () {
        $(this).animate({'background-color': 'rgb(0, 0, 0)' }, 100);
    });
});
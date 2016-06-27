$( document ).ready(function() {
	console.log('ready');

	var $grid = $('#page').isotope({
		itemSelector: '.grid__item',
		percentPosition: true,

		// layout mode options
		masonry: {
			columnWidth: '.grid__sizer'
		}
	});

});

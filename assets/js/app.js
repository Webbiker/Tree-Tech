$( document ).ready(function() {
	// console.log('ready 3!');

	var $grid = $('#page').isotope({
		itemSelector: '.grid__item',
		percentPosition: true,

		// layout mode options
		masonry: {
			columnWidth: '.grid__sizer'
		}
	});


	$.fn.visible = function(partial) {
	    
	  var $t            = $(this),
	      $w            = $(window),
	      viewTop       = $w.scrollTop(),
	      viewBottom    = viewTop + $w.height(),
	      _top          = $t.offset().top,
	      _bottom       = _top + $t.height(),
	      compareTop    = partial === true ? _bottom : _top,
	      compareBottom = partial === true ? _top : _bottom;

	return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};

	var win = $(window);
	var allMods = $(".grid__gallery");

	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("grid--visible"); 
		} 
	});


	$(win).scroll(function(event) {
	  
		$(allMods).each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("grid--comein"); 
			} 
		});
	  
	});
});
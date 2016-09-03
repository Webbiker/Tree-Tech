$( document ).ready(function() {

	// masonry layout to all grid items
	var $grid = $('#page').isotope({
		itemSelector: '.grid__item',
		percentPosition: true,
		initLayout: false,

		// layout mode options
		masonry: {
			columnWidth: '.grid__sizer'
		}
	});

	//
	$grid.on( 'arrangeComplete', onArrange);
	$grid.isotope();

	// check if an element is in the viewport or not
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

	// put the visible class to every object that already is in the viewport
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("grid--visible"); 
		} 
	});


	// put the comein class to every object that comes into the viewport
	$(win).scroll(function(event) {

		$(allMods).each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("grid--comein"); 
			} 
		});
	  
	});

	// but spans around the first letter of the first paragraph in the about section
	var x = $(".grid__about p:eq(0)").text();
	var text = '<span class="fchar"><span class="fchar__bleft"></span>'+x.charAt(0)+'<span class="fchar__bright"></span></span>';
	$(".grid__about p:eq(0)").html(text + x.slice(1,x.length));

	//scroll back to the top on click
	$(document).on("click",  "#backtotop", function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
  	});

});

$( window ).resize(onArrange);

var onArrange = function() {
	$('.grid__item').each(function(){
		var cHeight = $(this).height();
		$(this).find('.gallery').css('height', cHeight+'px');
	});
}

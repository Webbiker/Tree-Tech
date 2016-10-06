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

	//show modal
	$(document).on('click', '[data-modal]', function(){
		var modal = $(this).data('modal');
		var activeModal = $('.modal--active').length;
		var activeModalId = $('.modal--active').prop('id');


		if (modal == 'contact' && activeModal == 1 ){
			hideModal('#'+activeModalId);
			setTimeout(
				function(){ 
					showModal(modal);
				 }, 100);
		} else {
			showModal(modal);

		}
	})

	//close the modal
	$(document).on('click', '.modal__close', function(){
		hideModal(this);
	});

});

$( window ).resize(onArrange);


var showModal = function(elem){
	$('#'+elem)
		.addClass('modal--active animated fadeIn')
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this)
				.find('.modal__container')
				.addClass('modal__container--active animated fadeInDown')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this)
						.removeClass('animated fadeInDown')
						.closest('.modal')
						.removeClass('animated fadeIn');
				});
		});
	
}

var hideModal = function(elem){
	$(elem)
		.closest('.modal')
		.addClass('animated fadeOut')
		.find('.modal__container')
		.addClass('animated fadeOutUp')
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this)
				.removeClass('animated fadeOutUp modal__container--active')
				.closest('.modal')
				.removeClass('animated fadeOut modal--active');

		});
	
}

var onArrange = function() {
	$('.grid__item').each(function(){
		var cHeight = $(this).height();
		$(this).find('.gallery').css('height', cHeight+'px');
	});
}

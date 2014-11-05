/*
	Autoactive Navigation Menu
*/
$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
});

$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 650);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#navbarCollapse').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet = 100;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#navbarCollapse');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

/*  ------------- animation ------------------------*/


jQuery(document).ready(function() {
    jQuery('.Col1').addClass("hidden-scroll").viewportChecker({
        classToAdd: 'visible-scroll animated fadeInLeft',
        offset: 200
       });
});
jQuery(document).ready(function() {
    jQuery('.Col2').addClass("hidden-scroll").viewportChecker({
        classToAdd: 'visible-scroll animated fadeInRight',
        offset: 200
       });
});


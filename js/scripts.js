// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// On Scroll Effectts 
$(function($) {
    $(window).scroll(function() {
        var navigation = $("body.front nav.navbar");
        var eventDynamicInfo = $("body.front  #eco-header-info");
        
		if ($(this).scrollTop() >= 180) {navigation.addClass('navbar-light bg-light');}
		else navigation.removeClass('navbar-light bg-light');
        
		if ($(this).scrollTop() >= 180) {eventDynamicInfo.addClass('on-scroll');} 
		else eventDynamicInfo.removeClass('on-scroll');
    });

});
 
 
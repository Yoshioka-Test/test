// JavaScript Document

$(function(){
	$(window).scroll(function (){
		$('.main_fadein').each(function(){
			var elemPos = $(this).offset().top-5;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}
		});
	});
});

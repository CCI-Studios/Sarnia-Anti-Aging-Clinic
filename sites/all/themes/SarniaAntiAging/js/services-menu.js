(function($){

	$(function()
	{	

		$('#services-menu-item').click(function(event)
		{	

			event.preventDefault();
			console.log('clicked');
			$('#block-menu-menu-footer-menu').addClass('open');
			$('.menu-back-main').remove();
			$('#block-menu-menu-footer-menu ul.menu').prepend('<li class=\"menu-back-main\"><a href=\"#\" >< Back</a></li>');
			$('#top-menu').addClass('hide');
			var m = $('#block-block-10 #block-menu-menu-footer-menu.open').height();
			$('#top-menu').animate({height:m},100);

		});


		$('#block-menu-menu-footer-menu .content ul.menu > li.expanded > a').click(function(event)
		{	
			event.preventDefault();
			console.log('clicked');
			$('.menu-back-main').remove();
			$(this).parent().find(' > ul.menu').prepend('<li class=\"menu-back\"><a href=\"#\" >< Back</a></li>');
			$(this).parent().find(' > ul.menu').addClass('open');
			var m = $(this).parent().find(' > ul.menu').height();
			$('#block-block-10 #block-menu-menu-footer-menu.open').animate({height:m},500);
			$('#top-menu').animate({height:m},500);
		});



		$(document).on('click','.menu-back',function(event)
		{	
			event.preventDefault();
			console.log('clicked');
			$(this).parent().removeClass('open');
			$(this).remove();

			var m = $(document).find('ul.menu.open').height();
			$('#block-block-10 #block-menu-menu-footer-menu.open').height(m);
			$('#top-menu').height(m);

			if($('.menu-back').length==0)
			{
				$('#block-menu-menu-footer-menu ul.menu').prepend('<li class=\"menu-back-main\"><a href=\"#\" >< Back</a></li>');
				var m = $(document).find('#block-block-10 ul.menu').height();
				$('#block-block-10 #block-menu-menu-footer-menu.open').height(m);
				console.log(m);
				$('#top-menu').height(m);
				
			}
		});

		$(document).on('click','.menu-back-main',function(event)
		{
			$('#block-menu-menu-footer-menu').removeClass('open');
				$('#top-menu').removeClass('hide');
				$('#top-menu').animate({height:267},500);

				 

			
		});


				$(window).on('resize', function(){
				    
				      if($(window).width() >1030)
						{
							$('#top-menu').css('height','');
							$('#top-menu').css('height',null);
						}
				});

	
	});
	
}(jQuery));


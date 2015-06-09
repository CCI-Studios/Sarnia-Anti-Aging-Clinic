(function($){

	$(function()
	{	

		$('.sidebar li.expanded > a').click(function(event){

			event.preventDefault();

			if($(window).width() < 840)
			{
				$(this).parent().find(' > ul.menu').slideToggle('slow');	
			}
			else
			{
				var href = $(this).attr('href');
				window.location.href=href + '#content';
				console.log(href);
			}

		});


		$('.view-services .views-row a').click(function(event){

			event.preventDefault();
			var href = $(this).attr('href');
			console.log(href);
			window.location.href=href + '#content';

		});
	

		$('#service-region .views-row ').hover(function ()
		{	

			if($(window).width() > 767)
			{
				text1 = $(this).text();
				$(this).find('a').text('Learn more');
			}
		},
		function ()
		{	
			if($(window).width() > 767)
			{
				$(this).find('a').text(text1);
			}
		}	
);
	
	});
	
}(jQuery));


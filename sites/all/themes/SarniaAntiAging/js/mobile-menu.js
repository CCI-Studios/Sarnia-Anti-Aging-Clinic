(function($){

	$(function()
	{
		$('#block-block-9').click(function()
			{	
				$('#block-block-10').toggleClass('border-menu');
				$('#top-menu').slideToggle('slow');

				if($('#block-menu-menu-footer-menu.open').length!=0)
				{
					$('#block-menu-menu-footer-menu.open').slideToggle('slow');

				}
			});
		
		
	});

	

}(jQuery));
(function($) 
	{

		$(function(){

			$("#block-webform-client-block-20 #edit-submitted-service-of-interest option:first").attr('disabled','selected');
			$("#block-webform-client-block-20 #edit-submitted-service-of-interest").selectbox({
			onOpen: function (inst) {
				$('#block-webform-client-block-20 .webform-component--service-of-interest .sbToggle').addClass('changeback');
			},
			onClose: function (inst) {
				$('#block-webform-client-block-20 .webform-component--service-of-interest .sbToggle').removeClass('changeback');
			},
	
	
			effect: "slide"

		});

			$("#edit-submitted-preferred-time").selectbox({
			onOpen: function (inst) {
				$('.webform-component--preferred-time .sbToggle').addClass('changeback');
			},
			onClose: function (inst) {
				$('.webform-component--preferred-time .sbToggle').removeClass('changeback');
			},
	
	
			effect: "slide"

		});

		if (document.location.href.indexOf('submitted') > -1  )
		{
			$('#block-block-8,#block-block-11').fadeIn();
			$('#block-block-8,#block-block-11').addClass('overlay');	
		}

		$(document).mouseup(function (e)
		{	
			var container =$('#block-block-8,#block-block-11');
			if (!container.is(e.target)
				        && container.has(e.target).length === 0) 
				    {
				        container.fadeOut();
				    }
		});

		$("#block-webform-client-block-20 .form-submit").click(validation_contact);
		$(".webform-client-form-59 .form-submit").click(validation_request);

		function validation_contact()
		{
			var email = $("#block-webform-client-block-20 .webform-component--email input").val();
			var selectval= $("#block-webform-client-block-20 #edit-submitted-service-of-interest").val();
	  
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var valid = emailReg.test(email);
			var field = $("#block-webform-client-block-20 .webform-component-textfield input").val();
			
		if (field=='' || selectval=='none') 
		{	
			 event.preventDefault();
			 $('#block-webform-client-block-20 .webform-component-textfield input').each(function() {
		    if ( this.value === '' ) {
		        this.focus();
		       
		 	   }

		     var div="<div id=\"error\"><p>Please fill all required fields</p></div>"
				 $('#error').remove();
				 $("#block-webform-client-block-20").append(div);
				 return false;
			});
		}

		else if(!valid)
		 {	
		 	 $('.webform-component--email input').focus();
		 	 var div="<div id=\"error\"><p>Please fill email field correctly</p></div>"
			 $('#error').remove();
			 $('#block-webform-client-block-20').append(div);
			 return false;
		 }
		
			 console.log('true');
			return true;
		}

		function validation_request()
		{
			var email = $(".webform-client-form-59 .webform-component--email input").val();
			var selectval1= $(".webform-client-form-59 #edit-submitted-preferred-time").val();
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var valid = emailReg.test(email);
			var field = $(".webform-client-form-59 .webform-component-textfield input").val();
			
		if (field=='' || selectval1==null) 
		{	
			 event.preventDefault();
			 $('.webform-client-form-59 .webform-component-textfield input').each(function() {
		    if ( this.value === '' ) {
		        this.focus();
		       
		 	   }

		     var div="<div id=\"error\"><p>Please fill all required fields</p></div>"
				 $('#error').remove();
				 $(".webform-client-form-59").append(div);
				 return false;
			});
		}

		else if(!valid)
		 {	
		 	 $('.webform-client-form-59 .webform-component--email input').focus();
		 	 var div="<div id=\"error\"><p>Please fill email field correctly</p></div>"
			 $('#error').remove();
			 $('.webform-client-form-59').append(div);
			 return false;
		 }
		
			 console.log('true');
			return true;
		}

	});

		
}(jQuery));
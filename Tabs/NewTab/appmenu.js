let listVisible = 0;
			$(document).on('click', function(event) {
			  if (!$(event.target).closest('#googleAppList').length) {
				  if (!$(event.target).closest('#googleApps').length) {
				  	$("#googleAppList").fadeOut(50);
					$("#googleApps").css("background-color","");
					listVisible = 0;
				 }
			  }
			});
			$(document).ready(function () {
				$("#googleAppList").hide(0);
				$("#googleAppList").css('opacity', 1);
				$("#googleApps").click(function () {
					$("#googleAppList").fadeToggle(50);
					listVisible = listVisible === 0 ? 1 : 0;
					if (listVisible == 1) {$("#googleApps").css('background-color', 'rgba(255,255,255,0.2)');} else {$("#googleApps").css("background-color","");}
				});
			});
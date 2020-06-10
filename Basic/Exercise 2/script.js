$(document).ready(function() {
	$(".asset").on("click", function() {
		if ($(this).hasClass("santa")){
			$(this).css("visibility" , "hidden")
		}
	})
})
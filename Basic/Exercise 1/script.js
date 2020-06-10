$(document).ready(function() {
	$(".asset").on("click", function() {
		$(".asset").children("p").hide()
		$(this).children("p").toggle()
	})
})
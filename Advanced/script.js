$(".row_down .cardPlace").each(function() {
	$(this).children("img").attr("src", cards[Math.floor(Math.random() * cards.length)].img)
})
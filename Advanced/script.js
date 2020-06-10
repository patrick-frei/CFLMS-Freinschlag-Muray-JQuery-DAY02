let playedCards = []
let cardSuggests = []
let j = 0

$(".row_down .cardPlace").each(function(i) {
	do
		j = Math.floor(Math.random() * cards.length)
	while (playedCards.includes(j) && cardSuggests.includes(j))
	cardSuggests.push(j)
	$(this).children("img").attr({
		"id": cards[j].id,
		"src": cards[j].img
	})
})
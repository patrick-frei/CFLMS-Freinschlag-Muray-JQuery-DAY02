$(document).ready(function() {
	let playedCards = [];
	function getRdmCards() {
		let cardSuggests = [];
		$(".drag-area img").remove();
		$(".drag-area").each(function(i) {
			console.log(i);
			console.log(cards.length);
			if (i < cards.length) {
				do {
					index = Math.floor(Math.random() * cards.length);
					id = cards[index].id;
					src = cards[index].img
				} while (playedCards.includes(id) || cardSuggests.includes(id));
				cardSuggests.push(id);
				$(this).append("<img>");
				$(this).children("img").attr({
					id: id,
					class: "draggable",
					src: src
				});
				$(this).children("img").addClass("draggable");
			}
		});
		console.table(cardSuggests)
		$(".draggable").draggable({
			containment: "window",
			revert: "invalid"
		})
	}
	$("button").on("click", getRdmCards);
	$(".drop-area").droppable({
		accept: function(drag) {
			if (parseInt(drag.attr("id")) == parseInt($(this).children("img").last().attr("id")) + 1 || $(this).children("img").length == 0) {
				return true;
			}
		},
		drop: function(event, ui) {
			$(this).append("<img>");
			$(this).children("img").last().attr({
				src: $(ui.draggable).attr("src"),
				id: $(ui.draggable).attr("id")
			});
			$(this).children("img").last().css({
				position: "absolute",
				top: `${($(this).children("img").length - 1)}vh`
			});
			playedCards.push(parseInt($(ui.draggable).attr("id")));
			cards.splice(cards.findIndex(card => card.id == parseInt($(ui.draggable).attr("id"))), 1);
        	$(ui.draggable).remove();
        	console.log(cards.length);
        	console.log(playedCards.length);
      	}
	})
});
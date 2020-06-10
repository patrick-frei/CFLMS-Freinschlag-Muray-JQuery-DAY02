let cards = [{
	"name": "2C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/6/69/2C.svg"
},{
	"name": "3C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/7/70/3C.svg"
},{
	"name": "4C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/2/25/4C.svg"
},{
	"name": "5C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/6/6d/5C.svg"
},{
	"name": "6C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/6/62/6C.svg"
},{
	"name": "7C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/6/68/7C.svg"
},{
	"name": "8C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/9/94/8C.svg"
},{
	"name": "9C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/6/63/9C.svg"
},{
	"name": "10C",
	"img": "https://upload.wikimedia.org/wikipedia/commons/c/c7/10C.svg"
},{
	"name": "JC",
	"img": "https://upload.wikimedia.org/wikipedia/commons/1/11/JC.svg"
},{
	"name": "QC",
	"img": "https://upload.wikimedia.org/wikipedia/commons/9/9e/QC.svg"
},{
	"name": "KC",
	"img": "https://upload.wikimedia.org/wikipedia/commons/e/e1/KC.svg"
},{
	"name": "AC",
	"img": "https://upload.wikimedia.org/wikipedia/commons/e/eb/AC.svg"
}]

function getCardImg(name) {
	for (i = 0; i < cards.length; i++) {
		if (cards[i].name == name) {
			return cards[i].img
		}
	}
}
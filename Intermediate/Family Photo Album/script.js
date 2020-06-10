var simpson = JSON.parse(simpsons)
//console.log(simpson)

$(document).ready(function(){

	// Creates and adds container for all characters
	var bigbox = $("<div></div>").addClass("bigbox")
	$("body").prepend(bigbox)
	$("body").prepend("<p>Double click on the small boxes to remove a family member</p>")
	$("body").prepend("<p>Single click on the small boxes to show the family member's hobbies</p>")
	$("body").prepend("<h3>Welcome to the Simpsons</h3>")

	for (i = 0; i < simpson.length; i++){

		// Creates and adds container for each character
		smallbox = $("<div></div>").addClass("smallbox")
		bigbox.append(smallbox)

		// Creates items in each character container
		var name = $("<h1>" + simpson[i].name + "</h1>")
		var imgsrc = $("<img>")
		var relation = $("<p> The relation to the main character is: </p>")
		var colorspan = $("<span>" + simpson[i].relation + "</span>")

		// Adds items in each container
		relation.append(colorspan)
		smallbox.append(name).append(imgsrc).append(relation)
		imgsrc.attr("src", simpson[i].imgsrc)

		// Check for the relation and change span color
		var rel = simpson[i].relation

		if (rel == "Parent"){
			colorspan.css("color", "blue")
		} else if (rel == "Sibling"){
			colorspan.css("color", "green")
		} else if (rel == "Other"){
			colorspan.css("color", "purple")
		} else {
			colorspan.css("color", "red")
		}
	}

	$(".smallbox").on("dblclick", function() {
		$(this).hide()
	})

	$(".smallbox").on("click", function() {
		let element = this
		$(simpson).each(function(i) {
			if (simpson[i].name == $(element).children("h1").html()) {
				console.log($(element))
				if ($(element).children("img").length) {
					$(element).children("img").replaceWith(`<div><p>Hobbies:</p><ul><li>${simpson[i].hobbies.join("</li><li>")}</li></ul></div>`)
					$("ul").css("text-align", "left")
				} else {
					$(element).children("div").replaceWith(`<img src="${simpson[i].imgsrc}" style="height: 25vw;">`)
				}
			}
		})
	})

	// Change styles of containers
	$("body").css({"text-align": "center", "font-family": "'comic sans ms', sans-serif"})
	$(".bigbox").css({"display":"flex", "flex-wrap": "wrap", "justify-content": "space-around", "width" : "100%", "background-color": "grey"})
	$(".smallbox").css({"width": "30%", "cursor": "pointer", "background-color":"lightgrey", "display":"flex", "justify-content":"center", "flex-direction":"column", "align-items":"center", "margin":"2% 0", "border-radius": "4vw", "box-shadow":"0.3vw 0.3vw 0.3vw 0.3vw"})
	$("img").css("height", "25vw")
	$("p").css({"font-size": "2.2vw", "padding" : "3%"})

	});
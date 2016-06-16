var r = 0;
var g = 0;
var b = 0;

var color = $("#box").css('backgroundColor')

$("h1").click(function (){
	$("#box").css('background-color', 'rgb(0,0,0)');
	r = 0;
	g = 0;
	b = 0;
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b));
});

$("h6").click(function() {
	$("h6").html("Generate a random color by clicking on the colored wheel. You could change the shade (press the right arrow button) or the tint (press the left arrow button). You could also manipulate the redness, greeness, and blueness by clicking on either the right side of the respective box to add more of that color, or the left side to decrease the amount of that color. If you'd like to start from black again, click on the Random Color Generator title.");
});

$("#red").click(function (event){
	if(event.offsetX < $(this).width()*0.5){
		r = r - 20;
	} else {
		r = r + 20;
	}
	if(r < 0){
		r = 0;
	}
	if(r > 255){
		r = 255;
	}
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
});

$("#green").click(function (event){
	if(event.offsetX < $(this).width()*0.5){
		g = g - 20;
	} else {
		g = g + 20;
	}
	if(g < 0){
		g = 0;
	}
	if(g > 255){
		g = 255;
	}
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
});

$("#blue").click(function (event){
	if(event.offsetX < $(this).width()*0.5){
		b = b - 20;
	} else {
		b = b + 20;
	}
	if(b < 0){
		b = 0;
	}
	if(b > 255){
		b = 255;
	}
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
});

function randomColor(){
	r = Math.floor((Math.random() * 255) + 1);
	g = Math.floor((Math.random() * 255) + 1);
	b = Math.floor((Math.random() * 255) + 1);
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
}

function rgbToHex(r,g,b) {
	return '#'+toHex(r)+toHex(g)+toHex(b)
}

function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

$("#lighter").click(function(){
	var rIncrement = Math.round((255 - r)*0.1);
	var gIncrement = Math.round((255 - g)*0.1);
	var bIncrement = Math.round((255 - b)*0.1);
	r += rIncrement;
	g += gIncrement;
	b += bIncrement
	if(r > 255){
		r = 255;
	}
	if(g > 255){
		g = 255;
	}
	if(b > 255){
		b = 255;
	}
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
});

$("#darker").click(function(){
	var rDecrement = Math.round(r*0.1);
	var gDecrement = Math.round(g*0.1);
	var bDecrement = Math.round(b*0.1);
	r -= rDecrement;
	g -= gDecrement;
	b -= bDecrement;
	if(r < 0){
		r = 0;
	}
	if(g < 0){
		g = 0;
	}
	if(b < 0){
		b = 0;
	}
	$("#box").css('background-color', 'rgb('+r+','+g+','+b+')');
	color = 'rgb('+r+','+g+','+b+')';
	$("#colorid").html(color);
	$("#colorhex").html(rgbToHex(r,g,b))
});
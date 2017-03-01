(function(){

	var leftBtn = document.getElementById("left"),
		rightBtn = document.getElementById("right"),
		con = document.getElementById("con"),
		degree = 0;

	leftBtn.onclick = function(){
		degree-=60;
		con.style.transform = "rotateY(" + degree + "deg)";
	};

	rightBtn.onclick = function(){
		degree+=60;
		con.style.transform = "rotateY(" + degree + "deg)";
	};

})();
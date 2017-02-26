(function(){
	alert("load js");
	var showArea = document.getElementById("area"),
		iMenu = document.getElementById("imenu"),
		areaX = showArea.offsetLeft,
		areaY = showArea.offsetTop;

	alert(showArea);
	alert(iMenu);
	alert(showArea.oncontextmenu);

	showArea.oncontextmenu = function(e) {
		alert("right button click");
		e.preventDefault();
		var	realX = e.clientX - areaX,
			realY = e.clientY - areaY;

		setPos(showArea, iMenu, realX, realY);
	}

	iMenu.onmousedown = function(event){
		var e = event || window.event;
		if(e.button == "2") {
			//阻止事件冒泡
			window.event? window.event.cancelBubble = true : e.stopPropagation();
		} else {
			// console.log(e.target);
			alert(e.target.innerHTML);
			iMenu.style.visibility = "hidden";
		}
	}

	function setPos (eOut, eIn, x, y) {
		var iInWidth = eIn.offsetWidth,
			iInHeight = eIn.offsetHeight,
			iOutWidth = Math.min(eOut.offsetWidth, document.body.clientWidth),		//取当前视口宽度（高度）和容器宽度（高度）的最小值
			iOutHeight = Math.min(eOut.offsetHeight, document.body.clientHeight),
			restWidth = iOutWidth - x,
			restHeight = iOutHeight - y,
			iPosX = x,
			iPosY = y;

		if(restWidth < iInWidth) {
			iPosX -= iInWidth;
		}

		if(restHeight < iInHeight) {
			iPosY -= iInHeight;
		}

		eIn.style.top = iPosY + 'px';
		eIn.style.left = iPosX + 'px';
		eIn.style.visibility = "visible";
	}
})();
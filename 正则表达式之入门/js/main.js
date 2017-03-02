(function(){

	var telNum = document.getElementsByName("tel-number")[0],
		telBtn = document.getElementsByName("tel-test")[0],
		telStr = document.getElementById("tel-result"),
		wordStr = document.getElementsByName("word-string")[0],
		wordBtn = document.getElementsByName("word-test")[0],
		wordRes = document.getElementById("word-result"),
		regTel = /^1[3458][0-9]\d{8}$/,
		regWord = /\b([A-Za-z]+)\s+\1\b/;

	telBtn.onclick = function(){
		if(regTel.test(telNum.value)) {
			telStr.innerHTML = "测试数据："+telNum.value+"，"+"测试结果："+"TRUE";
			telStr.style.color = "green";
		} else {
			telStr.innerHTML = "测试数据："+telNum.value+"，"+"测试结果："+"FALSE";
			telStr.style.color = "red";
		}
		telNum.value = "";
	};

	wordBtn.onclick = function(){
		if(regWord.test(wordStr.value)) {
			wordRes.innerHTML = "测试字符串："+wordStr.value+"，"+"测试结果："+"TRUE";
			wordRes.style.color = "green";
		} else {
			wordRes.innerHTML = "测试字符串："+wordStr.value+"，"+"测试结果："+"FALSE";
			wordRes.style.color = "red";
		}
		wordStr.value = "";
	};

})();
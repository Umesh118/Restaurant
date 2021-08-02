$(function(){
	$("#navbartoggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth< 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function (global){
	var dc = {};
	var homeHtml = "snippets/snippets-home.html";

	// convinv=ce function for inserting innerHTML for 'select'
	var insertHtml = function(selector, html){
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function(selector){
		var html = "<div class='text-center'>";
		// html += "img"
		insertHtml(selector,html);
	};

	document.addEventListener("DOMContenLoaded",function(event){
		// on first load, show home view
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function(resposeText){
				document.querySelector("#main-content").innerHTML = resposeText;
			},
			false);

	});

	global.$dc = dc;
})(window);
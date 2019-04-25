/* https://stackoverflow.com/a/22268622 */
var scrollLoader = function(bottomCallback) {
	var listenEvent = function() {
		var lastDiv = document.querySelector(".main");
		var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
		var pageOffset = window.pageYOffset + window.innerHeight;
		if (pageOffset > lastDivOffset - 20) {
			document.removeEventListener("scroll", listenEvent)
			console.log("Fetching more data...")
			if (bottomCallback()) {
				document.addEventListener("scroll", listenEvent)
			}
		}
	}
	document.addEventListener("scroll", listenEvent)
};
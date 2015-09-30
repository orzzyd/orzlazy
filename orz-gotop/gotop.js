(function () {
	var $btnGotop = $(".btn-gotop");
	$btnGotop.hide();
	$(document).scroll(function (event) {
		/* Act on the event */
		if ($(document).scrollTop() > 200) {
			$btnGotop.fadeIn();
		} else {
			$btnGotop.fadeOut();
		};
	});
	$btnGotop.click(function (event) {
		/* Act on the event */
		var $doc = $(document);
		var step = 20;
		var intervalID = setInterval(function () {
			if ($doc.scrollTop() > step) {
				$doc.scrollTop($doc.scrollTop() - step);
			} else {
				$doc.scrollTop(0);
				clearInterval(intervalID);
			}
		}, 1);
	});
})();
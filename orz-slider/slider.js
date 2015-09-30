(function () {
	var imgName = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
	var activeIndex = 0;
	var timer;
	function switchImg() {
		$('.img-active').stop();//stop current animation for quick click
		$('.img-active').attr('src', 'img/' + imgName[activeIndex]).fadeOut(10).fadeIn(1000);
		$('.point').eq(activeIndex).addClass('point-active').parent().siblings().children().removeClass('point-active');
	}
	function resetTimer() {
		clearInterval(timer);
		timer = setInterval(function () {
			activeIndex++;
			activeIndex %= imgName.length;
			switchImg();
		}, 5000);
	}
	resetTimer();
	$('.point').each(function (index, el) {
		$(el).click(function (event) {
			/* Act on the event */
			activeIndex = index;
			switchImg();
			resetTimer();
		});
	});
	$('.left').click(function (event) {
		/* Act on the event */
		activeIndex += imgName.length;
		activeIndex--;
		activeIndex %= imgName.length;
		switchImg();
		resetTimer();
	});
	$('.right').click(function (event) {
		/* Act on the event */
		activeIndex++;
		activeIndex %= imgName.length;
		switchImg();
		resetTimer();
	});
})();
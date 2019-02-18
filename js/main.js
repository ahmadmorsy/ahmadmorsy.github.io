

var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

/*-------------darkmode---------------*/
$(document).ready(function() {
	$("body").addClass(localStorage.getItem("mode"));
	$("#nav-mode").on("click", () => {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			localStorage.setItem("mode", " ");
		} else {
			$("body").addClass("light");
			localStorage.setItem("mode", "light");
		}
	});
});

/*-------------nav menu---------------*/

$(document).ready(function() {
	var last, diff;

	$(".nav-icon").click(function(event) {
		diff = event.timeStamp - last;

		if (diff >= 1200) {
			$(".nav-icon").prop("pointer-events", "normal");
			$(this).toggleClass("change");
			$(".nav-page").toggleClass("is-visible");
			$("html").toggleClass("ovfl-hide");
		} else {
			$(".nav-icon").prop("pointer-events", "none");
		}
		last = event.timeStamp;
	});
});

{
	setTimeout(() => document.body.classList.add("loaded"), 100);
	const navlinks = document.querySelectorAll(".nav-link");
	Array.from(navlinks).forEach(link =>
		link.addEventListener("click", ev => {
			ev.preventDefault();
			console.log(ev.target.href);
			document.body.classList.remove("loaded");
			document.body.classList.add("loading");
      document.body.classList.add(ev.target.href);

			document.body.addEventListener(
				"transitionend",
				() => (window.location = ev.target.href)
			);
		})
	);
}

/*

$("body").click(function () {
    $(".nav-icon").removeClass("change");
		$(".nav-page").removeClass("is-visible");
    $("body").css("overflow","auto");
});


	$('.nav-link').on('click', function () {

    $('.nav-link').removeClass('current');
		$(".nav-page").removeClass("is-visible");
    $(this).addClass('current');
    $(".nav-icon").removeClass('change');
    $("body").css("overflow","hide");


});

/*------shrinking title into nav-bar---------------*/

$(document).ready(function() {
	$(window).scroll(function() {
		var scrollHeight = $(this).scrollTop();
		var windowHeight = $(window).height();
		var totalHeight = $(document).height();

		$(".scrolled").html(scrollHeight);

		$(".header input").attr("value", scrollHeight);

		var input = document.querySelector(".header input");
		if (input.value < totalHeight && input.value > 0) {
			setProgress(input.value);
		}

		function setProgress() {
			var offset =
				circumference - scrollHeight * circumference / (totalHeight - windowHeight);
			circle.style.strokeDashoffset = offset;
		}
		/*----page title fade in nav-bar---/*----scroll progress ring------*/

		$(".header-text").css("opacity", (180 - scrollHeight) / 150);

		if (scrollHeight > 250) {
			$(".page-title").css("opacity", "1");
			$("#back2Top").fadeIn();
			$(".progress-ring").fadeIn();
		} else if (scrollHeight <= 0) {
			$(".page-title").css("opacity", "0");
			$("#back2Top").fadeOut();
			$(".progress-ring").fadeOut();
		}

		if (scrollHeight >= totalHeight - windowHeight) {
			$(".footer-text").fadeIn(1000);
		} else {
			$(".footer-text").fadeOut(1000);
		}

		/*---------scroll effects------------*/

		// 			var dyScroll = 0.1 * scrollHeight;

		// 			if (scrollHeight > 0 && scrollHeight < 250) {
		// 				$(".header-text span:first-child").css(
		// 					"transform",
		// 					"translateY(" + -6 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(2)").css(
		// 					"transform",
		// 					"translateY(" + -10 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(3)").css(
		// 					"transform",
		// 					"translateY(" + -7 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(4)").css(
		// 					"transform",
		// 					"translateY(" + -4 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(5)").css(
		// 					"transform",
		// 					"translateY(" + -6 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(6)").css(
		// 					"transform",
		// 					"translateY(" + -10 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(7)").css(
		// 					"transform",
		// 					"translateY(" + -10 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(8)").css(
		// 					"transform",
		// 					"translateY(" + -7 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(9)").css(
		// 					"transform",
		// 					"translateY(" + -4 * dyScroll + "px)"
		// 				);

		// 				$(".header-text span:nth-child(10)").css(
		// 					"transform",
		// 					"translateY(" + -6 * dyScroll + "px)"
		// 				);
		// 			} else {
		// 				$(".header-text span").css("transform", "translateY(" + 0 + ")");
		// 			}
	});
});

/*------ back to top button function -----------*/

$(document).ready(function() {
	$("#back2Top").click(function(event) {
		event.preventDefault();
		$("html, body").animate(
			{
				scrollTop: 0
			},
			"slow"
		);
	});
	return false;
});

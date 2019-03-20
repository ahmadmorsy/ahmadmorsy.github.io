
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

	setTimeout(() => document.body.classList.add("loaded"), 300);

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

/*------ back to top button function -----------*/
//
// $(document).ready(function() {
// 	$("#back2Top").click(function(event) {
// 		event.preventDefault();
// 		$("html, body").animate(
// 			{
// 				scrollTop: 0
// 			},
// 			"slow"
// 		);
// 	});
// 	return false;
// });

$(document).ready(function() {
  $('.project').on('click', function() {
    var projectTitle = $(this).find('.project-title').text();
    var projectDescription = $(this).find('.project-description').text();
    var projectDetails = $(this).find('.project-details').text();
    var imgMainLg = $(this).find('.img-main-md').attr('src').replace('md' ,'lg').replace('-md','-lg')
  $('.img-main-lg').attr('src',imgMainLg);

//   var imgSec1Lg = $(this).find('.img-sec1-md').attr('src').replace('md' ,'lg').replace('-md','-lg')
//   $('.img-sec1-lg').attr('src',imgSec1Lg);
//
//   var imgSec2Lg = $(this).find('.img-sec2-md').attr('src').replace('md' ,'lg').replace('-md','-lg')
// $('.img-sec2-lg').attr('src',imgSec2Lg);
//
// var imgSec3Lg = $(this).find('.img-sec3-md').attr('src').replace('md' ,'lg').replace('-md','-lg')
// $('.img-sec3-lg').attr('src',imgSec3Lg);

    $(".main, .header").css("display", "none");
    $('#overlay').addClass('is-visible');
    $('body, html').addClass('ovfl-hide');
    $('.pop-up').fadeIn('fast', function() {
    $('.pop-up').addClass('is-visible');

    // var sec1MdSrc = $(this).find('.img-sec1-md').attr('src');
    // var	sec1LgSrc = sec1MdSrc.replace('md' ,'lg').replace('-md','-lg');
    // $('.pop-up').find('.img-sec1-lg').attr('src', sec1LgSrc);
    //
    // var sec2MdSrc = $(this).find('.img-sec2-md').attr('src');
    // var	sec2LgSrc = sec2MdSrc.replace('md' ,'lg').replace('-md','-lg');
    // $('.pop-up').find('.img-sec2-lg').attr('src', sec2LgSrc);
    //
    // var sec3MdSrc = $(this).find('.img-sec3-md').attr('src');
    // var	sec3LgSrc = sec3MdSrc.replace('md' ,'lg').replace('-md','-lg');
    // $('.pop-up').find('.img-sec3-lg').attr('src', sec3LgSrc);

    $('.pop-up').find('.project-title').text(projectTitle);
    $('.pop-up').find('.project-description').text(projectDescription);
    $('.pop-up').find('.project-details').text(projectDetails);

  });

  $('.btn-close,#overlay').on('click', function() {
    $(".main, .header").css("display", "block");
      $('#overlay').removeClass('is-visible');

    $(".pop-up").fadeOut("fast", function() {
      $('.pop-up').removeClass('is-visible');
    });
  });
});
});

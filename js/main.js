
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
    var projectImgMain = $(this).find('.project-img--main').html();
    var projectImgSec1 = $(this).find('.project-img--sec1').html();
    var projectImgSec2 = $(this).find('.project-img--sec2').html();
    var projectImgSec3 = $(this).find('.project-img--sec3').html();
    $('#overlay').addClass('is-visible');

    $(".pop-up").fadeIn("fast", function() {
    $('.pop-up').addClass('is-visible');
    $('.pop-up').find('.project-title').text(projectTitle);
    $('.pop-up').find('.project-description').text(projectDescription);
    $('.pop-up').find('.project-details').text(projectDetails);
    $('.pop-up').find('.project-img--main').html(projectImgMain);
    $('.pop-up').find('.project-img--sec1').html(projectImgSec1);
    $('.pop-up').find('.project-img--sec2').html(projectImgSec2);
    $('.pop-up').find('.project-img--sec2').html(projectImgSec3);
    });
  });

  $('.btn-close,#overlay').on('click', function() {
      $('#overlay').removeClass('is-visible');
    $(".pop-up").fadeOut("fast", function() {
      $('.pop-up').removeClass('is-visible');
    });
  });
});

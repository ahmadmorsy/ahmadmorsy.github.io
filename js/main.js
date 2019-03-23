
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

// $(document).ready(function() {
// 	var last, diff;
//
// 	$(".nav-icon").click(function(event) {
// 		diff = event.timeStamp - last;
//
// 		if (diff >= 1000) {
//       $(".nav-icon").show("slow");
// 			$(".nav-icon").prop("pointer-events", "normal");
// 			$(this).toggleClass("change");
// 			$(".nav-page").toggleClass("is-visible");
// 			$("html").toggleClass("ovfl-hide");
// 		} else {
// 			$(".nav-icon").prop("pointer-events", "none");
//       $(".nav-icon").hide("slow");
//
// 		}
// 		last = event.timeStamp;
// 	});
// });

/*-------------nav menu---------------*/

$(document).ready(function() {
		$(".nav-icon").click(function(event) {
			event.preventDefault();
      if ($(".nav-page").hasClass("is-visible")) {
        $(".nav-page").fadeOut("slow");
$(".nav-page").removeClass("is-visible");
$(".page").fadeIn("slow");

} else {
  $(".page").fadeOut("slow");
  $(".nav-page").fadeIn("slow");
  $(".nav-page").addClass("is-visible");
}
			return false;
		});

	});

  /*------------- page transition ---------------*/


  $(document).ready(function() {
      $("body,.page, header").fadeIn("slow");
      //
      // function fadeInPage() {
      // $(".page").fadeIn("slow", fadeInHeader);
      // }
      // function fadeInHeader() {
      // $("header").fadeIn("slow");
      // }

      $("a").click(function(event){
          event.preventDefault();
          linkLocation = this.href;
          $(".page, header").fadeOut(1000, redirectPage);

      });

      function redirectPage() {
          window.location = linkLocation;
      }
  });
/*------------- page transition ---------------*/

{
  //
	// setTimeout(() => document.body.classList.add("loaded"), 300);

	// const navlinks = document.querySelectorAll(".nav-link");
	// Array.from(navlinks).forEach(link =>
	// 	link.addEventListener("click", ev => {
	// 		ev.preventDefault();
	// 		console.log(ev.target.href);
	// 		document.body.classList.remove("loaded");
	// 		document.body.classList.add("loading");
  //     document.body.classList.add(ev.target.href);
  //
	// 		document.body.addEventListener(
	// 			"transitionend",
	// 			() => (window.location = ev.target.href)
	// 		);
	// 	})
	// );
}

/*------------- click circles ---------------*/
//
// {
//
// window.addEventListener("click", createCircle);
//
//
// function createCircle(event) {
//
//
//     let clickCircle = document.createElement("div");
//       clickCircle.className = "click-circle";
//
//     clickCircle.style.left = (event.pageX - 20) + "px";
//     clickCircle.style.top = (event.pageY - 20) + "px";
//     document.body.appendChild(clickCircle);
//   }
// }

/*------ back to top button function -----------*/

$(document).ready(function() {
		$("#back2Top").click(function(event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	});

/*------ portfolio page -----------*/


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

    $(".main, .header").fadeOut("fast");
    $('#overlay').addClass('is-visible');
    $('body, html').addClass('ovfl-hide');
    $('.pop-up').fadeIn('slow', function() {
    $('.pop-up').addClass('is-visible');
    $('#overlay').animate({ scrollTop: 0 }, "fast");


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

    $(".pop-up").fadeOut("fast", function() {
      $('.pop-up').removeClass('is-visible');
      $('#overlay').removeClass('is-visible');

    });
  });
});
});
//
// $("body").mousemove(function(event) {
//   var headerImg = $(".header-img");
//   var x = headerImg.width() / 2;
//   var y = headerImg.height() / 2;
//   var dx = (event.pageX - x) / 100;
//   var dy = (event.pageY - y) / 100;
//
//   headerImg.css('background-position', dx + 'px ' + dy + 'px');
//
// });

//
// $(document).ready(function(){
//   var mouseX, mouseY;
//   var ww = $( window ).width();
//   var wh = $( window ).height();
//   var traX, traY, angleR;
//   $(document).mousemove(function(e){
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//     traX = ((4 * mouseX) / 1280) + 50;
//     traY = ((4 * mouseY) / 1280) + 50;
//     angleR = mouseX / 3600;
//
//     console.log(traX);
    // $(".letter").css({"animation-duration" : (1 * angleR) + "s"});
    //   $(".letters").css({"animation-duration" : (1 * angleR) + "s"});
    // "left": traX + "%",
    //  "top":  traY + "%"});
//      $(".header").css({
//      "background-position": traX + "%" + " " + traY + "%"});
//   });
// });

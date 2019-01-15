
var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
var area = radius * radius * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

/*-------------darkmode---------------*/

function nightMode() {
	if (localStorage.getItem('stylesheet')) {
		localStorage.clear();
		document.getElementById('dark-css').setAttribute('href', ' ');
	} else {
		localStorage.setItem('stylesheet', 'css/dark.css');
		document.getElementById('dark-css').setAttribute('href', localStorage.getItem('stylesheet'));
	}
}

document.getElementById('nav-mode').addEventListener('click', nightMode);

/*-------------guides---------------*/

$('.outliner').on('click', function () {

    $('div').toggleClass('guides');

});

/*-------------nav menu---------------*/

$(document).ready(function () {

    if ($(".nav-icon").hasClass(" ") || $("#menu").hasClass("show")) {
        $("#menu").removeClass("show");
    }
});

$(".nav-icon").click(function () {
    $(this).toggleClass("change");
    $("#menu").toggleClass("show");
    $("body").css("overflow","hidden");
});

$('body').mouseleave(function () {
    $(".nav-icon").removeClass("change");
    $("#menu").removeClass("show");
    $("body").css("overflow","auto");
});

$("#menu").click(function () {
    $(".nav-icon").removeClass("change");
    $("#menu").removeClass("show");
    $("body").css("overflow","auto");
});

$('#menu li').on('click', 'a', function () {

    $('#menu li').removeClass('current');
    $(this).addClass('current');
    $(".nav-icon").removeClass('change');
    $("#menu").removeClass('show');
    $("body").css("overflow","hide");

});

/*-------------shrinking title into nav-bar---------------*/

$(document).ready(function () {

    $(window).scroll(function () {

      var scrollHeight = $(this).scrollTop();
			var windowHeight = $(window).height();
			var totalHeight = $(document).height();

        $(".scrolled").html(scrollHeight);

			 $(".header input").attr('value', scrollHeight);


const input = document.querySelector('.header input');
 if (input.value < totalHeight && input.value > 0) {
    setProgress(input.value);
  }

function setProgress(percent) {
  var offset = circumference - (scrollHeight * circumference / (totalHeight - windowHeight))  ;
  circle.style.strokeDashoffset = offset;
}

/*-------------page title fade in nav-bar---------------*/
/*-------------scroll progress ring---------------*/


$('.header-text').css("opacity", ((180 - scrollHeight)/150));



        if (scrollHeight > 250) {

            $('.page-title').css('opacity', '1');
            $('#back2Top').fadeIn();
          $('.progress-ring').fadeIn();


        } else {

            $('.page-title').css('opacity', '0');
            $('#back2Top').fadeOut();
          $('.progress-ring').fadeOut();

        }


/*-------------scroll effects---------------*/

var dyScroll = 0.1 * scrollHeight;

  if ((scrollHeight > 0) && (scrollHeight < 250)) {


    $('.header-text span:first-child').css("transform", "translateY(" + -6 * dyScroll + "px)");

    $('.header-text span:nth-child(2)').css("transform", "translateY(" + -10 * dyScroll + "px)");

    $('.header-text span:nth-child(3)').css("transform", "translateY(" + -7 * dyScroll + "px)");

    $('.header-text span:nth-child(4)').css("transform", "translateY(" + -4 * dyScroll + "px)");

    $('.header-text span:nth-child(5)').css("transform", "translateY(" + -6 * dyScroll + "px)");

    $('.header-text span:nth-child(6)').css("transform", "translateY(" + -10 * dyScroll + "px)");

    $('.header-text span:nth-child(7)').css("transform", "translateY(" + -10 * dyScroll + "px)");

    $('.header-text span:nth-child(8)').css("transform", "translateY(" + -7 * dyScroll + "px)");

    $('.header-text span:nth-child(9)').css("transform", "translateY(" + -4 * dyScroll + "px)");

    $('.header-text span:nth-child(10)').css("transform", "translateY(" + -6 * dyScroll + "px)");


} else {

  $('.header-text span').css("transform","translateY("+ 0 + ")" );
}

});
});

/*------------- back to top button function ---------------*/


$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

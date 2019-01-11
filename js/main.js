
var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;



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
 if (input.value < totalHeight && input.value > -1) {
    setProgress(input.value);
  }  

function setProgress(percent) {
  var offset = circumference - (scrollHeight * circumference / (totalHeight - windowHeight))  ;
  circle.style.strokeDashoffset = offset;
}
 
$('.header-text').css("opacity", ((180 - scrollHeight)/150));
		
			
        if (scrollHeight > 250) {


            $('.page-title').css(
                'opacity', '1');
        } else {

            $('.page-title').css('opacity', '0');
        }
    });
	

    });
	
	
	




/*-------------darkmode---------------*/


var mode = $('#nav-mode');

mode.click(function () {

    if (mode.hasClass('switched')) {
        $(this).removeClass('switched');
        $("body").removeClass('dark');
        $("body").addClass('light');
       
        localStorage.removeItem("mode");

    } else {
        $(this).addClass('switched');
        $('body').removeClass('light');
        $('body').addClass('dark');
       
        localStorage.setItem('mode', "dark");


    }
});

/*-------------scroll effects---------------*/


$(window).on("scroll", function () {

    var scrollPercentage = $(window).scrollTop() / ($(".header").offset().top + $(".header").height());

    //convert scrolling percentage to a number

    var dyScroll = 10 * scrollPercentage;

    $('.header-text span:first-child').css("transform", "translateY(" + -6 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(2)').css("transform", "translateY(" + -10 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(3)').css("transform", "translateY(" + -7 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(4)').css("transform", "translateY(" + -4 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(5)').css("transform", "translateY(" + -6 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(6)').css("transform", "translateY(" + -10 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(7)').css("transform", "translateY(" + -10 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(8)').css("transform", "translateY(" + -7 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(9)').css("transform", "translateY(" + -4 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");

    $('.header-text span:nth-child(10)').css("transform", "translateY(" + -6 * dyScroll + "px) scale(" + (20 - dyScroll) /20 + ")");


});

/*------------- nightmode ---------------*/

function nightMode() {
	if (localStorage.getItem('mode')) {
		localStorage.clear();
		document.getElementById('nav-mode').setAttribute('data-theme', '');
	} else {
		localStorage.setItem('mode', 'dark');
		document.getElementById('nav-mode').setAttribute('data-theme', "localStorage.getItem('mode')");
	}
}
document.getElementById('nav-mode').addEventListener('click', nightMode)
$(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;

  //trigger smooth transition from the actual page to the new one
  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not already being animated - trigger animation
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });

  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
  	if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1];

      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
	});

	function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    	loadNewContent(url, bool);
      newLocation = url;
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
	}

	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
  	var newSection = 'cd-'+url.replace('.html', '');
  	var section = $('<div class="cd-main-content '+newSection+'"></div>');

  	section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      $('main').html(section);
      //if browser doesn't support CSS transitions - dont wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);

      if(url!=window.location && bool){
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({path: url},'',url);
      }
		});
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});

/* ---------- scroll indicating circle -------*/

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






        if (scrollHeight > 600) {

            $('.page-title').css('opacity', '1');
            $('.overscroll-fix').css("opacity", '1');
            $('#back2Top').fadeIn();
          $('.progress-ring').fadeIn();


        } else {

            $('.page-title').css('opacity', '0');
            $('#back2Top').fadeOut();
          $('.progress-ring').fadeOut();

        }


/*-------------scroll effects---------------*/

var dyScroll = 0.08 * scrollHeight;

  if ((scrollHeight > 0) && (scrollHeight < 750)) {

    $('.header-img').css("opacity", 1 - (scrollHeight / windowHeight) * 1);



    $('.header-text span:first-child').css("transform", "translateX(" + -2 * dyScroll + "px)"+" rotate(" + -2 * dyScroll +"deg)");

    $('.header-text span:nth-child(2)').css("transform", "translateY(" + 1 * dyScroll + "px) scale(" + (10 + dyScroll)/10 + ")");

    $('.header-text span:nth-child(3)').css("transform", "translateY(" + -3.5 * dyScroll + "px)"+" rotate(" + 3 * dyScroll +"deg)");

    $('.header-text span:nth-child(4)').css("transform", "translateY(" + 2 * dyScroll + "px)");

    $('.header-text span:nth-child(5)').css("transform", "translateX(" + 1 * dyScroll + "px)"+ " rotate(" + 5 * dyScroll +"deg)");

    $('.header-text span:nth-child(6)').css("transform", "translateY(" + -5 * dyScroll + "px)");

    $('.header-text span:nth-child(7)').css("transform", "translateY(" + 5 * dyScroll + "px)");

    $('.header-text span:nth-child(8)').css("transform", "translateY(" + -3.5 * dyScroll + "px)");

    $('.header-text span:nth-child(9)').css("transform", "translateY(" + -2 * dyScroll + "px)");

    $('.header-text span:nth-child(10)').css("transform", "translateY(" + -3 * dyScroll + "px)");


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

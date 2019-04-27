const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

darkMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'light');
  darkMode.style = "display: none";
  lightMode.style = "display: block";
  localStorage.setItem('theme', 'light');
}

lightMode.onclick = function(){
  document.documentElement.setAttribute('data-theme', 'dark');
  darkMode.style = "display: block";
  lightMode.style = "display: none";
  localStorage.setItem('theme', 'dark');

}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        darkMode.style = "display: none";
      lightMode.style = "display: block";
    }
}



$(window).scroll(function() {

  var headerHeight = $(".header").height();
  var navbarHeight = $(".nav-bar").height();
  var scrolledHeight = $(window).scrollTop();

  var yScroll = scrolledHeight / (headerHeight + navbarHeight) ;
  $('.overscroll-fix').css({'opacity': yScroll});
  $('.header').css({'opacity': 1 - yScroll});

  if(yScroll > 1) {
   $('.overscroll-fix').css({ 'opacity': 1 });
   $('.header').css({ 'opacity': 0 });

 } else if (yScroll < 0) {
	 $('.overscroll-fix').css({ 'opacity': 0 });
   $('.header').css({ 'opacity': 1 });
  }
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeOnScroll').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var navbarHeight = $(".nav-bar").height();

            if( bottom_of_window > (bottom_of_element - 3 * navbarHeight)) {
                $(this).animate({'opacity':'1'}, 600);
            }

        });
    });
});


(function() {
	var backTop = document.getElementsByClassName('js-back-to-top')[0];
	if( backTop ) {
		var scrollDuration = parseInt(backTop.getAttribute('data-duration')) || 300, //scroll to top duration
			scrollOffset = parseInt(backTop.getAttribute('data-offset')) || 0, //show back-to-top if scrolling > scrollOffset
			scrolling = false;

		//detect click on back-to-top link
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
			//move the focus to the #top-element - don't break keyboard navigation
			Util.moveFocus(document.getElementById(backTop.getAttribute('href').replace('#', '')));
		});

		//listen to the window scroll and update back-to-top visibility
		checkBackToTop();
		if (scrollOffset > 0) {
			window.addEventListener("scroll", function(event) {
				if( !scrolling ) {
					scrolling = true;
					(!window.requestAnimationFrame) ? setTimeout(function(){checkBackToTop();}, 250) : window.requestAnimationFrame(checkBackToTop);
				}
			});
		}

		function checkBackToTop() {
			var windowTop = window.scrollY || document.documentElement.scrollTop;
			Util.toggleClass(backTop, 'back-to-top--is-visible', windowTop >= scrollOffset);
			scrolling = false;
		}
	}
}());


var timeout;
var xys = document.getElementById("xycoordinates");

document.onmousemove = function cnvs_getCoordinates(e)
{

xys.style.opacity="1";
x=e.clientX;
y=e.clientY;
xys.innerHTML="[ X: " + x + ", Y: " + y + " ]";
timeout = setTimeout(function(){
xys.style.opacity="0";
clearTimeout(timeout);}, 1000);
};

window.onmouseout = function cnvs_clearCoordinates()
{
document.getElementById("xycoordinates").innerHTML="";
};


$(function(event) {
	var animating = false,
		firstLoad = false;
	$('main').on('click', '[data-type="page-transition"]', function(event) {
		event.preventDefault();
   window.scrollTo(0, 0);
    $(this).addClass('current');
		var newPage = $(this).attr('href');
		if (!animating)
			changePage(newPage, true);
		firstLoad = true;
	});
	$(window).on('popstate', function() {
		if (firstLoad) {
			var newPageArray = location.pathname.split('/'),
				newPage = newPageArray[newPageArray.length - 1];
			if (!animating)
				changePage(newPage, false);
		}
		firstLoad = true;
	});
	function changePage(url, bool) {
		animating = true;
		$('body').addClass('is-loading');
		$('.pgtr-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
			loadNewContent(url, bool);
			$('.pgtr-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		});
		if (!transitionsSupported())
			loadNewContent(url, bool);
	}
	function loadNewContent(url, bool) {
		url = ('' == url) ? 'index.html' : url;
		var newSection = 'pgtr-' + url.replace('.html', '');
		var section = $('<div class="pgtr-main-content ' + newSection + '"></div>');
		section.load(url + ' .pgtr-main-content > *', function(event) {
			$('main').html(section);
			var delay = (transitionsSupported()) ? 2000 : 0;
			setTimeout(function() {
				(section.hasClass('pgtr-index')) ? $('body').addClass('pgtr-index') : $('body').removeClass('pgtr-index');
				(section.hasClass('pgtr-about')) ? $('body').addClass('pgtr-about') : $('body').removeClass('pgtr-about');
				(section.hasClass('pgtr-work')) ? $('body').addClass('pgtr-work') : $('body').removeClass('pgtr-work');
				(section.hasClass('pgtr-contact')) ? $('body').addClass('pgtr-contact') : $('body').removeClass('pgtr-contact');

				$('body').removeClass('is-loading');
				$('.pgtr-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
					animating = false;
					$('.pgtr-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
				if (!transitionsSupported())
					animating = false;
			}, delay);
			if (url != window.location && bool) {
				window.history.pushState({
					path: url
				}, '', url);
			}
		});
	}
	function transitionsSupported() {
		return $('html').hasClass('csstransitions');
	}
});

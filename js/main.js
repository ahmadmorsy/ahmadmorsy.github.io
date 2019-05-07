// Light/Dark Mode

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

//nav-icon

$(document).on('click', '.nav-icon', function(e) {
			var $this = $(this);
			if ( $this.hasClass('active') ) {
				$('body').removeClass('active-nav');
				$this.removeClass('active');
        	// $('.nav-cover').css('opacity','0'); 
			} else {
				$this.addClass('active');
				$('body').addClass('active-nav');
        // $('.nav-cover').css('opacity','1');
         
			}
			e.preventDefault();
		});
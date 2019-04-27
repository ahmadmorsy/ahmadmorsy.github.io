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

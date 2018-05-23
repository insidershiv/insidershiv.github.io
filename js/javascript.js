let times = 0; // scrambled effect shown in one transition
let limit = 10; //number of scramble effect between two transitions
let textCounter = 0; //index variable for messages array

// obj holds id reference to which wil have the scramble effect
let obj = document.getElementById('messenger');

//  array of your input message
let messages = [
  'DEVELOP',
  'DESIGN',
  'CODE',
  'BUILD'
];

// array of random characters

let random = ['@', '#', '%', '^', '&', '/', '|', '*', '!', '?'];


let scramble = function () {

  times = times + 1;

  if (times == limit) {
    times = 0;
    setText();

  } else {
    obj.innerHTML = randomString();
    setTimeout(scramble, 80);


  }
}

let setText = function () {

  obj.innerHTML = messages[textCounter];
  textCounter = (textCounter + 1) % messages.length;

  setTimeout(scramble, 800);
}


let randomString = function () {

  let str = " ";
  let len = messages[textCounter].length;

  len = len < 5 ? 5 : 10;


  for (i = 0; i < len; i++) {

    let index = (Math.floor((Math.random() * 100))) % 10;
    str = str + random[index];



  }
  return str;

}

scramble();





















// scrolling

// Select all links with hashes

// $('a[href*="#"]')
// // Remove links that don't actually link to anything
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000, function() {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });







// everything imp


// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//   $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");

//     $('a').each(function () {
//       $(this).removeClass('active');
//     })
//     $(this).addClass('active');

//     var target = this.hash;
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top+2
//     }, 500, 'swing', function () {
//       window.location.hash = target;
//       $(document).on("scroll", onScroll);
//     });
//   });
// });

// function onScroll(event){
//   var scrollPosition = $(document).scrollTop();

//   if(scrollPosition<579){
//     $('.navigation__nav').css(

//       'background-color', 'transparent');
//   }

//   if(scrollPosition>=579 && scrollPosition <=1213){
//     $('.navigation__nav').css('background-color', '#1f895c');
//   }
//   if(scrollPosition>=1220){
//     $('.navigation__nav').css('background-color', '#FF6347');
//   }
//   $('nav a').each(function () {
//     var currentLink = $(this);

//     var refElement = $(currentLink.attr("href"));

//     if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//       $('navigation a').removeClass("active");
//       currentLink.addClass("active");
//     }
//     else{
//       currentLink.removeClass("active");
//     }
//   });
// }

$("#mywork").click(function() {
  $('html, body').animate({
      scrollTop: $("#work").offset().top   }, 700);
});










$(document).ready(function () {
  //Smooth scrolling when click to nav
  $('#top-nav > ul > li > a').click(function (e) {
    e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr('href')).position().top;
    $('body,html').animate({
      scrollTop: scrollPoint
    }, 700);
  })
  $(window).scroll(function () {
    onScrollHandle();
  });

  function onScrollHandle() {
    //Navbar shrink when scroll down
    $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();
    currentScrollPos = currentScrollPos + 45;
    console.log(currentScrollPos);

    if (currentScrollPos < 579) {
      $('.navigation__nav').css(

        'background-color', 'transparent');
    }


    if (currentScrollPos >= 579 && currentScrollPos <= 1213) {
      $('.navigation__nav').css('background-color', '#1f895c');
    }
    if (currentScrollPos >= 1220 && currentScrollPos<=1884) {
      $('.navigation__nav').css('background-color', '#FF6347');
    }
    if (currentScrollPos >= 1885 ) {
      $('.navigation__nav').css('background-color', '#191F28');
    }
    //Iterate through all node

    $('#top-nav > ul > li > a').each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
        //Remove class active in all nav
        $('#top-nav > ul > li').removeClass("active");
        //Add class active
        curLink.parent().addClass("active");
      } else {
        curLink.parent().removeClass("active");
      }
    });
  }
});
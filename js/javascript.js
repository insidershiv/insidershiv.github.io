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

// *** Working for seemywork link ***
$("#mywork").click(function () {
  $('html, body').animate({
    scrollTop: $("#work").offset().top
  }, 700);
});



// *** Scrolling and active class Handling   ***
//----------------------------------------------------------------------

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
      // ***adjusting the navigation bakkground color***
    if (currentScrollPos < 579) {
      $('.navigation__nav').css(

        'background-color', 'transparent');
    }
    if (currentScrollPos >= 579 && currentScrollPos <= 1213) {
      $('.navigation__nav').css('background-color', '#1f895c');
    }
    if (currentScrollPos >= 1220 && currentScrollPos <= 2100) {
      $('.navigation__nav').css('background-color', '#FF6347');
    }
    if (currentScrollPos >= 2101) {
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

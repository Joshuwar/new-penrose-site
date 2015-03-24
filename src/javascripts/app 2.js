
$(document).ready(function() {

  // Mobile nav
  var menuToggle = $('.menulink').unbind();
  $('.navwrap').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.navwrap').slideToggle(function(){
      if($('.navwrap').is(':hidden')) {
        $('.navwrap').removeAttr('style');
      }
    });
  });

  // opens/closes image info on fullscreen gallery pages
  var galleryInfoToggle = $('.infoimage').unbind();

  galleryInfoToggle.on('click', function(e) {
    e.preventDefault();
    $( ".gallery-fullscreen" ).toggleClass( "info-shown" )
  });

  // opens/closes searchform field in header
  var galleryInfoToggle = $('.searchlink').unbind();

  galleryInfoToggle.on('click', function(e) {
    e.preventDefault();
    $( ".searchcontainer" ).toggleClass( "searchopen" );
    $(".searchfield").focus();
  });
});

// Match heights
(function() {
  $(function() {
    $('header .title').matchHeight();
    $('.image-container').matchHeight();
    $('.content-card').matchHeight(); // to match advert cards to normal cards
    $('.nextprev-link .linktitle').matchHeight(); // to match advert cards to normal cards
  });
})();


// Match heights for CSS column link items
function setMaxHeight(parentSelector, childSelector) {
  $(parentSelector).each(function(i, parent) {
    var maxHeight = 0;
    $(parent).find(childSelector).each(function(j, item) {
      $(item).attr('style','');
      var itemHeight = $(item).height();
      if(itemHeight>maxHeight) {
        maxHeight = itemHeight;
      }
    }).height(maxHeight); // set the height of childSelector to maxHeight
  });
}

if($('ul.link-list').css('columns')!="auto auto") {
  setMaxHeight('ul.link-list', '.linkitem');
}


// Offset image to left edge of browser
function offsetImgLeft() {
  $('.offset-image-container .offset-image-wrap').each(function(i,img) {
    var $img = $(img);
    var padding = $img.css( "paddingLeft" ).replace("px", "");
    var offset = $img.offset().left;
    var left = parseInt(offset) + parseInt(padding);
    //offset = offset + $('.highlight .img').css( "padding-left" );
    $img.css('margin-left', -left);
  });
}
$(function($) {
  offsetImgLeft();
});
$(window).resize(function(){
  offsetImgLeft();
});

// Offset image to right edge of browser
function offsetImgRight() {
  $('.offset-image-container .offset-right-image-wrap').each(function(i,img) {
    var $img = $(img);
    var windowWidth = $(window).width();
    var offset = $(img).offset().left;
    var imgWidth = $(img).width() + parseInt($(img).css('paddingLeft')) + parseInt($(img).css('paddingRight'));
    var marginRight = windowWidth - (offset + imgWidth);
    $img.css('margin-right', -marginRight);
  });
}
$(function($) {
  offsetImgRight();
});
$(window).resize(function(){
  offsetImgRight();
  if($('ul.link-list').css('columns')!="auto auto") {
   setMaxHeight('ul.link-list', '.linkitem');
  } else {
    $('.link-list .linkitem').attr('style',''); // clears heights on linkitems when moving from column to non-column layout
  }
});

$('.site-header').stickThis();


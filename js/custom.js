/*global $ , alert , console*/
$(function () {
    'use strict';
    
    // Adjust header height
    
    $("header").height($(window).height());
    $(window).resize(function () {
        $("header").height($(window).height());
    });
    
    //Initialize the slider
    
    $(document).ready(function () {
        $('.bxslider').bxSlider();
        
    });
    $('.bxslider').height($(window).height());
    
    // add and remove class (active)
    $('li a').click(function () {
        $('li a.active').removeClass('active');
        $(this).closest('a').addClass('active');
    });
    
    // trigger mixit up
    $('#container').mixItUp();
    
    // Trigger nice scroll
    $('html').niceScroll({
        cursorcolor: '#ffb31a',
        cursorwidth: '10px',
        cursorborder: '1px solid #ffb31a '
    });
    
    // Html animate
    $('nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
        console.log($(this).data('value'));
    });
    
    // up button
     // When the user scrolls down 20px from the top of the document, show the button
    var myBtn = document.getElementById('btn');
    
    window.onscroll = function scrollFunction() {
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
    // When the user clicks on the button, scroll to the top of the document
    myBtn.onclick = function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('li a').removeClass('active');
        $('li a').first().addClass('active');
    };
});


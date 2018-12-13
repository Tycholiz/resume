// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('.more-info').hide();
    $('.less-info-btn').hide();

    // $(".more-info.btn").click(function () {
    //     var elem = $(".more-info-btn").text();
    //     if (elem == "More info") {
    //         //Stuff to do when btn is in the read more state
    //         $(".more-info-btn").text("Less info");
    //         $(".more-info").slideDown();
    //     } else {
    //         //Stuff to do when btn is in the read less state
    //         $(".more-info-btn").text("More info");
    //         $(".more-info").slideUp();
    //     }
    // });

    $('.more-info-btn').click(function() {
        // $('.more-info').show()
        $('.more-info-btn').hide()
        $(".more-info").slideDown(200, function() {
            $('.less-info-btn').show()
        })
    });

    $('.less-info-btn').on('click', function() {
        // $('.more-info').hide()
        $('.less-info-btn').hide()
        $(".more-info").slideUp(200, function() {

            $('.more-info-btn').show()
        })
    });


    // Floating label headings for the contact form

    $('[data-toggle="tooltip"]').tooltip();


})(jQuery); // End of use strict

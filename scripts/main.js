$(document).ready(function () {


    // Nav open and clos
    const navItems = $('.main-nav .nav-items');
    $('#navOpenBtn').click(openNav);
    $('#navCloseBtn').click(closeNav);


    function openNav() {
        navItems.addClass('open');
        // console.log('open button clicked');
    }

    function closeNav() {
        // console.log('close button clicked');
        navItems.removeClass('open');
    }



    /* initialize the slider based on the Slider's ID attribute */
    jQuery('#main_rev_slider').show().revolution({

        /* options are 'auto', 'fullwidth' or 'fullscreen' */
        sliderLayout: 'auto',
        gridheight: 350,
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth:[1240, 1024, 778, 480],
        gridheight:[450, 450, 450, 450],

        /* basic navigation arrows and bullets */
        navigation: {
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false,
            },

            bullets: {
                enable: true,
                style: 'persephone',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });


    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });
    $('.owl-carousel').trigger('play.owl.autoplay',[2000]);




});
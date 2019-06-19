$(document).ready(function () {







    // Nav open and clos
    const navItems = $('.main-nav .nav-items');
    $('#navOpenBtn').click(openNav);
    $('#navCloseBtn').click(closeNav);


    function openNav(){
        navItems.addClass('open');
        // console.log('open button clicked');
    }
    function closeNav(){
        // console.log('close button clicked');
        navItems.removeClass('open');
    }


});
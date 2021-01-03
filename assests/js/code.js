/*first load my web site*/
$(window).on('load', function () {
    /*preloader*/
    /*delay 3s before hideen or more if web content not loaded*/
    $('.preloader').delay(3000).fadeOut('slow', function () {
        $('.body_content').fadeIn('slow');  //To show web content
        AOS.init({ duration: 800, }); //start AOS animation
    });
/***********************************************************************************************/
    /*smooth scroll when click on nav bar */
    $('header a[href*="#"]').on('click', function (e) {
        e.preventDefault(); //to prevent default events.
        $('body , html').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000, 'linear');
    });
/************************************************************************************************/
    let link = document.querySelectorAll('header a[href*="#"]');
    /*put color orange on desired link that i clicked on*/
    $('header a[href*="#"]').click(function (e) {
        e.preventDefault();
        let i;
        /*loop in array link to color reset*/
        for (i in link) {
            $(link).removeClass('active');
        }
        /*then add color*/
        $(this).addClass('active');
    });
/************************************************************************************************/
    /*catch scroll*/
    $(window).on("scroll", function () {
        /*first reset and refresh AOS animation*/
        AOS.refresh();

        /*if scroll down > 50
            >> animate header
            >> show back to top button
        else
            >>DO OPPOSITE
        */
        if ($(window).scrollTop() > 50) {
            $("header").addClass("header_active");
            $('#button').addClass('show');
        } else {
            $("header").removeClass("header_active");
            $('#button').removeClass('show');
        }
        if ($(window).scrollTop() == 0) {
            //reset color for nav bar
            $(link).removeClass('active');
        }
    });
/************************************************************************************************/
    //tabs section event click on tab 1 , tab 2 , tab 3 buttons
    $('.tab_btn').click(function (e) {
        e.preventDefault();
        let $this = $(this);

        /* >>first check on desired button
           >>second reset all buttons and then add attributes on desired button (tab 1)(tab 2)(tab 3)
           >>third hidden their content and only display content of desired button .
        */
        if ($this.hasClass("tab-1")) {
            $('.tab_btn').removeClass('click');
            $('.tab-1').addClass('click');

            $('.tabb').slideUp('fast');
            $('.tab1').slideToggle('slow');

        } else if ($this.hasClass("tab-2")) {
            $('.tab_btn').removeClass('click');
            $('.tab-2').delay(500).addClass('click');

            $('.tabb').slideUp('fast');
            $('.tab2').slideToggle('slow');

        } else if ($this.hasClass("tab-3")) {
            $('.tab_btn').removeClass('click');
            $('.tab-3').addClass('click');

            $('.tabb').slideUp('fast');
            $('.tab3').slideToggle('slow');
        }
    })
/************************************************************************************************/
    // when pressed on back to top button
    $('#button').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
/************************************************************************************************/
    /*Dark mode
        >>First get attribute and check if web page in dark mode or light mode
        >>second change theme and change Title Image*/
    $('.dark_mode').on('click', function () {
        let check = (document.body.getAttribute('data-theme') === 'dark');

        if (check) {
            document.body.setAttribute('data-theme', 'light');
            $('.dark_mode img').prop('title', 'DarKMode');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            $(".dark_mode img").prop("title", "Light Mode");
        }
        console.log(check)

    });
/************************************************************************************************/
    /*show burger button on mobile screen*/
    let button_burger = document.querySelector('.burger__input');
    let nav = document.querySelector('header .right_nav');
    /*@ screen width 900px 
        >>hidden nav bar
        >>reset check box
    */
    let media900 = window.matchMedia("(max-width: 900px)");
    media900.addListener(media) // call handler function whenever the media query is triggered
    media(media900);
    function media(media) {
        if (media900.matches) {
            $(button_burger).prop('checked', false);
            nav.classList.add('hide');
        } else {
            $(button_burger).prop('checked', false);
            nav.classList.remove('hide');
            nav.classList.remove('block');
        }
    }
/************************************************************************************************/
    /*show nav bar when click on burger button*/
    $('.burger__input').unbind("click").click(function (e) { //unbind() method removes event handlers from selected elements.
        e.preventDefault();
        nav.classList.toggle('block');
    });
});


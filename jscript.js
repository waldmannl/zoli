$(document).ready(function(){
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // zsa fel script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // lenyíló menü scriptje

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // gépelő effekt

    var typed = new Typed(".typing", {
        strings: ["Alkotunk", "Építünk", "Rombolunk", "Ökörködünk", "Szavak", " És sok más"],
        typedSpeed: 60,
        backSpeed: 60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Alkotunk", "Építünk", "Rombolunk", "Ökörködünk", "Szavak", " És sok más"],
        typedSpeed:60,
        backSpeed: 60,
        loop:true
    });

    // owl carousel scriptje(oldalra lapozós geci)

    $('.works .carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            1299:{
                items: 2,
                nav:false
            },
        }
    });

    // szintén csak a tagogknál

    $('.team .carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            },
        }
    });

    // betöltőkép

    setTimeout(fade_out,3000);

    function fade_out(){
        $("#preloader").fadeOut().empty();
    }

    // form kitöltés
});
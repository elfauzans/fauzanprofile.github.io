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

    // typing animate
    var typed = new Typed(".typing", {
        strings: ["My Web Profile", "Tentang Saya", "Tegal Web Programing", "Sekilas Info"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    // slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu
    $('.menu-toggle').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-toggle i').toggleClass("active");
    });
});
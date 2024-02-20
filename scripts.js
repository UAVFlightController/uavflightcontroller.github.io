$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
            $(".navigationbar").addClass("sticky");
        else
            $(".navigationbar").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});
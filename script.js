$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser:true,
    });
});

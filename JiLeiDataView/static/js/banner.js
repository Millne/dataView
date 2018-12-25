let bannerCreate = () => {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
//      autoplay: 2000,
//      autoplayDisableOnInteraction: false,
        effect: 'fade',
        observer: true,
        observeParents: true,
        speed: 800,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        pagination: '.swiper-pagination',
        paginationClickable: true,
    })
}
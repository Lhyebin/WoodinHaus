$(function () {
    //헤더 @반응형
    $('.head_icon .bar').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })









    // 콘텐츠 : 슬라이드
    $('.content_img').slick({
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        // fade: true,
    });

    // 콘텐츠 : 화살표
    $('.main_content .content_arrows .left').on('click', function () {
        $('.content_img').slick('slickPrev')
    })
    $('.main_content .content_arrows .right').on('click', function () {
        $('.content_img').slick('slickNext')
    })








    // 인포메이션 : 슬라이드
    $('.imformation_img').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ]
    });

    // 인포메이션 : 화살표
    $('.main_imformation .imformation_arrows .left').on('click', function () {
        $('.imformation_img').slick('slickPrev')
    })
    $('.main_imformation .imformation_arrows .right').on('click', function () {
        $('.imformation_img').slick('slickNext')
    })

    // 인포메이션 : 스테이타임
    $('.imformation_wrap').on('init afterChange', function (e, s, c) {
        $('.stay_bar span').animate({ width: ((100 / 5) * c) + 20 + "%" }, 400)
    })

});
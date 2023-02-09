(() => {
    const $navBtn = $('.nav_btn')
    $navBtn.on('click', function () {
        $('.nav_wraper').css('display', 'block')
    })



})

console.log('linked')


const $navBtn = $('.nav_btn')
$navBtn.on('click', function () {
    $('.nav_wraper').css('display', 'block')
    $('.nav_wraper').on('click', function () {
        $('.nav_wraper').css("display", 'none')
    })
})

$(window).scroll(function () {
    if (window.scrollY > 30) {
        $navBtn.css("opacity", "0.6")
    } else (
        $navBtn.css("opacity", "1")
    )
})


$(document).ready(function () {
    $(window).scroll(function () {
        $('.showElement').each(function (i) {
            const bottomOfObject = $(this).position().top + $(this).outerHeight();
            const bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).animate({ 'opacity': '1' }, 800)
            }
        })
    })


})


$(document).ready(function () {
    if ($(window).width() <= 400) {
        $('.nav_wraper').hide()
    }
    else if ($(window).width() > 400) {
        $('.nav_wraper').show()
    }
})

const $navBtn = $('.nav_btn')
$navBtn.on('click', function () {
    $('.nav_wraper').show('slow')
    $('.nav_wraper').on('click', function () {
        $('.nav_wraper').hide('slow')
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
            const bottomOfObject = $(this).position().top
            //console.log(bottomOfObject)

            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            //console.log(bottomOfWindow)
            if (bottomOfWindow > bottomOfObject) {
                $(this).animate({ 'opacity': '1' }, 2000)
            }
        })
    })

})


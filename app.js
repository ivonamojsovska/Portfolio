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


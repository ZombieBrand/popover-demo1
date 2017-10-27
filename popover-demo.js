/**tabs */
$('.tabs').on('click', 'a', function (e) {
    let $tabs = $(e.currentTarget)
    let $index = $tabs.index()
    $tabs.addClass('active').siblings('.active').removeClass('active')
    let popover = $tabs.parent().siblings().eq($index)
    console.log(popover)
    popover.addClass('active').siblings('.active').removeClass('active')
})
/**popovers */
$('.buttons').on('click', 'a', function (e) {
    let $a = $(e.currentTarget)
    let $index = $a.index()
    let $popup = $a.parent().next().children().eq($index)
    let close = function () {
        $popup.removeClass('active')
        $popup.siblings('.active').removeClass('active')
        $(document).off('click', close)
    }
    let open = function () {
        $popup.addClass('active')
        $popup.siblings('.active').removeClass('active')
        $(document).on('click', close)
    }
    if ($popup.hasClass('active')) {
        close()
    } else {
        open()
        e.stopPropagation()
    }

})
/*$('.popoverTwo').on('click', 'a', function (e) {
    let $a = $(e.currentTarget)
    let $index = $a.index()
    let $pop = $a.siblings('div').eq($index)
    let close2 = function () {
        $pop.removeClass('active');
        $('body').off('click', close2);
        $('.webupPopThree').css('animation','zoomInRvs 0.5s')
    }
    let open2 = function () {
        $pop.addClass('active');
        $('body').on('click',close2);
    }
    if ($pop.hasClass('active')) {
        close2()
    } else {
        open2()
        e.stopPropagation()
    }
})*/
/*popoverTwo*/
$('.popoverTwo').on('click', 'a', function (e) {
    let $a = $(e.currentTarget)
    let $index = $a.index()
    let $pop = $a.siblings('div').eq($index)
    $pop.toggleClass('active')
    e.stopPropagation()
})
$(document).on('click', function (e) {
    $('.popoverTwo>div').removeClass('active')
})
/** popoverThree*/
$('.popoverThree .popadvanced').on('click', 'a', function (e) {
    let $a = $(e.currentTarget)
    let $index = $a.index()
    let $pop = $a.parent().siblings('.Threepop').eq($index)
    console.log($pop)
    let close = function () {
        $($pop).removeClass('active')
        $(document).off('click', close)
    }
    let open = function () {
        $($pop).addClass('active')
        $(document).on('click', close)
    }
    let closeBg = function(){
        $('#background').removeClass('active')
        $(document).off('click',closeBg)
    }
    if ($pop.hasClass('active')) {
        close()
    } else {
        open()
        e.stopPropagation()
    }
    if ($('.popbackdrop').attr('class') === 'popbackdrop Threepop active') {
        $('#background').addClass('active')
        $(document).on('click',closeBg)
    }else{
        closeBg()
        e.stopPropagation()
    }
})
$('.popbtn').on('click','a',function(e){
    let $pop=$(e.currentTarget)
    let $text = $pop.text() + '触发!'
    $('#eventlogs').text($('#eventlogs').text()+$text+'\r')
})
$('.btnrl').on('click', function(e) {
    if($('#eventlogs').text()=== 'reset logs 触发!'){
        $('#eventlogs').text('')
    }else{
        $('#eventlogs').text('reset logs 触发!')
    }
  })


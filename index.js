$(function () {
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    html.style.fontSize = windowWidth / 6.4 + 'px';
    var audio=$('audio')[0]
    var music=$('#music')
    //点击音乐停止
    music.tap(function () {
    if(audio.paused){
        audio.play()
        $('.pan').addClass('play')
       // music[0].style.animationPlayState='running' 继续动画，但ios6支持，安卓4以上不支持
        //music[0].style.webkitanimationPlayState='running'继续动画，但安卓4以上不支持
    }else{
        audio.pause()
       $('.pan').removeClass('play')
       // music[0].style.animationPlayState='paused'
        //music[0].style.webkitanimationPlayState='paused'
    }
})
    //监听当音乐停止，停止光盘转动效果
    audio.addEventListener('ended',function (e) {
        $('.pan').removeClass('play')
    },false)
    var page1=$('#page1')//第一页
    var page2=$('#page2')//第2页
    var page3=$('#page3')//第一页
    //点击进入第二页
    $('.p1_lantern').tap(function () {
       page1.hide()
       page2.show()
        page3.show()
        setTimeout(function () {
            page2.addClass('fadeOut')
           page3.addClass('fadeIn')
        },6000)
    })
})

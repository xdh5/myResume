//等待加载动画
window.onload=function(){
    document.querySelector("#loading").style.display = "none";
}

//执行函数
navAnimation()
navScroll()

//导航栏动画
function navAnimation(){
    //导航栏背景变色
    window.onscroll = function(event){
        if(window.scrollY > 0){
            document.querySelector("#topNavBar").style.background = "white"
        }
        else{
            document.querySelector("#topNavBar").style.background = "none"
        }
        highLight()
        barLineSlide()                                                                                                                                                         
    }
    //导航栏链接鼠标悬浮下划线
    var navList = document.querySelectorAll(".topNavBar nav ul li a")
    for(let i = 0;i<navList.length;i++){
        navList[i].onmouseenter=function(event){
            this.classList.remove("leaveActive")
            this.classList.add("enterActive")
        }
        navList[i].onmouseleave=function(event){
            this.classList.remove("enterActive")
            this.classList.add("leaveActive")
        }
    }
}

//导航栏随滚动加入下划线
function highLight(){
    var navList = document.querySelectorAll(".topNavBar nav ul li a")
    for(let i = 0;i<navList.length;i++){
        let element = document.querySelector(navList[i].getAttribute("href"))
        if(element.offsetTop - window.scrollY <100 && element.offsetTop + element.offsetHeight - window.scrollY>80){
            navList[i].classList.add("enterHighlight")
        }
        else{
            navList[i].classList.remove("enterHighlight")
        }
    }
}

//导航栏跳转
function navScroll(){
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var anchor = document.querySelectorAll(".topNavBar nav ul li a")
    for(let i = 0;i<anchor.length;i++){
        anchor[i].onclick = function(event){
            event.preventDefault()
            var element = document.querySelector(this.getAttribute("href"))
            var t = Math.abs(window.scrollY - (element.offsetTop - 80))/100*300 //速度为100px/0.1s
            if(t>500){ t = 500 }
            var coords = {y: window.scrollY};
            var tween = new TWEEN.Tween(coords)
                tween.to({y: element.offsetTop - 80}, t)
                tween.easing(TWEEN.Easing.Cubic.InOut)
                tween.onUpdate(function() {
                    window.scrollTo(0,coords.y)
                })
                tween.start();
        }
    }
}

//技能条动画
function barLineSlide(){
    var skill = document.querySelector("#skills ul")
    var element = document.querySelectorAll("#skills .bar-line>div")
    var height = document.documentElement.clientHeight
    if((window.scrollY + height) - skill.offsetTop >100){
        for(let i = 0;i<element.length;i++){
            element[i].style.background = "#1fbeca"
            element[i].style.width = element[i].id
        }
    }
}

//轮播
document.addEventListener("visibilitychange", function(){
    if(document.hidden){
        clearInterval(setTimer)
    }
    else{
        setTimer = setInterval(setSlide,2000)
    }
})
var slideTip = document.querySelectorAll(".slideTip")
var images = document.querySelector("#images")
images.style.marginLeft = "0px"
setInterval(action, 0)
selectImages()
nextImages()
slide()
function action(){
    for(let i=0;i<slideTip.length;i++){
        if(parseInt(images.style.marginLeft) == -940*i){
            var action = document.querySelector(".action")
            action.classList.remove("action")
            slideTip[i].classList.add("action")
        }   
    }
}
function selectImages(){
    for(let i = 0;i<slideTip.length;i++){
        slideTip[i].onclick = function(){
            images.style.marginLeft = -940*i+"px"
        }
    }
}
function nextImages(){
    var pre = document.querySelector("#pre")
    var next = document.querySelector("#next")
    pre.onclick=function(){
        images.style.marginLeft = parseInt(images.style.marginLeft)+940+"px"
        if(parseInt(images.style.marginLeft)>0){
            images.style.marginLeft = -940*(slideTip.length-1) +"px"
        }
    }
    next.onclick=function(){
        images.style.marginLeft = parseInt(images.style.marginLeft)-940+"px"
        if(parseInt(images.style.marginLeft)<-940*(slideTip.length-1)){
            images.style.marginLeft = "0px"
        }
    }
}
function slide(){
    function setTimer(){
        var action = document.querySelector(".action")
        var children = action.parentNode.children
        var n
        for(i =0;i<children.length;i++){
            if(action === slideTip[i]){
                n=i
                break
            }
        }
        if(n >= slideTip.length-1){
            n = 0
        }
        else{
            n = n+1
        }
        images.style.marginLeft = -940*n+"px"
    }
    var circle = setInterval(setTimer, 3000)
    var stopSlide = document.querySelector(".stopSlide")
    stopSlide.onmouseleave = function(){
        circle = setInterval(setTimer, 3000)
    }
    stopSlide.onmouseenter = function(){
        window.clearInterval(circle)
    }
}
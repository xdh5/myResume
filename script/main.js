navAnimation()
navScroll()
//等待加载动画
window.onload=function(){
    document.querySelector("#loading").style.display = "none";
}
//导航栏动画
function navAnimation(){
    window.onscroll = function(event){
        if(window.scrollY > 0){
            document.querySelector("#topNavBar").style.background = "white"
        }
        else{
            document.querySelector("#topNavBar").style.background = "none"
        }                                                                                                                                                         
    }
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
//导航栏跳转
function navScroll(){
    var a = document.querySelectorAll(".topNavBar nav ul li a")
    for(let i = 1;i<a.length;i++){
        a[i].onclick = function(event){
            event.preventDefault()
            var element = document.querySelector(this.getAttribute("href"))
            window.scrollTo(0, element.offsetTop-100)
        }
    }
}
// $(function(){
//     $(".bar>span").click(function(){
//         var i = $(this).attr("id").substr(3);
//         if(i==1){
//             $(".portfolio .bar-line>div").css({"width":"40%","background-color":"#E8676B","margin-left":"0%"})
//         }
//         else if(i==2){
//             $(".portfolio .bar-line>div").css({"width":"30%","background-color":"#E8676B","margin-left":"40%"})
//         }
//         else{
//             $(".portfolio .bar-line>div").css({"width":"30%","background-color":"#E8676B","margin-left":"70%"})
//         }
//     })
// })

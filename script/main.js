$(function(){
    $(".bar>span").click(function(){
        var i = $(this).attr("id").substr(3);
        if(i==1){
            $(".portfolio .bar-line>div").css({"width":"40%","background-color":"#E8676B","margin-left":"0%"})
        }
        else if(i==2){
            $(".portfolio .bar-line>div").css({"width":"30%","background-color":"#E8676B","margin-left":"40%"})
        }
        else{
            $(".portfolio .bar-line>div").css({"width":"30%","background-color":"#E8676B","margin-left":"70%"})
        }
    })
})
/*menu collapse coding*/

$(document).ready(function(){
    $("#menu").click(function(){
        $("#open").collapse("toggle");
        $("#open").addClass("animate__animated animate__zoomIn")
    });

    $("#menu").on('show.bs.collapse',function(){
    $("#main-wallpaper").animate({"margin-top":"200px"});
    });
    
});
$(document).ready(function(){
    var string= "READY TO RACE";
    var i=0;
    if(i<string.length)
    setInterval(function(){
        document.querySelector("#ins").innerHTML+=string.charAt(i);i++;
    },130);

});

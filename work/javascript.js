document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "350px";
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.05";
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
});
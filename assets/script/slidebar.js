function beach1() {
    document.getElementById("beach1").style.display = "block";
    document.getElementById("beach1").style.animation = "fadeIn linear 0.4s";
    document.getElementById("border1").style.border = "2px solid #ffffff";
    document.getElementById("border1").style.opacity = 1;

    document.getElementById("beach2").style.display = "none";
    document.getElementById("beach3").style.display = "none";
    document.getElementById("border2").style.border = "2px solid #89A7CC";
    document.getElementById("border3").style.border = "2px solid #89A7CC";

}
function beach2() {
    document.getElementById("beach2").style.display = "block";
    document.getElementById("beach2").style.animation = "fadeIn linear 0.4s";
    document.getElementById("border2").style.border = "2px solid #ffffff";
    document.getElementById("border2").style.opacity = 1;


    document.getElementById("beach1").style.display = "none";
    document.getElementById("beach3").style.display = "none";
    document.getElementById("border1").style.border = "2px solid #89A7CC";
    document.getElementById("border3").style.border = "2px solid #89A7CC";
}
function beach3() {
    document.getElementById("beach3").style.display = "block";
    document.getElementById("beach3").style.animation = "fadeIn linear 0.4s";
    document.getElementById("border3").style.border = "2px solid #ffffff";
    document.getElementById("border3").style.opacity = 1;

    document.getElementById("beach1").style.display = "none";
    document.getElementById("beach2").style.display = "none";
    document.getElementById("border1").style.border = "2px solid #89A7CC";
    document.getElementById("border2").style.border = "2px solid #89A7CC";

}
beach1();
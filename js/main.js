function operateLight(x) {
    if (x == on) {
        document.getElementById("imagelight").src = "/images/pic_bulbon.gif";
        document.getElementById("body").style = "background-color: royalblue;";
    }
    // can ignore second if and use else only in place of off
    if (x == off) {
        document.getElementById("imagelight").src = "/images/pic_bulboff.gif";
        document.getElementById("body").style = "background-color: balck;";
    } else {

    }
}
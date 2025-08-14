window.addEventListener('DOMContentLoaded', changeHeaderNav)
window.addEventListener('resize', changeHeaderNav)

function changeHeaderNav() {

    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
    var x = document.getElementById("header1")
    var y = document.getElementById("header2")
    var z = document.getElementById("headerPara")
    var himg = document.getElementById("header_img")
    // Navbar brand visibility is now handled via CSS media queries
    var mimg = document.getElementById("main_img")

    if (w <= 576) {
        x.style.display = "none"
        x.style.paddingRight = "0"
        y.style.display = "block"
        y.style.paddingRight = `${Math.max(0, w/2 - 76)}px`
        z.style.display = "none"
        z.style.paddingRight = "0"
        himg.style.display = "none"
        if (mimg) {
            mimg.innerHTML = "<img src='images/Introduction2.png' style='width:100%' />"
        }
    }

    else if (w < 1100) {
        x.style.display = "block"
        x.style.paddingRight = `${Math.max(0, w/2 - 320)}px`
        y.style.display = "none"
        y.style.paddingRight = "0"
        z.style.display = "none"
        z.style.paddingRight = "0"
        himg.innerHTML = "<img src='images/Westlake_Logo_1.png' style='height:3rem' />"
        himg.style.padding = "0 1rem"
        himg.style.display = "block"
        if (mimg) {
            mimg.innerHTML = "<img src='images/Introduction1.png' style='width:100%' />"
        }
    }

    else if (w < 1376) {
        x.style.display = "block"
        x.style.paddingRight = `${Math.max(0, w/2 - 320)}px`
        y.style.display = "none"
        y.style.paddingRight = "0"
        z.style.display = "block"
        z.style.paddingRight = `${Math.max(0, w/2 - 314)}px`
        himg.innerHTML = "<img src='images/Westlake_Logo_1.png' style='height:4.38rem' />"
        himg.style.padding = "0.45rem 1.14rem"
        himg.style.display = "block"
        if (mimg) {
            mimg.innerHTML = "<img src='images/Introduction1.png' style='width:100%' />"
        }
    }

    else {
        x.style.display = "block"
        x.style.paddingRight = `${Math.max(0, w/2 - 320)}px`
        y.style.display = "none"
        y.style.paddingRight = "0"
        z.style.display = "block"
        z.style.paddingRight = `${Math.max(0, w/2 - 314)}px`
        himg.innerHTML = "<img src='images/Westlake_Logo_0.png' style='height:4.5rem' />"
        himg.style.padding = "0.4rem 1rem"
        himg.style.display = "block"
        if (mimg) {
            mimg.innerHTML = "<img src='images/Introduction1.png' style='width:100%' />"
        }
    }
}

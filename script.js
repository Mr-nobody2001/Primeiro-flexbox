let screenS = innerWidth

let imagesBs = document.querySelectorAll(".bodyS > img ")

let imagesBottom = document.getElementById("mg")


window.addEventListener("load", function () {

    if (screenS <= 450) {

        imagesBs[0].src = "bg-section-top-mobile-1.svg"

        imagesBs[1].src = "bg-section-bottom-mobile-1.svg"

        imagesBs[2].src = "bg-section-top-mobile-2.svg"

        imagesBs[3].src = "bg-section-bottom-mobile-2.svg"

        imagesBottom.src = "bg-footer-top-mobile.svg"
    }

    else {
        imagesBs[0].src = "bg-section-top-desktop-1.svg"

        imagesBs[1].src = "bg-section-bottom-desktop-1.svg"

        imagesBs[2].src = "bg-section-top-desktop-2.svg"

        imagesBs[3].src = "bg-section-bottom-desktop-2.svg"

        imagesBottom.src = "bg-footer-top-desktop.svg"
    }

})

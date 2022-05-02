let screenS = null

let imagesBs = document.querySelectorAll(".bodyS > img ")

let imagesBottom = document.getElementById("mg")

let but = document.getElementsByTagName("button")

function funScreenS () {

    screenS = innerWidth

    imagesBs[0].src = "bg-section-top-desktop-1.svg"

    imagesBs[1].src = "bg-section-bottom-desktop-1.svg"

    imagesBs[2].src = "bg-section-top-desktop-2.svg"

    imagesBs[3].src = "bg-section-bottom-desktop-2.svg"

    imagesBottom.src = "bg-footer-top-desktop.svg"
    
    for (let i = 0; i < but.length; i++) {

        but[i].addEventListener("click", function () {
            window.location.href = "https://github.com/Mr-nobody2001"
        })

    }

    if (screenS <= 450) {

        imagesBs[0].src = "bg-section-top-mobile-1.svg"

        imagesBs[1].src = "bg-section-bottom-mobile-1.svg"

        imagesBs[2].src = "bg-section-top-mobile-2.svg"

        imagesBs[3].src = "bg-section-bottom-mobile-2.svg"

        imagesBottom.src = "bg-footer-top-mobile.svg"
        
        for (let i = 0; i < but.length; i++) {

            but[i].addEventListener("touchstart", function () {
                window.location.href = "https://github.com/Mr-nobody2001"
            })
    
        }

    }

}

window.addEventListener("load", funScreenS)

window.addEventListener("resize", funScreenS)

const header = document.querySelector ("header")
const backToTopButton = document.querySelector ("#back-to-top")

function updateHeader () {
    if (window.pageYOffset > 0)
        header.classList.add ("header-opaque")
    else
        header.classList.remove ("header-opaque")
}
function updateBackToTopButton () {
    if (window.pageYOffset > 0)
        backToTopButton.classList.remove ("hidden")
    else 
        backToTopButton.classList.add ("hidden")
}

window.onscroll = function () {
    updateHeader ()
    updateBackToTopButton()
}

updateHeader ()
updateBackToTopButton()

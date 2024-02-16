
window.addEventListener("DOMContentLoaded", async() =>{
    try {
        const response = await fetch("/frontEnd/components/header/header.html")
        const responseText = await response.text()
        const boxHeader = document.querySelector(".boxHeader")
        boxHeader.innerHTML = responseText
    } catch (error) {
        boxHeader.innerHTML = "Bad request!"
    }

})
const boxHeader = document.querySelector(".box-header")
const sideBar = document.querySelector(".sideBar")

window.addEventListener("DOMContentLoaded", async() => {
    try {
        const response = await fetch("/frontEnd/components/navBar/navbar.html")
        const responseText = await response.text()
        boxHeader.innerHTML = responseText
    } catch (error) {
        console.log(error);
    }


    try {
        const response = await fetch("/frontEnd/components/sideBar/sidbar.html")
        const responseText = await response.text()
        sideBar.innerHTML = responseText
    } catch (error) {
        console.log(error);
    }
})
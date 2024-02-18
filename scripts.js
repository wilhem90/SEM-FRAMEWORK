console.log("Meu js geral esta funcionando! \n-------------------------------");


window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/frontEnd/components/header/header.html")
        const responseText = await response.text()
        const boxHeader = document.querySelector(".boxHeader")
        boxHeader.innerHTML = responseText
    } catch (error) {
        console.log(error);
    }

    try {
        const response = await fetch("./frontEnd/pages/home/home.html")
    const responseText = await response.text()
    const boxMain = document.querySelector(".boxMain")
    boxMain.innerHTML = responseText
    } catch (error) {
        console.log(error);
    }

})
let escalaPagina = 1

const btnAumentar = document.getElementById("btn_aumentar")
const btnDiminuir = document.getElementById("btn_diminuir")
const btnContraste = document.getElementById("btn_contraste")

btnAumentar.addEventListener("click", () => {

    if(escalaPagina < 1.5){

        escalaPagina += 0.1

        document.body.style.transform = `scale(${escalaPagina})`
        document.body.style.transformOrigin = "top left"
        document.body.style.width = `${100/escalaPagina}%`

    }

})

btnDiminuir.addEventListener("click", () => {

    if(escalaPagina > 0.8){

        escalaPagina -= 0.1

        document.body.style.transform = `scale(${escalaPagina})`
        document.body.style.transformOrigin = "top left"
        document.body.style.width = `${100/escalaPagina}%`

    }

})

btnContraste.addEventListener("click", () => {

    document.body.classList.toggle("modo_contraste")

})
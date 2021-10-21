var textInput = document.querySelector("#text-input")
var returnQr = document.querySelector("#return-qr")
var generate = document.querySelector("#generate")
var clear = document.querySelector("#clear")

generate.addEventListener("click", function generate() {
    if (textInput.value.startsWith("http")) {
        returnQr.innerHTML = ""
        returnQr.insertAdjacentHTML('afterbegin', /*html*/`
        <img src="https://www.qrtag.net/api/qr_transparent_360.png?url=${textInput.value}" alt="qr code" id="qr-image">
        `)
    } else {
        returnQr.innerHTML = ""
        returnQr.insertAdjacentHTML("afterbegin", /*html*/ `
        <p>Endereço inválido</p>
        <p>O Endereço deve começar com: https://www ou http://www</p>
        `)
    }
})

clear.addEventListener("click", function clear() {
    textInput.value = ""
    returnQr.innerHTML = ""
})
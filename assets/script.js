var textInput = document.querySelector("#text-input")
var returnQr = document.querySelector("#return-qr")

function gerar() {
    if (textInput.value.startsWith("http")) {
        returnQr.innerHTML = ""
        returnQr.insertAdjacentHTML('afterbegin', /*html*/`
        <img src="https://www.qrtag.net/api/qr_transparent_360.png?url=${textInput.value}" alt="qr code" id="qr-image">
        `)
    } else {
        returnQr.insertAdjacentHTML("afterbegin", /*html*/ `
        <p>Endereço inválido</p>
        <p>O Endereço deve começar com: https://www ou http://www</p>
        `)
    }
}
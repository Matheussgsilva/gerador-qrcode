var textInput = document.querySelector("#text-input").value
var returnQr = document.querySelector("#return-qr")

function gerar() {
    returnQr.insertAdjacentHTML('afterbegin', /*html*/`
    <img src="https://www.qrtag.net/api/qr_transparent_360.png?url=https://www.github.com/matheussgsilva" alt="qr code" id="qr-image">
    `)
}
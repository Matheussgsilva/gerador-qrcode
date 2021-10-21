var textInput = document.querySelector("#text-input")
var returnQr = document.querySelector("#return-qr")
var generate = document.querySelector("#generate")
var clear = document.querySelector("#clear")

generate.addEventListener("click", function generate() {
    if (textInput.value.length > 0) {
        returnQr.innerHTML = ""
        returnQr.insertAdjacentHTML('afterbegin', /*html*/`
        <img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${textInput.value}" alt="qr code" id="qr-image">
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
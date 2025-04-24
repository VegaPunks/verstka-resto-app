const domElement = {
  bubbleBtnElement: ".bubble-button",
  bubleBlockElement: ".bubble"
}

const bubbleBtnElement = document.querySelector(domElement.bubbleBtnElement)
const bubleBlockElement = document.querySelector(domElement.bubleBlockElement)

bubbleBtnElement.addEventListener('click', e => {
    bubleBlockElement.classList.add("visually-hidden")
})

export default function modal (window, text, imgUrl) {
    const modal = window.document.createElement('div')
    const modalImg = window.document.createElement('img')
    const modalText = window.document.createElement('p')
    const modalButton = window.document.createElement('button')
    modalText.innerText = text ;
    modalImg.src = imgUrl;
    modal.classList.add("modal")
    modalImg.classList.add("modal__img")
    modalText.classList.add("modal__text")
    modalButton.classList.add("modal__button")
    modalButton.innerText = "Close";

    modalButton.addEventListener('click', () => {
      modal.style.display ="none"
    })

    modal.appendChild(modalImg)
    modal.appendChild(modalText)
    modal.appendChild(modalButton)

    return modal
}
export function  displayModal(e, imgUrl, dupa) {
    root.appendChild(modal(window, imgUrl , e.target.src))
 
}
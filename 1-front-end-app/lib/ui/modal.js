import {createElement, addChild, addProperties} from '../../utilities';

export default function modal(window, text, imgUrl) {
  
  const modal = createElement("div")
  addProperties(modal, "modal", "", "");
  const modalImg = createElement("img");
  addProperties(modalImg, "modal__img", "", imgUrl);
  const modalText = createElement("p");
  addProperties(modalText, "modal__text", text, "");
  const modalButton =  createElement("button");
  addProperties(modalButton, "modal__button", "Close", "");

  modalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  addChild(modal, modalImg)
  addChild(modal, modalText)
  addChild(modal, modalButton)

  return modal;
}
export function displayModal(e, imgUrl) {
  root.appendChild(modal(window, imgUrl, e.target.src));
}


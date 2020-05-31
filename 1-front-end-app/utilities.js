export function createElement(name) {
    return window.document.createElement(name)
}


export function addChild(element, child) {
    return element.appendChild(child)
}

export function addProperties (name, className, text, imgUrl) {
    return {
        class: name.classList.add(className),
        text: name.innerText = text,
        img: name.src = imgUrl
        }
}

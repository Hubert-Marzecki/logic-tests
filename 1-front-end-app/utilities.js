export function createElement(name) {
    return window.document.createElement(name)
}

export function addClassName(element, className) {
    return element.classList.add(className)
}

export function addText(element, text) {
    return element.innerText = text
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

// export function createss(name, element, className, text, imgUrl) {
//     name = createElement(element);
//    return addProperties(name, className,  text, imgUrl);
// }
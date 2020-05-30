import {createElement, addClassName, addText, addChild, addProperties} from '../../utilities';


export default function Header (window) {
  const headerElem = createElement('header')
  addProperties(headerElem, "header", "", "");
  
  const headerTitle = createElement('h1')
  addProperties(headerTitle, "header__title", "Facewall", "");

  addChild(headerElem, headerTitle)

  return headerElem
}

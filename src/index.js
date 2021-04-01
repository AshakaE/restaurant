import homeFunc from './home.js'
import menuFunc from './menu.js'
import contactFunc from './contact.js'

const content = document.getElementById("content");
const homeDiv = document.createElement("div");
const menuDivv = document.createElement("div");
const contactDiv = document.createElement("div");

const showContent = () => {
  content.appendChild(homeFunc(homeDiv));
  // console.log(menuFunc(menuDivv));
  content.appendChild(menuFunc(menuDivv));
  content.appendChild(contactFunc(contactDiv));
};

showContent();
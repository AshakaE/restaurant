import homeFunc from './home.js'
import homeFunc from './menu.js'
import homeFunc from './contact.js'

const content = document.getElementById("content");
const homeDiv = document.createElement("div");
const menuDiv = document.createElement("div");
const contactDiv = document.createElement("div");

const showContent = () => {
  content.appendChild(homeFunc(homeDiv));
  content.appendChild(menuFunc(menuDiv));
  content.appendChild(contactFunc(contactDiv));
};

showContent();
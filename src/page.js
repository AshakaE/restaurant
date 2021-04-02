
import contactFunc from './contact';

const content = document.getElementById('content');
const contactDiv = document.createElement('div');

showNav()
// showMenu()
const showContent = () => { 
  content.appendChild(contactFunc(contactDiv));

  return
};

export {showNav, showMenu, showHome};
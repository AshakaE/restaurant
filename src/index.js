import homeFunc from './home';
import menuFunc from './menu';
import contactFunc from './contact';
import showNav from './nav';
// import { showNav } from './page';

const content = document.getElementById('content');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');

showNav()
const showContent = () => {
  content.appendChild(homeFunc(homeDiv));
  content.appendChild(menuFunc(menuDiv));
  content.appendChild(contactFunc(contactDiv));
};

showContent();
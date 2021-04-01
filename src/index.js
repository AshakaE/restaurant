import homeFunc from './home';
import menuFunc from './menu';
import contactFunc from './contact';
import navFunc from './nav';

const content = document.getElementById('content');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');
const navDiv = document.createElement('div');

const showContent = () => {
  content.appendChild(navFunc(navDiv));
  content.appendChild(homeFunc(homeDiv));
  content.appendChild(menuFunc(menuDiv));
  content.appendChild(contactFunc(contactDiv));
};

showContent();
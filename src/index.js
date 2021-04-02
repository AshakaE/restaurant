import showContact from './contact';
import showHome from './home';
import showMenu from './menu';
import showNav from './nav';
// import {showNav, showContent} from './page'

showNav()
// showContact()
// showMenu()
// showHome()
// showContent()

const content = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
const tabMethods = [showHome, showMenu, showContact];

const openTab = (index) => {
  content.innerHTML = '';

  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].classList.remove('indicator');
  }

  tabs[index].classList.add('indicator');
  tabMethods[index]();
};

for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = openTab.bind(null, i);
}
  
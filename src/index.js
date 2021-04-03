import showHome from './home';
import showMenu from './menu';
import showNav from './nav';
import showContact from './contact';

const content = document.getElementById('content');
const homeDiv = document.createElement('div');
homeDiv.id = 'home';
homeDiv.classList.add(
  'top-bg',
  'homeContainer',
);
content.appendChild(homeDiv);

showNav();
showHome();
const tabs = document.querySelectorAll('.tab');
const tabMethods = [showHome, showMenu, showContact];
const home = document.querySelector('#home');
const openTab = (index) => {
  home.innerHTML = '';
  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].classList.remove('indicator');
  }
  tabs[index].classList.add('indicator');
  tabMethods[index]();
};
for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = openTab.bind(null, i);
}

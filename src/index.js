
import showHome from './home';
import showMenu from './menu';
import showNav from './nav';

const content = document.getElementById('content');

const renderPage = (location, page) => {
  location.replaceChildren()
  page();
};
showNav()
showHome()
// const tabButton = document.querySelectorAll('.tab');

//   const home = document.getElementById('hm');
//   const one = document.getElementById('home');
//   const menu = document.getElementById('mn');
//   const two = document.getElementById('menu');
//   const contact = document.getElementById('cn');

  // tabButton.forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     if (e.target.textContent === 'Home') {
  //      home.classList.add('indicator') 
  //      menu.classList.remove('indicator') 
  //      contact.classList.remove('indicator') 
  //       one.classList.add('show')
  //     }
  //     if (e.target.textContent === 'Menu') {
  //       home.classList.remove('indicator') 
  //       menu.classList.add('indicator') 
  //       contact.classList.remove('indicator') 
  //       one.classList.add('hide')
  //       showMenu().remove()
  //       showMenu()
  //       // renderPage(content, showMenu)
  //     }
  //     if (e.target.textContent === 'Contact') {
  //      home.classList.remove('indicator') 
  //      menu.classList.remove('indicator') 
  //      contact.classList.add('indicator') 
        
  //     }
  //   });
  // });

// const item = document.querySelector('.item');  
const tabs = document.querySelectorAll('.tab');
const tabMethods = [showHome, showMenu];

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
  
const content = document.getElementById('content');
const navDiv = document.createElement('div');

const navFunc = (navDiv) => {
  const navOne = document.createElement('div');
  const navTwo = document.createElement('div');
  const navThree = document.createElement('div');

  navDiv.classList.add('tabs', 'nav-container', 'text-white');
  navOne.classList.add('home', 'nav-style', 'indicator');
  navOne.textContent = 'Home';
  navTwo.classList.add('menu', 'nav-style');
  navTwo.textContent = 'Menu';
  navThree.classList.add('contact', 'nav-style');
  navThree.textContent = 'Contact';

  navDiv.appendChild(navOne);
  navDiv.appendChild(navTwo);
  navDiv.appendChild(navThree);

  return navDiv;
}

const showNav = () => {
  content.insertAdjacentElement('beforebegin', navFunc(navDiv))
}

export default showNav;
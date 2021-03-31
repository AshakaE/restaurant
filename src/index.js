const content = document.getElementById("content");
const homeDiv = document.createElement("div");
const menuDiv = document.createElement("div");
const contactDiv = document.createElement("div");

const homeFunc = () => {
  const homeDivOne = document.createElement("div");
  const homeDivTwo = document.createElement("div");
  const heading = document.createElement("h1");
  const paragragh = document.createElement("p");

  homeDiv.id = "home";
  homeDiv.classList.add(
    "top-bg",
    "homeContainer"
  );
  homeDivOne.classList.add("homeContent",);
  homeDivTwo.classList.add("homeBox");
  heading.classList.add("homeTitle");
  paragragh.classList.add("homePg");
  
  heading.textContent = "Welcome to Alorr!";
  paragragh.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cupiditate, ipsum saepe odio sint neque facilis quod culpa animi, dolorem consequuntur consequatur. Ea, ex voluptatum! Quam, ratione dolorum? In, reiciendis nihil. Minima saepe iure ut ex praesentium. Quidem esse repellendus molestias similique expedita illum?";

  homeDivTwo.appendChild(heading);
  homeDivTwo.appendChild(paragragh);
  homeDivOne.appendChild(homeDivTwo);
  homeDiv.appendChild(homeDivOne);


  return homeDiv;
}

const menuFunc = () => {
  const heading = document.createElement("h2");
  const container = document.createElement("div");
  const gridBox = document.createElement("div");
  const boxOne = document.createElement("div");
  const boxTwo = document.createElement("div");
  const boxThree = document.createElement("div");
  const boxFour = document.createElement("div");
  const boxOneContainer = document.createElement("div");
  const boxTwoContainer = document.createElement("div");
  const boxThreeContainer = document.createElement("div");
  const boxFourContainer = document.createElement("div");
  const boxImgOne = document.createElement("img");
  const boxImgTwo = document.createElement("img");
  const title = document.createElement("h4");
  const paragraph = document.createElement("p");
  const paragraphText = "Doloremque omnis exercitationem nulla ratione perferendis, quam, incidunt earum assumenda eius.";
  menuDiv.id = "menu";
  menuDiv.classList.add(
    "menu-bg",
    "menuContainer"
  );
  heading.textContent = "Special menu";
  heading.classList.add("menuTitle");
  container.classList.add("menu-v");
  gridBox.classList.add("menuGrid");
  boxOneContainer.classList.add("grid-iv")
  boxOne.classList.add("gridItem");
  boxImgOne.src = "../assets/img/6.jpg";
  boxImgOne.alt = "Peppered Rice";
  boxImgOne.classList.add("gridImage");
  title.textContent = "Peppered Rice";
  title.classList.add("gridTitle");
  paragraph.textContent = paragraphText;
  paragraph.classList.add("gridPg");

  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  gridBox.appendChild(boxOne);
  boxOne.appendChild(boxImgOne);
  boxOne.appendChild(boxOneContainer);
  boxOneContainer.appendChild(title);
  boxOneContainer.appendChild(paragraph);

  return menuDiv
}

const contactFunc = () => {
  const contactDivOne = document.createElement("div");
  const contactDivTwo = document.createElement("div");
  const title = document.createElement("h2");
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const sOne = document.createElement("span");
  const sTwo = document.createElement("span");
  
  contactDiv.id = "contact";
  contactDiv.classList.add("contact-bg", "contactContainer");
  contactDivOne.classList.add("contactContent")
  contactDivTwo.classList.add("contactBox");
  title.classList.add("contactTitle");
  title.textContent = "Contact us"
  sOne.classList.add("contactSpan");
  sOne.textContent = "alorr@alorr.com";
  sTwo.classList.add("contactSpan");
  sTwo.textContent = "+234-111-000-17";
  pOne.textContent = "Email: ";
  pTwo.textContent = "Phone: ";

  contactDiv.appendChild(contactDivOne);
  contactDivOne.appendChild(contactDivTwo);
  contactDivTwo.appendChild(title);
  contactDivTwo.appendChild(pOne);
  contactDivTwo.appendChild(pTwo);
  pOne.appendChild(sOne);
  pTwo.appendChild(sTwo);

  return contactDiv
}

const showContent = () => {

  content.appendChild(homeFunc(homeDiv));
  content.appendChild(menuFunc(menuDiv));
  content.appendChild(contactFunc(contactDiv));
};

showContent();
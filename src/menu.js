const menuFunc = (menuDiv) => {
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
  const titleOne = document.createElement("h4");
  const titleTwo = document.createElement("h4");
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

  boxOne.classList.add("gridItem");
  boxTwo.classList.add("gridItem");
  boxThree.classList.add("gridItem");
  boxFour.classList.add("gridItem");

  boxImgOne.classList.add("gridImage");
  boxImgTwo.classList.add("gridImage");

  boxOneContainer.classList.add("grid-iv");
  boxTwoContainer.classList.add("grid-iv");
  boxThreeContainer.classList.add("grid-iv");
  boxFourContainer.classList.add("grid-iv");

  titleOne.textContent = "Peppered Rice";
  titleOne.classList.add("gridTitle");

  titleTwo.textContent = "Huevos Rotos";
  titleTwo.classList.add("gridTitle");

  paragraph.textContent = paragraphText;
  paragraph.classList.add("gridPg");

  boxImgOne.src = "../assets/img/6.jpg";
  boxImgTwo.src = "../assets/img/11.png";

  boxImgOne.alt = "Peppered Rice";
  boxImgTwo.alt = "Huevos Rotos";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);

  gridBox.appendChild(boxOne);
  boxOne.appendChild(boxImgOne);
  boxOne.appendChild(boxOneContainer);
  boxOneContainer.appendChild(titleOne);
  boxOneContainer.appendChild(paragraph);

  // gridBox.appendChild(boxTwo);
  // boxTwo.appendChild(boxImgTwo);
  // boxTwo.appendChild(boxTwoContainer);
  // boxTwoContainer.appendChild(titleTwo);
  // boxTwoContainer.appendChild(paragraph);

  // gridBox.appendChild(boxThree);
  // boxThree.appendChild(boxImgOne);
  // boxThree.appendChild(boxThreeContainer);
  // boxThreeContainer.appendChild(titleTwo);
  // boxThreeContainer.appendChild(paragraph);
  
  // gridBox.appendChild(boxFour);
  // boxFour.appendChild(boxImgTwo);
  // boxFour.appendChild(boxFourContainer);  
  // boxFourContainer.appendChild(titleOne);
  // boxFourContainer.appendChild(paragraph);

  return menuDiv
}

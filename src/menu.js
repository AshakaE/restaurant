// import { info } from "autoprefixer";

function boxElement(){
  let box = [];
  let pic = true;
    for (let i = 0; i < 4; i += 1) {
      const boxContent = boxInfo().infoDiv
      boxContent.appendChild(boxInfo().infoTitle);
      boxContent.appendChild(boxInfo().infoSub);
      let any = document.createElement("div");
      any.classList.add("gridItem");
      if (pic) {
        any.appendChild(image().imgOne);
        pic = false
      } else {
        any.appendChild(image().imgTwo);
        pic = true
      }
      any.appendChild(boxInfo().infoDiv);
      any.appendChild(boxContent);
      box.push(any)
      // console.log(box[i]);
    };
    console.log(box)
    return {box};
  };

const image = () => {
  let imgOne = document.createElement("img");
  let imgTwo = document.createElement("img");
  imgOne.classList.add("gridImage");
  imgTwo.classList.add("gridImage");
  imgOne.src = "../assets/img/6.jpg";
  imgTwo.src = "../assets/img/11.png";

  return {imgOne, imgTwo};
};

const boxInfo = () => {
  const infoDiv = document.createElement("div");
  const infoTitle = document.createElement("h4");
  const infoSub = document.createElement("p");
  infoDiv.classList.add("grid-iv");
  infoTitle.classList.add("gridTitle");
  infoTitle.textContent = "Peppered Rice";
  infoSub.classList.add("gridPg");
  infoSub.textContent = "Doloremque omnis exercitationem nulla ratione perferendis, quam, incidunt earum assumenda eius.";
  return {infoDiv, infoTitle, infoSub};
};

const menuFunc = (menuDiv) => {
  const heading = document.createElement("h2");
  const container = document.createElement("div");
  const gridBox = document.createElement("div");
  let box = boxElement()
  box = Object.entries(box)
  console.log(box)
  box = box[0][1]
  menuDiv.id = "menu";
  menuDiv.classList.add(
    "menu-bg",
    "menuContainer"
  );
  
  heading.textContent = "Special menu";
  heading.classList.add("menuTitle");
  container.classList.add("menu-v");
  gridBox.classList.add("menuGrid");
  // console.log(box);
  // box.forEach(element => {  
  //   gridBox.appendChild(element);
  // });
  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  console.log(box)
  for (let a = 0; a < box.length; a += 1) {

    gridBox.appendChild(box[a]); 
  }
  return menuDiv
}

export default menuFunc
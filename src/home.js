const homeFunc = (homeDiv) => {
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

export default homeFunc
const content = document.getElementById("content");
const homeDiv = document.createElement("div");
const menuDiv = document.createElement("div");

const homeFunc = () => {
  const homeDivOne = document.createElement("div");
  const homeDivTwo = document.createElement("div");
  const heading = document.createElement("h1");
  const paragragh = document.createElement("p");

  homeDiv.id = "home";
  homeDiv.classList.add(
    "top-bg",
    "min-h-screen",
    "flex",
    "justify-center",
    "items-center",
    "p-4"
  );
  homeDivOne.classList.add(
    "text-center",
    "bg-yellow-600",
    "p-3",
    "rounded-lg",
    "bg-opacity-60",
    "flex",
    "justify-center",
    "flex-col"
    );
  homeDivTwo.classList.add(
    "bg-gray-600",
    "bg-opacity-80",
    "rounded-lg",
    "p-3",
    "sm:p-5"
  );
  heading.classList.add(
    "text-2xl",
    "md:text-3xl",
    "lg:text-5xl",
    "font-bold",
    "uppercase",
    "pb-10"
  );
  paragragh.classList.add(
    "sm:text-md",
    "md:text-xl",
    "lg:text-2xl"
  )
  
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
  const boxOneContainer = document.createElement("div");
  const boxImg = document.createElement("img");
  const title = document.createElement("h4");
  const paragraph = document.createElement("p");

  // const boxTwo = document.createElement("div");
  // const boxThree = document.createElement("div");
  // const boxFour = document.createElement("div");
  // const boxDesign = ["flex", "items-center",
  //   "bg-gray-700",
  //   "bg-opacity-60",
  //   "rounded-lg",
  //   "p-3" ;

  menuDiv.id = "menu";
  menuDiv.classList.add(
    "menu-bg",
    "min-h-screen",
    "flex",
    "justify-center",
    "items-center",
    "flex-col"
  );
  heading.textContent = "Special menu";
  heading.classList.add(
    "pb-10",
    "text-lg",
    "sm:text-2xl",
    "md:text-4xl",
    "font-semibold",
    "uppercase"
  );
  container.classList.add("p-5");
  gridBox.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "gap-3",
    "p-4",
    "md:p-8",
    "bg-opacity-50",
    "bg-yellow-600",
    "rounded-lg"
  );
  boxOneContainer.classList.add("pl-4")
  boxOne.classList.add(
    "flex",
    "items-center",
    "bg-gray-700",
    "bg-opacity-60",
    "rounded-lg",
    "p-3"
  );
  boxImg.src = "../assets/img/6.jpg";
  boxImg.alt = "Peppered Rice";
  boxImg.classList.add(
    "h-20",
    "w-20",
    "sm:h-32",
    "sm:w-32",
    "md:h-40",
    "object-cover",
    "md:w-40",
    "rounded-3xl",
    "lg:h-60",
    "lg:w-60"
  );
  title.textContent = "Peppered Rice";
  title.classList.add(
    "text-lg",
    "sm:text-xl",
    "md:text-3xl",
    "font-bold"
  );
  paragraph.textContent =
    "Doloremque omnis exercitationem nulla ratione perferendis, quam, incidunt earum assumenda eius.";
  paragraph.classList.add(
    "text-xs",
    "sm:text-sm",
    "md:text-md",
    "lg:text-2xl",
    "mt-4"
  );
  // gridBox.appendChild(boxFour);
  // gridBox.appendChild(boxThree);
  // gridBox.appendChild(boxTwo);
  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  gridBox.appendChild(boxOne);
  boxOne.appendChild(boxImg);
  boxOne.appendChild(boxOneContainer);
  boxOneContainer.appendChild(title);
  boxOneContainer.appendChild(paragraph);

  return menuDiv
}

const showContent = () => {

  content.appendChild(homeFunc(homeDiv));
  content.appendChild(menuFunc(menuDiv));
};

showContent();
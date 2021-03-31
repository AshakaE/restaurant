const content = document.getElementById("content");
const homeDiv = document.createElement("div");

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

const showContent = () => {
  
  content.appendChild(homeFunc(homeDiv));
};

showContent();
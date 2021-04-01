const contactFunc = (contactDiv) => {
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

export default contactFunc
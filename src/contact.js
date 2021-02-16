const createContact = (mainContent) => {
  const contactSection = document.createElement("section");
  contactSection.classList.add("page-section");

  /*const imgSide = document.createElement("img");
  imgSide.classList.add("aboutus-img");

  const paraOne = document.createElement("p");
  paraOne.classList.add("aboutus-par-one");
  paraOne.textContent = "lorem lorem lorem lorem ";

  contactSection.appendChild(imgSide);
  contactSection.appendChild(paraOne);*/

  mainContent.appendChild(contactSection);
};

export { createContact };

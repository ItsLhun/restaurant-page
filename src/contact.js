const createContact = (mainContent) => {
  const contactSection = document.createElement("section");
  contactSection.classList.add("page-section");

  /*  contactSection.appendChild(menuOne);
  contactSection.appendChild(menuTwo);
  contactSection.appendChild(menuThree);*/

  mainContent.appendChild(contactSection);
};

export { createContact };

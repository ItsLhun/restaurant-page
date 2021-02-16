const createMenu = (mainContent) => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("page-section");

  // TO-DO: create factory function for plates and sections

  const menuOne = document.createElement("div");
  const menuOneTitle = document.createElement("h2");
  menuOneTitle.textContent = "Entrees";
  menuOne.appendChild(menuOneTitle);
  menuOne.style.background = "red";
  menuOne.classList.add("menu-side");

  const menuTwo = document.createElement("div");
  const menuTwoTitle = document.createElement("h2");
  menuTwoTitle.textContent = "Main courses";
  menuTwo.appendChild(menuTwoTitle);

  menuTwo.style.background = "green";
  menuTwo.classList.add("menu-side");

  const menuThree = document.createElement("div");
  const menuThreeTitle = document.createElement("h2");
  menuThreeTitle.textContent = "Dessers";
  menuThree.appendChild(menuThreeTitle);

  menuThree.style.background = "purple";
  menuThree.classList.add("menu-side");

  const menuFour = document.createElement("div");
  const menuFourTitle = document.createElement("h2");
  menuFourTitle.textContent = "Drinks";
  menuFour.appendChild(menuFourTitle);

  menuFour.style.background = "purple";
  menuFour.classList.add("menu-side");

  menuSection.appendChild(menuOne);
  menuSection.appendChild(menuTwo);
  menuSection.appendChild(menuThree);
  menuSection.appendChild(menuFour);

  mainContent.appendChild(menuSection);
};

export { createMenu };

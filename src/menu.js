const createMenu = (mainContent) => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("page-section");

  const menuOne = document.createElement("div");
  menuOne.textContent = "menu one";
  menuOne.style.background = "red";
  menuOne.classList.add("menu-side");

  const menuTwo = document.createElement("div");
  menuTwo.textContent = "menu two";
  menuTwo.style.background = "green";
  menuTwo.classList.add("menu-side");

  const menuThree = document.createElement("div");
  menuThree.textContent = "menu other";
  menuThree.style.background = "purple";
  menuThree.classList.add("menu-side");

  menuSection.appendChild(menuOne);
  menuSection.appendChild(menuTwo);
  menuSection.appendChild(menuThree);

  mainContent.appendChild(menuSection);
};

export { createMenu };

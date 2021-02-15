const createMenu = (mainContent) => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("page-section");

  const menuLeft = document.createElement("div");
  menuLeft.textContent = "menu left";
  menuLeft.style.background = "red";
  menuLeft.classList.add("menu-side");

  const menuRight = document.createElement("div");
  menuRight.textContent = "menu right";
  menuRight.style.background = "green";
  menuRight.classList.add("menu-side");

  menuSection.appendChild(menuLeft);
  menuSection.appendChild(menuRight);
  mainContent.appendChild(menuSection);
};

export { createMenu };

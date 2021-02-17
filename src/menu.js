const createMenu = (mainContent) => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("page-section");

  // TO-DO: create factory function for plates and sections

  function createMenuSection(title) {
    const menuOne = document.createElement("div");
    const menuOneTitle = document.createElement("h2");
    menuOneTitle.classList.add("menu-section-title");
    menuOneTitle.textContent = title;
    menuOne.appendChild(menuOneTitle);
    menuOne.style.background = "red";
    menuOne.classList.add("menu-side");
    return menuOne;
  }
  function createDish(menuSubsection, dishname, price, description) {
    const dishWrapper = document.createElement("div");
    const dishTitle = document.createElement("h4");
    const dishDesc = document.createElement("p");
    const dishPrice = document.createElement("p");
    dishWrapper.appendChild(dishTitle);
    dishWrapper.appendChild(dishDesc);
    dishWrapper.appendChild(dishPrice);
    menuSubsection.appendChild(dishWrapper);
    dishWrapper.classList.add("dish-wrapper");
    dishPrice.classList.add("price");
    dishTitle.textContent = dishname;
    dishDesc.textContent = description;
    dishPrice.textContent = `€ ${price}`;
  }

  //create subsections
  const menuOne = createMenuSection("Entrees");
  const menuTwo = createMenuSection("Main courses");
  const menuThree = createMenuSection("Desserts");
  const menuFour = createMenuSection("Drinks");

  // create dishes
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward best quality forward "
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );
  createDish(
    menuOne,
    "Burrata Salad",
    15,
    "A combination of fresh ingredients to bring the best quality forward"
  );

  menuSection.appendChild(menuOne);
  menuSection.appendChild(menuTwo);
  menuSection.appendChild(menuThree);
  menuSection.appendChild(menuFour);

  mainContent.appendChild(menuSection);
};

export { createMenu };

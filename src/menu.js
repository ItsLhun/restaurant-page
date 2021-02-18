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
  const menuEntree = createMenuSection("Entrees");
  const menuMain = createMenuSection("Main courses");
  const menuDessert = createMenuSection("Desserts");
  const menuDrink = createMenuSection("Drinks");

  // Entree dishes
  createDish(
    menuEntree,
    "—  Grilled Octopus  —",
    18,
    "With bay, whole peppercorns and a touch of lemon"
  );
  createDish(
    menuEntree,
    "—  Steak tartar  —",
    12,
    "With butter and a subtle touch or seasonal herbs"
  );
  createDish(
    menuEntree,
    "—  Patatas bravas  —",
    9,
    "A spanish classic, done our way"
  );
  createDish(
    menuEntree,
    "—  Mi-cuit foie  —",
    15,
    "With onion marmalade and volcanic salt"
  );
  createDish(
    menuEntree,
    "—  Heirloom Tomato Salad  —",
    15,
    "Seasonal farm special, only available on summer"
  );
  createDish(
    menuEntree,
    "—  Heirloom Tomato Salad  —",
    15,
    "Seasonal farm special, only available on summer"
  );
  createDish(
    menuEntree,
    "—  Fruit Gazpacho  —",
    8,
    "Watermelon, blueberries, strawberries"
  );

  // main
  createDish(
    menuMain,
    "—  Smoked Trout  —",
    28,
    "Whole lake trout smoked with oyster sauce. Served with grilled leeks"
  );
  createDish(
    menuMain,
    "—  Lobster  —",
    42,
    "2 lb. Corpus Christi lobster boiled in seawater and sage. Served with clarified butter, spinach"
  );
  createDish(
    menuMain,
    "—  Venison Loin  —",
    25,
    "8 oz. tenderloin marinated in whiskey and horseradish sauce. Served with grilled mushrooms and mashed potatoes"
  );
  createDish(
    menuMain,
    "—  Bison Prime Rib  —",
    29,
    "10 oz. prime rib with red wine reduction. Served with asparagus, heirloom tomatoes, and roasted potatoes"
  );
  createDish(
    menuMain,
    "—  Pork Ribs  —",
    19,
    "Six BBQ ribs smothered in Hunter’s secret marinade"
  );
  createDish(
    menuMain,
    "—  Mutton Stew  —",
    22,
    "Tenderized mutton, carrots, celery, tomatoes, onion, rosemary, and black pepper. Served with two sourdough biscuits"
  );

  // Dessert
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );
  createDish(
    menuDessert,
    "—  Spiced Apple Crumble  —",
    8,
    "Smoked vanilla bean, cinnamon"
  );

  // Drinks
  createDish(
    menuDrink,
    "—  Cactus Wine  —",
    10,
    "100% blue agave tequila with sun-brewed peyote tea and honey liqueur"
  );
  createDish(
    menuDrink,
    "—  Mule Skinner  —",
    10,
    "Kentucky bourbon stirred with housemade blackberry liqueur. Served in a lowball glass with ginger garnish"
  );
  createDish(
    menuDrink,
    "—  Classic Sazerac  —",
    10,
    "Bitters muddled with a sugar cube and mixed with rye whiskey"
  );
  createDish(
    menuDrink,
    "—  Sherry Sangaree  —",
    10,
    "Sherry shaken with honey liqueur. Served in a cordial glass with an orange twist"
  );
  createDish(
    menuDrink,
    "—  Snake Oil  —",
    10,
    "Gin and absinthe muddled with mint and sugar. Served in a highball glass with a spritz of lime juice"
  );
  createDish(
    menuDrink,
    "—  Merlot  —",
    14,
    "Viñedo Mirlo. Apalta, Chile 2012. Dry. Full body. Velvety tannins. Blackberry and plum notes"
  );
  createDish(
    menuDrink,
    "—  Pinot Grigio  —",
    15,
    "Nebula. Willamette Valley, Oregon 2012. Bone Dry. Full body. Very light tannins. Pear and pepper notes"
  );
  createDish(
    menuDrink,
    "—  Sauvignon Blanc  —",
    12,
    "Château Faurier. La Vallée Loire, France 2011. Dry. Medium Body"
  );

  menuSection.appendChild(menuEntree);
  menuSection.appendChild(menuMain);
  menuSection.appendChild(menuDessert);
  menuSection.appendChild(menuDrink);

  mainContent.appendChild(menuSection);
};

export { createMenu };

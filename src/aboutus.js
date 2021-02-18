const createAbout = (mainContent) => {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("page-section");

  const imgSide = document.createElement("img");
  imgSide.classList.add("aboutus-img");

  const paraOne = document.createElement("p");
  paraOne.classList.add("aboutus-par-one");
  const subparaOne = document.createElement("p");
  const subparaTwo = document.createElement("p");

  paraOne.appendChild(subparaOne);
  paraOne.appendChild(subparaTwo);

  const subparaThree = document.createElement("p");
  const subparaFour = document.createElement("p");

  subparaThree.classList.add("quote-text");
  subparaFour.classList.add("quote-text");

  paraOne.appendChild(subparaThree);
  paraOne.appendChild(subparaFour);

  subparaOne.textContent = `Founded in 1955 by the legendary Mick Eissentan, NOMAD was established as a modern beacon to the bold and inconformists of the time. An inviting palace free of judgements and  ill intentions where everyone is welcome to join the conversation.`;
  subparaTwo.textContent = `To this day we stand faithful to NOMAD's original spirit, every evolving but never changing. Welcome!`;

  subparaThree.textContent = `"Part of the secret to success in life is to eat what you like, and let the food fight it out inside."`;
  subparaFour.textContent = `- Mark Twain`;

  aboutSection.appendChild(imgSide);
  aboutSection.appendChild(paraOne);

  mainContent.appendChild(aboutSection);
};

export { createAbout };

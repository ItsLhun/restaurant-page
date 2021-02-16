const createAbout = (mainContent) => {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("page-section");

  const imgSide = document.createElement("img");
  imgSide.classList.add("aboutus-img");

  const paraOne = document.createElement("p");
  paraOne.classList.add("aboutus-par-one");
  paraOne.textContent = "lorem lorem lorem lorem ";

  aboutSection.appendChild(imgSide);
  aboutSection.appendChild(paraOne);

  mainContent.appendChild(aboutSection);
};

export { createAbout };

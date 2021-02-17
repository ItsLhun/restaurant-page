const createReservation = (mainContent) => {
  const reserveSection = document.createElement("section");
  reserveSection.classList.add("page-section");

  const leftWrap = document.createElement("div");
  const leftTitle = document.createElement("h3");
  const rightWrap = document.createElement("div");

  /*const imgSide = document.createElement("img");
  imgSide.classList.add("aboutus-img");

  const paraOne = document.createElement("p");
  paraOne.classList.add("aboutus-par-one");
  paraOne.textContent = "lorem lorem lorem lorem ";

  contactSection.appendChild(imgSide);
  contactSection.appendChild(paraOne);*/

  mainContent.appendChild(reserveSection);
};

export { createReservation };

const btnArrays = [];
function createNav(mainContent) {
  const navDiv = document.createElement("nav");
  const btnWrapper = document.createElement("ul");
  btnWrapper.classList.add("nav-btn-wrapper");
  const btnIntro = document.createElement("button");
  btnIntro.textContent = "HOME";
  btnArrays.push(btnIntro);
  const btnMenu = document.createElement("button");
  btnMenu.textContent = "MENU";
  btnArrays.push(btnMenu);
  const btnContact = document.createElement("button");
  btnContact.textContent = "CONTACT";
  btnArrays.push(btnContact);
  const btnAbout = document.createElement("button");
  btnAbout.textContent = "ABOUT US";
  btnArrays.push(btnAbout);
  const btnReservations = document.createElement("button");
  btnReservations.classList.add("reservation-btn");
  btnReservations.textContent = "RESERVATION";
  btnArrays.push(btnReservations);
  btnArrays.forEach((e) => {
    const navElem = document.createElement("li");
    navElem.classList.add("navbar-item");
    navElem.appendChild(e);
    btnWrapper.appendChild(navElem);
    e.classList.add("nav-btn");
  });
  navDiv.appendChild(btnWrapper);
  mainContent.appendChild(navDiv);
}

export { btnArrays, createNav };

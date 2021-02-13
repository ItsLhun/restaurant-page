function createIntro(mainContent) {
  const createNav = () => {
    const navDiv = document.createElement("nav");
    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("nav-btn-wrapper");
    const btnArrays = [];
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
      btnWrapper.appendChild(e);
      e.classList.add("nav-btn");
    });
    navDiv.appendChild(btnWrapper);
    mainContent.appendChild(navDiv);
  };
  const createHeader = () => {
    const titleHeadWrapper = document.createElement("header");
    const titleHead = document.createElement("h1");
    titleHeadWrapper.setAttribute("id", "header");
    titleHeadWrapper.appendChild(titleHead);
    titleHead.textContent = "Nomad";
    titleHead.classList.add("title-head");
    mainContent.appendChild(titleHeadWrapper);
  };
  createNav();
  createHeader();
}

export { createIntro as createIntro };

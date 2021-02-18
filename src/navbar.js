const btnArrays = [];
function createNav(mainContent) {
  const navDiv = document.createElement("nav");

  const btnWrapper = document.createElement("ul");
  btnWrapper.classList.add("nav-btn-wrapper");
  btnWrapper.classList.add("nav-btn-light");

  const btnIntro = document.createElement("button");
  btnIntro.textContent = "HOME";
  btnArrays.push(btnIntro);
  const btnMenu = document.createElement("button");
  btnMenu.textContent = "MENU";
  btnArrays.push(btnMenu);

  const btnAbout = document.createElement("button");
  btnAbout.textContent = "ABOUT US";
  btnArrays.push(btnAbout);
  const btnReservations = document.createElement("button");
  btnReservations.classList.add("reservation-btn");
  btnReservations.textContent = "RESERVATION";
  btnArrays.push(btnReservations);
  btnArrays.forEach((e) => {
    e.classList.add("nav-btn-light");
    const navElem = document.createElement("li");
    navElem.classList.add("navbar-item");
    navElem.appendChild(e);
    btnWrapper.appendChild(navElem);
    e.classList.add("nav-btn");
    e.addEventListener("click", () => {
      btnArrays.forEach((elem) => {
        elem.classList.remove("active-nav-btn");
      });
      if (e.textContent === "HOME") {
        btnArrays.forEach((e) => {
          e.classList.remove("nav-btn-dark");
          e.classList.add("nav-btn-light");
        });
      } else {
        btnArrays.forEach((e) => {
          e.classList.add("nav-btn-dark");
          e.classList.remove("nav-btn-light");
        });

        e.classList.add("active-nav-btn");
      }
    });
  });
  navDiv.appendChild(btnWrapper);
  mainContent.appendChild(navDiv);
}

export { btnArrays, createNav };

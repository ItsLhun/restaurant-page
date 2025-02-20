import { btnArrays, createNav } from "./navbar.js";
import { createIntro } from "./intropage.js";
import { createMenu } from "./menu.js";
import { createReservation } from "./reservation.js";
import { createAbout } from "./aboutus.js";

//two distinct sections, nav and dynamic section
const divContent = document.querySelector("#content");
createNav(divContent);
const dynamicSection = document.createElement("section");
dynamicSection.classList.add("section-wrapper");
divContent.appendChild(dynamicSection);

const navDiv = document.createElement("nav");

createIntro(dynamicSection);
document.body.style.background = `linear-gradient(rgba(2,2,2,.25), rgba(2,2,2,.25)), url("./img/462280.jpg")`;

for (let i = 0; i < btnArrays.length; i++) {
  btnArrays[i].addEventListener("click", (e) => {
    while (dynamicSection.firstChild) {
      dynamicSection.removeChild(dynamicSection.lastChild);
    }
    document.body.style.backgroundImage = "none";
    switch (i) {
      case 0:
        navDiv.classList.remove("nav-btn-dark");
        createIntro(dynamicSection);
        document.body.style.background = `linear-gradient(rgba(2,2,2,.25), rgba(2,2,2,.25)), url("./img/462280.jpg")`;
        break;
      case 1:
        createMenu(dynamicSection);
        break;
      case 2:
        createAbout(dynamicSection);
        break;
      case 3:
        createReservation(dynamicSection);
        break;
    }
  });
}

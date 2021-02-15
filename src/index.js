import { btnArrays, createNav } from "./navbar.js";
import { createIntro } from "./intropage.js";
import { createMenu } from "./menu.js";
import { contact } from "./contact.js";

//two distinct sections, nav and dynamic section
const divContent = document.querySelector("#content");
createNav(divContent);
const dynamicSection = document.createElement("section");
dynamicSection.classList.add("section-wrapper");
divContent.appendChild(dynamicSection);

createIntro(dynamicSection);

btnArrays.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log("button" + elem + "clicked");
    while (dynamicSection.firstChild) {
      dynamicSection.removeChild(dynamicSection.lastChild);
    }
  });
});
btnArrays[1].addEventListener("click", (e) => {
  createMenu(dynamicSection);
});

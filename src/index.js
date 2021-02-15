import { btnArrays, createNav } from "./navbar.js";
import { createIntro } from "./intropage.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

//two distinct sections, nav and dynamic section
const divContent = document.querySelector("#content");
createNav(divContent);
const dynamicSection = document.createElement("section");
dynamicSection.classList.add("section-wrapper");
divContent.appendChild(dynamicSection);

createIntro(dynamicSection);

for (let i = 0; i < btnArrays.length; i++) {
  btnArrays[i].addEventListener("click", (e) => {
    while (dynamicSection.firstChild) {
      dynamicSection.removeChild(dynamicSection.lastChild);
    }
    switch (i) {
      case 0:
        createIntro(dynamicSection);
        break;
      case 1:
        createMenu(dynamicSection);
        break;
      case 2:
        createContact(dynamicSection);
        break;
      case 3:
        //createContact(dynamicSection);
        break;
      case 4:
        //createContact(dynamicSection);
        break;
    }
  });
}

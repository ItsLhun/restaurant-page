const createIntro = (mainContent) => {
  const headWrapper = document.createElement("header");
  const createHeader = () => {
    const titlewrapper = document.createElement("div");
    const titleHead = document.createElement("h1");
    headWrapper.setAttribute("id", "header");
    headWrapper.appendChild(titleHead);
    titleHead.textContent = "NOMAD";
    titleHead.classList.add("title-head");
    titleHead.classList.add("intro-center");
  };
  createHeader();
  const createAddress = () => {
    const address = document.createElement("h2");
    headWrapper.appendChild(address);
    address.textContent = "'T ZAND 12, 8000 BRUGGER, BELGIUM";
    address.classList.add("address-desc");
    address.classList.add("intro-center");
  };
  createAddress();
  mainContent.appendChild(headWrapper);
};

export { createIntro };

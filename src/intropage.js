const createIntro = (mainContent) => {
  const titleHeadWrapper = document.createElement("header");
  const createHeader = () => {
    const titleHead = document.createElement("h1");
    titleHeadWrapper.setAttribute("id", "header");
    titleHeadWrapper.appendChild(titleHead);
    titleHead.textContent = "NOMAD";
    titleHead.classList.add("title-head");
    titleHead.classList.add("intro-center");
  };
  createHeader();
  const createAddress = () => {
    const address = document.createElement("h2");
    titleHeadWrapper.appendChild(address);
    address.textContent = "NOMAD";
    address.classList.add("address-desc");
    address.classList.add("intro-center");
  };
  createAddress();
  mainContent.appendChild(titleHeadWrapper);
};

export { createIntro };

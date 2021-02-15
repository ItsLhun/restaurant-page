const createIntro = (mainContent) => {
  const titleHeadWrapper = document.createElement("header");
  const createHeader = () => {
    const titleHead = document.createElement("h1");
    titleHeadWrapper.setAttribute("id", "header");
    titleHeadWrapper.appendChild(titleHead);
    titleHead.textContent = "NOMAD";
    titleHead.classList.add("title-head");
    mainContent.appendChild(titleHeadWrapper);
  };
  createHeader();
};

export { createIntro };

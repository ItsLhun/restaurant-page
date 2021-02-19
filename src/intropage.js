const createIntro = (mainContent) => {
  const headWrapper = document.createElement("header");
  const createHeader = () => {
    const titlewrapper = document.createElement("div");
    const titleHead = document.createElement("h1");
    headWrapper.setAttribute("id", "header");
    //titleHead.textContent = "NOMAD";
    titleHead.classList.add("title-head");
    titleHead.classList.add("intro-center");
    const N = document.createElement("span");
    N.textContent = "N";
    const O = document.createElement("span");
    O.textContent = "O";
    O.style.textDecoration = "underline";
    const M = document.createElement("span");
    M.textContent = "M";
    M.style.textDecoration = "underline";
    const A = document.createElement("span");
    A.textContent = "A";
    A.style.textDecoration = "underline";
    const D = document.createElement("span");
    D.textContent = "D";

    titleHead.appendChild(N);
    titleHead.appendChild(O);
    titleHead.appendChild(M);
    titleHead.appendChild(A);
    titleHead.appendChild(D);

    titlewrapper.appendChild(titleHead);
    headWrapper.appendChild(titlewrapper);
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

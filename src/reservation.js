const createReservation = (mainContent) => {
  const reserveSection = document.createElement("section");
  reserveSection.classList.add("page-section");
  reserveSection.classList.add("page-section-res");

  // left side
  const leftWrap = document.createElement("div");
  leftWrap.setAttribute("id", "reserve-left");
  const leftTitle = document.createElement("h3");
  leftTitle.textContent = "Reservations";
  const leftContent = document.createElement("p");
  leftContent.textContent =
    "For parties of six or more, we recommend making reservations at least two weeks in advance. For walk-ins, we seat parties on a first come, first served basis";
  leftWrap.appendChild(leftTitle);
  leftWrap.appendChild(leftContent);
  //right side
  const rightWrap = document.createElement("div");
  rightWrap.setAttribute("id", "reserve-right");
  const rightForm = document.createElement("form");
  rightWrap.appendChild(rightForm);
  rightForm.classList.add("form-div");

  // name input

  function makeInput(labelName, long) {
    const wrapperDiv = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("id", `${labelName}-input`);
    const label = document.createElement("label");
    label.setAttribute("for", `${labelName}-input`);
    label.textContent = `${labelName}`;
    if (long) {
      input.classList.add("long-input");
    } else {
      input.classList.add("short-input");
    }
    wrapperDiv.appendChild(label);
    wrapperDiv.appendChild(input);
    wrapperDiv.classList.add("form-div");
    rightForm.appendChild(wrapperDiv);
  }
  makeInput("Name", false);
  makeInput("Surname", false);
  makeInput("Email", true);
  makeInput("Phone", true);
  makeInput("Guests", false);
  makeInput("Comments", true);

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btnSubmit");
  btnSubmit.textContent = "SUBMIT";

  rightForm.appendChild(btnSubmit);
  reserveSection.appendChild(leftWrap);
  reserveSection.appendChild(rightWrap);

  mainContent.appendChild(reserveSection);
};

export { createReservation };

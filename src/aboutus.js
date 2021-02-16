const createAbout = (mainContent) => {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("page-section");

  const imgSide = document.createElement("img");
  imgSide.classList.add("aboutus-img");

  const paraOne = document.createElement("p");
  paraOne.classList.add("aboutus-par-one");
  paraOne.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex praesentium perspiciatis eveniet similique maiores sequi laborum provident labore, necessitatibus impedit corporis magni cum illum quaerat reprehenderit doloremque, nemo vel natus.
Unde, deserunt aperiam sunt aliquid qui ducimus, culpa assumenda debitis adipisci voluptatum, voluptates enim numquam porro sit ipsum. Doloremque, sit excepturi quibusdam asperiores accusantium magni quam expedita voluptatibus cupiditate porro?
Assumenda magni repellat aperiam illum nemo id temporibus eius exercitationem, repellendus consequuntur facere! Alias blanditiis repellat at molestiae perspiciatis, enim hic veritatis soluta accusantium amet dolorem, quis dolor, assumenda illum.
Ipsam minus facere, veniam totam neque accusantium cupiditate, expedita officia reprehenderit quidem, ab asperiores sapiente voluptatibus cum maxime aspernatur animi consequatur laboriosam esse? Veniam cupiditate tempore non beatae magnam nisi.
Quas suscipit corporis fuga ipsam eius quis alias culpa! Perspiciatis neque modi reprehenderit repellendus labore expedita iure eos possimus temporibus nulla. Dolorum in possimus eos ad quam, atque eveniet natus?
Nobis doloremque porro voluptatibus molestiae voluptate nihil itaque totam quos facere quibusdam debitis blanditiis officiis earum eaque sunt dicta reiciendis, temporibus ipsum, iusto culpa, quas deserunt doloribus. Rerum, maiores qui.`;

  aboutSection.appendChild(imgSide);
  aboutSection.appendChild(paraOne);

  mainContent.appendChild(aboutSection);
};

export { createAbout };

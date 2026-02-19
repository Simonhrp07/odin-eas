const parentContainer = document.querySelector(".container");
const generateBtn = document.querySelector("#generate");
const sizeBtn = document.querySelector("#getPixelSize");

generateBtn.addEventListener("click", () => {
  let widthParam = prompt("Width?");
  let heigthPAram = prompt("Heigth?");
  if (widthParam > 100) {
    widthParam = 100;
  }
  if (heigthPAram > 100) {
    heigthPAram = 100;
  }

  createGrid(widthParam, heigthPAram);
});

const createGrid = (pixLong, pixHaut) => {
  parentContainer.innerHTML = "";
  for (let col = 0; col < pixHaut; col++) {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parentDiv");
    parentContainer.appendChild(parentDiv);

    for (let row = 0; row < pixLong; row++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");

      parentDiv.appendChild(newDiv);

      newDiv.addEventListener("mouseover", (element) => {
        element.target.classList.add("activated");
      });
    }
  }
};

sizeBtn.addEventListener("click", () => {
  let sizeVal = document.querySelector("#pixelSize").value;
  if (sizeVal > 15) {
    sizeVal = 15;
  }
  document.documentElement.style.setProperty("--new-div-width", `${sizeVal}px`);
  document.documentElement.style.setProperty(
    "--new-div-height",
    `${sizeVal}px`,
  );
});

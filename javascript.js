const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is  the glorious text-content!";

container.appendChild(content);

const redP = document.createElement("p");
      redP.classList.add("redP");
const blueH3 = document.createElement("h3");
      blueH3.classList.add("blueH3");
const borderedDiv = document.createElement("div");
      borderedDiv.classList.add("borderedDiv");
const anotherH1 = document.createElement("h1");
      anotherH1.classList.add("anotherH1");
const someP = document.createElement("p");
      someP.classList.add("someP");

redP.textContent = "Гей! Я червоний!";
blueH3.textContent = "Я синій х3";
anotherH1.textContent = "Я в дів";
someP.textContent = "Я теж!";

borderedDiv.appendChild(anotherH1);
borderedDiv.appendChild(someP);

content.appendChild(redP);
content.appendChild(blueH3);
content.appendChild(borderedDiv);

redP.style.color = "red";
blueH3.style.color = "blue";
borderedDiv.style.cssText = "border: 1px solid black; background-color: pink;";

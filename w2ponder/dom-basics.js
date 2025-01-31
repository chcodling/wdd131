// add paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// add image
const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/200";
document.body.appendChild(newImage);

// add list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// add section
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>Section Title</h2><p>Section Content</p>";
document.body.appendChild(newSection);
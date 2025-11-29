
console.log("CONNECTED")
const tagList = document.getElementById("tagCollection_list");
const listItems = tagList.querySelectorAll("li");

let selectedTag = [];
const handleClick = (event) => {
  const targetTag = event.target.innerText;
  if (selectedTag.includes(targetTag)) {
    selectedTag = [...selectedTag].filter((x) => x !== targetTag);
    event.target.classList.remove("targetedTag");
  } else {
    event.target.classList.add("targetedTag");
    selectedTag = [...selectedTag, event.target.innerText];
  }

  evealuate();
};

function evealuate() {
  console.log("check slecelted tags");
  console.log(selectedTag);
}


listItems.forEach((element) =>
  element.addEventListener("click", handleClick),
);



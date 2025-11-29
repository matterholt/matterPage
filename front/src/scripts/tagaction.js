
const tagCollectionUnorderList = document.getElementsByClassName("taglist");

for (let unorderList of tagCollectionUnorderList) {
  lisentersOnTag(unorderList.childNodes)
}


let selectedTag = [];


function collectDom(targetTag) {
  return document.getElementsByClassName(targetTag.toLowerCase())
}

function handleSelectedTags(event) {
  const targetTag = event.target.innerText;
  const cssAction = updateSelectedTag(targetTag)
  handleCssClass(targetTag, cssAction)
  evealuate();
};


function updateSelectedTag(targetTag) {
  if (selectedTag.includes(targetTag)) {
    selectedTag = [...selectedTag].filter((x) => x !== targetTag);
    return "remove"
  } else {
    selectedTag = [...selectedTag, targetTag];
  }
  return 'add'
}


function handleCssClass(targetTag, action) {
  const allTargetedTags = collectDom(targetTag)
  for (let tag of allTargetedTags) {
    if (action === 'remove') {
      tag.classList.remove("selected_tag");
    }
    tag.classList.add("selected_tag");
  }
}


function evealuate() {
  console.log("check slecelted tags");
  console.log(selectedTag);
}


function lisentersOnTag(listItems) {
  listItems.forEach((element) =>
    element.addEventListener("click", handleSelectedTags),
  );
}

function resetTags() {
  if (selectedTag.length === 0) {
    return
  }
  console.log("reset", selectedTag)
  for (let tag of selectedTag) {
    const collection = document.getElementsByClassName(tag.toLowerCase())
    for (let collect of collection) {
      collect.classList.remove("selected_tag");
    }
  }
  selectedTag = []
}

const resetTagButton = document.getElementById("resetTag")
resetTagButton.addEventListener("click", resetTags)

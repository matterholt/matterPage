
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
  blogit()
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


// temp




// below remove from file and place into other 
// main index file and pull in modules

function articleTags(post) {

  const tagit = post.getElementsByClassName("taglist")
  const litag = tagit.querySelectorAll('li')
  // const listContent = Array.from(litag).map(x => x.textContent)
  debugger


  return tagit
}




let orginalCollection = [];

function blogit() {
  const parentDom = document.getElementById("articleContent")
  const articleCollection = parentDom.getElementsByClassName("postBlock")
  if (orginalCollection.length === 0) [
    orginalCollection = [...articleCollection]
  ]

  const newElement = []

  for (let article of orginalCollection) {
    /**
     *
     *
     * 1. take orginal collection 
     * 2. collect the tag set for each article
     * 3. if any tag match the selected_tag
     * 4. return any article that has a selected_tag
     *
     */
    const tagging = orginalCollection
    console.log("article", tagging)
    debugger



    if (false) {
      newElement.push(article)
    }

  }

  console.log("newElement", newElement)
  console.log("orginal", orginalCollection)
  console.log("parent", parentDom)

  parentDom.innerHTML = ''
  parentDom.append(...newElement);

  // articleCollection.replaceWith(newElement);
  // console.log(orginalCollection)
}

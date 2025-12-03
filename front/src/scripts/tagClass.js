let selectedTag = []

function updateSelectedTag(targetTag) {
  if (selectedTag.includes(targetTag)) {
    selectedTag = [...selectedTag].filter((x) => x !== targetTag);
    return "remove"
  } else {
    selectedTag = [...selectedTag, targetTag];
  }
  return 'add'
}



function collectDom(targetTag) {
  return document.getElementsByClassName(targetTag.toLowerCase())
}


export function handleSelectedTags(event) {
  const targetTag = event.target.innerText;
  const cssAction = updateSelectedTag(targetTag)
  handleCssClass(targetTag, cssAction)
};


function handleCssClass(targetTag, action) {
  const allTargetedTags = collectDom(targetTag)
  for (let tag of allTargetedTags) {
    if (action === 'remove') {
      tag.classList.remove("selected_tag");
    }
    tag.classList.add("selected_tag");
  }
}


export function resetTags() {
  if (selectedTag.length === 0) {
    return
  }
  for (let tag of selectedTag) {
    const collection = document.getElementsByClassName(tag.toLowerCase())
    for (let collect of collection) {
      collect.classList.remove("selected_tag");
    }
  }
  selectedTag = []
}



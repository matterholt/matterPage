import { resetTags, handleSelectedTags } from './tagClass.js'

// temp

// below remove from file and place into other 
// main index file and pull in modules

function articleTags(post) {
  return Array.from(post.querySelectorAll('li')).map(x => x.innerText.trim())
}

let orginalCollection = [];

function blogit() {

  const parentDom = document.getElementById("articleContent")
  const articleCollection = parentDom.getElementsByClassName("postBlock")

  if (orginalCollection.length === 0) {
    orginalCollection = [...articleCollection]
  }


  const setTag = new Set(selectedTag)
  const newElement = []

  for (const post of orginalCollection) {
    const blogTagList = new Set(articleTags(post))
    const commonTags = blogTagList.intersection(setTag)
    if (commonTags.size > 0) {
      debugger

      newElement.push(post)
    }

    console.log("BASE ARTi", orginalCollection)
    console.log("new ARTi", newElement)

  }
  parentDom.innerHTML = ''
  parentDom.append(...newElement);

  // articleCollection.replaceWith(newElement);
  // console.log(orginalCollection)
}

import { resetTags, handleSelectedTags } from './tagClass.js'
const tagCollectionUnorderList = document.getElementsByClassName("taglist");

for (let unorderList of tagCollectionUnorderList) {
  unorderList.childNodes.forEach((element) => {
    element.addEventListener("click", handleSelectedTags)
  });
}

const resetTagButton = document.getElementById("resetTag")
resetTagButton.addEventListener("click", resetTags)



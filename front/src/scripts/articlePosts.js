console.log("connected article post");
const articleCollection = document.getElementsByClassName("postBlock")
const orginalCollection = [...articleCollection];

const temp_oaa = ['TERMINAL', 'DEV_ENVIRONMENT']

console.log(articleCollection)


for (let article of articleCollection) {
  const daTags = article.getElementsByClassName("taglist")
  console.log(daTags)
}

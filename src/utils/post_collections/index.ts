import { getCollection, getEntry } from "astro:content";

function sortDates(dateList) {
  console.log("TYPE", typeof dateList);
  return dateList.sort((a, b) => b.data.pubDate - a.data.pubDate);
}

async function filterCollectionsBy(collectionType) {
  const allBlogPosts = await getCollection("blog");
  const yearToday = new Date().getFullYear();
  const filterByCurrentYear = allBlogPosts.filter((x) => {
    const year = x.data.pubDate.getFullYear();
    return year === yearToday;
  });
  let latest = sortDates(filterByCurrentYear);

  if (collectionType === "most_recent") {
    return latest[0];
  }
  if (collectionType === "current_year") {
    return latest;
  }

  return allBlogPosts;
}

export { filterCollectionsBy };

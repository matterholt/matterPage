import { getCollection, getEntry } from "astro:content";
const __Years_Of_Content = new Set();

function sortDates(dateList) {
  return dateList.sort((a, b) => b.data.pubDate - a.data.pubDate);
}

async function getLatestByYear(checkedYear: number, contentData: []) {
  // decrement year till values are found
  const filterByCurrentYear = await contentData.filter((x) => {
    const year = x.data.pubDate.getFullYear();
    return year === checkedYear;
  });

  if (filterByCurrentYear.length > 0) {
    return checkedYear;
  }
  getLatestByYear(checkedYear - 1, contentData);
}

function sortByYears(completeBlogContent) {
  const writeupsPerYear = new Map();

  for (const x of completeBlogContent) {
    let contentDate = x.data.pubDate.getFullYear();
    __Years_Of_Content.add(contentDate);
    if (writeupsPerYear.has(contentDate)) {
      let yearContent = writeupsPerYear.get(contentDate);
      writeupsPerYear.set(contentDate, [...yearContent, x]);
      continue;
    }
    writeupsPerYear.set(contentDate, [x]);
  }

  return writeupsPerYear;
}

function groupByCurrentandRest() {
  // group post by latest of year and
}

async function filterCollectionsBy(collectionType) {
  const allBlogPosts = await getCollection("blog");

  const writeUpByYears = sortByYears(allBlogPosts);

  const mostRecentandRest = groupByCurrentandRest(allBlogPosts);
  // return most recent year, and then the rest
  console.log([...writeUpByYears]);

  return allBlogPosts;
}

export { filterCollectionsBy };

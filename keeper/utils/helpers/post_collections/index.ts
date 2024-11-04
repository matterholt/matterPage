import { getCollection, getEntry } from "astro:content";

function sortDates(dateList) {
  return dateList.sort((a, b) => b.data.pubDate - a.data.pubDate);
}

function sortByYears(completeBlogContent) {
  const writeupsPerYear = new Map();

  for (const x of completeBlogContent) {
    let contentDate = x.data.pubDate.getFullYear();
    if (writeupsPerYear.has(contentDate)) {
      let yearContent = writeupsPerYear.get(contentDate);
      writeupsPerYear.set(contentDate, [...yearContent, x]);
      continue;
    }
    writeupsPerYear.set(contentDate, [x]);
  }

  return writeupsPerYear;
}

async function filterCollectionsBy(collectionType) {
  const allBlogPosts = await getCollection("blog", ({ data }) => {
    return data.published;
  });
  const writeUpByYears = await sortByYears(allBlogPosts);
  const valueStoredInMap = [...writeUpByYears.keys()];

  // return most the post with latest
  const latestDateOfContent = valueStoredInMap.reduce(
    (prevNumb: number, currentLgNumb: number) =>
      currentLgNumb > prevNumb ? currentLgNumb : prevNumb,
  );

  const otherYearsOfContent = [...valueStoredInMap].filter(
    (x) => x !== latestDateOfContent,
  );

  const mostRecentWriteUps = sortDates(writeUpByYears.get(latestDateOfContent));
  const restOfContent = sortDates(
    otherYearsOfContent.map((year) => writeUpByYears.get(year)).flat(),
  );
  if (collectionType === "most_recent") {
    // console.log(mostRecentWriteUps);
    return [mostRecentWriteUps[0]];
  }

  // returns the most recent first, then the rest
  return [mostRecentWriteUps, restOfContent];
}

export { filterCollectionsBy };

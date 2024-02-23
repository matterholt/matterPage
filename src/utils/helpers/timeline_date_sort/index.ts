const dateSorts = new Map();
const yearRange = new Set();

const collectCollection = accomplishedDates.map((entry) => {
  const collectionKey = entry.data.type;
  const colectionEntry = entry.body.split(/\r?\n/).filter((x) => x !== "");
  return { [collectionKey]: colectionEntry };
});

function sortTimelineDates() {
  for (const entryCollections of collectCollection) {
    const [collectionKey, ...r] = Object.keys(entryCollections);
    const collectionEntry = Object.values(entryCollections).flat();

    for (let entry of collectionEntry) {
      const dateRegex = /\(([^)]+)\)\s*(.+)$/;
      const matchItem = entry.match(dateRegex);
      const dateKey = matchItem?.[1] || "00";
      const dataContent = matchItem?.[2] || "";

      yearRange.add(dateKey);

      if (dateSorts.has(dateKey)) {
        const dateKeyValue = dateSorts.get(dateKey);
        dateSorts.set(dateKey, [
          ...dateKeyValue,
          { entries: dataContent, type: collectionKey },
        ]);
      }
      dateSorts.set(dateKey, [{ entries: dataContent, type: collectionKey }]);
    }
  }
}

const sortedDateRange = [...yearRange].sort((a: number, b: number) => b - a);

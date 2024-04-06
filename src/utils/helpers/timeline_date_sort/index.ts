const dateSorts = new Map();
const yearRange = new Set();

const collectCollection = accomplishedDates.map((entry) => {
  const collectionKey = entry.data.type;
  const colectionEntry = entry.body.split(/\r?\n/).filter((x) => x !== "");
  return { [collectionKey]: colectionEntry };
});

function timeLineDateSort() {
  for (var entry of collectCollection) {
    const collectionKey = Object.keys(entry);
    const collectionEntry = Object.values(entry).flat();

    for (const entry of collectionEntry) {
      const rg = /\(([^)]+)\)\s*(.+)$/;
      const matchItem = entry.match(rg);
      const dateKey = matchItem?.[1] || "00";
      const dataContent = matchItem?.[2] || "";

      yearRange.add(dateKey);

      if (dateSorts.has(dateKey)) {
        const dateKeyValue = dateSorts.get(dateKey);
        dateSorts.set(dateKey, [
          ...dateKeyValue,
          { entries: dataContent, type: collectionKey?.[0] },
        ]);
        continue;
      }
      dateSorts.set(dateKey, [
        { entries: dataContent, type: collectionKey?.[0] },
      ]);
      continue;
    }
  }
}
const sortedDateRange = [...yearRange].sort((a: number, b: number) => b - a);

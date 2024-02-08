import type { ContentCareers, ContentFrontMatter } from "@utils/types";

function summarizedJob(contentBody: string) {
  const [bodyIndxZero, bodyParagraph, ...r] = contentBody.split("\n");
  return bodyParagraph;
}

function datesOfServices(dateData: ContentFrontMatter) {
  const [start, end] = dateData.workingDate.split("/");
  return { start, end };
}

async function formatContent(currentPosition, contentSize) {
  if (currentPosition === undefined) {
    console.log("nothing here");
    return [];
  }
  const { start, end } = datesOfServices(currentPosition?.data);
  const bodyParagraph =
    contentSize === "summary"
      ? summarizedJob(currentPosition?.body)
      : currentPosition?.body;
  return [{ start, end, data: currentPosition.data, bodyParagraph }];
}

export { formatContent };

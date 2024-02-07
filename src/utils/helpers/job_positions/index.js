import { getCollection } from "astro:content";



function summarizedJob(jobCollection) {
    const { data, body } = jobCollection;
    const [bodyIndxZero, bodyParagraph, ...r] = body.split("\n");
    const [start, end] = data.workingDate.split("/");

    return {
        start,
        bodyParagraph,
        data
    }
}


async function jobPositionSummary(dataVarient) {
    const allJobPositions = await getCollection("positions");
    const currentPosition = allJobPositions.find(job => job.data.isCurrent)
    console.log(allJobPositions)

    if (dataVarient === 'summary') {
        return summarizedJob(currentPosition)
    }

    return allJobPositions

}



export { jobPositionSummary }
let [CURRENT_day, CURRENT_month, CURRENT_date, CURRENT_year, ...time] = Date().split(" ")

export function sortDates(dateList, order = "accending") {
    if (order = "accending") {
        return dateList.sort((a, b) => b.date - a.date)
    }
}

const postListDataStruct = (postGlob) => ({
    postTitle: postGlob.frontmatter.title,
    postUrl: postGlob.url,
    date: postGlob.frontmatter.pubDate.slice(0, 10),
});

function sortsItsOuts() {


    // return object with post listings, 
    // latest pub, current year, archive
    return []

}


export function writeUpPostListings(postsglobs) {
    // data that wish to display when showing my writes ups
    const postlist = postsglobs.map((post) => postListDataStruct(post));



    // latest post top


    const thisYearsPost = postlist.filter((post) => {
        let [year, ...rest] = post.date.split("-")
        return CURRENT_year === year;
    });

    const previousYearsPost = postlist.filter((post) => {
        let [year, ...rest] = post.date.split("-")
        return CURRENT_year !== year;
    });




    // same year but previous


    // then the rest below

    /*
    post title, date, url, tags
    */
    return [thisYearsPost, previousYearsPost]
}





// const working = allPost.map((post) => {
//     let current = new Date(post.frontmatter.pubDate.slice(0, 10));
//     return { current };
// });

// const sorteedoput = working.sort((a, b) => b.current - a.current);

// const pastYearsPost = allPost.filter((post) => {
//     let current =
//         post.frontmatter.pubDate.slice(0, 10).split("-")[0] != currentYear;
//     return current;
// });
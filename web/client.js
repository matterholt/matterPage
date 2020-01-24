import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "07idzp9y", //you can find this in sanity.json
  dataset: "production", // or the name you chose in step one
  useCdn: true //'false' if you want to ensure fresh data
});

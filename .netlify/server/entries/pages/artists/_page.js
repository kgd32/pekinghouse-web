import { c as client } from "../../../chunks/contentfulClient.js";
async function load({ params }) {
  const artists = await client.getEntries({
    content_type: "artists"
  });
  return {
    artists
  };
}
export {
  load
};

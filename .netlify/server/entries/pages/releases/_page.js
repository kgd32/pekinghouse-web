import { c as client } from "../../../chunks/contentfulClient.js";
async function load({ params }) {
  const releases = await client.getEntries({
    content_type: "releases"
  });
  return {
    releases
  };
}
export {
  load
};

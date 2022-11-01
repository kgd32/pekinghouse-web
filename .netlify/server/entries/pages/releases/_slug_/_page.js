import { c as client } from "../../../../chunks/contentfulClient.js";
async function load({ params }) {
  const loadrelease = await client.getEntries({
    "fields.catnr": params.slug,
    content_type: "releases"
  });
  const release = loadrelease.items[0].fields;
  return {
    release
  };
}
export {
  load
};

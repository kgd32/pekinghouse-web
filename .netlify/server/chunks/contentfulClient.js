import contentful from "contentful";
const dev = false;
console.log("devmode: ", dev);
const createClientFunc = contentful.createClient;
const client = createClientFunc({
  space: "bes529vt0m37",
  accessToken: "0bN_0xEeQejW18bZ-iT9BcrZDd3n2m3HWY-r-I-4HzI"
});
export {
  client as c
};

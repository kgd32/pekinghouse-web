import { c as create_ssr_component, p as each, j as escape, f as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}">${each(data.releases.items, (release) => {
    var _a, _b, _c, _d;
    return `<div class="${"flex flex-col p-12 md:p-8 lg:p-6"}"><div class="${"flex justify-center lg:justify-start md:justify-start mb-2 md:mb-1 lg:mb-1"}"><span class="${"text-md tracking-wide font-lemonmilkmedium"}">${escape(release.fields.artists[0].fields.name)}</span></div>
    <div><a href="${"/releases/" + escape(release.fields.catnr, true)}"><img${add_attribute("src", (_d = (_c = (_b = (_a = release.fields) == null ? void 0 : _a.cover) == null ? void 0 : _b.fields) == null ? void 0 : _c.file) == null ? void 0 : _d.url, 0)}${add_attribute("alt", release.fields.name, 0)}>
        </a></div>
    <div class="${"flex justify-center lg:justify-end md:justify-end mb-2 md:mb-1 lg:mb-1"}"><span class="${"text-4xl md:text-3xl lg:text-2xl tracking-widest md:tracking-wide lg:tracking-wide font-lemonmilkbold"}">${escape(release.fields.name)}</span></div>


</div>`;
  })}</div>`;
});
export {
  Page as default
};

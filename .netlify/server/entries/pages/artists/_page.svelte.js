import { c as create_ssr_component, f as add_attribute, j as escape, k as createEventDispatcher, v as validate_component, e as subscribe, p as each } from "../../../chunks/index.js";
import { n as navigating } from "../../../chunks/stores.js";
const VisibilityGuard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el = null;
  let visible = false;
  let hasBeenVisible = false;
  return `<div${add_attribute("this", el, 0)}>${slots.default ? slots.default({ visible, hasBeenVisible }) : ``}</div>`;
});
const Blurhash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hash } = $$props;
  let { width = 100 } = $$props;
  let { height = 100 } = $$props;
  let { resolutionX = 16 } = $$props;
  let { resolutionY = 16 } = $$props;
  let { punch = 1 } = $$props;
  let canvas;
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0)
    $$bindings.hash(hash);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.resolutionX === void 0 && $$bindings.resolutionX && resolutionX !== void 0)
    $$bindings.resolutionX(resolutionX);
  if ($$props.resolutionY === void 0 && $$bindings.resolutionY && resolutionY !== void 0)
    $$bindings.resolutionY(resolutionY);
  if ($$props.punch === void 0 && $$bindings.punch && punch !== void 0)
    $$bindings.punch(punch);
  return `<div style="${"width: " + escape(width, true) + "px;height: " + escape(height, true) + "px"}"><canvas${add_attribute("width", resolutionX, 0)}${add_attribute("height", resolutionY, 0)} style="${"width:100%;height:100%"}"${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { src } = $$props;
  let { alt } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { fadeDuration = 500 } = $$props;
  let thisImage;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fadeDuration === void 0 && $$bindings.fadeDuration && fadeDuration !== void 0)
    $$bindings.fadeDuration(fadeDuration);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} style="${"position: absolute;top: 0;left: 0;opacity: 0;transition: opacity " + escape(fadeDuration, true) + "ms;"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("this", thisImage, 0)}>`;
});
const BlurhashImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "#" } = $$props;
  let { hash } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { alt = "" } = $$props;
  let { fadeDuration = 500 } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0)
    $$bindings.hash(hash);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fadeDuration === void 0 && $$bindings.fadeDuration && fadeDuration !== void 0)
    $$bindings.fadeDuration(fadeDuration);
  return `${validate_component(VisibilityGuard, "VisibilityGuard").$$render($$result, {}, {}, {
    default: ({ hasBeenVisible }) => {
      return `${hasBeenVisible ? `<div style="${"position: relative"}">${`${validate_component(Blurhash, "Blurhash").$$render($$result, { hash, width, height }, {}, {})}`}

      ${validate_component(Image, "Image").$$render($$result, { src, alt, width, height, fadeDuration }, {}, {})}</div>` : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_navigating();
  return `<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}">${each(data.artists.items, (artist, index) => {
    var _a, _b, _c, _d, _e;
    return `<div class="${"flex flex-col p-8 md:p-8 lg:p-6 -z-10"}"><div class="${"flex justify-center sm:justify-center lg:justify-end md:justify-end mb-2 md:mb-1 lg:mb-1"}"><span class="${"text-4xl md:text-3xl lg:text-2xl tracking-wide md:tracking-wide lg:tracking-wide font-lemonmilkbold"}">${escape(artist.fields.name)}</span></div>
      ${validate_component(BlurhashImage, "BlurhashImage").$$render(
      $$result,
      {
        src: (_d = (_c = (_b = (_a = artist.fields) == null ? void 0 : _a.image) == null ? void 0 : _b.fields) == null ? void 0 : _c.file) == null ? void 0 : _d.url,
        hash: (_e = artist.fields) == null ? void 0 : _e.blurhash,
        width: 368,
        height: 368,
        fadeDuration: 400
      },
      {},
      {}
    )}
     
</div>`;
  })}</div>`;
});
export {
  Page as default
};

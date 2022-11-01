import { c as create_ssr_component, f as add_attribute, j as escape, p as each, v as validate_component } from "../../../../chunks/index.js";
import "postcss";
const Audioplayer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".audio-player.svelte-1msxpty{--player-button-width:3em;--sound-button-width:2em;--space:.5em}.controls.svelte-1msxpty{display:flex;flex-direction:row;align-items:center;width:100%;margin-top:10px}.player-button.svelte-1msxpty{background-color:transparent;border:0;width:var(--player-button-width);height:var(--player-button-width);cursor:pointer;padding:0}.timeline.svelte-1msxpty{-webkit-appearance:none;width:calc(100% - (var(--player-button-width) + var(--sound-button-width) + var(--space)));height:.6em;background-color:#e5e5e5;border-radius:5px;background-size:0% 100%;background-image:linear-gradient(#DE5E97, #DE5E97);background-repeat:no-repeat;margin-right:var(--space)}.timeline.svelte-1msxpty::-webkit-slider-thumb{-webkit-appearance:none;width:1em;height:1em;border-radius:50%;cursor:pointer;opacity:0;-webkit-transition:all .1s;transition:all .1s;background-color:#a94672}.timeline.svelte-1msxpty::-moz-range-thumb{-webkit-appearance:none;width:1em;height:1em;border-radius:50%;cursor:pointer;opacity:0;-moz-transition:all .1s;transition:all .1s;background-color:#a94672}.timeline.svelte-1msxpty::-ms-thumb{-webkit-appearance:none;width:1em;height:1em;border-radius:50%;cursor:pointer;opacity:0;-ms-transition:all .1s;transition:all .1s;background-color:#a94672}.timeline.svelte-1msxpty::-webkit-slider-thumb:hover{background-color:#943f65}.timeline.svelte-1msxpty:hover::-webkit-slider-thumb{opacity:1}.timeline.svelte-1msxpty::-moz-range-thumb:hover{background-color:#943f65}.timeline.svelte-1msxpty:hover::-moz-range-thumb{opacity:1}.timeline.svelte-1msxpty::-ms-thumb:hover{background-color:#943f65}.timeline.svelte-1msxpty:hover::-ms-thumb{opacity:1}.timeline.svelte-1msxpty::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.timeline.svelte-1msxpty::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.timeline.svelte-1msxpty::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.sound-button.svelte-1msxpty{background-color:transparent;border:0;width:var(--sound-button-width);height:var(--sound-button-width);cursor:pointer;padding:0}",
  map: null
};
const Audioplayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { audiourl } = $$props;
  let playerButton;
  let audio;
  let timeline;
  let soundButton;
  if ($$props.audiourl === void 0 && $$bindings.audiourl && audiourl !== void 0)
    $$bindings.audiourl(audiourl);
  $$result.css.add(css);
  return `<div class="${"audio-player svelte-1msxpty"}"><audio${add_attribute("src", audiourl, 0)}${add_attribute("this", audio, 0)}></audio>
    <div class="${"controls svelte-1msxpty"}"><button class="${"player-button svelte-1msxpty"}"${add_attribute("this", playerButton, 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"#3D3132"}"><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"}" clip-rule="${"evenodd"}"></path></svg></button>

      <input type="${"range"}" class="${"timeline svelte-1msxpty"}" max="${"100"}" value="${"0"}"${add_attribute("this", timeline, 0)}>
      <button class="${"sound-button svelte-1msxpty"}"${add_attribute("this", soundButton, 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"#3D3132"}"><path fill-rule="${"evenodd"}" d="${"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"bg-white h-[calc(100vh-80px)]"}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"}"><div class="${"mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none "}"><div><h2 class="${"text-base text-indigo-600 font-semibold tracking-wide uppercase"}">${escape(data.release.catnr)}</h2>
          <h3 class="${"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 py-2 sm:text-4xl font-lemonmilk"}">${escape(data.release.name)}</h3></div></div>
      <div class="${"mt-8 lg:grid lg:grid-cols-2 lg:gap-8"}"><div class="${"relative lg:row-start-1 lg:col-start-2 p-8"}"><div class="${"relative text-base mx-auto max-w-prose lg:max-w-none "}"><figure class="${""}"><div class="${"aspect-w-12 aspect-h-7 lg:aspect-none "}"><img${add_attribute("src", (_c = (_b = (_a = data.release.cover) == null ? void 0 : _a.fields) == null ? void 0 : _b.file) == null ? void 0 : _c.url, 0)} alt="${"Let it happen"}" width="${"600"}" height="${"600"}"></div></figure>
            ${each(data.release.tracks, (audio) => {
    return `${validate_component(Audioplayer, "Audioplayer").$$render($$result, { audiourl: audio.url }, {}, {})}              
            <span class="${"text-lg font-lemonmilk mt-2 ml-12"}">${escape(audio.name)}</span>`;
  })}</div></div>
        <div class="${"mt-8 lg:mt-0 p-4"}"><div class="${"mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 "}">Tjohej
          </div></div></div></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, b as assign, d as now, l as loop, i as identity, e as subscribe, o as onDestroy, f as add_attribute, g as set_store_value, v as validate_component } from "../../chunks/index.js";
import { n as navigating } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const PageTransitions_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition-outer.svelte-rkdj5v{display:grid;grid-template:1fr 1fr}.transition-inner.svelte-rkdj5v{grid-row:1;grid-column:1}",
  map: null
};
const PageTransitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { refresh = "" } = $$props;
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  $$result.css.add(css$1);
  return `<div class="${"transition-outer svelte-rkdj5v"}"><div class="${"transition-inner svelte-rkdj5v"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const loading = writable(false);
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress-bar.svelte-1ov8ipl{position:fixed;top:0;left:0;right:0;height:0.2rem}.progress-sliver.svelte-1ov8ipl{width:var(--width);background-color:#f8485e;height:100%}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  const progress = tweened(0, { duration: 3500, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  const unsub = loading.subscribe((state) => {
    if (!state) {
      progress.set(1, { duration: 1e3 });
    }
  });
  onDestroy(() => {
    unsub();
  });
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `<div class="${"progress-bar svelte-1ov8ipl"}"><div class="${"progress-sliver svelte-1ov8ipl"}"${add_attribute("style", `--width: ${$progress * 100}%`, 0)}></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  set_store_value(loading, $loading = !!$navigating, $loading);
  $$unsubscribe_navigating();
  $$unsubscribe_loading();
  return `
<header class="${"w-full h-16 bg-black"}"><div class="${"container px-4 md:px-0 h-full mx-auto flex justify-between items-center"}">
            <a class="${"text-white text-xl font-lemonmilkbold"}" href="${"https://www.kindacode.com"}">PEKING HOUSE</a>

            

            <ul id="${"menu"}" class="${"hidden bg-black md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 font-lemonmilk"}"><li class="${"md:hidden fixed top-4 right-6"}"><button class="${"text-right text-white text-4xl"}">\xD7</button></li>

                <li><a href="${"/"}" class="${"text-white opacity-70 hover:opacity-100 duration-300"}">Home</a></li>
                <li><a href="${"/releases"}" class="${"text-white opacity-70 hover:opacity-100 duration-300"}">Releases</a></li>
                <li><a href="${"/artists"}" class="${"text-white opacity-70 hover:opacity-100 duration-300"}">Artists</a></li>

                <li><a href="${"/events"}" class="${"text-white opacity-70 hover:opacity-100 duration-300"}">Events</a></li>
                <li><a href="${"/contact"}" class="${"text-white opacity-70 hover:opacity-100 duration-300"}">Contact</a></li></ul>

            
            <div class="${"flex items-center md:hidden"}"><button class="${"text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"}">\u2630
                </button></div>

            
            ${``}</div></header>




    ${validate_component(PageTransitions, "PageTransitions").$$render($$result, { refresh: data.url.pathname }, {}, {
    default: () => {
      return `<main class="${"w-screen mx-auto max-w-7xl mt-8"}">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}

        ${$loading === true ? `<div>${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
export {
  Layout as default
};

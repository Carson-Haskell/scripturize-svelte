import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { u as user } from "../../chunks/user.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center gap-2" data-svelte-h="svelte-2h8azq"><h1 class="text-4xl tracking-wide md:text-6xl">Welcome to <span class="duration-700 text-primary animate-pulse">Scripturize</span></h1> <h2 class="text-lg tracking-wide text-accent/90 md:text-2xl">An app for memorizing your favorite verses</h2> <p class="pt-6 tracking-wide opacity-80 md:text-lg text-md">Search for a verse and add it to your collection</p></div>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  return `<form class="flex gap-4 md:w-full w-[80%] justify-center mt-8"><input type="text" placeholder="John 1:1-3..." class="${[
    "w-full max-w-xs input input-bordered border-secondary rounded-xl",
    " border-secondary"
  ].join(" ").trim()}"${add_attribute("value", query, 0)}> <button class="btn btn-secondary rounded-xl hover:scale-105" data-svelte-h="svelte-1qpgelz">Search</button></form> ${``}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Search, "Search").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  user.set(data.user || null);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

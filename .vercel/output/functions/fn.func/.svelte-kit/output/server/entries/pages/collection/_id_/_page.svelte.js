import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let verse;
  let passage;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ verse } = data);
  passage = verse?.passage.replace(" (ESV)", "");
  return `<div class="w-[50%] flex flex-col items-center gap-6"><div>${verse ? `<h2 class="mb-6 text-lg text-center md:text-xl text-secondary">${escape(verse.ref)}</h2> <div class="max-h-[350px] overflow-scroll"><p class="${[
    "tracking-wide text-center transition duration-700 ease-in-out md:text-lg text-md opacity-90",
    ""
  ].join(" ").trim()}">${escape(passage)}</p></div>` : `<p class="mb-12 text-lg tracking-wider text-warning font-extralight" data-svelte-h="svelte-11tiivm">No verse found</p>`}</div> <div class="flex flex-col items-center w-full md:flex-row md:gap-6 md:justify-center"><button class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105" data-svelte-h="svelte-1tmgm9h">Back</button> <button class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105">${escape("Hide")}</button></div></div>`;
});
export {
  Page as default
};

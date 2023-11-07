import { c as create_ssr_component, f as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import axios from "axios";
import { w as writable } from "../../../chunks/index2.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const verse = writable();
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleSubmit = () => {
  } } = $$props;
  if ($$props.handleSubmit === void 0 && $$bindings.handleSubmit && handleSubmit !== void 0)
    $$bindings.handleSubmit(handleSubmit);
  return `<button class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105" onclick="my_modal_1.showModal()" data-svelte-h="svelte-192w60s">Add Verse</button> <dialog id="my_modal_1" class="modal"><div class="modal-box h-[40%] flex flex-col items-center justify-center gap-6"><h3 class="text-lg font-bold" data-svelte-h="svelte-ml6env">Memorize this verse?</h3> <p class="" data-svelte-h="svelte-1s3za1d">This will add the selected verse to your personal <span class="text-primary">Scripturize</span> collection where you can work to commit it to memory.</p> <div class="flex justify-center modal-action"><form method="dialog"> <div class="flex justify-center gap-8"><button class="btn btn-outline btn-error rounded-xl w-[60%] font-bold hover:scale-105" data-svelte-h="svelte-1slcjho">No</button> <button class="btn btn-outline btn-success rounded-xl w-[60%] font-bold hover:scale-105" data-svelte-h="svelte-ck13yh">Yes</button></div></form></div></div></dialog>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $verse, $$unsubscribe_verse;
  $$unsubscribe_verse = subscribe(verse, (value) => $verse = value);
  const { ref, passage } = $verse;
  const handleSubmit = async () => {
    await axios.post("/api/verses", { ref, passage });
    goto("/collection");
  };
  $$unsubscribe_verse();
  return `<div class="w-[50%] text-center flex flex-col items-center gap-6"><div>${$verse ? `<h2 class="mb-6 text-lg md:text-xl text-secondary">${escape(ref)}</h2> <div class="max-h-[350px] overflow-scroll"><p class="tracking-wide md:text-lg text-md opacity-90">${escape(passage)}</p></div>` : `<p class="mb-12 text-lg tracking-wider text-warning font-extralight" data-svelte-h="svelte-11tiivm">No verse found</p>`}</div> <div class="flex flex-col items-center w-full md:flex-row md:gap-6 md:justify-center"><button class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105" data-svelte-h="svelte-1oubksp">Back</button> ${validate_component(Modal, "Modal").$$render($$result, { handleSubmit }, {}, {})}</div></div>`;
});
export {
  Page as default
};

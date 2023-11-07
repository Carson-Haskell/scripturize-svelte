import { c as create_ssr_component, i as each, e as escape, v as validate_component, f as subscribe } from "../../../chunks/ssr.js";
import { u as user } from "../../../chunks/user.js";
const ToggleConfetti_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".relative.svelte-qtjwsa.svelte-qtjwsa{position:relative}.relative.svelte-qtjwsa .confetti.svelte-qtjwsa{position:absolute;top:50%;left:50%}.confetti.svelte-qtjwsa.svelte-qtjwsa{pointer-events:none}",
  map: null
};
const ToggleConfetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggleOnce = false } = $$props;
  let { relative = true } = $$props;
  if ($$props.toggleOnce === void 0 && $$bindings.toggleOnce && toggleOnce !== void 0)
    $$bindings.toggleOnce(toggleOnce);
  if ($$props.relative === void 0 && $$bindings.relative && relative !== void 0)
    $$bindings.relative(relative);
  $$result.css.add(css$1);
  return `  <span class="${["svelte-qtjwsa", relative ? "relative" : ""].join(" ").trim()}">${slots.label ? slots.label({}) : ``} ${``} </span>`;
});
const Confetti_svelte_svelte_type_style_lang = "";
const css = {
  code: ".confetti-holder.svelte-io58ff.svelte-io58ff{position:relative}@keyframes svelte-io58ff-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}100%{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg))}}@keyframes svelte-io58ff-translate{0%{opacity:1}8%{transform:translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));opacity:1}12%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));opacity:1}16%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));opacity:1}100%{transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));opacity:0}}@keyframes svelte-io58ff-no-gravity-translate{0%{opacity:1}100%{transform:translateY(var(--translate-y)) translateX(var(--translate-x));opacity:0}}.confetti.svelte-io58ff.svelte-io58ff{--translate-y:calc(-200px * var(--translate-y-multiplier));--translate-x:calc(200px * var(--translate-x-multiplier));position:absolute;height:calc(var(--size) * var(--scale));width:calc(var(--size) * var(--scale));animation:svelte-io58ff-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;opacity:0;pointer-events:none}.confetti.svelte-io58ff.svelte-io58ff::before{--full-rotation:var(--rotation-xyz), var(--rotation-deg);content:'';display:block;width:100%;height:100%;background:var(--color);background-size:contain;transform:skew(var(--skew)) rotate3d(var(--full-rotation));animation:svelte-io58ff-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear}.rounded.svelte-io58ff .confetti.svelte-io58ff::before{border-radius:50%}.cone.svelte-io58ff .confetti.svelte-io58ff{--translate-x:calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier))}.no-gravity.svelte-io58ff .confetti.svelte-io58ff{animation-name:svelte-io58ff-no-gravity-translate;animation-timing-function:ease-out}@media(prefers-reduced-motion){.confetti.svelte-io58ff.svelte-io58ff,.confetti.svelte-io58ff.svelte-io58ff::before{animation:none}}",
  map: null
};
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2e3 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  function getColor() {
    if (colorArray.length)
      return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else
      return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%`;
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0)
    $$bindings.infinite(infinite);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.colorRange === void 0 && $$bindings.colorRange && colorRange !== void 0)
    $$bindings.colorRange(colorRange);
  if ($$props.colorArray === void 0 && $$bindings.colorArray && colorArray !== void 0)
    $$bindings.colorArray(colorArray);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.iterationCount === void 0 && $$bindings.iterationCount && iterationCount !== void 0)
    $$bindings.iterationCount(iterationCount);
  if ($$props.fallDistance === void 0 && $$bindings.fallDistance && fallDistance !== void 0)
    $$bindings.fallDistance(fallDistance);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.cone === void 0 && $$bindings.cone && cone !== void 0)
    $$bindings.cone(cone);
  if ($$props.noGravity === void 0 && $$bindings.noGravity && noGravity !== void 0)
    $$bindings.noGravity(noGravity);
  if ($$props.xSpread === void 0 && $$bindings.xSpread && xSpread !== void 0)
    $$bindings.xSpread(xSpread);
  if ($$props.destroyOnComplete === void 0 && $$bindings.destroyOnComplete && destroyOnComplete !== void 0)
    $$bindings.destroyOnComplete(destroyOnComplete);
  $$result.css.add(css);
  return `${`<div class="${[
    "confetti-holder svelte-io58ff",
    (rounded ? "rounded" : "") + " " + (cone ? "cone" : "") + " " + (noGravity ? "no-gravity" : "")
  ].join(" ").trim()}">${each({ length: amount }, (_) => {
    return `<div class="confetti svelte-io58ff" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});
const VerseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verse } = $$props;
  let memorized = verse.memorized;
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0)
    $$bindings.verse(verse);
  return `<div class="shadow-2xl card w-96 h-72 bg-primary-content/20 rounded-2xl"><div class="card-body"><div class="flex items-center justify-between mb-1"><h2 class="tracking-wider card-title text-accent/70">${escape(verse.ref)}</h2> <div class="tooltip tooltip-success" data-tip="Memorized verse?">${validate_component(ToggleConfetti, "ToggleConfetti").$$render($$result, {}, {}, {
    label: () => {
      return `<input type="checkbox" class="toggle toggle-success" ${verse.memorized ? "checked" : ""} slot="label">`;
    },
    default: () => {
      return `${memorized ? `${validate_component(Confetti, "Confetti").$$render($$result, { y: [0.35, 1.15] }, {}, {})}` : ``}`;
    }
  })}</div></div> <p class="max-h-[125px] mb-2 overflow-hidden opacity-80">${escape(verse.passage)}</p> <div class="justify-end card-actions"><button class="btn btn-outline btn-secondary rounded-xl hover:scale-105" data-svelte-h="svelte-16dpjwo">Memorize</button></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let verses;
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  user.set(data.user || null);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ verses } = data);
  $$unsubscribe_user();
  return `${!$user ? `<div class="flex flex-col items-center justify-center gap-4"><h1 class="text-2xl font-bold tracking-widest uppercase md:text-4xl text-primary/70" data-svelte-h="svelte-onjcdr">You are not logged in</h1> <p class="text-sm text-accent/70 sm:text-lg" data-svelte-h="svelte-183pqyb">Please login to view or create your collection</p> <button class="mt-2 btn btn-outline btn-secondary rounded-xl hover:scale-105" data-svelte-h="svelte-ayo7on">Login</button></div>` : `${verses.length ? `<div class="flex flex-col items-center justify-center" data-svelte-h="svelte-1fm6omu"><h1 class="mt-4 mb-4 text-4xl font-bold tracking-widest uppercase text-primary/70">Verse Collection</h1> <p class="text-accent/80">Begin memorizing your verses now</p></div> <div class="flex flex-wrap justify-center w-full gap-8 m-12 max-h-[80%] mb-20">${each(verses, (verse) => {
    return `${validate_component(VerseCard, "VerseCard").$$render($$result, { verse }, {}, {})}`;
  })}</div> <button class="mb-16 btn btn-secondary rounded-xl hover:scale-105" data-svelte-h="svelte-spy752">Add Verse</button>` : `<div class="flex flex-col items-center justify-center gap-4 text-center"><h2 class="text-xl" data-svelte-h="svelte-239lrd">You don&#39;t have any verses in your collection!</h2> <p class="text-lg text-accent/90" data-svelte-h="svelte-1g52owl">Add your first verse now</p> <button class="mt-2 btn btn-outline rounded-xl hover:scale-105" data-svelte-h="svelte-1odp94f">Add Verse</button></div>`}`}`;
});
export {
  Page as default
};

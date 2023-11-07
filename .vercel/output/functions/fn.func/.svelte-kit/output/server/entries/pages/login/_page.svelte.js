import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form class="card-body" method="POST" action="?/login"><div class="form-control"><label class="label" for="email" data-svelte-h="svelte-1etncss"><span class="label-text">Email</span></label> <input id="email" type="email" name="email" placeholder="email" class="${["input input-bordered rounded-xl", ""].join(" ").trim()}" required></div> <div class="form-control"><label class="label" for="password" data-svelte-h="svelte-al5xcy"><span class="label-text">Password</span></label> <input type="password" id="password" name="password" placeholder="password" class="${["input input-bordered rounded-xl", ""].join(" ").trim()}" required></div> <div class="mt-6 form-control" data-svelte-h="svelte-14z81e8"><button class="btn btn-secondary rounded-xl hover:scale-105" type="submit">Login</button></div> <div class="divider" data-svelte-h="svelte-cr75gt">OR</div> <button class="btn btn-secondary rounded-xl hover:scale-105" formaction="?/register" data-svelte-h="svelte-8yzzep">Register</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="hero"><div class="flex-col hero-content lg:flex-row-reverse"><div class="text-center lg:text-left" data-svelte-h="svelte-x136b6"><h1 class="text-5xl font-bold text-primary">Welcome back,</h1> <p class="py-6">Login to view your personal <span class="text-primary">Scripturize</span> collection where you
				can work on committing verses to memory, or add new verses to expand your collection!</p> <p class="py-6 italic text-primary/70">&quot;Your word is a lamp unto my feet and a light unto my path.&quot;</p> <p class="lg:ml-6 text-primary/70">- Psalm 119:105</p></div> <div class="flex-shrink-0 w-full max-w-sm p-8 shadow-2xl md:mr-10 card bg-primary-content/20 rounded-2xl">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};

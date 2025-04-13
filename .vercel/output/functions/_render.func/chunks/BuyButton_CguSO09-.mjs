import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_YQCLhJ9r.mjs';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const ARG = "AR";
  const country = Astro2.request.headers.get("x-Vercel-IP-country") ?? ARG;
  const storeCountry = country === "AR" ? "arg" : "usa";
  const countryName = country === "AR" ? "Argentina" : "USA";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar libro" target="_blank" class="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 hover:cursor-pointer transition">
Comprar en amazon ${countryName} <img class="w-4" src="/img/amazon-logo.svg" alt="logo amazon"> </a>`;
}, "D:/dev/curso-astro-desde-cero/curso-astro/src/components/BuyButton.astro", void 0);

const $$file = "D:/dev/curso-astro-desde-cero/curso-astro/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };

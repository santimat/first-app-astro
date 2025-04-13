import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_YQCLhJ9r.mjs';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-lg" id="score">⭐ Puntuacion: ${scoreValue.trim()}/5</span>`;
}, "D:/dev/curso-astro-desde-cero/curso-astro/src/components/BookScore.astro", void 0);

const $$file = "D:/dev/curso-astro-desde-cero/curso-astro/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };

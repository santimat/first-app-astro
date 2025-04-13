import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CyE2EUT9.mjs';
import { manifest } from './manifest_CnLn7F4h.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BYo6wY5v.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CguSO09-.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.1_jiti@2.4.2_ligh_8b01b6d2be980c53d5c2888a25e39c07/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "415951b3-cf32-4a94-9027-d8635b834605",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const l=s=>i(s,a),t={module:{uri:a},exports:o,require:l};e[a]=Promise.all(r.map((s=>t[s]||l(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@chakra-ui/icons.bb373c7b.js",revision:null},{url:"assets/@chakra-ui/react.4d46e3f3.js",revision:null},{url:"assets/courses.ffc63297.js",revision:null},{url:"assets/fonts/JF Flat Regular.ttf",revision:"a742499d94a75f0b9a87b620f5f2acec"},{url:"assets/framer-motion.7561cd0c.js",revision:null},{url:"assets/images/icon.png",revision:"710b2910d18328b7919d5b67d85efc93"},{url:"assets/images/logo-dark.png",revision:"c3e640a6bc784b3c4b5936ef442feac7"},{url:"assets/images/logo-light.png",revision:"5105ba419ca55d8d6cdbe5417c735bbd"},{url:"assets/index-bd151a2b.js",revision:"fa885cba85f0951b4095f5cb30e5df23"},{url:"assets/js/qr/decoder.js",revision:"3e1c3d2595d5a3cc74e123708e17a2ac"},{url:"assets/js/qr/qrscan.d.ts",revision:"dca83f3f3f8f4b7be87e19c8f5ba97d6"},{url:"assets/js/qr/qrscan.js",revision:"0325c3f6f8e347de05a5e554368af7b5"},{url:"assets/lesson.6fb44274.js",revision:null},{url:"assets/LoadingList.7e2bed80.js",revision:null},{url:"assets/messages.0defa2bd.js",revision:null},{url:"assets/profile.480598c4.js",revision:null},{url:"assets/users.1f88b42b.js",revision:null},{url:"favicon.svg",revision:"c679eeedb7efb1639b0bfec1f47b6282"},{url:"index.html",revision:"8e81f3df756ced79d50f45b39ae5786a"},{url:"manifest.webmanifest",revision:"a5693bdbfd70f3858d86f6c875968b05"},{url:"robots.txt",revision:"35adcdeb7766e2f40b1bf03e2534c8b2"},{url:"assets/images/icon.png",revision:"710b2910d18328b7919d5b67d85efc93"},{url:"manifest.webmanifest",revision:"a5693bdbfd70f3858d86f6c875968b05"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

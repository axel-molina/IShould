if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>i(e,r),b={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>b[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-a482575e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/img/armonia.png",revision:"e2197ca1b4a77270c3875aa453f2461d"},{url:"assets/img/banner1.jpg",revision:"12f840a54d3569a2dfb1cf1d57ca2686"},{url:"assets/img/banner2.jpg",revision:"b9dbcc770c64371ab8069b871c2132af"},{url:"assets/img/banner3.jpg",revision:"3f62d0ed2677cb66659d8cfd3f5cc713"},{url:"assets/img/facebook.png",revision:"31cd8fabf04ccd856834007683fa1f1f"},{url:"assets/img/flower.png",revision:"450d67be6d0daccc4979ebf7e73a8e57"},{url:"assets/img/foto.webp",revision:"37cc911c76cbaa40193a0a008fc4a76e"},{url:"assets/img/hombre.png",revision:"0190a46723346bd58072bd01886342b4"},{url:"assets/img/icon.ico",revision:"c55dc384ca6396ffdbad53078be2f2dc"},{url:"assets/img/instagram.png",revision:"e7cb76a3abd6f4c478a997ca6403e5bb"},{url:"assets/img/ishoud.png",revision:"84b6f184a147c9e1f1ec89900506966a"},{url:"assets/img/logo.png",revision:"6e15fc2d09666c0b5b37fa9b9e1065df"},{url:"assets/img/manzana.png",revision:"43e9a2e5f3c1c6ad582906e0b13db5e2"},{url:"assets/img/meditacion.jpg",revision:"28946cf34b37cef893817433336841f9"},{url:"assets/img/mujer.png",revision:"9a9c387c68892b0bffcf111c9b55b0d7"},{url:"assets/img/pesa.png",revision:"48ca6a5e2169656365e4bbd9c2e932eb"},{url:"assets/img/piedras.png",revision:"467b66c6e82ff400a1f830b6f66f94ad"},{url:"assets/img/tostadas.png",revision:"a422ceb8c4c4ec139a685d0cbbdd706e"},{url:"assets/img/verduras.png",revision:"04da92819410145a82949ec53501f4aa"},{url:"assets/img/yoga.jpg",revision:"89a5a323f01b65f1e3307b7bbe8ed777"},{url:"assets/img/youtube.png",revision:"3e6a0caac4e9f712765e9ced55b5b6f2"},{url:"index.html",revision:"4e028d765c8c46dc1ec28ea1c5713b2b"},{url:"manifest.json",revision:"f2da10f58a396eeced398d731d1a3873"},{url:"styles.css",revision:"13712ac055eb3b9b92bca18eda7564e6"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

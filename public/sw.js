if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8cfd6ddbb2654a7068adf824b9cfd04a"},{url:"/_next/static/ARnjokEQCS30t-fWKLcs3/_buildManifest.js",revision:"077ef19e7d91b7cad173af5b11cf7301"},{url:"/_next/static/ARnjokEQCS30t-fWKLcs3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/129-e7d4ed9328618b48.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/167-b3f151e8804cb648.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/180-efa3ae4cd4e26134.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/216-cfc4c49a7d3c706e.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/260-ab744ca6ce114523.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/300-c4f21d5a2db3f531.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/324-aba632f5bf8d70de.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/326-1d58e82b3611cf7b.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/347-7d98ac1e23186826.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/476-b516bd28044df79f.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/546-0fa779375ac64997.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/618-7fc4d65f34aacb27.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/717-4b6207dcc9049195.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/779-75e3b17a18486cc7.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/826-fd362677b32d73b9.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/913-6b6ee539d164782a.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/%5B%5B...map%5D%5D/layout-60225291d0559c17.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/%5B%5B...map%5D%5D/page-9fbd29cc8df681ba.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/403/page-f93455cfe47709f4.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/_not-found-00147ddb0795ff0e.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/add/layout-79fb2c95b353f841.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/add/page-7cf9e2fdd761a3dc.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/at/%5Bid%5D/page-198f0e9f20d12196.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/at/layout-614bb076c7b1def9.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/edit/%5Bid%5D/loading-62852e84bd415327.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/edit/%5Bid%5D/page-181b61f3e4e1824a.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/edit/layout-5fc4ecae4c017aa9.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/layout-641369b63764f5b3.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/login/layout-674481fbc19ac00a.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/login/page-e23c0af6632f0948.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/onboard/layout-bd849d234f1fd6bf.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/onboard/page-482c2c18694b4c90.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/profile/layout-a4dfae6cd0eda443.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/app/profile/page-e74d749faf0d036c.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/dc112a36-e5eb16feb467d4b8.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/f4e5f4e1-d1f3f05c106f5cd3.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/fd9d1056-5b5e7a7a45556609.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/main-969cbda23401b5d4.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/main-app-bb5538412c712d77.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/pages/_app-313fe0f3a1522bd0.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/pages/_error-fcbe99b634a545bf.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-929d58787bbad464.js",revision:"ARnjokEQCS30t-fWKLcs3"},{url:"/_next/static/css/38963690771ccf8d.css",revision:"38963690771ccf8d"},{url:"/_next/static/css/3902e5b0afb6cad7.css",revision:"3902e5b0afb6cad7"},{url:"/_next/static/css/56a4df88f1996a43.css",revision:"56a4df88f1996a43"},{url:"/_next/static/css/6e6d651e6f0274d0.css",revision:"6e6d651e6f0274d0"},{url:"/_next/static/css/7612da28064c095f.css",revision:"7612da28064c095f"},{url:"/_next/static/css/872b39ee4d4e5460.css",revision:"872b39ee4d4e5460"},{url:"/_next/static/css/9f34714a8220f326.css",revision:"9f34714a8220f326"},{url:"/_next/static/css/9f6c8f8facf2a717.css",revision:"9f6c8f8facf2a717"},{url:"/_next/static/css/a8003cace0adb047.css",revision:"a8003cace0adb047"},{url:"/_next/static/css/b5b82c2dbb5af970.css",revision:"b5b82c2dbb5af970"},{url:"/_next/static/css/c3f5a9f9d61aaa33.css",revision:"c3f5a9f9d61aaa33"},{url:"/_next/static/css/c6d6aa558e634b5f.css",revision:"c6d6aa558e634b5f"},{url:"/_next/static/css/cc1545e71c34c495.css",revision:"cc1545e71c34c495"},{url:"/_next/static/css/e11c552037d23fad.css",revision:"e11c552037d23fad"},{url:"/_next/static/css/e7f0ee4d795109b7.css",revision:"e7f0ee4d795109b7"},{url:"/_next/static/css/e9753183d7614e78.css",revision:"e9753183d7614e78"},{url:"/_next/static/css/ed920409b9d2cc8e.css",revision:"ed920409b9d2cc8e"},{url:"/_next/static/media/AddButton.08aa654a.svg",revision:"a165d256accc10cb19a774b7c0208935"},{url:"/_next/static/media/ArrowDown.39f34d53.svg",revision:"77fab8dee68acd5fb73785b73ee7de1b"},{url:"/_next/static/media/CancelButton.5e985092.svg",revision:"f14b41fb75327b23c0b3234c400b025a"},{url:"/_next/static/media/CancelButtonWhite.4262ddac.svg",revision:"2978ad7a6f75b7ea3c51bcde7f0220c9"},{url:"/_next/static/media/Check.d0aa3129.svg",revision:"944011b2fca70a12f2b8f235bd0fcb28"},{url:"/_next/static/media/GoogleLogin.fa079253.png",revision:"5710a9a106ba2d84a843f6660726c6ba"},{url:"/_next/static/media/ImageAddButton.fddf263c.svg",revision:"5f90b1eaed71b6cd80fd53e7fe26d91a"},{url:"/_next/static/media/KakaoLogin.e0ce6827.png",revision:"493ea1f30a4023098ccfa69b273e8a99"},{url:"/_next/static/media/Loading.4810a679.svg",revision:"ef27d9e0f38d77d66c72248efd5be313"},{url:"/_next/static/media/NaverLogin.23372cc3.png",revision:"e8a75ea55b4a3f76c5b90171bcdf2ebf"},{url:"/_next/static/media/NextArrow.859da956.svg",revision:"4a4b4bc9d0bc535bc3431df24de1917d"},{url:"/_next/static/media/PrevArrow.fcb74917.svg",revision:"43d6678ca2a705b85b8a4216719ee6cb"},{url:"/_next/static/media/SearchIcon.2d664d09.svg",revision:"a9e40318b96006d69440f291914e7e9e"},{url:"/assets/loading.json",revision:"008fc1897411fcd1015f9c9dea4805ef"},{url:"/fonts/NanumSquareNeoTTF-aLt.woff",revision:"851d781997dec0e0e328facdfdac9b81"},{url:"/fonts/NanumSquareNeoTTF-bRg.woff",revision:"45d90f2a7e4e030e1bf18bf84c86d28a"},{url:"/fonts/NanumSquareNeoTTF-cBd.woff",revision:"3e81895813840a00fd310ee644c128ad"},{url:"/fonts/NanumSquareNeoTTF-dEb.woff",revision:"754b6abd5e1569ae132017fdab957efd"},{url:"/fonts/NanumSquareNeoTTF-eHv.woff",revision:"b15fcd76d8f08b64f212d636a96620b9"},{url:"/fonts/Poppins-Bold.woff",revision:"fba5b5e45fb5f71215e76c9b7b218693"},{url:"/fonts/Poppins-Light.woff",revision:"9234fea4af29841ace1b666655d3c229"},{url:"/fonts/Poppins-Regular.woff",revision:"87ee1a70c3af3cb1a4d8de1d96568fa0"},{url:"/icons/icon-192x192.png",revision:"b569e3b85d4cdd3f4d6d82a6b20b0326"},{url:"/icons/icon-256x256.png",revision:"86228c825c122911e212b510a4e7989a"},{url:"/icons/icon-384x384.png",revision:"0808809b3fea5f441fdd6338375ee897"},{url:"/icons/icon-512x512.png",revision:"4b9480ac1738e39a542b8c178fde1c33"},{url:"/images/AddButton.svg",revision:"a165d256accc10cb19a774b7c0208935"},{url:"/images/ArrowDown.svg",revision:"77fab8dee68acd5fb73785b73ee7de1b"},{url:"/images/CancelButton.svg",revision:"f14b41fb75327b23c0b3234c400b025a"},{url:"/images/CancelButtonWhite.svg",revision:"2978ad7a6f75b7ea3c51bcde7f0220c9"},{url:"/images/Check.svg",revision:"944011b2fca70a12f2b8f235bd0fcb28"},{url:"/images/GoogleLogin.png",revision:"5710a9a106ba2d84a843f6660726c6ba"},{url:"/images/ImageAddButton.svg",revision:"5f90b1eaed71b6cd80fd53e7fe26d91a"},{url:"/images/KakaoLogin.png",revision:"493ea1f30a4023098ccfa69b273e8a99"},{url:"/images/Loading.svg",revision:"ef27d9e0f38d77d66c72248efd5be313"},{url:"/images/NaverLogin.png",revision:"e8a75ea55b4a3f76c5b90171bcdf2ebf"},{url:"/images/NextArrow.svg",revision:"4a4b4bc9d0bc535bc3431df24de1917d"},{url:"/images/PrevArrow.svg",revision:"43d6678ca2a705b85b8a4216719ee6cb"},{url:"/images/SearchIcon.svg",revision:"a9e40318b96006d69440f291914e7e9e"},{url:"/images/loading.gif",revision:"a21746f5374859d98f7528e1857e3532"},{url:"/images/map.svg",revision:"19b7d64893395e5b56f8adba2220e7a8"},{url:"/manifest.json",revision:"0604411fbb5c5a3f59ff03da7800e91f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

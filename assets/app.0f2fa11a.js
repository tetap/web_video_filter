import{d as h,g as m,h as A,C as z,o as c,b as k,w as T,k as a,L as P,r as V,a0 as r,t as y,a1 as p,H as d,l,n as b,c as v,a2 as D,a3 as R,s as f,a4 as E,a5 as S,a6 as B,a7 as O,a8 as $,a9 as j,aa as H,ab as F,ac as I,ad as N,U,u as J,j as G,y as q,ae as K,af as Q,ag as W,ah as X}from"./chunks/framework.3d6f20e2.js";import{t as Y}from"./chunks/theme.db187b9c.js";const C=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Z={},ee={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"14",height:"14"},te=a("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),ne=a("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),ae=[te,ne];function se(e,t){return c(),v("svg",ee,ae)}const oe=C(Z,[["render",se]]),le={},ie={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"},re=a("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),pe=[re];function ce(e,t){return c(),v("svg",ie,pe)}const ue=C(le,[["render",ce]]),de=["href"],me=a("div",{style:{width:"16px","margin-left":"6px"}},[a("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[a("g",null,[a("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),fe=[me],he=h({__name:"SfcPlayground",props:{content:null,importMap:null},setup(e){const t=e,n="https://sfc.vuejs.org/",s=m(()=>{const o={"App.vue":t.content};if(t.importMap)try{o["import-map.json"]=JSON.stringify({imports:t.importMap})}catch{}return`${n}#${btoa(unescape(encodeURIComponent(JSON.stringify(o))))}`});return(o,w)=>(c(),v("a",{href:l(s),style:{display:"flex","align-items":"center"},target:"_blank"},fe,8,de))}});function ve(e){const t=D({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return{...R(t),copyCode:n}}const we={class:"demo-slot vp-raw"},ge={class:"demo-title-desc"},xe={class:"demo-title"},ye={class:"demo-desc"},Ce={class:"demo-actions"},Me={class:"demo-platforms"},Le={class:"demo-buttons"},_e={class:"demo-actions-copy"},Ae={class:"demo-actions-tip"},ze=["innerHTML"],ke=h({__name:"Demo",props:{code:null,highlightedCode:null,title:null,desc:null,lang:{default:"vue"},defaultExpand:{type:Boolean,default:!1},importMap:{default:()=>({})}},setup(e){const t=e,n=m(()=>decodeURIComponent(t.code)),{showTip:s,copyCode:o}=ve(n.value),w=m(()=>decodeURIComponent(t.highlightedCode)),u=A(t.defaultExpand),L=()=>u.value=!u.value;return(g,x)=>{const _=z("ClientOnly");return c(),k(_,null,{default:T(()=>[a("article",P(g.$attrs,{class:"vitepress-demo"}),[a("div",we,[V(g.$slots,"default")]),r(a("div",ge,[a("span",xe,y(e.title),1),a("span",ye,y(e.desc),1)],512),[[p,e.title||e.desc]]),a("div",Ce,[a("div",Me,[d(he,{content:l(n),importMap:e.importMap},null,8,["content","importMap"])]),a("div",Le,[a("div",_e,[r(a("span",Ae,"复制成功!",512),[[p,l(s)]]),r(d(oe,{onClick:l(o),title:"复制"},null,8,["onClick"]),[[p,!l(s)]])]),d(ue,{class:"demo-actions-expand",onClick:x[0]||(x[0]=Re=>L()),title:"展开"})])]),r(a("div",{innerHTML:l(w),class:b(`language-${e.lang} extra-class`)},null,10,ze),[[p,u.value]])],16)]),_:3})}}});const Te={...Y,enhanceApp({app:e,router:t,siteData:n}){e.component("demo",ke)}};function M(e){if(e.extends){const t=M(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const i=M(Te),Pe=h({name:"VitePressApp",setup(){const{site:e}=J();return G(()=>{q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),K(),Q(),W(),i.setup&&i.setup(),()=>X(i.Layout)}});async function Ve(){const e=De(),t=be();t.provide(S,e);const n=B(e.route);return t.provide(O,n),t.component("Content",$),t.component("ClientOnly",j),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),i.enhanceApp&&await i.enhanceApp({app:t,router:e,siteData:H}),{app:t,router:e,data:n}}function be(){return F(Pe)}function De(){let e=f,t;return I(n=>{let s=N(n);return s?(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),f&&(e=!1),U(()=>import(s),[])):null},i.NotFound)}f&&Ve().then(({app:e,router:t,data:n})=>{t.go().then(()=>{E(t.route,n.site),e.mount("#app")})});export{Ve as createApp};

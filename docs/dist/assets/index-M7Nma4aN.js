import{j as e,c as o,a as p,L as f,R as _,b as P,T as r,C as i,u as x}from"./index-KZ_aprDi.js";import{B as b}from"./HomePage.css.js.vanilla-a6w3NbCo.js";var H="vocs_HomePage_button",N="vocs_HomePage_buttons",y="vocs_HomePage_description",C="vocs_HomePage_logo",c="vocs_HomePage_packageManager",L="vocs_HomePage",M="vocs_HomePage_tabs",l="vocs_HomePage_tabsContent",R="vocs_HomePage_tabsList",B="vocs_HomePage_tagline",D="vocs_HomePage_title";function d({children:n,className:s}){return e.jsx("div",{className:o(s,L),children:n})}function m({className:n}){const{logoUrl:s,title:h}=p();return s?e.jsx("div",{className:o(n,C),children:e.jsx(f,{})}):e.jsx("h1",{className:o(n,D),children:h})}function u({children:n,className:s}){return e.jsx("div",{className:o(s,B),children:n})}function g({children:n,className:s}){return e.jsx("div",{className:o(s,y),children:n})}function v({children:n,className:s}){return e.jsx("div",{className:o(s,N),children:n})}function a(n){return e.jsx(b,{...n,className:o(H,n.className)})}function T({name:n,type:s="install"}){return e.jsxs(_,{className:M,defaultValue:"npm",children:[e.jsxs(P,{className:R,children:[e.jsx(r,{value:"npm",children:"npm"}),e.jsx(r,{value:"pnpm",children:"pnpm"}),e.jsx(r,{value:"yarn",children:"yarn"})]}),e.jsxs(i,{className:l,value:"npm",children:[e.jsx("span",{className:c,children:"npm"})," ",s==="init"?"init":"install"," ",n]}),e.jsxs(i,{className:l,value:"pnpm",children:[e.jsx("span",{className:c,children:"pnpm"})," ",s==="init"?"create":"install"," ",n]}),e.jsxs(i,{className:l,value:"yarn",children:[e.jsx("span",{className:c,children:"yarn"})," ",s==="init"?"create":"install"," ",n]})]})}const k=Object.freeze(Object.defineProperty({__proto__:null,Button:a,Buttons:v,Description:g,InstallPackage:T,Logo:m,Root:d,Tagline:u},Symbol.toStringTag,{value:"Module"}));function w(){return e.jsxs("div",{className:"footer",children:[e.jsx("div",{children:"Released under the MIT License."}),e.jsx("div",{children:"Copyright © 2022-present dojo"})]})}const $={layout:"landing"};function j(n){const s={div:"div",p:"p",...x(),...n.components};return k||t("HomePage",!1),a||t("HomePage.Button",!0),v||t("HomePage.Buttons",!0),g||t("HomePage.Description",!0),m||t("HomePage.Logo",!0),d||t("HomePage.Root",!0),u||t("HomePage.Tagline",!0),e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(m,{className:"w-48"}),e.jsx(u,{children:"Provable Games & Autonomous Worlds"}),e.jsx(g,{children:e.jsx(s.p,{children:"Dojo is a community driven open-source, Provable Game Engine, providing a comprehensive toolkit for building verifiable games and autonomous worlds."})}),e.jsxs(v,{children:[e.jsx(a,{href:"/getting-started",variant:"accent",children:e.jsx(s.p,{children:"Get started"})}),e.jsx(a,{href:"https://github.com/dojoengine/dojo",children:e.jsx(s.p,{children:"GitHub"})})]})]}),`
`,e.jsx(s.div,{children:e.jsx(s.div,{"data-sponsors":!0})}),`
`,e.jsx(w,{})]})}function X(n={}){const{wrapper:s}={...x(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(j,{...n})}):j(n)}function t(n,s){throw new Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default,$ as frontmatter};

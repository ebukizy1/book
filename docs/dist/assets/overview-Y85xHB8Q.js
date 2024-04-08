import{u as d,j as e}from"./index-KZ_aprDi.js";const s={title:"JSON-RPC",description:"undefined"};function r(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"json-rpc",children:["JSON-RPC",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#json-rpc",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"supported-transport-layers",children:["Supported Transport Layers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-transport-layers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"JSON-RPC is provided on multiple transports. Katana supports HTTP, and WebSocket. Both transports are enabled by default."}),`
`,e.jsxs(n.h2,{id:"supported-rpc-methods",children:["Supported RPC Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-rpc-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"namespaces",children:["Namespaces",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#namespaces",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The RPC methods are categorized into the following namespaces:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Namespace"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"/toolchain/katana/rpc/starknet",children:e.jsx(n.code,{children:"starknet"})})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"/toolchain/katana/rpc/katana",children:e.jsx(n.code,{children:"katana"})})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"/toolchain/katana/rpc/torii",children:e.jsx(n.code,{children:"torii"})})}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"/toolchain/katana/rpc/dev",children:e.jsx(n.code,{children:"dev"})})}),e.jsx(n.td,{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:["Each RPC methods can be invoked by prefixing the method name with the namespace name and an underscore. For example, the ",e.jsx(n.code,{children:"getTransactions"})," method in the ",e.jsx(n.code,{children:"torii"})," namespace can be invoked as ",e.jsx(n.code,{children:"torii_getTransactions"}),"."]})]})}function i(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{i as default,s as frontmatter};

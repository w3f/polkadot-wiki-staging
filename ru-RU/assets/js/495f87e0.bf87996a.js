"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"miscellaneous",title:"Miscellaneous",sidebar_label:"Miscellaneous",description:"A misc document to present additional information and perspective on Polkadot",keywords:["miscellaneous","polkadot","concepts","analysis"],slug:"../miscellaneous"},l=void 0,c={unversionedId:"general/miscellaneous",id:"general/miscellaneous",title:"Miscellaneous",description:"A misc document to present additional information and perspective on Polkadot",source:"@site/../docs/general/miscellaneous.md",sourceDirName:"general",slug:"/miscellaneous",permalink:"/ru-RU/docs/miscellaneous",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/miscellaneous.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649964125,formattedLastUpdatedAt:"14.04.2022",frontMatter:{id:"miscellaneous",title:"Miscellaneous",sidebar_label:"Miscellaneous",description:"A misc document to present additional information and perspective on Polkadot",keywords:["miscellaneous","polkadot","concepts","analysis"],slug:"../miscellaneous"},sidebar:"docs",previous:{title:"Frequently Asked Questions (FAQs)",permalink:"/ru-RU/docs/faq"},next:{title:"Grants",permalink:"/ru-RU/docs/grants"}},d={},p=[{value:"Technical Deep-Dives",id:"technical-deep-dives",level:2},{value:"Other Polkadot Concepts",id:"other-polkadot-concepts",level:2},{value:"Analysis of Polkadot",id:"analysis-of-polkadot",level:2},{value:"Polkadot as a service provider",id:"polkadot-as-a-service-provider",level:3},{value:"Polkadot as a management system",id:"polkadot-as-a-management-system",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"technical-deep-dives"},"Technical Deep-Dives"),(0,r.kt)("p",null,"This section is under construction."),(0,r.kt)("h2",{id:"other-polkadot-concepts"},"Other Polkadot Concepts"),(0,r.kt)("p",null,"This section is under construction."),(0,r.kt)("h2",{id:"analysis-of-polkadot"},"Analysis of Polkadot"),(0,r.kt)("h3",{id:"polkadot-as-a-service-provider"},"Polkadot as a service provider"),(0,r.kt)("p",null,"The current state of Polkadot can be compared to a modern-day ISP (internet service provider),\nwhere Polkadot is essentially providing access, or specifically, local connectivitiy to web3. "),(0,r.kt)("p",null,"Polkadot would require another means (or another layer) of communication to connect directly and\ncommunicate with chains that speak different languages."),(0,r.kt)("h3",{id:"polkadot-as-a-management-system"},"Polkadot as a management system"),(0,r.kt)("p",null,"Polkadot manages a subset of the world's hardware resources through its active validator set.\nIn principle, Polkadot is a management system that maintains its system through on-chain\ngovernance."),(0,r.kt)("p",null,"Polkadot's approach to management starts with sharding, creating a set of parachain slots that\nserve as dedicated CPU cores."))}m.isMDXComponent=!0}}]);
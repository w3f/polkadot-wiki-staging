"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12897:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",slug:"../build-index"},s=void 0,d={unversionedId:"build/build-index",id:"build/build-index",isDocsHomePage:!1,title:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",source:"@site/../docs/build/build-index.md",sourceDirName:"build",slug:"/build-index",permalink:"/zh-CN/docs/build-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-index.md",tags:[],version:"current",lastUpdatedBy:"Dan Shields",lastUpdatedAt:1634540091,formattedLastUpdatedAt:"2021/10/18",frontMatter:{id:"build-index",title:"Builder's Guides",sidebar_label:"Builder's Guides",description:"Reference point for the Polkadot builder guides.",slug:"../build-index"},sidebar:"docs",previous:{title:"Video Tutorials",permalink:"/zh-CN/docs/learn-video-tutorials"},next:{title:"Builders Starter's Guide",permalink:"/zh-CN/docs/build-build-with-polkadot"}},u=[{value:"Development Guide",id:"development-guide",children:[],level:2},{value:"Tools &amp; Resources",id:"tools--resources",children:[{value:"Grants",id:"grants",children:[],level:3},{value:"PSPs",id:"psps",children:[],level:3},{value:"Hackathon",id:"hackathon",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the builder's section of the Polkadot Wiki\n"),(0,n.kt)("p",null,"Here, you will discover many development tools and resources in the Polkadot ecosystem.\nWe are always adding new tools and frameworks as we learn about them so if you are working\non something that should be included please reach out to us on\n",(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:matrix.org"},"Element"),"\n",".\nThis section of the wiki is divided into the following parts:"),(0,n.kt)("h2",{id:"development-guide"},"Development Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain,\nparathread, or smart contract for your project and how to get started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-pdk"},"Parachain Development")," - Tools for building parachains and\nparathreads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-smart-contracts"},"Polkadot Smart Contracts")," - Tools to deploy contracts to a Polkadot parachain.")),(0,n.kt)("h2",{id:"tools--resources"},"Tools & Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/tools/subkey/"},"Subkey")," - Command line utility for\ngenerating and inspecting key pairs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Polkadot Standards Proposals\n(PSPs) are standards for the Polkadot ecosystem."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,n.kt)("h3",{id:"grants"},"Grants"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/grants"},"Grants")," - A list of all Polkadot-related projects given grants by the Web3 Foundation.")),(0,n.kt)("h3",{id:"psps"},"PSPs"),(0,n.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,n.kt)("h3",{id:"hackathon"},"Hackathon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-hackathon"},"Resources For Running a Hackathon"))))}p.isMDXComponent=!0}}]);
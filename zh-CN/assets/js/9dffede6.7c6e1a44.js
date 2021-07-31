(self.webpackChunk=self.webpackChunk||[]).push([[6673],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:e},u),{},{components:n})):o.createElement(h,a({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47433:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a=["components"],l={id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},s=void 0,c={unversionedId:"build-integration",id:"build-integration",isDocsHomePage:!1,title:"Polkadot Integration Guide",description:"Welcome to the Polkadot integration guide. This guide will provide all the information you need to",source:"@site/../docs/build-integration.md",sourceDirName:".",slug:"/build-integration",permalink:"/zh-CN/docs/build-integration",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-integration.md",version:"current",lastUpdatedBy:"ccris02",lastUpdatedAt:1627769465,formattedLastUpdatedAt:"2021/7/31",frontMatter:{id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},sidebar:"docs",previous:{title:"Polkadot Wallets",permalink:"/zh-CN/docs/build-wallets"},next:{title:"Polkadot Protocol",permalink:"/zh-CN/docs/build-protocol-info"}},u=[{value:"Structure",id:"structure",children:[]},{value:"Recommendation",id:"recommendation",children:[]}],d={toc:u};function p(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Polkadot integration guide. This guide will provide all the information you need to\nget started on your integration. The target audiences for this guide are wallets and custodians, but\nit will be useful to any infrastructure provider such as validators or chain indexers."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"The guide focuses on Polkadot and Kusama, but the principles will apply to parachains and other\nSubstrate-based chains. The guide contains four sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully\nas it provides information about Polkadot that differentiates it from other blockchains. Use this\npage to check your assumptions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-integrate-assets"},"Assets"),": The guide to integrating assets on Polkadot into your\nsystems."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-node-management"},"Node Management"),": This page will guide you to starting and monitoring\na node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your\nnode via multiple RPC tooling options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/build-transaction-construction"},"Transaction Construction"),": A guide to transaction\nconstruction, signing, decoding, and serialization using several available tools.")),(0,i.kt)("h2",{id:"recommendation"},"Recommendation"),(0,i.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to\nlist several options to accomplish the same thing. We want you to know your options and choose the\nsolution that is best for you."),(0,i.kt)("p",null,"That said, the easiest path to integration is almost always to use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your\nnode and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/"},"TxWrapper Core")," to construct and sign\ntransactions. Parity and Web3 Foundation will be able to provide the best support if you use these\ntools."),(0,i.kt)("p",null,"If your team would like support, join some of our ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/community"},"community channels")," or contact\n",(0,i.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."))}p.isMDXComponent=!0}}]);
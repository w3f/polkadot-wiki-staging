"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"build-network-overview",title:"Networks Overview",sidebar_label:"Networks Overview",description:"An overview of the different networks on Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-network-overview"},s=void 0,d={unversionedId:"build/build-network-overview",id:"build/build-network-overview",title:"Networks Overview",description:"An overview of the different networks on Polkadot",source:"@site/../docs/build/build-network-overview.md",sourceDirName:"build",slug:"/build-network-overview",permalink:"/docs/build-network-overview",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-network-overview.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1700064076,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{id:"build-network-overview",title:"Networks Overview",sidebar_label:"Networks Overview",description:"An overview of the different networks on Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-network-overview"},sidebar:"docs",previous:{title:"Development Networks & Node Management",permalink:"/docs/build-network-index"},next:{title:"Integration Initiation",permalink:"/docs/build-integration"}},p={},c=[{value:"Polkadot Ecosystem Networks",id:"polkadot-ecosystem-networks",level:2},{value:"Interfacing - PolkadotJS",id:"interfacing---polkadotjs",level:2},{value:"Testnet Faucets",id:"testnet-faucets",level:2}],u={toc:c},k="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(k,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While Polkadot itself is the mainnet, there are several networks that can cater to different\ndevelopment or application-driven contexts."),(0,o.kt)("h2",{id:"polkadot-ecosystem-networks"},"Polkadot Ecosystem Networks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mainnet: ",(0,o.kt)("strong",{parentName:"li"},"Polkadot")),(0,o.kt)("li",{parentName:"ul"},"Canary network: ",(0,o.kt)("strong",{parentName:"li"},"Kusama"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusama.network/"},"Kusama")," is a value-bearing canary network that gets features before\nPolkadot does. ",(0,o.kt)("em",{parentName:"li"},"Expect Chaos"),"."))),(0,o.kt)("li",{parentName:"ul"},"Official testnets:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Westend")," - Functionality equal to the current Polkadot mainnet, with possible next-generation\ntesting of features from time to time that will eventually migrate onto Polkadot. Perma-testnet\n(is not reset back to genesis block)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rococo")," - Parachains and XCM testnet. Occasionally reset (started over again with a new\ngenesis block)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contracts")," - Wasm-based Smart Contract enabled parachain testnet on Rococo, primarily for\n",(0,o.kt)("a",{parentName:"li",href:"https://use.ink/"},(0,o.kt)("inlineCode",{parentName:"a"},"ink!"))," development.")))),(0,o.kt)("p",null,"Polkadot mainnet has been running since May 2020 and has ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-implementations"},"implementations in various programming languages"),"\nranging from Rust to JavaScript. The leading implementation is built in Rust and uses the Substrate framework."),(0,o.kt)("p",null,"Tooling is rapidly evolving to interact with the network; there are many ways to get started!"),(0,o.kt)("p",null,"But before you jump head-first into the code, you should consider the ",(0,o.kt)("em",{parentName:"p"},"kind")," of decentralized\napplication you want to make and understand the different paradigms available to developers who want\nto build on Polkadot."),(0,o.kt)("h2",{id:"interfacing---polkadotjs"},"Interfacing - PolkadotJS"),(0,o.kt)("p",null,"PolkadotJS is the most widely used developer tool in the Polkadot ecosystem. It provides a web app\nto interact with various parachains, nodes, and their RPCs, as well as a Javascript API for use\nwithin front-end contexts. You can view more on PolkadotJS and its resources\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},"here"),"."),(0,o.kt)("p",null,"For other programmatic ways of interacting with these networks (including PolkadotJS), please view\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-node-interaction"},"Node Interactions page"),"."),(0,o.kt)("h2",{id:"testnet-faucets"},"Testnet Faucets"),(0,o.kt)("p",null,"Almost all tesnets either have a web-based interface for getting test currency or a Matrix room\nwhich you can post ",(0,o.kt)("inlineCode",{parentName:"p"},"!drip <ADDRESS>")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn-DOT#obtaining-testnet-tokens"},"See here for all available faucets and how to obtain testnet tokens.")))}m.isMDXComponent=!0}}]);
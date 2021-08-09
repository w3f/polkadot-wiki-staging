(self.webpackChunk=self.webpackChunk||[]).push([[4297],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=u,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function p(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:u,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20555:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>m});var n=r(22122),u=r(19756),a=(r(67294),r(3905)),o=["components"],l={id:"build-cumulus",title:"Cumulus",sidebar_label:"Cumulus"},i=void 0,s={unversionedId:"build/build-cumulus",id:"build/build-cumulus",isDocsHomePage:!1,title:"Cumulus",description:'"Cumulus clouds are shaped sort of like dots; together they form a system that is intricate,',source:"@site/../docs/build/build-cumulus.md",sourceDirName:"build",slug:"/build/build-cumulus",permalink:"/ru-RU/docs/build/build-cumulus",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-cumulus.md",version:"current",lastUpdatedBy:"Aleixo S\xe1nchez",lastUpdatedAt:1628524994,formattedLastUpdatedAt:"09.08.2021",frontMatter:{id:"build-cumulus",title:"Cumulus",sidebar_label:"Cumulus"},sidebar:"docs",previous:{title:"Parachain Implementer's Guide",permalink:"/ru-RU/docs/learn/learn-implementers-guide"},next:{title:"Rococo Parachain Test Network",permalink:"/ru-RU/docs/build/build-parachains-rococo"}},c=[{value:"Components",id:"components",children:[{value:"Cumulus Consensus",id:"cumulus-consensus",children:[]},{value:"Cumulus Runtime",id:"cumulus-runtime",children:[]},{value:"Cumulus Collator",id:"cumulus-collator",children:[]}]},{value:"Rococo",id:"rococo",children:[]},{value:"Resources",id:"resources",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,u.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Cumulus clouds are shaped sort of like dots; together they form a system that is intricate,\nbeautiful and functional."')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is an extension to Substrate that makes it easy to\nmake any Substrate built runtime into a Polkadot-compatible parachain. See the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Overview")," for a more technical\nbut still high-level description of Cumulus."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("h3",{id:"cumulus-consensus"},"Cumulus Consensus"),(0,a.kt)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a Polkadot Relay Chain (i.e.,\nparachains). This will run a Polkadot node internally, and dictate to the client and synchronization\nalgorithms which chain to follow, finalize, and treat as correct."),(0,a.kt)("h3",{id:"cumulus-runtime"},"Cumulus Runtime"),(0,a.kt)("p",null,"A wrapper around Substrate runtimes to allow them to be validated by Polkadot validators and provide\nwitness generating routines. It adds a ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_block")," API to the Substrate external interface,\nwhich will be called by validators."),(0,a.kt)("p",null,"Integrating it into your substrate runtime will be as easy as importing the crate and adding this\none line macro to your code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"runtime::register_validate_block!(Block, BlockExecutor);\n")),(0,a.kt)("h3",{id:"cumulus-collator"},"Cumulus Collator"),(0,a.kt)("p",null,"A Polkadot collator for a parachain is implemented in the Cumulus repository\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/client/collator"},"here"),"."),(0,a.kt)("h2",{id:"rococo"},"Rococo"),(0,a.kt)("p",null,"The Rococo testnet (available via Polkadot-JS) is the testnet set aside specifically for parachains."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=thgtXq5YMOo"},"Rob's talk from EthCC introducing Cumulus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=thgtXq5YMOo"},"Cumulus: Entering the Substratosphere")," - Talk from\nPolkadot co-founder Robert Habermeier at EthCC in March 2019 detailing the latest on building\nparachains with Cumulus.")))}m.isMDXComponent=!0}}]);
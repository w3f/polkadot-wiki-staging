"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},78209:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"learn-polkadotjs",title:"PolkadotJS",sidebar_label:"PolkadotJS",description:"Learn about PolkadotJS",slug:"../learn-polkadotjs"},s=void 0,d={unversionedId:"learn/learn-polkadotjs",id:"learn/learn-polkadotjs",title:"PolkadotJS",description:"Learn about PolkadotJS",source:"@site/../docs/learn/learn-polkadotjs.md",sourceDirName:"learn",slug:"/learn-polkadotjs",permalink:"/ru-RU/docs/learn-polkadotjs",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-polkadotjs.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1644492947,formattedLastUpdatedAt:"10.02.2022",frontMatter:{id:"learn-polkadotjs",title:"PolkadotJS",sidebar_label:"PolkadotJS",description:"Learn about PolkadotJS",slug:"../learn-polkadotjs"},sidebar:"docs",previous:{title:"Backing up and Restoring Accounts",permalink:"/ru-RU/docs/learn-account-restore"},next:{title:"Assets",permalink:"/ru-RU/docs/learn-assets"}},c=[{value:"Primary Implementation",id:"primary-implementation",children:[{value:"Polkadot-JS UI",id:"polkadot-js-ui",children:[],level:3},{value:"Polkadot-JS Extension",id:"polkadot-js-extension",children:[{value:"Polkadot-JS Phishing List",id:"polkadot-js-phishing-list",children:[],level:4}],level:3},{value:"Polkadot-JS API",id:"polkadot-js-api",children:[],level:3}],level:2},{value:"Polkadot-JS Apps",id:"polkadot-js-apps",children:[{value:"Developers",id:"developers",children:[{value:"Querying on-chain data",id:"querying-on-chain-data",children:[],level:4},{value:"Issuing an extrinsic",id:"issuing-an-extrinsic",children:[],level:4}],level:3},{value:"Considerations",id:"considerations",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[{value:"Beginner&#39;s Guide to Polkadot-JS",id:"beginners-guide-to-polkadot-js",children:[],level:3},{value:"Documentation",id:"documentation",children:[],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot-JS is a collection of tools that interfaces with the Polkadot blockchain in a granular\nway. "),(0,r.kt)("h2",{id:"primary-implementation"},"Primary Implementation"),(0,r.kt)("p",null,"Polkadot-JS as a term has multiple moving parts that are worth mentioning."),(0,r.kt)("h3",{id:"polkadot-js-ui"},(0,r.kt)("a",{parentName:"h3",href:"polkadot.js.org"},"Polkadot-JS UI")),(0,r.kt)("p",null,"The Polkadot-JS UI is a hosted application that loads in your browser. The UI has a standard DNS hosted\nversion, which always has the latest features, and an IPFS version that is less frequently updated but\nis more decentralized. This is also often referred to as Polkadot-JS Apps, or the Apps UI."),(0,r.kt)("p",null,"Polkadot-JS Apps has many capabilities that go beyond basic wallet functions such as account creation\nand sending or receiving transactions. "),(0,r.kt)("h3",{id:"polkadot-js-extension"},(0,r.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/extension/"},"Polkadot-JS Extension")),(0,r.kt)("p",null,"The extension is a simple proof-of-concept for managing accounts in a browser extension and allowing\nthe signing of extrinsics using these accounts. The Polkadot-JS extension is not made for users to\ninteract with on-chain functions as one would find through a wallet app. The extension acts as\na robust key-store and thus acts as an account manager for Substrate-based accounts."),(0,r.kt)("p",null,"However, it also provides a simple interface for interacting with extension-compliant dApps. "),(0,r.kt)("h4",{id:"polkadot-js-phishing-list"},(0,r.kt)("a",{parentName:"h4",href:"polkadot.js.org/phishing/"},"Polkadot-JS Phishing List")),(0,r.kt)("p",null,"The phishing list website is a community-driven curation of less-than-honest operators. The Polkadot-JS\nextension uses this list to warn a user about suspicious URLs and addresses that are part of the list, and\nautomatically blocks the account address. "),(0,r.kt)("h3",{id:"polkadot-js-api"},(0,r.kt)("a",{parentName:"h3",href:"github.com/polkadot-js/api"},"Polkadot-JS API")),(0,r.kt)("p",null,"A JavaScript API allowing for programs to interface with the functionality of Polkadot."),(0,r.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,r.kt)("p",null,"Polkadot-JS Apps is the native Polkadot/Kusama/Substrate UI for interacting with a node, allowing access to\nall features available on Substrate chains."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the UI may not precisely align with the functionality of individual parachains.")),(0,r.kt)("p",null,"Among other things, Polkadot-JS Apps allows a user to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-staking"},"Staking")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-governance"},"Governance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-crowdloans"},"Crowdloans")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-auction"},"Auctions")),(0,r.kt)("li",{parentName:"ul"},"Query chain metadata"),(0,r.kt)("li",{parentName:"ul"},"Query on-chain data using RPC calls")),(0,r.kt)("h3",{id:"developers"},"Developers"),(0,r.kt)("p",null,"A developer can utilize Polkadot-JS Apps to test your code's functionality. Interacting with the Polkadot-JS\ncomes down to either querying on-chain data or issuing an extrinsic. "),(0,r.kt)("h4",{id:"querying-on-chain-data"},"Querying on-chain data"),(0,r.kt)("p",null,"To populate the Apps UI, the web app queries the Polkadot-JS API. The API then queries a\nPolkadot node and uses JavaScript to return information that the UI will display on the screen.\nYou can choose which node to connect to by changing it in the upper-left-hand corner of the screen."),(0,r.kt)("h4",{id:"issuing-an-extrinsic"},"Issuing an extrinsic"),(0,r.kt)("p",null,"Extrinsics are pieces of information that come from outside the chain and are included in a block.\nExtrinsics can be one of three types: inherents, signed, and unsigned transactions. "),(0,r.kt)("p",null,"Most extrinsics displayed on Polkadot-JS Apps are signed transactions.\nInherits are non-signed and non-gossiped pieces of information included in blocks by the block author,\nsuch as timestamps, which are \u201ctrue\u201d because a sufficient number of validators have agreed about validity. "),(0,r.kt)("p",null,"Unsigned transactions are information that does not require a signature but will require some sort of\nspam prevention, whereas signed transactions are issued by the originator account of a transaction which\ncontains a signature of that account, which will be subject to a fee to include it on the chain. "),(0,r.kt)("h3",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"For more user-friendly wallets, check out the supported and treasury-funded wallets on the\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-wallets"},"Wallets Page")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("h3",{id:"beginners-guide-to-polkadot-js"},"Beginner's Guide to Polkadot-JS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4EQqwGFV1D8"},"Introduction to Polkadot-JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an account using Polkadot-JS"))),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/"},"Official polkadot{.js} docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/integration/polkadot-js/"},"Substrate docs on Polkadot-JS"))))}p.isMDXComponent=!0}}]);
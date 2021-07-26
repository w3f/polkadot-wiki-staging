(self.webpackChunk=self.webpackChunk||[]).push([[2273],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2912:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>m,toc:()=>s,default:()=>d});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"},p=void 0,m={unversionedId:"learn-implementations",id:"learn-implementations",isDocsHomePage:!1,title:"Polkadot Implementations",description:"There are Polkadot implementations developed in Rust, C++, Go, and JavaScript.",source:"@site/../docs/learn-implementations.md",sourceDirName:".",slug:"/learn-implementations",permalink:"/ru-RU/docs/learn-implementations",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-implementations.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1627313812,formattedLastUpdatedAt:"26.07.2021",frontMatter:{id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations"}},s=[{value:"Why build multiple implementations?",id:"why-build-multiple-implementations",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are Polkadot implementations developed in Rust, C++, Go, and JavaScript."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},(0,o.kt)("strong",{parentName:"a"},"Parity Polkadot"))," - The Rust client is developed by\nParity Technologies in concert with their work on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/kagome"},(0,o.kt)("strong",{parentName:"a"},"Kagome"))," - C++ implementation of the Polkadot Host being\nbuilt by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/soramitsu"},"Soramitsu"),", a Japanese digital identity company that\npreviously developed ",(0,o.kt)("a",{parentName:"p",href:"https://iroha.tech"},"Hyperledger Iroha"),". They were awarded a grant from the\nWeb3 Foundation and released the first version of Kagome in April 2020. As part of the process they\nalso released a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/libp2p-grpc"},"libp2p")," networking layer in C++."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems/gossamer"},(0,o.kt)("strong",{parentName:"a"},"Gossamer"))," - A Go implementation being built by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems"},"ChainSafe Systems"),", a 23-person development team in Toronto\nthat is also building an Eth2.0 Serenity client.\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/web3foundation/w3f-grants-chainsafe-to-implement-polkadot-runtime-environment-in-go-ca4973c9edaf"},"Grant announcement"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js"},(0,o.kt)("strong",{parentName:"a"},"Polkadot-JS"))," - A JavaScript\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/client"},"client")," and tool set developed by\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},"Polkadot-JS"),"."),(0,o.kt)("h2",{id:"why-build-multiple-implementations"},"Why build multiple implementations?"),(0,o.kt)("p",null,"As stated in the Soramitsu grant announcement:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is critically important to have multiple implementations of the Polkadot protocol for a number\nof reasons, including decentralization, knowledge dispersion, and better definitions of the\nprotocol... Multiple implementations of Polkadot improves network resilience and adds to the\ndecentralization of the network. The governance of the network is more democratized when multiple\nteams build clients that run the nodes in the network.")))}d.isMDXComponent=!0}}]);
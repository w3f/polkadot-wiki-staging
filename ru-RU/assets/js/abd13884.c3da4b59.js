(self.webpackChunk=self.webpackChunk||[]).push([[6978],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>d});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],s={id:"build-pdk",title:"Parachain Development Kits (PDKs)",sidebar_label:"Parachain Development Kits (PDKs)"},l=void 0,c={unversionedId:"build-pdk",id:"build-pdk",isDocsHomePage:!1,title:"Parachain Development Kits (PDKs)",description:"Parachain development kits (PDKs) are a set of tools that make it easy for developers to create",source:"@site/../docs/build-pdk.md",sourceDirName:".",slug:"/build-pdk",permalink:"/ru-RU/docs/build-pdk",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-pdk.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1627313812,formattedLastUpdatedAt:"26.07.2021",frontMatter:{id:"build-pdk",title:"Parachain Development Kits (PDKs)",sidebar_label:"Parachain Development Kits (PDKs)"},sidebar:"docs",previous:{title:"Polkadot Builders Starter's Guide",permalink:"/ru-RU/docs/build-build-with-polkadot"},next:{title:"Parachain Implementer's Guide",permalink:"/ru-RU/docs/learn-implementers-guide"}},h=[{value:"Why create a parachain?",id:"why-create-a-parachain",children:[]},{value:"What is a PDK?",id:"what-is-a-pdk",children:[]},{value:"What kind of PDKs exist?",id:"what-kind-of-pdks-exist",children:[]},{value:"Build a PDK",id:"build-a-pdk",children:[]}],p={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Parachain development kits (PDKs) are a set of tools that make it easy for developers to create\nPolkadot compatible ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"parachains"),"."),(0,r.kt)("h2",{id:"why-create-a-parachain"},"Why create a parachain?"),(0,r.kt)("p",null,"Before diving into what a PDK is and how it would be used, let's revisit ",(0,r.kt)("em",{parentName:"p"},"why")," a developer would\nwant to create a parachain and connect it to Polkadot."),(0,r.kt)("p",null,"A parachain has two major value adds that make it a desirable choice for a developer over creating a\nstandalone chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Shared security")," - removes the necessity of bootstrapping a chain's own validator set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Cross-chain communication")," - allows parachains to interoperate with each other through the XCMP\nprotocol.")),(0,r.kt)("p",null,"Parachains can ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-security"},"lease the security")," of the Polkadot network by bonding\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-DOT"},"DOT")," for a parachain slot. This means that the social costs of building a community\naround your project and convincing validators to participate in your network security are reduced.\nIt is anticipated that Polkadot will have strong security, and decentralized application projects\nwishing to benefit from this security would want to become a parachain. For more information on the\nmechanic of leasing a parachain slot through a candle auction see ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-auction"},"here"),"."),(0,r.kt)("p",null,"Any decentralized application or chain that wants to enable trustless messaging to other parachains\nalready connected to Polkadot would want to become a parachain. Interoperability between sovereign\nchains involves certain constraints and complex protocols to enable across a wide breadth of chains.\nWith Polkadot, you will get this feature out of the box if your build your application as a\nparachain. The ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crosschain"},"XCMP protocol")," will allow any parachains to interoperate by\npassing messages between them. Furthermore, as bridges to other chains are launched (such as those\nto Bitcoin or Ethereum) the parachains will be able to operate with these as well."),(0,r.kt)("h2",{id:"what-is-a-pdk"},"What is a PDK?"),(0,r.kt)("p",null,"As mentioned, a PDK is a set of tools that allows developers to easily create a parachain. In\npractice this means that the PDK will consist of a couple key components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"State transition function")," - a way for your application to move from one state to another state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Collator node")," - a type of peer-to-peer node in the Polkadot network with certain\nresponsibilities in regard to parachains.")),(0,r.kt)("p",null,"The state transition function (STF) can be any abstract way for an application to go from one state\nto another state. The only constraint that Polkadot places on this STF is that it must be easily\nverifiable -- usually though what we call a ",(0,r.kt)("em",{parentName:"p"},"witness")," or ",(0,r.kt)("em",{parentName:"p"},"proof"),". It must be so because the Relay\nChain validators will need to check that each state it receives from the collator node is correct\nwithout actually running through the entire computation. Some examples of these proofs include the\nProof-of-Validity blocks or zk-SNARKs, which require less computational resources to verify than\nthey do to generate. The verification asymmetry in proof generation of the STF is one of the\nintegral insights that allows Polkadot to scale while keeping high security guarantees."),(0,r.kt)("p",null,"A collator node is one of the types of network maintainers in the Polkadot protocol. They are\nresponsible for ",(0,r.kt)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned\nfrom iteration of the state transition function. They must remain online in order to keep track of\nthe state and also of the XCMP messages that it will route between itself and other parachains.\nCollator nodes are responsible for passing the succinct proofs to the Relay Chain validators, and\ntracking the latest blocks from the Relay Chain. In essence, a collator node also acts as a light\nclient for the Polkadot Relay Chain. For more on collator nodes see ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-collator"},"here"),"."),(0,r.kt)("h2",{id:"what-kind-of-pdks-exist"},"What kind of PDKs exist?"),(0,r.kt)("p",null,"Currently the only PDK is Parity ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),". Substrate is a blockchain framework that provides\nthe basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm\ninterpreter) and provides an intuitive way to construct your runtime. Substrate is made to ease the\nprocess of creating a new chain, but it does not provide support for Polkadot compatibility\ndirectly. For this reason, Cumulus, an added library will contain all of the Polkadot compatibility\nglue code. Cumulus is still in development, but the idea is that it should be simple to take a\nSubstrate chain and add the parachain code by importing the crates and adding a single line of code."),(0,r.kt)("p",null,"Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is not\nnecessary that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: ",(0,r.kt)("em",{parentName:"p"},"state transition function")," and ",(0,r.kt)("em",{parentName:"p"},"collator node"),".\nEverything else is up to the implementer of the PDK."),(0,r.kt)("p",null,"One interesting idea for a PDK that would be nice to see is to have a\n",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675"},"roll-up")," kit that allowed\ndevelopers to create snark-based parachains. If we review the roll-up write-up, we see that the\nsystem uses two roles: users that update ",(0,r.kt)("strong",{parentName:"p"},"state")," and an operator that ",(0,r.kt)("strong",{parentName:"p"},"aggregates the state\nupdates")," into a single on-chain update. It should be straightforward to see how we can translate\nthis to the parachain terms. The state transition function for a roll-up-like parachain would be\nupdating the state (in practice, most likely a merkle tree, which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node, which would aggregate the state and\ncreate the zk-SNARK proof that it would hand to the Relay Chain validators for verification."),(0,r.kt)("h2",{id:"build-a-pdk"},"Build a PDK"),(0,r.kt)("p",null,"If you or your team are interested in developing a PDK feel free to open an issue on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Web3-collaboration"},"W3F collaboration repository")," for comment. There may be\ngrants available for this type of work."))}d.isMDXComponent=!0}}]);
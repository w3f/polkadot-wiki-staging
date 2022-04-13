"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8733],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45162:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"learn-availability",title:"Availability and Validity",sidebar_label:"Availability and Validity",description:"Learn about Polkadot's approach to sharding.",slug:"../learn-availability"},s=void 0,c={unversionedId:"learn/learn-availability",id:"learn/learn-availability",title:"Availability and Validity",description:"Learn about Polkadot's approach to sharding.",source:"@site/../docs/learn/learn-availability.md",sourceDirName:"learn",slug:"/learn-availability",permalink:"/ru-RU/docs/learn-availability",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-availability.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649257203,formattedLastUpdatedAt:"06.04.2022",frontMatter:{id:"learn-availability",title:"Availability and Validity",sidebar_label:"Availability and Validity",description:"Learn about Polkadot's approach to sharding.",slug:"../learn-availability"},sidebar:"docs",previous:{title:"Staking FAQ",permalink:"/ru-RU/docs/learn-staking-faq"},next:{title:"Cross-Consensus Message Format (XCM)",permalink:"/ru-RU/docs/learn-crosschain"}},d=[{value:"Phases of the AnV protocol",id:"phases-of-the-anv-protocol",children:[{value:"Parachain phase",id:"parachain-phase",children:[],level:3},{value:"Relay Chain submission phase",id:"relay-chain-submission-phase",children:[],level:3},{value:"Availability and unavailability subprotocols",id:"availability-and-unavailability-subprotocols",children:[],level:3}],level:2},{value:"Erasure Codes",id:"erasure-codes",children:[],level:2},{value:"Fishermen: Deprecated",id:"fishermen-deprecated",children:[],level:2},{value:"Further Resources",id:"further-resources",children:[],level:2}],h={toc:d};function p(e){var a=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Availability and Validity (AnV) protocol of Polkadot is what allows for the network to be\nefficiently sharded among parachains while maintaining strong security guarantees."),(0,r.kt)("h2",{id:"phases-of-the-anv-protocol"},"Phases of the AnV protocol"),(0,r.kt)("p",null,"There are five phases of the Availability and the Validity protocol."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Parachain phase."),(0,r.kt)("li",{parentName:"ol"},"Relay Chain submission phase."),(0,r.kt)("li",{parentName:"ol"},"Availability and unavailability subprotocols."),(0,r.kt)("li",{parentName:"ol"},"Secondary GRANDPA approval validity checks."),(0,r.kt)("li",{parentName:"ol"},"Invocation of a Byzantine fault tolerant ",(0,r.kt)("em",{parentName:"li"},"finality gadget")," to cement the chain.")),(0,r.kt)("h3",{id:"parachain-phase"},"Parachain phase"),(0,r.kt)("p",null,"The parachain phase of AnV is when the ",(0,r.kt)("em",{parentName:"p"},"collator")," of a parachain proposes a ",(0,r.kt)("em",{parentName:"p"},"candidate block")," to the\nvalidators that are currently assigned to the parachain."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Candidate block")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A candidate block is a new block from a parachain collator that may or may not be valid and\nmust go through validity checks before being included into the Relay Chain."))),(0,r.kt)("h3",{id:"relay-chain-submission-phase"},"Relay Chain submission phase"),(0,r.kt)("p",null,"The validators then check the candidate block against the verification function exposed by that\nparachain's registered code. If the verification succeeds, then the validators will pass the\ncandidate block to the other validators in the gossip network. However, if the verification fails,\nthe validators immediately reject the candidate block as invalid."),(0,r.kt)("p",null,"When more than half of the parachain validators agree that a particular parachain block candidate is\na valid state transition, they prepare a ",(0,r.kt)("em",{parentName:"p"},"candidate receipt"),". The candidate receipt is what will\neventually be included into the Relay Chain state. It includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The parachain ID."),(0,r.kt)("li",{parentName:"ul"},"The collator's ID and signature."),(0,r.kt)("li",{parentName:"ul"},"A hash of the parent block's candidate receipt."),(0,r.kt)("li",{parentName:"ul"},"A Merkle root of the block's erasure-coded pieces."),(0,r.kt)("li",{parentName:"ul"},"A Merkle root of any outgoing messages."),(0,r.kt)("li",{parentName:"ul"},"A hash of the block."),(0,r.kt)("li",{parentName:"ul"},"The state root of the parachain before block execution."),(0,r.kt)("li",{parentName:"ul"},"The state root of the parachain after block execution.")),(0,r.kt)("p",null,"This information is ",(0,r.kt)("strong",{parentName:"p"},"constant size")," while the actual PoV block of the parachain can be variable\nlength. It is enough information for anyone that obtains the full PoV block to verify the state\ntransition contained inside of it."),(0,r.kt)("h3",{id:"availability-and-unavailability-subprotocols"},"Availability and unavailability subprotocols"),(0,r.kt)("p",null,"During the availability and unavailability phases, the validators gossip the\n",(0,r.kt)("a",{parentName:"p",href:"#erasure-codes"},"erasure coded")," pieces among the network. At least 1/3 + 1 validators must report\nthat they possess their piece of the code word. Once this threshold of validators has been reached,\nthe network can consider the PoV block of the parachain ",(0,r.kt)("em",{parentName:"p"},"available"),"."),(0,r.kt)("h2",{id:"erasure-codes"},"Erasure Codes"),(0,r.kt)("p",null,"Erasure coding transforms a message into a longer ",(0,r.kt)("em",{parentName:"p"},"code")," that allows for the original message to be\nrecovered from a subset of the code and in absence of some portion of the code. A code is the\noriginal message padded with some extra data that enables the reconstruction of the code in the case\nof erasures."),(0,r.kt)("p",null,"The type of erasure codes used by Polkadot's availability scheme are ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon"),"\ncodes, which already enjoys a battle-tested application in technology outside the blockchain\nindustry. One example is found in the compact disk industry. CDs use Reed-Solomon codes to correct\nany missing data due to inconsistencies on the disk face such as dust particles or scratches."),(0,r.kt)("p",null,"In Polkadot, the erasure codes are used to keep parachain state available to the system without\nrequiring all validators to keep tabs on all the parachains. Instead, validators share smaller\npieces of the data and can later reconstruct the entire data under the assumption that 1/3+1 of the\nvalidators can provide their pieces of the data."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The 1/3+1 threshold of validators that must be responsive in order to construct the full\nparachain state data corresponds to Polkadot's security assumption in regard to Byzantine nodes."))),(0,r.kt)("h2",{id:"fishermen-deprecated"},"Fishermen: Deprecated"),(0,r.kt)("p",null,"The idea of Fishermen is that they are full nodes of parachains, like collators, but perform a different role in relation to the Polkadot network. Instead of packaging the state transitions and producing the next parachain blocks as collators do, fishermen will watch this process and ensure no invalid state transitions are included."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fishermen are not available on Kusama or Polkadot and are not planned for formal implementation, despite previous proposals in the ",(0,r.kt)("a",{parentName:"strong",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/Availability_and_Validity.html"},"AnV protocol"),".")),(0,r.kt)("p",null,"To address the motivation behind the Fishermen design consideration, the current secondary backing checkers perform a similar role in relation to the Polkadot network. From a security standpoint, security is based on having at least one honest validator either among parachain validators or secondary checker."),(0,r.kt)("h2",{id:"further-resources"},"Further Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/the-path-of-a-parachain-block/"},"Path of a Parachain Block")," - Article by Parity analyst Joe Petrowski expounding on the\nvalidity checks that a parachain block must pass in order to progress the parachain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/research/tree/85cd4adfccb7d435f21cd9fd249cd1b7f5167537/docs/papers/AnV"},"Availability and Validity")," - Paper by the W3F Research Team that specifies the\navailability and validity protocol in detail.")))}p.isMDXComponent=!0}}]);
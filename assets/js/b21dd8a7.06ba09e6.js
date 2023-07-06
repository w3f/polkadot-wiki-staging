"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"learn-comparisons-rollups",title:"Layer Two and Rollups",sidebar_label:"Layer Two and Rollups",description:"Comparison between various Rollup and L2 Protocols.",keywords:["rollups","polkadot","scalability","shared","security","parachain","ethereum"],slug:"../learn-comparisons-rollups"},s=void 0,p={unversionedId:"learn/learn-comparisons-rollups",id:"learn/learn-comparisons-rollups",title:"Layer Two and Rollups",description:"Comparison between various Rollup and L2 Protocols.",source:"@site/../docs/learn/learn-comparison-rollups.md",sourceDirName:"learn",slug:"/learn-comparisons-rollups",permalink:"/docs/learn-comparisons-rollups",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparison-rollups.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"learn-comparisons-rollups",title:"Layer Two and Rollups",sidebar_label:"Layer Two and Rollups",description:"Comparison between various Rollup and L2 Protocols.",keywords:["rollups","polkadot","scalability","shared","security","parachain","ethereum"],slug:"../learn-comparisons-rollups"},sidebar:"docs",previous:{title:"Other Comparisons",permalink:"/docs/learn-comparisons"},next:{title:"Videos",permalink:"/docs/learn-video-tutorials"}},c={},u=[{value:"Optimistic Rollups",id:"optimistic-rollups",level:2},{value:"Zero-knowledge Rollups",id:"zero-knowledge-rollups",level:2},{value:"Polkadot - Native Shared Security",id:"polkadot---native-shared-security",level:2}],h={toc:u},d="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This comparison covers general information regarding two widely used rollup mechanisms that are used\nto scale (usually EVM-based) blockchains and compares and contrasts how Polkadot achieves\nscalability.")),(0,i.kt)("p",null,"Layer two (L2) networks are popular as being the way forward for blockchain scalability by\noff-loading the majority of computation from layer one (L1) networks. L2 solutions utilize the L1\nnetwork's security and functionality to build an additional layer that is often faster, reduces\nfees, and solves other platform-specific issues. In many cases, L2 solutions focus on utilizing\nblock space on a particular blockchain efficiently and cost-effectively."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rollups"),' are an L2 scaling solution. At the most basic level, a rollup L2 solution is responsible\nfor "rolling up" transactions by batching them before publishing them to the L1 chain, usually\nthrough a network of ',(0,i.kt)("strong",{parentName:"p"},"sequencers"),". This mechanism could include thousands of transactions in a\nsingle rollup."),(0,i.kt)("p",null,"Polkadot implements this functionality at the\nnative level (i.e. without using L2 scaling solutions), allowing for shared security and scalability\nof the relay chain and respective parachains. Shared security is a concept that has similar goals to\nEVM-based optimistic and zero-knowledge rollups. Still, instead of being implemented as a secondary\nlayer, Polkadot guarantees native security and\nscalability for each of its parachains through the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),".\nPolkadot handles the coordination of data from\nparachains into an aggregated, representative state, somewhat similar to L2 rollups."),(0,i.kt)("h2",{id:"optimistic-rollups"},"Optimistic Rollups"),(0,i.kt)("p",null,"Optimistic rollups are an interactive scaling method for L1 blockchains. They assume\n",(0,i.kt)("em",{parentName:"p"},"optimistically")," that every proposed transaction is valid by default."),(0,i.kt)("p",null,"In the case of mitigating potentially invalid transactions, optimistic rollups introduce a\n",(0,i.kt)("em",{parentName:"p"},"challenge period")," during which participants may challenge a suspect rollup. A fraud-proving scheme\nis in place to allow for several ",(0,i.kt)("em",{parentName:"p"},"fraud proofs")," to be submitted. Those proofs could make the rollup\nvalid or invalid. During the challenge period, state changes may be disputed, resolved, or included\nif no challenge is presented (and the required proofs are in place)."),(0,i.kt)("p",null,"While optimistic rollups provide scalability, they have both benefits and drawbacks to their\napproach:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Benefits:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They are not limited by the type of state change - any state change can be included, meaning\nexisting apps do not have to account for it."),(0,i.kt)("li",{parentName:"ul"},"They can be parallelized for scalability."),(0,i.kt)("li",{parentName:"ul"},"A substantial amount of data can fit within a single rollup\n(",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/#scaling-ethereum-with-optimistic-rollups"},"in the case of Ethereum, for example"),",\ntens of thousands of transactions in a single state transition).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Drawbacks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transaction censorship and centralization are of concern, where sequencers/L2 nodes can be\ncompromised."),(0,i.kt)("li",{parentName:"ul"},"Challenge periods could take a substantial amount of time to pass, increasing time for the rollup\nto finalize onto the L1 network."),(0,i.kt)("li",{parentName:"ul"},"Due to their generalist nature of including any state change for their parent network, optimistic\nrollups can run into gas limitations or cause network congestion in the case of Ethereum.")),(0,i.kt)("p",null,"Optimistic rollups are often used in the Ethereum ecosystem. Examples of optimistic EVM-based rollup\nsolutions include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.optimism.io/"},"Optimisim")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bridge.arbitrum.io/"},"Arbitrum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unipig.exchange/welcome"},"Unipig"))),(0,i.kt)("h2",{id:"zero-knowledge-rollups"},"Zero-knowledge Rollups"),(0,i.kt)("p",null,"Zero-knowledge rollups (often called ZK rollups) are a non-interactive method that utilizes\nzero-knowledge proofs to compute the validity of a particular set of state changes. Whereas\noptimistic rollups relied on fraud proofs, ZK rollups rely on cryptographic validation in the form\nof ZK proofs."),(0,i.kt)("p",null,"Zero-knowledge rollups are significantly faster in finalization, as the cryptographic validity proof\nhandles the nuance of ensuring a rollup is valid. However, the ZK rollups often suffer from\nperformance due to their complexity and difficult implementation into resource-constrained\nenvironments. Because Turing completeness is also challenging to achieve due to this computational\noverhead, their ability to be generalized (in terms of blockspace) is reduced. However, they have a\npromising future in solving some of the problems of optimistic rollups and addressing secure\nscalability."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Benefits:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They only require a small amount of data availability. Often, the proof is enough to ensure\nvalidity."),(0,i.kt)("li",{parentName:"ul"},"They can be proven trustlessly."),(0,i.kt)("li",{parentName:"ul"},"Because the proof is immediately available, finality is also instantaneous."),(0,i.kt)("li",{parentName:"ul"},"They have a promising future overall, as they have not reached maturity yet.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Drawbacks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They suffer from the same problems that other L2 solutions have regarding the centralization of L2\noperators."),(0,i.kt)("li",{parentName:"ul"},"They are computationally expensive, and ZK circuits are difficult to implement."),(0,i.kt)("li",{parentName:"ul"},"The potential for congestion is still a factor, as the amount of data could still be problematic.")),(0,i.kt)("h2",{id:"polkadot---native-shared-security"},"Polkadot - Native Shared Security"),(0,i.kt)("p",null,"Whereas rollups are considered solutions for L2 protocols,\nPolkadot include this functionality natively\nthrough its ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),". The Parachains Protocol, which is\nhow Polkadot handles network's ",(0,i.kt)("strong",{parentName:"p"},"sharding")," is\nmeant to accomplish the combined goals of providing security, scalability, and availability."),(0,i.kt)("p",null,"It enables parachains to verify their collective state and communicate with one another. Parachains\nhave similarities to aspects of optimistic and ZK rollups, which are reflected in how\nPolkadot handles the validity and availability\nof the parachain state. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators"),", a key part of\nPolkadot's architecture, are in principle\nsimilar to sequencers, as collators pass data with a proof-of-validity (PoV) function for liveness\nand communication with the relay chain."),(0,i.kt)("p",null,"Each shard, or parachain, is equipped with a unique state transition function (STF). This function\nensures that communication to the relay chain remains valid. Each STF, called runtime, is written in\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-wasm"},"Wasm"),". Any state transition function is valid if it\ncompiles to Wasm and abides by the Parachains Protocol."),(0,i.kt)("p",null,"Each STF runs a validity proof. The proof (",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"the Approval Protocol"),")\nis interactive, unlike ZK rollups, which are non-interactive. Additionally, unlike ZK rollups, there\nare no difficulties in creating parachains with Turing-complete logic. Each parachain is also a\nfull-fledged state machine (usually in the form of a blockchain). Similarly to optimistic rollups,\nthe Parachain Protocol also has cases where disputes and resolutions of potentially harmful para\nblocks (blocks representing the parachain) can take place, in which case validators are slashed if a\nbad parablock is found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Benefits:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Protocol level sharding, shared security, and interoperability."),(0,i.kt)("li",{parentName:"ul"},"Each shard has a low barrier of entry in terms of development, as anything that compiles to Wasm\nis a valid target."),(0,i.kt)("li",{parentName:"ul"},"Fast Finality (usually under a minute on Polkadot)."),(0,i.kt)("li",{parentName:"ul"},"Data availability is built-in through validators and mechanisms like\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-parachains-protocol#erasure-codes"},"erasure coding"),"."),(0,i.kt)("li",{parentName:"ul"},"No L2 implies less of a risk of incurring centralization issues for sequencers or other L2\noperators.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Drawbacks:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution of code in Wasm could be a performance bottleneck, as it is slower than making native\ncalls."),(0,i.kt)("li",{parentName:"ul"},"The relay chain sets a\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/protocol-overview.html?highlight=10#protocol-overview"},"hard limit"),"\non the size and weights of the PoV (Proof of Validity) blocks which contain the parachain state\ntransition data.")),(0,i.kt)("p",null,"Despite these drawbacks, Polkadot remains\nupgradable through forkless upgrades, which allows the protocol to be easily upgradable to stay in\nline with future technological advances."))}m.isMDXComponent=!0}}]);
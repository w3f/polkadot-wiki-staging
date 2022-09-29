"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3262],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>u});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,i(i({ref:a},h),{},{components:t})):n.createElement(m,i({ref:a},h))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34204:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],s={id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},l=void 0,c={unversionedId:"build/build-parachains",id:"build/build-parachains",title:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",source:"@site/../docs/build/build-parachains.md",sourceDirName:"build",slug:"/build-pdk",permalink:"/docs/build-pdk",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-parachains.md",tags:[],version:"current",lastUpdatedBy:"Frank Bell",lastUpdatedAt:1664366913,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},sidebar:"docs",previous:{title:"Builders Starter's Guide",permalink:"/docs/build-build-with-polkadot"},next:{title:"Decentralized Storage",permalink:"/docs/build-storage"}},h={},p=[{value:"Your Go-To Overview for Developing a Parachain",id:"your-go-to-overview-for-developing-a-parachain",level:3},{value:"Why Create a Parachain?",id:"why-create-a-parachain",level:3},{value:"What are the Benefits of Deploying a Parachain?",id:"what-are-the-benefits-of-deploying-a-parachain",level:3},{value:"Shared Security (Pooled Security)",id:"shared-security-pooled-security",level:4},{value:"On-Chain Governance (Thought-through Governance)",id:"on-chain-governance-thought-through-governance",level:4},{value:"Scalability",id:"scalability",level:4},{value:"Interoperability",id:"interoperability",level:4},{value:"Things to Consider",id:"things-to-consider",level:2},{value:"Para-nomics",id:"para-nomics",level:3},{value:"Digital nation states",id:"digital-nation-states",level:4},{value:"Connecting digital economies",id:"connecting-digital-economies",level:4},{value:"Para-objects",id:"para-objects",level:3},{value:"Migration",id:"migration",level:3},{value:"Implement a Parachain",id:"implement-a-parachain",level:2},{value:"Parachain Development Kit (PDK)",id:"parachain-development-kit-pdk",level:3},{value:"Key Components",id:"key-components",level:4},{value:"What PDKs Exist?",id:"what-pdks-exist",level:4},{value:"Cumulus",id:"cumulus",level:4},{value:"How to set up your parachain",id:"how-to-set-up-your-parachain",level:3},{value:"Future PDKs",id:"future-pdks",level:3},{value:"Testing a Parachain",id:"testing-a-parachain",level:2},{value:"Rococo Testnet",id:"rococo-testnet",level:3},{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",level:3},{value:"Obtaining ROC",id:"obtaining-roc",level:3},{value:"Build and Register a Rococo Parathread",id:"build-and-register-a-rococo-parathread",level:3},{value:"How to Make Cross Chain Transfers",id:"how-to-make-cross-chain-transfers",level:3},{value:"Downward Transfers",id:"downward-transfers",level:4},{value:"Upward Transfers",id:"upward-transfers",level:4},{value:"Lateral Transfers",id:"lateral-transfers",level:4},{value:"How to Connect to a Parachain",id:"how-to-connect-to-a-parachain",level:3},{value:"Parachain Playground",id:"parachain-playground",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Parachain",id:"parachain",level:3},{value:"Parathread",id:"parathread",level:3},{value:"Resources",id:"resources",level:2}],d={toc:p};function u(e){var a=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"your-go-to-overview-for-developing-a-parachain"},"Your Go-To Overview for Developing a Parachain"),(0,r.kt)("p",null,"This guide will cover the motivation to build a parachain or parathread, the tools available to\nfacilitate this, the steps to test, and finally, how to launch your network on\nPolkadot ."),(0,r.kt)("h3",{id:"why-create-a-parachain"},"Why Create a Parachain?"),(0,r.kt)("p",null,"Parachains are connected to and secured by the Relay Chain. They benefit from the ",(0,r.kt)("em",{parentName:"p"},"pooled security"),",\n",(0,r.kt)("em",{parentName:"p"},"thought-through governance"),", and overall ",(0,r.kt)("em",{parentName:"p"},"scalability")," of the heterogeneous sharding approach of\nthe network. Creating a parachain can be seen as creating a ",(0,r.kt)("strong",{parentName:"p"},"Layer-1 blockchain"),", which has its\nown logic and runs in parallel within the\nPolkadot ecosystem."),(0,r.kt)("p",null,"Developers can focus on creating state-of-the-art chains that take advantage of\nPolkadot's next-generation approach. Some\nexamples of what a parachain could be are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeFi (Decentralized Finance) Applications"),(0,r.kt)("li",{parentName:"ul"},"Digital Wallets"),(0,r.kt)("li",{parentName:"ul"},"IoT (Internet of Things) Applications"),(0,r.kt)("li",{parentName:"ul"},"Gaming"),(0,r.kt)("li",{parentName:"ul"},"Web 3.0 Infrastructure")),(0,r.kt)("p",null,"and more."),(0,r.kt)("p",null,"Polkadot aims to be a bet against blockchain maximalism, where the success of Polkadot's\nheterogeneous multi-chain approach will play a key part in the overall advancement of Web 3.0 and\ndecentralized systems. As a result, Polkadot\u2019s parachain model was designed with the belief that the\ninternet of the future will have many different types of blockchains working together."),(0,r.kt)("h3",{id:"what-are-the-benefits-of-deploying-a-parachain"},"What are the Benefits of Deploying a Parachain?"),(0,r.kt)("p",null,"The parachain model attempts to alleviate five key ",(0,r.kt)("em",{parentName:"p"},"build")," failures of present technology stacks, as\ndescribed in the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot Whitepaper"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": How much is spent on resources and will the network be subject to bottlenecks?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Isolatability"),": Are the needs of many accounted for under the same framework?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developability"),": Is the system tooling, system support, and overall system integrity\ndependable?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance"),": Can the network remain flexible to evolve and adapt over time? Can decisions be\nmade with sufficient inclusivity, legitimacy, and transparency to provide effective leadership of\na decentralised system?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applicability"),": Does the technology address a burning need on its own? Is other \u201cmiddleware\u201d\nrequired to bridge the gap to actual applications?")),(0,r.kt)("h4",{id:"shared-security-pooled-security"},(0,r.kt)("a",{parentName:"h4",href:"/docs/learn-security"},"Shared Security")," (Pooled Security)"),(0,r.kt)("p",null,"Parachains can lease the security of the\nPolkadot network by bonding\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT")," for a parachain\nslot. This means that the social costs of building a community around your project and convincing\nvalidators to participate in your network security are reduced.\nPolkadot has strong security, and\ndecentralised application projects wishing to benefit from this security would want to become a\nparachain to share in that pooled security."),(0,r.kt)("h4",{id:"on-chain-governance-thought-through-governance"},(0,r.kt)("a",{parentName:"h4",href:"/docs/learn-governance"},"On-Chain Governance")," (Thought-through Governance)"),(0,r.kt)("p",null,"Most governance systems in blockchains use an off-chain governance mechanism. Polkadot's on-chain\ngovernance encourages maximum participation of token holders and is frictionless and transparent. It\nalso enables ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"forkless upgrades"),"."),(0,r.kt)("h4",{id:"scalability"},"Scalability"),(0,r.kt)("p",null,"The sharded multichain network approach allows for what is essentially parallel computation\n(processing power) that can process several transactions in parallel. Isolated blockchains are often\nfaced with the network constraint of processing transactions in sequence, causing bottlenecks."),(0,r.kt)("h4",{id:"interoperability"},"Interoperability"),(0,r.kt)("p",null,"Any decentralised application or chain that wants to enable trustless messaging to other parachains\nalready connected to Polkadot would want to\nbecome a parachain. Interoperability between sovereign chains involves certain constraints and\ncomplex protocols to enable across a wide breadth of chains."),(0,r.kt)("p",null,"With Polkadot, you will get this feature out\nof the box if you build your application as a parachain. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM format"),"\nallows any parachains to communicate by passing messages between them. Furthermore, as bridges to\nother chains are connected (such as those to Bitcoin or Ethereum)\nPolkadot's parachains will be able to\ncommunicate with these as well."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Despite the benefits of becoming a parachain, developers should be conscious of the challenges in\nbecoming a parachain, and whether building a blockchain with an end goal of becoming a parachain is\na viable one for their project.")),(0,r.kt)("p",null,"On Polkadot, you are able to put your\nblockchain\u2019s latest block head onto the relay chain. As a parachain, the blocks you submit are\nverified by validators with a Wasm runtime, which can be stored on the relay chain. You also get the\nability to communicate with other parachains using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," format: an\nabstract message passing system. Message passing is tracked on the relay chain - as such, you can\nprove the delivery of messages and facilitate trustless interactions."),(0,r.kt)("p",null,"As you can place your blockchain\u2019s latest block head, you can achieve deterministic finalization for\nyour chain. The hard part of reaching finalization for blockchains tends to be the consensus, where,\nin the parachain model, a blockchain can offload consensus to the overall shared network, and focus\non block production. Since the validators have the Wasm runtime for all the parachains, your\nparachain shares the security of the validator pool with everyone on the relay chain."),(0,r.kt)("p",null,"Any validator in the validator pool can help validate your blockchain."),(0,r.kt)("h2",{id:"things-to-consider"},"Things to Consider"),(0,r.kt)("h3",{id:"para-nomics"},(0,r.kt)("a",{parentName:"h3",href:"/docs/learn-parachains#parachain-economies"},"Para-nomics")),(0,r.kt)("h4",{id:"digital-nation-states"},"Digital nation states"),(0,r.kt)("p",null,"Parachains can be seen as autonomous agents; networks that act as decentralised digital nation\nstates. Parachains have their own communities, rules, economies, governance, treasuries, and\nrelationships with external chains. As a result, the economic policies within parachain ecosystems\nare subject to the developers and overall community of that parachain ecosystem; there isn't\nnecessarily a go-to economic model a parachain should follow."),(0,r.kt)("p",null,"Moreover, ",(0,r.kt)("em",{parentName:"p"},"becoming a parachain")," has an opportunity cost associated. Ideally, you can increase the\nvalue of the network by participating in the parachain selection process, and this should serve as a\ngood return on investment."),(0,r.kt)("h4",{id:"connecting-digital-economies"},"Connecting digital economies"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," act as network maintainers and maintain a full node of a\nparachain. They are incentivized with a native token payout from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction fees collected"),(0,r.kt)("li",{parentName:"ul"},"Parathread token sponsorship",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Blocks are naturally produced when a parathread bid is less than the native token payout.")))),(0,r.kt)("h3",{id:"para-objects"},"Para-objects"),(0,r.kt)("admonition",{title:"The Relay Chain can host arbitrary state machines, not just blockchains.",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Polkadot network will encourage the\nconnection and interoperability between different ",(0,r.kt)("em",{parentName:"p"},"para-objects"),"."),(0,r.kt)("p",{parentName:"admonition"},"Here, para-objects are referring to objects on the network that operate in parallel, generally,\nparallelizable objects.")),(0,r.kt)("p",null,"These could be in the form of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System level chains (permanent chains): ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-auction"},"leased slots"),",\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-parathreads"},"parathread pool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-bridges"},"Bridge")," Hubs"),(0,r.kt)("li",{parentName:"ul"},"Nested Relay Chains: ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-launch##polkadot2.0"},"Polkadot 2.0"))),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("p",null,'Projects that are already functioning as "solochains" or in isolated environments may be interested\nin migrating onto Polkadot as a para-object.\nWhile the parachain model has its benefits, it may not be the go-to strategy for some projects.'),(0,r.kt)("p",null,"As a path for migration onto Polkadot, it may\nbe more viable to migrate to one of the chains in one of the reserved slots."),(0,r.kt)("p",null,"For instance, there are currently options for ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contract deployment"),"\non Kusama through the networks that have secured a slot in the latest slot auctions."),(0,r.kt)("h2",{id:"implement-a-parachain"},"Implement a Parachain"),(0,r.kt)("p",null,"The Parachain Implementer's Guide is a significant work in progress and maintained by Parity Tech.\n",(0,r.kt)("a",{parentName:"p",href:"https://w3f.github.io/parachain-implementers-guide/"},(0,r.kt)("strong",{parentName:"a"},"The live version"))," is built from the source\nlocated in the official\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/tree/master/roadmap/implementers-guide"},"Polkadot repository"),"."),(0,r.kt)("h3",{id:"parachain-development-kit-pdk"},"Parachain Development Kit (PDK)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"PDK")," is a set of tools that allows developers to easily create a parachain. In practice, the\nPDK will consist of the following key components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"State transition function")," : a way for your application to move from one state to another state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Collator node")," network with certain responsibilities regarding parachains.")),(0,r.kt)("h4",{id:"key-components"},"Key Components"),(0,r.kt)("p",null,"The state transition function (STF) can be an abstract way for an application to go from one state\nto another state. The only constraint that Polkadot\nplaces on this STF is that it must be easily verifiable -- usually\nthrough what we call a ",(0,r.kt)("em",{parentName:"p"},"witness")," or ",(0,r.kt)("em",{parentName:"p"},"proof"),". It must be so because the Relay Chain validators will\nneed to check that each state it receives from the collator node is correct without actually running\nthrough the entire computation. Some examples of these proofs include the Proof-of-Validity blocks\nor zk-SNARKs, which require less computational resources to verify than they do to generate. The\nverification asymmetry in the proof generation of the STF is one of the integral insights that\nallows Polkadot to scale while keeping\nhigh-security guarantees."),(0,r.kt)("p",null,"A collator node is one of the types of network maintainers in the protocol. They are responsible for\n",(0,r.kt)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned from the\niteration of the state transition function. They must remain online to keep track of the state and\nalso of the XCMP messages that it will route between itself and other parachains. Collator nodes are\nresponsible for passing the succinct proofs to the relay chain's validators and tracking the latest\nblocks from the relay chain. In essence, a collator node also acts as a light client for the relay\nchain. For more on collator nodes, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collator page"),"."),(0,r.kt)("h4",{id:"what-pdks-exist"},"What PDKs Exist?"),(0,r.kt)("p",null,"Currently, the only PDK is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Parity Substrate")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),". ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://substrate.io/"},"Substrate"))," is a\nblockchain framework that provides the basic building blocks of a blockchain (things like the\nnetworking layer, consensus, a Wasm interpreter) while providing an intuitive way to construct your\nruntime. Substrate is made to ease the process of creating a new chain, but it does not provide\nsupport for Polkadot compatibility directly.\nFor this reason, ",(0,r.kt)("inlineCode",{parentName:"p"},"Cumulus"),", an added ",(0,r.kt)("em",{parentName:"p"},"library")," contains all of the\nPolkadot compatibility glue code."),(0,r.kt)("admonition",{title:"Get started with Substrate",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The best way to get started with Substrate is to explore the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/"},"Substrate Developer Hub"),", an online resource built and maintained by\n",(0,r.kt)("a",{parentName:"p",href:"https://parity.io"},"Parity Technologies"),".")),(0,r.kt)("h4",{id:"cumulus"},"Cumulus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Cumulus clouds are shaped sort of like dots; together they form an intricate system;\nbeautiful and functional.\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is an extension to Substrate that makes it easy to\nmake any Substrate-built runtime into a Polkadot-compatible parachain."),(0,r.kt)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a\nPolkadot Relay Chain (i.e., parachains). This\nruns a Polkadot node internally, and dictates\nto the client and synchronization algorithms which chain to follow, finalize, and treat as correct."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Cumulus overview")," for a\nmore detailed description of Cumulus."),(0,r.kt)("p",null,"Cumulus is still in development, but the idea is that it should be simple to take a Substrate chain\nand add the parachain code by importing the crates and adding a single line of code. Keep up-to-date\nwith the latest Cumulus developments from the ",(0,r.kt)("a",{parentName:"p",href:"###cumulus"},"Cumulus section"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is ",(0,r.kt)("strong",{parentName:"p"},"not\nnecessary")," that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: ",(0,r.kt)("em",{parentName:"p"},"state transition function")," and ",(0,r.kt)("em",{parentName:"p"},"collator node"),"."),(0,r.kt)("p",{parentName:"admonition"},"Everything else is up to the implementer of the PDK.")),(0,r.kt)("p",null,"Cumulus handles the network compatibility overhead that any parachain would need to implement to be\nconnected to Polkadot. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross-chain message passing (XCMP)"),(0,r.kt)("li",{parentName:"ul"},"Out-of-the-box Collator node setup"),(0,r.kt)("li",{parentName:"ul"},"An embedded full client of the Relay Chain"),(0,r.kt)("li",{parentName:"ul"},"Block authorship compatibility")),(0,r.kt)("p",null,"Are you interested in building a PDK? See the ",(0,r.kt)("a",{parentName:"p",href:"##future-pdks"},"future PDKs")," section for details."),(0,r.kt)("h3",{id:"how-to-set-up-your-parachain"},"How to set up your parachain"),(0,r.kt)("p",null,"After creating your chain runtime logic with Substrate, you will be able to compile it down to a\nWasm executable. This Wasm code blob will contain the entire state transition function of your\nchain, and is what you will need to deploy your project to Polkadot as either a parachain or\nparathread."),(0,r.kt)("p",null,"Validators on Polkadot will use the submitted\nWasm code to validate the state transitions of your chain or thread, but doing this requires some\nadditional infrastructure. A validator needs some way to stay up to date with the most recent state\ntransitions, since Polkadot nodes will not be\nrequired to also be nodes of your chain."),(0,r.kt)("p",null,"This is where the collator node comes into play. A collator is a maintainer of your parachain and\nperforms the critical action of producing new block candidates for your chain and passing them to\nPolkadot validators for inclusion in the\nPolkadot Relay Chain."),(0,r.kt)("p",null,"Substrate comes with its own networking layer built-in but unfortunately only supports solo chains\n(that is, chains that do not connect to the relay chain). However, there is the Cumulus extension\nthat includes a collator node and allows for your Substrate-built logic to be compatible with\nPolkadot as either a parachain or parathread."),(0,r.kt)("h3",{id:"future-pdks"},"Future PDKs"),(0,r.kt)("admonition",{title:"Call to action",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Do you want to build a Parachain Development Kit from scratch? The Web3 Foundation is giving grants\nto teams who are doing this, learn more and apply on the\n",(0,r.kt)("a",{parentName:"p",href:"https://grants.web3.foundation"},"W3F grants page"),".")),(0,r.kt)("p",null,"One example of a PDK W3F is interested in supporting is a\n",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675"},"roll-up")," kit that allowed\ndevelopers to create SNARK-based parachains. If we review the roll-up write-up, we see that the\nsystem uses two roles: users that update ",(0,r.kt)("strong",{parentName:"p"},"state")," and an operator that ",(0,r.kt)("strong",{parentName:"p"},"aggregates the state\nupdates")," into a single on-chain update. It should be straightforward to see how we can translate\nthis to the parachain terms. The state transition function for a roll-up-like parachain would be\nupdating the state (in practice, most likely a Merkle tree, which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node, which would aggregate the state and\ncreate the zk-SNARK proof that it would hand to a Relay Chain's validators for verification."),(0,r.kt)("p",null,"If you or your team are interested in developing a PDK feel free to open an issue on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Web3-collaboration"},"W3F collaboration repository")," for comment. There may be\ngrants available for this type of work."),(0,r.kt)("h2",{id:"testing-a-parachain"},"Testing a Parachain"),(0,r.kt)("h3",{id:"rococo-testnet"},"Rococo Testnet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo-crown"},"Rococo")," is a testnet built for testing\nparachains. Rococo utilizes Cumulus and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm#xcmp-lite-hrmp"},"HRMP")," (Horizontal\nRelay-routed Message Passing) in order to send transfers and messages between parachains and a Relay\nChain. Every message is sent to the Relay Chain, then from the Relay Chain to the desired parachain."),(0,r.kt)("p",null,"Rococo currently runs four test system parachains:\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstatemint-rococo-rpc.parity.io#/explorer"},"Statemint"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://tick-rpc.polkadot.io#/explorer"},"Tick"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://trick-rpc.polkadot.io#/explorer"},"Trick")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://track-rpc.polkadot.io#/explorer"},"Track"),". as well as several\nexternally developed parachains."),(0,r.kt)("h3",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,r.kt)("p",null,"You can see the list of included parachains\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"here"),". A list of\nproposed parachains is available\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"here"),"."),(0,r.kt)("h3",{id:"obtaining-roc"},"Obtaining ROC"),(0,r.kt)("p",null,"ROC are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#rococo-faucet:matrix.org"},"Rococo Faucet"),"\nchannel on Matrix. To receive ROC tokens, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!drip YOUR_ROCOCO_ADDRESS\n")),(0,r.kt)("h3",{id:"build-and-register-a-rococo-parathread"},"Build and Register a Rococo Parathread"),(0,r.kt)("p",null,"The parachains of Rococo all use the same runtime code. The only difference between them is the\nparachain ID used for registration with the Relay Chain."),(0,r.kt)("p",null,"You will need to run a Rococo collator. To do so, you need to compile the following binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --locked -p polkadot-collator\n")),(0,r.kt)("p",null,"Once the executable is built, launch collators for your parachain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./target/release/polkadot-collator --chain $CHAIN --validator\n")),(0,r.kt)("p",null,"If you are interested in running and launching your own parathread or parachain, Parity Technologies\nhas created\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/parachains/connect-to-a-relay-chain/"},"parachain tutorials"),"\nto show you how. Get stuck or need support along the way? Join the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#parachain-technical:matrix.parity.io"},"Parachain Technical matrix chat channel"),"\nand connect with other builders there."),(0,r.kt)("h3",{id:"how-to-make-cross-chain-transfers"},"How to Make Cross Chain Transfers"),(0,r.kt)("p",null,'To send a transfer between parachains, navigate to "Accounts" > "Transfer" on Polkadot-JS Apps. From\nhere, you\'ll need to select the parachain node that you are running. Next, enter in the amount that\nyou\'d like to send to another parachain. Be sure to select the correct parachain you\'d like to send\nan amount to. Once you\'ve hit the "Submit" button, you should see a green notification, indicating a\nsuccessful transfer.'),(0,r.kt)("h4",{id:"downward-transfers"},"Downward Transfers"),(0,r.kt)("p",null,"Downward transfers are when an account on the Relay Chain sends a transfer to their account on a\ndifferent parachain. This type of transfer uses a depository and mint model, meaning that when the\nDOT leave the sender's account on the Relay Chain and are transferred into an account on a\nparachain, the parachain mints a corresponding amount of tokens on the parachain."),(0,r.kt)("p",null,'For example, we can send tokens from Alice\'s account on the Relay Chain to her account on\nparachain 200. To do so, we will need to head to the "Network" > "Parachains" tab and click on the\n"Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo downward transfer",src:t(88682).Z,width:"2214",height:"930"})),(0,r.kt)("p",null,"Notice here, that we can select which parachain to send the funds to, specify the amount to be sent,\nand add any comments or a memo for the transfer."),(0,r.kt)("h4",{id:"upward-transfers"},"Upward Transfers"),(0,r.kt)("p",null,"Upward transfers occur ",(0,r.kt)("em",{parentName:"p"},"from")," a parachain ",(0,r.kt)("em",{parentName:"p"},"to"),' an account on the Relay Chain. To proceed with this\nkind of transfer, we need to be connected to a parachain node on the network and be on the\n"Network" > "Parachains" tab. Click on the "Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo upward transfer",src:t(79078).Z,width:"2200",height:"738"})),(0,r.kt)("p",null,"Note that the toggle should be set to off, ensuring that the funds go to the Relay Chain and not\nanother parachain."),(0,r.kt)("h4",{id:"lateral-transfers"},"Lateral Transfers"),(0,r.kt)("p",null,"Lateral transfers are only possible with at least two different registered parachains. In true XCMP,\nlateral transfers would allow for messages to be sent directly from one parachain to another.\nHowever, this is not yet implemented, so the Relay Chain is helping us deliver messages for the time\nbeing. Lateral transfers work through the depository model, which means that in order to transfer\ntokens from chain 200 to chain 300, tokens must already be owned by chain 200 deposited on\nchain 300. Lateral transfers are called HRMP, Horizontal Relay-Chain Message Passing."),(0,r.kt)("p",null,"Before we can send funds from one parachain to another, we must ensure that the chain's account on\nthe recipient chain has some funds in it. In this example, Alice will be sending some funds from her\naccount on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,"We can get that parachain account address, from our parachain 300's terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-08-26 14:46:34 Parachain Account: 5Ec4AhNv5ArwGxtngtW8qcVgzpCAu8nokvnh6vhtvvFkJtpq\n")),(0,r.kt)("p",null,"From Alice's account on the Relay Chain, she can send some amount to parachain 200's depository."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer",src:t(69649).Z,width:"2186",height:"846"})),(0,r.kt)("p",null,"Alice is now able to send from her account on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer part 2",src:t(63623).Z,width:"1592",height:"852"})),(0,r.kt)("h3",{id:"how-to-connect-to-a-parachain"},"How to Connect to a Parachain"),(0,r.kt)("p",null,"If you would like to connect to a parachain via ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),",\nyou may do so by clicking on the network selection at the top left-hand corner of the navigation and\nselecting any parachain of choice."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo parachains",src:t(14696).Z,width:"544",height:"538"})),(0,r.kt)("p",null,'For the purpose of these following examples, we will be using the Rococo testnet "Custom Node"\nunderneath "Development", following the\n',(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/parachains/connect-to-a-relay-chain/"},"parachain tutorials"),"."),(0,r.kt)("h3",{id:"parachain-playground"},"Parachain Playground"),(0,r.kt)("p",null,"You can also take advantage of the account functions offered on Polkadot-JS Apps to test the entire\nParachain onboarding process (e.g. crowdloans, auctions, registrations)."),(0,r.kt)("p",null,"Start a local node on ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-networks###westend-test-network"},"Westend")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend-dev --alice\n")),(0,r.kt)("p",null,"Then, connect your local node with Polkadot-JS Apps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachains playground",src:t(8295).Z,width:"2528",height:"668"})),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Substrate-based chains, including the Polkadot and Kusama Relay Chains, use an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 encoding")," for\ntheir address formats.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"This page")," serves as the\ncanonical registry for teams to see which chain corresponds to a given prefix, and which prefixes\nare available."),(0,r.kt)("h3",{id:"parachain"},"Parachain"),(0,r.kt)("p",null,"To include your parachain into the Polkadot\nnetwork, you will need to acquire a parachain slot."),(0,r.kt)("p",null,"Parachain slots will be sold in open auctions, the mechanics of which can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain auction"),"\n"," page of the wiki."),(0,r.kt)("h3",{id:"parathread"},"Parathread"),(0,r.kt)("p",null,"Parathreads will not require a parachain slot, so you will not need to engage in the candle auction\nmechanism. Instead, you will be able to register your parathread code to a Relay Chain for a fee and\nfrom then be able to start participating in the per-block auctions for inclusion of your state\ntransition into a Relay Chain."),(0,r.kt)("p",null,"For more information on how parathread per-block auctions work, see the more detailed\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathread"),"\n"," page."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"Common Good Parachains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/the-launch-of-parachains/"},"The Launch of Parachains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06"},"Parathreads: Pay-as-you-go Parachains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-bridges-connecting-the-polkadot-ecosystem-with-external-networks-1118916392e3"},"Polkadot Bridges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-path-of-a-parachain-block?utm_source=profile&utm_medium=profile_web&utm_campaign=profile"},"The Path of a Parachain Block (Video)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-parachain-slots/"},"Polkadot Parachain Slots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fYc1yolanoE"},"How to become a parachain on Polkadot (Video)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/trusted-execution-environments-and-the-polkadot-ecosystem/"},"Trusted Execution Environments and the Polkadot Ecosystem"))))}u.isMDXComponent=!0},8295:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/parachain-playground-7873519d5357d27cd254133f7c6ae79f.png"},14696:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-76ab1faa61e1f8677724db7cbf2c16a5.png"},88682:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-downward-transfer-b5c167bf833760e06130c7ffb91006bc.png"},69649:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer-312054a2d9d0d676de02fb20a170ed64.png"},63623:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer2-9d6fded610bdc51b7140adcae0c27be6.png"},79078:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-upward-transfer-d6b7d116c2a96a5a18cebe77b40620a7.png"}}]);
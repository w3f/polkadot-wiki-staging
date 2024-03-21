"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"learn-hyperbridge",title:"Hyperbridge",sidebar_label:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",keywords:["bridge","polkadot","ethereum"],slug:"../learn-hyperbridge"},l=void 0,c={unversionedId:"learn/learn-hyperbridge",id:"learn/learn-hyperbridge",title:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",source:"@site/../docs/learn/learn-hyperbridge.md",sourceDirName:"learn",slug:"/learn-hyperbridge",permalink:"/docs/learn-hyperbridge",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-hyperbridge.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1706107821,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{id:"learn-hyperbridge",title:"Hyperbridge",sidebar_label:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",keywords:["bridge","polkadot","ethereum"],slug:"../learn-hyperbridge"},sidebar:"docs",previous:{title:"SASSAFRAS",permalink:"/docs/learn-sassafras"},next:{title:"Archive",permalink:"/docs/learn-archive-index"}},p={},h=[{value:"Coprocessor Model",id:"coprocessor-model",level:2},{value:"Parachain as Coprocessors",id:"parachain-as-coprocessors",level:3},{value:"Interoperable State Machine Protocol (ISMP)",id:"interoperable-state-machine-protocol-ismp",level:3},{value:"Underlying technologies",id:"underlying-technologies",level:3},{value:"Terminology",id:"terminology",level:2},{value:"State Proofs",id:"state-proofs",level:3},{value:"Consensus Proofs",id:"consensus-proofs",level:3},{value:"Learn More",id:"learn-more",level:2}],d={toc:h},u="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Learn about Parachain and Bridges",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To follow the material on this page, it is recommended to be familiar with the concepts of\n",(0,n.kt)("a",{parentName:"p",href:"./learn-parachains"},"Parachains")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"Bridges"),".")),(0,n.kt)("p",null,"Interoperability is the core vision of the\nPolkadot technology. Through years of\nblockchain development, much effort has been put into making a secure interoperability solution\nbetween blockchains. Polkadot provides secure\ninteroperability between parachains through its ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"Cross-Consensus Messaging (XCM)"),",\nand ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport#xcmp-cross-chain-message-passing"},"Cross-Chain Message Passing (XCMP)"),"\nprotocol. However, these solutions work when there is a shared security. In the case of interaction\nbetween chains that do not belong to the same Polkadot's shared security, bridges are needed."),(0,n.kt)("p",null,"Hyperbridge (short for hyper-scalable bridge) is innovated as a cross-chain solution built as an\ninteroperability coprocessor. Hyperbridge is crafted to scale cryptographically secure, consensus,\nand state-proof-based interoperability across all blockchains."),(0,n.kt)("h2",{id:"coprocessor-model"},"Coprocessor Model"),(0,n.kt)("p",null,"Ensuring secure cross-chain communication involves the meticulous verification of various aspects,\nincluding: ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-consensus"},"Consensus Mechanisms"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://research.polytope.technology/consensus-proofs"},"Consensus Faults"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://research.polytope.technology/state-machine-proofs"},"State Proofs")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains#state-transitions"},"State Transitions"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What is a coprocessor?"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Coprocessor"),", in the context of hardware, can be referred to as a microprocessor designed to\nsupplement the capabilities of the primary processor. For example, a GPU is a coprocessor of the\nCPU to be optimized for graphical and simultaneous computation.")),(0,n.kt)("p",null,"Due to the complexity and expensiveness of the onchain verification process, in the coprocessor\nmodel, the computation is performed off-chain. The execution outcomes and cryptographic proofs\nvalidating their accuracy are subsequently presented on-chain."),(0,n.kt)("p",null,"Expanding more about the coprocessor model, it has been applied in other solutions of offloading\ncryptographic computation as well, particularly\n",(0,n.kt)("a",{parentName:"p",href:"https://orochi.network/blog/Exploring-ZK-Coprocessor-What-Comes-Next"},(0,n.kt)("strong",{parentName:"a"},"Zero-knowledge (ZK) coprocessor")),"\nor ",(0,n.kt)("a",{parentName:"p",href:"https://www.di.ens.fr/~nitulesc/files/Survey-SNARKs.pdf"},"SNARK circuit"),"."),(0,n.kt)("h3",{id:"parachain-as-coprocessors"},"Parachain as Coprocessors"),(0,n.kt)("p",null,"By leveraging the cost-effective consensus proofs facilitated by\n",(0,n.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/sect-finality#sect-grandpa-beefy"},"BEEFY"),", Hyperbridge affirms the\nlegitimacy of all parachain state transitions safeguarded by the network."),(0,n.kt)("p",null,"This capability enables the distribution of the validation workload for consensus, state proofs, and\nstate transition re-execution across various designated\n",(0,n.kt)("a",{parentName:"p",href:"/docs/polkadot-direction#polkadot-as-a-computational-resource"},"Parachain Cores"),". Hence,\nPolkadot is utilized by Hyperbridge as a verifiable computation layer to provide the\n",(0,n.kt)("a",{parentName:"p",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor#full-node-level-security"},'"Full Node Security"'),"\nin cross-chain bridges."),(0,n.kt)("p",null,"Hence, an additional layer of security is provided, allowing Hyperbridge to detect and prevent\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine")," behaviors across connected chains."),(0,n.kt)("h3",{id:"interoperable-state-machine-protocol-ismp"},"Interoperable State Machine Protocol (ISMP)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor"},"Interoperable State Machine Protocol (ISMP)"),"\nprovides a familiar HTTP-like API for developers who want to make cross-chain requests to trigger\ncertain logic on the counterparty chain. It allows POST requests to send arbitrary data to connected\nchains and GET requests to read the storage (verified through state proofs) of applications on\nconnected chains."),(0,n.kt)("p",null,"In addition to facilitating cross-chain message passing among connected chains, ISMP also serves as\na synchronization primitive across Hyperbridge's internal state machines. This enables its parachain\ncores to communicate with each other and delegate tasks."),(0,n.kt)("h3",{id:"underlying-technologies"},"Underlying technologies"),(0,n.kt)("p",null,"The underlying technologies of the Hyperbridge are integrated with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/953.pdf"},"PLONK verifier"),": The PLONK Verifier within Hyperbridge can\nbe likened to a sophisticated security apparatus. It operates like an expert detective,\nmeticulously ensuring the legitimacy of every transaction without compromising private details.\nContinuously enhancing its capabilities, particularly with advancements like UltraPLONK, this\nintegral component is pivotal in maintaining the utmost integrity and confidentiality of\ncross-chain communications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/sect-finality#sect-grandpa-beefy"},"BEEFY consensus"),": The BEEFY\n(Bridge Efficiency Enabling Finality Yielder) protocol functions as a complementary system to\nGRANDPA, specifically designed to facilitate efficient bridging between the Polkadot network's\nrelay chain and external, isolated blockchains like Ethereum. Notably, BEEFY addresses the\ninteroperability challenge with blockchains not initially constructed to integrate seamlessly with\nthe Polkadot interchain framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AztecProtocol/barretenberg"},"The Barretenberg backend"),": Within the realm of\nHyperbridge, Barretenberg functions as a powerhouse engine, adeptly managing intricate\nmathematical computations. As the backend infrastructure, it guarantees the swift, secure, and\nreliable execution of all cryptographic operations within the Hyperbridge ecosystem.")),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("h3",{id:"state-proofs"},"State Proofs"),(0,n.kt)("p",null,"State proofs are a critical primitive of the blockchain stack that enables things like trustless\nbridges. These off-chain light clients can access on-chain data in a permissionless and secure\nmanner and modular blockchain architectures where the execution layer can be decoupled from the\nconsensus layer."),(0,n.kt)("h3",{id:"consensus-proofs"},"Consensus Proofs"),(0,n.kt)("p",null,"Consensus Proofs in a blockchain system denote the mechanism by which participants, often nodes or\nvalidators, collectively agree on the validity of new transactions or blocks. The nature of\nconsensus proofs varies across different blockchain architectures, such as Proof-of-Work,\nProof-of-Stake, or other consensus algorithms."),(0,n.kt)("p",null,"The ultimate goal is to ensure a widespread and verifiable agreement among network participants,\nenhancing the security and reliability of the distributed ledger."),(0,n.kt)("p",null,"For example, Consensus Proofs in a proof of stake system are given as the signatures over the latest\nblock header in the chain from a supermajority (two-thirds plus one) subset of the full authority\nset."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"The information provided here is subject to change; keep up to date using the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor"},"Introducing Hyperbridge: An Interoperability Coprocessor")," -\nArticle by Seun Lanlege, Polytope Lab founder."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot-blockchain-academy.github.io/pba-book/blockchain-contracts/services-as-state-machines/page.html"},"Digital Services as State Machines")," -\nLecture about state machine from Polkadot Blockchain Academy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-bridges"},"Polkadot Wiki - Bridges")," - Learn about bridges\nin Polkadot"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-parachains"},"Polkadot Wiki - Parachain")," - Learn about\nparachain in Polkadot"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/hyperbridge"},"Hyperbridge Source Code")," - Public codebase\nrepository of hyperbridge."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ismp.polytope.technology/"},"Interoperable State Machine Protocol (ISMP) Book")," - Guidebook\nof the ISMP"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/stakenode_dev/status/1744653040764817675"},"The Puzzle of Blockchain Interoperability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/RFCs/blob/6f29561a4747bbfd95307ce75cd949dfff359e39/text/0001-agile-coretime.md"},"RFC-1: Agile Coretime")," -\nAgile periodic-sale-based model for assigning Coretime on the Polkadot Ubiquitous Computer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=MCOAwooWecs"},"ISMP, The Endgame for Parachain Interoperability | Sub0 2023")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smartcontractresearch.org/t/research-summary-plonk-permutations-over-lagrange-bases-for-oecumenical-noninteractive-arguments-of-knowledge/382"},"Research Summary: PlonK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge"))))}m.isMDXComponent=!0}}]);
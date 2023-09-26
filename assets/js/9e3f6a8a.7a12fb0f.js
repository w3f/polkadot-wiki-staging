"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2758],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),h=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=h(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=h(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var h=2;h<r;h++)s[h]=t[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14865:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var n=t(87462),o=t(63366),r=(t(67294),t(3905)),s=["components"],i={id:"learn-comparisons-ethereum-2",title:"Polkadot vs. Ethereum",sidebar_label:"Ethereum",description:"Comparison between Polkadot and Ethereum.",keywords:["ethereum","Ethereum","proof of stake","sharding"],slug:"../learn-comparisons-ethereum-2"},l=void 0,h={unversionedId:"learn/learn-comparisons-ethereum-2",id:"learn/learn-comparisons-ethereum-2",title:"Polkadot vs. Ethereum",description:"Comparison between Polkadot and Ethereum.",source:"@site/../docs/learn/learn-comparison-ethereum-2.md",sourceDirName:"learn",slug:"/learn-comparisons-ethereum-2",permalink:"/docs/learn-comparisons-ethereum-2",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparison-ethereum-2.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1695621828,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{id:"learn-comparisons-ethereum-2",title:"Polkadot vs. Ethereum",sidebar_label:"Ethereum",description:"Comparison between Polkadot and Ethereum.",keywords:["ethereum","Ethereum","proof of stake","sharding"],slug:"../learn-comparisons-ethereum-2"},sidebar:"docs",previous:{title:"Kusama",permalink:"/docs/learn-comparisons-kusama"},next:{title:"Cosmos",permalink:"/docs/learn-comparisons-cosmos"}},c={},d=[{value:"High-Level Comparison",id:"high-level-comparison",level:2},{value:"Scalability: Sharding vs. Danksharding",id:"scalability-sharding-vs-danksharding",level:2},{value:"Architectural Differences: Polkadot and Ethereum",id:"architectural-differences-polkadot-and-ethereum",level:2},{value:"Forks, Upgrades, and Governance",id:"forks-upgrades-and-governance",level:3},{value:"Consensus and Finalization",id:"consensus-and-finalization",level:3},{value:"Staking Mechanics",id:"staking-mechanics",level:3},{value:"Interoperability and Message Passing",id:"interoperability-and-message-passing",level:3},{value:"DApp Support and Development",id:"dapp-support-and-development",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},u="wrapper";function m(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is the first fully sharded production-grade blockchain protocol. The current protocol of\nEthereum does not implement sharding and it is the main focus of\n",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq#What-is-Danksharding"},"the next major upgrade"),".\nSimilar to Polkadot and its parachains, Ethereum has goals of being a multi-sharded network. When a\nnetwork is ",(0,r.kt)("strong",{parentName:"p"},"sharded"),", this implies that it is capable of executing multiple (and often many) state\ntransitions in parallel in a scalable manner. One key difference is that Polkadot parachains are\nheterogeneous shards while Ethereum will have homogeneous shards. In other words, each parachain can\nhave its own state transition logic whereas on Ethereum, all the shards use the same state\ntransition logic."),(0,r.kt)("p",null,"Both protocols are blockchains but serve fundamentally different roles in how they are utilized:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum is a general-purpose blockchain that hosts the Ethereum Virtual Machine, an environment\nfor executing smart contracts."),(0,r.kt)("li",{parentName:"ul"},"Polkadot is a heterogeneous sharded, multi-chain protocol that hosts multiple chains and provides\na way for them to partake in a shared security model. Polkadot acts as a ",(0,r.kt)("strong",{parentName:"li"},"meta-protocol")," that\nallows for multiple protocols to coexist and work together.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'It\'s important to note that the "Ethereum" here refers to what was previously known as "Eth2" or\n"Ethereum 2.0". For more concrete details regarding the subsequent iterations of Ethereum, please\nrefer to the ',(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/roadmap/"},"Ethereum Roadmap"),"."),(0,r.kt)("p",{parentName:"admonition"},"It's relevant to mention that some upgrades may not be active for Ethereum but are described as a\npart of this comparison to Polkadot. Some of these goals/upgrades may change to reflect the general\ndirection of Ethereum.")),(0,r.kt)("h2",{id:"high-level-comparison"},"High-Level Comparison"),(0,r.kt)("p",null,"At a high level, both protocols have fundamentally different goals, which are reflected by their\narchitecture:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum is a general-purpose blockchain for ",(0,r.kt)("strong",{parentName:"li"},"global coordination"),". Ethereum is not specialized\nnor optimized for any particular application, rather its primary focus is the Ethereum Virtual\nMachine for executing smart contracts."),(0,r.kt)("li",{parentName:"ul"},"Polkadot is a sharded blockchain that introduces shared security for each one of its shards, or\n",(0,r.kt)("strong",{parentName:"li"},"parachains"),". Each shard is usually specialized towards a specific focus and optimized towards\nthat goal. Polkadot provides shared security and consensus to these shards through the Polkadot\nrelay chain.")),(0,r.kt)("p",null,"Polkadot can't and does not directly run something like a virtual machine for smart contracts.\nHowever, several of its parachains can (and do). Parachains on Polkadot can even run an EVM for\nexecuting smart contracts written in Solidity, Ethereum's native smart contract language."),(0,r.kt)("p",null,'In the context of blockchain, "sharding" refers to the parallelization of state transition\n(transaction) execution. The way Ethereum and Polkadot deal with scalability and sharding is quite\ndifferent.'),(0,r.kt)("h2",{id:"scalability-sharding-vs-danksharding"},"Scalability: Sharding vs. Danksharding"),(0,r.kt)("p",null,'As part of Ethereum\'s roadmap, the previously dubbed "shard chains" have been forgone in favor of\nrollup-based approach for scaling transaction throughput.\n',(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/roadmap/danksharding/"},(0,r.kt)("strong",{parentName:"a"},"Danksharding")),' is how Ethereum plans to create a\nscalable environment for an acclaimed >100,000 transactions per second. Danksharding was the chosen\nalternative over "shard chains" and works by storing blobs.'),(0,r.kt)("p",null,"Danksharding will allow for much more space to be utilized per block on Ethereum, where blobs of\ndata will be verifiable for an amount of time before being pruned from the network. These blobs will\nhave to be held for an amount of time, implying a level of data availability that validators must\nhave. This approach will enable data availability at layer one and further enable layer two\nprotocols on Ethereum to flourish."),(0,r.kt)("p",null,"In contrast, Polkadot is a purely sharded\nnetwork. It prioritizes data availability as an integral part of the block validation process.\nParallelized interactions between parachains, the ",(0,r.kt)("strong",{parentName:"p"},"shards")," of the Polkadot network, also take\nadvantage of this factor. Whereas Ethereum primarily focuses on making large amounts of data\navailable for validation for a portion of time, Polkadot's parallelization factor allows\nverification to happen on the protocol level without needing a layer two solution."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The term "shards" is used here, but know that shards and parachains mean the same thing! Each\nparachain represents a shard in the Polkadot network.')),(0,r.kt)("p",null,"On Polkadot, each shard hosts core logic. As\nmentioned earlier, each shard (i.e., ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain"),") has a unique state transition\nfunction (sometimes called a ",(0,r.kt)("strong",{parentName:"p"},"runtime"),"). Applications can exist either within a single shard or\nacross shards by composing logic to create ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"cross-consensus (XCM)")," interactions."),(0,r.kt)("p",null,"Polkadot uses WebAssembly\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm"),') as a "meta-protocol". A shard\'s state transition function can be abstract\nas long as the validators on Polkadot can\nexecute it within a Wasm environment.'),(0,r.kt)("h2",{id:"architectural-differences-polkadot-and-ethereum"},"Architectural Differences: Polkadot and Ethereum"),(0,r.kt)("p",null,"As previously mentioned, Ethereum is a ",(0,r.kt)("strong",{parentName:"p"},"general-purpose")," virtual machine that can run sandboxed\nprograms written in Solidity, whereas Polkadot is a meta-protocol for other parachains to connect\nand interact with each other."),(0,r.kt)("p",null,"Ethereum operates as a single, homogeneous chain. Each Ethereum node is divided into two layers: the\n",(0,r.kt)("strong",{parentName:"p"},"consensus")," and ",(0,r.kt)("strong",{parentName:"p"},"execution")," layers. Each layer handles the block validation information, peer\ndiscovery, and Proof-of-Stake of the Ethereum client."),(0,r.kt)("p",null,"Polkadot's primary component is the ",(0,r.kt)("strong",{parentName:"p"},"relay chain"),", which hosts heterogeneous ",(0,r.kt)("strong",{parentName:"p"},"shards")," called\nparachains. The relay chain aggregates information from its shards, the parachains, where Polkadot\nvalidators agree upon consensus and finality. In essence, one can look at Polkadot as a series of\n",(0,r.kt)("strong",{parentName:"p"},"runtimes"),", which are state transition functions used to describe parachains (shards), as well as\nPolkadot itself. Like Ethereum, Polkadot clients abstract away many of their responsibilities into\nvarious components built using Substrate."),(0,r.kt)("h3",{id:"forks-upgrades-and-governance"},"Forks, Upgrades, and Governance"),(0,r.kt)("p",null,"Ethereum governance is done off-chain, where various stakeholders come to a consensus through some\nmedium other than the protocol itself. Upgrades on Ethereum will follow the standard hard-fork\nprocedure, requiring validators to upgrade their nodes to implement protocol changes."),(0,r.kt)("p",null,"Polkadot uses on-chain\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"governance")," with a multicameral system. There are several avenues to\nissue proposals, and all proposals ultimately pass through a public referendum, where the majority\nof tokens can always control the outcome.\nPolkadot uses\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#adaptive-quorum-biasing"},"adaptive quorum biasing")," to set the passing\nthreshold for low-turnout referenda. Referenda can cover various topics, including fund allocation\nfrom an on-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury")," or modifying the underlying runtime code of the\nchain. Decisions get enacted on-chain and are binding and autonomous."),(0,r.kt)("p",null,"Polkadot can enact chain upgrades and\nsuccessful proposals using the Wasm meta-protocol without a hard fork. Anything within the state\ntransition function, the transaction queue, or off-chain workers can be upgraded without forking the\nchain."),(0,r.kt)("h3",{id:"consensus-and-finalization"},"Consensus and Finalization"),(0,r.kt)("p",null,"Ethereum and Polkadot use hybrid consensus\nmodels where block production and finality have their protocols. The finality protocols - Casper FFG\nfor Ethereum and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-consensus#finality-gadget-grandpa"},"GRANDPA")," for\nPolkadot - are both GHOST-based and can both\nfinalize batches of blocks in one round. For block production, both protocols use slot-based\nprotocols that randomly assign validators to a slot and provide a fork choice rule for unfinalized\nblocks - RandDAO/LMD for Ethereum and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-consensus#badass-babe-sassafras"},"BABE")," for\nPolkadot."),(0,r.kt)("p",null,"There are two main differences between Ethereum and\nPolkadot consensus:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Ethereum finalizes batches of blocks according to periods called "epochs". The current plan is\nto have 32 blocks per epoch and finalize them all in one round. With a predicted block time of\n12 seconds, the expected time to finality is 6 minutes (12 minutes maximum). See\n',(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/eth2.0-specs/blob/676e216/specs/phase0/beacon-chain.md#time-parameters"},"Ethereum 2 Block Time"),"\nfor more information.")),(0,r.kt)("p",null,"Polkadot's finality protocol, GRANDPA,\nfinalizes batches of blocks based on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#availability-and-unavailability-phase"},"availability and validity checks"),"\nthat happen as the proposed chain grows. The time to finality varies with the number of checks that\nneed to be performed (and invalidity reports cause the protocol to require extra checks). The\nexpected time to finality is 12-60 seconds."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ethereum requires many validators per shard to provide strong validity guarantees while\nPolkadot can provide stronger guarantees\nwith fewer validators per shard. Polkadot\nachieves this by making validators distribute an\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#erasure-codes"},"erasure coding")," to all validators in the system,\nsuch that anyone - not only the shard's validators - can reconstruct a parachain's block and\ntest its validity. The random parachain-validator assignments and secondary checks are"),(0,r.kt)("p",{parentName:"li"},"performed by randomly selected validators making it less likely for the small set of validators\non each parachain to collude."))),(0,r.kt)("h3",{id:"staking-mechanics"},"Staking Mechanics"),(0,r.kt)("p",null,'Ethereum is a proof-of-stake network that requires 32 ETH to stake for each validator instance.\nValidators run a primary Beacon Chain node and multiple validator clients - one for each 32 ETH.\nThese validators get assigned to "committees," randomly selected groups to validate shards in the\nnetwork. Ethereum relies on having a large validator set to provide availability and validity\nguarantees: They need at least 111 validators per shard to run the network and 256 validators per\nshard to finalize all shards within one epoch. With 64 shards, that\'s 16_384 validators (given 256\nvalidators per shard). See\n',(0,r.kt)("a",{parentName:"p",href:"https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-economics/"},"Ethereum Economics")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/HkiULaluS"},"Eth2 shard chain simplification proposal")," for more\ninformation."),(0,r.kt)("p",null,"Polkadot can provide strong finality and\navailability guarantees with much fewer validators. It uses\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators from a smaller set, letting\nsmaller holders nominate validators to run infrastructure while still claiming the rewards of the\nsystem without running a node of their own.\nPolkadot needs about ten validators for each\nparachain in the network."),(0,r.kt)("h3",{id:"interoperability-and-message-passing"},"Interoperability and Message Passing"),(0,r.kt)("p",null,"Polkadot uses\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"Cross-Consensus Message Passing Format (XCM)")," for parachains to send arbitrary\nmessages to each other. Parachains open connections with each other and can send messages via their\nestablished channels. Given that ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," will need to be full nodes of the\nrelay chain as well, they will be connected and can relay messages from parachain A to parachain B."),(0,r.kt)("p",null,"Messages do not pass through the relay chain. Only validity proofs and channel operations do (open,\nclose, etc.). This enhances scalability by keeping data on the edges of the system."),(0,r.kt)("p",null,"Polkadot will add a protocol called\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE")," that provides shared logic for cross-chain messages. Messages sent with\nSPREE carries additional guarantees about provenance and interpretation by the receiving chain."),(0,r.kt)("h2",{id:"dapp-support-and-development"},"DApp Support and Development"),(0,r.kt)("p",null,"Ethereum mainly supports a form of smart contract development using Solidity. These contracts are\nimmutable, and cannot be changed once published on-chain."),(0,r.kt)("p",null,"Polkadot supports smart contracts through\nparachains, usually using the ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink! smart contract language"),". On Ethereum, smart\ncontracts can call each other; however, they are fixed on-chain to the domain of Ethereum. On\nPolkadot, smart contracts can call each other in the same parachain and across parachains."),(0,r.kt)("p",null,"On Polkadot, developers have the option of either using smart contracts, calling extrinsics from\npallets that modify the chain's state in some particular way or merely use Polkadot's RPC to\ndirectly retrieve and act on-chain information. DApps on Polkadot are often composed of these\nmultiple components working together to modify, retrieve, and watch state changes live as they\nhappen."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,'Ethereum and Polkadot both use a sharded\nmodel. Danksharding plans to utilize a rollup-centric approach by focusing on data availability. The\nPolkadot ecosystem is secured by a main chain,\ncalled the "relay chain," which in turn manages and connects its shards ("parachains/parathreads")\ninto a single, homogenous solution.'),(0,r.kt)("p",null,"The primary differences between the two protocols are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All shards in Ethereum represent the same state transitions, while\nPolkadot lets shards have an abstract state\ntransition function implementation."),(0,r.kt)("li",{parentName:"ul"},"Governance processes in Ethereum are planned to be off-chain and thus require coordination for a\nhard fork to enact governance decisions. In contrast, in\nPolkadot the decisions are on-chain and\nenacted autonomously via forkless upgrades."),(0,r.kt)("li",{parentName:"ul"},"Validator selection mechanisms differ as\nPolkadot can provide strong availability and\nvalidity guarantees with fewer validators per shard.")))}m.isMDXComponent=!0}}]);
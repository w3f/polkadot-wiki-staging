(self.webpackChunk=self.webpackChunk||[]).push([[7117],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58866:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o=["components"],l={id:"learn-bridges",title:"Bridges",sidebar_label:"Bridges"},s=void 0,d={unversionedId:"learn-bridges",id:"learn-bridges",isDocsHomePage:!1,title:"Bridges",description:"A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges",source:"@site/../docs/learn-bridges.md",sourceDirName:".",slug:"/learn-bridges",permalink:"/docs/learn-bridges",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-bridges.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1627993497,formattedLastUpdatedAt:"8/3/2021",frontMatter:{id:"learn-bridges",title:"Bridges",sidebar_label:"Bridges"},sidebar:"docs",previous:{title:"Parathreads",permalink:"/docs/learn-parathreads"},next:{title:"Common Good Parachains",permalink:"/docs/learn-common-goods"}},c=[{value:"Bridging Methods",id:"bridging-methods",children:[{value:"via Bridge Pallets",id:"via-bridge-pallets",children:[]},{value:"via Smart Contracts",id:"via-smart-contracts",children:[]},{value:"via Higher-Order Protocols",id:"via-higher-order-protocols",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Ethereum Bridge (Smart Contracts &lt;&gt; Polkadot)",id:"ethereum-bridge-smart-contracts--polkadot",children:[]},{value:"Bitcoin Bridge (XCLAIM &lt;&gt; Substrate &lt;&gt; Polkadot)",id:"bitcoin-bridge-xclaim--substrate--polkadot",children:[]}]},{value:"Additional Resources and Examples",id:"additional-resources-and-examples",children:[{value:"For Bridge Builders",id:"for-bridge-builders",children:[]},{value:"Resources and Examples",id:"resources-and-examples",children:[]}]}],h={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges\nare ways for two economically sovereign and technologically diverse chains to communicate with each\nother. Bridge designs come in a variety of flavors ranging from centralized and trusted to more\ndecentralized and trustless. Polkadot favors the latter bridge designs for its ecosystem, however\nthere is nothing that blocks a development team from building and deploying the former."),(0,i.kt)("p",null,"While bridge designs are now getting to a place where they are sufficiently planned out, there has\nnot been too many that have been used heavily in production. For this reason, you can consider this\npage a work in progress. It will be updated as more information is determined and available."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Bridges are specifically for making the Polkadot ecosystem compatible with external blockchains\nsuch as Bitcoin, Ethereum, or Tezos (among others). For information on XCMP, the native\ninteroperability technology that allows parachains to trustlessly communicate, please see the\ndedicated ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"crosschain")," page on the Wiki.")),(0,i.kt)("h2",{id:"bridging-methods"},"Bridging Methods"),(0,i.kt)("p",null,"Building a bridge that is as decentralized and trustless as possible can be done through any of the\nfollowing methods (ordered by suggested methodology):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Bridge pallets")," - For Substrate-native chains, use a bridge pallet (e.g. Kusama ",(0,i.kt)("inlineCode",{parentName:"li"},"\\<\\>")," Polkadot\nbridge, since both networks' parachains use Substrate)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Smart contracts")," - If the chain is not on Substrate, you should have smart contracts on the\nnon-Substrate chain to bridge (e.g. Ethereum mainnet will have a bridge smart contract that\ninitiates Eth transactions based on incoming XCMP messages)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Higher-order protocols")," - If your chain does not support smart contracts (e.g. Bitcoin), you\nshould use ",(0,i.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2018/643.pdf"},"XClaim")," or similar protocols to bridge.")),(0,i.kt)("h3",{id:"via-bridge-pallets"},"via Bridge Pallets"),(0,i.kt)("p",null,"Receiving messages on Polkadot from an external, non-parachain blockchain can be possible through a\nSubstrate pallet. The Substrate instance can then be deployed to Polkadot either as a system-level\nparachain (native extension to the core Polkadot software) or as a community-operated parachain."),(0,i.kt)("p",null,"An example of a bridge that would strictly use bridge pallets would be a Kusama ",(0,i.kt)("inlineCode",{parentName:"p"},"\\<\\>")," Polkadot\nbridge, since both use parachains based on Substrate."),(0,i.kt)("p",null,"For the standalone chains that will not have a parachain bridging module on Polkadot\n(non-Substrate), it will be necessary to deploy bridge contracts (see below)."),(0,i.kt)("h3",{id:"via-smart-contracts"},"via Smart Contracts"),(0,i.kt)("p",null,"Given the generality of blockchain platforms with Turing-complete smart contract languages, it is\npossible to bridge Polkadot and any other smart contract capable blockchain (Ethereum, EOS, Tezos,\netc)."),(0,i.kt)("p",null,"Those who are already familiar with Ethereum may know of the now archived ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-bridge"},"Parity Bridge")," and the\nefforts being made to connect PoA sidechains to the Ethereum mainnet. The Parity bridge is a\ncombination of two smart contracts, one deployed on each chain, that allow for cross-chain transfers\nof value. As an example of usage, the initial Parity Bridge proof of concept connects two Ethereum\nchains, ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"side"),". Ether deposited into the contract on ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," generates a balance\ndenominated in ERC-20 tokens on ",(0,i.kt)("inlineCode",{parentName:"p"},"side"),". Conversely, ERC-20 tokens deposited back into the contract\non ",(0,i.kt)("inlineCode",{parentName:"p"},"side")," can free up Ether on ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more on how Bitcoin and Ethereum can Cooperate and Collaborate Through Polkadot, check\nout this explainer video ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rvoFUiOR3cM"},"here"))),(0,i.kt)("h3",{id:"via-higher-order-protocols"},"via Higher-Order Protocols"),(0,i.kt)("p",null,"Higher-order protocols (like ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM"),") can be used to bridge, but should only be used when\nother options are not available. XCLAIM, in particular, requires any swappable asset to be backed by\na collateral of higher value than the swappable assets, which adds additional overhead."),(0,i.kt)("p",null,"An example of a network that would be well-suited for higher-order protocols would be Bitcoin, since\nit does not support smart-contracts and it's not based on Substrate."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"ethereum-bridge-smart-contracts--polkadot"},"Ethereum Bridge (Smart Contracts \\<",">"," Polkadot)"),(0,i.kt)("p",null,"As explained by Dr. Gavin Wood in a ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/polkadot-substrate-and-ethereum-f0bf1ccbfd13"},"blog post")," from late 2019, there are three\nways that the Polkadot and Substrate ecosystem can be bridged to the Ethereum ecosystem."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Polkadot <-> Ethereum Public Bridge."),(0,i.kt)("li",{parentName:"ol"},"Substrate <-> Parity Ethereum (Openethereum) Bridge."),(0,i.kt)("li",{parentName:"ol"},"The Substrate EVM module.")),(0,i.kt)("p",null,"Please read the blog article for fuller descriptions of each one of these options."),(0,i.kt)("h3",{id:"bitcoin-bridge-xclaim--substrate--polkadot"},"Bitcoin Bridge (XCLAIM \\<",">"," Substrate \\<",">"," Polkadot)"),(0,i.kt)("p",null,"The Interlay team has written a ",(0,i.kt)("a",{parentName:"p",href:"https://interlay.gitlab.io/polkabtc-spec/"},"specification")," on a Bitcoin bridge that is based on the\n",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM"),' design paper. The protocol enables a two-way bridge between Polkadot and Bitcoin. It\nallows holders of BTC to "teleport" their assets to Polkadot as PolkaBTC, and holders of PolkaBTC to\nburn their assets for BTC on the Bitcoin chain.'),(0,i.kt)("p",null,"The Bitcoin bridge as documented in the specification is composed of two logically different\ncomponents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The XCLAIM component that maintains all accounts that own PolkaBTC."),(0,i.kt)("li",{parentName:"ul"},"The BTC-Relay that is responsible for verifying Bitcoin state when a new transaction is submitted.")),(0,i.kt)("p",null,"For full details on how it works please refer to the specification."),(0,i.kt)("p",null,"There is now a\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/interlay/polkabtc-beta-testnet-launch-2cc9ea7431b7"},"reference implementation and testnet available"),"."),(0,i.kt)("h2",{id:"additional-resources-and-examples"},"Additional Resources and Examples"),(0,i.kt)("h3",{id:"for-bridge-builders"},"For Bridge Builders"),(0,i.kt)("p",null,"If your team is interested in building a bridge between an external chain and Polkadot, there may be\nfunding available from the W3F ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program"},"grants program"),". Please first check that the chain you are\nintending to bridge between hasn't already been built or is in the process of being built by another\nteam. More popular chains with clear use cases will be given priority, and novel bridge designs are\nwelcome."),(0,i.kt)("h3",{id:"resources-and-examples"},"Resources and Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-bridges-common"},"Parity Bridges Common Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/ChainBridge"},"Substrate/Ethereum Bridge")," - ChainSafe and Centrifuge\nwere awarded a grant in W3F Grants ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5")," to build a Substrate to Ethereum two-way bridge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.polkabtc.io/#/"},"PolkaBTC (Bitcoin \\<",">"," Polkadot Bridge)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bifrost-codes/bifrost"},"EOS Bridge")," - The Bifrost team was awarded a grant in W3F Grants ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5")," to build a\nbridge to EOS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/tendermint-light-client"},"Tendermint Bridge")," - ChorusOne was awarded\na grant in ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5")," to build a GRANDPA light client in Tendermint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://interlay.gitlab.io/polkabtc-spec/"},"Interlay BTC Bridge")," - The Interlay team was awarded a grant in W3F grants ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5"),"\nto build a trust-minimized BTC bridge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainx-org/ChainX/tree/master/xpallets/gateway/bitcoin"},"ChainX BTC Bridge")," -\nChainX have implemented a BTC to Substrate bridge for their parachain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://poa.network/"},"POA Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/giveth/ethereum-dapp-scaling-poa-network-acee8a51e772"},"Case study")," of POA\nNetwork's implementation of Parity's bridge chain solution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hicommonwealth/edgeth_bridge/"},"Edgeth Bridge")," - a bridge from Ethereum to\nEdgeware chain (a Substrate-based chain) - now defunct and not maintained, but a good example."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM")," - XCLAIM is a framework for achieving trustless and efficient cross-chain exchanges\nusing cryptocurrency-backed assets.")))}p.isMDXComponent=!0}}]);
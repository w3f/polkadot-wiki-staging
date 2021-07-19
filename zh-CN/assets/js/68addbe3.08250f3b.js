(self.webpackChunk=self.webpackChunk||[]).push([[9965],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>c,kt:()=>h});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return a?o.createElement(d,i(i({ref:e},c),{},{components:a})):o.createElement(d,i({ref:e},c))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37154:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var o=a(22122),r=a(19756),n=(a(67294),a(3905)),i=["components"],l={id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index"},s=void 0,p={unversionedId:"build-tools-index",id:"build-tools-index",isDocsHomePage:!1,title:"Tool Index",description:"Here we provide a list of tools available for your development needs. They are sorted by context. If",source:"@site/../docs/build-tools-index.md",sourceDirName:".",slug:"/build-tools-index",permalink:"/zh-CN/docs/build-tools-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-tools-index.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626714166,formattedLastUpdatedAt:"2021/7/19",frontMatter:{id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index"},sidebar:"docs",previous:{title:"Transaction Construction",permalink:"/zh-CN/docs/build-transaction-construction"},next:{title:"Hackathon",permalink:"/zh-CN/docs/build-hackathon"}},c=[{value:"Block Explorers",id:"block-explorers",children:[]},{value:"Wallets",id:"wallets",children:[]},{value:"Network Monitoring &amp; Reporting",id:"network-monitoring--reporting",children:[]},{value:"Clients",id:"clients",children:[]},{value:"Tools",id:"tools",children:[]},{value:"UI",id:"ui",children:[]},{value:"Libraries",id:"libraries",children:[{value:"Polkadot-JS Common",id:"polkadot-js-common",children:[]},{value:"CLI Tools",id:"cli-tools",children:[]},{value:"WASM",id:"wasm",children:[]},{value:"RPC and API Tools",id:"rpc-and-api-tools",children:[]},{value:"SCALE Codec",id:"scale-codec",children:[]}]},{value:"Data Crawling and Conversion",id:"data-crawling-and-conversion",children:[]}],u={toc:c};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here we provide a list of tools available for your development needs. They are sorted by context. If\nyou're actively maintaining a tool that might be useful to other Polkadot, Kusama or Substrate\ndevelopers, feel free to ",(0,n.kt)("a",{parentName:"p",href:"contributing"},"add it in"),"."),(0,n.kt)("h2",{id:"block-explorers"},"Block Explorers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS Apps Explorer")," - Polkadot dashboard block\nexplorer. Supports dozens of other networks, including Kusama, Westend, and other remote or local\nendpoints. ",(0,n.kt)("a",{parentName:"li",href:"https://ipfs.io/ipns/dotapps.io"},"Access via IPFS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkascan.io/"},"Polkascan")," - Blockchain explorer for Polkadot, Kusama, and other related\nchains. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkascan/polkascan-os"},"Repo"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://subscan.io"},"Subscan")," - Blockchain explorer for Substrate chains.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/itering/subscan-essentials"},"Repo"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dotscanner.com"},"DotScanner")," - Polkadot Blockchain explorer.")),(0,n.kt)("h2",{id:"wallets"},"Wallets"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-wallets"},"Wallets")," page."),(0,n.kt)("h2",{id:"network-monitoring--reporting"},"Network Monitoring & Reporting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/"},"Polkadot Telemetry Service")," - Network information including what\nnodes are running the chain, what software versions they are running, sync status, and location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/Polkabot"},"Polkabot")," - Polkadot network monitoring and reporting using Matrix\n(Riot / Element) chat. Users may create custom bot plugins.\n",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkabot-a3dba18c20c8"},"Blogpost"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Ryabina-io/substratebot"},"Ryabina's Telegram Bot")," - A Telegram bot for\nmonitoring on-chain events of Substrate chains.\n",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/Polkabot/polkabot"},"Github Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"PolkaStats")," - Polkadot network statistics (includes Kusama). Shows\nnetwork information and staking details from validators and intentions.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Colm3na/polkastats-v2/"},"Github Repository"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"Panic")," - A node monitoring and alert server for\nvalidators."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/guardian"},"OpenWeb3/Guardian")," - A CLI tool and JS library to\nmonitor on chain states and events.")),(0,n.kt)("h2",{id:"clients"},"Clients"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot"},"Polkadot")," - The original Rust implementation of the\nPolkadot Host."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome"},"Kagome")," - A C++ Polkadot implementation of the Polkadot Host\ndeveloped by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/soramitsu"},"Soramitsu"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"Gossamer")," - A Go implementation of the Polkadot Host\ndeveloped by ",(0,n.kt)("a",{parentName:"li",href:"https://chainsafe.io/"},"ChainSafe Systems"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/txwrapper"},"TX Wrapper")," - Helper functions for offline transaction\ngeneration.")),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate"},"Substrate")," - Blockchain development platform written in\nRust. The Rust version of the Polkadot Host is being built with Substrate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/"},"Substrate Knowledge Base")," - Comprehensive documentation and\ntutorials for building a blockchain using Substrate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/vscode-substrate"},"Substrate VSCode plugin"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-debug-kit"},"Substrate Debug Kit")," - A collection of debug\ntools and libraries around substrate chains. Includes tools to calculate NPoS elections offline,\ndisk usage monitoring, test templates against chain state and other pallet-specific helper."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/diener"},"Diener")," - A tool for easy changing of Polkadot or Substrate\ndependency versions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shawntabrizi/polkadot-launch"},"Polkadot Launch")," - A tool to easily launch\ncustom local parachain-enabled Polkadot versions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/halva-suite/halva"},"Halva")," - A Truffle-inspired local development environment\nfor Substrate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maxsam4/fork-off-substrate"},"Fork-off Substrate")," - Copies the state of an\nexisting chain into your local version and lets you further experiment on it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.chevdor.com/tags/srtool/"},"srtool")," - A tool for verifying runtime versions against\non-chain proposal hashes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nikvolf/sub-bench"},"sub-bench")," - A tool to spam your node with transactions for\nthe sake of benchmarking."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/danforbes/substrate-devhub-utils"},"substrate-devhub-utils")," - A set of\nJavaScript utilities making life with Substrate a little easier."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NikVolf/sub-flood"},"sub-flood")," - A tool to benchmark Substrate by flooding it\nwith requests.")),(0,n.kt)("h2",{id:"ui"},"UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Swader/polkadash"},"Polkadash")," - VueJS-based starter kit for custom user\ninterfaces for Substrate chains. ",(0,n.kt)("a",{parentName:"li",href:"https://dotleap.com/tag/tutorial/"},"Tutorials"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/apps"},"Polkadot JS Apps UI")," - Repository of the\n",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps"},"polkadot.js.org/apps")," UI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front-end Template")," -\nReactJS-based starter UI for custom user interfaces for Substrate chains."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/extension"},"Polkadot JS Browser Extension")," - Key management in a\nChrome extension.")),(0,n.kt)("h2",{id:"libraries"},"Libraries"),(0,n.kt)("h3",{id:"polkadot-js-common"},"Polkadot-JS Common"),(0,n.kt)("p",null,"Polkadot-JS Common provides various utility functions that are used across all projects in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"@polkadot")," namespace and is split into a number of internal utility packages. The documentation and\nusage instructions are provided at\n",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/common/"},"Polkadot-JS/Common API Documentation"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/common/keyring/"},"@polkadot/keyring")," This allows you to create and load\naccounts in JavaScript. It is helpful for creating wallets or any application that will require\nthe user to write to chain. ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/keyring/start/create"},"Examples"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/common/util/"},"@polkadot/util")," Utility functions like checking if a string\nis hex-encoded."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/common/util-crypto/"},"@polkadot/util-crypto")," Useful cryptographic\nutilities for developing with Polkadot.")),(0,n.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/api-cli"},"@polkadot/api-cli")," Command\nline interface for the polkadot API. ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/api/start"},"Documentation"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/monitor-rpc"},"@polkadot/monitor-rpc")," An\nRPC monitor for Polkadot. See the RPC tools below for additional information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli"},"@polkadot/signer-cli")," A\nTool to construct, sign, and broadcast transactions. Signing can be done offline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_cpp"},"Polkadot API Cpp")," - A \u0421++ API for Polkadot, can\nbuild ",(0,n.kt)("inlineCode",{parentName:"li"},"clip"),", a command line tool.")),(0,n.kt)("h3",{id:"wasm"},"WASM"),(0,n.kt)("p",null,"Webassembly related tools and projects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/"},"ink!")," - An eDSL to write WebAssembly based smart contracts\nusing the Rust programming language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-wasm"},"parity-wasm")," - Low-level WebAssembly format library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasm-utils"},"wasm-utils")," - Collection of WebAssembly utilities used\nin pwasm-ethereum and substrate contract development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasmi"},"wasmi")," - A WebAssembly interpreter conceived as a component\nof parity-ethereum (Ethereum-like contracts in Wasm) and Substrate.")),(0,n.kt)("h3",{id:"rpc-and-api-tools"},"RPC and API Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api/tree/master/packages/rpc-provider"},"@polkadot/api/rpc-provider"),"\nDemonstrates how the JS tools interact with the node over RPC."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/rpc"},"RPC documentation")," - Documentation of Substrate RPC\nmethods."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/polkadot_api_server"},"Polkadot API Server by SimplyVC")," - A wrapper\naround the Polkadot API which makes it easier to make Polkadot API calls from any programming\nlanguage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/itering/substrate-api-rpc"},"Go: Subscan API")," - Go API for Polkadot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_cpp"},"C++ Polkadot API")," - \u0421++ API for Polkadot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_dotnet"},".NET Polkadot API")," - Polkadot Substrate API\nfor .NET."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkascan/py-substrate-interface"},"Python Polkadot API")," - Polkadot library for\nPython."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/centrifuge/go-substrate-rpc-client/"},"GSRPC")," - Substrate RPC client in Go,\na.k.a. GSRPC."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," - An HTTP wrapper for\nSubstrate, abstracting some complex RPC calls into simple REST calls."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-subxt"},"Subxt")," - A Rust library to submit extrinsics to a\nSubstrate node via RPC.")),(0,n.kt)("h3",{id:"scale-codec"},"SCALE Codec"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec"},"SCALE")," (Simple Concatenated\nAggregate Little-Endian) Codec is a lightweight, efficient, binary serialization and deserialization\ncodec."),(0,n.kt)("p",null,"It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained\nexecution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes\nthe decoding context has all type knowledge about the encoded data."),(0,n.kt)("p",null,"It is used in almost all communication to/from Substrate nodes, so implementations in different\nlanguages exist:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/itering/scale.rb"},"Ruby")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-scale-codec"},"Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/itering/scale.go"},"Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome/tree/master/core/scale"},"C++")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api"},"TypeScript")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LimeChain/as-scale-codec"},"AssemblyScript")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airalab/hs-web3/tree/master/src/Codec"},"Haskell")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/emeraldpay/polkaj"},"Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkascan/py-scale-codec"},"Python"))),(0,n.kt)("h2",{id:"data-crawling-and-conversion"},"Data Crawling and Conversion"),(0,n.kt)("p",null,"The following tools help you extract and structure data from a Substrate node."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkascan/polkascan-pre-harvester"},"Polkascan PRE Harvester"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkascan/polkascan-pre-explorer-gui"},"matching explorer for harvested data"),") -\nTransforms raw blockchain data into relational data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-archive"},"Parity's Substrate Archive")," - Can be run\nalongside a Substrate node to archive all blocks, state, and extrinsic data into PostgreSQL\ndatabase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Joystream/joystream/tree/query_node/query-node"},"Hydra: GraphQL Builder")," -\nGenerate a GraphQL database from a Substrate chain's data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TheGoldenEye/polka-store"},"Polka-store")," - A tool which scans a Substrate chain\nand stores balance-relevant transactions in an SQLite database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/playzero/substrate-graph"},"Substrate-graph")," - A compact indexer for Substrate\nbased nodes providing a GraphQL interface.")))}m.isMDXComponent=!0}}]);
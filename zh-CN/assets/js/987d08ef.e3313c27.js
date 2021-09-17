(self.webpackChunk=self.webpackChunk||[]).push([[1748],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,s(s({ref:e},p),{},{components:a})):r.createElement(d,s({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},11732:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>h});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),s=["components"],i={id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",slug:"../build-smart-contracts"},l=void 0,c={unversionedId:"build/build-smart-contracts",id:"build/build-smart-contracts",isDocsHomePage:!1,title:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",source:"@site/../docs/build/build-smart-contracts.md",sourceDirName:"build",slug:"/build-smart-contracts",permalink:"/zh-CN/docs/build-smart-contracts",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631849632,formattedLastUpdatedAt:"2021/9/17",frontMatter:{id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",slug:"../build-smart-contracts"},sidebar:"docs",previous:{title:"Decentralised Storage",permalink:"/zh-CN/docs/build-storage"},next:{title:"Oracles",permalink:"/zh-CN/docs/build-oracle"}},p=[{value:"Resources",id:"resources",children:[]},{value:"Examples",id:"examples",children:[{value:"Storage Rent: Deprecated",id:"storage-rent-deprecated",children:[]}]},{value:"What is the difference between developing a smart contract versus a parachain?",id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain",children:[{value:"Layer of Abstraction",id:"layer-of-abstraction",children:[]},{value:"Gas Fees",id:"gas-fees",children:[]}]},{value:"Resources",id:"resources-1",children:[]}],u={toc:p};function h(t){var e=t.components,a=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Polkadot Relay Chain will not natively support smart contracts. However, parachains on Polkadot\nwill support smart contracts. There are already announced projects such as\n",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),", and thanks to the Substrate built-in\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/pallet_contracts/index.html"},"contract pallet"),", it is likely\nthat more parachains will support WebAssembly smart contracts."),(0,o.kt)("p",null,"Additionally, there is the\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/evm-pallet"},"EVM Pallet"),", which allows a\nparachain to implement the Ethereum Virtual Machine, thereby supporting almost direct ports of\nEthereum contracts. Some of the projects using this approach are ",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier"),"."),(0,o.kt)("p",null,"A video version of the recap of the smart contract situation on Polkadot and Kusama is available\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fKHkFBXaUxQ"},"here"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://contracts.edgewa.re"},"Edgeware Contracts")," - Edgeware's documentation on Smart Contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!")," - Parity's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/#/"},"Substrate Contracts Workshop")," - a\nwalkthrough of the basics of writing and deploying an ERC20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Collected below are some community examples of smart contracts in ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!"),". ",(0,o.kt)("strong",{parentName:"p"},"Are you working on a\nsmart contract example? Ask us to add it to this page!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JesseAbram/foRust/"},"Ownable")," - Port of the OpenZeppelin ",(0,o.kt)("inlineCode",{parentName:"li"},"Ownable")," contract.")),(0,o.kt)("h3",{id:"storage-rent-deprecated"},"Storage Rent: Deprecated"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pallet_contracts")," was originally designed to combat unbounded state growth by charging contracts for the\nstate they consume, but has since been deprecated. See the associated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/9669"},"pull request")," for more details."),(0,o.kt)("h2",{id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain"},"What is the difference between developing a smart contract versus a parachain?"),(0,o.kt)("h3",{id:"layer-of-abstraction"},"Layer of Abstraction"),(0,o.kt)("p",null,"When you write a smart contract you are creating the instructions that will be deployed and\nassociated to a specific chain address."),(0,o.kt)("p",null,"In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a\nstate transition function)."),(0,o.kt)("p",null,"Smart contracts must consciously implement upgradeability while parachains will have the ability to\nswap out their code entirely through a root command or via the governance pallet."),(0,o.kt)("p",null,"When you build a smart contract, it will eventually be deployed to a target chain with its own\nenvironment. Parachains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it."),(0,o.kt)("h3",{id:"gas-fees"},"Gas Fees"),(0,o.kt)("p",null,"Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"halting problem"),' shows that with a powerful enough\nlanguage, it is impossible to know ahead of time whether or not a program will ever cease execution.\nSome platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting\nlanguage. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute\ntheir code. If a smart contract does get into a state where execution will never halt, it eventually\nruns out of gas, ceases execution, and any state transition that would have been made by the smart\ncontract is rolled back. Polkadot uses a ',(0,o.kt)("em",{parentName:"p"},"weight-fee model")," and not a ",(0,o.kt)("em",{parentName:"p"},"gas-metering model"),"."),(0,o.kt)("p",null,"Parachains can implement arbitrarily powerful programming languages and also contain no notion of\ngas for their own native logic. This means that some functionality is easier to implement for the\ndeveloper, but it also means there are some constructs, such as a loop without a terminating\ncondition, which should ",(0,o.kt)("em",{parentName:"p"},"never")," be implemented. Leaving certain logic, such as complex loops that\ncould possibly run indefinitely, to a non-smart contract layer, or even trying to eliminate it\nentirely, will often be a wiser choice. Parachains try to be proactive, while smart contract\nplatforms are event-driven."),(0,o.kt)("h2",{id:"resources-1"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/56041305"},"When should I build a Substrate runtime versus a Substrate smart contract"),"?\nThis post answers the question more technically of when a developer might choose to develop a\nruntime versus a smart contract."),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://contracts.edgewa.re"},"Edgeware Contracts")," - Edgeware's documentation on Smart Contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!")," - Parity's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/"},"Substrate Contracts Workshop")," - Walks you\nthrough the basics of writing and deploying an ERC20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")))}h.isMDXComponent=!0}}]);
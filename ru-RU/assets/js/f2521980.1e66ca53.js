(self.webpackChunk=self.webpackChunk||[]).push([[6689],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>c,kt:()=>p});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=o.createContext({}),d=function(t){var e=o.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return o.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(a),p=n,k=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?o.createElement(k,i(i({ref:e},c),{},{components:a})):o.createElement(k,i({ref:e},c))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24595:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>u});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot.",slug:"../getting-started"},l=void 0,d={unversionedId:"general/getting-started",id:"general/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Get started with Polkadot.",source:"@site/../docs/general/getting-started.md",sourceDirName:"general",slug:"/getting-started",permalink:"/ru-RU/docs/getting-started",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1634738084,formattedLastUpdatedAt:"20.10.2021",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot.",slug:"../getting-started"},sidebar:"docs",next:{title:"Claims",permalink:"/ru-RU/docs/claims"}},c=[{value:"What is Polkadot?",id:"what-is-polkadot",children:[{value:"Interact with Polkadot",id:"interact-with-polkadot",children:[],level:3},{value:"Polkadot Gifts",id:"polkadot-gifts",children:[],level:3}],level:2},{value:"Why Polkadot?",id:"why-polkadot",children:[],level:2},{value:"How does Polkadot work?",id:"how-does-polkadot-work",children:[],level:2},{value:"Why should you use Polkadot?",id:"why-should-you-use-polkadot",children:[],level:2},{value:"Brand-New Polkadot learners:",id:"brand-new-polkadot-learners",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],h={toc:c};function u(t){var e=t.components,s=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Polkadot Wiki! This central source of truth contains guides for interacting with the\ncore functionality. Our wiki has three main sections: Learn (for learners), Build (for people that\nwant to build on Polkadot), and Maintain (for people that want to maintain the network)."),(0,r.kt)("h2",{id:"what-is-polkadot"},"What is Polkadot?"),(0,r.kt)("p",null,"Polkadot enables scalability by allowing specialized blockchains to communicate with each other in a\nsecure, trust-free environment."),(0,r.kt)("p",null,"Polkadot is built to connect and secure unique blockchains, whether they be public, permission-less\nnetworks, private consortium chains, or oracles and other Web3 technologies. It enables an internet\nwhere independent blockchains can exchange information under common security guarantees."),(0,r.kt)("p",null,"Polkadot is a living network with the core pillars of governance and upgradability. The network has\nan advanced suite of governance tools and, using the ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),'\nstandard as a "meta-protocol", can autonomously deploy network upgrades. Polkadot adapts to your\ngrowing needs without the risks of network forks.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you haven't heard of Governance before, a great place to start is the\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-governance"},"Governance page"))),(0,r.kt)("p",null,"By connecting these dots, Polkadot serves as a foundational part of a decentralized web, where users\ncontrol their data and are not limited by trust bounds within the network."),(0,r.kt)("h3",{id:"interact-with-polkadot"},"Interact with Polkadot"),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-account-generation"},(0,r.kt)("img",{src:"/img/polkadot-guide/Account.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Creating an Account")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-balance-transfers"},(0,r.kt)("img",{src:"/img/polkadot-guide/Transfer.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Balance Transfers")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-staking"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Stake.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Staking"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-parachains"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Parachain.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Parachains")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-bridges"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Bridges.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Bridges")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-vote-councillor"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Voting.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Vote for Councilors"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-treasury#creating-the-proposal"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Proposal.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Make Proposals")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-join-council#submit-candidacy"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Council.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Council Candidacy")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-treasury"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Treasury.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Treasury"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-identity"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Identity.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Set an Identity")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-proxies"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Proxy.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Proxy Accounts")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/ambassadors"},(0,r.kt)("img",{class:"guide-image",src:"/img/polkadot-guide/Ambassadors.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Become an Ambassador"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"polkadot-gifts"},"Polkadot Gifts"),(0,r.kt)("img",{align:"right",src:"/img/polkadot-gift.png",width:"210",height:"200"}),(0,r.kt)("p",null,"Polkadot Gifts provide an easy way to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,r.kt)("li",{parentName:"ul"},"Share your love of Polkadot and send any amount of DOT."),(0,r.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,r.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,r.kt)("p",null,"Learn more about how you can create and send Polkadot Gifts ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,r.kt)("h2",{id:"why-polkadot"},"Why Polkadot?"),(0,r.kt)("p",null,"Back in the early 2000's, when the internet was gaining popularity for the first time, the internet\nfeatured read-only, static, basic webpages. The online connected world at the time was only the\nbeginning of virtual data, identities, and more. The internet during this time was also called the\nWeb 1.0."),(0,r.kt)("p",null,"As social media platforms and online businesses began to emerge, the internet transformed into the\nWeb 2.0. This upgraded internet, which we still use today, features dynamic, interactive webpages,\nwhere users can read and write information plus publish their own for others to see. However, this\nversion of the web comes with downsides, dealing with data control, privacy issues, and trust. This\nis where the Web 3.0 comes into the picture."),(0,r.kt)("p",null,"The Web 3.0 is taking centralized applications and turning them into decentralized, trust-free\nprotocols. The goal is to transform the internet into a decentralized web, where users control their\nown data and identity in a trust-free environment. The Web 3.0 movement aims to remove\nintermediaries and build a trustless infrastructure."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To learn more of the Web3 movement, check out this video from the\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/l44z35vabvA"},"Web3 Summit"))),(0,r.kt)("h2",{id:"how-does-polkadot-work"},"How does Polkadot work?"),(0,r.kt)("p",null,"The Polkadot network uses a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"sharded model"),' where shards - called\n"',(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"parachains"),"\", allow transactions to be processed in parallel instead of\nsequentially. Each parachain in the network has a unique state transition function (STF). Polkadot\nhas a Relay Chain acting as the main chain of the system. Based on Polkadot's design, as long as a\nchain's logic can compile to Wasm and adheres to the Relay Chain API, then it can connect to the\nPolkadot network as a parachain."),(0,r.kt)("p",null,"Parachains construct and propose blocks to validators on the Relay Chain, where the blocks undergo\nrigorous ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-availability"},"availability and validity")," checks before being added to the\nfinalized chain. As the Relay Chain provides the security guarantees,\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-collator"},"collators")," - full nodes of these parachains - don't have any security\nresponsibilities, and thus do not require a robust incentive system. This is how the entire network\nstays up to date with the many transactions that take place."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot-relay-chain",src:a(94389).Z})),(0,r.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nPolkadot has ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility, meaning that\ntransactions can be made between different parachains."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crosschain"},"Cross-Consensus Messaging Format (XCM)")," allows parachains to send messages\nof any type to each other. The shared security and validation logic of the Relay Chain provide the\nenvironment for trust-free message passing that opens up true interoperability."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To watch a short, beginner-friendly animation on Polkadot, check out our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_-k0xkooSlA"},"Polkadot Explainer video"))),(0,r.kt)("h2",{id:"why-should-you-use-polkadot"},"Why should you use Polkadot?"),(0,r.kt)("p",null,"Whether you're a blockchain developer or if you're interested in taking part of\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-ambassador-program/"},"Polkadot's community"),", Polkadot offers a\nplatform for everyone. This wiki offers a place for builders and maintainers to utilize\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-tools-index"},"tools")," and for brand-new learners to dive into educational material."),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"For brand-new learners of Blockchain technology:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://mooc.web3.foundation/course/blockchain-fundamentals/"},"Blockchain Fundamentals MOOC course")," is a great introduction to start familiarizing\nyourself with blockchain concepts such as cryptography and networks, and how these play into\nthings like decentralization and cryptocurrency.")),(0,r.kt)("p",null,"This is recommended for users with backgrounds of all levels, and the course is free!"),(0,r.kt)("h2",{id:"brand-new-polkadot-learners"},"Brand-New Polkadot learners:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot's original white paper")," is a technical summary around one possible\ndirection of implementing the Polkadot network. This paper uses rationale and technical details to\nsupport why this direction is beneficial. This original white paper also explains how Polkadot's\ncore components work together to build this decentralized network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/research/blob/master/docs/papers/OverviewPaper-V1.pdf"},"Polkadot's overview paper")," is an updated version of the white paper that\ndescribes the protocol in more technical terms. We would recommend reading this overview paper if\nyou are interested in digging more into the protocol itself."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/Polkadot-lightpaper.pdf"},"Polkadot's light paper")," is a visual, easy to read, and less technical introduction\ninto its blockchain technology. This paper dives into the components of Polkadot but is\nunderstandable for both a non-technical and technical reader."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot's specification")," is a Github repository that holds the latest Polkadot Host\nprotocol specification, Polkadot's specification tests of the many components of the network, and\nthe Polkadot Runtime specification. This repo holds algorithms and explores how various processes\nfunction in the Polkadot network. The Polkadot specification takes Polkadot's ideas and concepts\nfrom the light and the white paper but focuses on the technical specs of the technology."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"Watching the Technical Explainer Videos"),": These are great introductory videos that\nexplain and demonstrate how to use Polkadot and its ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"User Interface"),"."),(0,r.kt)("li",{parentName:"ul"},"Reading ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/what-is-polkadot-a-brief-introduction-ca3eac9ddca5"},"What is Polkadot? A Brief Introduction")," on Medium. There are also other great\narticles to read on ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network"},"Polkadot's Medium")," or ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation"},"Web3 Foundation's Medium"),"."),(0,r.kt)("li",{parentName:"ul"},"[What can I do with my DOT?][../learn/learn-dot.md]")),(0,r.kt)("p",null,"For brand-new learners of Kusama, Polkadot's canary cousin network: To learn more about how to build\nand maintain on the Kusama network, please head over to our ",(0,r.kt)("a",{parentName:"p",href:"https://guide.kusama.network/"},"Kusama Guide"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/polkadot"},"Polkadot Crowdcast")," - List of all Crowdcast webinars that the\nWeb3 Foundation has done."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot Explorer")," - Browser for the Polkadot network;\ncan be used for Polkadot, Kusama, or any Substrate-based chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://polkascan.io/"},"Polkascan")," ","-"," Real-time multi-chain data for Polkadot Relay Chain and\nParity Substrate chains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subscan.io"},"Subscan.io")," - Explorer for Substrate based chains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/lIghiCmHz0U"},"Polkadot Overview")," - Dr. Gavin Wood presents an overview of\nPolkadot. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://techcrunch.com/video/fireside-chat-with-jutta-steiner-parity-technologies/"},"Polkadot Overview")," -\nDr. Jutta Steiner presents Polkadot. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0IoUZdDi5Is&feature=youtu.be"},"Polkadot & Substrate Overview")," -\nDr. Gavin Wood presents Substrate (blockchain in-a-box + VM) and Polkadot, and builds a blockchain\non-stage in 30 minutes using Substrate. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/community"},"Community / Ecosystem")," - List of community rooms and channels to talk to others\nabout Polkadot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Sample Applications")," - Sample applications that are built on or currently being built for\nPolkadot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/contributing"},"Contributing Guide")," - Rules for contributing to the wiki."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/"},"Polkadot Knowledge Base")," - Troubleshooting resources for\nspecific errors and problems.")))}u.isMDXComponent=!0},94389:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadot_relay_chain-c411a282aa36af0f20d04389919a6275.png"}}]);
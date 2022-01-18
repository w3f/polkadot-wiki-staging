"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7368],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>h});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(e),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return e?n.createElement(m,i(i({ref:a},u),{},{components:e})):n.createElement(m,i({ref:a},u))}));function h(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},49175:(t,a,e)=>{e.r(a),e.d(a,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var n=e(87462),r=e(63366),o=(e(67294),e(3905)),i=["components"],l={id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",slug:"../learn-validator"},s=void 0,d={unversionedId:"learn/learn-validator",id:"learn/learn-validator",title:"Validator",description:"An introduction about validators.",source:"@site/../docs/learn/learn-validator.md",sourceDirName:"learn",slug:"/learn-validator",permalink:"/docs/learn-validator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-validator.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1642490728,formattedLastUpdatedAt:"1/18/2022",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",slug:"../learn-validator"},sidebar:"docs",previous:{title:"Nominator",permalink:"/docs/learn-nominator"},next:{title:"Collator",permalink:"/docs/learn-collator"}},u=[{value:"Guides",id:"guides",children:[],level:2},{value:"Other References",id:"other-references",children:[],level:2},{value:"Security / Key Management",id:"security--key-management",children:[],level:2},{value:"Monitoring Tools",id:"monitoring-tools",children:[],level:2},{value:"Validator Stats",id:"validator-stats",children:[],level:2}],c={toc:u};function p(t){var a=t.components,e=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Validators secure the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-architecture#relay-chain"},"Relay Chain")," by staking DOT, validating\nproofs from collators and participating in consensus with other validators."),(0,o.kt)("p",null,"These participants play a crucial role in adding new blocks to the Relay Chain and, by extension, to\nall parachains. This allows parties to complete cross-chain transactions via the Relay Chain.\nParachain validators participate in some form of off-chain consensus, and submit candidate receipts\nto the tx pool for a block producer to include on-chain. The Relay Chain validators guarantee that\neach parachain follows its unique rules and can pass messages between shards in a trust-free\nenvironment."),(0,o.kt)("p",null,"With parachains now on the network, para-validators are selected every epoch to validate parachain\nblocks for all parachains connected to the Relay Chain. Para-validators work in groups to\nvalidate parachain blocks. "),(0,o.kt)("p",null,"The selected para-validators are one of 297\nvalidators randomly selected (per epoch) to participate in the validation, creating a validator pool\nof 200 para-validators."),(0,o.kt)("p",null,"Validators perform two functions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Verifying")," that the information contained in an assigned set of parachain blocks is valid\n(such as the identities of the transacting parties and the subject matter of the contract)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Participating")," in the consensus mechanism to produce the Relay Chain blocks based on validity\nstatements from other validators. Any instances of non-compliance with the consensus algorithms\nresult in punishment by removal of some or all of the validator\u2019s staked DOT, thereby\ndiscouraging bad actors. Good performance, however, will be rewarded, with validators receiving\nblock rewards (including transaction fees) in the form of DOT in exchange for their activities.")),(0,o.kt)("h2",{id:"guides"},"Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-polkadot"},"How to Validate on Polkadot")," - Guide on how to set\nup a validator on the Polkadot live network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on how the\nvalidator payout mechanism works."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," - Guide on\nrunning your validator as a ",(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and start\nautomatically on reboots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"How to Upgrade your Validator")," - Guide for securely upgrading\nyour validator when you want to switch to a different machine or begin running the latest version\nof client code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-use-polkadot-validator-setup"},"How to Use Validator Setup")," - Guide on how\nto use Polkadot / Kusama validator setup.")),(0,o.kt)("h2",{id:"other-references"},"Other References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f"},"How to run a Polkadot node (Docker)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d"},"A Serverless Failover Solution for Web3.0 Validator Nodes")," -\nBlog that details how to create a robust failover solution for running validators."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama##vps-list"},"VPS list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation"},"Polkadot Validator Lounge")," -\nA place to chat about being a validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"learn-staking#slashing"},"Slashing Consequences")," - Learn more about slashing consequences for\nrunning a validator node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2"},"Why You Should be A Validator on Polkadot and Kusama")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15"},"Roles and Responsibilities of a Validator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/validating-on-polkadot"},"Validating on Polkadot")," - An explanation of\nhow to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along\nwith Tim Ogilvie from Staked.")),(0,o.kt)("h2",{id:"security--key-management"},"Security / Key Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/validator-security"},"Validator Security Overview"))),(0,o.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," - A monitoring and alerting\nsolution for Polkadot / Kusama node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Kusama%20CC3"},"Polkadot Telemetry Service")," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.web3.foundation/t/useful-links-for-validators/20"},"Other Useful Links"))),(0,o.kt)("h2",{id:"validator-stats"},"Validator Stats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkacube.hashquark.io/#/polkadot/strategy"},"HashQuark Staking Strategy")," - The HashQuark\nstaking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides\nother useful network monitoring tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"Polkastats")," - Polkastats is a cleanly designed dashboard for validator\nstatistics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yieldscan.app/"},"YieldScan")," - Staking yield maximization platform, designed to minimize\neffort."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/validator"},"Subscan Validators Page")," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites.")))}p.isMDXComponent=!0}}]);
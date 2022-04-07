"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1799:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>p});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",slug:"../build-protocol-info"},l=void 0,d={unversionedId:"build/build-protocol-info",id:"build/build-protocol-info",title:"Polkadot Protocol Information",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",source:"@site/../docs/build/build-protocol-info.md",sourceDirName:"build",slug:"/build-protocol-info",permalink:"/zh-CN/docs/build-protocol-info",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-protocol-info.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649361659,formattedLastUpdatedAt:"2022/4/7",frontMatter:{id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",slug:"../build-protocol-info"},sidebar:"docs",previous:{title:"Integration Initiation",permalink:"/zh-CN/docs/build-integration"},next:{title:"Integrating Assets",permalink:"/zh-CN/docs/build-integrate-assets"}},c=[{value:"Tokens",id:"tokens",children:[{value:"Redenomination",id:"redenomination",children:[],level:3}],level:2},{value:"Addresses",id:"addresses",children:[{value:"Cryptography",id:"cryptography",children:[],level:3}],level:2},{value:"Existential Deposit",id:"existential-deposit",children:[],level:2},{value:"Free vs. Reserved vs. Locked vs. Vesting Balance",id:"free-vs-reserved-vs-locked-vs-vesting-balance",children:[],level:2},{value:"Extrinsics and Events",id:"extrinsics-and-events",children:[{value:"Extrinsics",id:"extrinsics",children:[],level:3},{value:"Transaction Mortality",id:"transaction-mortality",children:[],level:3},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",children:[],level:3},{value:"Events",id:"events",children:[],level:3},{value:"Fees",id:"fees",children:[],level:3},{value:"Encoding",id:"encoding",children:[],level:3}],level:2},{value:"Runtime Upgrades",id:"runtime-upgrades",children:[],level:2},{value:"Smart Contracts",id:"smart-contracts",children:[],level:2},{value:"Other Networks",id:"other-networks",children:[],level:2},{value:"Other F.A.Q.",id:"other-faq",children:[],level:2}],h={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be\nspecific to Polkadot, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token decimals:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Polkadot (DOT): 10"),(0,i.kt)("li",{parentName:"ul"},"Kusama (KSM): 12"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base unit:"),' "Planck"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balance type:")," ",(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/u128/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"u128")))),(0,i.kt)("h3",{id:"redenomination"},"Redenomination"),(0,i.kt)("p",null,'Polkadot conducted a poll, which ended on 27 July 2020 (block 888_888), in which the stakeholders\ndecided to redenominate the DOT token. The redenomination does not change the number of base units\n(called "plancks" in Polkadot) in the network. The only change is that a single DOT token will be\n1e10 plancks instead of the original 1e12 plancks. See the Polkadot blog posts explaining the\n',(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-first-polkadot-vote-1fc1b8bd357b"},"details")," and the\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-results-are-in-8f6b1ca2a4e6"},"results")," of the vote."),(0,i.kt)("p",null,"The redenomination took effect 72 hours after transfers were enabled, at block 1_248_326, which\noccurred at approximately 16:50 UTC on 21 Aug 2020."),(0,i.kt)("h2",{id:"addresses"},"Addresses"),(0,i.kt)("p",null,"In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId"),". This is often, but not always, the public key of a cryptographic key pair."),(0,i.kt)("p",null,'Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographic schemes and chains. It has much in common with Bitcoin\'s\nBase58Check format such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/ss58/"},"SS58 page")," in the Substrate documentation for\nencoding information and a more comprehensive list of network prefixes."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Do not use regular expressions (regex) to validate addresses")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always verify using the\nprefix and checksum of the address. Substrate API Sidecar provides an\n",(0,i.kt)("inlineCode",{parentName:"p"},"accounts/{accountId}/validate")," path that returns a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"isValid")," response for a provided\naddress. If you want to validate addresses in another way, see the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/ss58/#validating-addresses"},"validation documentation"),"."))),(0,i.kt)("p",null,"Relevant SS58 prefixes for this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Polkadot: 0"),(0,i.kt)("li",{parentName:"ul"},"Kusama: 2"),(0,i.kt)("li",{parentName:"ul"},"Westend: 42")),(0,i.kt)("h3",{id:"cryptography"},"Cryptography"),(0,i.kt)("p",null,"Polkadot supports the following ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-cryptography"},"cryptographic")," key pairs and\nsigning algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ed25519"),(0,i.kt)("li",{parentName:"ul"},"Sr25519 - Schnorr signatures on the Ristretto group"),(0,i.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,i.kt)("p",null,"Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,i.kt)("em",{parentName:"p"},"hash of the public key")," in\norder to reduce the public key from 33 bytes to 32 bytes."),(0,i.kt)("h2",{id:"existential-deposit"},"Existential Deposit"),(0,i.kt)("p",null,"Polkadot, and most Substrate-based chains, use an ",(0,i.kt)("em",{parentName:"p"},"existential deposit")," (ED) to prevent dust\naccounts from bloating chain state. If an account drops below the ED, it will be ",(0,i.kt)("em",{parentName:"p"},"reaped,")," i.e.\ncompletely removed from storage and the nonce reset. Polkadot's ED is 1 DOT, while Kusama's is\n33.3333 microKSM (0.0000333333 KSM). You can always verify the existential deposit by checking the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," for the constant\n",(0,i.kt)("inlineCode",{parentName:"p"},"balances.existentialDeposit"),"."),(0,i.kt)("p",null,"Likewise, if you send a transfer with value below the ED to a new account, it will fail. Custodial\nwallets should set a minimum withdrawal amount that is greater than the ED to guarantee successful\nwithdrawals."),(0,i.kt)("p",null,"Wallets and custodians who track account nonces for auditing purposes should take care not to have\naccounts reaped, as users could refund the address and try making transactions from it. The Balances\npallet provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function that will return an error and abort rather than\nmake the transfer if doing so would result in reaping the sender's account."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The existential deposit is a property of the Relay Chain")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your account on the Relay Chain has no direct impact on parachains as you have seperate accounts\non each parachain. Still, parachains are able to define an existential deposit of their own, but this\nis seperate to that of the Relay Chain ED."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Existential deposit for Statemint")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Statemint parachain has a lower existential deposit (0.1 DOT) than the Relay Chain (1 DOT)\nas well as lower transaction fees. It is highly recommended to handle balance\ntransfers on Statemint. Statemint integration is discussed in the next page of the guide."))),(0,i.kt)("h2",{id:"free-vs-reserved-vs-locked-vs-vesting-balance"},"Free vs. Reserved vs. Locked vs. Vesting Balance"),(0,i.kt)("p",null,"Account balance information is stored in\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_balances/struct.AccountData.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountData")),".\nPolkadot primarily deals with two types of balances: free and reserved."),(0,i.kt)("p",null,'For most operations, free balance is what you are interested in. It is the "power" of an account in\nstaking and governance, for example. Reserved balance represents funds that have been set aside by\nsome operation and still belong to the account holder, but cannot be used.'),(0,i.kt)("p",null,"Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks\ncan operate on the same account, but they overlap rather than add. Locks are automatically added\nonto accounts when tasks are done on the network (e.g. leasing a parachain slot or voting), these\nare not customizable. For example, an account could have a free balance of 200 DOT with two locks on\nit: 150 DOT for ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," purposes and 100 DOT for ",(0,i.kt)("inlineCode",{parentName:"p"},"Reserve")," purposes. The account could not make a\ntransfer that brings its free balance below 150 DOT, but an operation could result in reserving DOT\nsuch that the free balance is below 150, but above 100 DOT."),(0,i.kt)("p",null,"Bonding tokens for staking and voting in governance referenda both utilize locks."),(0,i.kt)("p",null,"Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases\nover time until all the funds are transferable."),(0,i.kt)("p",null,"More info:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/frame_support/traits/trait.LockableCurrency.html"},"Lockable Currency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/frame_support/traits/enum.WithdrawReason.html"},"Lock Withdraw Reasons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/pallet_vesting/struct.Vesting.html"},"Vesting"))),(0,i.kt)("h2",{id:"extrinsics-and-events"},"Extrinsics and Events"),(0,i.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("p",null,"Extrinsics constitute information from the outside world and take on three forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inherents"),(0,i.kt)("li",{parentName:"ul"},"Signed Transactions"),(0,i.kt)("li",{parentName:"ul"},"Unsigned Transactions")),(0,i.kt)("p",null,"As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"Substrate documentation"),"."),(0,i.kt)("p",null,"Inherents contain information that is not provably true, but validators agree on based on some\nmeasure of reasonability. For example, a timestamp cannot be proved, but validators can agree that\nit is within some delta of their system clock. Inherents are not gossiped on the network, and only\nblock authors insert them into blocks."),(0,i.kt)("p",null,"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."),(0,i.kt)("p",null,"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their DOT from the Ethereum DOT indicator contract to a new DOT address,\nthe new address doesn't yet have any funds with which to pay fees."),(0,i.kt)("h3",{id:"transaction-mortality"},"Transaction Mortality"),(0,i.kt)("p",null,'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'),(0,i.kt)("p",null,"The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockHashCount"),", from the chain state or metadata. This parameter is set to 2400\nblocks (about four hours) at genesis. If the validity period is larger than the number of blocks\nstored on-chain, then the transaction will only be valid as long as there is a block to check it\nagainst, i.e. the minimum value of validity period and block hash count."),(0,i.kt)("p",null,'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."),(0,i.kt)("h3",{id:"unique-identifiers-for-extrinsics"},"Unique Identifiers for Extrinsics"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The assumption that a transaction's hash is a unique identifier is the number one mistake\nthat indexing services and custodians make. This error will cause major issues for your users.\nMake sure that you read this section carefully."))),(0,i.kt)("p",null,"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."),(0,i.kt)("p",null,"Imagine this contrived example with a ",(0,i.kt)("a",{parentName:"p",href:"#existential-deposit"},"reaped account"),". The first and last\ntransactions are identical, and both valid."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Index"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hash"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Origin"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Nonce"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Call"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Results"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A reaped")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account B"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 7 DOT to A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A created (nonce = 0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Successful transaction")))),(0,i.kt)("p",null,"In addition, not every extrinsic in a Substrate-based chain comes from an account as a\npublic/private key pair; Substrate, rather, has the concept of dispatch \u201corigin\u201d, which could be\ncreated from a public key account, but could also form from other means such as governance. These\norigins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."),(0,i.kt)("p",null,"The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_multisig/struct.Timepoint.html"},"reference a previous transaction"),"\nfrom the Multisig pallet."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"Reward")," event when\nclaiming staking rewards to tell the user how much the account was credited."),(0,i.kt)("p",null,"If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"utility.batch")," transaction with a\ntransfer inside of it). Only monitoring ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."),(0,i.kt)("h3",{id:"fees"},"Fees"),(0,i.kt)("p",null,"Polkadot uses weight-based fees that, unlike gas, are charged ",(0,i.kt)("em",{parentName:"p"},"pre-dispatch."),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-transaction-fees"},"transaction fee")," page for more info."),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/scale-codec/"},"SCALE codec"),"."),(0,i.kt)("h2",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-runtime-upgrades"},"Runtime upgrades")," allow Polkadot to change the logic of the\nchain without the need for a hard fork. A hard fork would require node operators to manually upgrade\ntheir nodes to the latest runtime version. In a distributed system, this is a complex process to\ncoordinate and communicate. Polkadot can upgrade without a hard fork. The existing runtime logic is\nfollowed to update the Wasm runtime stored on the blockchain to a new version. The upgrade is then\nincluded in the blockchain itself, meaning that all the nodes on the network execute it."),(0,i.kt)("p",null,"Generally there is no need to upgrade your nodes manually before the runtime upgrade as they will\nautomatically start to follow the new logic of the chain. Nodes only need to be updated when the\nruntime requires new host functions or there is a change in networking or consensus."),(0,i.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,i.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading in a timely manner, especially for high priority or\ncritical releases."),(0,i.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,i.kt)("p",null,"The Polkadot Relay Chain does not support smart contracts."),(0,i.kt)("h2",{id:"other-networks"},"Other Networks"),(0,i.kt)("p",null,"Besides running a private network, Polkadot has two other networks where you could test\ninfrastructure prior to deploying to the Polkadot mainnet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kusama Canary Network:")," Kusama is Polkadot's cutting-edge cousin. Many risky features are\ndeployed to Kusama prior to making their way into Polkadot."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Westend Testnet:")," Westend is Polkadot's testnet and uses the Polkadot runtime."),(0,i.kt)("h2",{id:"other-faq"},"Other F.A.Q."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Can an account's balance change without a corresponding, on-chain transaction?")),(0,i.kt)("p",null,"No, but not all balance changes are in a ",(0,i.kt)("em",{parentName:"p"},"transaction,")," some are in ",(0,i.kt)("em",{parentName:"p"},"events.")," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,i.kt)("em",{parentName:"p"},"locking")," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'What chain depth is considered "safe"?')),(0,i.kt)("p",null,"Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order\nto cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe."),(0,i.kt)("p",null,"Note that block production and finality are isolated processes in Polkadot, and the chain can have a\nlong unfinalized head."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do users need to interact with any smart contracts?")),(0,i.kt)("p",null,"No, users interact directly with the chain's logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Does Polkadot have state rent?")),(0,i.kt)("p",null,"No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is an external source to see the current chain height?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkascan.io/"},"Polkascan block explorer"))))}p.isMDXComponent=!0}}]);
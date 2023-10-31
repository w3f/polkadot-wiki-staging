(self.webpackChunk=self.webpackChunk||[]).push([[4537],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(74165),o=a(15861),i=a(67294),r=a(87152),s=a(17145),l=a(67425);function c(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var i,l,c,d,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return c=new r.U(i),e.next=21,s.G.create({provider:c});case 21:d=e.sent,(h=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=h[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+h[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),u=d[0],p=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?h(r.toString(),l,t,p):p(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,p);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(o,l,t,p):p(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},1799:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(47940),s=["components"],l={id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",keywords:["build","protocol","extrinsics","events","transaction"],slug:"../build-protocol-info"},c=void 0,d={unversionedId:"build/build-protocol-info",id:"build/build-protocol-info",title:"Polkadot Protocol Information",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",source:"@site/../docs/build/build-protocol-info.md",sourceDirName:"build",slug:"/build-protocol-info",permalink:"/docs/build-protocol-info",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-protocol-info.md",tags:[],version:"current",lastUpdatedBy:"vuittont60",lastUpdatedAt:1697188456,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",keywords:["build","protocol","extrinsics","events","transaction"],slug:"../build-protocol-info"},sidebar:"docs",previous:{title:"Integration Initiation",permalink:"/docs/build-integration"},next:{title:"Integrating Assets",permalink:"/docs/build-integrate-assets"}},h={},u=[{value:"Tokens",id:"tokens",level:2},{value:"Redenomination",id:"redenomination",level:3},{value:"Addresses",id:"addresses",level:2},{value:"Cryptography",id:"cryptography",level:3},{value:"Existential Deposit",id:"existential-deposit",level:2},{value:"Free vs. Reserved vs. Locked vs. Vesting Balance",id:"free-vs-reserved-vs-locked-vs-vesting-balance",level:2},{value:"Extrinsics and Events",id:"extrinsics-and-events",level:2},{value:"Block Format",id:"block-format",level:3},{value:"Extrinsics",id:"extrinsics",level:3},{value:"Transaction Mortality",id:"transaction-mortality",level:3},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",level:3},{value:"Events",id:"events",level:3},{value:"Fees",id:"fees",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Runtime Upgrades",id:"runtime-upgrades",level:2},{value:"Transaction Version Upgrades",id:"transaction-version-upgrades",level:3},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Other Networks",id:"other-networks",level:2},{value:"Other F.A.Q.",id:"other-faq",level:2}],p={toc:u},k="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)(k,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be\nspecific to Polkadot, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token decimals:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Polkadot (DOT): 10"),(0,i.kt)("li",{parentName:"ul"},"Kusama (KSM): 12"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base unit:"),' "Planck"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balance type:")," ",(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/u128/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"u128")))),(0,i.kt)("h3",{id:"redenomination"},"Redenomination"),(0,i.kt)("p",null,'Polkadot conducted a poll, which ended on 27 July 2020 (block 888_888), in which the stakeholders\ndecided to redenominate the DOT token. The redenomination does not change the number of base units\n(called "plancks" in Polkadot) in the network. The only change is that a single DOT token will be\n1e10 plancks instead of the original 1e12 plancks. See the Polkadot blog posts explaining the\n',(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-first-polkadot-vote-1fc1b8bd357b"},"details")," and the\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-results-are-in-8f6b1ca2a4e6"},"results")," of the vote."),(0,i.kt)("p",null,"The redenomination took effect 72 hours after transfers were enabled, at block 1_248_326, which\noccurred at approximately 16:50 UTC on 21 Aug 2020. You can find more information about the\nredenomination ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"here"),"."),(0,i.kt)("h2",{id:"addresses"},"Addresses"),(0,i.kt)("p",null,"In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId"),". This is often, but not always, the public key of a cryptographic key pair."),(0,i.kt)("p",null,'Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographic schemes and chains. It has much in common with Bitcoin\'s\nBase58Check format such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/fundamentals/accounts-addresses-keys/#address-encoding-and-chain-specific-addresses"},"SS58 page"),"\nin the Substrate documentation for encoding information and a more comprehensive list of network\nprefixes."),(0,i.kt)("admonition",{title:"Do not use regular expressions (regex) to validate addresses",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Always verify using the prefix and checksum of the address. Substrate API Sidecar provides an\n",(0,i.kt)("inlineCode",{parentName:"p"},"accounts/{accountId}/validate")," path that returns a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"isValid")," response for a provided\naddress.")),(0,i.kt)("p",null,"Relevant SS58 prefixes for this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Polkadot: 0"),(0,i.kt)("li",{parentName:"ul"},"Kusama: 2"),(0,i.kt)("li",{parentName:"ul"},"Westend: 42")),(0,i.kt)("h3",{id:"cryptography"},"Cryptography"),(0,i.kt)("p",null,"Polkadot supports the following ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"cryptographic")," key pairs and\nsigning algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ed25519"),(0,i.kt)("li",{parentName:"ul"},"Sr25519 - Schnorr signatures on the Ristretto group"),(0,i.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,i.kt)("p",null,"Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,i.kt)("em",{parentName:"p"},"hash of the public key")," in\norder to reduce the public key from 33 bytes to 32 bytes."),(0,i.kt)("h2",{id:"existential-deposit"},"Existential Deposit"),(0,i.kt)("p",null,"Polkadot, and most Substrate-based chains, use an ",(0,i.kt)("em",{parentName:"p"},"existential deposit")," (ED) to prevent dust\naccounts from bloating chain state. If an account drops below the ED, it will be ",(0,i.kt)("em",{parentName:"p"},"reaped,")," i.e.\ncompletely removed from storage and the nonce reset. Polkadot's ED is\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),",\n","\nwhile Kusama's is\n",(0,i.kt)(r.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:333333333,filter:"humanReadable",mdxType:"RPC"}),".\n","\nYou can always verify the existential deposit by checking the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," for the constant\n",(0,i.kt)("inlineCode",{parentName:"p"},"balances.existentialDeposit"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about the existential deposit visit the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"dedicated section")," in the Accounts\npage.")),(0,i.kt)("p",null,"Likewise, if you send a transfer with value below the ED to a new account, it will fail. Custodial\nwallets should set a minimum withdrawal amount that is greater than the ED to guarantee successful\nwithdrawals."),(0,i.kt)("p",null,"Wallets and custodians who track account nonces for auditing purposes should take care not to have\naccounts reaped, as users could refund the address and try making transactions from it. The Balances\npallet provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function that will return an error and abort rather than\nmake the transfer if doing so would result in reaping the sender's account."),(0,i.kt)("admonition",{title:"The existential deposit is a property of the Relay Chain",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Your account on the Relay Chain has no direct impact on parachains as you have separate accounts on\neach parachain. Still, parachains are able to define an existential deposit of their own, but this\nis separate to that of the Relay Chain ED.")),(0,i.kt)("admonition",{title:"Existential deposit for the Asset Hub",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Asset Hub parachain has a lower existential deposit (0.1 DOT) than the Relay Chain (1 DOT) as\nwell as lower transaction fees. It is highly recommended to handle balance transfers on the Asset\nHub. Asset Hub integration is discussed in the next page of the guide.")),(0,i.kt)("h2",{id:"free-vs-reserved-vs-locked-vs-vesting-balance"},"Free vs. Reserved vs. Locked vs. Vesting Balance"),(0,i.kt)("p",null,"Account balance information is stored in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_balances/struct.AccountData.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountData")),".\nPolkadot primarily deals with two types of balances: free and reserved."),(0,i.kt)("p",null,'For most operations, free balance is what you are interested in. It is the "power" of an account in\nstaking and governance, for example. Reserved balance represents funds that have been set aside by\nsome operation and still belong to the account holder, but cannot be used.'),(0,i.kt)("p",null,"Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks\ncan operate on the same account, but they overlap rather than add. Locks are automatically added\nonto accounts when tasks are done on the network (e.g. leasing a parachain slot or voting), these\nare not customizable. For example, an account could have a free balance of 200 DOT with two locks on\nit: 150 DOT for ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," purposes and 100 DOT for ",(0,i.kt)("inlineCode",{parentName:"p"},"Reserve")," purposes. The account could not make a\ntransfer that brings its free balance below 150 DOT, but an operation could result in reserving DOT\nsuch that the free balance is below 150, but above 100 DOT."),(0,i.kt)("p",null,"Bonding tokens for staking and voting in governance referenda both utilize locks."),(0,i.kt)("p",null,"Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases\nover time until all the funds are transferable."),(0,i.kt)("p",null,"More info:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/frame_support/traits/trait.LockableCurrency.html"},"Lockable Currency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/frame_support/traits/struct.WithdrawReasons.html"},"Lock Withdraw Reasons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_vesting/struct.VestingInfo.html"},"Vesting Info"))),(0,i.kt)("h2",{id:"extrinsics-and-events"},"Extrinsics and Events"),(0,i.kt)("h3",{id:"block-format"},"Block Format"),(0,i.kt)("p",null,"A Polkadot block consists of a block header and a block body. The block body is made up of\nextrinsics representing the generalization of the concept of transactions. Extrinsics can contain\nany external data the underlying chain wishes to validate and track."),(0,i.kt)("p",null,"The block header is a 5-tuple containing the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent_hash"),": a 32-byte Blake2b hash of the SCALE encoded parent block header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": an integer representing the index of the current block in the chain. It is equal to the\nnumber of the ancestor blocks. The genesis state has number 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_root"),": the root of the Merkle tree, used as storage for the system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extrinsics_root"),": field which is reserved for the Runtime to validate the integrity of the\nextrinsics composing the block body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"digest"),": field used to store any chain-specific auxiliary data, which could help the light\nclients interact with the block without the need of accessing the full storage as well as\nconsensus-related data including the block signature.")),(0,i.kt)("p",null,"A node creating or receiving a block must gossip that block to the network (i.e. to the other\nnodes). Other nodes within the network will track this announcement and can request information\nabout the block. Additional details on the process are outlined\n",(0,i.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-msg-block-announce"},"here")," in the Polkadot Spec."),(0,i.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("p",null,"An extrinsic is a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"SCALE encoded")," array consisting\nof a ",(0,i.kt)("inlineCode",{parentName:"p"},"version number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),", and varying ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," types indicating the resulting runtime\nfunction to be called, including the parameters required for that function to be executed."),(0,i.kt)("p",null,"Extrinsics constitute information from the outside world and take on three forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inherents"),(0,i.kt)("li",{parentName:"ul"},"Signed Transactions"),(0,i.kt)("li",{parentName:"ul"},"Unsigned Transactions")),(0,i.kt)("p",null,"As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/tx-weights-fees/"},"Substrate documentation"),"."),(0,i.kt)("p",null,"Inherent extrinsics are unsigned and contain information that is not provably true, but validators\nagree on based on some measure of reasonability. For example, a timestamp cannot be proved, but\nvalidators can agree that it is within some time difference on their system clock. Inherents are\nbroadcasted as part of the produced blocks rather than being gossiped as individual extrinsics."),(0,i.kt)("p",null,"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."),(0,i.kt)("p",null,"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their DOT from the Ethereum DOT indicator contract to a new DOT address,\nthe new address doesn't yet have any funds with which to pay fees."),(0,i.kt)("p",null,"The Polkadot Host does not specify or limit the internals of each extrinsics and those are defined\nand dealt with by the Runtime."),(0,i.kt)("h3",{id:"transaction-mortality"},"Transaction Mortality"),(0,i.kt)("p",null,'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'),(0,i.kt)("p",null,"The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockHashCount"),", from the chain state or metadata. This parameter is set to\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.system.blockHashCount",defaultValue:4096,mdxType:"RPC"}),"\nblocks (about seven hours) at genesis. If the validity period is larger than the number of blocks\nstored on-chain, then the transaction will only be valid as long as there is a block to check it\nagainst, i.e. the minimum value of validity period and block hash count."),(0,i.kt)("p",null,'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."),(0,i.kt)("h3",{id:"unique-identifiers-for-extrinsics"},"Unique Identifiers for Extrinsics"),(0,i.kt)("admonition",{title:"Transaction Hash is not a unique identifier",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The assumption that a transaction's hash is a unique identifier is the number one mistake that\nindexing services and custodians make. This error will cause major issues for your users. Make sure\nthat you read this section carefully.")),(0,i.kt)("p",null,"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."),(0,i.kt)("p",null,"Imagine this contrived example with a ",(0,i.kt)("a",{parentName:"p",href:"#existential-deposit"},"reaped account"),". The first and last\ntransactions are identical, and both valid."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Index"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hash"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Origin"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Nonce"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Call"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Results"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A reaped")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account B"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 7 DOT to A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A created (nonce = 0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Successful transaction")))),(0,i.kt)("p",null,"In addition, not every extrinsic in a Substrate-based chain comes from an account as a\npublic/private key pair; Substrate, rather, has the concept of dispatch \u201corigin\u201d, which could be\ncreated from a public key account, but could also form from other means such as governance. These\norigins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."),(0,i.kt)("p",null,"The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_multisig/struct.Timepoint.html"},"reference a previous transaction"),"\nfrom the Multisig pallet."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"Reward")," event when\nclaiming staking rewards to tell the user how much the account was credited."),(0,i.kt)("p",null,"If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"utility.batch")," transaction with a\ntransfer inside of it). Only monitoring ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."),(0,i.kt)("h3",{id:"fees"},"Fees"),(0,i.kt)("p",null,"Polkadot uses weight-based fees that, unlike gas, are charged ",(0,i.kt)("em",{parentName:"p"},"pre-dispatch."),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-transaction-fees"},"transaction fee")," page for more info."),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"SCALE codec"),"."),(0,i.kt)("h2",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"Runtime upgrades")," allow Polkadot to change the logic of the\nchain without the need for a hard fork. A hard fork would require node operators to manually upgrade\ntheir nodes to the latest runtime version. In a distributed system, this is a complex process to\ncoordinate and communicate. Polkadot can upgrade without a hard fork. The existing runtime logic is\nfollowed to update the Wasm runtime stored on the blockchain to a new version. The upgrade is then\nincluded in the blockchain itself, meaning that all the nodes on the network execute it."),(0,i.kt)("p",null,"Generally there is no need to upgrade your nodes manually before the runtime upgrade as they will\nautomatically start to follow the new logic of the chain. Nodes only need to be updated when the\nruntime requires new host functions or there is a change in networking or consensus."),(0,i.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,i.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading in a timely manner, especially for high priority or\ncritical releases."),(0,i.kt)("h3",{id:"transaction-version-upgrades"},"Transaction Version Upgrades"),(0,i.kt)("p",null,"Apart the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime_version")," there is also the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_version")," which denotes how to correctly\nencode/decode calls for a given runtime (useful for hardware wallets). The reason\n",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_version")," is separate from ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime_version")," is that it explicitly notes that the call\ninterface is broken/not compatible."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_version")," is updated in the cases mentioned in the\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/sp_version/struct.RuntimeVersion.html#structfield.transaction_version"},"Substrate docs"),".\nSo when a new transaction version is introduced (during a runtime upgrade), it indicates a breaking\nchange to transaction serialization. In that case, any custom application/tool that constructs &\nsigns transactions should also be updated in order to be compatible with the new transaction\nversion. It is the responsibility of the maintainers of the custom application/tool to keep up with\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_version")," updates. However, if you do not want to keep monitoring these changes\nyourself, you can also use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core"},"txwrapper-core")," tool\nthat handles these breaking changes for you and allows you to construct transactions using the\nfunction names and chain metadata."),(0,i.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,i.kt)("p",null,"The Polkadot Relay Chain does not support smart contracts."),(0,i.kt)("h2",{id:"other-networks"},"Other Networks"),(0,i.kt)("p",null,"Besides running a private network, Polkadot has two other networks where you could test\ninfrastructure prior to deploying to the Polkadot mainnet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kusama Canary Network:")," Kusama is Polkadot's cutting-edge cousin. Many risky features are\ndeployed to Kusama prior to making their way into Polkadot."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Westend Testnet:")," Westend is Polkadot's testnet and uses the Polkadot runtime."),(0,i.kt)("h2",{id:"other-faq"},"Other F.A.Q."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Can an account's balance change without a corresponding, on-chain transaction?")),(0,i.kt)("p",null,"No, but not all balance changes are in a ",(0,i.kt)("em",{parentName:"p"},"transaction,")," some are in ",(0,i.kt)("em",{parentName:"p"},"events.")," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,i.kt)("em",{parentName:"p"},"locking")," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'What chain depth is considered "safe"?')),(0,i.kt)("p",null,"Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order\nto cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe."),(0,i.kt)("p",null,"Note that block production and finality are isolated processes in Polkadot, and the chain can have a\nlong unfinalized head."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do users need to interact with any smart contracts?")),(0,i.kt)("p",null,"No, users interact directly with the chain's logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Does Polkadot have state rent?")),(0,i.kt)("p",null,"No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is an external source to see the current chain height?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkascan.io/"},"Polkascan block explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.subscan.io/"},"Subscan block explorer"))))}m.isMDXComponent=!0},46601:()=>{}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"learn-extrinsics",title:"Extrinsics (a.k.a. Types of Transactions)",sidebar_label:"Extrinsics",description:"Types of Transactions on Polkadot.",keywords:["transaction","DOT","extrinsics","KSM"],slug:"../learn-extrinsics"},l=void 0,c={unversionedId:"learn/learn-extrinsics",id:"learn/learn-extrinsics",title:"Extrinsics (a.k.a. Types of Transactions)",description:"Types of Transactions on Polkadot.",source:"@site/../docs/learn/learn-extrinsics.md",sourceDirName:"learn",slug:"/learn-extrinsics",permalink:"/docs/learn-extrinsics",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-extrinsics.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"learn-extrinsics",title:"Extrinsics (a.k.a. Types of Transactions)",sidebar_label:"Extrinsics",description:"Types of Transactions on Polkadot.",keywords:["transaction","DOT","extrinsics","KSM"],slug:"../learn-extrinsics"},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/learn-transactions-index"},next:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"}},d={},u=[{value:"Pallets and Extrinsics",id:"pallets-and-extrinsics",level:2},{value:"Types of Extrinsics",id:"types-of-extrinsics",level:2},{value:"Metadata Updates",id:"metadata-updates",level:2},{value:"Parity Signer vs Browser Extension",id:"parity-signer-vs-browser-extension",level:3},{value:"Verifying Extrinsics",id:"verifying-extrinsics",level:2},{value:"How do Attacks look like",id:"how-do-attacks-look-like",level:2},{value:"Clipboard Memory",id:"clipboard-memory",level:3},{value:"Malicious Website/dApp",id:"malicious-websitedapp",level:3},{value:"Malicious Browser Extension",id:"malicious-browser-extension",level:3},{value:"Corrupted metadata",id:"corrupted-metadata",level:3},{value:"Corrupted QR-code (Parity Signer)",id:"corrupted-qr-code-parity-signer",level:3},{value:"Defense against Attacks",id:"defense-against-attacks",level:2}],p={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pallets-and-extrinsics"},"Pallets and Extrinsics"),(0,r.kt)("p",null,"Polkadot is built using\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),", a modular framework to efficiently build blockchains.\nSubstrate's FRAME development environment provides modules called pallets and support libraries that\nyou can use, modify, and extend to build the runtime logic to suit the needs of your blockchain. You\ncan explore Substrate's FRAME pallets on\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"this dedicated page"),"."),(0,r.kt)("p",null,"Within each functional ",(0,r.kt)("strong",{parentName:"p"},"pallet")," on the blockchain, one can ",(0,r.kt)("strong",{parentName:"p"},"call")," its functions and execute them\nsuccessfully, provided they have the permission to do so. Because these calls originate outside of\nthe blockchain runtime, such transactions are referred to as ",(0,r.kt)("strong",{parentName:"p"},"extrinsics"),". Extrinsics normally\ncontain a signature, some data to describe if the extrinsic has passed some validity checks and a\nreference to the pallet and call that it is intended for. For example, the Staking pallet contains\nall functions related to staking. A nominator can bond funds and nominate validators by issuing the\nrespective extrinsics. Some extrinsics might also trigger an event on the chain such as a reward\npayout to the nominators."),(0,r.kt)("h2",{id:"types-of-extrinsics"},"Types of Extrinsics"),(0,r.kt)("p",null,"Now that we introduced the term ",(0,r.kt)("em",{parentName:"p"},"extrinsic"),", let us dive deeper and understand what extrinsics\nreally are. Extrinsics can be one of 3 distinct types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Signed transactions:")," these must contain the signature of the account sending the inbound\nrequest to the runtime. With signed transactions, the account used to submit the request typically\npays the transaction fee and must sign it using the account's private key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unsigned transactions:")," these don't carry any information about who submitted the transaction,\nsince the format of this type of transaction doesn't require a signature. You can define what\nconditions must be met for such a transaction to be valid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inherents:")," are a special type of unsigned transaction made by block authors which carry\ninformation required to build a block such as timestamps, storage proofs and uncle blocks.")),(0,r.kt)("p",null,"Here are some key differences between the different types of extrinsics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contrary to signed transactions, unsigned transaction types require implementing custom validation\nlogic which can consume more resources for checking validity compared to signed transactions."),(0,r.kt)("li",{parentName:"ul"},"Unsigned transactions have no economic deterrent to prevent spam or replay attacks, so custom\nlogic must account for protecting the network from these types of transactions being misused."),(0,r.kt)("li",{parentName:"ul"},"Inherents exist to address the need of adding some data to a block, whereas signed or unsigned\ntransactions exist to potentially change the state of the blockchain.")),(0,r.kt)("h2",{id:"metadata-updates"},"Metadata Updates"),(0,r.kt)("admonition",{title:"Always check for Metadata Updates",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before signing extrinsics with the Polkadot-JS Browser Extension and Parity Signer, always check for\nmetadata updates. ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/gbvrHzr4EDY?t=84"},(0,r.kt)("strong",{parentName:"a"},"This video tutorial"))," will explain how to\ndo it.")),(0,r.kt)("h3",{id:"parity-signer-vs-browser-extension"},"Parity Signer vs Browser Extension"),(0,r.kt)("p",null,"Parity Signer updates the full metadata through the QR fountain while the extension updates the\nmetadata index (the metadata is not loaded into it). As a consequence the process of updating\nmetadata is different in this two cases (you will notice that on the Signer app the update takes\nlonger for example). Having outdated metadata on the Signer app will prevent you from signing, while\non the extension you will be able to click the sign button but the extrinsic will likely fail\n(similarly of having an outdated Ledger app). In general, failing to update metadata will most\nlikely result in you not being able to sign extrinsics."),(0,r.kt)("h2",{id:"verifying-extrinsics"},"Verifying Extrinsics"),(0,r.kt)("admonition",{title:"Walk-through Video Tutorial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-"},(0,r.kt)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn about how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nto you while signing for transactions.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not sign a transaction if you can't verify what you are signing or you suspect you might be\nsigning a different extrinsic than the one intended.")),(0,r.kt)("p",null,"Verifying the extrinsic you are signing can take some more time before signing for a transaction but\nit allows you to add an extra security step. There are a multitude of possible attacks that will\nprevent you to send funds to the desired destination account (see below)."),(0,r.kt)("h2",{id:"how-do-attacks-look-like"},"How do Attacks look like"),(0,r.kt)("p",null,"In general, an attacker would make you think you are signing an extrinsic A when in reality you are\nsigning an extrinsic B. An Attack might come from:"),(0,r.kt)("h3",{id:"clipboard-memory"},"Clipboard Memory"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a more detailed read about clipboard memory attacks see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.kaspersky.com/blog/cryptoshuffler-bitcoin-stealer/19976/"},"this article"),".")),(0,r.kt)("p",null,"This is a common attack. The clipboard memory is that memory on you computer dedicated to copy-paste\noperations. There is malicious software that can be remotely installed on your computer and that can\ndetect when a cryptocurrency address is copied. For example, you want to send funds to Address A\n(belonging to you) but after copying address A a malicious software swaps that address with Address\nB (belonging to an attacker). This attack can be prevented by checking the receiver address before\nsigning. Failing to do so could result in loss of the funds."),(0,r.kt)("h3",{id:"malicious-websitedapp"},"Malicious Website/dApp"),(0,r.kt)("p",null,"This is a common attack that can happen if you are interacting with a malicious site (dApp). In this\nscenario you want to perform Extrinsic A on the website, but the dApp will send Extrinsic B to the\nextension for signing. In this case the extension will show Extrinsic B. If you are using a Ledger\ndevice you have a second layer of verification, as it will also display Extrinsic B."),(0,r.kt)("h3",{id:"malicious-browser-extension"},"Malicious Browser Extension"),(0,r.kt)("p",null,"This scenario can happen if you have downloaded a malicious extension or a trusted extension, like\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot-JS Browser Extension"),", from a non-trusted source.\nIn this scenario the extension will display that you will sign for an Extrinsic A but in the\nbackground will execute Extrinsic B. If you are using a ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," device\nthis attack can be detected because you will be able to see Extrinsic B on the screen of your Ledger\ndevice."),(0,r.kt)("h3",{id:"corrupted-metadata"},"Corrupted metadata"),(0,r.kt)("p",null,"This attack is least common and might result in signing a non-intended extrinsic without the\npossibility of verifying it. Before authorizing the metadata update check who is requesting it.\nMetadata updates for the Polkadot-JS Browser Extension (or other extensions) might be requested by\nthe Polkadot-JS UI and dApps (for example DeFi apps of parachains). For the extensions, you should\ntrust the app that requests the update. When updating the metadata for Parity Signer you should\ntrust the issuer of the metadata (or generate the QR fountain yourself)."),(0,r.kt)("h3",{id:"corrupted-qr-code-parity-signer"},"Corrupted QR-code (Parity Signer)"),(0,r.kt)("p",null,"This is a sub-case of the malicious dApp scenario. If your account is on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},"Parity Signer")," the extrinsic will be displayed as a QR\ncode, instead of the extension showing its details and you need to verify it on the device. The\ncorrupted QR code will make you sign for an Extrinsic B when you want to sign for Extrinsic A. This\nwill be showed in the Signer app and a careful user will notice it. If the metadata in the Signer is\nalready incorrect (or the Signer is corrupted) there is the risk of signing a non-intended extrinsic\nwithout the possibility of verifying it."),(0,r.kt)("h2",{id:"defense-against-attacks"},"Defense against Attacks"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you can't verify the extrinsic or you suspect you are signing something different than what you\nintended, don't sign it!")),(0,r.kt)("p",null,"To avoid being victim of an attack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use only trusted extensions, sites and software in general."),(0,r.kt)("li",{parentName:"ul"},"Use cold storage options (Ledger, Signer) and verify on them. Trust what these devices tell you\nover what is shown in the app or the browser extension."),(0,r.kt)("li",{parentName:"ul"},"Update Signer metadata only from trusted sources (or do it yourself)."),(0,r.kt)("li",{parentName:"ul"},"Accept metadata updates for the extension only from trusted apps.")))}m.isMDXComponent=!0}}]);
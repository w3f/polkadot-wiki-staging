"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=s,p=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n,s=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},c=void 0,u={unversionedId:"general/kusama/kusama-statemine",id:"general/kusama/kusama-statemine",title:"Statemine",description:"Statemine and its features",source:"@site/../docs/general/kusama/kusama-statemine.md",sourceDirName:"general/kusama",slug:"/kusama-statemine",permalink:"/docs/kusama-statemine",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-statemine.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1658595953,formattedLastUpdatedAt:"Jul 23, 2022",frontMatter:{id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"}},m={},d=[{value:"Creating Assets on Statemine",id:"creating-assets-on-statemine",level:2},{value:"Transferring Assets on Statemine",id:"transferring-assets-on-statemine",level:2}],h=(n="RPC",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Statemine is a generic assets parachain which provides functionality for deploying and transferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Kusama (not to be confused with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-common-goods#statemint"},"Statemint"),", which is a parachain on Polkadot). The native token of Statemine is KSM. Balance transfers and the Existential Deposit (ED) of KSM on Statemine are about 1/10th of the values on the Relay chain. For example, the Existential Deposit of a Statemine account is ",(0,i.kt)(h,{network:"statemine",path:"consts.balances.existentialDeposit",defaultValue:3333333,filter:"humanReadable",mdxType:"RPC"}),",\nwhen compared to ",(0,i.kt)(h,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333333,filter:"humanReadable",mdxType:"RPC"}),", on Kusama.\nApart from the core protocol token KSM, the assets held on Statemine can be broadly categorized as "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,i.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,i.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,i.kt)("h2",{id:"creating-assets-on-statemine"},"Creating Assets on Statemine"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before minting assets on Statemine, we recommend that you try out this tutorial on Westmint, which is a parachain on Westend.\nThe WND tokens (Westies) are free and are available through a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,i.kt)("p",null,"To create an asset on Statemine, you would need a deposit of ",(0,i.kt)(h,{network:"statemine",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nand around ",(0,i.kt)(h,{network:"statemine",path:"consts.assets.metadataDepositBase",defaultValue:668933304,filter:"humanReadable",mdxType:"RPC"})," for the metadata\n. Before you create an asset on Statemine, ensure that your Statemine account balance is a bit more\nthan the sum of those two deposits, which should seamlessly account for the required deposits\nand transaction fees. You can send KSM from a Kusama account to a Statemine account using the\nteleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,i.kt)("p",null,"Assuming you have the required KSM balance on your Statemine account, the following instructions should let you successfully create an asset on Statemine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigate to Assets page",src:a(99638).Z,width:"750",height:"230"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator account, name of the asset to be\ndisplayed on Statemine, the asset's symbol, number of decimals for the asset, the minimum balance required to hold this asset on a Statemine account and the most important field of your asset - the unique asset ID. The UI would not let you enter an ID that has already been taken. After all the details are entered, click on the next button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Asset Metadata",src:a(21569).Z,width:"1180",height:"622"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset managing accounts",src:a(64468).Z,width:"1180",height:"404"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing, you can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(55470).Z,width:"1184",height:"478"})),(0,i.kt)("p",null,"If the transaction is successful,  you should see the asset and its details displayed in the Network > Assets page on Statemine."),(0,i.kt)("h2",{id:"transferring-assets-on-statemine"},"Transferring Assets on Statemine"),(0,i.kt)("admonition",{title:"Beware of scams",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Due to the permissionless nature of Statemine, anyone can create an asset with any name and symbol. The most important attribute\nof an asset is the asset ID. There could be multiple assets with the same name and symbol, but they cannot have the same asset ID. Ex: The USDT by Tether minted on Statemine holds the asset ID: 1984.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemine account needs to exist on-chain. This is different from Ethereum where a non-existent account can hold ERC-20 tokens. Ensure that the receiver account has at least 3.33 microKSM which is the Existential Deposit for a Statemine account. Although, there are a few exceptions to this - If an asset is Sufficient or someone has placed a deposit for that account to hold the asset, the Existential Deposit in KSM on the receiver account is not needed.")),(0,i.kt)("p",null,"To hold, send or receive most of the assets on Statemine (which are Non-Suffcient), the accounts need to have a minimum balance of 3.33 microKSM (The Existential Deposit on Statemine). You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),". The balance transfers of KSM on Statemine are similar to the balance transfers KSM on Kusama and can be done on the accounts page on Polkadot-JS Apps UI."),(0,i.kt)("p",null,"In this tutorial, transfer of BILLCOINs (Asset ID: 223, Symbol: BILL) is demonstrated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,i.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you have accounts with the selected asset, they will be displayed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Finding the asset",src:a(60062).Z,width:"1440",height:"320"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the send button "),(0,i.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset transfer transaction",src:a(19837).Z,width:"1176",height:"516"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(39215).Z,width:"1178",height:"454"})),(0,i.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}f.isMDXComponent=!0},99638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-0-c0d765f1c353e064445d3f9c330b6906.png"},21569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-1-7f4aedc6d554a7cd2c4096e7a945264e.png"},64468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-2-3fc18f1c44deccb5ac4d110d231db774.png"},55470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-3-ee5744e11d130f8e61db9e7ce11d9e83.png"},60062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-1-aaa7dfc5e75b4860084b7717ab231f62.png"},39215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-3-007cfb046164f925bef27347237ec2ab.png"},19837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-transfer-asset-2-192c9086d931335714e037b3d3e756fe.png"}}]);
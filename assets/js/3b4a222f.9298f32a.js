"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=s,p=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(p,o(o({ref:t},m),{},{components:a})):n.createElement(p,o({ref:t},m))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),o=["components"],r={id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},l=void 0,c={unversionedId:"general/kusama/kusama-statemine",id:"general/kusama/kusama-statemine",title:"Statemine",description:"Statemine and its features",source:"@site/../docs/general/kusama/kusama-statemine.md",sourceDirName:"general/kusama",slug:"/kusama-statemine",permalink:"/docs/kusama-statemine",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-statemine.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1649958702,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"}},m={},u=[{value:"Creating Assets on Statemine",id:"creating-assets-on-statemine",level:2},{value:"Transferring Assets on Statemine",id:"transferring-assets-on-statemine",level:2}],d={toc:u};function h(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Statemine is a generic assets parachain which provides functionality for deploying and transferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Kusama (not to be confused with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-common-goods#statemint"},"Statemint"),", which is a parachain on Polkadot). The native token of Statemine is KSM. Balance transfers and the Existential Deposit (ED) of KSM on Statemine are about 1/10th of the values on the Relay chain.\nApart from the core protocol token KSM, the assets held on Statemine can be broadly categorized as "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,i.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,i.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,i.kt)("h2",{id:"creating-assets-on-statemine"},"Creating Assets on Statemine"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before minting assets on Statemine, we recommend that you try out this tutorial on Westmint, which is a parachain on Westend.\nThe WND tokens (Westies) are free and are available through a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."))),(0,i.kt)("p",null,"To create an asset on Statemine, you would need a deposit of 1 KSM. Ensure that your Statemine account balance is more than 1 KSM,\nwhich should account for the transaction fee as well. You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"../../learn/learn-teleport"},"tutorial on Teleports"),"."),(0,i.kt)("p",null,"Assuming you have the required KSM balance on your Statemine account, the following instructions should let you successfully create an asset on Statemine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigate to Assets page",src:a(99638).Z,width:"750",height:"230"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator account, name of the asset to be\ndisplayed on Statemine, the asset's symbol, number of decimals for the asset, the minimum balance required to hold this asset on a Statemine account and the most important field of your asset - the unique asset ID. The UI would not let you enter an ID that has already been taken. After all the details are entered, click on the next button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Asset Metadata",src:a(21569).Z,width:"1180",height:"622"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset managing accounts",src:a(64468).Z,width:"1180",height:"404"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing, you can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(55470).Z,width:"1184",height:"478"})),(0,i.kt)("p",null,"If the transaction is successful,  you should see the asset and its details displayed in the Network > Assets page on Statemine."),(0,i.kt)("h2",{id:"transferring-assets-on-statemine"},"Transferring Assets on Statemine"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beware of scams")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to the permissionless nature of Statemine, anyone can create an asset with any name and symbol. The most important attribute\nof an asset is the asset ID. There could be multiple assets with the same name and symbol, but they cannot have the same asset ID. Ex: The USDT by Tether minted on Statemine holds the asset ID: 1984."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemine account needs to exist on-chain. This is different from Ethereum where a non-existent account can hold ERC-20 tokens. Ensure that the receiver account has at least 3.33 microKSM which is the Existential Deposit for a Statemine account. Although, there are a few exceptions to this - If an asset is Sufficient or someone has placed a deposit for that account to hold the asset, the Existential Deposit in KSM on the receiver account is not needed."))),(0,i.kt)("p",null,"To hold, send or receive most of the assets on Statemine (which are Non-Suffcient), the accounts need to have a minimum balance of 3.33 microKSM (The Existential Deposit on Statemine). You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,i.kt)("a",{parentName:"p",href:"../../learn/learn-teleport"},"tutorial on Teleports"),". The balance transfers of KSM on Statemine are similar to the balance transfers KSM on Kusama and can be done on the accounts page on Polkadot-JS Apps UI."),(0,i.kt)("p",null,"In this tutorial, transfer of BILLCOINs (Asset ID: 223, Symbol: BILL) is demonstrated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,i.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you have accounts with the selected asset, they will be displayed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Finding the asset",src:a(60062).Z,width:"1440",height:"320"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the send button "),(0,i.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset transfer transaction",src:a(19837).Z,width:"1176",height:"516"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:a(39215).Z,width:"1178",height:"454"})),(0,i.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}h.isMDXComponent=!0},99638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-0-c0d765f1c353e064445d3f9c330b6906.png"},21569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-1-7f4aedc6d554a7cd2c4096e7a945264e.png"},64468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-2-3fc18f1c44deccb5ac4d110d231db774.png"},55470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-3-ee5744e11d130f8e61db9e7ce11d9e83.png"},60062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-1-aaa7dfc5e75b4860084b7717ab231f62.png"},39215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-3-007cfb046164f925bef27347237ec2ab.png"},19837:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statemine-transfer-asset-2-192c9086d931335714e037b3d3e756fe.png"}}]);
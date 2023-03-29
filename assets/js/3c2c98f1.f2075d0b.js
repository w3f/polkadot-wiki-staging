(self.webpackChunk=self.webpackChunk||[]).push([[392],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var n=a(74165),s=a(15861),o=a(67294),i=a(92519),r=a(51840),l=a(67425);function u(t,e,a){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,n.Z)().mark((function t(e,a,s){var o,l,u,c,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return u=new i.U(o),t.next=21,r.G.create({provider:u});case 21:c=t.sent,(d=a.split(".")).forEach((function(t){t in c&&(c=c[t])})),t.t1=d[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=c.toString(),t.abrupt("break",35);case 29:return t.next=31,c();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e,a,n){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,n);break;case"precise":(0,l.Precise)(t,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(t,n);break;case"percentage":(0,l.Percentage)(t,n);break;case"arrayLength":(0,l.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(t){var e=t.network,a=t.path,i=t.defaultValue,r=t.filter,l=void 0===r?void 0:r,c=(0,o.useState)(""),p=c[0],m=c[1];return e=e.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(i.toString(),l,e,m):m(i.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e,a,m);case 2:if(void 0!==(s=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?d(s,l,e,m):m(s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),p}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,n){var s=void 0;if("polkadot"===a||"statemint"===a)s=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}t=parseFloat(t),n((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(s)+" "+e[a].symbol).toString())},Precise:function(t,a,n){n(t=(t=parseFloat(t))/e[a].precision+" "+e[a].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},Percentage:function(t,e){e((t/=1e7).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},85692:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"learn-assets-guides",title:"Assets How-to Guides",sidebar_label:"Assets",description:"Advanced How-to Guides about Assets.",slug:"../learn-assets-guides"},u=void 0,c={unversionedId:"learn/learn-assets-guides",id:"learn/learn-assets-guides",title:"Assets How-to Guides",description:"Advanced How-to Guides about Assets.",source:"@site/../docs/learn/learn-assets-guides.md",sourceDirName:"learn",slug:"/learn-assets-guides",permalink:"/docs/learn-assets-guides",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-assets-guides.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1679035834,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"learn-assets-guides",title:"Assets How-to Guides",sidebar_label:"Assets",description:"Advanced How-to Guides about Assets.",slug:"../learn-assets-guides"},sidebar:"docs",previous:{title:"Identity",permalink:"/docs/learn-identity-guides"},next:{title:"Polkadot Vault",permalink:"/docs/learn-vault-guides"}},d={},p=[{value:"Statemint",id:"statemint",level:2},{value:"Creating Assets on Statemint",id:"creating-assets-on-statemint",level:3}],m={toc:p};function h(t){var e=t.components,l=(0,s.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"statemint"},"Statemint"),(0,o.kt)("p",null,"Statemint is a generic assets parachain which provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a system parachain on Polkadot (not to\nbe confused with ",(0,o.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/kusama-statemine/"},"Statemine"),", which is a\nparachain on Kusama). The native token of Statemint is DOT. The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations on Statemint are about 1/10th of\nthe values on the Relay chain. For example, the Existential Deposit of a Statemint account is\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.balances.existentialDeposit",defaultValue:1e9,filter:"humanReadable",mdxType:"RPC"}),",\n","\nwhen compared to\n",(0,o.kt)(i.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"\n","\non Polkadot. Apart from the core protocol token DOT, the assets held on Statemint can be broadly\ncategorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("p",null,"For additional background on Statemint and Statemine check out\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.kt)("h3",{id:"creating-assets-on-statemint"},"Creating Assets on Statemint"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemint, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,o.kt)("p",null,"To create an asset on Statemint, you would need a deposit of\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand around\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.metadataDepositBase",defaultValue:20068e5,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor the metadata . Before you create an asset on Statemint, ensure that your Statemint account\nbalance is a bit more than the sum of those two deposits, which should seamlessly account for the\nrequired deposits and transaction fees. You can send DOT from a Polkadot account to a Statemint\naccount using the teleport functionality. For instructions on teleporting DOT, check this\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required DOT balance on your Statemint account, the following instructions\nshould let you successfully create an asset on Statemint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:a(91182).Z,width:"1222",height:"380"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemint, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemint account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:a(28523).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:a(98600).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(59416).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemint."))}h.isMDXComponent=!0},91182:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-0-c5f6c1142338248879ebbf478c15da9f.png"},28523:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},98600:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},59416:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/Statemint-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},95856:()=>{},46601:()=>{}}]);
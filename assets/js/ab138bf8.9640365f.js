(self.webpackChunk=self.webpackChunk||[]).push([[8791],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(74165),o=n(15861),r=n(67294),i=n(87152),s=n(30967),l=n(67425);function c(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var r,l,c,p,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(r),e.next=21,s.G.create({provider:c});case 21:p=e.sent,(u=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,n=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,r.useState)(""),d=p[0],h=p[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?u(i.toString(),l,t,h):h(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),d}},67425:e=>{var t="polkadot",n="kusama",a="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,s){var l=void 0;if(i===t||i===o)l=3;else{if(i!==n&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/r[i].precision)?e/r[i].precision+" "+r[i].symbol:(e/r[i].precision).toFixed(l)+" "+r[i].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,i){var s=void 0;if(i===t||i===o)s=1;else{if(i!==n&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}r((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},83433:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(47940),s=["components"],l={id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","proxy types","staking proxy"],slug:"../learn-proxies"},c=void 0,p={unversionedId:"learn/learn-proxies",id:"learn/learn-proxies",title:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",source:"@site/../docs/learn/learn-proxies.md",sourceDirName:"learn",slug:"/learn-proxies",permalink:"/docs/learn-proxies",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-proxies.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1704367237,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","proxy types","staking proxy"],slug:"../learn-proxies"},sidebar:"docs",previous:{title:"Multi-Signature Accounts",permalink:"/docs/learn-account-multisig"},next:{title:"Pure Proxy Accounts",permalink:"/docs/learn-proxies-pure"}},u={},d=[{value:"Proxy Types",id:"proxy-types",level:2},{value:"Proxy Deposits",id:"proxy-deposits",level:2},{value:"Time-delayed Proxy",id:"time-delayed-proxy",level:2}],h={toc:d},m="wrapper";function y(e){var t=e.components,l=(0,o.Z)(e,s);return(0,r.kt)(m,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Proxies are helpful because they let you delegate efficiently and add a layer of security. Rather\nthan using funds in a single account, smaller accounts with unique roles can complete tasks on\nbehalf of the main stash account. Proxies can be ",(0,r.kt)("em",{parentName:"p"},"hotter")," than the initial account, which can be\nkept cold, but the ",(0,r.kt)("em",{parentName:"p"},"weight")," of the tokens in the colder account can be used by the hotter accounts.\nThis increases the security of your accounts by minimizing the number of transactions the cold\naccount has to make. This also drives attention away from the stash account, although it is possible\nto determine the relationship between the proxy and the proxied account."),(0,r.kt)("p",null,"From the security perspective, we can imagine proxies as bodyguards of a VIP, loyal and ready to\nrisk their lives to ensure the VIP's protection. But proxies are also useful in other contexts such\nas efficient account management at the corporate level. They also provide an elegant solution to\nchange signatories within multi-signature accounts, and they can be used within proxy calls and\nnested proxy calls. In this page we will explore all these interesting use cases of proxies within\nthe Polkadot ecosystem."),(0,r.kt)("p",null,"Shown below is an example of how you might use these accounts. Imagine you have one stash account as\nyour primary token-holding account and don't want to access it very often, but you want to\nparticipate in staking to earn staking rewards. You could set one of your existing accounts as a\nstaking proxy for that stash account, and use your staking proxy to sign all staking-related\ntransactions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxies",src:n(56789).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"Having a staking proxy will make the stash account isolated within the staking context. In other\nwords, the account assigned as a staking proxy can participate in staking on behalf of that stash.\nWithout the proxy you will need to sign all the staking-related transactions with the stash. If the\nproxy is compromised, it doesn't have access to transfer-related transactions, so the stash account\ncould just set a new proxy to replace it. You can also monitor proxies by\n",(0,r.kt)("a",{parentName:"p",href:"#time-delayed-proxy"},"setting a time-delay"),"."),(0,r.kt)("p",null,"Creating multiple proxy accounts that act for a single account, lets you come up with more granular\nsecurity practices around how you protect private keys while still being able to actively\nparticipate in the network."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"maximum number of proxies")," allowed for a single account is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.maxProxies",defaultValue:32,mdxType:"RPC"}),".\n"," You\ncan have the same proxy for multiple accounts.")),(0,r.kt)("h2",{id:"proxy-types"},"Proxy Types"),(0,r.kt)("p",null,"When a proxy account makes a transaction,\nPolkadot filters the desired transaction to\nensure that the proxy account has the appropriate permission to make that transaction on behalf of\nthe proxied account. For example, staking proxies have permission to do only staking-related\ntransactions."),(0,r.kt)("p",null,"When you set a proxy, you must choose a type of proxy for the relationship.\nPolkadot offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Any"),": allow any transaction, including balance transfers. In most cases, this should be avoided\nas the proxy account is used more frequently than the cold account and is therefore less secure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Non-transfer"),": allow any type of transaction except\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-transactions#balance-transfers"},"balance transfers")," (including\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-transactions#vested-transfers"},"vested")," transfers). Hence, this proxy does not have\npermission to access calls in the Balances and XCM pallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance"),": allow to make transactions related to governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nomination pool"),": allow transactions pertaining to\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-nomination-pools"},"Nomination Pools"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking"),": allow all staking-related transactions. The stash account is meant to stay in cold\nstorage, while the staking proxy account makes day-to-day transactions like setting session keys\nor deciding which validators to nominate. Visit the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-staking-advanced/#staking-proxies"},"Advanced Staking Concepts page")," for more detailed\ninformation about staking proxies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Identity Judgement"),": allow registrars to make judgments on an account's identity. If you are\nunfamiliar with judgment and identities on chain, please refer to\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-identity#judgements"},"this page"),". This proxy can only access ",(0,r.kt)("inlineCode",{parentName:"li"},"provide_judgement")," call\nfrom the Identity pallet along with the calls from the Utility pallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cancel"),": allow to reject and remove any time-delay proxy announcements. This proxy can only\naccess ",(0,r.kt)("inlineCode",{parentName:"li"},"reject_announcement")," call from the Proxy pallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auction"),": allow transactions pertaining to parachain auctions and crowdloans. The Auction proxy\naccount can sign those transactions on behalf of an account in cold storage. If you already set up\na Non-transfer proxy account, it can do everything an Auction proxy can do. Before participating\nin a crowdloan using an Auction proxy, it is recommended that you check with the respective\nparachain team for any possible issues pertaining to the crowdloan rewards distribution. Auction\nproxy can access Auctions, Crowdloan, Registrar and Slots pallets.")),(0,r.kt)("h2",{id:"proxy-deposits"},"Proxy Deposits"),(0,r.kt)("p",null,"Proxies require deposits in the native currency to be created. The deposit is required because\nadding a proxy requires some storage space on-chain, which must be replicated across every peer in\nthe network. Due to the costly nature of this, these functions could open up the network to a\nDenial-of-Service attack. To defend against this attack, proxies require a deposit to be reserved\nwhile the storage space is consumed over the lifetime of the proxy. When the proxy is removed, so is\nthe storage space, and therefore the deposit is returned."),(0,r.kt)("p",null,"The required deposit amount for ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," proxies is equal to:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," ","*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"n")),(0,r.kt)("p",null,"where the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is the required amount to be reserved for an account to have a proxy\nlist (creates one new item in storage). For every proxy the account has, an additional amount\ndefined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is reserved as well (appends 33 bytes to storage location). The\n",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositBase",defaultValue:20008e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.proxyDepositFactor",defaultValue:33e7,filter:"humanReadable",mdxType:"RPC"}),".\n",""),(0,r.kt)("h2",{id:"time-delayed-proxy"},"Time-delayed Proxy"),(0,r.kt)("p",null,"We can add a layer of security to proxies by giving them a delay time. The delay will be quantified\nin blocks. Polkadot has approximately 6\nseconds of block time. A delay value of 10 will mean ten blocks, which equals about one minute\ndelay."),(0,r.kt)("p",null,"The proxy will announce its intended action and will wait for the number of blocks defined in the\ndelay time before executing it. Within this time window, the intended action may be canceled by\naccounts that control the proxy."),(0,r.kt)("p",null,"Announcing ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," calls using a time-delayed proxy also requires a deposit of the form:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositBase")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositFactor")," ","*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"n")),(0,r.kt)("p",null,"where the ",(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositBase")," is the required amount to be reserved for an account to announce\na proxy call. For every proxy call the account has, an additional amount defined by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositFactor")," is reserved as well. The ",(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositBase")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.announcementDepositBase",defaultValue:20008e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"announcementDepositFactor")," is\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.proxy.announcementDepositFactor",defaultValue:66e7,filter:"humanReadable",mdxType:"RPC"}),".\n",""),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are an advanced user, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-accounts-proxy"},"Polkadot-JS guides about proxy accounts"),". You can find\ninformation about creating and removing proxies, and more.")))}y.isMDXComponent=!0},56789:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/stash-vs-stash-and-staking-proxy-2104e1a23d5c29821cec15fb9b67eba5.png"},46601:()=>{}}]);
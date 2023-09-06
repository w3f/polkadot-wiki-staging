(self.webpackChunk=self.webpackChunk||[]).push([[5013],{12418:(a,t,e)=>{"use strict";e.d(t,{Z:()=>c});var n=e(74165),o=e(15861),r=e(67294),i=e(87152),s=e(34200),u=e(67425);function l(a,t,e){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function a(t,e,o){var r,l,d,c,m,p,k,h;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=new i.U(e),a.next=3,s.G.create({provider:r});case 3:return l=a.sent,a.next=6,Promise.all([l.query.session.validators(),l.query.staking.currentEra()]);case 6:return d=a.sent,c=d[0],m=d[1],a.next=11,l.query.staking.erasStakers(m.toString(),c[0]);case 11:return p=a.sent,k=parseInt(p.total),a.next=15,l.query.staking.erasStakers.entries(m.toString());case 15:a.sent.forEach((function(a){a[0];var t=a[1],e=parseInt(t.total);e<k&&(k=e)})),h=k.toString(),(0,u.HumanReadable)(h,t,o);case 19:case"end":return a.stop()}}),a)})))).apply(this,arguments)}const c=function(a){var t=a.network,e=a.defaultValue,i=(0,r.useState)(""),s=i[0],d=i[1];return(0,r.useEffect)((0,o.Z)((0,n.Z)().mark((function a(){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=void 0,"polkadot"!==t){a.next=5;break}o="wss://rpc.polkadot.io",a.next=10;break;case 5:if("kusama"!==t){a.next=9;break}o="wss://kusama-rpc.polkadot.io/",a.next=10;break;case 9:return a.abrupt("return",r.createElement("div",null));case 10:return(0,u.HumanReadable)(e,t,d),a.next=13,l(t,o,d);case 13:case"end":return a.stop()}}),a)}))),[]),s}},47940:(a,t,e)=>{"use strict";e.d(t,{Z:()=>m});var n=e(74165),o=e(15861),r=e(67294),i=e(87152),s=e(34200),u=e(67425);function l(a,t,e){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function a(t,e,o){var r,u,l,d,c;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=void 0,u=void 0,a.t0=t,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){a.next=18;break}return a.abrupt("return");case 18:return l=new i.U(r),a.next=21,s.G.create({provider:l});case 21:d=a.sent,(c=e.split(".")).forEach((function(a){a in d&&(d=d[a])})),a.t1=c[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return u=d.toString(),a.abrupt("break",35);case 29:return a.next=31,d();case 31:return u=(u=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+e);case 35:return a.abrupt("return",u);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function c(a,t,e,n){switch(t){case"humanReadable":(0,u.HumanReadable)(a,e,n);break;case"precise":(0,u.Precise)(a,e,n);break;case"blocksToDays":(0,u.BlocksToDays)(a,n);break;case"percentage":(0,u.Percentage)(a,n);break;case"arrayLength":(0,u.ArrayLength)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const m=function(a){var t=a.network,e=a.path,i=a.defaultValue,s=a.filter,u=void 0===s?void 0:s,d=(0,r.useState)(""),m=d[0],p=d[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==u?c(i.toString(),u,t,p):p(i.toString());var a=void 0;switch(t){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://statemine-rpc.polkadot.io/";break;case"statemint":a="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(t,e,p);case 2:if(void 0!==(o=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==u?c(o,u,t,p):p(o);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),m}},67425:a=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,e,n){var o=void 0;if("polkadot"===e||"statemint"===e)o=3;else{if("kusama"!==e&&"statemine"!==e)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}a=parseFloat(a),n((a=Number.isInteger(a/t[e].precision)?a/t[e].precision+" "+t[e].symbol:(a/t[e].precision).toFixed(o)+" "+t[e].symbol).toString())},Precise:function(a,e,n){n(a=(a=parseFloat(a))/t[e].precision+" "+t[e].symbol)},BlocksToDays:function(a,t){t((a=6*a/86400).toString())},Percentage:function(a,t){t((a/=1e7).toString())},ArrayLength:function(a,t){t((a=a.split(",").length).toString())}}},63801:(a,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=e(87462),o=e(63366),r=(e(67294),e(3905)),i=e(47940),s=e(12418),u=["components"],l={id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},d=void 0,c={unversionedId:"maintain/kusama/maintain-guides-how-to-validate-kusama",id:"maintain/kusama/maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",description:"The fundamentals for running a Kusama validator.",source:"@site/../docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-how-to-validate-kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1691393601,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"}},m={},p=[{value:"Preliminaries",id:"preliminaries",level:2},{value:"How many KSM do I need to become an active Validator?",id:"how-many-ksm-do-i-need-to-become-an-active-validator",level:3},{value:"Validator Rewards",id:"validator-rewards",level:3},{value:"Run a Kusama Validator",id:"run-a-kusama-validator",level:2}],k={toc:p},h="wrapper";function f(a){var t=a.components,e=(0,o.Z)(a,u);return(0,r.kt)(h,(0,n.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preliminaries"},"Preliminaries"),(0,r.kt)("p",null,"Running a validator on a live network is a lot of responsibility! You will be accountable for not\nonly your own stake, but also the stake of your current nominators. If you make a mistake and get\nslashed, your tokens and your reputation will be at risk. However, running a validator can also be\nvery rewarding, knowing that you contribute to the security of a decentralized network while growing\nyour stash."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is highly recommended that you have significant system administration experience before\nattempting to run your own validator."),(0,r.kt)("p",{parentName:"admonition"},"You must be able to handle technical issues and anomalies with your node which you must be able to\ntackle yourself. Being a validator involves more than just executing the binary file.")),(0,r.kt)("p",null,"Since security is so important to running a successful validator, you should take a look at the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator")," information to make sure you understand\nthe factors to consider when constructing your infrastructure. As you progress in your journey as a\nvalidator, you will likely want to use this repository as a ",(0,r.kt)("em",{parentName:"p"},"starting point")," for your own\nmodifications and customizations."),(0,r.kt)("p",null,"If you need help, please reach out on the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#KusamaValidatorLounge:polkadot.builders"},"Kusama Validator Lounge")," on Element.\nThe team and other validators are there to help answer questions and provide tips from experience."),(0,r.kt)("h3",{id:"how-many-ksm-do-i-need-to-become-an-active-validator"},"How many KSM do I need to become an active Validator?"),(0,r.kt)("admonition",{title:"Controller accounts are deprecated",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Controller accounts are deprecated. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),".")),(0,r.kt)("p",null,"You can have a rough estimate on that by using the methods listed\n",(0,r.kt)("a",{parentName:"p",href:"/docs/faq/#what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"here"),".\nTo be elected into the set, you need a minimum stake behind your validator. This stake can come from\nyourself or from ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominators"),". This means that as a minimum, you\nwill need enough KSM to set up Stash and staking proxy ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"accounts"),"\nwith the existential deposit, plus a little extra for transaction fees. The rest can come from\nnominators. To understand how validators are elected, check the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS Election algorithms")," page."),(0,r.kt)("admonition",{title:"On-Chain Data for Reference",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On Kusama, the minimum stake backing a validator in the active set is\n","\n",(0,r.kt)(s.Z,{network:"kusama",defaultValue:5288388652143741,mdxType:"MinimumStake"})," in the\nera\n","\n",(0,r.kt)(i.Z,{network:"kusama",path:"query.staking.currentEra",defaultValue:"4838",mdxType:"RPC"}),"."),(0,r.kt)("p",{parentName:"admonition"},"On Polkadot, the minimum stake backing a validator in the active set is\n",(0,r.kt)(s.Z,{network:"polkadot",defaultValue:0x3d83c4f4e51b08,mdxType:"MinimumStake"}),"\n"," in the era\n",(0,r.kt)(i.Z,{network:"polkadot",path:"query.staking.currentEra",defaultValue:"998",mdxType:"RPC"}),".\n","")),(0,r.kt)("admonition",{title:"Join the Thousand Validator Programme",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/thousand-validators"},"The Thousand Validator Programme")," is an initiative by Web3\nFoundation and Parity Technologies to use the funds held by both organizations to nominate\nvalidators in the community.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Any KSM that you stake for your validator is liable to be slashed, meaning that an\ninsecure or improper setup may result in loss of KSM tokens! If you are not confident in your\nability to run a validator node, it is recommended to nominate your KSM to a trusted validator node\ninstead."),(0,r.kt)("h3",{id:"validator-rewards"},"Validator Rewards"),(0,r.kt)("p",null,"On Kusama, one day is approximately four eras whereas on Polkadot, one era is approximately a day.\nIn each era, the validators elected to the active set earn era points which correspond to the actual\nrewards earned that are distributed proportionally to the nominators after deducting the validator\ncommission. Currently, the minimum validator commission is set to\n","\n",(0,r.kt)(i.Z,{network:"kusama",path:"query.staking.minCommission",filter:"percentage",defaultValue:"10",mdxType:"RPC"}),"%\nwhich can be set through on-chain governance. For more information rewards and payouts, check the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout"},"validator payout")," document."),(0,r.kt)("h2",{id:"run-a-kusama-validator"},"Run a Kusama Validator"),(0,r.kt)("p",null,"Running a validator on the Kusama network is identical to running a Polkadot validator. Check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"Polkadot guide")," on how to setup a validator."),(0,r.kt)("p",null,"Make sure to adjust the Polkadot guide to run a Kusama network validator (the instructions will also\nbe available in the Polkadot Validator guide):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When starting the node pass ",(0,r.kt)("inlineCode",{parentName:"li"},"--chain=kusama")," CLI flag")))}f.isMDXComponent=!0},46601:()=>{}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[7288],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(74165),a=n(15861),o=n(67294),s=n(87152),r=n(34200),l=n(67425);function c(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,i.Z)().mark((function e(t,n,a){var o,l,c,d,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return c=new s.U(o),e.next=21,r.G.create({provider:c});case 21:d=e.sent,(h=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=h[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+h[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n,i){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,i);break;case"precise":(0,l.Precise)(e,n,i);break;case"blocksToDays":(0,l.BlocksToDays)(e,i);break;case"percentage":(0,l.Percentage)(e,i);break;case"arrayLength":(0,l.ArrayLength)(e,i);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,d=(0,o.useState)(""),u=d[0],p=d[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?h(s.toString(),l,t,p):p(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,p);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(a,l,t,p):p(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,i){var a=void 0;if("polkadot"===n||"statemint"===n)a=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),i((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(a)+" "+t[n].symbol).toString())},Precise:function(e,n,i){i(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},15418:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(47940),r=["components"],l={id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},c=void 0,d={unversionedId:"maintain/maintain-guides-how-to-chill",id:"maintain/maintain-guides-how-to-chill",title:"How to Chill",description:"Steps on chilling as a network participant.",source:"@site/../docs/maintain/maintain-guides-how-to-chill.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-chill",permalink:"/docs/maintain-guides-how-to-chill",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-chill.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1689335021,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},sidebar:"docs",previous:{title:"Monitor your node",permalink:"/docs/maintain-guides-how-to-monitor-your-node"},next:{title:"How to Stop Validating",permalink:"/docs/maintain-guides-how-to-stop-validating"}},h={},u=[{value:"Consideration for Staking Election",id:"consideration-for-staking-election",level:2},{value:"Chilling as a Nominator",id:"chilling-as-a-nominator",level:2},{value:"Chilling as a Validator",id:"chilling-as-a-validator",level:2},{value:"Involuntary Chills",id:"involuntary-chills",level:2},{value:"Chill Other",id:"chill-other",level:2}],p={toc:u},m="wrapper";function k(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)(m,(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Staking bonds can be in any of the three states: validating, nominating, or chilled (neither\nvalidating nor nominating). When a staker wants to temporarily pause their active engagement in\nstaking but does not want to unbond their funds, they can choose to "chill" their involvement and\nkeep their funds bonded.'),(0,o.kt)("p",null,'An account can step back from participating in active staking by clicking "Stop" under the Network >\nStaking > Account actions page in ',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," or by calling the\n",(0,o.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_staking/pallet/enum.Call.html#variant.chill"},"staking pallet"),".\nWhen an account chooses to chill, it becomes inactive in the next era. The call must be signed by\nthe ",(0,o.kt)("em",{parentName:"p"},"staking proxy")," account, not the ",(0,o.kt)("em",{parentName:"p"},"stash"),"."),(0,o.kt)("admonition",{title:"Primer on stash and staking proxy accounts",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you need a refresher on the different responsibilities of the stash and staking proxy account\nwhen staking, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-staking#accounts"},"accounts")," section in the\ngeneral staking guide.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"staking",src:n(10233).Z,width:"1920",height:"800"})),(0,o.kt)("h2",{id:"consideration-for-staking-election"},"Consideration for Staking Election"),(0,o.kt)("p",null,"A bond that is actively participating in staking but chilled would continue to participate in\nstaking for the rest of the current era. If the bond was chilled in sessions 1 through 4 and\ncontinues to be chilled for the rest of the era, it would NOT be selected for election in the next\nera. If a bond was chilled for the entire session 5, it would not be considered in the next\nelection. If the bond was chilled in session 6, its participation in the next era's election would\ndepend on its state in session 5."),(0,o.kt)("h2",{id:"chilling-as-a-nominator"},"Chilling as a Nominator"),(0,o.kt)("p",null,"When you chill after being a nominator, your nominations will be reset. This means that when you\ndecide to start nominating again you will need to select validators to nominate once again. These\ncan be the same validators if you prefer, or, a completely new set. Just be aware - your nominations\nwill not persist across chills."),(0,o.kt)("p",null,"Your nominator will remain bonded when it is chilled. When you are ready to nominate again, you will\nnot need to go through the whole process of bonding again, rather, you will issue a new nominate\ncall that specifies the new validators to nominate."),(0,o.kt)("h2",{id:"chilling-as-a-validator"},"Chilling as a Validator"),(0,o.kt)("p",null,"When you voluntarily chill after being a validator, your nominators will remain. As long as your\nnominators make no action, you will still have the nominations when you choose to become an active\nvalidator once again. You bond however would not be listed as a nominable validator thus any\nnominators issuing new or revisions to existing nominations would not be able to select your bond."),(0,o.kt)("p",null,"When you become an active validator, you will also need to reset your validator preferences\n(commission, etc.). These can be configured as the same values set previously or something\ndifferent."),(0,o.kt)("h2",{id:"involuntary-chills"},"Involuntary Chills"),(0,o.kt)("p",null,"If a validator was unresponsive for an entire session, the validator bond would be chilled in a\nprocess known as ",(0,o.kt)("em",{parentName:"p"},"involuntary chilling.")," When a validator has been involuntarily chilled, it may\nrestrict the validator from being selected in the next election depending on the session in which it\nwas chilled (see considerations above). A chilled validator may re-declare the intent to validate at\nany time. However, it is recommended that the validator attempts to determine the source of the\nchill before doing so."),(0,o.kt)("p",null,"Slashing may also result in an involuntary chill. However, in that scenario, the validator would\nalso lose their nominations. By this action, even if the validator re-declares its intent to\nvalidate before session 5, there wouldn't be sufficient nominations to re-elect the node into the\nactive set."),(0,o.kt)("p",null,'Nominators have the option to renominate a slashed validator using a display row in Polkadot-JS UI.\nThis row is displayed in the "Account Actions" tab for the nominator under a heading that says\n"Renomination required".'),(0,o.kt)("h2",{id:"chill-other"},"Chill Other"),(0,o.kt)("p",null,"An unbounded and unlimited number of nominators and validators in Polkadot's NPoS is not possible\ndue to constraints in the runtime. As a result, multiple checks are incorporated to keep the size of\nstaking system manageable, like mandating minimum active bond requirements for both nominators and\nvalidators. When these requirements are modified through on-chain governance, they can be enforced\nonly on the accounts that newly call ",(0,o.kt)("inlineCode",{parentName:"p"},"nominate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," after the update. The changes to the\nbonding parameters would not automatically chill the active accounts on-chain which do not meet the\nrequirements."),(0,o.kt)("admonition",{title:"Chill Threshold",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ChillThreshold")," defines how close to the max nominators or validators we must reach before users\ncan start chilling one-another. This value is currently set to\n",(0,o.kt)(s.Z,{network:"polkadot",path:"query.staking.chillThreshold",defaultValue:90,mdxType:"RPC"}),"%\n","")),(0,o.kt)("p",null,"For instance, let us consider a scenario where the minimum staking requirement for nominators is\nchanged from 80 DOTs to 120 DOTs. An account that was actively nominating with 80 DOTs before this\nupdate would still keep receiving staking rewards. To handle this corner case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"chillOther"),"\nextrinsic was incorporated which also helps to keep things backwards compatible and safe. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"chillOther")," extrinsic is permissionless and any third party user can target it on an account where\nthe minimum active bond is not satisfied, and chill that account. The list of addresses of all the\nactive validators and their nominators can be viewed by running\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"validator stats")," script."),(0,o.kt)("admonition",{title:"Chill Other on Polkadot Network",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Through ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/90"},"Referendum 90"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"maxNominatorCount")," on\nPolkadot is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," eliminating the upper bound on the number of nominators on the network.\nDue to this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"chillOther")," extrinsic on Polkadot network has no effect as the chill threshold\nwill never be met.")))}k.isMDXComponent=!0},10233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=n.p+"assets/images/staking-keys-stash-proxy-503c2b8b6c40b269a16576dd7fe805b8.png"},46601:()=>{}}]);
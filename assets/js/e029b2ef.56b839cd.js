(self.webpackChunk=self.webpackChunk||[]).push([[2343],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(4165),a=n(5861),o=n(7294),s=n(3444),r=n(1165),l=n(7425);function d(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,i.Z)().mark((function e(t,n,a){var o,l,d,u,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(o),e.next=21,r.G.create({provider:d});case 21:u=e.sent,(c=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,i){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,i);break;case"blocksToDays":(0,l.BlocksToDays)(e,i);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,u=(0,o.useState)(""),p=u[0],h=u[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?c(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),p}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,i){var a=void 0;if("polkadot"===n||"statemint"===n)a=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),i((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(a)+" "+t[n].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},4396:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(7940),r=["components"],l={id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},d=void 0,u={unversionedId:"learn/learn-staking-miner",id:"learn/learn-staking-miner",title:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",source:"@site/../docs/learn/learn-staking-miner.md",sourceDirName:"learn",slug:"/learn-staking-miner",permalink:"/docs/learn-staking-miner",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-staking-miner.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663544579,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},sidebar:"docs",previous:{title:"SPREE",permalink:"/docs/learn-spree"},next:{title:"WebAssembly (Wasm)",permalink:"/docs/learn-wasm"}},c={},p=[{value:"NPoS election optimization",id:"npos-election-optimization",level:2},{value:"Signed Phase of the election pallet",id:"signed-phase-of-the-election-pallet",level:2},{value:"Further Resources",id:"further-resources",level:2}],h={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The staking-miner code is experimental and it is still in development phase. Use is at your own\ndiscretion, as there is a risk of losing some funds.")),(0,o.kt)("p",null,"The staking miner is a passive validator functionality which runs when a new set of validators need\nto be elected for NPoS. This is a computationally intense process, hence the mining. Staking miners\ncompete with each other to produce election solutions which consist of a validator set, stake\ndistribution across that set, and a score indicating how optimal the solution is. Staking miners run\nthe any given staking algortihms(as of now, sequential Phragm\xe9n or PhragMMS, this is subject to\nchange if improved algorithms are introduced) to produce results, and the result is then sent as a\ntransaction to the relay chain via a normal signed extrinsic. The transaction requires a bond, and a\ntransaction fee. The best solution is rewarded which in the least covers the transaction fee, and\nthe bond is returned to the account. If the solution is not valid, the bond and the fee are lost."),(0,o.kt)("p",null,"Staking miner uses a pallet called ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," and can only produce\nsolutions during the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#signed-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"SignedPhase")),"\nof the pallet's life cycle. Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedPhase")," is over and the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html#unsigned-phase"},(0,o.kt)("inlineCode",{parentName:"a"},"UnsignedPhase")),"\nstarts, only the off-chain workers can provide election results."),(0,o.kt)("p",null,"Running the staking miner requires passing the seed of a funded account in order to pay the fees for\nthe transactions that will be sent. The same account's balance is used to reserve deposits as well.\nThe best solution in each round is rewarded. All correct solutions will get their bond back and the\nones that submit invalid solutions will lose their bond."),(0,o.kt)("h2",{id:"npos-election-optimization"},"NPoS election optimization"),(0,o.kt)("p",null,"A basic election solution is a simple distribution of stake across validators, but this can be\noptimized for better distribution equaling a higher security score. The staking miner does not act\nas a validator and focuses solely on the election result and optimization of the solution. It\nconnects to a specified chain and keeps listening to new signed phase of the election pallet in\norder to submit solutions to the NPoS election. When the correct time comes, it computes its\nsolution and submits it to the chain. The default miner algorithm is sequential Phragm\xe9n with a\nconfigurable number of balancing iterations that improve the score."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NPoS election optimization",src:n(3471).Z,width:"1868",height:"804"})),(0,o.kt)("h2",{id:"signed-phase-of-the-election-pallet"},"Signed Phase of the election pallet"),(0,o.kt)("p",null,"The election provider pallet ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," is divided into two phases,\n",(0,o.kt)("strong",{parentName:"p"},"signed")," and ",(0,o.kt)("strong",{parentName:"p"},"unsigned"),". At the end of the pallet's timeline, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"elect()")," is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                                                                   elect()\n                +   <--T::SignedPhase--\x3e  +  <--T::UnsignedPhase--\x3e   +\n  +-------------------------------------------------------------------+\n   Phase::Off   +       Phase::Signed     +      Phase::Unsigned      +\n")),(0,o.kt)("p",null,"Solutions provided by the staking miner can only be submitted during the signed phase. Solutions are\nsubmitted and queued on the chain as a ",(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution"),". Once submitted, a solution cannot be retracted\nby the originating account."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RawSolution")," struct definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pub struct RawSolution<S> {\n    pub solution: S, // The solution itself\n    pub score: ElectionScore, // The claimed score of the solution.\n    pub round: u32, // The round at which this solution should be submitted.\n}\n")),(0,o.kt)("p",null,"A maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet::Config::MaxSignedSubmissions")," will be stored on-chain and they will be sorted\nbased on score. Higher the score the more optimal the election solution is. On both Polkadot and\nKusama the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs#L446"},"'MaxSignedSubmissions'"),"\nis set to\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.electionProviderMultiPhase.signedMaxSubmissions",defaultValue:16,mdxType:"RPC"}),"\n","\nsubmissions. This variable can be modified if needed through governance."),(0,o.kt)("p",null,"Upon arrival of a new solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the queue is not full, it is stored in the appropriate sorted index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full but the submitted solution is better than one of the queued ones, the worse\nsolution is discarded, the bond of the outgoing solution is returned, and the new solution is\nstored in the correct index."),(0,o.kt)("li",{parentName:"ol"},"If the queue is full and the solution is not an improvement compared to any of the queued ones,\nit is instantly rejected and no bond is reserved.")),(0,o.kt)("p",null,"Upon the end of the signed phase, no more solutions can be submitted and the solutions in the queue\nwill be checked using\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_election_provider_multi_phase/pallet/struct.Pallet.html#method.feasibility_check"},(0,o.kt)("inlineCode",{parentName:"a"},"Pallet::feasibility_check")),"\nwhich ensures the score is indeed correct, and marks them as valid or invalid. By checking each\nsolution in the queue, the queue will be reorganized by score. The highest valid score will be\nrewarded. Invalid solutions with higher score than the winning solution will be slashed. The rest of\nthe solutions will be discarded and their deposit will be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Queue\n+-------------------------------+\n|Solution(score=20, valid=false)| +--\x3e  Slashed\n+-------------------------------+\n|Solution(score=15, valid=true )| +--\x3e  Rewarded, Saved\n+-------------------------------+\n|Solution(score=10, valid=true )| +--\x3e  Discarded\n+-------------------------------+\n|Solution(score=05, valid=false)| +--\x3e  Discarded\n+-------------------------------+\n|             None              |\n+-------------------------------+\n")),(0,o.kt)("p",null,"If you want to run a staking miner on your validator, refer to the repository provided in the\nresources section below."),(0,o.kt)("h2",{id:"further-resources"},"Further Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html"},"Election Pallet definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/staking-miner-v2"},"Staking Miner repository"))))}m.isMDXComponent=!0},3471:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=n.p+"assets/images/NPoS-election-optimization-3ef1b7bd0a99f64c4198511b4216989d.png"},3971:()=>{},6601:()=>{}}]);
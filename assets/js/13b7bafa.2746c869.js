(self.webpackChunk=self.webpackChunk||[]).push([[6585],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(74165),i=n(15861),o=n(67294),r=n(87152),s=n(30967),l=n(67425);function c(e,t,n){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,a.Z)().mark((function e(t,n,i){var o,l,c,h,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return c=new r.U(o),e.next=21,s.G.create({provider:c});case 21:h=e.sent,(d=n.split(".")).forEach((function(e){e in h&&(h=h[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=h.toString(),e.abrupt("break",35);case 29:return e.next=31,h();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,h=(0,o.useState)(""),p=h[0],u=h[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(r.toString(),l,t,u):u(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,u);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(i,l,t,u):u(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var t="polkadot",n="kusama",a="statemine",i="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,s){var l=void 0;if(r===t||r===i)l=3;else{if(r!==n&&r!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/o[r].precision)?e/o[r].precision+" "+o[r].symbol:(e/o[r].precision).toFixed(l)+" "+o[r].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,r){var s=void 0;if(r===t||r===i)s=1;else{if(r!==n&&r!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}o((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},83881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>P,default:()=>q,frontMatter:()=>A,metadata:()=>C,toc:()=>B});var a,i=n(87462),o=n(63366),r=n(67294),s=n(3905),l=n(47940),c=n(74165),h=n(15861),d=n(7015),p=n(88454),u=n(48702),m=n(56429),k=n(81880),f=(0,n(68806).Ps)(a||(a=(0,k.Z)(["\nquery AUCTION {\n  auctions(orderBy: biddingStartBlock_height_ASC) {\n    id\n    status\n    biddingEndsBlock {\n      height\n      timestamp\n    }\n    biddingStartBlock {\n      height\n      timestamp\n    }\n    endPeriodBlock {\n      height\n      timestamp\n    }\n    onboardEndBlock {\n      height\n      timestamp\n    }\n    onboardStartBlock {\n      height\n      timestamp\n    }\n    startBlock {\n      timestamp\n      height\n    }\n  }\n  squidStatus {\n    height\n  }\n}"]))),b={POLKADOT:"polkadot",KUSAMA:"kusama"},g={BlockNumber:void 0},w=[];function y(e,t){console.log("There was a problem fetching from with your query: ",e),t(r.createElement("div",null,"There was a problem with the query used to fetch auction data. If this issue persists, please submit an issue at the",r.createElement("a",{href:"https://github.com/w3f/polkadot-wiki/",target:"_blank"}," Polkadot Wiki repository on Github")))}function v(e){switch(e){case b.POLKADOT:return{httpLink:new m.u({uri:"https://squid.subsquid.io/polkadot-wiki-squid/v/v1/graphql"}),explorer:"https://polkadot.subscan.io/block/"};case b.KUSAMA:return{httpLink:new m.u({uri:"https://squid.subsquid.io/kusama-guide-squid/v/v1/graphql"}),explorer:"https://kusama.subscan.io/block/"}}}function N(e){return x.apply(this,arguments)}function x(){return(x=(0,h.Z)((0,c.Z)().mark((function e(t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.map((function(e){return parseInt(e.id)})).reverse().forEach((function(e){var t=r.createElement("option",{value:e,key:e},"Auction #"+e);w.push(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n,a){var i=g.BlockNumber,o=new Date(parseInt(t[a].onboardStartBlock.timestamp)).toDateString(),s=new Date(parseInt(t[a].onboardEndBlock.timestamp)).toDateString(),l=new Date(parseInt(t[a].biddingStartBlock.timestamp)).toDateString(),c=new Date(parseInt(t[a].biddingEndsBlock.timestamp)).toDateString(),h=r.createElement("div",null,o+" - ",r.createElement("a",{href:""+e+t[a].onboardStartBlock.height},"Block #",t[a].onboardStartBlock.height)," to ",s+" - ",r.createElement("a",{href:""+e+t[a].onboardEndBlock.height},"Block #",t[a].onboardEndBlock.height)),d=parseInt(a)+1,p=e.startsWith("https://polkadot")?"https://polkadot.subscan.io/auction/":"https://kusama.subscan.io/auction/",u=r.createElement("div",null,r.createElement("div",null,r.createElement("a",{target:"_blank",href:""+p+d},"Auction #",d," is ",t[a].status)),r.createElement("br",null),r.createElement("select",{id:"AuctionSelector",onChange:function(a){return function(e,t,n,a){S(e,t,n,parseInt(a.target.value)-1)}(e,t,n,a)},style:{border:"2px solid #e6007a",height:"40px"}},w.map((function(e){return e}))),r.createElement("hr",null),r.createElement("b",null,"Auction Starts:"),r.createElement("br",null),new Date(parseInt(t[a].startBlock.timestamp)).toDateString()+" - ",r.createElement("a",{href:""+e+t[a].startBlock.height},"Block #",t[a].startBlock.height),r.createElement("hr",null),r.createElement("b",null,"Ending Period Starts:"),r.createElement("br",null),l+" - ",r.createElement("a",{href:""+e+t[a].biddingStartBlock.height},"Block #",t[a].biddingStartBlock.height),r.createElement("hr",null),r.createElement("b",null,"Auction Ends:"),r.createElement("br",null),c+" - ",r.createElement("a",{href:""+e+t[a].biddingEndsBlock.height},"Block #",t[a].biddingEndsBlock.height),r.createElement("hr",null),r.createElement("b",null,"Lease Period:"),r.createElement("br",null),h,r.createElement("hr",null),r.createElement("p",{style:{color:"#6c757d"}},"The dates and block numbers listed above can change based on network block production and the potential for skipped blocks. Dates for finalized blocks are pulled from on-chain, while future blocks are estimated using 6 second average block times. The current block is ",r.createElement("a",{href:""+e+i}," Block #",i),"."));return n(u),t}const T=function(e){var t=e.network,n=(0,r.useState)("Loading Auctions..."),a=n[0],i=n[1];return(0,r.useEffect)((0,h.Z)((0,c.Z)().mark((function e(){var n,a,o,s,l,h;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),a=new d.f({cache:new p.h,link:u.i.from([n.httpLink])}),e.next=4,a.query({query:f}).catch((function(e){return y(e,i)}));case 4:if(void 0===(o=e.sent)){e.next=17;break}if(s=o.data.squidStatus.height,0!=(l=o.data.auctions).length){e.next=12;break}i(r.createElement("div",null,"No auctions found on this network.")),e.next=17;break;case 12:return g.BlockNumber=s,e.next=15,N(l);case 15:h=l.length-1,S(n.explorer,l,i,h);case 17:case"end":return e.stop()}}),e)}))),[]),void 0!==a?a:r.createElement("div",null,"Loading auction data...")};var E=["components"],A={id:"learn-auction",title:"Parachain Slot Auctions",sidebar_label:"Parachain Slot Auctions",description:"Polkadot's Parachain Slot Auction Mechanism.",keywords:["auction","slot auctions","parachain","bidding"],slug:"../learn-auction"},P=void 0,C={unversionedId:"learn/learn-auction",id:"learn/learn-auction",title:"Parachain Slot Auctions",description:"Polkadot's Parachain Slot Auction Mechanism.",source:"@site/../docs/learn/learn-auction.md",sourceDirName:"learn",slug:"/learn-auction",permalink:"/docs/learn-auction",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-auction.md",tags:[],version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1705412234,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{id:"learn-auction",title:"Parachain Slot Auctions",sidebar_label:"Parachain Slot Auctions",description:"Polkadot's Parachain Slot Auction Mechanism.",keywords:["auction","slot auctions","parachain","bidding"],slug:"../learn-auction"},sidebar:"docs",previous:{title:"System Parachains",permalink:"/docs/learn-system-chains"},next:{title:"Parachain Crowdloans",permalink:"/docs/learn-crowdloans"}},_={},B=[{value:"Auction Schedule",id:"auction-schedule",level:2},{value:"Mechanics of a Candle Auction",id:"mechanics-of-a-candle-auction",level:2},{value:"Randomness in action",id:"randomness-in-action",level:3},{value:"Rationale",id:"rationale",level:2},{value:"Network Implementation",id:"network-implementation",level:2},{value:"Bidding",id:"bidding",level:2},{value:"Examples",id:"examples",level:3},{value:"Parachain Lease Extension",id:"parachain-lease-extension",level:2},{value:"Lease Extension with Overlapping Slots",id:"lease-extension-with-overlapping-slots",level:3},{value:"Lease Extension with Non-Overlapping Slots",id:"lease-extension-with-non-overlapping-slots",level:3},{value:"Resources",id:"resources",level:2}],D={toc:B},R="wrapper";function q(e){var t=e.components,a=(0,o.Z)(e,E);return(0,s.kt)(R,(0,i.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"For a ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," to be added to\nPolkadot it must inhabit one of the available\nparachain slots. The number of parachain slots is not unbounded on\nPolkadot, as only a limited number are\navailable. A limited number of slots are unlocked every few months through on-chain governance. If a\nparachain wants to have guaranteed block inclusion at every Relay Chain block, it must acquire a\nparachain slot. The development of\n",(0,s.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/on-demand-parachains/2208"},"on-demand parachains")," (previously\nreferred to as parathreads) is in progress."),(0,s.kt)("p",null,"The parachain slots will be leased according to an unpermissioned\n",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Candle_auction"},"candle auction"),", with several alterations related to\nimproving security while operating on a blockchain. See ",(0,s.kt)("a",{parentName:"p",href:"#rationale"},"Rationale")," for additional\ndetails."),(0,s.kt)("div",{className:"row"},(0,s.kt)("div",{className:"col text--center"},(0,s.kt)("a",{href:"https://youtu.be/i5-Rw2Sf7-w"},(0,s.kt)("img",{src:"https://img.youtube.com/vi/i5-Rw2Sf7-w/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,s.kt)("p",null,"A Beginner's guide to Parachain Slot Auctions",(0,s.kt)("br",null),(0,s.kt)("a",{href:"https://youtu.be/i5-Rw2Sf7-w"},"\xbb view video")))),(0,s.kt)("h2",{id:"auction-schedule"},"Auction Schedule"),(0,s.kt)("p",null,"",(0,s.kt)(T,{network:"polkadot",mdxType:"AuctionSchedule"}),"\n",""),(0,s.kt)("h2",{id:"mechanics-of-a-candle-auction"},"Mechanics of a Candle Auction"),(0,s.kt)("p",null,"Candle auctions are a variant of open auctions where bidders submit bids that are increasingly\nhigher. The highest bidder at the conclusion of the auction is considered the winner."),(0,s.kt)("p",null,'Candle auctions were originally employed in the 16th century for the sale of ships. The name is\nderived from the system by which the auction length was determined. The phrase "inch of a candle"\nrefers to the length of time required for a candle to burn down 1 inch. When the flame extinguishes\nand the candle goes out, the auction terminates and the standing bid at that point in time prevails\nthe winner.'),(0,s.kt)("p",null,"When candle auctions are used online, they require a random number to decide the moment of\ntermination. Parachain slot auctions differ slightly from a normal candle auction in that they do\nnot randomly terminate the auction. Instead, they run for an entire fixed duration and the winner is\nrandomly chosen retroactively."),(0,s.kt)("p",null,"The candle auction on Polkadot is split into\ntwo parts:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("em",{parentName:"p"},"opening period")," which is in effect immediately after the auction starts. This period lasts\nfor one day and eighteen hours and serves as a buffer time for parachain candidates to setup\ntheir initial bids, and likely start executing their strategy on how to win the slot auction.\nDuring the opening phase, bids will continue to be accepted, but they do not have any effect on\nthe outcome of the auction.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("em",{parentName:"p"},"ending period")," follows the opening period for five additional days, where the auction is\nsubject to end based on the candle auction mechanism."))),(0,s.kt)("p",null,"The auction\u2019s ending time can occur any time within the ending period. This time is automatically\nand randomly chosen by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-cryptography#vrf"},"Verifiable Random Function (VRF)"),". The\nprobability of winning the auction is equal to the number of blocks that contain a winning bid,\ndivided by the total number of blocks in the ending period. The random ending is managed by\npropagating through the entire ending period, where a snapshot is taken at each block within the\nending period to capture the winners for that given block. At the end of the period, one of the\nsnapshots is randomly selected to determine the winner of the auction."),(0,s.kt)("admonition",{title:"The parachain candidate with the highest bid at the ending time chosen by the Verifiable",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Random Function wins the slot auction.")),(0,s.kt)("p",null,"A parachain auction on Polkadot lasts exactly\none week from the start: 1 day and 18 hours for the starting period,\n",(0,s.kt)(l.Z,{network:"polkadot",path:"consts.auctions.endingPeriod",defaultValue:72e3,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays for the ending period (candle auction phase) and 6 hours for determining the auction winner."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans##supporting-a-crowdloan-campaign"},"Crowdloan contributions")," cannot be made\nduring these six hours when the winning block for the auction is being determined on-chain.")),(0,s.kt)("p",null,"More details on this are available in the ",(0,s.kt)("a",{parentName:"p",href:"#network-implementation"},"Network Implementation")," section."),(0,s.kt)("h3",{id:"randomness-in-action"},(0,s.kt)("a",{parentName:"h3",href:"/docs/learn-cryptography#randomness"},"Randomness")," in action"),(0,s.kt)("p",null,"The following example will showcase the randomness mechanics of the candle auction for the ninth\nauction on Kusama. Keep in mind that the candle phase has a uniform termination profile and has an\nequal probability of ending at any given block, and the termination block cannot be predicted before\nor during the auction."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ending period of auction 9 starts at ",(0,s.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/auction/9"},(0,s.kt)("inlineCode",{parentName:"a"},"block 9362014")),"."),(0,s.kt)("admonition",{parentName:"li",type:"note"},(0,s.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The auction has a full duration equal to ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"block 9362014")," + ",(0,s.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"72000")),(0,s.kt)("p",{parentName:"admonition"},"Here, ",(0,s.kt)("inlineCode",{parentName:"p"},"block 72000"),' is the "ending period", which is divided into ',(0,s.kt)("strong",{parentName:"p"},"3600 samples of 20 blocks"),".\nFiguratively, the candle is lit, and the candle phase lasts for 72,000 blocks."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The winning sample during the ending period had the ",(0,s.kt)("inlineCode",{parentName:"p"},"index 1078"),"."),(0,s.kt)("admonition",{parentName:"li",title:"Sample 1078 is the winner",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Sample 1078 refers to the winner as of ",(0,s.kt)("inlineCode",{parentName:"p"},"block 9362014 + 21560"),", which equals\n",(0,s.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/block/9383574"},(0,s.kt)("inlineCode",{parentName:"a"},"block 9383574")),"."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The parent block was a new BABE session in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Logs"),", which updated the randomness that was used\nto select that ",(0,s.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/block/9434277"},"sample index"),"."),(0,s.kt)("admonition",{parentName:"li",title:"Inspecting the block state",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can inspect the state at the end of ",(0,s.kt)("inlineCode",{parentName:"p"},"block 9434277")," to see the sample indices with an\n",(0,s.kt)("a",{parentName:"p",href:"/docs/maintain-sync####types-of-nodes"},"archive node"),". The digest in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Logs")," of\n",(0,s.kt)("inlineCode",{parentName:"p"},"9434277")," is decodable and contains the random value as well as the BABE authorities."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"As a result, the winner of this auction was not the highest bid during the full duration."))),(0,s.kt)("h2",{id:"rationale"},"Rationale"),(0,s.kt)("p",null,"The open and transparent nature of blockchain systems opens attack vectors that are non-existent in\ntraditional auction formats. Normal open auctions in particular can be vulnerable to ",(0,s.kt)("em",{parentName:"p"},"auction\nsniping")," when implemented over the internet or on a blockchain."),(0,s.kt)("p",null,"Auction sniping takes place when the end of an auction is known and bidders are hesitant to bid\ntheir true price early, in hopes of paying less than they actually value the item."),(0,s.kt)("p",null,"For example, Alice may value an item at auction for 30 USD. She submits an initial bid of 10 USD in\nhopes of acquiring the items at a lower price. Alice's strategy is to place incrementally higher\nbids until her true value of 30 USD is exceeded. Another bidder Eve values the same item at 11 USD.\nEve's strategy is to watch the auction and submit a bid of 11 USD at the last second. Alice will\nhave no time to respond to this bid before the close of the auction and will lose the item. The\nauction mechanism is sub-optimal because it has not discovered the true price of the item and the\nitem has not gone to the actor who valued it the most."),(0,s.kt)("p",null,"On blockchains this problem may be even worse, since it potentially gives the producer of the block\nan opportunity to snipe any auction at the last concluding block by adding it themselves while\nignoring other bids. There is also the possibility of a malicious bidder or a block producer trying\nto ",(0,s.kt)("em",{parentName:"p"},"grief")," honest bidders by sniping auctions."),(0,s.kt)("p",null,"For this reason, ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vickrey_auction"},"Vickrey auctions"),", a type of\nsealed-bid auction where bids are hidden and only revealed at a later phase, have emerged as a\nwell-regarded mechanic. For example, this mechanism is leveraged to auction human readable names on\nthe ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced"},"ENS"),". The Candle auction is another solution that does not require\na two-step commit and reveal schemes (a main component of Vickrey auctions), which allows smart\ncontracts to participate."),(0,s.kt)("p",null,"Candle auctions allow everyone to always know the states of the bid, but they do not reveal when the\nauction has officially ended. This helps to ensure that bidders are willing to make their true bids\nearly. Otherwise, they may find themselves in a situation where the auction was determined to have\nended before having an opportunity to bid."),(0,s.kt)("h2",{id:"network-implementation"},"Network Implementation"),(0,s.kt)("p",null,"Polkadot will use a ",(0,s.kt)("em",{parentName:"p"},"random beacon")," based on\nthe ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-cryptography#vrf"},"Verifiable Random Function (VRF)"),". The VRF will provide the base\nof the randomness, which will retroactively determine the end-time of the auction."),(0,s.kt)("p",null,"The slot durations are capped to 2 years and divided into 3-month periods.\nParachains may lease a slot for any\ncombination of periods of the slot duration. Parachains may lease more than one slot over time,\nmeaning that they could extend their lease to the network past the maximum duration by leasing a\ncontiguous slot."),(0,s.kt)("admonition",{title:"Individual parachain slots are fungible",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This means that parachains do not need to always inhabit the same slot, however they always must\nmaintain a slot to remain a parachain.")),(0,s.kt)("h2",{id:"bidding"},"Bidding"),(0,s.kt)("p",null,"Parachains or parachain teams, bid in the auction by specifying the slot range that they want to\nlease and the number of tokens they are willing to reserve. Bidders can be either ordinary accounts,\nor use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloan functionality")," to source tokens from the community. For a\nmore in-depth comparison between both of these options for gaining a parachain slot, check out this\nsection on\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans#crowdloan-campaigns-vs-parachain-auctions"},"Crowdloan Campaigns vs Parachain Auctions"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Parachain slots at genesis\n\n       --3 months--\n       v          v\nSlot A |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot B |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot C |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot D |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot E |__________|___________|     1     |     2     |     3     |     4    |     5     |     6     |     7     |     8     |     9     |...\n       ^                                                                                             ^\n       ---------------------------------------------max lease-----------------------------------------\n\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Each period of the range 1 - 4 represents a\n3-month duration for a total of 2 years\n")),(0,s.kt)("p",null,"Bidders will submit a configuration of bids specifying the token amount they are willing to bond and\nfor which periods. The slot ranges may be any of the periods 1 - ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," is the number of\nperiods available for a slot. (",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"=\n",(0,s.kt)(l.Z,{network:"polkadot",path:"consts.auctions.leasePeriodsPerSlot",defaultValue:8,mdxType:"RPC"})," for Polkadot)\n",""),(0,s.kt)("admonition",{title:"If you bond tokens with a parachain slot, you cannot stake with those tokens. In this way,",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"you pay for the parachain slot by forfeiting the opportunity to earn staking rewards.")),(0,s.kt)("p",null,"A bidder configuration for a single bidder may look like the following pseudocode example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const bids = [\n  {\n    range: [1, 2, 3, 4, 5, 6, 7, 8],\n    bond_amount: 300,\n  },\n  {\n    range: [1, 2, 3, 4],\n    bond_amount: 777,\n  },\n  {\n    range: [2, 3, 4, 5, 6, 7],\n    bond_amount: 450,\n  },\n];\n")),(0,s.kt)("p",null,"The important concept to understand from this example is that bidders may submit different\nconfigurations at different prices (",(0,s.kt)("inlineCode",{parentName:"p"},"bond_amount"),"). However, only one of these bids would be\neligible to win exclusive of the others."),(0,s.kt)("p",null,"The winner selection algorithm will pick bids that may be non-overlapping in order to maximize the\namount of tokens held over the entire lease duration of the parachain slot. This means that the\nhighest bidder for any given slot lease period might not always win (see the\n",(0,s.kt)("a",{parentName:"p",href:"#examples"},"example below"),")."),(0,s.kt)("p",null,"A random number, which is based on the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-cryptography#vrf"},"VRF")," used by\nPolkadot, is determined at each block.\nAdditionally, each auction will have a threshold that starts at 0 and increases to 1. The random\nnumber produced by the VRF is examined next to the threshold to determine if that block is the end\nof the auction within the so-called ",(0,s.kt)("em",{parentName:"p"},"ending period"),". Additionally, the VRF will pick a block from\nthe last epoch to access the state of bids which can help aid in mitigating some types of attacks\nfrom malicious validators."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,"There is one parachain slot available."),(0,s.kt)("p",null,"Charlie bids ",(0,s.kt)("inlineCode",{parentName:"p"},"75")," for the range 1 - 8."),(0,s.kt)("p",null,"Dave bids ",(0,s.kt)("inlineCode",{parentName:"p"},"100")," for the range 5 - 8."),(0,s.kt)("p",null,"Emily bids ",(0,s.kt)("inlineCode",{parentName:"p"},"40")," for the range 1 - 4."),(0,s.kt)("p",null,"Let's calculate each bidder's valuation according to the algorithm. We do this by multiplying the\nbond amount by the number of periods in the specified range of the bid."),(0,s.kt)("p",null,"Charlie - 75 ","*"," 8 = 600 for range 1 - 8"),(0,s.kt)("p",null,"Dave - 100 ","*"," 4 = 400 for range 5 - 8"),(0,s.kt)("p",null,"Emily - 40 ","*"," 4 = 160 for range 1 - 4"),(0,s.kt)("p",null,"Although Dave had the highest bid in accordance to token amount per period, when we do the\ncalculations we see that since he only bid for a range of 4, he would need to share the slot with\nEmily who bid much less. Together Dave and Emily's bids only equals a valuation of ",(0,s.kt)("inlineCode",{parentName:"p"},"560"),". Charlie's\nvaluation for the entire range is ",(0,s.kt)("inlineCode",{parentName:"p"},"600"),". Therefore Charlie is awarded the complete range of the\nparachain slot."),(0,s.kt)("h2",{id:"parachain-lease-extension"},"Parachain Lease Extension"),(0,s.kt)("p",null,"Before the slot lease expires, parachains have to bid and win another auction for continuity of the\nlease. To avoid any downtime in connectivity and minimize the risk of losing a subsequent auction,\nparachain teams need to plan ahead to bid for the lease extension before their current lease period\nends. Explained in the section above, each auction lets you bid for 8 LPs (Lease Periods) which\nenables two scenarios for the parachain's lease extension."),(0,s.kt)("h3",{id:"lease-extension-with-overlapping-slots"},"Lease Extension with Overlapping Slots"),(0,s.kt)("p",null,"Acquire a slot where the first lease period is before the last lease period of the current slot."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Register a new ",(0,s.kt)("inlineCode",{parentName:"li"},"paraId")),(0,s.kt)("li",{parentName:"ul"},"Win a slot auction with the new ",(0,s.kt)("inlineCode",{parentName:"li"},"paraId"))),(0,s.kt)("p",null,"The parachain team has access to two slots:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"one that will end soon"),(0,s.kt)("li",{parentName:"ul"},"one that just started")),(0,s.kt)("p",null,"Both slots have at least one LP in common. When the old slot transitions to their last LP, the\nparachain can ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/pull/4772"},"swap")," the slots. This can be done\nvia ",(0,s.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/post/1491"},"on-chain governance"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"swap")," call is available in\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"registrar")," pallet."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Parachain Slot Swap",src:n(11308).Z,width:"1286",height:"896"})),(0,s.kt)("admonition",{title:"Any two parachains can swap their slots via XCM",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/pull/4772"},"slot swap via XCM")," requires two live\nparachains to send an XCM message to the relay chain to approve the swap. A parachain team with\naccess to two overlapping slots can start a shell parachain on the new slot and swap it with their\nactual parachain on the old slot, thus ensuring continuity of the lease.")),(0,s.kt)("h3",{id:"lease-extension-with-non-overlapping-slots"},"Lease Extension with Non-Overlapping Slots"),(0,s.kt)("p",null,"Acquire a slot where the first LP starts right after the end of the last LP of the current slot. In\nthis case, the parachain can bid directly with their current ",(0,s.kt)("inlineCode",{parentName:"p"},"paraId"),", and it will be automatically\nextended without the need of swapping. This method has the advantage of not having superfluous LP's\non different slots owned by the same team, however it has the disadvantage of losing flexibility on\nwhen to win a new slot: if the team does not win the exact slot, then it will suffer some downtime\nuntil it wins a new slot."),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182287-how-does-a-parachain-slots-auction-work-"},"How do Parachain Slot Auctions Work")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/overview/parachain-allocation"},"Parachain Allocation")," -\nW3F research page on parachain allocation that goes more in depth to the mechanism"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/research-update-the-case-for-candle-auctions/"},"Research Update: The Case for Candle Auctions")," -\nW3F breakdown and research update about candle auctions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3846363"},"Front-Running, Smart Contracts, and Candle Auctions"),"\nW3F Research team discusses how to remedy current blockchain auction setbacks with candle auctions")))}q.isMDXComponent=!0},11308:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/para-swap-3c765fb9e6860c7d7489a758af065cb0.png"},46601:()=>{}}]);
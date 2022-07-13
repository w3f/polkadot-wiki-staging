"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3842],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,p=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(p,r(r({ref:t},m),{},{components:a})):n.createElement(p,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator",description:"Learn about what it means to be a nominator.",keyword:["nominate","nominator","stake","staking"],slug:"../learn-nominator"},l=void 0,d={unversionedId:"learn/learn-nominator",id:"learn/learn-nominator",title:"Nominator",description:"Learn about what it means to be a nominator.",source:"@site/../docs/learn/learn-nominator.md",sourceDirName:"learn",slug:"/learn-nominator",permalink:"/docs/learn-nominator",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nominator.md",tags:[],version:"current",lastUpdatedBy:"IkerAlus",lastUpdatedAt:1657707635,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"learn-nominator",title:"Nominator",sidebar_label:"Nominator",description:"Learn about what it means to be a nominator.",keyword:["nominate","nominator","stake","staking"],slug:"../learn-nominator"},sidebar:"docs",previous:{title:"Network Security",permalink:"/docs/learn-security"},next:{title:"Polkadot Host",permalink:"/docs/learn-polkadot-host"}},m={},h=[{value:"Active vs. Inactive Nomination",id:"active-vs-inactive-nomination",level:3},{value:"Bags-list",id:"bags-list",level:3},{value:"Minimum Active Nomination to Receive Staking Rewards",id:"minimum-active-nomination-to-receive-staking-rewards",level:3},{value:"Staking Election Stages",id:"staking-election-stages",level:3},{value:"Required Minimum Stake",id:"required-minimum-stake",level:3},{value:"Oversubscribed Validators",id:"oversubscribed-validators",level:3},{value:"The Election Solution Set",id:"the-election-solution-set",level:3},{value:"Receiving Rewards",id:"receiving-rewards",level:3},{value:"What to Take Into Consideration When Nominating",id:"what-to-take-into-consideration-when-nominating",level:3},{value:"Filter Out Validators With Undesirable Traits",id:"filter-out-validators-with-undesirable-traits",level:3},{value:"Review Your Validators&#39; History",id:"review-your-validators-history",level:3},{value:"Be Aware of The Risks of Single Operators with Multiple Validators",id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators",level:3},{value:"Avoiding Oversubscribed Validators",id:"avoiding-oversubscribed-validators",level:3},{value:"Guides",id:"guides",level:3}],c={toc:h};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nominators secure the Relay Chain by selecting good validators and staking DOT."),(0,i.kt)("p",null,"You may have an account with DOT and want to earn fresh DOT. You could do so as validator, which\nrequires a node running 24/7. If you do not have such node or do not want to bother, you can still\nearn DOT by nominating one or more validators."),(0,i.kt)("p",null,"By doing so, you become a nominator for the validator(s) of your choice. Pick your validators\ncarefully - if they do not behave properly, they will get slashed and you will lose DOT as well.\nHowever, if they do follow the rules of the network, then you can share in staking rewards that they\ngenerate."),(0,i.kt)("p",null,"While your DOT are staked by nominating a validator, they are 'locked' (bonded). You can receive new\nDOT in your account but you cannot stake as validator or transfer DOT away from your account. You\ncan ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"un-nominate at any time")," to stop staking your\nfunds. Keep in mind that the un-nomination is effective in the next era, and that un-nominating does\nnot automatically unbond your funds. There is an unbonding period of 7 days on Kusama and 28 days on\nPolkadot before bonded funds can be transferred after issuing an unbond transaction."),(0,i.kt)("h3",{id:"active-vs-inactive-nomination"},"Active vs. Inactive Nomination"),(0,i.kt)("p",null,"When you go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Account actions")," under staking\npage, you should see your bonded accounts and nomination status. If not, you can follow\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"this")," guide to configure it first. Your\nnominations will be effective in the next era; eras are roughly 6 hours on Kusama and 24 hours on\nPolkadot."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominations",src:a(44277).Z,width:"2878",height:"766"})),(0,i.kt)("p",null,'Suppose you have nominated five validator candidates, and three out of five were elected to the\nactive validator set, then you should see two of your nominations as "waiting", and most likely one\nas "active" and the rest as "inactive". Active or inactive nomination means your nominated\nvalidators have been elected to be in the validator set, whereas waiting means they did not get\nelected. Generally, you will only have a single validator have an active nomination, which means\nthat you are directly supporting it with your stake this era and thus potentially receiving staking\nrewards. Inactive nominators were validators that were elected for this era but which you are not\nactively supporting. Every era, a new election will take place and you may be assigned a different\nactive nomination from among the validators you have selected.'),(0,i.kt)("p",null,"If you are committing a very large amount of stake, then you may have more than one active\nnomination. However, the election algorithm attempts to minimize this situation, and it should not\noccur often, so you should almost always see only a single active nomination per era. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen#optimizations"},"section on Phragm\xe9n optimization")," for more details."),(0,i.kt)("h3",{id:"bags-list"},"Bags-list"),(0,i.kt)("p",null,"Nominating accounts are placed in a semi-sorted list called bags-list. This sorting functionality is\nextremely important for the\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"long-term improvements")," of the\nstaking/election system. Bags-list allows up to 16 nominators to set\ntheir intention to nominate, of which, the stake of the top 22500\nnominators is considered for ",(0,i.kt)("a",{parentName:"p",href:"#staking-election-stages"},"electing set")," that eventually determines the\nactive validators. The bags-list can be previewed on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/bags"},"Polkadot JS Apps > Network > Staking > Bags > All Bags"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bags list",src:a(72912).Z,width:"1440",height:"656"})),(0,i.kt)("h3",{id:"minimum-active-nomination-to-receive-staking-rewards"},"Minimum Active Nomination to Receive Staking Rewards"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Minimum DOT required to earn staking rewards")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Minimum DOT required to submit intent to nominate is 10 DOT, but the minimum active nomination\nrequired to earn staking rewards is dynamic and may be much higher, which can be viewed on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Polkadot JS Apps > Network > Staking > Targets page"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Minimum Active Nomination",src:a(95670).Z,width:"1436",height:"166"})),(0,i.kt)("p",null,"Bonding additional tokens or unbonding the staked tokens will automatically place the nominating\naccount in the appropriate bag. While the system tries its best to ensure nominators are always\nrepresented in the correct bag, certain changes in bonded funds (e.g. a slash in the negative\ndirection, or rewards in the positive direction) can cause an account to be in the wrong bag, and\nfor scalability reasons the system will not automatically self-adjust."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"bagsList.putInFrontOf")," and ",(0,i.kt)("inlineCode",{parentName:"h5"},"bagsList.rebag")," extrinsics")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The nominator accounts in a bag are sorted based on their insertion order, not by their nomination\nstake. ",(0,i.kt)("inlineCode",{parentName:"p"},"bagsList.putInFrontOf")," extrinsic can be issued to move up in the bag, which might be very\nuseful for the accounts in the last bag eligible for receiving staking rewards. Also, balance\nchanges due to staking rewards or slashing do not automatically re-bag the account. Whenever\napplicable, Polkadot JS Apps UI prompts the nominator account to rebag or move-up and the\ninstructions are available in this\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181018-i-have-more-than-the-minimum-bonded-but-i-m-not-getting-rewards"},"support article"),"."))),(0,i.kt)("p",null,"To demonstrate how bags-list works, let's imagine a simple bag system with 7 accounts and 3 bags:"),(0,i.kt)("p",null,"Alice: 10 DOT, Bob: 11 DOT, Charlie: 15 DOT, Dave: 20 DOT, Eve: 100 DOT, Frank 1000 DOT, Georgina:\n2000 DOT"),(0,i.kt)("p",null,"Bag1: Max 2000, Min 1000 - Frank, Georgina"),(0,i.kt)("p",null,"Bag2: Max 1000, Min 20 - Eve, Dave"),(0,i.kt)("p",null,"Bag3: Max 20, Min 10 - Alice, Bob, Charlie"),(0,i.kt)("p",null,"The bags are iterated based stake in decreasing order and within a bag, they are iterated on\n",(0,i.kt)("em",{parentName:"p"},"insertion")," order, not ",(0,i.kt)("em",{parentName:"p"},"amount at stake"),". So if only five nominating accounts are picked for the\nelecting set, it will be Frank, Georgina, Eve, Dave, Alice. Even though Alice has only 10 DOT, she\nis first in line in Bag3."),(0,i.kt)("p",null,"Charlie can put himself in front (move up in the bag) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"bagsList.putInFrontOf")," extrinsic,\nsince he has 15 DOT (more than Alice does at 10). Now if nothing changes for the next era, Frank,\nGeorgina, Eve, Dave, and Charlie will get rewards. Bag3 now has: Charlie, Alice, Bob.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"bagsList.putInFrontOf")," extrinsic can be issued through Polkadot JS Apps UI by clicking on the\nMove up button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PutInFrontOf Extrinsic",src:a(46233).Z,width:"1418",height:"134"})),(0,i.kt)("p",null,"Alice gets upset, but she cannot move herself up, since Charlie has more DOT than her. Bob ",(0,i.kt)("em",{parentName:"p"},"could"),"\nmove himself in front of Alice, since he has 11 DOT (> 10), but he still wouldn't get rewards."),(0,i.kt)("p",null,"Let us consider a hypothetical scenario where Charlie set the staking rewards to be bonded\nautomatically and Charlie's stash crosses 20 DOT after rewards from several staking eras. As changes\nin bonded balance due to staking rewards or slashing do not automatically re-bag the account,\nCharlie has to issue ",(0,i.kt)("inlineCode",{parentName:"p"},"bagsList.rebag")," extrinsic to place his nominator node in the right bag. The\nre-bag button will appear on Polkadot JS Apps UI if any of the nominator nodes in the bag needs to\nbe re-bagged. This permissionless extrinsic can be signed and submitted by anyone on chain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rebag",src:a(39627).Z,width:"1440",height:"158"})),(0,i.kt)("h3",{id:"staking-election-stages"},"Staking Election Stages"),(0,i.kt)("p",null,'"electable/electing", and "active".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"intention to nominate:"),' an account that has stated the intention to nominate; also called\nsimply a "nominator".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"electing nominator:")," a nominator who is selected to be a part of the input to the\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-phragmen"},"NPoS election algorithm"),". This selection is based on stake, and is done using\nthe ",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_bags_list/"},"bags-list pallet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active nominator:")," a nominator who came out of the NPoS election algorithm backing an active\nvalidator. Staking rewards are received by top 256 nominators, but when\nslashing occurs, all the active nominators backing the validator get slashed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominator Election",src:a(55404).Z,width:"612",height:"430"})),(0,i.kt)("h3",{id:"required-minimum-stake"},"Required Minimum Stake"),(0,i.kt)("p",null,"Due to the way the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragmen algorithm")," generates the solution set, and due to\nthe fact that the solution set must fit in a single block, a minimum number of DOT will be required\nto nominate with, in order to receive staking rewards, can change between the eras."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"min-intention-threshold:")," minimum stake to declare the intention to nominate. This parameter\ncan be updated via on-chain governance and the most recent and up to date version can be found on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," (select ",(0,i.kt)("strong",{parentName:"p"},"state query > staking >\nminimumNominatorBond"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"min-electing:")," minimum stake among the electing nominators. Since this is almost always the\nsame as \u201cmin-active\u201d, it might not be reported.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"min-active:")," minimum stake among the active nominators. If your stake falls below this dynamic\nthreshold in a given era, you will not receive staking rewards for that era."))),(0,i.kt)("p",null,"Thus, for ",(0,i.kt)("strong",{parentName:"p"},"nominator counters"),", we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"count of nominator intentions, and max possible nominator intentions (50000)."),(0,i.kt)("li",{parentName:"ul"},"count of electing nominators, and maximum possible electing nominators\n(22500)."),(0,i.kt)("li",{parentName:"ul"},"count of active nominators, and maximum possible active nominators\n(22500).")),(0,i.kt)("h3",{id:"oversubscribed-validators"},"Oversubscribed Validators"),(0,i.kt)("p",null,'Validators can only pay out to a certain number of nominators per era. This is currently set to\n256, but can be modified via governance. If more than\n256 nominators nominate the same validator, it is "oversubscribed", and\nonly the top 256 staked nominators (ranked by amount of stake) are paid\nrewards. Other nominators will receive no rewards for that era, although their stake will still be\nused to calculate entry into the active validator set.'),(0,i.kt)("p",null,"Although it is difficult to determine exactly how many nominators will nominate a given validator in\nthe next era, one can estimate based on the current number of nominators. A validator with only 5\nnominators in this era, for instance, is unlikely to have more than 256 in\nthe next era. An already-oversubscribed validator with 1000 nominators this era, however, is very\nlikely to be oversubscribed in the next era as well."),(0,i.kt)("h3",{id:"the-election-solution-set"},"The Election Solution Set"),(0,i.kt)("p",null,'Determining which validators are in the active set and which nominators are nominating them creates\na very large graph mapping nominators to their respective validators. This "solution set" is\ncomputed off-chain and submitted to the chain, which means it must fit in a single block. If there\nare a large number of nominators, this means that some nominators must be eliminated. Currently,\nnominators are sorted by amount of DOT staked and those with more DOT are prioritized. This means\nthat if you are staking with a small amount of DOT, you may not receive rewards. This minimal amount\nis dynamic based on the number of validators, number of nominators, amount nominated, and other\nfactors.'),(0,i.kt)("h3",{id:"receiving-rewards"},"Receiving Rewards"),(0,i.kt)("p",null,"As long as you have nominated more than one validator candidate, at least one of them got elected,\nand you are nominating with enough stake to get into the solution set, your bonded stake will be\nfully distributed to one or more validators. That being said, you may not receive rewards if you\nnominated very few validator candidates and no one got elected, or your stake is small and you only\nselected oversubscribed validators, or the validator you are nominating has 100% commission. It is\ngenerally wise to choose as many trustworthy validators as you can (up to\n16) to reduce the risk of none of your nominated validators being\nelected."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Not receiving Staking Rewards?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To explore the possible reasons for not receiving staking rewards, check out the\n",(0,i.kt)("a",{parentName:"p",href:"learn-staking-faq#3-why-am-i-not-receiving-staking-rewards"},"Staking FAQ")))),(0,i.kt)("p",null,"Rewards are ",(0,i.kt)("em",{parentName:"p"},"lazy")," - somebody must trigger a payout for a validator for rewards to go all of the\nvalidator's nominators. Any account can do this, although in practice validator operators often do\nthis as a service to their nominators. See the page on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-simple-payouts"},"Simple Payouts")," for\nmore information and instructions for claiming rewards."),(0,i.kt)("h3",{id:"what-to-take-into-consideration-when-nominating"},"What to Take Into Consideration When Nominating"),(0,i.kt)("p",null,"There are many factors to consider when deciding which validator's to nominate. One useful tool for\nassisting in this process is the Staking ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Targets"),"\ntable. This displays potential validators in a table that can be evaluated and sorted using various\nmetrics. Outlined below are the relevant columns to consider, followed by a brief description of\neach."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"payout"),": How recently the validator has made it's last reward payout to nominators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"nominators"),": This column consists of two number values."),(0,i.kt)("p",{parentName:"li"},"1) Amount of nominators currently bonded in the current era and considered ",(0,i.kt)("inlineCode",{parentName:"p"},"active"),"."),(0,i.kt)("p",{parentName:"li"},"2) Total amount of nominators that nominated that validator."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You may want to be cautious of validators with a high number of subscribers. A validator is\nconsidered oversubscribed when more than 256 'active' nominators are assigned to the validator. In this\nscenario only the top 256 nominators will receive rewards. The remaining nominators will\nrecieve nothing, however they can be slashed in the event that validator commits a\nslashable offence.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Every nominator can select up to a maxium of 16 validators, which contributes towards maximizing\nthe probability of having the nominators stake applied to the validators active set. Nominating too\nfew validators could result in the nominators losing their rewards when none of them make it to active set or\nwhen those Validator nodes stop validating. The election algorithm attempts to maximize the overall network\nstake, while minimizing the variance of the active stake across the validators. For additional information on\nthe election process checkout the research behind\n",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/1.%20Overview.html#polkadot-npos-1-overview--page-root"},"nominated proof-of-stake"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"example"),": If nominator X has nominated validators A, B, C and D, but is actively only\nnominating validator B. The ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," count (left number) for nominator X is 1, counting B\nexclusively. The total or ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," count (right number) is 4, counting A, B, C and D."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"validator"),(0,i.kt)("th",{parentName:"tr",align:null},"payout"),(0,i.kt)("th",{parentName:"tr",align:null},"nominators"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"example")),(0,i.kt)("td",{parentName:"tr",align:null},"recently"),(0,i.kt)("td",{parentName:"tr",align:null},"1 (",(0,i.kt)("inlineCode",{parentName:"td"},"active"),") 4 (",(0,i.kt)("inlineCode",{parentName:"td"},"all"),")"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"comm."),": Total commission kept by the validator (100% means nominators will not receive a\nreward).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"total stake"),": The total amount of DOT tokens staked by all parties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"own stake"),": The amount of DOT tokens the validator has put up as a stake.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"return"),": How profitable the validator has been."))),(0,i.kt)("p",null,"A validator's commission is the percentage of the validator reward which is taken by the validator\nbefore the rewards are split among the nominators. As a nominator, you may think that the lowest\ncommission is best. However, this is not always true. Validators must be able to run at break-even\nin order to sustainably continue operation. Independent validators that rely on the commission to\ncover their server costs help to keep the network decentralized. Some validators, operated by\ncentral exchanges etc., keep 100% of the commission to payout their staking service clients and\ntherefore do not provide any rewards to external nominators. Commission is just one piece of the\npuzzle that you should consider when picking validators to nominate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking Returns",src:a(50231).Z,width:"2878",height:"1644"})),(0,i.kt)("p",null,"As a nominator, if you only want to know the profit each validator made for each era, you can go to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Targets")," section under the staking page by\ninputting the number of tokens you would like to stake to check it. Then, nominate those who have a\nhigher profit. However, that does not guarantee the right way to evaluate the validators' overall\nperformance."),(0,i.kt)("p",null,'It is worth taking into consideration "own stake" of a validator. This refers to the quantity of DOT\nthe validator has put up at stake themselves. A higher "own stake" amount can be considered as\nhaving more "skin in the game". This can imply increased trustworthiness. However, a validator not\nhaving a large amount of "own stake" is not automatically untrustworthy, as the validator could be\nnominating from a different address.'),(0,i.kt)("h3",{id:"filter-out-validators-with-undesirable-traits"},"Filter Out Validators With Undesirable Traits"),(0,i.kt)("p",null,'On the Targets page, you can filter out validators that have traits that may indicate an issue with\nyou nominating them. You can turn these filters on and off to help narrow down which validators you\nshould nominate. It is important to note that these traits aren\'t necessarily "bad"; however,\ndepending on your validator selection methodology, they may be characteristics that you would be\ninterested in filtering.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"one validator per operator"),": Do not show groups of validators run by a single operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"comm. < 20%"),": Do not show any validators with a commission of 20% or higher."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"with capacity"),": Do not show any validators who are currently operating\n",(0,i.kt)("a",{parentName:"li",href:"/docs/glossary#capacity"},"at capacity")," (i.e., could potentially be oversubscribed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"recent payouts"),": Only show validators that have recently caused a\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-simple-payouts"},"payout to be issued"),". Note that anyone can cause a payout to occur; it\ndoes not have to be the operator of a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"currently elected"),": Only show validators that are currently in the active set (i.e., they have\nbeen elected to produce blocks this era)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"with an identity"),": Only show validators that have set an ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"identity"),". Note\nthat this identity does not have to be verified by a registrar for the validator to show up in the\nlist.")),(0,i.kt)("h3",{id:"review-your-validators-history"},"Review Your Validators' History"),(0,i.kt)("p",null,"How the validator acted in the past may be a good indicator of how they will act in the future. An\nexample of problematic behavior would be if a validator is regularly offline, their nominators most\nlikely would get fewer rewards than others. More importantly, when many validators are\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking#unresponsiveness"},"unreachable"),", those nominators who staked with them will be\nslashed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Validator Stats",src:a(28934).Z,width:"2880",height:"1652"})),(0,i.kt)("p",null,"Thus, to be a smart nominator, it would be better to query their\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query/"},"histories")," to see statistics such as blocks\nproduced, rewards and slashes, and ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"identity")," (if they have it set). Moreover, a\nnominator should do comprehensive research on their validator candidates - they should go over the\nvalidators' websites to see who they are, what kind of infrastructure setup they are using,\nreputation, the vision behind the validator, and more."),(0,i.kt)("h3",{id:"be-aware-of-the-risks-of-single-operators-with-multiple-validators"},"Be Aware of The Risks of Single Operators with Multiple Validators"),(0,i.kt)("p",null,'Recall that slashing is an additive function; the more validators that are offline or equivocate in\na given session, the harsher the penalties. Since validators that are controlled by a single entity\nare more at risk of a "synchronized" failure, nominating them implies a greater risk of having a\nlarge slash of your nominated funds. Generally, it is safer to nominate validators whose behavior is\nindependent from others in as many ways as possible (different hardware, geographic location, owner,\netc.).'),(0,i.kt)("h3",{id:"avoiding-oversubscribed-validators"},"Avoiding Oversubscribed Validators"),(0,i.kt)("p",null,"If you are not nominating with a large number of DOTs, you should try to avoid\n",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#oversubscribed"},"oversubscribed")," validators. It is not always easy to\ncalculate if the validator selected will be oversubscribed in the next session; one way to avoid\nchoosing potentially oversubscribed validators is to filter out any that are\n",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#capacity"},"at capacity")," on the Targets page."),(0,i.kt)("p",null,"Finally, if you have a very small amount of DOTs, you may not be able to have your nomination fit\ninto the election set. The nominator to validator mapping has to fit in a single block, and if there\nare too many nominators, the lowest-staked nominations will be dropped. This value is obviously\ndynamic and will vary over time. If you review the lowest amount of nominations that are occurring\non current validators, you can get a good idea of how many DOTs will likely be necessary to have\nyour nomination earn you rewards. You can read the blog post\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-staking-an-update/"},'"Polkadot Staking: An Update"')," for more\ndetails."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Explainer videos on Nominating")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These concepts have been further explained in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=weG_uzdSs1E&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=4"},"Why Nominate on Polkadot & Kusama video"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=K-a4CgVchvU&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=9"},"What to Consider when Nominating Validators on Polkadot and Kusama"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/FCXC0CDhyS4"},"Nominating/Staking on Polkadot and Kusama")))),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Be a Nominator (Polkadot)")," - Guide on\nnominating on the Kusama canary network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-unbond"},"Stop Being a Nominator (all networks)")," - Guide on\nstopping nominations and withdrawing tokens.")))}u.isMDXComponent=!0},72912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bags-list-96fe9511f066ad6e555e86b6932e019d.png"},95670:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/min-active-nomination-bfbe67c2714eb5027c6a4f45608c9bc2.png"},55404:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nominator-election-ae25b5db36fa18b56fa58c5370127dd4.png"},44277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominator_account-e0f5d58cd9cce279d6f462cde9f706f4.png"},50231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominators_target-4b6618ad6611abdfa95dfd08551ac4d2.png"},28934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_validator_stats-4b433d0c856a8bf0d2bb53cea027e009.png"},46233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/put-infront-of-ef633575f4bc13c41982e10fba17d520.png"},39627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rebag-0494e0ba9b4902dc5f8ef4e8b626859e.png"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,p=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",keywords:["timeline","roadmap","kusama"],slug:"../../kusama-timeline"},l=void 0,u={unversionedId:"general/kusama/kusama-timeline",id:"general/kusama/kusama-timeline",title:"Kusama Timeline",description:"Stay up-to-date with the latest action on Kusama.",source:"@site/../docs/general/kusama/kusama-timeline.md",sourceDirName:"general/kusama",slug:"/kusama-timeline",permalink:"/zh-CN/docs/kusama-timeline",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-timeline.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649779476,formattedLastUpdatedAt:"2022/4/12",frontMatter:{id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",keywords:["timeline","roadmap","kusama"],slug:"../../kusama-timeline"}},c={},m=[{value:"Rollout plan",id:"rollout-plan",level:2},{value:"Kusama&#39;s First Adventure",id:"kusamas-first-adventure",level:2},{value:"Kusama&#39;s Current Adventure: Auctions",id:"kusamas-current-adventure-auctions",level:2}],d={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kusama network started as a Proof-of-Authority network and was transitioned to Proof-of-Stake on\nOctober 28, 2019 at approximately 16:43 UTC. The first successful validator set rotation\ntook place at 20:45 UTC."),(0,r.kt)("p",null,"Currently, Kusama is a healthy Proof-of-Stake network with over 900 validators and over eight\nmillion blocks produced. If you are curious about the history of the Kusama network, you will find\nmore information in the sections below."),(0,r.kt)("h2",{id:"rollout-plan"},"Rollout plan"),(0,r.kt)("p",null,"The rollout of full functionality of Kusama was staggered to allow for a safe transition. The first\nPoS phase began with 20 validators. Of the 20, Web3 Foundation ran nine and Parity Technologies\nran six. Five were ran by highly staked community members as voted in by the Phragm\xe9n election."),(0,r.kt)("p",null,"When the initial transition was successful, additional validator spots were opened 10 at a time in\norder to allow for more validators to enter the active set."),(0,r.kt)("p",null,"When the first transition to PoS took place, the full functionality of Kusama was not fully\navailable. Notably, the Sudo key still existed and was used to initiate further upgrades. Balance\ntransfers were still disabled for a short while."),(0,r.kt)("p",null,"Kusama now has its full functionality enabled."),(0,r.kt)("h2",{id:"kusamas-first-adventure"},"Kusama's First Adventure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/kusamas-first-adventure/"},"Source")),(0,r.kt)("p",null,"On January 4, 2020, the Polkadot mainnet runtime, which at that time still wasn't live, was\nuploaded to the Kusama chain during a runtime upgrade. The mishap was due to a recent split of the\nKusama logic from the Polkadot logic and that runtime was not correctly named. This led to a halt of\nblock production on the Kusama chain and bricked the chain entirely."),(0,r.kt)("p",null,"The solution to the issue involved a rollback of the chain history before the problematic runtime\nupgrade. However, due to intricacies of the block production mechanism, it was also\nnecessary to encapsulate the validators of the chain into a time bubble to trick them into believing\nthat they were producing blocks in the past. Furthermore, in order for the chain to catch up to the\npresent moment it was necessary to make time flow in the bubble at a speed of six times greater than\nthe speed of time in the real world. Therefore, the session of Kusama which would normally last one\nhour would last only 10 minutes until the validators caught up to the present moment."),(0,r.kt)("p",null,"The above plan was executed successfully on January 7, 2020. Due to the time warp, the number of\nmissed blocks in the sessions directly following\n",(0,r.kt)("a",{parentName:"p",href:"https://polkascan.io/kusama/block/516558"},"block #516558")," was significantly higher. This is partly\nwhat contributes to the much higher ratio of missed blocks on Kusama versus Polkadot today."),(0,r.kt)("h2",{id:"kusamas-current-adventure-auctions"},"Kusama's Current Adventure: Auctions"),(0,r.kt)("p",null,"Kusama promised chaos, and it delivered on that promise. On June 15th, 2021, the roll out of the\nfirst public parachain slot auction commenced, marking the beginning of the end to deliver on the\nlast piece of core functionality outlined in the Polkadot whitepaper: purpose-built, interoperable\nparachains."),(0,r.kt)("p",null,"Teams and projects looking to become an official parachain on the Kusama network have been working\nhard to bring their technologies to life, many of whom started a\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crowdloans##starting-a-crowdloan-campaign"},"crowdloan campaign")," in order to participate\nin the slot auctions."),(0,r.kt)("p",null,"Kusama has made history with the permissionless launch of several independent parachains, and continues to do\nso with ongoing slot auction. As parachains become operational, the community will determine which additional features and network upgrades should be added over time."),(0,r.kt)("p",null,"While Kusama\u2019s current parachains are taking advantage of the built-in features of the network and forkless upgradability provided by Substrate, chaos continues, and in the spirit of chaos, more teams are eager to\ndeploy on Kusama. The path of Kusama deployment has paved the way to Polkadot's parachains as the technology became proven."))}h.isMDXComponent=!0}}]);
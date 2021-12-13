"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6827],{3905:(a,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>k});var s=e(67294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,s)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,s,n=function(a,t){if(null==a)return{};var e,s,n={},r=Object.keys(a);for(s=0;s<r.length;s++)e=r[s],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(s=0;s<r.length;s++)e=r[s],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var o=s.createContext({}),c=function(a){var t=s.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},d=function(a){var t=c(a.components);return s.createElement(o.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(a,t){var e=a.components,n=a.mdxType,r=a.originalType,o=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),g=c(e),k=n,m=g["".concat(o,".").concat(k)]||g[k]||u[k]||r;return e?s.createElement(m,i(i({ref:t},d),{},{components:e})):s.createElement(m,i({ref:t},d))}));function k(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var r=e.length,i=new Array(r);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=a,l.mdxType="string"==typeof a?a:n,i[1]=l;for(var c=2;c<r;c++)i[c]=e[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,e)}g.displayName="MDXCreateElement"},81807:(a,t,e)=>{e.r(t),e.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>g});var s=e(87462),n=e(63366),r=(e(67294),e(3905)),i=["components"],l={id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",slug:"../../kusama-getting-started"},o=void 0,c={unversionedId:"general/kusama/kusama-getting-started",id:"general/kusama/kusama-getting-started",title:"Interact with Kusama",description:"Reference point for Kusama content.",source:"@site/../docs/general/kusama/kusama-getting-started.md",sourceDirName:"general/kusama",slug:"/kusama-getting-started",permalink:"/ru-RU/docs/kusama-getting-started",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634417508,formattedLastUpdatedAt:"16.10.2021",frontMatter:{id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",slug:"../../kusama-getting-started"}},d=[{value:"Polkadot&#39;s Canary Network",id:"polkadots-canary-network",children:[],level:3},{value:"Kusama Gifts",id:"kusama-gifts",children:[],level:3}],u={toc:d};function g(a){var t=a.components,e=(0,n.Z)(a,i);return(0,r.kt)("wrapper",(0,s.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"polkadots-canary-network"},"Polkadot's Canary Network"),(0,r.kt)("p",null,"Kusama is a ",(0,r.kt)("em",{parentName:"p"},"canary network")," for Polkadot; an early release of the code that is available first and\nholds real economic value. For developers, Kusama is a proving ground for runtime upgrades, on-chain\ngovernance, and parachains."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No Promises"),"."),(0,r.kt)("p",null,"Kusama is owned by those who hold the Kusama tokens (",(0,r.kt)("strong",{parentName:"p"},"KSM"),"). There's no central kill switch and\nall changes are made through the protocol's on-chain governance. Kusama is experimental. The network\nis a permissionless and anyone can come along and start using it.\nThose who participated in the Polkadot sale can claim a proportional amount of KSM through\nthe ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/kusama-claims"},"Kusama Claims process"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As a KSM holder, you can interact with all the features of the Kusama network such as\nstaking (i.e. validating or nominating), governance, parachain auctions, basic transfers and\neverything else.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expect Chaos"),"."),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-account-generation"},(0,r.kt)("img",{src:"/img/kusama-guide/Account.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Creating an Account")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-balance-transfers"},(0,r.kt)("img",{src:"/img/kusama-guide/Transfer.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Balance Transfers")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-staking"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Stake.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Staking"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-parachains"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Parachain.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Parachains")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-bridges"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Bridges.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Bridges")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-vote-councillor"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Voting.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Vote for Councilors"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-treasury#creating-the-proposal"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proposal.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Make Proposals")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-join-council#submit-candidacy"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Council.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Council Candidacy")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-treasury"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Treasury.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Treasury"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-identity"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Identity.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Set an Identity")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-how-to-nominate-kusama"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Nominate.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Become a Nominator")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-proxies"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proxy.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Proxy Accounts"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/learn-crowdloans/"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Crowdloans.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Participate in Crowdloans")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/maintain-guides-society-kusama"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Kusama-Society.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Join Kappa Sigma Mu")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"../docs/ambassadors"},(0,r.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Ambassadors.png",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Become an Ambassador"))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"For brand-new learners of Kusama's cousin network, Polkadot, please head over to the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/"},"Polkadot Wiki"),"."),(0,r.kt)("h3",{id:"kusama-gifts"},"Kusama Gifts"),(0,r.kt)("img",{align:"right",src:"/img/kusama-gift.png",width:"210",height:"200"}),(0,r.kt)("p",null,"Kusama Gifts provide an easy way to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,r.kt)("li",{parentName:"ul"},"Share your love of Kusama and send any amount of KSM."),(0,r.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,r.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,r.kt)("p",null,"Learn more about how you can create and send Kusama Gifts ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,r.kt)("p",null,"While Kusama does not support smart contracts natively, building apps on it is still possible\n(e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK.app"),"). If you're interested in diving deeper into ",(0,r.kt)("em",{parentName:"p"},"proper")," development,\nhowever, check out the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-index"},"builders guide"),"."))}g.isMDXComponent=!0}}]);
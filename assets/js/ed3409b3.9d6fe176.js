"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"learn-guides-bounties",title:"How-to Guides for Bounties",sidebar_label:"Bounties",description:"Advanced How-to Guides for Bounties",keyword:["treasury","bounties","guides","child bounty"],slug:"../learn-guides-bounties"},u=void 0,l={unversionedId:"learn/learn-guides-bounties",id:"learn/learn-guides-bounties",title:"How-to Guides for Bounties",description:"Advanced How-to Guides for Bounties",source:"@site/../docs/learn/learn-guides-bounties.md",sourceDirName:"learn",slug:"/learn-guides-bounties",permalink:"/docs/learn-guides-bounties",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-bounties.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1697801361,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{id:"learn-guides-bounties",title:"How-to Guides for Bounties",sidebar_label:"Bounties",description:"Advanced How-to Guides for Bounties",keyword:["treasury","bounties","guides","child bounty"],slug:"../learn-guides-bounties"},sidebar:"docs",previous:{title:"Treasury",permalink:"/docs/learn-guides-treasury"},next:{title:"Identity",permalink:"/docs/learn-guides-identity"}},p={},d=[{value:"Submit a Bounty Proposal",id:"submit-a-bounty-proposal",level:2},{value:"Assign a Curator to a Bounty",id:"assign-a-curator-to-a-bounty",level:2},{value:"Create and Award Child Bounties",id:"create-and-award-child-bounties",level:2},{value:"Claim a Child Bounty Reward",id:"claim-a-child-bounty-reward",level:2}],c={toc:d},h="wrapper";function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For these guides, you will use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,r.kt)("admonition",{title:"Notify the Polkadot Direction Channel",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remember always to notify the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction Element Channel")," about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda"},"OpenGov referenda")," so that the community can start reviewing\nthem and voting on them.")),(0,r.kt)("h2",{id:"submit-a-bounty-proposal"},"Submit a Bounty Proposal"),(0,r.kt)("p",null,"See the video tutorial below to learn how you can create a bounty and submit it for approval through\nan OpenGov referendum."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8Cft1-8RWmk"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/8Cft1-8RWmk/0.jpg",alt:"Submit a Bounty"}))),(0,r.kt)("p",null,'When you add a bounty, this will show as "proposed" in the main\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),'. Once the community approves your bounty\nproposal as an OpenGov referendum, the bounty will show as "funded" at the end of the\n',(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spending period")," on the main\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),". You can then proceed with assigning\ncurators to the bounty."),(0,r.kt)("h2",{id:"assign-a-curator-to-a-bounty"},"Assign a Curator to a Bounty"),(0,r.kt)("p",null,'Once your bounty is shown as "funded" on the main\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),", you can propose a bounty curator. See the\nvideo tutorial below to learn how you can add a curator to a bounty and submit it for approval\nthrough an OpenGov referendum."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=TM7vk3oP9IA"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/TM7vk3oP9IA/0.jpg",alt:"Assign Curator to a Bounty"}))),(0,r.kt)("p",null,"Once your OpenGov referendum has been approved by the community and served the required\n",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spending period"),', the bounty will still show as "funded" on\nthe main ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page")," and await the curator's\nacceptance. The curator must formally accept the curator role by signing a ",(0,r.kt)("inlineCode",{parentName:"p"},"bounties.acceptCurator"),"\nextrinsic. More information about when to do this can be found on the main\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),'. Only after the curators claim their\ncandidacy the bounty will show as "active" on the main Bounty page.'),(0,r.kt)("h2",{id:"create-and-award-child-bounties"},"Create and Award Child Bounties"),(0,r.kt)("admonition",{title:"Remember to add contextual information about child bounties",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you add child bounties, please add contextual information on the governance forums\n",(0,r.kt)("a",{parentName:"p",href:"https://polkassembly.io/"},"Polkassembly")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subsquare.io/"},"Subsquare"),".")),(0,r.kt)("p",null,"See the video tutorial below to learn how to create a child bounty, assign a curator, and award a\nchild bounty."),(0,r.kt)("p",null,"The video will show how to create and award a child bounty using a batch call. We will also include\nproposing and approving curator candidacy for the child bounty. The calls can be executed\nseparately, depending on the process curators consider appropriate for their bounty."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mLpvx0OQoyM"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/mLpvx0OQoyM/0.jpg",alt:"Create and Award Child Bounties"}))),(0,r.kt)("p",null,"Note that once a child bounty is awarded, awardees need to wait for the\n8-day delay to be complete before claiming the\nchild bounty."),(0,r.kt)("h2",{id:"claim-a-child-bounty-reward"},"Claim a Child Bounty Reward"),(0,r.kt)("p",null,"The status of child bounties can be viewed on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/bounties"},"Polkassembly Bounty page"),' under the specific parent\nbounty. A child bounty status can be "Added", "Awarded", or "Claimed". For example, the parent\nbounty 17 refers to the Community Events Bounty, which has 183 child bounties.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkassembly-child-bounties",src:n(83001).Z,width:"2408",height:"1053"})),(0,r.kt)("p",null,"After a child bounty has been awarded and the 8-day\ndelay elapsed, follow the guidelines in the video tutorial below to learn how to claim a child\nbounty reward. Note that the extrinsic to claim the child bounty reward is permissionless, and\nanyone can initiate the claim on behalf of the beneficiary."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=db82aHgy23c"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/db82aHgy23c/0.jpg",alt:"Claim Child Bounty Reward"}))))}m.isMDXComponent=!0},83001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polkassembly-child-bounties-fde994e770f3e109a07752068aa417b1.png"}}]);
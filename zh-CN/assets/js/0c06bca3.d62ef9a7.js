(self.webpackChunk=self.webpackChunk||[]).push([[601],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52812:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>p});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r=["components"],c={id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",slug:"../maintain-guides-how-to-join-council"},s=void 0,l={unversionedId:"maintain/maintain-guides-how-to-join-council",id:"maintain/maintain-guides-how-to-join-council",isDocsHomePage:!1,title:"Join the Council",description:"Steps on how to join the official on-chain council.",source:"@site/../docs/maintain/maintain-guides-how-to-join-council.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-join-council",permalink:"/zh-CN/docs/maintain-guides-how-to-join-council",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-join-council.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631849069,formattedLastUpdatedAt:"2021/9/17",frontMatter:{id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",slug:"../maintain-guides-how-to-join-council"},sidebar:"docs",previous:{title:"Participate in Democracy",permalink:"/zh-CN/docs/maintain-guides-democracy"},next:{title:"Voting for Councillors",permalink:"/zh-CN/docs/maintain-guides-how-to-vote-councillor"}},u=[{value:"Submit Candidacy",id:"submit-candidacy",children:[]},{value:"Voting on Candidates",id:"voting-on-candidates",children:[]},{value:"Winning",id:"winning",children:[]}],d={toc:u};function p(e){var n=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance#council"},"governance page"),". This guide will walk you through entering your\ncandidacy to the council."),(0,a.kt)("h2",{id:"submit-candidacy"},"Submit Candidacy"),(0,a.kt)("p",null,"Submitting your candidacy for the council requires a small bond of DOT / KSM. Unless your candidacy\nwins, the bond will be forfeited. You can receive your bond back if you manually renounce your\ncandidacy before losing. Runners-up are selected after every round and are reserved members in case\none of the winners gets forcefully removed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently the bond for submitting a council candidacy on Polkadot is 100 DOT, and 0.0033 KSM on\nKusama.")),(0,a.kt)("p",null,"It is a good idea to announce your council intention before submitting your candidacy so that your\nsupporters will know when they can start to vote for you. You can also vote for yourself in case no\none else does."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot Apps Dashboard"),' and navigate to the "Council" tab.\nClick the button on the right that says "Submit Candidacy."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"submit candidancy button",src:t(79688).Z})),(0,a.kt)("p",null,'After making the transaction, you will see your account appear underneath the row "Candidates."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"candidates list",src:t(7145).Z})),(0,a.kt)("p",null,"It is a good idea now to lead by example and give yourself a vote."),(0,a.kt)("h2",{id:"voting-on-candidates"},"Voting on Candidates"),(0,a.kt)("p",null,'Next to the button to submit candidacy is another button titled "Vote." You will click this button\nto make a vote for yourself (optional).'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"voting button on UI",src:t(72832).Z})),(0,a.kt)("p",null,"The council uses ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n"),' approval voting, which is also used in the validator\nelections. This means that you can choose up to 16 distinct candidates to vote for and your stake\nwill equalize between them. For this guide, choose to approve your own candidacy by clicking on the\nswitch next to your account and changing it to say "Aye."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"voting pop up on UI",src:t(1611).Z})),(0,a.kt)("h2",{id:"winning"},"Winning"),(0,a.kt)("p",null,'If you are one of the lucky ones to win a council election you will see your account move underneath\nthe row "Members".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"council members list",src:t(99158).Z})),(0,a.kt)("p",null,"Now you are able to participate on the council by making motions or voting proposals. To join in on\nthe active discussions, join the\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction channel"),"."))}p.isMDXComponent=!0},7145:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/polkadotjs_candidates-bc420d7637b02bd43169dd6bc44a9bd9.png"},99158:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/polkadotjs_council_members-c731a3fa3e5eb821427126149431dbfe.png"},79688:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/polkadotjs_submit_candidancy-04eabb0aa998c350427386dcff208d1c.png"},72832:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/polkadotjs_vote_button-9f5daf5f27fda6df219d0f959e7632b4.png"},1611:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/polkadotjs_voting-cc5698e8e8f5de77644d3a7cb316a2ea.png"}}]);
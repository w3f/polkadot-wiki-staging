(self.webpackChunk=self.webpackChunk||[]).push([[5670],{3905:(n,e,t)=>{"use strict";t.d(e,{Zo:()=>u,kt:()=>h});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=o.createContext({}),l=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=l(n.components);return o.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,u=d(n,["components","mdxType","originalType","parentName"]),p=l(t),h=a,b=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return t?o.createElement(b,r(r({ref:e},u),{},{components:t})):o.createElement(b,r({ref:e},u))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=p;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=n,d.mdxType="string"==typeof n?n:a,r[1]=d;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40634:(n,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>p});var o=t(22122),a=t(19756),i=(t(67294),t(3905)),r=["components"],d={id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding"},s=void 0,l={unversionedId:"maintain-guides-how-to-unbond",id:"maintain-guides-how-to-unbond",isDocsHomePage:!1,title:"Unbonding and Rebonding",description:"The following describes how to stop nominating or validating and retrieve your stake. Please note",source:"@site/../docs/maintain-guides-how-to-unbond.md",sourceDirName:".",slug:"/maintain-guides-how-to-unbond",permalink:"/docs/maintain-guides-how-to-unbond",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-unbond.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1627485295,formattedLastUpdatedAt:"7/28/2021",frontMatter:{id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding"},sidebar:"docs",previous:{title:"How to Nominate on Polkadot",permalink:"/docs/maintain-guides-how-to-nominate-polkadot"},next:{title:"How to run a Validator on Polkadot",permalink:"/docs/maintain-guides-how-to-validate-polkadot"}},u=[{value:"Step 1: Stop Nominating",id:"step-1-stop-nominating",children:[]},{value:"Step 2: Unbonding an amount",id:"step-2-unbonding-an-amount",children:[]},{value:"Rebonding before the end of the unbonding period",id:"rebonding-before-the-end-of-the-unbonding-period",children:[]}],c={toc:u};function p(n){var e=n.components,d=(0,a.Z)(n,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,d,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following describes how to stop nominating or validating and retrieve your stake. Please note\nthat all networks on which you can nominate have a delayed exit period, called the ",(0,i.kt)("em",{parentName:"p"},"unbonding\nperiod"),", which serves as a cooldown. You will not be able to transfer your tokens before this period\nhas elapsed, and you will not receive any staking rewards during this period (as you are not\nnominating any validators)."),(0,i.kt)("h3",{id:"step-1-stop-nominating"},"Step 1: Stop Nominating"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),' navigate to the "Staking" tab.'),(0,i.kt)("p",null,'On this tab click on the "Account Actions" tab at the top of the screen.'),(0,i.kt)("p",null,'Here, click "Stop Nominating" or "Stop Validating" (depending on your role) on an account you\'re\nstaking with and would like to free the funds for. This will "chill" the tokens.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stop Nominating Button",src:t(7558).Z})),(0,i.kt)("p",null,"After you confirm this transaction, your tokens will remain ",(0,i.kt)("em",{parentName:"p"},"bonded"),". This means they stay ready to\nbe distributed among nominees or used as validator self-stake again. To actually withdraw them, you\nneed to unbond."),(0,i.kt)("h3",{id:"step-2-unbonding-an-amount"},"Step 2: Unbonding an amount"),(0,i.kt)("p",null,'To unbond the amount, click the three dots next to the account you want to unbond tokens for, and\nselect "Unbond funds".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unbonding",src:t(61757).Z})),(0,i.kt)("p",null,'Select the amount you wish to unbond and click Unbond, then confirm the transaction. If successful,\nyour balance will show as "unbonding" with an indicator of how many more blocks remain until the\namount is fully unlocked.'),(0,i.kt)("p",null,"This duration varies depending on the network you're on and will typically be four times as fast on\nKusama as it is on Polkadot. The unbounding period is 28 days on Polkadot, and 7 on Kusama."),(0,i.kt)("p",null,"Once this process is complete, you will have to issue another, final transaction: Withdraw Unbonded,\nwhich will be available in the same pop-up. You can also check how long you have to wait in order to\nwithdraw your stake in the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/accounts"},"Accounts"),' page by\nexpanding your account balance. There is a tiny icon beside the word "unbonding" that will\neventually become an unlock icon once the remaning blocks get passed.'),(0,i.kt)("p",null,"Then, you can click that icon directly to submit the withdraw transaction. Finally, your\ntransferrable balance will increase by the amount of tokens you've just fully unbonded."),(0,i.kt)("h2",{id:"rebonding-before-the-end-of-the-unbonding-period"},"Rebonding before the end of the unbonding period"),(0,i.kt)("p",null,"If you want to rebond your tokens before the unbonding period is over, you can do this by issuing a\n",(0,i.kt)("inlineCode",{parentName:"p"},"rebond")," extrinsic. This allows you to bond your tokens that are still locked without waiting until\nthe end of the unbonding period."),(0,i.kt)("p",null,"In order to do this, you will need to issue an extrinsic manually from ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),"."),(0,i.kt)("p",null,'Go to the "Extrinsics" option that\'s located in the "Developer" dropdown in the top menu.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"extrinsic menu",src:t(4643).Z})),(0,i.kt)("p",null,'Select the "staking" pallet and the "rebond" extrinsic. Enter the amount of tokens that are\ncurrently locked in unbonding that you want to rebond. Then click "Submit Transaction".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"confirm",src:t(41289).Z})),(0,i.kt)("p",null,"Confirm the transaction in the next pop-up. Once the transaction is included in the next block your\ntokens will be rebonded again and you can start staking with them."))}p.isMDXComponent=!0},7558:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"assets/images/unbond1-4c241a5bf1967682e707c01050bd51f1.png"},61757:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"assets/images/unbond2-d52d67307b98a6d945407c44bc3bfebc.png"},4643:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"assets/images/rebonding-1-5ddf2e54b0c0377854646ca0973695f9.png"},41289:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"assets/images/rebonding-2-1b288ea441455345aaa1a89b9231d646.png"}}]);
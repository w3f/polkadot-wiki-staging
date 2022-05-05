"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7596],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var t=n(67294);function o(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,o=function(a,e){if(null==a)return{};var n,t,o={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(o[n]=a[n]);return o}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(o[n]=a[n])}return o}var s=t.createContext({}),c=function(a){var e=t.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):i(i({},e),a)),n},d=function(a){var e=c(a.components);return t.createElement(s.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,o=a.mdxType,r=a.originalType,s=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return n?t.createElement(u,i(i({ref:e},d),{},{components:n})):t.createElement(u,i({ref:e},d))}));function h(a,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l.mdxType="string"==typeof a?a:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54569:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},s=void 0,c={unversionedId:"learn/mirror-learn-crowdloans",id:"learn/mirror-learn-crowdloans",title:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",source:"@site/../docs/learn/mirror-learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/ru-RU/docs/learn-crowdloans",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/mirror-learn-crowdloans.md",tags:[],version:"current",frontMatter:{id:"mirror-learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"}},d={},p=[{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2}],m={toc:p};function h(a){var e=a.components,l=(0,o.Z)(a,i);return(0,r.kt)("wrapper",(0,t.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot allows parachains to source tokens\nfor their parachain bids in a decentralised crowdloan. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Contributing to a crowdloan")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are here for guidance on how to\ncontribute for a crowdloan, watch the video below or read this ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama"},"support article on crowdloans"),"."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/AA9mPANmzmU"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",alt:"Crowdloans on Polkadot JS"}))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Testing on Rococo")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"),"","."))),(0,r.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,r.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot\nby depositing a specified number of tokens. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,r.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A crowdloan campaign can start well before the auction slot is opened. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-auction"},"auction")," if the cap is not reached.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One way of calculating the ending block number is adding:  ",(0,r.kt)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"y")," is the current block number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,r.kt)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),". The last slot must also\nbe within that range.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you."))))),(0,r.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once\nthe crowdloan is live, ",(0,r.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as\nthe parachain's runtime.  Of course, once the parachain is running it can always change via\nruntime upgrades (as determined through its own local governance)."),(0,r.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Minimum Crowdloan Contribution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The minimum balance for contributions for a crowdloan campaign is\ncurrently set to 5.000 DOT.\nThis is in an attempt to make crowdloans as accessible as possible while maintaining a\nbalance to justify the use of the network's resources. "))),(0,r.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not send Crowdloan contributions directly to the Parachain address")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by an index, not by address. **Never transfer tokens to an address in\nsupport of a campaign."))),(0,r.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,r.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,r.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,r.kt)("li",{parentName:"ul"},"If the campaign was unsuccessful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,r.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is entirely deleted from the system."),(0,r.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,r.kt)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"crowdloan dashboard",src:n(30931).Z,width:"2328",height:"1540"})),(0,r.kt)("p",null,"Furthermore, check out this video on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}h.isMDXComponent=!0},30931:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"}}]);
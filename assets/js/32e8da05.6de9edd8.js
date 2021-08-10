(self.webpackChunk=self.webpackChunk||[]).push([[6140],{3905:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>d,kt:()=>h});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?t.createElement(m,i(i({ref:a},d),{},{components:n})):t.createElement(m,i({ref:a},d))}));function h(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41430:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>u});var t=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},c=void 0,s={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",isDocsHomePage:!1,title:"Parachain Crowdloans",description:"{{ polkadotpolkadot }} {{ kusamakusama }} allows parachains to source tokens",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn/learn-crowdloans",permalink:"/docs/learn/learn-crowdloans",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crowdloans.md",version:"current",lastUpdatedBy:"ajc_",lastUpdatedAt:1628557538,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans"},sidebar:"docs",previous:{title:"Parachain Slots Auction",permalink:"/docs/learn/learn-auction"},next:{title:"Teleporting Assets",permalink:"/docs/learn/learn-teleport"}},d=[{value:"Starting a crowdloan campaign",id:"starting-a-crowdloan-campaign",children:[]},{value:"Suporting a crowdloan campaign",id:"suporting-a-crowdloan-campaign",children:[]}],p={toc:d};function u(e){var a=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot  allows parachains to source tokens\nfor their parachain bids in a decentralized crowdloan."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/build-parachains-rococo"},"Rococo page")," >\n",".")),(0,r.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a crowdloan campaign"),(0,r.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot\n. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,r.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn/learn-auction"},"auction")," if the cap has not been reached."),(0,r.kt)("li",{parentName:"ul"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. One way of calculating the ending block number is adding\n',(0,r.kt)("inlineCode",{parentName:"li"},"(10 * 60 * 24 * 7) * (x * 6) + y"),", ","\u2014"," where ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is the number of auction periods you want\nthe crowdloan to continue for and ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," is the current block number\n(",(0,r.kt)("inlineCode",{parentName:"li"},"(Blocks/Min * Hour/Min * Day/Hour * Week/Day) * (x * Week/Period)"),")."),(0,r.kt)("li",{parentName:"ul"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,r.kt)("inlineCode",{parentName:"li"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),". The last slot must also\nbe within that range."),(0,r.kt)("li",{parentName:"ul"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you.")),(0,r.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once the\ncrowdloan is live, ",(0,r.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and it will be what is deployed as\nthe parachain's runtime. Of course, once the parachain is running it can always change via runtime\nupgrades (as determined through its own local governance)."),(0,r.kt)("h2",{id:"suporting-a-crowdloan-campaign"},"Suporting a crowdloan campaign"),(0,r.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Important: All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by index, not by address. ",(0,r.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in support\nof a campaign."))),(0,r.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,r.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,r.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,r.kt)("li",{parentName:"ul"},"If the campaign was not successful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,r.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is fully deleted from the system."),(0,r.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,r.kt)("p",null,"Here is an exmaple of the crowdloans in play during the very first Kusama auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"crowdloan dashboard",src:n(83700).Z})),(0,r.kt)("p",null,"Furthermore, check out this video on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}u.isMDXComponent=!0},83700:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"}}]);
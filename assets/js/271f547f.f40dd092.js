(self.webpackChunk=self.webpackChunk||[]).push([[1061],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>d});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={id:"grants",title:"Web3 Foundation Grants",sidebar_label:"Grants"},l=void 0,p={unversionedId:"grants",id:"grants",isDocsHomePage:!1,title:"Web3 Foundation Grants",description:"The Web3 Foundation offers two types of grants:",source:"@site/../docs/grants.md",sourceDirName:".",slug:"/grants",permalink:"/docs/grants",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/grants.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626714166,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"grants",title:"Web3 Foundation Grants",sidebar_label:"Grants"},sidebar:"docs",previous:{title:"Redenomination of DOT",permalink:"/docs/redenomination"},next:{title:"Thousand Validators Programme",permalink:"/docs/thousand-validators"}},u=[{value:"Alternative Funding Sources",id:"alternative-funding-sources",children:[{value:"Polkadot Treasury",id:"polkadot-treasury",children:[]},{value:"Other Grant Programs",id:"other-grant-programs",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Web3 Foundation offers two types of grants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program"},"Open Grants Program")," is Web3 Foundation's\nstandard program, which offers fast funding of up to \\$30k for initial grants and \\$100k for\nfollow-up ones. Applications are tracked transparently on GitHub and disbursed in\ncryptocurrencies."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/General-Grants-Program"},"General Grants Program")," offers funding of up\nto \\$100k per grant and covers all other cases, including private applications and fiat payments.")),(0,o.kt)("p",null,"More information regarding guidelines, support, and the application process for each program can be\nfound at the above links."),(0,o.kt)("p",null,"Accepted applications for both programs can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/accepted_grant_applications.md"},"here"),"."),(0,o.kt)("h2",{id:"alternative-funding-sources"},"Alternative Funding Sources"),(0,o.kt)("h3",{id:"polkadot-treasury"},"Polkadot Treasury"),(0,o.kt)("p",null,"The Polkadot Treasury is a pot of on-chain funds collected through transaction fees, slashing,\nstaking inefficiencies, etc. The funds held in the treasury can be spent on spending proposals. Both\nPolkadot and Kusama offer everyone the opportunity to apply for funding via the treasury. See:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-treasury"},"Treasury Wiki")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w"},"Polkadot Treasury Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1p3UQUjph5t8TVaWnTkfrI5mE-BABnM9Xvtuhdlhl6JE"},"Kusama Treasury Guide"))),(0,o.kt)("h3",{id:"other-grant-programs"},"Other Grant Programs"),(0,o.kt)("p",null,"Below is a list of other grant programs in the Polkadot/Substrate ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.darwinia.network/docs/en/dev-bounty#grant-program"},"Darwinia Grants Program")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moonbeam.network/community/grants/"},"Moonbeam Grants Program")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/edgeware-builders/construction-projects"},"Edgeware Grants and Bounties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/crustio/Crust-Grants-Program"},"Crust Grants Program")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.hydradx.io/new_deal"},"HydraDX Grants and Bounties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork/Builders-Program"},"Plasm Network Builders Program"))))}d.isMDXComponent=!0}}]);
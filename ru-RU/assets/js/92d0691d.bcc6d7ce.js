(self.webpackChunk=self.webpackChunk||[]).push([[5737],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>p});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"build-oracle",title:"Oracles",sidebar_label:"Oracles"},c=void 0,s={unversionedId:"build-oracle",id:"build-oracle",isDocsHomePage:!1,title:"Oracles",description:"In the blockchain context, an oracle is a way to bring real-world data onto the blockchain so that",source:"@site/../docs/build-oracle.md",sourceDirName:".",slug:"/build-oracle",permalink:"/ru-RU/docs/build-oracle",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-oracle.md",version:"current",lastUpdatedBy:"ccris02",lastUpdatedAt:1627769465,formattedLastUpdatedAt:"31.07.2021",frontMatter:{id:"build-oracle",title:"Oracles",sidebar_label:"Oracles"},sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/ru-RU/docs/build-smart-contracts"},next:{title:"SS58 Registry",permalink:"/ru-RU/docs/build-ss58-registry"}},d=[],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the blockchain context, an ",(0,o.kt)("em",{parentName:"p"},"oracle")," is a way to bring real-world data onto the blockchain so that\nit can be used by a decentralized application."),(0,o.kt)("p",null,"Oracles serve many purposes for application builders. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most stablecoin designs use an oracle to bring in data of the exchange rate of assets, in order to\npeg their value to a real world currency."),(0,o.kt)("li",{parentName:"ul"},"Synthetic assets use oracles as price feeds in order to determine if the underlying cryptocurrency\nsufficiently collateralizes the debt position."),(0,o.kt)("li",{parentName:"ul"},"Prediction markets use oracles to decide the outcome of real world events and determine the payout\nof the prediction shares."),(0,o.kt)("li",{parentName:"ul"},"Decentralized insurance markets use oracles to bring in information about whether a claim is valid\nor not.")),(0,o.kt)("p",null,"Oracle solutions range from centralized and trusted to decentralized and game-theory based. On the\ncentralized end of the spectrum, an oracle could be a single account that has the authority to\ndictate the real-world data on-chain. On the decentralized end, a ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2014/03/28/schellingcoin-a-minimal-trust-universal-data-feed/"},'complex game of\n"chicken"')," can be played among various staked actors who risk getting slashed if they\ndon't submit the same data as everyone else. Solutions such as ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/chainlink-reaches-milestone-with-polkadot/"},"ChainLink")," fit somewhere\nin the middle, where the amount of trust you put into the reporting oracles can be adjusted based on\nyour preferences. A Chainlink ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smartcontractkit/chainlink-polkadot/blob/master/pallet-chainlink-feed/README.md"},"Feed Pallet")," was recently released to allow smart\ncontract applications across Polkadot to access price reference data, made available as a Substrate\noracle pallet."),(0,o.kt)("p",null,"When using an oracle in your application you should be aware of the benefits and risks that are\nbaked into its specific model. As the Polkadot ecosystem develops and oracle parachains begin to\nappear, this article will be updated with a comparison of the different solutions and the benefits\nand drawbacks that each provide."))}p.isMDXComponent=!0}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[676],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44212:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>p});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={id:"learn-kusama-vs-polkadot",title:"What is the difference between Polkadot and Kusama?",sidebar_label:"Comparing Polkadot and Kusama"},l=void 0,d={unversionedId:"learn/learn-kusama-vs-polkadot",id:"learn/learn-kusama-vs-polkadot",isDocsHomePage:!1,title:"What is the difference between Polkadot and Kusama?",description:"Although they share many parts of their code, Polkadot and Kusama are independent, standalone",source:"@site/../docs/learn/learn-kusama-vs-polkadot.md",sourceDirName:"learn",slug:"/learn/learn-kusama-vs-polkadot",permalink:"/docs/learn/learn-kusama-vs-polkadot",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-kusama-vs-polkadot.md",version:"current",lastUpdatedBy:"ajc_",lastUpdatedAt:1628557538,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"learn-kusama-vs-polkadot",title:"What is the difference between Polkadot and Kusama?",sidebar_label:"Comparing Polkadot and Kusama"},sidebar:"docs",previous:{title:"Polkadot Keys",permalink:"/docs/learn/learn-keys"},next:{title:"Ethereum 2.0",permalink:"/docs/learn/learn-comparisons-ethereum-2"}},u=[{value:"What the two networks have in common",id:"what-the-two-networks-have-in-common",children:[]},{value:"Key differences",id:"key-differences",children:[{value:"Speed",id:"speed",children:[]},{value:"Lean setups",id:"lean-setups",children:[]},{value:"Use cases",id:"use-cases",children:[]}]},{value:"Going forward",id:"going-forward",children:[]},{value:"Explore more",id:"explore-more",children:[]}],c={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although they share many parts of their code, Polkadot and Kusama are independent, standalone\nnetworks with different priorities."),(0,r.kt)("p",null,"Kusama is wild and fast; great for bold experimentation and early-stage deployment. Polkadot is more\nconservative, prioritizing stability and dependability."),(0,r.kt)("p",null,"Cousins have their differences after all."),(0,r.kt)("h2",{id:"what-the-two-networks-have-in-common"},"What the two networks have in common"),(0,r.kt)("p",null,"Kusama was released as an early version of the same code to be used in Polkadot, which means they\nshare the same underlying architecture: a multichain, heterogeneously-sharded design based on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/learn-consensus"},"Nominated Proof of Stake (NPoS)"),". Both networks also share key innovations like\non-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/learn-governance"},"governance"),", hot-swappable runtimes for forkless, on-chain upgrades,\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/learn-crosschain"},"Cross-Chain Message Passing (XCMP)")," for interoperability. Governance on\nboth Polkadot and Kusama is designed to be decentralized and permissionless, giving a say in how the\nnetwork is run to everyone who owns the native token (DOT for Polkadot, KSM for Kusama). Therefore,\n",(0,r.kt)("strong",{parentName:"p"},"over time the networks will evolve independently, converging or diverging according to the\ndecisions of their respective communities.")),(0,r.kt)("h2",{id:"key-differences"},"Key differences"),(0,r.kt)("p",null,"There are a few important distinctions to be made."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot_vs_kusama",src:n(30635).Z})),(0,r.kt)("p",null,"Both networks also have different circulating supplies."),(0,r.kt)("h3",{id:"speed"},"Speed"),(0,r.kt)("p",null,"The first key technical difference between Polkadot and Kusama is that Kusama has modified\ngovernance parameters that allow for faster upgrades. Kusama is up to four times faster than\nPolkadot, with seven days for token holders to vote on referendums followed by an enactment period\nof eight days, after which the referendum will be enacted on the chain. This means stakeholders need\nto stay active and vigilant if they want to keep up with all the proposals, referenda, and upgrades,\nand validators on Kusama often need to update on short notice."),(0,r.kt)("p",null,"On Polkadot, votes last 28 days followed by an enactment period of 28 days. This does not mean that\nthe Kusama blockchain itself is faster, in the sense of faster block times or transaction throughput\n(these are the same on both networks), but that there's a shorter amount of time between governance\nevents such as proposing new referenda, voting, and enacting approved upgrades. This allows Kusama\nto adapt and evolve faster than Polkadot."),(0,r.kt)("h3",{id:"lean-setups"},"Lean setups"),(0,r.kt)("p",null,"Teams wishing to run a parachain need to bond tokens as security. The bonding requirement on Kusama\nis likely to be lower than on Polkadot."),(0,r.kt)("h3",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"Polkadot is and always will be the primary network for the deployment of enterprise-level\napplications and those that entail high-value transactions requiring bank-level security and\nstability. The initial use case for Kusama is as a pre-production environment, a \u201ccanary network\u201d.\nBuilding on Kusama first allows teams to test things out in a live, fully decentralized, and\ncommunity-controlled network with real-world conditions and lower stakes in the event of problems or\nbugs than on Polkadot."),(0,r.kt)("p",null,"Many projects will maintain parachains on both networks, experimenting and testing new technologies\nand features on Kusama before deploying them to Polkadot. Some teams will decide just to stay on\nKusama, which is likely to be a place where we see some exciting experimentation with new\ntechnologies going forward. Projects that require high-throughput but don\u2019t necessarily require\nbank-like security, such as some gaming, social networking, and content distribution applications,\nare particularly good candidates for this use case."),(0,r.kt)("p",null,"Kusama may also prove to be the perfect environment for ambitious experiments with new ideas and\ninnovations in areas like governance, incentives, monetary policy, and DAOs (decentralized\nautonomous organizations). Future upgrades to the Polkadot runtime will also likely be deployed to\nKusama before Polkadot mainnet. This way, not only will we be able to see how these new technologies\nand features will perform under real-world conditions before bringing them to Polkadot, but teams\nwho have deployed to both networks will also get an advanced look at how their own technology will\nperform under those upgrades."),(0,r.kt)("h2",{id:"going-forward"},"Going forward"),(0,r.kt)("p",null,"Ultimately, Kusama and Polkadot will live on as independent, standalone networks with their own\ncommunities, their own governance, and their own complementary use cases, though they will continue\nto maintain a close relationship, with many teams likely deploying applications to both networks. In\nthe future, we\u2019re also likely to see Kusama bridged to Polkadot for cross-network interoperability.\nWeb3 Foundation remains committed to both networks going forward, providing crucial support and\nguidance to teams building for the ecosystem."),(0,r.kt)("h2",{id:"explore-more"},"Explore more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.network"},"About Kusama")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guide.kusama.network"},"The Kusama Wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusama.dotapps.io"},"Kusama on Polkadot-JS Apps"))))}p.isMDXComponent=!0},30635:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/Cousins_2-ec7f9314c5c245aad1242f2bd6a746bc.png"}}]);
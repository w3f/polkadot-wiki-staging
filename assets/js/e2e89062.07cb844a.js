"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,y=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"learn-proxies-pure",title:"Pure Proxy Accounts",sidebar_label:"Pure Proxy Accounts",description:"Pure Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","pure proxy","anonymous proxy"],slug:"../learn-proxies-pure"},p=void 0,l={unversionedId:"learn/learn-proxies-pure",id:"learn/learn-proxies-pure",title:"Pure Proxy Accounts",description:"Pure Proxy Accounts on Polkadot.",source:"@site/../docs/learn/learn-proxies-pure.md",sourceDirName:"learn",slug:"/learn-proxies-pure",permalink:"/docs/learn-proxies-pure",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-proxies-pure.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1695131861,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{id:"learn-proxies-pure",title:"Pure Proxy Accounts",sidebar_label:"Pure Proxy Accounts",description:"Pure Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","pure proxy","anonymous proxy"],slug:"../learn-proxies-pure"},sidebar:"docs",previous:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"},next:{title:"Transactions",permalink:"/docs/learn-transactions-index"}},u={},m=[{value:"Anonymous Proxy (Pure Proxy)",id:"anonymous-proxy-pure-proxy",level:2},{value:"Create and Remove Pure Proxy",id:"create-and-remove-pure-proxy",level:2},{value:"Use of Pure Proxy",id:"use-of-pure-proxy",level:2},{value:"Why Pure Proxy?",id:"why-pure-proxy",level:2},{value:"Enhanced Security",id:"enhanced-security",level:3},{value:"Simplified and Secure Account Management",id:"simplified-and-secure-account-management",level:3},{value:"Multi-signature Account Management",id:"multi-signature-account-management",level:3},{value:"Scenario One: One Anonymous Proxy within a Multisig",id:"scenario-one-one-anonymous-proxy-within-a-multisig",level:4},{value:"Scenario Two: Multisig made of Anonymous Proxies",id:"scenario-two-multisig-made-of-anonymous-proxies",level:4},{value:"Proxy calls",id:"proxy-calls",level:2},{value:"Nested Proxy Calls",id:"nested-proxy-calls",level:3}],c={toc:m},h="wrapper";function y(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"anonymous-proxy-pure-proxy"},"Anonymous Proxy (Pure Proxy)"),(0,r.kt)("admonition",{title:"The Account Tab in the Polkadot-JS UI cannot handle complex proxy setups",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Accounts Tab in the Polkadot-JS UI cannot handle complex proxy setups (e.g. a proxy -> multisig\n-> a pure proxy which is part of another multisig). These complex setups must be done using the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics Tab")," directly."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We recommend to use the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet"},"Westend Testnet")," if\nyou are testing features for the first time.")," By performing the complex proxy setups on the\ntestnet, you can comfortably replicate the procedure on the main networks.")),(0,r.kt)("admonition",{title:"Risk of loss of funds",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Read carefully the text below and before performing any action using anonymous proxies on\nPolkadot, experiment on the Westend testnet.")),(0,r.kt)("p",null,"Anonymous proxies (pure proxies) are very different from other proxy types. The proxies we described\nso far are ",(0,r.kt)("em",{parentName:"p"},"existing accounts")," assigned as proxies by a primary account. These proxies act on behalf\nof the primary account, reducing the exposure of the primary account's private key. Remember, the\nmore often we use an account's private key to sign transactions, the more we expose that key to the\ninternet, increasing the visibility of that account. The purpose of a proxy is thus to draw the\nattention of potential attackers away from the primary account, as proxies' private keys will be\nused most of the time to perform actions on behalf of the primary account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anonymous proxies",src:n(7012).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"Anonymous proxies (pure proxies) are new accounts that are ",(0,r.kt)("em",{parentName:"p"},"created")," (not assigned) by a primary\naccount. That primary account then acts as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy on behalf of the anonymous proxy. Anonymous\nproxies are ",(0,r.kt)("strong",{parentName:"p"},"keyless non-deterministic accounts")," as they do not have a private key but they have\nan address that is randomly generated. Also, in some sense, nobody owns an anonymous proxy as nobody\nhas a private key to control them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Renaming Anonymous Proxies as ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Pure Proxies")),(0,r.kt)("p",{parentName:"admonition"},"Anonymous proxies are not anonymous because they have an address that is spawned by a primary\naccount acting as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy. Even if the ",(0,r.kt)("em",{parentName:"p"},"any")," proxy changes, it is still possible to find who\ngenerated the ",(0,r.kt)("em",{parentName:"p"},"anonymous")," proxy by going backward using a block explorer. There was thus the need to\nchange the name of ",(0,r.kt)("em",{parentName:"p"},"anonymous")," proxy. People suggested ",(0,r.kt)("em",{parentName:"p"},"keyless accounts")," since they do not have a\nprivate key and are proxied accounts. However, multisig accounts are also keyless (but\ndeterministic). Moreover, even if ",(0,r.kt)("em",{parentName:"p"},"anonymous")," proxies are proxied accounts, they can still act as\nproxies and control other accounts via proxy calls (see multisig example below). Thus, the name that\nhas been chosen is ",(0,r.kt)("strong",{parentName:"p"},"pure proxy"),". If you want to know more about the reasoning behind renaming of\npure proxies, see the discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12283"},"this PR")," or\nthe discussion on\n",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/parachain-technical-summit-next-steps/51/14"},"Polkadot forum"),".")),(0,r.kt)("p",null,"From now on we will thus use the term pure proxy instead of anonymous proxy."),(0,r.kt)("h2",{id:"create-and-remove-pure-proxy"},"Create and Remove Pure Proxy"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To create a ",(0,r.kt)("strong",{parentName:"p"},"pure proxy")," see\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182196"},"this support article"),", or\nwatch ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T443RcCYP24"},"this technical explainer video"),".")),(0,r.kt)("admonition",{title:"Removing Pure Proxies",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The procedure for removing a ",(0,r.kt)("em",{parentName:"p"},"pure"),' proxy is different from the one used to remove other proxies.\nVisit the section "Removing an Anonymous Proxy" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182196"},"this support article"),", or\nwatch ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T443RcCYP24"},"this technical explainer video"),".")),(0,r.kt)("admonition",{title:"Explainer video on Pure Proxies",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about pure proxies from our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YkYApbhU3i0"},"technical explainer video"),".")),(0,r.kt)("h2",{id:"use-of-pure-proxy"},"Use of Pure Proxy"),(0,r.kt)("p",null,"The use of the ",(0,r.kt)("em",{parentName:"p"},"pure proxy")," is strictly bound to the relationship between the ",(0,r.kt)("em",{parentName:"p"},"pure proxy")," and the\n",(0,r.kt)("em",{parentName:"p"},"any")," proxy. Note that the ",(0,r.kt)("em",{parentName:"p"},"any")," proxy does not necessarily be the one who created the ",(0,r.kt)("em",{parentName:"p"},"pure proxy"),"\nin the first place. Hence, ",(0,r.kt)("em",{parentName:"p"},"pure proxies")," are not really owned by somebody, but they can be\ncontrolled. Once that relationship between the ",(0,r.kt)("em",{parentName:"p"},"pure proxy")," and its ",(0,r.kt)("em",{parentName:"p"},"any")," proxy is broken, the ",(0,r.kt)("em",{parentName:"p"},"pure\nproxy")," will be inaccessible (even if visible on the Polkadot-JS UI). Also, ",(0,r.kt)("em",{parentName:"p"},"pure proxies")," are\nnon-deterministic, meaning that if we lose one ",(0,r.kt)("em",{parentName:"p"},"pure proxy"),", the next one we create from the same\nprimary account will have a different address."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pure proxies")," cannot sign anything because they do not have private keys. However, although they do\nnot have private keys and cannot sign any transaction directly, they can act as proxies (or better,\nproxy channels) within ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," calls (proxy calls). For example, it is possible to have ",(0,r.kt)("em",{parentName:"p"},"pure\nproxies")," within a multisig. Using proxy calls, it is possible to use the ",(0,r.kt)("em",{parentName:"p"},"any")," proxy to call the\n",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, which in turn will do a multisig call. More about this later on."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Once you remove the relationship with ",(0,r.kt)("em",{parentName:"p"},"any")," proxy, the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy will be inaccessible. Also,\n",(0,r.kt)("em",{parentName:"p"},"pure")," proxies cannot sign for anything.")),(0,r.kt)("h2",{id:"why-pure-proxy"},"Why Pure Proxy?"),(0,r.kt)("p",null,"Despite their complexity and associated dangers, ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies have important benefits that we\ndiscuss below."),(0,r.kt)("h3",{id:"enhanced-security"},"Enhanced Security"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pure")," proxies cannot be stolen because they do not have private keys. The only accounts that have\nfull access to the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies are ",(0,r.kt)("em",{parentName:"p"},"any")," proxies. Security can be further increased if the ",(0,r.kt)("em",{parentName:"p"},"any"),"\nproxy is a multi-signature account."),(0,r.kt)("h3",{id:"simplified-and-secure-account-management"},"Simplified and Secure Account Management"),(0,r.kt)("admonition",{title:"Walk-through tutorial video of Account Management",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YkYApbhU3i0"},"this video tutorial")," that goes through\nthis scenario. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"Probably the greatest benefit of using ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies is the management of complex account\nrelationships at a corporate level. Let's take for example 3 accounts belonging to Charlie, Dan and\nEleanor working for Company X. Charlie holds funds belonging to Company X, but he wants to leave the\ncompany and transfer the economic responsibility to Eleanor. Dan is a staking proxy of Charlie."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Without ",(0,r.kt)("em",{parentName:"strong"},"Pure")," Proxy"),", Charlie must (see ",(0,r.kt)("em",{parentName:"p"},"left")," side of the Figure below):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove Dan as a staking proxy, this step requires 1 signature"),(0,r.kt)("li",{parentName:"ul"},"Stop nominating and unbound all funds , this step requires 2 signatures"),(0,r.kt)("li",{parentName:"ul"},"Transfer the funds to Eleanor, this step requires 1 signature")),(0,r.kt)("p",null,"Then Eleanor adds Dan as a staking proxy (1 signature). The whole process requires 5 signatures.\nHere we are presenting a simple example, in fact, with multi-signature accounts and multiple proxies\nthe procedure would be more time-consuming and labor-intensive."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"why anonymous proxies",src:n(9518).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With ",(0,r.kt)("em",{parentName:"strong"},"Pure")," Proxy")," (see ",(0,r.kt)("em",{parentName:"p"},"right")," side of the Figure above), Charlie must add Eleanor as ",(0,r.kt)("em",{parentName:"p"},"any"),"\nproxy of the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, and remove himself (or Eleanor can remove him). The process requires just\n2 signatures (1 signature to add the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy and 1 signature the remove the old one). The\nfunds remain in the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, and it is not necessary to stop nominating or unbond funds. Also,\nany proxy relationships with the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy stay in place. Thus, if we use the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, with\nan increasing number of proxies we will always have to sign twice (not necessarily true in\nmulti-signature accounts). While if we are not using the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, the more the proxies the more\nsignatures we need to detach them from the old stash and attach them to the new stash (see Figure\nbelow)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anon vs stash plot",src:n(78618).Z,width:"1920",height:"800"})),(0,r.kt)("h3",{id:"multi-signature-account-management"},"Multi-signature Account Management"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pure")," proxies are useful to efficiently manage multi-signature (multisig) accounts. In fact,\nmulti-signature accounts are deterministic, which means that once a multisig is created the\nsignatories cannot be changed. If one of the signatories wants to leave the multisig, a new multisig\nmust be created. This is inconvenient, especially at corporate-level management where the chance of\nreplacing someone within a multisig can be high. ",(0,r.kt)("em",{parentName:"p"},"Pure")," proxies allow keeping the same multisig when\nthe signatories change."),(0,r.kt)("h4",{id:"scenario-one-one-anonymous-proxy-within-a-multisig"},"Scenario One: One Anonymous Proxy within a Multisig"),(0,r.kt)("admonition",{title:"Walk-through tutorial video",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iGRoGstB_pQ"},"this video tutorial")," that goes through\nthis scenario. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"It is possible to put a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy within a multisig, and then transactions will be signed by the\n",(0,r.kt)("em",{parentName:"p"},"any")," proxy on behalf of the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy (proxied account). Let's take for example the diagram\nbelow. Alice, Bob and Anon are part of the multisig ABC, a multisig account with threshold 2. P-C is\na ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy spawned by Charlie, who now acts as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy and thus signs anything on behalf of\nP-C. The ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy cannot sign directly because it does not have a private key. So, for example,\nto send funds from the multisig to Dan, Charly needs to submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to P-C,\nwhich in turn will submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic to ABC containing the call data for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the transfer of some funds from ABC to Dan. Alice can\nthen approve the transfer by submitting a ",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic also containing the call data\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the transfer of some funds from ABC to Dan."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multisig with one anon",src:n(19372).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"If Charly wants to leave the multisig, a new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy can be added to P-C and Charly can be\nremoved (by himself or by the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy). Note that the multisig also contains Bob that in\nthis specific example does not do anything."),(0,r.kt)("admonition",{title:"Proxy calls",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy within a multisig you need to use the Extrinsic Tab and generate a\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic. If you try to sign a multisig transaction using the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy you will\nbe prompted with a warning. Remember, you cannot sign something directly if you do not have a\nprivate key.")),(0,r.kt)("h4",{id:"scenario-two-multisig-made-of-anonymous-proxies"},"Scenario Two: Multisig made of Anonymous Proxies"),(0,r.kt)("admonition",{title:"Walk-through Tutorial Video",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=F82C3zDNJyk"},"this video tutorial")," that goes through\nthis scenario. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"The diagram below shows a multisig that is made only with ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies (P-A, P-B and P-C). In this\nsituation Alice, Bob or Charly can leave the multisig at any time without the requirement of\ncreating a new multisig. If for example, Bob leaves the multisig the procedure will require somebody\nelse to be added as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy to P-B, and then Bob can remove himself (or the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy can\nremove Bob)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multisig with anons",src:n(58047).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"In the diagram above, Alice submits the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to P-A, which in turn submits the\n",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the\ntransfer of some tokens from ABC to Dan. Then, Charly does the same to confirm the transaction. Note\nthat Charly will need to pay for some weight, for the computation that is necessary to execute the\ntransaction."),(0,r.kt)("h2",{id:"proxy-calls"},"Proxy calls"),(0,r.kt)("p",null,"Proxy calls are used by proxies to call proxied accounts. These calls are important for example in\nthe case of ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies, as any attempt to sign transactions with a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy will fail. For\nmore details see the ",(0,r.kt)("a",{parentName:"p",href:"#anonymous-proxy-pure-proxy"},"dedicated section about anonymous proxies"),"."),(0,r.kt)("h3",{id:"nested-proxy-calls"},"Nested Proxy Calls"),(0,r.kt)("p",null,"As the term suggests, nested proxy calls are proxy calls within proxy calls. Such calls are needed\nif there are proxied accounts that are proxies themselves. In the example diagram below, Alice has a\nstash account that has a ",(0,r.kt)("em",{parentName:"p"},"staking")," proxy account, P-C. P-C is a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, a proxied account\noriginally spawned by Charly that is now an ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of P-C and signs everything on its behalf."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nested proxy calls",src:n(51050).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"For example, to bond more funds, Charly needs to submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"prox.proxy")," extrinsic to P-C, which in\nturn submits a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to Alice including for example a ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.bondExtra"),"\nextrinsic, specifying the number of extra tokens that need to be bounded. If Charly wants to leave,\na new account can take his place as any proxy (before Charly leaves!). There is no need to change\nthe staking proxy account. Also, Alice is the only one who can remove P-C as a staking proxy, and\nP-C can only perform staking-related tasks. For example, P-C cannot send funds out from Alice's\naccount."),(0,r.kt)("p",null,"Proxy calls can be done using the Extrinsic Tab in the Polkadot-JS UI. Nested proxy calls can be\ndone by calling each ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic separately, or in some cases by just calling the last\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic. In the diagram above, submitting the proxy call from P-C to Alice will\nautomatically ask for Charly's signature. Thus one proxy call will trigger the second one because\nCharly's is the only ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of P-C, and P-C cannot sign anything. While if we want to use Bob's\naccount we will need to submit all three proxy calls."))}y.isMDXComponent=!0},78618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anon-vs-stash-plot-fa8f730710dbf5cbec2d7db43d5d962d.png"},58047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multisig-with-anons-209a0f481e6a13ed943a952be07e1a75.png"},19372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multisig-with-one-anon-b8bb0a5183fbdc1d1809d4cd58489ab4.png"},51050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nested-proxy-calls-65bdc70624a0b21a087da639743c710d.png"},7012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/proxy-vs-anon-1e413e40583ef728f619824e6f714c6b.png"},9518:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/why-anon-proxy-48fc32ddd2da9a5e9342554c68372d98.png"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[315],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),h=s,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),i=["components"],o={id:"learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",sidebar_label:"XCM Transport",description:"Learn the various methods in which XCM messages can be propagated across networks.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-transport"},l=void 0,p={unversionedId:"learn/learn-xcm-transport",id:"learn/learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",description:"Learn the various methods in which XCM messages can be propagated across networks.",source:"@site/../docs/learn/learn-xcm-transport.md",sourceDirName:"learn",slug:"/learn-xcm-transport",permalink:"/docs/learn-xcm-transport",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm-transport.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678699398,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",sidebar_label:"XCM Transport",description:"Learn the various methods in which XCM messages can be propagated across networks.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-transport"},sidebar:"docs",previous:{title:"XCM Usecases",permalink:"/docs/learn-xcm-usecases"},next:{title:"XCM Virtual Machine (XCVM)",permalink:"/docs/learn-xcvm"}},c={},m=[{value:"XCMP (Cross-Chain Message Passing)",id:"xcmp-cross-chain-message-passing",level:3},{value:"VMP (Vertical Message Passing)",id:"vmp-vertical-message-passing",level:3},{value:"HRMP (XCMP-Lite)",id:"hrmp-xcmp-lite",level:3},{value:"XCMP Design",id:"xcmp-design",level:4}],d={toc:m},h="wrapper";function u(e){var a=e.components,o=(0,s.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the XCM format established, common patterns for protocols of these messages are needed.\nPolkadot implements two message passing\nprotocols for acting on XCM messages between its constituent parachains."),(0,r.kt)("p",null,"There are three primary methods for message passing, one of which is under development:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"XCMP (Cross-Chain Message Passing)"),(0,r.kt)("li",{parentName:"ol"},"Horizontal Relay-routed Message Passing (HRMP/XCMP-lite)"),(0,r.kt)("li",{parentName:"ol"},"VMP (Vertical Message Passing)")),(0,r.kt)("h3",{id:"xcmp-cross-chain-message-passing"},"XCMP (Cross-Chain Message Passing)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"XCMP is currently under development, and most of the cross-chain messages pass through HRMP channels\nfor the time being.")),(0,r.kt)("p",null,"XCM is related to XCMP in the same way that REST is related to RESTful."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Cross-Chain Message Passing")," secure message passing between parachains. There are two variants:\n",(0,r.kt)("em",{parentName:"p"},"Direct")," and ",(0,r.kt)("em",{parentName:"p"},"Relayed"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With ",(0,r.kt)("em",{parentName:"li"},"Direct"),", message data goes direct between parachains and is O(1) on the side of the\nRelay-chain and is very scalable."),(0,r.kt)("li",{parentName:"ul"},"With ",(0,r.kt)("em",{parentName:"li"},"Relayed"),", message data is passed via the Relay-chain, and piggy-backs over VMP. It is much\nless scalable, and parathreads in particular may not receive messages due to excessive queue\ngrowth.")),(0,r.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,r.kt)("p",null,"The input and output queue are sometimes referred to in the\nPolkadot codebase and associated documentation\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"egress")," messages, respectively."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For detailed information about VMP see dedicated section in\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/messaging.html#horizontal-message-passing"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,r.kt)("h3",{id:"vmp-vertical-message-passing"},"VMP (Vertical Message Passing)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Vertical Message Passing")," message passing between the Relay-chain itself and a parachain. Message\ndata in both cases exists on the Relay-chain and are interpreted by the relay chain according to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm/#cross-consensus-message-format-xcm"},"XCM")," standards. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"ump-upward-message-passing"},"UMP (Upward Message Passing)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Upward Message Passing")," message passing from a parachain to the Relay-chain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"dmp-downward-message-passing"},"DMP (Downward Message Passing)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Downward Message Passing")," message passing from the Relay-chain to a parachain."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For detailed information about VMP see dedicated section in\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/messaging.html#vertical-message-passing"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,r.kt)("h3",{id:"hrmp-xcmp-lite"},"HRMP (XCMP-Lite)"),(0,r.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,r.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"xcm",src:t(20267).Z,width:"2664",height:"1754"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A stop-gap protocol is a temporary substitute for the functionality that is not fully complete.\nWhile XCMP proper is still in development, HRMP is a working replacement.")),(0,r.kt)("p",null,"A tutorial on how to open an HRMP channel on a parachain can be found\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-hrmp-channels"},"here"),"."),(0,r.kt)("h4",{id:"xcmp-design"},"XCMP Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,r.kt)("em",{parentName:"li"},"not")," be delivered to the Relay Chain."),(0,r.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size specified in bytes."),(0,r.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,r.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,r.kt)("li",{parentName:"ul"},"Collators produce a list of ",(0,r.kt)("inlineCode",{parentName:"li"},"egress")," messages and will receive the ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress")," messages from other\nparachains."),(0,r.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,r.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,r.kt)("li",{parentName:"ul"},"Validators will check the proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,r.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most establish two channels between them, one for sending messages to the\nother chain and another for receiving messages. The channel will require a deposit in DOT to be\nopened, which will get returned when the channel is closed."))}u.isMDXComponent=!0},20267:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/hrmp-ex-d985c82747b653714ff4cde293e1eccc.png"}}]);
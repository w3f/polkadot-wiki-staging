"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=s,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),r=["components"],i={id:"learn-cross-consensus",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-crosschain"},l=void 0,c={unversionedId:"learn/learn-cross-consensus",id:"learn/learn-cross-consensus",title:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",source:"@site/../docs/learn/learn-cross-consensus.md",sourceDirName:"learn",slug:"/learn-crosschain",permalink:"/docs/learn-crosschain",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-cross-consensus.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1657748736,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"learn-cross-consensus",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-crosschain"},sidebar:"docs",previous:{title:"Availability and Validity",permalink:"/docs/learn-availability"},next:{title:"Sequential Phragm\xe9n Method",permalink:"/docs/learn-phragmen"}},m={},p=[{value:"Overview of XCM: A Format, Not a Protocol",id:"overview-of-xcm-a-format-not-a-protocol",level:2},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"XCM Tech Stack",id:"xcm-tech-stack",level:3},{value:"Cross-Consensus Protocols",id:"cross-consensus-protocols",level:2},{value:"VMP (Vertical Message Passing)",id:"vmp-vertical-message-passing",level:3},{value:"XCMP (Cross-Chain Message Passing)",id:"xcmp-cross-chain-message-passing",level:3},{value:"XCMP-Lite (HRMP)",id:"xcmp-lite-hrmp",level:4},{value:"XCMP Design",id:"xcmp-design",level:4},{value:"XCMP Message Format",id:"xcmp-message-format",level:4},{value:"The Anatomy of an XCMP Interaction",id:"the-anatomy-of-an-xcmp-interaction",level:4},{value:"XCVM (Cross-Consensus Virtual Machine)",id:"xcvm-cross-consensus-virtual-machine",level:2},{value:"How To Make Cross-Chain Transfers",id:"how-to-make-cross-chain-transfers",level:2},{value:"Resources",id:"resources",level:2}],h={toc:p};function d(e){var t=e.components,i=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What started as an approach to ",(0,o.kt)("em",{parentName:"p"},"cross-chain communication"),", has evolved into a format for\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/cross-chain-communication"},(0,o.kt)("strong",{parentName:"a"},"Cross-Consensus Communication"))," that is\nnot only conducted between chains, but also between smart contracts, pallets, bridges, and even\nsharded enclaves like ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE"),"."),(0,o.kt)("h2",{id:"overview-of-xcm-a-format-not-a-protocol"},"Overview of XCM: A Format, Not a Protocol"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"XCM is related to cross-chain in the same way that REST is related to RESTful.")),(0,o.kt)("p",null,"XCM cannot actually send messages between systems. It is a format for how message\ntransfer should be performed, similar to how RESTful services use REST as an architectural style\nof deployment."),(0,o.kt)("p",null,'XCM aims to be a language to communicate ideas between consensus systems, hence, "Cross-Consensus"\nwith the following properties:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generic and extensible for use with fee-free and gas-metered smart contract platforms,\ncommunity parachains, trusted interactions between system parachains and their relay chain,\nand more."),(0,o.kt)("li",{parentName:"ul"},"Interacting with a system whose transaction format is unknown. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"XCM is well-versioned, abstract and general and can be used as a means of providing a\nlong-lasting transaction format for wallets to use to create many common transactions.\nIt is ",(0,o.kt)("em",{parentName:"li"},"extensible")," and, in turn, ",(0,o.kt)("em",{parentName:"li"},"future-proof")," and ",(0,o.kt)("em",{parentName:"li"},"forward-compatible"),"."))),(0,o.kt)("li",{parentName:"ul"},"Highly efficient to operate in a tightly constrained and metered environment, as is the case with many chains.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"XCM is not designed in that every system supporting the format is expected to be able to interpret any\npossible XCM message. Practically speaking, one can imagine that some messages will not have reasonable\ninterpretations under some systems or will be intentionally unsupported."))),(0,o.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request for specific operations to occur on the recipient system."),(0,o.kt)("li",{parentName:"ul"},"Optionally include payment of fees on a target network for requested operation."),(0,o.kt)("li",{parentName:"ul"},"Provide methods for various token transfer models:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote Transfers"),": control an account on a remote chain, allowing the local chain to have an\naddress on the remote chain for receiving funds and to eventually transfer those funds it controls\ninto other accounts on that remote chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Teleporting"),": movement of an asset happens by destroying it on one side and creating a clone on\nthe other side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reserve-Based Transfer"),": there may be two chains that want to nominate a third chain, where one\nincludes a native asset that can be used as a reserve for that asset. Then, the derivative form of\nthe asset on each of those chains would be fully backed, allowing the derivative asset to be\nexchanged for the underlying asset on the reserve chain backing it.")))),(0,o.kt)("h3",{id:"xcm-tech-stack"},"XCM Tech Stack"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcm tech stack",src:a(67887).Z,width:"1204",height:"1316"})),(0,o.kt)("p",null,"XCM can be used to express the meaning of the messages over each of these three communication\nchannels."),(0,o.kt)("h2",{id:"cross-consensus-protocols"},"Cross-Consensus Protocols"),(0,o.kt)("p",null,"With the XCM format established, common patterns for protocols of these messages are needed.\nPolkadot implements two message passing protocols for acting on XCM messages between its constituent\nparachains."),(0,o.kt)("h3",{id:"vmp-vertical-message-passing"},"VMP (Vertical Message Passing)"),(0,o.kt)("p",null,"There are two kinds of vertical message-passing transport protocols:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UMP (Upward Message Passing)"),": allows parachains to send messages to their relay chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DMP (Downward Message Passing)"),": allows the relay chain to pass messages down to one of their\nparachains.")),(0,o.kt)("h3",{id:"xcmp-cross-chain-message-passing"},"XCMP (Cross-Chain Message Passing)"),(0,o.kt)("p",null,"XCMP allows the parachains to exchange messages with other parachains on the same Relay Chain."),(0,o.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,o.kt)("p",null,"The input and output queue are sometimes referred to in the Polkadot codebase and associated\ndocumentation as ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"egress")," messages, respectively."),(0,o.kt)("h4",{id:"xcmp-lite-hrmp"},"XCMP-Lite (HRMP)"),(0,o.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,o.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A stop-gap protocol is a temporary substitute for the functionality that is not fully\ncomplete. While XCMP proper is still in development, HRMP is a working replacement."))),(0,o.kt)("h4",{id:"xcmp-design"},"XCMP Design"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"XCMP is currently under development and the details are subject to change")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,o.kt)("em",{parentName:"li"},"not")," be delivered to the Relay Chain."),(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size in bytes."),(0,o.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,o.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,o.kt)("li",{parentName:"ul"},"Collators produce a list of ",(0,o.kt)("inlineCode",{parentName:"li"},"egress")," messages and will receive the ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress")," messages from other\nparachains."),(0,o.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,o.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,o.kt)("li",{parentName:"ul"},"Validators will check the proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,o.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most establish two channels between them, one for sending messages to the other\nchain and another for receiving messages. The channel will require a deposit in DOT to be opened,\nwhich will get returned when the channel is closed."),(0,o.kt)("h4",{id:"xcmp-message-format"},"XCMP Message Format"),(0,o.kt)("p",null,"For an updated and complete description of the XCMP message format please see the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"xcm-format repository on GitHub"),"."),(0,o.kt)("h4",{id:"the-anatomy-of-an-xcmp-interaction"},"The Anatomy of an XCMP Interaction"),(0,o.kt)("p",null,"A smart contract that exists on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will route a message to parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,o.kt)("p",null,"Charlie executes the smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", which initiates a new cross-chain message for\nthe destination of a smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,o.kt)("p",null,"The collator node of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will place this new cross-chain message into its outbound messages\nqueue, along with a ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,o.kt)("p",null,"The collator node of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," makes its next ping, it\nwill see this new message on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and add it into its own inbound queue for processing into\nthe next block."),(0,o.kt)("p",null,"Validators for parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will also read the outbound queue and know the message. Validators for\nparachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,o.kt)("p",null,"When the collator of parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,o.kt)("p",null,"During processing, the message will execute the smart contract on parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and complete the asset\ntransfer as intended."),(0,o.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," into the Relay Chain."),(0,o.kt)("p",null,"Check out our animated video below that explores how XCMP works."),(0,o.kt)("video",{controls:"controls",name:"XCMP Animated Video",width:"560",height:"315",src:"https://storage.googleapis.com/w3f-tech-ed-contents/XCMP.mp4"}," Sorry, your browser doesn't support embedded videos. "),(0,o.kt)("h2",{id:"xcvm-cross-consensus-virtual-machine"},"XCVM (Cross-Consensus Virtual Machine)"),(0,o.kt)("p",null,"An ultra-high level non-Turing-complete computer whose instructions are designed in a way to be roughly at\nthe same level as transactions."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"message")," in XCM is simply just a programme that runs on the ",(0,o.kt)("inlineCode",{parentName:"p"},"XCVM"),": in other words, one or more XCM instructions. To learn more about the XCVM and the XCM Format, see the latest ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"blog post")," by Dr. Gavin Wood."),(0,o.kt)("h2",{id:"how-to-make-cross-chain-transfers"},"How To Make Cross-Chain Transfers"),(0,o.kt)("p",null,"A tutorial on downward, upward, and lateral transfers can be found\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk#testing-a-parachain"},"here"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"XCM: The Cross-Consensus Message Format")," - Detailed blog post by Dr. Gavin Wood about the XCM Format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format"},"XCM Format")," - Description of the high-level XCM format\nsent via XCMP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/XCMP.html"},"XCMP Scheme")," - Full technical\ndescription of cross-chain communication on the Web3 Foundation research wiki."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://w3f.github.io/parachain-implementers-guide/messaging.html"},"Messaging Overview")," - An\noverview of the messaging schemes from the Parachain Implementor's guide.")))}d.isMDXComponent=!0},67887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cross-consensus-tech-stack-e9c1b2ab8b6f6f3f9a78b3a412af0698.png"}}]);
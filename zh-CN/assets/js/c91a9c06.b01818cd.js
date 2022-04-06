"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48693:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>p});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",slug:"../learn-identity"},l=void 0,d={unversionedId:"learn/learn-identity",id:"learn/learn-identity",title:"Identity",description:"Learn about on-chain identity, judgements and registrars.",source:"@site/../docs/learn/learn-identity.md",sourceDirName:"learn",slug:"/learn-identity",permalink:"/zh-CN/docs/learn-identity",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-identity.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649257266,formattedLastUpdatedAt:"2022/4/6",frontMatter:{id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",slug:"../learn-identity"},sidebar:"docs",previous:{title:"Governance",permalink:"/zh-CN/docs/learn-governance"},next:{title:"Nominator",permalink:"/zh-CN/docs/learn-nominator"}},c=[{value:"Setting an Identity",id:"setting-an-identity",children:[{value:"Format Caveat",id:"format-caveat",children:[],level:3}],level:2},{value:"Judgements",id:"judgements",children:[{value:"Requesting a Judgement",id:"requesting-a-judgement",children:[],level:3},{value:"Cancelling a Judgement",id:"cancelling-a-judgement",children:[],level:3}],level:2},{value:"Registrars",id:"registrars",children:[{value:"Becoming a Registrar",id:"becoming-a-registrar",children:[],level:3},{value:"Current Registrars",id:"current-registrars",children:[],level:3}],level:2},{value:"Sub Accounts",id:"sub-accounts",children:[],level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",children:[],level:2}],u={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a naming system that allows\nparticipants to add personal information to their on-chain account and subsequently ask for verification\nof this information by ",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n20.258, and 0.066 per each field beyond the legal name.\nThese funds are ",(0,r.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when the identity is cleared."),(0,r.kt)("p",null,"These amounts can also be extracted by querying constants through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"Chain state constants")," tab on\nPolkadot-JS Apps."),(0,r.kt)("p",null,"First, select ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected constant query"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity as the selected constant query",src:n(45385).Z,width:"1353",height:"347"})),(0,r.kt)("p",null,'Then on the right-hand side, you can select the constants that you would like to view and add them\nonto the webpage by clicking the "plus" icon at the end of the bar.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity as the selected constant query",src:n(37108).Z,width:"1344",height:"372"})),(0,r.kt)("p",null,"Each field can store up to 32 bytes of information, so the data must be less than that. When\ninputting the data manually through the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),",\na ",(0,r.kt)("a",{parentName:"p",href:"https://onlineutf8tools.com/convert-utf8-to-bytes"},"UTF8 to bytes")," converter can help."),(0,r.kt)("p",null,'The easiest way to add the built-in fields is to click the gear icon next to your account and select\n"Set on-chain identity".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gear icon provides the option to set identity",src:n(84377).Z,width:"2500",height:"606"})),(0,r.kt)("p",null,"A popup will appear, offering the default fields."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity field setup popup",src:n(552).Z,width:"1500",height:"941"})),(0,r.kt)("p",null,'To add custom fields beyond the default ones, use the Extrinsics UI to submit a raw transaction by\nfirst clicking "Add Item" and adding any field name you like. The example below adds a field\n',(0,r.kt)("inlineCode",{parentName:"p"},"steam"),", which is a user's ",(0,r.kt)("a",{parentName:"p",href:"https://store.steampowered.com"},"Steam"),' username. The first value is the\nfield name in bytes ("steam") and the second is the account name in bytes ("theswader"). The display\nname also has to be provided, otherwise, the Identity pallet would consider it wiped if we submitted\nit with the "None" option still selected. That is to say, every time you make a change to your\nidentity values, you need to re-submit the entire set of fields: the write operation is always\n"overwrite", never "append".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a custom field",src:n(28151).Z,width:"700",height:"499"})),(0,r.kt)("p",null,"Note that custom fields are not shown in the UI by default:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Only built-in fields are shown",src:n(20361).Z,width:"878",height:"412"})),(0,r.kt)("p",null,"The rendering of such custom values is, ultimately, up to the UI/dapp makers. In the case of\nPolkadot-JS, the team prefers to only show official fields for now. If you want to check that the\nvalues are still stored, use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State UI")," to\nquery the active account's identity info:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Raw values of custom fields are available on-chain",src:n(16683).Z,width:"995",height:"370"})),(0,r.kt)("p",null,"It is up to your own UI or dapp to then do with this data as it pleases. The data will remain\navailable for querying via the Polkadot API, so you don't have to rely on the Polkadot-JS UI."),(0,r.kt)("p",null,"You can have a maximum of 100 custom fields."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Ledger app doesn't support the extrinsic for setting identity yet. As a workaround, create a primary\nidentity with an on-chain account and then using that primary identity, assign a ",(0,r.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity"),"\nto the Ledger stash."))),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The Polkadot-JS\nUI currently encodes the raw bytes it encounters as UTF8 strings, which makes these values readable\non-screen. However, given that there are no restrictions on the values that can be placed into these\nfields, a different UI may interpret them as, for example, IPFS hashes or encoded bitmaps. This\nmeans any field stored as raw bytes will become unreadable by that specific UI. As field standards\ncrystallize, things will become easier to use but for now, every custom implementation of displaying\nuser information will likely have to make a conscious decision on the approach to take, or support\nmultiple formats and then attempt multiple encodings until the output makes sense."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by the complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgements."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you want to be judged by, and\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these confirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,r.kt)("a",{parentName:"p",href:"#"},'"Chain State UI"')," and selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("h3",{id:"requesting-a-judgement"},"Requesting a Judgement"),(0,r.kt)("p",null,"Select one of the registrars from the query you made above."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Requesting judgement",src:n(35989).Z,width:"1009",height:"382"})),(0,r.kt)("p",null,"This will make your identity go from unjudged:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An unjudged identity",src:n(58613).Z,width:"300",height:"326"})),(0,r.kt)("p",null,'To "waiting":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A pending identity",src:n(79952).Z,width:"242",height:"250"})),(0,r.kt)("p",null,"At this point, direct contact with the registrar is required - the contact info is in their identity\nas shown above. Each registrar will have their own set of procedures to verify your identity and\nvalues, and only once you've satisfied their requirements will the process continue."),(0,r.kt)("p",null,"Once the registrar has confirmed the identity, a green checkmark should appear next to your account\nname with the appropriate confidence level:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A confirmed identity",src:n(66973).Z,width:"310",height:"249"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that changing even a single field's value after you've been verified will un-verify your\naccount and you will need to start the judgement process anew. However, you can still change fields\nwhile the judgement is going on - it's up to the registrar to keep an eye on the changes.")),(0,r.kt)("h3",{id:"cancelling-a-judgement"},"Cancelling a Judgement"),(0,r.kt)("p",null,"You may decide that you do not want to be judged by a registrar (for instance, because you realize\nyou entered incorrect data or selected the wrong registrar). In this case, after submitting the\nrequest for judgement but before your identity has been judged, you can issue a call to cancel the\njudgement using an extrinsic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cancel Registrar",src:n(72204).Z,width:"931",height:"244"})),(0,r.kt)("p",null,"To do this, first, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},'"Extrinsics UI"')," and select\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelRequest"),". Ensure that you are calling this from the correct\naccount (the one for which you initially requested judgement). For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index"),", put the index of\nthe registrar from which you requested judgement."),(0,r.kt)("p",null,"Submit the transaction, and the requested judgement will be cancelled."),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 1 DOT to\nverify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee\nto the registrar who provides the judgement on those claims. Users set a maximum fee they are willing\nto pay and only registrars below this amount would provide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,r.kt)("p",null,"To become a registrar, submit a pre-image and proposal into\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-democracy"},"Democracy"),", then wait for people to vote\non it. For best results, write a post about your identity and intentions beforehand, and once the\nproposal is in the queue ask people to second it so that it gets ahead in the referendum queue."),(0,r.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,r.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,r.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a registrar",src:n(83919).Z,width:"841",height:"417"})),(0,r.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,r.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,r.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least 20.258 DOT.\nYou can find out the minimum by querying the chain state under ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants -> democracy -> minimumDeposit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submitting a proposal",src:n(46052).Z,width:"852",height:"337"})),(0,r.kt)("p",null,"At this point, DOT holders can second the motion. With enough seconds, the motion will become a\nreferendum, which is then voted on. If it passes, users will be able to request judgement from this\nregistrar."),(0,r.kt)("h3",{id:"current-registrars"},"Current Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Polkadot.\nUnless no additional information is available here, you must reach out to specific registrars\nindividually if you want to be judged by those."),(0,r.kt)("p",null,"Registrar 0:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": ","12j3Cz8qskCGJxmSJpVL2z2t3Fpmw3KoBaBaRGPnuibFc7o8,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": ","0 DOT,  ",(0,r.kt)("br",null),""),(0,r.kt)("p",null,"Registrar 1:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/"),"  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": ","1Reg2TYv9rGfrQKpPREmrHRxrNsUDBQKzkYwP1UstD97wpJ,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": ","10 DOT,  ",(0,r.kt)("br",null),""),(0,r.kt)("p",null,"Registrar 2:  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Account"),": ","1EpXirnoTimS1SWq52BeYx7sitsusXNGzMyGx8WPujPd1HB,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": ","0 DOT."),(0,r.kt)("p",null,"","","","","",""),(0,r.kt)("p",null,"","","","","",""),(0,r.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, we can check their identity by adding them to our Address Book. Their identity will be\nautomatically loaded."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chevdor is registrar #1",src:n(53315).Z,width:"579",height:"217"})),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-keys"},"Stash accounts")," of each of their\nvalidators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts. Note that a deposit of 20.053\nis required for every sub-account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". Click on the three vertical dots correponding to the account\nto which you already set identity. You should see an option to set onchain sub-identities. Click on it."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Add sub-identity in PolkadotJS",src:n(77336).Z,width:"520",height:"338"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the pop-up window, select your Ledger account from the dropdown and enter text in sub name field. Then,\nclick on set subs button.\n",(0,r.kt)("img",{alt:"Set sub-identity in PolkadotJS",src:n(97948).Z,width:"2155",height:"554"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sign and submit the transaction from the parent account with the identity"))),(0,r.kt)("p",null,"You should now see the sub-identity displayed on-chain. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Explainer video on setting sub-identities")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial")," on setting sub-identities using\nPolkadot-JS UI"))),(0,r.kt)("p",null,"You can also use the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics UI"),". There, select the identity pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"setSubs"),' as the function to use. Click "Add Item" for every child account you want to add to the\nparent sender account. The value to put into the Data field of each parent is the optional name of\nthe sub-account. If omitted, the sub-account will inherit the parent\'s name and be displayed as\n',(0,r.kt)("inlineCode",{parentName:"p"},"parent/parent")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"parent/child"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub account setup",src:n(12999).Z,width:"990",height:"396"})),(0,r.kt)("p",null,"You can use\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate/constants"},"Polkadot-JS Apps"),"\nagain to verify this amount by querying the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.subAccountDeposit")," constant."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub account constant",src:n(48461).Z,width:"1303",height:"165"})),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,r.kt)("p",null,"To clear an identity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts UI"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the three dots corresponding to the account you want to clear and select 'Set on-chain\nidentity'."),(0,r.kt)("li",{parentName:"ol"},"Select 'Clear Identity', and sign and submit the transaction.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."))}p.isMDXComponent=!0},84377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-00f3ea87da232c2f7d999dc39405e782.jpg"},552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-e55b0d8720dbc6f43d42bbb7fa6c78ba.jpg"},28151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-4b7ddfc500350cc20dd455983c451be4.jpg"},20361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-1cfbb35efba85f7965b3907d270c7fa8.jpg"},16683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-473baf936b41cf5c55033313e658c776.jpg"},12999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/06-8db63b396f151dd34f3acbc3b25f74d5.jpg"},58613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-044349ecbf6f78cbe81ee21a35fb8e65.jpg"},35989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-397ceb01e2b7d58432d0a28b3443b432.jpg"},79952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09-c7de0d6dbccae8cfa559554ff2df8552.jpg"},66973:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-0cd8e1b33492eb529995908c5fabbf61.jpg"},83919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},46052:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},53315:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},45385:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/17-cded73776b2061a949d2984a8e92200c.jpg"},37108:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/18-d8d4adc982de74e0e7bbdd45cbf2c442.jpg"},48461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/19-1753b99e43aed55796a436ed73b4ba02.jpg"},77336:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub-id-1-18df099d5c97fdff246815ad91922e32.png"},97948:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub-id-2-40b39041ca30296d805003d186f66763.png"},72204:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registrar_cancel_judgement-a3c97ff1872f5450a2793271d139e23a.png"}}]);
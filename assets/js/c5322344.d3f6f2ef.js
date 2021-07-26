(self.webpackChunk=self.webpackChunk||[]).push([[930],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=s(a),h=r,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,o(o({ref:e},d),{},{components:a})):n.createElement(u,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1876:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>p});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=["components"],l={id:"kusama-adversarial-cheatsheet",title:"Adversarial Cheatsheet",sidebar_label:"Adversarial Cheatsheet"},c=void 0,s={unversionedId:"kusama-adversarial-cheatsheet",id:"kusama-adversarial-cheatsheet",isDocsHomePage:!1,title:"Adversarial Cheatsheet",description:"Expect things to break on Kusama. To help you break some things, take a look at the following threat",source:"@site/../docs/kusama-adverserial-cheatsheet.md",sourceDirName:".",slug:"/kusama-adversarial-cheatsheet",permalink:"/docs/kusama-adversarial-cheatsheet",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/kusama-adverserial-cheatsheet.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1627313812,formattedLastUpdatedAt:"7/26/2021",frontMatter:{id:"kusama-adversarial-cheatsheet",title:"Adversarial Cheatsheet",sidebar_label:"Adversarial Cheatsheet"}},d=[],m={toc:d};function p(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Expect things to break on Kusama. To help you break some things, take a look at the following threat\nmodel."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hacker wants to \u2026"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Security promise that should prevent the hack"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hacking Incentive"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hacking Damage"),(0,i.kt)("th",{parentName:"tr",align:null},"Hacking value details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Double spend tokens via getting the clients to accept a different chain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"If attackers are able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cause system to mint tokens to his own account"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xa0Medium"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Low - Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"If an attacker is able to craft transactions that mint tokens to their account, then this provides a high monetary incentive to execute this attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Validate malicious blocks to double spend tokens"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Availability (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xa0High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"If an attacker is able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Undermine consensus mechanism to split chain"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},'"If an attacker is able to double spend tokens, they are able to get services without paying for them. This gives them a high monetary incentive to execute the attack. Betting on decrease in value of the cryptocurrency or competitors want to damage the reputation, so that the value of their blockchain increases.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tamper/manipulate blockchain history to invalidate transactions (e.g. a voting result)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium - High"),(0,i.kt)("td",{parentName:"tr",align:null},"Attacker can rollback undesired transactions by intentionally invalidating the block where transaction has happened. Attacker can force a governance decision (or even an on-chain update) that favors them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Undermine blockchain or consensus mechanism to damage the ecosystem's reputation"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Availability (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Betting on decrease in value of the cryptocurrency or competitors want to damage the reputation, so that the value of their blockchain increases")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Censorship"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Availability (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Hackers are able to block undesirable types of transactions (e.g. industry competitor transactions or referendum votes). This could be achieved by colluding with other stakeholders or by otherwise obtaining more voting power.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Deanonymize users"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Confidentiality (Node)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"Parties that want to de-anonymize users can use the information to oppress the opposition (e.g. political activists).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Steal token from node"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (Node)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Attackers that are able to steal tokens from nodes can claim assets for themselves, which gives them a high monetary incentive to execute the attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Steal token from node by leaking credentials"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Confidentiality (Node)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Attackers that are able to steal tokens from nodes can claim assets for themselves, which gives them a high monetary incentive to execute the attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Prevent node from accessing the Polkadot network"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Availability (Node)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Low"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Low - Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"Run a targeted denial-of-service attack out of revenge, monetary interests (in case of a competing coin exchange, etc.).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defraud other participants"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (Node)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Low - Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"Attacker can abuse other participants\u2019 misunderstanding of Polkadot's security guarantees to defraud them. Also, if the reward for calling out bad behavior can be set up so that it is higher than the according punishment, a set of self-handled nodes can be set up to generate a source cycle. Other participants are not needed for this attack.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defraud other participants"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integrity (System-wide)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:"center"},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"An attacker could abuse bugs in Polkadot's economic system to defraud other participants. For example, an attacker could exploit a logic bug to not pay transaction fees.")))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6946],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,y=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75925:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot.",keywords:["cryptography","hashing","keypair","signing"],slug:"../learn-cryptography"},p=void 0,l={unversionedId:"learn/learn-cryptography",id:"learn/learn-cryptography",title:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot.",source:"@site/../docs/learn/learn-cryptography.md",sourceDirName:"learn",slug:"/learn-cryptography",permalink:"/docs/learn-cryptography",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-cryptography.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959959,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Polkadot.",keywords:["cryptography","hashing","keypair","signing"],slug:"../learn-cryptography"},sidebar:"docs",previous:{title:"WebAssembly (Wasm)",permalink:"/docs/learn-wasm"},next:{title:"Keys",permalink:"/docs/learn-keys"}},c={},h=[{value:"Hashing Algorithm",id:"hashing-algorithm",level:2},{value:"Keypairs and Signing",id:"keypairs-and-signing",level:2}],u={toc:h};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a high-level overview of the cryptography used in Polkadot. It assumes that you have some\nknowledge about cryptographic primitives that are generally used in blockchains such as hashes,\nelliptic curve cryptography (ECC), and public-private keypairs."),(0,i.kt)("p",null,"For detailed descriptions on the cryptography used in Polkadot please see the more advanced\n",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation"},"research wiki"),"."),(0,i.kt)("h2",{id:"hashing-algorithm"},"Hashing Algorithm"),(0,i.kt)("p",null,"The hashing algorithm used in Polkadot is\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2"},"Blake2b"),". Blake2 is considered to be\na very fast cryptographic hash function that is also used in the cryptocurrency\n",(0,i.kt)("a",{parentName:"p",href:"https://z.cash"},"Zcash"),"."),(0,i.kt)("h2",{id:"keypairs-and-signing"},"Keypairs and Signing"),(0,i.kt)("p",null,'Polkadot uses Schnorrkel/Ristretto x25519 ("sr25519") as its key derivation and signing algorithm.'),(0,i.kt)("p",null,"Sr25519 is based on the same underlying ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Curve25519"},"Curve25519")," as\nits EdDSA counterpart, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519"),". However, it uses\nSchnorr signatures instead of the EdDSA scheme. Schnorr signatures bring some noticeable benefits\nover the ECDSA/EdDSA schemes. For one, it is more efficient and still retains the same feature set\nand security assumptions. Additionally, it allows for native multisignature through\n",(0,i.kt)("a",{parentName:"p",href:"https://bitcoincore.org/en/2017/03/23/schnorr-signature-aggregation/"},"signature aggregation"),"."),(0,i.kt)("p",null,"The names Schnorrkel and Ristretto come from the two Rust libraries that implement this scheme, the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel")," library for Schnorr signatures and the\n",(0,i.kt)("a",{parentName:"p",href:"https://ristretto.group/ristretto.html"},"Ristretto")," library that makes it possible to use cofactor-8\ncurves like Curve25519."))}d.isMDXComponent=!0}}]);
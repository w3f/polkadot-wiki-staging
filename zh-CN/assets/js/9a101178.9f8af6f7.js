"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=i,y=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42047:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"build-ss58-registry",title:"SS58 Registry",sidebar_label:"SS58 Registry",description:"Information about SS58 encoding.",slug:"../build-ss58-registry"},c=void 0,l={unversionedId:"build/build-ss58-registry",id:"build/build-ss58-registry",title:"SS58 Registry",description:"Information about SS58 encoding.",source:"@site/../docs/build/build-ss58-registry.md",sourceDirName:"build",slug:"/build-ss58-registry",permalink:"/zh-CN/docs/build-ss58-registry",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-ss58-registry.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1640028414,formattedLastUpdatedAt:"2021/12/20",frontMatter:{id:"build-ss58-registry",title:"SS58 Registry",sidebar_label:"SS58 Registry",description:"Information about SS58 encoding.",slug:"../build-ss58-registry"},sidebar:"docs",previous:{title:"Substrate Connect",permalink:"/zh-CN/docs/build-substrate"},next:{title:"Integration Initiation",permalink:"/zh-CN/docs/build-integration"}},u=[],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Substrate-based chains, including the Polkadot and Kusama relay chains, use an\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/ss58/"},"SS58 encoding")," for\ntheir address formats. Please see the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/"},"SS58 registry")," to see which\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"chain corresponds to a given prefix"),",\nand which prefixes are available."))}p.isMDXComponent=!0}}]);
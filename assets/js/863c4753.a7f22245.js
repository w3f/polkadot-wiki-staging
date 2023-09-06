"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2552],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15719:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"learn-xcm-docs-journey-register",title:"Register Modifiers",sidebar_label:"More Register Modifiers",description:"Register Modifiers.",keywords:["xcm","cross-consensus messaging","register"],slug:"../journey-register"},l="Register Modifiers",c={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-register",id:"learn/xcm/journey/learn-xcm-docs-journey-register",title:"Register Modifiers",description:"Register Modifiers.",source:"@site/../docs/learn/xcm/journey/register-modifiers.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-register",permalink:"/docs/learn/xcm/journey-register",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/register-modifiers.md",tags:[],version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1693997149,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{id:"learn-xcm-docs-journey-register",title:"Register Modifiers",sidebar_label:"More Register Modifiers",description:"Register Modifiers.",keywords:["xcm","cross-consensus messaging","register"],slug:"../journey-register"},sidebar:"docs",previous:{title:"Origin Manipulation",permalink:"/docs/learn/xcm/journey-origin"},next:{title:"More Holding Modifiers",permalink:"/docs/learn/xcm/journey-holding"}},p={},u=[{value:"SetErrorHandler",id:"seterrorhandler",level:2},{value:"SetAppendix",id:"setappendix",level:2},{value:"ClearError",id:"clearerror",level:2},{value:"ClearTransactStatus",id:"cleartransactstatus",level:2},{value:"SetTopic",id:"settopic",level:2},{value:"ClearTopic",id:"cleartopic",level:2}],d={toc:u},m="wrapper";function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-modifiers"},"Register Modifiers"),(0,i.kt)("p",null,"In the previous chapters we already saw instructions that modified the XCVM registers. This chapter\ncontains more instructions that change the XCVM registers. We will discuss the following\ninstructions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetErrorHandler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetAppendixHandler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClearError")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClearTransactStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetTopic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClearTopic"))),(0,i.kt)("h2",{id:"seterrorhandler"},"SetErrorHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"SetErrorHandler(Xcm<Call>)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetErrorHandler")," instructions is used to set the Error Handler Register. As discussed in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-xcvm"},"XCVM chapter"),", the Error Handler is executed when an error is thrown\nduring the regular instruction execution."),(0,i.kt)("h2",{id:"setappendix"},"SetAppendix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"SetAppendix(Xcm<Call>)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetAppendix")," instruction is used to set the Appendix Register. As discussed in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-xcvm"},"XCVM chapter"),", the Appendix instructions are executed after the regular\nand error handler instruction are executed. These instructions are executed regardless of whether an\nerror occurred."),(0,i.kt)("h2",{id:"clearerror"},"ClearError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ClearError\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearError")," instruction clears the Error Register by setting it to None."),(0,i.kt)("h2",{id:"cleartransactstatus"},"ClearTransactStatus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ClearTransactStatus\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearTransactStatus")," instruction sets the Transact Status Register to its default, cleared,\nvalue."),(0,i.kt)("h2",{id:"settopic"},"SetTopic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"SetTopic([u8; 32])\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetTopic")," instruction sets the Topic Register."),(0,i.kt)("h2",{id:"cleartopic"},"ClearTopic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ClearTopic\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearTopic")," instruction clears the Topic Register."))}g.isMDXComponent=!0}}]);
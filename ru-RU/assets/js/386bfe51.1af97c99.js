(self.webpackChunk=self.webpackChunk||[]).push([[657],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88097:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>d});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"contributing",title:"Contributing",sidebar_label:"Contributing",slug:"../contributing"},l=void 0,u={unversionedId:"general/contributing",id:"general/contributing",isDocsHomePage:!1,title:"Contributing",description:"The wiki was started and is maintained by the Web3 Foundation. It is an open source project and aims",source:"@site/../docs/general/contributing.md",sourceDirName:"general",slug:"/contributing",permalink:"/ru-RU/docs/contributing",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/contributing.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1628969730,formattedLastUpdatedAt:"14.08.2021",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing",slug:"../contributing"},sidebar:"docs",previous:{title:"Community",permalink:"/ru-RU/docs/community"},next:{title:"Contributors",permalink:"/ru-RU/docs/contributors"}},c=[{value:"How to Contribute",id:"how-to-contribute",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Heritage",id:"heritage",children:[]}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The wiki was started and is maintained by the Web3 Foundation. It is an open source project and aims\nto be the most extensive resource of knowledge on Polkadot and the Polkadot ecosystem. A large part\nof the material currently focuses on Polkadot directly but it is not opposed to covering\ninformational material for community projects."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please do not try to pull request any marketing material as this will be rejected.")),(0,i.kt)("p",null,"Nonetheless, pull requests, discussions, and contributions from the community are encouraged. Active\ncommunity members who demonstrate a record of good contributions may be given write access to the\nrepository."),(0,i.kt)("p",null,"Otherwise, Web3 Foundation holds the administrative position and final say on the content that is\nincluded. Specifically, the Technical Education team at the foundation are most directly involved."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check out the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6i55KOcy7B0"},"How to Contribute to the Polkadot Wiki")," video for\nsteps on contributions.")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,i.kt)("p",null,"You can contribute to the wiki on the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki"},"w3f/polkadot-wiki GitHub repository"),". Every page is a\n",(0,i.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"MarkDown")," file, which is an easy to learn\nsyntax extension to plain text that makes creating links, rendering images, and nice-looking\nformatting simple."),(0,i.kt)("p",null,'Each page has an "Edit this page" link at the bottom of the content. By clicking it you are taken to\nthe GitHub sign-in page, where you can either log in or create an account.'),(0,i.kt)("p",null,"Once logged in, you'll be taken to the GitHub built-in text editor where you can make your edits\ndirectly. When you've completed your changes, you can add any specific details on what was changed\nand commit to a ",(0,i.kt)("strong",{parentName:"p"},"new branch")," to create a new Pull Request to the repository. From there one of the\nmaintainers will review your changes, and either merge them or request changes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58744).Z})," ",(0,i.kt)("img",{src:n(83218).Z})),(0,i.kt)("p",null,'Remember that after you click "Propose Changes", you must also click on "Create Pull Request" on the\nnext page.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(60946).Z})),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("p",null,"There are a few basic ground-rules for contributors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"No ",(0,i.kt)("inlineCode",{parentName:"strong"},"--force")," pushes")," or modifying the Git history in any way."),(0,i.kt)("li",{parentName:"ol"},"Pull requests are preferred to issues, especially for small changes such as typos. Issues should\nbe used for generic or broad-based changes or missing content. Suggestions and requests are encouraged."),(0,i.kt)("li",{parentName:"ol"},"Only use ",(0,i.kt)("strong",{parentName:"li"},"non-master branches"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Significant modifications"),", even by contributors, ought to be subject to a ",(0,i.kt)("strong",{parentName:"li"},"pull request")," to\nsolicit feedback from other contributors."),(0,i.kt)("li",{parentName:"ol"},"Pull requests to solicit feedback are ",(0,i.kt)("em",{parentName:"li"},"encouraged")," for any other non-trivial contribution but\nleft to the discretion of the contributor."),(0,i.kt)("li",{parentName:"ol"},"Contributors should attempt to adhere to the prevailing ",(0,i.kt)("inlineCode",{parentName:"li"},"MarkDown")," style, language, and layout."),(0,i.kt)("li",{parentName:"ol"},"Correct grammar should be used at all times. Pull requests with typos will not be merged until\nfixed."),(0,i.kt)("li",{parentName:"ol"},"Care should be taken to remain as objective and informative as possible. There should be no\neditorializing, and external bias should not be present."),(0,i.kt)("li",{parentName:"ol"},"We use a plugin called Prettier to standardize the style across documents. You can run this on\nyour local copy with ",(0,i.kt)("inlineCode",{parentName:"li"},"npx pretty-quick --staged"),", but for simplicity we also have a bot which\nruns this for us in your PRs.")),(0,i.kt)("h2",{id:"heritage"},"Heritage"),(0,i.kt)("p",null,"This document is based on the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Level/community/blob/master/CONTRIBUTING.md"},"Level contribution guidelines"),"."))}d.isMDXComponent=!0},58744:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/contributing-69801a2ab9b4924d0057fd15ffeb53ab.png"},60946:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/creating-pull-request-2-dbd958496c4e13a05ce366472d8235f0.png"},83218:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/creating-pull-request-d619fd33e91fa84290fb190070c603f4.png"}}]);
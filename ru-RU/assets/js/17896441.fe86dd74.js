(self.webpackChunk=self.webpackChunk||[]).push([[7918],{36742:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(19756),r=a(67294),l=a(73727),i=a(52263),s=a(13919),o=a(10412),c=(0,r.createContext)({collectLink:function(){}}),d=a(44996),m=a(18780),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,a,v=e.isNavLink,p=e.to,h=e.href,f=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,N=(0,n.Z)(e,u),_=(0,i.Z)().siteConfig,L=_.trailingSlash,Z=_.baseUrl,U=(0,d.C)().withBaseUrl,w=(0,r.useContext)(c),C=p||h,y=(0,s.Z)(C),T=null==C?void 0:C.replace("pathname://",""),M=void 0!==T?(a=T,k&&function(e){return e.startsWith("/")}(a)?U(a):a):void 0;M&&y&&(M=(0,m.applyTrailingSlash)(M,{trailingSlash:L,baseUrl:Z}));var A,O=(0,r.useRef)(!1),B=v?l.OL:l.rU,H=o.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!H&&y&&null!=M&&window.docusaurus.prefetch(M),function(){H&&A&&A.disconnect()}}),[M,H,y]);var x=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,S=!M||!y||x;return M&&y&&!x&&!b&&w.collectLink(M),S?r.createElement("a",Object.assign({href:M},C&&!y&&{target:"_blank",rel:"noopener noreferrer"},N)):r.createElement(B,Object.assign({},N,{onMouseEnter:function(){O.current||null==M||(window.docusaurus.preload(M),O.current=!0)},innerRef:function(e){var t,a;H&&e&&y&&(t=e,a=function(){null!=M&&window.docusaurus.prefetch(M)},(A=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),a())}))}))).observe(t))},to:M||""},v&&{isActive:g,activeClassName:f}))}},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},44996:(e,t,a)=>{"use strict";a.d(t,{C:()=>l,Z:()=>i});var n=a(52263),r=a(13919);function l(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,i=l.forcePrependBaseUrl,s=void 0!==i&&i,o=l.absolute,c=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(l,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},65172:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>$});var n=a(67294),r=a(86010),l=a(93783),i=a(36742),s=a(24973);const o=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(52263),d=a(80907),m=a(99558);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.versionMetadata,l=(0,c.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,s=(0,m.J)(i).savePreferredVersionName,o=(0,d.Jo)(i),u=o.latestDocSuggestion,h=o.latestVersionSuggestion,f=null!=u?u:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:f.path,onClick:function(){return s(h.name)}})))}const f=function(e){var t=e.versionMetadata;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)};var g=a(41217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(22122),_=a(19756);const L="iconEdit_2_ui";var Z=["className"];const U=function(e){var t=e.className,a=(0,_.Z)(e,Z);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(U,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const C="tag_1Okp",y="tagRegular_3MiF",T="tagWithCount_1HU1";const M=function(e){var t,a=e.permalink,l=e.name,s=e.count;return n.createElement(i.Z,{href:a,className:(0,r.Z)(C,(t={},t[y]=!s,t[T]=s,t))},l,s&&n.createElement("span",null,s))},A="tags_2ga9",O="tag_11ep";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:O},n.createElement(M,{name:t,permalink:a}))}))))}const H="lastUpdated_13-_";function x(e){return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",H)},(a||l)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function D(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||l||s);return c||d?n.createElement("footer",{className:(0,r.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(x,{tags:o}),d&&n.createElement(S,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}var I=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function F(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function P(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,s=e.linkActiveClassName,o=void 0===s?void 0:s,c=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,_.Z)(e,I),v=(0,m.LU)(),p=null!=c?c:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,f=(0,m.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:h}),g=(0,n.useMemo)((function(){if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:h}}),[i,o,p,h]);return(0,m.Si)(g),n.createElement(F,(0,N.Z)({toc:f,className:r,linkClassName:i},u))}const V="tableOfContents_35-E";var W=["className"];const j=function(e){var t=e.className,a=(0,_.Z)(e,W);return n.createElement("div",{className:(0,r.Z)(V,"thin-scrollbar",t)},n.createElement(P,(0,N.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},R="tocCollapsible_1PrD",z="tocCollapsibleButton_2O1e",q="tocCollapsibleContent_2Ydz",J="tocCollapsibleExpanded_3GYr";function Y(e){var t,a=e.toc,l=e.className,i=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(R,(t={},t[J]=!d,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",z),onClick:u},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:q,collapsed:d},n.createElement(P,{toc:a,minHeadingLevel:i,maxHeadingLevel:o})))}var G=a(28408);const K="docItemContainer_33ec",Q="docItemCol_3FnS",X="tocMobile_3Hoh";function $(e){var t,a=e.content,i=e.versionMetadata,s=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,p=c.hide_table_of_contents,h=c.toc_min_heading_level,b=c.toc_max_heading_level,E=s.description,k=s.title,N=!v&&void 0===a.contentTitle,_=(0,l.Z)(),L=!p&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:k,description:E,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[Q]=!p,t))},n.createElement(f,{versionMetadata:i}),n.createElement("div",{className:K},n.createElement("article",null,i.badge&&n.createElement("span",{className:(0,r.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",i.label),L&&n.createElement(Y,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:b,className:(0,r.Z)(m.kM.docs.docTocMobile,X)}),n.createElement("div",{className:(0,r.Z)(m.kM.docs.docMarkdown,"markdown")},N&&n.createElement(G.N,null,k),n.createElement(a,null)),n.createElement(D,e)),n.createElement(o,{metadata:s}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(j,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:b,className:m.kM.docs.docTocDesktop}))))}},28408:(e,t,a)=>{"use strict";a.d(t,{N:()=>u,Z:()=>v});var n=a(19756),r=a(22122),l=a(67294),i=a(86010),s=a(24973),o=a(99558);const c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-";var m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),p=(0,o.LU)().navbar.hideOnScroll;return u?l.createElement(t,(0,r.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=p,a[c]=!p,a)),id:u}),v.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,v)});var t}},41217:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),r=a(99105),l=a(99558),i=a(44996);function s(e){var t=e.title,a=e.description,s=e.keywords,o=e.image,c=e.children,d=(0,l.pe)(t),m=(0,i.C)().withBaseUrl,u=o?m(o,{absolute:!0}):void 0;return n.createElement(r.Z,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),s&&n.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),c)}},93783:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),r=a(10412),l="desktop",i="mobile",s="ssr";function o(){return r.Z.canUseDOM?window.innerWidth>996?l:i:s}const c=function(){var e=(0,n.useState)((function(){return o()})),t=e[0],a=e[1];return(0,n.useEffect)((function(){function e(){a(o())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var r,l=e.split(/[#?]/)[0],i="/"===l||l===n?l:(r=l,a?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(l,i)}},18780:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(l).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);
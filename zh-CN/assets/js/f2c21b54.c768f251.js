(self.webpackChunk=self.webpackChunk||[]).push([[4363],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3011:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",slug:"../build-storage"},l=void 0,d={unversionedId:"build/build-storage",id:"build/build-storage",isDocsHomePage:!1,title:"Decentralized Storage Systems",description:"Information about building with decentralized storage.",source:"@site/../docs/build/build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/zh-CN/docs/build-storage",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634069897,formattedLastUpdatedAt:"2021/10/12",frontMatter:{id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",slug:"../build-storage"},sidebar:"docs",previous:{title:"Parachain Development",permalink:"/zh-CN/docs/build-pdk"},next:{title:"Smart Contracts",permalink:"/zh-CN/docs/build-smart-contracts"}},p=[{value:"DCS (Decentralized cloud storage)",id:"dcs-decentralized-cloud-storage",children:[{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",children:[{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",children:[],level:4}],level:3},{value:"Filecoin",id:"filecoin",children:[],level:3},{value:"Storj",id:"storj",children:[],level:3},{value:"Sia",id:"sia",children:[],level:3},{value:"Swarm",id:"swarm",children:[],level:3},{value:"BitTorrent File System (BTFS)",id:"bittorrent-file-system-btfs",children:[],level:3}],level:2},{value:"Substrate Storage",id:"substrate-storage",children:[{value:"PolkadotJS Storage",id:"polkadotjs-storage",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed\nand decentralized systems like a blockchain. When interacting with the Polkadot ecosystem, it\nwill be helpful if you familiarize yourself with the current Web 3.0 approach to decentralized\nstorage systems, and how these systems can support your endeavors."),(0,o.kt)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized cloud storage)"),(0,o.kt)("p",null,"The key attribute that characterises centralized cloud storage is location ","[of data]",".\nIn decentralised cloud storage, the key attribute becomes the data itself instead of the data's location.\nThis can be viewed as the shift from the centralized ",(0,o.kt)("em",{parentName:"p"},"location-centric")," storage approach to the decentralized\n",(0,o.kt)("em",{parentName:"p"},"content-centric")," approach."),(0,o.kt)("h3",{id:"ipfs-interplanetary-file-system"},"IPFS (Interplanetary File System)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all computing devices with the\nsame system of files, by utilizing features such as content-addressing, content-signing, and enhanced security\nmethods through encryption. IPFS aims to address the current hurdles of the HTTP-based Internet."),(0,o.kt)("h4",{id:"brief-comparison-of-ipfs--http"},"Brief comparison of IPFS & HTTP:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IPFS"),(0,o.kt)("th",{parentName:"tr",align:null},"HTTP"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"network: peer-to-peer model (decentralized)"),(0,o.kt)("td",{parentName:"tr",align:null},"network: client-server model (centralized)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requests: use a cryptographic hash of that data"),(0,o.kt)("td",{parentName:"tr",align:null},"requests: use the address on which data is hosted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"),(0,o.kt)("td",{parentName:"tr",align:null},"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server")))),(0,o.kt)("h3",{id:"filecoin"},"Filecoin"),(0,o.kt)("p",null,"Like IPFS, ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin")," is a protocol developed by ",(0,o.kt)("a",{parentName:"p",href:"https://protocol.ai/"},"Protocol Labs"),"\nthat offers a decentralized storage network. Filecoin's main focus is the storage itself and uses IPFS as a\n","[complementary]"," back-end protocol."),(0,o.kt)("h3",{id:"storj"},"Storj"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.storj.io/"},"Storj")," is a decentralized cloud storage system for developers."),(0,o.kt)("h3",{id:"sia"},"Sia"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sia.tech/"},"Sia")," aims to be decentralized storage for the post-cloud world."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Both Storj & Sia encrypt all files before being uploaded and distributes them robustly and reliably.")),(0,o.kt)("h3",{id:"swarm"},"Swarm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ethswarm.org/"},"EthSwarm")," is a system of peer-to-peer networked nodes that create a decentralized\nstorage and communication service for a sovereign digital society."),(0,o.kt)("h3",{id:"bittorrent-file-system-btfs"},"BitTorrent File System (BTFS)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bittorrent.com/token/bittorrent-file-system/"},"BTFS")," is a file-sharing protocol that uses\nthe TRON network and the BitTorrent ecosystem."),(0,o.kt)("h2",{id:"substrate-storage"},"Substrate Storage"),(0,o.kt)("p",null,"Substrate takes a layered approach to storage by using a key-value data store that is implemented\nas a database-backed, ",(0,o.kt)("em",{parentName:"p"},"modified")," Merkle tree. Substrate's higher-layer storage abstractions are\nbuilt on the key-value store."),(0,o.kt)("p",null,"The key-value data store is backed by ",(0,o.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", and it also supports an experimental\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db"},"Parity database"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The database is used for components that require persistent storage: Substrate clients, Substrate light-clients\n& off-chain workers. For more information, check out\nSubstrate Developer Hub's ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/storage"},"Storage Page"),".")),(0,o.kt)("p",null,"When building on Substrate, ",(0,o.kt)("em",{parentName:"p"},"runtime developers")," can take advantage of Substrate's FRAME ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage pallet")," which\ngives access to Substrate's storage APIs. These storage items support values that are encoded by Parity's\n",(0,o.kt)("inlineCode",{parentName:"p"},"SCALE (Simple Concatenated Aggregate Little-Endian) Codec"),"."),(0,o.kt)("p",null,"There is a\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/storage/trait.StorageValue.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Value"))," API\nthat is used to store single values,\na ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/storage/trait.StorageMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Map"))," API\nthat is used to a key-value hash map,\na ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/storage/trait.StorageDoubleMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage Double Map"))," API\nthat creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"storage map")," with two keys to provide the ability to efficiently remove all entries that have a common\nfirst key, and a ",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/frame_support/storage/trait.StorageNMap.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Storage N Map"))," API that can\nbe used to store a hash map with any arbitrary number of keys."),(0,o.kt)("p",null,"These layered APIs act as runtime storage that allows you to store data in your blockchain. More information can be\nfound at the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/storage"},(0,o.kt)("inlineCode",{parentName:"a"},"Runtime Storage Page"))," on Substrate Developer Hub."),(0,o.kt)("h3",{id:"polkadotjs-storage"},"PolkadotJS Storage"),(0,o.kt)("p",null,"The PolkadotJS API offers storage methods that are part of the default Substrate runtime.\nThey are exposed via ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.<module>.<method>"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/storage/"},"official docs")," for more detials."))}u.isMDXComponent=!0}}]);
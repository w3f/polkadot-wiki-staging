(self.webpackChunk=self.webpackChunk||[]).push([[464],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),o=a(79443);const r=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(86010);const i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;const c=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=r(),k=h.tabGroupChoices,b=h.setTabGroupChoices,g=(0,n.useState)(o),f=g[0],N=g[1],y=n.Children.toArray(e.children),v=[];if(null!=d){var w=k[d];null!=w&&w!==f&&c.some((function(e){return e.value===w}))&&N(w)}var x=function(e){var t=e.currentTarget,a=v.indexOf(t),n=c[a].value;N(n),null!=d&&(b(d,n),setTimeout((function(){var e,a,n,o,r,l,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&r<=p&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case p:var o=v.indexOf(e.target)-1;a=v[o]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:C,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},15058:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>h});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),l=a(55064),i=a(58215),s=["components"],p={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node"},u=void 0,c={unversionedId:"maintain-sync",id:"maintain-sync",isDocsHomePage:!1,title:"Set up a Full Node",description:"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom",source:"@site/../docs/maintain-sync.md",sourceDirName:".",slug:"/maintain-sync",permalink:"/docs/maintain-sync",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-sync.md",version:"current",lastUpdatedBy:"Aleixo S\xe1nchez",lastUpdatedAt:1628524994,formattedLastUpdatedAt:"8/9/2021",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node"}},d=[{value:"Types of Nodes",id:"types-of-nodes",children:[]},{value:"Setup Instructions",id:"setup-instructions",children:[]},{value:"Get Substrate",id:"get-substrate",children:[]},{value:"Clone and Build",id:"clone-and-build",children:[]},{value:"Run",id:"run",children:[]},{value:"Running an Archive Node",id:"running-an-archive-node",children:[]},{value:"Using Docker",id:"using-docker",children:[]}],m={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,r.kt)("p",null,"This guide will show you how to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate"),"-based chain. First,\nlet's clarify the term ",(0,r.kt)("em",{parentName:"p"},"full node"),"."),(0,r.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,r.kt)("p",null,"A blockchain's growth comes from a ",(0,r.kt)("em",{parentName:"p"},"genesis block"),", ",(0,r.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,r.kt)("em",{parentName:"p"},"events"),"."),(0,r.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks. An archive node makes it convenient to query the past\nstate of the chain at any point in time. Finding out what an account's balance at a certain block\nwas, or which extrinsics resulted in a certain state change are fast operations when using an\narchive node. However, an archive node takes up a lot of disk space - around Kusama's 1.6 millionth\nblock this was around 15 to 20GB."),(0,r.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,r.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"full node")," is ",(0,r.kt)("em",{parentName:"p"},"pruned"),": it discards all finalized blocks older than a configurable number\nexcept the genesis block: This is 256 blocks from the last finalized one, by default. A node that is\npruned this way requires much less space than an archive node."),(0,r.kt)("p",null,"A full node may eventually be able to rebuild the entire chain with no additional information, and\nbecome an archive node, but at he time of writing, this is not implemented. If you need to query\nhistorical blocks past what you pruned, you need to purge your database and resync your node\nstarting in archive mode. Alternatively you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network, and only need the blocks past that snapshot."),(0,r.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,r.kt)("p",null,"Another type of node is a ",(0,r.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource restricted devices. An interesting use-case of\nlight nodes is a Chrome extension, which is a node in its own right, running the runtime in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-light-ui"},"WASM\nformat")," as well as a full or light node that is\ncompletely encapsulated in WASM and can be integrated into webapps:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,r.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,r.kt)("a",{parentName:"p",href:"maintain-guides-secure-validator.md"},"secure validator setup")," if you are running validator."),(0,r.kt)(l.Z,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm`\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Rust in your terminal by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once Rust is installed, run the following command to clone and build the polkadot code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start your node:\n{{ polkadot:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.kt)("p",{parentName:"li"},":polkadot }}\n{{ kusama:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n')),(0,r.kt)("p",{parentName:"li"},":kusama }}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine the latest version of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, run the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start your node:\n{{ polkadot:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.kt)("p",{parentName:"li"},":polkadot }}\n{{ kusama:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n')),(0,r.kt)("p",{parentName:"li"},":kusama }}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determine the latest version of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The nature of pre-built binaries means that they may not work on your particular architecture or Linux distribution.\nIf you see an error like ",(0,r.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it likely means the binary is not compatible\nwith your system. You will either need to compile the ",(0,r.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,r.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,r.kt)("a",{parentName:"p",href:"#using-docker"},(0,r.kt)("strong",{parentName:"a"},"Docker")),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the following:\n{{ polkadot:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.kt)("p",{parentName:"li"},":polkadot }}\n{{ kusama:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n')),(0,r.kt)("p",{parentName:"li"},":kusama }}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry")))))),(0,r.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,r.kt)("p",null,"Follow instructions as outlined\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"here")," - note that Windows users will\nhave their work cut out for them. It's better to use a virtual machine instead."),(0,r.kt)("p",null,"Test if the installation was successful by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,r.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,r.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"The built binary will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,r.kt)("p",null,"{{ polkadot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.kt)("p",null,":polkadot }}\n{{ kusama:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n')),(0,r.kt)("p",null,":kusama }}"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,r.kt)("a",{parentName:"p",href:"maintain-wss.md"},"connecting to your node remotely"),", you'll probably want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,r.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,r.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,r.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,r.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,r.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,r.kt)("p",null,"{{ polkadot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,r.kt)("p",null,":polkadot }}\n{{ kusama:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive --chain kusama\n')),(0,r.kt)("p",null,":kusama }}"),(0,r.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,r.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,r.kt)("h2",{id:"using-docker"},"Using Docker"),(0,r.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide. If you would like to connect to your node's WebSockets\nensure that you run you node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 parity/polkadot:v0.8.24 --name "calling_home_from_a_docker_container" --rpc-external --ws-external\n')))}h.isMDXComponent=!0},86010:(e,t,a)=>{"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:()=>o})}}]);
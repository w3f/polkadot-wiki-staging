"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"maintain-wss",title:"Secure WebSocket",sidebar_label:"Secure WebSocket",description:"Steps on setting up a secure socket for remote connections.",keywords:["web socket","remote","connection","secure websocket"],slug:"../maintain-wss"},l=void 0,c={unversionedId:"maintain/maintain-wss",id:"maintain/maintain-wss",title:"Secure WebSocket",description:"Steps on setting up a secure socket for remote connections.",source:"@site/../docs/maintain/maintain-wss.md",sourceDirName:"maintain",slug:"/maintain-wss",permalink:"/docs/maintain-wss",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-wss.md",tags:[],version:"current",lastUpdatedBy:"Stakeworld",lastUpdatedAt:1673328254,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"maintain-wss",title:"Secure WebSocket",sidebar_label:"Secure WebSocket",description:"Steps on setting up a secure socket for remote connections.",keywords:["web socket","remote","connection","secure websocket"],slug:"../maintain-wss"},sidebar:"docs",previous:{title:"Networks",permalink:"/docs/maintain-networks"},next:{title:"Resolving Errors",permalink:"/docs/maintain-errors"}},p={},d=[{value:"Set up a node",id:"set-up-a-node",level:2},{value:"Archive Node vs Pruned Node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:2},{value:"Obtaining an SSL Certificate",id:"obtaining-an-ssl-certificate",level:3},{value:"Installing a Proxy Server",id:"installing-a-proxy-server",level:2},{value:"Nginx",id:"nginx",level:3},{value:"Apache2",id:"apache2",level:3},{value:"Connecting to the Node",id:"connecting-to-the-node",level:2}],u={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The substrate node RPC server can be accessed over the websocket protocol, which can be used as a\nway to access the underlying network and/or validator node. By default you can access your node's\nRPC server from localhost (for example to rotate keys or do other maintenance). To access it from\nanother server or from an applications UI (such as ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),")\nit is recommended to enable access to the RPC node over an TLS connection and as such encrypting the\nconnection between the end user and the RPC server. This can be achieved by setting up a secure\nproxy. Many browsers such as Google Chrome will block non secure WS endpoints if they come from a\ndifferent origin."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Enabling remote access to your validator node should not be necessary and is not suggested\nas it can often lead to security problems ")),(0,r.kt)("h2",{id:"set-up-a-node"},"Set up a node"),(0,r.kt)("p",null,"Setting up any Substrate-based node relies on a similar process. For example, they will all by\ndefault share the same websocket connection at port 9944 on localhost. In this example, we'll set up\na polkadot sync node on a debian flavoured server (such as Ubuntu 22.04). Create a new server on\nyour provider of choice or locally at home. See ",(0,r.kt)("a",{parentName:"p",href:"./maintain-sync"},"Set up a Full Node")," for additional\ninstructions. You can choose to install from the default apt repository or build from scratch. The\nstartup options in the setup process provide a variety of different settings that can be modified."),(0,r.kt)("p",null,"A typically setting for an externally accessible polkadot archive RPC node would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"polkadot --chain polkadot --name myrpc --state-pruning archive --blocks-pruning archive --ws-max-connections 100 --rpc-cors all --rpc-methods Safe --ws-port 9944\n")),(0,r.kt)("p",null,"Or for a polkadot pruned RPC node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"polkadot --chain polkadot --name myrpc --state-pruning 1000 --blocks-pruning archive --ws-max-connections 100 --rpc-cors all --rpc-methods Safe --ws-port 9944\n")),(0,r.kt)("p",null,"The specified flag option are outlined in greater detail below."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive Node vs Pruned Node"),(0,r.kt)("p",null,"A pruned node only keeps a limited number of finalized blocks of the network and not its full\nhistory. Most frequently required actions can be completed with a pruned node, such as displaying\naccount balances, making transfers, setting up session keys, staking, etc. An archive node has the\nfull history (database) of the network and can be queried in all kind of ways, such as providing\nhistorical information regarding transfers, balance histories, and more advanced queries involving\npast events, etc."),(0,r.kt)("p",null,"An archive node requires a lot more diskspace. At the start of January 2023, polkadot disk usage was at 115 GB\nfor a pruned node and 765 GB for an archive node. This value will increase with time. For an archive\nnode you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node. ")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"The node startup settings allow you to choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose, ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections to expose\nand ",(0,r.kt)("strong",{parentName:"p"},"from where")," access should be granted through the rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example\n",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can\nchange this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe\nmode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h2",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,"A non secure ws port can be converted to a secure wss port by placing it behind an SSL enabled\nproxy. The SSL enabled apache2/nginx/other proxy server redirects requests to the internal rpc node.\nFor this you will need an SSL certificate. There are different strategies for obtaining a cert, such\nas using a service like letsencrypt or self signing."),(0,r.kt)("h3",{id:"obtaining-an-ssl-certificate"},"Obtaining an SSL Certificate"),(0,r.kt)("p",null,"One easy way to get a free SSL certificate can be achieved by following the LetsEncrypt instructions\n(",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal"},"nginx"),"/",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/instructions?ws=apache&os=ubuntufocal"},"apache"),").\nThis will auto-generate an SSL certificate and include it in your configuration."),(0,r.kt)("p",null,"Alternatively you can generate a self-signed certificate and rely on the raw IP address of your node\nwhen connecting to it. This is not preferable since you will have to whitelist the certificate to\naccess it from a browser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/selfsigned.key -out /etc/ssl/certs/selfsigned.crt\nsudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048\n")),(0,r.kt)("h2",{id:"installing-a-proxy-server"},"Installing a Proxy Server"),(0,r.kt)("p",null,"There are a lot of different implementations of a websocket proxy, some of the more widely used are\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," and ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/"},"apache2"),", for which configuration\nexamples provided below."),(0,r.kt)("h3",{id:"nginx"},"Nginx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install nginx\n")),(0,r.kt)("p",null,"In a SSL enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n  (...)\n  location / {\n    proxy_buffers 16 4k;\n    proxy_buffer_size 2k;\n    proxy_pass http://localhost:9944;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "Upgrade";\n    proxy_set_header Host $host;\n   }\n}\n')),(0,r.kt)("p",null,"Optionally some form of rate limiting can be introduced: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'http {\n  limit_req_zone  "$http_x_forwarded_for" zone=zone:10m rate=2r/s;\n  (...)\n}\n  \nlocation / {\n  limit_req zone=zone burst=5;\n  (...)\n}\n')),(0,r.kt)("h3",{id:"apache2"},"Apache2"),(0,r.kt)("p",null,"You can run it in different modes such as prefork, worker or event. In this example, we use\n",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," which works well on higher load\nenvironments but other modes are also useful given the requirements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides\n",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection\nis automatically upgraded to a websocket connection"),". In a SSL enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"(...)\nSSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Optionally some form of rate limiting can be introduced: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"# allows max 50 connections from a single ip address:\nQS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("h2",{id:"connecting-to-the-node"},"Connecting to the Node"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' and click the logo in the top left to switch the\nnode. Activate the "Development" toggle and input your node\'s address - either the domain or the IP\naddress. Remember to prefix with ',(0,r.kt)("inlineCode",{parentName:"p"},"wss://")," and if you're using the 443 port, append ",(0,r.kt)("inlineCode",{parentName:"p"},":443"),", like so:\n",(0,r.kt)("inlineCode",{parentName:"p"},"wss://example.com:443"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A sync-in-progress chain connected to Polkadot-JS UI",src:n(73669).Z,width:"2876",height:"1626"})),(0,r.kt)("p",null,"Now you have a secure remote connect setup for your Substrate node."))}h.isMDXComponent=!0},73669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maintain-wss-image-0fe72147f38d8b6766328dd834a517a6.png"}}]);
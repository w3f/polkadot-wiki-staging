"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80432:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",slug:"../maintain-wss"},l=void 0,c={unversionedId:"maintain/maintain-wss",id:"maintain/maintain-wss",title:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",source:"@site/../docs/maintain/maintain-wss.md",sourceDirName:"maintain",slug:"/maintain-wss",permalink:"/docs/maintain-wss",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-wss.md",tags:[],version:"current",lastUpdatedBy:"Harald Heckmann",lastUpdatedAt:1642745155,formattedLastUpdatedAt:"1/21/2022",frontMatter:{id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",slug:"../maintain-wss"},sidebar:"docs",previous:{title:"Networks",permalink:"/docs/maintain-networks"},next:{title:"Resolving Errors",permalink:"/docs/maintain-errors"}},p=[{value:"Set up a node",id:"set-up-a-node",children:[],level:2},{value:"Set up a certificate",id:"set-up-a-certificate",children:[{value:"Domain and Certbot",id:"domain-and-certbot",children:[],level:3},{value:"Self-signed",id:"self-signed",children:[],level:3}],level:2},{value:"Set up Nginx server",id:"set-up-nginx-server",children:[],level:2},{value:"Importing the Certificate",id:"importing-the-certificate",children:[],level:2},{value:"Connecting to the node",id:"connecting-to-the-node",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You might want to host a node on one server and then connect to it from a UI hosted on another, e.g.\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),". This will not be possible unless you set up a secure\nproxy for websocket connections. Let's see how we can set up WSS on a remote Substrate node."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: this should ",(0,i.kt)("strong",{parentName:"em"},"only")," be done for sync nodes used as back-end for some dapps or projects.\nNever open websockets to your validator node - there's no reason to do that and it can only lead to\nsecurity gaffes.")),(0,i.kt)("p",null,"In this guide we'll be using Ubuntu 18.04 hosted on a \\$10 DigitalOcean droplet. We'll assume you're\nusing a similar OS, and that you have nginx installed (if not, run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install nginx"),")."),(0,i.kt)("h2",{id:"set-up-a-node"},"Set up a node"),(0,i.kt)("p",null,"Whether it's a generic Substrate node, a Kusama node, or your own private blockchain, they all\ndefault to the same websocket connection: port 9944 on localhost. For this example, we'll set up a\nKusama sync node (non-validator)."),(0,i.kt)("p",null,"Create a new server on your provider of choice or locally at home (preferred). We'll assume you're\nusing Ubuntu 18.04. Then install Substrate and build the node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://getsubstrate.io -sSf | bash\ngit clone https://github.com/paritytech/polkadot kusama\ncd kusama\n./scripts/init.sh\ncargo build --release\n./target/release/polkadot --name "DigitalOcean 10 USD droplet ftw" --rpc-cors all\n')),(0,i.kt)("p",null,"This will start the syncing process with Kusama's mainnet."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: the ",(0,i.kt)("inlineCode",{parentName:"em"},"--rpc-cors")," mode needs to be set to all so that all external connections are allowed.")),(0,i.kt)("h2",{id:"set-up-a-certificate"},"Set up a certificate"),(0,i.kt)("p",null,"To get WSS (secure websocket), you need an SSL certificate. There are two possible approaches."),(0,i.kt)("h3",{id:"domain-and-certbot"},"Domain and Certbot"),(0,i.kt)("p",null,"The first approach is getting a dedicated domain, redirecting its nameservers to your IP address,\nsetting up an Nginx server for that domain, and finally\n",(0,i.kt)("a",{parentName:"p",href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic"},"following LetsEncrypt instructions"),"\nfor Nginx setup. This will auto-generate an SSL certificate and include it in your Nginx\nconfiguration. This will let you connect Polkadot-JS UI to a URL like mynode.mydomain.com rather\nthan 82.196.8.192:9944, which is arguably more user friendly."),(0,i.kt)("p",null,"This is simple to do on cloud hosting providers or if you have a static IP, but harder to pull off\nwhen running things from your home server."),(0,i.kt)("h3",{id:"self-signed"},"Self-signed"),(0,i.kt)("p",null,"The second approach and one we'll follow here is generating a self-signed certificate and relying on\nthe raw IP address of your node when connecting to it."),(0,i.kt)("p",null,"Generate a self-signed certificate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt\nsudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048\n")),(0,i.kt)("h2",{id:"set-up-nginx-server"},"Set up Nginx server"),(0,i.kt)("p",null,"Now it's time to tell Nginx to use these certificates. The server block below is all you need, but\nkeep in mind that you need to replace some placeholder values. Notably:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SERVER_ADDRESS")," should be replaced by your domain name if you have it, or your server's IP\naddress if not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CERT_LOCATION")," should be ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem")," if you used Certbot,\nor ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/ssl/certs/nginx-selfsigned.crt")," if self-signed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CERT_LOCATION_KEY")," should be ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/live/YOUR_DOMAIN/privkey.pem")," if you used Certbot,\nor ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/ssl/private/nginx-selfsigned.key")," if self-signed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CERT_DHPARAM")," should be ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/ssl-dhparams.pem")," if you used Certbot, and\n",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/ssl/certs/dhparam.pem")," if self-signed.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that if you used Certbot, it should have made the path insertions below for you if you\nfollowed the ",(0,i.kt)("a",{parentName:"em",href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntubionic"},"official instructions"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n\n        server_name SERVER_ADDRESS;\n\n        root /var/www/html;\n        index index.html;\n\n        location / {\n          try_files $uri $uri/ =404;\n\n          proxy_buffering off;\n          proxy_pass http://localhost:9944;\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header Host $host;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade $http_upgrade;\n          proxy_set_header Connection "upgrade";\n        }\n\n        listen [::]:443 ssl ipv6only=on;\n        listen 443 ssl;\n        ssl_certificate CERT_LOCATION;\n        ssl_certificate_key CERT_LOCATION_KEY;\n\n        ssl_session_cache shared:cache_nginx_SSL:1m;\n        ssl_session_timeout 1440m;\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers on;\n\n        ssl_ciphers "ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS";\n\n        ssl_dhparam CERT_DHPARAM;\n\n}\n')),(0,i.kt)("p",null,"Restart nginx after setting this up: ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo service nginx restart"),"."),(0,i.kt)("h2",{id:"importing-the-certificate"},"Importing the Certificate"),(0,i.kt)("p",null,"If you used the self-signed certificate approach, modern browsers will not let you connect to this\nwebsocket endpoint without that certificate being imported - they will emit an\n",(0,i.kt)("inlineCode",{parentName:"p"},"NET:ERR_CERT_AUTHORITY_INVALID")," message."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ERR_CERT_AUTHORITY_INVALID",src:n(70632).Z})),(0,i.kt)("p",null,"Every websocket connection bootstraps itself with ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," first, so to allow the certificate, visit\nthe IP of your machine in the browser prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"https"),", like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://MY_IP"),'. This should\nproduce a "Not private" warning which you can skip by going to "Advanced" and the clicking on\n"Proceed to Site". You have now whitelisted this IP and its self-signed certificate for connecting.'),(0,i.kt)("h2",{id:"connecting-to-the-node"},"Connecting to the node"),(0,i.kt)("p",null,"Open ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' and click the logo in the top left to switch the\nnode. Activate the "Development" toggle and input your node\'s address - either the domain or the IP\naddress. Remember to prefix with ',(0,i.kt)("inlineCode",{parentName:"p"},"wss://")," and if you're using the 443 port, append ",(0,i.kt)("inlineCode",{parentName:"p"},":443"),", like so:\n",(0,i.kt)("inlineCode",{parentName:"p"},"wss://example.com:443"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A sync-in-progress chain connected to Polkadot-JS UI",src:n(20961).Z})),(0,i.kt)("p",null,"Now you have a secure remote connect setup for your Substrate node."))}u.isMDXComponent=!0},20961:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/maintain-wss-image-0fe72147f38d8b6766328dd834a517a6.png"},70632:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,"}}]);
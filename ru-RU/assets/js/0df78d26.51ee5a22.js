(self.webpackChunk=self.webpackChunk||[]).push([[1723],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88620:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>p});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],s={id:"maintain-guides-secure-validator",title:"Secure Validator",sidebar_label:"Secure Validator"},l=void 0,u={unversionedId:"maintain/maintain-guides-secure-validator",id:"maintain/maintain-guides-secure-validator",isDocsHomePage:!1,title:"Secure Validator",description:"Validators in a Proof of Stake network are responsible for keeping the network in consensus and",source:"@site/../docs/maintain/maintain-guides-secure-validator.md",sourceDirName:"maintain",slug:"/maintain/maintain-guides-secure-validator",permalink:"/ru-RU/docs/maintain/maintain-guides-secure-validator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-secure-validator.md",version:"current",lastUpdatedBy:"ajc_",lastUpdatedAt:1628557538,formattedLastUpdatedAt:"10.08.2021",frontMatter:{id:"maintain-guides-secure-validator",title:"Secure Validator",sidebar_label:"Secure Validator"},sidebar:"docs",previous:{title:"Using systemd for the Validator Node",permalink:"/ru-RU/docs/maintain/maintain-guides-how-to-systemd"},next:{title:"How to use Polkadot Validator Setup",permalink:"/ru-RU/docs/maintain/maintain-guides-how-to-use-polkadot-validator-setup"}},d=[{value:"High Availability",id:"high-availability",children:[]},{value:"Key Management",id:"key-management",children:[{value:"Signing Outside the Client",id:"signing-outside-the-client",children:[]}]},{value:"Monitoring Tools",id:"monitoring-tools",children:[]},{value:"Linux Best Practices",id:"linux-best-practices",children:[]},{value:"Conclusions",id:"conclusions",children:[{value:"Validators",id:"validators",children:[]},{value:"Monitoring",id:"monitoring",children:[]}]},{value:"Resources",id:"resources",children:[]}],c={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Validators in a Proof of Stake network are responsible for keeping the network in consensus and\nverifying state transitions. As the number of validators is limited, validators in the set have the\nresponsibility to be online and faithfully execute their tasks."),(0,r.kt)("p",null,"This primarily means that validators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must be high availability."),(0,r.kt)("li",{parentName:"ul"},"Must have infrastructure that protects the validator's signing keys so that an attacker cannot\ntake control and commit slashable behavior.")),(0,r.kt)("h2",{id:"high-availability"},"High Availability"),(0,r.kt)("p",null,"High availability set-ups that involve redundant validator nodes may seem attractive at first.\nHowever, they can be ",(0,r.kt)("strong",{parentName:"p"},"very dangerous")," if they are not set up perfectly. The reason for this is\nthat the session keys used by a validator should always be isolated to just a single node.\nReplicating session keys across multiple nodes could lead to equivocation slashes or parachain\nvalidity slashes which can make you lose ",(0,r.kt)("strong",{parentName:"p"},"100% of your staked funds"),"."),(0,r.kt)("p",null,"The good news is that 100% uptime of your validator is not really needed, as it has some buffer\nwithin eras in order to go offline for a little while and upgrade. For this reason, we advise that\nyou only attempt a high availability set-up if ",(0,r.kt)("strong",{parentName:"p"},"you're confident you know exactly what you're\ndoing.")),(0,r.kt)("p",null,"Many expert validators have made mistakes in the past due to the handling of session keys."),(0,r.kt)("p",null,"Remember, even if your validator goes offline for some time, the offline slash is much more\nforgiving than the equivocation or parachain validity slashing."),(0,r.kt)("h2",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn/learn-keys"},"Polkadot Keys guide")," for more information on keys. The keys that are of\nprimary concern for validator infrastructure are the Session keys. These keys sign messages related\nto consensus and parachains. Although Session keys are ",(0,r.kt)("em",{parentName:"p"},"not")," account keys and therefore cannot\ntransfer funds, an attacker could use them to commit slashable behavior."),(0,r.kt)("p",null,"Session keys are generated inside the node via RPC call. See the\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/maintain/maintain-guides-how-to-validate-polkadot#set-session-keys"},"How to Validate guide")),(0,r.kt)("p",null,"for instructions on setting Session keys. These should be generated and kept within your client.\nWhen you generate new Session keys, you must submit an extrinsic (a Session certificate) from your\nController key telling the chain your new Session keys."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Session keys can also be generated outside the client and inserted into the client's\nkeystore via RPC. For most users, we recommend using the key generation functionality within the\nclient.")),(0,r.kt)("h3",{id:"signing-outside-the-client"},"Signing Outside the Client"),(0,r.kt)("p",null,"In the future, Polkadot will support signing payloads outside the client so that keys can be stored\non another device, e.g. a hardware security module (HSM) or secure enclave. For the time being,\nhowever, Session key signatures are performed within the client."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," HSMs are not a panacea. They do not incorporate any logic and will just sign and return\nwhatever payload they receive. Therefore, an attacker who gains access to your validator node\ncould still commit slashable behavior.")),(0,r.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-telemetry"},"Telemetry")," This tracks your node details\nincluding the version you are running, block height, CPU & memory usage, block propagation time,\netc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),"-based monitoring stack, including\n",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com"},"Grafana")," for dashboards and log aggregation. It includes alerting, querying,\nvisualization, and monitoring features and works for both cloud and on-premise systems. The data\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-telemetry")," can be made available to Prometheus through exporters like\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/substrate-telemetry-exporter"},"this"),"."))),(0,r.kt)("h2",{id:"linux-best-practices"},"Linux Best Practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Never use the root user."),(0,r.kt)("li",{parentName:"ul"},"Always update the security patches for your OS."),(0,r.kt)("li",{parentName:"ul"},"Enable and set up a firewall."),(0,r.kt)("li",{parentName:"ul"},"Never allow password-based SSH, only use key-based access."),(0,r.kt)("li",{parentName:"ul"},"Disable non-essential SSH subsystems (banner, motd, scp, X11 forwarding) and harden your SSH\nconfiguration\n(",(0,r.kt)("a",{parentName:"li",href:"https://stribika.github.io/2015/01/04/secure-secure-shell.html"},"reasonable guide to begin with"),")."),(0,r.kt)("li",{parentName:"ul"},"Back up your storage regularly.")),(0,r.kt)("h2",{id:"conclusions"},"Conclusions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the moment, Polkadot/Substrate can't interact with HSM/SGX, so we need to provide the signing\nkey seeds to the validator machine. This key is kept in memory for signing operations and\npersisted to disk (encrypted with a password).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Given that HA setups would always be at risk of double-signing and there's currently no built-in\nmechanism to prevent it, we propose having a single instance of the validator to avoid slashing.\nSlashing penalties for being offline are much less than those for equivocation."))),(0,r.kt)("h3",{id:"validators"},"Validators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validators should only run the Polkadot binary, and they should not listen on any port other than\nthe configured p2p port.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validators should run on bare-metal machines, as opposed to VMs. This will prevent some of the\navailability issues with cloud providers, along with potential attacks from other VMs on the same\nhardware. The provisioning of the validator machine should be automated and defined in code. This\ncode should be kept in private version control, reviewed, audited, and tested.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Session keys should be generated and provided in a secure way.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Polkadot should be started at boot and restarted if stopped for any reason (supervisor process).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Polkadot should run as a non-root user."))),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There should be an on-call rotation for managing the alerts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There should be a clear protocol with actions to perform for each level of each alert and an\nescalation policy."))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/figment-networks/full-disclosure-figments-cosmos-validator-infrastructure-3bc707283967"},"Figment Network's Full Disclosure of Cosmos Validator Infrastructure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kb.certus.one/"},"Certus One's Knowledge Base")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slowmist/eos-bp-nodes-security-checklist"},"EOS Block Producer Security List")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/loom-network/hsm-policies-and-the-importance-of-validator-security-ec8a4cc1b6f"},"HSM Policies and the Important of Validator Security"))))}p.isMDXComponent=!0}}]);
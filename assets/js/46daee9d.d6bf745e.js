"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={id:"learn-vault-guides",title:"Vault How-to Guides",sidebar_label:"Polkadot Vault",description:"Learn about the Polkadot Vault",keywords:["parity signer","signer","polkadot vault"],slug:"../learn-vault-guides"},d=void 0,p={unversionedId:"learn/learn-vault-guides",id:"learn/learn-vault-guides",title:"Vault How-to Guides",description:"Learn about the Polkadot Vault",source:"@site/../docs/learn/learn-vault-guides.md",sourceDirName:"learn",slug:"/learn-vault-guides",permalink:"/docs/learn-vault-guides",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-vault-guides.md",tags:[],version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1680004128,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"learn-vault-guides",title:"Vault How-to Guides",sidebar_label:"Polkadot Vault",description:"Learn about the Polkadot Vault",keywords:["parity signer","signer","polkadot vault"],slug:"../learn-vault-guides"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/learn-assets-guides"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},s={},u=[{value:"Chain Specification",id:"chain-specification",level:2},{value:"Chain Spec QR",id:"chain-spec-qr",level:3},{value:"Generating Signature",id:"generating-signature",level:3},{value:"Signing Chain Spec",id:"signing-chain-spec",level:3},{value:"Metadata Updates",id:"metadata-updates",level:2},{value:"Metadata QR Fountain",id:"metadata-qr-fountain",level:3},{value:"Generating Signature",id:"generating-signature-1",level:3},{value:"Signing Metadata",id:"signing-metadata",level:3},{value:"Add Chain &amp; Update Metadata",id:"add-chain--update-metadata",level:2},{value:"Metadata Portal",id:"metadata-portal",level:2},{value:"Modify <code>config</code> File",id:"modify-config-file",level:3},{value:"Rename Chain&#39;s Files",id:"rename-chains-files",level:3},{value:"Run Portal",id:"run-portal",level:3}],c={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"This page is for developers and power users only",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"By requesting the chain specification and metadata you trust the specific endpoint you are using\n(unless you are using you own node).")),(0,r.kt)("p",null,"The following guide bases on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer")," Github\npage (to create the Chain Spec QR code and the metadata QR code fountain) and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/metadata-portal"},"Metadata Portal")," Github page (to embed the Chain\nSpec and Metadata into a portal)."),(0,r.kt)("h2",{id:"chain-specification"},"Chain Specification"),(0,r.kt)("h3",{id:"chain-spec-qr"},"Chain Spec QR"),(0,r.kt)("p",null,"To add more chains on the Vault app you can follow the instructions\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/parity-signer/tutorials/Add-New-Network.html#add-network-specs"},"here"),".\nIn this example we will add the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-assets"},"Statemine")," system parachain. Briefly,\nfork the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer GitHub repository"),", start the\nterminal within the ",(0,r.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cargo run add-specs -d -u wss://statemine.api.onfinality.io/public-ws --encryption sr25519")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://statemine.api.onfinality.io/public-ws")," is the OnFinality RPC endpoint for Statemine.\nThis will create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_me_add_specs_statemine_sr25510")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/in_progress"),"\nfolder."),(0,r.kt)("h3",{id:"generating-signature"},"Generating Signature"),(0,r.kt)("p",null,"Start the terminal within the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder and type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'cat sign_me_add_specs_statemine_sr25519 | subkey sign --suri "YOUR SEED PHRASE"')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"')," is the seed phrase of the account that will be used to sign and\nauthenticate both the chain spec and later on the metadata. Running the code above will return a\nsignature similar to that below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0xc4ce72db959000b6166af96d3bda55a927fd837747bf1bf1ae8a69e57c9ef37c25a88707c47b105a9eb1fbcf9345680eff57eb978cf73919506f6c738834e78a")),(0,r.kt)("h3",{id:"signing-chain-spec"},"Signing Chain Spec"),(0,r.kt)("p",null,"Now, go back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cargo run --release make --goal qr --crypto sr25519 --msg add-specs --payload sign_me_add_specs_statemine_sr25519 --verifier-hex PUBLIC KEY --signature-hex SIGNATURE")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC KEY")," is the public key of the account with seed ",(0,r.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"'),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\nis the signature generated in the previous step. Running the code above will create the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/completed")," folder."),(0,r.kt)("h2",{id:"metadata-updates"},"Metadata Updates"),(0,r.kt)("p",null,"Similarly to what we did for the chain specification, we now generate and sign the statemine\nmetadata."),(0,r.kt)("h3",{id:"metadata-qr-fountain"},"Metadata QR Fountain"),(0,r.kt)("p",null,"To update the chain metadata for statemine on the Vault app you can follow the instructions\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/parity-signer/tutorials/Add-New-Network.html#add-network-metadata"},"here"),".\nBriefly, in the Parity Signer repository, start the terminal within the ",(0,r.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder\nand type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cargo run load-metadata -d -u wss://statemine.api.onfinality.io/public-ws")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://statemine.api.onfinality.io/public-ws")," is the OnFinality RPC endpoint for Statemine.\nThis will create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_me_load_metadata_statemineV9370")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/in_progress"),"\nfolder. Note that for future metadata updates the file name will change as the version at the time\nof writing was ",(0,r.kt)("inlineCode",{parentName:"p"},"V9370"),"."),(0,r.kt)("h3",{id:"generating-signature-1"},"Generating Signature"),(0,r.kt)("p",null,"Start the terminal within the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/in_progress")," folder and type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'cat sign_me_load_metadata_statemineV9370 | subkey sign --suri "YOUR SEED PHRASE"')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"')," is the seed phrase of the account you used to sign the chain\nspecification. Running the code above will return a signature similar to that below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0xde1ad7aeb252acb3cf42a522dcc8dc3f317a49be2ed636836dd6df8f7e47135f2c712480055822eba87e9ea5ac7d3bba96045992ae795856fdf4eea09a411f85")),(0,r.kt)("h3",{id:"signing-metadata"},"Signing Metadata"),(0,r.kt)("p",null,"Now, go back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/generate_message")," folder and type the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cargo run --release make --goal qr --crypto sr25519 --msg load-metadata --payload sign_me_load_metadata_statemineV9370 --verifier-hex PUBLIC KEY --signature-hex SIGNATURE")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC KEY")," is the public key of the account with seed ",(0,r.kt)("inlineCode",{parentName:"p"},'"YOUR SEED PHRASE"'),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\nis the signature generated in the previous step. Running the code above will create the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"files/completed")," folder."),(0,r.kt)("h2",{id:"add-chain--update-metadata"},"Add Chain & Update Metadata"),(0,r.kt)("p",null,"You can open ",(0,r.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," on your browser (just drag the file on an open tab). This\nis a .png file containing the QR code to add statemine chain specification into the Vault App. You\ncan do the same with the ",(0,r.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370"),". This is a .apng file containing the QR code\nfountain to do the metadata update for statemine."),(0,r.kt)("h2",{id:"metadata-portal"},"Metadata Portal"),(0,r.kt)("h3",{id:"modify-config-file"},"Modify ",(0,r.kt)("inlineCode",{parentName:"h3"},"config")," File"),(0,r.kt)("p",null,"Alternatively, you can add the chain specification QR code and the metadata QR code fountain in a\nmetadata portal. Briefly, fork the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/metadata-portal"},"Parity's Metadata Portal GitHub repository"),". You can\nmodify the following fields of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": your name / institution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key"),": the public key of the account you use to sign the chain spec and the metadata."),(0,r.kt)("li",{parentName:"ul"},"At the bottom of the file add the following information:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[[chains]]\nname = "statemine"\nrpc_endpoint = "wss://statemine.api.onfinality.io/public-ws"\ncolor = "#f27230"\n\n[chains.github_release]\nowner = "paritytech"\nrepo = "statemint"\ngenesis_hash = "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"\n')),(0,r.kt)("p",null,"For each additional chain, you need to add the respective information. Information about the genesis\nhash can be found on the Polkadot-JS UI > connect to the relevant chain > Developer > Chain State."),(0,r.kt)("h3",{id:"rename-chains-files"},"Rename Chain's Files"),(0,r.kt)("p",null,"Rename the signed chain specification and metadata files as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Chain specification: ",(0,r.kt)("inlineCode",{parentName:"p"},"add_specs_statemine-sr25519")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"statemine_specs.png"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Metadata updates: ",(0,r.kt)("inlineCode",{parentName:"p"},"load_metadata_statemineV9370"),"--\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"statemine_metadata_9370.apng")))),(0,r.kt)("p",null,"Thus, for chain specification the file must be renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"chainName_specs.png")," while for metadata\nthe file must be renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"chainName_metadata_version.apng")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"chainName")," is the name of the\nchain and ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," is the version of the metadata."),(0,r.kt)("p",null,"Add the renamed files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/qr folder")," within the Metadata Portal repository."),(0,r.kt)("h3",{id:"run-portal"},"Run Portal"),(0,r.kt)("p",null,"Open the terminal within the Metadata Portal repository and run ",(0,r.kt)("inlineCode",{parentName:"p"},"make updater"),". Then run\n",(0,r.kt)("inlineCode",{parentName:"p"},"make collector"),"; this will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"_latest.apng")," files for each of the chains (removed by the\ncommand ",(0,r.kt)("inlineCode",{parentName:"p"},"make cleaner"),"). Finally, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," to load the metadata portal on your localhost."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21039:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",sidebar_label:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",slug:"../maintain-guides-how-to-use-polkadot-validator-setup"},l="Polkadot Validator Setup",d={unversionedId:"maintain/maintain-guides-how-to-use-polkadot-validator-setup",id:"maintain/maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",source:"@site/../docs/maintain/maintain-guides-how-to-use-polkadot-validator-setup.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-use-polkadot-validator-setup",permalink:"/docs/maintain-guides-how-to-use-polkadot-validator-setup",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-use-polkadot-validator-setup.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649220166,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",sidebar_label:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",slug:"../maintain-guides-how-to-use-polkadot-validator-setup"},sidebar:"docs",previous:{title:"Secure Validator",permalink:"/docs/maintain-guides-secure-validator"},next:{title:"Set Up a Validator with NGINX Reverse Proxy",permalink:"/docs/maintain-guides-how-to-setup-a-validator-with-reverse-proxy"}},p=[{value:"Dependencies",id:"dependencies",children:[{value:"NodeJS",id:"nodejs",children:[],level:3},{value:"Yarn",id:"yarn",children:[],level:3},{value:"Terraform",id:"terraform",children:[],level:3},{value:"Ansible",id:"ansible",children:[],level:3}],level:2},{value:"Deployment",id:"deployment",children:[{value:"Step One: Clone the repository",id:"step-one-clone-the-repository",children:[],level:3},{value:"Step Two: Generate the SSH keys",id:"step-two-generate-the-ssh-keys",children:[],level:3},{value:"Configuration",id:"configuration",children:[{value:"Getting the authorization keys",id:"getting-the-authorization-keys",children:[{value:"Log in to the Google Cloud console",id:"log-in-to-the-google-cloud-console",children:[],level:5}],level:4},{value:"Configuration Options",id:"configuration-options",children:[],level:4}],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polkadot-validator-setup"},"Polkadot Validator Setup"),(0,i.kt)("p",null,"The following guide will walk you through using Web3 Foundation's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup"},"polkadot validator setup")," to\noffer a potential setup for your validator that aims to prevent some types of potential attacks\nat the TCP layer and layers below. This will work for Polkadot and Kusama out of the box, and,\nif you're using another Substrate-based chain, it should work with some tweaks."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"This setup should not be assumed to include the best security practices")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is up to you to add additional security hardening."),(0,i.kt)("p",{parentName:"div"},"Also, the current version of polkadot validator setup doesn't allow for the creation\nand configuration of sentry nodes."),(0,i.kt)("p",{parentName:"div"},"There are two ways that the setup can be configured:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Platform & Application Layer")," which allows for configuring the credentials for\ninfrastructure providers, then executes the Terraform process to automatically deploy\nthe required machines (Platform Layer) and setup the Application Layer. This configuration\nuses ",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," for defining and managing your infrastructure.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application Layer")," which allows for setting up Debian-based machines, where you only\nneed basic SSH access and configure those in an inventory. The Ansible scripts will setup\nthe entire Application Layer. This configuration uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.ansible.com/"},"Ansible"),"\nas an automation tool for setting up the VPN, Firewall, and the validator node. It supports\na few different cloud providers such as AWS, Microsoft Azure, GCP, and Packet."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Please file an ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/w3f/polkadot-validator-setup/issues"},"issue")," if you would like to make a feature request or report a bug for this setup")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"The initial step is to install the software dependencies for running the validator setup scripts. We\nwill need to acquire NodeJS, Yarn, Terraform, and Ansible. Usually, these are readily available using\nyour operating system's package manager. Instructions may vary depending on which system you are on;\nthe instructions below demonstrate the commands for a user of a ",(0,i.kt)("em",{parentName:"p"},"Debian")," or ",(0,i.kt)("em",{parentName:"p"},"Ubuntu-based")," system."),(0,i.kt)("h3",{id:"nodejs"},"NodeJS"),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," as a tool to manage different NodeJS versions across projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install curl\ncurl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install nodejs\nnode -v  (Check your node version)\n")),(0,i.kt)("h3",{id:"yarn"},"Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt update\nsudo apt install yarn\n')),(0,i.kt)("h3",{id:"terraform"},"Terraform"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install unzip\nwget https://releases.hashicorp.com/terraform/1.1.7/terraform_1.1.7_linux_amd64.zip\nunzip terraform_1.1.7_linux_amd64.zip\nsudo mv terraform /usr/local/bin/\nterraform --version  (Check whether it is configured properly)\n")),(0,i.kt)("h3",{id:"ansible"},"Ansible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-add-repository ppa:ansible/ansible\nsudo apt-get update\nsudo apt-get install ansible -y\nsudo apt-get install python -y\n")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("h3",{id:"step-one-clone-the-repository"},"Step One: Clone the repository"),(0,i.kt)("p",null,"The first step is to clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," guide locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ git clone https://github.com/w3f/polkadot-validator-setup.git\n")),(0,i.kt)("p",null,"Now you can ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," directory and start to change the\nconfigurations to match your custom deployment. However, before we start tweaking those, let's start\nby creating two new SSH keys that we (or rather, the Ansible playbooks) will use to access the\nmachines."),(0,i.kt)("h3",{id:"step-two-generate-the-ssh-keys"},"Step Two: Generate the SSH keys"),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_Shell"},"SSH"),", a remote shell tool, to access our validator. You will\nfirst use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command to generate a key for your validator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ ssh-keygen -m pem -f id_rsa_validator\n$ ssh-keygen -m pem -f id_rsa_public\n")),(0,i.kt)("p",null,"Be sure to add these keys to your SSH agent. First make sure your SSH agent is evaluated, then add\nthe keys to them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ eval $(ssh-agent)\n$ ssh-add id_rsa_validator\n$ ssh-add id_rsa_public\n")),(0,i.kt)("p",null,"For this tutorial we will not set a passphrase for the SSH key, although usually that would be\nrecommended."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"After you have installed all the required software and made your ssh keys, you can start to\nconfigure your infrastructure deployment by following the instructions. Start by cloning the\n",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," repository locally, and installing the package dependencies. Then\ncustomize the configuration how you want it."),(0,i.kt)("p",null,"First run yarn to install the NodeJS dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ yarn\n")),(0,i.kt)("p",null,"Now you can copy the configuration sample and start to customize it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ cp config/main.sample.json config/main.json\n# now you should customize config/main.json\n")),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"publicNodes"),", specify which cloud provider you want to use, the type of\nmachine specification, the number of validators you are going to deploy, the machine location, and\nthe user to use for SSH."),(0,i.kt)("h4",{id:"getting-the-authorization-keys"},"Getting the authorization keys"),(0,i.kt)("p",null,"The validator setup supports Google Cloud, AWS, Microsoft Azure, and Packet. For this\ntutorial we will be using Google Cloud."),(0,i.kt)("h5",{id:"log-in-to-the-google-cloud-console"},"Log in to the Google Cloud console"),(0,i.kt)("p",null,"You will need to log in to the google cloud console in order to access your authorization keys."),(0,i.kt)("p",null,"In the IAM&Admin panel you will navigate to service accounts. Download JSON for service account key."),(0,i.kt)("p",null,"Make sure to also auth into your account like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ gcloud auth login\n")),(0,i.kt)("p",null,"And don't forget to enable the compute engine!"),(0,i.kt)("h4",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("p",null,"The other options can be mostly self explanatory. Here's some tips on what they are and how you can\nuse them:"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalFlags")," option, configure any of the additional flags you want to run for your\nvalidator. If you want to run with a specific name, this is where you would enter it."),(0,i.kt)("p",null,"Under the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadotBinary.url")," field you can provide the release that is hosted in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot/releases"},"W3F\nrepository")," or use an alternate one that you build and publish yourself."),(0,i.kt)("p",null,"By enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeExporter"),", Ansible will install and configure the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node_exporter"),", which will\nexpose hardware-level metrics of your node in a format compatible with Prometheus."),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"machineType:")," will configure the machine's hardware specifications, check\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types"},"here")," for the configuration options for GCP. The other hosting providers should\nhave similar pages in their documentation."),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," the option are ",(0,i.kt)("inlineCode",{parentName:"p"},"gcp")," (Google Cloud Provider), ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," (AWS), ",(0,i.kt)("inlineCode",{parentName:"p"},"azure")," (Microsoft\nAzure) and ",(0,i.kt)("inlineCode",{parentName:"p"},"packet")," for Packet."),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," is the number of instances you would like to create."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zone")," fields are for the location of the machine, for GCP check\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones/"},"here"),", other cloud providers will have similar documentation."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"telemetryUrl")," field will send your node's information to a specific telemetry server. You could\nsend all your nodes' data (e.g. IP address) to the public endpoint, but it is highly recommended\nthat that you set up your own telemetry server to protect your validator\u2019s data from being exposed\nto the public. If you want to do that, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-telemetry"},"substrate telemetry source"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you decided to send your node\u2019s information to public telemetry, the name for your\nvalidator and public node that is displayed on the telemetry would look something like\n",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME-sv-public-0")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME-sv-validator-0"),"."))),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId")," to be the name of the project you want to use in GCP."),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"sshUser")," to be the user that manages your machine."),(0,i.kt)("p",null,"For different cloud providers, you need to set the corresponding credentials as environment\nvariables, for example, on GCP you only need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS"),". This variable\nis the path to the JSON file containing the credentials of the service account you wish to use; this\nservice account needs to have write access to compute and network resources if you use GCP. For\nothers, you can check that by referring to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup#prerequisites"},"README"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Environment variables for Ansible")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Besides that, you need two additional environment variables that will allow Ansible to connect to\nthe created machines. These values of these variables will be the keys that you generated at the\nbeginning of the guide."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH_ID_RSA_PUBLIC")," - Path to private SSH key you want to use for the public nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH_ID_RSA_VALIDATOR")," - Path to private SSH key you want to use for the validator")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will need to configure the Compute Engine API and enable billing on your GCP accounts\nto properly run these scripts."))),(0,i.kt)("p",null,"After everything is configured properly, you can start to run the deployment with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ scripts/deploy.sh\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Certain steps of the process may hang, however the scripts are idempotent so you simply need\nto re-run them and when the deployment and configuration is completed, you should see some output\nthat looks like what\'s below. You are able to find the validator\u2019s session keys by searching for\n"show rotateKeys output".'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TASK [polkadot-validator-session-info : retrieve session info] *****************\n\nok: [34.80.70.172]\n\n\nPLAY RECAP *********************************************************************\n\n34.80.224.231              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\n34.80.70.172               : ok=49   changed=1    unreachable=0    failed=0    skipped=14   rescued=0    ignored=0\n\n35.189.183.66              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\nDone\nDone in 131.85s.\n")),(0,i.kt)("p",null,"Also you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"sshUser")," to access one of the created instances that shows above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'TASK [polkadot-validator : show rotateKeys output] *****************************\n\nok: [34.80.70.172] => {\n    "rotate_keys": {\n        "changed": false,\n        "connection": "close",\n        "content_length": "295",\n        "content_type": "application/json; charset=utf-8",\n        "cookies": {},\n        "cookies_string": "",\n        "date": "Sun, 24 Nov 2019 12:13:42 GMT",\n        "elapsed": 0,\n        "failed": false,\n        "json": {\n            "id": 1,\n            "jsonrpc": "2.0",\n            "result": "0xf126b68841f51988b37780fa5b224b2aa86888a8d3962a63595dbc4d85baac2dee7c9900c8ddfad1991a8884e58273f06d5c1dbfc3dc6000c037185ccead9d692a3b3396cdd7e2def520682d65ad7e8ca234fb17630b428752e6150462998b4362a2b7e201657c8084ae8215bd142458ccd69506d08b18925dc897fb95f54249"\n        },\n        "msg": "OK (295 bytes)",\n        "redirected": false,\n        "status": 200,\n        "url": "http://localhost:9933"\n    }\n}\n')),(0,i.kt)("p",null,'The result "0xf126b68841f5\u2026..95f54249" is your session key. Set this to your controller account in\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Polkadot-JS Apps"),"."),(0,i.kt)("p",null,"After accessing one of the machines through SSH, you can keep track of the node\u2019s status by running\n",(0,i.kt)("inlineCode",{parentName:"p"},"journalctl --follow -u polkadot"),", which will show the latest synced block information."),(0,i.kt)("p",null,"Every time you change something in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.json"),", you can simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/deploy.sh")," to update\nit."),(0,i.kt)("p",null,"Congratulations! You have successfully deployed a secure validator. Free feel to open an issue if\nyou have any suggestions."))}c.isMDXComponent=!0}}]);
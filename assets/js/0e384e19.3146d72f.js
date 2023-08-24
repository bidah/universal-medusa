"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(8427),r=(n(2784),n(876));const o={sidebar_position:1,slug:"/"},i="Universal ecommerce development",s={unversionedId:"intro",id:"intro",title:"Universal ecommerce development",description:"Build cross platforms e com apps with Medusa.js that gets you the best of web and native mobile using Next.js and Expo.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/universal-medusa/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Headless ecommerce",permalink:"/universal-medusa/docs/category/headless-ecommerce"}},l={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Start projects (mobile, web and Medusa.js backend)",id:"start-projects-mobile-web-and-medusajs-backend",level:2},{value:"Run Expo client",id:"run-expo-client",level:3},{value:"Install the latest EAS CLI",id:"install-the-latest-eas-cli",level:4},{value:"Login to your expo account",id:"login-to-your-expo-account",level:4},{value:"Configure project for eas builds",id:"configure-project-for-eas-builds",level:4},{value:"Run Next.js web app",id:"run-nextjs-web-app",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"universal-ecommerce-development"},"Universal ecommerce development"),(0,r.kt)("p",null,"Build cross platforms e com apps with ",(0,r.kt)("a",{parentName:"p",href:"http://medusajs.com"},"Medusa.js")," that gets you the best of web and native mobile using ",(0,r.kt)("a",{parentName:"p",href:"http://nextjs.org"},"Next.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://expo.dev"},"Expo"),"."),(0,r.kt)("p",null,"You get a development setup with shared screens, components,tailwind styles using ",(0,r.kt)("a",{parentName:"p",href:"https://nativewind.dev"},"Nativewind"),", unified navigation with ",(0,r.kt)("a",{parentName:"p",href:"https://solito.dev"},"Solito")," and ",(0,r.kt)("a",{parentName:"p",href:"https://expo.github.io/router/docs/"},"Expo Router"),". "),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"When developing robust ecommerce your app product tend to ship slower and slower when it grows in functionality and team size. That's always the case on a thriving project. With that in mind Universal medusa empowers what Medusa.js already gives you. More dev tooling to power up your ecom development with easy and sacability in mind."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Get started by running the following to create a new project with a starter kit that consists of a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"base monorepo structure ready to go."),(0,r.kt)("li",{parentName:"ul"},"base medusa frontend starter (port of medusa.js next.js starter)"),(0,r.kt)("li",{parentName:"ul"},"base medusa backend starter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-universal-medusa-app my-app\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The starter is a port of Medusa.js Next.js starter. So you get all the same features out of the box.\nYou get a Expo, Next and default medusa backend in a monorepo")),(0,r.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,r.kt)("h2",{id:"start-projects-mobile-web-and-medusajs-backend"},"Start projects (mobile, web and Medusa.js backend)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," already ran with the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-universal-medusa-app")," command")),(0,r.kt)("h3",{id:"run-expo-client"},"Run Expo client"),(0,r.kt)("h4",{id:"install-the-latest-eas-cli"},"Install the latest EAS CLI"),(0,r.kt)("p",null,"EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g eas-cli\n")),(0,r.kt)("h4",{id:"login-to-your-expo-account"},"Login to your expo account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eas login\n")),(0,r.kt)("h4",{id:"configure-project-for-eas-builds"},"Configure project for eas builds"),(0,r.kt)("p",null,"Create your dev client to be run on your simulator"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need to rerun build whenever you add native dependencies to your ",(0,r.kt)("inlineCode",{parentName:"p"},"expo")," project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eas build --profile development-simulator --platform ios\n")),(0,r.kt)("p",null,"then start your dev client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn native\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"run-nextjs-web-app"},"Run Next.js web app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn web\n")),(0,r.kt)("p",null,"Run the medusa backend"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need to have a local postgres database already created and running")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# first time only you need to seed db\nyarn medusa:seed\n\n# then start the backend\nyarn medusa\n")))}c.isMDXComponent=!0}}]);
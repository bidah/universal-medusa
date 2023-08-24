"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[712],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=n(8427),a=(n(2784),n(876));const r={sidebar_position:3},o="Universal Links",p={unversionedId:"navigation/deep-links",id:"navigation/deep-links",title:"Universal Links",description:"Universal links allow iOS apps to handle links to specific web pages by redirecting the user to the corresponding location within the app. This provides a seamless user experience and helps to bridge the gap between web and app content.",source:"@site/docs/navigation/deep-links.md",sourceDirName:"navigation",slug:"/navigation/deep-links",permalink:"/universal-medusa/navigation/deep-links",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/navigation/deep-links.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Linking",permalink:"/universal-medusa/navigation/linking"},next:{title:"Discoverability",permalink:"/universal-medusa/category/discoverability"}},s={},l=[{value:"Testing deep links",id:"testing-deep-links",level:2},{value:"On simulator",id:"on-simulator",level:3},{value:"On phisical device",id:"on-phisical-device",level:3},{value:"Setup for production",id:"setup-for-production",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"universal-links"},"Universal Links"),(0,a.kt)("p",null,"Universal links allow iOS apps to handle links to specific web pages by redirecting the user to the corresponding location within the app. This provides a seamless user experience and helps to bridge the gap between web and app content."),(0,a.kt)("p",null,"You get out of the box: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Auto deep links: the automatic setup and handling of all in-app links, using a custom scheme, i.e. acme://")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Auto universal links: auto deep links and web routing, such that any configuration in the apple-app-site-association is always handled. All possible web traffic can be sent to the native app and handled as expected."))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You need to ",(0,a.kt)("strong",{parentName:"p"},"have matching routes")," between Expo ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and the Next ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," directory for deep links to work.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/expo/app.json"',title:'"apps/expo/app.json"'},'{\n  "expo": {\n    "scheme": "universal-medusa-scheme"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"scheme"),": URL scheme to link into your app. Defaults to 'universal-medusa-scheme' but you can change it as you see fit. If we set this to 'demo', then demo:// URLs would open your app when tapped.")," Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/config/app/#scheme"},"Expo docs")),(0,a.kt)("h2",{id:"testing-deep-links"},"Testing deep links"),(0,a.kt)("h3",{id:"on-simulator"},"On simulator"),(0,a.kt)("p",null,"On native, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uri-scheme"},(0,a.kt)("inlineCode",{parentName:"a"},"uri-scheme"))," CLI to test opening native links on a device."),(0,a.kt)("p",null,"For example, if you want to launch the Expo Go app on iOS to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/form-sheet")," route, you can run:"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You will need to use the correct address and port that's printed when you run expo start. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.87.39:19000")," with the IP address shown when running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx expo start"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx uri-scheme open exp://192.168.87.39:19000/--/product/medusa-tshirt --ios\n")),(0,a.kt)("h3",{id:"on-phisical-device"},"On phisical device"),(0,a.kt)("p",null,"Search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more on ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/deep-linking/#testing-deep-links"},"React navigation testing deep link documentation")),(0,a.kt)("h2",{id:"setup-for-production"},"Setup for production"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://expo.github.io/router/docs/features/linking"},"Expo-router universal links documentation")," and ",(0,a.kt)("a",{parentName:"p",href:"https://solito.dev/recipes/deep-linking"},"Solito deep link documentation")," for further details"))}d.isMDXComponent=!0}}]);
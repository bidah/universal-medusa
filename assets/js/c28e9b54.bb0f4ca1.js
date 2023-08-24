"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[638],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8427),a=(n(2784),n(876));const i={sidebar_position:4},o="Design System",s={unversionedId:"Styling/design-system",id:"Styling/design-system",title:"Design System",description:"The base design system primitives are available at packages/app/design.",source:"@site/docs/Styling/design-system.md",sourceDirName:"Styling",slug:"/Styling/design-system",permalink:"/universal-medusa/docs/Styling/design-system",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Styling/design-system.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Breakpoints",permalink:"/universal-medusa/docs/Styling/breakpoints"},next:{title:"Navigation",permalink:"/universal-medusa/docs/category/navigation"}},l={},p=[{value:"Extend",id:"extend",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design-system"},"Design System"),(0,a.kt)("p",null,"The base design system primitives are available at ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app/design"),"."),(0,a.kt)("p",null,"You have 5 categories available. Each with one or more components within which you will use to build your UI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"image.tsx"),(0,a.kt)("li",{parentName:"ul"},"layout.tsx"),(0,a.kt)("li",{parentName:"ul"},"pressable.tsx"),(0,a.kt)("li",{parentName:"ul"},"svg.tsx"),(0,a.kt)("li",{parentName:"ul"},"typography.tsx"),(0,a.kt)("li",{parentName:"ul"},"view.tsx")),(0,a.kt)("h3",{id:"extend"},"Extend"),(0,a.kt)("p",null,"You can build on top of current primitives. All components are written using the Nativewind ",(0,a.kt)("inlineCode",{parentName:"p"},"styled()")," higher-order component."),(0,a.kt)("p",null,"Pickup one of the categories to extend or create a new one. You can start building new UI primitives like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// packages/app/design/typography\nimport { Text } from 'react-native'\nimport { styled } from 'nativewind'\n\nexport const DarkText = styled(Text, 'text-base text-black my-4')\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Notice that you can set base styles using the second argument of ",(0,a.kt)("inlineCode",{parentName:"em"},"styled"),".")),(0,a.kt)("p",null,"You can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop, just like regular Tailwind CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<DarkText className="px-10"></Darktext>\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're reading the NativeWind docs, you might find that you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," directly without using ",(0,a.kt)("inlineCode",{parentName:"p"},"styled"),". Since this requires the Babel plugin for all platforms, it won't work with Universal Muedusa and the Solito structure its build on top. Be sure to always wrap your components with ",(0,a.kt)("inlineCode",{parentName:"p"},"styled"),".")))}m.isMDXComponent=!0}}]);
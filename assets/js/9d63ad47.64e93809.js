"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[179],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8427),a=(n(2784),n(876));const i={sidebar_position:4},o="Breakpoints",s={unversionedId:"Styling/breakpoints",id:"Styling/breakpoints",title:"Breakpoints",description:"Breakpoints are configured to be used when styling with NativeWind and when creating layouts with Stacks. The name of each breakpoint can be used interchangeably with both libraries.",source:"@site/docs/Styling/breakpoints.md",sourceDirName:"Styling",slug:"/Styling/breakpoints",permalink:"/universal-medusa/docs/Styling/breakpoints",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Styling/breakpoints.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Layouts",permalink:"/universal-medusa/docs/Styling/layouts"},next:{title:"Design System",permalink:"/universal-medusa/docs/Styling/design-system"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"breakpoints"},"Breakpoints"),(0,a.kt)("p",null,"Breakpoints are configured to be used when styling with NativeWind and when creating layouts with Stacks. The name of each breakpoint can be used interchangeably with both libraries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/app/design/tailwind/theme.js"',title:'"packages/app/design/tailwind/theme.js"'},"const breakPointsInPx = {\n'2xsmall': '320px',\nxsmall: '512px',\nsmall: '1024px',\nmedium: '1280px',\nlarge: '1440px',\nxlarge: '1680px',\n'2xlarge': '1920px',\n}\n")),(0,a.kt)("p",null,"For example you could setup a layout picking up the ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")," breakpoint with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Columns")," component of Stacks library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Columns space={1} collapseBelow="medium">\n    <Column>\n    \u2026\n    </Column>\n    <Column>\n    \u2026\n    </Column>\n</Columns>\n')),(0,a.kt)("p",null,"Or when styling within the className prop in Nativewind."),(0,a.kt)("p",null,"Here a snippet from the codebase using ",(0,a.kt)("inlineCode",{parentName:"p"},"small")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"medium"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<View className="small:justify-end small:items-start medium:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center text-center">\n    <Text >\n        SUMMER styles are finally here\n    </Text>\n    <Text className="small:text-left mb-6 max-w-[32rem] text-white shadow-black drop-shadow-md">\n        This year, our new summer collection will shelter you from the harsh\n        elements of a world that doesn&apos;t care if you live or die.\n    </Text>\n</View>\n')),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Please refer to the breakpoints documentation on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mobily.github.io/stacks/docs/getting-started/breakpoints"},"Stacks library website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/responsive-design"},"Tailwind.js website"))))}m.isMDXComponent=!0}}]);
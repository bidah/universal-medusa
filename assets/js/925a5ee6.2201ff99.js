"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[398],{876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(8427),a=(r(2784),r(876));const o={sidebar_position:4},i="SEO",s={unversionedId:"navigation/discoverability/SEO",id:"navigation/discoverability/SEO",title:"SEO",description:"Default Setup",source:"@site/docs/navigation/discoverability/SEO.md",sourceDirName:"navigation/discoverability",slug:"/navigation/discoverability/SEO",permalink:"/universal-medusa/docs/navigation/discoverability/SEO",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/navigation/discoverability/SEO.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Discoverability",permalink:"/universal-medusa/docs/category/discoverability"},next:{title:"App Clips",permalink:"/universal-medusa/docs/navigation/discoverability/app-clips"}},c={},p=[{value:"Default Setup",id:"default-setup",level:2},{value:"Extend Usage",id:"extend-usage",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seo"},"SEO"),(0,a.kt)("h2",{id:"default-setup"},"Default Setup"),(0,a.kt)("p",null,"We pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"seo")," object from ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/products/[handle].tsx")," to enable SEO discoverability on all products."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=pages/products/[handle].tsx",title:"pages/products/[handle].tsx"},'\nimport {fetchProduct} from "app/lib/hooks/use-product";\n\nexport default ProductScreen\n\nexport const getStaticProps = async ({ params }) => {\n    const product = await fetchProduct(params.slug)\n    return {\n        props: {\n            // this will get passed to pageProps\n            seo: { title: product.title, description: product.description },\n        },\n        revalidate: 1,\n    }\n}\n')),(0,a.kt)("h2",{id:"extend-usage"},"Extend Usage"),(0,a.kt)("p",null,"To extend setup please refer to the documentation on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/garmeeh/next-seo#readme"},"Next-seo repo")))}d.isMDXComponent=!0}}]);
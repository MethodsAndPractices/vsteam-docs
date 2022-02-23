"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[2900],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2636:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={title:"Introduction",hide_title:!1,keywords:["VSTeam","Team Services","VSTS","TFS","VSO","DevOps","Azure DevOps"]},i=void 0,u={unversionedId:"modules/vsteam/index",id:"modules/vsteam/index",title:"Introduction",description:"VSTeam is a PowerShell module with commands for accessing your Azure DevOps Server (previously named Visual Studio Team Foundation Server) 2017/2018 and Azure DevOps (previously named Visual Studio Team Services).",source:"@site/docs/modules/vsteam/index.md",sourceDirName:"modules/vsteam",slug:"/modules/vsteam/",permalink:"/vsteam-docs/docs/modules/vsteam/",tags:[],version:"current",frontMatter:{title:"Introduction",hide_title:!1,keywords:["VSTeam","Team Services","VSTS","TFS","VSO","DevOps","Azure DevOps"]},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/vsteam-docs/docs/quickstart-scripts/"},next:{title:"Build with Docker",permalink:"/vsteam-docs/docs/modules/vsteam/build-with-docker"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Module Dependencies",id:"module-dependencies",children:[],level:2},{value:"About files",id:"about-files",children:[],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VSTeam is a PowerShell module with commands for accessing your ",(0,a.kt)("a",{parentName:"p",href:"https://cda.ms/Bf"},"Azure DevOps Server (previously named Visual Studio Team Foundation Server) 2017/2018")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cda.ms/Bf"},"Azure DevOps (previously named Visual Studio Team Services)"),"."),(0,a.kt)("p",null,"The VSTeam module is also a provider allowing users to navigate their ",(0,a.kt)("a",{parentName:"p",href:"https://cda.ms/Bf"},"Azure DevOps Server")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cda.ms/Bf"},"Azure DevOps")," as a file system."),(0,a.kt)("p",null,"To get started you can visit this blog ",(0,a.kt)("a",{parentName:"p",href:"http://www.donovanbrown.com/post/PowerShell-I-would-like-you-to-meet-TFS-and-VSTS"},"PowerShell I would like you to meet TFS and VSTS")),(0,a.kt)("p",null,"Documentation of the cmdlets can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/vsteam-docs/docs/modules/vsteam/commands/"},"Commands Section")," or using ",(0,a.kt)("inlineCode",{parentName:"p"},"Get-Help VSTeam")," once the module is installed."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows PowerShell 5.0 or newer."),(0,a.kt)("li",{parentName:"ul"},"PowerShell Core.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install this module from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.powershellgallery.com/packages/VSTeam"},"PowerShell Gallery")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name VSTeam -Scope CurrentUser\n")),(0,a.kt)("h2",{id:"module-dependencies"},"Module Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.powershellgallery.com/packages/SHiPS/"},"SHiPS module")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.powershellgallery.com/packages/Trackyon.Utils"},"Trackyon.Utils module"))),(0,a.kt)("h2",{id:"about-files"},"About files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam.help"},"VSTeam")),(0,a.kt)("p",null,"Learn about the goals of VSTeam."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam_profiles.help"},"Profiles")),(0,a.kt)("p",null,"Profiles allow you to store your account information for easy switching of accounts."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam_provider.help"},"Provider")),(0,a.kt)("p",null,"The provider allows you to navigate your TFS or AzD as a file system."))}p.isMDXComponent=!0}}]);
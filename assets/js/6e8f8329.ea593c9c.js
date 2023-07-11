"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[8663],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7303:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"build-with-docker",title:"Build with Docker"},s=void 0,u={unversionedId:"modules/vsteam/build-with-docker",id:"modules/vsteam/build-with-docker",title:"Build with Docker",description:"Run Unit Tests Locally with Docker",source:"@site/docs/modules/vsteam/build-with-docker.md",sourceDirName:"modules/vsteam",slug:"/modules/vsteam/build-with-docker",permalink:"/vsteam-docs/docs/modules/vsteam/build-with-docker",tags:[],version:"current",frontMatter:{id:"build-with-docker",title:"Build with Docker"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/vsteam-docs/docs/modules/vsteam/"},next:{title:"Contribute",permalink:"/vsteam-docs/docs/modules/vsteam/contribute"}},d=[{value:"Run Unit Tests Locally with Docker",id:"run-unit-tests-locally-with-docker",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to Run",id:"how-to-run",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"run-unit-tests-locally-with-docker"},"Run Unit Tests Locally with Docker"),(0,i.kt)("p",null,"When helping us to develop this module or when we want to expand the module. We always write unit tests. The problem with that is, that most of the time everybody is using their own machine with different version of OS or different versions of dependencies."),(0,i.kt)("p",null,"This is why we created docker files for windows and linux. Currently we have prepared to run the unit tests in"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux - PowerShell Core 7"),(0,i.kt)("li",{parentName:"ul"},"Windows server core - PowerShell 5"),(0,i.kt)("li",{parentName:"ul"},"Windows server core - PowerShell Core 7")),(0,i.kt)("p",null,"In best case you should only need to run the PowerShell script below. The docker files being used for this have only the needed PowerShell modules installed. So theoretically you could also develop in these containers with ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/?wt.mc_id=DX_841432&WT.mc_id=github-github-dbrown"},"Visual Studio Code")," and ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/remote-overview?WT.mc_id=github-github-dbrown"},"remote development"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is still in testing and was developed on a windows machine. Therefore,  the script to run all tests for you works for that OS. But it is intended to work also for linux. But this comes a bit later."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"depending on your OS you need to install Docker Desktop or only Server"))),(0,i.kt)("li",{parentName:"ul"},"Windows based OS if you want to run Windows containers"),(0,i.kt)("li",{parentName:"ul"},"optional: ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/wsl#_installation?WT.mc_id=github-github-dbrown#update-to-wsl-2"},"Install WSL"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if you even ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl/install-win10?WT.mc_id=github-github-dbrown#update-to-wsl-2"},"use WSL2")," then container switch and run with much more performance!")))),(0,i.kt)("p",null,"Also be aware that we cannot know all prerequisites as there often many different dependencies for different host OS systems."),(0,i.kt)("h2",{id:"how-to-run"},"How to Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install Docker: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install"},"https://docs.docker.com/engine/install")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("a",{parentName:"li",href:"Run-ContainerTests.ps1"},"https://github.com/MethodsAndPractices/vsteam/blob/master/tools/docker/Run-ContainerTests.ps1")," located under ./tools/docker")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"#Example\nRun-ContainerTests.ps1\n")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows containers only work with windows based systems."),(0,i.kt)("li",{parentName:"ul"},"If you want to use the container to develop with ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/?wt.mc_id=DX_841432&WT.mc_id=github-github-dbrown"},"Visual Studio Code")," ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/remote-overview?WT.mc_id=github-github-dbrown"},"remote development"),", then it currently only works with linux systems."),(0,i.kt)("li",{parentName:"ul"},"The log in PowerShell 5 window is scrambled, only the Pester results at the end can be properly observed.")))}m.isMDXComponent=!0}}]);
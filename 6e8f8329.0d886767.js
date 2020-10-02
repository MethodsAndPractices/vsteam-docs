(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),i=(n(0),n(329)),a={id:"build-with-docker",title:"Build with Docker"},s={id:"modules/vsteam/build-with-docker",isDocsHomePage:!1,title:"Build with Docker",description:"Run Unit Tests Locally with Docker",source:"@site/docs/modules/vsteam/build-with-docker.md",permalink:"/vsteam-docs/docs/modules/vsteam/build-with-docker",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/trunk/docs/modules/vsteam/build-with-docker.md",sidebar:"vsteam",previous:{title:"Integration Tests",permalink:"/vsteam-docs/docs/modules/vsteam/integration-tests"},next:{title:"About VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam.help"}},l=[{value:"Run Unit Tests Locally with Docker",id:"run-unit-tests-locally-with-docker",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to Run",id:"how-to-run",children:[]},{value:"Limitations",id:"limitations",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"run-unit-tests-locally-with-docker"},"Run Unit Tests Locally with Docker"),Object(i.b)("p",null,"When helping us to develop this module or when we want to expand the module. We always write unit tests. The problem with that is, that most of the time everybody is using their own machine with different version of OS or different versions of dependencies."),Object(i.b)("p",null,"This is why we created docker files for windows and linux. Currently we have prepared to run the unit tests in"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Linux - PowerShell Core 7"),Object(i.b)("li",{parentName:"ul"},"Windows server core - PowerShell 5"),Object(i.b)("li",{parentName:"ul"},"Windows server core - PowerShell Core 7")),Object(i.b)("p",null,"In best case you should only need to run the PowerShell script below. The docker files being used for this have only the needed PowerShell modules installed. So theoretically you could also develop in these containers with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/?wt.mc_id=DX_841432&WT.mc_id=github-github-dbrown"}),"Visual Studio Code")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/remote/remote-overview?WT.mc_id=github-github-dbrown"}),"remote development"),"."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This feature is still in testing and was developed on a windows machine. Therefore,  the script to run all tests for you works for that OS. But it is intended to work also for linux. But this comes a bit later."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/"}),"Docker"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"depending on your OS you need to install Docker Desktop or only Server"))),Object(i.b)("li",{parentName:"ul"},"Windows based OS if you want to run Windows containers"),Object(i.b)("li",{parentName:"ul"},"optional: ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/remote/wsl#_installation?WT.mc_id=github-github-dbrown#update-to-wsl-2"}),"Install WSL"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"if you even ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.microsoft.com/windows/wsl/install-win10?WT.mc_id=github-github-dbrown#update-to-wsl-2"}),"use WSL2")," then container switch and run with much more performance!")))),Object(i.b)("p",null,"Also be aware that we cannot know all prerequisites as there often many different dependencies for different host OS systems."),Object(i.b)("h2",{id:"how-to-run"},"How to Run"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install Docker: ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install"}),"https://docs.docker.com/engine/install")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"Run-ContainerTests.ps1"}),"https://github.com/MethodsAndPractices/vsteam/blob/master/tools/docker/Run-ContainerTests.ps1")," located under ./tools/docker")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"#Example\nRun-ContainerTests.ps1\n")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Windows containers only work with windows based systems."),Object(i.b)("li",{parentName:"ul"},"If you want to use the container to develop with ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://code.visualstudio.com/?wt.mc_id=DX_841432&WT.mc_id=github-github-dbrown"}),"Visual Studio Code")," ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/remote/remote-overview?WT.mc_id=github-github-dbrown"}),"remote development"),", then it currently only works with linux systems."),Object(i.b)("li",{parentName:"ul"},"The log in PowerShell 5 window is scrambled, only the Pester results at the end can be properly observed.")))}u.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,p=d["".concat(a,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{293:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(9),a=(r(0),r(313)),i={},c={id:"Module/Add-VSTeamGitRepository",isDocsHomePage:!1,title:"Add-VSTeamGitRepository",description:"Add-VSTeamGitRepository",source:"@site/docs\\Module\\Add-VSTeamGitRepository.md",permalink:"/docs/Module/Add-VSTeamGitRepository",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamGitRepository.md"},p=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Name",id:"-name",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],l={rightToc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"add-vsteamgitrepository"},"Add-VSTeamGitRepository"),Object(a.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(a.b)("p",null,"Adds a Git repository to your Azure DevOps or Team Foundation Server account."),Object(a.b)("h2",{id:"syntax"},"SYNTAX"),Object(a.b)("h2",{id:"description"},"DESCRIPTION"),Object(a.b)("p",null,"Add-VSTeamGitRepository adds a Git repository to your Azure DevOps or Team Foundation Server account."),Object(a.b)("h2",{id:"examples"},"EXAMPLES"),Object(a.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Add-VSTeamGitRepository -ProjectName Demo -Name Temp\n")),Object(a.b)("p",null,"This command adds a new repository named Temp to the Demo project."),Object(a.b)("h2",{id:"parameters"},"PARAMETERS"),Object(a.b)("h3",{id:"-projectname"},"-ProjectName"),Object(a.b)("p",null,"Specifies the team project for which this function operates."),Object(a.b)("p",null,"You can tab complete from a list of available projects."),Object(a.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(a.b)("h3",{id:"-name"},"-Name"),Object(a.b)("p",null,"Specifies the name of the repository."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: System.String\nAliases: RepositoryID\nAccept pipeline input: true (ByPropertyName)\n")),Object(a.b)("h2",{id:"inputs"},"INPUTS"),Object(a.b)("h2",{id:"outputs"},"OUTPUTS"),Object(a.b)("h2",{id:"notes"},"NOTES"),Object(a.b)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
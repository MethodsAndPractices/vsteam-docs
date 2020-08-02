(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(313)),o={},c={id:"Module/Add-VSTeamGitRepositoryPermission",isDocsHomePage:!1,title:"Add-VSTeamGitRepositoryPermission",description:"Add-VSTeamGitRepositoryPermission",source:"@site/docs\\Module\\Add-VSTeamGitRepositoryPermission.md",permalink:"/docs/Module/Add-VSTeamGitRepositoryPermission",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamGitRepositoryPermission.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-RepositoryName",id:"-repositoryname",children:[]},{value:"-BranchName",id:"-branchname",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"-User",id:"-user",children:[]},{value:"-Group",id:"-group",children:[]},{value:"-Allow",id:"-allow",children:[]},{value:"-Deny",id:"-deny",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamgitrepositorypermission"},"Add-VSTeamGitRepositoryPermission"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(i.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(i.b)("h3",{id:"-repositoryname"},"-RepositoryName"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(i.b)("h3",{id:"-branchname"},"-BranchName"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(i.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(i.b)("h3",{id:"-user"},"-User"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamUser\nRequired: True\n")),Object(i.b)("h3",{id:"-group"},"-Group"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGroup\nRequired: True\n")),Object(i.b)("h3",{id:"-allow"},"-Allow"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGitRepositoryPermissions\nRequired: True\n")),Object(i.b)("h3",{id:"-deny"},"-Deny"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamGitRepositoryPermissions\nRequired: True\n")),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"systemobject"},"System.Object"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
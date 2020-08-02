(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(313)),o={},c={id:"Module/Get-VSTeamGitRef",isDocsHomePage:!1,title:"Get-VSTeamGitRef",description:"Get-VSTeamGitRef",source:"@site/docs\\Module\\Get-VSTeamGitRef.md",permalink:"/docs/Module/Get-VSTeamGitRef",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamGitRef.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-Filter",id:"-filter",children:[]},{value:"-FilterContains",id:"-filtercontains",children:[]},{value:"-Top",id:"-top",children:[]},{value:"-ContinuationToken",id:"-continuationtoken",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamgitref"},"Get-VSTeamGitRef"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Queries the provided repository for its refs and returns them."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Get-VSTeamGitRef gets all the refs for the provided repository."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamGitRef -ProjectName Demo\n")),Object(i.b)("p",null,"This command returns all the Git refs for the Demo team project."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(i.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(i.b)("p",null,"Specifies the ID of the repository."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nAliases: ID\nAccept pipeline input: true (ByPropertyName)\n")),Object(i.b)("h3",{id:"-filter"},"-Filter"),Object(i.b)("p",null,"A filter to apply to the refs (starts with)."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\n")),Object(i.b)("h3",{id:"-filtercontains"},"-FilterContains"),Object(i.b)("p",null,"A filter to apply to the refs (contains). (Azure DevOps Service and Azure DevOps Server 2019+ only)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\n")),Object(i.b)("h3",{id:"-top"},"-Top"),Object(i.b)("p",null,"Maximum number of refs to return. It cannot be bigger than 1000. If it is not provided but continuationToken is, top will default to 100. (Azure DevOps Service and Azure DevOps Server 2019+ only)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: int\n")),Object(i.b)("h3",{id:"-continuationtoken"},"-ContinuationToken"),Object(i.b)("p",null,"The continuation token used for pagination. (Azure DevOps Service and Azure DevOps Server 2019+ only)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: string\n")),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
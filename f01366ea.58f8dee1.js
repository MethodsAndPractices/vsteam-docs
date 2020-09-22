(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(9),a=(r(0),r(324)),i={id:"Show-VSTeamGitRepository",title:"Show-VSTeamGitRepository",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamGitRepository.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Show-VSTeamGitRepository",isDocsHomePage:!1,title:"Show-VSTeamGitRepository",description:"Show-VSTeamGitRepository",source:"@site/docs/modules/vsteam/commands/Show-VSTeamGitRepository.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamGitRepository",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamGitRepository.md",sidebar:"vsteam",previous:{title:"Show-VSTeamFeed",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamFeed"},next:{title:"Show-VSTeamProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamProject"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-RemoteUrl",id:"-remoteurl",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],l={rightToc:s};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"show-vsteamgitrepository"},"Show-VSTeamGitRepository"),Object(a.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(a.b)("p",null,"Opens the Git repository in the default browser."),Object(a.b)("h2",{id:"syntax"},"SYNTAX"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Show-VSTeamGitRepository [-RemoteUrl <String>] [[-ProjectName] <String>] [<CommonParameters>]\n")),Object(a.b)("h2",{id:"description"},"DESCRIPTION"),Object(a.b)("p",null,"Opens the Git repository in the default browser."),Object(a.b)("h2",{id:"examples"},"EXAMPLES"),Object(a.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Show-VSTeamGitRepository -ProjectName Demo\n")),Object(a.b)("p",null,"This command opens the Git repository in a browser."),Object(a.b)("h2",{id:"parameters"},"PARAMETERS"),Object(a.b)("h3",{id:"-projectname"},"-ProjectName"),Object(a.b)("p",null,"Specifies the team project for which this function operates."),Object(a.b)("p",null,"You can tab complete from a list of available projects."),Object(a.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-remoteurl"},"-RemoteUrl"),Object(a.b)("p",null,"The RemoteUrl of the Git repository to open."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(a.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(a.b)("h2",{id:"inputs"},"INPUTS"),Object(a.b)("h2",{id:"outputs"},"OUTPUTS"),Object(a.b)("h2",{id:"notes"},"NOTES"),Object(a.b)("h2",{id:"related-links"},"RELATED LINKS"))}m.isMDXComponent=!0},324:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
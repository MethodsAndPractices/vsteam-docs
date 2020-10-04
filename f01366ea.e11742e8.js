(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),o=r(9),n=(r(0),r(329)),c={id:"Show-VSTeamGitRepository",title:"Show-VSTeamGitRepository",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamGitRepository.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Show-VSTeamGitRepository",isDocsHomePage:!1,title:"Show-VSTeamGitRepository",description:"Show-VSTeamGitRepository",source:"@site/docs/modules/vsteam/commands/Show-VSTeamGitRepository.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamGitRepository",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamGitRepository.md",sidebar:"vsteam",previous:{title:"Show-VSTeamFeed",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamFeed"},next:{title:"Show-VSTeamPackage",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamPackage"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-RemoteUrl",id:"-remoteurl",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"show-vsteamgitrepository"},"Show-VSTeamGitRepository"),Object(n.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(n.b)("p",null,"Opens the Git repository in the default browser."),Object(n.b)("h2",{id:"syntax"},"SYNTAX"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"Show-VSTeamGitRepository -RemoteUrl <String> -ProjectName <String> [<CommonParameters>]\n")),Object(n.b)("h2",{id:"description"},"DESCRIPTION"),Object(n.b)("p",null,"Opens the Git repository in the default browser."),Object(n.b)("h2",{id:"examples"},"EXAMPLES"),Object(n.b)("h3",{id:"example-1"},"Example 1"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"Show-VSTeamGitRepository -ProjectName Demo\n")),Object(n.b)("p",null,"This command opens the Git repository in a browser."),Object(n.b)("h2",{id:"parameters"},"PARAMETERS"),Object(n.b)("h3",{id:"-projectname"},"-ProjectName"),Object(n.b)("p",null,"Specifies the team project for which this function operates."),Object(n.b)("p",null,"You can tab complete from a list of available projects."),Object(n.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(n.b)("h3",{id:"-remoteurl"},"-RemoteUrl"),Object(n.b)("p",null,"The RemoteUrl of the Git repository to open."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(n.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(n.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(n.b)("h2",{id:"inputs"},"INPUTS"),Object(n.b)("h2",{id:"outputs"},"OUTPUTS"),Object(n.b)("h2",{id:"notes"},"NOTES"),Object(n.b)("p",null,"Prerequisites:"),Object(n.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(n.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(n.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(n.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(n.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(n.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}p.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||n;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<n;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
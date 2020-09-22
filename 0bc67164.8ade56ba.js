(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),o=(a(0),a(324)),i={id:"Show-VSTeamApproval",title:"Show-VSTeamApproval",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamApproval.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Show-VSTeamApproval",isDocsHomePage:!1,title:"Show-VSTeamApproval",description:"Show-VSTeamApproval",source:"@site/docs/modules/vsteam/commands/Show-VSTeamApproval.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamApproval",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamApproval.md",sidebar:"vsteam",previous:{title:"Show-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeam"},next:{title:"Show-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamBuild"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-ReleaseDefinitionId",id:"-releasedefinitionid",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.BuildDefinition",id:"teambuilddefinition",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"show-vsteamapproval"},"Show-VSTeamApproval"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Opens the release associated with the waiting approval in the default browser."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Show-VSTeamApproval [-ReleaseDefinitionId] <Int32> [-ProjectName] <String> [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Opens the release associated with the waiting approval in the default browser."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamApproval -ProjectName Demo | Show-VSTeamApproval\n")),Object(o.b)("p",null,"This command opens a web browser showing the release requiring approval."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-releasedefinitionid"},"-ReleaseDefinitionId"),Object(o.b)("p",null,"Only approvals for the release id provided will be returned."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases: Id\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"teambuilddefinition"},"Team.BuildDefinition"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets build definitions."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("p",null,"You can pipe build definition IDs to this function."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamBuildDefinition")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamBuildDefinition")))}s.isMDXComponent=!0},324:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?r.a.createElement(b,c(c({ref:t},p),{},{components:a})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
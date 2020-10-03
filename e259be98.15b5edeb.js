(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(9),o=(a(0),a(329)),i={id:"Remove-VSTeamReleaseDefinition",title:"Remove-VSTeamReleaseDefinition",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamReleaseDefinition.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Remove-VSTeamReleaseDefinition",isDocsHomePage:!1,title:"Remove-VSTeamReleaseDefinition",description:"Remove-VSTeamReleaseDefinition",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamReleaseDefinition.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamReleaseDefinition",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamReleaseDefinition.md",sidebar:"vsteam",previous:{title:"Remove-VSTeamRelease",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamRelease"},next:{title:"Remove-VSTeamServiceEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamServiceEndpoint"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Id",id:"-id",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"None",id:"none",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"remove-vsteamreleasedefinition"},"Remove-VSTeamReleaseDefinition"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Removes the release definitions for a team project."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Remove-VSTeamReleaseDefinition -Id <Int32[]> [-Force] -ProjectName <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"The Remove-VSTeamReleaseDefinition function removes the release definitions for a team project."),Object(o.b)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamReleaseDefinition -ProjectName demo | Remove-VSTeamReleaseDefinition\n")),Object(o.b)("p",null,"This command gets a list of all release definitions in the demo project."),Object(o.b)("p",null,"The pipeline operator (|) passes the data to the Remove-VSTeamReleaseDefinition function, which removes each release definition object."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-id"},"-Id"),Object(o.b)("p",null,"Specifies one or more release definitions by ID."),Object(o.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(o.b)("p",null,"To find the ID of a release definition, type Get-VSTeamReleaseDefinition."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-force"},"-Force"),Object(o.b)("p",null,"Forces the function without confirmation."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-whatif"},"-WhatIf"),Object(o.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-confirm"},"-Confirm"),Object(o.b)("p",null,"Prompts you for confirmation before running the function."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"none"},"None"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"You can pipe release definition IDs to this function."),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(o.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(o.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(o.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamReleaseDefinition")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VSTeamReleaseDefinition")))}m.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
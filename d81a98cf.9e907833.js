(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(9),r=(a(0),a(329)),l={id:"Add-VSTeamRelease",title:"Add-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamRelease.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Add-VSTeamRelease",isDocsHomePage:!1,title:"Add-VSTeamRelease",description:"Add-VSTeamRelease",source:"@site/docs/modules/vsteam/commands/Add-VSTeamRelease.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamRelease.md",sidebar:"vsteam",previous:{title:"Add-VSTeamPullRequest",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamPullRequest"},next:{title:"Add-VSTeamReleaseDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamReleaseDefinition"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ById (Default)",id:"byid-default",children:[]},{value:"ByName",id:"byname",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-DefinitionId",id:"-definitionid",children:[]},{value:"-Description",id:"-description",children:[]},{value:"-ArtifactAlias",id:"-artifactalias",children:[]},{value:"-Name",id:"-name",children:[]},{value:"-BuildId",id:"-buildid",children:[]},{value:"-DefinitionName",id:"-definitionname",children:[]},{value:"-SourceBranch",id:"-sourcebranch",children:[]},{value:"-BuildNumber",id:"-buildnumber",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:o};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"add-vsteamrelease"},"Add-VSTeamRelease"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Queues a new release."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"byid-default"},"ById (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamRelease -DefinitionId <Int32> [-Description <String>] -ArtifactAlias <String> [-Name <String>]\n -BuildId <String> [-SourceBranch <String>] [-Force] -ProjectName <String> [-DefinitionName <String>] [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h3",{id:"byname"},"ByName"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamRelease [-Description <String>] [-Name <String>] -BuildNumber <String> [-SourceBranch <String>]\n [-Force] -ProjectName <String> [-DefinitionName <String>] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Add-VSTeamRelease will queue a new release."),Object(r.b)("p",null,"The environments will deploy according to how the release definition is configured in the Triggers tab."),Object(r.b)("p",null,"You must call Set-VSTeamAccount before calling this function."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamBuild | ft id,name\n\nid name\n-- ---\nid: Add-VSTeamRelease\ntitle: Add-VSTeamRelease\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamRelease.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n----    -----\n 1 Demo-CD Demo-CI\n\nAdd-VSTeamRelease -DefinitionId 1 -Description Test -ArtifactAlias Demo-CI -BuildId 44\n")),Object(r.b)("p",null,"This example shows how to find the Build ID, Artifact Alias, and Release definition ID required to start a release.\nIf you call Set-VSTeamDefaultProject you can use Example 2 which is much easier."),Object(r.b)("h3",{id:"example-2"},"Example 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamRelease -DefinitionName Demo-CD -Description Test -BuildNumber Demo-CI-44\n")),Object(r.b)("p",null,"This command starts a new release using the Demo-CD release definition and the build with build number Demo-CI-44."),Object(r.b)("p",null,"You must set a default project to tab complete DefinitionName and BuildNumber."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-definitionid"},"-DefinitionId"),Object(r.b)("p",null,"The id of the release definition to use."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: ById\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-description"},"-Description"),Object(r.b)("p",null,"The description to use on the release."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-artifactalias"},"-ArtifactAlias"),Object(r.b)("p",null,"The alias of the artifact to use with this release."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ById\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-name"},"-Name"),Object(r.b)("p",null,"The name of this release."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-buildid"},"-BuildId"),Object(r.b)("p",null,"The id of the build to use with this release."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ById\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-definitionname"},"-DefinitionName"),Object(r.b)("p",null,"The name of the release definition to use."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-sourcebranch"},"-SourceBranch"),Object(r.b)("p",null,"The branch of the artifact"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-buildnumber"},"-BuildNumber"),Object(r.b)("p",null,"The number of the build to use."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-force"},"-Force"),Object(r.b)("p",null,"Forces the function without confirmation."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-whatif"},"-WhatIf"),Object(r.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-confirm"},"-Confirm"),Object(r.b)("p",null,"Prompts you for confirmation before running the function."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(r.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(r.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(r.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(r.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}d.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,p=u["".concat(l,".").concat(b)]||u[b]||m[b]||r;return a?i.a.createElement(p,c(c({ref:t},s),{},{components:a})):i.a.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
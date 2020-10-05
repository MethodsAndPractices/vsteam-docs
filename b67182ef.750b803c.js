(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{270:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),c=(a(0),a(329)),i={id:"Set-VSTeamPermissionInheritance",title:"Set-VSTeamPermissionInheritance",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamPermissionInheritance.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},o={id:"modules/vsteam/commands/Set-VSTeamPermissionInheritance",isDocsHomePage:!1,title:"Set-VSTeamPermissionInheritance",description:"Set-VSTeamPermissionInheritance",source:"@site/docs/modules/vsteam/commands/Set-VSTeamPermissionInheritance.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamPermissionInheritance",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamPermissionInheritance.md",sidebar:"vsteam",previous:{title:"Set-VSTeamEnvironmentStatus",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamEnvironmentStatus"},next:{title:"Set-VSTeamReleaseStatus",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamReleaseStatus"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Name",id:"-name",children:[]},{value:"-ResourceType",id:"-resourcetype",children:[]},{value:"-NewState",id:"-newstate",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"set-vsteampermissioninheritance"},"Set-VSTeamPermissionInheritance"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Undocumented API Sets the permission inheritance to true or false."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPermissionInheritance -Name <String> -ResourceType <String> -NewState <Boolean> [-Force]\n [-ProjectName <String>] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Undocumented API Sets the permission inheritance to true or false."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPermissionInheritance -ProjectName Demo -Name Demo-CI -ResourceType BuildDefinition -NewState $true -Force\n")),Object(c.b)("p",null,"This command sets the permission inheritance to true."),Object(c.b)("h3",{id:"example-2"},"Example 2"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamBuildDefinition | Set-VSTeamPermissionInheritance -ResourceType BuildDefinition -NewState $true -Force\n")),Object(c.b)("p",null,"This command sets the permission inheritance to true for every build definition returned from Get-VSTeamBuildDefinition."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-name"},"-Name"),Object(c.b)("p",null,"Specifies the name of the resource."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-resourcetype"},"-ResourceType"),Object(c.b)("p",null,"Specifies the type of resource.\nThe acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Repository"),Object(c.b)("li",{parentName:"ul"},"BuildDefinition"),Object(c.b)("li",{parentName:"ul"},"ReleaseDefinition")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-newstate"},"-NewState"),Object(c.b)("p",null,"The new state to set"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-force"},"-Force"),Object(c.b)("p",null,"Forces the function without confirmation."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-whatif"},"-WhatIf"),Object(c.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-confirm"},"-Confirm"),Object(c.b)("p",null,"Prompts you for confirmation before running the function."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"Prerequisites:"),Object(c.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(c.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(c.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(c.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(c.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamPolicy")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamPolicy")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamPermissionInheritanceType")))}u.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||c;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
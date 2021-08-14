(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(342)),o={id:"Set-VSTeamPipelineAuthorization",title:"Set-VSTeamPipelineAuthorization",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamPipelineAuthorization.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Set-VSTeamPipelineAuthorization",isDocsHomePage:!1,title:"Set-VSTeamPipelineAuthorization",description:"Set-VSTeamPipelineAuthorization",source:"@site/docs/modules/vsteam/commands/Set-VSTeamPipelineAuthorization.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamPipelineAuthorization",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamPipelineAuthorization.md",sidebar:"vsteam",previous:{title:"Set-VSTeamPermissionInheritance",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamPermissionInheritance"},next:{title:"Set-VSTeamPipelineBilling",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamPipelineBilling"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"AuthorizeResource (Default)",id:"authorizeresource-default",children:[]},{value:"AuthorizeAll",id:"authorizeall",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]},{value:"Example 4",id:"example-4",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Authorize",id:"-authorize",children:[]},{value:"-AuthorizeAll",id:"-authorizeall",children:[]},{value:"-PipelineIds",id:"-pipelineids",children:[]},{value:"-ResourceId",id:"-resourceid",children:[]},{value:"-ResourceType",id:"-resourcetype",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.Int32[]",id:"systemint32",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"set-vsteampipelineauthorization"},"Set-VSTeamPipelineAuthorization"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Authorizes pipelines to use the given resources."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"authorizeresource-default"},"AuthorizeResource (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization [-PipelineIds] <Int32[]> -ProjectName <String> -ResourceId <String>\n -ResourceType <String> -Authorize <Boolean> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(i.b)("h3",{id:"authorizeall"},"AuthorizeAll"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization -ProjectName <String> -ResourceId <String> -ResourceType <String>\n -AuthorizeAll <Boolean> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Authorizes pipelines to use the given resources."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization -PipelineIds 1 -ResourceId 34 -ResourceType Queue -Authorize $true\n")),Object(i.b)("p",null,"Authorizes the pipeline to access the resource 34 of type Queue (Agent Pool)."),Object(i.b)("h3",{id:"example-2"},"Example 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization -PipelineIds 1 -ResourceId $resourceId -ResourceType VariableGroup -Authorize $false\n")),Object(i.b)("p",null,"Removes authorization from the pipeline to access the resource with id $resourceId of type VariableGroup."),Object(i.b)("h3",{id:"example-3"},"Example 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization -PipelineIds @(1,2,3) -ResourceId 34 -ResourceType Queue -Authorize $true\n")),Object(i.b)("p",null,"Authorizes the pipelines 1, 2 and 3 to access the resource 34 of type Queue (Agent Pool)."),Object(i.b)("h3",{id:"example-4"},"Example 4"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Set-VSTeamPipelineAuthorization -ResourceId $resourceId -ResourceType Repository -AuthorizeAll $true\n")),Object(i.b)("p",null,"Authorize all pipelines to access the resource with id $resourceId of type Repository."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-authorize"},"-Authorize"),Object(i.b)("p",null,"Allows given pipelines to use the named resource"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean\nParameter Sets: AuthorizeResource\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-authorizeall"},"-AuthorizeAll"),Object(i.b)("p",null,"Removes any authorization restrictions for the given resource"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean\nParameter Sets: AuthorizeAll\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-pipelineids"},"-PipelineIds"),Object(i.b)("p",null,"List of pipeline Ids to authorize"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: AuthorizeResource\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-resourceid"},"-ResourceId"),Object(i.b)("p",null,"Resource which the pipelines are authorized to use."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-resourcetype"},"-ResourceType"),Object(i.b)("p",null,"Resource type to authorize the pipeline on"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\nAccepted values: Queue, Endpoint, Environment, VariableGroup, SecureFile, Repository\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-confirm"},"-Confirm"),Object(i.b)("p",null,"Prompts you for confirmation before running the cmdlet."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-whatif"},"-WhatIf"),Object(i.b)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h3",{id:"systemint32"},"System.Int32[]"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"systemobject"},"System.Object"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(i.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(i.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(i.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(i.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}s.isMDXComponent=!0},342:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return a?r.a.createElement(d,l(l({ref:t},u),{},{components:a})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
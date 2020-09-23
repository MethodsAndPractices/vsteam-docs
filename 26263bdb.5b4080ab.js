(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),c=(n(0),n(325)),l={id:"Set-VSTeamEnvironmentStatus",title:"Set-VSTeamEnvironmentStatus",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamEnvironmentStatus.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},o={id:"modules/vsteam/commands/Set-VSTeamEnvironmentStatus",isDocsHomePage:!1,title:"Set-VSTeamEnvironmentStatus",description:"Set-VSTeamEnvironmentStatus",source:"@site/docs/modules/vsteam/commands/Set-VSTeamEnvironmentStatus.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamEnvironmentStatus",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Set-VSTeamEnvironmentStatus.md",sidebar:"vsteam",previous:{title:"Set-VSTeamDefaultProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamDefaultProject"},next:{title:"Set-VSTeamPermissionInheritance",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamPermissionInheritance"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-EnvironmentId",id:"-environmentid",children:[]},{value:"-ReleaseId",id:"-releaseid",children:[]},{value:"-Status",id:"-status",children:[]},{value:"-Comment",id:"-comment",children:[]},{value:"-ScheduledDeploymentTime",id:"-scheduleddeploymenttime",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"set-vsteamenvironmentstatus"},"Set-VSTeamEnvironmentStatus"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Sets the status of a environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamEnvironmentStatus -EnvironmentId <Int32[]> -ReleaseId <Int32> -Status <String> [-Comment <String>]\n [-ScheduledDeploymentTime <DateTime>] [-Force] [-ProjectName <String>] [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Sets the status of a environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamEnvironmentStatus -ReleaseId 54 -Id 5 -status inProgress\n")),Object(c.b)("p",null,"This command will set the status of environment with id 5 of release 54 to inProgress.\nYou can use this call to redeploy an environment."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-environmentid"},"-EnvironmentId"),Object(c.b)("p",null,"Specifies one or more environments by ID you wish to deploy."),Object(c.b)("p",null,"The Environment Ids are unique for each environment and in each release."),Object(c.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(c.b)("p",null,"To find the ID of an environment type Get-VSTeamRelease -expand environments."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases: Id\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-releaseid"},"-ReleaseId"),Object(c.b)("p",null,"Specifies the release by ID."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-status"},"-Status"),Object(c.b)("p",null,"The status to set for the environment to canceled, inProgress, notStarted, partiallySucceeded, queued, rejected, scheduled, succeeded or undefined."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases: EnvironmentStatus\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-comment"},"-Comment"),Object(c.b)("p",null,"The comment to set for the status change."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-scheduleddeploymenttime"},"-ScheduledDeploymentTime"),Object(c.b)("p",null,"The date and time to schedule when setting the status to scheduled."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-force"},"-Force"),Object(c.b)("p",null,"Forces the function without confirmation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-whatif"},"-WhatIf"),Object(c.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-confirm"},"-Confirm"),Object(c.b)("p",null,"Prompts you for confirmation before running the function."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"Prerequisites:"),Object(c.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(c.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(c.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(c.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(c.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}u.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||c;return n?r.a.createElement(b,o(o({ref:t},s),{},{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
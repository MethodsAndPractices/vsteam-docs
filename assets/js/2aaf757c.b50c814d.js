"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[1634],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=l,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"Stop-VSTeamBuild",title:"Stop-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Stop-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Stop-VSTeamBuild",c={unversionedId:"modules/vsteam/commands/Stop-VSTeamBuild",id:"modules/vsteam/commands/Stop-VSTeamBuild",title:"Stop-VSTeamBuild",description:"",source:"@site/docs/modules/vsteam/commands/Stop-VSTeamBuild.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Stop-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Stop-VSTeamBuild",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Stop-VSTeamBuild.md",tags:[],version:"current",frontMatter:{id:"Stop-VSTeamBuild",title:"Stop-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Stop-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Show-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamWorkItem"},next:{title:"Test-VSTeamMembership",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Test-VSTeamMembership"}},u=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Id",id:"-id",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-Force",id:"-force",children:[],level:3},{value:"-WhatIf",id:"-whatif",children:[],level:3},{value:"-Confirm",id:"-confirm",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3},{value:"System.Int32",id:"systemint32",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stop-vsteambuild"},"Stop-VSTeamBuild"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Allows you to cancel a running build."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Stop-VSTeamBuild -Id <Int32> [-Force] -ProjectName <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Stop-VSTeamBuild will cancel a build using the build id."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Set-VSTeamDefaultProject Demo\nStop-VSTeamBuild -id 1\n")),(0,r.kt)("p",null,"This example cancels the build with build id 1."),(0,r.kt)("h3",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Set-VSTeamDefaultProject Demo\n$buildsToCancel = Get-VSTeamBuild -StatusFilter "inProgress" | where-object definitionName -eq Build-Definition-Name\nForEach($build in $buildsToCancel) { Stop-VSTeamBuild -id $build.id }\n')),(0,r.kt)("p",null,'This example will find all builds with a status of "inProgress" and a definitionName of "Build-Definition-Name" and then cancel each of these builds.'),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-id"},"-Id"),(0,r.kt)("p",null,"The id of the build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases: BuildID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,r.kt)("p",null,"Specifies the team project for which this function operates."),(0,r.kt)("p",null,"You can tab complete from a list of available projects."),(0,r.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-force"},"-Force"),(0,r.kt)("p",null,"Forces the function without confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,r.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-confirm"},"-Confirm"),(0,r.kt)("p",null,"Prompts you for confirmation before running the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h3",{id:"systemstring"},"System.String"),(0,r.kt)("p",null,"ProjectName"),(0,r.kt)("h3",{id:"systemint32"},"System.Int32"),(0,r.kt)("p",null,"BuildId"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"))}m.isMDXComponent=!0}}]);
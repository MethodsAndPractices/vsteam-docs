"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[5767],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,v=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(v,s(s({ref:t},c),{},{components:a})):r.createElement(v,s({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],l={id:"Remove-VSTeamTaskGroup",title:"Remove-VSTeamTaskGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamTaskGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},i="Remove-VSTeamTaskGroup",m={unversionedId:"modules/vsteam/commands/Remove-VSTeamTaskGroup",id:"modules/vsteam/commands/Remove-VSTeamTaskGroup",title:"Remove-VSTeamTaskGroup",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamTaskGroup.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamTaskGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamTaskGroup",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamTaskGroup.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamTaskGroup",title:"Remove-VSTeamTaskGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamTaskGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamServiceEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamServiceEndpoint"},next:{title:"Remove-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamUserEntitlement"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Id",id:"-id",level:3},{value:"-ProjectName",id:"-projectname",level:3},{value:"-Force",id:"-force",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"System.String[]",id:"systemstring",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Object",id:"systemobject",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:u},d="wrapper";function v(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-vsteamtaskgroup"},"Remove-VSTeamTaskGroup"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Removes a task group"),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Remove-VSTeamTaskGroup -Id <String[]> [-Force] -ProjectName <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Removes a task group"),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$projectName = "some_project_name"\n$taskGroup = Get-VSTeamTaskGroup -Name "taskName" -ProjectName $projectName\n\n$methodParameters = @{\n   Id                       = $taskGroup.id\n   ProjectName              = $projectName\n   Force                    = $true\n}\n\nRemove-VSTeamTaskGroup @methodParameters\n')),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-id"},"-Id"),(0,o.kt)("p",null,"ID of the existing task group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,o.kt)("p",null,"Specifies the team project for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available projects."),(0,o.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-force"},"-Force"),(0,o.kt)("p",null,"Forces the function without confirmation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,o.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-confirm"},"-Confirm"),(0,o.kt)("p",null,"Prompts you for confirmation before running the function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h3",{id:"systemstring"},"System.String[]"),(0,o.kt)("p",null,"System.String"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h3",{id:"systemobject"},"System.Object"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamTaskGroup"},"Add-VSTeamTaskGroup")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamTaskGroup"},"Get-VSTeamTaskGroup")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamTaskGroup"},"Update-VSTeamTaskGroup")))}v.isMDXComponent=!0}}]);
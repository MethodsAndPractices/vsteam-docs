"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[9200],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,v=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(v,o(o({ref:t},m),{},{components:a})):r.createElement(v,o({ref:t},m))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2127:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"Update-VSTeamVariableGroup",title:"Update-VSTeamVariableGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeamVariableGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Update-VSTeamVariableGroup",p={unversionedId:"modules/vsteam/commands/Update-VSTeamVariableGroup",id:"modules/vsteam/commands/Update-VSTeamVariableGroup",title:"Update-VSTeamVariableGroup",description:"",source:"@site/docs/modules/vsteam/commands/Update-VSTeamVariableGroup.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Update-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamVariableGroup",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeamVariableGroup.md",tags:[],version:"current",frontMatter:{id:"Update-VSTeamVariableGroup",title:"Update-VSTeamVariableGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeamVariableGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Update-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamUserEntitlement"},next:{title:"Update-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamWorkItem"}},m={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"ByHashtable",id:"byhashtable",level:3},{value:"ByBody",id:"bybody",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Confirm",id:"-confirm",level:3},{value:"-Force",id:"-force",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"-Id",id:"-id",level:3},{value:"-Description",id:"-description",level:3},{value:"-Name",id:"-name",level:3},{value:"-Variables",id:"-variables",level:3},{value:"-Body",id:"-body",level:3},{value:"-ProjectName",id:"-projectname",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Object",id:"systemobject",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],u={toc:c},d="wrapper";function v(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-vsteamvariablegroup"},"Update-VSTeamVariableGroup"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Updates an existing variable group"),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"byhashtable"},"ByHashtable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Update-VSTeamVariableGroup -Id <String> -Name <String> [-Description <String>] -Variables <Hashtable> [-Force]\n -ProjectName <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"bybody"},"ByBody"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Update-VSTeamVariableGroup -Id <String> -Body <String> [-Force] -ProjectName <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Updates an existing variable group"),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$methodParameters = @{\n   ProjectName              = "some_project_name"\n   Name        = "new_variable_group"\n   Description = "Describe the Variable Group"\n   Type        = "Vsts"\n   Variables   = @{\n      key1 = @{\n         value = "value1"\n         isSecret = $true\n      }\n   }\n}\n\n$newVariableGroup = Add-VSTeamVariableGroup @methodParameters\n\n$methodParameters = @{\n   id                       = $newVariableGroup.id\n   ProjectName              = "some_project_name"\n   Name        = "new_variable_group"\n   Description = "Describe the Variable Group"\n   Type        = "AzureKeyVault"\n   Variables   = @{\n      name_of_existing_secret  = @{\n         enabled     = $true\n         contentType = ""\n         value       = ""\n         isSecret    = $true\n      }\n   }\n   ProviderData =  @{\n      serviceEndpointId = "AzureRMServiceEndpointGuid"\n      vault             = "name_of_existing_key_vault"\n   }\n}\n\nUpdate-VSTeamVariableGroup @methodParameters\n')),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Copy variable group varGroupName from project sourceProjectName to project targetProjectName.  If varGroupName already exists, we\'ll update it; else, we\'ll add it.\n\n$Name = "varGroupName"\n$FromProject  = "sourceProjectName"\n$ToProject = "targetProjectName"\n\n$FromVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $FromProject\n$body = ConvertTo-Json -InputObject $FromVariableGroupObject -Depth 100 -Compress\n$toVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $ToProject\nif ($toVariableGroupObject) {\n   Update-VSTeamVariableGroup -Body $body -ProjectName $ToProject -Id $toVariableGroupObject.id\n}\nelse {\n   Add-VSTeamVariableGroup -Body $body -ProjectName $ToProject\n}\n')),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-confirm"},"-Confirm"),(0,l.kt)("p",null,"Prompts you for confirmation before running the cmdlet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-force"},"-Force"),(0,l.kt)("p",null,"Does not prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,l.kt)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-id"},"-Id"),(0,l.kt)("p",null,"ID of the existing variable group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-description"},"-Description"),(0,l.kt)("p",null,"The variable group description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByHashtable\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-name"},"-Name"),(0,l.kt)("p",null,"The variable group name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByHashtable\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-variables"},"-Variables"),(0,l.kt)("p",null,"The variable group variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Hashtable\nParameter Sets: ByHashtable\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-body"},"-Body"),(0,l.kt)("p",null,"The json that represents the task group as a string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByBody\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"systemstring"},"System.String"),(0,l.kt)("p",null,"System.Collections.Hashtable"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemobject"},"System.Object"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamVariableGroup"},"Add-VSTeamVariableGroup")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamVariableGroup"},"Get-VSTeamVariableGroup")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamVariableGroup"},"Remove-VSTeamVariableGroup")))}v.isMDXComponent=!0}}]);
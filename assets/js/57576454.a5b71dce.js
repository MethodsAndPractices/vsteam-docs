"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6411],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,k=c["".concat(i,".").concat(p)]||c[p]||u[p]||o;return a?r.createElement(k,s(s({ref:t},m),{},{components:a})):r.createElement(k,s({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1951:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],l={id:"Add-VSTeamTaskGroup",title:"Add-VSTeamTaskGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamTaskGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},i="Add-VSTeamTaskGroup",d={unversionedId:"modules/vsteam/commands/Add-VSTeamTaskGroup",id:"modules/vsteam/commands/Add-VSTeamTaskGroup",title:"Add-VSTeamTaskGroup",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamTaskGroup.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamTaskGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamTaskGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamTaskGroup.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamTaskGroup",title:"Add-VSTeamTaskGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamTaskGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeamSonarQubeEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint"},next:{title:"Add-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamUserEntitlement"}},m=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"UNNAMED_PARAMETER_SET_1",id:"unnamed_parameter_set_1",children:[],level:3},{value:"UNNAMED_PARAMETER_SET_2",id:"unnamed_parameter_set_2",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-InFile",id:"-infile",children:[],level:3},{value:"-Body",id:"-body",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-vsteamtaskgroup"},"Add-VSTeamTaskGroup"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Adds a task group."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("h3",{id:"unnamed_parameter_set_1"},"UNNAMED_PARAMETER_SET_1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Add-VSTeamTaskGroup -InFile <String> -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"unnamed_parameter_set_2"},"UNNAMED_PARAMETER_SET_2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Add-VSTeamTaskGroup -Body <String> -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Adds a task group."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$taskGroup = Get-VSTeamTaskGroup -Name "taskGroupName" -ProjectName "sourceProjectName"\n\n# Set the ID and revision to null, so AzD is happy.\n$taskGroup.id = $null\n$taskGroup.revision = $null\n\n$taskGroupJson = ConvertTo-Json -InputObject $taskGroup -Depth 10\n\nAdd-VSTeamTaskGroup -Body $taskGroupJson -ProjectName "destinationProjectName"\n')),(0,o.kt)("p",null,"This example is useful for when one wants to copy an existing task group in one project into another project."),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-infile"},"-InFile"),(0,o.kt)("p",null,"The path to the json file that represents the task group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-body"},"-Body"),(0,o.kt)("p",null,"The json that represents the task group as a string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_2\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,o.kt)("p",null,"Specifies the team project for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available projects."),(0,o.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h3",{id:"systemstring"},"System.String"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h3",{id:"systemobject"},"System.Object"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamTaskGroup"},"Update-VSTeamTaskGroup")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamTaskGroup"},"Get-VSTeamTaskGroup")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamTaskGroup"},"Remove-VSTeamTaskGroup")))}c.isMDXComponent=!0}}]);
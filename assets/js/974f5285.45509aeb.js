"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[8203],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4929:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"Update-VSTeam",title:"Update-VSTeam",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeam.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},c="Update-VSTeam",s={unversionedId:"modules/vsteam/commands/Update-VSTeam",id:"modules/vsteam/commands/Update-VSTeam",title:"Update-VSTeam",description:"",source:"@site/docs/modules/vsteam/commands/Update-VSTeam.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Update-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeam",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeam.md",tags:[],version:"current",frontMatter:{id:"Update-VSTeam",title:"Update-VSTeam",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Update-VSTeam.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Test-VSTeamYamlPipeline",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Test-VSTeamYamlPipeline"},next:{title:"Update-VSTeamAgent",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamAgent"}},m=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"UpdateDescription (Default)",id:"updatedescription-default",children:[],level:3},{value:"UpdateName",id:"updatename",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Name",id:"-name",children:[],level:3},{value:"-NewTeamName",id:"-newteamname",children:[],level:3},{value:"-Description",id:"-description",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-Force",id:"-force",children:[],level:3},{value:"-WhatIf",id:"-whatif",children:[],level:3},{value:"-Confirm",id:"-confirm",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Team",id:"vsteam_libteam",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-vsteam"},"Update-VSTeam"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Updates the team name, description or both."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"updatedescription-default"},"UpdateDescription (Default)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Update-VSTeam [-Name] <String> -Description <String> [-Force] -ProjectName <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"updatename"},"UpdateName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Update-VSTeam [-Name] <String> -NewTeamName <String> [-Description <String>] [-Force] -ProjectName <String>\n [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Updates the team name, description or both."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,l.kt)("p",null,"{{ Add example description here }}"),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-name"},"-Name"),(0,l.kt)("p",null,"The name of the team to update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases: TeamName, TeamId, TeamToUpdate, Id\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-newteamname"},"-NewTeamName"),(0,l.kt)("p",null,"The new name of the team"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UpdateName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-description"},"-Description"),(0,l.kt)("p",null,"The new description of the team"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UpdateDescription\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UpdateName\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-force"},"-Force"),(0,l.kt)("p",null,"Forces the function without confirmation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,l.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-confirm"},"-Confirm"),(0,l.kt)("p",null,"Prompts you for confirmation before running the function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"systemstring"},"System.String"),(0,l.kt)("p",null,"Description"),(0,l.kt)("p",null,"Name"),(0,l.kt)("p",null,"NewTeamName"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"vsteam_libteam"},"vsteam_lib.Team"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
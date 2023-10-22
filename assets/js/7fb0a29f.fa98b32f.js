"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[3795],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),p=l,v=c["".concat(m,".").concat(p)]||c[p]||d[p]||r;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1829:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],i={id:"Remove-VSTeamBuildTag",title:"Remove-VSTeamBuildTag",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamBuildTag.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Remove-VSTeamBuildTag",s={unversionedId:"modules/vsteam/commands/Remove-VSTeamBuildTag",id:"modules/vsteam/commands/Remove-VSTeamBuildTag",title:"Remove-VSTeamBuildTag",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamBuildTag.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamBuildTag",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamBuildTag",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamBuildTag.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamBuildTag",title:"Remove-VSTeamBuildTag",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamBuildTag.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamBuildDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamBuildDefinition"},next:{title:"Remove-VSTeamClassificationNode",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamClassificationNode"}},u={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Id",id:"-id",level:3},{value:"-Tags",id:"-tags",level:3},{value:"-ProjectName",id:"-projectname",level:3},{value:"-Force",id:"-force",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:c},p="wrapper";function v(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remove-vsteambuildtag"},"Remove-VSTeamBuildTag"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Removes the tag from a build."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Remove-VSTeamBuildTag [-Tags] <String[]> -Id <Int32[]> [-Force] -ProjectName <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Removes the tag from a build."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Remove-VSTeamBuildTag -BuildId 1001 -Tag "ReleaseCandidate"\n')),(0,r.kt)("p",null,'Removes the "ReleaseCandidate" tag from the build with ID ',"`","1001","`","."),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Remove-VSTeamBuildTag -BuildId 1001 -Tag "ReleaseCandidate" -ProjectName "MyProject"\n')),(0,r.kt)("p",null,'Removes the "ReleaseCandidate" tag from the build with ID ',"`","1001","`",' within the "MyProject" project.'),(0,r.kt)("h3",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$tagsToRemove = "ReleaseCandidate", "Beta", "Alpha"\n$tagsToRemove | ForEach-Object { Remove-VSTeamBuildTag -BuildId 1001 -Tag $_ }\n')),(0,r.kt)("p",null,'Removes multiple tags "ReleaseCandidate", "Beta", and "Alpha" from the build with ID ',"`","1001","`","."),(0,r.kt)("h3",{id:"example-4"},"Example 4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Remove-VSTeamBuildTag -BuildId 1001 -Tag "ReleaseCandidate" -Force\n')),(0,r.kt)("p",null,'Removes the "ReleaseCandidate" tag from the build with ID ',"`","1001","`"," and forces the removal without any confirmation prompts."),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-id"},"-Id"),(0,r.kt)("p",null,"Specifies one or more builds by ID."),(0,r.kt)("p",null,"To specify multiple IDs, use commas to separate the IDs."),(0,r.kt)("p",null,"To find the ID of a build, type Get-VSTeamBuild."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32[]\nParameter Sets: (All)\nAliases: BuildID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-tags"},"-Tags"),(0,r.kt)("p",null,"One or more tags.\nTo specify multiple, use commas to separate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,r.kt)("p",null,"Specifies the team project for which this function operates."),(0,r.kt)("p",null,"You can tab complete from a list of available projects."),(0,r.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-force"},"-Force"),(0,r.kt)("p",null,"Forces the function without confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,r.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-confirm"},"-Confirm"),(0,r.kt)("p",null,"Prompts you for confirmation before running the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"))}v.isMDXComponent=!0}}]);
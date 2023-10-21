"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6280],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9045:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],s={id:"Remove-VSTeamRelease",title:"Remove-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamRelease.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},i="Remove-VSTeamRelease",m={unversionedId:"modules/vsteam/commands/Remove-VSTeamRelease",id:"modules/vsteam/commands/Remove-VSTeamRelease",title:"Remove-VSTeamRelease",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamRelease.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamRelease",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamRelease",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamRelease.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamRelease",title:"Remove-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamRelease.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamProject"},next:{title:"Remove-VSTeamReleaseDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamReleaseDefinition"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Id",id:"-id",level:3},{value:"-ProjectName",id:"-projectname",level:3},{value:"-Force",id:"-force",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:u},d="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-vsteamrelease"},"Remove-VSTeamRelease"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Removes the releases for a team project."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Remove-VSTeamRelease -Id <Int32[]> [-Force] -ProjectName <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"The Remove-VSTeamRelease function removes the releases for a team project."),(0,o.kt)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamRelease -ProjectName demo | Remove-VSTeamRelease\n")),(0,o.kt)("p",null,"This command gets a list of all releases in the demo project."),(0,o.kt)("p",null,"The pipeline operator (|) passes the data to the Remove-VSTeamRelease function, which removes each release definition object."),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-id"},"-Id"),(0,o.kt)("p",null,"Specifies one or more releases by ID."),(0,o.kt)("p",null,"To specify multiple IDs, use commas to separate the IDs."),(0,o.kt)("p",null,"To find the ID of a release definition, type Get-VSTeamRelease."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,o.kt)("p",null,"Specifies the team project for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available projects."),(0,o.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-force"},"-Force"),(0,o.kt)("p",null,"Forces the function without confirmation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,o.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-confirm"},"-Confirm"),(0,o.kt)("p",null,"Prompts you for confirmation before running the function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"You can pipe release definition IDs to this function."),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamRelease"},"Add-VSTeamRelease")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamRelease"},"Get-VSTeamRelease")))}f.isMDXComponent=!0}}]);
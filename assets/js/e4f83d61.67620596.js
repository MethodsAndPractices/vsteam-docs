"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[2912],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(a),p=o,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||n;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<n;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5020:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),l=["components"],i={id:"Remove-VSTeamProfile",title:"Remove-VSTeamProfile",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamProfile.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Remove-VSTeamProfile",m={unversionedId:"modules/vsteam/commands/Remove-VSTeamProfile",id:"modules/vsteam/commands/Remove-VSTeamProfile",title:"Remove-VSTeamProfile",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamProfile.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamProfile",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamProfile",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamProfile.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamProfile",title:"Remove-VSTeamProfile",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamProfile.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamPool",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamPool"},next:{title:"Remove-VSTeamProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamProject"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Name",id:"-name",level:3},{value:"-Force",id:"-force",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:u},p="wrapper";function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remove-vsteamprofile"},"Remove-VSTeamProfile"),(0,n.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,n.kt)("p",null,"Removes the profile."),(0,n.kt)("h2",{id:"syntax"},"SYNTAX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Remove-VSTeamProfile -Name <String[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,n.kt)("h2",{id:"description"},"DESCRIPTION"),(0,n.kt)("p",null,"Removes the profile."),(0,n.kt)("h2",{id:"examples"},"EXAMPLES"),(0,n.kt)("h3",{id:"example-1"},"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamProfile | Remove-VSTeamProfile -Force\n")),(0,n.kt)("p",null,"This will remove all the profiles on your system."),(0,n.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,n.kt)("h3",{id:"-name"},"-Name"),(0,n.kt)("p",null,"Name of profile to remove."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-force"},"-Force"),(0,n.kt)("p",null,"Forces the function without confirmation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,n.kt)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-confirm"},"-Confirm"),(0,n.kt)("p",null,"Prompts you for confirmation before running the function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,n.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,n.kt)("h2",{id:"inputs"},"INPUTS"),(0,n.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,n.kt)("h2",{id:"notes"},"NOTES"),(0,n.kt)("p",null,"Prerequisites:"),(0,n.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,n.kt)("p",null,"tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,n.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,n.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamProfile"},"Add-VSTeamProfile")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamAPIVersion"},"Set-VSTeamAPIVersion")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamDefaultProject"},"Set-VSTeamDefaultProject")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamDefaultAPITimeout"},"Set-VSTeamDefaultAPITimeout")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/about_vsteam"},"about_vsteam")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/about_vsteam_profiles"},"about_vsteam_profiles")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/about_vsteam_provider"},"about_vsteam_provider")))}f.isMDXComponent=!0}}]);
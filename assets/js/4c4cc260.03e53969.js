"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[2767],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,k=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"Add-VSTeamUserEntitlement",title:"Add-VSTeamUserEntitlement",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamUserEntitlement.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Add-VSTeamUserEntitlement",c={unversionedId:"modules/vsteam/commands/Add-VSTeamUserEntitlement",id:"modules/vsteam/commands/Add-VSTeamUserEntitlement",title:"Add-VSTeamUserEntitlement",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamUserEntitlement.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamUserEntitlement",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamUserEntitlement.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamUserEntitlement",title:"Add-VSTeamUserEntitlement",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamUserEntitlement.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeamTaskGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamTaskGroup"},next:{title:"Add-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamVariableGroup"}},u=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-License",id:"-license",children:[],level:3},{value:"-Group",id:"-group",children:[],level:3},{value:"-LicensingSource",id:"-licensingsource",children:[],level:3},{value:"-MSDNLicenseType",id:"-msdnlicensetype",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-vsteamuserentitlement"},"Add-VSTeamUserEntitlement"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Add a user, assign license and extensions and make them a member of a project group in an account."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Add-VSTeamUserEntitlement -License <String> -Group <String> [-LicensingSource <String>]\n [-MSDNLicenseType <String>] -ProjectName <String> [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Add a user, assign license and extensions and make them a member of a project group in an account."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,l.kt)("p",null,"{{ Add example description here }}"),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-license"},"-License"),(0,l.kt)("p",null,"Type of Account License.\nThe acceptable values for this parameter are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Advanced"),(0,l.kt)("li",{parentName:"ul"},"EarlyAdopter"),(0,l.kt)("li",{parentName:"ul"},"Express"),(0,l.kt)("li",{parentName:"ul"},"None"),(0,l.kt)("li",{parentName:"ul"},"Professional"),(0,l.kt)("li",{parentName:"ul"},"StakeHolder")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: EarlyAdopter\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-group"},"-Group"),(0,l.kt)("p",null,"The acceptable values for this parameter are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom"),(0,l.kt)("li",{parentName:"ul"},"ProjectAdministrator"),(0,l.kt)("li",{parentName:"ul"},"ProjectContributor"),(0,l.kt)("li",{parentName:"ul"},"ProjectReader"),(0,l.kt)("li",{parentName:"ul"},"ProjectStakeholder")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: ProjectContributor\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-licensingsource"},"-LicensingSource"),(0,l.kt)("p",null,"Licensing Source (e.g.\nAccount.\nMSDN etc.).\nThe acceptable values for this parameter are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"account"),(0,l.kt)("li",{parentName:"ul"},"auto"),(0,l.kt)("li",{parentName:"ul"},"msdn"),(0,l.kt)("li",{parentName:"ul"},"none"),(0,l.kt)("li",{parentName:"ul"},"profile"),(0,l.kt)("li",{parentName:"ul"},"trial")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: Account\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-msdnlicensetype"},"-MSDNLicenseType"),(0,l.kt)("p",null,"Type of MSDN License (e.g.\nVisual Studio Professional, Visual Studio Enterprise etc.).\nThe acceptable values for this parameter are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eligible"),(0,l.kt)("li",{parentName:"ul"},"enterprise"),(0,l.kt)("li",{parentName:"ul"},"none"),(0,l.kt)("li",{parentName:"ul"},"platforms"),(0,l.kt)("li",{parentName:"ul"},"premium"),(0,l.kt)("li",{parentName:"ul"},"professional"),(0,l.kt)("li",{parentName:"ul"},"testProfessional"),(0,l.kt)("li",{parentName:"ul"},"ultimate")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemobject"},"System.Object"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
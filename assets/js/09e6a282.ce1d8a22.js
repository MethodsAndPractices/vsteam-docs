"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[5663],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=o.createContext({}),s=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,h=u["".concat(m,".").concat(p)]||u[p]||d[p]||n;return r?o.createElement(h,l(l({ref:t},c),{},{components:r})):o.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),l=["components"],i={id:"Show-VSTeamWorkItem",title:"Show-VSTeamWorkItem",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamWorkItem.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Show-VSTeamWorkItem",s={unversionedId:"modules/vsteam/commands/Show-VSTeamWorkItem",id:"modules/vsteam/commands/Show-VSTeamWorkItem",title:"Show-VSTeamWorkItem",description:"",source:"@site/docs/modules/vsteam/commands/Show-VSTeamWorkItem.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Show-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamWorkItem",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamWorkItem.md",tags:[],version:"current",frontMatter:{id:"Show-VSTeamWorkItem",title:"Show-VSTeamWorkItem",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamWorkItem.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Show-VSTeamReleaseDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamReleaseDefinition"},next:{title:"Stop-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Stop-VSTeamBuild"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Id",id:"-id",level:3},{value:"-ProjectName",id:"-projectname",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"vsteam_lib.WorkItem",id:"vsteam_libworkitem",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:u},p="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"show-vsteamworkitem"},"Show-VSTeamWorkItem"),(0,n.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,n.kt)("p",null,"Opens the work item in the default browser."),(0,n.kt)("h2",{id:"syntax"},"SYNTAX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Show-VSTeamWorkItem -Id <Int32> -ProjectName <String> [<CommonParameters>]\n")),(0,n.kt)("h2",{id:"description"},"DESCRIPTION"),(0,n.kt)("p",null,"Opens the work item in the default browser."),(0,n.kt)("h2",{id:"examples"},"EXAMPLES"),(0,n.kt)("h3",{id:"example-1"},"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Show-VSTeamWorkItem -ProjectName Demo -Id 3\n")),(0,n.kt)("p",null,"This command will open a web browser with the summary of work item 3."),(0,n.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,n.kt)("h3",{id:"-id"},"-Id"),(0,n.kt)("p",null,"Specifies work item by ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases: WorkItemID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,n.kt)("p",null,"Specifies the team project for which this function operates."),(0,n.kt)("p",null,"You can tab complete from a list of available projects."),(0,n.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,n.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,n.kt)("h2",{id:"inputs"},"INPUTS"),(0,n.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,n.kt)("h3",{id:"vsteam_libworkitem"},"vsteam_lib.WorkItem"),(0,n.kt)("h2",{id:"notes"},"NOTES"),(0,n.kt)("p",null,"You can pipe the WorkItem ID to this function."),(0,n.kt)("p",null,"Prerequisites:"),(0,n.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,n.kt)("p",null,"tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,n.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,n.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItem"},"Add-VSTeamWorkItem")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWorkItem"},"Get-VSTeamWorkItem")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[8483],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8088:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"Get-VSTeamWiki",title:"Get-VSTeamWiki",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamWiki.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamWiki",m={unversionedId:"modules/vsteam/commands/Get-VSTeamWiki",id:"modules/vsteam/commands/Get-VSTeamWiki",title:"Get-VSTeamWiki",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamWiki.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamWiki",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWiki",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamWiki.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamWiki",title:"Get-VSTeamWiki",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamWiki.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamVariableGroup"},next:{title:"Get-VSTeamWiql",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWiql"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"ListAllProjects (Default)",id:"listallprojects-default",level:3},{value:"ById",id:"byid",level:3},{value:"ListSingleProject",id:"listsingleproject",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-ProjectName",id:"-projectname",level:3},{value:"-Name",id:"-name",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:u},d="wrapper";function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-vsteamwiki"},"Get-VSTeamWiki"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,"Returns a list of wikis for the selected project."),(0,i.kt)("h2",{id:"syntax"},"SYNTAX"),(0,i.kt)("h3",{id:"listallprojects-default"},"ListAllProjects (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"byid"},"ById"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki -Name <String> -ProjectName <String> [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"listsingleproject"},"ListSingleProject"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki -ProjectName <String> [<CommonParameters>]\n")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"Returns a list of wikis in a project"),(0,i.kt)("p",null,"A single wiki can be returned by providing the wiki namd or Id"),(0,i.kt)("p",null,"You must call Set-VSTeamAccount before calling this function."),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki\n")),(0,i.kt)("p",null,"This will return a list of all the wikis for all the projects"),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki -ProjectName myProject\n")),(0,i.kt)("p",null,"This will return all the wikis for the specified project"),(0,i.kt)("h3",{id:"example-3"},"Example 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamWiki -ProjectName myProject -WikiName my-code-wiki\n")),(0,i.kt)("p",null,"This will return the specified wiki in the project provided"),(0,i.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,i.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,i.kt)("p",null,"Specifies the team project for which this function operates."),(0,i.kt)("p",null,"You can tab complete from a list of available projects."),(0,i.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ById, ListSingleProject\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-name"},"-Name"),(0,i.kt)("p",null,"Name or ID of the Wiki to return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ById\nAliases: WikiId, WikiName\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,i.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,i.kt)("h2",{id:"inputs"},"INPUTS"),(0,i.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,i.kt)("h2",{id:"notes"},"NOTES"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,i.kt)("p",null,"tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,i.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,i.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWiki"},"Add-VSTeamWiki")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamWiki"},"Remove-VSTeamWiki")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[7153],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,v=d["".concat(m,".").concat(p)]||d[p]||u[p]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},565:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"Get-VSTeam",title:"Get-VSTeam",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeam.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Get-VSTeam",s={unversionedId:"modules/vsteam/commands/Get-VSTeam",id:"modules/vsteam/commands/Get-VSTeam",title:"Get-VSTeam",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeam.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeam",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeam.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeam",title:"Get-VSTeam",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeam.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Enable-VSTeamAgent",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Enable-VSTeamAgent"},next:{title:"Get-VSTeamAPIVersion",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAPIVersion"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"UNNAMED_PARAMETER_SET_1",id:"unnamed_parameter_set_1",children:[],level:3},{value:"UNNAMED_PARAMETER_SET_2",id:"unnamed_parameter_set_2",children:[],level:3},{value:"UNNAMED_PARAMETER_SET_3",id:"unnamed_parameter_set_3",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1: Get team by name",id:"example-1-get-team-by-name",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Skip",id:"-skip",children:[],level:3},{value:"-Top",id:"-top",children:[],level:3},{value:"-Name",id:"-name",children:[],level:3},{value:"-TeamId",id:"-teamid",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Team",id:"vsteam_libteam",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-vsteam"},"Get-VSTeam"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Returns a team."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"unnamed_parameter_set_1"},"UNNAMED_PARAMETER_SET_1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeam [-Skip <Int32>] [-Top <Int32>] -ProjectName <String> [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"unnamed_parameter_set_2"},"UNNAMED_PARAMETER_SET_2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeam [[-Name] <String[]>] -ProjectName <String> [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"unnamed_parameter_set_3"},"UNNAMED_PARAMETER_SET_3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeam [-TeamId <String[]>] -ProjectName <String> [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Returns a team."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1-get-team-by-name"},"Example 1: Get team by name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamProject | Get-VSTeam 'Test Team'\n")),(0,l.kt)("p",null,"This command pipes the project name to Get-VSTeam and returns the team with the name 'Test Team'"),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-skip"},"-Skip"),(0,l.kt)("p",null,"The number of items to skip."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-top"},"-Top"),(0,l.kt)("p",null,"Specifies the maximum number to return."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-name"},"-Name"),(0,l.kt)("p",null,"The name of the team to retrieve."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: UNNAMED_PARAMETER_SET_2\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-teamid"},"-TeamId"),(0,l.kt)("p",null,"The id of the team to retrieve."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: UNNAMED_PARAMETER_SET_3\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"vsteam_libteam"},"vsteam_lib.Team"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
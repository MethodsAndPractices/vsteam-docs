"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[882],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"Get-VSTeamGroup",title:"Get-VSTeamGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamGroup",c={unversionedId:"modules/vsteam/commands/Get-VSTeamGroup",id:"modules/vsteam/commands/Get-VSTeamGroup",title:"Get-VSTeamGroup",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamGroup.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGroup.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamGroup",title:"Get-VSTeamGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamGitStat",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGitStat"},next:{title:"Get-VSTeamInfo",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamInfo"}},u=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"UNNAMED_PARAMETER_SET_1",id:"unnamed_parameter_set_1",children:[],level:3},{value:"UNNAMED_PARAMETER_SET_2",id:"unnamed_parameter_set_2",children:[],level:3},{value:"UNNAMED_PARAMETER_SET_3",id:"unnamed_parameter_set_3",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-SubjectTypes",id:"-subjecttypes",children:[],level:3},{value:"-ScopeDescriptor",id:"-scopedescriptor",children:[],level:3},{value:"-Descriptor",id:"-descriptor",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-vsteamgroup"},"Get-VSTeamGroup"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Returns a Group or List of Groups."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("h3",{id:"unnamed_parameter_set_1"},"UNNAMED_PARAMETER_SET_1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamGroup [-SubjectTypes <String[]>] [-ScopeDescriptor <String>] -ProjectName <String>\n [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"unnamed_parameter_set_2"},"UNNAMED_PARAMETER_SET_2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamGroup [-SubjectTypes <String[]>] -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"unnamed_parameter_set_3"},"UNNAMED_PARAMETER_SET_3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamGroup [-Descriptor <String>] -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Returns a Group or List of Groups."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'\n")),(0,o.kt)("p",null,"Assigns Endpoint Administrators group to $group variable."),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-subjecttypes"},"-SubjectTypes"),(0,o.kt)("p",null,"A comma separated list of user subject subtypes to reduce the retrieved results.\nValid subject types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vssgp (Azure DevOps Group)"),(0,o.kt)("li",{parentName:"ul"},"aadgp (Azure Active Directory Group)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-scopedescriptor"},"-ScopeDescriptor"),(0,o.kt)("p",null,"Specify a non-default scope (collection, project) to search for groups."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-descriptor"},"-Descriptor"),(0,o.kt)("p",null,"The descriptor of the desired graph group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_3\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,o.kt)("p",null,"Specifies the team project for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available projects."),(0,o.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"))}m.isMDXComponent=!0}}]);
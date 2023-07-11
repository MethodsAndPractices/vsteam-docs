"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[557],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,v=p["".concat(m,".").concat(d)]||p[d]||u[d]||l;return a?r.createElement(v,o(o({ref:t},c),{},{components:a})):r.createElement(v,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},875:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"Get-VSTeamVariableGroup",title:"Get-VSTeamVariableGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamVariableGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Get-VSTeamVariableGroup",s={unversionedId:"modules/vsteam/commands/Get-VSTeamVariableGroup",id:"modules/vsteam/commands/Get-VSTeamVariableGroup",title:"Get-VSTeamVariableGroup",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamVariableGroup.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamVariableGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamVariableGroup.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamVariableGroup",title:"Get-VSTeamVariableGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamVariableGroup.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamUserProfile",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamUserProfile"},next:{title:"Get-VSTeamWiki",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWiki"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[],level:3},{value:"ByID",id:"byid",children:[],level:3},{value:"ByName",id:"byname",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Id",id:"-id",children:[],level:3},{value:"-Name",id:"-name",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-vsteamvariablegroup"},"Get-VSTeamVariableGroup"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Gets a variable group"),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"list-default"},"List (Default)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamVariableGroup [-ProjectName <String>] [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"byid"},"ByID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamVariableGroup -Id <String> [-ProjectName <String>] [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"byname"},"ByName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamVariableGroup -Name <String> [-ProjectName <String>] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Gets a variable group"),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$methodParameters = @{\n   ProjectName = "some_project_name"\n}\n\nGet-VSTeamVariableGroup @methodParameters\n')),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$methodParameters = @{\n   ProjectName = "some_project_name"\n   Id          = "variable_group_id"\n}\n\nGet-VSTeamVariableGroup @methodParameters\n')),(0,l.kt)("h3",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$methodParameters = @{\n   ProjectName = "some_project_name"\n   Name        = "variable_group_name"\n}\n\nGet-VSTeamVariableGroup @methodParameters\n')),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-id"},"-Id"),(0,l.kt)("p",null,"ID of the existing variable group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByID\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-name"},"-Name"),(0,l.kt)("p",null,"Name of the existing variable group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"systemstring"},"System.String"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemobject"},"System.Object"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamVariableGroup"},"Add-VSTeamVariableGroup")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamVariableGroup"},"Update-VSTeamVariableGroup")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamVariableGroup"},"Remove-VSTeamVariableGroup")))}p.isMDXComponent=!0}}]);
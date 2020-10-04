(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{285:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),c=(a(0),a(329)),o={id:"Get-VSTeamGroup",title:"Get-VSTeamGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGroup.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Get-VSTeamGroup",isDocsHomePage:!1,title:"Get-VSTeamGroup",description:"Get-VSTeamGroup",source:"@site/docs/modules/vsteam/commands/Get-VSTeamGroup.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGroup.md",sidebar:"vsteam",previous:{title:"Get-VSTeamGitStat",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGitStat"},next:{title:"Get-VSTeamInfo",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamInfo"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"UNNAMED_PARAMETER_SET_1",id:"unnamed_parameter_set_1",children:[]},{value:"UNNAMED_PARAMETER_SET_2",id:"unnamed_parameter_set_2",children:[]},{value:"UNNAMED_PARAMETER_SET_3",id:"unnamed_parameter_set_3",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Descriptor",id:"-descriptor",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-ScopeDescriptor",id:"-scopedescriptor",children:[]},{value:"-SubjectTypes",id:"-subjecttypes",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteamgroup"},"Get-VSTeamGroup"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Returns a Group or List of Groups."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h3",{id:"unnamed_parameter_set_1"},"UNNAMED_PARAMETER_SET_1"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamGroup [-SubjectTypes <String[]>] [-ScopeDescriptor <String>] -ProjectName <String>\n [<CommonParameters>]\n")),Object(c.b)("h3",{id:"unnamed_parameter_set_2"},"UNNAMED_PARAMETER_SET_2"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamGroup [-SubjectTypes <String[]>] -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h3",{id:"unnamed_parameter_set_3"},"UNNAMED_PARAMETER_SET_3"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamGroup [-Descriptor <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Returns a Group or List of Groups."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'\n")),Object(c.b)("p",null,"Assigns Endpoint Administrators group to $group variable."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(c.b)("p",null,"The descriptor of the desired graph group."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_3\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-scopedescriptor"},"-ScopeDescriptor"),Object(c.b)("p",null,"Specify a non-default scope (collection, project) to search for groups."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-subjecttypes"},"-SubjectTypes"),Object(c.b)("p",null,"A comma separated list of user subject subtypes to reduce the retrieved results.\nValid subject types:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"vssgp (Azure DevOps Group)"),Object(c.b)("li",{parentName:"ul"},"aadgp (Azure Active Directory Group)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nParameter Sets: UNNAMED_PARAMETER_SET_1, UNNAMED_PARAMETER_SET_2\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"Prerequisites:"),Object(c.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(c.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(c.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(c.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(c.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}s.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||c;return a?n.a.createElement(d,i(i({ref:t},p),{},{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
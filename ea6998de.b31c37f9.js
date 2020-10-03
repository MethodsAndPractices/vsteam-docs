(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{307:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(329)),i={id:"Add-VSTeamWorkItemIterationPermission",title:"Add-VSTeamWorkItemIterationPermission",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItemIterationPermission.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Add-VSTeamWorkItemIterationPermission",isDocsHomePage:!1,title:"Add-VSTeamWorkItemIterationPermission",description:"Add-VSTeamWorkItemIterationPermission",source:"@site/docs/modules/vsteam/commands/Add-VSTeamWorkItemIterationPermission.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItemIterationPermission",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItemIterationPermission.md",sidebar:"vsteam",previous:{title:"Add-VSTeamWorkItemAreaPermission",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItemAreaPermission"},next:{title:"Clear-VSTeamDefaultAPITimeout",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Clear-VSTeamDefaultAPITimeout"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByProjectAndIterationIdAndUser (Default)",id:"byprojectanditerationidanduser-default",children:[]},{value:"ByProjectAndIterationIdAndGroup",id:"byprojectanditerationidandgroup",children:[]},{value:"ByProjectAndIterationIdAndDescriptor",id:"byprojectanditerationidanddescriptor",children:[]},{value:"ByProjectAndIterationPathAndGroup",id:"byprojectanditerationpathandgroup",children:[]},{value:"ByProjectAndIterationPathAndUser",id:"byprojectanditerationpathanduser",children:[]},{value:"ByProjectAndIterationPathAndDescriptor",id:"byprojectanditerationpathanddescriptor",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-IterationID",id:"-iterationid",children:[]},{value:"-IterationPath",id:"-iterationpath",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"-User",id:"-user",children:[]},{value:"-Group",id:"-group",children:[]},{value:"-Allow",id:"-allow",children:[]},{value:"-Deny",id:"-deny",children:[]},{value:"-Project",id:"-project",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"add-vsteamworkitemiterationpermission"},"Add-VSTeamWorkItemIterationPermission"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Add Permissions to an Iteration"),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"byprojectanditerationidanduser-default"},"ByProjectAndIterationIdAndUser (Default)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationID <Int32> -User <User>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byprojectanditerationidandgroup"},"ByProjectAndIterationIdAndGroup"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationID <Int32> -Group <Group>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byprojectanditerationidanddescriptor"},"ByProjectAndIterationIdAndDescriptor"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationID <Int32> -Descriptor <String>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byprojectanditerationpathandgroup"},"ByProjectAndIterationPathAndGroup"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationPath <String> -Group <Group>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byprojectanditerationpathanduser"},"ByProjectAndIterationPathAndUser"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationPath <String> -User <User>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byprojectanditerationpathanddescriptor"},"ByProjectAndIterationPathAndDescriptor"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItemIterationPermission -Project <Project> -IterationPath <String> -Descriptor <String>\n -Allow <WorkItemIterationPermissions> -Deny <WorkItemIterationPermissions> [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Add Permissions to an Iteration"),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(o.b)("p",null,"{{ Add example description here }}"),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-iterationid"},"-IterationID"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: ByProjectAndIterationIdAndUser, ByProjectAndIterationIdAndGroup, ByProjectAndIterationIdAndDescriptor\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-iterationpath"},"-IterationPath"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByProjectAndIterationPathAndGroup, ByProjectAndIterationPathAndUser, ByProjectAndIterationPathAndDescriptor\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByProjectAndIterationIdAndDescriptor, ByProjectAndIterationPathAndDescriptor\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-user"},"-User"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: User\nParameter Sets: ByProjectAndIterationIdAndUser, ByProjectAndIterationPathAndUser\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-group"},"-Group"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Group\nParameter Sets: ByProjectAndIterationIdAndGroup, ByProjectAndIterationPathAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-allow"},"-Allow"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: WorkItemIterationPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-deny"},"-Deny"),Object(o.b)("p",null,"@{Text=}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: WorkItemIterationPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-project"},"-Project"),Object(o.b)("p",null,"{{ Fill Project Description }}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Project\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"systemobject"},"System.Object"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(o.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(o.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(o.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}s.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return r?a.a.createElement(b,c(c({ref:t},d),{},{components:r})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
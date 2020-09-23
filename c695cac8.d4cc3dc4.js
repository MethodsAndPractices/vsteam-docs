(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(9),i=(r(0),r(325)),a={id:"Add-VSTeamGitRepositoryPermission",title:"Add-VSTeamGitRepositoryPermission",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamGitRepositoryPermission.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},s={id:"modules/vsteam/commands/Add-VSTeamGitRepositoryPermission",isDocsHomePage:!1,title:"Add-VSTeamGitRepositoryPermission",description:"Add-VSTeamGitRepositoryPermission",source:"@site/docs/modules/vsteam/commands/Add-VSTeamGitRepositoryPermission.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamGitRepositoryPermission",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamGitRepositoryPermission.md",sidebar:"vsteam",previous:{title:"Add-VSTeamGitRepository",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamGitRepository"},next:{title:"Add-VSTeamIteration",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamIteration"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByProjectAndUser (Default)",id:"byprojectanduser-default",children:[]},{value:"ByRepositoryIdAndDescriptor",id:"byrepositoryidanddescriptor",children:[]},{value:"ByRepositoryIdAndUser",id:"byrepositoryidanduser",children:[]},{value:"ByRepositoryIdAndGroup",id:"byrepositoryidandgroup",children:[]},{value:"ByRepositoryNameAndDescriptor",id:"byrepositorynameanddescriptor",children:[]},{value:"ByRepositoryNameAndUser",id:"byrepositorynameanduser",children:[]},{value:"ByRepositoryNameAndGroup",id:"byrepositorynameandgroup",children:[]},{value:"ByProjectAndDescriptor",id:"byprojectanddescriptor",children:[]},{value:"ByProjectAndGroup",id:"byprojectandgroup",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-RepositoryName",id:"-repositoryname",children:[]},{value:"-BranchName",id:"-branchname",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"-User",id:"-user",children:[]},{value:"-Group",id:"-group",children:[]},{value:"-Allow",id:"-allow",children:[]},{value:"-Deny",id:"-deny",children:[]},{value:"-Project",id:"-project",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamgitrepositorypermission"},"Add-VSTeamGitRepositoryPermission"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"byprojectanduser-default"},"ByProjectAndUser (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -User <User> -Allow <GitRepositoryPermissions>\n -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidanddescriptor"},"ByRepositoryIdAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryId <Guid> [-BranchName <String>]\n -Descriptor <String> -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidanduser"},"ByRepositoryIdAndUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryId <Guid> [-BranchName <String>] -User <User>\n -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositoryidandgroup"},"ByRepositoryIdAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryId <Guid> [-BranchName <String>] -Group <Group>\n -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameanddescriptor"},"ByRepositoryNameAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryName <String> [-BranchName <String>]\n -Descriptor <String> -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameanduser"},"ByRepositoryNameAndUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryName <String> [-BranchName <String>]\n -User <User> -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byrepositorynameandgroup"},"ByRepositoryNameAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -RepositoryName <String> [-BranchName <String>]\n -Group <Group> -Allow <GitRepositoryPermissions> -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byprojectanddescriptor"},"ByProjectAndDescriptor"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -Descriptor <String> -Allow <GitRepositoryPermissions>\n -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"byprojectandgroup"},"ByProjectAndGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Add-VSTeamGitRepositoryPermission -Project <Project> -Group <Group> -Allow <GitRepositoryPermissions>\n -Deny <GitRepositoryPermissions> [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Add permissions to a git repository, all repositories in a project, or a specific branch"),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(i.b)("p",null,"{{ Add example description here }}"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: ByRepositoryIdAndDescriptor, ByRepositoryIdAndUser, ByRepositoryIdAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-repositoryname"},"-RepositoryName"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryNameAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-branchname"},"-BranchName"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryIdAndDescriptor, ByRepositoryIdAndUser, ByRepositoryIdAndGroup, ByRepositoryNameAndDescriptor, ByRepositoryNameAndUser, ByRepositoryNameAndGroup\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByRepositoryIdAndDescriptor, ByRepositoryNameAndDescriptor, ByProjectAndDescriptor\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-user"},"-User"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: User\nParameter Sets: ByProjectAndUser, ByRepositoryIdAndUser, ByRepositoryNameAndUser\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-group"},"-Group"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Group\nParameter Sets: ByRepositoryIdAndGroup, ByRepositoryNameAndGroup, ByProjectAndGroup\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-allow"},"-Allow"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: GitRepositoryPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-deny"},"-Deny"),Object(i.b)("p",null,"@{Text=}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: GitRepositoryPermissions\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-project"},"-Project"),Object(i.b)("p",null,"{{ Fill Project Description }}"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Project\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h3",{id:"systemobject"},"System.Object"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(i.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(i.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(i.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(i.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}l.isMDXComponent=!0},325:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,u=d["".concat(a,".").concat(b)]||d[b]||m[b]||i;return r?n.a.createElement(u,s(s({ref:t},p),{},{components:r})):n.a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
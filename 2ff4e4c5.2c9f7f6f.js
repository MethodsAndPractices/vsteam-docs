(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),l=(a(0),a(331)),o={id:"Get-VSTeamApproval",title:"Get-VSTeamApproval",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamApproval.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Get-VSTeamApproval",isDocsHomePage:!1,title:"Get-VSTeamApproval",description:"Get-VSTeamApproval",source:"@site/docs/modules/vsteam/commands/Get-VSTeamApproval.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamApproval",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamApproval.md",sidebar:"vsteam",previous:{title:"Get-VSTeamAPIVersion",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAPIVersion"},next:{title:"Get-VSTeamArea",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamArea"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-StatusFilter",id:"-statusfilter",children:[]},{value:"-ReleaseId",id:"-releaseid",children:[]},{value:"-AssignedToFilter",id:"-assignedtofilter",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.BuildDefinition",id:"vsteam_libbuilddefinition",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteamapproval"},"Get-VSTeamApproval"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Gets a list of approvals for all releases for a team project."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamApproval [-StatusFilter <String>] [-ReleaseId <Int32[]>] [-AssignedToFilter <String>]\n -ProjectName <String> [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"The Get-VSTeamApproval function gets the approvals for all releases for a team project."),Object(l.b)("p",null,"With just a project name, this function gets all of the pending approvals for that team project."),Object(l.b)("p",null,'When using with AzD "IncludeMyGroupApprovals" will be added to the request when Assigned To Filter is not empty.'),Object(l.b)("p",null,'When using with TFS "IncludeMyGroupApprovals" will be added to the request when Assigned To Filter, Release Id Filter are not empty and Status Filter equals Pending.'),Object(l.b)("p",null,"The vsteam_lib.Approval type has three custom table formats:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pending: ID, Status, Release Name, Environment, Type, Approver Name, Release Definitions"),Object(l.b)("li",{parentName:"ul"},"Approved: Release Name, Environment, Is Automated, Approval Type, Approver Name, Release Definitions, Comments"),Object(l.b)("li",{parentName:"ul"},"Rejected: Release Name, Environment, Approval Type, Approver Name, Release Definition, Comments")),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamApproval -ProjectName Demo\n")),Object(l.b)("p",null,"This command gets a list of all pending approvals."),Object(l.b)("h3",{id:"example-2"},"Example 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamApproval -ProjectName Demo -StatusFilter Approved | Format-Table -View Approved\n")),Object(l.b)("p",null,"This command gets a list of all approved approvals using a custom table format."),Object(l.b)("h3",{id:"example-3"},"Example 3"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamApproval -ProjectName Demo -AssignedToFilter Administrator -StatusFilter Rejected | FT -View Rejected\n")),Object(l.b)("p",null,"This command gets a list of all approvals rejected by Administrator using a custom table format."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-statusfilter"},"-StatusFilter"),Object(l.b)("p",null,"By default the function returns Pending approvals."),Object(l.b)("p",null,"Using this filter you can return Approved, ReAssigned or Rejected approvals."),Object(l.b)("p",null,"There is a custom table view for each status."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-releaseid"},"-ReleaseId"),Object(l.b)("p",null,"Only approvals for the release ids provided will be returned."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-assignedtofilter"},"-AssignedToFilter"),Object(l.b)("p",null,"Approvals are filtered to only those assigned to this user."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"vsteam_libbuilddefinition"},"vsteam_lib.BuildDefinition"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"You can pipe build definition IDs to this function."),Object(l.b)("p",null,"Prerequisites:"),Object(l.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(l.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(l.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(l.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(l.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamBuildDefinition")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamBuildDefinition")))}s.isMDXComponent=!0},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||l;return a?r.a.createElement(d,i(i({ref:t},p),{},{components:a})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
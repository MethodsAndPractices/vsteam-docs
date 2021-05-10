(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{300:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return d}));var c=t(2),n=t(9),r=(t(0),t(335)),l={id:"Add-VSTeamAccessControlEntry",title:"Add-VSTeamAccessControlEntry",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAccessControlEntry.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},b={id:"modules/vsteam/commands/Add-VSTeamAccessControlEntry",isDocsHomePage:!1,title:"Add-VSTeamAccessControlEntry",description:"Add-VSTeamAccessControlEntry",source:"@site/docs/modules/vsteam/commands/Add-VSTeamAccessControlEntry.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamAccessControlEntry",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAccessControlEntry.md",sidebar:"vsteam",previous:{title:"Add-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeam"},next:{title:"Add-VSTeamArea",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamArea"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByNamespace (Default)",id:"bynamespace-default",children:[]},{value:"ByNamespaceId",id:"bynamespaceid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-SecurityNamespace",id:"-securitynamespace",children:[]},{value:"-SecurityNamespaceId",id:"-securitynamespaceid",children:[]},{value:"-Token",id:"-token",children:[]},{value:"-AllowMask",id:"-allowmask",children:[]},{value:"-DenyMask",id:"-denymask",children:[]},{value:"-Descriptor",id:"-descriptor",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.AccessControlEntry",id:"vsteam_libaccesscontrolentry",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:i};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"add-vsteamaccesscontrolentry"},"Add-VSTeamAccessControlEntry"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,'Add or update ACEs in the ACL for the provided token.\nThe request contains the target token, a list of ACEs and a optional merge parameter.\nIn the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.\nIf set, the existing ACE has its allow and deny merged with the incoming ACE\'s allow and deny.\nIf unset, the existing ACE is displaced.'),Object(r.b)("p",null,"Note: This is a low-level function.\nYou should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"bynamespace-default"},"ByNamespace (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),"Add-VSTeamAccessControlEntry -SecurityNamespace <SecurityNamespace> -Token <String> -Descriptor <String>\n -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]\n")),Object(r.b)("h3",{id:"bynamespaceid"},"ByNamespaceId"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),"Add-VSTeamAccessControlEntry -SecurityNamespaceId <Guid> -Token <String> -Descriptor <String>\n -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,'Add or update ACEs in the ACL for the provided token.\nThe request contains the target token, a list of ACEs and a optional merge parameter.\nIn the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.\nIf set, the existing ACE has its allow and deny merged with the incoming ACE\'s allow and deny.\nIf unset, the existing ACE is displaced.'),Object(r.b)("p",null,"Note: This is a low-level function.\nYou should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(r.b)("p",null,"{{ Add example description here }}"),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-securitynamespace"},"-SecurityNamespace"),Object(r.b)("p",null,"Security namespace object."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SecurityNamespace\nParameter Sets: ByNamespace\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-securitynamespaceid"},"-SecurityNamespaceId"),Object(r.b)("p",null,"Security namespace identifier."),Object(r.b)("p",null,"Valid IDs are:"),Object(r.b)("p",null,"AzD:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Analytics (58450c49-b02d-465a-ab12-59ae512d6531)"),Object(r.b)("li",{parentName:"ul"},"AnalyticsViews (d34d3680-dfe5-4cc6-a949-7d9c68f73cba)"),Object(r.b)("li",{parentName:"ul"},"ReleaseManagement (7c7d32f7-0e86-4cd6-892e-b35dbba870bd)"),Object(r.b)("li",{parentName:"ul"},"ReleaseManagement2 (c788c23e-1b46-4162-8f5e-d7585343b5de)"),Object(r.b)("li",{parentName:"ul"},"Identity (5a27515b-ccd7-42c9-84f1-54c998f03866)"),Object(r.b)("li",{parentName:"ul"},"WorkItemTrackingAdministration (445d2788-c5fb-4132-bbef-09c4045ad93f)"),Object(r.b)("li",{parentName:"ul"},"DistributedTask (101eae8c-1709-47f9-b228-0e476c35b3ba)"),Object(r.b)("li",{parentName:"ul"},"WorkItemQueryFolders (71356614-aad7-4757-8f2c-0fb3bff6f680)"),Object(r.b)("li",{parentName:"ul"},"GitRepositories (2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87)"),Object(r.b)("li",{parentName:"ul"},"VersionControlItems2 (3c15a8b7-af1a-45c2-aa97-2cb97078332e)"),Object(r.b)("li",{parentName:"ul"},"EventSubscriber (2bf24a2b-70ba-43d3-ad97-3d9e1f75622f)"),Object(r.b)("li",{parentName:"ul"},"WorkItemTrackingProvision (5a6cd233-6615-414d-9393-48dbb252bd23)"),Object(r.b)("li",{parentName:"ul"},"ServiceEndpoints (49b48001-ca20-4adc-8111-5b60c903a50c)"),Object(r.b)("li",{parentName:"ul"},"ServiceHooks (cb594ebe-87dd-4fc9-ac2c-6a10a4c92046)"),Object(r.b)("li",{parentName:"ul"},"Chat (bc295513-b1a2-4663-8d1a-7017fd760d18)"),Object(r.b)("li",{parentName:"ul"},"Collection (3e65f728-f8bc-4ecd-8764-7e378b19bfa7)"),Object(r.b)("li",{parentName:"ul"},"Proxy (cb4d56d2-e84b-457e-8845-81320a133fbb)"),Object(r.b)("li",{parentName:"ul"},"Plan (bed337f8-e5f3-4fb9-80da-81e17d06e7a8)"),Object(r.b)("li",{parentName:"ul"},"Process (2dab47f9-bd70-49ed-9bd5-8eb051e59c02)"),Object(r.b)("li",{parentName:"ul"},"AccountAdminSecurity (11238e09-49f2-40c7-94d0-8f0307204ce4)"),Object(r.b)("li",{parentName:"ul"},"Library (b7e84409-6553-448a-bbb2-af228e07cbeb)"),Object(r.b)("li",{parentName:"ul"},"Environment (83d4c2e6-e57d-4d6e-892b-b87222b7ad20)"),Object(r.b)("li",{parentName:"ul"},"Project (52d39943-cb85-4d7f-8fa8-c6baac873819)"),Object(r.b)("li",{parentName:"ul"},"EventSubscription (58b176e7-3411-457a-89d0-c6d0ccb3c52b)"),Object(r.b)("li",{parentName:"ul"},"CSS (83e28ad4-2d72-4ceb-97b0-c7726d5502c3)"),Object(r.b)("li",{parentName:"ul"},"TeamLabSecurity (9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1)"),Object(r.b)("li",{parentName:"ul"},"ProjectAnalysisLanguageMetrics (fc5b7b85-5d6b-41eb-8534-e128cb10eb67)"),Object(r.b)("li",{parentName:"ul"},"Tagging (bb50f182-8e5e-40b8-bc21-e8752a1e7ae2)"),Object(r.b)("li",{parentName:"ul"},"MetaTask (f6a4de49-dbe2-4704-86dc-f8ec1a294436)"),Object(r.b)("li",{parentName:"ul"},"Iteration (bf7bfa03-b2b7-47db-8113-fa2e002cc5b1)"),Object(r.b)("li",{parentName:"ul"},"Favorites (fa557b48-b5bf-458a-bb2b-1b680426fe8b)"),Object(r.b)("li",{parentName:"ul"},"Registry (4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c)"),Object(r.b)("li",{parentName:"ul"},"Graph (c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e)"),Object(r.b)("li",{parentName:"ul"},"ViewActivityPaneSecurity (dc02bf3d-cd48-46c3-8a41-345094ecc94b)"),Object(r.b)("li",{parentName:"ul"},"Job (2a887f97-db68-4b7c-9ae3-5cebd7add999)"),Object(r.b)("li",{parentName:"ul"},"WorkItemTracking (73e71c45-d483-40d5-bdba-62fd076f7f87)"),Object(r.b)("li",{parentName:"ul"},"StrongBox (4a9e8381-289a-4dfd-8460-69028eaa93b3)"),Object(r.b)("li",{parentName:"ul"},"Server (1f4179b3-6bac-4d01-b421-71ea09171400)"),Object(r.b)("li",{parentName:"ul"},"TestManagement  (e06e1c24-e93d-4e4a-908a-7d951187b483)"),Object(r.b)("li",{parentName:"ul"},"SettingEntries (6ec4592e-048c-434e-8e6c-8671753a8418)"),Object(r.b)("li",{parentName:"ul"},"BuildAdministration (302acaca-b667-436d-a946-87133492041c)"),Object(r.b)("li",{parentName:"ul"},"Location (2725d2bc-7520-4af4-b0e3-8d876494731f)"),Object(r.b)("li",{parentName:"ul"},"Boards (251e12d9-bea3-43a8-bfdb-901b98c0125e)"),Object(r.b)("li",{parentName:"ul"},"UtilizationPermissions (83abde3a-4593-424e-b45f-9898af99034d)"),Object(r.b)("li",{parentName:"ul"},"WorkItemsHub (c0e7a722-1cad-4ae6-b340-a8467501e7ce)"),Object(r.b)("li",{parentName:"ul"},"WebPlatform (0582eb05-c896-449a-b933-aa3d99e121d6)"),Object(r.b)("li",{parentName:"ul"},"VersionControlPrivileges (66312704-deb5-43f9-b51c-ab4ff5e351c3)"),Object(r.b)("li",{parentName:"ul"},"Workspaces (93bafc04-9075-403a-9367-b7164eac6b5c)"),Object(r.b)("li",{parentName:"ul"},"CrossProjectWidgetView (093cbb02-722b-4ad6-9f88-bc452043fa63)"),Object(r.b)("li",{parentName:"ul"},"WorkItemTrackingConfiguration (35e35e8e-686d-4b01-aff6-c369d6e36ce0)"),Object(r.b)("li",{parentName:"ul"},"Discussion Threads (0d140cae-8ac1-4f48-b6d1-c93ce0301a12)"),Object(r.b)("li",{parentName:"ul"},"BoardsExternalIntegration (5ab15bc8-4ea1-d0f3-8344-cab8fe976877)"),Object(r.b)("li",{parentName:"ul"},"DataProvider (7ffa7cf4-317c-4fea-8f1d-cfda50cfa956)"),Object(r.b)("li",{parentName:"ul"},"Social (81c27cc8-7a9f-48ee-b63f-df1e1d0412dd)"),Object(r.b)("li",{parentName:"ul"},"Security (9a82c708-bfbe-4f31-984c-e860c2196781)"),Object(r.b)("li",{parentName:"ul"},"IdentityPicker (a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1)"),Object(r.b)("li",{parentName:"ul"},"ServicingOrchestration (84cc1aa4-15bc-423d-90d9-f97c450fc729)"),Object(r.b)("li",{parentName:"ul"},"Build (33344d9c-fc72-4d6f-aba5-fa317101a7e9)"),Object(r.b)("li",{parentName:"ul"},"DashboardsPrivileges (8adf73b7-389a-4276-b638-fe1653f7efc7)"),Object(r.b)("li",{parentName:"ul"},"VersionControlItems (a39371cf-0841-4c16-bbd3-276e341bc052)")),Object(r.b)("p",null,"VSSPS:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EventSubscriber (2bf24a2b-70ba-43d3-ad97-3d9e1f75622f) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"EventSubscription (58b176e7-3411-457a-89d0-c6d0ccb3c52b) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Registry (4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Graph (c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Invitation (ea0b4d1e-577a-4797-97b5-2f5755e548d5) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"SystemGraph (b24dfdf1-285a-4ea6-a55b-32549a68121d) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Job (2a887f97-db68-4b7c-9ae3-5cebd7add999) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"CommerceCollectionSecurity (307be2d3-12ed-45c2-aacf-6598760efca7) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"StrongBox (4a9e8381-289a-4dfd-8460-69028eaa93b3) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"GroupLicensing (c6a4fd35-b508-49eb-8ea7-7189df5f3698) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Server (1f4179b3-6bac-4d01-b421-71ea09171400) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"SettingEntries (6ec4592e-048c-434e-8e6c-8671753a8418) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"RemotableTemplateTest (ccdcb71c-4780-4a42-9bb4-8bce07a7628f) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Location (2725d2bc-7520-4af4-b0e3-8d876494731f) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"WebPlatform (0582eb05-c896-449a-b933-aa3d99e121d6) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"DataProvider (7ffa7cf4-317c-4fea-8f1d-cfda50cfa956) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"Security (9a82c708-bfbe-4f31-984c-e860c2196781) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"IdentityPicker (a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1) (VSSPS)"),Object(r.b)("li",{parentName:"ul"},"ServicingOrchestration (84cc1aa4-15bc-423d-90d9-f97c450fc729) (VSSPS)")),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nParameter Sets: ByNamespaceId\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-token"},"-Token"),Object(r.b)("p",null,"The security Token"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-allowmask"},"-AllowMask"),Object(r.b)("p",null,"Bitmask for Allow Permissions"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-denymask"},"-DenyMask"),Object(r.b)("p",null,"Bitmask for Deny Permissions"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-descriptor"},"-Descriptor"),Object(r.b)("p",null,"{{ Fill Descriptor Description }}"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"vsteam_libaccesscontrolentry"},"vsteam_lib.AccessControlEntry"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"This is a low-level function.\nYou should really use a high level function (Add-VSTeam...Permission / Set-VSTeam...Permission / Get-VSTeam...Permission) unless you know what you are doing."),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(r.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(r.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(r.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(r.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(r.b)("p",null,Object(r.b)("a",Object(c.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}d.isMDXComponent=!0},335:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return p}));var c=t(0),n=t.n(c);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,c,n=function(e,a){if(null==e)return{};var t,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),d=function(e){var a=n.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},s=function(e){var a=d(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,c=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=c,p=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?n.a.createElement(p,b(b({ref:a},o),{},{components:t})):n.a.createElement(p,b({ref:a},o))}));function p(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var r=t.length,l=new Array(r);l[0]=m;var b={};for(var i in a)hasOwnProperty.call(a,i)&&(b[i]=a[i]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
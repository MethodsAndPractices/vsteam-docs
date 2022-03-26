"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[4081],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return p}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||l;return t?n.createElement(f,i(i({ref:a},o),{},{components:t})):n.createElement(f,i({ref:a},o))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5392:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],c={id:"Add-VSTeamAccessControlEntry",title:"Add-VSTeamAccessControlEntry",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAccessControlEntry.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},d="Add-VSTeamAccessControlEntry",s={unversionedId:"modules/vsteam/commands/Add-VSTeamAccessControlEntry",id:"modules/vsteam/commands/Add-VSTeamAccessControlEntry",title:"Add-VSTeamAccessControlEntry",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamAccessControlEntry.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamAccessControlEntry",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamAccessControlEntry",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAccessControlEntry.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamAccessControlEntry",title:"Add-VSTeamAccessControlEntry",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAccessControlEntry.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeam"},next:{title:"Add-VSTeamArea",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamArea"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"ByNamespace (Default)",id:"bynamespace-default",children:[],level:3},{value:"ByNamespaceId",id:"bynamespaceid",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-SecurityNamespace",id:"-securitynamespace",children:[],level:3},{value:"-SecurityNamespaceId",id:"-securitynamespaceid",children:[],level:3},{value:"-Token",id:"-token",children:[],level:3},{value:"-AllowMask",id:"-allowmask",children:[],level:3},{value:"-DenyMask",id:"-denymask",children:[],level:3},{value:"-Descriptor",id:"-descriptor",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.AccessControlEntry",id:"vsteam_libaccesscontrolentry",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],m={toc:o};function u(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-vsteamaccesscontrolentry"},"Add-VSTeamAccessControlEntry"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,'Add or update ACEs in the ACL for the provided token.\nThe request contains the target token, a list of ACEs and a optional merge parameter.\nIn the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.\nIf set, the existing ACE has its allow and deny merged with the incoming ACE\'s allow and deny.\nIf unset, the existing ACE is displaced.'),(0,l.kt)("p",null,"Note: This is a low-level function.\nYou should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("h3",{id:"bynamespace-default"},"ByNamespace (Default)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Add-VSTeamAccessControlEntry -SecurityNamespace <SecurityNamespace> -Token <String> -Descriptor <String>\n -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]\n")),(0,l.kt)("h3",{id:"bynamespaceid"},"ByNamespaceId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Add-VSTeamAccessControlEntry -SecurityNamespaceId <Guid> -Token <String> -Descriptor <String>\n -AllowMask <Int32> -DenyMask <Int32> [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,'Add or update ACEs in the ACL for the provided token.\nThe request contains the target token, a list of ACEs and a optional merge parameter.\nIn the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior.\nIf set, the existing ACE has its allow and deny merged with the incoming ACE\'s allow and deny.\nIf unset, the existing ACE is displaced.'),(0,l.kt)("p",null,"Note: This is a low-level function.\nYou should really use a high level function (Add-VSTeam Permission / Set-VSTeam Permission / Get-VSTeam*Permission) unless you know what you are doing."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,l.kt)("p",null,"{{ Add example description here }}"),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-securitynamespace"},"-SecurityNamespace"),(0,l.kt)("p",null,"Security namespace object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SecurityNamespace\nParameter Sets: ByNamespace\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-securitynamespaceid"},"-SecurityNamespaceId"),(0,l.kt)("p",null,"Security namespace identifier."),(0,l.kt)("p",null,"Valid IDs are:"),(0,l.kt)("p",null,"AzD:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Analytics (58450c49-b02d-465a-ab12-59ae512d6531)"),(0,l.kt)("li",{parentName:"ul"},"AnalyticsViews (d34d3680-dfe5-4cc6-a949-7d9c68f73cba)"),(0,l.kt)("li",{parentName:"ul"},"ReleaseManagement (7c7d32f7-0e86-4cd6-892e-b35dbba870bd)"),(0,l.kt)("li",{parentName:"ul"},"ReleaseManagement2 (c788c23e-1b46-4162-8f5e-d7585343b5de)"),(0,l.kt)("li",{parentName:"ul"},"Identity (5a27515b-ccd7-42c9-84f1-54c998f03866)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemTrackingAdministration (445d2788-c5fb-4132-bbef-09c4045ad93f)"),(0,l.kt)("li",{parentName:"ul"},"DistributedTask (101eae8c-1709-47f9-b228-0e476c35b3ba)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemQueryFolders (71356614-aad7-4757-8f2c-0fb3bff6f680)"),(0,l.kt)("li",{parentName:"ul"},"GitRepositories (2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87)"),(0,l.kt)("li",{parentName:"ul"},"VersionControlItems2 (3c15a8b7-af1a-45c2-aa97-2cb97078332e)"),(0,l.kt)("li",{parentName:"ul"},"EventSubscriber (2bf24a2b-70ba-43d3-ad97-3d9e1f75622f)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemTrackingProvision (5a6cd233-6615-414d-9393-48dbb252bd23)"),(0,l.kt)("li",{parentName:"ul"},"ServiceEndpoints (49b48001-ca20-4adc-8111-5b60c903a50c)"),(0,l.kt)("li",{parentName:"ul"},"ServiceHooks (cb594ebe-87dd-4fc9-ac2c-6a10a4c92046)"),(0,l.kt)("li",{parentName:"ul"},"Chat (bc295513-b1a2-4663-8d1a-7017fd760d18)"),(0,l.kt)("li",{parentName:"ul"},"Collection (3e65f728-f8bc-4ecd-8764-7e378b19bfa7)"),(0,l.kt)("li",{parentName:"ul"},"Proxy (cb4d56d2-e84b-457e-8845-81320a133fbb)"),(0,l.kt)("li",{parentName:"ul"},"Plan (bed337f8-e5f3-4fb9-80da-81e17d06e7a8)"),(0,l.kt)("li",{parentName:"ul"},"Process (2dab47f9-bd70-49ed-9bd5-8eb051e59c02)"),(0,l.kt)("li",{parentName:"ul"},"AccountAdminSecurity (11238e09-49f2-40c7-94d0-8f0307204ce4)"),(0,l.kt)("li",{parentName:"ul"},"Library (b7e84409-6553-448a-bbb2-af228e07cbeb)"),(0,l.kt)("li",{parentName:"ul"},"Environment (83d4c2e6-e57d-4d6e-892b-b87222b7ad20)"),(0,l.kt)("li",{parentName:"ul"},"Project (52d39943-cb85-4d7f-8fa8-c6baac873819)"),(0,l.kt)("li",{parentName:"ul"},"EventSubscription (58b176e7-3411-457a-89d0-c6d0ccb3c52b)"),(0,l.kt)("li",{parentName:"ul"},"CSS (83e28ad4-2d72-4ceb-97b0-c7726d5502c3)"),(0,l.kt)("li",{parentName:"ul"},"TeamLabSecurity (9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1)"),(0,l.kt)("li",{parentName:"ul"},"ProjectAnalysisLanguageMetrics (fc5b7b85-5d6b-41eb-8534-e128cb10eb67)"),(0,l.kt)("li",{parentName:"ul"},"Tagging (bb50f182-8e5e-40b8-bc21-e8752a1e7ae2)"),(0,l.kt)("li",{parentName:"ul"},"MetaTask (f6a4de49-dbe2-4704-86dc-f8ec1a294436)"),(0,l.kt)("li",{parentName:"ul"},"Iteration (bf7bfa03-b2b7-47db-8113-fa2e002cc5b1)"),(0,l.kt)("li",{parentName:"ul"},"Favorites (fa557b48-b5bf-458a-bb2b-1b680426fe8b)"),(0,l.kt)("li",{parentName:"ul"},"Registry (4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c)"),(0,l.kt)("li",{parentName:"ul"},"Graph (c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e)"),(0,l.kt)("li",{parentName:"ul"},"ViewActivityPaneSecurity (dc02bf3d-cd48-46c3-8a41-345094ecc94b)"),(0,l.kt)("li",{parentName:"ul"},"Job (2a887f97-db68-4b7c-9ae3-5cebd7add999)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemTracking (73e71c45-d483-40d5-bdba-62fd076f7f87)"),(0,l.kt)("li",{parentName:"ul"},"StrongBox (4a9e8381-289a-4dfd-8460-69028eaa93b3)"),(0,l.kt)("li",{parentName:"ul"},"Server (1f4179b3-6bac-4d01-b421-71ea09171400)"),(0,l.kt)("li",{parentName:"ul"},"TestManagement  (e06e1c24-e93d-4e4a-908a-7d951187b483)"),(0,l.kt)("li",{parentName:"ul"},"SettingEntries (6ec4592e-048c-434e-8e6c-8671753a8418)"),(0,l.kt)("li",{parentName:"ul"},"BuildAdministration (302acaca-b667-436d-a946-87133492041c)"),(0,l.kt)("li",{parentName:"ul"},"Location (2725d2bc-7520-4af4-b0e3-8d876494731f)"),(0,l.kt)("li",{parentName:"ul"},"Boards (251e12d9-bea3-43a8-bfdb-901b98c0125e)"),(0,l.kt)("li",{parentName:"ul"},"UtilizationPermissions (83abde3a-4593-424e-b45f-9898af99034d)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemsHub (c0e7a722-1cad-4ae6-b340-a8467501e7ce)"),(0,l.kt)("li",{parentName:"ul"},"WebPlatform (0582eb05-c896-449a-b933-aa3d99e121d6)"),(0,l.kt)("li",{parentName:"ul"},"VersionControlPrivileges (66312704-deb5-43f9-b51c-ab4ff5e351c3)"),(0,l.kt)("li",{parentName:"ul"},"Workspaces (93bafc04-9075-403a-9367-b7164eac6b5c)"),(0,l.kt)("li",{parentName:"ul"},"CrossProjectWidgetView (093cbb02-722b-4ad6-9f88-bc452043fa63)"),(0,l.kt)("li",{parentName:"ul"},"WorkItemTrackingConfiguration (35e35e8e-686d-4b01-aff6-c369d6e36ce0)"),(0,l.kt)("li",{parentName:"ul"},"Discussion Threads (0d140cae-8ac1-4f48-b6d1-c93ce0301a12)"),(0,l.kt)("li",{parentName:"ul"},"BoardsExternalIntegration (5ab15bc8-4ea1-d0f3-8344-cab8fe976877)"),(0,l.kt)("li",{parentName:"ul"},"DataProvider (7ffa7cf4-317c-4fea-8f1d-cfda50cfa956)"),(0,l.kt)("li",{parentName:"ul"},"Social (81c27cc8-7a9f-48ee-b63f-df1e1d0412dd)"),(0,l.kt)("li",{parentName:"ul"},"Security (9a82c708-bfbe-4f31-984c-e860c2196781)"),(0,l.kt)("li",{parentName:"ul"},"IdentityPicker (a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1)"),(0,l.kt)("li",{parentName:"ul"},"ServicingOrchestration (84cc1aa4-15bc-423d-90d9-f97c450fc729)"),(0,l.kt)("li",{parentName:"ul"},"Build (33344d9c-fc72-4d6f-aba5-fa317101a7e9)"),(0,l.kt)("li",{parentName:"ul"},"DashboardsPrivileges (8adf73b7-389a-4276-b638-fe1653f7efc7)"),(0,l.kt)("li",{parentName:"ul"},"VersionControlItems (a39371cf-0841-4c16-bbd3-276e341bc052)")),(0,l.kt)("p",null,"VSSPS:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EventSubscriber (2bf24a2b-70ba-43d3-ad97-3d9e1f75622f) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"EventSubscription (58b176e7-3411-457a-89d0-c6d0ccb3c52b) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Registry (4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Graph (c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Invitation (ea0b4d1e-577a-4797-97b5-2f5755e548d5) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"SystemGraph (b24dfdf1-285a-4ea6-a55b-32549a68121d) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Job (2a887f97-db68-4b7c-9ae3-5cebd7add999) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"CommerceCollectionSecurity (307be2d3-12ed-45c2-aacf-6598760efca7) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"StrongBox (4a9e8381-289a-4dfd-8460-69028eaa93b3) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"GroupLicensing (c6a4fd35-b508-49eb-8ea7-7189df5f3698) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Server (1f4179b3-6bac-4d01-b421-71ea09171400) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"SettingEntries (6ec4592e-048c-434e-8e6c-8671753a8418) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"RemotableTemplateTest (ccdcb71c-4780-4a42-9bb4-8bce07a7628f) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Location (2725d2bc-7520-4af4-b0e3-8d876494731f) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"WebPlatform (0582eb05-c896-449a-b933-aa3d99e121d6) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"DataProvider (7ffa7cf4-317c-4fea-8f1d-cfda50cfa956) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"Security (9a82c708-bfbe-4f31-984c-e860c2196781) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"IdentityPicker (a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1) (VSSPS)"),(0,l.kt)("li",{parentName:"ul"},"ServicingOrchestration (84cc1aa4-15bc-423d-90d9-f97c450fc729) (VSSPS)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: ByNamespaceId\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-token"},"-Token"),(0,l.kt)("p",null,"The security Token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-allowmask"},"-AllowMask"),(0,l.kt)("p",null,"Bitmask for Allow Permissions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-denymask"},"-DenyMask"),(0,l.kt)("p",null,"Bitmask for Deny Permissions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-descriptor"},"-Descriptor"),(0,l.kt)("p",null,"{{ Fill Descriptor Description }}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"vsteam_libaccesscontrolentry"},"vsteam_lib.AccessControlEntry"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"This is a low-level function.\nYou should really use a high level function (Add-VSTeam...Permission / Set-VSTeam...Permission / Get-VSTeam...Permission) unless you know what you are doing."),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0}}]);
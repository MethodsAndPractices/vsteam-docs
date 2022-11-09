"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[5011],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(n),d=l,h=p["".concat(m,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"Get-VSTeamUserEntitlement",title:"Get-VSTeamUserEntitlement",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamUserEntitlement.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Get-VSTeamUserEntitlement",o={unversionedId:"modules/vsteam/commands/Get-VSTeamUserEntitlement",id:"modules/vsteam/commands/Get-VSTeamUserEntitlement",title:"Get-VSTeamUserEntitlement",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamUserEntitlement.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamUserEntitlement",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamUserEntitlement.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamUserEntitlement",title:"Get-VSTeamUserEntitlement",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamUserEntitlement.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamUser",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamUser"},next:{title:"Get-VSTeamUserProfile",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamUserProfile"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[],level:3},{value:"PagedParams",id:"pagedparams",children:[],level:3},{value:"PagedFilter",id:"pagedfilter",children:[],level:3},{value:"ByID",id:"byid",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1: Get user by Id",id:"example-1-get-user-by-id",children:[],level:3},{value:"Example 2: Get users by name",id:"example-2-get-users-by-name",children:[],level:3},{value:"Example 3: Filter with some conditions",id:"example-3-filter-with-some-conditions",children:[],level:3},{value:"Example 4: List paged users",id:"example-4-list-paged-users",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Skip",id:"-skip",children:[],level:3},{value:"-Top",id:"-top",children:[],level:3},{value:"-Select",id:"-select",children:[],level:3},{value:"-MaxPages",id:"-maxpages",children:[],level:3},{value:"-Filter",id:"-filter",children:[],level:3},{value:"-UserType",id:"-usertype",children:[],level:3},{value:"-Name",id:"-name",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"-LicenseId",id:"-licenseid",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-vsteamuserentitlement"},"Get-VSTeamUserEntitlement"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Get User Entitlement for a user, or a paged list of users matching the specified filter"),(0,r.kt)("p",null,"Please note that Filter, Name, UserType and License parameters only works when MemberEntitlementManagement module version is 6.0 or upper In the same way Top and Skip paramerers only works up to version 5.1"),(0,r.kt)("p",null,"You can setup the specific version for the MemberEntitlementManagement calling Set-VSTeamAPIVersion -Service MemberEntitlementManagement -Version VersionNumberYouNeed."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("h3",{id:"list-default"},"List (Default)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement [-Top <Int32>] [-Skip <Int32>] [-Select <String[]>] [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"pagedparams"},"PagedParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement [-Select <String[]>] [-MaxPages <Int32>] [-LicenseId <String>] [-UserType <String>]\n [-Name <String>] [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"pagedfilter"},"PagedFilter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement [-Select <String[]>] [-MaxPages <Int32>] [-Filter <String>] [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"byid"},"ByID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement [-Id <String[]>] [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Get User Entitlement for a user, or a paged list of users matching the specified filter"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1-get-user-by-id"},"Example 1: Get user by Id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement -Id f1ef22eb-5dd6-4e26-907c-986a0311b106\n")),(0,r.kt)("p",null,"This command gets the user entitlement of the user identified by id."),(0,r.kt)("h3",{id:"example-2-get-users-by-name"},"Example 2: Get users by name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement -Name username\n")),(0,r.kt)("p",null,"This command gets a list of users which mail or user name contains 'username'.\nFiltering by Name, License, or UserType is available only when MemberEntitlementManagement service version is 6.0 or upper.\nSee Get-VSTeamAPIVersion and Set-VSTeamAPIVersion commands"),(0,r.kt)("h3",{id:"example-3-filter-with-some-conditions"},"Example 3: Filter with some conditions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement -Filter \"licenseId eq 'Account-Express' and licenseStatus eq 'Disabled'\"\n")),(0,r.kt)("p",null,"This command gets a list of users that match the license status and license type conditions.\nThe -Filter parameter is available only when MemberEntitlementManagement service version is 6.0 or upper.\nSee Get-VSTeamAPIVersion and Set-VSTeamAPIVersion commands"),(0,r.kt)("h3",{id:"example-4-list-paged-users"},"Example 4: List paged users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamUserEntitlement -Skip 100 -Top 100\n")),(0,r.kt)("p",null,"This command list the from the user in the 101 position, the next 100 users Filtering using the -Top -Skip parameters only works when MemberEntitlementManagement service version is below 6.0.\nSee Get-VSTeamAPIVersion and Set-VSTeamAPIVersion commands"),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-skip"},"-Skip"),(0,r.kt)("p",null,"The number of items to skip."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-top"},"-Top"),(0,r.kt)("p",null,"Specifies the maximum number to return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-select"},"-Select"),(0,r.kt)("p",null,'Comma (",") separated list of properties to select in the result entitlements.\nThe acceptable values for this parameter are:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projects"),(0,r.kt)("li",{parentName:"ul"},"Extensions"),(0,r.kt)("li",{parentName:"ul"},"GroupRules")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: List, PagedParams, PagedFilter\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-maxpages"},"-MaxPages"),(0,r.kt)("p",null,"User entlitement API returs a paged result.\nThis parameter allows to limit the number of pages to be retrieved.\nDefault is 0 = all pages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: PagedParams, PagedFilter\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: $null\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-filter"},"-Filter"),(0,r.kt)("p",null,"Equality operators relating to searching user entitlements seperated by and clauses.\nValid filters include: licenseId, licenseStatus, userType, and name. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"licenseId: filters based on license assignment using license names.\ni.e.\nlicenseId eq 'Account-Stakeholder' or licenseId eq 'Account-Express'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"licenseStatus: filters based on license status. currently only supports disabled. i.e. licenseStatus eq 'Disabled'. To get disabled basic licenses, you would pass (licenseId eq 'Account-Express' and licenseStatus eq 'Disabled')")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"userType: filters off identity type. Suppored types are member or guest i.e. userType eq 'member'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'name: filters on if the user\'s display name or email contians given input. i.e. get all users with "test" in email or displayname is "name eq \'test\'".'))),(0,r.kt)("p",null,"A valid query could be: (licenseId eq 'Account-Stakeholder' or (licenseId eq 'Account-Express' and licenseStatus eq 'Disabled')) and name eq 'test' and userType eq 'guest'."),(0,r.kt)("p",null,"Currently, filter names and values must match exactly the case.\ni.e.: * LicenseID will throw Invalid filter message."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"licenseId eq 'account-stakeholder' will return an empty list")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: PagedFilter\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-usertype"},"-UserType"),(0,r.kt)("p",null,"Filters based on user type"),(0,r.kt)("p",null,"The acceptable values for this parameter are: - member"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"guest")),(0,r.kt)("p",null,"Parameter values are case sensitive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: PagedParams\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-name"},"-Name"),(0,r.kt)("p",null,"Filters on if the user's display name or email contains given input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: PagedParams\nAliases: Mail, UserName\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-id"},"-Id"),(0,r.kt)("p",null,"{{ Fill Id Description }}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: ByID\nAliases: UserId\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-licenseid"},"-LicenseId"),(0,r.kt)("p",null,"{{ Fill LicenseId Description }}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: PagedParams\nAliases: License\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[2e3],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(a),m=l,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9837:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={id:"Get-VSTeamPackage",title:"Get-VSTeamPackage",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPackage.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},c="Get-VSTeamPackage",o={unversionedId:"modules/vsteam/commands/Get-VSTeamPackage",id:"modules/vsteam/commands/Get-VSTeamPackage",title:"Get-VSTeamPackage",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamPackage.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamPackage",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPackage",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPackage.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamPackage",title:"Get-VSTeamPackage",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPackage.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamOption",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamOption"},next:{title:"Get-VSTeamPackageVersion",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPackageVersion"}},d=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[],level:3},{value:"ById",id:"byid",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1: List all package and versions",id:"example-1-list-all-package-and-versions",children:[],level:3},{value:"Example 2: List only NuGet packages",id:"example-2-list-only-nuget-packages",children:[],level:3},{value:"Example 3: Return only the second package",id:"example-3-return-only-the-second-package",children:[],level:3},{value:"Example 4: Return only packages and versions from project",id:"example-4-return-only-packages-and-versions-from-project",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Skip",id:"-skip",children:[],level:3},{value:"-Top",id:"-top",children:[],level:3},{value:"-feedId",id:"-feedid",children:[],level:3},{value:"-hideUrls",id:"-hideurls",children:[],level:3},{value:"-includeAllVersions",id:"-includeallversions",children:[],level:3},{value:"-includeDeleted",id:"-includedeleted",children:[],level:3},{value:"-includeDescription",id:"-includedescription",children:[],level:3},{value:"-packageId",id:"-packageid",children:[],level:3},{value:"-packageNameQuery",id:"-packagenamequery",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-protocolType",id:"-protocoltype",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-vsteampackage"},"Get-VSTeamPackage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Returns a list of packages for a feed."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("h3",{id:"list-default"},"List (Default)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPackage [-feedId] <String> [-includeAllVersions] [-includeDeleted] [-includeDescription] [-hideUrls]\n [-protocolType <String>] [-packageNameQuery <String>] [-Top <Int32>] [-Skip <Int32>] [-ProjectName <String>]\n [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"byid"},"ById"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPackage [-feedId] <String> [-packageId] <Guid> [-includeAllVersions] [-includeDeleted]\n [-includeDescription] [-hideUrls] [-ProjectName <String>] [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Returns a list of packages for a feed."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1-list-all-package-and-versions"},"Example 1: List all package and versions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamFeed | Get-VSTeamPackage -includeAllVersions\n")),(0,r.kt)("p",null,"This command returns all the packages for all the feeds returned by Get-VSTeamFeed."),(0,r.kt)("h3",{id:"example-2-list-only-nuget-packages"},"Example 2: List only NuGet packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamFeed | Get-VSTeamPackage -protocolType NuGet\n")),(0,r.kt)("p",null,"This command only returns NuGet packages for all the feeds returned by Get-VSTeamFeed."),(0,r.kt)("h3",{id:"example-3-return-only-the-second-package"},"Example 3: Return only the second package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPackage -feedName vsteam -Top 1 -Skip 1\n")),(0,r.kt)("p",null,"This command returns the second package from the feed named vsteam"),(0,r.kt)("h3",{id:"example-4-return-only-packages-and-versions-from-project"},"Example 4: Return only packages and versions from project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPackage -feedId 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d -projectName MyProject\n")),(0,r.kt)("p",null,"This command returns all the packages and versions for the feedId in the project."),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-skip"},"-Skip"),(0,r.kt)("p",null,"Skip the first N packages (or package versions when GetTopPackageVersions is set)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-top"},"-Top"),(0,r.kt)("p",null,"Get the top N packages (or package versions when GetTopPackageVersions is set)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-feedid"},"-feedId"),(0,r.kt)("p",null,"Name or Id of the feed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases: feedName\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-hideurls"},"-hideUrls"),(0,r.kt)("p",null,"Do not return REST Urls with the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-includeallversions"},"-includeAllVersions"),(0,r.kt)("p",null,"Returns all versions of the package in the response.\nDefault is latest version only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-includedeleted"},"-includeDeleted"),(0,r.kt)("p",null,"Return deleted or unpublished versions of packages in the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-includedescription"},"-includeDescription"),(0,r.kt)("p",null,"Return the description for every version of each package in the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-packageid"},"-packageId"),(0,r.kt)("p",null,"The package Id (GUID Id, not the package name)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: ById\nAliases: id\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-packagenamequery"},"-packageNameQuery"),(0,r.kt)("p",null,"Filter to packages that contain the provided string.\nCharacters in the string must conform to the package name constraints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,r.kt)("p",null,"{{ Fill ProjectName Description }}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-protocoltype"},"-protocolType"),(0,r.kt)("p",null,"One of the supported artifact package types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamFeed"},"Add-VSTeamFeed")))}u.isMDXComponent=!0}}]);
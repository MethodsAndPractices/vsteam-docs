(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(335)),c={id:"Add-VSTeamAzureRMServiceEndpoint",title:"Add-VSTeamAzureRMServiceEndpoint",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAzureRMServiceEndpoint.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},o={id:"modules/vsteam/commands/Add-VSTeamAzureRMServiceEndpoint",isDocsHomePage:!1,title:"Add-VSTeamAzureRMServiceEndpoint",description:"Add-VSTeamAzureRMServiceEndpoint",source:"@site/docs/modules/vsteam/commands/Add-VSTeamAzureRMServiceEndpoint.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamAzureRMServiceEndpoint",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamAzureRMServiceEndpoint.md",sidebar:"vsteam",previous:{title:"Add-VSTeamArea",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamArea"},next:{title:"Add-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamBuild"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"Automatic (Default)",id:"automatic-default",children:[]},{value:"Manual",id:"manual",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-endpointName",id:"-endpointname",children:[]},{value:"-servicePrincipalId",id:"-serviceprincipalid",children:[]},{value:"-servicePrincipalKey",id:"-serviceprincipalkey",children:[]},{value:"-subscriptionId",id:"-subscriptionid",children:[]},{value:"-subscriptionName",id:"-subscriptionname",children:[]},{value:"-subscriptionTenantId",id:"-subscriptiontenantid",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamazurermserviceendpoint"},"Add-VSTeamAzureRMServiceEndpoint"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Adds a new Azure Resource Manager service endpoint."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h3",{id:"automatic-default"},"Automatic (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Add-VSTeamAzureRMServiceEndpoint [-subscriptionName] <String> [-subscriptionId] <String>\n [-subscriptionTenantId] <String> [[-endpointName] <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(i.b)("h3",{id:"manual"},"Manual"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Add-VSTeamAzureRMServiceEndpoint [-subscriptionName] <String> [-subscriptionId] <String>\n [-subscriptionTenantId] <String> -servicePrincipalId <String> -servicePrincipalKey <String>\n [[-endpointName] <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"The cmdlet adds a new connection between TFS/AzD and Azure using the Azure Resource Manager connection type."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(i.b)("p",null,"{{ Add example description here }}"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-endpointname"},"-endpointName"),Object(i.b)("p",null,"The name displayed on the services page.\nIn AzD this is the Connection Name."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 4\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-serviceprincipalid"},"-servicePrincipalId"),Object(i.b)("p",null,"The ID of the Azure Service Principal to use with this service endpoint."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Manual\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-serviceprincipalkey"},"-servicePrincipalKey"),Object(i.b)("p",null,"The key of the Azure Service Principal to use with this service endpoint."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Manual\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-subscriptionid"},"-subscriptionId"),Object(i.b)("p",null,"The id of the Azure subscription to use."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 2\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-subscriptionname"},"-subscriptionName"),Object(i.b)("p",null,"The name of the Azure Subscription."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases: displayName\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-subscriptiontenantid"},"-subscriptionTenantId"),Object(i.b)("p",null,"The id of the Azure tenant to use."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 3\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(i.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(i.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(i.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(i.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Get-VSTeamServiceEndpoint")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Get-VSTeamServiceEndpointType")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Remove-VSTeamServiceEndpoint")))}u.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||i;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
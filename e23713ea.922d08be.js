(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(9),c=(n(0),n(325)),o={id:"Get-VSTeamServiceEndpoint",title:"Get-VSTeamServiceEndpoint",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamServiceEndpoint.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Get-VSTeamServiceEndpoint",isDocsHomePage:!1,title:"Get-VSTeamServiceEndpoint",description:"Get-VSTeamServiceEndpoint",source:"@site/docs/modules/vsteam/commands/Get-VSTeamServiceEndpoint.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamServiceEndpoint",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamServiceEndpoint.md",sidebar:"vsteam",previous:{title:"Get-VSTeamSecurityNamespace",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamSecurityNamespace"},next:{title:"Get-VSTeamServiceEndpointType",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamServiceEndpointType"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-id",id:"-id",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteamserviceendpoint"},"Get-VSTeamServiceEndpoint"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Gets a service endpoint."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h3",{id:"list-default"},"List (Default)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamServiceEndpoint -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h3",{id:"byid"},"ByID"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamServiceEndpoint -id <String> -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Gets a service endpoint."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(c.b)("p",null,"{{ Add example description here }}"),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-id"},"-id"),Object(c.b)("p",null,"Id of the service endpoint"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByID\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h3",{id:"systemstring"},"System.String"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"systemobject"},"System.Object"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"Prerequisites:"),Object(c.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(c.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(c.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(c.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(c.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}m.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
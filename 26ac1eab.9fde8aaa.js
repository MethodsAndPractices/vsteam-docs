(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),r=(n(0),n(329)),o={id:"Show-VSTeamBuildDefinition",title:"Show-VSTeamBuildDefinition",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamBuildDefinition.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Show-VSTeamBuildDefinition",isDocsHomePage:!1,title:"Show-VSTeamBuildDefinition",description:"Show-VSTeamBuildDefinition",source:"@site/docs/modules/vsteam/commands/Show-VSTeamBuildDefinition.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamBuildDefinition",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Show-VSTeamBuildDefinition.md",sidebar:"vsteam",previous:{title:"Show-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamBuild"},next:{title:"Show-VSTeamFeed",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamFeed"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"UNNAMED_PARAMETER_SET_1",id:"unnamed_parameter_set_1",children:[]},{value:"UNNAMED_PARAMETER_SET_2",id:"unnamed_parameter_set_2",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Id",id:"-id",children:[]},{value:"-Path",id:"-path",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Type",id:"-type",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.BuildDefinition",id:"vsteam_libbuilddefinition",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"show-vsteambuilddefinition"},"Show-VSTeamBuildDefinition"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Opens the build definition in the default browser."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"unnamed_parameter_set_1"},"UNNAMED_PARAMETER_SET_1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Show-VSTeamBuildDefinition [-Type <String>] [-Path <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(r.b)("h3",{id:"unnamed_parameter_set_2"},"UNNAMED_PARAMETER_SET_2"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Show-VSTeamBuildDefinition -Id <Int32> -ProjectName <String> [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Opens the build definition in the default browser."),Object(r.b)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),Object(r.b)("p",null,"With just a project name, this function shows all of the build definitions for that team project."),Object(r.b)("p",null,"You can also specify a particular build definition by ID."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Show-VSTeamBuildDefinition -ProjectName Demo\n")),Object(r.b)("p",null,"This command will open a web browser with All Definitions for this project showing."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-id"},"-Id"),Object(r.b)("p",null,"Specifies build definition by ID."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: UNNAMED_PARAMETER_SET_2\nAliases: BuildDefinitionID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-path"},"-Path"),Object(r.b)("p",null,"The folder of the build definitions to retrieve."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: \\\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-type"},"-Type"),Object(r.b)("p",null,"The type of the build definitions to retrieve.\nThe acceptable values for this parameter are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mine"),Object(r.b)("li",{parentName:"ul"},"All"),Object(r.b)("li",{parentName:"ul"},"Queued"),Object(r.b)("li",{parentName:"ul"},"XAML")),Object(r.b)("p",null,"If not specified, all types will be returned."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: UNNAMED_PARAMETER_SET_1\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: All\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"vsteam_libbuilddefinition"},"vsteam_lib.BuildDefinition"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"You can pipe build definition IDs to this function."),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(r.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(r.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(r.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(r.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Add-VSTeamBuildDefinition")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Remove-VSTeamBuildDefinition")))}b.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||r;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
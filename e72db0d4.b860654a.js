(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(325)),c={id:"Update-VSTeamBuild",title:"Update-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamBuild.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Update-VSTeamBuild",isDocsHomePage:!1,title:"Update-VSTeamBuild",description:"Update-VSTeamBuild",source:"@site/docs/modules/vsteam/commands/Update-VSTeamBuild.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamBuild",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamBuild.md",sidebar:"vsteam",previous:{title:"Update-VSTeamAgent",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamAgent"},next:{title:"Update-VSTeamBuildDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamBuildDefinition"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-BuildNumber",id:"-buildnumber",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-KeepForever",id:"-keepforever",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Build",id:"vsteam_libbuild",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"update-vsteambuild"},"Update-VSTeamBuild"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Allows you to set the keep forever flag and build number."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Update-VSTeamBuild -Id <Int32> [-KeepForever <Boolean>] [-BuildNumber <String>] [-Force] -ProjectName <String>\n [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Allows you to set the keep forever flag and build number."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamBuild | Update-VSTeamBuild -KeepForever $false\n")),Object(l.b)("p",null,"Sets the keep forever property of every build to false."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-buildnumber"},"-BuildNumber"),Object(l.b)("p",null,"The value you want to set as the build number."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-id"},"-Id"),Object(l.b)("p",null,"The id of the build."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases: BuildID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-keepforever"},"-KeepForever"),Object(l.b)("p",null,"$True or $False to set the keep forever property of the build."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-force"},"-Force"),Object(l.b)("p",null,"Forces the function without confirmation."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-whatif"},"-WhatIf"),Object(l.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-confirm"},"-Confirm"),Object(l.b)("p",null,"Prompts you for confirmation before running the function."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"vsteam_libbuild"},"vsteam_lib.Build"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"Prerequisites:"),Object(l.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(l.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(l.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(l.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(l.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}p.isMDXComponent=!0},325:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(a),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||l;return a?r.a.createElement(m,i(i({ref:t},u),{},{components:a})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<l;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
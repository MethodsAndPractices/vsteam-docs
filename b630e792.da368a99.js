(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{267:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(9),c=(a(0),a(317)),o={id:"Remove-VSTeamRelease",title:"Remove-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamRelease.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"Remove-VSTeamRelease",isDocsHomePage:!1,title:"Remove-VSTeamRelease",description:"Remove-VSTeamRelease",source:"@site/modules/vsteam/Remove-VSTeamRelease.md",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Remove-VSTeamRelease.md",sidebar:"modules",previous:{title:"Remove-VSTeamProject",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamProject"},next:{title:"Remove-VSTeamReleaseDefinition",permalink:"/vsteam-docs/modules/vsteam/Remove-VSTeamReleaseDefinition"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"None",id:"none",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:i};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"remove-vsteamrelease"},"Remove-VSTeamRelease"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Removes the releases for a team project."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Remove-VSTeamRelease -Id <Int32[]> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"The Remove-VSTeamRelease function removes the releases for a team project."),Object(c.b)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamRelease -ProjectName demo | Remove-VSTeamRelease\n")),Object(c.b)("p",null,"This command gets a list of all releases in the demo project."),Object(c.b)("p",null,"The pipeline operator (|) passes the data to the Remove-VSTeamRelease function, which removes each release definition object."),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-id"},"-Id"),Object(c.b)("p",null,"Specifies one or more releases by ID."),Object(c.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(c.b)("p",null,"To find the ID of a release definition, type Get-VSTeamRelease."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-force"},"-Force"),Object(c.b)("p",null,"Forces the function without confirmation"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-confirm"},"-Confirm"),Object(c.b)("p",null,"Prompts you for confirmation before running the cmdlet."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-whatif"},"-WhatIf"),Object(c.b)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"none"},"None"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets releases."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("p",null,"You can pipe release definition IDs to this function."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamRelease")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VSTeamRelease")))}m.isMDXComponent=!0},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,d=p["".concat(o,".").concat(b)]||p[b]||u[b]||c;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
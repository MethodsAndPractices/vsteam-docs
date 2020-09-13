(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(317)),o={id:"Update-VSTeamReleaseDefinition",title:"Update-VSTeamReleaseDefinition",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamReleaseDefinition.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"Update-VSTeamReleaseDefinition",isDocsHomePage:!1,title:"Update-VSTeamReleaseDefinition",description:"Update-VSTeamReleaseDefinition",source:"@site/modules/vsteam/Update-VSTeamReleaseDefinition.md",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamReleaseDefinition",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Update-VSTeamReleaseDefinition.md",sidebar:"modules",previous:{title:"Update-VSTeamRelease",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamRelease"},next:{title:"Update-VSTeamServiceEndpoint",permalink:"/vsteam-docs/modules/vsteam/Update-VSTeamServiceEndpoint"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"JSON (Default)",id:"json-default",children:[]},{value:"File",id:"file",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-InFile",id:"-infile",children:[]},{value:"-ReleaseDefinition",id:"-releasedefinition",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"None",id:"none",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"update-vsteamreleasedefinition"},"Update-VSTeamReleaseDefinition"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Updates a build definition for a team project."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"json-default"},"JSON (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Update-VSTeamReleaseDefinition [-ReleaseDefinition] <String> [-Force] [-ProjectName] <String> [-WhatIf]\n [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h3",{id:"file"},"File"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Update-VSTeamReleaseDefinition [-InFile] <String> [-Force] [-ProjectName] <String> [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Reads a JSON file off disk or from string and uses that file to update an existing release definition in the provided project."),Object(r.b)("p",null,"You must call Set-VSTeamAccount before calling this function."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> Update-VSTeamReleaseDefinition -ProjectName Demo -Id 123 -InFile release.json\n")),Object(r.b)("p",null,"This command reads release.json and updates existing release definition with id 123 from it on the demo team project."),Object(r.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"PS C:\\> $b = Get-VSTeamReleaseDefinition -ProjectName Demo -Id 23 -Raw\nPS C:\\> $b.variables.subscriptionId.value = 'Some New Value'\nPS C:\\> $body = $b | ConvertTo-Json -Depth 100\nPS C:\\> Update-VSTeamReleaseDefinition -ProjectName Demo -ReleaseDefinition $body\n")),Object(r.b)("p",null,"This commands update the variables of the release definition."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-infile"},"-InFile"),Object(r.b)("p",null,"Path and file name to the JSON file that contains the definition to be updated.\nIf the path is omitted, the default is the current location."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: File\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-releasedefinition"},"-ReleaseDefinition"),Object(r.b)("p",null,"JSON string of release definition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: JSON\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-confirm"},"-Confirm"),Object(r.b)("p",null,"Prompts you for confirmation before running the function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-force"},"-Force"),Object(r.b)("p",null,"Forces the function without confirmation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-whatif"},"-WhatIf"),Object(r.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"none"},"None"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"This function has a Dynamic Parameter for ProjectName that specifies the project for which this function gets release definitions."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
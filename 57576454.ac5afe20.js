(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(9),o=(r(0),r(324)),c={id:"Add-VSTeamTaskGroup",title:"Add-VSTeamTaskGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamTaskGroup.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Add-VSTeamTaskGroup",isDocsHomePage:!1,title:"Add-VSTeamTaskGroup",description:"Add-VSTeamTaskGroup",source:"@site/docs/modules/vsteam/commands/Add-VSTeamTaskGroup.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamTaskGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamTaskGroup.md",sidebar:"vsteam",previous:{title:"Add-VSTeamSonarQubeEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint"},next:{title:"Add-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamUserEntitlement"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByFile",id:"byfile",children:[]},{value:"ByBody",id:"bybody",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-InFile",id:"-infile",children:[]},{value:"-Body",id:"-body",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"add-vsteamtaskgroup"},"Add-VSTeamTaskGroup"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Adds a task group."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"byfile"},"ByFile"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamTaskGroup -InFile <String> [-ProjectName] <String> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"bybody"},"ByBody"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamTaskGroup -Body <String> [-ProjectName] <String> [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Adds a task group."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'$taskGroup = Get-VSTeamTaskGroup -Name "taskGroupName" -ProjectName "sourceProjectName"\n\n# Set the ID and revision to null, so AzD is happy.\n$taskGroup.id = $null\n$taskGroup.revision = $null\n\n$taskGroupJson = ConvertTo-Json -InputObject $taskGroup -Depth 10\n\nAdd-VSTeamTaskGroup -Body $taskGroupJson -ProjectName "destinationProjectName"\n')),Object(o.b)("p",null,"This example is useful for when one wants to copy an existing task group in one project into another project."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-infile"},"-InFile"),Object(o.b)("p",null,"The path to the json file that represents the task group"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByFile\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-body"},"-Body"),Object(o.b)("p",null,"The json that represents the task group as a string"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByBody\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h3",{id:"systemstring"},"System.String"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"systemobject"},"System.Object"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Update-VSTeamTaskGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Get-VSTeamTaskGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamTaskGroup")))}d.isMDXComponent=!0},324:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
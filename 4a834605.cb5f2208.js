(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var d=n(2),i=n(9),a=(n(0),n(317)),l={id:"Add-VSTeamBuild",title:"Add-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},r={id:"Add-VSTeamBuild",isDocsHomePage:!1,title:"Add-VSTeamBuild",description:"Add-VSTeamBuild",source:"@site/modules/vsteam/Add-VSTeamBuild.md",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamBuild",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md",sidebar:"modules",previous:{title:"Add-VSTeamAzureRMServiceEndpoint",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamAzureRMServiceEndpoint"},next:{title:"Add-VSTeamBuildDefinition",permalink:"/vsteam-docs/modules/vsteam/Add-VSTeamBuildDefinition"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByName (Default)",id:"byname-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-BuildDefinitionName",id:"-builddefinitionname",children:[]},{value:"-QueueName",id:"-queuename",children:[]},{value:"-BuildDefinitionId",id:"-builddefinitionid",children:[]},{value:"-SourceBranch",id:"-sourcebranch",children:[]},{value:"-BuildParameters",id:"-buildparameters",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]},{value:"System.Int32",id:"systemint32",children:[]},{value:"System.Collections.Hashtable",id:"systemcollectionshashtable",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Build",id:"teambuild",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(d.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"add-vsteambuild"},"Add-VSTeamBuild"),Object(a.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(a.b)("p",null,"Queues a new build."),Object(a.b)("h2",{id:"syntax"},"SYNTAX"),Object(a.b)("h3",{id:"byname-default"},"ByName (Default)"),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{}),"Add-VSTeamBuild [-SourceBranch <String>] [-BuildParameters <Hashtable>] [-ProjectName] <String>\n [-QueueName <String>] [-BuildDefinitionName <String>] [<CommonParameters>]\n")),Object(a.b)("h3",{id:"byid"},"ByID"),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{}),"Add-VSTeamBuild [-BuildDefinitionId <Int32>] [-SourceBranch <String>] [-BuildParameters <Hashtable>]\n [-ProjectName] <String> [-QueueName <String>] [-BuildDefinitionName <String>] [<CommonParameters>]\n")),Object(a.b)("h2",{id:"description"},"DESCRIPTION"),Object(a.b)("p",null,"Add-VSTeamBuild will queue a new build."),Object(a.b)("p",null,"You can override the queue in the build definition by using the QueueName parameter.\nYou can override the default source branch by using the SourceBranch parameter.\nYou can also set specific build parameters by using the BuildParameters parameter."),Object(a.b)("p",null,"To have the BuildDefinition and QueueNames tab complete you must set a default project by calling Set-VSTeamDefaultProject before you call Add-VSTeamBuild."),Object(a.b)("h2",{id:"examples"},"EXAMPLES"),Object(a.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{}),"PS C:\\> Set-VSTeamDefaultProject Demo\nPS C:\\> Add-VSTeamBuild -BuildDefinition Demo-CI\n\nBuild Definition Build Number  Status     Result\n---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---- ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---  ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---     ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---\nDemo-CI           Demo-CI-45   notStarted\n")),Object(a.b)("p",null,"This example queues the build for the 'develop' branch, overriding the default branch in the build definition."),Object(a.b)("h3",{id:"example-3"},"EXAMPLE 3"),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{}),"PS C:\\> Set-VSTeamDefaultProject Demo\nPS C:\\> Add-VSTeamBuild -BuildDefinition Demo-CI -BuildParameters @{msg=\"hello world!\"; 'system.debug'='true'}\n\nBuild Definition Build Number  Status     Result\n---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamBuild.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nDemo-CI           Demo-CI-45   notStarted\n")),Object(a.b)("p",null,"This example queues the build and sets the system.debug variable to true and msg to 'hello world!'."),Object(a.b)("h2",{id:"parameters"},"PARAMETERS"),Object(a.b)("h3",{id:"-projectname"},"-ProjectName"),Object(a.b)("p",null,"Specifies the team project for which this function operates."),Object(a.b)("p",null,"You can tab complete from a list of available projects."),Object(a.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-builddefinitionname"},"-BuildDefinitionName"),Object(a.b)("p",null,"The name of the build definition to use to queue to build."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-queuename"},"-QueueName"),Object(a.b)("p",null,"The name of the queue to use for this build."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-builddefinitionid"},"-BuildDefinitionId"),Object(a.b)("p",null,"The Id of the build definition to use to queue to build."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: ByID\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-sourcebranch"},"-SourceBranch"),Object(a.b)("p",null,"Which source branch to use for this build.\nOverrides default branch in build definition."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"-buildparameters"},"-BuildParameters"),Object(a.b)("p",null,"A hashtable with build parameters."),Object(a.b)("pre",null,Object(a.b)("code",Object(d.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(a.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(a.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(a.b)("a",Object(d.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(a.b)("h2",{id:"inputs"},"INPUTS"),Object(a.b)("h3",{id:"systemstring"},"System.String"),Object(a.b)("p",null,"ProjectName"),Object(a.b)("p",null,"BuildDefinitionName"),Object(a.b)("p",null,"QueueName"),Object(a.b)("p",null,"SourceBranch"),Object(a.b)("h3",{id:"systemint32"},"System.Int32"),Object(a.b)("p",null,"BuildDefinitionId"),Object(a.b)("h3",{id:"systemcollectionshashtable"},"System.Collections.Hashtable"),Object(a.b)("p",null,"Build Parameters"),Object(a.b)("h2",{id:"outputs"},"OUTPUTS"),Object(a.b)("h3",{id:"teambuild"},"Team.Build"),Object(a.b)("h2",{id:"notes"},"NOTES"),Object(a.b)("p",null,"BuildDefinition and QueueName are dynamic parameters and use the default project value to query their validate set."),Object(a.b)("p",null,"If you do not set the default project by called Set-VSTeamDefaultProject before calling Add-VSTeamBuild you will have to type in the names."),Object(a.b)("h2",{id:"related-links"},"RELATED LINKS"))}c.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var d=n(0),i=n.n(d);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,d)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,d,i=function(e,t){if(null==e)return{};var n,d,i={},a=Object.keys(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),o=c(n),b=d,p=o["".concat(l,".").concat(b)]||o[b]||m[b]||a;return n?i.a.createElement(p,r(r({ref:t},u),{},{components:n})):i.a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var a=n.length,l=new Array(a);l[0]=b;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:d,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
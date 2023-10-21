"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[5261],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return p}});var d=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,d)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,d,i=function(e,t){if(null==e)return{};var n,d,i={},a=Object.keys(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)n=a[d],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=d.createContext({}),u=function(e){var t=d.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return d.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},c=d.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return n?d.createElement(h,l(l({ref:t},o),{},{components:n})):d.createElement(h,l({ref:t},o))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return d.createElement.apply(null,l)}return d.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1616:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return o}});var d=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],r={id:"Add-VSTeamBuild",title:"Add-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Add-VSTeamBuild",u={unversionedId:"modules/vsteam/commands/Add-VSTeamBuild",id:"modules/vsteam/commands/Add-VSTeamBuild",title:"Add-VSTeamBuild",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamBuild.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamBuild",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamBuild",title:"Add-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeamBanner",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamBanner"},next:{title:"Add-VSTeamBuildDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamBuildDefinition"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"ByName (Default)",id:"byname-default",children:[],level:3},{value:"ByID",id:"byid",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-BuildDefinitionName",id:"-builddefinitionname",children:[],level:3},{value:"-QueueName",id:"-queuename",children:[],level:3},{value:"-BuildDefinitionId",id:"-builddefinitionid",children:[],level:3},{value:"-SourceBranch",id:"-sourcebranch",children:[],level:3},{value:"-BuildParameters",id:"-buildparameters",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-TemplateParameters",id:"-templateparameters",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3},{value:"System.Int32",id:"systemint32",children:[],level:3},{value:"System.Collections.Hashtable",id:"systemcollectionshashtable",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Build",id:"vsteam_libbuild",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],m={toc:o};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,d.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-vsteambuild"},"Add-VSTeamBuild"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Queues a new build."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("h3",{id:"byname-default"},"ByName (Default)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Add-VSTeamBuild [-SourceBranch <String>] [-BuildParameters <Hashtable>] [-TemplateParameters <Hashtable>]\n -ProjectName <String> [-QueueName <String>] [-BuildDefinitionName <String>] [<CommonParameters>]\n")),(0,a.kt)("h3",{id:"byid"},"ByID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Add-VSTeamBuild [-BuildDefinitionId <Int32>] [-SourceBranch <String>] [-BuildParameters <Hashtable>]\n [-TemplateParameters <Hashtable>] -ProjectName <String> [-QueueName <String>] [-BuildDefinitionName <String>]\n [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Add-VSTeamBuild will queue a new build."),(0,a.kt)("p",null,"You can override the queue in the build definition by using the QueueName parameter.\nYou can override the default source branch by using the SourceBranch parameter.\nYou can also set specific build parameters by using the BuildParameters parameter."),(0,a.kt)("p",null,"To have the BuildDefinition and QueueNames tab complete you must set a default project by calling Set-VSTeamDefaultProject before you call Add-VSTeamBuild."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Set-VSTeamDefaultProject Demo\nAdd-VSTeamBuild -BuildDefinition Demo-CI\n\nBuild Definition Build Number  Status     Result\n---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---- ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---  ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---     ---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---\nDemo-CI           Demo-CI-45   notStarted\n")),(0,a.kt)("p",null,"This example queues the build for the 'develop' branch, overriding the default branch in the build definition."),(0,a.kt)("h3",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Set-VSTeamDefaultProject Demo\nAdd-VSTeamBuild -BuildDefinition Demo-CI -BuildParameters @{msg=\"hello world!\"; 'system.debug'='true'}\n\nBuild Definition Build Number  Status     Result\n---\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamBuild\ntitle: Add-VSTeamBuild\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamBuild.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nDemo-CI           Demo-CI-45   notStarted\n")),(0,a.kt)("p",null,"This example queues the build and sets the system.debug variable to true and msg to 'hello world!'."),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-builddefinitionname"},"-BuildDefinitionName"),(0,a.kt)("p",null,"The name of the build definition to use to queue to build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-queuename"},"-QueueName"),(0,a.kt)("p",null,"The name of the queue to use for this build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-builddefinitionid"},"-BuildDefinitionId"),(0,a.kt)("p",null,"The Id of the build definition to use to queue to build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: ByID\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-sourcebranch"},"-SourceBranch"),(0,a.kt)("p",null,"Which source branch to use for this build.\nOverrides default branch in build definition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-buildparameters"},"-BuildParameters"),(0,a.kt)("p",null,"A hashtable with build parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,a.kt)("p",null,"Specifies the team project for which this function operates."),(0,a.kt)("p",null,"You can tab complete from a list of available projects."),(0,a.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"-templateparameters"},"-TemplateParameters"),(0,a.kt)("p",null,"{{ Fill TemplateParameters Description }}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h3",{id:"systemstring"},"System.String"),(0,a.kt)("p",null,"ProjectName"),(0,a.kt)("p",null,"BuildDefinitionName"),(0,a.kt)("p",null,"QueueName"),(0,a.kt)("p",null,"SourceBranch"),(0,a.kt)("h3",{id:"systemint32"},"System.Int32"),(0,a.kt)("p",null,"BuildDefinitionId"),(0,a.kt)("h3",{id:"systemcollectionshashtable"},"System.Collections.Hashtable"),(0,a.kt)("p",null,"Build Parameters"),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h3",{id:"vsteam_libbuild"},"vsteam_lib.Build"),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("p",null,"BuildDefinition and QueueName are dynamic parameters and use the default project value to query their validate set."),(0,a.kt)("p",null,"If you do not set the default project by called Set-VSTeamDefaultProject you must pass in -ProjectName or you will have to type in the names."),(0,a.kt)("p",null,"Prerequisites:"),(0,a.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,a.kt)("p",null,"tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,a.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,a.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,a.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"))}c.isMDXComponent=!0}}]);
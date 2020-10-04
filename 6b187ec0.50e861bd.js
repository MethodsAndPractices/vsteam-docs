(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(329)),o={id:"Add-VSTeamWorkItem",title:"Add-VSTeamWorkItem",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Add-VSTeamWorkItem",isDocsHomePage:!1,title:"Add-VSTeamWorkItem",description:"Add-VSTeamWorkItem",source:"@site/docs/modules/vsteam/commands/Add-VSTeamWorkItem.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItem",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md",sidebar:"vsteam",previous:{title:"Add-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamVariableGroup"},next:{title:"Add-VSTeamWorkItemAreaPermission",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItemAreaPermission"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-AdditionalFields",id:"-additionalfields",children:[]},{value:"-AssignedTo",id:"-assignedto",children:[]},{value:"-Description",id:"-description",children:[]},{value:"-IterationPath",id:"-iterationpath",children:[]},{value:"-ParentId",id:"-parentid",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Title",id:"-title",children:[]},{value:"-WorkItemType",id:"-workitemtype",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteamworkitem"},"Add-VSTeamWorkItem"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Adds a work item to your project."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Add-VSTeamWorkItem -Title <String> [-Description <String>] [-IterationPath <String>] [-AssignedTo <String>]\n -WorkItemType <String> [-ParentId <Int>] [-AdditionalFields <Hashtable>] -ProjectName <String>\n [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Add-VSTeamWorkItem will add a new work item to your project."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'Set-VSTeamDefaultProject Demo\nAdd-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task\n\nID Title          Status\n-- ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n-----          ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---\n6  New Work Item  To Do\n')),Object(i.b)("h3",{id:"example-3"},"Example 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'Set-VSTeamDefaultProject Demo\n$additionalFields = @{"System.Tags"= "TestTag"; "System.AreaPath" = "Project\\\\MyPath"}\nAdd-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task -Description "This is a description" -AdditionalFields $additionalFields\n\nID Title          Status\n-- ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\n6  New Work Item  To Do\n')),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-additionalfields"},"-AdditionalFields"),Object(i.b)("p",null,"Hashtable which contains a key value pair of any field that should be filled with values.\nKey is the internal name of the field and the value is the content of the field being filled.\nE.g.\nthe internal name for the area path is 'System.AreaPath'."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-assignedto"},"-AssignedTo"),Object(i.b)("p",null,"The email address of the user this work item will be assigned to."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-description"},"-Description"),Object(i.b)("p",null,"The Description of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-iterationpath"},"-IterationPath"),Object(i.b)("p",null,"The IterationPath of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-parentid"},"-ParentId"),Object(i.b)("p",null,"The Id of the parent work item that this work item will be related to."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-title"},"-Title"),Object(i.b)("p",null,"The title of the work item"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-workitemtype"},"-WorkItemType"),Object(i.b)("p",null,"The type of work item to add."),Object(i.b)("p",null,"You can tab complete from a list of available work item types."),Object(i.b)("p",null,"You must use Set-VSTeamDefaultProject to set a default project to enable the tab completion."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h3",{id:"systemstring"},"System.String"),Object(i.b)("p",null,"ProjectName"),Object(i.b)("p",null,"WorkItemType"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("p",null,"WorkItemType is a dynamic parameter and uses the project value to query their validate set."),Object(i.b)("p",null,"If you do not set the default project by calling Set-VSTeamDefaultProject before calling Add-VSTeamWorkItem you need to provide the -ProjectName before -WorkItemType or will have to type in the names."),Object(i.b)("p",null,"Any of the basic work item parameters defined in this method, will cause an exception if also added to the parameter AdditionalFields, since it is redundant.\nEither only use the parameter or define them in the AdditionalFields parameter."),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(i.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(i.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(i.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(i.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}s.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return a?r.a.createElement(b,l(l({ref:t},d),{},{components:a})):r.a.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
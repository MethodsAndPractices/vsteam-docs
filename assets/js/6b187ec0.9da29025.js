"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[1539],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(d,".").concat(p)]||u[p]||c[p]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7066:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"Add-VSTeamWorkItem",title:"Add-VSTeamWorkItem",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},d="Add-VSTeamWorkItem",s={unversionedId:"modules/vsteam/commands/Add-VSTeamWorkItem",id:"modules/vsteam/commands/Add-VSTeamWorkItem",title:"Add-VSTeamWorkItem",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamWorkItem.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItem",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamWorkItem",title:"Add-VSTeamWorkItem",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeamWiki",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWiki"},next:{title:"Add-VSTeamWorkItemAreaPermission",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItemAreaPermission"}},m=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Title",id:"-title",children:[],level:3},{value:"-Description",id:"-description",children:[],level:3},{value:"-IterationPath",id:"-iterationpath",children:[],level:3},{value:"-AssignedTo",id:"-assignedto",children:[],level:3},{value:"-WorkItemType",id:"-workitemtype",children:[],level:3},{value:"-ParentId",id:"-parentid",children:[],level:3},{value:"-AdditionalFields",id:"-additionalfields",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-vsteamworkitem"},"Add-VSTeamWorkItem"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Adds a work item to your project."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Add-VSTeamWorkItem -Title <String> [-Description <String>] [-IterationPath <String>] [-AssignedTo <String>]\n [-ParentId <Int32>] [-AdditionalFields <Hashtable>] [-ProjectName <String>] -WorkItemType <String>\n [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Add-VSTeamWorkItem will add a new work item to your project."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Set-VSTeamDefaultProject Demo\nAdd-VSTeamWorkItem -Title \"New Work Item\" -WorkItemType Task\n\nID Title          Status\n-- ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n-----          ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: ''\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---\n6  New Work Item  To Do\n")),(0,l.kt)("h3",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Set-VSTeamDefaultProject Demo\n$additionalFields = @{"System.Tags"= "TestTag"; "System.AreaPath" = "Project\\\\MyPath"}\nAdd-VSTeamWorkItem -Title "New Work Item" -WorkItemType Task -Description "This is a description" -AdditionalFields $additionalFields\n\nID Title          Status\n-- ---\nid: Add-VSTeamWorkItem\ntitle: Add-VSTeamWorkItem\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamWorkItem.md\ndescription: \'\'\nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n------\n6  New Work Item  To Do\n')),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-title"},"-Title"),(0,l.kt)("p",null,"The title of the work item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-description"},"-Description"),(0,l.kt)("p",null,"The Description of the work item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-iterationpath"},"-IterationPath"),(0,l.kt)("p",null,"The IterationPath of the work item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-assignedto"},"-AssignedTo"),(0,l.kt)("p",null,"The email address of the user this work item will be assigned to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-workitemtype"},"-WorkItemType"),(0,l.kt)("p",null,"The type of work item to add."),(0,l.kt)("p",null,"You can tab complete from a list of available work item types."),(0,l.kt)("p",null,"You must use Set-VSTeamDefaultProject to set a default project to enable the tab completion."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-parentid"},"-ParentId"),(0,l.kt)("p",null,"The Id of the parent work item that this work item will be related to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-additionalfields"},"-AdditionalFields"),(0,l.kt)("p",null,"Hashtable which contains a key value pair of any field that should be filled with values.\nKey is the internal name of the field and the value is the content of the field being filled.\nE.g.\nthe internal name for the area path is 'System.AreaPath'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,l.kt)("p",null,"Specifies the team project for which this function operates."),(0,l.kt)("p",null,"You can tab complete from a list of available projects."),(0,l.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"systemstring"},"System.String"),(0,l.kt)("p",null,"ProjectName"),(0,l.kt)("p",null,"WorkItemType"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"WorkItemType is a dynamic parameter and uses the project value to query their validate set."),(0,l.kt)("p",null,"If you do not set the default project by calling Set-VSTeamDefaultProject before calling Add-VSTeamWorkItem you need to provide the -ProjectName before -WorkItemType or will have to type in the names."),(0,l.kt)("p",null,"Any of the basic work item parameters defined in this method, will cause an exception if also added to the parameter AdditionalFields, since it is redundant.\nEither only use the parameter or define them in the AdditionalFields parameter."),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,v=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"Remove-VSTeamDirectAssignment",title:"Remove-VSTeamDirectAssignment",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamDirectAssignment.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},l="Remove-VSTeamDirectAssignment",m={unversionedId:"modules/vsteam/commands/Remove-VSTeamDirectAssignment",id:"modules/vsteam/commands/Remove-VSTeamDirectAssignment",title:"Remove-VSTeamDirectAssignment",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamDirectAssignment.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamDirectAssignment",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamDirectAssignment",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamDirectAssignment.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamDirectAssignment",title:"Remove-VSTeamDirectAssignment",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamDirectAssignment.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamClassificationNode",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamClassificationNode"},next:{title:"Remove-VSTeamExtension",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamExtension"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-UserIds",id:"-userids",level:3},{value:"-Preview",id:"-preview",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"PSCustomObject",id:"pscustomobject",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:u},p="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remove-vsteamdirectassignment"},"Remove-VSTeamDirectAssignment"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,"Removes explicit assignments of users by their IDs.\nOperates in either preview mode or normal mode.\nIn normal mode, it chunks user IDs into groups of 20 to avoid timeouts."),(0,i.kt)("h2",{id:"syntax"},"SYNTAX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Remove-VSTeamDirectAssignment [-UserIds <String[]>] [-Preview] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"Removes explicit assignments of users by their IDs.\nOperates in either preview mode or normal mode.\nIn normal mode, it chunks user IDs into groups of 20 to avoid timeouts."),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Remove-VSTeamDirectAssignment -UserIds '12345','67890' -Preview\n")),(0,i.kt)("p",null,"Removes the explicit assignments for the users with the specified IDs in preview mode."),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Remove-VSTeamDirectAssignment -UserIds '12345','67890'\n")),(0,i.kt)("p",null,"Removes the explicit assignments for the users with the specified IDs."),(0,i.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,i.kt)("h3",{id:"-userids"},"-UserIds"),(0,i.kt)("p",null,"The IDs of the users to remove explicit assignments for."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-preview"},"-Preview"),(0,i.kt)("p",null,"Switch to operate in preview mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-confirm"},"-Confirm"),(0,i.kt)("p",null,"Prompts you for confirmation before running the cmdlet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,i.kt)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,i.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,i.kt)("h2",{id:"inputs"},"INPUTS"),(0,i.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,i.kt)("h3",{id:"pscustomobject"},"PSCustomObject"),(0,i.kt)("h2",{id:"notes"},"NOTES"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,i.kt)("p",null,"tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,i.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,i.kt)("h2",{id:"related-links"},"RELATED LINKS"))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[4437],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,k=u["".concat(m,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2353:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={id:"Remove-VSTeamWiki",title:"Remove-VSTeamWiki",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamWiki.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},m="Remove-VSTeamWiki",s={unversionedId:"modules/vsteam/commands/Remove-VSTeamWiki",id:"modules/vsteam/commands/Remove-VSTeamWiki",title:"Remove-VSTeamWiki",description:"",source:"@site/docs/modules/vsteam/commands/Remove-VSTeamWiki.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Remove-VSTeamWiki",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamWiki",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamWiki.md",tags:[],version:"current",frontMatter:{id:"Remove-VSTeamWiki",title:"Remove-VSTeamWiki",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Remove-VSTeamWiki.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Remove-VSTeamVariableGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamVariableGroup"},next:{title:"Remove-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamWorkItem"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"ByName",id:"byname",level:3},{value:"ById",id:"byid",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-ProjectName",id:"-projectname",level:3},{value:"-WikiName",id:"-wikiname",level:3},{value:"-WikiId",id:"-wikiid",level:3},{value:"-Confirm",id:"-confirm",level:3},{value:"-WhatIf",id:"-whatif",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:u},d="wrapper";function k(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remove-vsteamwiki"},"Remove-VSTeamWiki"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Unpublish a project or code wiki in the project provided"),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("h3",{id:"byname"},"ByName"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Remove-VSTeamWiki -WikiName <String> -ProjectName <String> [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"byid"},"ById"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Remove-VSTeamWiki -WikiId <Guid> [-ProjectName <String>] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Un-publish a code or project wiki in to the selected repo"),(0,r.kt)("p",null,"You must call Set-VSTeamAccount before calling this function."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Remove-VSTeamWiki -ProjectName myProject -WikiName myWikiName\n")),(0,r.kt)("p",null,"This will Un-publish a wiki by name, project name required"),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Remove-VSTeamWiki -WikiId 00000000-0000-0000-0000-000000000000\n")),(0,r.kt)("p",null,"This will Un-publish a wiki by Id"),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,r.kt)("p",null,"Specifies the team project for which this function operates."),(0,r.kt)("p",null,"You can tab complete from a list of available projects."),(0,r.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ById\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-wikiname"},"-WikiName"),(0,r.kt)("p",null,"Name of the Wiki to Un-publish"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByName\nAliases: Name\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-wikiid"},"-WikiId"),(0,r.kt)("p",null,"Id of the Wiki to Un-publish"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: ById\nAliases: Id\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-confirm"},"-Confirm"),(0,r.kt)("p",null,"Prompts you for confirmation before running the cmdlet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-whatif"},"-WhatIf"),(0,r.kt)("p",null,"Shows what would happen if the cmdlet runs.\nThe cmdlet is not run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWiki"},"Get-VSTeamWiki")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWiki"},"Add-VSTeamWiki")))}k.isMDXComponent=!0}}]);
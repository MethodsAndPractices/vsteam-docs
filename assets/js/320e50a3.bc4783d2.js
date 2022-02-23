"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[1572],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,v=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(v,i(i({ref:t},m),{},{components:r})):n.createElement(v,i({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"Get-VSTeamDescriptor",title:"Get-VSTeamDescriptor",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamDescriptor.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamDescriptor",c={unversionedId:"modules/vsteam/commands/Get-VSTeamDescriptor",id:"modules/vsteam/commands/Get-VSTeamDescriptor",title:"Get-VSTeamDescriptor",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamDescriptor.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamDescriptor",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamDescriptor",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamDescriptor.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamDescriptor",title:"Get-VSTeamDescriptor",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamDescriptor.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamCloudSubscription",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamCloudSubscription"},next:{title:"Get-VSTeamExtension",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamExtension"}},m=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-StorageKey",id:"-storagekey",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-vsteamdescriptor"},"Get-VSTeamDescriptor"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,"Resolve a storage key to a descriptor."),(0,a.kt)("h2",{id:"syntax"},"SYNTAX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Get-VSTeamDescriptor [-StorageKey] <String> [<CommonParameters>]\n")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Resolve a storage key to a descriptor."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,a.kt)("p",null,"{{ Add example description here }}"),(0,a.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,a.kt)("h3",{id:"-storagekey"},"-StorageKey"),(0,a.kt)("p",null,"Storage key of the subject (user, group, scope, etc.) to resolve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 0\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,a.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,a.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,a.kt)("h2",{id:"inputs"},"INPUTS"),(0,a.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,a.kt)("h2",{id:"notes"},"NOTES"),(0,a.kt)("p",null,"Prerequisites:"),(0,a.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,a.kt)("p",null,"tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,a.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,a.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,a.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,a.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
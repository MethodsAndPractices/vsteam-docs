"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[2478],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,v=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"Get-VSTeamAgent",title:"Get-VSTeamAgent",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamAgent.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamAgent",c={unversionedId:"modules/vsteam/commands/Get-VSTeamAgent",id:"modules/vsteam/commands/Get-VSTeamAgent",title:"Get-VSTeamAgent",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamAgent.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamAgent",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAgent",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamAgent.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamAgent",title:"Get-VSTeamAgent",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamAgent.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamAccounts",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAccounts"},next:{title:"Get-VSTeamApproval",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamApproval"}},m=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-PoolId",id:"-poolid",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-vsteamagent"},"Get-VSTeamAgent"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Returns the agents in a pool."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamAgent -PoolId <String> -Id <String> [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Returns the agents in a pool."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,l.kt)("p",null,"{{ Add example description here }}"),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-poolid"},"-PoolId"),(0,l.kt)("p",null,"Id of the pool."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-id"},"-Id"),(0,l.kt)("p",null,"Id of the agent to return."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases: AgentID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h3",{id:"systemstring"},"System.String"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h3",{id:"systemobject"},"System.Object"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"To read system capabilities that contain dots you have to use the PSObject Properties property."),(0,l.kt)("p",null,"(Get-VSTeamAgent 1 91).systemCapabilities.PSObject.Properties","[","'Agent.OS'","]",".Value"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
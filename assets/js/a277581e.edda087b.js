"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[107],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),m=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,v=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return a?o.createElement(v,l(l({ref:t},c),{},{components:a})):o.createElement(v,l({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6633:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),l=["components"],s={id:"Get-VSTeamPool",title:"Get-VSTeamPool",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPool.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},i="Get-VSTeamPool",m={unversionedId:"modules/vsteam/commands/Get-VSTeamPool",id:"modules/vsteam/commands/Get-VSTeamPool",title:"Get-VSTeamPool",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamPool.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamPool",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPool",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPool.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamPool",title:"Get-VSTeamPool",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPool.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamPolicyType",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPolicyType"},next:{title:"Get-VSTeamProcess",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProcess"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"List (Default)",id:"list-default",level:3},{value:"ByID",id:"byid",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Id",id:"-id",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Object",id:"systemobject",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:u},p="wrapper";function v(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-vsteampool"},"Get-VSTeamPool"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Returns the agent pools."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("h3",{id:"list-default"},"List (Default)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPool [<CommonParameters>]\n")),(0,r.kt)("h3",{id:"byid"},"ByID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPool -Id <Int32> [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Returns the agent pools."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPool\n")),(0,r.kt)("p",null,"Returns a list of all agent pools."),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPool -Id 12345\n")),(0,r.kt)("p",null,"Returns the agent pool with the specified ","`","Id","`",' "12345".'),(0,r.kt)("h3",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Get-VSTeamPool | Where-Object { $_.Name -eq "Default" }\n')),(0,r.kt)("p",null,'Returns the agent pool with the name "Default".'),(0,r.kt)("h3",{id:"example-4"},"Example 4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Get-VSTeamPool | Sort-Object Name\n")),(0,r.kt)("p",null,"Returns all agent pools sorted by their name in ascending order."),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-id"},"-Id"),(0,r.kt)("p",null,"Id of the pool to return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: ByID\nAliases: PoolID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h3",{id:"systemstring"},"System.String"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h3",{id:"systemobject"},"System.Object"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamAccount"},"Remove-VSTeamAccount")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamAccount"},"Update-VSTeamAccount")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamAccount"},"Add-VSTeamAccount")))}v.isMDXComponent=!0}}]);
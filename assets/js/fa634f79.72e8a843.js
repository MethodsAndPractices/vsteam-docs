"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6837],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3493:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],s={id:"Get-VSTeamProcess",title:"Get-VSTeamProcess",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamProcess.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},i="Get-VSTeamProcess",m={unversionedId:"modules/vsteam/commands/Get-VSTeamProcess",id:"modules/vsteam/commands/Get-VSTeamProcess",title:"Get-VSTeamProcess",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamProcess.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamProcess",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProcess",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamProcess.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamProcess",title:"Get-VSTeamProcess",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamProcess.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamPool",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPool"},next:{title:"Get-VSTeamProfile",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProfile"}},c={},u=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"List (Default)",id:"list-default",level:3},{value:"ByName",id:"byname",level:3},{value:"ByID",id:"byid",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Name",id:"-name",level:3},{value:"-Id",id:"-id",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],d={toc:u},p="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-vsteamprocess"},"Get-VSTeamProcess"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Returns a list of process templates in the Team Services or Team Foundation Server account."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("h3",{id:"list-default"},"List (Default)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"byname"},"ByName"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess [[-Name] <Object>] [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"byid"},"ByID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess [-Id <String>] [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"The list of Process Templates can be filtered by name  (which may include Wildcard).\nYou can also get a single Process Template by id"),(0,o.kt)("p",null,"You must call Set-VSTeamAccount before calling this function."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess\n")),(0,o.kt)("p",null,"This will return all the Process Templates"),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess | Format-Wide\n")),(0,o.kt)("p",null,"This will return the Process Templates only showing their name"),(0,o.kt)("h3",{id:"example-3"},"Example 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Get-VSTeamProcess *scrum*\n")),(0,o.kt)("p",null,'This will return an process templates with names containing scrum, in other words, the default "Scrum" template and custom ones with names like "Custom Scrum", "Scrum for Contoso" will all be returned.'),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-name"},"-Name"),(0,o.kt)("p",null,"Specifies the process template name for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available process templates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Object\nParameter Sets: ByName\nAliases: ProcessName, ProcessTemplate\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-id"},"-Id"),(0,o.kt)("p",null,"The id of the Process Template to return."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ByID\nAliases: ProcessTemplateID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamProject"},"Add-VSTeamProject")))}f.isMDXComponent=!0}}]);
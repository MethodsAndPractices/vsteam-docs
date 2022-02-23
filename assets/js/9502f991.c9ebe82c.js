"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[4748],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"Get-VSTeamOption",title:"Get-VSTeamOption",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamOption.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamOption",m={unversionedId:"modules/vsteam/commands/Get-VSTeamOption",id:"modules/vsteam/commands/Get-VSTeamOption",title:"Get-VSTeamOption",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamOption.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamOption",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamOption",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamOption.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamOption",title:"Get-VSTeamOption",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamOption.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamMembership",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamMembership"},next:{title:"Get-VSTeamPackage",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPackage"}},p=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3},{value:"Example 4",id:"example-4",children:[],level:3},{value:"Example 5",id:"example-5",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-SubDomain",id:"-subdomain",children:[],level:3},{value:"-Area",id:"-area",children:[],level:3},{value:"-Resource",id:"-resource",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-vsteamoption"},"Get-VSTeamOption"),(0,l.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,l.kt)("p",null,"Returns all the versions of supported APIs of your TFS or AzD."),(0,l.kt)("h2",{id:"syntax"},"SYNTAX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption [-SubDomain <String>] [-Area <String>] [-Resource <String>] [<CommonParameters>]\n")),(0,l.kt)("h2",{id:"description"},"DESCRIPTION"),(0,l.kt)("p",null,"Returns all the versions of supported APIs of your TFS or AzD."),(0,l.kt)("p",null,"There are two table formats defined for the vsteam_lib.Option type, Default and Versions."),(0,l.kt)("p",null,"Default view contains Name, Area, Max Version and URI Template."),(0,l.kt)("p",null,"Version view contains Name, Area, Min Version, Max Version, Released Version and Resource Version."),(0,l.kt)("h2",{id:"examples"},"EXAMPLES"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption\n")),(0,l.kt)("p",null,"This will display all the versions of supported APIs for your account using the 'Default' table format."),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption | Format-Table -View Versions\n")),(0,l.kt)("p",null,"This will display all the versions of supported APIs for your account using the 'Versions' custom table format."),(0,l.kt)("h3",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption -SubDomain vsrm\n")),(0,l.kt)("p",null,"This will display all the versions of supported APIs for the release management service."),(0,l.kt)("h3",{id:"example-4"},"Example 4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption -Area core\n")),(0,l.kt)("p",null,"This will display all the versions of supported APIs for the area core."),(0,l.kt)("h3",{id:"example-5"},"Example 5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get-VSTeamOption -Area core -Resource teams\n")),(0,l.kt)("p",null,"This will display all the versions of supported APIs for resources teams under the area core."),(0,l.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,l.kt)("h3",{id:"-subdomain"},"-SubDomain"),(0,l.kt)("p",null,"Returns options for that sub domain APIs.\nSome examples include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"vsaex = Member Entitlement Management"),(0,l.kt)("li",{parentName:"ul"},"feeds = Artifacts"),(0,l.kt)("li",{parentName:"ul"},"vsrm = Release Management"),(0,l.kt)("li",{parentName:"ul"},"vssps = Graph"),(0,l.kt)("li",{parentName:"ul"},"extmgmt = Extensions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-area"},"-Area"),(0,l.kt)("p",null,"Returns options for that area's APIs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"-resource"},"-Resource"),(0,l.kt)("p",null,"Returns options for that resource's APIs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,l.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,l.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,l.kt)("h2",{id:"inputs"},"INPUTS"),(0,l.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("p",null,"Prerequisites:"),(0,l.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,l.kt)("p",null,"tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,l.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,l.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,l.kt)("h2",{id:"related-links"},"RELATED LINKS"))}c.isMDXComponent=!0}}]);
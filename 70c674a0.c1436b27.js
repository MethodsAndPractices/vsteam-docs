(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),l=(n(0),n(313)),o={},i={id:"Module/Get-VSTeamOption",isDocsHomePage:!1,title:"Get-VSTeamOption",description:"Get-VSTeamOption",source:"@site/docs/Module/Get-VSTeamOption.md",permalink:"/vsteam-docs/docs/Module/Get-VSTeamOption",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamOption.md"},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]},{value:"-------------------------- EXAMPLE 2 --------------------------",id:"---------------------------example-2---------------------------",children:[]},{value:"-------------------------- EXAMPLE 3 --------------------------",id:"---------------------------example-3---------------------------",children:[]},{value:"-------------------------- EXAMPLE 4 --------------------------",id:"---------------------------example-4---------------------------",children:[]},{value:"-------------------------- EXAMPLE 5 --------------------------",id:"---------------------------example-5---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-SubDomain",id:"-subdomain",children:[]},{value:"-Area",id:"-area",children:[]},{value:"-Resource",id:"-resource",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteamoption"},"Get-VSTeamOption"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Returns all the versions of supported APIs of your TFS or AzD."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Returns all the versions of supported APIs of your TFS or AzD."),Object(l.b)("p",null,"There are two table formats defined for the Team.Option type, Default and Versions."),Object(l.b)("p",null,"Default view contains Name, Area, Max Version and URI Template."),Object(l.b)("p",null,"Version view contains Name, Area, Min Version, Max Version, Released Version and Resource Version."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamOption\n")),Object(l.b)("p",null,"This will display all the versions of supported APIs for your account using the 'Default' table format."),Object(l.b)("h3",{id:"---------------------------example-2---------------------------"},"-------------------------- EXAMPLE 2 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamOption | Format-Table -View Versions\n")),Object(l.b)("p",null,"This will display all the versions of supported APIs for your account using the 'Versions' custom table format."),Object(l.b)("h3",{id:"---------------------------example-3---------------------------"},"-------------------------- EXAMPLE 3 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamOption -SubDomain vsrm\n")),Object(l.b)("p",null,"This will display all the versions of supported APIs for the release management service."),Object(l.b)("h3",{id:"---------------------------example-4---------------------------"},"-------------------------- EXAMPLE 4 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamOption -Area core\n")),Object(l.b)("p",null,"This will display all the versions of supported APIs for the area core."),Object(l.b)("h3",{id:"---------------------------example-5---------------------------"},"-------------------------- EXAMPLE 5 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamOption -Area core -Resource teams\n")),Object(l.b)("p",null,"This will display all the versions of supported APIs for resources teams under the area core."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-subdomain"},"-SubDomain"),Object(l.b)("p",null,"Returns options for that sub domain APIs. Some examples include:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"vsaex = Member Entitlement Management"),Object(l.b)("li",{parentName:"ul"},"feeds = Artifacts"),Object(l.b)("li",{parentName:"ul"},"vsrm = Release Management"),Object(l.b)("li",{parentName:"ul"},"vssps = Graph"),Object(l.b)("li",{parentName:"ul"},"extmgmt = Extensions")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: false\n")),Object(l.b)("h3",{id:"-area"},"-Area"),Object(l.b)("p",null,"Returns options for that area's APIs."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: false\n")),Object(l.b)("h3",{id:"-resource"},"-Resource"),Object(l.b)("p",null,"Returns options for that resource's APIs."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: false\n")),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Set-VSTeamAccount"}),"Set-VSTeamAccount")))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
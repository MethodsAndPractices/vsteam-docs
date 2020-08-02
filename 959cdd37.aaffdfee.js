(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),l=(r(0),r(313)),i={},c={id:"Module/Get-VSTeamWorkItem",isDocsHomePage:!1,title:"Get-VSTeamWorkItem",description:"Get-VSTeamWorkItem",source:"@site/docs\\Module\\Get-VSTeamWorkItem.md",permalink:"/docs/Module/Get-VSTeamWorkItem",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamWorkItem.md"},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Id",id:"-id",children:[]},{value:"-ErrorPolicy",id:"-errorpolicy",children:[]},{value:"-Fields",id:"-fields",children:[]},{value:"-Expand",id:"-expand",children:[]},{value:"-AsOf",id:"-asof",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:o};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteamworkitem"},"Get-VSTeamWorkItem"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Returns one or more a work items from your project."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Returns one or more a work items from your project."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Get-VSTeamWorkItem -Id 47,48\n")),Object(l.b)("p",null,"This command gets work items with IDs 47 and 48 by using the IDs parameter."),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-id"},"-Id"),Object(l.b)("p",null,"The id of one or more work items."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: List\nRequired: True\nAccept pipeline input: true (ByPropertyName, ByValue)\n")),Object(l.b)("h3",{id:"-errorpolicy"},"-ErrorPolicy"),Object(l.b)("p",null,"The flag to control error policy in a bulk get work items request.  The acceptable values for this parameter are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fail"),Object(l.b)("li",{parentName:"ul"},"Omit")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nRequired: True\nDefault value: omit\n")),Object(l.b)("h3",{id:"-fields"},"-Fields"),Object(l.b)("p",null,"Comma-separated list of requested fields."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\n")),Object(l.b)("h3",{id:"-expand"},"-Expand"),Object(l.b)("p",null,"Comma-separated list of requested fields.  The acceptable values for this parameter are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"None"),Object(l.b)("li",{parentName:"ul"},"Relations"),Object(l.b)("li",{parentName:"ul"},"Fields"),Object(l.b)("li",{parentName:"ul"},"Links"),Object(l.b)("li",{parentName:"ul"},"All")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\n")),Object(l.b)("h3",{id:"-asof"},"-AsOf"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\n")),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h3",{id:"systemstring"},"System.String"),Object(l.b)("p",null,"ProjectName"),Object(l.b)("p",null,"WorkItemType"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"WorkItemType is a dynamic parameter and use the default project value to query their validate set."),Object(l.b)("p",null,"If you do not set the default project by called Set-VSTeamDefaultProject before calling Get-VSTeamWorkItem you will have to type in the names."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"))}b.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<l;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
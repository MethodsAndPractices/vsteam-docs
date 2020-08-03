(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(2),c=r(9),a=(r(0),r(313)),i={},s={id:"Module/Get-VSTeamAccessControlList",isDocsHomePage:!1,title:"Get-VSTeamAccessControlList",description:"Get-VSTeamAccessControlList",source:"@site/docs/Module/Get-VSTeamAccessControlList.md",permalink:"/vsteam-docs/docs/Module/Get-VSTeamAccessControlList",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamAccessControlList.md"},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-SecurityNamespace",id:"-securitynamespace",children:[]},{value:"-SecurityNamespaceId",id:"-securitynamespaceid",children:[]},{value:"-Token",id:"-token",children:[]},{value:"-Descriptors",id:"-descriptors",children:[]},{value:"-IncludeExtendedInfo",id:"-includeextendedinfo",children:[]},{value:"-Recurse",id:"-recurse",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"VSTeamAccessControlList",id:"vsteamaccesscontrollist",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],l={rightToc:o};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"get-vsteamaccesscontrollist"},"Get-VSTeamAccessControlList"),Object(a.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(a.b)("p",null,"Return a list of access control lists for the specified security namespace and token. All ACLs in the security namespace will be retrieved if no optional parameters are provided."),Object(a.b)("h2",{id:"syntax"},"SYNTAX"),Object(a.b)("h2",{id:"description"},"DESCRIPTION"),Object(a.b)("p",null,"Return a list of access control lists for the specified security namespace and token. All ACLs in the security namespace will be retrieved if no optional parameters are provided."),Object(a.b)("h2",{id:"examples"},"EXAMPLES"),Object(a.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"Get-VSTeamSecurityNamespace | Select-Object -First 1 | Get-VSTeamAccessControlList\n")),Object(a.b)("h2",{id:"parameters"},"PARAMETERS"),Object(a.b)("h3",{id:"-securitynamespace"},"-SecurityNamespace"),Object(a.b)("p",null,"Security namespace identifier."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamSecurityNamespace\nRequired: True\n")),Object(a.b)("h3",{id:"-securitynamespaceid"},"-SecurityNamespaceId"),Object(a.b)("p",null,"Security namespace identifier."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(a.b)("h3",{id:"-token"},"-Token"),Object(a.b)("p",null,"Security token"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(a.b)("h3",{id:"-descriptors"},"-Descriptors"),Object(a.b)("p",null,"An optional filter string containing a list of identity descriptors whose ACEs should be retrieved. If this is not set entire ACLs will be returned."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(a.b)("h3",{id:"-includeextendedinfo"},"-IncludeExtendedInfo"),Object(a.b)("p",null,"If set, populate the extended information properties for the access control entries contained in the returned lists."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nRequired: True\n")),Object(a.b)("h3",{id:"-recurse"},"-Recurse"),Object(a.b)("p",null,"If true and this is a hierarchical namespace, return child ACLs of the specified token."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nRequired: True\n")),Object(a.b)("h2",{id:"inputs"},"INPUTS"),Object(a.b)("h2",{id:"outputs"},"OUTPUTS"),Object(a.b)("h3",{id:"vsteamaccesscontrollist"},"VSTeamAccessControlList"),Object(a.b)("h2",{id:"notes"},"NOTES"),Object(a.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?c.a.createElement(m,s(s({ref:t},l),{},{components:r})):c.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(313)),c={},s={id:"Module/Get-VSTeamExtension",isDocsHomePage:!1,title:"Get-VSTeamExtension",description:"Get-VSTeamExtension",source:"@site/docs/Module/Get-VSTeamExtension.md",permalink:"/vsteam-docs/docs/Module/Get-VSTeamExtension",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Get-VSTeamExtension.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-PublisherId",id:"-publisherid",children:[]},{value:"-ExtensionId",id:"-extensionid",children:[]},{value:"-IncludeInstallationIssues",id:"-includeinstallationissues",children:[]},{value:"-IncludeDisabledExtensions",id:"-includedisabledextensions",children:[]},{value:"-IncludeErrors",id:"-includeerrors",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamextension"},"Get-VSTeamExtension"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Get the installed extensions in the specified Azure DevOps or Team Foundation Server project."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Get the installed extensions in the specified Azure DevOps or Team Foundation Server project."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-publisherid"},"-PublisherId"),Object(i.b)("p",null,"The id of the publisher."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nParameter Sets: GetById\n")),Object(i.b)("h3",{id:"-extensionid"},"-ExtensionId"),Object(i.b)("p",null,"The id of the extension."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nParameter Sets: GetById\n")),Object(i.b)("h3",{id:"-includeinstallationissues"},"-IncludeInstallationIssues"),Object(i.b)("p",null,"If true (the default), include installed extensions with issues."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: List\n")),Object(i.b)("h3",{id:"-includedisabledextensions"},"-IncludeDisabledExtensions"),Object(i.b)("p",null,"If true (the default), include disabled extensions in the results."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: List\n")),Object(i.b)("h3",{id:"-includeerrors"},"-IncludeErrors"),Object(i.b)("p",null,"If true, include installed extensions with errors."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: List\n")),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Add-VSTeamExtension"}),"Add-VSTeamExtension")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Get-VSTeamExtension"}),"Get-VSTeamExtension")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Remove-VSTeamExtension"}),"Remove-VSTeamExtension")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/vsteam-docs/docs/Module/Update-VSTeamExtension"}),"Update-VSTeamExtension")))}d.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||b[p]||i;return n?a.a.createElement(m,s(s({ref:t},o),{},{components:n})):a.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(9),i=(n(0),n(313)),o={},a={id:"Module/Remove-VSTeamServiceEndpoint",isDocsHomePage:!1,title:"Remove-VSTeamServiceEndpoint",description:"Remove-VSTeamServiceEndpoint",source:"@site/docs/Module/Remove-VSTeamServiceEndpoint.md",permalink:"/vsteam-docs/docs/Module/Remove-VSTeamServiceEndpoint",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Remove-VSTeamServiceEndpoint.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Id",id:"-id",children:[]},{value:"-Force",id:"-force",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"remove-vsteamserviceendpoint"},"Remove-VSTeamServiceEndpoint"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Removes a service endpoint."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Removes a service endpoint."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-projectname"},"-ProjectName"),Object(i.b)("p",null,"Specifies the team project for which this function operates."),Object(i.b)("p",null,"You can tab complete from a list of available projects."),Object(i.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(i.b)("h3",{id:"-id"},"-Id"),Object(i.b)("p",null,"Id of the service endpoint"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String[]\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(i.b)("h3",{id:"-force"},"-Force"),Object(i.b)("p",null,"Forces the function without confirmation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nRequired: false\nPosition: Named\nAccept pipeline input: false\nParameter Sets: (All)\n")),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}u.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return n?c.a.createElement(m,a(a({ref:t},p),{},{components:n})):c.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
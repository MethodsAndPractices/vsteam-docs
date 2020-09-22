(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(9),i=(n(0),n(324)),o={id:"Get-VSTeamAPIVersion",title:"Get-VSTeamAPIVersion",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamAPIVersion.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Get-VSTeamAPIVersion",isDocsHomePage:!1,title:"Get-VSTeamAPIVersion",description:"Get-VSTeamAPIVersion",source:"@site/docs/modules/vsteam/commands/Get-VSTeamAPIVersion.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAPIVersion",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamAPIVersion.md",sidebar:"vsteam",previous:{title:"Get-VSTeamAgent",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAgent"},next:{title:"Get-VSTeamApproval",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamApproval"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]},{value:"EXAMPLE 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Service",id:"-service",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],l={rightToc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"get-vsteamapiversion"},"Get-VSTeamAPIVersion"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Returns the versions of APIs used."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamAPIVersion [-Service <String>] [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Returns the versions of APIs used."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamAPIVersion\n")),Object(i.b)("p",null,"This command gets the API versions currently in use."),Object(i.b)("h3",{id:"example-2"},"EXAMPLE 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"PS C:\\> Get-VSTeamAPIVersion -Service Release\n")),Object(i.b)("p",null,"This command gets the version of the Release API currently in use."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-service"},"-Service"),Object(i.b)("p",null,"Specifies the service to change.\nThe acceptable values for this parameter are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Build"),Object(i.b)("li",{parentName:"ul"},"Release"),Object(i.b)("li",{parentName:"ul"},"Core"),Object(i.b)("li",{parentName:"ul"},"Git"),Object(i.b)("li",{parentName:"ul"},"DistributedTask"),Object(i.b)("li",{parentName:"ul"},"Tfvc"),Object(i.b)("li",{parentName:"ul"},"Packaging"),Object(i.b)("li",{parentName:"ul"},"MemberEntitlementManagement"),Object(i.b)("li",{parentName:"ul"},"ExtensionsManagement"),Object(i.b)("li",{parentName:"ul"},"ServiceEndpoints")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}m.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
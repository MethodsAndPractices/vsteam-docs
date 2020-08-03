(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),c=(n(0),n(313)),l={},i={id:"Module/Add-VSTeamUserEntitlement",isDocsHomePage:!1,title:"Add-VSTeamUserEntitlement",description:"Add-VSTeamUserEntitlement",source:"@site/docs/Module/Add-VSTeamUserEntitlement.md",permalink:"/vsteam-docs/docs/Module/Add-VSTeamUserEntitlement",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamUserEntitlement.md"},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-License",id:"-license",children:[]},{value:"-Group",id:"-group",children:[]},{value:"-LicensingSource",id:"-licensingsource",children:[]},{value:"-MSDNLicenseType",id:"-msdnlicensetype",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"add-vsteamuserentitlement"},"Add-VSTeamUserEntitlement"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Add a user, assign license and extensions and make them a member of a project group in an account."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Add a user, assign license and extensions and make them a member of a project group in an account."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-license"},"-License"),Object(c.b)("p",null,"Type of Account License. The acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Advanced"),Object(c.b)("li",{parentName:"ul"},"EarlyAdopter"),Object(c.b)("li",{parentName:"ul"},"Express"),Object(c.b)("li",{parentName:"ul"},"None"),Object(c.b)("li",{parentName:"ul"},"Professional"),Object(c.b)("li",{parentName:"ul"},"StakeHolder")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nDefault value: EarlyAdopter\n")),Object(c.b)("h3",{id:"-group"},"-Group"),Object(c.b)("p",null,"The acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Custom"),Object(c.b)("li",{parentName:"ul"},"ProjectAdministrator"),Object(c.b)("li",{parentName:"ul"},"ProjectContributor"),Object(c.b)("li",{parentName:"ul"},"ProjectReader"),Object(c.b)("li",{parentName:"ul"},"ProjectStakeholder")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nDefault value: ProjectContributor\n")),Object(c.b)("h3",{id:"-licensingsource"},"-LicensingSource"),Object(c.b)("p",null,"Licensing Source (e.g. Account. MSDN etc.). The acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"account"),Object(c.b)("li",{parentName:"ul"},"auto"),Object(c.b)("li",{parentName:"ul"},"msdn"),Object(c.b)("li",{parentName:"ul"},"none"),Object(c.b)("li",{parentName:"ul"},"profile"),Object(c.b)("li",{parentName:"ul"},"trial")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nDefault value: account\n")),Object(c.b)("h3",{id:"-msdnlicensetype"},"-MSDNLicenseType"),Object(c.b)("p",null,"Type of MSDN License (e.g. Visual Studio Professional, Visual Studio Enterprise etc.). The acceptable values for this parameter are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"eligible"),Object(c.b)("li",{parentName:"ul"},"enterprise"),Object(c.b)("li",{parentName:"ul"},"none"),Object(c.b)("li",{parentName:"ul"},"platforms"),Object(c.b)("li",{parentName:"ul"},"premium"),Object(c.b)("li",{parentName:"ul"},"professional"),Object(c.b)("li",{parentName:"ul"},"testProfessional"),Object(c.b)("li",{parentName:"ul"},"ultimate")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nDefault value: none\n")),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"systemobject"},"System.Object"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"))}b.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
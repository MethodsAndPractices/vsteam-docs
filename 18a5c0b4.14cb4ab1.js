(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(2),a=t(9),i=(t(0),t(313)),c={},o={id:"Module/Add-VSTeamMembership",isDocsHomePage:!1,title:"Add-VSTeamMembership",description:"Add-VSTeamMembership",source:"@site/docs\\Module\\Add-VSTeamMembership.md",permalink:"/docs/Module/Add-VSTeamMembership",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamMembership.md"},p=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-MemberDescriptor",id:"-memberdescriptor",children:[]},{value:"-ContainerDescriptor",id:"-containerdescriptor",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:p};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-vsteammembership"},"Add-VSTeamMembership"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Adds a membership to a container."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Adds a membership to a container."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> $user = Get-VSTeamUser | ? DisplayName -eq 'Test User'\nPS C:\\> $group = Get-VSTeamGroup | ? DisplayName -eq 'Endpoint Administrators'\nPS C:\\> Add-VSTeamMembership -MemberDescriptor $user.Descriptor -ContainerDescriptor $group.Descriptor\n")),Object(i.b)("p",null,"Adds Test User to the Endpoint Administrators group."),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-memberdescriptor"},"-MemberDescriptor"),Object(i.b)("p",null,"A member descriptor retrieved by Get-VsTeamUser"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nPosition: 0\n")),Object(i.b)("h3",{id:"-containerdescriptor"},"-ContainerDescriptor"),Object(i.b)("p",null,"A container descriptor retrieved by Get-VsTeamGroup"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nPosition: 1\n")),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Get-VsTeamUser.md"}),"Get-VsTeamUser")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Get-VsTeamGroup.md"}),"Get-VsTeamGroup")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Get-VsTeamMembership.md"}),"Get-VsTeamMembership")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Remove-VsTeamMembership.md"}),"Remove-VsTeamMembership")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Test-VsTeamMembership.md"}),"Test-VsTeamMembership")))}b.isMDXComponent=!0},313:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return u}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=b(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=b(t),m=n,u=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return t?a.a.createElement(u,o(o({ref:r},s),{},{components:t})):a.a.createElement(u,o({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(9),o=(r(0),r(317)),i={id:"Show-VSTeamFeed",title:"Show-VSTeamFeed",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamFeed.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"Show-VSTeamFeed",isDocsHomePage:!1,title:"Show-VSTeamFeed",description:"Show-VSTeamFeed",source:"@site/modules/vsteam/Show-VSTeamFeed.md",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamFeed",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Show-VSTeamFeed.md",sidebar:"modules",previous:{title:"Show-VSTeamBuildDefinition",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamBuildDefinition"},next:{title:"Show-VSTeamGitRepository",permalink:"/vsteam-docs/modules/vsteam/Show-VSTeamGitRepository"}},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"EXAMPLE 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Name",id:"-name",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.Feed",id:"teamfeed",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],d={rightToc:l};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"show-vsteamfeed"},"Show-VSTeamFeed"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Opens the feed in the default browser."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Show-VSTeamFeed [-Name <String>] [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Opens the feed in the default browser."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"EXAMPLE 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"PS C:\\> Show-VSTeamFeed -Name Demo\n")),Object(o.b)("p",null,"This command will open a web browser with this feed showing."),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-name"},"-Name"),Object(o.b)("p",null,"{{ Fill Name Description }}"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases: ID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"teamfeed"},"Team.Feed"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamFeed")))}m.isMDXComponent=!0},317:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),m=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,b=s["".concat(i,".").concat(u)]||s[u]||p[u]||o;return r?a.a.createElement(b,c(c({ref:t},d),{},{components:r})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
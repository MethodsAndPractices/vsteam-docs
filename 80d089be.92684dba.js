(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(317)),o={id:"Enable-VSTeamAgent",title:"Enable-VSTeamAgent",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Enable-VSTeamAgent.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"Enable-VSTeamAgent",isDocsHomePage:!1,title:"Enable-VSTeamAgent",description:"Enable-VSTeamAgent",source:"@site/modules/vsteam/Enable-VSTeamAgent.md",permalink:"/vsteam-docs/modules/vsteam/Enable-VSTeamAgent",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Enable-VSTeamAgent.md",sidebar:"modules",previous:{title:"Disable-VSTeamAgent",permalink:"/vsteam-docs/modules/vsteam/Disable-VSTeamAgent"},next:{title:"Get-VSTeam",permalink:"/vsteam-docs/modules/vsteam/Get-VSTeam"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-PoolId",id:"-poolid",children:[]},{value:"-Id",id:"-id",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"enable-vsteamagent"},"Enable-VSTeamAgent"),Object(i.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(i.b)("p",null,"Enables an agent in a pool."),Object(i.b)("h2",{id:"syntax"},"SYNTAX"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Enable-VSTeamAgent -PoolId <Int32> -Id <Int32[]> [<CommonParameters>]\n")),Object(i.b)("h2",{id:"description"},"DESCRIPTION"),Object(i.b)("p",null,"Enables an agent in a pool."),Object(i.b)("h2",{id:"examples"},"EXAMPLES"),Object(i.b)("h3",{id:"example-1"},"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(i.b)("p",null,"{{ Add example description here }}"),Object(i.b)("h2",{id:"parameters"},"PARAMETERS"),Object(i.b)("h3",{id:"-poolid"},"-PoolId"),Object(i.b)("p",null,"Id of the pool."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"-id"},"-Id"),Object(i.b)("p",null,"Id of the agent to enable."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: (All)\nAliases: AgentID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(i.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(i.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(i.b)("h2",{id:"inputs"},"INPUTS"),Object(i.b)("h3",{id:"systemstring"},"System.String"),Object(i.b)("h2",{id:"outputs"},"OUTPUTS"),Object(i.b)("h2",{id:"notes"},"NOTES"),Object(i.b)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
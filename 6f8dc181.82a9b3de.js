(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(313)),c={},o={id:"Module/Update-VSTeamPullRequest",isDocsHomePage:!1,title:"Update-VSTeamPullRequest",description:"Update-VSTeamPullRequest",source:"@site/docs/Module/Update-VSTeamPullRequest.md",permalink:"/vsteam-docs/docs/Module/Update-VSTeamPullRequest",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Update-VSTeamPullRequest.md"},u=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"-------------------------- EXAMPLE 1 --------------------------",id:"---------------------------example-1---------------------------",children:[]},{value:"-------------------------- EXAMPLE 2 --------------------------",id:"---------------------------example-2---------------------------",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-RepositoryId",id:"-repositoryid",children:[]},{value:"-PullRequestId",id:"-pullrequestid",children:[]},{value:"-Status",id:"-status",children:[]},{value:"-EnableAutoComplete",id:"-enableautocomplete",children:[]},{value:"-AutoCompleteIdentity",id:"-autocompleteidentity",children:[]},{value:"-DisableAutoComplete",id:"-disableautocomplete",children:[]},{value:"-Draft",id:"-draft",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"Team.PullRequest",id:"teampullrequest",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],i={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"update-vsteampullrequest"},"Update-VSTeamPullRequest"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Update a pull request"),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"Update a pull request"),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"---------------------------example-1---------------------------"},"-------------------------- EXAMPLE 1 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken\nPS C:\\> $r = Get-VSTeamGitRepository -ProjectName project -Name demorepo\nPS C:\\> Update-VSTeamPullRequest -RepositoryId $r.RepositoryId -Draft\n")),Object(l.b)("p",null,"Set the pull request to be a draft"),Object(l.b)("h3",{id:"---------------------------example-2---------------------------"},"-------------------------- EXAMPLE 2 --------------------------"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-PowerShell"}),"PS C:\\> Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken\nPS C:\\> $r = Get-VSTeamGitRepository -ProjectName project -Name demorepo\nPS C:\\> Update-VSTeamPullRequest -RepositoryId $r.RepositoryId -Status abandoned\n")),Object(l.b)("p",null,"Abandon a pull request"),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-repositoryid"},"-RepositoryId"),Object(l.b)("p",null,"The id of the repository"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Guid\nRequired: True\nAliases: Id\nAccept pipeline input: true (ByPropertyName)\nParameter Sets: Draft, Publish, Status, EnableAutoComplete, DisableAutoComplete\n")),Object(l.b)("h3",{id:"-pullrequestid"},"-PullRequestId"),Object(l.b)("p",null,"The id of the pull request"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nRequired: True\nParameter Sets: Draft, Publish, Status, EnableAutoComplete, DisableAutoComplete\n")),Object(l.b)("h3",{id:"-status"},"-Status"),Object(l.b)("p",null,"The status to set the pull request to. Valid values for this are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"abandoned"),Object(l.b)("li",{parentName:"ul"},"active"),Object(l.b)("li",{parentName:"ul"},"completed"),Object(l.b)("li",{parentName:"ul"},"notSet")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Status\n")),Object(l.b)("h3",{id:"-enableautocomplete"},"-EnableAutoComplete"),Object(l.b)("p",null,"Set the pull requests auto complete status"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: EnableAutoComplete\n")),Object(l.b)("h3",{id:"-autocompleteidentity"},"-AutoCompleteIdentity"),Object(l.b)("p",null,"The identity that enabled autocomplete. This is mandatory if -AutoComplete is set to $true"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: VSTeamUser\nParameter Sets: EnableAutoComplete\n")),Object(l.b)("h3",{id:"-disableautocomplete"},"-DisableAutoComplete"),Object(l.b)("p",null,"Unset the pull requests auto complete status"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: DisableAutoComplete\n")),Object(l.b)("h3",{id:"-draft"},"-Draft"),Object(l.b)("p",null,"Set the pull request as a draft"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\nParameter Sets: Draft\n")),Object(l.b)("h3",{id:"-confirm"},"-Confirm"),Object(l.b)("p",null,"Prompts you for confirmation before running the function."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nRequired: false\nPosition: Named\nAccept pipeline input: false\nParameter Sets: (All)\nAliases: cf\n")),Object(l.b)("h3",{id:"-force"},"-Force"),Object(l.b)("p",null,"Forces the function without confirmation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nRequired: false\nPosition: Named\nAccept pipeline input: false\nParameter Sets: (All)\n")),Object(l.b)("h3",{id:"-whatif"},"-WhatIf"),Object(l.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nRequired: false\nPosition: Named\nAccept pipeline input: false\nParameter Sets: (All)\nAliases: wi\n")),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"teampullrequest"},"Team.PullRequest"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||l;return a?r.a.createElement(m,o(o({ref:t},i),{},{components:a})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<l;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),c=(a(0),a(329)),l={id:"Get-VSTeamQueue",title:"Get-VSTeamQueue",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamQueue.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},o={id:"modules/vsteam/commands/Get-VSTeamQueue",isDocsHomePage:!1,title:"Get-VSTeamQueue",description:"Get-VSTeamQueue",source:"@site/docs/modules/vsteam/commands/Get-VSTeamQueue.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamQueue",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamQueue.md",sidebar:"vsteam",previous:{title:"Get-VSTeamQuery",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamQuery"},next:{title:"Get-VSTeamRelease",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamRelease"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-actionFilter",id:"-actionfilter",children:[]},{value:"-id",id:"-id",children:[]},{value:"-queueName",id:"-queuename",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Queue",id:"vsteam_libqueue",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"get-vsteamqueue"},"Get-VSTeamQueue"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Gets a agent queue."),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h3",{id:"list-default"},"List (Default)"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamQueue [-queueName <String>] [-actionFilter <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h3",{id:"byid"},"ByID"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamQueue [-id <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"Gets a agent queue."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h3",{id:"example-1"},"Example 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(c.b)("p",null,"{{ Add example description here }}"),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-actionfilter"},"-actionFilter"),Object(c.b)("p",null,"None, Manage or Use."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-id"},"-id"),Object(c.b)("p",null,"Id of the queue to return."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByID\nAliases: QueueID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"-queuename"},"-queueName"),Object(c.b)("p",null,"Name of the queue to return."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(c.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(c.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"vsteam_libqueue"},"vsteam_lib.Queue"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("p",null,"Prerequisites:"),Object(c.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(c.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(c.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(c.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(c.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}s.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,d=m["".concat(l,".").concat(p)]||m[p]||b[p]||c;return a?r.a.createElement(d,o(o({ref:t},u),{},{components:a})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<c;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(329)),c={id:"Get-VSTeamAgent",title:"Get-VSTeamAgent",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamAgent.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Get-VSTeamAgent",isDocsHomePage:!1,title:"Get-VSTeamAgent",description:"Get-VSTeamAgent",source:"@site/docs/modules/vsteam/commands/Get-VSTeamAgent.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAgent",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamAgent.md",sidebar:"vsteam",previous:{title:"Get-VSTeamAccessControlList",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAccessControlList"},next:{title:"Get-VSTeamAPIVersion",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamAPIVersion"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-PoolId",id:"-poolid",children:[]},{value:"-Id",id:"-id",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"get-vsteamagent"},"Get-VSTeamAgent"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Returns the agents in a pool."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"list-default"},"List (Default)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamAgent -PoolId <Int32> [<CommonParameters>]\n")),Object(o.b)("h3",{id:"byid"},"ByID"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Get-VSTeamAgent -PoolId <Int32> -Id <Int32> [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Returns the agents in a pool."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> {{ Add example code here }}\n")),Object(o.b)("p",null,"{{ Add example description here }}"),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-poolid"},"-PoolId"),Object(o.b)("p",null,"Id of the pool."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName, ByValue)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-id"},"-Id"),Object(o.b)("p",null,"Id of the agent to return."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: ByID\nAliases: AgentID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h3",{id:"systemstring"},"System.String"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"systemobject"},"System.Object"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"To read system capabilities that contain dots you have to use the PSObject Properties property."),Object(o.b)("p",null,"(Get-VSTeamAgent 1 91).systemCapabilities.PSObject.Properties","[","'Agent.OS'","]",".Value"),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(o.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(o.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(o.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")))}u.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,p=b["".concat(c,".").concat(d)]||b[d]||m[d]||o;return n?r.a.createElement(p,l(l({ref:t},s),{},{components:n})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{232:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),o=(a(0),a(325)),c={id:"Get-VSTeamProfile",title:"Get-VSTeamProfile",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamProfile.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Get-VSTeamProfile",isDocsHomePage:!1,title:"Get-VSTeamProfile",description:"Get-VSTeamProfile",source:"@site/docs/modules/vsteam/commands/Get-VSTeamProfile.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProfile",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Get-VSTeamProfile.md",sidebar:"vsteam",previous:{title:"Get-VSTeamProcess",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProcess"},next:{title:"Get-VSTeamProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProject"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Name",id:"-name",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],m={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"get-vsteamprofile"},"Get-VSTeamProfile"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Returns the saved profiles."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamProfile [-Name <String>] [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Returns the saved profiles."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamProfile\n")),Object(o.b)("p",null,"Return the list of saved profiles"),Object(o.b)("h3",{id:"example-2"},"Example 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Get-VSTeamProfile -Name mydemos\n")),Object(o.b)("p",null,"Will return details of the profile provided"),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-name"},"-Name"),Object(o.b)("p",null,"Optional name for the profile."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(o.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(o.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(o.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Add-VSTeamProfile")))}s.isMDXComponent=!0},325:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),s=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(a),b=r,d=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return a?n.a.createElement(d,l(l({ref:t},m),{},{components:a})):n.a.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<o;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
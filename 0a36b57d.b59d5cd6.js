(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(324)),c={title:"About VSTeam",sidebar_label:"about_VSTeam",description:"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows.",keywords:["Team Services","VSTS","TFS","VSO","DevOps","Azure DevOps"]},i={id:"modules/vsteam/about/about_vsteam.help",isDocsHomePage:!1,title:"About VSTeam",description:"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows.",source:"@site/docs/modules/vsteam/about/about_vsteam.help.md",permalink:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam.help",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/docs/modules/vsteam/about/about_vsteam.help.md",sidebar_label:"about_VSTeam",sidebar:"vsteam",previous:{title:"Build with Docker",permalink:"/vsteam-docs/docs/modules/vsteam/build-with-docker"},next:{title:"About VSTeam Profiles",permalink:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam_profiles.help"}},l=[{value:"TOPIC",id:"topic",children:[]},{value:"SHORT DESCRIPTION",id:"short-description",children:[]},{value:"LONG DESCRIPTION",id:"long-description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"KEYWORDS",id:"keywords",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"topic"},"TOPIC"),Object(o.b)("p",null,"VSTeam"),Object(o.b)("h2",{id:"short-description"},"SHORT DESCRIPTION"),Object(o.b)("p",null,"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows."),Object(o.b)("h2",{id:"long-description"},"LONG DESCRIPTION"),Object(o.b)("p",null,"Add an account using Set-VSTeamAccount and then you can call the rest of the functions."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Set-VSTeamDefaultProject")," so you do not have to provide the ",Object(o.b)("inlineCode",{parentName:"p"},"-ProjectName")," parameter with the rest of the calls in the module. However, the ",Object(o.b)("inlineCode",{parentName:"p"},"-ProjectName")," parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"All the calls have a default 60 second timeout. Use Set-VSTeamDefaultAPITimeout to adjust the timeout."),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"Set-VSTeamAPIVersion")," function you can control which version of the APIs are used."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> Get-VSTeamAPIVersion\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Name                           Value\n----                           -----\nRelease                        3.0-preview\nDistributedTask                3.0-preview\nGit                            3.0\nServiceEndpoints               3.0-preview\nPackaging                      3.0-preview\nExtensionsManagement           3.0-preview\nPolicy                         3.0\nBuild                          3.0\nCore                           3.0\nTaskGroups                     3.0-preview\nProcesses\nGraph\nTfvc                           3.0\nVariableGroups\nVersion                        TFS2017\nMemberEntitlementManagement\n")),Object(o.b)("p",null,"To use different API versions you can update the version in the version table."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> Set-VSTeamAPIVersion -Service Build -Version '4.0'\n")),Object(o.b)("p",null,"You can also use Set-VSTeamAPIVersion to set all the API versions for either\nTFS2017, TFS2017U1, TFS2017U2, TFS2017U3, TFS2018, TFS2018U1, TFS2018U2, TFS2018U3, AzD2019, AzD2019U1 or AzD. TFS2017 is the default. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"PS C:\\> Set-VSTeamAPIVersion TFS2018U3\n")),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Get-VSTeamProject\n")),Object(o.b)("p",null,"This will return all the WellFormed team projects."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"Get-VSTeamProject | Remove-VSTeamProject -Force\n")),Object(o.b)("p",null,"This will delete all the projects in your AzD for TFS. Use with caution."),Object(o.b)("h2",{id:"keywords"},"KEYWORDS"),Object(o.b)("p",null,"Team Services, VSTS, TFS, VSO, TFS, DevOps, Azure DevOps"),Object(o.b)("h2",{id:"see-also"},"SEE ALSO"),Object(o.b)("p",null,"Set-VSTeamAccount\nGet-VSTeamProject"))}u.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
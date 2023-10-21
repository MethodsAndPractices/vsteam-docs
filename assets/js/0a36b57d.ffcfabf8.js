"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6418],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={title:"About VSTeam",sidebar_label:"about_VSTeam",description:"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows.",keywords:["Team Services","VSTS","TFS","VSO","DevOps","Azure DevOps"]},i=void 0,u={unversionedId:"modules/vsteam/about/about_vsteam.help",id:"modules/vsteam/about/about_vsteam.help",title:"About VSTeam",description:"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows.",source:"@site/docs/modules/vsteam/about/about_vsteam.help.md",sourceDirName:"modules/vsteam/about",slug:"/modules/vsteam/about/about_vsteam.help",permalink:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam.help",draft:!1,tags:[],version:"current",frontMatter:{title:"About VSTeam",sidebar_label:"about_VSTeam",description:"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows.",keywords:["Team Services","VSTS","TFS","VSO","DevOps","Azure DevOps"]},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/vsteam-docs/docs/modules/vsteam/"},next:{title:"about_VSTeam_Profiles",permalink:"/vsteam-docs/docs/modules/vsteam/about/about_vsteam_profiles.help"}},c={},p=[{value:"TOPIC",id:"topic",level:2},{value:"SHORT DESCRIPTION",id:"short-description",level:2},{value:"LONG DESCRIPTION",id:"long-description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"KEYWORDS",id:"keywords",level:2},{value:"SEE ALSO",id:"see-also",level:2}],m={toc:p},d="wrapper";function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"topic"},"TOPIC"),(0,a.kt)("p",null,"VSTeam"),(0,a.kt)("h2",{id:"short-description"},"SHORT DESCRIPTION"),(0,a.kt)("p",null,"Provides access to your Azure DevOps (AzD) and Team Foundation Server (TFS) from macOS, Linux and Windows."),(0,a.kt)("h2",{id:"long-description"},"LONG DESCRIPTION"),(0,a.kt)("p",null,"Add an account using Set-VSTeamAccount and then you can call the rest of the functions."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-VSTeamDefaultProject")," so you do not have to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"-ProjectName")," parameter with the rest of the calls in the module. However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-ProjectName")," parameter is dynamic and you can use tab completion to cycle through all the projects."),(0,a.kt)("p",null,"All the calls have a default 60 second timeout. Use Set-VSTeamDefaultAPITimeout to adjust the timeout."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-VSTeamAPIVersion")," function you can control which version of the APIs are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> Get-VSTeamAPIVersion\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name                           Value\n----                           -----\nRelease                        3.0-preview\nDistributedTask                3.0-preview\nGit                            3.0\nServiceEndpoints               3.0-preview\nPackaging                      3.0-preview\nExtensionsManagement           3.0-preview\nPolicy                         3.0\nBuild                          3.0\nCore                           3.0\nTaskGroups                     3.0-preview\nProcesses\nGraph\nTfvc                           3.0\nVariableGroups\nVersion                        TFS2017\nMemberEntitlementManagement\n")),(0,a.kt)("p",null,"To use different API versions you can update the version in the version table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> Set-VSTeamAPIVersion -Service Build -Version '4.0'\n")),(0,a.kt)("p",null,"You can also use Set-VSTeamAPIVersion to set all the API versions for either\nTFS2017, TFS2017U1, TFS2017U2, TFS2017U3, TFS2018, TFS2018U1, TFS2018U2, TFS2018U3, AzD2019, AzD2019U1 or AzD. TFS2017 is the default. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> Set-VSTeamAPIVersion TFS2018U3\n")),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-VSTeamProject\n")),(0,a.kt)("p",null,"This will return all the WellFormed team projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-VSTeamProject | Remove-VSTeamProject -Force\n")),(0,a.kt)("p",null,"This will delete all the projects in your AzD for TFS. Use with caution."),(0,a.kt)("h2",{id:"keywords"},"KEYWORDS"),(0,a.kt)("p",null,"Team Services, VSTS, TFS, VSO, TFS, DevOps, Azure DevOps"),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,"Set-VSTeamAccount\nGet-VSTeamProject"))}v.isMDXComponent=!0}}]);
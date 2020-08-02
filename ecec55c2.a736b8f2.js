(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),o=(t(0),t(313)),c={},i={id:"Module/Add-VSTeamSonarQubeEndpoint",isDocsHomePage:!1,title:"Add-VSTeamSonarQubeEndpoint",description:"Add-VSTeamSonarQubeEndpoint",source:"@site/docs\\Module\\Add-VSTeamSonarQubeEndpoint.md",permalink:"/docs/Module/Add-VSTeamSonarQubeEndpoint",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamSonarQubeEndpoint.md"},l=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-SonarQubeUrl",id:"-sonarqubeurl",children:[]},{value:"-PersonalAccessToken",id:"-personalaccesstoken",children:[]},{value:"-EndpointName",id:"-endpointname",children:[]},{value:"-SecurePersonalAccessToken",id:"-securepersonalaccesstoken",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"add-vsteamsonarqubeendpoint"},"Add-VSTeamSonarQubeEndpoint"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Adds a new SonarQube service endpoint."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"The cmdlet adds a new connection between TFS/AzD and a SonarQube server using the SonarQube connection type."),Object(o.b)("p",null,"This is only used when using the SonarQube tasks."),Object(o.b)("p",null,"Using SonarQube with the Maven tasks uses a Generic Connection type."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(o.b)("h3",{id:"-sonarqubeurl"},"-SonarQubeUrl"),Object(o.b)("p",null,"URL of the sonarqube server."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nPosition: 1\nAccept pipeline input: true (ByPropertyName)\n")),Object(o.b)("h3",{id:"-personalaccesstoken"},"-PersonalAccessToken"),Object(o.b)("p",null,"Authentication Token generated by SonarQube."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Plain\nRequired: True\nPosition: 2\nAccept pipeline input: true (ByPropertyName)\n")),Object(o.b)("h3",{id:"-endpointname"},"-EndpointName"),Object(o.b)("p",null,"The name displayed on the services page.\nIn AzD this is the Connection Name."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 3\n")),Object(o.b)("h3",{id:"-securepersonalaccesstoken"},"-SecurePersonalAccessToken"),Object(o.b)("p",null,"A secured string to capture your personal access token."),Object(o.b)("p",null,"This will allow you to provide your personal access token without displaying it in plain text."),Object(o.b)("p",null,"To use pat simply omit it from the Set-VSTeamAccount command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SecureString\nParameter Sets: Secure\nRequired: True\n")),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Get-VSTeamServiceEndpoint"}),"Get-VSTeamServiceEndpoint")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Get-VSTeamServiceEndpointType"}),"Get-VSTeamServiceEndpointType")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Remove-VSTeamServiceEndpoint"}),"Remove-VSTeamServiceEndpoint")))}p.isMDXComponent=!0},313:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:n},u),{},{components:t})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
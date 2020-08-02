(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),c=(n(0),n(313)),i={},l={id:"Module/Add-VSTeamKubernetesEndpoint",isDocsHomePage:!1,title:"Add-VSTeamKubernetesEndpoint",description:"Add-VSTeamKubernetesEndpoint",source:"@site/docs\\Module\\Add-VSTeamKubernetesEndpoint.md",permalink:"/docs/Module/Add-VSTeamKubernetesEndpoint",editUrl:"https://github.com/MethodsAndPractices/vsteam-docs/edit/master/website/docs/Module/Add-VSTeamKubernetesEndpoint.md"},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[]},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[]},{value:"-Kubeconfig",id:"-kubeconfig",children:[]},{value:"-KubernetesUrl",id:"-kubernetesurl",children:[]},{value:"-EndpointName",id:"-endpointname",children:[]},{value:"-ClientCertificateData",id:"-clientcertificatedata",children:[]},{value:"-ClientKeyData",id:"-clientkeydata",children:[]},{value:"-AcceptUntrustedCerts",id:"-acceptuntrustedcerts",children:[]},{value:"-GeneratePfx",id:"-generatepfx",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],u={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"add-vsteamkubernetesendpoint"},"Add-VSTeamKubernetesEndpoint"),Object(c.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(c.b)("p",null,"Adds connections to Kubernetes clusters"),Object(c.b)("h2",{id:"syntax"},"SYNTAX"),Object(c.b)("h2",{id:"description"},"DESCRIPTION"),Object(c.b)("p",null,"The cmdlet adds a new connection between TFS/AzD and a Kubernetes cluster using kubeconfig json."),Object(c.b)("p",null,"This is only used when using the Kubernetes tasks."),Object(c.b)("h2",{id:"examples"},"EXAMPLES"),Object(c.b)("h2",{id:"parameters"},"PARAMETERS"),Object(c.b)("h3",{id:"-projectname"},"-ProjectName"),Object(c.b)("p",null,"Specifies the team project for which this function operates."),Object(c.b)("p",null,"You can tab complete from a list of available projects."),Object(c.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so\nyou do not have to pass the ProjectName with each call."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 0\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-kubeconfig"},"-Kubeconfig"),Object(c.b)("p",null,"kubeconfig as JSON string"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-kubernetesurl"},"-KubernetesUrl"),Object(c.b)("p",null,"URL of Kubernetes cluster"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\nAccept pipeline input: true (ByPropertyName)\n")),Object(c.b)("h3",{id:"-endpointname"},"-EndpointName"),Object(c.b)("p",null,"The name displayed on the services page.\nIn AzD this is the Connection Name."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nPosition: 3\n")),Object(c.b)("h3",{id:"-clientcertificatedata"},"-ClientCertificateData"),Object(c.b)("p",null,"Client certificate from Kubeconfig"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nRequired: True\n")),Object(c.b)("h3",{id:"-clientkeydata"},"-ClientKeyData"),Object(c.b)("p",null,"Client private key from Kubeconfig"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Plain\nRequired: True\n")),Object(c.b)("h3",{id:"-acceptuntrustedcerts"},"-AcceptUntrustedCerts"),Object(c.b)("p",null,"Accept untrusted certificates for cluster"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\n")),Object(c.b)("h3",{id:"-generatepfx"},"-GeneratePfx"),Object(c.b)("p",null,"Generate pfx file"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Switch\n")),Object(c.b)("h2",{id:"inputs"},"INPUTS"),Object(c.b)("h3",{id:"systemstring"},"System.String"),Object(c.b)("h2",{id:"outputs"},"OUTPUTS"),Object(c.b)("h3",{id:"systemobject"},"System.Object"),Object(c.b)("h2",{id:"notes"},"NOTES"),Object(c.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Get-VSTeamServiceEndpoint"}),"Get-VSTeamServiceEndpoint")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Get-VSTeamServiceEndpointType"}),"Get-VSTeamServiceEndpointType")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Module/Remove-VSTeamServiceEndpoint"}),"Remove-VSTeamServiceEndpoint")))}b.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||c;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
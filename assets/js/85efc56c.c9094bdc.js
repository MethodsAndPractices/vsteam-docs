"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[8011],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return S}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,S=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(S,l(l({ref:t},u),{},{components:n})):a.createElement(S,l({ref:t},u))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return S},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"Add-VSTeamSonarQubeEndpoint",title:"Add-VSTeamSonarQubeEndpoint",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamSonarQubeEndpoint.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Add-VSTeamSonarQubeEndpoint",c={unversionedId:"modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint",id:"modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint",title:"Add-VSTeamSonarQubeEndpoint",description:"",source:"@site/docs/modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamSonarQubeEndpoint",draft:!1,editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamSonarQubeEndpoint.md",tags:[],version:"current",frontMatter:{id:"Add-VSTeamSonarQubeEndpoint",title:"Add-VSTeamSonarQubeEndpoint",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Add-VSTeamSonarQubeEndpoint.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Add-VSTeamServiceFabricEndpoint",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamServiceFabricEndpoint"},next:{title:"Add-VSTeamTaskGroup",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamTaskGroup"}},u={},d=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"Secure (Default)",id:"secure-default",level:3},{value:"Plain",id:"plain",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-ProjectName",id:"-projectname",level:3},{value:"-endpointName",id:"-endpointname",level:3},{value:"-personalAccessToken",id:"-personalaccesstoken",level:3},{value:"-securePersonalAccessToken",id:"-securepersonalaccesstoken",level:3},{value:"-sonarqubeUrl",id:"-sonarqubeurl",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"OUTPUTS",id:"outputs",level:2},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}],p={toc:d},m="wrapper";function S(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-vsteamsonarqubeendpoint"},"Add-VSTeamSonarQubeEndpoint"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,"Adds a new SonarQube service endpoint."),(0,o.kt)("h2",{id:"syntax"},"SYNTAX"),(0,o.kt)("h3",{id:"secure-default"},"Secure (Default)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Add-VSTeamSonarQubeEndpoint [-endpointName] <String> [-sonarqubeUrl] <String>\n -securePersonalAccessToken <SecureString> -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h3",{id:"plain"},"Plain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Add-VSTeamSonarQubeEndpoint [-endpointName] <String> [-sonarqubeUrl] <String> [-personalAccessToken] <String>\n -ProjectName <String> [<CommonParameters>]\n")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"The cmdlet adds a new connection between TFS/AzD and a SonarQube server using the SonarQube connection type."),(0,o.kt)("p",null,"This is only used when using the SonarQube tasks."),(0,o.kt)("p",null,"Using SonarQube with the Maven tasks uses a Generic Connection type."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> {{ Add example code here }}\n")),(0,o.kt)("p",null,"{{ Add example description here }}"),(0,o.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,o.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,o.kt)("p",null,"Specifies the team project for which this function operates."),(0,o.kt)("p",null,"You can tab complete from a list of available projects."),(0,o.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-endpointname"},"-endpointName"),(0,o.kt)("p",null,"The name displayed on the services page.\nIn AzD this is the Connection Name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 3\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-personalaccesstoken"},"-personalAccessToken"),(0,o.kt)("p",null,"Authentication Token generated by SonarQube."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: Plain\nAliases:\n\nRequired: True\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-securepersonalaccesstoken"},"-securePersonalAccessToken"),(0,o.kt)("p",null,"A secured string to capture your personal access token."),(0,o.kt)("p",null,"This will allow you to provide your personal access token without displaying it in plain text."),(0,o.kt)("p",null,"To use pat simply omit it from the Set-VSTeamAccount command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SecureString\nParameter Sets: Secure\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"-sonarqubeurl"},"-sonarqubeUrl"),(0,o.kt)("p",null,"URL of the sonarqube server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,o.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,o.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,o.kt)("h2",{id:"inputs"},"INPUTS"),(0,o.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,o.kt)("h2",{id:"notes"},"NOTES"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,o.kt)("p",null,"tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,o.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,o.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,o.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamServiceEndpoint"},"Get-VSTeamServiceEndpoint")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamServiceEndpointType"},"Get-VSTeamServiceEndpointType")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamServiceEndpoint"},"Remove-VSTeamServiceEndpoint")))}S.isMDXComponent=!0}}]);
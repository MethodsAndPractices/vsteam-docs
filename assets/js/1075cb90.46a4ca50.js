"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[8100],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8218:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={id:"Invoke-VSTeamRequest",title:"Invoke-VSTeamRequest",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Invoke-VSTeamRequest.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Invoke-VSTeamRequest",u={unversionedId:"modules/vsteam/commands/Invoke-VSTeamRequest",id:"modules/vsteam/commands/Invoke-VSTeamRequest",title:"Invoke-VSTeamRequest",description:"",source:"@site/docs/modules/vsteam/commands/Invoke-VSTeamRequest.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Invoke-VSTeamRequest",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Invoke-VSTeamRequest",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Invoke-VSTeamRequest.md",tags:[],version:"current",frontMatter:{id:"Invoke-VSTeamRequest",title:"Invoke-VSTeamRequest",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Invoke-VSTeamRequest.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamWorkItemType",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamWorkItemType"},next:{title:"Remove-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeam"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-ContentType",id:"-contenttype",children:[],level:3},{value:"-Method",id:"-method",children:[],level:3},{value:"-Body",id:"-body",children:[],level:3},{value:"-InFile",id:"-infile",children:[],level:3},{value:"-OutFile",id:"-outfile",children:[],level:3},{value:"-Area",id:"-area",children:[],level:3},{value:"-Resource",id:"-resource",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"-Version",id:"-version",children:[],level:3},{value:"-SubDomain",id:"-subdomain",children:[],level:3},{value:"-JSON",id:"-json",children:[],level:3},{value:"-AdditionalHeaders",id:"-additionalheaders",children:[],level:3},{value:"-UseProjectId",id:"-useprojectid",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[],level:3}],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],d={toc:c};function p(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"invoke-vsteamrequest"},"Invoke-VSTeamRequest"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,"Allows you to call any TFS/AzD REST API.\nAll the Auth and Route Structure is taken care of for you.\nJust provide the parts of the API call you need.\nIf you need to send a non-standard URL use the -Url parameter.\nIf the -Url is used the Url is not changed but the header and UserAgent are added for you."),(0,r.kt)("h2",{id:"syntax"},"SYNTAX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Invoke-VSTeamRequest [-ContentType <String>] [-Method <String>] [-Body <Object>] [-InFile <String>]\n [-OutFile <String>] [-Area <String>] [-Resource <String>] [-Id <String>] [-Version <String>]\n [-SubDomain <String>] [-JSON] [-AdditionalHeaders <Hashtable>] [-UseProjectId] -ProjectName <String>\n [<CommonParameters>]\n")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Invoke-VSTeamRequest allows you to call a TFS/AzD REST API much easier than using Invoke-WebRequest directly.\nThe shape of the URI and authentication is all handled for you."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Invoke-VSTeamRequest -resource projectHistory -version '4.1-preview' -Verbose\n")),(0,r.kt)("p",null,"This command will return the project history."),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ivr -area release -resource releases -version '4.1-preview' -subDomain vsrm -Verbose\n")),(0,r.kt)("p",null,"This command will return the releases for a project."),(0,r.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,r.kt)("h3",{id:"-contenttype"},"-ContentType"),(0,r.kt)("p",null,"Specifies the content type of the request."),(0,r.kt)("p",null,"If this parameter is omitted and the request method is POST, the content type will be set to application/json."),(0,r.kt)("p",null,"Otherwise, the content type is not specified in the call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: Application/json\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-method"},"-Method"),(0,r.kt)("p",null,"Specifies the method used for the request.\nThe acceptable values for this parameter are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get"),(0,r.kt)("li",{parentName:"ul"},"Post"),(0,r.kt)("li",{parentName:"ul"},"Patch"),(0,r.kt)("li",{parentName:"ul"},"Delete"),(0,r.kt)("li",{parentName:"ul"},"Options"),(0,r.kt)("li",{parentName:"ul"},"Put"),(0,r.kt)("li",{parentName:"ul"},"Default"),(0,r.kt)("li",{parentName:"ul"},"Trace"),(0,r.kt)("li",{parentName:"ul"},"Head"),(0,r.kt)("li",{parentName:"ul"},"Merge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: Get\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-body"},"-Body"),(0,r.kt)("p",null,"Specifies the body of the request.\nThe body is the content of the request that follows the headers."),(0,r.kt)("p",null,"You can pipe a body value to Invoke-VSTeamRequest."),(0,r.kt)("p",null,"The Body parameter can be used to specify a list of query parameters or specify the content of the response."),(0,r.kt)("p",null,"When the input is a GET request and the body is an IDictionary (typically, a hash table), the body is added to the URI as query parameters.\nFor other GET requests, the body is set as the value of the request body in the standard name=value format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Object\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-infile"},"-InFile"),(0,r.kt)("p",null,"Path and file name to the file that contains the contents of the request.\nIf the path is omitted, the default is the current location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-outfile"},"-OutFile"),(0,r.kt)("p",null,"Specifies the output file for which this function saves the response body.\nEnter a path and file name.\nIf you omit the path, the default is the current location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-area"},"-Area"),(0,r.kt)("p",null,"The area to find the resource.\nYou can tab complete this value.\nIt can be filtered by passing -subDomain first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-resource"},"-Resource"),(0,r.kt)("p",null,"The name of the feature you want to manipulate.\nYou can tab complete this value if you pass -Area before this parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-id"},"-Id"),(0,r.kt)("p",null,"The unique value of the item you want to work with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-version"},"-Version"),(0,r.kt)("p",null,"The version of the API you wish to target."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-subdomain"},"-SubDomain"),(0,r.kt)("p",null,"The SubDomain before .dev.azure.com.\nFor example, to target Release Management you must use the SubDomain vsrm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-json"},"-JSON"),(0,r.kt)("p",null,"Converts the PowerShell object into JSON and displays in the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-additionalheaders"},"-AdditionalHeaders"),(0,r.kt)("p",null,"Adds additional headers to the request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Hashtable\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-useprojectid"},"-UseProjectId"),(0,r.kt)("p",null,"Converts the project name to project id before building the URI for the REST API call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,r.kt)("p",null,"Specifies the team project for which this function operates."),(0,r.kt)("p",null,"You can tab complete from a list of available projects."),(0,r.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,r.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,r.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,r.kt)("h2",{id:"inputs"},"INPUTS"),(0,r.kt)("h3",{id:"systemstring"},"System.String"),(0,r.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,r.kt)("h3",{id:"systemobject"},"System.Object"),(0,r.kt)("h2",{id:"notes"},"NOTES"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,r.kt)("p",null,"tips:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,r.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,r.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"))}p.isMDXComponent=!0}}]);
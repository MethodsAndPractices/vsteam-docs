"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[6826],{3905:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return m}});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(l),m=n,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return l?a.createElement(h,r(r({ref:t},d),{},{components:l})):a.createElement(h,r({ref:t},d))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=l.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=l[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},9333:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=l(7462),n=l(3366),i=(l(7294),l(3905)),r=["components"],s={id:"Get-VSTeamBuild",title:"Get-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},o="Get-VSTeamBuild",u={unversionedId:"modules/vsteam/commands/Get-VSTeamBuild",id:"modules/vsteam/commands/Get-VSTeamBuild",title:"Get-VSTeamBuild",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamBuild.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamBuild",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamBuild",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamBuild.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamBuild",title:"Get-VSTeamBuild",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamBuild.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamArea",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamArea"},next:{title:"Get-VSTeamBuildArtifact",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamBuildArtifact"}},d=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[],level:3},{value:"ByID",id:"byid",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3},{value:"Example 4",id:"example-4",children:[],level:3},{value:"Example 5",id:"example-5",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-Top",id:"-top",children:[],level:3},{value:"-ResultFilter",id:"-resultfilter",children:[],level:3},{value:"-ReasonFilter",id:"-reasonfilter",children:[],level:3},{value:"-StatusFilter",id:"-statusfilter",children:[],level:3},{value:"-Queues",id:"-queues",children:[],level:3},{value:"-Definitions",id:"-definitions",children:[],level:3},{value:"-BuildNumber",id:"-buildnumber",children:[],level:3},{value:"-Type",id:"-type",children:[],level:3},{value:"-MaxBuildsPerDefinition",id:"-maxbuildsperdefinition",children:[],level:3},{value:"-Properties",id:"-properties",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Build",id:"vsteam_libbuild",children:[],level:3}],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],c={toc:d};function p(e){var t=e.components,l=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-vsteambuild"},"Get-VSTeamBuild"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,"Gets the builds for a team project."),(0,i.kt)("h2",{id:"syntax"},"SYNTAX"),(0,i.kt)("h3",{id:"list-default"},"List (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild [-Top <Int32>] [-ResultFilter <String>] [-ReasonFilter <String>] [-StatusFilter <String>]\n [-Queues <Int32[]>] [-Definitions <Int32[]>] [-BuildNumber <String>] [-Type <String>]\n [-MaxBuildsPerDefinition <Int32>] [-Properties <String[]>] -ProjectName <String> [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"byid"},"ByID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild [-Id <Int32[]>] -ProjectName <String> [<CommonParameters>]\n")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"The Get-VSTeamBuild function gets the builds for a team project."),(0,i.kt)("p",null,"With just a project name, this function gets all of the builds for that team project."),(0,i.kt)("p",null,"You can also specify a particular build by ID."),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild -ProjectName demo | Format-List *\n")),(0,i.kt)("p",null,"This command gets a list of all builds in the demo project."),(0,i.kt)("p",null,"The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the build objects."),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild -ProjectName demo -top 5 -resultFilter failed\n")),(0,i.kt)("p",null,"This command gets a list of 5 failed builds in the demo project."),(0,i.kt)("h3",{id:"example-3"},"Example 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1203,1204 | Get-VSTeamBuild -ProjectName demo\n")),(0,i.kt)("p",null,"This command gets builds with IDs 1203 and 1204 by using the pipeline."),(0,i.kt)("h3",{id:"example-4"},"Example 4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild -ProjectName demo -ID 1203,1204\n")),(0,i.kt)("p",null,"This command gets builds with IDs 1203 and 1204 by using the ID parameter."),(0,i.kt)("h3",{id:"example-5"},"Example 5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamBuild -ProjectName demo -ID 1203 -Raw\n")),(0,i.kt)("p",null,"This command returns the raw object returned from the server."),(0,i.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,i.kt)("h3",{id:"-top"},"-Top"),(0,i.kt)("p",null,"Specifies the maximum number to return."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-resultfilter"},"-ResultFilter"),(0,i.kt)("p",null,"Specifies the result of the builds to return Succeeded, PartiallySucceeded, Failed, or Canceled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-reasonfilter"},"-ReasonFilter"),(0,i.kt)("p",null,"Specifies the reason the build was created of the builds to return Manual, IndividualCI, BatchedCI, Schedule, UserCreated, ValidateShelveSet, CheckInShelveSet, Triggered, or All."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-statusfilter"},"-StatusFilter"),(0,i.kt)("p",null,"Specifies the status of the builds to return InProgress, Completed, Cancelling, Postponed, NotStarted, or All."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-queues"},"-Queues"),(0,i.kt)("p",null,"A comma-delimited list of queue IDs that specifies the builds to return."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32[]\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-definitions"},"-Definitions"),(0,i.kt)("p",null,"A comma-delimited list of build definition IDs that specifies the builds to return."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32[]\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-buildnumber"},"-BuildNumber"),(0,i.kt)("p",null,"Returns the build with this build number."),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("em",{parentName:"p"}," for a starts with search.\nFor example: 2015")," Will return all build numbers that start with 2015."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-type"},"-Type"),(0,i.kt)("p",null,"The type of builds to retrieve."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-maxbuildsperdefinition"},"-MaxBuildsPerDefinition"),(0,i.kt)("p",null,"The maximum number of builds to retrieve for each definition."),(0,i.kt)("p",null,"This is only valid when definitions is also specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-properties"},"-Properties"),(0,i.kt)("p",null,"A comma-delimited list of extended properties to retrieve."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-id"},"-Id"),(0,i.kt)("p",null,"Specifies one or more builds by ID."),(0,i.kt)("p",null,"To specify multiple IDs, use commas to separate the IDs."),(0,i.kt)("p",null,"To find the ID of a build, type Get-VSTeamBuild."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32[]\nParameter Sets: ByID\nAliases: BuildID\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByValue)\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,i.kt)("p",null,"Specifies the team project for which this function operates."),(0,i.kt)("p",null,"You can tab complete from a list of available projects."),(0,i.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,i.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,i.kt)("h2",{id:"inputs"},"INPUTS"),(0,i.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,i.kt)("h3",{id:"vsteam_libbuild"},"vsteam_lib.Build"),(0,i.kt)("h2",{id:"notes"},"NOTES"),(0,i.kt)("p",null,"You can pipe build IDs to this function."),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,i.kt)("p",null,"tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,i.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,i.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamBuild"},"Add-VSTeamBuild")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamBuild"},"Remove-VSTeamBuild")))}p.isMDXComponent=!0}}]);
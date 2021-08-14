(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{229:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(342)),c={id:"Get-VSTeamRelease",title:"Get-VSTeamRelease",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamRelease.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},i={id:"modules/vsteam/commands/Get-VSTeamRelease",isDocsHomePage:!1,title:"Get-VSTeamRelease",description:"Get-VSTeamRelease",source:"@site/docs/modules/vsteam/commands/Get-VSTeamRelease.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamRelease",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamRelease.md",sidebar:"vsteam",previous:{title:"Get-VSTeamQueue",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamQueue"},next:{title:"Get-VSTeamReleaseDefinition",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamReleaseDefinition"}},s=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"List (Default)",id:"list-default",children:[]},{value:"ByID",id:"byid",children:[]},{value:"ByIdRaw",id:"byidraw",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]},{value:"Example 4",id:"example-4",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-JSON",id:"-json",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-artifactVersionId",id:"-artifactversionid",children:[]},{value:"-continuationToken",id:"-continuationtoken",children:[]},{value:"-createdBy",id:"-createdby",children:[]},{value:"-definitionId",id:"-definitionid",children:[]},{value:"-expand",id:"-expand",children:[]},{value:"-id",id:"-id",children:[]},{value:"-maxCreatedTime",id:"-maxcreatedtime",children:[]},{value:"-minCreatedTime",id:"-mincreatedtime",children:[]},{value:"-queryOrder",id:"-queryorder",children:[]},{value:"-raw",id:"-raw",children:[]},{value:"-searchText",id:"-searchtext",children:[]},{value:"-statusFilter",id:"-statusfilter",children:[]},{value:"-top",id:"-top",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.Release",id:"vsteam_librelease",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],o={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"get-vsteamrelease"},"Get-VSTeamRelease"),Object(l.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(l.b)("p",null,"Gets the releases for a team project."),Object(l.b)("h2",{id:"syntax"},"SYNTAX"),Object(l.b)("h3",{id:"list-default"},"List (Default)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease [-searchText <String>] [-statusFilter <String>] [-expand <String>] [-definitionId <Int32>]\n [-artifactVersionId <String>] [-top <Int32>] [-createdBy <String>] [-minCreatedTime <DateTime>]\n [-maxCreatedTime <DateTime>] [-queryOrder <String>] [-continuationToken <String>] [-JSON]\n [-ProjectName <String>] [<CommonParameters>]\n")),Object(l.b)("h3",{id:"byid"},"ByID"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-JSON] [-ProjectName <String>] [<CommonParameters>]\n")),Object(l.b)("h3",{id:"byidraw"},"ByIdRaw"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -id <Int32[]> [-expand <String>] [-JSON] [-raw] [-ProjectName <String>] [<CommonParameters>]\n")),Object(l.b)("h2",{id:"description"},"DESCRIPTION"),Object(l.b)("p",null,"The Get-VSTeamRelease function gets the releases for a team project."),Object(l.b)("p",null,"The project name is a Dynamic Parameter which may not be displayed in the syntax above but is mandatory."),Object(l.b)("p",null,"With just a project name, this function gets all of the releases for that team project."),Object(l.b)("p",null,"You can also specify a particular release definition by ID."),Object(l.b)("h2",{id:"examples"},"EXAMPLES"),Object(l.b)("h3",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -ProjectName demo | Format-List *\n")),Object(l.b)("p",null,"This command gets a list of all releases in the demo project."),Object(l.b)("p",null,"The pipeline operator (|) passes the data to the Format-List cmdlet, which displays all available properties (*) of the release definition objects."),Object(l.b)("h3",{id:"example-2"},"Example 2"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -ProjectName demo -Id 10 -Raw\n")),Object(l.b)("p",null,"This command returns the raw object returned from the server."),Object(l.b)("h3",{id:"example-3"},"Example 3"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -ProjectName demo -Id 10 -Json\n")),Object(l.b)("p",null,"This command returns the raw object returned from the server formatted as JSON."),Object(l.b)("h3",{id:"example-4"},"Example 4"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Get-VSTeamRelease -ProjectName demo -artifactVersionId 7\n")),Object(l.b)("p",null,'This command returns the associated release for given Id.\nIf the artifact type is a "Build" (Azure Pipelines) then it is the id of the build.'),Object(l.b)("h2",{id:"parameters"},"PARAMETERS"),Object(l.b)("h3",{id:"-json"},"-JSON"),Object(l.b)("p",null,"Converts the raw response into JSON and displays in the console.\nThis is required when you need to use the object to send back.\nWithout this switch the JSON produced from the returned object will not match the expected shape of the JSON for sending back to server."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-projectname"},"-ProjectName"),Object(l.b)("p",null,"Specifies the team project for which this function operates."),Object(l.b)("p",null,"You can tab complete from a list of available projects."),Object(l.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-artifactversionid"},"-artifactVersionId"),Object(l.b)("p",null,"Id of the artifact version.\nReturns the particular release pertaining to given artifact version Id."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-continuationtoken"},"-continuationToken"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-createdby"},"-createdBy"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-definitionid"},"-definitionId"),Object(l.b)("p",null,"Id of the release definition"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-expand"},"-expand"),Object(l.b)("p",null,"Specifies which property should be expanded in the list of Release (environments, artifacts, none)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-id"},"-id"),Object(l.b)("p",null,"Specifies one or more releases by ID."),Object(l.b)("p",null,"To specify multiple IDs, use commas to separate the IDs."),Object(l.b)("p",null,"To find the ID of a release definition, type Get-VSTeamRelease."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: ByID\nAliases: ReleaseID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32[]\nParameter Sets: ByIdRaw\nAliases: ReleaseID\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-maxcreatedtime"},"-maxCreatedTime"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-mincreatedtime"},"-minCreatedTime"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: DateTime\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-queryorder"},"-queryOrder"),Object(l.b)("p",null,"@{Text=}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-raw"},"-raw"),Object(l.b)("p",null,"Returns the raw response.\nThis is required when you need to use the object to send back.\nWithout this switch the object produced from the returned object will not match the expected shape of the JSON for sending back to server."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: ByIdRaw\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-searchtext"},"-searchText"),Object(l.b)("p",null,"{{ Fill searchText Description }}"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-statusfilter"},"-statusFilter"),Object(l.b)("p",null,"Draft, Active or Abandoned."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"-top"},"-top"),Object(l.b)("p",null,"Specifies the maximum number to return."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: List\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: 0\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(l.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(l.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(l.b)("h2",{id:"inputs"},"INPUTS"),Object(l.b)("h2",{id:"outputs"},"OUTPUTS"),Object(l.b)("h3",{id:"vsteam_librelease"},"vsteam_lib.Release"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("p",null,"You can pipe release definition IDs to this function."),Object(l.b)("p",null,"Prerequisites:"),Object(l.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(l.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(l.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(l.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(l.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(l.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Add-VSTeamRelease")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Remove-VSTeamRelease")))}p.isMDXComponent=!0},342:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||l;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
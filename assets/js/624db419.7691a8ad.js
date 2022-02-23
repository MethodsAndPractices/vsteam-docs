"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[586],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"Get-VSTeamGitCommit",title:"Get-VSTeamGitCommit",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGitCommit.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},s="Get-VSTeamGitCommit",m={unversionedId:"modules/vsteam/commands/Get-VSTeamGitCommit",id:"modules/vsteam/commands/Get-VSTeamGitCommit",title:"Get-VSTeamGitCommit",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamGitCommit.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamGitCommit",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGitCommit",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGitCommit.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamGitCommit",title:"Get-VSTeamGitCommit",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamGitCommit.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamFeed",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamFeed"},next:{title:"Get-VSTeamGitRef",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamGitRef"}},p=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"All (Default)",id:"all-default",children:[],level:3},{value:"ItemPath",id:"itempath",children:[],level:3},{value:"ByIds",id:"byids",children:[],level:3},{value:"CompareVersion",id:"compareversion",children:[],level:3},{value:"ItemVersion",id:"itemversion",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-FromDate",id:"-fromdate",children:[],level:3},{value:"-ToDate",id:"-todate",children:[],level:3},{value:"-ItemVersionVersionType",id:"-itemversionversiontype",children:[],level:3},{value:"-ItemVersionVersion",id:"-itemversionversion",children:[],level:3},{value:"-ItemVersionVersionOptions",id:"-itemversionversionoptions",children:[],level:3},{value:"-CompareVersionVersionType",id:"-compareversionversiontype",children:[],level:3},{value:"-CompareVersionVersion",id:"-compareversionversion",children:[],level:3},{value:"-CompareVersionVersionOptions",id:"-compareversionversionoptions",children:[],level:3},{value:"-FromCommitId",id:"-fromcommitid",children:[],level:3},{value:"-ToCommitId",id:"-tocommitid",children:[],level:3},{value:"-Author",id:"-author",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"-ItemPath",id:"-itempath",children:[],level:3},{value:"-ExcludeDeletes",id:"-excludedeletes",children:[],level:3},{value:"-Top",id:"-top",children:[],level:3},{value:"-Skip",id:"-skip",children:[],level:3},{value:"-HistoryMode",id:"-historymode",children:[],level:3},{value:"-User",id:"-user",children:[],level:3},{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-RepositoryID",id:"-repositoryid",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-vsteamgitcommit"},"Get-VSTeamGitCommit"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,"Retrieve git commits for a project"),(0,i.kt)("h2",{id:"syntax"},"SYNTAX"),(0,i.kt)("h3",{id:"all-default"},"All (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n [-ItemPath <String>] [-Top <Int32>] [-Skip <Int32>] [-User <String>] [-ProjectName <String>]\n [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"itempath"},"ItemPath"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n -ItemPath <String> [-ExcludeDeletes] [-Top <Int32>] [-Skip <Int32>] [-HistoryMode <String>] [-User <String>]\n [-ProjectName <String>] [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"byids"},"ByIds"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -RepositoryID <Guid> [-Id <String[]>] [-ProjectName <String>] [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"compareversion"},"CompareVersion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n [-ItemVersionVersionType <String>] [-ItemVersionVersion <String>] [-ItemVersionVersionOptions <String>]\n -CompareVersionVersionType <String> -CompareVersionVersion <String> [-CompareVersionVersionOptions <String>]\n [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>] [-Top <Int32>] [-Skip <Int32>]\n [-User <String>] [-ProjectName <String>] [<CommonParameters>]\n")),(0,i.kt)("h3",{id:"itemversion"},"ItemVersion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -RepositoryID <Guid> [-FromDate <DateTime>] [-ToDate <DateTime>]\n -ItemVersionVersionType <String> -ItemVersionVersion <String> [-ItemVersionVersionOptions <String>]\n [-CompareVersionVersionType <String>] [-CompareVersionVersion <String>]\n [-CompareVersionVersionOptions <String>] [-FromCommitId <String>] [-ToCommitId <String>] [-Author <String>]\n [-Top <Int32>] [-Skip <Int32>] [-User <String>] [-ProjectName <String>] [<CommonParameters>]\n")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,"The Get-VSTeamGitCommit function gets the commits for a git repository."),(0,i.kt)("h2",{id:"examples"},"EXAMPLES"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitCommit -ProjectName demo -RepositoryId 118C262F-0D4C-4B76-BD9B-7DD8CA12F196\n")),(0,i.kt)("p",null,"This command gets a list of all commits in the demo project for a specific repository."),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Get-VSTeamGitRepository | Select-Object -First 1 | Get-VSTeamGitCommit\n")),(0,i.kt)("p",null,"This command gets the Repository Id from the pipeline and the project name from the default project."),(0,i.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,i.kt)("h3",{id:"-fromdate"},"-FromDate"),(0,i.kt)("p",null,"If provided, only include history entries created after this date (string)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: DateTime\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-todate"},"-ToDate"),(0,i.kt)("p",null,"If provided, only include history entries created before this date (string)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: DateTime\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-itemversionversiontype"},"-ItemVersionVersionType"),(0,i.kt)("p",null,"Version type (branch, tag, or commit).\nDetermines how Id is interpreted.\nThe acceptable values for this parameter are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"branch"),(0,i.kt)("li",{parentName:"ul"},"commit"),(0,i.kt)("li",{parentName:"ul"},"tag")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ItemVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-itemversionversion"},"-ItemVersionVersion"),(0,i.kt)("p",null,"Version string identifier (name of tag/branch, SHA1 of commit)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ItemVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-itemversionversionoptions"},"-ItemVersionVersionOptions"),(0,i.kt)("p",null,"Version options - Specify additional modifiers to version (e.g Previous).\nThe acceptable values for this parameter are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"firstParent"),(0,i.kt)("li",{parentName:"ul"},"none"),(0,i.kt)("li",{parentName:"ul"},"previousChange")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-compareversionversiontype"},"-CompareVersionVersionType"),(0,i.kt)("p",null,"Version type (branch, tag, or commit).\nDetermines how Id is interpreted.\nThe acceptable values for this parameter are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"branch"),(0,i.kt)("li",{parentName:"ul"},"commit"),(0,i.kt)("li",{parentName:"ul"},"tag")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: CompareVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-compareversionversion"},"-CompareVersionVersion"),(0,i.kt)("p",null,"Version string identifier (name of tag/branch, SHA1 of commit).\nThe acceptable values for this parameter are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"firstParent"),(0,i.kt)("li",{parentName:"ul"},"none"),(0,i.kt)("li",{parentName:"ul"},"previousChange")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: CompareVersion\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-compareversionversionoptions"},"-CompareVersionVersionOptions"),(0,i.kt)("p",null,"Version options - Specify additional modifiers to version (e.g Previous)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-fromcommitid"},"-FromCommitId"),(0,i.kt)("p",null,"If provided, a lower bound for filtering commits alphabetically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-tocommitid"},"-ToCommitId"),(0,i.kt)("p",null,"If provided, an upper bound for filtering commits alphabetically"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-author"},"-Author"),(0,i.kt)("p",null,"Alias or display name of the author"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-id"},"-Id"),(0,i.kt)("p",null,"If provided, specifies the exact commit ids of the commits to fetch.\nMay not be combined with other parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String[]\nParameter Sets: ByIds\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-itempath"},"-ItemPath"),(0,i.kt)("p",null,"Path of item to search under"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ItemPath\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-excludedeletes"},"-ExcludeDeletes"),(0,i.kt)("p",null,"Only applies when an itemPath is specified.\nThis determines whether to exclude delete entries of the specified path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: ItemPath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-top"},"-Top"),(0,i.kt)("p",null,"Maximum number of entries to retrieve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-skip"},"-Skip"),(0,i.kt)("p",null,"Number of entries to skip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-historymode"},"-HistoryMode"),(0,i.kt)("p",null,"What Git history mode should be used.\nThis only applies to the search criteria when Ids = null and an itemPath is specified.\nThe acceptable values for this parameter are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"firstParent"),(0,i.kt)("li",{parentName:"ul"},"fullHistory"),(0,i.kt)("li",{parentName:"ul"},"fullHistorySimplifyMerges"),(0,i.kt)("li",{parentName:"ul"},"simplifiedHistory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: ItemPath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-user"},"-User"),(0,i.kt)("p",null,"Alias or display name of the committer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: All, ItemPath, CompareVersion, ItemVersion\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,i.kt)("p",null,"Specifies the team project for which this function operates."),(0,i.kt)("p",null,"You can tab complete from a list of available projects."),(0,i.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"-repositoryid"},"-RepositoryID"),(0,i.kt)("p",null,"The id or friendly name of the repository.\nTo use the friendly name, projectId must also be specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,i.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,i.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,i.kt)("h2",{id:"inputs"},"INPUTS"),(0,i.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,i.kt)("h2",{id:"notes"},"NOTES"),(0,i.kt)("p",null,"You can pipe a repository ID to this function."),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,i.kt)("p",null,"tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,i.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,i.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,i.kt)("h2",{id:"related-links"},"RELATED LINKS"))}d.isMDXComponent=!0}}]);
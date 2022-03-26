"use strict";(self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[]).push([[1747],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||n;return a?l.createElement(h,i(i({ref:t},c),{},{components:a})):l.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2841:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],s={id:"Get-VSTeamPullRequest",title:"Get-VSTeamPullRequest",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPullRequest.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},u="Get-VSTeamPullRequest",o={unversionedId:"modules/vsteam/commands/Get-VSTeamPullRequest",id:"modules/vsteam/commands/Get-VSTeamPullRequest",title:"Get-VSTeamPullRequest",description:"",source:"@site/docs/modules/vsteam/commands/Get-VSTeamPullRequest.md",sourceDirName:"modules/vsteam/commands",slug:"/modules/vsteam/commands/Get-VSTeamPullRequest",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamPullRequest",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPullRequest.md",tags:[],version:"current",frontMatter:{id:"Get-VSTeamPullRequest",title:"Get-VSTeamPullRequest",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Get-VSTeamPullRequest.md",description:"",keywords:["vsteam","cmdlet","azure devops"]},sidebar:"defaultSidebar",previous:{title:"Get-VSTeamProject",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamProject"},next:{title:"Get-VSTeamQuery",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Get-VSTeamQuery"}},c=[{value:"SYNOPSIS",id:"synopsis",children:[],level:2},{value:"SYNTAX",id:"syntax",children:[{value:"SearchCriteriaWithStatus (Default)",id:"searchcriteriawithstatus-default",children:[],level:3},{value:"IncludeCommits",id:"includecommits",children:[],level:3},{value:"ById",id:"byid",children:[],level:3},{value:"SearchCriteriaWithAll",id:"searchcriteriawithall",children:[],level:3}],level:2},{value:"DESCRIPTION",id:"description",children:[],level:2},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3},{value:"Example 3",id:"example-3",children:[],level:3},{value:"Example 4",id:"example-4",children:[],level:3},{value:"Example 5",id:"example-5",children:[],level:3},{value:"Example 6",id:"example-6",children:[],level:3}],level:2},{value:"PARAMETERS",id:"parameters",children:[{value:"-ProjectName",id:"-projectname",children:[],level:3},{value:"-Id",id:"-id",children:[],level:3},{value:"-RepositoryId",id:"-repositoryid",children:[],level:3},{value:"-SourceRepositoryId",id:"-sourcerepositoryid",children:[],level:3},{value:"-SourceBranchRef",id:"-sourcebranchref",children:[],level:3},{value:"-TargetBranchRef",id:"-targetbranchref",children:[],level:3},{value:"-Status",id:"-status",children:[],level:3},{value:"-All",id:"-all",children:[],level:3},{value:"-Top",id:"-top",children:[],level:3},{value:"-Skip",id:"-skip",children:[],level:3},{value:"-IncludeCommits",id:"-includecommits",children:[],level:3},{value:"CommonParameters",id:"commonparameters",children:[],level:3}],level:2},{value:"INPUTS",id:"inputs",children:[],level:2},{value:"OUTPUTS",id:"outputs",children:[],level:2},{value:"NOTES",id:"notes",children:[],level:2},{value:"RELATED LINKS",id:"related-links",children:[],level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-vsteampullrequest"},"Get-VSTeamPullRequest"),(0,n.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,n.kt)("p",null,"Returns one or more open pull requests from your team, project, or Id."),(0,n.kt)("h2",{id:"syntax"},"SYNTAX"),(0,n.kt)("h3",{id:"searchcriteriawithstatus-default"},"SearchCriteriaWithStatus (Default)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]\n [-TargetBranchRef <String>] [-Status <String>] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),(0,n.kt)("h3",{id:"includecommits"},"IncludeCommits"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest [-Id <String>] -RepositoryId <Guid> [-IncludeCommits] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),(0,n.kt)("h3",{id:"byid"},"ById"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest [-Id <String>] [-RepositoryId <Guid>] [[-ProjectName] <String>] [<CommonParameters>]\n")),(0,n.kt)("h3",{id:"searchcriteriawithall"},"SearchCriteriaWithAll"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest [-RepositoryId <Guid>] [-SourceRepositoryId <Guid>] [-SourceBranchRef <String>]\n [-TargetBranchRef <String>] [-All] [-Top <Int32>] [-Skip <Int32>] [[-ProjectName] <String>]\n [<CommonParameters>]\n")),(0,n.kt)("h2",{id:"description"},"DESCRIPTION"),(0,n.kt)("p",null,"Returns one or more open pull requests from your team, project, or Id."),(0,n.kt)("h2",{id:"examples"},"EXAMPLES"),(0,n.kt)("h3",{id:"example-1"},"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest\n")),(0,n.kt)("p",null,"This command returns all the open pull requests for your TFS or Team Services account."),(0,n.kt)("h3",{id:"example-2"},"Example 2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest -ProjectName Demo\n")),(0,n.kt)("p",null,"This command returns all the open pull requests for the Demo team project."),(0,n.kt)("h3",{id:"example-3"},"Example 3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest -ProjectName Demo -All\n")),(0,n.kt)("p",null,"This command returns all pull requests for the Demo team project."),(0,n.kt)("h3",{id:"example-4"},"Example 4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Get-VSTeamPullRequest -ProjectName Demo -TargetBranchRef "refs/heads/mybranch"\n')),(0,n.kt)("p",null,"This command returns all open pull requests for a specific branch"),(0,n.kt)("h3",{id:"example-5"},"Example 5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Get-VSTeamPullRequest -Id 123\n")),(0,n.kt)("p",null,"This command gets the pull request with an Id of 123."),(0,n.kt)("h3",{id:"example-6"},"Example 6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Get-VSTeamPullRequest -Id 123 -RepositoryId "93BBA613-2729-4158-9217-751E952AB4AF" -IncludeCommits\n')),(0,n.kt)("p",null,"This command gets the pull request with an Id of 123 and includes the commits that are part of the pull request."),(0,n.kt)("h2",{id:"parameters"},"PARAMETERS"),(0,n.kt)("h3",{id:"-projectname"},"-ProjectName"),(0,n.kt)("p",null,"Specifies the team project for which this function operates."),(0,n.kt)("p",null,"You can tab complete from a list of available projects."),(0,n.kt)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 0\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-id"},"-Id"),(0,n.kt)("p",null,"Specifies the pull request by ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: IncludeCommits, ById\nAliases: PullRequestId\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-repositoryid"},"-RepositoryId"),(0,n.kt)("p",null,"The repository ID of the pull request's target branch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: SearchCriteriaWithStatus, ById, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: IncludeCommits\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-sourcerepositoryid"},"-SourceRepositoryId"),(0,n.kt)("p",null,"If set, search for pull requests whose source branch is in this repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Guid\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-sourcebranchref"},"-SourceBranchRef"),(0,n.kt)("p",null,"If set, search for pull requests from this branch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-targetbranchref"},"-TargetBranchRef"),(0,n.kt)("p",null,"If set, search for pull requests into this branch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-status"},"-Status"),(0,n.kt)("p",null,"If set, search for pull requests that are in this state.\nDefaults to Active if unset.\nValid values for this parameter are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"abandoned"),(0,n.kt)("li",{parentName:"ul"},"active"),(0,n.kt)("li",{parentName:"ul"},"all"),(0,n.kt)("li",{parentName:"ul"},"completed"),(0,n.kt)("li",{parentName:"ul"},"notSet")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: String\nParameter Sets: SearchCriteriaWithStatus\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-all"},"-All"),(0,n.kt)("p",null,"@{Text=}"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-top"},"-Top"),(0,n.kt)("p",null,"The number of pull requests to retrieve."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-skip"},"-Skip"),(0,n.kt)("p",null,"The number of pull requests to ignore.\nFor example, to retrieve results 101-150, set top to 50 and skip to 100."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: Int32\nParameter Sets: SearchCriteriaWithStatus, SearchCriteriaWithAll\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"-includecommits"},"-IncludeCommits"),(0,n.kt)("p",null,"If set, includes the commits that are part of the pull request.\nRequires the RepositoryId to be set."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"Type: SwitchParameter\nParameter Sets: IncludeCommits\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),(0,n.kt)("h3",{id:"commonparameters"},"CommonParameters"),(0,n.kt)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkID=113216"},"about_CommonParameters"),"."),(0,n.kt)("h2",{id:"inputs"},"INPUTS"),(0,n.kt)("h2",{id:"outputs"},"OUTPUTS"),(0,n.kt)("h2",{id:"notes"},"NOTES"),(0,n.kt)("p",null,"Prerequisites:"),(0,n.kt)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nDefault version sets to API version 3.0 (TFS2017) if not manually set."),(0,n.kt)("p",null,"tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"check called version of the API with Get-VSTeamAPIVersion or Get-VSTeamInfo"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultProject to set default project for every call"),(0,n.kt)("li",{parentName:"ul"},"use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),(0,n.kt)("li",{parentName:"ul"},"use Profiles to load an account and the correct version")),(0,n.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Show-VSTeamPullRequest"},"Show-VSTeamPullRequest")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamPullRequest"},"Add-VSTeamPullRequest")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://methodsandpractices.github.io/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeamPullRequest"},"Update-VSTeamPullRequest")))}m.isMDXComponent=!0}}]);
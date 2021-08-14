(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(342)),l={id:"Test-VSTeamYamlPipeline",title:"Test-VSTeamYamlPipeline",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Test-VSTeamYamlPipeline.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},c={id:"modules/vsteam/commands/Test-VSTeamYamlPipeline",isDocsHomePage:!1,title:"Test-VSTeamYamlPipeline",description:"Test-VSTeamYamlPipeline",source:"@site/docs/modules/vsteam/commands/Test-VSTeamYamlPipeline.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Test-VSTeamYamlPipeline",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Test-VSTeamYamlPipeline.md",sidebar:"vsteam",previous:{title:"Test-VSTeamMembership",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Test-VSTeamMembership"},next:{title:"Update-VSTeam",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Update-VSTeam"}},o=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"WithFilePath (Default)",id:"withfilepath-default",children:[]},{value:"WithYamlOverride",id:"withyamloverride",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-PipelineId",id:"-pipelineid",children:[]},{value:"-FilePath",id:"-filepath",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"-YamlOverride",id:"-yamloverride",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]},{value:"System.Int32",id:"systemint32",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"vsteam_lib.YamlPipelineResult",id:"vsteam_libyamlpipelineresult",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"test-vsteamyamlpipeline"},"Test-VSTeamYamlPipeline"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Tests the commited YAML pipeline files to check for inconsitencies like syntax, references etc..\nNow, you can try out a YAML pipeline without committing it to a repo or running it.\nGiven an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"withfilepath-default"},"WithFilePath (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-FilePath <String>] -ProjectName <String> [<CommonParameters>]\n")),Object(r.b)("h3",{id:"withyamloverride"},"WithYamlOverride"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Test-VSTeamYamlPipeline [-PipelineId] <Int32> [-YamlOverride <String>] -ProjectName <String>\n [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"Tests the commited YAML pipeline files to check for inconsitencies like syntax, references etc..\nNow, you can try out a YAML pipeline without committing it to a repo or running it.\nGiven an existing pipeline and an optional new YAML payload, this function will give you back the full YAML pipeline."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Test-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -FilePath './azure-pipelines.yml'\n\nName Id url                                                                                           state\n---\nid: Test-VSTeamYamlPipeline\ntitle: Test-VSTeamYamlPipeline\nhide_title: true\nhide_table_of_contents: false\ncustom_edit_url: https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Test-VSTeamYamlPipeline.md\ndescription: \nkeywords:\n  - vsteam\n  - cmdlet\n  - azure devops\n---                                                                                           -----\n     -1 https://dev.azure.com/devsdb/3428bdd7-9fed-4c30-a6c9-fcb52f084ab9/_apis/pipelines/24/runs/-1 unknown\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 and the file './azure-pipelines.yml' for consistency on Azure DevOps to see if the changes still work."),Object(r.b)("h3",{id:"example-2"},"Example 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$yamlOverride = [string](Get-Content -raw $FilePath)\nTest-VSTeamYamlPipeline -Project DemoProject -PipelineId 24 -YamlOverride $yamlOverride\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 and the content of a yaml file in the variable $yamlOverride for consistency on Azure DevOps to see if the changes still work."),Object(r.b)("h3",{id:"example-3"},"Example 3"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$yamlOverride = [string](Get-Content -raw $FilePath)\nTest-VSTeamYamlPipeline -Project DemoProject -PipelineId 24\n")),Object(r.b)("p",null,"This example checks the YAML pipeline with ID 24 for consistency on Azure DevOps to see if the existing YAML of the pipeline works."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-pipelineid"},"-PipelineId"),Object(r.b)("p",null,"Id of the YAML pipeline to be checked"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-filepath"},"-FilePath"),Object(r.b)("p",null,"Path to the file that should be checked"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: WithFilePath\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-projectname"},"-ProjectName"),Object(r.b)("p",null,"Specifies the team project for which this function operates."),Object(r.b)("p",null,"You can tab complete from a list of available projects."),Object(r.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-yamloverride"},"-YamlOverride"),Object(r.b)("p",null,"{{ Fill YamlOverride Description }}"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: WithYamlOverride\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h3",{id:"systemstring"},"System.String"),Object(r.b)("p",null,"FilePath"),Object(r.b)("h3",{id:"systemint32"},"System.Int32"),Object(r.b)("p",null,"PipelineId"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h3",{id:"vsteam_libyamlpipelineresult"},"vsteam_lib.YamlPipelineResult"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"Currently the API that is used by this cmdlet is only supporting YAML pipelines without template references.\nThis will be supported soon.\nsee the issue in GitHub: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498"}),"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498)This"}),"https://github.com/microsoft/azure-pipelines-yaml/issues/34#issuecomment-591092498)This")," cmdlet is not starting a pipeline run, but rather trying to resolve the full YAML code.\nIt will not check if the task themselves work.\nSee here for more info ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.razorspoint.com/2020/03/13/how-to-preview-and-test-a-changing-yaml-pipeline-on-azure-devops/"}),"https://www.razorspoint.com/2020/03/13/how-to-preview-and-test-a-changing-yaml-pipeline-on-azure-devops/")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.razorspoint.com/2020/03/13/how-to-preview-and-test-a-changing-yaml-pipeline-on-azure-devops/)Prerequisites"}),"https://www.razorspoint.com/2020/03/13/how-to-preview-and-test-a-changing-yaml-pipeline-on-azure-devops/)Prerequisites"),":"),Object(r.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(r.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(r.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(r.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(r.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Get-VSTeamBuildDefinition")))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{264:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),o=(a(0),a(325)),c={id:"Add-VSTeamVariableGroup",title:"Add-VSTeamVariableGroup",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamVariableGroup.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Add-VSTeamVariableGroup",isDocsHomePage:!1,title:"Add-VSTeamVariableGroup",description:"Add-VSTeamVariableGroup",source:"@site/docs/modules/vsteam/commands/Add-VSTeamVariableGroup.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamVariableGroup",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/master/.docs/Add-VSTeamVariableGroup.md",sidebar:"vsteam",previous:{title:"Add-VSTeamUserEntitlement",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamUserEntitlement"},next:{title:"Add-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Add-VSTeamWorkItem"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"ByHashtable",id:"byhashtable",children:[]},{value:"ByBody",id:"bybody",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Description",id:"-description",children:[]},{value:"-Name",id:"-name",children:[]},{value:"-Variables",id:"-variables",children:[]},{value:"-Body",id:"-body",children:[]},{value:"-ProjectName",id:"-projectname",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[{value:"System.String",id:"systemstring",children:[]}]},{value:"OUTPUTS",id:"outputs",children:[{value:"System.Object",id:"systemobject",children:[]}]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],b={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"add-vsteamvariablegroup"},"Add-VSTeamVariableGroup"),Object(o.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(o.b)("p",null,"Adds a variable group."),Object(o.b)("h2",{id:"syntax"},"SYNTAX"),Object(o.b)("h3",{id:"byhashtable"},"ByHashtable"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Add-VSTeamVariableGroup -Name <String> [-Description <String>] -Variables <Hashtable> [-ProjectName <String>]\n [<CommonParameters>]\n")),Object(o.b)("h3",{id:"bybody"},"ByBody"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Add-VSTeamVariableGroup -Body <String> [-ProjectName <String>] [<CommonParameters>]\n")),Object(o.b)("h2",{id:"description"},"DESCRIPTION"),Object(o.b)("p",null,"Adds a variable group."),Object(o.b)("h2",{id:"examples"},"EXAMPLES"),Object(o.b)("h3",{id:"example-1"},"Example 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$methodParameters = @{\n   ProjectName              = "some_project_name"\n   Name        = "new_variable_group"\n   Description = "Describe the Variable Group"\n   Type        = "Vsts"\n   Variables   = @{\n      key1 = @{\n         value = "value1"\n      }\n      key2 = @{\n         value    = "value2"\n         isSecret = $true\n      }\n   }\n}\n\nAdd-VSTeamVariableGroup @methodParameters\n')),Object(o.b)("h3",{id:"example-2"},"Example 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$methodParameters = @{\n   ProjectName              = "some_project_name"\n   Name        = "new_variable_group"\n   Description = "Describe the Variable Group"\n   Type        = "AzureKeyVault"\n   Variables   = @{\n      name_of_existing_secret  = @{\n         enabled     = $true\n         contentType = ""\n         value       = ""\n         isSecret    = $true\n      }\n   }\n   ProviderData =  @{\n      serviceEndpointId = "AzureRMServiceEndpointGuid"\n      vault             = "name_of_existing_key_vault"\n   }\n}\n\nAdd-VSTeamVariableGroup @methodParameters\n')),Object(o.b)("h3",{id:"example-3"},"Example 3"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'# Copy variable group varGroupName from project sourceProjectName to project targetProjectName.  If varGroupName already exists, we\'ll update it; else, we\'ll add it.\n\n$Name = "varGroupName"\n$FromProject  = "sourceProjectName"\n$ToProject = "targetProjectName"\n\n$FromVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $FromProject\n$body = ConvertTo-Json -InputObject $FromVariableGroupObject -Depth 100 -Compress\n$toVariableGroupObject = Get-VSTeamVariableGroup -Name $Name -ProjectName $ToProject\nif ($toVariableGroupObject) {\n   Update-VSTeamVariableGroup -Body $body -ProjectName $ToProject -Id $toVariableGroupObject.id\n}\nelse {\n   Add-VSTeamVariableGroup -Body $body -ProjectName $ToProject\n}\n')),Object(o.b)("h2",{id:"parameters"},"PARAMETERS"),Object(o.b)("h3",{id:"-description"},"-Description"),Object(o.b)("p",null,"The variable group description"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByHashtable\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-name"},"-Name"),Object(o.b)("p",null,"The variable group name"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByHashtable\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-variables"},"-Variables"),Object(o.b)("p",null,"The variable group variables."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: Hashtable\nParameter Sets: ByHashtable\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-body"},"-Body"),Object(o.b)("p",null,"The json that represents the variable group as a string"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: ByBody\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"-projectname"},"-ProjectName"),Object(o.b)("p",null,"Specifies the team project for which this function operates."),Object(o.b)("p",null,"You can tab complete from a list of available projects."),Object(o.b)("p",null,"You can use Set-VSTeamDefaultProject to set a default project so you do not have to pass the ProjectName with each call."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(o.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(o.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(o.b)("h2",{id:"inputs"},"INPUTS"),Object(o.b)("h3",{id:"systemstring"},"System.String"),Object(o.b)("p",null,"System.Collections.Hashtable"),Object(o.b)("h2",{id:"outputs"},"OUTPUTS"),Object(o.b)("h3",{id:"systemobject"},"System.Object"),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(o.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(o.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(o.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(o.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(o.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Update-VSTeamVariableGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Get-VSTeamVariableGroup")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"Remove-VSTeamVariableGroup")))}p.isMDXComponent=!0},325:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return a?n.a.createElement(d,l(l({ref:t},b),{},{components:a})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
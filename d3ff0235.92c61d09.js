(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),c=n(9),r=(n(0),n(329)),o={id:"Set-VSTeamAccount",title:"Set-VSTeamAccount",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamAccount.md",description:null,keywords:["vsteam","cmdlet","azure devops"]},l={id:"modules/vsteam/commands/Set-VSTeamAccount",isDocsHomePage:!1,title:"Set-VSTeamAccount",description:"Set-VSTeamAccount",source:"@site/docs/modules/vsteam/commands/Set-VSTeamAccount.md",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamAccount",editUrl:"https://github.com/MethodsAndPractices/vsteam/edit/trunk/.docs/Set-VSTeamAccount.md",sidebar:"vsteam",previous:{title:"Remove-VSTeamWorkItem",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Remove-VSTeamWorkItem"},next:{title:"Set-VSTeamAlias",permalink:"/vsteam-docs/docs/modules/vsteam/commands/Set-VSTeamAlias"}},i=[{value:"SYNOPSIS",id:"synopsis",children:[]},{value:"SYNTAX",id:"syntax",children:[{value:"Secure (Default)",id:"secure-default",children:[]},{value:"Plain",id:"plain",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Profile",id:"profile",children:[]}]},{value:"DESCRIPTION",id:"description",children:[]},{value:"EXAMPLES",id:"examples",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]},{value:"Example 4",id:"example-4",children:[]},{value:"Example 5",id:"example-5",children:[]},{value:"Example 6",id:"example-6",children:[]},{value:"Example 7",id:"example-7",children:[]}]},{value:"PARAMETERS",id:"parameters",children:[{value:"-Account",id:"-account",children:[]},{value:"-SecurePersonalAccessToken",id:"-securepersonalaccesstoken",children:[]},{value:"-PersonalAccessToken",id:"-personalaccesstoken",children:[]},{value:"-UseBearerToken",id:"-usebearertoken",children:[]},{value:"-Profile",id:"-profile",children:[]},{value:"-Version",id:"-version",children:[]},{value:"-Drive",id:"-drive",children:[]},{value:"-Force",id:"-force",children:[]},{value:"-WhatIf",id:"-whatif",children:[]},{value:"-Confirm",id:"-confirm",children:[]},{value:"CommonParameters",id:"commonparameters",children:[]}]},{value:"INPUTS",id:"inputs",children:[]},{value:"OUTPUTS",id:"outputs",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"RELATED LINKS",id:"related-links",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"set-vsteamaccount"},"Set-VSTeamAccount"),Object(r.b)("h2",{id:"synopsis"},"SYNOPSIS"),Object(r.b)("p",null,"Stores your account name and personal access token for use with the other functions in this module."),Object(r.b)("h2",{id:"syntax"},"SYNTAX"),Object(r.b)("h3",{id:"secure-default"},"Secure (Default)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount [-Account] <String> -SecurePersonalAccessToken <SecureString> [[-Version] <String>]\n [-Drive <String>] [-UseBearerToken] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h3",{id:"plain"},"Plain"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount [-Account] <String> [-PersonalAccessToken] <String> [[-Version] <String>] [-Drive <String>]\n [-UseBearerToken] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]\n")),Object(r.b)("h3",{id:"windows"},"Windows"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount [-Account] <String> [[-Version] <String>] [-Drive <String>] [-Force] [-WhatIf] [-Confirm]\n [<CommonParameters>]\n")),Object(r.b)("h3",{id:"profile"},"Profile"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount [-Drive <String>] [-Force] [-WhatIf] [-Confirm] [-Profile <String>] [<CommonParameters>]\n")),Object(r.b)("h2",{id:"description"},"DESCRIPTION"),Object(r.b)("p",null,"On Windows you have to option to store the information at the process, user or machine (you must be running PowerShell as administrator to store at the machine level) level."),Object(r.b)("p",null,"On Linux and Mac you can only store at the process level."),Object(r.b)("p",null,"Calling Set-VSTeamAccount will clear any default project."),Object(r.b)("h2",{id:"examples"},"EXAMPLES"),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount\n")),Object(r.b)("p",null,"You will be prompted for the account name and personal access token."),Object(r.b)("h3",{id:"example-2"},"Example 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Account mydemos -PersonalAccessToken 7a8ilh6db4aforlrnrthisisnotreal4uhlh5vgbmgap3mziwnga\n")),Object(r.b)("p",null,"Allows you to provide all the information on the command line."),Object(r.b)("h3",{id:"example-3"},"Example 3"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Account http://localtfs:8080/tfs/DefaultCollection -UseWindowsAuthentication\n")),Object(r.b)("p",null,"On Windows, allows you use to use Windows authentication against a local TFS server."),Object(r.b)("h3",{id:"example-4"},"Example 4"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Profile demonstrations\n")),Object(r.b)("p",null,"Will add the account from the profile provided."),Object(r.b)("h3",{id:"example-5"},"Example 5"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Profile demonstrations -Drive demo | Invoke-Expression\nSet-Location demo:\nPS demo:\\> Get-ChildItem\n")),Object(r.b)("p",null,"Will add the account from the profile provided and mount a drive named demo that you can navigate like a file system.\nIf you do not pipe to Invoke-Expression you can simply copy and paste the output and execute it."),Object(r.b)("h3",{id:"example-6"},"Example 6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Profile demonstrations -Level Machine\n")),Object(r.b)("p",null,"Will add the account from the profile provided and store the information at the Machine level.\nNow any new PowerShell sessions will auto load this account."),Object(r.b)("p",null,"Note: You must run PowerShell as an Administrator to store at the Machine level."),Object(r.b)("h3",{id:"example-7"},"Example 7"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Set-VSTeamAccount -Account mydemos -Token $(System.AccessToken) -UseBearerToken\n")),Object(r.b)("p",null,"Will add the account and use the OAuth Token provided by AzD when you check the Allow scripts to access OAuth token checkbox on the phase.\nUsing this method removes the need to create a Personal Access Token.\nNote -Token is just an alias for -PersonalAccessToken.\nThe token is scoped to only allow access to the account running the build or release.\nTo access other accounts you will have to use a personal access token."),Object(r.b)("h2",{id:"parameters"},"PARAMETERS"),Object(r.b)("h3",{id:"-account"},"-Account"),Object(r.b)("p",null,"The Azure DevOps (AzD) account name to use.\nDO NOT enter the entire URL."),Object(r.b)("p",null,"Just the portion after dev.azure.com.\nFor example in the following url mydemos is the account name.\n\\",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.azure.com/mydemos%5C"}),"https://dev.azure.com/mydemos\\")," or The full Team Foundation Server (TFS) url including the collection.\n\\",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080/tfs/DefaultCollection%5C"}),"http://localhost:8080/tfs/DefaultCollection\\")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Secure, Plain, Windows\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-securepersonalaccesstoken"},"-SecurePersonalAccessToken"),Object(r.b)("p",null,"A secured string to capture your personal access token."),Object(r.b)("p",null,"This will allow you to provide your personal access token without displaying it in plain text."),Object(r.b)("p",null,"To use pat simply omit it from the Set-VSTeamAccount command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SecureString\nParameter Sets: Secure\nAliases: PAT\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-personalaccesstoken"},"-PersonalAccessToken"),Object(r.b)("p",null,"The personal access token from AzD/TFS to use to access this account."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Plain\nAliases: Token\n\nRequired: True\nPosition: 2\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-usebearertoken"},"-UseBearerToken"),Object(r.b)("p",null,"Switches the authorization from Basic to Bearer.\nYou still use the PAT for PersonalAccessToken parameters to store the token."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: Secure, Plain\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-profile"},"-Profile"),Object(r.b)("p",null,"The profile name stored using Add-VSTeamProfile function.\nYou can tab complete through existing profile names."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Profile\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-version"},"-Version"),Object(r.b)("p",null,"Specifies the version to use.\nThe acceptable values for this parameter are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TFS2017"),Object(r.b)("li",{parentName:"ul"},"TFS2017U1"),Object(r.b)("li",{parentName:"ul"},"TFS2017U2"),Object(r.b)("li",{parentName:"ul"},"TFS2017U3"),Object(r.b)("li",{parentName:"ul"},"TFS2018"),Object(r.b)("li",{parentName:"ul"},"TFS2018U1"),Object(r.b)("li",{parentName:"ul"},"TFS2018U2"),Object(r.b)("li",{parentName:"ul"},"TFS2018U3"),Object(r.b)("li",{parentName:"ul"},"AzD2019"),Object(r.b)("li",{parentName:"ul"},"AzD2019U1"),Object(r.b)("li",{parentName:"ul"},"VSTS"),Object(r.b)("li",{parentName:"ul"},"AzD")),Object(r.b)("p",null,"If you are on AzD it will default to Azd otherwise it will default to TFS2017."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: Secure, Plain, Windows\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: TFS2017 for TFS and AzD for AzD\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-drive"},"-Drive"),Object(r.b)("p",null,"The name of the drive you want to mount to this account.\nThe command you need to run will be presented.\nSimply copy and paste the command to mount the drive.\nTo use the drive run Set-Location ","[","driveName","]",":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-force"},"-Force"),Object(r.b)("p",null,"Forces the function without confirmation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-whatif"},"-WhatIf"),Object(r.b)("p",null,"Shows what would happen if the function runs.\nThe function is not run."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: wi\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"-confirm"},"-Confirm"),Object(r.b)("p",null,"Prompts you for confirmation before running the function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"Type: SwitchParameter\nParameter Sets: (All)\nAliases: cf\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n")),Object(r.b)("h3",{id:"commonparameters"},"CommonParameters"),Object(r.b)("p",null,"This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://go.microsoft.com/fwlink/?LinkID=113216"}),"about_CommonParameters"),"."),Object(r.b)("h2",{id:"inputs"},"INPUTS"),Object(r.b)("h2",{id:"outputs"},"OUTPUTS"),Object(r.b)("h2",{id:"notes"},"NOTES"),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("p",null,"Set the account and version that all calls will use with Set-VSTeamAccount.\nIf you do not set the version it default to 3.0, TFS2017.\nUsing the default could limit API functionality."),Object(r.b)("p",null,"You can check what version of the API that will be called with Get-VSTeamAPIVersion, or Get-VSTeamInfo."),Object(r.b)("p",null,"You can also use Set-VSTeamDefaultProject so you do not have to provide the -ProjectName parameter with the rest of the calls in the module.\nHowever, the -ProjectName parameter is dynamic and you can use tab completion to cycle through all the projects."),Object(r.b)("p",null,"Use Set-VSTeamDefaultAPITimeout to change the default timeout of 60 seconds for all calls."),Object(r.b)("p",null,"You can also use Profiles to load an account and the correct version."),Object(r.b)("h2",{id:"related-links"},"RELATED LINKS"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAccount")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamAPIVersion")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultProject")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Set-VSTeamDefaultAPITimeout")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_profiles")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"about_vsteam_provider")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Add-VSTeamProfile")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"Clear-VSTeamDefaultProject")))}u.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return n?c.a.createElement(d,l(l({ref:t},s),{},{components:n})):c.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
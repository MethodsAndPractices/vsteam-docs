!function(){"use strict";var e,a,f,c,d,b={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={exports:{}};return b[e].call(f.exports,f,f.exports,n),f.exports}n.m=b,e=[],n.O=function(a,f,c,d){if(!f){var b=1/0;for(u=0;u<e.length;u++){f=e[u][0],c=e[u][1],d=e[u][2];for(var t=!0,r=0;r<f.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=c();void 0!==o&&(a=o)}}return a}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[f,c,d]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){b[a]=function(){return e[a]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({2:"d29853c2",28:"9332710f",53:"935f2afb",107:"a277581e",170:"5b80b474",239:"ea6998de",272:"cda52a0d",292:"c725877c",385:"67e07952",439:"a8c068cf",445:"f2144146",480:"474b63f2",557:"34613e1f",586:"624db419",672:"dfdbe416",720:"b67182ef",721:"147bebb9",733:"4d1bb86e",882:"cc28104e",902:"a2a3b7f8",1037:"7125d2aa",1175:"0a5c031a",1234:"89637856",1248:"add5d866",1320:"a6c5ba49",1458:"7a9048e7",1534:"0d7bd2ab",1539:"6b187ec0",1572:"320e50a3",1599:"a69cd69a",1614:"f0909973",1634:"2aaf757c",1732:"d6cfd086",1747:"9dda0ae9",1786:"d247745b",1799:"c4e6ad56",1862:"918ec5d0",1905:"30d7d35b",2e3:"1c51e2a0",2069:"e7cc171e",2101:"48f9088e",2151:"2380f252",2203:"62d5e9ea",2404:"d81a98cf",2456:"26ac1eab",2471:"c695cac8",2478:"4a5d7b7c",2491:"61ff91b9",2662:"cb363575",2676:"b5b911c3",2767:"4c4cc260",2776:"f1db40a2",2803:"9a64304c",2806:"c55c88f2",2900:"29fc567b",2906:"5614916f",2912:"e4f83d61",3034:"e259be98",3076:"01918b27",3193:"298df0fa",3246:"2abac654",3291:"e23713ea",3427:"3dbd71e8",3431:"412ae1e2",3457:"accb1ab9",3521:"9f3d9698",3608:"9e4087bc",3641:"3a6f000f",3667:"c00834d7",3669:"6730c24c",3763:"ed72cf96",3795:"7fb0a29f",3853:"c95ceb74",3950:"34ca21c2",4081:"dab4417a",4195:"c4f5d8e4",4237:"9b569592",4241:"29384c69",4344:"675a86d5",4437:"a262863e",4479:"eecd945e",4534:"2e187a14",4599:"26297a97",4601:"02554565",4643:"9a885ffd",4722:"a755ab4c",4748:"9502f991",4780:"ad1caadc",4790:"b3a2e59f",4891:"b92f522c",4900:"8bcb0ffa",4917:"4d1c823a",5011:"73659d05",5046:"ba4cd1ac",5054:"45f79982",5154:"40195d91",5161:"afffbeef",5245:"fdae210a",5261:"a36f7330",5301:"1f566adb",5350:"61549ee9",5377:"ff6edb1e",5401:"6dada345",5560:"f01366ea",5663:"09e6a282",5678:"cf12ca4b",5767:"a632d29d",5792:"b3f3c4ed",5814:"ac0a066f",5854:"7a78f8b8",5872:"f9a1205f",5874:"90d6fb0f",5932:"982fa1c4",6047:"d3ff0235",6236:"eaaac17d",6273:"86328fb5",6280:"a0fb187b",6286:"751fd6aa",6318:"57fdb9f8",6378:"81b11e7c",6385:"3725e15c",6411:"57576454",6418:"0a36b57d",6446:"03badcc0",6513:"e72db0d4",6532:"f4be75fe",6744:"6883902f",6816:"50dd0a65",6824:"26263bdb",6826:"9ad82474",6837:"fa634f79",6876:"8fad1b3f",6888:"9e07d5ed",6955:"2c81573d",6978:"ab936cff",7053:"a99d2deb",7101:"2806151e",7145:"18646f50",7153:"d379c640",7195:"2ff4e4c5",7215:"8053700d",7262:"0aacfc3e",7303:"4fbbdea1",7383:"0bc67164",7453:"4586db7d",7504:"3f8e9055",7514:"d4882e51",7517:"9242b3f2",7521:"e8a38f3f",7544:"dd272e74",7735:"4a1708e7",7786:"05817416",7816:"1e52f3ce",7850:"1baa99de",7860:"227d23e4",7866:"8c6535db",7918:"17896441",7920:"1a4e3797",8011:"85efc56c",8025:"98d3cf8a",8100:"1075cb90",8103:"e8f4e5af",8155:"ffc4b2e7",8164:"05610193",8203:"974f5285",8219:"ba7e3360",8229:"3bfe22e9",8311:"92bcb4b4",8364:"e79d2a20",8385:"a22d41e9",8416:"7a4b6aee",8463:"ff0b0aaf",8483:"f3b95a5b",8546:"fd913ab1",8613:"1a4c9825",8625:"b3bfc098",8663:"6e8f8329",8760:"865c65a6",8797:"b83ae9ac",8933:"bee70405",8978:"466670ee",8986:"ec1fb860",9079:"85a01e80",9147:"7bdd5d2f",9155:"58645078",9181:"641c4fb3",9195:"41e89a84",9200:"8f4fa447",9280:"963cd21a",9310:"d4142fc6",9324:"e82bcdb6",9386:"5ace283a",9453:"16f9a4e6",9474:"558753bf",9514:"1be78505",9608:"10fd082e",9631:"ac58d66a",9754:"3cc6b68a",9798:"755c5776",9801:"844ecc94",9833:"e289c94e",9962:"817caf80",9970:"f1736dd1"}[e]||e)+"."+{2:"e83905a7",28:"9a5a8dbc",53:"5a14cef6",107:"9080b9f2",170:"dc375f19",239:"63c3da97",272:"09589bb2",292:"7c5a50b1",385:"085b2b0e",439:"56d44203",445:"2e5f245c",480:"f254fee1",557:"9c5a9f11",586:"52d47286",672:"38af14e2",720:"f68a4b47",721:"2da2a04b",733:"351de48a",882:"33e08028",902:"e699d3f7",1037:"3a0474c8",1175:"c105113d",1234:"bdd0310b",1248:"16bf9154",1320:"f958fa6d",1458:"77d6399d",1534:"ca3e3598",1539:"9da29025",1572:"cb68e71f",1599:"e0f192a5",1614:"821e990a",1634:"1d64e880",1732:"aad20245",1747:"a1fbb4df",1786:"2313b255",1799:"bea9fa18",1862:"4e81c6f5",1905:"2ac0f6b4",2e3:"ff134bb2",2069:"c86866a7",2101:"f16a4ef3",2151:"3dadaabf",2203:"a8a504d0",2404:"46a5c4df",2456:"e7d7efd8",2471:"c615de5f",2478:"df447d84",2491:"1990165c",2662:"897bccb5",2676:"5a99c7ea",2767:"1c055055",2776:"12d476a9",2803:"0eb3c9ef",2806:"64a7589c",2900:"a71a38a9",2906:"9776db4f",2912:"c4c65d5d",3034:"21718b6a",3076:"41016c02",3193:"786324ae",3246:"ddde2056",3291:"bb487029",3427:"c9906c04",3431:"0658b8da",3457:"8c80215c",3521:"59b484d8",3608:"2eb9e330",3641:"ff58af18",3667:"1ad5a009",3669:"8a00cb74",3763:"4f89c70f",3795:"a054d5b5",3853:"2925c8e1",3950:"14982c75",4081:"4cf1b53c",4195:"79288f71",4237:"0a9eb997",4241:"bc9f97c5",4344:"915257d8",4437:"b7e572e7",4479:"366db3ec",4534:"30c99632",4599:"d1d4326b",4601:"244d32c8",4608:"5aa77a28",4643:"7996c885",4722:"207ac99f",4748:"85403399",4780:"23415cd1",4790:"114855de",4891:"2ba391a2",4900:"e6fa6bc4",4917:"044b86de",5011:"bf75ae3b",5046:"f3d3e851",5054:"a5228ffd",5154:"38833250",5161:"d8f7664f",5245:"b448cf47",5261:"194eb263",5301:"da8d98bf",5350:"d008e0c3",5377:"023e8114",5401:"2ab64d26",5525:"87d6f112",5560:"4bd75a24",5663:"a169901a",5678:"81a710f5",5767:"1651c59e",5792:"f6c9cebb",5814:"397f5ee2",5854:"373a5ab1",5872:"5cabd062",5874:"e52e098d",5932:"18cf1d8a",6047:"f3a68cab",6236:"7d5c6ca4",6273:"9d595bbc",6280:"6639173b",6286:"cf08e620",6318:"902920cd",6378:"f68c2ff2",6385:"446481fa",6411:"6445ec40",6418:"5eca480f",6446:"6cd9a01d",6513:"307929bd",6532:"6959ee86",6744:"24e02ce4",6816:"f083fb75",6824:"282f5611",6826:"3bc71e8b",6837:"4ee7c46a",6876:"ef226868",6888:"c35e8c61",6955:"4ef14098",6978:"ebb81367",7053:"8f3d894f",7101:"bf3d84ce",7145:"43bf646f",7153:"384e5f11",7195:"3ceb058a",7215:"b3462edb",7262:"c5f169ff",7303:"14c49415",7383:"7ac157d1",7453:"963db3f3",7504:"b20b2a65",7514:"58b05cf2",7517:"ddff3dcb",7521:"6b5896e9",7544:"25db2174",7735:"6e79ae67",7786:"fcb9c9df",7816:"b4c7f1d8",7850:"8b85b413",7860:"e22c5648",7866:"108757a9",7918:"c57a6a68",7920:"3a597653",8011:"a710c2b6",8025:"e55d34e5",8100:"8b72bfd7",8103:"e11f581f",8155:"fc11e230",8164:"5b3c6e11",8203:"45509aeb",8219:"b4c4a225",8229:"75a77630",8311:"891bbb48",8364:"6b15a52a",8385:"af492bca",8416:"13b7bbe1",8443:"7106369f",8463:"a8198246",8483:"c28a3c89",8546:"9a451fba",8613:"feac60d5",8625:"48254602",8663:"ea593c9c",8760:"a4364899",8797:"04272dd2",8933:"6d84bc15",8978:"c3487963",8986:"c45aef80",9079:"5109b07b",9147:"d6387582",9155:"0f569f1b",9181:"73409e43",9195:"6cbda101",9200:"f26760dd",9280:"f446a469",9310:"30228c28",9324:"efae9b62",9386:"a7594a35",9453:"f47a6326",9474:"0a01597d",9514:"a119690a",9608:"b5979fbc",9631:"668cd96f",9754:"ca44cc5a",9798:"c0497cfc",9801:"b17a1611",9833:"7af6078f",9962:"0d54d8d1",9970:"e35e76e6"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.0c38200d.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},d="vs-team-docs:",n.l=function(e,a,f,b){if(c[e])c[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var s=function(a,f){t.onerror=t.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/vsteam-docs/",n.gca=function(e){return e={17896441:"7918",57576454:"6411",58645078:"9155",89637856:"1234",d29853c2:"2","9332710f":"28","935f2afb":"53",a277581e:"107","5b80b474":"170",ea6998de:"239",cda52a0d:"272",c725877c:"292","67e07952":"385",a8c068cf:"439",f2144146:"445","474b63f2":"480","34613e1f":"557","624db419":"586",dfdbe416:"672",b67182ef:"720","147bebb9":"721","4d1bb86e":"733",cc28104e:"882",a2a3b7f8:"902","7125d2aa":"1037","0a5c031a":"1175",add5d866:"1248",a6c5ba49:"1320","7a9048e7":"1458","0d7bd2ab":"1534","6b187ec0":"1539","320e50a3":"1572",a69cd69a:"1599",f0909973:"1614","2aaf757c":"1634",d6cfd086:"1732","9dda0ae9":"1747",d247745b:"1786",c4e6ad56:"1799","918ec5d0":"1862","30d7d35b":"1905","1c51e2a0":"2000",e7cc171e:"2069","48f9088e":"2101","2380f252":"2151","62d5e9ea":"2203",d81a98cf:"2404","26ac1eab":"2456",c695cac8:"2471","4a5d7b7c":"2478","61ff91b9":"2491",cb363575:"2662",b5b911c3:"2676","4c4cc260":"2767",f1db40a2:"2776","9a64304c":"2803",c55c88f2:"2806","29fc567b":"2900","5614916f":"2906",e4f83d61:"2912",e259be98:"3034","01918b27":"3076","298df0fa":"3193","2abac654":"3246",e23713ea:"3291","3dbd71e8":"3427","412ae1e2":"3431",accb1ab9:"3457","9f3d9698":"3521","9e4087bc":"3608","3a6f000f":"3641",c00834d7:"3667","6730c24c":"3669",ed72cf96:"3763","7fb0a29f":"3795",c95ceb74:"3853","34ca21c2":"3950",dab4417a:"4081",c4f5d8e4:"4195","9b569592":"4237","29384c69":"4241","675a86d5":"4344",a262863e:"4437",eecd945e:"4479","2e187a14":"4534","26297a97":"4599","02554565":"4601","9a885ffd":"4643",a755ab4c:"4722","9502f991":"4748",ad1caadc:"4780",b3a2e59f:"4790",b92f522c:"4891","8bcb0ffa":"4900","4d1c823a":"4917","73659d05":"5011",ba4cd1ac:"5046","45f79982":"5054","40195d91":"5154",afffbeef:"5161",fdae210a:"5245",a36f7330:"5261","1f566adb":"5301","61549ee9":"5350",ff6edb1e:"5377","6dada345":"5401",f01366ea:"5560","09e6a282":"5663",cf12ca4b:"5678",a632d29d:"5767",b3f3c4ed:"5792",ac0a066f:"5814","7a78f8b8":"5854",f9a1205f:"5872","90d6fb0f":"5874","982fa1c4":"5932",d3ff0235:"6047",eaaac17d:"6236","86328fb5":"6273",a0fb187b:"6280","751fd6aa":"6286","57fdb9f8":"6318","81b11e7c":"6378","3725e15c":"6385","0a36b57d":"6418","03badcc0":"6446",e72db0d4:"6513",f4be75fe:"6532","6883902f":"6744","50dd0a65":"6816","26263bdb":"6824","9ad82474":"6826",fa634f79:"6837","8fad1b3f":"6876","9e07d5ed":"6888","2c81573d":"6955",ab936cff:"6978",a99d2deb:"7053","2806151e":"7101","18646f50":"7145",d379c640:"7153","2ff4e4c5":"7195","8053700d":"7215","0aacfc3e":"7262","4fbbdea1":"7303","0bc67164":"7383","4586db7d":"7453","3f8e9055":"7504",d4882e51:"7514","9242b3f2":"7517",e8a38f3f:"7521",dd272e74:"7544","4a1708e7":"7735","05817416":"7786","1e52f3ce":"7816","1baa99de":"7850","227d23e4":"7860","8c6535db":"7866","1a4e3797":"7920","85efc56c":"8011","98d3cf8a":"8025","1075cb90":"8100",e8f4e5af:"8103",ffc4b2e7:"8155","05610193":"8164","974f5285":"8203",ba7e3360:"8219","3bfe22e9":"8229","92bcb4b4":"8311",e79d2a20:"8364",a22d41e9:"8385","7a4b6aee":"8416",ff0b0aaf:"8463",f3b95a5b:"8483",fd913ab1:"8546","1a4c9825":"8613",b3bfc098:"8625","6e8f8329":"8663","865c65a6":"8760",b83ae9ac:"8797",bee70405:"8933","466670ee":"8978",ec1fb860:"8986","85a01e80":"9079","7bdd5d2f":"9147","641c4fb3":"9181","41e89a84":"9195","8f4fa447":"9200","963cd21a":"9280",d4142fc6:"9310",e82bcdb6:"9324","5ace283a":"9386","16f9a4e6":"9453","558753bf":"9474","1be78505":"9514","10fd082e":"9608",ac58d66a:"9631","3cc6b68a":"9754","755c5776":"9798","844ecc94":"9801",e289c94e:"9833","817caf80":"9962",f1736dd1:"9970"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise((function(f,d){c=e[a]=[f,d]}));f.push(c[2]=d);var b=n.p+n.u(a),t=new Error;n.l(b,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,d,b=f[0],t=f[1],r=f[2],o=0;if(b.some((function(a){return 0!==e[a]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(a&&a(f);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},f=self.webpackChunkvs_team_docs=self.webpackChunkvs_team_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();
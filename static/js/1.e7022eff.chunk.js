(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{39:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),i=a(10),s=a(9),c=a(11),o=a(0),d=a.n(o),m=function(e){var t,a=e.city,n=e.changeCity;return d.a.createElement("li",{className:"Menu__item",style:(t=a.name,{backgroundImage:"url(./assets/".concat(t,"/").concat(t,"-icon.jpg)")}),onClick:function(){n(a)}},d.a.createElement("div",{className:"Menu__item__content"},d.a.createElement("h4",{className:"Menu__item__title"},a.to),d.a.createElement("p",{className:"Menu__item__date"},"".concat(a.start," - ").concat(a.end))))},l=[{id:21,name:"madrid",to:"Madrid",start:"15.11",end:"19.11.2018"},{id:20,name:"tatry",to:"Tatry",start:"14.09",end:"16.09.2018"},{id:19,name:"corsica",to:"Corsica",start:"19.07",end:"28.07.2018"},{id:18,name:"croatia",to:"Croatia",start:"01.05",end:"07.05.2018"},{id:17,name:"geneva",to:"Geneva",start:"01.05",end:"01.05.2018"},{id:16,name:"tenerife",to:"Tenerife",start:"18.04",end:"22.04.2018"},{id:15,name:"helsinki",to:"Helsinki",start:"13.03",end:"15.03.2018"},{id:14,name:"athens",to:"Athens",start:"16.02",end:"19.02.2018"},{id:13,name:"zieleniec",to:"Zieleniec",start:"02.01",end:"07.01.2018"},{id:12,name:"edinburgh",to:"Edinburgh",start:"08.12",end:"11.12.2017"},{id:11,name:"cuba",to:"Cuba",start:"01.09",end:"15.09.2017"},{id:10,name:"porto",to:"Porto",start:"11.10",end:"14.10.2016"},{id:9,name:"france",to:"France (Euro 2016)",start:"19.06",end:"26.06.2016"},{id:8,name:"berlin",to:"Berlin",start:"02.04",end:"03.04.2016"},{id:7,name:"barcelona",to:"Barcelona",start:"26.10",end:"28.10.2015"},{id:6,name:"italy",to:"Italy",start:"20.09",end:"27.09.2015",subtitle:"Rome, Milano, Bergamo, Venice, San Marino, Bologne"},{id:5,name:"prague",to:"Prague",start:"21.11",end:"24.11.2014"},{id:4,name:"rome",to:"Rome",start:"27.10",end:"31.10.2014"},{id:3,name:"paris",to:"Paris",start:"23.03",end:"27.03.2014"},{id:2,name:"vienna",to:"Vienna",start:"13.10",end:"14.10.2013"},{id:1,name:"budapest",to:"Budapest",start:"09.10",end:"16.10.2013"}],u=(a(39),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).getList=function(e){return d.a.createElement("ul",{className:"Menu__list"},e.map(function(e){return d.a.createElement(m,{city:e,key:"past-".concat(e.id),changeCity:a.props.changeCity})}))},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=[this.props.current];return d.a.createElement("div",{className:"Menu"},e.length>0&&d.a.createElement(d.a.Fragment,null,d.a.createElement("h3",{className:"Menu__header"},"Incoming travels"),this.getList(e)),d.a.createElement("h3",{className:"Menu__header"},"Past travels"),this.getList(l))}}]),t}(o.PureComponent));a.d(t,"default",function(){return u})}}]);
//# sourceMappingURL=1.e7022eff.chunk.js.map
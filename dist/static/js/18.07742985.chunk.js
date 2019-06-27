(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{976:function(e,a,t){"use strict";t.r(a);var r=t(239),s=t(240),l=t(243),n=t(241),c=t(77),o=t(242),m=t(2),i=t.n(m),p=t(761),u=t(839),d=t(734),g=t(735),E=t(736),N=t(775),v=t(737),b=t(977),f=t(967),h=t(776),x=t(882),y=t(883),w=t(244),O=t(99),C=t(43),k=Object(y.getStyle)("--warning");function R(e){var a=e.user,t="/users/".concat(a.id);return i.a.createElement("tr",{key:a.id.toString()},i.a.createElement("td",{className:"text-center"},"Male"===a.gender?i.a.createElement("i",{className:"icon-user progress-group-icon"}):i.a.createElement("i",{className:"icon-user-female progress-group-icon"})),i.a.createElement("td",null,i.a.createElement(p.a,{to:t},a.firstName),i.a.createElement("div",{className:"small text-muted"},i.a.createElement("span",null,a.lastName))),i.a.createElement("td",{className:"text-center"},i.a.createElement("i",{className:"flag-icon flag-icon-id h4 mb-0",title:"us",id:"us"})),i.a.createElement("td",null,a.email),i.a.createElement("td",null,a.records.length))}var S=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],j=function(e,a){var t=S[e],r={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:t.data,label:t.label}]};return function(){return r}},M={tooltips:{enabled:!1,custom:x.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}};function T(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var B=[],F=[],W=[],A=0;A<=27;A++)B.push(T(50,200)),F.push(T(80,100)),W.push(65);var I=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(n.a)(a).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.toggle=t.toggle.bind(Object(c.a)(t)),t.onRadioBtnClick=t.onRadioBtnClick.bind(Object(c.a)(t)),t.state={dropdownOpen:!1,radioSelected:2},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"render",value:function(){var e=this.props,a=e.patient,t=e.profile;if(!a)return i.a.createElement(m.Suspense,{fallback:i.a.createElement("div",null,"Loading...")});console.log(a);var r=a.filter(function(e){return e.doctorSTR===t.str}),s=r.filter(function(e){return!0===e.pinned}),l=r.filter(function(e){return"Male"===e.gender}),n=r.filter(function(e){return"Female"===e.gender});return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,null,i.a.createElement(g.a,null,i.a.createElement(E.a,null,i.a.createElement(N.a,null," User "," Traffic"),i.a.createElement(v.a,null,i.a.createElement(d.a,null,i.a.createElement(g.a,{xs:"12",md:"6",xl:"6"},i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Monday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"34"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"78"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Tuesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"56"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"94"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Wednesday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"12"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"67"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Thursday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"43"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"91"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Friday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"22"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"73"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Saturday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"53"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"82"}))),i.a.createElement("div",{className:"progress-group mb-4"},i.a.createElement("div",{className:"progress-group-prepend"},i.a.createElement("span",{className:"progress-group-text"},"Sunday")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"info",value:"9"}),i.a.createElement(b.a,{className:"progress-xs",color:"danger",value:"69"}))),i.a.createElement("div",{className:"legend text-center"},i.a.createElement("small",null,i.a.createElement("sup",{className:"px-1"},i.a.createElement(f.a,{pill:!0,color:"info"},"\xa0")),"New clients \xa0",i.a.createElement("sup",{className:"px-1"},i.a.createElement(f.a,{pill:!0,color:"danger"},"\xa0")),"Recurring clients"))),i.a.createElement(g.a,{xs:"12",md:"6",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(g.a,{sm:"6"},i.a.createElement("div",{className:"callout callout-warning"},i.a.createElement("small",{className:"text-muted"},"Patient in Charge"),i.a.createElement("br",null),i.a.createElement("strong",{className:"h4"},r.length),i.a.createElement("div",{className:"chart-wrapper"},i.a.createElement(u.a,{data:j(2,k),options:M,width:100,height:30}))))),i.a.createElement("hr",{className:"mt-0"}),i.a.createElement("ul",null,i.a.createElement("div",{className:"progress-group"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user progress-group-icon"}),i.a.createElement("span",{className:"title"},"Male"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},l.length/r.length*100,"%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"warning",value:l.length/r.length*100}))),i.a.createElement("div",{className:"progress-group mb-5"},i.a.createElement("div",{className:"progress-group-header"},i.a.createElement("i",{className:"icon-user-female progress-group-icon"}),i.a.createElement("span",{className:"title"},"Female"),i.a.createElement("span",{className:"ml-auto font-weight-bold"},n.length/r.length*100,"%")),i.a.createElement("div",{className:"progress-group-bars"},i.a.createElement(b.a,{className:"progress-xs",color:"warning",value:n.length/r.length*100})))))),i.a.createElement("br",null),i.a.createElement(E.a,null,i.a.createElement(N.a,null,"PINNED Users"),i.a.createElement(v.a,null,i.a.createElement(h.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},i.a.createElement("i",{className:"icon-people"})),i.a.createElement("th",null,"Full Name"),i.a.createElement("th",{className:"text-center"},"Country"),i.a.createElement("th",null,"E - Mail"),i.a.createElement("th",{className:"text-center"},"Records"))),i.a.createElement("tbody",null,s.map(function(e,a){return i.a.createElement(R,{key:a,user:e})}))))))))))}}]),a}(m.Component);a.default=Object(C.d)(Object(w.b)(function(e){return{patient:e.firestore.ordered.patients,profile:e.firebase.profile}}),Object(O.firestoreConnect)([{collection:"patients"}]))(I)}}]);
//# sourceMappingURL=18.07742985.chunk.js.map
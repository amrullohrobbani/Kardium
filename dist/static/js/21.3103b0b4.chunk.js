(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{981:function(e,t,a){"use strict";a.r(t);var n=a(239),r=a(240),d=a(242),l=a(241),o=a(243),i=a(2),c=a.n(i),s=a(734),m=a(735),h=a(736),u=a(775),E=a(737),p=a(776),I=a(740),g=a(763),y=a(963),f=a(244),V=a(99),x=a(43),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.props.handleLeadsStorage(e.target.value)},a.handleSubmit=function(e){e.preventDefault();var t=a.props.patient.find(function(e){return e.id.toString()===a.props.match.params.id}).pinned,n=a.props.patient.find(function(e){return e.id.toString()===a.props.match.params.id}).id;!0===t?a.setState({pinned:!1,id:n},function(){this.props.pinnedStatus(this.state)}):a.setState({pinned:!0,id:n},function(){this.props.pinnedStatus(this.state)})},a.state={pinned:null,id:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){this.props.onUnload()}},{key:"updateBrush",value:function(e){var t=this;0!==this.state.timerId&&clearTimeout(this.timerId),this.state.timerId=setTimeout(function(){t.setState({startIndex:e.startIndex,endIndex:e.endIndex})},1e5)}},{key:"render",value:function(){var e=this,t=this.props,a=(t.leads,t.patient);if(!a)return c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null,"Loading...")});var n=a.find(function(t){return t.id.toString()===e.props.match.params.id});return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(s.a,null,c.a.createElement(m.a,{lg:6},c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement("strong",null,c.a.createElement("i",{className:"icon-info pr-1"}),"User id: ",this.props.match.params.id)),c.a.createElement(E.a,null,c.a.createElement(p.a,{responsive:!0,striped:!0,hover:!0},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"E - Mail"),c.a.createElement("td",null,c.a.createElement("strong",null,n.email))),c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,c.a.createElement("strong",null,n.firstName," ",n.lastName))),c.a.createElement("tr",null,c.a.createElement("td",null," Status "),c.a.createElement("td",null," ",!0===n.pinned?c.a.createElement(m.a,null,c.a.createElement(I.a,{block:!0,color:"ghost-success",onClick:this.handleSubmit},"Pinned")):c.a.createElement(m.a,null,c.a.createElement(I.a,{block:!0,color:"ghost-danger",onClick:this.handleSubmit},"Unpinned"))," ")),c.a.createElement("tr",null,c.a.createElement("td",null," Waktu Penggunaan "),c.a.createElement("td",null,c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(g.a,{type:"select",name:"select",id:"select",onChange:this.handleChange},c.a.createElement("option",{value:"null"},"please select"),n.records.map(function(e,t){return c.a.createElement("option",{key:t.toString(),value:e.toString()},e)}))))))))))),c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement("strong",null,c.a.createElement("i",{className:"icon-info pr-1"})," ECG Result")),c.a.createElement(E.a,null,c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadI,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"I",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadI},c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.d,{type:"monotone",dataKey:"I",dot:!1}))),c.a.createElement(y.d,{type:"monotone",dataKey:"I",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadII,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"II",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadII},c.a.createElement(y.d,{type:"monotone",dataKey:"II",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"II",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadIII,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"III",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadIII},c.a.createElement(y.d,{type:"monotone",dataKey:"III",dot:!1}))),c.a.createElement(y.d,{type:"monotone",dataKey:"III",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadaVF,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"aVF",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadaVF},c.a.createElement(y.d,{type:"monotone",dataKey:"aVF",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"aVF",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadaVL,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"aVL",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadaVL},c.a.createElement(y.d,{type:"monotone",dataKey:"aVL",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"aVL",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadaVR,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"aVR",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadaVR},c.a.createElement(y.d,{type:"monotone",dataKey:"aVR",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"aVR",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV1,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V1",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV1},c.a.createElement(y.d,{type:"monotone",dataKey:"V1",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V1",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV2,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V2",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV2},c.a.createElement(y.d,{type:"monotone",dataKey:"V2",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V2",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV3,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V3",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV3},c.a.createElement(y.d,{type:"monotone",dataKey:"V3",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V3",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV4,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V4",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV4},c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.d,{type:"monotone",dataKey:"V4",dot:!1}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V4",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV5,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V5",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV5},c.a.createElement(y.d,{type:"monotone",dataKey:"V5",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V5",stroke:"#8884d8",dot:!1})),c.a.createElement(y.e,{width:1e3,height:250,data:this.props.leadV6,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(y.b,{strokeDasharray:"3 3"}),c.a.createElement(y.g,{dataKey:"Time"}),c.a.createElement(y.f,null),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}),c.a.createElement(y.c,null),c.a.createElement(y.a,{dataKey:"V6",height:30,stroke:"#8884d8",onChange:function(t){return e.updateBrush(t)},startIndex:this.state.startIndex,endIndex:this.state.endIndex,tick:!0},c.a.createElement(y.e,{data:this.props.leadV6},c.a.createElement(y.d,{type:"monotone",dataKey:"V6",dot:!1}),c.a.createElement(y.h,{domain:["dataMin","dataMax"]}))),c.a.createElement(y.d,{type:"monotone",dataKey:"V6",stroke:"#8884d8",dot:!1})))))))}}]),t}(i.Component);t.default=Object(x.d)(Object(f.b)(function(e){return console.log(e),{leadI:e.lead.leadI,leadII:e.lead.leadII,leadIII:e.lead.leadIII,leadaVF:e.lead.leadaVF,leadaVL:e.lead.leadaVL,leadaVR:e.lead.leadaVR,leadV1:e.lead.leadV1,leadV2:e.lead.leadV2,leadV3:e.lead.leadV3,leadV4:e.lead.leadV4,leadV5:e.lead.leadV5,leadV6:e.lead.leadV6,patient:e.firestore.ordered.patients,profile:e.firebase.profile}},function(e){return{handleLeadsStorage:function(t){return e((a=t,function(e,t,n){var r=(0,n.getFirebase)(),d=a+".txt",l=[],o=[],i=[],c=[],s=[],m=[],h=[],u=[],E=[],p=[],I=[],g=[],y=[];r.storage().ref().child(d).getDownloadURL().then(function(e){return fetch(e).then(function(e){return e.text()}).then(function(e){return e}).then(function(e){return y=e.split("\n")})}).then(function(e){for(var t=e.length,a=0;a<t;a++)if(a%11===0)switch(y[a].charAt(1)){case"A":l.push({I:y[a].slice(2)});break;case"B":o.push({II:y[a].slice(2)});break;case"C":i.push({III:y[a].slice(2)});break;case"D":s.push({aVL:y[a].slice(2)});break;case"E":m.push({aVR:y[a].slice(2)});break;case"F":c.push({aVF:y[a].slice(2)});break;case"G":h.push({V1:y[a].slice(2)});break;case"H":u.push({V2:y[a].slice(2)});break;case"I":E.push({V3:y[a].slice(2)});break;case"J":p.push({V4:y[a].slice(2)});break;case"K":I.push({V5:y[a].slice(2)});break;case"L":g.push({V6:y[a].slice(2)});break;default:l.push({I:y[a].slice(1)})}}).then(function(t){e({type:"HANDLELEADSTORAGE_SUCCESS",leadI:l,leadII:o,leadIII:i,leadaVF:c,leadaVL:s,leadaVR:m,leadV1:h,leadV2:u,leadV3:E,leadV4:p,leadV5:I,leadV6:g})}).catch(function(t){e({type:"HANDLELEAD_FAILED",err:t})})}));var a},onUnload:function(){return e({type:"UNLOADED"})},pinnedStatus:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)();console.log(e.pinned),!0===e.pinned?r.collection("patients").doc(e.id).update({pinned:!0}).then(function(){t({type:"CHANGE_PIN_STATUS"})}).catch(function(e){t({type:"CHANGE_PIN_FAILED",err:e})}):r.collection("patients").doc(e.id).update({pinned:!1}).then(function(){t({type:"CHANGE_PIN_STATUS"})}).catch(function(e){t({type:"CHANGE_PIN_FAILED",err:e})})}}(t))}}}),Object(V.firestoreConnect)([{collection:"patients"}]))(k)}}]);
//# sourceMappingURL=21.3103b0b4.chunk.js.map
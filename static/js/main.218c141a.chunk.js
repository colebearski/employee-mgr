(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(75)},41:function(e,a,t){},42:function(e,a,t){},46:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),o=t.n(l),s=(t(41),t(3)),c=t(4),m=t(6),i=t(5),u=t(7),p=t(13),h=t(15),d=(t(42),t(43),t(8)),f=t.n(d),E=t(14),b=(t(46),t(35)),y=t(18),v=t(12),N=t.n(v),g=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_EMPLOYEE":return Object(y.a)({},e,{employees:e.employees.filter(function(e){return e.id!==a.payload})});case"ADD_EMPLOYEE":return Object(y.a)({},e,{employees:[a.payload].concat(Object(b.a)(e.employees))});case"EDIT_EMPLOYEE":return Object(y.a)({},e,{employees:e.employees.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={employees:[],dispatch:function(e){return t.setState(function(a){return O(a,e)})}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3000/employees").then(function(e){console.log(e.data),a.setState({employees:e.data})});case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=g.Consumer,k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={showEmployeeInfo:!1},t.onShowClick=function(e){t.setState({showEmployeeInfo:!t.state.showEmployeeInfo})},t.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("http://localhost:3000/employees/".concat(a)).then(function(e){console.log(e),t({type:"DELETE_EMPLOYEE",payload:a})});case 2:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props);var a=this.props.employee,t=this.state.showEmployeeInfo;return r.a.createElement(C,null,function(n){var l=n.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a.firstName," ",a.lastName," ",r.a.createElement("i",{onClick:e.onShowClick,className:"showBtn fas fa-sort-down"}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a.id,l),className:"deleteBtn fas fa-times"}),r.a.createElement(p.b,{to:"employee/edit/".concat(e.props.employee.id)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),t?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",a.email),r.a.createElement("li",{className:"list-group-item"},"Phone: ",a.phone),r.a.createElement("li",{className:"list-group-item"},"Salary: ",a.salary)):null)})}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var a=e.employees;return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Employee")," List"),a.map(function(e){return r.a.createElement(k,{key:e.id,employee:e})}))})}}]),a}(n.Component);t(74);function S(e){var a=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/employee/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," Add Employee"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," About"))))))))}S.defaultProps={branding:"My App"};var x=S;var D=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Employee Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage employees"),r.a.createElement("p",{className:"text-secondary"},"1.0.0"))},P=t(16),A=t(34),L=t.n(A),q=function(e){var a=e.label,t=e.name,n=e.value,l=e.placeholder,o=e.type,s=e.onChange,c=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:L()("form-control from-control-lg",{"is-invalid":c}),placeholder:l,value:n,onChange:s}),c&&r.a.createElement("div",{className:"invalid-feedback"},c))};q.defaultProps={type:"text"};var M=q,I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:"",salary:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.firstName,l=n.lastName,o=n.email,s=n.phone,c=n.salary;if(""!==r)if(""!==l)if(""!==o)if(""!==s)if(""!==c){var m={firstName:r,lastName:l,email:o,phone:s,salary:c};N.a.post("http://localhost:3000/employees",m).then(function(a){e({type:"ADD_EMPLOYEE",payload:a.data})}),t.setState({firstName:"",lastName:"",email:"",phone:"",salary:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{salary:"Salary is required"}});else t.setState({errors:{phone:"Phone number is required"}});else t.setState({errors:{email:"Email is required"}});else t.setState({errors:{lastName:"Last name is required"}});else t.setState({errors:{firstName:"First name is required"}})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.firstName,n=a.lastName,l=a.email,o=a.phone,s=a.salary,c=a.errors;return r.a.createElement(C,null,function(a){var m=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Employee"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,m)},r.a.createElement(M,{label:"First Name",name:"firstName",placeholder:"What's the first name?",value:t,onChange:e.onChange,error:c.firstName}),r.a.createElement(M,{label:"Last Name",name:"lastName",placeholder:"What's the last name?",value:n,onChange:e.onChange,error:c.lastName}),r.a.createElement(M,{label:"Email",name:"email",placeholder:"What's the email?",value:l,onChange:e.onChange,error:c.email}),r.a.createElement(M,{label:"Phone",name:"phone",placeholder:"Can I get that number?",value:o,onChange:e.onChange,error:c.phone}),r.a.createElement(M,{label:"Salary",name:"salary",placeholder:"Dollar dollar bills ya'll",value:s,onChange:e.onChange,error:c.salary}),r.a.createElement("input",{type:"submit",value:"Add Employee",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),W=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:"",salary:"",errors:{}},t.onChange=function(e){return t.setState(Object(P.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,l,o,s,c,m,i,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,l=r.firstName,o=r.lastName,s=r.email,c=r.phone,m=r.salary,""!==l){e.next=5;break}return t.setState({errors:{firstName:"First name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{lastName:"Last name is required"}}),e.abrupt("return");case 8:if(""!==s){e.next=11;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 11:if(""!==c){e.next=14;break}return t.setState({errors:{phone:"Phone number is required"}}),e.abrupt("return");case 14:if(""!==m){e.next=17;break}return t.setState({errors:{salary:"Salary is required"}}),e.abrupt("return");case 17:i={firstName:l,lastName:o,email:s,phone:c,salary:m},u=t.props.match.params.id,N.a.put("http://localhost:3000/employees/".concat(u),i).then(function(e){console.log(e.data),a({type:"UPDATE_EMPLOYEE",payload:e.data})}),t.setState({firstName:"",lastName:"",email:"",phone:"",salary:"",errors:{}}),t.props.history.push("/"),window.location.reload();case 23:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a,t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("http://localhost:3000/employees/".concat(a)).then(function(e){var a=e.data;t.setState({firstName:a.firstName,lastName:a.lastName,email:a.email,phone:a.phone,salary:a.salary})});case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.firstName,n=a.lastName,l=a.email,o=a.phone,s=a.salary,c=a.errors;return r.a.createElement(C,null,function(a){var m=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Employee"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,m)},r.a.createElement(M,{label:"First Name",name:"firstName",placeholder:"What's the first name?",value:t,onChange:e.onChange,error:c.firstName}),r.a.createElement(M,{label:"Last Name",name:"lastName",placeholder:"What's the last name?",value:n,onChange:e.onChange,error:c.lastName}),r.a.createElement(M,{label:"Email",name:"email",placeholder:"What's the email?",value:l,onChange:e.onChange,error:c.email}),r.a.createElement(M,{label:"Phone",name:"phone",placeholder:"Can I get that number?",value:o,onChange:e.onChange,error:c.phone}),r.a.createElement(M,{label:"Salary",name:"salary",placeholder:"Dollar dollar bills ya'll",value:s,onChange:e.onChange,error:c.salary}),r.a.createElement("input",{type:"submit",value:"Update Employee",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component);var F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that pages does not exist... yet"))},Y=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,{basename:"/employee-mgr"},r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Employee Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/employee/add",component:I}),r.a.createElement(h.a,{exact:!0,path:"/employee/edit/:id",component:W}),r.a.createElement(h.a,{exact:!0,path:"/about",component:D}),r.a.createElement(h.a,{component:F}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.218c141a.chunk.js.map
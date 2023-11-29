(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{22:function(e,r,n){},27:function(e,r,n){"use strict";n.r(r);var l=n(0),t=n.n(l),a=n(13),c=n.n(a),s=(n(22),n(17)),u=n(6),o=n(1),i=function(){var e=Object(s.a)({initialValues:{name:"",email:"",amount:0,currency:"",text:"",terms:!1},validationSchema:u.c({name:u.d().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),email:u.d().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"),amount:u.b().min(5,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 5").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),currency:u.d().required("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"),text:u.d().min(10,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),term:u.a().required("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435").oneOf([!0],"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435")}),onSubmit:function(e){return console.log(JSON.stringify(e,null,2))}});return Object(o.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(o.jsx)("h2",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(o.jsx)("label",{htmlFor:"name",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(o.jsx)("input",{id:"name",name:"name",type:"text",value:e.values.name,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.name&&e.touched.name?Object(o.jsx)("div",{className:"error",children:e.errors.name}):null,Object(o.jsx)("label",{htmlFor:"email",children:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430"}),Object(o.jsx)("input",{id:"email",name:"email",type:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.email&&e.touched.email?Object(o.jsx)("div",{className:"error",children:e.errors.email}):null,Object(o.jsx)("label",{htmlFor:"amount",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(o.jsx)("input",{id:"amount",name:"amount",type:"number",value:e.values.amount,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.amount&&e.touched.amount?Object(o.jsx)("div",{className:"error",children:e.errors.amount}):null,Object(o.jsx)("label",{htmlFor:"currency",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(o.jsxs)("select",{id:"currency",name:"currency",value:e.values.currency,onChange:e.handleChange,onBlur:e.handleBlur,children:[Object(o.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}),Object(o.jsx)("option",{value:"USD",children:"USD"}),Object(o.jsx)("option",{value:"UAH",children:"UAH"}),Object(o.jsx)("option",{value:"RUB",children:"RUB"})]}),e.errors.currency&&e.touched.currency?Object(o.jsx)("div",{className:"error",children:e.errors.currency}):null,Object(o.jsx)("label",{htmlFor:"text",children:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(o.jsx)("textarea",{id:"text",name:"text",value:e.values.text,onChange:e.handleChange,onBlur:e.handleBlur}),e.errors.text&&e.touched.text?Object(o.jsx)("div",{className:"error",children:e.errors.text}):null,Object(o.jsxs)("label",{className:"checkbox",children:[Object(o.jsx)("input",{name:"terms",type:"checkbox",value:e.values.terms,onChange:e.handleChange,onBlur:e.handleBlur}),"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438?"]}),e.errors.terms&&e.touched.terms?Object(o.jsx)("div",{className:"error",children:e.errors.terms}):null,Object(o.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})};var m=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(i,{})})};c.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4e082823.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(39)},18:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),u=n(11),r=n.n(u),c=(n(18),n(2)),s=n(3),o=n.n(s),i="/api/persons",m=function(){return o.a.get(i).then(function(e){return e.data})},f=function(e){return o.a.post(i,e).then(function(e){return e.data})},d=function(e){return o.a.delete("".concat(i,"/").concat(e)).then(function(e){return e.data})},E=function(e){var t=e.message;return null===t?null:l.a.createElement("div",{className:"error"},t)},b=function(e){e.successMessage;var t=e.setSuccessMessage,n=e.newNumber,u=e.newName,r=e.persons,c=e.setPersons,s=e.setNewName,o=e.handleNameChange,i=e.handleNumberChange;Object(a.useEffect)(function(){m().then(function(e){c(e)})},[]);return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:u,number:n};!1===r.map(function(e){return e.name}).includes(a.name)?f(a).then(function(e){c(r.concat(e)),s(""),t("muistiinpano lis\xe4tty onnistuneesti"),setTimeout(function(){t(null)},5e3)}):window.alert("".concat(a.name," on jo k\xe4yt\xf6ss\xe4"))}},l.a.createElement("div",null,"nimi: ",l.a.createElement("input",{value:u,onChange:o})),l.a.createElement("div",null,"numero: ",l.a.createElement("input",{value:n,onChange:i})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},v=function(e){var t=e.persons,n=e.setPersons,u=e.filter,r=t.filter(function(e){return e.name.toLowerCase().includes(u)}),s=Object(a.useState)(""),o=Object(c.a)(s,2),i=o[0],m=o[1],f=function(e){console.log(e.target.value),m(e.target.value)},E=function(e){d(i).then(function(e){n(e)})},b=r.map(function(e){return l.a.createElement("tr",{key:e.name,id:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.number),l.a.createElement("td",null,e.id),l.a.createElement("td",null,l.a.createElement("form",{onSubmit:E},l.a.createElement("button",{type:"submit",value:e.id,onClick:f},"poista"))))});return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,b)))},g=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],r=Object(a.useState)(""),s=Object(c.a)(r,2),o=s[0],i=s[1],m=Object(a.useState)(""),f=Object(c.a)(m,2),d=f[0],g=f[1],h=Object(a.useState)(""),p=Object(c.a)(h,2),j=p[0],w=p[1],N=Object(a.useState)(""),O=Object(c.a)(N,2),S=O[0],C=O[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"Puhelinluettelo"),l.a.createElement("div",{className:"success"},l.a.createElement(E,{message:S})),l.a.createElement("form",null,l.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",l.a.createElement("input",{value:j,onChange:function(e){console.log(e.target.value),w(e.target.value)}}))),l.a.createElement("h3",null,"Lis\xe4\xe4 henkil\xf6"),l.a.createElement(b,{persons:n,newNumber:d,newName:o,setPersons:u,setNewName:i,handleNameChange:function(e){console.log(e.target.value),i(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),g(e.target.value)},successMessage:S,setSuccessMessage:C}),l.a.createElement("h2",null,"Numerot"),l.a.createElement("div",null,l.a.createElement(v,{persons:n,filter:j,setPersons:u})))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.9402dbfc.chunk.js.map
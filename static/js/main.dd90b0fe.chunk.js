(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={a:[{image:"https://i.ibb.co/XZCrF8j/Icon-food-2017-31-512.png",Food:"Sandwich de jam\xf3n y queso",price:10,status:"enviado",objectID:0},{image:"https://i.ibb.co/FqrbHHq/Icon-food-2017-8-512.png",Coffee:"Caf\xe9 Americano",price:5,status:"enviado",objectID:1},{image:"https://i.ibb.co/FqrbHHq/Icon-food-2017-8-512.png",Coffee:"Caf\xe9 con leche",price:7,status:"enviado",objectID:2},{image:"https://i.ibb.co/84MdFgL/Icon-food-2017-14-128.png ",Drink:"Jugo de frutas",price:8,status:"enviado",objectID:3}]}},21:function(e){e.exports={a:[{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Simple",price:10,status:"enviado",objectID:0},{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Simple Pollo",price:10,status:"enviado",objectID:8},{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Simple Vegetariana",price:10,status:"enviado",objectID:9},{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Doble",price:15,status:"enviado",objectID:1},{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Doble Pollo",price:15,status:"enviado",objectID:10},{image:"https://i.ibb.co/k8KDHwq/2f615e72ef2b153b5547f49fbb1f0ad6-boceto-de-hamburguesa-by-vexels.png",Food:"Hamburguesa Doble Vegetariana",price:15,status:"enviado",objectID:11},{image:"https://i.ibb.co/BzdRq74/Icon-food-2017-20-512.png",Foody:"Papas Fritas",price:5,status:"enviado",objectID:2},{image:"https://i.ibb.co/BzdRq74/Icon-food-2017-20-512.png ",Foody:"Aros de Cebolla",price:5,status:"enviado",objectID:3},{image:"https://i.ibb.co/jggX7Dy/Icon-food-2017-27-128.png",Drink:"Agua 500ml",price:5,status:"enviado",objectID:4},{image:"https://i.ibb.co/jggX7Dy/Icon-food-2017-27-128.png",Drink:"Agua 750ml",price:7,status:"enviado",objectID:5},{image:"https://i.ibb.co/PTTWBf9/Icon-food-2017-2-128.png",Drink:"Bebida/gaseosa 500ml",price:7,status:"enviado",objectID:6},{image:"https://i.ibb.co/PTTWBf9/Icon-food-2017-2-128.png",Drink:"Bebida/gaseosa 750ml",price:10,status:"enviado",objectID:7},{image:"https://i.ibb.co/Jv3DXXb/Icon-food-2017-23-128.png",Extra:"Adicional Queso",price:1,status:"enviado",objectID:12},{image:"https://i.ibb.co/Jv3DXXb/Icon-food-2017-23-128.png",Extra:"Adicional Huevo",price:1,status:"enviado",objectID:13}]}},26:function(e,t,a){e.exports=a(46)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(31),a(25)),s=a(7),i=a(8),b=a(10),m=a(9),u=a(11),d=a(5),p=a(6),f=a(20),g=(a(32),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuBreakfast:f.a},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.menuBreakfast;return r.a.createElement("div",{className:"col-md-8 breakfast-background"},r.a.createElement("h1",{className:"center"},"\xa1Buenos d\xedas!"),t.map(function(t,a){return r.a.createElement("div",{className:"btn-group mt-3",key:a},r.a.createElement("button",{type:"button",className:"btn btn-default btn-md mt-4  brk-btn",onClick:function(){return e.props.addOrder(t)}},r.a.createElement("div",null,r.a.createElement("img",{className:"icon-button",src:t.image}),r.a.createElement("span",null," ",r.a.createElement("br",null),t.Food,t.Drink,t.Coffee),r.a.createElement("span",null," ",r.a.createElement("br",null)," $",t.price," "))))}))}}]),t}(n.Component)),E=a(21),v=(a(33),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuMeals:E.a},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.menuMeals;return r.a.createElement("div",{className:"col-md-8 meals-background"},r.a.createElement("h1",null,"\xa1Buenas tardes!"),t.map(function(t,a){return r.a.createElement("div",{className:"btn-group p-0 ",key:a},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-md  meal-btn",onClick:function(){return e.props.addOrder(t)}},r.a.createElement("div",null,r.a.createElement("img",{className:"icon-button",src:t.image}),r.a.createElement("span",null," ",r.a.createElement("br",null),t.Food,t.Foody,t.Drink,t.Extra),r.a.createElement("span",null," ",r.a.createElement("br",null)," $",t.price," "))))}))}}]),t}(n.Component)),h=(a(34),function(e){return r.a.createElement("div",{className:"col-md-4 account-background"},r.a.createElement("h4",null," Mesa No ",e.numberTable),r.a.createElement("table",{class:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Producto"),r.a.createElement("th",{scope:"col"},"Precio"),r.a.createElement("th",{scope:"col"},"Eliminar"))),r.a.createElement("tbody",null,e.orders.map(function(t,a){return r.a.createElement("tr",null,r.a.createElement("td",null,t.Food," ",t.Coffee,t.Drink,t.Foody,t.Extra),r.a.createElement("td",null,"$",t.price),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-default btn-lg btn-border",type:"button",onClick:function(){return e.removeOrder(a)}},r.a.createElement("img",{className:"icon-account",src:"https://i.ibb.co/JybpHmg/garbage-icon-png-3.png"}))))}),r.a.createElement("tr",null,r.a.createElement("td",{className:"h5"},"  TOTAL: "),r.a.createElement("td",{className:"h5"}," $",e.total),r.a.createElement("td",null," ",r.a.createElement("button",{type:"button",className:"bt btn-primary kitchen-btn"},"Enviar a Cocina"))))),r.a.createElement("div",null))}),D=(a(35),function(){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/Meseros"}," Meseros "),r.a.createElement(d.b,{to:"/Cocina"}," Cocina "))}),y=a(24),N=(a(44),function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(d.b,Object(y.a)({className:"navbar-brand",to:"/"},"className","welcome-letter"),"Burger Queen"),r.a.createElement("ul",{className:"navbar-nav mr-auto mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link ml-5",to:"/Meseros/Desayunos"}," Desayunos ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link ml-3",to:"/Meseros/Comidas"}," Comidas "))),r.a.createElement("form",{className:"form-inline my-1"},r.a.createElement("div",{className:"md-form form-sm my-0"},r.a.createElement("input",{className:"form-control form-control-sm mr-sm-2 mb-0",type:"number",placeholder:"N\xfamero de Mesa","aria-label":"Search",value:e.noTable,onChange:e.getTableNumber})),r.a.createElement("button",{className:"btn btn-success ok-btn",type:"button",onClick:function(){return e.addNumberTable(e.table)}},"Ok"))))}),j=(a(45),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={noTable:"",orders:[],numberTable:"",total:0},a.getTableNumber=function(e){a.setState({noTable:e.target.value})},a.addNumberTable=function(e){a.setState({numberTable:e})},a.addOrder=function(e){a.setState({orders:[].concat(Object(l.a)(a.state.orders),[e])},function(){return a.sumItemPrice(e.price)})},a.sumItemPrice=function(e){a.setState({total:a.state.total+e})},a.removeOrder=function(e,t){a.setState({orders:a.state.orders.filter(function(t,a){return a!==e})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.noTable,n=t.orders,o=t.numberTable,c=t.total;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",component:D,exact:!0}),r.a.createElement(p.a,{path:"/Meseros",render:function(){return r.a.createElement(N,{table:a,getTableNumber:e.getTableNumber,addNumberTable:e.addNumberTable})}}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{path:"/Meseros/Desayunos",render:function(){return r.a.createElement(g,{addOrder:e.addOrder})}}),r.a.createElement(p.a,{path:"/Meseros/Desayunos",render:function(){return r.a.createElement(h,{orders:n,numberTable:o,total:c,removeOrder:e.removeOrder})}}))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{path:"/Meseros/Comidas",render:function(){return r.a.createElement(v,{addOrder:e.addOrder})}}),r.a.createElement(p.a,{path:"/Meseros/Comidas",render:function(){return r.a.createElement(h,{orders:n,numberTable:o,total:c,removeOrder:e.removeOrder})}})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.dd90b0fe.chunk.js.map
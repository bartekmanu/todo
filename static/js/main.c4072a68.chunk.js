(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o),l=n(2),r=n(3),s=n(5),u=n(4),m=n(6),d=(n(16),n(1)),h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[],text:""},n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(Object(d.a)(n))),n.handleRemove=n.handleRemove.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"todo"},i.a.createElement("div",{className:"todo__bg"},i.a.createElement("h1",{className:"todo__title"},"imperial todo"),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"todo__form"},i.a.createElement("label",{htmlFor:"new-todo"},"What needs to be done?"),i.a.createElement("div",null,i.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),i.a.createElement("button",null,"Add #",this.state.items.length+1))),i.a.createElement(b,{items:this.state.items,handleRemove:this.handleRemove})))}},{key:"handleRemove",value:function(e){this.setState(function(t){return{items:t.items.filter(function(t){return t.id!==e})}})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.text.length){var t={text:this.state.text,id:Date.now()};this.setState(function(e){return{items:e.items.concat(t),text:""}})}}}]),t}(i.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.items.map(function(t){return i.a.createElement("div",{className:"todo__item",key:t.id},i.a.createElement("span",null,t.text),i.a.createElement("div",{className:"todo__item todo__item--remove",onClick:function(){e.props.handleRemove(t.id)}}))}))}}]),t}(i.a.Component),v=h,p=n(9),f=n.n(p),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"particles"},i.a.createElement(f.a,{style:{width:"100%",height:"100%"},params:{particles:{number:{value:100,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.1},size:{value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,null),i.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c4072a68.chunk.js.map
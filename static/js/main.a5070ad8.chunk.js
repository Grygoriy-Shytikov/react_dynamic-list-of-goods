(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},13:function(t,n,o){"use strict";o.r(n);var e=o(0),r=o.n(e),c=o(2),u=o.n(c),a=o(3),s=o(4),i=o(6),l=o(5);o(12);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var f=function(){return d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},h=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},m=function(){return d().then((function(t){return t.filter((function(t){return"blue"===t.color}))}))},g=function(){return d().then((function(t){return t.filter((function(t){return"green"===t.color}))}))},b=function(t){Object(i.a)(o,t);var n=Object(l.a)(o);function o(){var t;Object(a.a)(this,o);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.showGoods=function(n){n().then((function(n){return t.setState({goods:n})}))},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.showGoods(d)}},"Load All goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.showGoods(f)}},"Load 5 first goods"),r.a.createElement("button",{style:{color:"red"},type:"button",onClick:function(){return t.showGoods(h)}},"Load red goods"),r.a.createElement("button",{style:{color:"blue"},type:"button",onClick:function(){return t.showGoods(m)}},"Load blue goods"),r.a.createElement("button",{style:{color:"green"},type:"button",onClick:function(){return t.showGoods(g)}},"Load green goods"),this.state.goods.length>0&&r.a.createElement(y,{goods:this.state.goods}))}}]),o}(r.a.Component),y=function(t){var n=t.goods;return r.a.createElement("ul",null,n.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))};y.defaultProps={goods:[]};var p=b;u.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(t,n,o){t.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a5070ad8.chunk.js.map
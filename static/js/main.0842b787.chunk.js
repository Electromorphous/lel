(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{255:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),s=a(37),i=a(7),l=a(20),m=a(282),u=a(14),p=a(280),d=a(281),h=a(283),b=a(289),E=a(279),g=a(26),k=a(109),f=a.n(k),y=Object(E.a)((function(e){var t,a,n;return{root:(t={flexGrow:1,marginBottom:20},Object(u.a)(t,e.breakpoints.up("xs"),{height:90}),Object(u.a)(t,e.breakpoints.up("sm"),{height:60}),t),appBarClass:(a={backgroundColor:"rgb(236, 49, 49);"},Object(u.a)(a,e.breakpoints.up("xs"),{height:90}),Object(u.a)(a,e.breakpoints.up("sm"),{height:60}),a),title:{flexGrow:1,display:"block"},search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(n={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(u.a)(n,e.breakpoints.up("xs"),{width:"6ch","&:focus":{width:"8ch"}}),Object(u.a)(n,e.breakpoints.up("sm"),{width:"8ch","&:focus":{width:"10ch"}}),Object(u.a)(n,e.breakpoints.up("md"),{width:"10ch","&:focus":{width:"20ch"}}),Object(u.a)(n,"paddingRight",e.spacing(15)),n)}}));function v(e){var t=e.inputText,a=e.setInputText,n=y();return r.a.createElement("div",{className:n.root},r.a.createElement(p.a,{className:n.appBarClass},r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:2,sm:1}),r.a.createElement(m.a,{item:!0,xs:10,sm:3},r.a.createElement(h.a,{className:n.title,variant:"h4",noWrap:!0},"Pok\xe9dex")),r.a.createElement(m.a,{item:!0,xs:2,md:3}),r.a.createElement(m.a,{item:!0},r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(f.a,null)),r.a.createElement(b.a,{value:t,onChange:function(e){a(e.target.value)},placeholder:"Search",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}}))),r.a.createElement(m.a,{item:!0,xs:2,sm:1})))))}var x=a(17),j=a.n(x),w=a(75),O=a(30),N=a(56),P=r.a.createContext();function C(){return Object(n.useContext)(P)}function I(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];function c(){return c=Object(O.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?limit=300");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",Promise.all(a.results.map(function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=a.substring(34,a.length-1),r=new N("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(n,".svg")),e.next=5,r.getPalette();case 5:return c=e.sent,e.abrupt("return",Object(w.a)(Object(w.a)({},t),{},{background:"rgba(".concat(c.Vibrant._rgb[0],", ").concat(c.Vibrant._rgb[1],", ").concat(c.Vibrant._rgb[2],", 0.7)"),id:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 7:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}return Object(n.useEffect)((function(){(function(){return c.apply(this,arguments)})().then(r)}),[]),Object(n.useMemo)((function(){return{array:a}}),[a])}().array;return r.a.createElement(P.Provider,{value:a},t)}var A=a(287),T=a(284),B=a(288),G=a(286),L=a(285),S=Object(E.a)((function(){return{card:{borderRadius:14,height:300},cardActionArea:{height:300},pokemonName:{textAlign:"center",textTransform:"capitalize"}}}));function _(e){var t=e.pokemon,a=Object(i.f)(),n=S(),c="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.id,".svg");return r.a.createElement(m.a,{className:"card-parent",onClick:function(){return a.push("/".concat(t.id))},item:!0,xs:12,sm:6,md:3,key:t.id},r.a.createElement("div",{className:"card"},r.a.createElement(T.a,{className:n.card,style:{background:t.background},elevation:3},r.a.createElement(B.a,{className:n.cardActionArea},r.a.createElement(L.a,{component:"img",alt:t.name,height:"250",src:c,title:t.name}),r.a.createElement("div",{className:"overlay"}),r.a.createElement(G.a,null,r.a.createElement(h.a,{gutterBottom:!0,className:n.pokemonName},t.name))))))}function F(e){var t=e.inputText,a=C();return r.a.createElement(r.a.Fragment,null,0===a.length?r.a.createElement(A.a,{color:"secondary"}):r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:2,sm:1}),r.a.createElement(m.a,{item:!0,container:!0,xs:9,sm:10,spacing:3,justifyContent:"center"},a.map((function(e){return!!e.name.includes(t.toLowerCase())&&r.a.createElement(_,{key:e.id,pokemon:e})}))),r.a.createElement(m.a,{item:!0,xs:1,sm:1})))}function R(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{inputText:a,setInputText:c})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(F,{inputText:a})))}function V(e){var t=e.loader;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(A.a,{color:"secondary"}):r.a.createElement("h1",null,"Pokemon not found"))}function D(e){var t=e.type,a=e.color,n=e.dark;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("span",{className:"dark type",style:{background:a}},t):r.a.createElement("span",{className:"type",style:{background:a}},t))}var J=a(291);function M(e){var t=e.stats;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(J.a,{key:e.stat.name,className:"progress-bar",variant:"determinate",value:e.base_stat})})))}function W(){var e=Object(i.g)().id,t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),m=Object(l.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(""),h=Object(l.a)(d,2),b=h[0],E=h[1],g=C();function k(){return(k=Object(O.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(O.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new N("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(c.id,".svg")),e.next=3,t.getPalette();case 3:return a=e.sent,e.abrupt("return","rgba(".concat(a.Vibrant._rgb[0],", ").concat(a.Vibrant._rgb[1],", ").concat(a.Vibrant._rgb[2],", 0.7)"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=setTimeout((function(){p(!1)}),7e3);return function(){clearTimeout(e)}}),[]),Object(n.useEffect)((function(){(function(){return k.apply(this,arguments)})().then(o)}),[]),Object(n.useEffect)((function(){g.length>0?E(g[e-1].background):c.id&&function(){return f.apply(this,arguments)}().then(E)}),[c]);var y="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(c.id,".svg");return r.a.createElement(r.a.Fragment,null,c.id?r.a.createElement("div",{className:"pokemon-info"},r.a.createElement("div",{className:"banner",style:{backgroundColor:b}}),r.a.createElement("section",{className:"top"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"pokemon-pic",src:y,alt:c.name}),r.a.createElement("div",{className:"overlay"})),r.a.createElement("p",{className:"title"},r.a.createElement("span",{className:"name"},c.name),"#",r.a.createElement("span",{className:"id"},e),r.a.createElement("div",{className:"types"},c.types.map((function(e){return"grass"===(t=e.type.name)?r.a.createElement(D,{key:1,type:"grass",color:"ForestGreen"}):"poison"===t?r.a.createElement(D,{key:2,type:"poison",color:"DarkOrchid"}):"fire"===t?r.a.createElement(D,{key:3,type:"fire",color:"red"}):"water"===t?r.a.createElement(D,{key:4,type:"water",color:"DodgerBlue"}):"normal"===t?r.a.createElement(D,{key:5,type:"normal",color:"chocolate"}):"fighting"===t?r.a.createElement(D,{key:6,type:"fighting",color:"brown"}):"ground"===t?r.a.createElement(D,{key:7,type:"ground",color:"DarkGoldenRod"}):"rock"===t?r.a.createElement(D,{key:8,type:"rock",color:"DarkGrey"}):"bug"===t?r.a.createElement(D,{key:9,type:"bug",color:"green"}):"ghost"===t?r.a.createElement(D,{key:10,type:"ghost",color:"LightSlateGrey"}):"steel"===t?r.a.createElement(D,{key:11,type:"steel",color:"DimGrey"}):"electric"===t?r.a.createElement(D,{key:12,type:"electric",color:"Gold",dark:!0}):"psychic"===t?r.a.createElement(D,{key:13,type:"psychic",color:"pink",dark:!0}):"ice"===t?r.a.createElement(D,{key:14,type:"ice",color:"LightBlue",dark:!0}):"dragon"===t?r.a.createElement(D,{key:15,type:"dragon",color:"LightCyan",dark:!0}):"dark"===t?r.a.createElement(D,{key:16,type:"dark",color:"black"}):"fairy"===t?r.a.createElement(D,{key:17,type:"fairy",color:"LightPink",dark:!0}):void 0;var t}))))),r.a.createElement("section",{className:"properties"},r.a.createElement("div",{className:"basic-info-section"},r.a.createElement("p",null,"Height: ",c.height),r.a.createElement("p",null,"Weight: ",c.weight),r.a.createElement("p",null,"Base experience: ",c.base_experience)),r.a.createElement("div",{className:"ability-section"},r.a.createElement("h1",null,"Abilities"),r.a.createElement("div",{className:"abilities"},c.abilities.map((function(e){return r.a.createElement("div",{className:"ability",key:e.slot},e.ability.name)}))))),r.a.createElement("section",{className:"stats"},r.a.createElement(M,{stats:c.stats}))):r.a.createElement(V,{loader:u}))}function z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,from:"/",component:R}),r.a.createElement(i.a,{exact:!0,from:"/:id",component:W}))))}a(255);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{basename:"/"},r.a.createElement(z,null))),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.0842b787.chunk.js.map
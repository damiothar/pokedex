(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(t,e,n){"use strict";e.a=function(t,e){t.app;e("h",{randomBetween:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}})}},134:function(t,e,n){"use strict";n(32),n(10);var r=n(135),o=n.n(r),c=n(2);c.a.filter("formatId",(function(t){return o()(t).format("000")})),c.a.filter("formatPagination",(function(t){return o()(t).format("00")}))},176:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("e5aab2b8",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";n(35),n(25),n(32),n(10),n(52),n(31),n(53);var r=n(23),o=n(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:l({},Object(o.e)("lang",["locale","t"])),methods:l({},Object(o.d)("lang",["SET_LOCALE"]))},m=(n(242),n(102)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"pokedex"},[n("div",{staticClass:"pokedex__inner"},[n("nav",{staticClass:"nav"},[n("NuxtLink",{attrs:{to:"/"}},[n("i",{staticClass:"nes-pokeball"})]),t._v(" "),n("div",{staticClass:"nav__lang"},[n("span"),t._v(" "),t._l(t.t,(function(e,r){return n("button",{key:r,staticClass:"nav__button",class:{"--active":r==t.locale},attrs:{type:"button"},on:{click:function(e){return t.SET_LOCALE(r)}}},[n("input",{staticClass:"nes-radio",attrs:{type:"radio",disabled:""},domProps:{checked:t.locale==r}}),t._v(" "),n("span",[t._v(t._s(r))])])}))],2)],1),t._v(" "),n("Nuxt")],1)])])}),[],!1,null,"43c48d20",null);e.a=component.exports},191:function(t,e,n){n(192),t.exports=n(193)},240:function(t,e,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("3b4041b2",content,!0,{sourceMap:!1})},241:function(t,e,n){var r=n(62)(!1);r.push([t.i,'*,:after,:before{box-sizing:border-box}html{font-size:10px}body{font-family:"Press Start 2P",monospace;font-size:1.6rem;font-weight:400;line-height:1.2}h1,h2,h3,h4,h5,h6,ol,p,ul{margin:0;padding:0;text-transform:uppercase}ol,ul{list-style:none}a,button{text-decoration:none!important;text-transform:uppercase}.nes-list.is-disc li:before{top:0}.page{flex:1;display:flex;flex-direction:column}.page__main{flex:1}.title{font-size:3.5rem;margin-bottom:5rem}.subtitle{font-size:2rem;margin-bottom:1.5rem}.text{margin-bottom:3rem}.list,.text{color:#858b92}.list{padding-left:2rem;margin-bottom:2rem}.list:last-child{margin-bottom:0}.list__item{margin-bottom:1rem}.list__item:last-child{margin-bottom:0}',""]),t.exports=r},242:function(t,e,n){"use strict";n(176)},243:function(t,e,n){var r=n(62)(!1);r.push([t.i,'#app[data-v-43c48d20]{width:100vw;height:100vh;background-color:#212529;display:flex;justify-content:center;align-items:center}.pokedex[data-v-43c48d20]{width:75rem;height:70rem;position:relative}.pokedex[data-v-43c48d20]:after,.pokedex[data-v-43c48d20]:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;background-color:#ff001d}.pokedex[data-v-43c48d20]:before{top:-.75rem;bottom:-.75rem}.pokedex[data-v-43c48d20]:after{left:-.75rem;right:-.75rem}.pokedex__inner[data-v-43c48d20]{position:relative;z-index:2;width:100%;height:100%;padding:5rem;background-color:#fff;border-bottom:.75rem solid #adafbc;border-right:.75rem solid #adafbc;display:flex;flex-direction:column}.nav[data-v-43c48d20]{display:flex;justify-content:space-between;align-items:center;margin-bottom:4rem}.nav__button[data-v-43c48d20]{background-color:transparent;outline:none!important;border:none;color:#adafbc}.nav__button.--active[data-v-43c48d20]{color:#212529;pointer-events:none}',""]),t.exports=r},244:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return f}));var r=n(7),o=(n(50),n(75),n(51),n(22),function(){return{pokemons:[],pagination:1,maxPokemonsInPag:5,maxPokemonsTotal:151}}),c={maxPagination:function(t){return Math.ceil(t.maxPokemonsTotal/t.maxPokemonsInPag)},offsetFirst:function(t){return(t.pagination-1)*t.maxPokemonsInPag},offsetLast:function(t){return t.pagination*t.maxPokemonsInPag},limit:function(t,e){return e.offsetLast>t.maxPokemonsTotal?5-(e.offsetLast-t.maxPokemonsTotal):5}},l={SET_POKEMONS:function(t,e){t.pokemons=e},SET_PAGINATION:function(t,e){t.pagination=e}},f={getPokemons:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.getters,o=t.commit,n.next=3,e.$axios.$get("https://pokeapi.co/api/v2/pokemon?limit=".concat(r.limit,"&offset=").concat(r.offsetFirst)).then((function(t){var e=t.results.map((function(t){var e=t.url.substring(t.url.indexOf("pokemon/")+8,t.url.lastIndexOf("/"));return{name:t.name,id:e}}));o("SET_POKEMONS",e)}));case 3:case"end":return n.stop()}}),n)})))()},prevPokemons:function(t){var e=t.state,n=t.commit,r=t.dispatch;1!==e.pagination&&(n("SET_PAGINATION",e.pagination-1),r("getPokemons"))},nextPokemons:function(t){var e=t.state,n=t.getters,r=t.commit,o=t.dispatch;e.pagination!==n.maxPagination&&(r("SET_PAGINATION",e.pagination+1),o("getPokemons"))}}},245:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{locale:"en",t:{en:{general:{prev:"Prev",next:"Next",back:"Go back"},home:{title:"First gen pokedex"},pokemon:{characteristic:"Characteristic",abilities:"Abilities"}},es:{general:{prev:"Ant",next:"Sig",back:"Volver"},home:{title:"Pokedex de primera generacion"},pokemon:{characteristic:"Caracteristica",abilities:"Habilidades"}}}}},o={SET_LOCALE:function(t,e){t.locale=e}}},246:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var r=n(7),o=(n(50),n(22),n(247),n(10),n(248),n(25),n(41),function(){return{id:null,name:null,cover:null,abilities:[],characteristic:null}}),c={SET_ID:function(t,e){t.id=e},SET_NAME:function(t,e){t.name=e},SET_ABILITIES:function(t,e){t.abilities=e},SET_COVER:function(t,e){t.cover=e},SET_CHARACTERISTIC:function(t,e){t.characteristic=e}},l={getPokemon:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.state,c=t.commit,l=t.rootState,c("SET_ID",e),o.next=4,n.$axios.$get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var o,f,m,i,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.name,c("SET_NAME",o),f=e.sprites.front_default,c("SET_COVER",f),m=[],i=0;case 6:if(!(i<e.abilities.length)){t.next=13;break}return d=e.abilities[i],t.next=10,n.$axios.$get(d.ability.url).then((function(t){var e=t.names.find((function(t){return t.language.name===l.lang.locale})).name;m.push(e)}));case 10:i++,t.next=6;break;case 13:return c("SET_ABILITIES",m),v=e.stats.reduce((function(t,e){var n,r=Number(null===(n=t)||void 0===n?void 0:n.base_stat);return Number(e.base_stat)>r&&(t=e),t})),t.next=17,n.$axios.$get(v.stat.url).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var r,o,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.characteristics.length-1,o=n.$h.randomBetween(0,r),f=e.characteristics[o].url,t.next=5,n.$axios.$get(f).then((function(t){var e=t.descriptions.find((function(t){return t.language.name===l.lang.locale})).description;c("SET_CHARACTERISTIC",e)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return o.stop()}}),o)})))()},clearPokemon:function(t){var e=t.commit;e("SET_ID",null),e("SET_NAME",null),e("SET_COVER",null),e("SET_ABILITIES",[]),e("SET_CHARACTERISTIC",null)}}}},[[191,4,1,5]]]);
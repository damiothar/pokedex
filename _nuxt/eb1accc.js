(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{278:function(t,e,c){var content=c(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(55).default)("29812738",content,!0,{sourceMap:!1})},280:function(t,e,c){"use strict";c(278)},281:function(t,e,c){var r=c(54)(!1);r.push([t.i,'.details[data-v-4444c289]{display:flex;align-items:center}.details__data[data-v-4444c289]{flex:1;padding-left:4rem}.cover[data-v-4444c289]{position:relative;display:inline-block;margin:.75rem}.cover[data-v-4444c289]:after,.cover[data-v-4444c289]:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;background-color:#212529}.cover[data-v-4444c289]:before{top:-.75rem;bottom:-.75rem}.cover[data-v-4444c289]:after{left:-.75rem;right:-.75rem}.cover__image[data-v-4444c289]{position:relative;z-index:2;background-color:#adafbc;width:22rem;height:22rem;-o-object-fit:contain;object-fit:contain}',""]),t.exports=r},284:function(t,e,c){"use strict";c.r(e);c(35),c(25),c(32),c(10),c(52),c(31),c(53);var r=c(23),o=c(44);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l(l({},Object(o.e)("lang",["locale","t"])),Object(o.e)("pokemon",["id","name","cover","characteristic","abilities"])),created:function(){this.getPokemon(this.$route.params.id)},beforeDestroy:function(){this.clearPokemon()},methods:l({},Object(o.b)("pokemon",["getPokemon","clearPokemon"]))},v=(c(280),c(102)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"page"},[c("main",{staticClass:"page__main"},[c("h1",{staticClass:"title"},[t._v(t._s(t._f("formatId")(t.id))+"."+t._s(t.name))]),t._v(" "),c("div",{staticClass:"details"},[c("div",{staticClass:"details__cover"},[c("div",{staticClass:"cover"},[c("img",{staticClass:"cover__image",attrs:{src:t.cover,alt:t.name}})])]),t._v(" "),c("div",{staticClass:"details__data"},[c("h2",{staticClass:"subtitle"},[t._v(t._s(t.t[t.locale].pokemon.characteristic))]),t._v(" "),c("p",{staticClass:"text"},[t._v(t._s(t.characteristic))]),t._v(" "),c("h2",{staticClass:"subtitle"},[t._v(t._s(t.t[t.locale].pokemon.abilities))]),t._v(" "),c("ul",{staticClass:"list --mb0 nes-list is-disc"},t._l(t.abilities,(function(e){return c("li",{key:e,staticClass:"list__item"},[c("span",{staticClass:"is-dark"},[t._v(t._s(e))])])})),0)])])]),t._v(" "),c("aside",{staticClass:"back"},[c("NuxtLink",{staticClass:"nes-btn",attrs:{to:"/"}},[t._v("\n\t\t\t"+t._s(t.t[t.locale].general.back)+"\n\t\t")])],1)])}),[],!1,null,"4444c289",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(t,e,n){"use strict";n.r(e);n(13),n(87);var o={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},mounted:function(){document.addEventListener("keydown",this.closeOnEscape)},unmounted:function(){document.removeEventListener("keydown",this.closeOnEscape)},methods:{closeOnEscape:function(t){open.value&&"Escape"===t.key&&(open.value=!1)}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}},c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[n("div",{staticClass:"rounded-md ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
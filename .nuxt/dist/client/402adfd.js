(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{368:function(t,e,r){"use strict";r.r(e);var n={props:{variant:{type:String,default:"default"}},computed:{hasTitle:function(){return!!this.$slots.title},hasBody:function(){return!!this.$slots.body},hasFooter:function(){return!!this.$slots.footer},cardClasses:function(){switch(this.variant){case"warning":return"bg-yellow-200";case"success":return"bg-green-200";case"danger":return"bg-red-200";default:return"bg-white"}},titleClasses:function(){switch(this.variant){case"warning":return"text-yellow-900";case"success":return"text-green-900";case"danger":return"text-red-900";default:return"text-gray-900"}},subTitleClasses:function(){switch(this.variant){case"warning":return"text-yellow-500";case"success":return"text-green-500";case"danger":return"text-red-500";default:return"text-gray-500"}}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow sm:rounded-lg",class:t.cardClasses},[t.hasTitle?r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg font-medium leading-6",class:t.titleClasses},[t._t("title")],2),t._v(" "),r("p",{staticClass:"mt-1 text-sm leading-5",class:t.subTitleClasses},[t._t("subtitle")],2)]):t._e(),t._v(" "),t.hasBody?r("div",{staticClass:"px-4 py-5 sm:px-6"},[t._t("body")],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.hasFooter?r("div",{staticClass:"flex items-center justify-end px-4 py-3 text-right bg-gray-50 sm:px-6"},[t._t("footer")],2):t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);
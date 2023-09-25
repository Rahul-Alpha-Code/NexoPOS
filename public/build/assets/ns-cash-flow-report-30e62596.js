import{h as m}from"./npm~moment-fbc5633a.js";import{c as y,e as f}from"./components-97bcd3b2.js";import{n as x,a as g}from"./bootstrap-ea096f37.js";import{_ as v,n as w}from"./currency-47ec5b79.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as C,a6 as i,z as a,A as t,c as h,F as u,ac as b,H as n}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as r}from"./npm~@vue~shared_-82b01912.js";import"./ns-alert-popup-883dcb0b.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-481192b6.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./ns-prompt-popup-ebb91c7c.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const F={name:"ns-cash-flow",props:["storeLogo","storeName"],mounted(){},components:{nsDatepicker:y,nsDateTimePicker:f},data(){return{startDateField:{value:m(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},endDateField:{value:m(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},report:new Object,ns:window.ns}},computed:{balance(){return Object.values(this.report).length===0?0:this.report.total_credit-this.report.total_debit},totalDebit(){return 0},totalCredit(){return 0}},methods:{__:v,nsCurrency:w,printSaleReport(){this.$htmlToPaper("report")},loadReport(){x.post("/api/reports/transactions",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:d=>{this.report=d},error:d=>{g.error(d.message).subscribe()}})}}},k={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},B={class:"px-2"},H={class:"px-2"},R={class:"px-2"},S={class:"ns-button"},j=t("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},L={class:"px-2"},M={class:"ns-button"},O=t("i",{class:"las la-print text-xl"},null,-1),P={class:"pl-2"},T={id:"report",class:"anim-duration-500 fade-in-entrance"},V={class:"flex w-full"},A={class:"my-4 flex justify-between w-full"},z={class:"text-primary"},E={class:"pb-1 border-b border-dashed"},U={class:"pb-1 border-b border-dashed"},q={class:"pb-1 border-b border-dashed"},I=["src","alt"],J={class:"shadow rounded my-4"},K={class:"ns-box"},Q={class:"border-b ns-box-body"},W={class:"ns-table table w-full"},X={class:""},Z={class:"border p-2 text-left"},G={width:"150",class:"border border-error-secondary bg-error-primary p-2 text-right"},$={width:"150",class:"text-right border-success-secondary bg-success-primary border p-2"},tt={class:""},rt={class:"p-2 border"},et=t("i",{class:"las la-arrow-right"},null,-1),st={class:"p-2 border border-error-secondary bg-error-primary text-right"},ot={class:"p-2 border text-right border-success-secondary bg-success-primary"},it={class:"p-2 border"},at=t("i",{class:"las la-arrow-right"},null,-1),dt={class:"p-2 border border-error-secondary bg-error-primary text-right"},ct={class:"p-2 border text-right border-success-secondary bg-success-primary"},nt={class:"font-semibold"},lt={class:"p-2 border"},_t={class:"p-2 border border-error-secondary bg-error-primary text-right"},pt={class:"p-2 border text-right border-success-secondary bg-success-primary"},mt={class:"p-2 border"},ht={colspan:"2",class:"p-2 border text-right border-info-secondary bg-info-primary"};function ut(d,c,_,bt,s,e){const p=C("ns-field");return i(),a("div",k,[t("div",Y,[t("div",B,[h(p,{field:s.startDateField},null,8,["field"])]),t("div",H,[h(p,{field:s.endDateField},null,8,["field"])]),t("div",R,[t("div",S,[t("button",{onClick:c[0]||(c[0]=o=>e.loadReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[j,t("span",N,r(e.__("Load")),1)])])]),t("div",L,[t("div",M,[t("button",{onClick:c[1]||(c[1]=o=>e.printSaleReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[O,t("span",P,r(e.__("Print")),1)])])])]),t("div",T,[t("div",V,[t("div",A,[t("div",z,[t("ul",null,[t("li",E,r(e.__("Range : {date1} — {date2}").replace("{date1}",s.startDateField.value).replace("{date2}",s.endDateField.value)),1),t("li",U,r(e.__("Document : Sale By Payment")),1),t("li",q,r(e.__("By : {user}").replace("{user}",s.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:_.storeLogo,alt:_.storeName},null,8,I)])])]),t("div",J,[t("div",K,[t("div",Q,[t("table",W,[t("thead",X,[t("tr",null,[t("th",Z,r(e.__("Account")),1),t("th",G,r(e.__("Debit")),1),t("th",$,r(e.__("Credit")),1)])]),t("tbody",tt,[(i(!0),a(u,null,b(s.report.creditCashFlow,(o,l)=>(i(),a("tr",{key:l},[t("td",rt,[et,n(),t("strong",null,r(o.account),1),n(" : "+r(o.name),1)]),t("td",st,r(e.nsCurrency(0)),1),t("td",ot,r(e.nsCurrency(o.total)),1)]))),128)),(i(!0),a(u,null,b(s.report.debitCashFlow,(o,l)=>(i(),a("tr",{key:l},[t("td",it,[at,n(),t("strong",null,r(o.account),1),n(" : "+r(o.name),1)]),t("td",dt,r(e.nsCurrency(o.total)),1),t("td",ct,r(e.nsCurrency(0)),1)]))),128))]),t("tfoot",nt,[t("tr",null,[t("td",lt,r(e.__("Sub Total")),1),t("td",_t,r(e.nsCurrency(s.report.total_debit?s.report.total_debit:0)),1),t("td",pt,r(e.nsCurrency(s.report.total_credit?s.report.total_credit:0)),1)]),t("tr",null,[t("td",mt,r(e.__("Balance")),1),t("td",ht,r(e.nsCurrency(e.balance)),1)])])])])])])])])}const Dr=D(F,[["render",ut]]);export{Dr as default};

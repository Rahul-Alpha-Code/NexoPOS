import"./npm~moment-fbc5633a.js";import{c as k,e as R}from"./components-325eb074.js";import{F as g,n as y,a as x}from"./bootstrap-0aabbab9.js";import{_ as u,n as v}from"./currency-47ec5b79.js";import{b as w,n as T}from"./ns-paginate-19e98260.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as F,a6 as n,z as a,A as t,y as d,F as h,ac as b,c as N}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as s}from"./npm~@vue~shared_-82b01912.js";import"./ns-alert-popup-883dcb0b.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-481192b6.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./ns-pos-confirm-popup-07a76865.js";import"./npm~lodash-f7a36ac5.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./npm~vue-upload-component-9e5d4563.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-f38cabd2.js";import"./ns-prompt-popup-64b67141.js";const P={name:"ns-low-stock-report",props:["store-logo","store-name"],mounted(){this.reportType=this.options[0].value,this.loadRelevantReport()},components:{nsDatepicker:k,nsDateTimePicker:R,nsPaginate:w},data(){return{ns:window.ns,products:[],options:[{label:u("Stock Report"),value:"stock_report"},{label:u("Low Stock Report"),value:"low_stock"}],stockReportResult:{},reportType:"",reportTypeName:"",validation:new g}},watch:{reportType(){const l=this.options.filter(i=>i.value===this.reportType);l.length>0?this.reportTypeName=l[0].label:this.reportTypeName=u("N/A")}},methods:{__:u,nsCurrency:v,async selectReport(){try{const l=await new Promise((i,_)=>{Popup.show(T,{label:u("Report Type"),options:this.options,resolve:i,reject:_})});this.reportType=l[0].value,this.loadRelevantReport()}catch{}},loadRelevantReport(){switch(this.reportType){case"stock_report":this.loadStockReport();break;case"low_stock":this.loadReport();break}},printSaleReport(){this.$htmlToPaper("low-stock-report")},loadStockReport(l=null){y.get(l||"/api/reports/stock-report").subscribe({next:i=>{this.stockReportResult=i},error:i=>{x.error(i.message).subscribe()}})},totalSum(l,i,_){if(l.data!==void 0){const r=l.data.map(e=>e.unit_quantities).map(e=>{const c=e.map(o=>o[i]*o[_]);return c.length>0?c.reduce((o,p)=>parseFloat(o)+parseFloat(p)):0});if(r.length>0)return r.reduce((e,c)=>parseFloat(e)+parseFloat(c))}return 0},sum(l,i){if(l.data!==void 0){const m=l.data.map(r=>r.unit_quantities).map(r=>{const e=r.map(c=>c[i]);return e.length>0?e.reduce((c,o)=>parseFloat(c)+parseFloat(o)):0});if(m.length>0)return m.reduce((r,e)=>parseFloat(r)+parseFloat(e))}return 0},loadReport(){y.get("/api/reports/low-stock").subscribe({next:l=>{this.products=l},error:l=>{x.error(l.message).subscribe()}})}}},C={id:"report-section",class:"px-4"},q={class:"flex -mx-2"},L={class:"px-2"},j={class:"ns-button"},B=t("i",{class:"las la-sync-alt text-xl"},null,-1),D={class:"pl-2"},V={class:"px-2"},U={class:"ns-button"},A=t("i",{class:"las la-print text-xl"},null,-1),z={class:"pl-2"},E={class:"px-2"},H={class:"ns-button"},K=t("i",{class:"las la-print text-xl"},null,-1),G={class:"pl-2"},I={id:"report",class:"anim-duration-500 fade-in-entrance"},J={class:"flex w-full"},M={class:"my-4 flex justify-between w-full"},O={class:"text-primary"},W={class:"pb-1 border-b border-dashed"},X={class:"pb-1 border-b border-dashed"},Y={class:"pb-1 border-b border-dashed"},Z=["src","alt"],Q={class:"text-primary shadow rounded my-4"},$={class:"ns-box"},tt={key:0,class:"ns-box-body"},et={class:"table ns-table w-full"},st={class:"border p-2 text-left"},rt={class:"border p-2 text-left"},ot={width:"150",class:"border border-info-secondary bg-info-primary p-2 text-right"},lt={width:"150",class:"border border-success-secondary bg-success-primary p-2 text-right"},it={key:0},nt={colspan:"4",class:"p-2 border text-center"},at={class:"p-2 border"},ct={class:"p-2 border"},pt={class:"p-2 border text-right"},dt={class:"p-2 border border-success-secondary bg-success-primary text-right"},_t={key:1,class:"ns-box-body"},ut={class:"table ns-table w-full"},mt={class:"border p-2 text-left"},ht={class:"border p-2 text-left"},bt={width:"150",class:"border p-2 text-right"},yt={width:"150",class:"border p-2 text-right"},xt={width:"150",class:"border p-2 text-right"},ft={key:0},kt={colspan:"5",class:"p-2 border text-center"},Rt={class:"p-2 border"},gt={class:"flex flex-col"},vt={class:"p-2 border"},wt={class:"p-2 border text-right"},Tt={class:"p-2 border text-right"},St={class:"p-2 border text-right"},Ft=t("td",{class:"p-2 border"},null,-1),Nt=t("td",{class:"p-2 border"},null,-1),Pt=t("td",{class:"p-2 border"},null,-1),Ct={class:"p-2 border text-right"},qt={class:"p-2 border text-right"},Lt={key:0,class:"flex justify-end p-2"};function jt(l,i,_,m,r,e){const c=F("ns-paginate");return n(),a("div",C,[t("div",q,[t("div",L,[t("div",j,[t("button",{onClick:i[0]||(i[0]=o=>e.loadReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[B,t("span",D,s(e.__("Load")),1)])])]),t("div",V,[t("div",U,[t("button",{onClick:i[1]||(i[1]=o=>e.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[A,t("span",z,s(e.__("Print")),1)])])]),t("div",E,[t("div",H,[t("button",{onClick:i[2]||(i[2]=o=>e.selectReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[K,t("span",G,s(e.__("Report Type"))+" : "+s(r.reportTypeName),1)])])])]),t("div",I,[t("div",J,[t("div",M,[t("div",O,[t("ul",null,[t("li",W,s(e.__("Date : {date}").replace("{date}",r.ns.date.current)),1),t("li",X,s(e.__("Document : {reportTypeName}").replace("{reportTypeName}",r.reportTypeName)),1),t("li",Y,s(e.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:l.storeLogo,alt:l.storeName},null,8,Z)])])]),t("div",Q,[t("div",$,[r.reportType==="low_stock"?(n(),a("div",tt,[t("table",et,[t("thead",null,[t("tr",null,[t("th",st,s(e.__("Product")),1),t("th",rt,s(e.__("Unit")),1),t("th",ot,s(e.__("Quantity")),1),t("th",lt,s(e.__("Price")),1)])]),t("tbody",null,[r.products.length===0?(n(),a("tr",it,[t("td",nt,[t("span",null,s(e.__("There is no product to display...")),1)])])):d("",!0),(n(!0),a(h,null,b(r.products,(o,p)=>(n(),a("tr",{key:p,class:"text-sm"},[t("td",at,s(o.product.name),1),t("td",ct,s(o.unit.name),1),t("td",pt,s(o.quantity),1),t("td",dt,s(e.nsCurrency(o.quantity*o.sale_price)),1)]))),128))])])])):d("",!0),r.reportType==="stock_report"?(n(),a("div",_t,[t("table",ut,[t("thead",null,[t("tr",null,[t("th",mt,s(e.__("Product")),1),t("th",ht,s(e.__("Unit")),1),t("th",bt,s(e.__("Price")),1),t("th",yt,s(e.__("Quantity")),1),t("th",xt,s(e.__("Total Price")),1)])]),t("tbody",null,[r.stockReportResult.data===void 0||r.stockReportResult.data.length===0?(n(),a("tr",ft,[t("td",kt,[t("span",null,s(e.__("There is no product to display...")),1)])])):d("",!0),r.stockReportResult.data!==void 0?(n(!0),a(h,{key:1},b(r.stockReportResult.data,o=>(n(),a(h,null,[(n(!0),a(h,null,b(o.unit_quantities,(p,f)=>(n(),a("tr",{key:f,class:"text-sm"},[t("td",Rt,[t("div",gt,[t("span",null,s(o.name),1),t("small",null,s(e.__("SKU"))+": "+s(o.sku),1)])]),t("td",vt,s(p.unit.name),1),t("td",wt,s(e.nsCurrency(p.sale_price)),1),t("td",Tt,s(p.quantity),1),t("td",St,s(e.nsCurrency(p.quantity*p.sale_price)),1)]))),128))],64))),256)):d("",!0)]),t("tfoot",null,[t("tr",null,[Ft,Nt,Pt,t("td",Ct,s(e.sum(r.stockReportResult,"quantity")),1),t("td",qt,s(e.nsCurrency(e.totalSum(r.stockReportResult,"sale_price","quantity"))),1)])])]),r.stockReportResult.data?(n(),a("div",Lt,[N(c,{onLoad:i[3]||(i[3]=o=>e.loadStockReport(o)),pagination:r.stockReportResult},null,8,["pagination"])])):d("",!0)])):d("",!0)])])])])}const Ue=S(P,[["render",jt]]);export{Ue as default};
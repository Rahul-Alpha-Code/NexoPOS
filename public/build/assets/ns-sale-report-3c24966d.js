import{h as m}from"./npm~moment-fbc5633a.js";import{c as T,e as C}from"./components-1a2ebcb8.js";import{n as g,a as b}from"./bootstrap-9d0e4bdd.js";import{_ as c,n as k}from"./currency-d0508508.js";import{n as w}from"./ns-paginate-95683a82.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as U,a6 as a,z as _,A as t,c as v,y as p,F as h,ac as y}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as r}from"./npm~@vue~shared_-82b01912.js";import"./ns-alert-popup-d36e6542.js";import"./npm~numeral-b19ffe25.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./ns-avatar-image-e44353ad.js";import"./npm~@dicebear~avatars_-d0087f50.js";import"./npm~pure-color-c66021e6.js";import"./npm~svgson-5849f5d2.js";import"./npm~omit-deep-622ad2a7.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-87135736.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-cf246a09.js";import"./npm~eventemitter3-15d04946.js";import"./npm~xml-lexer-0debe984.js";import"./npm~@dicebear~avatars-avataaars-sprites_-0d53c542.js";import"./npm~@vue~runtime-dom_-3cadedeb.js";import"./ns-switch-78984f27.js";import"./npm~@ckeditor~ckeditor5-vue_-1322dee8.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./ns-pos-confirm-popup-ade80be0.js";import"./npm~lodash-f5508214.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~vue2-daterange-picker-d62cf46d.js";import"./npm~vuedraggable-c50c1d8b.js";import"./npm~sortablejs-b86fd812.js";import"./npm~vue-upload-component-9a419aa9.js";import"./ns-numpad-plus-51fb60e3.js";import"./ns-pos-loading-popup-73d0cb25.js";import"./ns-prompt-popup-fc801c8c.js";const P={name:"ns-sale-report",data(){return{saleReport:"",startDateField:{name:"start_date",type:"datetime",value:m()},endDateField:{name:"end_date",type:"datetime",value:m()},result:[],users:[],ns:window.ns,summary:{},selectedUser:"",reportType:{label:c("Report Type"),name:"reportType",type:"select",value:"categories_report",options:[{label:c("Categories Detailed"),name:"categories_report"},{label:c("Categories Summary"),name:"categories_summary"},{label:c("Products"),name:"products_report"}],description:c("Allow you to choose the report type.")},filterUser:{label:c("Filter User"),name:"filterUser",type:"select",value:"",options:[],description:c("Allow you to choose the report type.")},field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:T,nsDateTimePicker:C},computed:{},methods:{__:c,nsCurrency:k,printSaleReport(){this.$htmlToPaper("sale-report")},async openSettings(){try{const d=await new Promise((l,i)=>{Popup.show(w,{...this.reportType,resolve:l,reject:i})});this.reportType.value=d[0].name,this.result=[],this.loadReport()}catch{}},async openUserFiltering(){try{const d=await new Promise((l,i)=>{g.get("/api/users").subscribe({next:u=>{this.users=u,this.filterUser.options=[{label:c("All Users"),value:""},...this.users.map(s=>({label:s.username,value:s.id}))],Popup.show(w,{...this.filterUser,resolve:l,reject:i})},error:u=>{b.error(c("No user was found for proceeding the filtering.")),i(u)}})});this.selectedUser=d[0].label,this.filterUser.value=d[0].value,this.result=[],this.loadReport()}catch{}},getType(d){const l=this.reportType.options.filter(i=>i.name===d);return l.length>0?l[0].label:c("Unknown")},loadReport(){if(this.startDate===null||this.endDate===null)return b.error(c("Unable to proceed. Select a correct time range.")).subscribe();const d=m(this.startDate);if(m(this.endDate).isBefore(d))return b.error(c("Unable to proceed. The current time range is not valid.")).subscribe();g.post("/api/reports/sale-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,type:this.reportType.value,user_id:this.filterUser.value}).subscribe({next:i=>{this.result=i.result,this.summary=i.summary},error:i=>{b.error(i.message).subscribe()}})},computeTotal(d,l){return d.length>0?d.map(i=>parseFloat(i[l])).reduce((i,u)=>i+u):0}},props:["store-logo","store-name"],mounted(){}},S={id:"report-section",class:"px-4"},F={class:"flex -mx-2"},R={class:"px-2"},B={class:"px-2"},q={class:"px-2"},A=t("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},j={class:"flex -mx-2"},V={class:"px-2"},L=t("i",{class:"las la-print text-xl"},null,-1),M={class:"pl-2"},Q={class:"px-2"},z=t("i",{class:"las la-cogs text-xl"},null,-1),E={class:"pl-2"},H={class:"px-2"},I=t("i",{class:"las la-user text-xl"},null,-1),G={class:"pl-2"},J={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},K={class:"flex w-full"},O={class:"my-4 flex justify-between w-full"},W={class:"text-secondary"},X={class:"pb-1 border-b border-dashed"},Y={class:"pb-1 border-b border-dashed"},Z={class:"pb-1 border-b border-dashed"},$=["src","alt"],tt={class:"-mx-4 flex md:flex-row flex-col"},et={class:"w-full md:w-1/2 px-4"},rt={class:"shadow rounded my-4 ns-box"},st={class:"border-b ns-box-body"},ot={class:"table ns-table w-full"},lt={class:"text-primary"},dt={class:""},it={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-info-primary text-white"},ct={class:"p-2 border text-right border-info-primary"},at={class:""},_t={width:"200",class:"font-semibold p-2 border text-left bg-error-secondary border-error-primary text-white"},nt={class:"p-2 border text-right border-error-primary"},ut={class:""},pt={width:"200",class:"font-semibold p-2 border text-left bg-error-secondary border-error-primary text-white"},ht={class:"p-2 border text-right border-error-primary"},mt={key:0,class:""},bt={width:"200",class:"font-semibold p-2 border text-left bg-error-secondary border-error-primary text-white"},yt={class:"p-2 border text-right border-error-primary"},xt={class:""},ft={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-info-primary text-white"},gt={class:"p-2 border text-right border-success-primary"},wt={class:""},vt={width:"200",class:"font-semibold p-2 border text-left bg-success-secondary border-success-secondary text-white"},Tt={class:"p-2 border text-right border-success-primary"},Ct=t("div",{class:"w-full md:w-1/2 px-4"},null,-1),kt={key:0,class:"bg-box-background shadow rounded my-4"},Dt={class:"border-b border-box-edge"},Ut={class:"table ns-table w-full"},Pt={class:"text-primary"},St={class:"border p-2 text-left"},Ft={width:"150",class:"border p-2"},Rt={width:"150",class:"border p-2"},Bt={width:"150",class:"border p-2"},qt={width:"150",class:"border p-2"},At={class:"text-primary"},Nt={class:"p-2 border"},jt={class:"p-2 border text-right"},Vt={class:"p-2 border text-right"},Lt={class:"p-2 border text-right"},Mt={class:"p-2 border text-right"},Qt={class:"text-primary font-semibold"},zt=t("td",{class:"p-2 border text-primary"},null,-1),Et={class:"p-2 border text-right text-primary"},Ht={class:"p-2 border text-right text-primary"},It={class:"p-2 border text-right text-primary"},Gt={class:"p-2 border text-right text-primary"},Jt={key:1,class:"bg-box-background shadow rounded my-4"},Kt={class:"border-b border-box-edge"},Ot={class:"table ns-table w-full"},Wt={class:"text-primary"},Xt={class:"border p-2 text-left"},Yt={class:"border p-2 text-left"},Zt={width:"100",class:"border p-2"},$t={width:"150",class:"border p-2"},te={width:"150",class:"border p-2"},ee={width:"150",class:"border p-2"},re={width:"150",class:"border p-2"},se={width:"150",class:"border p-2"},oe={class:"text-primary"},le={class:"p-2 border"},de={class:"p-2 border"},ie={class:"p-2 border text-right"},ce={class:"p-2 border text-right"},ae={class:"p-2 border text-right"},_e={class:"p-2 border text-right"},ne={class:"p-2 border text-right"},ue={class:"p-2 border text-right"},pe={class:"bg-info-primary"},he={colspan:"2",class:"p-2 border border-info-secondary"},me={class:"p-2 border text-right border-info-secondary"},be={class:"p-2 border text-right border-info-secondary"},ye={class:"p-2 border text-right border-info-secondary"},xe={class:"p-2 border text-right border-info-secondary"},fe={class:"p-2 border text-right border-info-secondary"},ge={class:"p-2 border text-right border-info-secondary"},we={class:"text-primary font-semibold"},ve=t("td",{colspan:"2",class:"p-2 border text-primary"},null,-1),Te={class:"p-2 border text-right text-primary"},Ce={class:"p-2 border text-right text-primary"},ke={class:"p-2 border text-right text-primary"},De={class:"p-2 border text-right text-primary"},Ue={class:"p-2 border text-right text-primary"},Pe={class:"p-2 border text-right text-primary"},Se={key:2,class:"bg-box-background shadow rounded my-4"},Fe={class:"border-b border-box-edge"},Re={class:"table ns-table w-full"},Be={class:"text-primary"},qe={class:"border p-2 text-left"},Ae={width:"100",class:"border p-2"},Ne={width:"150",class:"border p-2"},je={width:"150",class:"border p-2"},Ve={width:"150",class:"border p-2"},Le={class:"text-primary"},Me={class:"p-2 border text-left border-info-primary"},Qe={class:"p-2 border text-right border-info-primary"},ze={class:"p-2 border text-right border-info-primary"},Ee={class:"p-2 border text-right border-info-primary"},He={class:"p-2 border text-right border-info-primary"},Ie={class:"text-primary font-semibold"},Ge=t("td",{class:"p-2 border text-primary"},null,-1),Je={class:"p-2 border text-right text-primary"},Ke={class:"p-2 border text-right text-primary"},Oe={class:"p-2 border text-right text-primary"},We={class:"p-2 border text-right text-primary"};function Xe(d,l,i,u,s,e){const f=U("ns-date-time-picker");return a(),_("div",S,[t("div",F,[t("div",R,[v(f,{field:s.startDateField},null,8,["field"])]),t("div",B,[v(f,{field:s.endDateField},null,8,["field"])]),t("div",q,[t("button",{onClick:l[0]||(l[0]=o=>e.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[A,t("span",N,r(e.__("Load")),1)])])]),t("div",j,[t("div",V,[t("button",{onClick:l[1]||(l[1]=o=>e.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[L,t("span",M,r(e.__("Print")),1)])]),t("div",Q,[t("button",{onClick:l[2]||(l[2]=o=>e.openSettings()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[z,t("span",E,r(e.__("Type"))+" : "+r(e.getType(s.reportType.value)),1)])]),t("div",H,[t("button",{onClick:l[3]||(l[3]=o=>e.openUserFiltering()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[I,t("span",G,r(e.__("Filter By User"))+" : @"+r(s.selectedUser||e.__("All Users")),1)])])]),t("div",J,[t("div",K,[t("div",O,[t("div",W,[t("ul",null,[t("li",X,r(e.__("Date : {date}").replace("{date}",s.ns.date.current)),1),t("li",Y,r(e.__("Document : Sale Report")),1),t("li",Z,r(e.__("By : {user}").replace("{user}",s.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:d.storeLogo,alt:d.storeName},null,8,$)])])]),t("div",null,[t("div",tt,[t("div",et,[t("div",rt,[t("div",st,[t("table",ot,[t("tbody",lt,[t("tr",dt,[t("td",it,r(e.__("Sub Total")),1),t("td",ct,r(e.nsCurrency(s.summary.subtotal)),1)]),t("tr",at,[t("td",_t,r(e.__("Sales Discounts")),1),t("td",nt,r(e.nsCurrency(s.summary.sales_discounts)),1)]),t("tr",ut,[t("td",pt,r(e.__("Sales Taxes")),1),t("td",ht,r(e.nsCurrency(s.summary.sales_taxes)),1)]),s.summary.product_taxes>0?(a(),_("tr",mt,[t("td",bt,r(e.__("Product Taxes")),1),t("td",yt,r(e.nsCurrency(s.summary.product_taxes)),1)])):p("",!0),t("tr",xt,[t("td",ft,r(e.__("Shipping")),1),t("td",gt,r(e.nsCurrency(s.summary.shipping)),1)]),t("tr",wt,[t("td",vt,r(e.__("Total")),1),t("td",Tt,r(e.nsCurrency(s.summary.total)),1)])])])])])]),Ct])]),s.reportType.value==="products_report"?(a(),_("div",kt,[t("div",Dt,[t("table",Ut,[t("thead",Pt,[t("tr",null,[t("th",St,r(e.__("Products")),1),t("th",Ft,r(e.__("Quantity")),1),t("th",Rt,r(e.__("Discounts")),1),t("th",Bt,r(e.__("Taxes")),1),t("th",qt,r(e.__("Total")),1)])]),t("tbody",At,[(a(!0),_(h,null,y(s.result,o=>(a(),_("tr",{key:o.id},[t("td",Nt,r(o.name),1),t("td",jt,r(o.quantity),1),t("td",Vt,r(e.nsCurrency(o.discount)),1),t("td",Lt,r(e.nsCurrency(o.tax_value)),1),t("td",Mt,r(e.nsCurrency(o.total_price)),1)]))),128))]),t("tfoot",Qt,[t("tr",null,[zt,t("td",Et,r(e.computeTotal(s.result,"quantity")),1),t("td",Ht,r(e.nsCurrency(e.computeTotal(s.result,"discount"))),1),t("td",It,r(e.nsCurrency(e.computeTotal(s.result,"tax_value"))),1),t("td",Gt,r(e.nsCurrency(e.computeTotal(s.result,"total_price"))),1)])])])])])):p("",!0),s.reportType.value==="categories_report"?(a(),_("div",Jt,[t("div",Kt,[t("table",Ot,[t("thead",Wt,[t("tr",null,[t("th",Xt,r(e.__("Category")),1),t("th",Yt,r(e.__("Product")),1),t("th",Zt,r(e.__("Quantity")),1),t("th",$t,r(e.__("Discounts")),1),t("th",te,r(e.__("Taxes")),1),t("th",ee,r(e.__("Total")),1),t("th",re,r(e.__("Purchase Price")),1),t("th",se,r(e.__("Profit")),1)])]),t("tbody",oe,[(a(!0),_(h,null,y(s.result,(o,x)=>(a(),_(h,{key:x},[o.products.length>0?(a(!0),_(h,{key:0},y(o.products,n=>(a(),_("tr",{key:parseInt(o.id+""+n.id)},[t("td",le,r(o.name),1),t("td",de,r(n.name),1),t("td",ie,r(n.quantity),1),t("td",ce,r(e.nsCurrency(n.discount)),1),t("td",ae,r(e.nsCurrency(n.tax_value)),1),t("td",_e,r(e.nsCurrency(n.total_price)),1),t("td",ne,r(e.nsCurrency(n.total_purchase_price)),1),t("td",ue,r(e.nsCurrency(n.total_price-(n.total_purchase_price+n.tax_value+n.discount))),1)]))),128)):p("",!0),t("tr",pe,[t("td",he,r(o.name),1),t("td",me,r(e.computeTotal(o.products,"quantity")),1),t("td",be,r(e.nsCurrency(e.computeTotal(o.products,"discount"))),1),t("td",ye,r(e.nsCurrency(e.computeTotal(o.products,"tax_value"))),1),t("td",xe,r(e.nsCurrency(e.computeTotal(o.products,"total_price"))),1),t("td",fe,r(e.nsCurrency(e.computeTotal(o.products,"total_purchase_price"))),1),t("td",ge,r(e.nsCurrency(e.computeTotal(o.products,"total_price")-(e.computeTotal(o.products,"total_purchase_price")+e.computeTotal(o.products,"tax_value")+e.computeTotal(o.products,"discount")))),1)])],64))),128))]),t("tfoot",we,[t("tr",null,[ve,t("td",Te,r(e.computeTotal(s.result,"total_sold_items")),1),t("td",Ce,r(e.nsCurrency(e.computeTotal(s.result,"total_discount"))),1),t("td",ke,r(e.nsCurrency(e.computeTotal(s.result,"total_tax_value"))),1),t("td",De,r(e.nsCurrency(e.computeTotal(s.result,"total_price"))),1),t("td",Ue,r(e.nsCurrency(e.computeTotal(s.result,"total_purchase_price"))),1),t("td",Pe,r(e.nsCurrency(e.computeTotal(s.result,"total_price")-(e.computeTotal(s.result,"total_purchase_price")+e.computeTotal(s.result,"total_discount")+e.computeTotal(s.result,"total_tax_value")))),1)])])])])])):p("",!0),s.reportType.value==="categories_summary"?(a(),_("div",Se,[t("div",Fe,[t("table",Re,[t("thead",Be,[t("tr",null,[t("th",qe,r(e.__("Category")),1),t("th",Ae,r(e.__("Quantity")),1),t("th",Ne,r(e.__("Discounts")),1),t("th",je,r(e.__("Taxes")),1),t("th",Ve,r(e.__("Total")),1)])]),t("tbody",Le,[(a(!0),_(h,null,y(s.result,(o,x)=>(a(),_("tr",{key:x,class:""},[t("td",Me,r(o.name),1),t("td",Qe,r(e.computeTotal(o.products,"quantity")),1),t("td",ze,r(e.nsCurrency(e.computeTotal(o.products,"discount"))),1),t("td",Ee,r(e.nsCurrency(e.computeTotal(o.products,"tax_value"))),1),t("td",He,r(e.nsCurrency(e.computeTotal(o.products,"total_price"))),1)]))),128))]),t("tfoot",Ie,[t("tr",null,[Ge,t("td",Je,r(e.computeTotal(s.result,"total_sold_items")),1),t("td",Ke,r(e.nsCurrency(e.computeTotal(s.result,"total_discount"))),1),t("td",Oe,r(e.nsCurrency(e.computeTotal(s.result,"total_tax_value"))),1),t("td",We,r(e.nsCurrency(e.computeTotal(s.result,"total_price"))),1)])])])])])):p("",!0)])])}const cs=D(P,[["render",Xe]]);export{cs as default};

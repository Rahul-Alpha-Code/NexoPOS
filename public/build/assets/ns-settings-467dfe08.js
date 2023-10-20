import{_ as u}from"./currency-a200e3a3.js";import{F as k,a as d,c as m,n as h}from"./bootstrap-bf627498.js";import{m as w}from"./components-6ca8717c.js";import{x as S}from"./npm~@vue~reactivity_-481192b6.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as v,a6 as a,z as l,A as c,F as _,ac as g,y as f,c as x,x as A,ag as j,ax as B,ad as D,H as T}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{z as V,U as b}from"./npm~@vue~shared_-82b01912.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~lodash-f7a36ac5.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-93a76eed.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./npm~vue-upload-component-9e5d4563.js";const E={name:"ns-settings",props:["url"],components:{nsField:w},data(){return{validation:new k,form:{},isSubmitting:!1,test:""}},computed:{formDefined(){return Object.values(this.form).length>0},activeTab(){for(let t in this.form.tabs)if(this.form.tabs[t].active===!0)return this.form.tabs[t]}},mounted(){const t=window.location.href,e=new URL(t);this.loadSettingsForm(e.searchParams.get("tab")||null)},methods:{__:u,loadComponent(t){return S(nsExtraComponents[t])},async submitForm(){if(this.validation.validateForm(this.form).length>0)return d.error(u("Unable to proceed the form is not valid.")).subscribe();this.validation.disableForm(this.form);const t=this.validation.extractForm(this.form),e=m.applyFilters("ns-before-saved",()=>new Promise((s,r)=>(this.isSubmitting=!0,h.post(this.url,t).subscribe({next:n=>{this.isSubmitting=!1,s(n)},error:n=>{this.isSubmitting=!1,r(n)}}))));try{const s=await e(t);this.validation.enableForm(this.form);const r=Object.values(this.form.tabs),n=Object.keys(this.form.tabs)[r.indexOf(this.activeTab)];this.loadSettingsForm(n),s.data&&s.data.results&&s.data.results.forEach(i=>{i.status==="failed"?d.error(i.message).subscribe():d.success(i.message).subscribe()}),m.doAction("ns-settings-saved",{result:s,instance:this}),d.success(s.message).subscribe()}catch(s){this.validation.enableForm(this.form),this.validation.triggerFieldsErrors(this.form,s),m.doAction("ns-settings-failed",{error:s,instance:this}),d.error(s.message||u("Unable to proceed the form is not valid.")).subscribe()}},setActive(t){for(let e in this.form.tabs)this.form.tabs[e].active=!1;t.active=!0,m.doAction("ns-settings-change-tab",{tab:t,instance:this})},loadSettingsForm(t=null){h.get(this.url).subscribe(e=>{let s=0;this.form={},t=e.tabs[t]!==void 0?t:null;for(let r in e.tabs)this.formDefined?e.tabs[r].active=this.form.tabs[r].active:(e.tabs[r].active=!1,(t===null&&s===0||t!==null&&r===t)&&(e.tabs[r].active=!0)),s++,e.tabs[r].fields===void 0&&(e.tabs[r].fields=[]);this.form=this.validation.createForm(e),m.doAction("ns-settings-loaded",this),m.doAction("ns-settings-change-tab",{tab:this.activeTab,instance:this})})}}},H={key:0,id:"tabbed-card",class:"ns-tab"},N={id:"card-header",class:"flex flex-wrap ml-4"},O=["onClick"],U={key:0,class:"ml-2 rounded-full ns-inset-button error active text-sm h-6 w-6 flex items-center justify-center"},z={class:"card-body ns-tab-item"},L={class:"shadow rounded"},P={class:"-mx-4 flex flex-wrap p-2"},R={class:"flex flex-col my-2"},I={key:1,class:"w-full px-4"},q={key:0,class:"ns-tab-item-footer border-t p-2 flex justify-end"};function G(t,e,s,r,n,i){const y=v("ns-field"),F=v("ns-button");return i.formDefined?(a(),l("div",H,[c("div",N,[(a(!0),l(_,null,g(n.form.tabs,(o,p)=>(a(),l("div",{class:V([o.active?"active":"inactive","tab cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg"]),onClick:J=>i.setActive(o),key:p},[c("span",null,b(o.label),1),o.errors&&o.errors.length>0?(a(),l("span",U,b(o.errors.length),1)):f("",!0)],10,O))),128))]),c("div",z,[c("div",L,[c("div",P,[i.activeTab.fields?(a(!0),l(_,{key:0},g(i.activeTab.fields,(o,p)=>(a(),l("div",{class:"w-full px-4 md:w-1/2 lg:w-1/3",key:p},[c("div",R,[x(y,{field:o},null,8,["field"])])]))),128)):f("",!0),i.activeTab.component?(a(),l("div",I,[(a(),A(j(i.loadComponent(i.activeTab.component).value)))])):f("",!0)]),i.activeTab.fields&&i.activeTab.fields.length>0?(a(),l("div",q,[x(F,{disabled:n.isSubmitting,onClick:e[0]||(e[0]=o=>i.submitForm()),type:"info"},{default:B(()=>[D(t.$slots,"submit-button",{},()=>[T(b(i.__("Save Settings")),1)])]),_:3},8,["disabled"])])):f("",!0)])])])):f("",!0)}const Xt=C(E,[["render",G]]);export{Xt as default};

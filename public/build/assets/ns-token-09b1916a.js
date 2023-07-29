import{e as P,p as L,F as N,a as f,n as b}from"./bootstrap-9d0e4bdd.js";import{_ as p}from"./currency-d0508508.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./npm~@dicebear~avatars_-d0087f50.js";import"./npm~@dicebear~avatars-avataaars-sprites_-0d53c542.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-78984f27.js";import S from"./ns-pos-confirm-popup-ade80be0.js";import"./npm~vue2-daterange-picker-d62cf46d.js";import"./npm~vuedraggable-c50c1d8b.js";import"./npm~vue-upload-component-9a419aa9.js";import"./npm~lodash-f5508214.js";import{b as V}from"./npm~qrcode-1ac85ed4.js";import{m as F}from"./npm~@vue~runtime-dom_-3cadedeb.js";import{ae as d,a6 as i,z as l,A as e,az as U,c as m,ax as u,H as _,F as v,ac as g,x as q,y}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as o}from"./npm~@vue~shared_-82b01912.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~numeral-b19ffe25.js";import"./npm~currency.js-57f74176.js";import"./npm~pure-color-c66021e6.js";import"./npm~svgson-5849f5d2.js";import"./npm~omit-deep-622ad2a7.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-87135736.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-cf246a09.js";import"./npm~eventemitter3-15d04946.js";import"./npm~xml-lexer-0debe984.js";import"./npm~@ckeditor~ckeditor5-vue_-1322dee8.js";import"./npm~sortablejs-b86fd812.js";import"./npm~encode-utf8-f813de00.js";import"./npm~dijkstrajs-f906a09e.js";const B={name:"ns-token-output",props:["popup"],data(){return{accessToken:"",qrCodeSRC:""}},mounted(){this.accessToken=this.popup.params.result.data.token.plainTextToken,this.popupCloser(),setTimeout(()=>{this.$refs.token.select(),this.$refs.token.setSelectionRange(0,99999),this.setQRCode()},100)},methods:{__:p,popupResolver:P,popupCloser:L,setQRCode(){V.toDataURL(this.accessToken).then(r=>{this.qrCodeSRC=r}).catch(r=>{console.log(r)})},close(){navigator.clipboard.writeText(this.$refs.token.value),this.popupResolver(!0)}}},j={id:"alert-popup",class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"},D={class:"flex items-center justify-center flex-col flex-auto p-4"},I={class:"text-3xl font-body mb-4"},O=["src"],Q={class:"text-xs text-secondary py-2"},Y=e("br",null,null,-1),z={class:"py-4 text-center"},E={class:"action-buttons flex border-t justify-end items-center p-2"};function H(r,s,c,w,n,t){const x=d("ns-button");return i(),l("div",j,[e("div",D,[e("h2",I,o(t.__("API Token")),1),e("img",{id:"token-qrcode",class:"border-2 w-64 h-64",src:n.qrCodeSRC},null,8,O),e("p",Q,o(t.__("This QR code is provided to ease authentication on external applications.")),1),Y,e("p",z,o(t.__(`The API token has been generated. Make sure to copy this code on a safe place as it will only be displayed once.
                If you loose this token, you'll need to revoke it and generate a new one.`)),1),U(e("input",{ref:"token","onUpdate:modelValue":s[0]||(s[0]=h=>n.accessToken=h),readonly:"",type:"text",class:"my-2 p-2 w-full border-2 rounded border-input-edge bg-input-background"},null,512),[[F,n.accessToken]])]),e("div",E,[m(x,{onClick:s[1]||(s[1]=h=>t.close()),type:"info"},{default:u(()=>[_(o(t.__("Copy And Close")),1)]),_:1})])])}const M=T(B,[["render",H]]),G={name:"ns-token",data(){return{validation:new N,tokens:[],isLoading:!1,fields:[{type:"text",label:p("Token Name"),name:"name",description:p("This will be used to identifier the token."),validation:"required"}]}},methods:{__:p,createToken(){if(!this.validation.validateFields(this.fields))return f.error(p("Unable to proceed, the form is not valid.")).subscribe();b.post("/api/users/create-token",this.validation.extractFields(this.fields)).subscribe(async r=>{try{await new Promise((s,c)=>{Popup.show(M,{resolve:s,reject:c,result:r})}),this.loadTokens()}catch(s){console.log(s)}})},revokeToken(r){Popup.show(S,{title:p("Confirm Your Action"),message:p("You're about to delete a token that might be in use by an external app. Deleting will prevent that app from accessing the API. Would you like to proceed ?"),onAction:s=>{s&&b.delete(`/api/users/tokens/${r.id}`).subscribe({next:c=>{this.loadTokens(),f.success(c.message).subscribe()},error:c=>{f.error(c.message||"An unexpected error occured.").subscribe()}})}})},loadTokens(){this.isLoading=!0,b.get("/api/users/tokens").subscribe({next:r=>{this.isLoading=!1,this.tokens=r},error:r=>{f.error("Unable to load the token. An unexpected error occured.").subscribe()}})}},mounted(){this.fields=this.validation.createFields(this.fields),this.loadTokens()}},W={class:"-mx-2"},J={class:"px-2 w-full md:w-1/2"},K={class:"mb-4"},X={class:"my-2"},Z={class:"flex justify-end"},$={class:"py-2 border-b-4 text-center border-box-edge text-xl"},ee={key:0},te={class:"flex flex-col"},oe={class:"text-lg"},se={class:"text-xs text-tertiary"},re={class:"text-xs text-tertiary"},ne={class:"text-xs text-tertiary"},ie={key:1,class:"my-4"},ae={key:2,class:"mt-2"},le={class:"text-center text-tertiary text-sm my-4"};function ce(r,s,c,w,n,t){const x=d("ns-notice"),h=d("ns-field"),C=d("ns-button"),R=d("ns-close-button"),A=d("ns-spinner");return i(),l("div",W,[e("div",J,[e("div",K,[m(x,null,{title:u(()=>[_(o(t.__("About Token")),1)]),description:u(()=>[_(o(t.__(`Token are used to provide a secure access to NexoPOS resources without having to share your personal username and password.
                       Once generated, they won't expires until you explicitely revoke it.`)),1)]),_:1})]),e("div",X,[(i(!0),l(v,null,g(n.fields,(a,k)=>(i(),q(h,{key:k,field:a},null,8,["field"]))),128)),e("div",Z,[m(C,{onClick:s[0]||(s[0]=a=>t.createToken()),type:"info"},{default:u(()=>[_(o(t.__("Save Token")),1)]),_:1})])]),e("div",null,[e("h3",$,o(t.__("Generated Tokens")),1),n.tokens.length>0&&!n.isLoading?(i(),l("ul",ee,[(i(!0),l(v,null,g(n.tokens,(a,k)=>(i(),l("li",{key:k,class:"p-2 border-b flex justify-between items-center border-box-edge"},[e("div",te,[e("h4",oe,o(a.name),1),e("div",null,[e("ul",null,[e("li",null,[e("span",se,o(t.__("Created"))+": "+o(a.created_at),1)]),e("li",null,[e("span",re,o(t.__("Last Use"))+": "+o(a.last_used_at||t.__("Never")),1)]),e("li",null,[e("span",ne,o(t.__("Expires"))+": "+o(a.expires_at||t.__("Never")),1)])])])]),e("div",null,[m(R,{onClick:pe=>t.revokeToken(a),class:"px-2"},{default:u(()=>[_(o(t.__("Revoke")),1)]),_:2},1032,["onClick"])])]))),128))])):y("",!0),n.isLoading?(i(),l("div",ie,[m(A)])):y("",!0),!n.isLoading&&n.tokens.length===0?(i(),l("div",ae,[e("div",le,o(t.__("You haven't yet generated any token for your account. Create one to get started.")),1)])):y("",!0)])])])}const kt=T(G,[["render",ce]]);export{kt as default};

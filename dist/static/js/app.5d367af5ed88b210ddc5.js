webpackJsonp([1],{"+2zc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",on:{click:t.onViewPageDetail}},[n("el-card",{staticClass:"card",attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:t.page.avatar}}),t._v(" "),n("div",{staticClass:"right"},[n("span",{staticClass:"name"},[t._v(t._s(t.page.name))]),t._v(" "),n("div",{staticClass:"bottom"},[t.page.active?n("span",{staticClass:"status"},[t._v("Đã kích hoạt")]):n("span",{staticClass:"status"},[t._v("Chưa kích hoạt")]),t._v(" "),n("el-button",{staticClass:"button",attrs:{type:"danger"}},[t._v("Huỷ")])],1)])])],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},"+GlM":function(t,e){},"+Urw":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrapper"},[n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customerGroups,stripe:"","row-style":{cursor:"pointer"},"default-sort":{prop:"date",order:"descending"},"empty-text":"Chưa có dữ liệu"},on:{"row-click":t.handleRowClicked}},[n("el-table-column",{attrs:{prop:"groupName",label:"Tên Nhóm",sortable:"",fixed:"",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"customerName",label:"Tên KH",sortable:"",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"Giới tính",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"like",label:"Like",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"comments",label:"Comments",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"inbox",label:"Inbox",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"lastInteraction",label:"Lần tương tác cuối",sortable:"",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"Hành động",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("Sửa")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"}},[t._v("Xoá")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3}})],1)])},r=[],i={render:a,staticRenderFns:r};e.a=i},"0cud":function(t,e){},"24E3":function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),c=n("Zs2m"),o=n("Goo1"),u=n("IcnI"),l=this,p=function(){var t=s()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(o.e,{headers:{Authorization:"Bearer "+u.a.state.auth.shopToken}});case 3:if(e=t.sent,n=e.data,!n.meta.success){t.next=9;break}return t.abrupt("return",n.data);case 9:return t.abrupt("return",[]);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",[]);case 15:case"end":return t.stop()}},t,l,[[0,12]])}));return function(){return t.apply(this,arguments)}}()},"2JcJ":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("span",{staticClass:"welcome-title"},[t._v("Chào mừng đến với ứng dụng Autobot")]),t._v(" "),n("el-button",{staticClass:"use-app-button",attrs:{type:"primary"},on:{click:t.startUsingApp}},[t._v("Sử dụng ứng dụng ngay")])],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},"4wck":function(t,e,n){"use strict";function a(t){n("0cud")}var r=n("nk5R"),i=n("G1Ig"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-b53a022e",null);e.a=o.exports},"5B07":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SideBar",{attrs:{items:t.links,active:t.activePath}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},"5nRO":function(t,e,n){"use strict";var a=n("T55L");e.a={name:"Page-Detail",components:{PageDetailSideBar:a.a}}},"7iWO":function(t,e,n){"use strict";var a,r=n("bOdI"),i=n.n(r),s=n("Du/2"),c=n("LSGs"),o={customers:[],loading:!0},u={customers:function(t){return t.customers}},l={getAllCustomers:function(t){var e=t.commit;e(s.o),Object(c.a)().then(function(t){e(s.d),console.log(t);var n=[{name:"Cristano Ronaldo",like:1e3,comments:500,inbox:1e4,batchNews:950,read:900,clicks:500,react:249,lastInteraction:"3 ngày trước"},{name:"Cristano Ronaldo",like:1e3,comments:500,inbox:1e4,batchNews:950,read:900,clicks:500,react:249,lastInteraction:"3 ngày trước"}];e(s.i,{customers:n})})}},p=(a={},i()(a,s.i,function(t,e){var n=e.customers;t.customers=n}),i()(a,s.o,function(t){t.loading=!0}),i()(a,s.d,function(t){t.loading=!1}),a);e.a={state:o,getters:u,actions:l,mutations:p}},"7jdm":function(t,e,n){"use strict";var a,r=n("bOdI"),i=n.n(r),s=n("Du/2"),c=n("24E3"),o={pages:[],loading:!0},u={allPages:function(t){return t.pages}},l={getAllPages:function(t){var e=t.commit;e(s.q),Object(c.a)().then(function(t){e(s.f),e(s.k,{pages:t})})}},p=(a={},i()(a,s.k,function(t,e){var n=e.pages;t.pages=n}),i()(a,s.q,function(t){t.loading=!0}),i()(a,s.f,function(t){t.loading=!1}),a);e.a={state:o,getters:u,actions:l,mutations:p}},"9DX9":function(t,e,n){"use strict";function a(t){n("CiQO")}var r=n("9yBg"),i=n("+Urw"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-671bcf72",null);e.a=o.exports},"9yBg":function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("NYxO");e.a={computed:r()({},Object(i.c)({customerGroups:"customerGroups"}),Object(i.d)({loading:function(t){return t.customerGroup.loading}})),methods:r()({},Object(i.b)(["getAllCustomerGroups"]),{handleRowClicked:function(t){console.log("Clicked row "+t)}}),created:function(){this.getAllCustomerGroups()}}},BU7s:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("span",[t._v("Training")])])}],i={render:a,staticRenderFns:r};e.a=i},Cd4w:function(t,e){},CiQO:function(t,e){},"D+VX":function(t,e,n){"use strict";var a,r=n("bOdI"),i=n.n(r),s=n("Xxa5"),c=n.n(s),o=n("d7EF"),u=n.n(o),l=n("exGp"),p=n.n(l),d=n("Du/2"),m=n("p0QZ"),f=n("Q98j"),g={shopToken:void 0,loggingIn:!1,checkingLoginStatus:!0},h={isLoggedIn:function(t){return void 0!==t.shopToken},loading:function(t){return t.loggingIn||t.checkingLoginStatus}},v={login:function(t){var e=this,n=t.commit;return p()(c.a.mark(function t(){var a,r,i,s,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(d.r),t.next=3,Object(m.b)();case 3:if(a=t.sent){t.next=7;break}return n(d.g),t.abrupt("return",!1);case 7:return r=u()(a,2),i=r[0],s=r[1],t.next=10,Object(f.a)(i,s);case 10:if(o=t.sent){t.next=14;break}return n(d.g),t.abrupt("return",!1);case 14:return n(d.l,{shopToken:o}),n(d.g),t.abrupt("return",!0);case 17:case"end":return t.stop()}},t,e)}))()},checkLoginStatus:function(t){var e=this,n=t.commit;return p()(c.a.mark(function t(){var a,r,i,s,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(d.m),t.next=3,Object(m.a)();case 3:if(a=t.sent){t.next=7;break}return n(d.b),t.abrupt("return",!1);case 7:return r=u()(a,2),i=r[0],s=r[1],t.next=10,Object(f.a)(i,s);case 10:if(o=t.sent){t.next=14;break}return n(d.b),t.abrupt("return",!1);case 14:return n(d.l,{shopToken:o}),n(d.b),t.abrupt("return",!0);case 17:case"end":return t.stop()}},t,e)}))()}},b=(a={},i()(a,d.l,function(t,e){var n=e.shopToken;t.shopToken!==n&&(t.shopToken=n)}),i()(a,d.a,function(t){t.shopToken=void 0}),i()(a,d.r,function(t){t.loggingIn=!0}),i()(a,d.g,function(t){t.loggingIn=!1}),i()(a,d.m,function(t){t.checkingLoginStatus=!0}),i()(a,d.b,function(t){t.checkingLoginStatus=!1}),a);e.a={state:g,getters:h,actions:v,mutations:b}},DDQq:function(t,e,n){"use strict";e.a={name:"CampaignDetail"}},"Du/2":function(t,e,n){"use strict";n.d(e,"l",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"k",function(){return i}),n.d(e,"q",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"m",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"r",function(){return l}),n.d(e,"g",function(){return p}),n.d(e,"d",function(){return d}),n.d(e,"i",function(){return m}),n.d(e,"o",function(){return f}),n.d(e,"c",function(){return g}),n.d(e,"h",function(){return h}),n.d(e,"n",function(){return v}),n.d(e,"e",function(){return b}),n.d(e,"j",function(){return _}),n.d(e,"p",function(){return k});var a="SAVE_USER_CREDENTIALS",r="CLEAR_USER_CREDENTIALS",i="RECEIVE_ALL_PAGES",s="START_LOADING_PAGES",c="FINISH_LOADING_PAGES",o="START_CHECKING_LOGIN_STATUS",u="FINISH_CHECKING_LOGIN_STATUS",l="START_LOGIN",p="FINISH_LOGIN",d="FINISH_LOADING_CUSTOMERS",m="RECEIVE_ALL_CUSTOMERS",f="START_LOADING_CUSTOMERS",g="FINISH_LOADING_CAMPAIGNS",h="RECEIVE_ALL_CAMPAIGNS",v="START_LOADING_CAMPAIGNS",b="FINISH_LOADING_CUSTOMERS_GROUP",_="RECEIVE_ALL_CUSTOMERS_GROUP",k="START_LOADING_CUSTOMERS_GROUP"},Fs8J:function(t,e,n){"use strict";e.a={name:"Home",methods:{startUsingApp:function(){this.$router.push({path:"/login"})}}}},G1Ig:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrapper"},[n("span",{staticClass:"title"},[t._v("Danh sách fanpage của tôi")]),t._v(" "),t._l(t.pages,function(e,a){return n("PageItem",{key:e._id,attrs:{page:e},on:{viewPageDetail:t.viewPageDetail}})})],2)},r=[],i={render:a,staticRenderFns:r};e.a=i},Goo1:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"e",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return c});var a="/sessions/facebook",r="/pages",i="/customers",s="/campaigns",c="/customer-groups"},HXfX:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.active,router:!0}},t._l(t.items,function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},IcnI:function(t,e,n){"use strict";var a=n("7+uW"),r=n("NYxO"),i=n("D+VX"),s=n("7jdm"),c=n("7iWO"),o=n("y2iq"),u=n("eFpr");a.default.use(r.a),e.a=new r.a.Store({modules:{auth:i.a,myPages:s.a,customer:c.a,campaign:o.a,customerGroup:u.a}})},IwG1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrapper"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.campaigns,stripe:"","row-style":{cursor:"pointer",width:"400px"},"default-sort":{prop:"date",order:"descending"},"empty-text":"Chưa có dữ liệu"},on:{"row-click":t.handleRowClicked}},[n("el-table-column",{attrs:{prop:"name",label:"Tên chiến dịch",width:"250",sortable:"",fixed:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"type",label:"Loại",width:"150",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"total",label:"Số lượng",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"sent",label:"Đã gửi",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"read",label:"Đã đọc",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"clicked",label:"Đã click",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"interacted",label:"Đã tương tác",sortable:""}})],1)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},LSGs:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),c=n("Zs2m"),o=n("Goo1"),u=n("IcnI"),l=this,p=function(){var t=s()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(o.b,{headers:{Authorization:"Bearer "+u.a.state.auth.shopToken}});case 3:if(e=t.sent,n=e.data,!n.meta.success){t.next=9;break}return t.abrupt("return",n.data);case 9:return t.abrupt("return",[]);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",[]);case 15:case"end":return t.stop()}},t,l,[[0,12]])}));return function(){return t.apply(this,arguments)}}()},M93x:function(t,e,n){"use strict";var a=n("xJD8"),r=n("SUZ6"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("zL8q"),i=n.n(r),s=n("tvR6"),c=(n.n(s),n("M93x")),o=n("YaEn"),u=n("IcnI");a.default.config.productionTip=!1,a.default.use(i.a),new a.default({el:"#app",router:o.a,store:u.a,template:"<App/>",components:{App:c.a}})},PmVp:function(t,e,n){"use strict";var a=n("zvck"),r=n("HXfX"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},PmVw:function(t,e,n){"use strict";function a(t){n("Cd4w")}var r=n("cF05"),i=n("IwG1"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-742cdbef",null);e.a=o.exports},PqVR:function(t,e,n){"use strict";function a(t){n("QbST")}var r=n("5nRO"),i=n("srlt"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,null,null);e.a=o.exports},Q98j:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),c=n("Zs2m"),o=n("Goo1"),u=this,l=function(){var t=s()(r.a.mark(function t(e,n){var a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.post(o.d,{token:e,fbAppId:n});case 3:if(a=t.sent,i=a.data,!i.meta.success){t.next=7;break}return t.abrupt("return",i.data.token);case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}},t,u,[[0,9]])}));return function(e,n){return t.apply(this,arguments)}}()},"QId/":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrapper"},[n("div",{staticClass:"login-form",class:{hidden:t.hideLoginForm}},[n("span",{staticClass:"login-title"},[t._v("Cần đăng nhập để sử dụng")]),t._v(" "),n("el-button",{staticClass:"login-button",attrs:{type:"primary"},on:{click:t.loginClicked}},[t._v("Đăng nhập với Facebook")])],1)])},r=[],i={render:a,staticRenderFns:r};e.a=i},QbST:function(t,e){},SUZ6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},T55L:function(t,e,n){"use strict";var a=n("d2HW"),r=n("5B07"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},Uv5v:function(t,e,n){"use strict";var a=n("DDQq"),r=n("kSw0"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),r=n("/ocq"),i=n("lO7g"),s=n("PqVR"),c=n("xJsL"),o=n("PmVw"),u=n("bBZf"),l=n("g2Qj"),p=n("d5kq"),d=n("9DX9"),m=n("4wck"),f=n("Uv5v"),g=n("IcnI");a.default.use(r.a);var h=new r.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/login",name:"Login",component:c.a},{path:"/pages",name:"MyPages",component:m.a,meta:{requiresAuth:!0}},{path:"/pages/:id/campaigns",component:s.a,children:[{path:"",name:"Campaign",component:o.a,meta:{requiresAuth:!0}},{path:"/pages/:id/campaigns/:campaign_id",name:"CampaignDetail",component:f.a,meta:{requiresAuth:!0}}]},{path:"/pages/:id/training",component:s.a,children:[{path:"",name:"Training",component:u.a,meta:{requiresAuth:!0}}]},{path:"/pages/:id/new-arrival",component:s.a,children:[{path:"",name:"NewArrival",component:l.a,meta:{requiresAuth:!0}}]},{path:"/pages/:id/customer",component:s.a,children:[{path:"",name:"Customer",component:p.a,meta:{requiresAuth:!0}}]},{path:"/pages/:id/customer-group",component:s.a,children:[{path:"",name:"CustomerGroup",component:d.a,meta:{requiresAuth:!0}}]}],mode:"history"});h.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?g.a.getters.isLoggedIn?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}),e.a=h},Zs2m:function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),i={baseURL:"https://dm-autobot.herokuapp.com",timeout:2e4};e.a=r.a.create(i)},bBZf:function(t,e,n){"use strict";var a=n("hWOV"),r=n("BU7s"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},cD0G:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),c=n("Zs2m"),o=n("Goo1"),u=n("IcnI"),l=this,p=function(){var t=s()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(o.a,{headers:{Authorization:"Bearer "+u.a.state.auth.shopToken}});case 3:if(e=t.sent,n=e.data,!n.meta.success){t.next=9;break}return t.abrupt("return",n.data);case 9:return t.abrupt("return",[]);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",[]);case 15:case"end":return t.stop()}},t,l,[[0,12]])}));return function(){return t.apply(this,arguments)}}()},cF05:function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("NYxO");e.a={computed:r()({},Object(i.c)({campaigns:"campaigns"}),Object(i.d)({loading:function(t){return t.campaign.loading}})),methods:r()({},Object(i.b)(["getAllCampaigns"]),{handleRowClicked:function(t){this.$router.push({name:"CampaignDetail",params:{campaign_id:1}})}}),created:function(){this.getAllCampaigns()}}},cZxn:function(t,e){},d2HW:function(t,e,n){"use strict";var a=n("PmVp");e.a={name:"PageDetailSideBar",components:{SideBar:a.a},data:function(){var t=this.$route.params.id;return{links:[{path:"/pages/"+t+"/campaigns/",icon:"el-menu-icon",title:"Chiến dịch"},{path:"/pages/"+t+"/training/",icon:"el-menu-icon",title:"Huấn luyện"},{path:"/pages/"+t+"/new-arrival/",icon:"el-menu-icon",title:"Hàng mới về"},{path:"/pages/"+t+"/customer/",icon:"el-menu-icon",title:"Khách hàng"},{path:"/pages/"+t+"/customer-group/",icon:"el-menu-icon",title:"Nhóm khách hàng"}],activePath:"/pages/"+t+"/campaigns/"}},methods:{getActivePath:function(){var t=this.$route.fullPath;for(var e in this.links){var n=this.links[e];if(t.includes(n.path))return n.path}return this.activePath}},mounted:function(){this.activePath=this.getActivePath()}}},d5kq:function(t,e,n){"use strict";function a(t){n("cZxn")}var r=n("nIg1"),i=n("ozAs"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-c0e57886",null);e.a=o.exports},eFpr:function(t,e,n){"use strict";var a,r=n("bOdI"),i=n.n(r),s=n("Du/2"),c=n("njC1"),o={customerGroups:[],loading:!0},u={customerGroups:function(t){return t.customerGroups}},l={getAllCustomerGroups:function(t){var e=t.commit;e(s.p),Object(c.a)().then(function(t){e(s.e),console.log(t);var n=[{groupName:"Beautiful girl",customerName:"chứa: Ngọc Trinh ",gender:"Nữ",like:"= 100",comments:"> 5",inbox:"< 100",lastInteraction:"= 3 ngày"},{groupName:"Beautiful girl",customerName:"chứa: Nguyễn Khánh Linh",gender:"Nữ",like:"< 100",comments:"",inbox:"",lastInteraction:">= 3 ngày"}];e(s.j,{customerGroups:n})})}},p=(a={},i()(a,s.j,function(t,e){var n=e.customerGroups;t.customerGroups=n}),i()(a,s.p,function(t){t.loading=!0}),i()(a,s.e,function(t){t.loading=!1}),a);e.a={state:o,getters:u,actions:l,mutations:p}},g2Qj:function(t,e,n){"use strict";var a=n("z11A"),r=n("nm2Q"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},hWOV:function(t,e,n){"use strict";e.a={name:"Campaign"}},hsGP:function(t,e){},kL4U:function(t,e){},kSw0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Campaign Detail")])])}],i={render:a,staticRenderFns:r};e.a=i},kx4n:function(t,e,n){"use strict";e.a={name:"PageItem",props:["page"],methods:{onViewPageDetail:function(){this.$emit("viewPageDetail",this.page._id)}}}},lO7g:function(t,e,n){"use strict";function a(t){n("kL4U")}var r=n("Fs8J"),i=n("2JcJ"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-06bce884",null);e.a=o.exports},nIg1:function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("NYxO");e.a={computed:r()({},Object(i.c)({customers:"customers"}),Object(i.d)({loading:function(t){return t.customer.loading}})),methods:r()({},Object(i.b)(["getAllCustomers"]),{handleRowClicked:function(t){console.log("Clicked row "+t)}}),created:function(){this.getAllCustomers()}}},"nKb+":function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("NYxO");e.a={name:"Login",computed:r()({},Object(i.c)({loading:"loading"}),Object(i.d)({hideLoginForm:function(t){return t.auth.checkingLoginStatus}})),methods:r()({},Object(i.b)(["checkLoginStatus","login"]),{loginClicked:function(){this.login().then(this.redirectOrShowError)},waitForFBToCheckLoginStatus:function(){var t=this;isFBLoaded?this.checkLoginStatus().then(this.redirectOrShowError):setTimeout(function(){t.waitForFBToCheckLoginStatus()},500)},redirectOrShowError:function(t){t&&this.$router.push({path:this.$route.query.redirect||"/pages"})}}),mounted:function(){this.waitForFBToCheckLoginStatus()}}},njC1:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),c=n("Zs2m"),o=n("Goo1"),u=n("IcnI"),l=this,p=function(){var t=s()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(o.c,{headers:{Authorization:"Bearer "+u.a.state.auth.shopToken}});case 3:if(e=t.sent,n=e.data,!n.meta.success){t.next=9;break}return t.abrupt("return",n.data);case 9:return t.abrupt("return",[]);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",[]);case 15:case"end":return t.stop()}},t,l,[[0,12]])}));return function(){return t.apply(this,arguments)}}()},nk5R:function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("NYxO"),s=n("vC3p");e.a={name:"My-Pages",components:{PageItem:s.a},computed:r()({},Object(i.c)({pages:"allPages"}),Object(i.d)({loading:function(t){return t.myPages.loading}})),methods:r()({},Object(i.b)(["getAllPages"]),{viewPageDetail:function(t){this.$router.push({name:"Campaign",params:{id:t}})}}),created:function(){this.getAllPages()}}},nm2Q:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("span",[t._v("New Arrival")])])}],i={render:a,staticRenderFns:r};e.a=i},ozAs:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wrapper"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.customers,stripe:"","row-style":{cursor:"pointer"},"default-sort":{prop:"date",order:"descending"},"empty-text":"Chưa có dữ liệu"},on:{"row-click":t.handleRowClicked}},[n("el-table-column",{attrs:{prop:"name",label:"Tên KH",sortable:"",fixed:"",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"like",label:"Like",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"comments",label:"Comments",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"inbox",label:"Inbox",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"batchNews",label:"Tin hàng loạt",sortable:"",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"read",label:"Đọc",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"clicks",label:"Clicks",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"react",label:"Tương tác lại",sortable:"",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"lastInteraction",label:"Lần tương tác cuối",sortable:"",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"Hành động",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("Inbox")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"}},[t._v("Remove")])]}}])})],1)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},p0QZ:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c});var a=n("//Fk"),r=n.n(a),i=function(t){if("connected"===t.status){return[t.authResponse.accessToken,t.authResponse.userID]}},s=function(){return new r.a(function(t){FB.getLoginStatus(function(e){t(i(e))})})},c=function(){return new r.a(function(t){FB.login(function(e){t(i(e))},{scope:"public_profile,email,manage_pages"})})}},srlt:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"navbar"},[n("PageDetailSideBar")],1),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)])},r=[],i={render:a,staticRenderFns:r};e.a=i},tvR6:function(t,e){},vC3p:function(t,e,n){"use strict";function a(t){n("hsGP")}var r=n("kx4n"),i=n("+2zc"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-44d96421",null);e.a=o.exports},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},xJsL:function(t,e,n){"use strict";function a(t){n("+GlM")}var r=n("nKb+"),i=n("QId/"),s=n("VU/8"),c=a,o=s(r.a,i.a,!1,c,"data-v-95165acc",null);e.a=o.exports},y2iq:function(t,e,n){"use strict";var a,r=n("bOdI"),i=n.n(r),s=n("Du/2"),c=n("cD0G"),o={campaigns:[],loading:!0},u={campaigns:function(t){return t.campaigns}},l={getAllCampaigns:function(t){var e=t.commit;e(s.n),Object(c.a)().then(function(t){e(s.c),console.log(t);var n=[{name:"Sinh nhật quán",type:"Gửi ngay",total:1e3,sent:1e3,read:950,clicked:900,interacted:500},{name:"Thứ 2 cuối mỗi tháng",type:"Gửi theo lịch",total:1e3,sent:1e3,read:950,clicked:900,interacted:500}];e(s.h,{campaigns:n})})}},p=(a={},i()(a,s.h,function(t,e){var n=e.campaigns;t.campaigns=n}),i()(a,s.n,function(t){t.loading=!0}),i()(a,s.c,function(t){t.loading=!1}),a);e.a={state:o,getters:u,actions:l,mutations:p}},z11A:function(t,e,n){"use strict";e.a={name:"NewArrival"}},zvck:function(t,e,n){"use strict";e.a={name:"SideBar",props:["items","active"]}}},["NHnr"]);
//# sourceMappingURL=app.5d367af5ed88b210ddc5.js.map
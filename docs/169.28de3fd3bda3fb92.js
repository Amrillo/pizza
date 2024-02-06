"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[169],{169:(q,s,c)=>{c.r(s),c.d(s,{ProductsModule:()=>w});var p=c(6895),i=c(8869),f=c(8505),t=c(4650),a=c(773);let d=(()=>{class o{constructor(){this.title=""}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product-title"]],template:function(e,r){1&e&&(t.TgZ(0,"h3",0),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.Oqu(r.title))},styles:[".product-title[_ngcontent-%COMP%]{font-size:18px;color:#382400;font-family:Mullerbold}"]}),o})(),l=(()=>{class o{constructor(){this.count=0}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),m=(()=>{class o{transform(e,r){let u=e;return r.forEach(E=>{u=u.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+E+"[\u0430-\u044f]*","g"),F=>F.toUpperCase())}),u}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"wordUpper",type:o,pure:!0}),o})();const C=["elem"];function h(o,n){if(1&o&&(t.TgZ(0,"div",8),t._UZ(1,"img",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.s9C("src",e.product.image,t.LSH)}}const P=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},x=function(o){return{product:o}},v=function(o){return["/products",o]};let Z=(()=>{class o{constructor(e){this.cartProductsService=e,this.addToCartEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",date:""}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-card"]],viewQuery:function(e,r){if(1&e&&(t.Gf(d,5),t.Gf(C,5)),2&e){let u;t.iGM(u=t.CRH())&&(r.titleComponent=u.first),t.iGM(u=t.CRH())&&(r.elem=u.first)}},inputs:{product:"product"},outputs:{addToCartEvent:"addToCartEvent"},features:[t._Bn([l])],decls:13,vars:16,consts:[[1,"product"],["class","product-image",4,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],[1,"button","btn-add-tocart",3,"routerLink","queryParams"],[1,"button","btn-white",3,"routerLink"],[1,"product-image"],["alt","product pizza",3,"src"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.YNc(1,h,2,1,"div",1),t._UZ(2,"custom-title",2),t.ALo(3,"uppercase"),t.TgZ(4,"p",3),t._uU(5),t.ALo(6,"wordUpper"),t.qZA(),t.TgZ(7,"div",4,5)(9,"button",6),t._uU(10,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(11,"button",7),t._uU(12,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",r.product.image),t.xp6(1),t.Q6J("title",t.lcZ(3,6,r.product.title)),t.xp6(3),t.Oqu(t.xi3(6,8,r.product.description,t.DdM(11,P))),t.xp6(4),t.Q6J("routerLink","/order")("queryParams",t.VKq(12,x,r.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(14,v,r.product.id)))},dependencies:[p.O5,i.rH,d,p.gd,m],styles:[".product[_ngcontent-%COMP%]{max-width:282px;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989833;text-align:center;padding:15px 20px;margin-top:24px}.product-image[_ngcontent-%COMP%]{height:180px;display:flex;justify-content:center;align-items:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product-text[_ngcontent-%COMP%]{font-size:14px;color:#181a1a;line-height:1.286;height:49px;margin:14px 0 15px}.product-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:242px;padding:17px;height:50px}.product-action[_ngcontent-%COMP%]   .button.btn-white[_ngcontent-%COMP%]{margin-top:10px}.product-action[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media screen and (max-width: 1229px){.product[_ngcontent-%COMP%]{margin:12px}}"]}),o})();function _(o,n){1&o&&t._UZ(0,"product-card",6),2&o&&t.Q6J("product",n.$implicit)}function y(o,n){1&o&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function T(o,n){if(1&o&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.s9C("src",e.product.image,t.LSH)}}const O=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},b=function(o){return{product:o}},U=[{path:"",component:(()=>{class o{constructor(e,r){this.productService=e,this.router=r,this.products=[],this.loading=!1}ngOnInit(){this.loading=!0,this.productService.getProducts().pipe((0,f.b)(()=>{this.loading=!1})).subscribe({next:e=>{this.loading=!1,this.products=e,console.log("next")},error:e=>{console.log(e),this.router.navigate(["/"])}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.M),t.Y36(i.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:7,vars:2,consts:[["id","products",1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"products-items"],[3,"product",4,"ngFor","ngForOf"],["class","laoder-bg",4,"ngIf"],[3,"product"],[1,"laoder-bg"],[1,"loader"]],template:function(e,r){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,_,1,1,"product-card",4),t.qZA(),t.YNc(6,y,2,0,"div",5),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[p.sg,p.O5,Z]}),o})()},{path:":id",component:(()=>{class o{constructor(e,r,u){this.activatedRoute=e,this.productService=r,this.router=u,this.subscription=null,this.product={id:0,image:"",title:"",description:"",date:""}}ngOnInit(){this.activatedRoute.params.subscribe(e=>{e.id&&(this.subscription=this.productService.getProduct(+e.id).subscribe({next:r=>{this.product=r},error:r=>{this.router.navigate(["/"])}}))})}ngOnDestroy(){this.subscription?.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.gz),t.Y36(a.M),t.Y36(i.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],decls:15,vars:13,consts:[[1,"products"],[1,"container"],[1,"products-title"],[1,"product-item"],["class","product-image",4,"ngIf"],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],[1,"button","btn-add-tocart",3,"routerLink","queryParams"],[1,"product-image"],["alt","product pizza",3,"src"]],template:function(e,r){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,T,2,1,"div",4),t._UZ(6,"custom-title",5),t.ALo(7,"uppercase"),t.TgZ(8,"p",6),t._uU(9),t.ALo(10,"wordUpper"),t.qZA(),t.TgZ(11,"div",7,8)(13,"button",9),t._uU(14,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&e&&(t.xp6(5),t.Q6J("ngIf",r.product.image),t.xp6(1),t.Q6J("title",t.lcZ(7,5,r.product.title)),t.xp6(3),t.Oqu(t.xi3(10,7,r.product.description,t.DdM(10,O))),t.xp6(4),t.Q6J("routerLink","/order")("queryParams",t.VKq(11,b,r.product.title)))},dependencies:[p.O5,i.rH,d,p.gd,m],styles:[".product-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.Bz.forChild(U),i.Bz]}),o})();var A=c(4466);let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,g,A.m,i.Bz,g]}),o})()}}]);
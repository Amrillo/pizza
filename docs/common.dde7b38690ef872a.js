"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[592],{773:(p,n,e)=>{e.d(n,{M:()=>a});var o=e(2340),c=e(4650),s=e(529);let a=(()=>{class r{constructor(t){this.http=t,this.products=[]}getProducts(){return this.http.get(o.N.apiURL+"pizzas")}getProduct(t){return this.http.get(o.N.apiURL+`pizzas?id=${t}`)}createOrder(t){return this.http.post(o.N.apiURL+"order-pizza",t)}}return r.\u0275fac=function(t){return new(t||r)(c.LFG(s.eN))},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);
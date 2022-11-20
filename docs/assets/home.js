import{d as t,S as s,_ as l,o,c,a as i,b as n}from"./index.js";const m=t({name:"Home",data(){return{single:null,multiple:null}},mounted(){this.single=new s({select:this.$refs.slimSingle}),this.multiple=new s({select:this.$refs.slimMulti}),setTimeout(()=>{this.single&&this.single.open(),setTimeout(()=>{this.single&&this.single.setSelected("best")},500),setTimeout(()=>{this.single&&this.single.setSelected("select")},1e3),setTimeout(()=>{this.single&&this.single.setSelected("ever")},1500),setTimeout(()=>{this.single&&this.single.close()},2e3),this.multiple&&this.multiple.open(),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best"])},500),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select"])},1e3),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select","ever"])},1500),setTimeout(()=>{this.multiple&&this.multiple.close()},2e3)},500)},unmounted(){this.single&&this.single.destroy(),this.multiple&&this.multiple.destroy()}}),e="/assets/check-mark.svg";const a={id:"home",class:"content"},h={class:"samples row"},r={class:"single"},d=i("h2",null,"Single Select 2",-1),u={ref:"slimSingle"},_=i("option",{"data-placeholder":"true"},null,-1),p=i("option",{value:"best"},"Best",-1),g=i("option",{value:"select"},"Select",-1),v=i("option",{value:"ever"},"Ever",-1),f=[_,p,g,v],S={class:"multi"},b=i("h2",null,"Multi Select",-1),T={ref:"slimMulti",multiple:""},k=i("option",{value:"best"},"Best",-1),y=i("option",{value:"select"},"Select",-1),$=i("option",{value:"ever"},"Ever",-1),B=[k,y,$],C=n('<div class="callouts"><div class="features"><div class="header"><h2>Features</h2></div><div class="row"><ul class="list"><li><img src="'+e+'"> No Dependencies</li><li><img src="'+e+'"> ~30kb - ~5kb gzip</li><li><img src="'+e+'"> Single Select</li><li><img src="'+e+'"> Multiple Select</li><li><img src="'+e+'"> Addable Options</li><li><img src="'+e+'"> Html Options</li><li><img src="'+e+'"> Settable Data</li><li><img src="'+e+'"> Callback Events</li><li><img src="'+e+'"> Placeholders</li></ul><ul class="list"><li><img src="'+e+'"> Advanced Search</li><li><img src="'+e+'"> Tabbable</li><li><img src="'+e+'"> Disable Options</li><li><img src="'+e+'"> Light Css</li><li><img src="'+e+'"> Light Color Scheme</li><li><img src="'+e+'"> Style Inheritance</li><li><img src="'+e+'"> Clean Animations</li><li><img src="'+e+'"> Performant</li><li><img src="'+e+'"> Typescript</li></ul></div></div></div>',1);function w(x,E,M,A,D,N){return o(),c("div",a,[i("div",h,[i("div",r,[d,i("select",u,f,512)]),i("div",S,[b,i("select",T,B,512)])]),C])}const H=l(m,[["render",w]]);export{H as default};

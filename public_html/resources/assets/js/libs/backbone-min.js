/* Boilerplate - v0.1.0 - 2015-08-23 */
!function(a){var b="object"==typeof self&&self.self==self&&self||"object"==typeof global&&global.global==global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(c,d,e){b.Backbone=a(b,e,c,d)});else if("undefined"!=typeof exports){var c,d=require("underscore");try{c=require("jquery")}catch(e){}a(b,exports,d,c)}else b.Backbone=a(b,{},b._,b.jQuery||b.Zepto||b.ender||b.$)}(function(a,b,c,d){var e=a.Backbone,f=Array.prototype.slice;b.VERSION="1.2.2",b.$=d,b.noConflict=function(){return a.Backbone=e,this},b.emulateHTTP=!1,b.emulateJSON=!1;var g=function(a,b,d){switch(a){case 1:return function(){return c[b](this[d])};case 2:return function(a){return c[b](this[d],a)};case 3:return function(a,e){return c[b](this[d],i(a,this),e)};case 4:return function(a,e,f){return c[b](this[d],i(a,this),e,f)};default:return function(){var a=f.call(arguments);return a.unshift(this[d]),c[b].apply(c,a)}}},h=function(a,b,d){c.each(b,function(b,e){c[e]&&(a.prototype[e]=g(b,e,d))})},i=function(a,b){return c.isFunction(a)?a:c.isObject(a)&&!b._isModel(a)?j(a):c.isString(a)?function(b){return b.get(a)}:a},j=function(a){var b=c.matches(a);return function(a){return b(a.attributes)}},k=b.Events={},l=/\s+/,m=function(a,b,d,e,f){var g,h=0;if(d&&"object"==typeof d){void 0!==e&&"context"in f&&void 0===f.context&&(f.context=e);for(g=c.keys(d);h<g.length;h++)b=m(a,b,g[h],d[g[h]],f)}else if(d&&l.test(d))for(g=d.split(l);h<g.length;h++)b=a(b,g[h],e,f);else b=a(b,d,e,f);return b};k.on=function(a,b,c){return n(this,a,b,c)};var n=function(a,b,c,d,e){if(a._events=m(o,a._events||{},b,c,{context:d,ctx:a,listening:e}),e){var f=a._listeners||(a._listeners={});f[e.id]=e}return a};k.listenTo=function(a,b,d){if(!a)return this;var e=a._listenId||(a._listenId=c.uniqueId("l")),f=this._listeningTo||(this._listeningTo={}),g=f[e];if(!g){var h=this._listenId||(this._listenId=c.uniqueId("l"));g=f[e]={obj:a,objId:e,id:h,listeningTo:f,count:0}}return n(a,b,d,this,g),this};var o=function(a,b,c,d){if(c){var e=a[b]||(a[b]=[]),f=d.context,g=d.ctx,h=d.listening;h&&h.count++,e.push({callback:c,context:f,ctx:f||g,listening:h})}return a};k.off=function(a,b,c){return this._events?(this._events=m(p,this._events,a,b,{context:c,listeners:this._listeners}),this):this},k.stopListening=function(a,b,d){var e=this._listeningTo;if(!e)return this;for(var f=a?[a._listenId]:c.keys(e),g=0;g<f.length;g++){var h=e[f[g]];if(!h)break;h.obj.off(b,d,this)}return c.isEmpty(e)&&(this._listeningTo=void 0),this};var p=function(a,b,d,e){if(a){var f,g=0,h=e.context,i=e.listeners;if(b||d||h){for(var j=b?[b]:c.keys(a);g<j.length;g++){b=j[g];var k=a[b];if(!k)break;for(var l=[],m=0;m<k.length;m++){var n=k[m];d&&d!==n.callback&&d!==n.callback._callback||h&&h!==n.context?l.push(n):(f=n.listening,f&&0===--f.count&&(delete i[f.id],delete f.listeningTo[f.objId]))}l.length?a[b]=l:delete a[b]}return c.size(a)?a:void 0}for(var o=c.keys(i);g<o.length;g++)f=i[o[g]],delete i[f.id],delete f.listeningTo[f.objId]}};k.once=function(a,b,d){var e=m(q,{},a,b,c.bind(this.off,this));return this.on(e,void 0,d)},k.listenToOnce=function(a,b,d){var e=m(q,{},b,d,c.bind(this.stopListening,this,a));return this.listenTo(a,e)};var q=function(a,b,d,e){if(d){var f=a[b]=c.once(function(){e(b,f),d.apply(this,arguments)});f._callback=d}return a};k.trigger=function(a){if(!this._events)return this;for(var b=Math.max(0,arguments.length-1),c=Array(b),d=0;b>d;d++)c[d]=arguments[d+1];return m(r,this._events,a,void 0,c),this};var r=function(a,b,c,d){if(a){var e=a[b],f=a.all;e&&f&&(f=f.slice()),e&&s(e,d),f&&s(f,[b].concat(d))}return a},s=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b);return}};k.bind=k.on,k.unbind=k.off,c.extend(b,k);var t=b.Model=function(a,b){var d=a||{};b||(b={}),this.cid=c.uniqueId(this.cidPrefix),this.attributes={},b.collection&&(this.collection=b.collection),b.parse&&(d=this.parse(d,b)||{}),d=c.defaults({},d,c.result(this,"defaults")),this.set(d,b),this.changed={},this.initialize.apply(this,arguments)};c.extend(t.prototype,k,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(a){return c.clone(this.attributes)},sync:function(){return b.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return c.escape(this.get(a))},has:function(a){return null!=this.get(a)},matches:function(a){return!!c.iteratee(a,this)(this.attributes)},set:function(a,b,d){if(null==a)return this;var e;if("object"==typeof a?(e=a,d=b):(e={})[a]=b,d||(d={}),!this._validate(e,d))return!1;var f=d.unset,g=d.silent,h=[],i=this._changing;this._changing=!0,i||(this._previousAttributes=c.clone(this.attributes),this.changed={});var j=this.attributes,k=this.changed,l=this._previousAttributes;for(var m in e)b=e[m],c.isEqual(j[m],b)||h.push(m),c.isEqual(l[m],b)?delete k[m]:k[m]=b,f?delete j[m]:j[m]=b;if(this.id=this.get(this.idAttribute),!g){h.length&&(this._pending=d);for(var n=0;n<h.length;n++)this.trigger("change:"+h[n],this,j[h[n]],d)}if(i)return this;if(!g)for(;this._pending;)d=this._pending,this._pending=!1,this.trigger("change",this,d);return this._pending=!1,this._changing=!1,this},unset:function(a,b){return this.set(a,void 0,c.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var d in this.attributes)b[d]=void 0;return this.set(b,c.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!c.isEmpty(this.changed):c.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var b=this._changing?this._previousAttributes:this.attributes,d={};for(var e in a){var f=a[e];c.isEqual(b[e],f)||(d[e]=f)}return c.size(d)?d:!1},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},fetch:function(a){a=c.extend({parse:!0},a);var b=this,d=a.success;return a.success=function(c){var e=a.parse?b.parse(c,a):c;return b.set(e,a)?(d&&d.call(a.context,b,c,a),void b.trigger("sync",b,c,a)):!1},P(this,a),this.sync("read",this,a)},save:function(a,b,d){var e;null==a||"object"==typeof a?(e=a,d=b):(e={})[a]=b,d=c.extend({validate:!0,parse:!0},d);var f=d.wait;if(e&&!f){if(!this.set(e,d))return!1}else if(!this._validate(e,d))return!1;var g=this,h=d.success,i=this.attributes;d.success=function(a){g.attributes=i;var b=d.parse?g.parse(a,d):a;return f&&(b=c.extend({},e,b)),b&&!g.set(b,d)?!1:(h&&h.call(d.context,g,a,d),void g.trigger("sync",g,a,d))},P(this,d),e&&f&&(this.attributes=c.extend({},i,e));var j=this.isNew()?"create":d.patch?"patch":"update";"patch"!==j||d.attrs||(d.attrs=e);var k=this.sync(j,this,d);return this.attributes=i,k},destroy:function(a){a=a?c.clone(a):{};var b=this,d=a.success,e=a.wait,f=function(){b.stopListening(),b.trigger("destroy",b,b.collection,a)};a.success=function(c){e&&f(),d&&d.call(a.context,b,c,a),b.isNew()||b.trigger("sync",b,c,a)};var g=!1;return this.isNew()?c.defer(a.success):(P(this,a),g=this.sync("delete",this,a)),e||f(),g},url:function(){var a=c.result(this,"urlRoot")||c.result(this.collection,"url")||O();if(this.isNew())return a;var b=this.get(this.idAttribute);return a.replace(/[^\/]$/,"$&/")+encodeURIComponent(b)},parse:function(a,b){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(a){return this._validate({},c.defaults({validate:!0},a))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validationError=this.validate(a,b)||null;return d?(this.trigger("invalid",this,d,c.extend(b,{validationError:d})),!1):!0}});var u={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(t,u,"attributes");var v=b.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),void 0!==b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,c.extend({silent:!0},b))},w={add:!0,remove:!0,merge:!0},x={add:!0,remove:!1},y=function(a,b,c){for(var d=Array(a.length-c),e=b.length,f=0;f<d.length;f++)d[f]=a[f+c];for(f=0;e>f;f++)a[f+c]=b[f];for(f=0;f<d.length;f++)a[f+e+c]=d[f]};c.extend(v.prototype,k,{model:t,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return b.sync.apply(this,arguments)},add:function(a,b){return this.set(a,c.extend({merge:!1},b,x))},remove:function(a,b){b=c.extend({},b);var d=!c.isArray(a);a=d?[a]:c.clone(a);var e=this._removeModels(a,b);return!b.silent&&e&&this.trigger("update",this,b),d?e[0]:e},set:function(a,b){if(null!=a){b=c.defaults({},b,w),b.parse&&!this._isModel(a)&&(a=this.parse(a,b));var d=!c.isArray(a);a=d?[a]:a.slice();var e=b.at;null!=e&&(e=+e),0>e&&(e+=this.length+1);for(var f,g=[],h=[],i=[],j={},k=b.add,l=b.merge,m=b.remove,n=!1,o=this.comparator&&null==e&&b.sort!==!1,p=c.isString(this.comparator)?this.comparator:null,q=0;q<a.length;q++){f=a[q];var r=this.get(f);if(r){if(l&&f!==r){var s=this._isModel(f)?f.attributes:f;b.parse&&(s=r.parse(s,b)),r.set(s,b),o&&!n&&(n=r.hasChanged(p))}j[r.cid]||(j[r.cid]=!0,g.push(r)),a[q]=r}else k&&(f=a[q]=this._prepareModel(f,b),f&&(h.push(f),this._addReference(f,b),j[f.cid]=!0,g.push(f)))}if(m){for(q=0;q<this.length;q++)f=this.models[q],j[f.cid]||i.push(f);i.length&&this._removeModels(i,b)}var t=!1,u=!o&&k&&m;if(g.length&&u?(t=this.length!=g.length||c.some(this.models,function(a,b){return a!==g[b]}),this.models.length=0,y(this.models,g,0),this.length=this.models.length):h.length&&(o&&(n=!0),y(this.models,h,null==e?this.length:e),this.length=this.models.length),n&&this.sort({silent:!0}),!b.silent){for(q=0;q<h.length;q++)null!=e&&(b.index=e+q),f=h[q],f.trigger("add",f,this,b);(n||t)&&this.trigger("sort",this,b),(h.length||i.length)&&this.trigger("update",this,b)}return d?a[0]:a}},reset:function(a,b){b=b?c.clone(b):{};for(var d=0;d<this.models.length;d++)this._removeReference(this.models[d],b);return b.previousModels=this.models,this._reset(),a=this.add(a,c.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),a},push:function(a,b){return this.add(a,c.extend({at:this.length},b))},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a)},unshift:function(a,b){return this.add(a,c.extend({at:0},b))},shift:function(a){var b=this.at(0);return this.remove(b,a)},slice:function(){return f.apply(this.models,arguments)},get:function(a){if(null==a)return void 0;var b=this.modelId(this._isModel(a)?a.attributes:a);return this._byId[a]||this._byId[b]||this._byId[a.cid]},at:function(a){return 0>a&&(a+=this.length),this.models[a]},where:function(a,b){return this[b?"find":"filter"](a)},findWhere:function(a){return this.where(a,!0)},sort:function(a){var b=this.comparator;if(!b)throw new Error("Cannot sort a set without a comparator");a||(a={});var d=b.length;return c.isFunction(b)&&(b=c.bind(b,this)),1===d||c.isString(b)?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("sort",this,a),this},pluck:function(a){return c.invoke(this.models,"get",a)},fetch:function(a){a=c.extend({parse:!0},a);var b=a.success,d=this;return a.success=function(c){var e=a.reset?"reset":"set";d[e](c,a),b&&b.call(a.context,d,c,a),d.trigger("sync",d,c,a)},P(this,a),this.sync("read",this,a)},create:function(a,b){b=b?c.clone(b):{};var d=b.wait;if(a=this._prepareModel(a,b),!a)return!1;d||this.add(a,b);var e=this,f=b.success;return b.success=function(a,b,c){d&&e.add(a,c),f&&f.call(c.context,a,b,c)},a.save(null,b),a},parse:function(a,b){return a},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(a){return a[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(a,b){if(this._isModel(a))return a.collection||(a.collection=this),a;b=b?c.clone(b):{},b.collection=this;var d=new this.model(a,b);return d.validationError?(this.trigger("invalid",this,d.validationError,b),!1):d},_removeModels:function(a,b){for(var c=[],d=0;d<a.length;d++){var e=this.get(a[d]);if(e){var f=this.indexOf(e);this.models.splice(f,1),this.length--,b.silent||(b.index=f,e.trigger("remove",e,this,b)),c.push(e),this._removeReference(e,b)}}return c.length?c:!1},_isModel:function(a){return a instanceof t},_addReference:function(a,b){this._byId[a.cid]=a;var c=this.modelId(a.attributes);null!=c&&(this._byId[c]=a),a.on("all",this._onModelEvent,this)},_removeReference:function(a,b){delete this._byId[a.cid];var c=this.modelId(a.attributes);null!=c&&delete this._byId[c],this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){if("add"!==a&&"remove"!==a||c===this){if("destroy"===a&&this.remove(b,d),"change"===a){var e=this.modelId(b.previousAttributes()),f=this.modelId(b.attributes);e!==f&&(null!=e&&delete this._byId[e],null!=f&&(this._byId[f]=b))}this.trigger.apply(this,arguments)}}});var z={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};h(v,z,"models");var A=b.View=function(a){this.cid=c.uniqueId("view"),c.extend(this,c.pick(a,C)),this._ensureElement(),this.initialize.apply(this,arguments)},B=/^(\S+)\s*(.*)$/,C=["model","collection","el","id","attributes","className","tagName","events"];c.extend(A.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(a){return this.undelegateEvents(),this._setElement(a),this.delegateEvents(),this},_setElement:function(a){this.$el=a instanceof b.$?a:b.$(a),this.el=this.$el[0]},delegateEvents:function(a){if(a||(a=c.result(this,"events")),!a)return this;this.undelegateEvents();for(var b in a){var d=a[b];if(c.isFunction(d)||(d=this[d]),d){var e=b.match(B);this.delegate(e[1],e[2],c.bind(d,this))}}return this},delegate:function(a,b,c){return this.$el.on(a+".delegateEvents"+this.cid,b,c),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(a,b,c){return this.$el.off(a+".delegateEvents"+this.cid,b,c),this},_createElement:function(a){return document.createElement(a)},_ensureElement:function(){if(this.el)this.setElement(c.result(this,"el"));else{var a=c.extend({},c.result(this,"attributes"));this.id&&(a.id=c.result(this,"id")),this.className&&(a["class"]=c.result(this,"className")),this.setElement(this._createElement(c.result(this,"tagName"))),this._setAttributes(a)}},_setAttributes:function(a){this.$el.attr(a)}}),b.sync=function(a,d,e){var f=D[a];c.defaults(e||(e={}),{emulateHTTP:b.emulateHTTP,emulateJSON:b.emulateJSON});var g={type:f,dataType:"json"};if(e.url||(g.url=c.result(d,"url")||O()),null!=e.data||!d||"create"!==a&&"update"!==a&&"patch"!==a||(g.contentType="application/json",g.data=JSON.stringify(e.attrs||d.toJSON(e))),e.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{}),e.emulateHTTP&&("PUT"===f||"DELETE"===f||"PATCH"===f)){g.type="POST",e.emulateJSON&&(g.data._method=f);var h=e.beforeSend;e.beforeSend=function(a){return a.setRequestHeader("X-HTTP-Method-Override",f),h?h.apply(this,arguments):void 0}}"GET"===g.type||e.emulateJSON||(g.processData=!1);var i=e.error;e.error=function(a,b,c){e.textStatus=b,e.errorThrown=c,i&&i.call(e.context,a,b,c)};var j=e.xhr=b.ajax(c.extend(g,e));return d.trigger("request",d,j,e),j};var D={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};b.ajax=function(){return b.$.ajax.apply(b.$,arguments)};var E=b.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},F=/\((.*?)\)/g,G=/(\(\?)?:\w+/g,H=/\*\w+/g,I=/[\-{}\[\]+?.,\\\^$|#\s]/g;c.extend(E.prototype,k,{initialize:function(){},route:function(a,d,e){c.isRegExp(a)||(a=this._routeToRegExp(a)),c.isFunction(d)&&(e=d,d=""),e||(e=this[d]);var f=this;return b.history.route(a,function(c){var g=f._extractParameters(a,c);f.execute(e,g,d)!==!1&&(f.trigger.apply(f,["route:"+d].concat(g)),f.trigger("route",d,g),b.history.trigger("route",f,d,g))}),this},execute:function(a,b,c){a&&a.apply(this,b)},navigate:function(a,c){return b.history.navigate(a,c),this},_bindRoutes:function(){if(this.routes){this.routes=c.result(this,"routes");for(var a,b=c.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){return a=a.replace(I,"\\$&").replace(F,"(?:$1)?").replace(G,function(a,b){return b?a:"([^/?]+)"}).replace(H,"([^?]*?)"),new RegExp("^"+a+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(a,b){var d=a.exec(b).slice(1);return c.map(d,function(a,b){return b===d.length-1?a||null:a?decodeURIComponent(a):null})}});var J=b.History=function(){this.handlers=[],this.checkUrl=c.bind(this.checkUrl,this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},K=/^[#\/]|\s+$/g,L=/^\/+|\/+$/g,M=/#.*$/;J.started=!1,c.extend(J.prototype,k,{interval:50,atRoot:function(){var a=this.location.pathname.replace(/[^\/]$/,"$&/");return a===this.root&&!this.getSearch()},matchRoot:function(){var a=this.decodeFragment(this.location.pathname),b=a.slice(0,this.root.length-1)+"/";return b===this.root},decodeFragment:function(a){return decodeURI(a.replace(/%25/g,"%2525"))},getSearch:function(){var a=this.location.href.replace(/#.*/,"").match(/\?.+/);return a?a[0]:""},getHash:function(a){var b=(a||this).location.href.match(/#(.*)$/);return b?b[1]:""},getPath:function(){var a=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===a.charAt(0)?a.slice(1):a},getFragment:function(a){return null==a&&(a=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),a.replace(K,"")},start:function(a){if(J.started)throw new Error("Backbone.history has already been started");if(J.started=!0,this.options=c.extend({root:"/"},this.options,a),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(L,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var b=this.root.slice(0,-1)||"/";return this.location.replace(b+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var d=document.body,e=d.insertBefore(this.iframe,d.firstChild).contentWindow;e.document.open(),e.document.close(),e.location.hash="#"+this.fragment}var f=window.addEventListener||function(a,b){return attachEvent("on"+a,b)};return this._usePushState?f("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?f("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.options.silent?void 0:this.loadUrl()},stop:function(){var a=window.removeEventListener||function(a,b){return detachEvent("on"+a,b)};this._usePushState?a("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&a("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),J.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();return b===this.fragment&&this.iframe&&(b=this.getHash(this.iframe.contentWindow)),b===this.fragment?!1:(this.iframe&&this.navigate(b),void this.loadUrl())},loadUrl:function(a){return this.matchRoot()?(a=this.fragment=this.getFragment(a),c.some(this.handlers,function(b){return b.route.test(a)?(b.callback(a),!0):void 0})):!1},navigate:function(a,b){if(!J.started)return!1;b&&b!==!0||(b={trigger:!!b}),a=this.getFragment(a||"");var c=this.root;(""===a||"?"===a.charAt(0))&&(c=c.slice(0,-1)||"/");var d=c+a;if(a=this.decodeFragment(a.replace(M,"")),this.fragment!==a){if(this.fragment=a,this._usePushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,d);else{if(!this._wantsHashChange)return this.location.assign(d);if(this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getHash(this.iframe.contentWindow)){var e=this.iframe.contentWindow;b.replace||(e.document.open(),e.document.close()),this._updateHash(e.location,a,b.replace)}}return b.trigger?this.loadUrl(a):void 0}},_updateHash:function(a,b,c){if(c){var d=a.href.replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),b.history=new J;var N=function(a,b){var d,e=this;d=a&&c.has(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)},c.extend(d,e,b);var f=function(){this.constructor=d};return f.prototype=e.prototype,d.prototype=new f,a&&c.extend(d.prototype,a),d.__super__=e.prototype,d};t.extend=v.extend=E.extend=A.extend=J.extend=N;var O=function(){throw new Error('A "url" property or function must be specified')},P=function(a,b){var c=b.error;b.error=function(d){c&&c.call(b.context,a,d,b),a.trigger("error",a,d,b)}};return b});
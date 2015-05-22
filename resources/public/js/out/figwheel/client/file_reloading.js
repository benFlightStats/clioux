// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__14574_SHARP_,p2__14575_SHARP_){
var and__4297__auto__ = p1__14574_SHARP_;
if(cljs.core.truth_(and__4297__auto__)){
return p2__14575_SHARP_;
} else {
return and__4297__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4309__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4309__auto__){
return or__4309__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4309__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4309__auto__){
return or__4309__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4309__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14576){
var map__14577 = p__14576;
var map__14577__$1 = ((cljs.core.seq_QMARK_.call(null,map__14577))?cljs.core.apply.call(null,cljs.core.hash_map,map__14577):map__14577);
var file = cljs.core.get.call(null,map__14577__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__14578){
var map__14579 = p__14578;
var map__14579__$1 = ((cljs.core.seq_QMARK_.call(null,map__14579))?cljs.core.apply.call(null,cljs.core.hash_map,map__14579):map__14579);
var namespace = cljs.core.get.call(null,map__14579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e14580){if((e14580 instanceof Error)){
var e = e14580;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14580;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__14582 = arguments.length;
switch (G__14582) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14584,callback){
var map__14586 = p__14584;
var map__14586__$1 = ((cljs.core.seq_QMARK_.call(null,map__14586))?cljs.core.apply.call(null,cljs.core.hash_map,map__14586):map__14586);
var file_msg = map__14586__$1;
var request_url = cljs.core.get.call(null,map__14586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14586,map__14586__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14586,map__14586__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14587){
var map__14589 = p__14587;
var map__14589__$1 = ((cljs.core.seq_QMARK_.call(null,map__14589))?cljs.core.apply.call(null,cljs.core.hash_map,map__14589):map__14589);
var file_msg = map__14589__$1;
var namespace = cljs.core.get.call(null,map__14589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__14589__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__4309__auto__ = meta_data;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4297__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4297__auto__){
var or__4309__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
var and__4297__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4297__auto____$1){
var or__4309__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4309__auto____$2){
return or__4309__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4297__auto____$1;
}
}
}
} else {
return and__4297__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14590,callback){
var map__14592 = p__14590;
var map__14592__$1 = ((cljs.core.seq_QMARK_.call(null,map__14592))?cljs.core.apply.call(null,cljs.core.hash_map,map__14592):map__14592);
var file_msg = map__14592__$1;
var request_url = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__8338__auto___14679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___14679,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___14679,out){
return (function (state_14661){
var state_val_14662 = (state_14661[(1)]);
if((state_val_14662 === (1))){
var inst_14639 = cljs.core.nth.call(null,files,(0),null);
var inst_14640 = cljs.core.nthnext.call(null,files,(1));
var inst_14641 = files;
var state_14661__$1 = (function (){var statearr_14663 = state_14661;
(statearr_14663[(7)] = inst_14641);

(statearr_14663[(8)] = inst_14640);

(statearr_14663[(9)] = inst_14639);

return statearr_14663;
})();
var statearr_14664_14680 = state_14661__$1;
(statearr_14664_14680[(2)] = null);

(statearr_14664_14680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14662 === (2))){
var inst_14644 = (state_14661[(10)]);
var inst_14641 = (state_14661[(7)]);
var inst_14644__$1 = cljs.core.nth.call(null,inst_14641,(0),null);
var inst_14645 = cljs.core.nthnext.call(null,inst_14641,(1));
var inst_14646 = (inst_14644__$1 == null);
var inst_14647 = cljs.core.not.call(null,inst_14646);
var state_14661__$1 = (function (){var statearr_14665 = state_14661;
(statearr_14665[(10)] = inst_14644__$1);

(statearr_14665[(11)] = inst_14645);

return statearr_14665;
})();
if(inst_14647){
var statearr_14666_14681 = state_14661__$1;
(statearr_14666_14681[(1)] = (4));

} else {
var statearr_14667_14682 = state_14661__$1;
(statearr_14667_14682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14662 === (3))){
var inst_14659 = (state_14661[(2)]);
var state_14661__$1 = state_14661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14661__$1,inst_14659);
} else {
if((state_val_14662 === (4))){
var inst_14644 = (state_14661[(10)]);
var inst_14649 = figwheel.client.file_reloading.reload_js_file.call(null,inst_14644);
var state_14661__$1 = state_14661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14661__$1,(7),inst_14649);
} else {
if((state_val_14662 === (5))){
var inst_14655 = cljs.core.async.close_BANG_.call(null,out);
var state_14661__$1 = state_14661;
var statearr_14668_14683 = state_14661__$1;
(statearr_14668_14683[(2)] = inst_14655);

(statearr_14668_14683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14662 === (6))){
var inst_14657 = (state_14661[(2)]);
var state_14661__$1 = state_14661;
var statearr_14669_14684 = state_14661__$1;
(statearr_14669_14684[(2)] = inst_14657);

(statearr_14669_14684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14662 === (7))){
var inst_14645 = (state_14661[(11)]);
var inst_14651 = (state_14661[(2)]);
var inst_14652 = cljs.core.async.put_BANG_.call(null,out,inst_14651);
var inst_14641 = inst_14645;
var state_14661__$1 = (function (){var statearr_14670 = state_14661;
(statearr_14670[(7)] = inst_14641);

(statearr_14670[(12)] = inst_14652);

return statearr_14670;
})();
var statearr_14671_14685 = state_14661__$1;
(statearr_14671_14685[(2)] = null);

(statearr_14671_14685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8338__auto___14679,out))
;
return ((function (switch__8276__auto__,c__8338__auto___14679,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____0 = (function (){
var statearr_14675 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14675[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__);

(statearr_14675[(1)] = (1));

return statearr_14675;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____1 = (function (state_14661){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object)){
var ex__8280__auto__ = e14676;
var statearr_14677_14686 = state_14661;
(statearr_14677_14686[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14687 = state_14661;
state_14661 = G__14687;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__ = function(state_14661){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____1.call(this,state_14661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___14679,out))
})();
var state__8340__auto__ = (function (){var statearr_14678 = f__8339__auto__.call(null);
(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___14679);

return statearr_14678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___14679,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__14688,p__14689){
var map__14692 = p__14688;
var map__14692__$1 = ((cljs.core.seq_QMARK_.call(null,map__14692))?cljs.core.apply.call(null,cljs.core.hash_map,map__14692):map__14692);
var opts = map__14692__$1;
var url_rewriter = cljs.core.get.call(null,map__14692__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__14693 = p__14689;
var map__14693__$1 = ((cljs.core.seq_QMARK_.call(null,map__14693))?cljs.core.apply.call(null,cljs.core.hash_map,map__14693):map__14693);
var file_msg = map__14693__$1;
var file = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__14694){
var map__14697 = p__14694;
var map__14697__$1 = ((cljs.core.seq_QMARK_.call(null,map__14697))?cljs.core.apply.call(null,cljs.core.hash_map,map__14697):map__14697);
var eval_body__$1 = cljs.core.get.call(null,map__14697__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__14697__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4297__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4297__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4297__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e14698){var e = e14698;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__14703,p__14704){
var map__14906 = p__14703;
var map__14906__$1 = ((cljs.core.seq_QMARK_.call(null,map__14906))?cljs.core.apply.call(null,cljs.core.hash_map,map__14906):map__14906);
var opts = map__14906__$1;
var before_jsload = cljs.core.get.call(null,map__14906__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__14906__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__14906__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__14907 = p__14704;
var map__14907__$1 = ((cljs.core.seq_QMARK_.call(null,map__14907))?cljs.core.apply.call(null,cljs.core.hash_map,map__14907):map__14907);
var msg = map__14907__$1;
var files = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (state_15032){
var state_val_15033 = (state_15032[(1)]);
if((state_val_15033 === (7))){
var inst_14919 = (state_15032[(7)]);
var inst_14920 = (state_15032[(8)]);
var inst_14921 = (state_15032[(9)]);
var inst_14922 = (state_15032[(10)]);
var inst_14927 = cljs.core._nth.call(null,inst_14920,inst_14922);
var inst_14928 = figwheel.client.file_reloading.eval_body.call(null,inst_14927);
var inst_14929 = (inst_14922 + (1));
var tmp15034 = inst_14919;
var tmp15035 = inst_14920;
var tmp15036 = inst_14921;
var inst_14919__$1 = tmp15034;
var inst_14920__$1 = tmp15035;
var inst_14921__$1 = tmp15036;
var inst_14922__$1 = inst_14929;
var state_15032__$1 = (function (){var statearr_15037 = state_15032;
(statearr_15037[(7)] = inst_14919__$1);

(statearr_15037[(11)] = inst_14928);

(statearr_15037[(8)] = inst_14920__$1);

(statearr_15037[(9)] = inst_14921__$1);

(statearr_15037[(10)] = inst_14922__$1);

return statearr_15037;
})();
var statearr_15038_15107 = state_15032__$1;
(statearr_15038_15107[(2)] = null);

(statearr_15038_15107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (20))){
var inst_14968 = (state_15032[(12)]);
var inst_14964 = (state_15032[(13)]);
var inst_14969 = (state_15032[(14)]);
var inst_14971 = (state_15032[(15)]);
var inst_14965 = (state_15032[(16)]);
var inst_14974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_14976 = (function (){var all_files = inst_14964;
var files_SINGLEQUOTE_ = inst_14965;
var res_SINGLEQUOTE_ = inst_14968;
var res = inst_14969;
var files_not_loaded = inst_14971;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14964,inst_14969,inst_14971,inst_14965,inst_14974,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p__14975){
var map__15039 = p__14975;
var map__15039__$1 = ((cljs.core.seq_QMARK_.call(null,map__15039))?cljs.core.apply.call(null,cljs.core.hash_map,map__15039):map__15039);
var namespace = cljs.core.get.call(null,map__15039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__15039__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14964,inst_14969,inst_14971,inst_14965,inst_14974,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14977 = cljs.core.map.call(null,inst_14976,inst_14969);
var inst_14978 = cljs.core.pr_str.call(null,inst_14977);
var inst_14979 = figwheel.client.utils.log.call(null,inst_14978);
var inst_14980 = (function (){var all_files = inst_14964;
var files_SINGLEQUOTE_ = inst_14965;
var res_SINGLEQUOTE_ = inst_14968;
var res = inst_14969;
var files_not_loaded = inst_14971;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14964,inst_14969,inst_14971,inst_14965,inst_14974,inst_14976,inst_14977,inst_14978,inst_14979,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14964,inst_14969,inst_14971,inst_14965,inst_14974,inst_14976,inst_14977,inst_14978,inst_14979,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14981 = setTimeout(inst_14980,(10));
var state_15032__$1 = (function (){var statearr_15040 = state_15032;
(statearr_15040[(17)] = inst_14974);

(statearr_15040[(18)] = inst_14979);

return statearr_15040;
})();
var statearr_15041_15108 = state_15032__$1;
(statearr_15041_15108[(2)] = inst_14981);

(statearr_15041_15108[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (27))){
var inst_14991 = (state_15032[(19)]);
var state_15032__$1 = state_15032;
var statearr_15042_15109 = state_15032__$1;
(statearr_15042_15109[(2)] = inst_14991);

(statearr_15042_15109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (1))){
var inst_14911 = (state_15032[(20)]);
var inst_14908 = before_jsload.call(null,files);
var inst_14909 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_14910 = (function (){return ((function (inst_14911,inst_14908,inst_14909,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p1__14699_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14699_SHARP_);
});
;})(inst_14911,inst_14908,inst_14909,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14911__$1 = cljs.core.filter.call(null,inst_14910,files);
var inst_14912 = cljs.core.not_empty.call(null,inst_14911__$1);
var state_15032__$1 = (function (){var statearr_15043 = state_15032;
(statearr_15043[(20)] = inst_14911__$1);

(statearr_15043[(21)] = inst_14908);

(statearr_15043[(22)] = inst_14909);

return statearr_15043;
})();
if(cljs.core.truth_(inst_14912)){
var statearr_15044_15110 = state_15032__$1;
(statearr_15044_15110[(1)] = (2));

} else {
var statearr_15045_15111 = state_15032__$1;
(statearr_15045_15111[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (24))){
var state_15032__$1 = state_15032;
var statearr_15046_15112 = state_15032__$1;
(statearr_15046_15112[(2)] = null);

(statearr_15046_15112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (4))){
var inst_14956 = (state_15032[(2)]);
var inst_14957 = (function (){return ((function (inst_14956,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p1__14700_SHARP_){
var and__4297__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__14700_SHARP_);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__14700_SHARP_));
} else {
return and__4297__auto__;
}
});
;})(inst_14956,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14958 = cljs.core.filter.call(null,inst_14957,files);
var state_15032__$1 = (function (){var statearr_15047 = state_15032;
(statearr_15047[(23)] = inst_14958);

(statearr_15047[(24)] = inst_14956);

return statearr_15047;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_15048_15113 = state_15032__$1;
(statearr_15048_15113[(1)] = (16));

} else {
var statearr_15049_15114 = state_15032__$1;
(statearr_15049_15114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (15))){
var inst_14946 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15050_15115 = state_15032__$1;
(statearr_15050_15115[(2)] = inst_14946);

(statearr_15050_15115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (21))){
var state_15032__$1 = state_15032;
var statearr_15051_15116 = state_15032__$1;
(statearr_15051_15116[(2)] = null);

(statearr_15051_15116[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (31))){
var inst_14999 = (state_15032[(25)]);
var inst_15009 = (state_15032[(2)]);
var inst_15010 = cljs.core.not_empty.call(null,inst_14999);
var state_15032__$1 = (function (){var statearr_15052 = state_15032;
(statearr_15052[(26)] = inst_15009);

return statearr_15052;
})();
if(cljs.core.truth_(inst_15010)){
var statearr_15053_15117 = state_15032__$1;
(statearr_15053_15117[(1)] = (32));

} else {
var statearr_15054_15118 = state_15032__$1;
(statearr_15054_15118[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (32))){
var inst_14999 = (state_15032[(25)]);
var inst_15012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14999);
var inst_15013 = cljs.core.pr_str.call(null,inst_15012);
var inst_15014 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_15013)].join('');
var inst_15015 = figwheel.client.utils.log.call(null,inst_15014);
var state_15032__$1 = state_15032;
var statearr_15055_15119 = state_15032__$1;
(statearr_15055_15119[(2)] = inst_15015);

(statearr_15055_15119[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (33))){
var state_15032__$1 = state_15032;
var statearr_15056_15120 = state_15032__$1;
(statearr_15056_15120[(2)] = null);

(statearr_15056_15120[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (13))){
var inst_14932 = (state_15032[(27)]);
var inst_14936 = cljs.core.chunk_first.call(null,inst_14932);
var inst_14937 = cljs.core.chunk_rest.call(null,inst_14932);
var inst_14938 = cljs.core.count.call(null,inst_14936);
var inst_14919 = inst_14937;
var inst_14920 = inst_14936;
var inst_14921 = inst_14938;
var inst_14922 = (0);
var state_15032__$1 = (function (){var statearr_15057 = state_15032;
(statearr_15057[(7)] = inst_14919);

(statearr_15057[(8)] = inst_14920);

(statearr_15057[(9)] = inst_14921);

(statearr_15057[(10)] = inst_14922);

return statearr_15057;
})();
var statearr_15058_15121 = state_15032__$1;
(statearr_15058_15121[(2)] = null);

(statearr_15058_15121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (22))){
var inst_14971 = (state_15032[(15)]);
var inst_14984 = (state_15032[(2)]);
var inst_14985 = cljs.core.not_empty.call(null,inst_14971);
var state_15032__$1 = (function (){var statearr_15059 = state_15032;
(statearr_15059[(28)] = inst_14984);

return statearr_15059;
})();
if(cljs.core.truth_(inst_14985)){
var statearr_15060_15122 = state_15032__$1;
(statearr_15060_15122[(1)] = (23));

} else {
var statearr_15061_15123 = state_15032__$1;
(statearr_15061_15123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (36))){
var state_15032__$1 = state_15032;
var statearr_15062_15124 = state_15032__$1;
(statearr_15062_15124[(2)] = null);

(statearr_15062_15124[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (29))){
var inst_14998 = (state_15032[(29)]);
var inst_15003 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14998);
var inst_15004 = cljs.core.pr_str.call(null,inst_15003);
var inst_15005 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_15004)].join('');
var inst_15006 = figwheel.client.utils.log.call(null,inst_15005);
var state_15032__$1 = state_15032;
var statearr_15063_15125 = state_15032__$1;
(statearr_15063_15125[(2)] = inst_15006);

(statearr_15063_15125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (6))){
var inst_14953 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15064_15126 = state_15032__$1;
(statearr_15064_15126[(2)] = inst_14953);

(statearr_15064_15126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (28))){
var inst_14998 = (state_15032[(29)]);
var inst_14997 = (state_15032[(2)]);
var inst_14998__$1 = cljs.core.get.call(null,inst_14997,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_14999 = cljs.core.get.call(null,inst_14997,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_15000 = cljs.core.get.call(null,inst_14997,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_15001 = cljs.core.not_empty.call(null,inst_14998__$1);
var state_15032__$1 = (function (){var statearr_15065 = state_15032;
(statearr_15065[(29)] = inst_14998__$1);

(statearr_15065[(30)] = inst_15000);

(statearr_15065[(25)] = inst_14999);

return statearr_15065;
})();
if(cljs.core.truth_(inst_15001)){
var statearr_15066_15127 = state_15032__$1;
(statearr_15066_15127[(1)] = (29));

} else {
var statearr_15067_15128 = state_15032__$1;
(statearr_15067_15128[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (25))){
var inst_15030 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15032__$1,inst_15030);
} else {
if((state_val_15033 === (34))){
var inst_15000 = (state_15032[(30)]);
var inst_15018 = (state_15032[(2)]);
var inst_15019 = cljs.core.not_empty.call(null,inst_15000);
var state_15032__$1 = (function (){var statearr_15068 = state_15032;
(statearr_15068[(31)] = inst_15018);

return statearr_15068;
})();
if(cljs.core.truth_(inst_15019)){
var statearr_15069_15129 = state_15032__$1;
(statearr_15069_15129[(1)] = (35));

} else {
var statearr_15070_15130 = state_15032__$1;
(statearr_15070_15130[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (17))){
var inst_14958 = (state_15032[(23)]);
var state_15032__$1 = state_15032;
var statearr_15071_15131 = state_15032__$1;
(statearr_15071_15131[(2)] = inst_14958);

(statearr_15071_15131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (3))){
var state_15032__$1 = state_15032;
var statearr_15072_15132 = state_15032__$1;
(statearr_15072_15132[(2)] = null);

(statearr_15072_15132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (12))){
var inst_14949 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15073_15133 = state_15032__$1;
(statearr_15073_15133[(2)] = inst_14949);

(statearr_15073_15133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (2))){
var inst_14911 = (state_15032[(20)]);
var inst_14918 = cljs.core.seq.call(null,inst_14911);
var inst_14919 = inst_14918;
var inst_14920 = null;
var inst_14921 = (0);
var inst_14922 = (0);
var state_15032__$1 = (function (){var statearr_15074 = state_15032;
(statearr_15074[(7)] = inst_14919);

(statearr_15074[(8)] = inst_14920);

(statearr_15074[(9)] = inst_14921);

(statearr_15074[(10)] = inst_14922);

return statearr_15074;
})();
var statearr_15075_15134 = state_15032__$1;
(statearr_15075_15134[(2)] = null);

(statearr_15075_15134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (23))){
var inst_14968 = (state_15032[(12)]);
var inst_14991 = (state_15032[(19)]);
var inst_14964 = (state_15032[(13)]);
var inst_14969 = (state_15032[(14)]);
var inst_14971 = (state_15032[(15)]);
var inst_14965 = (state_15032[(16)]);
var inst_14987 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_14990 = (function (){var all_files = inst_14964;
var files_SINGLEQUOTE_ = inst_14965;
var res_SINGLEQUOTE_ = inst_14968;
var res = inst_14969;
var files_not_loaded = inst_14971;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14991,inst_14964,inst_14969,inst_14971,inst_14965,inst_14987,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p__14989){
var map__15076 = p__14989;
var map__15076__$1 = ((cljs.core.seq_QMARK_.call(null,map__15076))?cljs.core.apply.call(null,cljs.core.hash_map,map__15076):map__15076);
var meta_data = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_14968,inst_14991,inst_14964,inst_14969,inst_14971,inst_14965,inst_14987,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14991__$1 = cljs.core.group_by.call(null,inst_14990,inst_14971);
var inst_14992 = cljs.core.seq_QMARK_.call(null,inst_14991__$1);
var state_15032__$1 = (function (){var statearr_15077 = state_15032;
(statearr_15077[(32)] = inst_14987);

(statearr_15077[(19)] = inst_14991__$1);

return statearr_15077;
})();
if(inst_14992){
var statearr_15078_15135 = state_15032__$1;
(statearr_15078_15135[(1)] = (26));

} else {
var statearr_15079_15136 = state_15032__$1;
(statearr_15079_15136[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (35))){
var inst_15000 = (state_15032[(30)]);
var inst_15021 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15000);
var inst_15022 = cljs.core.pr_str.call(null,inst_15021);
var inst_15023 = [cljs.core.str("not required: "),cljs.core.str(inst_15022)].join('');
var inst_15024 = figwheel.client.utils.log.call(null,inst_15023);
var state_15032__$1 = state_15032;
var statearr_15080_15137 = state_15032__$1;
(statearr_15080_15137[(2)] = inst_15024);

(statearr_15080_15137[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (19))){
var inst_14968 = (state_15032[(12)]);
var inst_14964 = (state_15032[(13)]);
var inst_14969 = (state_15032[(14)]);
var inst_14965 = (state_15032[(16)]);
var inst_14968__$1 = (state_15032[(2)]);
var inst_14969__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_14968__$1);
var inst_14970 = (function (){var all_files = inst_14964;
var files_SINGLEQUOTE_ = inst_14965;
var res_SINGLEQUOTE_ = inst_14968__$1;
var res = inst_14969__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_14968,inst_14964,inst_14969,inst_14965,inst_14968__$1,inst_14969__$1,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p1__14702_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__14702_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_14968,inst_14964,inst_14969,inst_14965,inst_14968__$1,inst_14969__$1,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14971 = cljs.core.filter.call(null,inst_14970,inst_14968__$1);
var inst_14972 = cljs.core.not_empty.call(null,inst_14969__$1);
var state_15032__$1 = (function (){var statearr_15081 = state_15032;
(statearr_15081[(12)] = inst_14968__$1);

(statearr_15081[(14)] = inst_14969__$1);

(statearr_15081[(15)] = inst_14971);

return statearr_15081;
})();
if(cljs.core.truth_(inst_14972)){
var statearr_15082_15138 = state_15032__$1;
(statearr_15082_15138[(1)] = (20));

} else {
var statearr_15083_15139 = state_15032__$1;
(statearr_15083_15139[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (11))){
var state_15032__$1 = state_15032;
var statearr_15084_15140 = state_15032__$1;
(statearr_15084_15140[(2)] = null);

(statearr_15084_15140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (9))){
var inst_14951 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15085_15141 = state_15032__$1;
(statearr_15085_15141[(2)] = inst_14951);

(statearr_15085_15141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (5))){
var inst_14921 = (state_15032[(9)]);
var inst_14922 = (state_15032[(10)]);
var inst_14924 = (inst_14922 < inst_14921);
var inst_14925 = inst_14924;
var state_15032__$1 = state_15032;
if(cljs.core.truth_(inst_14925)){
var statearr_15086_15142 = state_15032__$1;
(statearr_15086_15142[(1)] = (7));

} else {
var statearr_15087_15143 = state_15032__$1;
(statearr_15087_15143[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (14))){
var inst_14932 = (state_15032[(27)]);
var inst_14941 = cljs.core.first.call(null,inst_14932);
var inst_14942 = figwheel.client.file_reloading.eval_body.call(null,inst_14941);
var inst_14943 = cljs.core.next.call(null,inst_14932);
var inst_14919 = inst_14943;
var inst_14920 = null;
var inst_14921 = (0);
var inst_14922 = (0);
var state_15032__$1 = (function (){var statearr_15088 = state_15032;
(statearr_15088[(7)] = inst_14919);

(statearr_15088[(33)] = inst_14942);

(statearr_15088[(8)] = inst_14920);

(statearr_15088[(9)] = inst_14921);

(statearr_15088[(10)] = inst_14922);

return statearr_15088;
})();
var statearr_15089_15144 = state_15032__$1;
(statearr_15089_15144[(2)] = null);

(statearr_15089_15144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (26))){
var inst_14991 = (state_15032[(19)]);
var inst_14994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14991);
var state_15032__$1 = state_15032;
var statearr_15090_15145 = state_15032__$1;
(statearr_15090_15145[(2)] = inst_14994);

(statearr_15090_15145[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (16))){
var inst_14958 = (state_15032[(23)]);
var inst_14960 = (function (){var all_files = inst_14958;
return ((function (all_files,inst_14958,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function (p1__14701_SHARP_){
return cljs.core.update_in.call(null,p1__14701_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_14958,state_val_15033,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var inst_14961 = cljs.core.map.call(null,inst_14960,inst_14958);
var state_15032__$1 = state_15032;
var statearr_15091_15146 = state_15032__$1;
(statearr_15091_15146[(2)] = inst_14961);

(statearr_15091_15146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (30))){
var state_15032__$1 = state_15032;
var statearr_15092_15147 = state_15032__$1;
(statearr_15092_15147[(2)] = null);

(statearr_15092_15147[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (10))){
var inst_14932 = (state_15032[(27)]);
var inst_14934 = cljs.core.chunked_seq_QMARK_.call(null,inst_14932);
var state_15032__$1 = state_15032;
if(inst_14934){
var statearr_15093_15148 = state_15032__$1;
(statearr_15093_15148[(1)] = (13));

} else {
var statearr_15094_15149 = state_15032__$1;
(statearr_15094_15149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (18))){
var inst_14964 = (state_15032[(13)]);
var inst_14965 = (state_15032[(16)]);
var inst_14964__$1 = (state_15032[(2)]);
var inst_14965__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_14964__$1);
var inst_14966 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_14965__$1);
var state_15032__$1 = (function (){var statearr_15095 = state_15032;
(statearr_15095[(13)] = inst_14964__$1);

(statearr_15095[(16)] = inst_14965__$1);

return statearr_15095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15032__$1,(19),inst_14966);
} else {
if((state_val_15033 === (37))){
var inst_15027 = (state_15032[(2)]);
var state_15032__$1 = state_15032;
var statearr_15096_15150 = state_15032__$1;
(statearr_15096_15150[(2)] = inst_15027);

(statearr_15096_15150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15033 === (8))){
var inst_14919 = (state_15032[(7)]);
var inst_14932 = (state_15032[(27)]);
var inst_14932__$1 = cljs.core.seq.call(null,inst_14919);
var state_15032__$1 = (function (){var statearr_15097 = state_15032;
(statearr_15097[(27)] = inst_14932__$1);

return statearr_15097;
})();
if(inst_14932__$1){
var statearr_15098_15151 = state_15032__$1;
(statearr_15098_15151[(1)] = (10));

} else {
var statearr_15099_15152 = state_15032__$1;
(statearr_15099_15152[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
;
return ((function (switch__8276__auto__,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____0 = (function (){
var statearr_15103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15103[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__);

(statearr_15103[(1)] = (1));

return statearr_15103;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____1 = (function (state_15032){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15104){if((e15104 instanceof Object)){
var ex__8280__auto__ = e15104;
var statearr_15105_15153 = state_15032;
(statearr_15105_15153[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15154 = state_15032;
state_15032 = G__15154;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__ = function(state_15032){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____1.call(this,state_15032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
})();
var state__8340__auto__ = (function (){var statearr_15106 = f__8339__auto__.call(null);
(statearr_15106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_15106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__,map__14906,map__14906__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__14907,map__14907__$1,msg,files))
);

return c__8338__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15157,link){
var map__15159 = p__15157;
var map__15159__$1 = ((cljs.core.seq_QMARK_.call(null,map__15159))?cljs.core.apply.call(null,cljs.core.hash_map,map__15159):map__15159);
var file = cljs.core.get.call(null,map__15159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__15159,map__15159__$1,file){
return (function (p1__15155_SHARP_,p2__15156_SHARP_){
if(cljs.core._EQ_.call(null,p1__15155_SHARP_,p2__15156_SHARP_)){
return p1__15155_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__15159,map__15159__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15163){
var map__15164 = p__15163;
var map__15164__$1 = ((cljs.core.seq_QMARK_.call(null,map__15164))?cljs.core.apply.call(null,cljs.core.hash_map,map__15164):map__15164);
var match_length = cljs.core.get.call(null,map__15164__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__15164__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15160_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15160_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__15166 = arguments.length;
switch (G__15166) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__15168){
var map__15170 = p__15168;
var map__15170__$1 = ((cljs.core.seq_QMARK_.call(null,map__15170))?cljs.core.apply.call(null,cljs.core.hash_map,map__15170):map__15170);
var f_data = map__15170__$1;
var file = cljs.core.get.call(null,map__15170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__15170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4309__auto__ = request_url;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15171,files_msg){
var map__15193 = p__15171;
var map__15193__$1 = ((cljs.core.seq_QMARK_.call(null,map__15193))?cljs.core.apply.call(null,cljs.core.hash_map,map__15193):map__15193);
var opts = map__15193__$1;
var on_cssload = cljs.core.get.call(null,map__15193__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__15194_15214 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__15195_15215 = null;
var count__15196_15216 = (0);
var i__15197_15217 = (0);
while(true){
if((i__15197_15217 < count__15196_15216)){
var f_15218 = cljs.core._nth.call(null,chunk__15195_15215,i__15197_15217);
figwheel.client.file_reloading.reload_css_file.call(null,f_15218);

var G__15219 = seq__15194_15214;
var G__15220 = chunk__15195_15215;
var G__15221 = count__15196_15216;
var G__15222 = (i__15197_15217 + (1));
seq__15194_15214 = G__15219;
chunk__15195_15215 = G__15220;
count__15196_15216 = G__15221;
i__15197_15217 = G__15222;
continue;
} else {
var temp__4423__auto___15223 = cljs.core.seq.call(null,seq__15194_15214);
if(temp__4423__auto___15223){
var seq__15194_15224__$1 = temp__4423__auto___15223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15194_15224__$1)){
var c__5094__auto___15225 = cljs.core.chunk_first.call(null,seq__15194_15224__$1);
var G__15226 = cljs.core.chunk_rest.call(null,seq__15194_15224__$1);
var G__15227 = c__5094__auto___15225;
var G__15228 = cljs.core.count.call(null,c__5094__auto___15225);
var G__15229 = (0);
seq__15194_15214 = G__15226;
chunk__15195_15215 = G__15227;
count__15196_15216 = G__15228;
i__15197_15217 = G__15229;
continue;
} else {
var f_15230 = cljs.core.first.call(null,seq__15194_15224__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_15230);

var G__15231 = cljs.core.next.call(null,seq__15194_15224__$1);
var G__15232 = null;
var G__15233 = (0);
var G__15234 = (0);
seq__15194_15214 = G__15231;
chunk__15195_15215 = G__15232;
count__15196_15216 = G__15233;
i__15197_15217 = G__15234;
continue;
}
} else {
}
}
break;
}

var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload){
return (function (state_15204){
var state_val_15205 = (state_15204[(1)]);
if((state_val_15205 === (1))){
var inst_15198 = cljs.core.async.timeout.call(null,(100));
var state_15204__$1 = state_15204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15204__$1,(2),inst_15198);
} else {
if((state_val_15205 === (2))){
var inst_15200 = (state_15204[(2)]);
var inst_15201 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_15202 = on_cssload.call(null,inst_15201);
var state_15204__$1 = (function (){var statearr_15206 = state_15204;
(statearr_15206[(7)] = inst_15200);

return statearr_15206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15204__$1,inst_15202);
} else {
return null;
}
}
});})(c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload))
;
return ((function (switch__8276__auto__,c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____0 = (function (){
var statearr_15210 = [null,null,null,null,null,null,null,null];
(statearr_15210[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__);

(statearr_15210[(1)] = (1));

return statearr_15210;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____1 = (function (state_15204){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15211){if((e15211 instanceof Object)){
var ex__8280__auto__ = e15211;
var statearr_15212_15235 = state_15204;
(statearr_15212_15235[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15236 = state_15204;
state_15204 = G__15236;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__ = function(state_15204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____1.call(this,state_15204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload))
})();
var state__8340__auto__ = (function (){var statearr_15213 = f__8339__auto__.call(null);
(statearr_15213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_15213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__,map__15193,map__15193__$1,opts,on_cssload))
);

return c__8338__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
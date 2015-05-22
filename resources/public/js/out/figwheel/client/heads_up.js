// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5349__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5349__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__14265_14273 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__14266_14274 = null;
var count__14267_14275 = (0);
var i__14268_14276 = (0);
while(true){
if((i__14268_14276 < count__14267_14275)){
var k_14277 = cljs.core._nth.call(null,chunk__14266_14274,i__14268_14276);
e.setAttribute(cljs.core.name.call(null,k_14277),cljs.core.get.call(null,attrs,k_14277));

var G__14278 = seq__14265_14273;
var G__14279 = chunk__14266_14274;
var G__14280 = count__14267_14275;
var G__14281 = (i__14268_14276 + (1));
seq__14265_14273 = G__14278;
chunk__14266_14274 = G__14279;
count__14267_14275 = G__14280;
i__14268_14276 = G__14281;
continue;
} else {
var temp__4423__auto___14282 = cljs.core.seq.call(null,seq__14265_14273);
if(temp__4423__auto___14282){
var seq__14265_14283__$1 = temp__4423__auto___14282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14265_14283__$1)){
var c__5094__auto___14284 = cljs.core.chunk_first.call(null,seq__14265_14283__$1);
var G__14285 = cljs.core.chunk_rest.call(null,seq__14265_14283__$1);
var G__14286 = c__5094__auto___14284;
var G__14287 = cljs.core.count.call(null,c__5094__auto___14284);
var G__14288 = (0);
seq__14265_14273 = G__14285;
chunk__14266_14274 = G__14286;
count__14267_14275 = G__14287;
i__14268_14276 = G__14288;
continue;
} else {
var k_14289 = cljs.core.first.call(null,seq__14265_14283__$1);
e.setAttribute(cljs.core.name.call(null,k_14289),cljs.core.get.call(null,attrs,k_14289));

var G__14290 = cljs.core.next.call(null,seq__14265_14283__$1);
var G__14291 = null;
var G__14292 = (0);
var G__14293 = (0);
seq__14265_14273 = G__14290;
chunk__14266_14274 = G__14291;
count__14267_14275 = G__14292;
i__14268_14276 = G__14293;
continue;
}
} else {
}
}
break;
}

var seq__14269_14294 = cljs.core.seq.call(null,children);
var chunk__14270_14295 = null;
var count__14271_14296 = (0);
var i__14272_14297 = (0);
while(true){
if((i__14272_14297 < count__14271_14296)){
var ch_14298 = cljs.core._nth.call(null,chunk__14270_14295,i__14272_14297);
e.appendChild(ch_14298);

var G__14299 = seq__14269_14294;
var G__14300 = chunk__14270_14295;
var G__14301 = count__14271_14296;
var G__14302 = (i__14272_14297 + (1));
seq__14269_14294 = G__14299;
chunk__14270_14295 = G__14300;
count__14271_14296 = G__14301;
i__14272_14297 = G__14302;
continue;
} else {
var temp__4423__auto___14303 = cljs.core.seq.call(null,seq__14269_14294);
if(temp__4423__auto___14303){
var seq__14269_14304__$1 = temp__4423__auto___14303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14269_14304__$1)){
var c__5094__auto___14305 = cljs.core.chunk_first.call(null,seq__14269_14304__$1);
var G__14306 = cljs.core.chunk_rest.call(null,seq__14269_14304__$1);
var G__14307 = c__5094__auto___14305;
var G__14308 = cljs.core.count.call(null,c__5094__auto___14305);
var G__14309 = (0);
seq__14269_14294 = G__14306;
chunk__14270_14295 = G__14307;
count__14271_14296 = G__14308;
i__14272_14297 = G__14309;
continue;
} else {
var ch_14310 = cljs.core.first.call(null,seq__14269_14304__$1);
e.appendChild(ch_14310);

var G__14311 = cljs.core.next.call(null,seq__14269_14304__$1);
var G__14312 = null;
var G__14313 = (0);
var G__14314 = (0);
seq__14269_14294 = G__14311;
chunk__14270_14295 = G__14312;
count__14271_14296 = G__14313;
i__14272_14297 = G__14314;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq14262){
var G__14263 = cljs.core.first.call(null,seq14262);
var seq14262__$1 = cljs.core.next.call(null,seq14262);
var G__14264 = cljs.core.first.call(null,seq14262__$1);
var seq14262__$2 = cljs.core.next.call(null,seq14262__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__14263,G__14264,seq14262__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_14315 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_14315.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_14315.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_14315.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_14315);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__14316,st_map){
var map__14320 = p__14316;
var map__14320__$1 = ((cljs.core.seq_QMARK_.call(null,map__14320))?cljs.core.apply.call(null,cljs.core.hash_map,map__14320):map__14320);
var container_el = cljs.core.get.call(null,map__14320__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__14320,map__14320__$1,container_el){
return (function (p__14321){
var vec__14322 = p__14321;
var k = cljs.core.nth.call(null,vec__14322,(0),null);
var v = cljs.core.nth.call(null,vec__14322,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__14320,map__14320__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__14323,dom_str){
var map__14325 = p__14323;
var map__14325__$1 = ((cljs.core.seq_QMARK_.call(null,map__14325))?cljs.core.apply.call(null,cljs.core.hash_map,map__14325):map__14325);
var c = map__14325__$1;
var content_area_el = cljs.core.get.call(null,map__14325__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__14326){
var map__14328 = p__14326;
var map__14328__$1 = ((cljs.core.seq_QMARK_.call(null,map__14328))?cljs.core.apply.call(null,cljs.core.hash_map,map__14328):map__14328);
var content_area_el = cljs.core.get.call(null,map__14328__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_14370){
var state_val_14371 = (state_14370[(1)]);
if((state_val_14371 === (1))){
var inst_14355 = (state_14370[(7)]);
var inst_14355__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14356 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14357 = ["10px","10px","100%","68px","1.0"];
var inst_14358 = cljs.core.PersistentHashMap.fromArrays(inst_14356,inst_14357);
var inst_14359 = cljs.core.merge.call(null,inst_14358,style);
var inst_14360 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14355__$1,inst_14359);
var inst_14361 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14355__$1,msg);
var inst_14362 = cljs.core.async.timeout.call(null,(300));
var state_14370__$1 = (function (){var statearr_14372 = state_14370;
(statearr_14372[(7)] = inst_14355__$1);

(statearr_14372[(8)] = inst_14360);

(statearr_14372[(9)] = inst_14361);

return statearr_14372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14370__$1,(2),inst_14362);
} else {
if((state_val_14371 === (2))){
var inst_14355 = (state_14370[(7)]);
var inst_14364 = (state_14370[(2)]);
var inst_14365 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_14366 = ["auto"];
var inst_14367 = cljs.core.PersistentHashMap.fromArrays(inst_14365,inst_14366);
var inst_14368 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14355,inst_14367);
var state_14370__$1 = (function (){var statearr_14373 = state_14370;
(statearr_14373[(10)] = inst_14364);

return statearr_14373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14370__$1,inst_14368);
} else {
return null;
}
}
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____0 = (function (){
var statearr_14377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14377[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__);

(statearr_14377[(1)] = (1));

return statearr_14377;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____1 = (function (state_14370){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14378){if((e14378 instanceof Object)){
var ex__8280__auto__ = e14378;
var statearr_14379_14381 = state_14370;
(statearr_14379_14381[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14382 = state_14370;
state_14370 = G__14382;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__ = function(state_14370){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____1.call(this,state_14370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_14380 = f__8339__auto__.call(null);
(statearr_14380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_14380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__14384 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__14384,(0),null);
var ln = cljs.core.nth.call(null,vec__14384,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__14387 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__14387,(0),null);
var file_line = cljs.core.nth.call(null,vec__14387,(1),null);
var file_column = cljs.core.nth.call(null,vec__14387,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__14387,file_name,file_line,file_column){
return (function (p1__14385_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__14385_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__14387,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4309__auto__ = file_line;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var and__4297__auto__ = cause;
if(cljs.core.truth_(and__4297__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4297__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__14389 = figwheel.client.heads_up.ensure_container.call(null);
var map__14389__$1 = ((cljs.core.seq_QMARK_.call(null,map__14389))?cljs.core.apply.call(null,cljs.core.hash_map,map__14389):map__14389);
var content_area_el = cljs.core.get.call(null,map__14389__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_14436){
var state_val_14437 = (state_14436[(1)]);
if((state_val_14437 === (1))){
var inst_14419 = (state_14436[(7)]);
var inst_14419__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_14420 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_14421 = ["0.0"];
var inst_14422 = cljs.core.PersistentHashMap.fromArrays(inst_14420,inst_14421);
var inst_14423 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14419__$1,inst_14422);
var inst_14424 = cljs.core.async.timeout.call(null,(300));
var state_14436__$1 = (function (){var statearr_14438 = state_14436;
(statearr_14438[(8)] = inst_14423);

(statearr_14438[(7)] = inst_14419__$1);

return statearr_14438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14436__$1,(2),inst_14424);
} else {
if((state_val_14437 === (2))){
var inst_14419 = (state_14436[(7)]);
var inst_14426 = (state_14436[(2)]);
var inst_14427 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_14428 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_14429 = cljs.core.PersistentHashMap.fromArrays(inst_14427,inst_14428);
var inst_14430 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_14419,inst_14429);
var inst_14431 = cljs.core.async.timeout.call(null,(200));
var state_14436__$1 = (function (){var statearr_14439 = state_14436;
(statearr_14439[(9)] = inst_14426);

(statearr_14439[(10)] = inst_14430);

return statearr_14439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14436__$1,(3),inst_14431);
} else {
if((state_val_14437 === (3))){
var inst_14419 = (state_14436[(7)]);
var inst_14433 = (state_14436[(2)]);
var inst_14434 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_14419,"");
var state_14436__$1 = (function (){var statearr_14440 = state_14436;
(statearr_14440[(11)] = inst_14433);

return statearr_14440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14436__$1,inst_14434);
} else {
return null;
}
}
}
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__8277__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__8277__auto____0 = (function (){
var statearr_14444 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14444[(0)] = figwheel$client$heads_up$clear_$_state_machine__8277__auto__);

(statearr_14444[(1)] = (1));

return statearr_14444;
});
var figwheel$client$heads_up$clear_$_state_machine__8277__auto____1 = (function (state_14436){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14445){if((e14445 instanceof Object)){
var ex__8280__auto__ = e14445;
var statearr_14446_14448 = state_14436;
(statearr_14446_14448[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14449 = state_14436;
state_14436 = G__14449;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__8277__auto__ = function(state_14436){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__8277__auto____1.call(this,state_14436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__8277__auto____0;
figwheel$client$heads_up$clear_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__8277__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_14447 = f__8339__auto__.call(null);
(statearr_14447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_14447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_14481){
var state_val_14482 = (state_14481[(1)]);
if((state_val_14482 === (1))){
var inst_14471 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(2),inst_14471);
} else {
if((state_val_14482 === (2))){
var inst_14473 = (state_14481[(2)]);
var inst_14474 = cljs.core.async.timeout.call(null,(400));
var state_14481__$1 = (function (){var statearr_14483 = state_14481;
(statearr_14483[(7)] = inst_14473);

return statearr_14483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(3),inst_14474);
} else {
if((state_val_14482 === (3))){
var inst_14476 = (state_14481[(2)]);
var inst_14477 = figwheel.client.heads_up.clear.call(null);
var state_14481__$1 = (function (){var statearr_14484 = state_14481;
(statearr_14484[(8)] = inst_14476);

return statearr_14484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14481__$1,(4),inst_14477);
} else {
if((state_val_14482 === (4))){
var inst_14479 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14481__$1,inst_14479);
} else {
return null;
}
}
}
}
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____0 = (function (){
var statearr_14488 = [null,null,null,null,null,null,null,null,null];
(statearr_14488[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__);

(statearr_14488[(1)] = (1));

return statearr_14488;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____1 = (function (state_14481){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14489){if((e14489 instanceof Object)){
var ex__8280__auto__ = e14489;
var statearr_14490_14492 = state_14481;
(statearr_14490_14492[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14493 = state_14481;
state_14481 = G__14493;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__ = function(state_14481){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____1.call(this,state_14481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_14491 = f__8339__auto__.call(null);
(statearr_14491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_14491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map
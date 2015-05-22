// Compiled by ClojureScript 0.0-3291 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__13443){
var map__13449 = p__13443;
var map__13449__$1 = ((cljs.core.seq_QMARK_.call(null,map__13449))?cljs.core.apply.call(null,cljs.core.hash_map,map__13449):map__13449);
var replacement_transformers = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__13449,map__13449__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_13450 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__13451 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_13450,map__13449,map__13449__$1,replacement_transformers,custom_transformers){
return (function (p__13452,transformer){
var vec__13453 = p__13452;
var text = cljs.core.nth.call(null,vec__13453,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__13453,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_13450,map__13449,map__13449__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4309__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__13451,(0),null);
var new_state = cljs.core.nth.call(null,vec__13451,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_13450;
}});
;})(map__13449,map__13449__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq13454){
var G__13455 = cljs.core.first.call(null,seq13454);
var seq13454__$1 = cljs.core.next.call(null,seq13454);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__13455,seq13454__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__13460_13464 = cljs.core.seq.call(null,lines);
var chunk__13461_13465 = null;
var count__13462_13466 = (0);
var i__13463_13467 = (0);
while(true){
if((i__13463_13467 < count__13462_13466)){
var line_13468 = cljs.core._nth.call(null,chunk__13461_13465,i__13463_13467);
markdown.transformers.parse_reference_link.call(null,line_13468,references);

var G__13469 = seq__13460_13464;
var G__13470 = chunk__13461_13465;
var G__13471 = count__13462_13466;
var G__13472 = (i__13463_13467 + (1));
seq__13460_13464 = G__13469;
chunk__13461_13465 = G__13470;
count__13462_13466 = G__13471;
i__13463_13467 = G__13472;
continue;
} else {
var temp__4423__auto___13473 = cljs.core.seq.call(null,seq__13460_13464);
if(temp__4423__auto___13473){
var seq__13460_13474__$1 = temp__4423__auto___13473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13460_13474__$1)){
var c__5094__auto___13475 = cljs.core.chunk_first.call(null,seq__13460_13474__$1);
var G__13476 = cljs.core.chunk_rest.call(null,seq__13460_13474__$1);
var G__13477 = c__5094__auto___13475;
var G__13478 = cljs.core.count.call(null,c__5094__auto___13475);
var G__13479 = (0);
seq__13460_13464 = G__13476;
chunk__13461_13465 = G__13477;
count__13462_13466 = G__13478;
i__13463_13467 = G__13479;
continue;
} else {
var line_13480 = cljs.core.first.call(null,seq__13460_13474__$1);
markdown.transformers.parse_reference_link.call(null,line_13480,references);

var G__13481 = cljs.core.next.call(null,seq__13460_13474__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13460_13464 = G__13481;
chunk__13461_13465 = G__13482;
count__13462_13466 = G__13483;
i__13463_13467 = G__13484;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_13487 = markdown.transformers._STAR_substring_STAR_;
var formatter13488 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_13487,formatter13488){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_13487,formatter13488))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__13490_13493 = lines;
var vec__13491_13494 = G__13490_13493;
var line_13495 = cljs.core.nth.call(null,vec__13491_13494,(0),null);
var more_13496 = cljs.core.nthnext.call(null,vec__13491_13494,(1));
var state_13497 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__13490_13498__$1 = G__13490_13493;
var state_13499__$1 = state_13497;
while(true){
var vec__13492_13500 = G__13490_13498__$1;
var line_13501__$1 = cljs.core.nth.call(null,vec__13492_13500,(0),null);
var more_13502__$1 = cljs.core.nthnext.call(null,vec__13492_13500,(1));
var state_13503__$2 = state_13499__$1;
var state_13504__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_13503__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_13503__$2),cljs.core.first.call(null,more_13502__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_13503__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_13503__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_13502__$1))){
var G__13505 = more_13502__$1;
var G__13506 = cljs.core.assoc.call(null,transformer.call(null,html,line_13501__$1,cljs.core.first.call(null,more_13502__$1),state_13504__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_13501__$1));
G__13490_13498__$1 = G__13505;
state_13499__$1 = G__13506;
continue;
} else {
transformer.call(null,html,line_13501__$1,"",cljs.core.assoc.call(null,state_13504__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter13488;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_13487;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq13485){
var G__13486 = cljs.core.first.call(null,seq13485);
var seq13485__$1 = cljs.core.next.call(null,seq13485);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__13486,seq13485__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq13507){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13507));
});

//# sourceMappingURL=core.js.map
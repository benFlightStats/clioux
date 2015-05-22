// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14508_14520 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14509_14521 = null;
var count__14510_14522 = (0);
var i__14511_14523 = (0);
while(true){
if((i__14511_14523 < count__14510_14522)){
var f_14524 = cljs.core._nth.call(null,chunk__14509_14521,i__14511_14523);
cljs.core.println.call(null,"  ",f_14524);

var G__14525 = seq__14508_14520;
var G__14526 = chunk__14509_14521;
var G__14527 = count__14510_14522;
var G__14528 = (i__14511_14523 + (1));
seq__14508_14520 = G__14525;
chunk__14509_14521 = G__14526;
count__14510_14522 = G__14527;
i__14511_14523 = G__14528;
continue;
} else {
var temp__4423__auto___14529 = cljs.core.seq.call(null,seq__14508_14520);
if(temp__4423__auto___14529){
var seq__14508_14530__$1 = temp__4423__auto___14529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14508_14530__$1)){
var c__5094__auto___14531 = cljs.core.chunk_first.call(null,seq__14508_14530__$1);
var G__14532 = cljs.core.chunk_rest.call(null,seq__14508_14530__$1);
var G__14533 = c__5094__auto___14531;
var G__14534 = cljs.core.count.call(null,c__5094__auto___14531);
var G__14535 = (0);
seq__14508_14520 = G__14532;
chunk__14509_14521 = G__14533;
count__14510_14522 = G__14534;
i__14511_14523 = G__14535;
continue;
} else {
var f_14536 = cljs.core.first.call(null,seq__14508_14530__$1);
cljs.core.println.call(null,"  ",f_14536);

var G__14537 = cljs.core.next.call(null,seq__14508_14530__$1);
var G__14538 = null;
var G__14539 = (0);
var G__14540 = (0);
seq__14508_14520 = G__14537;
chunk__14509_14521 = G__14538;
count__14510_14522 = G__14539;
i__14511_14523 = G__14540;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14541 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4309__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14541);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14541)))?cljs.core.second.call(null,arglists_14541):arglists_14541));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14513 = null;
var count__14514 = (0);
var i__14515 = (0);
while(true){
if((i__14515 < count__14514)){
var vec__14516 = cljs.core._nth.call(null,chunk__14513,i__14515);
var name = cljs.core.nth.call(null,vec__14516,(0),null);
var map__14517 = cljs.core.nth.call(null,vec__14516,(1),null);
var map__14517__$1 = ((cljs.core.seq_QMARK_.call(null,map__14517))?cljs.core.apply.call(null,cljs.core.hash_map,map__14517):map__14517);
var doc = cljs.core.get.call(null,map__14517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14542 = seq__14512;
var G__14543 = chunk__14513;
var G__14544 = count__14514;
var G__14545 = (i__14515 + (1));
seq__14512 = G__14542;
chunk__14513 = G__14543;
count__14514 = G__14544;
i__14515 = G__14545;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__14512);
if(temp__4423__auto__){
var seq__14512__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14512__$1)){
var c__5094__auto__ = cljs.core.chunk_first.call(null,seq__14512__$1);
var G__14546 = cljs.core.chunk_rest.call(null,seq__14512__$1);
var G__14547 = c__5094__auto__;
var G__14548 = cljs.core.count.call(null,c__5094__auto__);
var G__14549 = (0);
seq__14512 = G__14546;
chunk__14513 = G__14547;
count__14514 = G__14548;
i__14515 = G__14549;
continue;
} else {
var vec__14518 = cljs.core.first.call(null,seq__14512__$1);
var name = cljs.core.nth.call(null,vec__14518,(0),null);
var map__14519 = cljs.core.nth.call(null,vec__14518,(1),null);
var map__14519__$1 = ((cljs.core.seq_QMARK_.call(null,map__14519))?cljs.core.apply.call(null,cljs.core.hash_map,map__14519):map__14519);
var doc = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14550 = cljs.core.next.call(null,seq__14512__$1);
var G__14551 = null;
var G__14552 = (0);
var G__14553 = (0);
seq__14512 = G__14550;
chunk__14513 = G__14551;
count__14514 = G__14552;
i__14515 = G__14553;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
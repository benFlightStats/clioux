// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13615__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__13615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13616__i = 0, G__13616__a = new Array(arguments.length -  0);
while (G__13616__i < G__13616__a.length) {G__13616__a[G__13616__i] = arguments[G__13616__i + 0]; ++G__13616__i;}
  args = new cljs.core.IndexedSeq(G__13616__a,0);
} 
return G__13615__delegate.call(this,args);};
G__13615.cljs$lang$maxFixedArity = 0;
G__13615.cljs$lang$applyTo = (function (arglist__13617){
var args = cljs.core.seq(arglist__13617);
return G__13615__delegate(args);
});
G__13615.cljs$core$IFn$_invoke$arity$variadic = G__13615__delegate;
return G__13615;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__13618){
var map__13620 = p__13618;
var map__13620__$1 = ((cljs.core.seq_QMARK_.call(null,map__13620))?cljs.core.apply.call(null,cljs.core.hash_map,map__13620):map__13620);
var message = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__13620__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4309__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4297__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4297__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4297__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__8338__auto___13749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___13749,ch){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___13749,ch){
return (function (state_13723){
var state_val_13724 = (state_13723[(1)]);
if((state_val_13724 === (7))){
var inst_13719 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
var statearr_13725_13750 = state_13723__$1;
(statearr_13725_13750[(2)] = inst_13719);

(statearr_13725_13750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (1))){
var state_13723__$1 = state_13723;
var statearr_13726_13751 = state_13723__$1;
(statearr_13726_13751[(2)] = null);

(statearr_13726_13751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (4))){
var inst_13687 = (state_13723[(7)]);
var inst_13687__$1 = (state_13723[(2)]);
var state_13723__$1 = (function (){var statearr_13727 = state_13723;
(statearr_13727[(7)] = inst_13687__$1);

return statearr_13727;
})();
if(cljs.core.truth_(inst_13687__$1)){
var statearr_13728_13752 = state_13723__$1;
(statearr_13728_13752[(1)] = (5));

} else {
var statearr_13729_13753 = state_13723__$1;
(statearr_13729_13753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (13))){
var state_13723__$1 = state_13723;
var statearr_13730_13754 = state_13723__$1;
(statearr_13730_13754[(2)] = null);

(statearr_13730_13754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (6))){
var state_13723__$1 = state_13723;
var statearr_13731_13755 = state_13723__$1;
(statearr_13731_13755[(2)] = null);

(statearr_13731_13755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (3))){
var inst_13721 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13723__$1,inst_13721);
} else {
if((state_val_13724 === (12))){
var inst_13694 = (state_13723[(8)]);
var inst_13707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_13694);
var inst_13708 = cljs.core.first.call(null,inst_13707);
var inst_13709 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_13708);
var inst_13710 = console.warn("Figwheel: Not loading code with warnings - ",inst_13709);
var state_13723__$1 = state_13723;
var statearr_13732_13756 = state_13723__$1;
(statearr_13732_13756[(2)] = inst_13710);

(statearr_13732_13756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (2))){
var state_13723__$1 = state_13723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13723__$1,(4),ch);
} else {
if((state_val_13724 === (11))){
var inst_13703 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
var statearr_13733_13757 = state_13723__$1;
(statearr_13733_13757[(2)] = inst_13703);

(statearr_13733_13757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (9))){
var inst_13693 = (state_13723[(9)]);
var inst_13705 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_13693,opts);
var state_13723__$1 = state_13723;
if(cljs.core.truth_(inst_13705)){
var statearr_13734_13758 = state_13723__$1;
(statearr_13734_13758[(1)] = (12));

} else {
var statearr_13735_13759 = state_13723__$1;
(statearr_13735_13759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (5))){
var inst_13693 = (state_13723[(9)]);
var inst_13687 = (state_13723[(7)]);
var inst_13689 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_13690 = (new cljs.core.PersistentArrayMap(null,2,inst_13689,null));
var inst_13691 = (new cljs.core.PersistentHashSet(null,inst_13690,null));
var inst_13692 = figwheel.client.focus_msgs.call(null,inst_13691,inst_13687);
var inst_13693__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_13692);
var inst_13694 = cljs.core.first.call(null,inst_13692);
var inst_13695 = figwheel.client.reload_file_state_QMARK_.call(null,inst_13693__$1,opts);
var state_13723__$1 = (function (){var statearr_13736 = state_13723;
(statearr_13736[(9)] = inst_13693__$1);

(statearr_13736[(8)] = inst_13694);

return statearr_13736;
})();
if(cljs.core.truth_(inst_13695)){
var statearr_13737_13760 = state_13723__$1;
(statearr_13737_13760[(1)] = (8));

} else {
var statearr_13738_13761 = state_13723__$1;
(statearr_13738_13761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (14))){
var inst_13713 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
var statearr_13739_13762 = state_13723__$1;
(statearr_13739_13762[(2)] = inst_13713);

(statearr_13739_13762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (10))){
var inst_13715 = (state_13723[(2)]);
var state_13723__$1 = (function (){var statearr_13740 = state_13723;
(statearr_13740[(10)] = inst_13715);

return statearr_13740;
})();
var statearr_13741_13763 = state_13723__$1;
(statearr_13741_13763[(2)] = null);

(statearr_13741_13763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (8))){
var inst_13694 = (state_13723[(8)]);
var inst_13697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13698 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_13694);
var inst_13699 = cljs.core.async.timeout.call(null,(1000));
var inst_13700 = [inst_13698,inst_13699];
var inst_13701 = (new cljs.core.PersistentVector(null,2,(5),inst_13697,inst_13700,null));
var state_13723__$1 = state_13723;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13723__$1,(11),inst_13701);
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
});})(c__8338__auto___13749,ch))
;
return ((function (switch__8276__auto__,c__8338__auto___13749,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____0 = (function (){
var statearr_13745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13745[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__);

(statearr_13745[(1)] = (1));

return statearr_13745;
});
var figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____1 = (function (state_13723){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_13723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e13746){if((e13746 instanceof Object)){
var ex__8280__auto__ = e13746;
var statearr_13747_13764 = state_13723;
(statearr_13747_13764[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13765 = state_13723;
state_13723 = G__13765;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__ = function(state_13723){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____1.call(this,state_13723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__8277__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___13749,ch))
})();
var state__8340__auto__ = (function (){var statearr_13748 = f__8339__auto__.call(null);
(statearr_13748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___13749);

return statearr_13748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___13749,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__13766_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__13766_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_13773 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_13773){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_13771 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_13772 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13771,_STAR_print_newline_STAR_13772,base_path_13773){
return (function() { 
var G__13774__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__13774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13775__i = 0, G__13775__a = new Array(arguments.length -  0);
while (G__13775__i < G__13775__a.length) {G__13775__a[G__13775__i] = arguments[G__13775__i + 0]; ++G__13775__i;}
  args = new cljs.core.IndexedSeq(G__13775__a,0);
} 
return G__13774__delegate.call(this,args);};
G__13774.cljs$lang$maxFixedArity = 0;
G__13774.cljs$lang$applyTo = (function (arglist__13776){
var args = cljs.core.seq(arglist__13776);
return G__13774__delegate(args);
});
G__13774.cljs$core$IFn$_invoke$arity$variadic = G__13774__delegate;
return G__13774;
})()
;})(_STAR_print_fn_STAR_13771,_STAR_print_newline_STAR_13772,base_path_13773))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13772;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13771;
}}catch (e13770){if((e13770 instanceof Error)){
var e = e13770;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_13773], null));
} else {
var e = e13770;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_13773))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__13777){
var map__13782 = p__13777;
var map__13782__$1 = ((cljs.core.seq_QMARK_.call(null,map__13782))?cljs.core.apply.call(null,cljs.core.hash_map,map__13782):map__13782);
var opts = map__13782__$1;
var build_id = cljs.core.get.call(null,map__13782__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__13782,map__13782__$1,opts,build_id){
return (function (p__13783){
var vec__13784 = p__13783;
var map__13785 = cljs.core.nth.call(null,vec__13784,(0),null);
var map__13785__$1 = ((cljs.core.seq_QMARK_.call(null,map__13785))?cljs.core.apply.call(null,cljs.core.hash_map,map__13785):map__13785);
var msg = map__13785__$1;
var msg_name = cljs.core.get.call(null,map__13785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13784,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__13784,map__13785,map__13785__$1,msg,msg_name,_,map__13782,map__13782__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__13784,map__13785,map__13785__$1,msg,msg_name,_,map__13782,map__13782__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__13782,map__13782__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__13789){
var vec__13790 = p__13789;
var map__13791 = cljs.core.nth.call(null,vec__13790,(0),null);
var map__13791__$1 = ((cljs.core.seq_QMARK_.call(null,map__13791))?cljs.core.apply.call(null,cljs.core.hash_map,map__13791):map__13791);
var msg = map__13791__$1;
var msg_name = cljs.core.get.call(null,map__13791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13790,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__13792){
var map__13800 = p__13792;
var map__13800__$1 = ((cljs.core.seq_QMARK_.call(null,map__13800))?cljs.core.apply.call(null,cljs.core.hash_map,map__13800):map__13800);
var on_compile_warning = cljs.core.get.call(null,map__13800__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__13800__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__13800,map__13800__$1,on_compile_warning,on_compile_fail){
return (function (p__13801){
var vec__13802 = p__13801;
var map__13803 = cljs.core.nth.call(null,vec__13802,(0),null);
var map__13803__$1 = ((cljs.core.seq_QMARK_.call(null,map__13803))?cljs.core.apply.call(null,cljs.core.hash_map,map__13803):map__13803);
var msg = map__13803__$1;
var msg_name = cljs.core.get.call(null,map__13803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__13802,(1));
var pred__13804 = cljs.core._EQ_;
var expr__13805 = msg_name;
if(cljs.core.truth_(pred__13804.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__13805))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__13804.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13805))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__13800,map__13800__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__,msg_hist,msg_names,msg){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__,msg_hist,msg_names,msg){
return (function (state_14006){
var state_val_14007 = (state_14006[(1)]);
if((state_val_14007 === (7))){
var inst_13940 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14008_14049 = state_14006__$1;
(statearr_14008_14049[(2)] = inst_13940);

(statearr_14008_14049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (20))){
var inst_13968 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13968)){
var statearr_14009_14050 = state_14006__$1;
(statearr_14009_14050[(1)] = (22));

} else {
var statearr_14010_14051 = state_14006__$1;
(statearr_14010_14051[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (27))){
var inst_13980 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13981 = figwheel.client.heads_up.display_warning.call(null,inst_13980);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(30),inst_13981);
} else {
if((state_val_14007 === (1))){
var inst_13928 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13928)){
var statearr_14011_14052 = state_14006__$1;
(statearr_14011_14052[(1)] = (2));

} else {
var statearr_14012_14053 = state_14006__$1;
(statearr_14012_14053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (24))){
var inst_13996 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14013_14054 = state_14006__$1;
(statearr_14013_14054[(2)] = inst_13996);

(statearr_14013_14054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (4))){
var inst_14004 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14006__$1,inst_14004);
} else {
if((state_val_14007 === (15))){
var inst_13956 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13957 = figwheel.client.format_messages.call(null,inst_13956);
var inst_13958 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13959 = figwheel.client.heads_up.display_error.call(null,inst_13957,inst_13958);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(18),inst_13959);
} else {
if((state_val_14007 === (21))){
var inst_13998 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14014_14055 = state_14006__$1;
(statearr_14014_14055[(2)] = inst_13998);

(statearr_14014_14055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (31))){
var inst_13987 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(34),inst_13987);
} else {
if((state_val_14007 === (32))){
var state_14006__$1 = state_14006;
var statearr_14015_14056 = state_14006__$1;
(statearr_14015_14056[(2)] = null);

(statearr_14015_14056[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (33))){
var inst_13992 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14016_14057 = state_14006__$1;
(statearr_14016_14057[(2)] = inst_13992);

(statearr_14016_14057[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (13))){
var inst_13946 = (state_14006[(2)]);
var inst_13947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13948 = figwheel.client.format_messages.call(null,inst_13947);
var inst_13949 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13950 = figwheel.client.heads_up.display_error.call(null,inst_13948,inst_13949);
var state_14006__$1 = (function (){var statearr_14017 = state_14006;
(statearr_14017[(7)] = inst_13946);

return statearr_14017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(14),inst_13950);
} else {
if((state_val_14007 === (22))){
var inst_13970 = figwheel.client.heads_up.clear.call(null);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(25),inst_13970);
} else {
if((state_val_14007 === (29))){
var inst_13994 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14018_14058 = state_14006__$1;
(statearr_14018_14058[(2)] = inst_13994);

(statearr_14018_14058[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (6))){
var inst_13936 = figwheel.client.heads_up.clear.call(null);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(9),inst_13936);
} else {
if((state_val_14007 === (28))){
var inst_13985 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13985)){
var statearr_14019_14059 = state_14006__$1;
(statearr_14019_14059[(1)] = (31));

} else {
var statearr_14020_14060 = state_14006__$1;
(statearr_14020_14060[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (25))){
var inst_13972 = (state_14006[(2)]);
var inst_13973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13974 = figwheel.client.heads_up.display_warning.call(null,inst_13973);
var state_14006__$1 = (function (){var statearr_14021 = state_14006;
(statearr_14021[(8)] = inst_13972);

return statearr_14021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(26),inst_13974);
} else {
if((state_val_14007 === (34))){
var inst_13989 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14022_14061 = state_14006__$1;
(statearr_14022_14061[(2)] = inst_13989);

(statearr_14022_14061[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (17))){
var inst_14000 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14023_14062 = state_14006__$1;
(statearr_14023_14062[(2)] = inst_14000);

(statearr_14023_14062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (3))){
var inst_13942 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13942)){
var statearr_14024_14063 = state_14006__$1;
(statearr_14024_14063[(1)] = (10));

} else {
var statearr_14025_14064 = state_14006__$1;
(statearr_14025_14064[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (12))){
var inst_14002 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14026_14065 = state_14006__$1;
(statearr_14026_14065[(2)] = inst_14002);

(statearr_14026_14065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (2))){
var inst_13930 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13930)){
var statearr_14027_14066 = state_14006__$1;
(statearr_14027_14066[(1)] = (5));

} else {
var statearr_14028_14067 = state_14006__$1;
(statearr_14028_14067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (23))){
var inst_13978 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13978)){
var statearr_14029_14068 = state_14006__$1;
(statearr_14029_14068[(1)] = (27));

} else {
var statearr_14030_14069 = state_14006__$1;
(statearr_14030_14069[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (19))){
var inst_13965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_13966 = figwheel.client.heads_up.append_message.call(null,inst_13965);
var state_14006__$1 = state_14006;
var statearr_14031_14070 = state_14006__$1;
(statearr_14031_14070[(2)] = inst_13966);

(statearr_14031_14070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (11))){
var inst_13954 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13954)){
var statearr_14032_14071 = state_14006__$1;
(statearr_14032_14071[(1)] = (15));

} else {
var statearr_14033_14072 = state_14006__$1;
(statearr_14033_14072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (9))){
var inst_13938 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14034_14073 = state_14006__$1;
(statearr_14034_14073[(2)] = inst_13938);

(statearr_14034_14073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (5))){
var inst_13932 = figwheel.client.heads_up.flash_loaded.call(null);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(8),inst_13932);
} else {
if((state_val_14007 === (14))){
var inst_13952 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14035_14074 = state_14006__$1;
(statearr_14035_14074[(2)] = inst_13952);

(statearr_14035_14074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (26))){
var inst_13976 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14036_14075 = state_14006__$1;
(statearr_14036_14075[(2)] = inst_13976);

(statearr_14036_14075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (16))){
var inst_13963 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_14006__$1 = state_14006;
if(cljs.core.truth_(inst_13963)){
var statearr_14037_14076 = state_14006__$1;
(statearr_14037_14076[(1)] = (19));

} else {
var statearr_14038_14077 = state_14006__$1;
(statearr_14038_14077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (30))){
var inst_13983 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14039_14078 = state_14006__$1;
(statearr_14039_14078[(2)] = inst_13983);

(statearr_14039_14078[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (10))){
var inst_13944 = figwheel.client.heads_up.clear.call(null);
var state_14006__$1 = state_14006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14006__$1,(13),inst_13944);
} else {
if((state_val_14007 === (18))){
var inst_13961 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14040_14079 = state_14006__$1;
(statearr_14040_14079[(2)] = inst_13961);

(statearr_14040_14079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14007 === (8))){
var inst_13934 = (state_14006[(2)]);
var state_14006__$1 = state_14006;
var statearr_14041_14080 = state_14006__$1;
(statearr_14041_14080[(2)] = inst_13934);

(statearr_14041_14080[(1)] = (7));


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
});})(c__8338__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__8276__auto__,c__8338__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____0 = (function (){
var statearr_14045 = [null,null,null,null,null,null,null,null,null];
(statearr_14045[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__);

(statearr_14045[(1)] = (1));

return statearr_14045;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____1 = (function (state_14006){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14046){if((e14046 instanceof Object)){
var ex__8280__auto__ = e14046;
var statearr_14047_14081 = state_14006;
(statearr_14047_14081[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14082 = state_14006;
state_14006 = G__14082;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__ = function(state_14006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____1.call(this,state_14006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__,msg_hist,msg_names,msg))
})();
var state__8340__auto__ = (function (){var statearr_14048 = f__8339__auto__.call(null);
(statearr_14048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_14048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__,msg_hist,msg_names,msg))
);

return c__8338__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__8338__auto___14145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___14145,ch){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___14145,ch){
return (function (state_14128){
var state_val_14129 = (state_14128[(1)]);
if((state_val_14129 === (1))){
var state_14128__$1 = state_14128;
var statearr_14130_14146 = state_14128__$1;
(statearr_14130_14146[(2)] = null);

(statearr_14130_14146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14129 === (2))){
var state_14128__$1 = state_14128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14128__$1,(4),ch);
} else {
if((state_val_14129 === (3))){
var inst_14126 = (state_14128[(2)]);
var state_14128__$1 = state_14128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14128__$1,inst_14126);
} else {
if((state_val_14129 === (4))){
var inst_14116 = (state_14128[(7)]);
var inst_14116__$1 = (state_14128[(2)]);
var state_14128__$1 = (function (){var statearr_14131 = state_14128;
(statearr_14131[(7)] = inst_14116__$1);

return statearr_14131;
})();
if(cljs.core.truth_(inst_14116__$1)){
var statearr_14132_14147 = state_14128__$1;
(statearr_14132_14147[(1)] = (5));

} else {
var statearr_14133_14148 = state_14128__$1;
(statearr_14133_14148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14129 === (5))){
var inst_14116 = (state_14128[(7)]);
var inst_14118 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_14116);
var state_14128__$1 = state_14128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14128__$1,(8),inst_14118);
} else {
if((state_val_14129 === (6))){
var state_14128__$1 = state_14128;
var statearr_14134_14149 = state_14128__$1;
(statearr_14134_14149[(2)] = null);

(statearr_14134_14149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14129 === (7))){
var inst_14124 = (state_14128[(2)]);
var state_14128__$1 = state_14128;
var statearr_14135_14150 = state_14128__$1;
(statearr_14135_14150[(2)] = inst_14124);

(statearr_14135_14150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14129 === (8))){
var inst_14120 = (state_14128[(2)]);
var state_14128__$1 = (function (){var statearr_14136 = state_14128;
(statearr_14136[(8)] = inst_14120);

return statearr_14136;
})();
var statearr_14137_14151 = state_14128__$1;
(statearr_14137_14151[(2)] = null);

(statearr_14137_14151[(1)] = (2));


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
});})(c__8338__auto___14145,ch))
;
return ((function (switch__8276__auto__,c__8338__auto___14145,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__8277__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__8277__auto____0 = (function (){
var statearr_14141 = [null,null,null,null,null,null,null,null,null];
(statearr_14141[(0)] = figwheel$client$heads_up_plugin_$_state_machine__8277__auto__);

(statearr_14141[(1)] = (1));

return statearr_14141;
});
var figwheel$client$heads_up_plugin_$_state_machine__8277__auto____1 = (function (state_14128){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14142){if((e14142 instanceof Object)){
var ex__8280__auto__ = e14142;
var statearr_14143_14152 = state_14128;
(statearr_14143_14152[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14153 = state_14128;
state_14128 = G__14153;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__8277__auto__ = function(state_14128){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__8277__auto____1.call(this,state_14128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__8277__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__8277__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___14145,ch))
})();
var state__8340__auto__ = (function (){var statearr_14144 = f__8339__auto__.call(null);
(statearr_14144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___14145);

return statearr_14144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___14145,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_14174){
var state_val_14175 = (state_14174[(1)]);
if((state_val_14175 === (1))){
var inst_14169 = cljs.core.async.timeout.call(null,(3000));
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14174__$1,(2),inst_14169);
} else {
if((state_val_14175 === (2))){
var inst_14171 = (state_14174[(2)]);
var inst_14172 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_14174__$1 = (function (){var statearr_14176 = state_14174;
(statearr_14176[(7)] = inst_14171);

return statearr_14176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14174__$1,inst_14172);
} else {
return null;
}
}
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____0 = (function (){
var statearr_14180 = [null,null,null,null,null,null,null,null];
(statearr_14180[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__);

(statearr_14180[(1)] = (1));

return statearr_14180;
});
var figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____1 = (function (state_14174){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_14174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e14181){if((e14181 instanceof Object)){
var ex__8280__auto__ = e14181;
var statearr_14182_14184 = state_14174;
(statearr_14182_14184[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14185 = state_14174;
state_14174 = G__14185;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__ = function(state_14174){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____1.call(this,state_14174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__8277__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_14183 = f__8339__auto__.call(null);
(statearr_14183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_14183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__14186){
var map__14192 = p__14186;
var map__14192__$1 = ((cljs.core.seq_QMARK_.call(null,map__14192))?cljs.core.apply.call(null,cljs.core.hash_map,map__14192):map__14192);
var ed = map__14192__$1;
var formatted_exception = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__14192__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__14193_14197 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__14194_14198 = null;
var count__14195_14199 = (0);
var i__14196_14200 = (0);
while(true){
if((i__14196_14200 < count__14195_14199)){
var msg_14201 = cljs.core._nth.call(null,chunk__14194_14198,i__14196_14200);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14201);

var G__14202 = seq__14193_14197;
var G__14203 = chunk__14194_14198;
var G__14204 = count__14195_14199;
var G__14205 = (i__14196_14200 + (1));
seq__14193_14197 = G__14202;
chunk__14194_14198 = G__14203;
count__14195_14199 = G__14204;
i__14196_14200 = G__14205;
continue;
} else {
var temp__4423__auto___14206 = cljs.core.seq.call(null,seq__14193_14197);
if(temp__4423__auto___14206){
var seq__14193_14207__$1 = temp__4423__auto___14206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14193_14207__$1)){
var c__5094__auto___14208 = cljs.core.chunk_first.call(null,seq__14193_14207__$1);
var G__14209 = cljs.core.chunk_rest.call(null,seq__14193_14207__$1);
var G__14210 = c__5094__auto___14208;
var G__14211 = cljs.core.count.call(null,c__5094__auto___14208);
var G__14212 = (0);
seq__14193_14197 = G__14209;
chunk__14194_14198 = G__14210;
count__14195_14199 = G__14211;
i__14196_14200 = G__14212;
continue;
} else {
var msg_14213 = cljs.core.first.call(null,seq__14193_14207__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_14213);

var G__14214 = cljs.core.next.call(null,seq__14193_14207__$1);
var G__14215 = null;
var G__14216 = (0);
var G__14217 = (0);
seq__14193_14197 = G__14214;
chunk__14194_14198 = G__14215;
count__14195_14199 = G__14216;
i__14196_14200 = G__14217;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__14218){
var map__14220 = p__14218;
var map__14220__$1 = ((cljs.core.seq_QMARK_.call(null,map__14220))?cljs.core.apply.call(null,cljs.core.hash_map,map__14220):map__14220);
var w = map__14220__$1;
var message = cljs.core.get.call(null,map__14220__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4297__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4297__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4297__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__14227 = cljs.core.seq.call(null,plugins);
var chunk__14228 = null;
var count__14229 = (0);
var i__14230 = (0);
while(true){
if((i__14230 < count__14229)){
var vec__14231 = cljs.core._nth.call(null,chunk__14228,i__14230);
var k = cljs.core.nth.call(null,vec__14231,(0),null);
var plugin = cljs.core.nth.call(null,vec__14231,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14233 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14227,chunk__14228,count__14229,i__14230,pl_14233,vec__14231,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_14233.call(null,msg_hist);
});})(seq__14227,chunk__14228,count__14229,i__14230,pl_14233,vec__14231,k,plugin))
);
} else {
}

var G__14234 = seq__14227;
var G__14235 = chunk__14228;
var G__14236 = count__14229;
var G__14237 = (i__14230 + (1));
seq__14227 = G__14234;
chunk__14228 = G__14235;
count__14229 = G__14236;
i__14230 = G__14237;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__14227);
if(temp__4423__auto__){
var seq__14227__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14227__$1)){
var c__5094__auto__ = cljs.core.chunk_first.call(null,seq__14227__$1);
var G__14238 = cljs.core.chunk_rest.call(null,seq__14227__$1);
var G__14239 = c__5094__auto__;
var G__14240 = cljs.core.count.call(null,c__5094__auto__);
var G__14241 = (0);
seq__14227 = G__14238;
chunk__14228 = G__14239;
count__14229 = G__14240;
i__14230 = G__14241;
continue;
} else {
var vec__14232 = cljs.core.first.call(null,seq__14227__$1);
var k = cljs.core.nth.call(null,vec__14232,(0),null);
var plugin = cljs.core.nth.call(null,vec__14232,(1),null);
if(cljs.core.truth_(plugin)){
var pl_14242 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__14227,chunk__14228,count__14229,i__14230,pl_14242,vec__14232,k,plugin,seq__14227__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_14242.call(null,msg_hist);
});})(seq__14227,chunk__14228,count__14229,i__14230,pl_14242,vec__14232,k,plugin,seq__14227__$1,temp__4423__auto__))
);
} else {
}

var G__14243 = cljs.core.next.call(null,seq__14227__$1);
var G__14244 = null;
var G__14245 = (0);
var G__14246 = (0);
seq__14227 = G__14243;
chunk__14228 = G__14244;
count__14229 = G__14245;
i__14230 = G__14246;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__14248 = arguments.length;
switch (G__14248) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__14251){
var map__14252 = p__14251;
var map__14252__$1 = ((cljs.core.seq_QMARK_.call(null,map__14252))?cljs.core.apply.call(null,cljs.core.hash_map,map__14252):map__14252);
var opts = map__14252__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq14250){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14250));
});

//# sourceMappingURL=client.js.map
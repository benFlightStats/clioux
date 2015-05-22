// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t15287 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15287 = (function (fn_handler,f,meta15288){
this.fn_handler = fn_handler;
this.f = f;
this.meta15288 = meta15288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15289,meta15288__$1){
var self__ = this;
var _15289__$1 = this;
return (new cljs.core.async.t15287(self__.fn_handler,self__.f,meta15288__$1));
});

cljs.core.async.t15287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15289){
var self__ = this;
var _15289__$1 = this;
return self__.meta15288;
});

cljs.core.async.t15287.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta15288","meta15288",-248377180,null)], null);
});

cljs.core.async.t15287.cljs$lang$type = true;

cljs.core.async.t15287.cljs$lang$ctorStr = "cljs.core.async/t15287";

cljs.core.async.t15287.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15287");
});

cljs.core.async.__GT_t15287 = (function cljs$core$async$fn_handler_$___GT_t15287(fn_handler__$1,f__$1,meta15288){
return (new cljs.core.async.t15287(fn_handler__$1,f__$1,meta15288));
});

}

return (new cljs.core.async.t15287(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__15291 = buff;
if(G__15291){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__15291.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15291.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15291);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15291);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__15293 = arguments.length;
switch (G__15293) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__15296 = arguments.length;
switch (G__15296) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15298 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15298);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15298,ret){
return (function (){
return fn1.call(null,val_15298);
});})(val_15298,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__15300 = arguments.length;
switch (G__15300) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___15302 = n;
var x_15303 = (0);
while(true){
if((x_15303 < n__5194__auto___15302)){
(a[x_15303] = (0));

var G__15304 = (x_15303 + (1));
x_15303 = G__15304;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15305 = (i + (1));
i = G__15305;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15309 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15309 = (function (alt_flag,flag,meta15310){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15310 = meta15310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15311,meta15310__$1){
var self__ = this;
var _15311__$1 = this;
return (new cljs.core.async.t15309(self__.alt_flag,self__.flag,meta15310__$1));
});})(flag))
;

cljs.core.async.t15309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15311){
var self__ = this;
var _15311__$1 = this;
return self__.meta15310;
});})(flag))
;

cljs.core.async.t15309.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15309.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15310","meta15310",960504285,null)], null);
});})(flag))
;

cljs.core.async.t15309.cljs$lang$type = true;

cljs.core.async.t15309.cljs$lang$ctorStr = "cljs.core.async/t15309";

cljs.core.async.t15309.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15309");
});})(flag))
;

cljs.core.async.__GT_t15309 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t15309(alt_flag__$1,flag__$1,meta15310){
return (new cljs.core.async.t15309(alt_flag__$1,flag__$1,meta15310));
});})(flag))
;

}

return (new cljs.core.async.t15309(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t15315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15315 = (function (alt_handler,flag,cb,meta15316){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15316 = meta15316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15317,meta15316__$1){
var self__ = this;
var _15317__$1 = this;
return (new cljs.core.async.t15315(self__.alt_handler,self__.flag,self__.cb,meta15316__$1));
});

cljs.core.async.t15315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15317){
var self__ = this;
var _15317__$1 = this;
return self__.meta15316;
});

cljs.core.async.t15315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15316","meta15316",832340698,null)], null);
});

cljs.core.async.t15315.cljs$lang$type = true;

cljs.core.async.t15315.cljs$lang$ctorStr = "cljs.core.async/t15315";

cljs.core.async.t15315.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15315");
});

cljs.core.async.__GT_t15315 = (function cljs$core$async$alt_handler_$___GT_t15315(alt_handler__$1,flag__$1,cb__$1,meta15316){
return (new cljs.core.async.t15315(alt_handler__$1,flag__$1,cb__$1,meta15316));
});

}

return (new cljs.core.async.t15315(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15318_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15318_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15319_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15319_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15320 = (i + (1));
i = G__15320;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15323){
var map__15324 = p__15323;
var map__15324__$1 = ((cljs.core.seq_QMARK_.call(null,map__15324))?cljs.core.apply.call(null,cljs.core.hash_map,map__15324):map__15324);
var opts = map__15324__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15321){
var G__15322 = cljs.core.first.call(null,seq15321);
var seq15321__$1 = cljs.core.next.call(null,seq15321);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15322,seq15321__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__15326 = arguments.length;
switch (G__15326) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8338__auto___15375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___15375){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___15375){
return (function (state_15350){
var state_val_15351 = (state_15350[(1)]);
if((state_val_15351 === (7))){
var inst_15346 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15352_15376 = state_15350__$1;
(statearr_15352_15376[(2)] = inst_15346);

(statearr_15352_15376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (1))){
var state_15350__$1 = state_15350;
var statearr_15353_15377 = state_15350__$1;
(statearr_15353_15377[(2)] = null);

(statearr_15353_15377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (4))){
var inst_15329 = (state_15350[(7)]);
var inst_15329__$1 = (state_15350[(2)]);
var inst_15330 = (inst_15329__$1 == null);
var state_15350__$1 = (function (){var statearr_15354 = state_15350;
(statearr_15354[(7)] = inst_15329__$1);

return statearr_15354;
})();
if(cljs.core.truth_(inst_15330)){
var statearr_15355_15378 = state_15350__$1;
(statearr_15355_15378[(1)] = (5));

} else {
var statearr_15356_15379 = state_15350__$1;
(statearr_15356_15379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (13))){
var state_15350__$1 = state_15350;
var statearr_15357_15380 = state_15350__$1;
(statearr_15357_15380[(2)] = null);

(statearr_15357_15380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (6))){
var inst_15329 = (state_15350[(7)]);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15350__$1,(11),to,inst_15329);
} else {
if((state_val_15351 === (3))){
var inst_15348 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15350__$1,inst_15348);
} else {
if((state_val_15351 === (12))){
var state_15350__$1 = state_15350;
var statearr_15358_15381 = state_15350__$1;
(statearr_15358_15381[(2)] = null);

(statearr_15358_15381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (2))){
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15350__$1,(4),from);
} else {
if((state_val_15351 === (11))){
var inst_15339 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
if(cljs.core.truth_(inst_15339)){
var statearr_15359_15382 = state_15350__$1;
(statearr_15359_15382[(1)] = (12));

} else {
var statearr_15360_15383 = state_15350__$1;
(statearr_15360_15383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (9))){
var state_15350__$1 = state_15350;
var statearr_15361_15384 = state_15350__$1;
(statearr_15361_15384[(2)] = null);

(statearr_15361_15384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (5))){
var state_15350__$1 = state_15350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15362_15385 = state_15350__$1;
(statearr_15362_15385[(1)] = (8));

} else {
var statearr_15363_15386 = state_15350__$1;
(statearr_15363_15386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (14))){
var inst_15344 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15364_15387 = state_15350__$1;
(statearr_15364_15387[(2)] = inst_15344);

(statearr_15364_15387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (10))){
var inst_15336 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15365_15388 = state_15350__$1;
(statearr_15365_15388[(2)] = inst_15336);

(statearr_15365_15388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (8))){
var inst_15333 = cljs.core.async.close_BANG_.call(null,to);
var state_15350__$1 = state_15350;
var statearr_15366_15389 = state_15350__$1;
(statearr_15366_15389[(2)] = inst_15333);

(statearr_15366_15389[(1)] = (10));


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
});})(c__8338__auto___15375))
;
return ((function (switch__8276__auto__,c__8338__auto___15375){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_15370 = [null,null,null,null,null,null,null,null];
(statearr_15370[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_15370[(1)] = (1));

return statearr_15370;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_15350){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15371){if((e15371 instanceof Object)){
var ex__8280__auto__ = e15371;
var statearr_15372_15390 = state_15350;
(statearr_15372_15390[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15391 = state_15350;
state_15350 = G__15391;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___15375))
})();
var state__8340__auto__ = (function (){var statearr_15373 = f__8339__auto__.call(null);
(statearr_15373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15375);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___15375))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__15575){
var vec__15576 = p__15575;
var v = cljs.core.nth.call(null,vec__15576,(0),null);
var p = cljs.core.nth.call(null,vec__15576,(1),null);
var job = vec__15576;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8338__auto___15758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results){
return (function (state_15581){
var state_val_15582 = (state_15581[(1)]);
if((state_val_15582 === (1))){
var state_15581__$1 = state_15581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15581__$1,(2),res,v);
} else {
if((state_val_15582 === (2))){
var inst_15578 = (state_15581[(2)]);
var inst_15579 = cljs.core.async.close_BANG_.call(null,res);
var state_15581__$1 = (function (){var statearr_15583 = state_15581;
(statearr_15583[(7)] = inst_15578);

return statearr_15583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15581__$1,inst_15579);
} else {
return null;
}
}
});})(c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results))
;
return ((function (switch__8276__auto__,c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_15587 = [null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1 = (function (state_15581){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15588){if((e15588 instanceof Object)){
var ex__8280__auto__ = e15588;
var statearr_15589_15759 = state_15581;
(statearr_15589_15759[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15760 = state_15581;
state_15581 = G__15760;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = function(state_15581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1.call(this,state_15581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results))
})();
var state__8340__auto__ = (function (){var statearr_15590 = f__8339__auto__.call(null);
(statearr_15590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15758);

return statearr_15590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___15758,res,vec__15576,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15591){
var vec__15592 = p__15591;
var v = cljs.core.nth.call(null,vec__15592,(0),null);
var p = cljs.core.nth.call(null,vec__15592,(1),null);
var job = vec__15592;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___15761 = n;
var __15762 = (0);
while(true){
if((__15762 < n__5194__auto___15761)){
var G__15593_15763 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15593_15763) {
case "compute":
var c__8338__auto___15765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15762,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (__15762,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (1))){
var state_15606__$1 = state_15606;
var statearr_15608_15766 = state_15606__$1;
(statearr_15608_15766[(2)] = null);

(statearr_15608_15766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (2))){
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15606__$1,(4),jobs);
} else {
if((state_val_15607 === (3))){
var inst_15604 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15606__$1,inst_15604);
} else {
if((state_val_15607 === (4))){
var inst_15596 = (state_15606[(2)]);
var inst_15597 = process.call(null,inst_15596);
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15597)){
var statearr_15609_15767 = state_15606__$1;
(statearr_15609_15767[(1)] = (5));

} else {
var statearr_15610_15768 = state_15606__$1;
(statearr_15610_15768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (5))){
var state_15606__$1 = state_15606;
var statearr_15611_15769 = state_15606__$1;
(statearr_15611_15769[(2)] = null);

(statearr_15611_15769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (6))){
var state_15606__$1 = state_15606;
var statearr_15612_15770 = state_15606__$1;
(statearr_15612_15770[(2)] = null);

(statearr_15612_15770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (7))){
var inst_15602 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15613_15771 = state_15606__$1;
(statearr_15613_15771[(2)] = inst_15602);

(statearr_15613_15771[(1)] = (3));


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
});})(__15762,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
;
return ((function (__15762,switch__8276__auto__,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_15617 = [null,null,null,null,null,null,null];
(statearr_15617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__);

(statearr_15617[(1)] = (1));

return statearr_15617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1 = (function (state_15606){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15618){if((e15618 instanceof Object)){
var ex__8280__auto__ = e15618;
var statearr_15619_15772 = state_15606;
(statearr_15619_15772[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15773 = state_15606;
state_15606 = G__15773;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__;
})()
;})(__15762,switch__8276__auto__,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
})();
var state__8340__auto__ = (function (){var statearr_15620 = f__8339__auto__.call(null);
(statearr_15620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15765);

return statearr_15620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(__15762,c__8338__auto___15765,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
);


break;
case "async":
var c__8338__auto___15774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15762,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (__15762,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function (state_15633){
var state_val_15634 = (state_15633[(1)]);
if((state_val_15634 === (1))){
var state_15633__$1 = state_15633;
var statearr_15635_15775 = state_15633__$1;
(statearr_15635_15775[(2)] = null);

(statearr_15635_15775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15634 === (2))){
var state_15633__$1 = state_15633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15633__$1,(4),jobs);
} else {
if((state_val_15634 === (3))){
var inst_15631 = (state_15633[(2)]);
var state_15633__$1 = state_15633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15633__$1,inst_15631);
} else {
if((state_val_15634 === (4))){
var inst_15623 = (state_15633[(2)]);
var inst_15624 = async.call(null,inst_15623);
var state_15633__$1 = state_15633;
if(cljs.core.truth_(inst_15624)){
var statearr_15636_15776 = state_15633__$1;
(statearr_15636_15776[(1)] = (5));

} else {
var statearr_15637_15777 = state_15633__$1;
(statearr_15637_15777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15634 === (5))){
var state_15633__$1 = state_15633;
var statearr_15638_15778 = state_15633__$1;
(statearr_15638_15778[(2)] = null);

(statearr_15638_15778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15634 === (6))){
var state_15633__$1 = state_15633;
var statearr_15639_15779 = state_15633__$1;
(statearr_15639_15779[(2)] = null);

(statearr_15639_15779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15634 === (7))){
var inst_15629 = (state_15633[(2)]);
var state_15633__$1 = state_15633;
var statearr_15640_15780 = state_15633__$1;
(statearr_15640_15780[(2)] = inst_15629);

(statearr_15640_15780[(1)] = (3));


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
});})(__15762,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
;
return ((function (__15762,switch__8276__auto__,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1 = (function (state_15633){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15645){if((e15645 instanceof Object)){
var ex__8280__auto__ = e15645;
var statearr_15646_15781 = state_15633;
(statearr_15646_15781[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15782 = state_15633;
state_15633 = G__15782;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = function(state_15633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1.call(this,state_15633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__;
})()
;})(__15762,switch__8276__auto__,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
})();
var state__8340__auto__ = (function (){var statearr_15647 = f__8339__auto__.call(null);
(statearr_15647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15774);

return statearr_15647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(__15762,c__8338__auto___15774,G__15593_15763,n__5194__auto___15761,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15783 = (__15762 + (1));
__15762 = G__15783;
continue;
} else {
}
break;
}

var c__8338__auto___15784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___15784,jobs,results,process,async){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___15784,jobs,results,process,async){
return (function (state_15669){
var state_val_15670 = (state_15669[(1)]);
if((state_val_15670 === (1))){
var state_15669__$1 = state_15669;
var statearr_15671_15785 = state_15669__$1;
(statearr_15671_15785[(2)] = null);

(statearr_15671_15785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (2))){
var state_15669__$1 = state_15669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15669__$1,(4),from);
} else {
if((state_val_15670 === (3))){
var inst_15667 = (state_15669[(2)]);
var state_15669__$1 = state_15669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15669__$1,inst_15667);
} else {
if((state_val_15670 === (4))){
var inst_15650 = (state_15669[(7)]);
var inst_15650__$1 = (state_15669[(2)]);
var inst_15651 = (inst_15650__$1 == null);
var state_15669__$1 = (function (){var statearr_15672 = state_15669;
(statearr_15672[(7)] = inst_15650__$1);

return statearr_15672;
})();
if(cljs.core.truth_(inst_15651)){
var statearr_15673_15786 = state_15669__$1;
(statearr_15673_15786[(1)] = (5));

} else {
var statearr_15674_15787 = state_15669__$1;
(statearr_15674_15787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (5))){
var inst_15653 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15669__$1 = state_15669;
var statearr_15675_15788 = state_15669__$1;
(statearr_15675_15788[(2)] = inst_15653);

(statearr_15675_15788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (6))){
var inst_15655 = (state_15669[(8)]);
var inst_15650 = (state_15669[(7)]);
var inst_15655__$1 = cljs.core.async.chan.call(null,(1));
var inst_15656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15657 = [inst_15650,inst_15655__$1];
var inst_15658 = (new cljs.core.PersistentVector(null,2,(5),inst_15656,inst_15657,null));
var state_15669__$1 = (function (){var statearr_15676 = state_15669;
(statearr_15676[(8)] = inst_15655__$1);

return statearr_15676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15669__$1,(8),jobs,inst_15658);
} else {
if((state_val_15670 === (7))){
var inst_15665 = (state_15669[(2)]);
var state_15669__$1 = state_15669;
var statearr_15677_15789 = state_15669__$1;
(statearr_15677_15789[(2)] = inst_15665);

(statearr_15677_15789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (8))){
var inst_15655 = (state_15669[(8)]);
var inst_15660 = (state_15669[(2)]);
var state_15669__$1 = (function (){var statearr_15678 = state_15669;
(statearr_15678[(9)] = inst_15660);

return statearr_15678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15669__$1,(9),results,inst_15655);
} else {
if((state_val_15670 === (9))){
var inst_15662 = (state_15669[(2)]);
var state_15669__$1 = (function (){var statearr_15679 = state_15669;
(statearr_15679[(10)] = inst_15662);

return statearr_15679;
})();
var statearr_15680_15790 = state_15669__$1;
(statearr_15680_15790[(2)] = null);

(statearr_15680_15790[(1)] = (2));


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
});})(c__8338__auto___15784,jobs,results,process,async))
;
return ((function (switch__8276__auto__,c__8338__auto___15784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_15684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__);

(statearr_15684[(1)] = (1));

return statearr_15684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1 = (function (state_15669){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15685){if((e15685 instanceof Object)){
var ex__8280__auto__ = e15685;
var statearr_15686_15791 = state_15669;
(statearr_15686_15791[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15792 = state_15669;
state_15669 = G__15792;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = function(state_15669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1.call(this,state_15669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___15784,jobs,results,process,async))
})();
var state__8340__auto__ = (function (){var statearr_15687 = f__8339__auto__.call(null);
(statearr_15687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15784);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___15784,jobs,results,process,async))
);


var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__,jobs,results,process,async){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__,jobs,results,process,async){
return (function (state_15725){
var state_val_15726 = (state_15725[(1)]);
if((state_val_15726 === (7))){
var inst_15721 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15727_15793 = state_15725__$1;
(statearr_15727_15793[(2)] = inst_15721);

(statearr_15727_15793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (20))){
var state_15725__$1 = state_15725;
var statearr_15728_15794 = state_15725__$1;
(statearr_15728_15794[(2)] = null);

(statearr_15728_15794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (1))){
var state_15725__$1 = state_15725;
var statearr_15729_15795 = state_15725__$1;
(statearr_15729_15795[(2)] = null);

(statearr_15729_15795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (4))){
var inst_15690 = (state_15725[(7)]);
var inst_15690__$1 = (state_15725[(2)]);
var inst_15691 = (inst_15690__$1 == null);
var state_15725__$1 = (function (){var statearr_15730 = state_15725;
(statearr_15730[(7)] = inst_15690__$1);

return statearr_15730;
})();
if(cljs.core.truth_(inst_15691)){
var statearr_15731_15796 = state_15725__$1;
(statearr_15731_15796[(1)] = (5));

} else {
var statearr_15732_15797 = state_15725__$1;
(statearr_15732_15797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (15))){
var inst_15703 = (state_15725[(8)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15725__$1,(18),to,inst_15703);
} else {
if((state_val_15726 === (21))){
var inst_15716 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15733_15798 = state_15725__$1;
(statearr_15733_15798[(2)] = inst_15716);

(statearr_15733_15798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (13))){
var inst_15718 = (state_15725[(2)]);
var state_15725__$1 = (function (){var statearr_15734 = state_15725;
(statearr_15734[(9)] = inst_15718);

return statearr_15734;
})();
var statearr_15735_15799 = state_15725__$1;
(statearr_15735_15799[(2)] = null);

(statearr_15735_15799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (6))){
var inst_15690 = (state_15725[(7)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15725__$1,(11),inst_15690);
} else {
if((state_val_15726 === (17))){
var inst_15711 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
if(cljs.core.truth_(inst_15711)){
var statearr_15736_15800 = state_15725__$1;
(statearr_15736_15800[(1)] = (19));

} else {
var statearr_15737_15801 = state_15725__$1;
(statearr_15737_15801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (3))){
var inst_15723 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15725__$1,inst_15723);
} else {
if((state_val_15726 === (12))){
var inst_15700 = (state_15725[(10)]);
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15725__$1,(14),inst_15700);
} else {
if((state_val_15726 === (2))){
var state_15725__$1 = state_15725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15725__$1,(4),results);
} else {
if((state_val_15726 === (19))){
var state_15725__$1 = state_15725;
var statearr_15738_15802 = state_15725__$1;
(statearr_15738_15802[(2)] = null);

(statearr_15738_15802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (11))){
var inst_15700 = (state_15725[(2)]);
var state_15725__$1 = (function (){var statearr_15739 = state_15725;
(statearr_15739[(10)] = inst_15700);

return statearr_15739;
})();
var statearr_15740_15803 = state_15725__$1;
(statearr_15740_15803[(2)] = null);

(statearr_15740_15803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (9))){
var state_15725__$1 = state_15725;
var statearr_15741_15804 = state_15725__$1;
(statearr_15741_15804[(2)] = null);

(statearr_15741_15804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (5))){
var state_15725__$1 = state_15725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15742_15805 = state_15725__$1;
(statearr_15742_15805[(1)] = (8));

} else {
var statearr_15743_15806 = state_15725__$1;
(statearr_15743_15806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (14))){
var inst_15703 = (state_15725[(8)]);
var inst_15705 = (state_15725[(11)]);
var inst_15703__$1 = (state_15725[(2)]);
var inst_15704 = (inst_15703__$1 == null);
var inst_15705__$1 = cljs.core.not.call(null,inst_15704);
var state_15725__$1 = (function (){var statearr_15744 = state_15725;
(statearr_15744[(8)] = inst_15703__$1);

(statearr_15744[(11)] = inst_15705__$1);

return statearr_15744;
})();
if(inst_15705__$1){
var statearr_15745_15807 = state_15725__$1;
(statearr_15745_15807[(1)] = (15));

} else {
var statearr_15746_15808 = state_15725__$1;
(statearr_15746_15808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (16))){
var inst_15705 = (state_15725[(11)]);
var state_15725__$1 = state_15725;
var statearr_15747_15809 = state_15725__$1;
(statearr_15747_15809[(2)] = inst_15705);

(statearr_15747_15809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (10))){
var inst_15697 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15748_15810 = state_15725__$1;
(statearr_15748_15810[(2)] = inst_15697);

(statearr_15748_15810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (18))){
var inst_15708 = (state_15725[(2)]);
var state_15725__$1 = state_15725;
var statearr_15749_15811 = state_15725__$1;
(statearr_15749_15811[(2)] = inst_15708);

(statearr_15749_15811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15726 === (8))){
var inst_15694 = cljs.core.async.close_BANG_.call(null,to);
var state_15725__$1 = state_15725;
var statearr_15750_15812 = state_15725__$1;
(statearr_15750_15812[(2)] = inst_15694);

(statearr_15750_15812[(1)] = (10));


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
});})(c__8338__auto__,jobs,results,process,async))
;
return ((function (switch__8276__auto__,c__8338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_15754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__);

(statearr_15754[(1)] = (1));

return statearr_15754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1 = (function (state_15725){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15755){if((e15755 instanceof Object)){
var ex__8280__auto__ = e15755;
var statearr_15756_15813 = state_15725;
(statearr_15756_15813[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15814 = state_15725;
state_15725 = G__15814;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__ = function(state_15725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1.call(this,state_15725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__,jobs,results,process,async))
})();
var state__8340__auto__ = (function (){var statearr_15757 = f__8339__auto__.call(null);
(statearr_15757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_15757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__,jobs,results,process,async))
);

return c__8338__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__15816 = arguments.length;
switch (G__15816) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__15819 = arguments.length;
switch (G__15819) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__15822 = arguments.length;
switch (G__15822) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8338__auto___15874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___15874,tc,fc){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___15874,tc,fc){
return (function (state_15848){
var state_val_15849 = (state_15848[(1)]);
if((state_val_15849 === (7))){
var inst_15844 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15850_15875 = state_15848__$1;
(statearr_15850_15875[(2)] = inst_15844);

(statearr_15850_15875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (1))){
var state_15848__$1 = state_15848;
var statearr_15851_15876 = state_15848__$1;
(statearr_15851_15876[(2)] = null);

(statearr_15851_15876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (4))){
var inst_15825 = (state_15848[(7)]);
var inst_15825__$1 = (state_15848[(2)]);
var inst_15826 = (inst_15825__$1 == null);
var state_15848__$1 = (function (){var statearr_15852 = state_15848;
(statearr_15852[(7)] = inst_15825__$1);

return statearr_15852;
})();
if(cljs.core.truth_(inst_15826)){
var statearr_15853_15877 = state_15848__$1;
(statearr_15853_15877[(1)] = (5));

} else {
var statearr_15854_15878 = state_15848__$1;
(statearr_15854_15878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (13))){
var state_15848__$1 = state_15848;
var statearr_15855_15879 = state_15848__$1;
(statearr_15855_15879[(2)] = null);

(statearr_15855_15879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (6))){
var inst_15825 = (state_15848[(7)]);
var inst_15831 = p.call(null,inst_15825);
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15831)){
var statearr_15856_15880 = state_15848__$1;
(statearr_15856_15880[(1)] = (9));

} else {
var statearr_15857_15881 = state_15848__$1;
(statearr_15857_15881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (3))){
var inst_15846 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15848__$1,inst_15846);
} else {
if((state_val_15849 === (12))){
var state_15848__$1 = state_15848;
var statearr_15858_15882 = state_15848__$1;
(statearr_15858_15882[(2)] = null);

(statearr_15858_15882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (2))){
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15848__$1,(4),ch);
} else {
if((state_val_15849 === (11))){
var inst_15825 = (state_15848[(7)]);
var inst_15835 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15848__$1,(8),inst_15835,inst_15825);
} else {
if((state_val_15849 === (9))){
var state_15848__$1 = state_15848;
var statearr_15859_15883 = state_15848__$1;
(statearr_15859_15883[(2)] = tc);

(statearr_15859_15883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (5))){
var inst_15828 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15829 = cljs.core.async.close_BANG_.call(null,fc);
var state_15848__$1 = (function (){var statearr_15860 = state_15848;
(statearr_15860[(8)] = inst_15828);

return statearr_15860;
})();
var statearr_15861_15884 = state_15848__$1;
(statearr_15861_15884[(2)] = inst_15829);

(statearr_15861_15884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (14))){
var inst_15842 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15862_15885 = state_15848__$1;
(statearr_15862_15885[(2)] = inst_15842);

(statearr_15862_15885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (10))){
var state_15848__$1 = state_15848;
var statearr_15863_15886 = state_15848__$1;
(statearr_15863_15886[(2)] = fc);

(statearr_15863_15886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (8))){
var inst_15837 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15837)){
var statearr_15864_15887 = state_15848__$1;
(statearr_15864_15887[(1)] = (12));

} else {
var statearr_15865_15888 = state_15848__$1;
(statearr_15865_15888[(1)] = (13));

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
});})(c__8338__auto___15874,tc,fc))
;
return ((function (switch__8276__auto__,c__8338__auto___15874,tc,fc){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_15869 = [null,null,null,null,null,null,null,null,null];
(statearr_15869[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_15869[(1)] = (1));

return statearr_15869;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_15848){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15870){if((e15870 instanceof Object)){
var ex__8280__auto__ = e15870;
var statearr_15871_15889 = state_15848;
(statearr_15871_15889[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15890 = state_15848;
state_15848 = G__15890;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_15848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_15848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___15874,tc,fc))
})();
var state__8340__auto__ = (function (){var statearr_15872 = f__8339__auto__.call(null);
(statearr_15872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___15874);

return statearr_15872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___15874,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_15937){
var state_val_15938 = (state_15937[(1)]);
if((state_val_15938 === (1))){
var inst_15923 = init;
var state_15937__$1 = (function (){var statearr_15939 = state_15937;
(statearr_15939[(7)] = inst_15923);

return statearr_15939;
})();
var statearr_15940_15955 = state_15937__$1;
(statearr_15940_15955[(2)] = null);

(statearr_15940_15955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (2))){
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,(4),ch);
} else {
if((state_val_15938 === (3))){
var inst_15935 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15937__$1,inst_15935);
} else {
if((state_val_15938 === (4))){
var inst_15926 = (state_15937[(8)]);
var inst_15926__$1 = (state_15937[(2)]);
var inst_15927 = (inst_15926__$1 == null);
var state_15937__$1 = (function (){var statearr_15941 = state_15937;
(statearr_15941[(8)] = inst_15926__$1);

return statearr_15941;
})();
if(cljs.core.truth_(inst_15927)){
var statearr_15942_15956 = state_15937__$1;
(statearr_15942_15956[(1)] = (5));

} else {
var statearr_15943_15957 = state_15937__$1;
(statearr_15943_15957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (5))){
var inst_15923 = (state_15937[(7)]);
var state_15937__$1 = state_15937;
var statearr_15944_15958 = state_15937__$1;
(statearr_15944_15958[(2)] = inst_15923);

(statearr_15944_15958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (6))){
var inst_15923 = (state_15937[(7)]);
var inst_15926 = (state_15937[(8)]);
var inst_15930 = f.call(null,inst_15923,inst_15926);
var inst_15923__$1 = inst_15930;
var state_15937__$1 = (function (){var statearr_15945 = state_15937;
(statearr_15945[(7)] = inst_15923__$1);

return statearr_15945;
})();
var statearr_15946_15959 = state_15937__$1;
(statearr_15946_15959[(2)] = null);

(statearr_15946_15959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (7))){
var inst_15933 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15947_15960 = state_15937__$1;
(statearr_15947_15960[(2)] = inst_15933);

(statearr_15947_15960[(1)] = (3));


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
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8277__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8277__auto____0 = (function (){
var statearr_15951 = [null,null,null,null,null,null,null,null,null];
(statearr_15951[(0)] = cljs$core$async$reduce_$_state_machine__8277__auto__);

(statearr_15951[(1)] = (1));

return statearr_15951;
});
var cljs$core$async$reduce_$_state_machine__8277__auto____1 = (function (state_15937){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e15952){if((e15952 instanceof Object)){
var ex__8280__auto__ = e15952;
var statearr_15953_15961 = state_15937;
(statearr_15953_15961[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15962 = state_15937;
state_15937 = G__15962;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8277__auto__ = function(state_15937){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8277__auto____1.call(this,state_15937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8277__auto____0;
cljs$core$async$reduce_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8277__auto____1;
return cljs$core$async$reduce_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_15954 = f__8339__auto__.call(null);
(statearr_15954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_15954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__15964 = arguments.length;
switch (G__15964) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_15989){
var state_val_15990 = (state_15989[(1)]);
if((state_val_15990 === (7))){
var inst_15971 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
var statearr_15991_16015 = state_15989__$1;
(statearr_15991_16015[(2)] = inst_15971);

(statearr_15991_16015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (1))){
var inst_15965 = cljs.core.seq.call(null,coll);
var inst_15966 = inst_15965;
var state_15989__$1 = (function (){var statearr_15992 = state_15989;
(statearr_15992[(7)] = inst_15966);

return statearr_15992;
})();
var statearr_15993_16016 = state_15989__$1;
(statearr_15993_16016[(2)] = null);

(statearr_15993_16016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (4))){
var inst_15966 = (state_15989[(7)]);
var inst_15969 = cljs.core.first.call(null,inst_15966);
var state_15989__$1 = state_15989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15989__$1,(7),ch,inst_15969);
} else {
if((state_val_15990 === (13))){
var inst_15983 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
var statearr_15994_16017 = state_15989__$1;
(statearr_15994_16017[(2)] = inst_15983);

(statearr_15994_16017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (6))){
var inst_15974 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
if(cljs.core.truth_(inst_15974)){
var statearr_15995_16018 = state_15989__$1;
(statearr_15995_16018[(1)] = (8));

} else {
var statearr_15996_16019 = state_15989__$1;
(statearr_15996_16019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (3))){
var inst_15987 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15989__$1,inst_15987);
} else {
if((state_val_15990 === (12))){
var state_15989__$1 = state_15989;
var statearr_15997_16020 = state_15989__$1;
(statearr_15997_16020[(2)] = null);

(statearr_15997_16020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (2))){
var inst_15966 = (state_15989[(7)]);
var state_15989__$1 = state_15989;
if(cljs.core.truth_(inst_15966)){
var statearr_15998_16021 = state_15989__$1;
(statearr_15998_16021[(1)] = (4));

} else {
var statearr_15999_16022 = state_15989__$1;
(statearr_15999_16022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (11))){
var inst_15980 = cljs.core.async.close_BANG_.call(null,ch);
var state_15989__$1 = state_15989;
var statearr_16000_16023 = state_15989__$1;
(statearr_16000_16023[(2)] = inst_15980);

(statearr_16000_16023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (9))){
var state_15989__$1 = state_15989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16001_16024 = state_15989__$1;
(statearr_16001_16024[(1)] = (11));

} else {
var statearr_16002_16025 = state_15989__$1;
(statearr_16002_16025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (5))){
var inst_15966 = (state_15989[(7)]);
var state_15989__$1 = state_15989;
var statearr_16003_16026 = state_15989__$1;
(statearr_16003_16026[(2)] = inst_15966);

(statearr_16003_16026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (10))){
var inst_15985 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
var statearr_16004_16027 = state_15989__$1;
(statearr_16004_16027[(2)] = inst_15985);

(statearr_16004_16027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15990 === (8))){
var inst_15966 = (state_15989[(7)]);
var inst_15976 = cljs.core.next.call(null,inst_15966);
var inst_15966__$1 = inst_15976;
var state_15989__$1 = (function (){var statearr_16005 = state_15989;
(statearr_16005[(7)] = inst_15966__$1);

return statearr_16005;
})();
var statearr_16006_16028 = state_15989__$1;
(statearr_16006_16028[(2)] = null);

(statearr_16006_16028[(1)] = (2));


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
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_16010 = [null,null,null,null,null,null,null,null];
(statearr_16010[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_16010[(1)] = (1));

return statearr_16010;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_15989){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_15989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e16011){if((e16011 instanceof Object)){
var ex__8280__auto__ = e16011;
var statearr_16012_16029 = state_15989;
(statearr_16012_16029[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16030 = state_15989;
state_15989 = G__16030;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_15989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_15989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_16013 = f__8339__auto__.call(null);
(statearr_16013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj16032 = {};
return obj16032;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj16034 = {};
return obj16034;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t16256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16256 = (function (mult,ch,cs,meta16257){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16257 = meta16257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16258,meta16257__$1){
var self__ = this;
var _16258__$1 = this;
return (new cljs.core.async.t16256(self__.mult,self__.ch,self__.cs,meta16257__$1));
});})(cs))
;

cljs.core.async.t16256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16258){
var self__ = this;
var _16258__$1 = this;
return self__.meta16257;
});})(cs))
;

cljs.core.async.t16256.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16256.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16256.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16256.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16256.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16256.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16257","meta16257",696547021,null)], null);
});})(cs))
;

cljs.core.async.t16256.cljs$lang$type = true;

cljs.core.async.t16256.cljs$lang$ctorStr = "cljs.core.async/t16256";

cljs.core.async.t16256.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16256");
});})(cs))
;

cljs.core.async.__GT_t16256 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t16256(mult__$1,ch__$1,cs__$1,meta16257){
return (new cljs.core.async.t16256(mult__$1,ch__$1,cs__$1,meta16257));
});})(cs))
;

}

return (new cljs.core.async.t16256(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8338__auto___16477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___16477,cs,m,dchan,dctr,done){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___16477,cs,m,dchan,dctr,done){
return (function (state_16389){
var state_val_16390 = (state_16389[(1)]);
if((state_val_16390 === (7))){
var inst_16385 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16391_16478 = state_16389__$1;
(statearr_16391_16478[(2)] = inst_16385);

(statearr_16391_16478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (20))){
var inst_16290 = (state_16389[(7)]);
var inst_16300 = cljs.core.first.call(null,inst_16290);
var inst_16301 = cljs.core.nth.call(null,inst_16300,(0),null);
var inst_16302 = cljs.core.nth.call(null,inst_16300,(1),null);
var state_16389__$1 = (function (){var statearr_16392 = state_16389;
(statearr_16392[(8)] = inst_16301);

return statearr_16392;
})();
if(cljs.core.truth_(inst_16302)){
var statearr_16393_16479 = state_16389__$1;
(statearr_16393_16479[(1)] = (22));

} else {
var statearr_16394_16480 = state_16389__$1;
(statearr_16394_16480[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (27))){
var inst_16337 = (state_16389[(9)]);
var inst_16330 = (state_16389[(10)]);
var inst_16261 = (state_16389[(11)]);
var inst_16332 = (state_16389[(12)]);
var inst_16337__$1 = cljs.core._nth.call(null,inst_16330,inst_16332);
var inst_16338 = cljs.core.async.put_BANG_.call(null,inst_16337__$1,inst_16261,done);
var state_16389__$1 = (function (){var statearr_16395 = state_16389;
(statearr_16395[(9)] = inst_16337__$1);

return statearr_16395;
})();
if(cljs.core.truth_(inst_16338)){
var statearr_16396_16481 = state_16389__$1;
(statearr_16396_16481[(1)] = (30));

} else {
var statearr_16397_16482 = state_16389__$1;
(statearr_16397_16482[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (1))){
var state_16389__$1 = state_16389;
var statearr_16398_16483 = state_16389__$1;
(statearr_16398_16483[(2)] = null);

(statearr_16398_16483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (24))){
var inst_16290 = (state_16389[(7)]);
var inst_16307 = (state_16389[(2)]);
var inst_16308 = cljs.core.next.call(null,inst_16290);
var inst_16270 = inst_16308;
var inst_16271 = null;
var inst_16272 = (0);
var inst_16273 = (0);
var state_16389__$1 = (function (){var statearr_16399 = state_16389;
(statearr_16399[(13)] = inst_16272);

(statearr_16399[(14)] = inst_16271);

(statearr_16399[(15)] = inst_16273);

(statearr_16399[(16)] = inst_16307);

(statearr_16399[(17)] = inst_16270);

return statearr_16399;
})();
var statearr_16400_16484 = state_16389__$1;
(statearr_16400_16484[(2)] = null);

(statearr_16400_16484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (39))){
var state_16389__$1 = state_16389;
var statearr_16404_16485 = state_16389__$1;
(statearr_16404_16485[(2)] = null);

(statearr_16404_16485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (4))){
var inst_16261 = (state_16389[(11)]);
var inst_16261__$1 = (state_16389[(2)]);
var inst_16262 = (inst_16261__$1 == null);
var state_16389__$1 = (function (){var statearr_16405 = state_16389;
(statearr_16405[(11)] = inst_16261__$1);

return statearr_16405;
})();
if(cljs.core.truth_(inst_16262)){
var statearr_16406_16486 = state_16389__$1;
(statearr_16406_16486[(1)] = (5));

} else {
var statearr_16407_16487 = state_16389__$1;
(statearr_16407_16487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (15))){
var inst_16272 = (state_16389[(13)]);
var inst_16271 = (state_16389[(14)]);
var inst_16273 = (state_16389[(15)]);
var inst_16270 = (state_16389[(17)]);
var inst_16286 = (state_16389[(2)]);
var inst_16287 = (inst_16273 + (1));
var tmp16401 = inst_16272;
var tmp16402 = inst_16271;
var tmp16403 = inst_16270;
var inst_16270__$1 = tmp16403;
var inst_16271__$1 = tmp16402;
var inst_16272__$1 = tmp16401;
var inst_16273__$1 = inst_16287;
var state_16389__$1 = (function (){var statearr_16408 = state_16389;
(statearr_16408[(13)] = inst_16272__$1);

(statearr_16408[(18)] = inst_16286);

(statearr_16408[(14)] = inst_16271__$1);

(statearr_16408[(15)] = inst_16273__$1);

(statearr_16408[(17)] = inst_16270__$1);

return statearr_16408;
})();
var statearr_16409_16488 = state_16389__$1;
(statearr_16409_16488[(2)] = null);

(statearr_16409_16488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (21))){
var inst_16311 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16413_16489 = state_16389__$1;
(statearr_16413_16489[(2)] = inst_16311);

(statearr_16413_16489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (31))){
var inst_16337 = (state_16389[(9)]);
var inst_16341 = done.call(null,null);
var inst_16342 = cljs.core.async.untap_STAR_.call(null,m,inst_16337);
var state_16389__$1 = (function (){var statearr_16414 = state_16389;
(statearr_16414[(19)] = inst_16341);

return statearr_16414;
})();
var statearr_16415_16490 = state_16389__$1;
(statearr_16415_16490[(2)] = inst_16342);

(statearr_16415_16490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (32))){
var inst_16330 = (state_16389[(10)]);
var inst_16331 = (state_16389[(20)]);
var inst_16329 = (state_16389[(21)]);
var inst_16332 = (state_16389[(12)]);
var inst_16344 = (state_16389[(2)]);
var inst_16345 = (inst_16332 + (1));
var tmp16410 = inst_16330;
var tmp16411 = inst_16331;
var tmp16412 = inst_16329;
var inst_16329__$1 = tmp16412;
var inst_16330__$1 = tmp16410;
var inst_16331__$1 = tmp16411;
var inst_16332__$1 = inst_16345;
var state_16389__$1 = (function (){var statearr_16416 = state_16389;
(statearr_16416[(10)] = inst_16330__$1);

(statearr_16416[(20)] = inst_16331__$1);

(statearr_16416[(21)] = inst_16329__$1);

(statearr_16416[(22)] = inst_16344);

(statearr_16416[(12)] = inst_16332__$1);

return statearr_16416;
})();
var statearr_16417_16491 = state_16389__$1;
(statearr_16417_16491[(2)] = null);

(statearr_16417_16491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (40))){
var inst_16357 = (state_16389[(23)]);
var inst_16361 = done.call(null,null);
var inst_16362 = cljs.core.async.untap_STAR_.call(null,m,inst_16357);
var state_16389__$1 = (function (){var statearr_16418 = state_16389;
(statearr_16418[(24)] = inst_16361);

return statearr_16418;
})();
var statearr_16419_16492 = state_16389__$1;
(statearr_16419_16492[(2)] = inst_16362);

(statearr_16419_16492[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (33))){
var inst_16348 = (state_16389[(25)]);
var inst_16350 = cljs.core.chunked_seq_QMARK_.call(null,inst_16348);
var state_16389__$1 = state_16389;
if(inst_16350){
var statearr_16420_16493 = state_16389__$1;
(statearr_16420_16493[(1)] = (36));

} else {
var statearr_16421_16494 = state_16389__$1;
(statearr_16421_16494[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (13))){
var inst_16280 = (state_16389[(26)]);
var inst_16283 = cljs.core.async.close_BANG_.call(null,inst_16280);
var state_16389__$1 = state_16389;
var statearr_16422_16495 = state_16389__$1;
(statearr_16422_16495[(2)] = inst_16283);

(statearr_16422_16495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (22))){
var inst_16301 = (state_16389[(8)]);
var inst_16304 = cljs.core.async.close_BANG_.call(null,inst_16301);
var state_16389__$1 = state_16389;
var statearr_16423_16496 = state_16389__$1;
(statearr_16423_16496[(2)] = inst_16304);

(statearr_16423_16496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (36))){
var inst_16348 = (state_16389[(25)]);
var inst_16352 = cljs.core.chunk_first.call(null,inst_16348);
var inst_16353 = cljs.core.chunk_rest.call(null,inst_16348);
var inst_16354 = cljs.core.count.call(null,inst_16352);
var inst_16329 = inst_16353;
var inst_16330 = inst_16352;
var inst_16331 = inst_16354;
var inst_16332 = (0);
var state_16389__$1 = (function (){var statearr_16424 = state_16389;
(statearr_16424[(10)] = inst_16330);

(statearr_16424[(20)] = inst_16331);

(statearr_16424[(21)] = inst_16329);

(statearr_16424[(12)] = inst_16332);

return statearr_16424;
})();
var statearr_16425_16497 = state_16389__$1;
(statearr_16425_16497[(2)] = null);

(statearr_16425_16497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (41))){
var inst_16348 = (state_16389[(25)]);
var inst_16364 = (state_16389[(2)]);
var inst_16365 = cljs.core.next.call(null,inst_16348);
var inst_16329 = inst_16365;
var inst_16330 = null;
var inst_16331 = (0);
var inst_16332 = (0);
var state_16389__$1 = (function (){var statearr_16426 = state_16389;
(statearr_16426[(10)] = inst_16330);

(statearr_16426[(20)] = inst_16331);

(statearr_16426[(21)] = inst_16329);

(statearr_16426[(12)] = inst_16332);

(statearr_16426[(27)] = inst_16364);

return statearr_16426;
})();
var statearr_16427_16498 = state_16389__$1;
(statearr_16427_16498[(2)] = null);

(statearr_16427_16498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (43))){
var state_16389__$1 = state_16389;
var statearr_16428_16499 = state_16389__$1;
(statearr_16428_16499[(2)] = null);

(statearr_16428_16499[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (29))){
var inst_16373 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16429_16500 = state_16389__$1;
(statearr_16429_16500[(2)] = inst_16373);

(statearr_16429_16500[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (44))){
var inst_16382 = (state_16389[(2)]);
var state_16389__$1 = (function (){var statearr_16430 = state_16389;
(statearr_16430[(28)] = inst_16382);

return statearr_16430;
})();
var statearr_16431_16501 = state_16389__$1;
(statearr_16431_16501[(2)] = null);

(statearr_16431_16501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (6))){
var inst_16321 = (state_16389[(29)]);
var inst_16320 = cljs.core.deref.call(null,cs);
var inst_16321__$1 = cljs.core.keys.call(null,inst_16320);
var inst_16322 = cljs.core.count.call(null,inst_16321__$1);
var inst_16323 = cljs.core.reset_BANG_.call(null,dctr,inst_16322);
var inst_16328 = cljs.core.seq.call(null,inst_16321__$1);
var inst_16329 = inst_16328;
var inst_16330 = null;
var inst_16331 = (0);
var inst_16332 = (0);
var state_16389__$1 = (function (){var statearr_16432 = state_16389;
(statearr_16432[(10)] = inst_16330);

(statearr_16432[(20)] = inst_16331);

(statearr_16432[(29)] = inst_16321__$1);

(statearr_16432[(21)] = inst_16329);

(statearr_16432[(12)] = inst_16332);

(statearr_16432[(30)] = inst_16323);

return statearr_16432;
})();
var statearr_16433_16502 = state_16389__$1;
(statearr_16433_16502[(2)] = null);

(statearr_16433_16502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (28))){
var inst_16329 = (state_16389[(21)]);
var inst_16348 = (state_16389[(25)]);
var inst_16348__$1 = cljs.core.seq.call(null,inst_16329);
var state_16389__$1 = (function (){var statearr_16434 = state_16389;
(statearr_16434[(25)] = inst_16348__$1);

return statearr_16434;
})();
if(inst_16348__$1){
var statearr_16435_16503 = state_16389__$1;
(statearr_16435_16503[(1)] = (33));

} else {
var statearr_16436_16504 = state_16389__$1;
(statearr_16436_16504[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (25))){
var inst_16331 = (state_16389[(20)]);
var inst_16332 = (state_16389[(12)]);
var inst_16334 = (inst_16332 < inst_16331);
var inst_16335 = inst_16334;
var state_16389__$1 = state_16389;
if(cljs.core.truth_(inst_16335)){
var statearr_16437_16505 = state_16389__$1;
(statearr_16437_16505[(1)] = (27));

} else {
var statearr_16438_16506 = state_16389__$1;
(statearr_16438_16506[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (34))){
var state_16389__$1 = state_16389;
var statearr_16439_16507 = state_16389__$1;
(statearr_16439_16507[(2)] = null);

(statearr_16439_16507[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (17))){
var state_16389__$1 = state_16389;
var statearr_16440_16508 = state_16389__$1;
(statearr_16440_16508[(2)] = null);

(statearr_16440_16508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (3))){
var inst_16387 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16389__$1,inst_16387);
} else {
if((state_val_16390 === (12))){
var inst_16316 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16441_16509 = state_16389__$1;
(statearr_16441_16509[(2)] = inst_16316);

(statearr_16441_16509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (2))){
var state_16389__$1 = state_16389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16389__$1,(4),ch);
} else {
if((state_val_16390 === (23))){
var state_16389__$1 = state_16389;
var statearr_16442_16510 = state_16389__$1;
(statearr_16442_16510[(2)] = null);

(statearr_16442_16510[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (35))){
var inst_16371 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16443_16511 = state_16389__$1;
(statearr_16443_16511[(2)] = inst_16371);

(statearr_16443_16511[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (19))){
var inst_16290 = (state_16389[(7)]);
var inst_16294 = cljs.core.chunk_first.call(null,inst_16290);
var inst_16295 = cljs.core.chunk_rest.call(null,inst_16290);
var inst_16296 = cljs.core.count.call(null,inst_16294);
var inst_16270 = inst_16295;
var inst_16271 = inst_16294;
var inst_16272 = inst_16296;
var inst_16273 = (0);
var state_16389__$1 = (function (){var statearr_16444 = state_16389;
(statearr_16444[(13)] = inst_16272);

(statearr_16444[(14)] = inst_16271);

(statearr_16444[(15)] = inst_16273);

(statearr_16444[(17)] = inst_16270);

return statearr_16444;
})();
var statearr_16445_16512 = state_16389__$1;
(statearr_16445_16512[(2)] = null);

(statearr_16445_16512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (11))){
var inst_16290 = (state_16389[(7)]);
var inst_16270 = (state_16389[(17)]);
var inst_16290__$1 = cljs.core.seq.call(null,inst_16270);
var state_16389__$1 = (function (){var statearr_16446 = state_16389;
(statearr_16446[(7)] = inst_16290__$1);

return statearr_16446;
})();
if(inst_16290__$1){
var statearr_16447_16513 = state_16389__$1;
(statearr_16447_16513[(1)] = (16));

} else {
var statearr_16448_16514 = state_16389__$1;
(statearr_16448_16514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (9))){
var inst_16318 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16449_16515 = state_16389__$1;
(statearr_16449_16515[(2)] = inst_16318);

(statearr_16449_16515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (5))){
var inst_16268 = cljs.core.deref.call(null,cs);
var inst_16269 = cljs.core.seq.call(null,inst_16268);
var inst_16270 = inst_16269;
var inst_16271 = null;
var inst_16272 = (0);
var inst_16273 = (0);
var state_16389__$1 = (function (){var statearr_16450 = state_16389;
(statearr_16450[(13)] = inst_16272);

(statearr_16450[(14)] = inst_16271);

(statearr_16450[(15)] = inst_16273);

(statearr_16450[(17)] = inst_16270);

return statearr_16450;
})();
var statearr_16451_16516 = state_16389__$1;
(statearr_16451_16516[(2)] = null);

(statearr_16451_16516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (14))){
var state_16389__$1 = state_16389;
var statearr_16452_16517 = state_16389__$1;
(statearr_16452_16517[(2)] = null);

(statearr_16452_16517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (45))){
var inst_16379 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16453_16518 = state_16389__$1;
(statearr_16453_16518[(2)] = inst_16379);

(statearr_16453_16518[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (26))){
var inst_16321 = (state_16389[(29)]);
var inst_16375 = (state_16389[(2)]);
var inst_16376 = cljs.core.seq.call(null,inst_16321);
var state_16389__$1 = (function (){var statearr_16454 = state_16389;
(statearr_16454[(31)] = inst_16375);

return statearr_16454;
})();
if(inst_16376){
var statearr_16455_16519 = state_16389__$1;
(statearr_16455_16519[(1)] = (42));

} else {
var statearr_16456_16520 = state_16389__$1;
(statearr_16456_16520[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (16))){
var inst_16290 = (state_16389[(7)]);
var inst_16292 = cljs.core.chunked_seq_QMARK_.call(null,inst_16290);
var state_16389__$1 = state_16389;
if(inst_16292){
var statearr_16457_16521 = state_16389__$1;
(statearr_16457_16521[(1)] = (19));

} else {
var statearr_16458_16522 = state_16389__$1;
(statearr_16458_16522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (38))){
var inst_16368 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16459_16523 = state_16389__$1;
(statearr_16459_16523[(2)] = inst_16368);

(statearr_16459_16523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (30))){
var state_16389__$1 = state_16389;
var statearr_16460_16524 = state_16389__$1;
(statearr_16460_16524[(2)] = null);

(statearr_16460_16524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (10))){
var inst_16271 = (state_16389[(14)]);
var inst_16273 = (state_16389[(15)]);
var inst_16279 = cljs.core._nth.call(null,inst_16271,inst_16273);
var inst_16280 = cljs.core.nth.call(null,inst_16279,(0),null);
var inst_16281 = cljs.core.nth.call(null,inst_16279,(1),null);
var state_16389__$1 = (function (){var statearr_16461 = state_16389;
(statearr_16461[(26)] = inst_16280);

return statearr_16461;
})();
if(cljs.core.truth_(inst_16281)){
var statearr_16462_16525 = state_16389__$1;
(statearr_16462_16525[(1)] = (13));

} else {
var statearr_16463_16526 = state_16389__$1;
(statearr_16463_16526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (18))){
var inst_16314 = (state_16389[(2)]);
var state_16389__$1 = state_16389;
var statearr_16464_16527 = state_16389__$1;
(statearr_16464_16527[(2)] = inst_16314);

(statearr_16464_16527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (42))){
var state_16389__$1 = state_16389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16389__$1,(45),dchan);
} else {
if((state_val_16390 === (37))){
var inst_16261 = (state_16389[(11)]);
var inst_16357 = (state_16389[(23)]);
var inst_16348 = (state_16389[(25)]);
var inst_16357__$1 = cljs.core.first.call(null,inst_16348);
var inst_16358 = cljs.core.async.put_BANG_.call(null,inst_16357__$1,inst_16261,done);
var state_16389__$1 = (function (){var statearr_16465 = state_16389;
(statearr_16465[(23)] = inst_16357__$1);

return statearr_16465;
})();
if(cljs.core.truth_(inst_16358)){
var statearr_16466_16528 = state_16389__$1;
(statearr_16466_16528[(1)] = (39));

} else {
var statearr_16467_16529 = state_16389__$1;
(statearr_16467_16529[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (8))){
var inst_16272 = (state_16389[(13)]);
var inst_16273 = (state_16389[(15)]);
var inst_16275 = (inst_16273 < inst_16272);
var inst_16276 = inst_16275;
var state_16389__$1 = state_16389;
if(cljs.core.truth_(inst_16276)){
var statearr_16468_16530 = state_16389__$1;
(statearr_16468_16530[(1)] = (10));

} else {
var statearr_16469_16531 = state_16389__$1;
(statearr_16469_16531[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__8338__auto___16477,cs,m,dchan,dctr,done))
;
return ((function (switch__8276__auto__,c__8338__auto___16477,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8277__auto__ = null;
var cljs$core$async$mult_$_state_machine__8277__auto____0 = (function (){
var statearr_16473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16473[(0)] = cljs$core$async$mult_$_state_machine__8277__auto__);

(statearr_16473[(1)] = (1));

return statearr_16473;
});
var cljs$core$async$mult_$_state_machine__8277__auto____1 = (function (state_16389){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_16389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e16474){if((e16474 instanceof Object)){
var ex__8280__auto__ = e16474;
var statearr_16475_16532 = state_16389;
(statearr_16475_16532[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16533 = state_16389;
state_16389 = G__16533;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8277__auto__ = function(state_16389){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8277__auto____1.call(this,state_16389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8277__auto____0;
cljs$core$async$mult_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8277__auto____1;
return cljs$core$async$mult_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___16477,cs,m,dchan,dctr,done))
})();
var state__8340__auto__ = (function (){var statearr_16476 = f__8339__auto__.call(null);
(statearr_16476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___16477);

return statearr_16476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___16477,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__16535 = arguments.length;
switch (G__16535) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj16538 = {};
return obj16538;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16543){
var map__16544 = p__16543;
var map__16544__$1 = ((cljs.core.seq_QMARK_.call(null,map__16544))?cljs.core.apply.call(null,cljs.core.hash_map,map__16544):map__16544);
var opts = map__16544__$1;
var statearr_16545_16548 = state;
(statearr_16545_16548[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__16544,map__16544__$1,opts){
return (function (val){
var statearr_16546_16549 = state;
(statearr_16546_16549[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16544,map__16544__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_16547_16550 = state;
(statearr_16547_16550[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16539){
var G__16540 = cljs.core.first.call(null,seq16539);
var seq16539__$1 = cljs.core.next.call(null,seq16539);
var G__16541 = cljs.core.first.call(null,seq16539__$1);
var seq16539__$2 = cljs.core.next.call(null,seq16539__$1);
var G__16542 = cljs.core.first.call(null,seq16539__$2);
var seq16539__$3 = cljs.core.next.call(null,seq16539__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16540,G__16541,G__16542,seq16539__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t16670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16670 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16671){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16671 = meta16671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16672,meta16671__$1){
var self__ = this;
var _16672__$1 = this;
return (new cljs.core.async.t16670(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16672){
var self__ = this;
var _16672__$1 = this;
return self__.meta16671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16671","meta16671",890312733,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16670.cljs$lang$type = true;

cljs.core.async.t16670.cljs$lang$ctorStr = "cljs.core.async/t16670";

cljs.core.async.t16670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16671){
return (new cljs.core.async.t16670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16670(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8338__auto___16789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16742){
var state_val_16743 = (state_16742[(1)]);
if((state_val_16743 === (7))){
var inst_16686 = (state_16742[(7)]);
var inst_16691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16686);
var state_16742__$1 = state_16742;
var statearr_16744_16790 = state_16742__$1;
(statearr_16744_16790[(2)] = inst_16691);

(statearr_16744_16790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (20))){
var inst_16701 = (state_16742[(8)]);
var state_16742__$1 = state_16742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16742__$1,(23),out,inst_16701);
} else {
if((state_val_16743 === (1))){
var inst_16676 = (state_16742[(9)]);
var inst_16676__$1 = calc_state.call(null);
var inst_16677 = cljs.core.seq_QMARK_.call(null,inst_16676__$1);
var state_16742__$1 = (function (){var statearr_16745 = state_16742;
(statearr_16745[(9)] = inst_16676__$1);

return statearr_16745;
})();
if(inst_16677){
var statearr_16746_16791 = state_16742__$1;
(statearr_16746_16791[(1)] = (2));

} else {
var statearr_16747_16792 = state_16742__$1;
(statearr_16747_16792[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (24))){
var inst_16694 = (state_16742[(10)]);
var inst_16686 = inst_16694;
var state_16742__$1 = (function (){var statearr_16748 = state_16742;
(statearr_16748[(7)] = inst_16686);

return statearr_16748;
})();
var statearr_16749_16793 = state_16742__$1;
(statearr_16749_16793[(2)] = null);

(statearr_16749_16793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (4))){
var inst_16676 = (state_16742[(9)]);
var inst_16682 = (state_16742[(2)]);
var inst_16683 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16684 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16685 = cljs.core.get.call(null,inst_16682,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16686 = inst_16676;
var state_16742__$1 = (function (){var statearr_16750 = state_16742;
(statearr_16750[(11)] = inst_16684);

(statearr_16750[(12)] = inst_16685);

(statearr_16750[(7)] = inst_16686);

(statearr_16750[(13)] = inst_16683);

return statearr_16750;
})();
var statearr_16751_16794 = state_16742__$1;
(statearr_16751_16794[(2)] = null);

(statearr_16751_16794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (15))){
var state_16742__$1 = state_16742;
var statearr_16752_16795 = state_16742__$1;
(statearr_16752_16795[(2)] = null);

(statearr_16752_16795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (21))){
var inst_16694 = (state_16742[(10)]);
var inst_16686 = inst_16694;
var state_16742__$1 = (function (){var statearr_16753 = state_16742;
(statearr_16753[(7)] = inst_16686);

return statearr_16753;
})();
var statearr_16754_16796 = state_16742__$1;
(statearr_16754_16796[(2)] = null);

(statearr_16754_16796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (13))){
var inst_16738 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
var statearr_16755_16797 = state_16742__$1;
(statearr_16755_16797[(2)] = inst_16738);

(statearr_16755_16797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (22))){
var inst_16736 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
var statearr_16756_16798 = state_16742__$1;
(statearr_16756_16798[(2)] = inst_16736);

(statearr_16756_16798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (6))){
var inst_16740 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16742__$1,inst_16740);
} else {
if((state_val_16743 === (25))){
var state_16742__$1 = state_16742;
var statearr_16757_16799 = state_16742__$1;
(statearr_16757_16799[(2)] = null);

(statearr_16757_16799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (17))){
var inst_16716 = (state_16742[(14)]);
var state_16742__$1 = state_16742;
var statearr_16758_16800 = state_16742__$1;
(statearr_16758_16800[(2)] = inst_16716);

(statearr_16758_16800[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (3))){
var inst_16676 = (state_16742[(9)]);
var state_16742__$1 = state_16742;
var statearr_16759_16801 = state_16742__$1;
(statearr_16759_16801[(2)] = inst_16676);

(statearr_16759_16801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (12))){
var inst_16716 = (state_16742[(14)]);
var inst_16695 = (state_16742[(15)]);
var inst_16702 = (state_16742[(16)]);
var inst_16716__$1 = inst_16695.call(null,inst_16702);
var state_16742__$1 = (function (){var statearr_16760 = state_16742;
(statearr_16760[(14)] = inst_16716__$1);

return statearr_16760;
})();
if(cljs.core.truth_(inst_16716__$1)){
var statearr_16761_16802 = state_16742__$1;
(statearr_16761_16802[(1)] = (17));

} else {
var statearr_16762_16803 = state_16742__$1;
(statearr_16762_16803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (2))){
var inst_16676 = (state_16742[(9)]);
var inst_16679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16676);
var state_16742__$1 = state_16742;
var statearr_16763_16804 = state_16742__$1;
(statearr_16763_16804[(2)] = inst_16679);

(statearr_16763_16804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (23))){
var inst_16727 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
if(cljs.core.truth_(inst_16727)){
var statearr_16764_16805 = state_16742__$1;
(statearr_16764_16805[(1)] = (24));

} else {
var statearr_16765_16806 = state_16742__$1;
(statearr_16765_16806[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (19))){
var inst_16724 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
if(cljs.core.truth_(inst_16724)){
var statearr_16766_16807 = state_16742__$1;
(statearr_16766_16807[(1)] = (20));

} else {
var statearr_16767_16808 = state_16742__$1;
(statearr_16767_16808[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (11))){
var inst_16701 = (state_16742[(8)]);
var inst_16707 = (inst_16701 == null);
var state_16742__$1 = state_16742;
if(cljs.core.truth_(inst_16707)){
var statearr_16768_16809 = state_16742__$1;
(statearr_16768_16809[(1)] = (14));

} else {
var statearr_16769_16810 = state_16742__$1;
(statearr_16769_16810[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (9))){
var inst_16694 = (state_16742[(10)]);
var inst_16694__$1 = (state_16742[(2)]);
var inst_16695 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16696 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16697 = cljs.core.get.call(null,inst_16694__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16742__$1 = (function (){var statearr_16770 = state_16742;
(statearr_16770[(17)] = inst_16696);

(statearr_16770[(10)] = inst_16694__$1);

(statearr_16770[(15)] = inst_16695);

return statearr_16770;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16742__$1,(10),inst_16697);
} else {
if((state_val_16743 === (5))){
var inst_16686 = (state_16742[(7)]);
var inst_16689 = cljs.core.seq_QMARK_.call(null,inst_16686);
var state_16742__$1 = state_16742;
if(inst_16689){
var statearr_16771_16811 = state_16742__$1;
(statearr_16771_16811[(1)] = (7));

} else {
var statearr_16772_16812 = state_16742__$1;
(statearr_16772_16812[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (14))){
var inst_16702 = (state_16742[(16)]);
var inst_16709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16702);
var state_16742__$1 = state_16742;
var statearr_16773_16813 = state_16742__$1;
(statearr_16773_16813[(2)] = inst_16709);

(statearr_16773_16813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (26))){
var inst_16732 = (state_16742[(2)]);
var state_16742__$1 = state_16742;
var statearr_16774_16814 = state_16742__$1;
(statearr_16774_16814[(2)] = inst_16732);

(statearr_16774_16814[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (16))){
var inst_16712 = (state_16742[(2)]);
var inst_16713 = calc_state.call(null);
var inst_16686 = inst_16713;
var state_16742__$1 = (function (){var statearr_16775 = state_16742;
(statearr_16775[(18)] = inst_16712);

(statearr_16775[(7)] = inst_16686);

return statearr_16775;
})();
var statearr_16776_16815 = state_16742__$1;
(statearr_16776_16815[(2)] = null);

(statearr_16776_16815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (10))){
var inst_16701 = (state_16742[(8)]);
var inst_16702 = (state_16742[(16)]);
var inst_16700 = (state_16742[(2)]);
var inst_16701__$1 = cljs.core.nth.call(null,inst_16700,(0),null);
var inst_16702__$1 = cljs.core.nth.call(null,inst_16700,(1),null);
var inst_16703 = (inst_16701__$1 == null);
var inst_16704 = cljs.core._EQ_.call(null,inst_16702__$1,change);
var inst_16705 = (inst_16703) || (inst_16704);
var state_16742__$1 = (function (){var statearr_16777 = state_16742;
(statearr_16777[(8)] = inst_16701__$1);

(statearr_16777[(16)] = inst_16702__$1);

return statearr_16777;
})();
if(cljs.core.truth_(inst_16705)){
var statearr_16778_16816 = state_16742__$1;
(statearr_16778_16816[(1)] = (11));

} else {
var statearr_16779_16817 = state_16742__$1;
(statearr_16779_16817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (18))){
var inst_16696 = (state_16742[(17)]);
var inst_16695 = (state_16742[(15)]);
var inst_16702 = (state_16742[(16)]);
var inst_16719 = cljs.core.empty_QMARK_.call(null,inst_16695);
var inst_16720 = inst_16696.call(null,inst_16702);
var inst_16721 = cljs.core.not.call(null,inst_16720);
var inst_16722 = (inst_16719) && (inst_16721);
var state_16742__$1 = state_16742;
var statearr_16780_16818 = state_16742__$1;
(statearr_16780_16818[(2)] = inst_16722);

(statearr_16780_16818[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (8))){
var inst_16686 = (state_16742[(7)]);
var state_16742__$1 = state_16742;
var statearr_16781_16819 = state_16742__$1;
(statearr_16781_16819[(2)] = inst_16686);

(statearr_16781_16819[(1)] = (9));


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
});})(c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8276__auto__,c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8277__auto__ = null;
var cljs$core$async$mix_$_state_machine__8277__auto____0 = (function (){
var statearr_16785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16785[(0)] = cljs$core$async$mix_$_state_machine__8277__auto__);

(statearr_16785[(1)] = (1));

return statearr_16785;
});
var cljs$core$async$mix_$_state_machine__8277__auto____1 = (function (state_16742){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_16742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e16786){if((e16786 instanceof Object)){
var ex__8280__auto__ = e16786;
var statearr_16787_16820 = state_16742;
(statearr_16787_16820[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16821 = state_16742;
state_16742 = G__16821;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8277__auto__ = function(state_16742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8277__auto____1.call(this,state_16742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8277__auto____0;
cljs$core$async$mix_$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8277__auto____1;
return cljs$core$async$mix_$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8340__auto__ = (function (){var statearr_16788 = f__8339__auto__.call(null);
(statearr_16788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___16789);

return statearr_16788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___16789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj16823 = {};
return obj16823;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__16825 = arguments.length;
switch (G__16825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__16829 = arguments.length;
switch (G__16829) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__16827_SHARP_){
if(cljs.core.truth_(p1__16827_SHARP_.call(null,topic))){
return p1__16827_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16827_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16830 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16830 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16831){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16831 = meta16831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16832,meta16831__$1){
var self__ = this;
var _16832__$1 = this;
return (new cljs.core.async.t16830(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16831__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16832){
var self__ = this;
var _16832__$1 = this;
return self__.meta16831;
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16830.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16830.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16831","meta16831",1751876361,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t16830.cljs$lang$type = true;

cljs.core.async.t16830.cljs$lang$ctorStr = "cljs.core.async/t16830";

cljs.core.async.t16830.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16830");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16830 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t16830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16831){
return (new cljs.core.async.t16830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16831));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16830(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8338__auto___16953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___16953,mults,ensure_mult,p){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___16953,mults,ensure_mult,p){
return (function (state_16904){
var state_val_16905 = (state_16904[(1)]);
if((state_val_16905 === (7))){
var inst_16900 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16906_16954 = state_16904__$1;
(statearr_16906_16954[(2)] = inst_16900);

(statearr_16906_16954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (20))){
var state_16904__$1 = state_16904;
var statearr_16907_16955 = state_16904__$1;
(statearr_16907_16955[(2)] = null);

(statearr_16907_16955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (1))){
var state_16904__$1 = state_16904;
var statearr_16908_16956 = state_16904__$1;
(statearr_16908_16956[(2)] = null);

(statearr_16908_16956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (24))){
var inst_16883 = (state_16904[(7)]);
var inst_16892 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16883);
var state_16904__$1 = state_16904;
var statearr_16909_16957 = state_16904__$1;
(statearr_16909_16957[(2)] = inst_16892);

(statearr_16909_16957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (4))){
var inst_16835 = (state_16904[(8)]);
var inst_16835__$1 = (state_16904[(2)]);
var inst_16836 = (inst_16835__$1 == null);
var state_16904__$1 = (function (){var statearr_16910 = state_16904;
(statearr_16910[(8)] = inst_16835__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16836)){
var statearr_16911_16958 = state_16904__$1;
(statearr_16911_16958[(1)] = (5));

} else {
var statearr_16912_16959 = state_16904__$1;
(statearr_16912_16959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (15))){
var inst_16877 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16913_16960 = state_16904__$1;
(statearr_16913_16960[(2)] = inst_16877);

(statearr_16913_16960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (21))){
var inst_16897 = (state_16904[(2)]);
var state_16904__$1 = (function (){var statearr_16914 = state_16904;
(statearr_16914[(9)] = inst_16897);

return statearr_16914;
})();
var statearr_16915_16961 = state_16904__$1;
(statearr_16915_16961[(2)] = null);

(statearr_16915_16961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (13))){
var inst_16859 = (state_16904[(10)]);
var inst_16861 = cljs.core.chunked_seq_QMARK_.call(null,inst_16859);
var state_16904__$1 = state_16904;
if(inst_16861){
var statearr_16916_16962 = state_16904__$1;
(statearr_16916_16962[(1)] = (16));

} else {
var statearr_16917_16963 = state_16904__$1;
(statearr_16917_16963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (22))){
var inst_16889 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16889)){
var statearr_16918_16964 = state_16904__$1;
(statearr_16918_16964[(1)] = (23));

} else {
var statearr_16919_16965 = state_16904__$1;
(statearr_16919_16965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (6))){
var inst_16835 = (state_16904[(8)]);
var inst_16883 = (state_16904[(7)]);
var inst_16885 = (state_16904[(11)]);
var inst_16883__$1 = topic_fn.call(null,inst_16835);
var inst_16884 = cljs.core.deref.call(null,mults);
var inst_16885__$1 = cljs.core.get.call(null,inst_16884,inst_16883__$1);
var state_16904__$1 = (function (){var statearr_16920 = state_16904;
(statearr_16920[(7)] = inst_16883__$1);

(statearr_16920[(11)] = inst_16885__$1);

return statearr_16920;
})();
if(cljs.core.truth_(inst_16885__$1)){
var statearr_16921_16966 = state_16904__$1;
(statearr_16921_16966[(1)] = (19));

} else {
var statearr_16922_16967 = state_16904__$1;
(statearr_16922_16967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (25))){
var inst_16894 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16923_16968 = state_16904__$1;
(statearr_16923_16968[(2)] = inst_16894);

(statearr_16923_16968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (17))){
var inst_16859 = (state_16904[(10)]);
var inst_16868 = cljs.core.first.call(null,inst_16859);
var inst_16869 = cljs.core.async.muxch_STAR_.call(null,inst_16868);
var inst_16870 = cljs.core.async.close_BANG_.call(null,inst_16869);
var inst_16871 = cljs.core.next.call(null,inst_16859);
var inst_16845 = inst_16871;
var inst_16846 = null;
var inst_16847 = (0);
var inst_16848 = (0);
var state_16904__$1 = (function (){var statearr_16924 = state_16904;
(statearr_16924[(12)] = inst_16847);

(statearr_16924[(13)] = inst_16846);

(statearr_16924[(14)] = inst_16845);

(statearr_16924[(15)] = inst_16848);

(statearr_16924[(16)] = inst_16870);

return statearr_16924;
})();
var statearr_16925_16969 = state_16904__$1;
(statearr_16925_16969[(2)] = null);

(statearr_16925_16969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (3))){
var inst_16902 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16904__$1,inst_16902);
} else {
if((state_val_16905 === (12))){
var inst_16879 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16926_16970 = state_16904__$1;
(statearr_16926_16970[(2)] = inst_16879);

(statearr_16926_16970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (2))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,(4),ch);
} else {
if((state_val_16905 === (23))){
var state_16904__$1 = state_16904;
var statearr_16927_16971 = state_16904__$1;
(statearr_16927_16971[(2)] = null);

(statearr_16927_16971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (19))){
var inst_16835 = (state_16904[(8)]);
var inst_16885 = (state_16904[(11)]);
var inst_16887 = cljs.core.async.muxch_STAR_.call(null,inst_16885);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16904__$1,(22),inst_16887,inst_16835);
} else {
if((state_val_16905 === (11))){
var inst_16859 = (state_16904[(10)]);
var inst_16845 = (state_16904[(14)]);
var inst_16859__$1 = cljs.core.seq.call(null,inst_16845);
var state_16904__$1 = (function (){var statearr_16928 = state_16904;
(statearr_16928[(10)] = inst_16859__$1);

return statearr_16928;
})();
if(inst_16859__$1){
var statearr_16929_16972 = state_16904__$1;
(statearr_16929_16972[(1)] = (13));

} else {
var statearr_16930_16973 = state_16904__$1;
(statearr_16930_16973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (9))){
var inst_16881 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16931_16974 = state_16904__$1;
(statearr_16931_16974[(2)] = inst_16881);

(statearr_16931_16974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (5))){
var inst_16842 = cljs.core.deref.call(null,mults);
var inst_16843 = cljs.core.vals.call(null,inst_16842);
var inst_16844 = cljs.core.seq.call(null,inst_16843);
var inst_16845 = inst_16844;
var inst_16846 = null;
var inst_16847 = (0);
var inst_16848 = (0);
var state_16904__$1 = (function (){var statearr_16932 = state_16904;
(statearr_16932[(12)] = inst_16847);

(statearr_16932[(13)] = inst_16846);

(statearr_16932[(14)] = inst_16845);

(statearr_16932[(15)] = inst_16848);

return statearr_16932;
})();
var statearr_16933_16975 = state_16904__$1;
(statearr_16933_16975[(2)] = null);

(statearr_16933_16975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (14))){
var state_16904__$1 = state_16904;
var statearr_16937_16976 = state_16904__$1;
(statearr_16937_16976[(2)] = null);

(statearr_16937_16976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (16))){
var inst_16859 = (state_16904[(10)]);
var inst_16863 = cljs.core.chunk_first.call(null,inst_16859);
var inst_16864 = cljs.core.chunk_rest.call(null,inst_16859);
var inst_16865 = cljs.core.count.call(null,inst_16863);
var inst_16845 = inst_16864;
var inst_16846 = inst_16863;
var inst_16847 = inst_16865;
var inst_16848 = (0);
var state_16904__$1 = (function (){var statearr_16938 = state_16904;
(statearr_16938[(12)] = inst_16847);

(statearr_16938[(13)] = inst_16846);

(statearr_16938[(14)] = inst_16845);

(statearr_16938[(15)] = inst_16848);

return statearr_16938;
})();
var statearr_16939_16977 = state_16904__$1;
(statearr_16939_16977[(2)] = null);

(statearr_16939_16977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (10))){
var inst_16847 = (state_16904[(12)]);
var inst_16846 = (state_16904[(13)]);
var inst_16845 = (state_16904[(14)]);
var inst_16848 = (state_16904[(15)]);
var inst_16853 = cljs.core._nth.call(null,inst_16846,inst_16848);
var inst_16854 = cljs.core.async.muxch_STAR_.call(null,inst_16853);
var inst_16855 = cljs.core.async.close_BANG_.call(null,inst_16854);
var inst_16856 = (inst_16848 + (1));
var tmp16934 = inst_16847;
var tmp16935 = inst_16846;
var tmp16936 = inst_16845;
var inst_16845__$1 = tmp16936;
var inst_16846__$1 = tmp16935;
var inst_16847__$1 = tmp16934;
var inst_16848__$1 = inst_16856;
var state_16904__$1 = (function (){var statearr_16940 = state_16904;
(statearr_16940[(12)] = inst_16847__$1);

(statearr_16940[(13)] = inst_16846__$1);

(statearr_16940[(14)] = inst_16845__$1);

(statearr_16940[(15)] = inst_16848__$1);

(statearr_16940[(17)] = inst_16855);

return statearr_16940;
})();
var statearr_16941_16978 = state_16904__$1;
(statearr_16941_16978[(2)] = null);

(statearr_16941_16978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (18))){
var inst_16874 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16942_16979 = state_16904__$1;
(statearr_16942_16979[(2)] = inst_16874);

(statearr_16942_16979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (8))){
var inst_16847 = (state_16904[(12)]);
var inst_16848 = (state_16904[(15)]);
var inst_16850 = (inst_16848 < inst_16847);
var inst_16851 = inst_16850;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16851)){
var statearr_16943_16980 = state_16904__$1;
(statearr_16943_16980[(1)] = (10));

} else {
var statearr_16944_16981 = state_16904__$1;
(statearr_16944_16981[(1)] = (11));

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
});})(c__8338__auto___16953,mults,ensure_mult,p))
;
return ((function (switch__8276__auto__,c__8338__auto___16953,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_16948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16948[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_16948[(1)] = (1));

return statearr_16948;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_16904){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_16904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e16949){if((e16949 instanceof Object)){
var ex__8280__auto__ = e16949;
var statearr_16950_16982 = state_16904;
(statearr_16950_16982[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16983 = state_16904;
state_16904 = G__16983;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___16953,mults,ensure_mult,p))
})();
var state__8340__auto__ = (function (){var statearr_16951 = f__8339__auto__.call(null);
(statearr_16951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___16953);

return statearr_16951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___16953,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__16985 = arguments.length;
switch (G__16985) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__16988 = arguments.length;
switch (G__16988) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__16991 = arguments.length;
switch (G__16991) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8338__auto___17061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17030){
var state_val_17031 = (state_17030[(1)]);
if((state_val_17031 === (7))){
var state_17030__$1 = state_17030;
var statearr_17032_17062 = state_17030__$1;
(statearr_17032_17062[(2)] = null);

(statearr_17032_17062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (1))){
var state_17030__$1 = state_17030;
var statearr_17033_17063 = state_17030__$1;
(statearr_17033_17063[(2)] = null);

(statearr_17033_17063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (4))){
var inst_16994 = (state_17030[(7)]);
var inst_16996 = (inst_16994 < cnt);
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_16996)){
var statearr_17034_17064 = state_17030__$1;
(statearr_17034_17064[(1)] = (6));

} else {
var statearr_17035_17065 = state_17030__$1;
(statearr_17035_17065[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (15))){
var inst_17026 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17036_17066 = state_17030__$1;
(statearr_17036_17066[(2)] = inst_17026);

(statearr_17036_17066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (13))){
var inst_17019 = cljs.core.async.close_BANG_.call(null,out);
var state_17030__$1 = state_17030;
var statearr_17037_17067 = state_17030__$1;
(statearr_17037_17067[(2)] = inst_17019);

(statearr_17037_17067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (6))){
var state_17030__$1 = state_17030;
var statearr_17038_17068 = state_17030__$1;
(statearr_17038_17068[(2)] = null);

(statearr_17038_17068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (3))){
var inst_17028 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17030__$1,inst_17028);
} else {
if((state_val_17031 === (12))){
var inst_17016 = (state_17030[(8)]);
var inst_17016__$1 = (state_17030[(2)]);
var inst_17017 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17016__$1);
var state_17030__$1 = (function (){var statearr_17039 = state_17030;
(statearr_17039[(8)] = inst_17016__$1);

return statearr_17039;
})();
if(cljs.core.truth_(inst_17017)){
var statearr_17040_17069 = state_17030__$1;
(statearr_17040_17069[(1)] = (13));

} else {
var statearr_17041_17070 = state_17030__$1;
(statearr_17041_17070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (2))){
var inst_16993 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16994 = (0);
var state_17030__$1 = (function (){var statearr_17042 = state_17030;
(statearr_17042[(9)] = inst_16993);

(statearr_17042[(7)] = inst_16994);

return statearr_17042;
})();
var statearr_17043_17071 = state_17030__$1;
(statearr_17043_17071[(2)] = null);

(statearr_17043_17071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (11))){
var inst_16994 = (state_17030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17030,(10),Object,null,(9));
var inst_17003 = chs__$1.call(null,inst_16994);
var inst_17004 = done.call(null,inst_16994);
var inst_17005 = cljs.core.async.take_BANG_.call(null,inst_17003,inst_17004);
var state_17030__$1 = state_17030;
var statearr_17044_17072 = state_17030__$1;
(statearr_17044_17072[(2)] = inst_17005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (9))){
var inst_16994 = (state_17030[(7)]);
var inst_17007 = (state_17030[(2)]);
var inst_17008 = (inst_16994 + (1));
var inst_16994__$1 = inst_17008;
var state_17030__$1 = (function (){var statearr_17045 = state_17030;
(statearr_17045[(10)] = inst_17007);

(statearr_17045[(7)] = inst_16994__$1);

return statearr_17045;
})();
var statearr_17046_17073 = state_17030__$1;
(statearr_17046_17073[(2)] = null);

(statearr_17046_17073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (5))){
var inst_17014 = (state_17030[(2)]);
var state_17030__$1 = (function (){var statearr_17047 = state_17030;
(statearr_17047[(11)] = inst_17014);

return statearr_17047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17030__$1,(12),dchan);
} else {
if((state_val_17031 === (14))){
var inst_17016 = (state_17030[(8)]);
var inst_17021 = cljs.core.apply.call(null,f,inst_17016);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17030__$1,(16),out,inst_17021);
} else {
if((state_val_17031 === (16))){
var inst_17023 = (state_17030[(2)]);
var state_17030__$1 = (function (){var statearr_17048 = state_17030;
(statearr_17048[(12)] = inst_17023);

return statearr_17048;
})();
var statearr_17049_17074 = state_17030__$1;
(statearr_17049_17074[(2)] = null);

(statearr_17049_17074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (10))){
var inst_16998 = (state_17030[(2)]);
var inst_16999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17030__$1 = (function (){var statearr_17050 = state_17030;
(statearr_17050[(13)] = inst_16998);

return statearr_17050;
})();
var statearr_17051_17075 = state_17030__$1;
(statearr_17051_17075[(2)] = inst_16999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (8))){
var inst_17012 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17052_17076 = state_17030__$1;
(statearr_17052_17076[(2)] = inst_17012);

(statearr_17052_17076[(1)] = (5));


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
});})(c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8276__auto__,c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17030){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object)){
var ex__8280__auto__ = e17057;
var statearr_17058_17077 = state_17030;
(statearr_17058_17077[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17078 = state_17030;
state_17030 = G__17078;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8340__auto__ = (function (){var statearr_17059 = f__8339__auto__.call(null);
(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17061);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17061,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__17081 = arguments.length;
switch (G__17081) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17136,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17136,out){
return (function (state_17111){
var state_val_17112 = (state_17111[(1)]);
if((state_val_17112 === (7))){
var inst_17091 = (state_17111[(7)]);
var inst_17090 = (state_17111[(8)]);
var inst_17090__$1 = (state_17111[(2)]);
var inst_17091__$1 = cljs.core.nth.call(null,inst_17090__$1,(0),null);
var inst_17092 = cljs.core.nth.call(null,inst_17090__$1,(1),null);
var inst_17093 = (inst_17091__$1 == null);
var state_17111__$1 = (function (){var statearr_17113 = state_17111;
(statearr_17113[(7)] = inst_17091__$1);

(statearr_17113[(9)] = inst_17092);

(statearr_17113[(8)] = inst_17090__$1);

return statearr_17113;
})();
if(cljs.core.truth_(inst_17093)){
var statearr_17114_17137 = state_17111__$1;
(statearr_17114_17137[(1)] = (8));

} else {
var statearr_17115_17138 = state_17111__$1;
(statearr_17115_17138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (1))){
var inst_17082 = cljs.core.vec.call(null,chs);
var inst_17083 = inst_17082;
var state_17111__$1 = (function (){var statearr_17116 = state_17111;
(statearr_17116[(10)] = inst_17083);

return statearr_17116;
})();
var statearr_17117_17139 = state_17111__$1;
(statearr_17117_17139[(2)] = null);

(statearr_17117_17139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (4))){
var inst_17083 = (state_17111[(10)]);
var state_17111__$1 = state_17111;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17111__$1,(7),inst_17083);
} else {
if((state_val_17112 === (6))){
var inst_17107 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
var statearr_17118_17140 = state_17111__$1;
(statearr_17118_17140[(2)] = inst_17107);

(statearr_17118_17140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (3))){
var inst_17109 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17111__$1,inst_17109);
} else {
if((state_val_17112 === (2))){
var inst_17083 = (state_17111[(10)]);
var inst_17085 = cljs.core.count.call(null,inst_17083);
var inst_17086 = (inst_17085 > (0));
var state_17111__$1 = state_17111;
if(cljs.core.truth_(inst_17086)){
var statearr_17120_17141 = state_17111__$1;
(statearr_17120_17141[(1)] = (4));

} else {
var statearr_17121_17142 = state_17111__$1;
(statearr_17121_17142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (11))){
var inst_17083 = (state_17111[(10)]);
var inst_17100 = (state_17111[(2)]);
var tmp17119 = inst_17083;
var inst_17083__$1 = tmp17119;
var state_17111__$1 = (function (){var statearr_17122 = state_17111;
(statearr_17122[(10)] = inst_17083__$1);

(statearr_17122[(11)] = inst_17100);

return statearr_17122;
})();
var statearr_17123_17143 = state_17111__$1;
(statearr_17123_17143[(2)] = null);

(statearr_17123_17143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (9))){
var inst_17091 = (state_17111[(7)]);
var state_17111__$1 = state_17111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17111__$1,(11),out,inst_17091);
} else {
if((state_val_17112 === (5))){
var inst_17105 = cljs.core.async.close_BANG_.call(null,out);
var state_17111__$1 = state_17111;
var statearr_17124_17144 = state_17111__$1;
(statearr_17124_17144[(2)] = inst_17105);

(statearr_17124_17144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (10))){
var inst_17103 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
var statearr_17125_17145 = state_17111__$1;
(statearr_17125_17145[(2)] = inst_17103);

(statearr_17125_17145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (8))){
var inst_17083 = (state_17111[(10)]);
var inst_17091 = (state_17111[(7)]);
var inst_17092 = (state_17111[(9)]);
var inst_17090 = (state_17111[(8)]);
var inst_17095 = (function (){var cs = inst_17083;
var vec__17088 = inst_17090;
var v = inst_17091;
var c = inst_17092;
return ((function (cs,vec__17088,v,c,inst_17083,inst_17091,inst_17092,inst_17090,state_val_17112,c__8338__auto___17136,out){
return (function (p1__17079_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17079_SHARP_);
});
;})(cs,vec__17088,v,c,inst_17083,inst_17091,inst_17092,inst_17090,state_val_17112,c__8338__auto___17136,out))
})();
var inst_17096 = cljs.core.filterv.call(null,inst_17095,inst_17083);
var inst_17083__$1 = inst_17096;
var state_17111__$1 = (function (){var statearr_17126 = state_17111;
(statearr_17126[(10)] = inst_17083__$1);

return statearr_17126;
})();
var statearr_17127_17146 = state_17111__$1;
(statearr_17127_17146[(2)] = null);

(statearr_17127_17146[(1)] = (2));


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
});})(c__8338__auto___17136,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17136,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17131[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17131[(1)] = (1));

return statearr_17131;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17111){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17132){if((e17132 instanceof Object)){
var ex__8280__auto__ = e17132;
var statearr_17133_17147 = state_17111;
(statearr_17133_17147[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17148 = state_17111;
state_17111 = G__17148;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17136,out))
})();
var state__8340__auto__ = (function (){var statearr_17134 = f__8339__auto__.call(null);
(statearr_17134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17136);

return statearr_17134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17136,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__17150 = arguments.length;
switch (G__17150) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17198,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17198,out){
return (function (state_17174){
var state_val_17175 = (state_17174[(1)]);
if((state_val_17175 === (7))){
var inst_17156 = (state_17174[(7)]);
var inst_17156__$1 = (state_17174[(2)]);
var inst_17157 = (inst_17156__$1 == null);
var inst_17158 = cljs.core.not.call(null,inst_17157);
var state_17174__$1 = (function (){var statearr_17176 = state_17174;
(statearr_17176[(7)] = inst_17156__$1);

return statearr_17176;
})();
if(inst_17158){
var statearr_17177_17199 = state_17174__$1;
(statearr_17177_17199[(1)] = (8));

} else {
var statearr_17178_17200 = state_17174__$1;
(statearr_17178_17200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (1))){
var inst_17151 = (0);
var state_17174__$1 = (function (){var statearr_17179 = state_17174;
(statearr_17179[(8)] = inst_17151);

return statearr_17179;
})();
var statearr_17180_17201 = state_17174__$1;
(statearr_17180_17201[(2)] = null);

(statearr_17180_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (4))){
var state_17174__$1 = state_17174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17174__$1,(7),ch);
} else {
if((state_val_17175 === (6))){
var inst_17169 = (state_17174[(2)]);
var state_17174__$1 = state_17174;
var statearr_17181_17202 = state_17174__$1;
(statearr_17181_17202[(2)] = inst_17169);

(statearr_17181_17202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (3))){
var inst_17171 = (state_17174[(2)]);
var inst_17172 = cljs.core.async.close_BANG_.call(null,out);
var state_17174__$1 = (function (){var statearr_17182 = state_17174;
(statearr_17182[(9)] = inst_17171);

return statearr_17182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17174__$1,inst_17172);
} else {
if((state_val_17175 === (2))){
var inst_17151 = (state_17174[(8)]);
var inst_17153 = (inst_17151 < n);
var state_17174__$1 = state_17174;
if(cljs.core.truth_(inst_17153)){
var statearr_17183_17203 = state_17174__$1;
(statearr_17183_17203[(1)] = (4));

} else {
var statearr_17184_17204 = state_17174__$1;
(statearr_17184_17204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (11))){
var inst_17151 = (state_17174[(8)]);
var inst_17161 = (state_17174[(2)]);
var inst_17162 = (inst_17151 + (1));
var inst_17151__$1 = inst_17162;
var state_17174__$1 = (function (){var statearr_17185 = state_17174;
(statearr_17185[(8)] = inst_17151__$1);

(statearr_17185[(10)] = inst_17161);

return statearr_17185;
})();
var statearr_17186_17205 = state_17174__$1;
(statearr_17186_17205[(2)] = null);

(statearr_17186_17205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (9))){
var state_17174__$1 = state_17174;
var statearr_17187_17206 = state_17174__$1;
(statearr_17187_17206[(2)] = null);

(statearr_17187_17206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (5))){
var state_17174__$1 = state_17174;
var statearr_17188_17207 = state_17174__$1;
(statearr_17188_17207[(2)] = null);

(statearr_17188_17207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (10))){
var inst_17166 = (state_17174[(2)]);
var state_17174__$1 = state_17174;
var statearr_17189_17208 = state_17174__$1;
(statearr_17189_17208[(2)] = inst_17166);

(statearr_17189_17208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17175 === (8))){
var inst_17156 = (state_17174[(7)]);
var state_17174__$1 = state_17174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17174__$1,(11),out,inst_17156);
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
});})(c__8338__auto___17198,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17198,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17193[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17193[(1)] = (1));

return statearr_17193;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17174){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17194){if((e17194 instanceof Object)){
var ex__8280__auto__ = e17194;
var statearr_17195_17209 = state_17174;
(statearr_17195_17209[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17210 = state_17174;
state_17174 = G__17210;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17198,out))
})();
var state__8340__auto__ = (function (){var statearr_17196 = f__8339__auto__.call(null);
(statearr_17196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17198);

return statearr_17196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17198,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t17218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17218 = (function (map_LT_,f,ch,meta17219){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17219 = meta17219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17220,meta17219__$1){
var self__ = this;
var _17220__$1 = this;
return (new cljs.core.async.t17218(self__.map_LT_,self__.f,self__.ch,meta17219__$1));
});

cljs.core.async.t17218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17220){
var self__ = this;
var _17220__$1 = this;
return self__.meta17219;
});

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17221 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17221 = (function (map_LT_,f,ch,meta17219,_,fn1,meta17222){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17219 = meta17219;
this._ = _;
this.fn1 = fn1;
this.meta17222 = meta17222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17223,meta17222__$1){
var self__ = this;
var _17223__$1 = this;
return (new cljs.core.async.t17221(self__.map_LT_,self__.f,self__.ch,self__.meta17219,self__._,self__.fn1,meta17222__$1));
});})(___$1))
;

cljs.core.async.t17221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17223){
var self__ = this;
var _17223__$1 = this;
return self__.meta17222;
});})(___$1))
;

cljs.core.async.t17221.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17211_SHARP_){
return f1.call(null,(((p1__17211_SHARP_ == null))?null:self__.f.call(null,p1__17211_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17221.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17219","meta17219",1210934633,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17222","meta17222",-314944593,null)], null);
});})(___$1))
;

cljs.core.async.t17221.cljs$lang$type = true;

cljs.core.async.t17221.cljs$lang$ctorStr = "cljs.core.async/t17221";

cljs.core.async.t17221.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17221");
});})(___$1))
;

cljs.core.async.__GT_t17221 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t17221(map_LT___$1,f__$1,ch__$1,meta17219__$1,___$2,fn1__$1,meta17222){
return (new cljs.core.async.t17221(map_LT___$1,f__$1,ch__$1,meta17219__$1,___$2,fn1__$1,meta17222));
});})(___$1))
;

}

return (new cljs.core.async.t17221(self__.map_LT_,self__.f,self__.ch,self__.meta17219,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17219","meta17219",1210934633,null)], null);
});

cljs.core.async.t17218.cljs$lang$type = true;

cljs.core.async.t17218.cljs$lang$ctorStr = "cljs.core.async/t17218";

cljs.core.async.t17218.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17218");
});

cljs.core.async.__GT_t17218 = (function cljs$core$async$map_LT__$___GT_t17218(map_LT___$1,f__$1,ch__$1,meta17219){
return (new cljs.core.async.t17218(map_LT___$1,f__$1,ch__$1,meta17219));
});

}

return (new cljs.core.async.t17218(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t17227 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17227 = (function (map_GT_,f,ch,meta17228){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17228 = meta17228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17229,meta17228__$1){
var self__ = this;
var _17229__$1 = this;
return (new cljs.core.async.t17227(self__.map_GT_,self__.f,self__.ch,meta17228__$1));
});

cljs.core.async.t17227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17229){
var self__ = this;
var _17229__$1 = this;
return self__.meta17228;
});

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17228","meta17228",1576493322,null)], null);
});

cljs.core.async.t17227.cljs$lang$type = true;

cljs.core.async.t17227.cljs$lang$ctorStr = "cljs.core.async/t17227";

cljs.core.async.t17227.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17227");
});

cljs.core.async.__GT_t17227 = (function cljs$core$async$map_GT__$___GT_t17227(map_GT___$1,f__$1,ch__$1,meta17228){
return (new cljs.core.async.t17227(map_GT___$1,f__$1,ch__$1,meta17228));
});

}

return (new cljs.core.async.t17227(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t17233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17233 = (function (filter_GT_,p,ch,meta17234){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17234 = meta17234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17235,meta17234__$1){
var self__ = this;
var _17235__$1 = this;
return (new cljs.core.async.t17233(self__.filter_GT_,self__.p,self__.ch,meta17234__$1));
});

cljs.core.async.t17233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17235){
var self__ = this;
var _17235__$1 = this;
return self__.meta17234;
});

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17234","meta17234",1855634098,null)], null);
});

cljs.core.async.t17233.cljs$lang$type = true;

cljs.core.async.t17233.cljs$lang$ctorStr = "cljs.core.async/t17233";

cljs.core.async.t17233.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17233");
});

cljs.core.async.__GT_t17233 = (function cljs$core$async$filter_GT__$___GT_t17233(filter_GT___$1,p__$1,ch__$1,meta17234){
return (new cljs.core.async.t17233(filter_GT___$1,p__$1,ch__$1,meta17234));
});

}

return (new cljs.core.async.t17233(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__17237 = arguments.length;
switch (G__17237) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17280,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17280,out){
return (function (state_17258){
var state_val_17259 = (state_17258[(1)]);
if((state_val_17259 === (7))){
var inst_17254 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17260_17281 = state_17258__$1;
(statearr_17260_17281[(2)] = inst_17254);

(statearr_17260_17281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (1))){
var state_17258__$1 = state_17258;
var statearr_17261_17282 = state_17258__$1;
(statearr_17261_17282[(2)] = null);

(statearr_17261_17282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (4))){
var inst_17240 = (state_17258[(7)]);
var inst_17240__$1 = (state_17258[(2)]);
var inst_17241 = (inst_17240__$1 == null);
var state_17258__$1 = (function (){var statearr_17262 = state_17258;
(statearr_17262[(7)] = inst_17240__$1);

return statearr_17262;
})();
if(cljs.core.truth_(inst_17241)){
var statearr_17263_17283 = state_17258__$1;
(statearr_17263_17283[(1)] = (5));

} else {
var statearr_17264_17284 = state_17258__$1;
(statearr_17264_17284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (6))){
var inst_17240 = (state_17258[(7)]);
var inst_17245 = p.call(null,inst_17240);
var state_17258__$1 = state_17258;
if(cljs.core.truth_(inst_17245)){
var statearr_17265_17285 = state_17258__$1;
(statearr_17265_17285[(1)] = (8));

} else {
var statearr_17266_17286 = state_17258__$1;
(statearr_17266_17286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (3))){
var inst_17256 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17258__$1,inst_17256);
} else {
if((state_val_17259 === (2))){
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17258__$1,(4),ch);
} else {
if((state_val_17259 === (11))){
var inst_17248 = (state_17258[(2)]);
var state_17258__$1 = state_17258;
var statearr_17267_17287 = state_17258__$1;
(statearr_17267_17287[(2)] = inst_17248);

(statearr_17267_17287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (9))){
var state_17258__$1 = state_17258;
var statearr_17268_17288 = state_17258__$1;
(statearr_17268_17288[(2)] = null);

(statearr_17268_17288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (5))){
var inst_17243 = cljs.core.async.close_BANG_.call(null,out);
var state_17258__$1 = state_17258;
var statearr_17269_17289 = state_17258__$1;
(statearr_17269_17289[(2)] = inst_17243);

(statearr_17269_17289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (10))){
var inst_17251 = (state_17258[(2)]);
var state_17258__$1 = (function (){var statearr_17270 = state_17258;
(statearr_17270[(8)] = inst_17251);

return statearr_17270;
})();
var statearr_17271_17290 = state_17258__$1;
(statearr_17271_17290[(2)] = null);

(statearr_17271_17290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17259 === (8))){
var inst_17240 = (state_17258[(7)]);
var state_17258__$1 = state_17258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17258__$1,(11),out,inst_17240);
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
});})(c__8338__auto___17280,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17280,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17275 = [null,null,null,null,null,null,null,null,null];
(statearr_17275[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17275[(1)] = (1));

return statearr_17275;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17258){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17276){if((e17276 instanceof Object)){
var ex__8280__auto__ = e17276;
var statearr_17277_17291 = state_17258;
(statearr_17277_17291[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17292 = state_17258;
state_17258 = G__17292;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17280,out))
})();
var state__8340__auto__ = (function (){var statearr_17278 = f__8339__auto__.call(null);
(statearr_17278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17280);

return statearr_17278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17280,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17294 = arguments.length;
switch (G__17294) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto__){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto__){
return (function (state_17461){
var state_val_17462 = (state_17461[(1)]);
if((state_val_17462 === (7))){
var inst_17457 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17463_17504 = state_17461__$1;
(statearr_17463_17504[(2)] = inst_17457);

(statearr_17463_17504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (20))){
var inst_17427 = (state_17461[(7)]);
var inst_17438 = (state_17461[(2)]);
var inst_17439 = cljs.core.next.call(null,inst_17427);
var inst_17413 = inst_17439;
var inst_17414 = null;
var inst_17415 = (0);
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17464 = state_17461;
(statearr_17464[(8)] = inst_17413);

(statearr_17464[(9)] = inst_17415);

(statearr_17464[(10)] = inst_17414);

(statearr_17464[(11)] = inst_17438);

(statearr_17464[(12)] = inst_17416);

return statearr_17464;
})();
var statearr_17465_17505 = state_17461__$1;
(statearr_17465_17505[(2)] = null);

(statearr_17465_17505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (1))){
var state_17461__$1 = state_17461;
var statearr_17466_17506 = state_17461__$1;
(statearr_17466_17506[(2)] = null);

(statearr_17466_17506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (4))){
var inst_17402 = (state_17461[(13)]);
var inst_17402__$1 = (state_17461[(2)]);
var inst_17403 = (inst_17402__$1 == null);
var state_17461__$1 = (function (){var statearr_17467 = state_17461;
(statearr_17467[(13)] = inst_17402__$1);

return statearr_17467;
})();
if(cljs.core.truth_(inst_17403)){
var statearr_17468_17507 = state_17461__$1;
(statearr_17468_17507[(1)] = (5));

} else {
var statearr_17469_17508 = state_17461__$1;
(statearr_17469_17508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (15))){
var state_17461__$1 = state_17461;
var statearr_17473_17509 = state_17461__$1;
(statearr_17473_17509[(2)] = null);

(statearr_17473_17509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (21))){
var state_17461__$1 = state_17461;
var statearr_17474_17510 = state_17461__$1;
(statearr_17474_17510[(2)] = null);

(statearr_17474_17510[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (13))){
var inst_17413 = (state_17461[(8)]);
var inst_17415 = (state_17461[(9)]);
var inst_17414 = (state_17461[(10)]);
var inst_17416 = (state_17461[(12)]);
var inst_17423 = (state_17461[(2)]);
var inst_17424 = (inst_17416 + (1));
var tmp17470 = inst_17413;
var tmp17471 = inst_17415;
var tmp17472 = inst_17414;
var inst_17413__$1 = tmp17470;
var inst_17414__$1 = tmp17472;
var inst_17415__$1 = tmp17471;
var inst_17416__$1 = inst_17424;
var state_17461__$1 = (function (){var statearr_17475 = state_17461;
(statearr_17475[(14)] = inst_17423);

(statearr_17475[(8)] = inst_17413__$1);

(statearr_17475[(9)] = inst_17415__$1);

(statearr_17475[(10)] = inst_17414__$1);

(statearr_17475[(12)] = inst_17416__$1);

return statearr_17475;
})();
var statearr_17476_17511 = state_17461__$1;
(statearr_17476_17511[(2)] = null);

(statearr_17476_17511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (22))){
var state_17461__$1 = state_17461;
var statearr_17477_17512 = state_17461__$1;
(statearr_17477_17512[(2)] = null);

(statearr_17477_17512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (6))){
var inst_17402 = (state_17461[(13)]);
var inst_17411 = f.call(null,inst_17402);
var inst_17412 = cljs.core.seq.call(null,inst_17411);
var inst_17413 = inst_17412;
var inst_17414 = null;
var inst_17415 = (0);
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17478 = state_17461;
(statearr_17478[(8)] = inst_17413);

(statearr_17478[(9)] = inst_17415);

(statearr_17478[(10)] = inst_17414);

(statearr_17478[(12)] = inst_17416);

return statearr_17478;
})();
var statearr_17479_17513 = state_17461__$1;
(statearr_17479_17513[(2)] = null);

(statearr_17479_17513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (17))){
var inst_17427 = (state_17461[(7)]);
var inst_17431 = cljs.core.chunk_first.call(null,inst_17427);
var inst_17432 = cljs.core.chunk_rest.call(null,inst_17427);
var inst_17433 = cljs.core.count.call(null,inst_17431);
var inst_17413 = inst_17432;
var inst_17414 = inst_17431;
var inst_17415 = inst_17433;
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17480 = state_17461;
(statearr_17480[(8)] = inst_17413);

(statearr_17480[(9)] = inst_17415);

(statearr_17480[(10)] = inst_17414);

(statearr_17480[(12)] = inst_17416);

return statearr_17480;
})();
var statearr_17481_17514 = state_17461__$1;
(statearr_17481_17514[(2)] = null);

(statearr_17481_17514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (3))){
var inst_17459 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17461__$1,inst_17459);
} else {
if((state_val_17462 === (12))){
var inst_17447 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17482_17515 = state_17461__$1;
(statearr_17482_17515[(2)] = inst_17447);

(statearr_17482_17515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (2))){
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17461__$1,(4),in$);
} else {
if((state_val_17462 === (23))){
var inst_17455 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17483_17516 = state_17461__$1;
(statearr_17483_17516[(2)] = inst_17455);

(statearr_17483_17516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (19))){
var inst_17442 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17484_17517 = state_17461__$1;
(statearr_17484_17517[(2)] = inst_17442);

(statearr_17484_17517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (11))){
var inst_17427 = (state_17461[(7)]);
var inst_17413 = (state_17461[(8)]);
var inst_17427__$1 = cljs.core.seq.call(null,inst_17413);
var state_17461__$1 = (function (){var statearr_17485 = state_17461;
(statearr_17485[(7)] = inst_17427__$1);

return statearr_17485;
})();
if(inst_17427__$1){
var statearr_17486_17518 = state_17461__$1;
(statearr_17486_17518[(1)] = (14));

} else {
var statearr_17487_17519 = state_17461__$1;
(statearr_17487_17519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (9))){
var inst_17449 = (state_17461[(2)]);
var inst_17450 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17461__$1 = (function (){var statearr_17488 = state_17461;
(statearr_17488[(15)] = inst_17449);

return statearr_17488;
})();
if(cljs.core.truth_(inst_17450)){
var statearr_17489_17520 = state_17461__$1;
(statearr_17489_17520[(1)] = (21));

} else {
var statearr_17490_17521 = state_17461__$1;
(statearr_17490_17521[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (5))){
var inst_17405 = cljs.core.async.close_BANG_.call(null,out);
var state_17461__$1 = state_17461;
var statearr_17491_17522 = state_17461__$1;
(statearr_17491_17522[(2)] = inst_17405);

(statearr_17491_17522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (14))){
var inst_17427 = (state_17461[(7)]);
var inst_17429 = cljs.core.chunked_seq_QMARK_.call(null,inst_17427);
var state_17461__$1 = state_17461;
if(inst_17429){
var statearr_17492_17523 = state_17461__$1;
(statearr_17492_17523[(1)] = (17));

} else {
var statearr_17493_17524 = state_17461__$1;
(statearr_17493_17524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (16))){
var inst_17445 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17494_17525 = state_17461__$1;
(statearr_17494_17525[(2)] = inst_17445);

(statearr_17494_17525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17462 === (10))){
var inst_17414 = (state_17461[(10)]);
var inst_17416 = (state_17461[(12)]);
var inst_17421 = cljs.core._nth.call(null,inst_17414,inst_17416);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17461__$1,(13),out,inst_17421);
} else {
if((state_val_17462 === (18))){
var inst_17427 = (state_17461[(7)]);
var inst_17436 = cljs.core.first.call(null,inst_17427);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17461__$1,(20),out,inst_17436);
} else {
if((state_val_17462 === (8))){
var inst_17415 = (state_17461[(9)]);
var inst_17416 = (state_17461[(12)]);
var inst_17418 = (inst_17416 < inst_17415);
var inst_17419 = inst_17418;
var state_17461__$1 = state_17461;
if(cljs.core.truth_(inst_17419)){
var statearr_17495_17526 = state_17461__$1;
(statearr_17495_17526[(1)] = (10));

} else {
var statearr_17496_17527 = state_17461__$1;
(statearr_17496_17527[(1)] = (11));

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
});})(c__8338__auto__))
;
return ((function (switch__8276__auto__,c__8338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____0 = (function (){
var statearr_17500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17500[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__);

(statearr_17500[(1)] = (1));

return statearr_17500;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____1 = (function (state_17461){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17501){if((e17501 instanceof Object)){
var ex__8280__auto__ = e17501;
var statearr_17502_17528 = state_17461;
(statearr_17502_17528[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17529 = state_17461;
state_17461 = G__17529;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__ = function(state_17461){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____1.call(this,state_17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8277__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto__))
})();
var state__8340__auto__ = (function (){var statearr_17503 = f__8339__auto__.call(null);
(statearr_17503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto__);

return statearr_17503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto__))
);

return c__8338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17531 = arguments.length;
switch (G__17531) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__17534 = arguments.length;
switch (G__17534) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__17537 = arguments.length;
switch (G__17537) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17587,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17587,out){
return (function (state_17561){
var state_val_17562 = (state_17561[(1)]);
if((state_val_17562 === (7))){
var inst_17556 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17563_17588 = state_17561__$1;
(statearr_17563_17588[(2)] = inst_17556);

(statearr_17563_17588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (1))){
var inst_17538 = null;
var state_17561__$1 = (function (){var statearr_17564 = state_17561;
(statearr_17564[(7)] = inst_17538);

return statearr_17564;
})();
var statearr_17565_17589 = state_17561__$1;
(statearr_17565_17589[(2)] = null);

(statearr_17565_17589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (4))){
var inst_17541 = (state_17561[(8)]);
var inst_17541__$1 = (state_17561[(2)]);
var inst_17542 = (inst_17541__$1 == null);
var inst_17543 = cljs.core.not.call(null,inst_17542);
var state_17561__$1 = (function (){var statearr_17566 = state_17561;
(statearr_17566[(8)] = inst_17541__$1);

return statearr_17566;
})();
if(inst_17543){
var statearr_17567_17590 = state_17561__$1;
(statearr_17567_17590[(1)] = (5));

} else {
var statearr_17568_17591 = state_17561__$1;
(statearr_17568_17591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (6))){
var state_17561__$1 = state_17561;
var statearr_17569_17592 = state_17561__$1;
(statearr_17569_17592[(2)] = null);

(statearr_17569_17592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (3))){
var inst_17558 = (state_17561[(2)]);
var inst_17559 = cljs.core.async.close_BANG_.call(null,out);
var state_17561__$1 = (function (){var statearr_17570 = state_17561;
(statearr_17570[(9)] = inst_17558);

return statearr_17570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17561__$1,inst_17559);
} else {
if((state_val_17562 === (2))){
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17561__$1,(4),ch);
} else {
if((state_val_17562 === (11))){
var inst_17541 = (state_17561[(8)]);
var inst_17550 = (state_17561[(2)]);
var inst_17538 = inst_17541;
var state_17561__$1 = (function (){var statearr_17571 = state_17561;
(statearr_17571[(10)] = inst_17550);

(statearr_17571[(7)] = inst_17538);

return statearr_17571;
})();
var statearr_17572_17593 = state_17561__$1;
(statearr_17572_17593[(2)] = null);

(statearr_17572_17593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (9))){
var inst_17541 = (state_17561[(8)]);
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17561__$1,(11),out,inst_17541);
} else {
if((state_val_17562 === (5))){
var inst_17538 = (state_17561[(7)]);
var inst_17541 = (state_17561[(8)]);
var inst_17545 = cljs.core._EQ_.call(null,inst_17541,inst_17538);
var state_17561__$1 = state_17561;
if(inst_17545){
var statearr_17574_17594 = state_17561__$1;
(statearr_17574_17594[(1)] = (8));

} else {
var statearr_17575_17595 = state_17561__$1;
(statearr_17575_17595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (10))){
var inst_17553 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17576_17596 = state_17561__$1;
(statearr_17576_17596[(2)] = inst_17553);

(statearr_17576_17596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (8))){
var inst_17538 = (state_17561[(7)]);
var tmp17573 = inst_17538;
var inst_17538__$1 = tmp17573;
var state_17561__$1 = (function (){var statearr_17577 = state_17561;
(statearr_17577[(7)] = inst_17538__$1);

return statearr_17577;
})();
var statearr_17578_17597 = state_17561__$1;
(statearr_17578_17597[(2)] = null);

(statearr_17578_17597[(1)] = (2));


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
});})(c__8338__auto___17587,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17587,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17582[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17582[(1)] = (1));

return statearr_17582;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17561){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17583){if((e17583 instanceof Object)){
var ex__8280__auto__ = e17583;
var statearr_17584_17598 = state_17561;
(statearr_17584_17598[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17599 = state_17561;
state_17561 = G__17599;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17587,out))
})();
var state__8340__auto__ = (function (){var statearr_17585 = f__8339__auto__.call(null);
(statearr_17585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17587);

return statearr_17585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17587,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__17601 = arguments.length;
switch (G__17601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17670,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17670,out){
return (function (state_17639){
var state_val_17640 = (state_17639[(1)]);
if((state_val_17640 === (7))){
var inst_17635 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17641_17671 = state_17639__$1;
(statearr_17641_17671[(2)] = inst_17635);

(statearr_17641_17671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (1))){
var inst_17602 = (new Array(n));
var inst_17603 = inst_17602;
var inst_17604 = (0);
var state_17639__$1 = (function (){var statearr_17642 = state_17639;
(statearr_17642[(7)] = inst_17603);

(statearr_17642[(8)] = inst_17604);

return statearr_17642;
})();
var statearr_17643_17672 = state_17639__$1;
(statearr_17643_17672[(2)] = null);

(statearr_17643_17672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (4))){
var inst_17607 = (state_17639[(9)]);
var inst_17607__$1 = (state_17639[(2)]);
var inst_17608 = (inst_17607__$1 == null);
var inst_17609 = cljs.core.not.call(null,inst_17608);
var state_17639__$1 = (function (){var statearr_17644 = state_17639;
(statearr_17644[(9)] = inst_17607__$1);

return statearr_17644;
})();
if(inst_17609){
var statearr_17645_17673 = state_17639__$1;
(statearr_17645_17673[(1)] = (5));

} else {
var statearr_17646_17674 = state_17639__$1;
(statearr_17646_17674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (15))){
var inst_17629 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17647_17675 = state_17639__$1;
(statearr_17647_17675[(2)] = inst_17629);

(statearr_17647_17675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (13))){
var state_17639__$1 = state_17639;
var statearr_17648_17676 = state_17639__$1;
(statearr_17648_17676[(2)] = null);

(statearr_17648_17676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (6))){
var inst_17604 = (state_17639[(8)]);
var inst_17625 = (inst_17604 > (0));
var state_17639__$1 = state_17639;
if(cljs.core.truth_(inst_17625)){
var statearr_17649_17677 = state_17639__$1;
(statearr_17649_17677[(1)] = (12));

} else {
var statearr_17650_17678 = state_17639__$1;
(statearr_17650_17678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (3))){
var inst_17637 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17639__$1,inst_17637);
} else {
if((state_val_17640 === (12))){
var inst_17603 = (state_17639[(7)]);
var inst_17627 = cljs.core.vec.call(null,inst_17603);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17639__$1,(15),out,inst_17627);
} else {
if((state_val_17640 === (2))){
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17639__$1,(4),ch);
} else {
if((state_val_17640 === (11))){
var inst_17619 = (state_17639[(2)]);
var inst_17620 = (new Array(n));
var inst_17603 = inst_17620;
var inst_17604 = (0);
var state_17639__$1 = (function (){var statearr_17651 = state_17639;
(statearr_17651[(7)] = inst_17603);

(statearr_17651[(10)] = inst_17619);

(statearr_17651[(8)] = inst_17604);

return statearr_17651;
})();
var statearr_17652_17679 = state_17639__$1;
(statearr_17652_17679[(2)] = null);

(statearr_17652_17679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (9))){
var inst_17603 = (state_17639[(7)]);
var inst_17617 = cljs.core.vec.call(null,inst_17603);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17639__$1,(11),out,inst_17617);
} else {
if((state_val_17640 === (5))){
var inst_17603 = (state_17639[(7)]);
var inst_17612 = (state_17639[(11)]);
var inst_17604 = (state_17639[(8)]);
var inst_17607 = (state_17639[(9)]);
var inst_17611 = (inst_17603[inst_17604] = inst_17607);
var inst_17612__$1 = (inst_17604 + (1));
var inst_17613 = (inst_17612__$1 < n);
var state_17639__$1 = (function (){var statearr_17653 = state_17639;
(statearr_17653[(11)] = inst_17612__$1);

(statearr_17653[(12)] = inst_17611);

return statearr_17653;
})();
if(cljs.core.truth_(inst_17613)){
var statearr_17654_17680 = state_17639__$1;
(statearr_17654_17680[(1)] = (8));

} else {
var statearr_17655_17681 = state_17639__$1;
(statearr_17655_17681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (14))){
var inst_17632 = (state_17639[(2)]);
var inst_17633 = cljs.core.async.close_BANG_.call(null,out);
var state_17639__$1 = (function (){var statearr_17657 = state_17639;
(statearr_17657[(13)] = inst_17632);

return statearr_17657;
})();
var statearr_17658_17682 = state_17639__$1;
(statearr_17658_17682[(2)] = inst_17633);

(statearr_17658_17682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (10))){
var inst_17623 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17659_17683 = state_17639__$1;
(statearr_17659_17683[(2)] = inst_17623);

(statearr_17659_17683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (8))){
var inst_17603 = (state_17639[(7)]);
var inst_17612 = (state_17639[(11)]);
var tmp17656 = inst_17603;
var inst_17603__$1 = tmp17656;
var inst_17604 = inst_17612;
var state_17639__$1 = (function (){var statearr_17660 = state_17639;
(statearr_17660[(7)] = inst_17603__$1);

(statearr_17660[(8)] = inst_17604);

return statearr_17660;
})();
var statearr_17661_17684 = state_17639__$1;
(statearr_17661_17684[(2)] = null);

(statearr_17661_17684[(1)] = (2));


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
});})(c__8338__auto___17670,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17670,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17665[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17665[(1)] = (1));

return statearr_17665;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17639){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17666){if((e17666 instanceof Object)){
var ex__8280__auto__ = e17666;
var statearr_17667_17685 = state_17639;
(statearr_17667_17685[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17686 = state_17639;
state_17639 = G__17686;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17670,out))
})();
var state__8340__auto__ = (function (){var statearr_17668 = f__8339__auto__.call(null);
(statearr_17668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17670);

return statearr_17668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17670,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__17688 = arguments.length;
switch (G__17688) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8338__auto___17761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8338__auto___17761,out){
return (function (){
var f__8339__auto__ = (function (){var switch__8276__auto__ = ((function (c__8338__auto___17761,out){
return (function (state_17730){
var state_val_17731 = (state_17730[(1)]);
if((state_val_17731 === (7))){
var inst_17726 = (state_17730[(2)]);
var state_17730__$1 = state_17730;
var statearr_17732_17762 = state_17730__$1;
(statearr_17732_17762[(2)] = inst_17726);

(statearr_17732_17762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (1))){
var inst_17689 = [];
var inst_17690 = inst_17689;
var inst_17691 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17730__$1 = (function (){var statearr_17733 = state_17730;
(statearr_17733[(7)] = inst_17690);

(statearr_17733[(8)] = inst_17691);

return statearr_17733;
})();
var statearr_17734_17763 = state_17730__$1;
(statearr_17734_17763[(2)] = null);

(statearr_17734_17763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (4))){
var inst_17694 = (state_17730[(9)]);
var inst_17694__$1 = (state_17730[(2)]);
var inst_17695 = (inst_17694__$1 == null);
var inst_17696 = cljs.core.not.call(null,inst_17695);
var state_17730__$1 = (function (){var statearr_17735 = state_17730;
(statearr_17735[(9)] = inst_17694__$1);

return statearr_17735;
})();
if(inst_17696){
var statearr_17736_17764 = state_17730__$1;
(statearr_17736_17764[(1)] = (5));

} else {
var statearr_17737_17765 = state_17730__$1;
(statearr_17737_17765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (15))){
var inst_17720 = (state_17730[(2)]);
var state_17730__$1 = state_17730;
var statearr_17738_17766 = state_17730__$1;
(statearr_17738_17766[(2)] = inst_17720);

(statearr_17738_17766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (13))){
var state_17730__$1 = state_17730;
var statearr_17739_17767 = state_17730__$1;
(statearr_17739_17767[(2)] = null);

(statearr_17739_17767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (6))){
var inst_17690 = (state_17730[(7)]);
var inst_17715 = inst_17690.length;
var inst_17716 = (inst_17715 > (0));
var state_17730__$1 = state_17730;
if(cljs.core.truth_(inst_17716)){
var statearr_17740_17768 = state_17730__$1;
(statearr_17740_17768[(1)] = (12));

} else {
var statearr_17741_17769 = state_17730__$1;
(statearr_17741_17769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (3))){
var inst_17728 = (state_17730[(2)]);
var state_17730__$1 = state_17730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17730__$1,inst_17728);
} else {
if((state_val_17731 === (12))){
var inst_17690 = (state_17730[(7)]);
var inst_17718 = cljs.core.vec.call(null,inst_17690);
var state_17730__$1 = state_17730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17730__$1,(15),out,inst_17718);
} else {
if((state_val_17731 === (2))){
var state_17730__$1 = state_17730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17730__$1,(4),ch);
} else {
if((state_val_17731 === (11))){
var inst_17698 = (state_17730[(10)]);
var inst_17694 = (state_17730[(9)]);
var inst_17708 = (state_17730[(2)]);
var inst_17709 = [];
var inst_17710 = inst_17709.push(inst_17694);
var inst_17690 = inst_17709;
var inst_17691 = inst_17698;
var state_17730__$1 = (function (){var statearr_17742 = state_17730;
(statearr_17742[(7)] = inst_17690);

(statearr_17742[(11)] = inst_17708);

(statearr_17742[(12)] = inst_17710);

(statearr_17742[(8)] = inst_17691);

return statearr_17742;
})();
var statearr_17743_17770 = state_17730__$1;
(statearr_17743_17770[(2)] = null);

(statearr_17743_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (9))){
var inst_17690 = (state_17730[(7)]);
var inst_17706 = cljs.core.vec.call(null,inst_17690);
var state_17730__$1 = state_17730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17730__$1,(11),out,inst_17706);
} else {
if((state_val_17731 === (5))){
var inst_17698 = (state_17730[(10)]);
var inst_17691 = (state_17730[(8)]);
var inst_17694 = (state_17730[(9)]);
var inst_17698__$1 = f.call(null,inst_17694);
var inst_17699 = cljs.core._EQ_.call(null,inst_17698__$1,inst_17691);
var inst_17700 = cljs.core.keyword_identical_QMARK_.call(null,inst_17691,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17701 = (inst_17699) || (inst_17700);
var state_17730__$1 = (function (){var statearr_17744 = state_17730;
(statearr_17744[(10)] = inst_17698__$1);

return statearr_17744;
})();
if(cljs.core.truth_(inst_17701)){
var statearr_17745_17771 = state_17730__$1;
(statearr_17745_17771[(1)] = (8));

} else {
var statearr_17746_17772 = state_17730__$1;
(statearr_17746_17772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (14))){
var inst_17723 = (state_17730[(2)]);
var inst_17724 = cljs.core.async.close_BANG_.call(null,out);
var state_17730__$1 = (function (){var statearr_17748 = state_17730;
(statearr_17748[(13)] = inst_17723);

return statearr_17748;
})();
var statearr_17749_17773 = state_17730__$1;
(statearr_17749_17773[(2)] = inst_17724);

(statearr_17749_17773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (10))){
var inst_17713 = (state_17730[(2)]);
var state_17730__$1 = state_17730;
var statearr_17750_17774 = state_17730__$1;
(statearr_17750_17774[(2)] = inst_17713);

(statearr_17750_17774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17731 === (8))){
var inst_17690 = (state_17730[(7)]);
var inst_17698 = (state_17730[(10)]);
var inst_17694 = (state_17730[(9)]);
var inst_17703 = inst_17690.push(inst_17694);
var tmp17747 = inst_17690;
var inst_17690__$1 = tmp17747;
var inst_17691 = inst_17698;
var state_17730__$1 = (function (){var statearr_17751 = state_17730;
(statearr_17751[(7)] = inst_17690__$1);

(statearr_17751[(14)] = inst_17703);

(statearr_17751[(8)] = inst_17691);

return statearr_17751;
})();
var statearr_17752_17775 = state_17730__$1;
(statearr_17752_17775[(2)] = null);

(statearr_17752_17775[(1)] = (2));


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
});})(c__8338__auto___17761,out))
;
return ((function (switch__8276__auto__,c__8338__auto___17761,out){
return (function() {
var cljs$core$async$state_machine__8277__auto__ = null;
var cljs$core$async$state_machine__8277__auto____0 = (function (){
var statearr_17756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17756[(0)] = cljs$core$async$state_machine__8277__auto__);

(statearr_17756[(1)] = (1));

return statearr_17756;
});
var cljs$core$async$state_machine__8277__auto____1 = (function (state_17730){
while(true){
var ret_value__8278__auto__ = (function (){try{while(true){
var result__8279__auto__ = switch__8276__auto__.call(null,state_17730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8279__auto__;
}
break;
}
}catch (e17757){if((e17757 instanceof Object)){
var ex__8280__auto__ = e17757;
var statearr_17758_17776 = state_17730;
(statearr_17758_17776[(5)] = ex__8280__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17777 = state_17730;
state_17730 = G__17777;
continue;
} else {
return ret_value__8278__auto__;
}
break;
}
});
cljs$core$async$state_machine__8277__auto__ = function(state_17730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8277__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8277__auto____1.call(this,state_17730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8277__auto____0;
cljs$core$async$state_machine__8277__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8277__auto____1;
return cljs$core$async$state_machine__8277__auto__;
})()
;})(switch__8276__auto__,c__8338__auto___17761,out))
})();
var state__8340__auto__ = (function (){var statearr_17759 = f__8339__auto__.call(null);
(statearr_17759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8338__auto___17761);

return statearr_17759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8340__auto__);
});})(c__8338__auto___17761,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.fm(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.x(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cf(b)
return new t(c,this)}:function(){if(t===null)t=A.cf(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cf(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
ci(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.ch==null){A.f8()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.e(A.cF("Return interceptor for "+A.m(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.bG
if(p==null)p=$.bG=A.bT(o)
q=r[p]}if(q!=null)return q
q=A.fc(a)
if(q!=null)return q
if(typeof a=="function")return B.D
t=Object.getPrototypeOf(a)
if(t==null)return B.u
if(t===Object.prototype)return B.u
if(typeof r=="function"){p=$.bG
if(p==null)p=$.bG=A.bT(o)
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
dJ(a,b){if(a<0||a>4294967295)throw A.e(A.dO(a,0,4294967295,"length",null))
return J.dK(new Array(a),b)},
dK(a,b){var t=A.x(a,b.A("i<0>"))
t.$flags=1
return t},
M(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a0.prototype
return J.aJ.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.a1.prototype
if(typeof a=="boolean")return J.aI.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.cg(a)},
f3(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.cg(a)},
f4(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.cg(a)},
A(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).v(a,b)},
w(a){return J.M(a).gk(a)},
du(a){return J.f4(a).gW(a)},
dv(a){return J.M(a).gn(a)},
ax(a){return J.M(a).h(a)},
aG:function aG(){},
aI:function aI(){},
a1:function a1(){},
a4:function a4(){},
C:function C(){},
aV:function aV(){},
ai:function ai(){},
B:function B(){},
a3:function a3(){},
a5:function a5(){},
i:function i(a){this.$ti=a},
aH:function aH(){},
bp:function bp(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(){},
a0:function a0(){},
aJ:function aJ(){},
P:function P(){}},A={c4:function c4(){},
y(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
bA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dg(a){var t,s
for(t=$.au.length,s=0;s<t;++s)if(a===$.au[s])return!0
return!1},
dI(){return new A.aZ("No element")},
bq:function bq(a){this.a=a},
bx:function bx(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a_:function a_(){},
dq(a){var t=A.dp(a)
if(t!=null)return t
return"minified:"+a},
fF(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ax(a)
return t},
ae(a){var t,s=$.cB
if(s==null)s=$.cB=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aW(a){var t,s,r,q
if(a instanceof A.j)return A.p(A.av(a),null)
t=J.M(a)
if(t===B.C||t===B.E||u.o.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.av(a),null)},
cC(a){var t,s,r
if(a==null||typeof a=="number"||A.cc(a))return J.ax(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.G)return a.h(0)
if(a instanceof A.S)return a.a6(!0)
t=$.ds()
for(s=0;s<1;++s){r=t[s].aO(a)
if(r!=null)return r}return"Instance of '"+A.aW(a)+"'"},
eY(a){return new A.Y(!0,a,null,null)},
e(a){return A.l(a,new Error())},
l(a,b){var t
if(a==null)a=new A.bC()
b.dartException=a
t=A.fn
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fn(){return J.ax(this.dartException)},
dn(a,b){throw A.l(a,b==null?new Error():b)},
b9(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.dn(A.es(a,b,c),t)},
es(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.b0("'"+t+"': Cannot "+p+" "+m+l+o)},
aw(a){throw A.e(A.aA(a))},
cj(a){if(a==null)return J.w(a)
if(typeof a=="object")return A.ae(a)
return J.w(a)},
eZ(a){if(typeof a=="number")return B.a.gk(a)
if(a instanceof A.b6)return A.ae(a)
if(a instanceof A.S)return a.gk(a)
return A.cj(a)},
f1(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
for(t=0;t<i;){s=t+1
r=a[t]
t=s+1
q=a[s]
if(typeof r=="string"){p=b.b
if(p==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.b=o
p=o}n=p[r]
if(n==null)p[r]=b.L(r,q)
else n.b=q}else if(typeof r=="number"&&(r&0x3fffffff)===r){m=b.c
if(m==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.c=o
m=o}n=m[r]
if(n==null)m[r]=b.L(r,q)
else n.b=q}else{l=b.d
if(l==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.d=o
l=o}k=b.T(r)
j=l[k]
if(j==null)l[k]=[b.L(r,q)]
else{s=b.U(j,r)
if(s>=0)j[s].b=q
else j.push(b.L(r,q))}}}return b},
dC(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bz().constructor.prototype):Object.create(new A.Z(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cy(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dy(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cy(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dy(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dw)}throw A.e("Error in functionType of tearoff")},
dz(a,b,c,d){var t=A.cx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cy(a,b,c,d){if(c)return A.dB(a,b,d)
return A.dz(b.length,d,a,b)},
dA(a,b,c,d){var t=A.cx,s=A.dx
switch(b?-1:a){case 0:throw A.e(new A.bv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dB(a,b,c){var t,s
if($.cv==null)$.cv=A.cu("interceptor")
if($.cw==null)$.cw=A.cu("receiver")
t=b.length
s=A.dA(t,c,a,b)
return s},
cf(a){return A.dC(a)},
dw(a,b){return A.at(v.typeUniverse,A.av(a.a),b)},
cx(a){return a.a},
dx(a){return a.b},
cu(a){var t,s,r,q=new A.Z("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.e(A.cs("Field name "+a+" not found."))},
bT(a){return v.getIsolateTag(a)},
fc(a){var t,s,r,q,p,o=$.df.$1(a),n=$.bR[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bY[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dc.$2(a,o)
if(r!=null){n=$.bR[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bY[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c2(t)
$.bR[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bY[o]=t
return t}if(q==="-"){p=A.c2(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dj(a,t)
if(q==="*")throw A.e(A.cF(o))
if(v.leafTags[o]===true){p=A.c2(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dj(a,t)},
dj(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ci(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c2(a){return J.ci(a,!1,null,!!a.$io)},
fg(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c2(t)
else return J.ci(t,c,null,null)},
f8(){if(!0===$.ch)return
$.ch=!0
A.f9()},
f9(){var t,s,r,q,p,o,n,m
$.bR=Object.create(null)
$.bY=Object.create(null)
A.f7()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dk.$1(p)
if(o!=null){n=A.fg(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f7(){var t,s,r,q,p,o,n=B.v()
n=A.V(B.w,A.V(B.x,A.V(B.o,A.V(B.o,A.V(B.y,A.V(B.z,A.V(B.A(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.df=new A.bV(q)
$.dc=new A.bW(p)
$.dk=new A.bX(o)},
V(a,b){return a(b)||b},
e2(a,b){var t
for(t=0;t<a.length;++t)if(!J.A(a[t],b[t]))return!1
return!0},
f_(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
u:function u(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
q:function q(a){this.a=a},
aB:function aB(){},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
aF:function aF(a,b){this.a=a
this.$ti=b},
af:function af(){},
G:function G(){},
bh:function bh(){},
bB:function bB(){},
bz:function bz(){},
Z:function Z(a,b){this.a=a
this.b=b},
bv:function bv(a){this.a=a},
a7:function a7(){},
br:function br(a,b){this.a=a
this.b=b
this.c=null},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bV:function bV(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
S:function S(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
Q:function Q(){},
ab:function ab(){},
aM:function aM(){},
R:function R(){},
a9:function a9(){},
aa:function aa(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
ac:function ac(){},
aU:function aU(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
an:function an(){},
c7(a,b){var t=b.c
return t==null?b.c=A.ar(a,"cz",[b.x]):t},
cD(a){var t=a.w
if(t===6||t===7)return A.cD(a.x)
return t===11||t===12},
dP(a){return a.as},
fi(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
z(a){return A.bJ(v.typeUniverse,a,!1)},
K(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.K(a0,t,a2,a3)
if(s===t)return a1
return A.cN(a0,s,!0)
case 7:t=a1.x
s=A.K(a0,t,a2,a3)
if(s===t)return a1
return A.cM(a0,s,!0)
case 8:r=a1.y
q=A.U(a0,r,a2,a3)
if(q===r)return a1
return A.ar(a0,a1.x,q)
case 9:p=a1.x
o=A.K(a0,p,a2,a3)
n=a1.y
m=A.U(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.c9(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.U(a0,k,a2,a3)
if(j===k)return a1
return A.cO(a0,l,j)
case 11:i=a1.x
h=A.K(a0,i,a2,a3)
g=a1.y
f=A.eV(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.cL(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.U(a0,e,a2,a3)
p=a1.x
o=A.K(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.ca(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.e(A.az("Attempted to substitute unexpected RTI kind "+a))}},
U(a,b,c,d){var t,s,r,q,p=b.length,o=A.bK(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.K(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eW(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bK(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.K(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eV(a,b,c,d){var t,s=b.a,r=A.U(a,s,c,d),q=b.b,p=A.U(a,q,c,d),o=b.c,n=A.eW(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.b1()
t.a=r
t.b=p
t.c=n
return t},
x(a,b){a[v.arrayRti]=b
return a},
de(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.f6(t)
return a.$S()}return null},
fa(a,b){var t
if(A.cD(b))if(a instanceof A.G){t=A.de(a)
if(t!=null)return t}return A.av(a)},
av(a){if(a instanceof A.j)return A.cY(a)
if(Array.isArray(a))return A.bM(a)
return A.cb(J.M(a))},
bM(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cY(a){var t=a.$ti
return t!=null?t:A.cb(a)},
cb(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eA(a,t)},
eA(a,b){var t=a instanceof A.G?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ea(v.typeUniverse,t.name)
b.$ccache=s
return s},
f6(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bJ(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
f5(a){return A.L(A.cY(a))},
ce(a){var t
if(a instanceof A.S)return A.f0(a.$r,a.K())
t=a instanceof A.G?A.de(a):null
if(t!=null)return t
if(u.R.b(a))return J.dv(a).a
if(Array.isArray(a))return A.bM(a)
return A.av(a)},
L(a){var t=a.r
return t==null?a.r=new A.b6(a):t},
f0(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
t=A.at(v.typeUniverse,A.ce(r[0]),"@<0>")
for(s=1;s<q;++s)t=A.cQ(v.typeUniverse,t,A.ce(r[s]))
return A.at(v.typeUniverse,t,a)},
v(a){return A.L(A.bJ(v.typeUniverse,a,!1))},
ez(a){var t=this
t.b=A.eT(t)
return t.b(a)},
eT(a){var t,s,r,q
if(a===u.K)return A.eH
if(A.N(a))return A.eL
t=a.w
if(t===6)return A.ex
if(t===1)return A.d1
if(t===7)return A.eB
s=A.eS(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.N)){a.f="$i"+r
if(r==="c")return A.eF
if(a===u.m)return A.eE
return A.eK}}else if(t===10){q=A.f_(a.x,a.y)
return q==null?A.d1:q}return A.ev},
eS(a){if(a.w===8){if(a===u.S)return A.eC
if(a===u.i||a===u.H)return A.eG
if(a===u.N)return A.eJ
if(a===u.y)return A.cc}return null},
ey(a){var t=this,s=A.eu
if(A.N(t))s=A.ep
else if(t===u.K)s=A.em
else if(A.X(t)){s=A.ew
if(t===u.w)s=A.ei
else if(t===u.v)s=A.eo
else if(t===u.u)s=A.ee
else if(t===u.n)s=A.el
else if(t===u.I)s=A.eg
else if(t===u.z)s=A.ej}else if(t===u.S)s=A.eh
else if(t===u.N)s=A.en
else if(t===u.y)s=A.ed
else if(t===u.H)s=A.ek
else if(t===u.i)s=A.ef
else if(t===u.m)s=A.cT
t.a=s
return t.a(a)},
ev(a){var t=this
if(a==null)return A.X(t)
return A.fb(v.typeUniverse,A.fa(a,t),t)},
ex(a){if(a==null)return!0
return this.x.b(a)},
eK(a){var t,s=this
if(a==null)return A.X(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eF(a){var t,s=this
if(a==null)return A.X(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eE(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
d0(a){if(typeof a=="object"){if(a instanceof A.j)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eu(a){var t=this
if(a==null){if(A.X(t))return a}else if(t.b(a))return a
throw A.l(A.cV(a,t),new Error())},
ew(a){var t=this
if(a==null||t.b(a))return a
throw A.l(A.cV(a,t),new Error())},
cV(a,b){return new A.b7("TypeError: "+A.cH(a,A.p(b,null)))},
cH(a,b){return A.bm(a)+": type '"+A.p(A.ce(a),null)+"' is not a subtype of type '"+b+"'"},
r(a,b){return new A.b7("TypeError: "+A.cH(a,b))},
eB(a){var t=this
return t.x.b(a)||A.c7(v.typeUniverse,t).b(a)},
eH(a){return a!=null},
em(a){if(a!=null)return a
throw A.l(A.r(a,"Object"),new Error())},
eL(a){return!0},
ep(a){return a},
d1(a){return!1},
cc(a){return!0===a||!1===a},
ed(a){if(!0===a)return!0
if(!1===a)return!1
throw A.l(A.r(a,"bool"),new Error())},
ee(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.l(A.r(a,"bool?"),new Error())},
ef(a){if(typeof a=="number")return a
throw A.l(A.r(a,"double"),new Error())},
eg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.l(A.r(a,"double?"),new Error())},
eC(a){return typeof a=="number"&&Math.floor(a)===a},
eh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.l(A.r(a,"int"),new Error())},
ei(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.l(A.r(a,"int?"),new Error())},
eG(a){return typeof a=="number"},
ek(a){if(typeof a=="number")return a
throw A.l(A.r(a,"num"),new Error())},
el(a){if(typeof a=="number")return a
if(a==null)return a
throw A.l(A.r(a,"num?"),new Error())},
eJ(a){return typeof a=="string"},
en(a){if(typeof a=="string")return a
throw A.l(A.r(a,"String"),new Error())},
eo(a){if(typeof a=="string")return a
if(a==null)return a
throw A.l(A.r(a,"String?"),new Error())},
cT(a){if(A.d0(a))return a
throw A.l(A.r(a,"JSObject"),new Error())},
ej(a){if(a==null)return a
if(A.d0(a))return a
throw A.l(A.r(a,"JSObject?"),new Error())},
db(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
eQ(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.db(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cW(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", ",a=null
if(a2!=null){t=a2.length
if(a1==null)a1=A.x([],u.s)
else a=a1.length
s=a1.length
for(r=t;r>0;--r)a1.push("T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=b){p=p+o+a1[a1.length-1-r]
n=a2[r]
m=n.w
if(!(m===2||m===3||m===4||m===5||n===q))p+=" extends "+A.p(n,a1)}p+=">"}else p=""
q=a0.x
l=a0.y
k=l.a
j=k.length
i=l.b
h=i.length
g=l.c
f=g.length
e=A.p(q,a1)
for(d="",c="",r=0;r<j;++r,c=b)d+=c+A.p(k[r],a1)
if(h>0){d+=c+"["
for(c="",r=0;r<h;++r,c=b)d+=c+A.p(i[r],a1)
d+="]"}if(f>0){d+=c+"{"
for(c="",r=0;r<f;r+=3,c=b){d+=c
if(g[r+1])d+="required "
d+=A.p(g[r+2],a1)+" "+g[r]}d+="}"}if(a!=null){a1.toString
a1.length=a}return p+"("+d+") => "+e},
p(a,b){var t,s,r,q,p,o,n=a.w
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=a.x
s=A.p(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(n===7)return"FutureOr<"+A.p(a.x,b)+">"
if(n===8){q=A.eX(a.x)
p=a.y
return p.length>0?q+("<"+A.db(p,b)+">"):q}if(n===10)return A.eQ(a,b)
if(n===11)return A.cW(a,b,null)
if(n===12)return A.cW(a.x,b,a.y)
if(n===13){o=a.x
return b[b.length-1-o]}return"?"},
eX(a){var t=A.dp(a)
if(t!=null)return t
return"minified:"+a},
eb(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
ea(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bJ(a,b,!1)
else if(typeof n=="number"){t=n
s=A.as(a,5,"#")
r=A.bK(t)
for(q=0;q<t;++q)r[q]=s
p=A.ar(a,b,r)
o[b]=p
return p}else return n},
e9(a,b){return A.cR(a.tR,b)},
e8(a,b){return A.cR(a.eT,b)},
bJ(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cP(a,null,b,!1)
s.set(b,t)
return t},
at(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cP(a,b,c,!0)
r.set(c,s)
return s},
cQ(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.c9(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
cP(a,b,c,d){return A.e0(A.dV(a,b,c,d))},
D(a,b){b.a=A.ey
b.b=A.ez
return b},
as(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.t(null,null)
t.w=b
t.as=c
s=A.D(a,t)
a.eC.set(c,s)
return s},
cN(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e6(a,b,s,c)
a.eC.set(s,t)
return t},
e6(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.N(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.X(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.t(null,null)
r.w=6
r.x=b
r.as=c
return A.D(a,r)},
cM(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e4(a,b,s,c)
a.eC.set(s,t)
return t},
e4(a,b,c,d){var t,s
if(d){t=b.w
if(A.N(b)||b===u.K)return b
else if(t===1)return A.ar(a,"cz",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.t(null,null)
s.w=7
s.x=b
s.as=c
return A.D(a,s)},
e7(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.t(null,null)
t.w=13
t.x=b
t.as=r
s=A.D(a,t)
a.eC.set(r,s)
return s},
aq(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
e3(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ar(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aq(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.t(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.D(a,s)
a.eC.set(q,r)
return r},
c9(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aq(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.t(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.D(a,p)
a.eC.set(r,o)
return o},
cO(a,b,c){var t,s,r="+"+(b+"("+A.aq(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.t(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.D(a,t)
a.eC.set(r,s)
return s},
cL(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aq(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aq(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e3(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.t(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.D(a,q)
a.eC.set(s,p)
return p},
ca(a,b,c,d){var t,s=b.as+("<"+A.aq(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e5(a,b,c,s,d)
a.eC.set(s,t)
return t},
e5(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bK(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.K(a,b,s,0)
n=A.U(a,c,s,0)
return A.ca(a,o,n,c!==n)}}m=new A.t(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.D(a,m)},
dV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
e0(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dX(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cJ(a,s,m,l,!1)
else if(r===46)s=A.cJ(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.J(a.u,a.e,l.pop()))
break
case 94:l.push(A.e7(a.u,l.pop()))
break
case 35:l.push(A.as(a.u,5,"#"))
break
case 64:l.push(A.as(a.u,2,"@"))
break
case 126:l.push(A.as(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dZ(a,l)
break
case 38:A.dY(a,l)
break
case 63:q=a.u
l.push(A.cN(q,A.J(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cM(q,A.J(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dW(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cK(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e1(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.J(a.u,a.e,n)},
dX(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cJ(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.eb(t,p.x)[q]
if(o==null)A.dn('No "'+q+'" in "'+A.dP(p)+'"')
d.push(A.at(t,p,o))}else d.push(q)
return n},
dZ(a,b){var t,s=a.u,r=A.cI(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ar(s,q,r))
else{t=A.J(s,a.e,q)
switch(t.w){case 11:b.push(A.ca(s,t,r,a.n))
break
default:b.push(A.c9(s,t,r))
break}}},
dW(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.cI(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.J(q,a.e,p)
r=new A.b1()
r.a=t
r.b=o
r.c=n
b.push(A.cL(q,s,r))
return
case-4:b.push(A.cO(q,b.pop(),t))
return
default:throw A.e(A.az("Unexpected state under `()`: "+A.m(p)))}},
dY(a,b){var t=b.pop()
if(0===t){b.push(A.as(a.u,1,"0&"))
return}if(1===t){b.push(A.as(a.u,4,"1&"))
return}throw A.e(A.az("Unexpected extended operation "+A.m(t)))},
cI(a,b){var t=b.splice(a.p)
A.cK(a.u,a.e,t)
a.p=b.pop()
return t},
J(a,b,c){if(typeof c=="string")return A.ar(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e_(a,b,c)}else return c},
cK(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.J(a,b,c[t])},
e1(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.J(a,b,c[t])},
e_(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.e(A.az("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.e(A.az("Bad index "+c+" for "+b.h(0)))},
fb(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.k(a,b,null,c,null)
s.set(c,t)}return t},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.N(d))return!0
t=b.w
if(t===4)return!0
if(A.N(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.k(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.k(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.k(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.k(a,b.x,c,d,e))return!1
return A.k(a,A.c7(a,b),c,d,e)}if(t===6)return A.k(a,q,c,d,e)&&A.k(a,b.x,c,d,e)
if(r===7){if(A.k(a,b,c,d.x,e))return!0
return A.k(a,b,c,A.c7(a,d),e)}if(r===6)return A.k(a,b,c,q,e)||A.k(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.cZ(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.cZ(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.eD(a,b,c,d,e)}if(p&&r===10)return A.eI(a,b,c,d,e)
return!1},
cZ(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.k(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.k(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.k(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.k(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.k(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
eD(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.at(a,b,s[p])
return A.cS(a,q,null,c,d.y,e)}return A.cS(a,b.y,null,c,d.y,e)},
cS(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.k(a,b[t],d,e[t],f))return!1
return!0},
eI(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
X(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.N(a))if(t!==6)s=t===7&&A.X(a.x)
return s},
N(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cR(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bK(a){return a>0?new Array(a):v.typeUniverse.sEA},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
b1:function b1(){this.c=this.b=this.a=null},
b6:function b6(a){this.a=a},
bF:function bF(){},
b7:function b7(a){this.a=a},
dL(a){return new A.aj(a.A("aj<0>"))},
c8(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
c5(a){var t,s
if(A.dg(a))return"{...}"
t=new A.b_("")
try{s={}
$.au.push(a)
t.a+="{"
s.a=!0
a.N(0,new A.bs(s,t))
t.a+="}"}finally{$.au.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bH:function bH(a){this.a=a
this.c=this.b=null},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d:function d(){},
a8:function a8(){},
bs:function bs(a,b){this.a=a
this.b=b},
ag:function ag(){},
ap:function ap(){},
cA(a,b,c,d){var t,s=J.dJ(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
dM(a,b,c){var t,s,r=A.x([],c.A("i<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aw)(a),++s)r.push(a[s])
r.$flags=1
return r},
dQ(a,b,c){var t=J.du(b)
if(!t.J())return a
if(c.length===0){do a+=A.m(t.gH())
while(t.J())}else{a+=A.m(t.gH())
while(t.J())a=a+c+A.m(t.gH())}return a},
bm(a){if(typeof a=="number"||A.cc(a)||a==null)return J.ax(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cC(a)},
az(a){return new A.be(a)},
cs(a){return new A.Y(!1,null,null,a)},
dO(a,b,c,d,e){return new A.bu(b,c,!0,a,d,"Invalid value")},
cG(a){return new A.b0(a)},
cF(a){return new A.bD(a)},
cE(a){return new A.aZ(a)},
aA(a){return new A.bi(a)},
c3(a,b,c){var t,s
if(A.dg(a))return b+"..."+c
t=new A.b_(b)
$.au.push(a)
try{s=t
s.a=A.dQ(s.a,a,", ")}finally{$.au.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
c6(a,b,c,d){var t
if(B.e===c){t=B.b.gk(a)
b=J.w(b)
return A.bA(A.y(A.y($.ba(),t),b))}if(B.e===d){t=B.b.gk(a)
b=J.w(b)
c=J.w(c)
return A.bA(A.y(A.y(A.y($.ba(),t),b),c))}t=B.b.gk(a)
b=J.w(b)
c=J.w(c)
d=J.w(d)
d=A.bA(A.y(A.y(A.y(A.y($.ba(),t),b),c),d))
return d},
dN(a){var t,s,r=$.ba()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aw)(a),++s)r=A.y(r,J.w(a[s]))
return A.bA(r)},
bE:function bE(){},
bl:function bl(){},
be:function be(a){this.a=a},
bC:function bC(){},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b0:function b0(a){this.a=a},
bD:function bD(a){this.a=a},
aZ:function aZ(a){this.a=a},
bi:function bi(a){this.a=a},
bt:function bt(){},
ad:function ad(){},
j:function j(){},
b_:function b_(a){this.a=a},
fd(){var t,s,r,q,p
$.bd().db=new A.bZ()
t=v.G
t.window.addEventListener("keydown",A.T(A.fe()))
t.window.addEventListener("keyup",A.T(A.ff()))
s=t.document.querySelectorAll("#pad button")
for(r=0;r<s.length;++r){q=s.item(r)
if(q==null)q=A.cT(q)
p=q.getAttribute("data-code")
if(p==null)p=""
q.addEventListener("pointerdown",A.T(new A.c_(p)))
q.addEventListener("pointerup",A.T(new A.c0(p)))
q.addEventListener("pointerleave",A.T(new A.c1(p)))}t.window.requestAnimationFrame(A.T(A.dh()))},
eN(a){if(A.d_(a.code))a.preventDefault()
if(a.repeat)return
$.bb().a9()
A.b8(a.code,!0)},
eO(a){if(A.d_(a.code))a.preventDefault()
A.b8(a.code,!1)},
d_(a){return B.h.ag(a,"Arrow")||a==="Space"||a==="Enter"||a==="KeyA"||a==="KeyD"||a==="KeyW"||a==="KeyS"||a==="KeyM"||a==="KeyP"},
b8(a,b){var t,s,r
if(a.length===0)return
if(b){if(!$.bU.aE(0,a))return
if(a==="Enter"||a==="KeyP")$.bc().r=!0
if(a==="KeyM")$.bc().w=!0
t=$.bU}else{$.bU.aM(0,a)
t=$.bU}s=t.q(0,"Space")
r=$.bc()
if(r.f&&!s)r.e=!0
r.f=s
r.a=t.q(0,"ArrowLeft")||t.q(0,"KeyA")
r.b=t.q(0,"ArrowRight")||t.q(0,"KeyD")
r.c=t.q(0,"ArrowUp")||t.q(0,"KeyW")
r.d=t.q(0,"ArrowDown")||t.q(0,"KeyS")},
eM(a){var t,s,r,q=$.d2,p=q===0?16.7:a-q
$.d2=a
if(p>80)p=80
if(p<0)p=0
q=$.bL=$.bL+p
t=0
for(;;){if(!(q>=16.666&&t<5))break
q=$.bd()
s=$.bc()
q.aP(s)
s.w=s.r=s.e=!1
s=$.bL-16.666
$.bL=s;++t
q=s}q=$.cn()
s=$.bd()
A.fk(q,s)
A.eP(s.at)
q=s.c
r=q===B.j||q===B.d
$.bb().aN(s.w,r)
v.G.window.requestAnimationFrame(A.T(A.dh()))},
eP(a){var t,s,r,q,p,o=$.cn().a
for(t=0,s=0;t<61440;++t,s+=4){r=B.T[o[t]]
q=$.cq()
q.$flags&2&&A.b9(q)
q[s]=r>>>16&255
q[s+1]=r>>>8&255
q[s+2]=r&255
q[s+3]=255}if(a>0)p=(a&1)===0?1:-1
else p=0
q=v.G
q.blitFrame.apply(q,[$.cq(),256,240,p,0])},
bZ:function bZ(){},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
bg:function bg(){var _=this
_.a=null
_.c=_.b=0
_.d=!1},
ct(a,b,c,d,e){return new A.bf(d,a,e,c,b)},
n(a,b,c){return new A.bw(128+a*(104+-48*b),208+-144*b-c*100)},
dm(a,b){var t=b<=2?0.22:B.a.u(b/48,0.22,1),s=a.b?1:0,r=a.a?1:0,q=a.c?1:0,p=a.d?1:0
return new A.by(t,s-r,q-p)},
dl(a,b,c,d,e){var t,s,r=d*0.08,q=0.84+r+b*0.14
if(e)q=0.74+r+b*0.05
t=e?0.68:0.58
if(q<t)q=t
if(q>0.96)q=0.96
s=B.a.u(a*(0.4+d*0.4),-0.88,0.88)
return new A.u(s,c>0?q:1-q)},
fj(a1,a2,a3,a4,a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6==="serve",c=A.dl(a1+a4,a2,a3,a7,d),b=c.b,a=d?0.008:0.008+a7*0.006,a0=!d
if(a0&&a2<0)a*=0.75
if(a0&&a2>0)a*=1.08
for(a0=a3>0,t=c.a-a8,s=null,r=99,q=0;q<6;++q){for(p=a3*a,o=0.003,n=0.032,m=null,l=0;l<10;++l){k=(o+n)/2
j=A.f2(a8,a9,a5,0,p,k)
i=j.a
if(i.y||!i.x){o=k
continue}h=i.b
g=a0?b-h:h-b
f=j.b
if(f<1)f=1
e=Math.abs(g)
if(e<r){s=new A.aK(t/f,p,k)
r=e}if(m==null||e<Math.abs(m))m=g
if(e<0.03){s.toString
return s}if(g>0)o=k
else n=k}if(s!=null&&r<0.04)return s
a=m==null||m>0?a*1.16:a*0.82
if(a<0.003)a=0.003
if(a>0.028)a=0.028}return s==null?new A.aK(0,a3*a,0.014):s},
f2(a,b,c,d,e,f){var t,s=new A.ah()
s.a=a
s.b=b
s.c=c
s.d=d
s.e=e
s.f=f
s.r=!0
for(t=0;t<500;){++t
if(A.ck(s))break}return new A.bn(s,t)},
fh(a){var t=Math.abs(a)
if(t>1)t=1
return 0.22+0.06999999999999998*t*t},
ck(a){var t,s,r,q,p,o,n,m,l,k,j
if(!a.r)return!1
t=a.b
s=a.c
r=a.f-=0.00032
q=a.d*=0.9985
p=a.e*=0.9985
r=a.f=r*0.9985
q=a.a+=q
o=a.b=t+p
n=a.c=s+r
if(n>0.7){a.c=0.7
a.f=-Math.abs(r)*0.35
r=0.7}else r=n
n=t<0.5
if(!(n&&o>=0.5))m=t>0.5&&o<=0.5
else m=!0
if(m){l=o-t
k=l===0?0:(0.5-t)/l
j=s+(r-s)*k
if(j<A.fh(q)){a.y=!0
a.b=n?0.48:0.52
q=n?-1:1
a.e=q*(Math.abs(p)*0.15+0.002)
a.f=0.004
if(r<j){a.c=j
r=j}}else a.x=!0}if(r<=0){a.f=a.e=a.d=a.c=0
return!0}return!1},
eU(a){var t,s
if(a<=0)return 0
for(t=a,s=0;s<8;++s)t=0.5*(t+a/t)
return t},
H:function H(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
aD:function aD(){var _=this
_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=!1},
ah:function ah(){var _=this
_.a=0
_.b=0.2
_.f=_.e=_.d=_.c=0
_.y=_.x=_.w=_.r=!1
_.z=-1},
bf:function bf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=0
_.d=c
_.e=d
_.f=e
_.r=0
_.w=!1
_.x=0.45
_.z=_.y=0},
aX:function aX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=12
_.w=g},
bw:function bw(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.w=_.r=_.f=_.e=!1
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=0
_.ch=null
_.CW=-1
_.cx=0
_.cy=""
_.db=null
_.dx=d
_.dy=e
_.fr=f
_.fx=g
_.fy=h},
bk:function bk(){},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b){this.a=a
this.b=b},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
W(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l
for(t=b.split(""),s=t.length,r=4*f,q=c,p=0;p<t.length;t.length===s||(0,A.aw)(t),++p){o=B.as.E(0,t[p])
if(o==null)o=B.q
for(n=0;n<5;++n)for(m=d+n*f,l=0;l<3;++l)if(o[n][l]==="1")a.j(q+l*f,m,f,f,e)
q+=r}},
bS(a,b,c,d,e,f){var t,s
for(t=0;t<4;++t){s=B.I[t]
A.W(a,b,c+s.a,d+s.b,1,f)}A.W(a,b,c,d,e,f)},
bo:function bo(a){this.a=a},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
dp(a){return v.mangledGlobalNames[a]},
fm(a){throw A.l(new A.bq("Field '"+a+"' has been assigned during initialization."),new Error())},
T(a){var t
if(typeof a=="function")throw A.e(A.cs("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.eq,a)
t[$.cl()]=a
return t},
eq(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
F(a){var t,s,r,q,p,o,n,m,l=B.f.gaK(a).length
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.length
if(q!==l)throw A.e(A.cE("row length "+q+" != "+l+" ["+r+"]"))}p=A.cA(l*t,0,!1,u.S)
for(o=0;o<t;++o){r=a[o]
for(q=o*l,n=0;n<l;++n){m=B.ar.E(0,r[n])
if(m==null)throw A.e(A.cE('bad pixel "'+r[n]+'"'))
p[q+n]=m}}return new A.aY(l,t,p)},
fl(a,b,c){var t=Math.abs(c)
if(t>Math.abs(a)&&t>Math.abs(b))return c>=0?3:1
return a>=0?0:2},
fk(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="PRESS START"
if(b.c===B.j){t=b.b
A.cX(a,t)
A.d5(a)
s=$.cm()
a.aG(s,A.bO(0,0.18,s,2),A.bP(0.18,s,2),2,5,6)
r=$.O()
A.bN(a,0,0.18,s,16,8,!1,r)
s=$.co()
a.G(s,A.bO(0,0.82,s,2),A.bP(0.82,s,2),!0,2,7,8)
A.bN(a,0,0.82,s,2,8,!0,r)
q=B.b.m(B.b.p(t,4),20)
p=A.n(0.62,0.38,0.16+(q<10?q:20-q)/90)
a.aa($.cr()[B.b.p(t,6)&3],B.a.i(p.a)-8,B.a.i(p.b)-8,2)
a.j(28,16,200,44,11)
a.j(28,16,200,2,10)
a.j(28,58,200,2,10)
A.E(a,"BADMINTON",22,10,3)
A.E(a,"FAMICOM SINGLES",42,2,1)
A.E(a,"FIRST TO 11",50,24,1)
A.d4(a,b,72)
if(B.b.m(B.b.p(t,30),2)===0)A.E(a,d,96,10,2)
a.j(0,220,256,20,11)
A.E(a,"HOLD SPACE TO AIM",222,2,1)
A.E(a,"LEFT RIGHT PICK MODE",230,10,1)
return}A.cX(a,b.b)
s=b.dx
A.cd(a,s.c,s.d,7)
r=b.dy
A.cd(a,r.c,r.d,5)
o=b.fr
if(o.r)A.cd(a,o.a,o.b,2+B.a.i(o.c*4))
A.cU(a,b,r)
A.d9(a,b,r)
A.d5(a)
A.ec(a,b)
A.eR(a,b)
A.cU(a,b,s)
A.d9(a,b,s)
for(s=b.fx,r=s.length,n=0;n<s.length;s.length===r||(0,A.aw)(s),++n){m=s[n]
o=m.a
l=m.b
k=m.c
j=A.n(o,l,k<0?0:k)
a.l(B.a.i(j.a),B.a.i(j.b),m.w)}a.j(0,0,256,16,11)
a.j(0,15,256,1,10)
s=b.CW
i=s===0&&(b.cx&2)===0?10:2
h=s===1&&(b.cx&2)===0?10:2
A.W(a,"1P",8,5,10,1)
A.W(a,B.h.ad(B.b.h(b.x),2,"0"),28,4,i,2)
g=B.h.ad(B.b.h(b.y),2,"0")
f=248-g.length*4*2
A.W(a,g,f,4,h,2)
A.W(a,"COM",f-28,5,12,1)
if(b.z===0)a.j(58,6,3,3,2)
else a.j(f-36,6,3,3,2)
e=b.gah()
if(e.length!==0&&!b.w)A.E(a,e,5,24,1)
else if(!b.w)A.E(a,b.d===B.i?"EASY":"HARD",5,12,1)
if(b.w)A.W(a,"MUTE",112,5,5,1)
A.er(a,b)
if(b.r)A.d6(a,"PAUSE")
else{s=b.c
if(s===B.t||s===B.l||s===B.d){A.d6(a,b.cy)
if(b.c===B.d&&B.b.m(B.b.p(b.b,28),2)===0)A.E(a,d,156,10,1)
if(b.c===B.d)A.d4(a,b,172)}}},
d4(a,b,c){var t,s=b.d===B.i
A.bS(a,"EASY",84,c,s?10:2,2)
A.bS(a,"HARD",140,c,s?2:10,2)
t=s?76:175
if((B.b.p(b.b,10)&1)===0)a.j(t,c+3,3,3,24)},
cX(a,b){var t,s,r,q,p
a.aH(0,13)
a.j(0,16,256,28,12)
a.j(0,36,256,26,20)
A.et(a,b)
for(t=64;t<=208;++t){s=104+-48*((t-208)/-144)
r=B.a.i(128-s)
q=B.a.i(128+s)
for(p=r+1;p<q;++p)a.l(p,t,(p+t&3)===0?15:14)
a.l(r,t,2)
a.l(q,t,2)}a.j(0,209,256,31,17)
A.bQ(a,0)
A.bQ(a,1)
A.bQ(a,0.32)
A.bQ(a,0.68)
A.d3(a,0,0,0.32)
A.d3(a,0,0.68,1)},
bQ(a,b){var t=A.n(-1,b,0),s=A.n(1,b,0)
a.ac(B.a.i(t.a),B.a.i(t.b),B.a.i(s.a),B.a.i(s.b),2)},
d3(a,b,c,d){var t=A.n(b,c,0),s=A.n(b,d,0)
a.ac(B.a.i(t.a),B.a.i(t.b),B.a.i(s.a),B.a.i(s.b),2)},
et(a,b){var t,s,r,q,p,o,n
for(t=0;t<15;++t){s=4+t*17
r=40+(B.b.p(b,16)+t&1)
q=B.F[B.b.m(t,6)]
p=s+2
a.j(p,r,4,3,4)
o=s+1
a.j(o,r+3,6,4,3)
n=r+4
a.l(p,n,1)
a.l(s+4,n,1)
a.j(o,r+7,6,4,q)}},
d5(a){var t,s,r,q,p,o,n,m,l
for(t=48;t<=208;++t){s=B.a.u((t-128)/80,-1,1)
r=Math.abs(s)
if(r>1)r=1
q=A.n(s,0.5,0.22+0.06999999999999998*r*r)
p=A.n(s,0.5,0.05)
o=B.a.i(q.b)
n=B.a.i(p.b)
for(m=o+1,l=o;l<=n;++l)if(l<=m||(t+l&1)===0)a.l(t,l,2)
else a.l(t,l,1)}A.d7(a,-1.06)
A.d7(a,1.06)},
d7(a,b){var t,s,r,q,p=A.n(b,0.5,0),o=A.n(b,0.5,0.32499999999999996),n=B.a.i(p.a),m=B.a.i(o.b),l=B.a.i(p.b)
for(t=n-2,s=n-1,r=n+1,q=m;q<=l;++q){a.l(t,q,1)
a.l(s,q,2)
a.l(n,q,2)
a.l(r,q,1)}},
cd(a,b,c,d){var t,s,r,q=A.n(b,c,0),p=B.b.u(d,1,8)
for(t=-p,s=q.a,r=q.b;t<=p;++t)a.l(B.a.i(s)+t,B.a.i(r),18)},
cU(a,b,c){var t=A.d8(b,c),s=!c.w&&c.r===0&&(B.b.p(b.b,20)&1)===1?1:0,r=A.bO(c.c,c.d,t,2),q=A.bP(c.d,t,2),p=c.a,o=p===0,n=o?5:7
o=o?6:8
a.G(t,r,q+s,p===1,2,n,o)},
bO(a,b,c,d){return B.a.i(A.n(a,b,0).a)-B.b.p(c.a*d,2)},
bP(a,b,c){return B.a.i(A.n(0,a,0).b)-b.b*c},
d8(a,b){var t=b.a===0
if(b.w&&b.r===0&&(B.b.p(a.b,6)&1)===0&&t)return $.dt()
return t?$.cm():$.co()},
d9(a,b,c){var t,s,r,q=A.da(c,b.b,null)
if(c.a===0&&c.r===0&&b.ax>0){t=B.a.i(b.ax*8/48)
s=q.a
q=new A.q([s[0]+t,s[1]+2,s[2],s[3]])}r=A.d8(b,c)
s=c.r
if(s>0){s=A.da(c,b.b,s+4).a
A.bN(a,c.c,c.d,r,s[0],s[1],s[2],s[3])}s=q.a
A.bN(a,c.c,c.d,r,s[0],s[1],s[2],s[3])},
da(a,b,c){var t=c==null?a.r:c,s=B.b.m(B.b.p(b,6),3)-1
if(a.a===0){if(t>=16)return new A.q([18,2,!1,$.O()])
if(t>=8)return new A.q([2,-16,!1,$.cp()])
if(t>0)return new A.q([-18,4,!0,$.O()])
return new A.q([16,8+s,!1,$.O()])}if(t>=16)return new A.q([0,4,!0,$.O()])
if(t>=8)return new A.q([10,14,!1,$.cp()])
if(t>0)return new A.q([18,8,!1,$.O()])
return new A.q([2,8+s,!0,$.O()])},
bN(a,b,c,d,e,f,g,h){a.aF(h,A.bO(b,c,d,2)+e,A.bP(c,d,2)+f,g,2)},
eR(a,b){var t,s,r,q,p,o,n,m,l,k,j=b.fr
for(t=b.fy,s=t.length,r=0;r<t.length;t.length===s||(0,A.aw)(t),++r){q=t[r]
p=A.n(q.a,q.b,q.c)
a.l(B.a.i(p.a),B.a.i(p.b),23)}if(!j.r)return
p=A.n(j.a,j.b,j.c)
t=j.d
s=j.e
o=j.f
n=Math.abs(t)+Math.abs(s)+Math.abs(o)>0.004
m=n?B.b.p(b.b,2)&3:A.fl(t,s,o)
l=$.cr()[m]
k=n?B.b.m(B.b.p(b.b,2),3)-1:0
a.aa(l,B.a.i(p.a)-8+k,B.a.i(p.b)-8,2)},
er(a,b){var t,s
if(b.ax<=0||b.c!==B.k||b.r)return
a.j(88,226,80,5,1)
t=B.a.i(b.ax*78/48)
s=b.dx.x>0.85?5:10
if(t>0)a.j(89,227,t,3,s)},
ec(a,b){var t,s,r,q,p,o,n
if(b.ax<=0||b.c!==B.k||b.r)return
t=b.fr
s=t.w&&t.z<0&&b.z===0
t=b.dx
r=t.x
q=A.dl(t.y,t.z,t.b,r,s)
p=A.n(q.a,q.b,0)
o=B.a.i(p.a)
n=B.a.i(p.b)
a.l(o,n,10)
a.l(o-2,n,10)
a.l(o+2,n,10)
a.l(o,n-2,10)
a.l(o,n+2,10)},
d6(a,b){var t=b.length*4*2+20,s=B.b.p(256-t,2)
a.j(s,108,t,28,11)
a.j(s,108,t,2,10)
a.j(s,134,t,2,10)
a.j(s,108,2,28,10)
a.j(s+t-2,108,2,28,10)
A.bS(a,b,s+10,116,2,2)},
E(a,b,c,d,e){A.bS(a,b,B.b.p(256-b.length*4*e,2),c,d,e)}},B={}
var w=[A,J,B]
var $={}
A.c4.prototype={}
J.aG.prototype={
v(a,b){return a===b},
gk(a){return A.ae(a)},
h(a){return"Instance of '"+A.aW(a)+"'"},
gn(a){return A.L(A.cb(this))}}
J.aI.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gn(a){return A.L(u.y)},
$ib:1}
J.a1.prototype={
v(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$ib:1}
J.a4.prototype={$ih:1}
J.C.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aV.prototype={}
J.ai.prototype={}
J.B.prototype={
h(a){var t=a[$.dr()]
if(t==null)t=a[$.cl()]
if(t==null)return this.ai(a)
return"JavaScript function for "+J.ax(t)}}
J.a3.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.a5.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.i.prototype={
aw(a,b,c){var t,s,r,q=[],p=a.length
for(t=0;t<p;++t){s=a[t]
if(!b.$1(s))q.push(s)
if(a.length!==p)throw A.e(A.aA(a))}r=q.length
if(r===p)return
this.sI(a,r)
for(t=0;t<q.length;++t)a[t]=q[t]},
R(a){a.$flags&1&&A.b9(a,"clear","clear")
a.length=0},
gaK(a){if(a.length>0)return a[0]
throw A.e(A.dI())},
h(a){return A.c3(a,"[","]")},
gW(a){return new J.ay(a,a.length,A.bM(a).A("ay<1>"))},
gk(a){return A.ae(a)},
sI(a,b){a.$flags&1&&A.b9(a,"set length","change the length of")
if(b>a.length)A.bM(a).c.a(null)
a.length=b},
$ic:1}
J.aH.prototype={
aO(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.aW(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bp.prototype={}
J.ay.prototype={
gH(){var t=this.d
return t==null?this.$ti.c.a(t):t},
J(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.e(A.aw(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a2.prototype={
S(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gV(b)
if(this.gV(a)===t)return 0
if(this.gV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gV(a){return a===0?1/a<0:a<0},
i(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.cG(""+a+".round()"))},
u(a,b,c){if(this.S(b,c)>0)throw A.e(A.eY(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
m(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
p(a,b){return(a|0)===a?a/b|0:this.aC(a,b)},
aC(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.e(A.cG("Result of truncating division is "+A.m(t)+": "+A.m(a)+" ~/ "+b))},
gn(a){return A.L(u.H)},
$if:1}
J.a0.prototype={
gn(a){return A.L(u.S)},
$ib:1,
$ia:1}
J.aJ.prototype={
gn(a){return A.L(u.i)},
$ib:1}
J.P.prototype={
ag(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
ae(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.B)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ad(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ae(c,t)+a},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gn(a){return A.L(u.N)},
$ib:1,
$iI:1}
A.bq.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bx.prototype={}
A.aL.prototype={
gH(){var t=this.d
return t==null?this.$ti.c.a(t):t},
J(){var t,s=this,r=s.a,q=J.f3(r),p=q.gI(r)
if(s.b!==p)throw A.e(A.aA(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.aJ(r,t);++s.c
return!0}}
A.a_.prototype={}
A.u.prototype={$r:"+(1,2)",$s:1}
A.ao.prototype={$r:"+(1,2,3)",$s:2}
A.q.prototype={$r:"+(1,2,3,4)",$s:3}
A.aB.prototype={
h(a){return A.c5(this)}}
A.aC.prototype={
aI(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
E(a,b){if(!this.aI(b))return null
return this.b[this.a[b]]},
N(a,b){var t,s,r,q=this,p=q.$keys
if(p==null){p=Object.keys(q.a)
q.$keys=p}p=p
t=q.b
for(s=p.length,r=0;r<s;++r)b.$2(p[r],t[r])}}
A.aF.prototype={
a2(){var t=this,s=t.$map
if(s==null){s=new A.a6(t.$ti.A("a6<1,2>"))
A.f1(t.a,s)
t.$map=s}return s},
E(a,b){return this.a2().E(0,b)},
N(a,b){this.a2().N(0,b)}}
A.af.prototype={}
A.G.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dq(s==null?"unknown":s)+"'"},
gaQ(){return this},
$C:"$1",
$R:1,
$D:null}
A.bh.prototype={$C:"$2",$R:2}
A.bB.prototype={}
A.bz.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dq(t)+"'"}}
A.Z.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.Z))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.cj(this.a)^A.ae(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aW(this.a)+"'")}}
A.bv.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a7.prototype={
E(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aL(b)},
aL(a){var t,s,r=this.d
if(r==null)return null
t=r[this.T(a)]
s=this.U(t,a)
if(s<0)return null
return t[s].b},
N(a,b){var t=this,s=t.e,r=t.r
while(s!=null){b.$2(s.a,s.b)
if(r!==t.r)throw A.e(A.aA(t))
s=s.c}},
L(a,b){var t=this,s=new A.br(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
T(a){return J.w(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1},
h(a){return A.c5(this)}}
A.br.prototype={}
A.a6.prototype={
T(a){return A.eZ(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
A.bV.prototype={
$1(a){return this.a(a)}}
A.bW.prototype={
$2(a,b){return this.a(a,b)}}
A.bX.prototype={
$1(a){return this.a(a)}}
A.S.prototype={
h(a){return this.a6(!1)},
a6(a){var t,s,r,q,p,o=this.an(),n=this.K(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
p=n[r]
m=a?m+A.cC(p):m+A.m(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
an(){var t,s=this.$s
while($.bI.length<=s)$.bI.push(null)
t=$.bI[s]
if(t==null){t=this.ak()
$.bI[s]=t}return t},
ak(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.x(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
l[r]=s[t]}}l=A.dM(l,!1,u.K)
l.$flags=3
return l}}
A.b3.prototype={
K(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.b3&&this.$s===b.$s&&J.A(this.a,b.a)&&J.A(this.b,b.b)},
gk(a){return A.c6(this.$s,this.a,this.b,B.e)}}
A.b4.prototype={
K(){return[this.a,this.b,this.c]},
v(a,b){var t=this
if(b==null)return!1
return b instanceof A.b4&&t.$s===b.$s&&J.A(t.a,b.a)&&J.A(t.b,b.b)&&J.A(t.c,b.c)},
gk(a){var t=this
return A.c6(t.$s,t.a,t.b,t.c)}}
A.b5.prototype={
K(){return this.a},
v(a,b){if(b==null)return!1
return b instanceof A.b5&&this.$s===b.$s&&A.e2(this.a,b.a)},
gk(a){return A.c6(this.$s,A.dN(this.a),B.e,B.e)}}
A.Q.prototype={
gn(a){return B.ay},
$ib:1}
A.ab.prototype={}
A.aM.prototype={
gn(a){return B.az},
$ib:1}
A.R.prototype={
gI(a){return a.length},
$io:1}
A.a9.prototype={$ic:1}
A.aa.prototype={$ic:1}
A.aN.prototype={
gn(a){return B.aA},
$ib:1}
A.aO.prototype={
gn(a){return B.aB},
$ib:1}
A.aP.prototype={
gn(a){return B.aC},
$ib:1}
A.aQ.prototype={
gn(a){return B.aD},
$ib:1}
A.aR.prototype={
gn(a){return B.aE},
$ib:1}
A.aS.prototype={
gn(a){return B.aG},
$ib:1}
A.aT.prototype={
gn(a){return B.aH},
$ib:1}
A.ac.prototype={
gn(a){return B.aI},
gI(a){return a.length},
$ib:1}
A.aU.prototype={
gn(a){return B.aJ},
gI(a){return a.length},
$ib:1}
A.ak.prototype={}
A.al.prototype={}
A.am.prototype={}
A.an.prototype={}
A.t.prototype={
A(a){return A.at(v.typeUniverse,this,a)},
aR(a){return A.cQ(v.typeUniverse,this,a)}}
A.b1.prototype={}
A.b6.prototype={
h(a){return A.p(this.a,null)}}
A.bF.prototype={
h(a){return this.a}}
A.b7.prototype={}
A.aj.prototype={
gW(a){var t=this,s=new A.b2(t,t.r,t.$ti.A("b2<1>"))
s.c=t.e
return s},
q(a,b){var t,s
if(b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.al(b)
return s}},
al(a){var t=this.d
if(t==null)return!1
return this.P(t[B.h.gk(a)&1073741823],a)>=0},
aE(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.Y(t==null?r.b=A.c8():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.Y(s==null?r.c=A.c8():s,b)}else return r.aj(b)},
aj(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.c8()
t=J.w(a)&1073741823
s=q[t]
if(s==null)q[t]=[r.O(a)]
else{if(r.P(s,a)>=0)return!1
s.push(r.O(a))}return!0},
aM(a,b){var t
if(b!=="__proto__")return this.av(this.b,b)
else{t=this.au(b)
return t}},
au(a){var t,s,r,q,p=this.d
if(p==null)return!1
t=B.h.gk(a)&1073741823
s=p[t]
r=this.P(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete p[t]
this.a8(q)
return!0},
Y(a,b){if(a[b]!=null)return!1
a[b]=this.O(b)
return!0},
av(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.a8(t)
delete a[b]
return!0},
a3(){this.r=this.r+1&1073741823},
O(a){var t,s=this,r=new A.bH(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.a3()
return r},
a8(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.a3()},
P(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
A.bH.prototype={}
A.b2.prototype={
gH(){var t=this.d
return t==null?this.$ti.c.a(t):t},
J(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.e(A.aA(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.d.prototype={
gW(a){return new A.aL(a,a.length,A.av(a).A("aL<d.E>"))},
aJ(a,b){return a[b]},
h(a){return A.c3(a,"[","]")}}
A.a8.prototype={
h(a){return A.c5(this)}}
A.bs.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.m(a)
s.a=(s.a+=t)+": "
t=A.m(b)
s.a+=t}}
A.ag.prototype={
h(a){return A.c3(this,"{","}")}}
A.ap.prototype={}
A.bE.prototype={
h(a){return this.a_()}}
A.bl.prototype={}
A.be.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bm(t)
return"Assertion failed"}}
A.bC.prototype={}
A.Y.prototype={
ga1(){return"Invalid argument"+(!this.a?"(s)":"")},
ga0(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.m(q),o=t.ga1()+r+p
if(!t.a)return o
return o+t.ga0()+": "+A.bm(t.gab())},
gab(){return this.b}}
A.bu.prototype={
gab(){return this.b},
ga1(){return"RangeError"},
ga0(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.b0.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bD.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aZ.prototype={
h(a){return"Bad state: "+this.a}}
A.bi.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bm(t)+"."}}
A.bt.prototype={
h(a){return"Out of Memory"}}
A.ad.prototype={
gk(a){return A.j.prototype.gk.call(this,0)},
h(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.ae(this)},
h(a){return"Instance of '"+A.aW(this)+"'"},
gn(a){return A.f5(this)},
toString(){return this.h(this)}}
A.b_.prototype={
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bZ.prototype={
$1(a){return $.bb().af(a,$.bd().w)}}
A.c_.prototype={
$1(a){a.preventDefault()
$.bb().a9()
A.b8(this.a,!0)}}
A.c0.prototype={
$1(a){A.b8(this.a,!1)}}
A.c1.prototype={
$1(a){A.b8(this.a,!1)}}
A.bg.prototype={
a9(){var t=this.a
if(t==null)t=this.a=new v.G.AudioContext()
t.resume()},
af(a,b){var t,s=this
if(b)return
t=s.a
if(t==null)return
switch(a){case"swing":s.B(t,180,0.05,0.04,0.6)
break
case"hit":s.B(t,740,0.07,0.08,0.45)
break
case"drop":s.B(t,420,0.08,0.07,0.7)
break
case"smash":s.B(t,160,0.12,0.1,0.35)
s.B(t,880,0.06,0.06,0.4)
break
case"jump":s.B(t,300,0.05,0.03,1.8)
break
case"point":s.F(t,523,0.1,0.08)
s.C(t,659,0.1,0.08,0.09)
s.C(t,784,0.16,0.08,0.18)
break
case"fault":case"let":s.B(t,196,0.14,0.07,0.5)
break
case"win":s.F(t,523,0.12,0.09)
s.C(t,659,0.12,0.09,0.12)
s.C(t,784,0.12,0.09,0.24)
s.C(t,1046,0.28,0.09,0.36)
break
case"lose":s.F(t,392,0.16,0.08)
s.C(t,330,0.16,0.08,0.16)
s.C(t,262,0.28,0.08,0.32)
break
case"start":s.F(t,880,0.08,0.06)
break
default:break}},
aN(a,b){var t,s,r,q=this,p=q.a
if(p==null)return
t=b&&!a
q.d=t
if(!t)return
s=p.currentTime
if(s+0.02<q.b)return
r=B.U[B.b.m(q.c,16)]
q.F(p,r,0.16,0.035)
q.aD(p,r/2,0.16,0.02,"triangle");++q.c
q.b=s+0.18},
M(a,b,c,d,e,f,g){var t,s,r,q=a.currentTime+g,p=a.createOscillator(),o=a.createGain()
p.type=f
p.frequency.setValueAtTime(b,q)
if(e!==1){t=b*e
s=p.frequency
r=t<40?40:t
s.exponentialRampToValueAtTime(r,q+c)}o.gain.setValueAtTime(d,q)
s=q+c
o.gain.exponentialRampToValueAtTime(0.0001,s)
p.connect(o)
o.connect(a.destination)
p.start(q)
p.stop(s+0.02)},
F(a,b,c,d){return this.M(a,b,c,d,1,"square",0)},
aD(a,b,c,d,e){return this.M(a,b,c,d,1,e,0)},
B(a,b,c,d,e){return this.M(a,b,c,d,e,"square",0)},
C(a,b,c,d,e){return this.M(a,b,c,d,1,"square",e)}}
A.H.prototype={
a_(){return"Phase."+this.b}}
A.aE.prototype={
a_(){return"Difficulty."+this.b}}
A.aD.prototype={}
A.ah.prototype={}
A.bf.prototype={}
A.aX.prototype={}
A.bw.prototype={}
A.bj.prototype={
t(){return this.a=1664525*this.a+1013904223&2147483647},
X(){var t,s=this.x
if(s>=15)return 1
t=this.y
if(t>=15)return 2
if(s>=11&&s-t>=2)return 1
if(t>=11&&t-s>=2)return 2
return 0},
gah(){var t,s=this.x
if(s>=10&&this.y>=10){t=this.y
if(s===t)return"DEUCE"
if(s>t)return"ADV 1P"
return"ADV COM"}return""},
aP(a){var t,s,r,q,p=this;++p.b
if(a.w)p.w=!p.w
t=p.at
if(t>0)p.at=t-1
t=p.cx
if(t>0)p.cx=t-1
t=p.c
s=t===B.j||t===B.d
if(s&&a.a&&!p.e)p.d=B.i
if(s&&a.b&&!p.f)p.d=B.c
p.e=a.a
p.f=a.b
switch(t.a){case 0:if(a.r||a.e)p.Z()
break
case 4:if(a.r||a.e)p.Z()
break
case 1:if(--p.Q<=0){r=p.z===0?p.dx:p.dy
p.c=B.k
p.cy=""
t=p.fr
t.a=r.c
q=r.b
t.b=r.d+q*0.03
t.c=0.06
t.d=0
t.e=q*0.0006
t.f=0.013
t.w=t.r=!0
t.y=t.x=!1
t.z=-1
q=p.fy
B.f.R(q)
q.push(new A.ao(t.a,t.b,t.c))}break
case 3:if(--p.Q<=0)if(p.X()!==0){p.c=B.d
p.cy=p.X()===1?"YOU WIN":"YOU LOSE"
t=p.db
if(t!=null)t.$1(p.X()===1?"win":"lose")}else p.a5()
break
case 2:if(a.r)p.r=!p.r
if(!p.r)p.aq(a)
break}p.aB()},
Z(){var t,s=this
s.z=s.y=s.x=0
s.r=!1
t=s.db
if(t!=null)t.$1("start")
s.a5()},
a5(){var t,s,r,q=this
q.c=B.t
q.cy=q.z===0?"YOUR SERVE":"COM SERVE"
q.Q=46
q.fr.r=!1
B.f.R(q.fy)
q.ay=0
q.ch=null
q.ax=0
t=q.dx
s=q.z
r=s===0
t.c=r?-0.22:0.18
t.d=r?0.14:0.24
t.r=0
t=q.dy
s=s===1
t.c=s?0.22:-0.18
t.d=s?0.86:0.76
q.as=t.r=0},
aq(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.as
if(g>0){h.as=g-1
return}if(a.e&&h.dx.r===0){t=A.dm(a,h.ax)
g=h.dx
g.x=t.a
g.y=t.b
g.z=t.c
h.ax=0}else if(a.f){g=h.ax
s=A.dm(a,g<48?h.ax=g+1:g)
g=h.dx
g.x=s.a
g.y=s.b
g.z=s.c}r=h.am()
q=a.f||a.e||h.dx.r>0
g=h.dx
h.ao(g,a,q)
p=h.dy
h.ap(p,r,h.d===B.c?1.08:0.55)
o=h.fr
if(!o.r)return
n=o.a
m=o.b
l=o.c
k=o.z
j=A.ck(o)
i=h.fy
i.push(new A.ao(o.a,o.b,o.c))
if(i.length>8){i.$flags&1&&A.b9(i,"removeAt",1)
i.splice(0,1)[0]}if(!h.a7(g,a,n,m,l))h.a7(p,r,n,m,l)
if(j&&o.z===k)h.az()},
a4(a,b,c,d){var t,s,r,q,p,o
if(c){a.w=!1
return}t=0.044*d
s=0.02*d
if(a.r>0){t*=0.7
s*=0.7}r=b.a
if(r)a.c-=t
q=b.b
if(q)a.c+=t
p=b.c
if(p)a.d+=s
o=b.d
if(o)a.d-=s
a.w=r||q||p||o
a.c=B.a.u(a.c,-0.88,0.88)
a.d=B.a.u(a.d,a.e,a.f)},
ao(a,b,c){return this.a4(a,b,c,1)},
ap(a,b,c){return this.a4(a,b,!1,c)},
am(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.dy,d=new A.aD(),c=f.fr
if(!c.r)return d
t=c.w&&c.z<0&&f.z===1
if(c.z!==1){s=c.e
if(!(s>0.0015)){s=Math.abs(s)<=0.0015&&c.b>0.5
r=s}else r=!0}else r=!1
if(t){f.ch=null
q=c.a
p=c.b-e.b*0.02}else if(r&&f.b<f.ay){q=e.c
p=e.d}else if(r){o=f.ar()
n=f.d===B.c?7:31
s=B.b.m(f.t(),n)
m=f.d===B.c?70:26
q=f.ch
if(q==null){q=o.a+(s-(n/2|0))/m
f.ch=q}p=o.b}else{f.ch=null
q=0
p=0.8}p=B.a.u(p,e.e,e.f)
s=f.d===B.c
l=s?0.02:0.08
k=s?0.02:0.06
m=e.c
if(m>q+l)d.a=!0
if(m<q-l)d.b=!0
j=e.d
if(j<p-k)d.c=!0
if(j>p+k)d.d=!0
i=s?0.28:0.11
h=s?0.12:0.055
g=!1
if(Math.abs(c.a-m)<i)if(Math.abs(c.b-j)<h){m=c.c
m=m<(s?0.4:0.28)&&m>0.02
g=m}if(e.r===0&&g&&f.b>=f.ay&&c.z!==1)if(!t||c.f<0.004){if(s){e.x=B.a.u(0.74+B.b.m(f.t(),6)/20,0,1)
c=f.dx.c
if(c>0.12)c=-1
else c=c<-0.12?1:0
e.y=c
e.z=B.b.m(f.t(),5)===0?-1:1}else{e.x=0.24+B.b.m(f.t(),4)/20
e.y=B.b.m(f.t(),3)-1
e.z=B.b.m(f.t(),3)===0?1:-1}d.e=!0}return d},
ar(){var t,s,r,q=this.fr,p=new A.ah()
p.a=q.a
p.b=q.b
t=p.c=q.c
p.d=q.d
p.e=q.e
p.f=q.f
p.r=q.r
p.w=q.w
p.x=q.x
p.y=q.y
p.z=q.z
q=t
s=0
for(;;){if(!(s<420&&p.r))break
r=p.b
if(A.ck(p))return new A.u(p.a,p.b-0.04)
t=p.c
if(t<=q&&r<0.78&&p.b>=0.78&&t<0.28)return new A.u(p.a,0.78);++s
q=t}return new A.u(p.a,0.8)},
a7(b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b2.e&&b1.r===0){b1.r=24
t=b0.db
if(t!=null)t.$1("swing")}t=b1.r
if(t<=0||!b0.fr.r){if(t>0)b1.r=t-1
return!1}s=t<=16&&t>=8
b1.r=t-1
if(!s||b0.fr.z===b1.a)return!1
t=b0.fr
r=t.w
q=r&&t.z<0
p=q?0.3:0.2
o=q?0.12:0.085
n=q?0.28:0.32
m=t.c
if(m>n)return!1
l=b1.c
k=b1.d
j=t.a
i=t.b
h=j-b3
g=i-b4
f=h*h+g*g
if(f>1e-7){e=((l-b3)*h+(k-b4)*g)/f
if(e<0)e=0
if(e>1)e=1}else e=0
d=b3+h*e-l
c=b4+g*e-k
b=A.eU(d*d+c*c)
a=Math.abs(m-b5)<n||m<n
if(b<=(p+o)/2&&a&&Math.abs(i-k)<o+0.02){a0=r&&t.z<0
r=b1.b
if(!(r>0&&i>0.3))a1=r<0&&i<0.7
else a1=!0
if(a0)a2="serve"
else if(a1&&m>0.26)a2="smash"
else if(a1)a2="drop"
else a2=m>0.22?"clear":"drive"
m=b1.a
l=m===1
if(!l)a3=0
else a3=b0.d===B.c?(B.b.m(b0.t(),7)-3)/40:(B.b.m(b0.t(),21)-10)/18
k=t.a
j=t.b
i=t.c
a4=b1.x
a5=b1.y
a6=b1.z
a7=A.fj(a5,a6,r,l?a3:0,i,a2,a4,k,j)
t.d=a7.a
t.e=a7.b
t.f=a7.c
t.z=m
t.y=t.x=!1
t.r=!0
if(!a0)t.w=!1
if(m===0){b0.ch=null
a8=a2==="smash"||a2==="drop"?18:10
r=b0.b
b0.ay=r+(b0.d===B.c?a8/2|0:a8+14)}r=b1.x
b0.as=r>0.75?4:2
l=r>0.7
if(l)b0.at=4+B.a.i(r*6)
b0.CW=m
b0.cx=8
b0.aA(t.a,t.b,t.c,l)
t=b1.x
if(t>0.75)a9="smash"
else a9=b1.z<0&&t<0.45?"drop":"hit"
t=b0.db
if(t!=null)t.$1(a9)
return!0}return!1},
aA(a,b,c,d){var t,s,r,q,p,o,n=this,m=d?7:5
for(t=n.fx,s=0;s<m;++s){r=n.a=1664525*n.a+1013904223&2147483647
q=B.b.m(r,9)
r=n.a=1664525*r+1013904223&2147483647
p=B.b.m(r,9)
r=1664525*r+1013904223&2147483647
n.a=r
r=B.b.m(r,5)
o=d?10:2
t.push(new A.aX(a,b,c,(q-4)/80,(p-4)/120,0.004+r/800,o))}},
az(){var t,s,r,q,p,o,n,m=this,l="FAULT",k=m.fr
k.r=!1
B.f.R(m.fy)
t=k.z
if(t<0){m.D(1-m.z,l)
return}s=k.b
r=s>0.5&&s<=1&&Math.abs(k.a)<=1
q=s<0.5&&s>=0&&Math.abs(k.a)<=1
p=t===0
o=p?r:q
if(k.w){if(p)n=s>=0.68&&s<=1&&Math.abs(k.a)<=1
else n=s<=0.32&&s>=0&&Math.abs(k.a)<=1
s=k.y
if(s&&n&&o){m.cy="LET"
m.c=B.l
m.Q=50
k=m.db
if(k!=null)k.$1("let")
return}if(!k.x||s||!n){m.D(1-t,l)
return}m.D(t,"POINT")
return}if(o&&k.x){m.D(t,"POINT")
return}if(Math.abs(k.a)>1||s<0||s>1){m.D(1-t,"OUT")
return}m.D(1-t,l)},
D(a,b){var t,s=this
if(a===0)++s.x
else ++s.y
s.z=a
s.cy=b
s.c=B.l
s.Q=70
s.CW=a
s.cx=20
t=s.db
if(t!=null)t.$1(b==="POINT"?"point":"fault")},
aB(){var t,s,r,q,p,o
for(t=this.fx,s=t.length,r=0;r<s;++r){q=t[r]
q.a=q.a+q.d
q.b=q.b+q.e
p=q.c
o=q.f
q.c=p+o
q.f=o-0.0006;--q.r}t.$flags&1&&A.b9(t,16)
B.f.aw(t,new A.bk(),!0)}}
A.bk.prototype={
$1(a){return a.r<=0}}
A.aK.prototype={}
A.bn.prototype={}
A.by.prototype={}
A.bo.prototype={
aH(a,b){var t,s
for(t=this.a,s=0;s<61440;++s)t[s]=b},
l(a,b,c){if(c===0)return
if(a<0||b<0||a>=256||b>=240)return
this.a[b*256+a]=c},
ac(a,b,c,d,e){var t,s,r=Math.abs(c-a),q=a<c?1:-1,p=Math.abs(d-b),o=b<d?1:-1,n=r-p
for(t=-p;;){this.l(a,b,e)
if(a===c&&b===d)break
s=n*2
if(s>t){n-=p
a+=q}if(s<r){n+=r
b+=o}}},
j(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b+d,k=a+c
for(t=this.a,s=k>256,r=a<0,q=b;q<l;++q){if(q<0||q>=240)continue
p=q*256
o=r?0:a
n=s?256:k
for(m=o;m<n;++m)t[p+m]=e}},
G(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=a.a,m=a.b,l=a.c
for(t=n-1,s=0;s<m;++s)for(r=c+s*e,q=s*n,p=0;p<n;++p){o=l[q+p]
if(o===0)continue
if(o===5)o=f
if(o===6)o=g
this.j(b+(d?t-p:p)*e,r,e,e,o)}},
aG(a,b,c,d,e,f){return this.G(a,b,c,!1,d,e,f)},
aa(a,b,c,d){return this.G(a,b,c,!1,d,5,6)},
aF(a,b,c,d,e){return this.G(a,b,c,d,e,5,6)}}
A.aY.prototype={};(function aliases(){var t=J.C.prototype
t.ai=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1
t(A,"fe","eN",0)
t(A,"ff","eO",0)
t(A,"dh","eM",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.c4,J.aG,A.af,J.ay,A.bl,A.bx,A.aL,A.a_,A.S,A.aB,A.G,A.a8,A.br,A.t,A.b1,A.b6,A.ag,A.bH,A.b2,A.d,A.bE,A.bt,A.ad,A.b_,A.bg,A.aD,A.ah,A.bf,A.aX,A.bw,A.bj,A.aK,A.bn,A.by,A.bo,A.aY])
r(J.aG,[J.aI,J.a1,J.a4,J.a3,J.a5,J.a2,J.P])
r(J.a4,[J.C,J.i,A.Q,A.ab])
r(J.C,[J.aV,J.ai,J.B])
s(J.aH,A.af)
s(J.bp,J.i)
r(J.a2,[J.a0,J.aJ])
r(A.bl,[A.bq,A.bv,A.bF,A.be,A.bC,A.Y,A.b0,A.bD,A.aZ,A.bi])
r(A.S,[A.b3,A.b4,A.b5])
s(A.u,A.b3)
s(A.ao,A.b4)
s(A.q,A.b5)
r(A.aB,[A.aC,A.aF])
r(A.G,[A.bh,A.bB,A.bV,A.bX,A.bZ,A.c_,A.c0,A.c1,A.bk])
r(A.bB,[A.bz,A.Z])
s(A.a7,A.a8)
s(A.a6,A.a7)
r(A.bh,[A.bW,A.bs])
r(A.ab,[A.aM,A.R])
r(A.R,[A.ak,A.am])
s(A.al,A.ak)
s(A.a9,A.al)
s(A.an,A.am)
s(A.aa,A.an)
r(A.a9,[A.aN,A.aO])
r(A.aa,[A.aP,A.aQ,A.aR,A.aS,A.aT,A.ac,A.aU])
s(A.b7,A.bF)
s(A.ap,A.ag)
s(A.aj,A.ap)
s(A.bu,A.Y)
r(A.bE,[A.H,A.aE])
t(A.ak,A.d)
t(A.al,A.a_)
t(A.am,A.d)
t(A.an,A.a_)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",di:"num",I:"String",dd:"bool",ad:"Null",c:"List",j:"Object",ft:"Map",h:"JSObject"},mangledNames:{},types:["~(h)","~(f)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.u&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ao&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.q&&A.fi(a,b.a)}}
A.e9(v.typeUniverse,JSON.parse('{"aV":"C","ai":"C","B":"C","fu":"Q","aI":{"b":[]},"a1":{"b":[]},"a4":{"h":[]},"C":{"h":[]},"i":{"c":["1"],"h":[]},"aH":{"af":[]},"bp":{"i":["1"],"c":["1"],"h":[]},"a2":{"f":[]},"a0":{"f":[],"a":[],"b":[]},"aJ":{"f":[],"b":[]},"P":{"I":[],"b":[]},"a7":{"a8":["1","2"]},"a6":{"a7":["1","2"],"a8":["1","2"]},"Q":{"h":[],"b":[]},"ab":{"h":[]},"aM":{"h":[],"b":[]},"R":{"o":["1"],"h":[]},"a9":{"d":["f"],"c":["f"],"o":["f"],"h":[]},"aa":{"d":["a"],"c":["a"],"o":["a"],"h":[]},"aN":{"d":["f"],"c":["f"],"o":["f"],"h":[],"b":[],"d.E":"f"},"aO":{"d":["f"],"c":["f"],"o":["f"],"h":[],"b":[],"d.E":"f"},"aP":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aQ":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aR":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aS":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aT":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"ac":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aU":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aj":{"ag":["1"]},"ap":{"ag":["1"]},"dH":{"c":["a"]},"dU":{"c":["a"]},"dT":{"c":["a"]},"dF":{"c":["a"]},"dR":{"c":["a"]},"dG":{"c":["a"]},"dS":{"c":["a"]},"dD":{"c":["f"]},"dE":{"c":["f"]}}'))
A.e8(v.typeUniverse,JSON.parse('{"a_":1,"aB":2,"R":1,"ap":1}'))
var u=(function rtii(){var t=A.z
return{Z:t("fs"),f:t("i<j>"),s:t("i<I>"),b:t("i<@>"),t:t("i<a>"),T:t("a1"),m:t("h"),g:t("B"),p:t("o<@>"),j:t("c<@>"),P:t("ad"),K:t("j"),L:t("fv"),F:t("+()"),N:t("I"),R:t("b"),o:t("ai"),y:t("dd"),i:t("f"),S:t("a"),O:t("cz<ad>?"),z:t("h?"),X:t("j?"),v:t("I?"),u:t("dd?"),I:t("f?"),w:t("a?"),n:t("di?"),H:t("di")}})();(function constants(){var t=hunkHelpers.makeConstList
B.C=J.aG.prototype
B.f=J.i.prototype
B.b=J.a0.prototype
B.a=J.a2.prototype
B.h=J.P.prototype
B.D=J.B.prototype
B.E=J.a4.prototype
B.u=J.aV.prototype
B.m=J.ai.prototype
B.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.v=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.A=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.z=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.y=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.x=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.o=function(hooks) { return hooks; }

B.B=new A.bt()
B.e=new A.bx()
B.i=new A.aE(0,"easy")
B.c=new A.aE(1,"hard")
B.F=t([5,7,10,2,24,8],u.t)
B.ax=new A.u(-1,0)
B.aw=new A.u(1,0)
B.av=new A.u(0,-1)
B.au=new A.u(0,1)
B.I=t([B.ax,B.aw,B.av,B.au],A.z("i<+(a,a)>"))
B.M=t([".wwww...","wwwwwwo.",".wwwooko","..ww.oko","...w.oo.",".....o..","........","........"],u.s)
B.q=t(["000","000","000","000","000"],u.s)
B.T=t([0,1579032,16579836,16300152,5255168,14166016,8918016,2111724,188,12878848,16308344,6232,3980540,22776,43008,30720,11303936,7878656,20480,16291904,12369084,8158332,10806524,13695228,12122136],u.t)
B.U=t([523,659,784,659,587,523,440,523,392,523,659,523,494,440,392,440],A.z("i<f>"))
B.a1=t(["....hhhh........","...ohhhho.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....",".odrrrrrrdo.....","..owwwwwwo......","..owwwwwwo......","..oo....oo......",".ow......wo.....",".oo......oo....."],u.s)
B.a5=t(["...wwww.",".owwwww.","okoooww.","oko.ww..",".oo.w...","..o.....","........","........"],u.s)
B.a7=t(["....hhhh........","...ohhhho.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....",".odrrrrrrdo.....","..owwwwwwo......","..oww..wwo......","..oo..oo........",".ow....wo.......",".oo....oo......."],u.s)
B.ac=t([".okko.","ok..ko","ok..ko",".okko.","..kk..","..kk..","...k.."],u.s)
B.ae=t(["..ww....",".wwww...","wwwwww..",".wwww...","..oo....","..oko...","..oko...","..oo...."],u.s)
B.ai=t(["......",".okko.","ok..ko",".okko.","kk....","k.....","......"],u.s)
B.an=t(["..oo....","..oko...","..oko...","..oo....",".wwww...","wwwwww..",".wwww...","..ww...."],u.s)
B.ao=t(["....hhhh........","...ohhhho.......","...osooso.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....","..owwwwwwo......","..owwwwwwo......","..oo....oo......",".ow......wo.....",".oo......oo....."],u.s)
B.at={".":0,o:1,s:2,h:3,r:4,d:5,w:6,k:7}
B.ar=new A.aC(B.at,[0,1,3,4,5,6,2,9],A.z("aC<I,a>"))
B.Z=t(["111","101","111","101","101"],u.s)
B.N=t(["110","101","110","101","110"],u.s)
B.a8=t(["111","100","100","100","111"],u.s)
B.a6=t(["110","101","101","101","110"],u.s)
B.R=t(["111","100","110","100","111"],u.s)
B.a2=t(["111","100","110","100","100"],u.s)
B.a3=t(["111","100","101","101","111"],u.s)
B.am=t(["101","101","111","101","101"],u.s)
B.Y=t(["111","010","010","010","111"],u.s)
B.L=t(["001","001","001","101","111"],u.s)
B.ab=t(["101","101","110","101","101"],u.s)
B.af=t(["100","100","100","100","111"],u.s)
B.S=t(["101","111","101","101","101"],u.s)
B.J=t(["111","101","101","101","101"],u.s)
B.p=t(["111","101","101","101","111"],u.s)
B.W=t(["111","101","111","100","100"],u.s)
B.ap=t(["111","101","101","111","001"],u.s)
B.ag=t(["110","101","110","101","101"],u.s)
B.r=t(["111","100","111","001","111"],u.s)
B.X=t(["111","010","010","010","010"],u.s)
B.ad=t(["101","101","101","101","111"],u.s)
B.a_=t(["101","101","101","101","010"],u.s)
B.ak=t(["101","101","101","111","101"],u.s)
B.G=t(["101","101","010","101","101"],u.s)
B.O=t(["101","101","010","010","010"],u.s)
B.aj=t(["111","001","010","100","111"],u.s)
B.aa=t(["010","110","010","010","111"],u.s)
B.H=t(["111","001","111","100","111"],u.s)
B.a4=t(["111","001","111","001","111"],u.s)
B.P=t(["101","101","111","001","001"],u.s)
B.V=t(["111","100","111","101","111"],u.s)
B.a9=t(["111","001","010","010","010"],u.s)
B.ah=t(["111","101","111","101","111"],u.s)
B.a0=t(["111","101","111","001","111"],u.s)
B.K=t(["010","010","010","000","010"],u.s)
B.aq=t(["111","001","011","000","010"],u.s)
B.Q=t(["000","000","111","000","000"],u.s)
B.al=t(["000","000","000","000","010"],u.s)
B.as=new A.aF(["A",B.Z,"B",B.N,"C",B.a8,"D",B.a6,"E",B.R,"F",B.a2,"G",B.a3,"H",B.am,"I",B.Y,"J",B.L,"K",B.ab,"L",B.af,"M",B.S,"N",B.J,"O",B.p,"P",B.W,"Q",B.ap,"R",B.ag,"S",B.r,"T",B.X,"U",B.ad,"V",B.a_,"W",B.ak,"X",B.G,"Y",B.O,"Z",B.aj,"0",B.p,"1",B.aa,"2",B.H,"3",B.a4,"4",B.P,"5",B.r,"6",B.V,"7",B.a9,"8",B.ah,"9",B.a0,"!",B.K,"?",B.aq,"-",B.Q,".",B.al," ",B.q],A.z("aF<I,c<I>>"))
B.j=new A.H(0,"title")
B.t=new A.H(1,"ready")
B.k=new A.H(2,"play")
B.l=new A.H(3,"banner")
B.d=new A.H(4,"gameOver")
B.ay=A.v("fo")
B.az=A.v("fp")
B.aA=A.v("dD")
B.aB=A.v("dE")
B.aC=A.v("dF")
B.aD=A.v("dG")
B.aE=A.v("dH")
B.aF=A.v("j")
B.aG=A.v("dR")
B.aH=A.v("dS")
B.aI=A.v("dT")
B.aJ=A.v("dU")})();(function staticFields(){$.bG=null
$.au=A.x([],u.f)
$.cB=null
$.cw=null
$.cv=null
$.df=null
$.dc=null
$.dk=null
$.bR=null
$.bY=null
$.ch=null
$.bI=A.x([],A.z("i<c<j>?>"))
$.bU=A.dL(u.N)
$.d2=0
$.bL=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fr","dr",()=>A.bT("_$dart_dartClosure"))
t($,"fq","cl",()=>A.bT("_$dart_dartClosure_dartJSInterop"))
t($,"fx","ds",()=>A.x([new J.aH()],A.z("i<af>")))
t($,"fw","ba",()=>A.cj(B.aF))
t($,"fC","bd",()=>new A.bj(Date.now()&2147483647,B.j,B.i,A.ct(1,0.44,0.05,0,0.16),A.ct(-1,0.95,0.56,1,0.84),new A.ah(),A.x([],A.z("i<aX>")),A.x([],A.z("i<+(f,f,f)>"))))
t($,"fD","cn",()=>new A.bo(A.cA(61440,13,!1,u.S)))
t($,"fy","bb",()=>new A.bg())
t($,"fB","bc",()=>new A.aD())
t($,"fI","cq",()=>new Uint8Array(245760))
t($,"fz","cm",()=>A.F(B.a1))
t($,"fA","dt",()=>A.F(B.a7))
t($,"fE","co",()=>A.F(B.ao))
t($,"fJ","cr",()=>A.x([A.F(B.M),A.F(B.ae),A.F(B.a5),A.F(B.an)],A.z("i<aY>")))
t($,"fH","cp",()=>A.F(B.ac))
t($,"fG","O",()=>A.F(B.ai))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.Q,SharedArrayBuffer:A.Q,ArrayBufferView:A.ab,DataView:A.aM,Float32Array:A.aN,Float64Array:A.aO,Int16Array:A.aP,Int32Array:A.aQ,Int8Array:A.aR,Uint16Array:A.aS,Uint32Array:A.aT,Uint8ClampedArray:A.ac,CanvasPixelArray:A.ac,Uint8Array:A.aU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.R.$nativeSuperclassTag="ArrayBufferView"
A.ak.$nativeSuperclassTag="ArrayBufferView"
A.al.$nativeSuperclassTag="ArrayBufferView"
A.a9.$nativeSuperclassTag="ArrayBufferView"
A.am.$nativeSuperclassTag="ArrayBufferView"
A.an.$nativeSuperclassTag="ArrayBufferView"
A.aa.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fd
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map

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
if(a[b]!==t){A.fk(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.x(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cd(b)
return new t(c,this)}:function(){if(t===null)t=A.cd(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cd(a).prototype
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
cg(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.cf==null){A.f6()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.e(A.cD("Return interceptor for "+A.m(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.bF
if(p==null)p=$.bF=A.bR(o)
q=r[p]}if(q!=null)return q
q=A.fa(a)
if(q!=null)return q
if(typeof a=="function")return B.B
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.bF
if(p==null)p=$.bF=A.bR(o)
Object.defineProperty(r,p,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
dH(a,b){if(a<0||a>4294967295)throw A.e(A.dM(a,0,4294967295,"length",null))
return J.dI(new Array(a),b)},
dI(a,b){var t=A.x(a,b.u("i<0>"))
t.$flags=1
return t},
M(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a0.prototype
return J.aI.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.a1.prototype
if(typeof a=="boolean")return J.aH.prototype
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.ce(a)},
f1(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.ce(a)},
f2(a){if(a==null)return a
if(Array.isArray(a))return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.B.prototype
if(typeof a=="symbol")return J.a5.prototype
if(typeof a=="bigint")return J.a3.prototype
return a}if(a instanceof A.j)return a
return J.ce(a)},
A(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)},
w(a){return J.M(a).gj(a)},
ds(a){return J.f2(a).gW(a)},
dt(a){return J.M(a).gm(a)},
ax(a){return J.M(a).h(a)},
aF:function aF(){},
aH:function aH(){},
a1:function a1(){},
a4:function a4(){},
C:function C(){},
aU:function aU(){},
ai:function ai(){},
B:function B(){},
a3:function a3(){},
a5:function a5(){},
i:function i(a){this.$ti=a},
aG:function aG(){},
bo:function bo(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(){},
a0:function a0(){},
aI:function aI(){},
P:function P(){}},A={c2:function c2(){},
y(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
bz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
de(a){var t,s
for(t=$.au.length,s=0;s<t;++s)if(a===$.au[s])return!0
return!1},
dG(){return new A.aY("No element")},
bp:function bp(a){this.a=a},
bw:function bw(){},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a_:function a_(){},
dn(a){var t=A.dm(a)
if(t!=null)return t
return"minified:"+a},
fD(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ax(a)
return t},
ae(a){var t,s=$.cz
if(s==null)s=$.cz=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aV(a){var t,s,r,q
if(a instanceof A.j)return A.p(A.av(a),null)
t=J.M(a)
if(t===B.A||t===B.C||u.o.b(a)){s=B.l(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.av(a),null)},
cA(a){var t,s,r
if(a==null||typeof a=="number"||A.ca(a))return J.ax(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.F)return a.h(0)
if(a instanceof A.S)return a.a5(!0)
t=$.dq()
for(s=0;s<1;++s){r=t[s].aN(a)
if(r!=null)return r}return"Instance of '"+A.aV(a)+"'"},
eW(a){return new A.Y(!0,a,null,null)},
e(a){return A.l(a,new Error())},
l(a,b){var t
if(a==null)a=new A.bB()
b.dartException=a
t=A.fl
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fl(){return J.ax(this.dartException)},
dl(a,b){throw A.l(a,b==null?new Error():b)},
b8(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.dl(A.eq(a,b,c),t)},
eq(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.b_("'"+t+"': Cannot "+p+" "+m+l+o)},
aw(a){throw A.e(A.aA(a))},
ch(a){if(a==null)return J.w(a)
if(typeof a=="object")return A.ae(a)
return J.w(a)},
eX(a){if(typeof a=="number")return B.a.gj(a)
if(a instanceof A.b5)return A.ae(a)
if(a instanceof A.S)return a.gj(a)
return A.ch(a)},
f_(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
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
dA(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.by().constructor.prototype):Object.create(new A.Z(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cw(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dw(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cw(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dw(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.du)}throw A.e("Error in functionType of tearoff")},
dx(a,b,c,d){var t=A.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cw(a,b,c,d){if(c)return A.dz(a,b,d)
return A.dx(b.length,d,a,b)},
dy(a,b,c,d){var t=A.cv,s=A.dv
switch(b?-1:a){case 0:throw A.e(new A.bu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dz(a,b,c){var t,s
if($.ct==null)$.ct=A.cs("interceptor")
if($.cu==null)$.cu=A.cs("receiver")
t=b.length
s=A.dy(t,c,a,b)
return s},
cd(a){return A.dA(a)},
du(a,b){return A.at(v.typeUniverse,A.av(a.a),b)},
cv(a){return a.a},
dv(a){return a.b},
cs(a){var t,s,r,q=new A.Z("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.e(A.cq("Field name "+a+" not found."))},
bR(a){return v.getIsolateTag(a)},
fa(a){var t,s,r,q,p,o=$.dd.$1(a),n=$.bQ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bW[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.d9.$2(a,o)
if(r!=null){n=$.bQ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bW[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c0(t)
$.bQ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bW[o]=t
return t}if(q==="-"){p=A.c0(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dh(a,t)
if(q==="*")throw A.e(A.cD(o))
if(v.leafTags[o]===true){p=A.c0(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dh(a,t)},
dh(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cg(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c0(a){return J.cg(a,!1,null,!!a.$io)},
fe(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c0(t)
else return J.cg(t,c,null,null)},
f6(){if(!0===$.cf)return
$.cf=!0
A.f7()},
f7(){var t,s,r,q,p,o,n,m
$.bQ=Object.create(null)
$.bW=Object.create(null)
A.f5()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.di.$1(p)
if(o!=null){n=A.fe(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f5(){var t,s,r,q,p,o,n=B.t()
n=A.V(B.u,A.V(B.v,A.V(B.m,A.V(B.m,A.V(B.w,A.V(B.x,A.V(B.y(B.l),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dd=new A.bT(q)
$.d9=new A.bU(p)
$.di=new A.bV(o)},
V(a,b){return a(b)||b},
e0(a,b){var t
for(t=0;t<a.length;++t)if(!J.A(a[t],b[t]))return!1
return!0},
eY(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
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
aE:function aE(a,b){this.a=a
this.$ti=b},
af:function af(){},
F:function F(){},
bg:function bg(){},
bA:function bA(){},
by:function by(){},
Z:function Z(a,b){this.a=a
this.b=b},
bu:function bu(a){this.a=a},
a7:function a7(){},
bq:function bq(a,b){this.a=a
this.b=b
this.c=null},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bT:function bT(a){this.a=a},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
S:function S(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
Q:function Q(){},
ab:function ab(){},
aL:function aL(){},
R:function R(){},
a9:function a9(){},
aa:function aa(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
ac:function ac(){},
aT:function aT(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
an:function an(){},
c5(a,b){var t=b.c
return t==null?b.c=A.ar(a,"cx",[b.x]):t},
cB(a){var t=a.w
if(t===6||t===7)return A.cB(a.x)
return t===11||t===12},
dN(a){return a.as},
fg(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
z(a){return A.bI(v.typeUniverse,a,!1)},
K(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.K(a0,t,a2,a3)
if(s===t)return a1
return A.cL(a0,s,!0)
case 7:t=a1.x
s=A.K(a0,t,a2,a3)
if(s===t)return a1
return A.cK(a0,s,!0)
case 8:r=a1.y
q=A.U(a0,r,a2,a3)
if(q===r)return a1
return A.ar(a0,a1.x,q)
case 9:p=a1.x
o=A.K(a0,p,a2,a3)
n=a1.y
m=A.U(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.c7(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.U(a0,k,a2,a3)
if(j===k)return a1
return A.cM(a0,l,j)
case 11:i=a1.x
h=A.K(a0,i,a2,a3)
g=a1.y
f=A.eT(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.cJ(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.U(a0,e,a2,a3)
p=a1.x
o=A.K(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.c8(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.e(A.az("Attempted to substitute unexpected RTI kind "+a))}},
U(a,b,c,d){var t,s,r,q,p=b.length,o=A.bJ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.K(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eU(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bJ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.K(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eT(a,b,c,d){var t,s=b.a,r=A.U(a,s,c,d),q=b.b,p=A.U(a,q,c,d),o=b.c,n=A.eU(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.b0()
t.a=r
t.b=p
t.c=n
return t},
x(a,b){a[v.arrayRti]=b
return a},
db(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.f4(t)
return a.$S()}return null},
f8(a,b){var t
if(A.cB(b))if(a instanceof A.F){t=A.db(a)
if(t!=null)return t}return A.av(a)},
av(a){if(a instanceof A.j)return A.cW(a)
if(Array.isArray(a))return A.bL(a)
return A.c9(J.M(a))},
bL(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cW(a){var t=a.$ti
return t!=null?t:A.c9(a)},
c9(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ey(a,t)},
ey(a,b){var t=a instanceof A.F?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.e8(v.typeUniverse,t.name)
b.$ccache=s
return s},
f4(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bI(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
f3(a){return A.L(A.cW(a))},
cc(a){var t
if(a instanceof A.S)return A.eZ(a.$r,a.K())
t=a instanceof A.F?A.db(a):null
if(t!=null)return t
if(u.R.b(a))return J.dt(a).a
if(Array.isArray(a))return A.bL(a)
return A.av(a)},
L(a){var t=a.r
return t==null?a.r=new A.b5(a):t},
eZ(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
t=A.at(v.typeUniverse,A.cc(r[0]),"@<0>")
for(s=1;s<q;++s)t=A.cO(v.typeUniverse,t,A.cc(r[s]))
return A.at(v.typeUniverse,t,a)},
v(a){return A.L(A.bI(v.typeUniverse,a,!1))},
ex(a){var t=this
t.b=A.eR(t)
return t.b(a)},
eR(a){var t,s,r,q
if(a===u.K)return A.eF
if(A.N(a))return A.eJ
t=a.w
if(t===6)return A.ev
if(t===1)return A.d_
if(t===7)return A.ez
s=A.eQ(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.N)){a.f="$i"+r
if(r==="c")return A.eD
if(a===u.m)return A.eC
return A.eI}}else if(t===10){q=A.eY(a.x,a.y)
return q==null?A.d_:q}return A.et},
eQ(a){if(a.w===8){if(a===u.S)return A.eA
if(a===u.i||a===u.H)return A.eE
if(a===u.N)return A.eH
if(a===u.y)return A.ca}return null},
ew(a){var t=this,s=A.es
if(A.N(t))s=A.en
else if(t===u.K)s=A.ek
else if(A.X(t)){s=A.eu
if(t===u.w)s=A.eg
else if(t===u.v)s=A.em
else if(t===u.u)s=A.ec
else if(t===u.n)s=A.ej
else if(t===u.I)s=A.ee
else if(t===u.z)s=A.eh}else if(t===u.S)s=A.ef
else if(t===u.N)s=A.el
else if(t===u.y)s=A.eb
else if(t===u.H)s=A.ei
else if(t===u.i)s=A.ed
else if(t===u.m)s=A.cR
t.a=s
return t.a(a)},
et(a){var t=this
if(a==null)return A.X(t)
return A.f9(v.typeUniverse,A.f8(a,t),t)},
ev(a){if(a==null)return!0
return this.x.b(a)},
eI(a){var t,s=this
if(a==null)return A.X(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eD(a){var t,s=this
if(a==null)return A.X(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eC(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
cZ(a){if(typeof a=="object"){if(a instanceof A.j)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
es(a){var t=this
if(a==null){if(A.X(t))return a}else if(t.b(a))return a
throw A.l(A.cT(a,t),new Error())},
eu(a){var t=this
if(a==null||t.b(a))return a
throw A.l(A.cT(a,t),new Error())},
cT(a,b){return new A.b6("TypeError: "+A.cF(a,A.p(b,null)))},
cF(a,b){return A.bl(a)+": type '"+A.p(A.cc(a),null)+"' is not a subtype of type '"+b+"'"},
r(a,b){return new A.b6("TypeError: "+A.cF(a,b))},
ez(a){var t=this
return t.x.b(a)||A.c5(v.typeUniverse,t).b(a)},
eF(a){return a!=null},
ek(a){if(a!=null)return a
throw A.l(A.r(a,"Object"),new Error())},
eJ(a){return!0},
en(a){return a},
d_(a){return!1},
ca(a){return!0===a||!1===a},
eb(a){if(!0===a)return!0
if(!1===a)return!1
throw A.l(A.r(a,"bool"),new Error())},
ec(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.l(A.r(a,"bool?"),new Error())},
ed(a){if(typeof a=="number")return a
throw A.l(A.r(a,"double"),new Error())},
ee(a){if(typeof a=="number")return a
if(a==null)return a
throw A.l(A.r(a,"double?"),new Error())},
eA(a){return typeof a=="number"&&Math.floor(a)===a},
ef(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.l(A.r(a,"int"),new Error())},
eg(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.l(A.r(a,"int?"),new Error())},
eE(a){return typeof a=="number"},
ei(a){if(typeof a=="number")return a
throw A.l(A.r(a,"num"),new Error())},
ej(a){if(typeof a=="number")return a
if(a==null)return a
throw A.l(A.r(a,"num?"),new Error())},
eH(a){return typeof a=="string"},
el(a){if(typeof a=="string")return a
throw A.l(A.r(a,"String"),new Error())},
em(a){if(typeof a=="string")return a
if(a==null)return a
throw A.l(A.r(a,"String?"),new Error())},
cR(a){if(A.cZ(a))return a
throw A.l(A.r(a,"JSObject"),new Error())},
eh(a){if(a==null)return a
if(A.cZ(a))return a
throw A.l(A.r(a,"JSObject?"),new Error())},
d8(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
eO(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.d8(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cU(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", ",a=null
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
if(n===8){q=A.eV(a.x)
p=a.y
return p.length>0?q+("<"+A.d8(p,b)+">"):q}if(n===10)return A.eO(a,b)
if(n===11)return A.cU(a,b,null)
if(n===12)return A.cU(a.x,b,a.y)
if(n===13){o=a.x
return b[b.length-1-o]}return"?"},
eV(a){var t=A.dm(a)
if(t!=null)return t
return"minified:"+a},
e9(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
e8(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bI(a,b,!1)
else if(typeof n=="number"){t=n
s=A.as(a,5,"#")
r=A.bJ(t)
for(q=0;q<t;++q)r[q]=s
p=A.ar(a,b,r)
o[b]=p
return p}else return n},
e7(a,b){return A.cP(a.tR,b)},
e6(a,b){return A.cP(a.eT,b)},
bI(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cN(a,null,b,!1)
s.set(b,t)
return t},
at(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cN(a,b,c,!0)
r.set(c,s)
return s},
cO(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.c7(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
cN(a,b,c,d){return A.dZ(A.dT(a,b,c,d))},
D(a,b){b.a=A.ew
b.b=A.ex
return b},
as(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.t(null,null)
t.w=b
t.as=c
s=A.D(a,t)
a.eC.set(c,s)
return s},
cL(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e4(a,b,s,c)
a.eC.set(s,t)
return t},
e4(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.N(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.X(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.t(null,null)
r.w=6
r.x=b
r.as=c
return A.D(a,r)},
cK(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e2(a,b,s,c)
a.eC.set(s,t)
return t},
e2(a,b,c,d){var t,s
if(d){t=b.w
if(A.N(b)||b===u.K)return b
else if(t===1)return A.ar(a,"cx",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.t(null,null)
s.w=7
s.x=b
s.as=c
return A.D(a,s)},
e5(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
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
e1(a){var t,s,r,q,p,o=a.length
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
c7(a,b,c){var t,s,r,q,p,o
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
cM(a,b,c){var t,s,r="+"+(b+"("+A.aq(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.t(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.D(a,t)
a.eC.set(r,s)
return s},
cJ(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aq(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aq(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e1(j)+"}"}s=o+(h+")")
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
c8(a,b,c,d){var t,s=b.as+("<"+A.aq(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e3(a,b,c,s,d)
a.eC.set(s,t)
return t},
e3(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bJ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.K(a,b,s,0)
n=A.U(a,c,s,0)
return A.c8(a,o,n,c!==n)}}m=new A.t(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.D(a,m)},
dT(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dZ(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dV(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cH(a,s,m,l,!1)
else if(r===46)s=A.cH(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.I(a.u,a.e,l.pop()))
break
case 94:l.push(A.e5(a.u,l.pop()))
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
case 62:A.dX(a,l)
break
case 38:A.dW(a,l)
break
case 63:q=a.u
l.push(A.cL(q,A.I(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cK(q,A.I(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dU(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cI(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e_(a.u,a.e,p)
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
return A.I(a.u,a.e,n)},
dV(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cH(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.e9(t,p.x)[q]
if(o==null)A.dl('No "'+q+'" in "'+A.dN(p)+'"')
d.push(A.at(t,p,o))}else d.push(q)
return n},
dX(a,b){var t,s=a.u,r=A.cG(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ar(s,q,r))
else{t=A.I(s,a.e,q)
switch(t.w){case 11:b.push(A.c8(s,t,r,a.n))
break
default:b.push(A.c7(s,t,r))
break}}},
dU(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.cG(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.I(q,a.e,p)
r=new A.b0()
r.a=t
r.b=o
r.c=n
b.push(A.cJ(q,s,r))
return
case-4:b.push(A.cM(q,b.pop(),t))
return
default:throw A.e(A.az("Unexpected state under `()`: "+A.m(p)))}},
dW(a,b){var t=b.pop()
if(0===t){b.push(A.as(a.u,1,"0&"))
return}if(1===t){b.push(A.as(a.u,4,"1&"))
return}throw A.e(A.az("Unexpected extended operation "+A.m(t)))},
cG(a,b){var t=b.splice(a.p)
A.cI(a.u,a.e,t)
a.p=b.pop()
return t},
I(a,b,c){if(typeof c=="string")return A.ar(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dY(a,b,c)}else return c},
cI(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.I(a,b,c[t])},
e_(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.I(a,b,c[t])},
dY(a,b,c){var t,s,r=b.w
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
f9(a,b,c){var t,s=b.d
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
return A.k(a,A.c5(a,b),c,d,e)}if(t===6)return A.k(a,q,c,d,e)&&A.k(a,b.x,c,d,e)
if(r===7){if(A.k(a,b,c,d.x,e))return!0
return A.k(a,b,c,A.c5(a,d),e)}if(r===6)return A.k(a,b,c,q,e)||A.k(a,b,c,d.x,e)
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
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.cX(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.cX(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.eB(a,b,c,d,e)}if(p&&r===10)return A.eG(a,b,c,d,e)
return!1},
cX(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eB(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.at(a,b,s[p])
return A.cQ(a,q,null,c,d.y,e)}return A.cQ(a,b.y,null,c,d.y,e)},
cQ(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.k(a,b[t],d,e[t],f))return!1
return!0},
eG(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
X(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.N(a))if(t!==6)s=t===7&&A.X(a.x)
return s},
N(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cP(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
b0:function b0(){this.c=this.b=this.a=null},
b5:function b5(a){this.a=a},
bE:function bE(){},
b6:function b6(a){this.a=a},
dJ(a){return new A.aj(a.u("aj<0>"))},
c6(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
c3(a){var t,s
if(A.de(a))return"{...}"
t=new A.aZ("")
try{s={}
$.au.push(a)
t.a+="{"
s.a=!0
a.N(0,new A.br(s,t))
t.a+="}"}finally{$.au.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bG:function bG(a){this.a=a
this.c=this.b=null},
b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d:function d(){},
a8:function a8(){},
br:function br(a,b){this.a=a
this.b=b},
ag:function ag(){},
ap:function ap(){},
cy(a,b,c,d){var t,s=J.dH(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
dK(a,b,c){var t,s,r=A.x([],c.u("i<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aw)(a),++s)r.push(a[s])
r.$flags=1
return r},
dO(a,b,c){var t=J.ds(b)
if(!t.J())return a
if(c.length===0){do a+=A.m(t.gH())
while(t.J())}else{a+=A.m(t.gH())
while(t.J())a=a+c+A.m(t.gH())}return a},
bl(a){if(typeof a=="number"||A.ca(a)||a==null)return J.ax(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cA(a)},
az(a){return new A.bd(a)},
cq(a){return new A.Y(!1,null,null,a)},
dM(a,b,c,d,e){return new A.bt(b,c,!0,a,d,"Invalid value")},
cE(a){return new A.b_(a)},
cD(a){return new A.bC(a)},
cC(a){return new A.aY(a)},
aA(a){return new A.bh(a)},
c1(a,b,c){var t,s
if(A.de(a))return b+"..."+c
t=new A.aZ(b)
$.au.push(a)
try{s=t
s.a=A.dO(s.a,a,", ")}finally{$.au.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
c4(a,b,c,d){var t
if(B.c===c){t=B.b.gj(a)
b=J.w(b)
return A.bz(A.y(A.y($.b9(),t),b))}if(B.c===d){t=B.b.gj(a)
b=J.w(b)
c=J.w(c)
return A.bz(A.y(A.y(A.y($.b9(),t),b),c))}t=B.b.gj(a)
b=J.w(b)
c=J.w(c)
d=J.w(d)
d=A.bz(A.y(A.y(A.y(A.y($.b9(),t),b),c),d))
return d},
dL(a){var t,s,r=$.b9()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aw)(a),++s)r=A.y(r,J.w(a[s]))
return A.bz(r)},
bD:function bD(){},
bk:function bk(){},
bd:function bd(a){this.a=a},
bB:function bB(){},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b_:function b_(a){this.a=a},
bC:function bC(a){this.a=a},
aY:function aY(a){this.a=a},
bh:function bh(a){this.a=a},
bs:function bs(){},
ad:function ad(){},
j:function j(){},
aZ:function aZ(a){this.a=a},
fb(){var t,s,r,q,p
$.bc().CW=new A.bX()
t=v.G
t.window.addEventListener("keydown",A.T(A.fc()))
t.window.addEventListener("keyup",A.T(A.fd()))
s=t.document.querySelectorAll("#pad button")
for(r=0;r<s.length;++r){q=s.item(r)
if(q==null)q=A.cR(q)
p=q.getAttribute("data-code")
if(p==null)p=""
q.addEventListener("pointerdown",A.T(new A.bY(p)))
q.addEventListener("pointerup",A.T(new A.bZ(p)))
q.addEventListener("pointerleave",A.T(new A.c_(p)))}t.window.requestAnimationFrame(A.T(A.df()))},
eL(a){if(A.cY(a.code))a.preventDefault()
if(a.repeat)return
$.ba().a8()
A.b7(a.code,!0)},
eM(a){if(A.cY(a.code))a.preventDefault()
A.b7(a.code,!1)},
cY(a){return B.e.af(a,"Arrow")||a==="Space"||a==="Enter"||a==="KeyA"||a==="KeyD"||a==="KeyW"||a==="KeyS"||a==="KeyM"||a==="KeyP"},
b7(a,b){var t,s,r
if(a.length===0)return
if(b){if(!$.bS.aD(0,a))return
if(a==="Enter"||a==="KeyP")$.bb().r=!0
if(a==="KeyM")$.bb().w=!0
t=$.bS}else{$.bS.aL(0,a)
t=$.bS}s=t.q(0,"Space")
r=$.bb()
if(r.f&&!s)r.e=!0
r.f=s
r.a=t.q(0,"ArrowLeft")||t.q(0,"KeyA")
r.b=t.q(0,"ArrowRight")||t.q(0,"KeyD")
r.c=t.q(0,"ArrowUp")||t.q(0,"KeyW")
r.d=t.q(0,"ArrowDown")||t.q(0,"KeyS")},
eK(a){var t,s,r,q=$.d0,p=q===0?16.7:a-q
$.d0=a
if(p>80)p=80
if(p<0)p=0
q=$.bK=$.bK+p
t=0
for(;;){if(!(q>=16.666&&t<5))break
q=$.bc()
s=$.bb()
q.aO(s)
s.w=s.r=s.e=!1
s=$.bK-16.666
$.bK=s;++t
q=s}q=$.cl()
s=$.bc()
A.fi(q,s)
A.eN(s.z)
q=s.c
r=q===B.h||q===B.f
$.ba().aM(s.e,r)
v.G.window.requestAnimationFrame(A.T(A.df()))},
eN(a){var t,s,r,q,p,o=$.cl().a
for(t=0,s=0;t<61440;++t,s+=4){r=B.R[o[t]]
q=$.co()
q.$flags&2&&A.b8(q)
q[s]=r>>>16&255
q[s+1]=r>>>8&255
q[s+2]=r&255
q[s+3]=255}if(a>0)p=(a&1)===0?1:-1
else p=0
q=v.G
q.blitFrame.apply(q,[$.co(),256,240,p,0])},
bX:function bX(){},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
bf:function bf(){var _=this
_.a=null
_.c=_.b=0
_.d=!1},
cr(a,b,c,d,e){return new A.be(d,a,e,c,b)},
n(a,b,c){return new A.bv(128+a*(104+-48*b),208+-144*b-c*100)},
dk(a,b){var t=b<=2?0.22:B.a.B(b/48,0.22,1),s=a.b?1:0,r=a.a?1:0,q=a.c?1:0,p=a.d?1:0
return new A.bx(t,s-r,q-p)},
dj(a,b,c,d,e){var t,s,r=d*0.08,q=0.84+r+b*0.14
if(e)q=0.74+r+b*0.05
t=e?0.68:0.58
if(q<t)q=t
if(q>0.96)q=0.96
s=B.a.B(a*(0.4+d*0.4),-0.88,0.88)
return new A.u(s,c>0?q:1-q)},
fh(a1,a2,a3,a4,a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6==="serve",c=A.dj(a1+a4,a2,a3,a7,d),b=c.b,a=d?0.008:0.008+a7*0.006,a0=!d
if(a0&&a2<0)a*=0.75
if(a0&&a2>0)a*=1.08
for(a0=a3>0,t=c.a-a8,s=null,r=99,q=0;q<6;++q){for(p=a3*a,o=0.003,n=0.032,m=null,l=0;l<10;++l){k=(o+n)/2
j=A.f0(a8,a9,a5,0,p,k)
i=j.a
if(i.y||!i.x){o=k
continue}h=i.b
g=a0?b-h:h-b
f=j.b
if(f<1)f=1
e=Math.abs(g)
if(e<r){s=new A.aJ(t/f,p,k)
r=e}if(m==null||e<Math.abs(m))m=g
if(e<0.03){s.toString
return s}if(g>0)o=k
else n=k}if(s!=null&&r<0.04)return s
a=m==null||m>0?a*1.16:a*0.82
if(a<0.003)a=0.003
if(a>0.028)a=0.028}return s==null?new A.aJ(0,a3*a,0.014):s},
f0(a,b,c,d,e,f){var t,s=new A.ah()
s.a=a
s.b=b
s.c=c
s.d=d
s.e=e
s.f=f
s.r=!0
for(t=0;t<500;){++t
if(A.ci(s))break}return new A.bm(s,t)},
ff(a){var t=Math.abs(a)
if(t>1)t=1
return 0.22+0.06999999999999998*t*t},
ci(a){var t,s,r,q,p,o,n,m,l,k,j
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
if(j<A.ff(q)){a.y=!0
a.b=n?0.48:0.52
q=n?-1:1
a.e=q*(Math.abs(p)*0.15+0.002)
a.f=0.004
if(r<j){a.c=j
r=j}}else a.x=!0}if(r<=0){a.f=a.e=a.d=a.c=0
return!0}return!1},
eS(a){var t,s
if(a<=0)return 0
for(t=a,s=0;s<8;++s)t=0.5*(t+a/t)
return t},
G:function G(a,b){this.a=a
this.b=b},
aD:function aD(){var _=this
_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=!1},
ah:function ah(){var _=this
_.a=0
_.b=0.2
_.f=_.e=_.d=_.c=0
_.y=_.x=_.w=_.r=!1
_.z=-1},
be:function be(a,b,c,d,e){var _=this
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
aW:function aW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=12
_.w=g},
bv:function bv(a,b){this.a=a
this.b=b},
bi:function bi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=0
_.c=b
_.e=_.d=!1
_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=0
_.at=null
_.ax=-1
_.ay=0
_.ch=""
_.CW=null
_.cx=c
_.cy=d
_.db=e
_.dx=f
_.dy=g},
bj:function bj(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
W(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l
for(t=b.split(""),s=t.length,r=4*f,q=c,p=0;p<t.length;t.length===s||(0,A.aw)(t),++p){o=B.aq.E(0,t[p])
if(o==null)o=B.o
for(n=0;n<5;++n)for(m=d+n*f,l=0;l<3;++l)if(o[n][l]==="1")a.k(q+l*f,m,f,f,e)
q+=r}},
dc(a,b,c,d,e,f){var t,s
for(t=0;t<4;++t){s=B.G[t]
A.W(a,b,c+s.a,d+s.b,1,f)}A.W(a,b,c,d,e,f)},
bn:function bn(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
dm(a){return v.mangledGlobalNames[a]},
fk(a){throw A.l(new A.bp("Field '"+a+"' has been assigned during initialization."),new Error())},
T(a){var t
if(typeof a=="function")throw A.e(A.cq("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.eo,a)
t[$.cj()]=a
return t},
eo(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
E(a){var t,s,r,q,p,o,n,m,l=B.d.gaJ(a).length
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.length
if(q!==l)throw A.e(A.cC("row length "+q+" != "+l+" ["+r+"]"))}p=A.cy(l*t,0,!1,u.S)
for(o=0;o<t;++o){r=a[o]
for(q=o*l,n=0;n<l;++n){m=B.ap.E(0,r[n])
if(m==null)throw A.e(A.cC('bad pixel "'+r[n]+'"'))
p[q+n]=m}}return new A.aX(l,t,p)},
fj(a,b,c){var t=Math.abs(c)
if(t>Math.abs(a)&&t>Math.abs(b))return c>=0?3:1
return a>=0?0:2},
fi(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="PRESS START"
if(b.c===B.h){t=b.b
A.cV(a,t)
A.d2(a)
s=$.ck()
a.aF(s,A.bN(0,0.18,s,2),A.bO(0.18,s,2),2,5,6)
r=$.O()
A.bM(a,0,0.18,s,16,8,!1,r)
s=$.cm()
a.G(s,A.bN(0,0.82,s,2),A.bO(0.82,s,2),!0,2,7,8)
A.bM(a,0,0.82,s,2,8,!0,r)
q=B.b.n(B.b.p(t,4),20)
p=A.n(0.62,0.38,0.16+(q<10?q:20-q)/90)
a.a9($.cp()[B.b.p(t,6)&3],B.a.i(p.a)-8,B.a.i(p.b)-8,2)
a.k(28,16,200,44,11)
a.k(28,16,200,2,10)
a.k(28,58,200,2,10)
A.J(a,"BADMINTON",22,10,3)
A.J(a,"FAMICOM SINGLES",42,2,1)
A.J(a,"FIRST TO 11",50,24,1)
if(B.b.n(B.b.p(t,30),2)===0)A.J(a,e,96,10,2)
a.k(0,220,256,20,11)
A.J(a,"HOLD SPACE TO AIM",222,2,1)
A.J(a,"ARROWS SET DIRECTION",230,10,1)
return}A.cV(a,b.b)
t=b.cx
A.cb(a,t.c,t.d,7)
s=b.cy
A.cb(a,s.c,s.d,5)
r=b.db
if(r.r)A.cb(a,r.a,r.b,2+B.a.i(r.c*4))
A.cS(a,b,s)
A.d6(a,b,s)
A.d2(a)
A.ea(a,b)
A.eP(a,b)
A.cS(a,b,t)
A.d6(a,b,t)
for(t=b.dx,s=t.length,o=0;o<t.length;t.length===s||(0,A.aw)(t),++o){n=t[o]
r=n.a
m=n.b
l=n.c
k=A.n(r,m,l<0?0:l)
a.l(B.a.i(k.a),B.a.i(k.b),n.w)}a.k(0,0,256,16,11)
a.k(0,15,256,1,10)
t=b.ax
j=t===0&&(b.ay&2)===0?10:2
i=t===1&&(b.ay&2)===0?10:2
A.W(a,"1P",8,5,10,1)
A.W(a,B.e.ac(B.b.h(b.f),2,"0"),28,4,j,2)
h=B.e.ac(B.b.h(b.r),2,"0")
g=248-h.length*4*2
A.W(a,h,g,4,i,2)
A.W(a,"COM",g-28,5,12,1)
if(b.w===0)a.k(58,6,3,3,2)
else a.k(g-36,6,3,3,2)
f=b.gag()
if(f.length!==0&&!b.e)A.J(a,f,5,24,1)
if(b.e)A.W(a,"MUTE",112,5,5,1)
A.ep(a,b)
if(b.d)A.d3(a,"PAUSE")
else{t=b.c
if(t===B.q||t===B.j||t===B.f){A.d3(a,b.ch)
if(b.c===B.f&&B.b.n(B.b.p(b.b,28),2)===0)A.J(a,e,156,10,1)}}},
cV(a,b){var t,s,r,q,p
a.aG(0,13)
a.k(0,16,256,28,12)
a.k(0,36,256,26,20)
A.er(a,b)
for(t=64;t<=208;++t){s=104+-48*((t-208)/-144)
r=B.a.i(128-s)
q=B.a.i(128+s)
for(p=r+1;p<q;++p)a.l(p,t,(p+t&3)===0?15:14)
a.l(r,t,2)
a.l(q,t,2)}a.k(0,209,256,31,17)
A.bP(a,0)
A.bP(a,1)
A.bP(a,0.32)
A.bP(a,0.68)
A.d1(a,0,0,0.32)
A.d1(a,0,0.68,1)},
bP(a,b){var t=A.n(-1,b,0),s=A.n(1,b,0)
a.ab(B.a.i(t.a),B.a.i(t.b),B.a.i(s.a),B.a.i(s.b),2)},
d1(a,b,c,d){var t=A.n(b,c,0),s=A.n(b,d,0)
a.ab(B.a.i(t.a),B.a.i(t.b),B.a.i(s.a),B.a.i(s.b),2)},
er(a,b){var t,s,r,q,p,o,n
for(t=0;t<15;++t){s=4+t*17
r=40+(B.b.p(b,16)+t&1)
q=B.D[B.b.n(t,6)]
p=s+2
a.k(p,r,4,3,4)
o=s+1
a.k(o,r+3,6,4,3)
n=r+4
a.l(p,n,1)
a.l(s+4,n,1)
a.k(o,r+7,6,4,q)}},
d2(a){var t,s,r,q,p,o,n,m,l
for(t=48;t<=208;++t){s=B.a.B((t-128)/80,-1,1)
r=Math.abs(s)
if(r>1)r=1
q=A.n(s,0.5,0.22+0.06999999999999998*r*r)
p=A.n(s,0.5,0.05)
o=B.a.i(q.b)
n=B.a.i(p.b)
for(m=o+1,l=o;l<=n;++l)if(l<=m||(t+l&1)===0)a.l(t,l,2)
else a.l(t,l,1)}A.d4(a,-1.06)
A.d4(a,1.06)},
d4(a,b){var t,s,r,q,p=A.n(b,0.5,0),o=A.n(b,0.5,0.32499999999999996),n=B.a.i(p.a),m=B.a.i(o.b),l=B.a.i(p.b)
for(t=n-2,s=n-1,r=n+1,q=m;q<=l;++q){a.l(t,q,1)
a.l(s,q,2)
a.l(n,q,2)
a.l(r,q,1)}},
cb(a,b,c,d){var t,s,r,q=A.n(b,c,0),p=B.b.B(d,1,8)
for(t=-p,s=q.a,r=q.b;t<=p;++t)a.l(B.a.i(s)+t,B.a.i(r),18)},
cS(a,b,c){var t=A.d5(b,c),s=!c.w&&c.r===0&&(B.b.p(b.b,20)&1)===1?1:0,r=A.bN(c.c,c.d,t,2),q=A.bO(c.d,t,2),p=c.a,o=p===0,n=o?5:7
o=o?6:8
a.G(t,r,q+s,p===1,2,n,o)},
bN(a,b,c,d){return B.a.i(A.n(a,b,0).a)-B.b.p(c.a*d,2)},
bO(a,b,c){return B.a.i(A.n(0,a,0).b)-b.b*c},
d5(a,b){var t=b.a===0
if(b.w&&b.r===0&&(B.b.p(a.b,6)&1)===0&&t)return $.dr()
return t?$.ck():$.cm()},
d6(a,b,c){var t,s,r,q=A.d7(c,b.b,null)
if(c.a===0&&c.r===0&&b.Q>0){t=B.a.i(b.Q*8/48)
s=q.a
q=new A.q([s[0]+t,s[1]+2,s[2],s[3]])}r=A.d5(b,c)
s=c.r
if(s>0){s=A.d7(c,b.b,s+4).a
A.bM(a,c.c,c.d,r,s[0],s[1],s[2],s[3])}s=q.a
A.bM(a,c.c,c.d,r,s[0],s[1],s[2],s[3])},
d7(a,b,c){var t=c==null?a.r:c,s=B.b.n(B.b.p(b,6),3)-1
if(a.a===0){if(t>=16)return new A.q([18,2,!1,$.O()])
if(t>=8)return new A.q([2,-16,!1,$.cn()])
if(t>0)return new A.q([-18,4,!0,$.O()])
return new A.q([16,8+s,!1,$.O()])}if(t>=16)return new A.q([0,4,!0,$.O()])
if(t>=8)return new A.q([10,14,!1,$.cn()])
if(t>0)return new A.q([18,8,!1,$.O()])
return new A.q([2,8+s,!0,$.O()])},
bM(a,b,c,d,e,f,g,h){a.aE(h,A.bN(b,c,d,2)+e,A.bO(c,d,2)+f,g,2)},
eP(a,b){var t,s,r,q,p,o,n,m,l,k,j=b.db
for(t=b.dy,s=t.length,r=0;r<t.length;t.length===s||(0,A.aw)(t),++r){q=t[r]
p=A.n(q.a,q.b,q.c)
a.l(B.a.i(p.a),B.a.i(p.b),23)}if(!j.r)return
p=A.n(j.a,j.b,j.c)
t=j.d
s=j.e
o=j.f
n=Math.abs(t)+Math.abs(s)+Math.abs(o)>0.004
m=n?B.b.p(b.b,2)&3:A.fj(t,s,o)
l=$.cp()[m]
k=n?B.b.n(B.b.p(b.b,2),3)-1:0
a.a9(l,B.a.i(p.a)-8+k,B.a.i(p.b)-8,2)},
ep(a,b){var t,s
if(b.Q<=0||b.c!==B.i||b.d)return
a.k(88,226,80,5,1)
t=B.a.i(b.Q*78/48)
s=b.cx.x>0.85?5:10
if(t>0)a.k(89,227,t,3,s)},
ea(a,b){var t,s,r,q,p,o,n
if(b.Q<=0||b.c!==B.i||b.d)return
t=b.db
s=t.w&&t.z<0&&b.w===0
t=b.cx
r=t.x
q=A.dj(t.y,t.z,t.b,r,s)
p=A.n(q.a,q.b,0)
o=B.a.i(p.a)
n=B.a.i(p.b)
a.l(o,n,10)
a.l(o-2,n,10)
a.l(o+2,n,10)
a.l(o,n-2,10)
a.l(o,n+2,10)},
d3(a,b){var t=b.length*4*2+20,s=B.b.p(256-t,2)
a.k(s,108,t,28,11)
a.k(s,108,t,2,10)
a.k(s,134,t,2,10)
a.k(s,108,2,28,10)
a.k(s+t-2,108,2,28,10)
A.dc(a,b,s+10,116,2,2)},
J(a,b,c,d,e){A.dc(a,b,B.b.p(256-b.length*4*e,2),c,d,e)}},B={}
var w=[A,J,B]
var $={}
A.c2.prototype={}
J.aF.prototype={
t(a,b){return a===b},
gj(a){return A.ae(a)},
h(a){return"Instance of '"+A.aV(a)+"'"},
gm(a){return A.L(A.c9(this))}}
J.aH.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gm(a){return A.L(u.y)},
$ib:1}
J.a1.prototype={
t(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ib:1}
J.a4.prototype={$ih:1}
J.C.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aU.prototype={}
J.ai.prototype={}
J.B.prototype={
h(a){var t=a[$.dp()]
if(t==null)t=a[$.cj()]
if(t==null)return this.ah(a)
return"JavaScript function for "+J.ax(t)}}
J.a3.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.a5.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.i.prototype={
av(a,b,c){var t,s,r,q=[],p=a.length
for(t=0;t<p;++t){s=a[t]
if(!b.$1(s))q.push(s)
if(a.length!==p)throw A.e(A.aA(a))}r=q.length
if(r===p)return
this.sI(a,r)
for(t=0;t<q.length;++t)a[t]=q[t]},
R(a){a.$flags&1&&A.b8(a,"clear","clear")
a.length=0},
gaJ(a){if(a.length>0)return a[0]
throw A.e(A.dG())},
h(a){return A.c1(a,"[","]")},
gW(a){return new J.ay(a,a.length,A.bL(a).u("ay<1>"))},
gj(a){return A.ae(a)},
sI(a,b){a.$flags&1&&A.b8(a,"set length","change the length of")
if(b>a.length)A.bL(a).c.a(null)
a.length=b},
$ic:1}
J.aG.prototype={
aN(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.aV(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bo.prototype={}
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
throw A.e(A.cE(""+a+".round()"))},
B(a,b,c){if(this.S(b,c)>0)throw A.e(A.eW(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
n(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
p(a,b){return(a|0)===a?a/b|0:this.aB(a,b)},
aB(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.e(A.cE("Result of truncating division is "+A.m(t)+": "+A.m(a)+" ~/ "+b))},
gm(a){return A.L(u.H)},
$if:1}
J.a0.prototype={
gm(a){return A.L(u.S)},
$ib:1,
$ia:1}
J.aI.prototype={
gm(a){return A.L(u.i)},
$ib:1}
J.P.prototype={
af(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
ad(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.z)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ac(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ad(c,t)+a},
h(a){return a},
gj(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm(a){return A.L(u.N)},
$ib:1,
$iH:1}
A.bp.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bw.prototype={}
A.aK.prototype={
gH(){var t=this.d
return t==null?this.$ti.c.a(t):t},
J(){var t,s=this,r=s.a,q=J.f1(r),p=q.gI(r)
if(s.b!==p)throw A.e(A.aA(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.aI(r,t);++s.c
return!0}}
A.a_.prototype={}
A.u.prototype={$r:"+(1,2)",$s:1}
A.ao.prototype={$r:"+(1,2,3)",$s:2}
A.q.prototype={$r:"+(1,2,3,4)",$s:3}
A.aB.prototype={
h(a){return A.c3(this)}}
A.aC.prototype={
aH(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
E(a,b){if(!this.aH(b))return null
return this.b[this.a[b]]},
N(a,b){var t,s,r,q=this,p=q.$keys
if(p==null){p=Object.keys(q.a)
q.$keys=p}p=p
t=q.b
for(s=p.length,r=0;r<s;++r)b.$2(p[r],t[r])}}
A.aE.prototype={
a1(){var t=this,s=t.$map
if(s==null){s=new A.a6(t.$ti.u("a6<1,2>"))
A.f_(t.a,s)
t.$map=s}return s},
E(a,b){return this.a1().E(0,b)},
N(a,b){this.a1().N(0,b)}}
A.af.prototype={}
A.F.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dn(s==null?"unknown":s)+"'"},
gaP(){return this},
$C:"$1",
$R:1,
$D:null}
A.bg.prototype={$C:"$2",$R:2}
A.bA.prototype={}
A.by.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dn(t)+"'"}}
A.Z.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.Z))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.ch(this.a)^A.ae(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aV(this.a)+"'")}}
A.bu.prototype={
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
return r}else return this.aK(b)},
aK(a){var t,s,r=this.d
if(r==null)return null
t=r[this.T(a)]
s=this.U(t,a)
if(s<0)return null
return t[s].b},
N(a,b){var t=this,s=t.e,r=t.r
while(s!=null){b.$2(s.a,s.b)
if(r!==t.r)throw A.e(A.aA(t))
s=s.c}},
L(a,b){var t=this,s=new A.bq(a,b)
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
h(a){return A.c3(this)}}
A.bq.prototype={}
A.a6.prototype={
T(a){return A.eX(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
A.bT.prototype={
$1(a){return this.a(a)}}
A.bU.prototype={
$2(a,b){return this.a(a,b)}}
A.bV.prototype={
$1(a){return this.a(a)}}
A.S.prototype={
h(a){return this.a5(!1)},
a5(a){var t,s,r,q,p,o=this.an(),n=this.K(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
p=n[r]
m=a?m+A.cA(p):m+A.m(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
an(){var t,s=this.$s
while($.bH.length<=s)$.bH.push(null)
t=$.bH[s]
if(t==null){t=this.aj()
$.bH[s]=t}return t},
aj(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.x(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
l[r]=s[t]}}l=A.dK(l,!1,u.K)
l.$flags=3
return l}}
A.b2.prototype={
K(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.b2&&this.$s===b.$s&&J.A(this.a,b.a)&&J.A(this.b,b.b)},
gj(a){return A.c4(this.$s,this.a,this.b,B.c)}}
A.b3.prototype={
K(){return[this.a,this.b,this.c]},
t(a,b){var t=this
if(b==null)return!1
return b instanceof A.b3&&t.$s===b.$s&&J.A(t.a,b.a)&&J.A(t.b,b.b)&&J.A(t.c,b.c)},
gj(a){var t=this
return A.c4(t.$s,t.a,t.b,t.c)}}
A.b4.prototype={
K(){return this.a},
t(a,b){if(b==null)return!1
return b instanceof A.b4&&this.$s===b.$s&&A.e0(this.a,b.a)},
gj(a){return A.c4(this.$s,A.dL(this.a),B.c,B.c)}}
A.Q.prototype={
gm(a){return B.aw},
$ib:1}
A.ab.prototype={}
A.aL.prototype={
gm(a){return B.ax},
$ib:1}
A.R.prototype={
gI(a){return a.length},
$io:1}
A.a9.prototype={$ic:1}
A.aa.prototype={$ic:1}
A.aM.prototype={
gm(a){return B.ay},
$ib:1}
A.aN.prototype={
gm(a){return B.az},
$ib:1}
A.aO.prototype={
gm(a){return B.aA},
$ib:1}
A.aP.prototype={
gm(a){return B.aB},
$ib:1}
A.aQ.prototype={
gm(a){return B.aC},
$ib:1}
A.aR.prototype={
gm(a){return B.aE},
$ib:1}
A.aS.prototype={
gm(a){return B.aF},
$ib:1}
A.ac.prototype={
gm(a){return B.aG},
gI(a){return a.length},
$ib:1}
A.aT.prototype={
gm(a){return B.aH},
gI(a){return a.length},
$ib:1}
A.ak.prototype={}
A.al.prototype={}
A.am.prototype={}
A.an.prototype={}
A.t.prototype={
u(a){return A.at(v.typeUniverse,this,a)},
aQ(a){return A.cO(v.typeUniverse,this,a)}}
A.b0.prototype={}
A.b5.prototype={
h(a){return A.p(this.a,null)}}
A.bE.prototype={
h(a){return this.a}}
A.b6.prototype={}
A.aj.prototype={
gW(a){var t=this,s=new A.b1(t,t.r,t.$ti.u("b1<1>"))
s.c=t.e
return s},
q(a,b){var t,s
if(b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.ak(b)
return s}},
ak(a){var t=this.d
if(t==null)return!1
return this.P(t[B.e.gj(a)&1073741823],a)>=0},
aD(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.Y(t==null?r.b=A.c6():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.Y(s==null?r.c=A.c6():s,b)}else return r.ai(b)},
ai(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.c6()
t=J.w(a)&1073741823
s=q[t]
if(s==null)q[t]=[r.O(a)]
else{if(r.P(s,a)>=0)return!1
s.push(r.O(a))}return!0},
aL(a,b){var t
if(b!=="__proto__")return this.au(this.b,b)
else{t=this.ar(b)
return t}},
ar(a){var t,s,r,q,p=this.d
if(p==null)return!1
t=B.e.gj(a)&1073741823
s=p[t]
r=this.P(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete p[t]
this.a7(q)
return!0},
Y(a,b){if(a[b]!=null)return!1
a[b]=this.O(b)
return!0},
au(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.a7(t)
delete a[b]
return!0},
a2(){this.r=this.r+1&1073741823},
O(a){var t,s=this,r=new A.bG(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.a2()
return r},
a7(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.a2()},
P(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.A(a[s].a,b))return s
return-1}}
A.bG.prototype={}
A.b1.prototype={
gH(){var t=this.d
return t==null?this.$ti.c.a(t):t},
J(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.e(A.aA(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.d.prototype={
gW(a){return new A.aK(a,a.length,A.av(a).u("aK<d.E>"))},
aI(a,b){return a[b]},
h(a){return A.c1(a,"[","]")}}
A.a8.prototype={
h(a){return A.c3(this)}}
A.br.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.m(a)
s.a=(s.a+=t)+": "
t=A.m(b)
s.a+=t}}
A.ag.prototype={
h(a){return A.c1(this,"{","}")}}
A.ap.prototype={}
A.bD.prototype={
h(a){return this.am()}}
A.bk.prototype={}
A.bd.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bl(t)
return"Assertion failed"}}
A.bB.prototype={}
A.Y.prototype={
ga0(){return"Invalid argument"+(!this.a?"(s)":"")},
ga_(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.m(q),o=t.ga0()+r+p
if(!t.a)return o
return o+t.ga_()+": "+A.bl(t.gaa())},
gaa(){return this.b}}
A.bt.prototype={
gaa(){return this.b},
ga0(){return"RangeError"},
ga_(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.b_.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bC.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aY.prototype={
h(a){return"Bad state: "+this.a}}
A.bh.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bl(t)+"."}}
A.bs.prototype={
h(a){return"Out of Memory"}}
A.ad.prototype={
gj(a){return A.j.prototype.gj.call(this,0)},
h(a){return"null"}}
A.j.prototype={$ij:1,
t(a,b){return this===b},
gj(a){return A.ae(this)},
h(a){return"Instance of '"+A.aV(this)+"'"},
gm(a){return A.f3(this)},
toString(){return this.h(this)}}
A.aZ.prototype={
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bX.prototype={
$1(a){return $.ba().ae(a,$.bc().e)}}
A.bY.prototype={
$1(a){a.preventDefault()
$.ba().a8()
A.b7(this.a,!0)}}
A.bZ.prototype={
$1(a){A.b7(this.a,!1)}}
A.c_.prototype={
$1(a){A.b7(this.a,!1)}}
A.bf.prototype={
a8(){var t=this.a
if(t==null)t=this.a=new v.G.AudioContext()
t.resume()},
ae(a,b){var t,s=this
if(b)return
t=s.a
if(t==null)return
switch(a){case"swing":s.v(t,180,0.05,0.04,0.6)
break
case"hit":s.v(t,740,0.07,0.08,0.45)
break
case"drop":s.v(t,420,0.08,0.07,0.7)
break
case"smash":s.v(t,160,0.12,0.1,0.35)
s.v(t,880,0.06,0.06,0.4)
break
case"jump":s.v(t,300,0.05,0.03,1.8)
break
case"point":s.F(t,523,0.1,0.08)
s.A(t,659,0.1,0.08,0.09)
s.A(t,784,0.16,0.08,0.18)
break
case"fault":case"let":s.v(t,196,0.14,0.07,0.5)
break
case"win":s.F(t,523,0.12,0.09)
s.A(t,659,0.12,0.09,0.12)
s.A(t,784,0.12,0.09,0.24)
s.A(t,1046,0.28,0.09,0.36)
break
case"lose":s.F(t,392,0.16,0.08)
s.A(t,330,0.16,0.08,0.16)
s.A(t,262,0.28,0.08,0.32)
break
case"start":s.F(t,880,0.08,0.06)
break
default:break}},
aM(a,b){var t,s,r,q=this,p=q.a
if(p==null)return
t=b&&!a
q.d=t
if(!t)return
s=p.currentTime
if(s+0.02<q.b)return
r=B.S[B.b.n(q.c,16)]
q.F(p,r,0.16,0.035)
q.aC(p,r/2,0.16,0.02,"triangle");++q.c
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
aC(a,b,c,d,e){return this.M(a,b,c,d,1,e,0)},
v(a,b,c,d,e){return this.M(a,b,c,d,e,"square",0)},
A(a,b,c,d,e){return this.M(a,b,c,d,1,"square",e)}}
A.G.prototype={
am(){return"Phase."+this.b}}
A.aD.prototype={}
A.ah.prototype={}
A.be.prototype={}
A.aW.prototype={}
A.bv.prototype={}
A.bi.prototype={
D(){return this.a=1664525*this.a+1013904223&2147483647},
X(){var t,s=this.f
if(s>=15)return 1
t=this.r
if(t>=15)return 2
if(s>=11&&s-t>=2)return 1
if(t>=11&&t-s>=2)return 2
return 0},
gag(){var t,s=this.f
if(s>=10&&this.r>=10){t=this.r
if(s===t)return"DEUCE"
if(s>t)return"ADV 1P"
return"ADV COM"}return""},
aO(a){var t,s,r,q=this;++q.b
if(a.w)q.e=!q.e
t=q.z
if(t>0)q.z=t-1
t=q.ay
if(t>0)q.ay=t-1
switch(q.c.a){case 0:if(a.r||a.e)q.Z()
break
case 4:if(a.r||a.e)q.Z()
break
case 1:if(--q.x<=0){s=q.w===0?q.cx:q.cy
q.c=B.i
q.ch=""
t=q.db
t.a=s.c
r=s.b
t.b=s.d+r*0.03
t.c=0.06
t.d=0
t.e=r*0.0006
t.f=0.013
t.w=t.r=!0
t.y=t.x=!1
t.z=-1
r=q.dy
B.d.R(r)
r.push(new A.ao(t.a,t.b,t.c))}break
case 3:if(--q.x<=0)if(q.X()!==0){q.c=B.f
q.ch=q.X()===1?"YOU WIN":"YOU LOSE"
t=q.CW
if(t!=null)t.$1(q.X()===1?"win":"lose")}else q.a4()
break
case 2:if(a.r)q.d=!q.d
if(!q.d)q.ap(a)
break}q.aA()},
Z(){var t,s=this
s.w=s.r=s.f=0
s.d=!1
t=s.CW
if(t!=null)t.$1("start")
s.a4()},
a4(){var t,s,r,q=this
q.c=B.q
q.ch=q.w===0?"YOUR SERVE":"COM SERVE"
q.x=46
q.db.r=!1
B.d.R(q.dy)
q.as=0
q.at=null
q.Q=0
t=q.cx
s=q.w
r=s===0
t.c=r?-0.22:0.18
t.d=r?0.14:0.24
t.r=0
t=q.cy
s=s===1
t.c=s?0.22:-0.18
t.d=s?0.86:0.76
q.y=t.r=0},
ap(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y
if(g>0){h.y=g-1
return}if(a.e&&h.cx.r===0){t=A.dk(a,h.Q)
g=h.cx
g.x=t.a
g.y=t.b
g.z=t.c
h.Q=0}else if(a.f){g=h.Q
s=A.dk(a,g<48?h.Q=g+1:g)
g=h.cx
g.x=s.a
g.y=s.b
g.z=s.c}r=h.al()
q=a.f||a.e||h.cx.r>0
g=h.cx
h.a3(g,a,q)
p=h.cy
h.ao(p,r)
o=h.db
if(!o.r)return
n=o.a
m=o.b
l=o.c
k=o.z
j=A.ci(o)
i=h.dy
i.push(new A.ao(o.a,o.b,o.c))
if(i.length>8){i.$flags&1&&A.b8(i,"removeAt",1)
i.splice(0,1)[0]}if(!h.a6(g,a,n,m,l))h.a6(p,r,n,m,l)
if(j&&o.z===k)h.aw()},
a3(a,b,c){var t,s,r,q,p,o
if(c){a.w=!1
return}if(a.r>0){t=0.030799999999999998
s=0.013999999999999999}else{t=0.044
s=0.02}r=b.a
if(r)a.c-=t
q=b.b
if(q)a.c+=t
p=b.c
if(p)a.d+=s
o=b.d
if(o)a.d-=s
a.w=r||q||p||o
a.c=B.a.B(a.c,-0.88,0.88)
a.d=B.a.B(a.d,a.e,a.f)},
ao(a,b){return this.a3(a,b,!1)},
al(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cy,g=new A.aD(),f=i.db
if(!f.r)return g
t=f.w&&f.z<0&&i.w===1
if(f.z!==1){s=f.e
if(!(s>0.0015)){s=Math.abs(s)<=0.0015&&f.b>0.5
r=s}else r=!0}else r=!1
if(t){i.at=null
q=f.a
p=f.b-h.b*0.02}else if(r&&i.b<i.as){q=h.c
p=h.d}else if(r){o=i.aq()
q=i.at
if(q==null){q=o.a+(B.b.n(i.D(),21)-10)/40
i.at=q}p=o.b}else{i.at=null
q=0
p=0.8}p=B.a.B(p,h.e,h.f)
s=h.c
if(s>q+0.03)g.a=!0
if(s<q-0.03)g.b=!0
n=h.d
if(n<p-0.02)g.c=!0
if(n>p+0.02)g.d=!0
m=f.a
l=f.f
k=Math.abs(l)>0.02?0.16:0.2
j=!1
if(Math.abs(m-s)<k)if(Math.abs(f.b-n)<0.09){s=f.c
s=s<0.34&&s>0.02
j=s}if(h.r===0&&j&&i.b>=i.as&&f.z!==1)if(!t||l<0.004){h.x=0.4+B.b.n(i.D(),11)/16
h.y=(B.b.n(i.D(),5)-2)/2
if(B.b.n(i.D(),4)===0)f=-1
else f=B.b.n(i.D(),3)===0?1:0
h.z=f
g.e=!0}return g},
aq(){var t,s,r,q=this.db,p=new A.ah()
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
if(A.ci(p))return new A.u(p.a,p.b-0.04)
t=p.c
if(t<=q&&r<0.78&&p.b>=0.78&&t<0.28)return new A.u(p.a,0.78);++s
q=t}return new A.u(p.a,0.8)},
a6(b0,b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
if(b1.e&&b0.r===0){b0.r=24
t=a9.CW
if(t!=null)t.$1("swing")}t=b0.r
if(t<=0||!a9.db.r){if(t>0)b0.r=t-1
return!1}s=t<=16&&t>=8
b0.r=t-1
if(!s||a9.db.z===b0.a)return!1
t=a9.db
r=t.w
q=r&&t.z<0
p=q?0.3:0.2
o=q?0.12:0.085
n=q?0.28:0.32
m=t.c
if(m>n)return!1
l=b0.c
k=b0.d
j=t.a
i=t.b
h=j-b2
g=i-b3
f=h*h+g*g
if(f>1e-7){e=((l-b2)*h+(k-b3)*g)/f
if(e<0)e=0
if(e>1)e=1}else e=0
d=b2+h*e-l
c=b3+g*e-k
b=A.eS(d*d+c*c)
a=Math.abs(m-b4)<n||m<n
if(b<=(p+o)/2&&a&&Math.abs(i-k)<o+0.02){a0=r&&t.z<0
r=b0.b
if(!(r>0&&i>0.3))a1=r<0&&i<0.7
else a1=!0
if(a0)a2="serve"
else if(a1&&m>0.26)a2="smash"
else if(a1)a2="drop"
else a2=m>0.22?"clear":"drive"
m=b0.a
l=m===1
a3=l?(B.b.n(a9.D(),17)-8)/28:0
k=t.a
j=t.b
i=t.c
a4=b0.x
a5=b0.y
a6=b0.z
a7=A.fh(a5,a6,r,l?a3:0,i,a2,a4,k,j)
t.d=a7.a
t.e=a7.b
t.f=a7.c
t.z=m
t.y=t.x=!1
t.r=!0
if(!a0)t.w=!1
if(m===0){a9.at=null
r=a9.b
a9.as=r+(a2==="smash"||a2==="drop"?18:10)}r=b0.x
a9.y=r>0.75?4:2
l=r>0.7
if(l)a9.z=4+B.a.i(r*6)
a9.ax=m
a9.ay=8
a9.az(t.a,t.b,t.c,l)
t=b0.x
if(t>0.75)a8="smash"
else a8=b0.z<0&&t<0.45?"drop":"hit"
t=a9.CW
if(t!=null)t.$1(a8)
return!0}return!1},
az(a,b,c,d){var t,s,r,q,p,o,n=this,m=d?7:5
for(t=n.dx,s=0;s<m;++s){r=n.a=1664525*n.a+1013904223&2147483647
q=B.b.n(r,9)
r=n.a=1664525*r+1013904223&2147483647
p=B.b.n(r,9)
r=1664525*r+1013904223&2147483647
n.a=r
r=B.b.n(r,5)
o=d?10:2
t.push(new A.aW(a,b,c,(q-4)/80,(p-4)/120,0.004+r/800,o))}},
aw(){var t,s,r,q,p,o,n,m=this,l="FAULT",k=m.db
k.r=!1
B.d.R(m.dy)
t=k.z
if(t<0){m.C(1-m.w,l)
return}s=k.b
r=s>0.5&&s<=1&&Math.abs(k.a)<=1
q=s<0.5&&s>=0&&Math.abs(k.a)<=1
p=t===0
o=p?r:q
if(k.w){if(p)n=s>=0.68&&s<=1&&Math.abs(k.a)<=1
else n=s<=0.32&&s>=0&&Math.abs(k.a)<=1
s=k.y
if(s&&n&&o){m.ch="LET"
m.c=B.j
m.x=50
k=m.CW
if(k!=null)k.$1("let")
return}if(!k.x||s||!n){m.C(1-t,l)
return}m.C(t,"POINT")
return}if(o&&k.x){m.C(t,"POINT")
return}if(Math.abs(k.a)>1||s<0||s>1){m.C(1-t,"OUT")
return}m.C(1-t,l)},
C(a,b){var t,s=this
if(a===0)++s.f
else ++s.r
s.w=a
s.ch=b
s.c=B.j
s.x=70
s.ax=a
s.ay=20
t=s.CW
if(t!=null)t.$1(b==="POINT"?"point":"fault")},
aA(){var t,s,r,q,p,o
for(t=this.dx,s=t.length,r=0;r<s;++r){q=t[r]
q.a=q.a+q.d
q.b=q.b+q.e
p=q.c
o=q.f
q.c=p+o
q.f=o-0.0006;--q.r}t.$flags&1&&A.b8(t,16)
B.d.av(t,new A.bj(),!0)}}
A.bj.prototype={
$1(a){return a.r<=0}}
A.aJ.prototype={}
A.bm.prototype={}
A.bx.prototype={}
A.bn.prototype={
aG(a,b){var t,s
for(t=this.a,s=0;s<61440;++s)t[s]=b},
l(a,b,c){if(c===0)return
if(a<0||b<0||a>=256||b>=240)return
this.a[b*256+a]=c},
ab(a,b,c,d,e){var t,s,r=Math.abs(c-a),q=a<c?1:-1,p=Math.abs(d-b),o=b<d?1:-1,n=r-p
for(t=-p;;){this.l(a,b,e)
if(a===c&&b===d)break
s=n*2
if(s>t){n-=p
a+=q}if(s<r){n+=r
b+=o}}},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b+d,k=a+c
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
this.k(b+(d?t-p:p)*e,r,e,e,o)}},
aF(a,b,c,d,e,f){return this.G(a,b,c,!1,d,e,f)},
a9(a,b,c,d){return this.G(a,b,c,!1,d,5,6)},
aE(a,b,c,d,e){return this.G(a,b,c,d,e,5,6)}}
A.aX.prototype={};(function aliases(){var t=J.C.prototype
t.ah=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1
t(A,"fc","eL",0)
t(A,"fd","eM",0)
t(A,"df","eK",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.c2,J.aF,A.af,J.ay,A.bk,A.bw,A.aK,A.a_,A.S,A.aB,A.F,A.a8,A.bq,A.t,A.b0,A.b5,A.ag,A.bG,A.b1,A.d,A.bD,A.bs,A.ad,A.aZ,A.bf,A.aD,A.ah,A.be,A.aW,A.bv,A.bi,A.aJ,A.bm,A.bx,A.bn,A.aX])
r(J.aF,[J.aH,J.a1,J.a4,J.a3,J.a5,J.a2,J.P])
r(J.a4,[J.C,J.i,A.Q,A.ab])
r(J.C,[J.aU,J.ai,J.B])
s(J.aG,A.af)
s(J.bo,J.i)
r(J.a2,[J.a0,J.aI])
r(A.bk,[A.bp,A.bu,A.bE,A.bd,A.bB,A.Y,A.b_,A.bC,A.aY,A.bh])
r(A.S,[A.b2,A.b3,A.b4])
s(A.u,A.b2)
s(A.ao,A.b3)
s(A.q,A.b4)
r(A.aB,[A.aC,A.aE])
r(A.F,[A.bg,A.bA,A.bT,A.bV,A.bX,A.bY,A.bZ,A.c_,A.bj])
r(A.bA,[A.by,A.Z])
s(A.a7,A.a8)
s(A.a6,A.a7)
r(A.bg,[A.bU,A.br])
r(A.ab,[A.aL,A.R])
r(A.R,[A.ak,A.am])
s(A.al,A.ak)
s(A.a9,A.al)
s(A.an,A.am)
s(A.aa,A.an)
r(A.a9,[A.aM,A.aN])
r(A.aa,[A.aO,A.aP,A.aQ,A.aR,A.aS,A.ac,A.aT])
s(A.b6,A.bE)
s(A.ap,A.ag)
s(A.aj,A.ap)
s(A.bt,A.Y)
s(A.G,A.bD)
t(A.ak,A.d)
t(A.al,A.a_)
t(A.am,A.d)
t(A.an,A.a_)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",dg:"num",H:"String",da:"bool",ad:"Null",c:"List",j:"Object",fr:"Map",h:"JSObject"},mangledNames:{},types:["~(h)","~(f)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.u&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ao&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.q&&A.fg(a,b.a)}}
A.e7(v.typeUniverse,JSON.parse('{"aU":"C","ai":"C","B":"C","fs":"Q","aH":{"b":[]},"a1":{"b":[]},"a4":{"h":[]},"C":{"h":[]},"i":{"c":["1"],"h":[]},"aG":{"af":[]},"bo":{"i":["1"],"c":["1"],"h":[]},"a2":{"f":[]},"a0":{"f":[],"a":[],"b":[]},"aI":{"f":[],"b":[]},"P":{"H":[],"b":[]},"a7":{"a8":["1","2"]},"a6":{"a7":["1","2"],"a8":["1","2"]},"Q":{"h":[],"b":[]},"ab":{"h":[]},"aL":{"h":[],"b":[]},"R":{"o":["1"],"h":[]},"a9":{"d":["f"],"c":["f"],"o":["f"],"h":[]},"aa":{"d":["a"],"c":["a"],"o":["a"],"h":[]},"aM":{"d":["f"],"c":["f"],"o":["f"],"h":[],"b":[],"d.E":"f"},"aN":{"d":["f"],"c":["f"],"o":["f"],"h":[],"b":[],"d.E":"f"},"aO":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aP":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aQ":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aR":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aS":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"ac":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aT":{"d":["a"],"c":["a"],"o":["a"],"h":[],"b":[],"d.E":"a"},"aj":{"ag":["1"]},"ap":{"ag":["1"]},"dF":{"c":["a"]},"dS":{"c":["a"]},"dR":{"c":["a"]},"dD":{"c":["a"]},"dP":{"c":["a"]},"dE":{"c":["a"]},"dQ":{"c":["a"]},"dB":{"c":["f"]},"dC":{"c":["f"]}}'))
A.e6(v.typeUniverse,JSON.parse('{"a_":1,"aB":2,"R":1,"ap":1}'))
var u=(function rtii(){var t=A.z
return{Z:t("fq"),f:t("i<j>"),s:t("i<H>"),b:t("i<@>"),t:t("i<a>"),T:t("a1"),m:t("h"),g:t("B"),p:t("o<@>"),j:t("c<@>"),P:t("ad"),K:t("j"),L:t("ft"),F:t("+()"),N:t("H"),R:t("b"),o:t("ai"),y:t("da"),i:t("f"),S:t("a"),O:t("cx<ad>?"),z:t("h?"),X:t("j?"),v:t("H?"),u:t("da?"),I:t("f?"),w:t("a?"),n:t("dg?"),H:t("dg")}})();(function constants(){var t=hunkHelpers.makeConstList
B.A=J.aF.prototype
B.d=J.i.prototype
B.b=J.a0.prototype
B.a=J.a2.prototype
B.e=J.P.prototype
B.B=J.B.prototype
B.C=J.a4.prototype
B.r=J.aU.prototype
B.k=J.ai.prototype
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.t=function() {
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
B.y=function(getTagFallback) {
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
B.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.x=function(hooks) {
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
B.w=function(hooks) {
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
B.v=function(hooks) {
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
B.m=function(hooks) { return hooks; }

B.z=new A.bs()
B.c=new A.bw()
B.D=t([5,7,10,2,24,8],u.t)
B.av=new A.u(-1,0)
B.au=new A.u(1,0)
B.at=new A.u(0,-1)
B.as=new A.u(0,1)
B.G=t([B.av,B.au,B.at,B.as],A.z("i<+(a,a)>"))
B.K=t([".wwww...","wwwwwwo.",".wwwooko","..ww.oko","...w.oo.",".....o..","........","........"],u.s)
B.o=t(["000","000","000","000","000"],u.s)
B.R=t([0,1579032,16579836,16300152,5255168,14166016,8918016,2111724,188,12878848,16308344,6232,3980540,22776,43008,30720,11303936,7878656,20480,16291904,12369084,8158332,10806524,13695228,12122136],u.t)
B.S=t([523,659,784,659,587,523,440,523,392,523,659,523,494,440,392,440],A.z("i<f>"))
B.a_=t(["....hhhh........","...ohhhho.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....",".odrrrrrrdo.....","..owwwwwwo......","..owwwwwwo......","..oo....oo......",".ow......wo.....",".oo......oo....."],u.s)
B.a3=t(["...wwww.",".owwwww.","okoooww.","oko.ww..",".oo.w...","..o.....","........","........"],u.s)
B.a5=t(["....hhhh........","...ohhhho.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....",".odrrrrrrdo.....","..owwwwwwo......","..oww..wwo......","..oo..oo........",".ow....wo.......",".oo....oo......."],u.s)
B.aa=t([".okko.","ok..ko","ok..ko",".okko.","..kk..","..kk..","...k.."],u.s)
B.ac=t(["..ww....",".wwww...","wwwwww..",".wwww...","..oo....","..oko...","..oko...","..oo...."],u.s)
B.ag=t(["......",".okko.","ok..ko",".okko.","kk....","k.....","......"],u.s)
B.al=t(["..oo....","..oko...","..oko...","..oo....",".wwww...","wwwwww..",".wwww...","..ww...."],u.s)
B.am=t(["....hhhh........","...ohhhho.......","...osooso.......","...osssso.......","....oooo........","..oorrrroo......",".odrrrrrrdo.....","..owwwwwwo......","..owwwwwwo......","..oo....oo......",".ow......wo.....",".oo......oo....."],u.s)
B.ar={".":0,o:1,s:2,h:3,r:4,d:5,w:6,k:7}
B.ap=new A.aC(B.ar,[0,1,3,4,5,6,2,9],A.z("aC<H,a>"))
B.X=t(["111","101","111","101","101"],u.s)
B.L=t(["110","101","110","101","110"],u.s)
B.a6=t(["111","100","100","100","111"],u.s)
B.a4=t(["110","101","101","101","110"],u.s)
B.P=t(["111","100","110","100","111"],u.s)
B.a0=t(["111","100","110","100","100"],u.s)
B.a1=t(["111","100","101","101","111"],u.s)
B.ak=t(["101","101","111","101","101"],u.s)
B.W=t(["111","010","010","010","111"],u.s)
B.J=t(["001","001","001","101","111"],u.s)
B.a9=t(["101","101","110","101","101"],u.s)
B.ad=t(["100","100","100","100","111"],u.s)
B.Q=t(["101","111","101","101","101"],u.s)
B.H=t(["111","101","101","101","101"],u.s)
B.n=t(["111","101","101","101","111"],u.s)
B.U=t(["111","101","111","100","100"],u.s)
B.an=t(["111","101","101","111","001"],u.s)
B.ae=t(["110","101","110","101","101"],u.s)
B.p=t(["111","100","111","001","111"],u.s)
B.V=t(["111","010","010","010","010"],u.s)
B.ab=t(["101","101","101","101","111"],u.s)
B.Y=t(["101","101","101","101","010"],u.s)
B.ai=t(["101","101","101","111","101"],u.s)
B.E=t(["101","101","010","101","101"],u.s)
B.M=t(["101","101","010","010","010"],u.s)
B.ah=t(["111","001","010","100","111"],u.s)
B.a8=t(["010","110","010","010","111"],u.s)
B.F=t(["111","001","111","100","111"],u.s)
B.a2=t(["111","001","111","001","111"],u.s)
B.N=t(["101","101","111","001","001"],u.s)
B.T=t(["111","100","111","101","111"],u.s)
B.a7=t(["111","001","010","010","010"],u.s)
B.af=t(["111","101","111","101","111"],u.s)
B.Z=t(["111","101","111","001","111"],u.s)
B.I=t(["010","010","010","000","010"],u.s)
B.ao=t(["111","001","011","000","010"],u.s)
B.O=t(["000","000","111","000","000"],u.s)
B.aj=t(["000","000","000","000","010"],u.s)
B.aq=new A.aE(["A",B.X,"B",B.L,"C",B.a6,"D",B.a4,"E",B.P,"F",B.a0,"G",B.a1,"H",B.ak,"I",B.W,"J",B.J,"K",B.a9,"L",B.ad,"M",B.Q,"N",B.H,"O",B.n,"P",B.U,"Q",B.an,"R",B.ae,"S",B.p,"T",B.V,"U",B.ab,"V",B.Y,"W",B.ai,"X",B.E,"Y",B.M,"Z",B.ah,"0",B.n,"1",B.a8,"2",B.F,"3",B.a2,"4",B.N,"5",B.p,"6",B.T,"7",B.a7,"8",B.af,"9",B.Z,"!",B.I,"?",B.ao,"-",B.O,".",B.aj," ",B.o],A.z("aE<H,c<H>>"))
B.h=new A.G(0,"title")
B.q=new A.G(1,"ready")
B.i=new A.G(2,"play")
B.j=new A.G(3,"banner")
B.f=new A.G(4,"gameOver")
B.aw=A.v("fm")
B.ax=A.v("fn")
B.ay=A.v("dB")
B.az=A.v("dC")
B.aA=A.v("dD")
B.aB=A.v("dE")
B.aC=A.v("dF")
B.aD=A.v("j")
B.aE=A.v("dP")
B.aF=A.v("dQ")
B.aG=A.v("dR")
B.aH=A.v("dS")})();(function staticFields(){$.bF=null
$.au=A.x([],u.f)
$.cz=null
$.cu=null
$.ct=null
$.dd=null
$.d9=null
$.di=null
$.bQ=null
$.bW=null
$.cf=null
$.bH=A.x([],A.z("i<c<j>?>"))
$.bS=A.dJ(u.N)
$.d0=0
$.bK=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fp","dp",()=>A.bR("_$dart_dartClosure"))
t($,"fo","cj",()=>A.bR("_$dart_dartClosure_dartJSInterop"))
t($,"fv","dq",()=>A.x([new J.aG()],A.z("i<af>")))
t($,"fu","b9",()=>A.ch(B.aD))
t($,"fA","bc",()=>new A.bi(Date.now()&2147483647,B.h,A.cr(1,0.44,0.05,0,0.16),A.cr(-1,0.95,0.56,1,0.84),new A.ah(),A.x([],A.z("i<aW>")),A.x([],A.z("i<+(f,f,f)>"))))
t($,"fB","cl",()=>new A.bn(A.cy(61440,13,!1,u.S)))
t($,"fw","ba",()=>new A.bf())
t($,"fz","bb",()=>new A.aD())
t($,"fG","co",()=>new Uint8Array(245760))
t($,"fx","ck",()=>A.E(B.a_))
t($,"fy","dr",()=>A.E(B.a5))
t($,"fC","cm",()=>A.E(B.am))
t($,"fH","cp",()=>A.x([A.E(B.K),A.E(B.ac),A.E(B.a3),A.E(B.al)],A.z("i<aX>")))
t($,"fF","cn",()=>A.E(B.aa))
t($,"fE","O",()=>A.E(B.ag))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.Q,SharedArrayBuffer:A.Q,ArrayBufferView:A.ab,DataView:A.aL,Float32Array:A.aM,Float64Array:A.aN,Int16Array:A.aO,Int32Array:A.aP,Int8Array:A.aQ,Uint16Array:A.aR,Uint32Array:A.aS,Uint8ClampedArray:A.ac,CanvasPixelArray:A.ac,Uint8Array:A.aT})
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
var t=A.fb
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map

/*! ag_track 2017-07-20 */

!function(a,b){function c(a,b,c,d){var e,f,g,h,i,j,k,m,o,p;if((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(J&&!d){if(e=ta.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&N(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return aa.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&w.getElementsByClassName&&b.getElementsByClassName)return aa.apply(c,b.getElementsByClassName(g)),c}if(w.qsa&&(!K||!K.test(a))){if(m=k=O,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=A(a),(k=b.getAttribute("id"))?m=k.replace(va,"\\$&"):b.setAttribute("id",m),m="[id='"+m+"'] ",i=j.length;i--;)j[i]=m+n(j[i]);o=ua.test(a)&&l(b.parentNode)||b,p=j.join(",")}if(p)try{return aa.apply(c,o.querySelectorAll(p)),c}catch(a){}finally{k||b.removeAttribute("id")}}}return C(a.replace(ja,"$1"),b,c,d)}function d(){function a(c,d){return b.push(c+" ")>x.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function e(a){return a[O]=!0,a}function f(a){var b=H.createElement("div");try{return!!a(b)}catch(a){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function g(a,b){for(var c=a.split("|"),d=a.length;d--;)x.attrHandle[c[d]]=b}function h(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||X)-(~a.sourceIndex||X);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function i(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function j(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function k(a){return e(function(b){return b=+b,e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(a){return a&&typeof a.getElementsByTagName!==W&&a}function m(){}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=R++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[Q,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[O]||(b[O]={}),(h=i[d])&&h[0]===Q&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,d){for(var e=0,f=b.length;e<f;e++)c(a,b[e],d);return d}function r(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function s(a,b,c,d,f,g){return d&&!d[O]&&(d=s(d)),f&&!f[O]&&(f=s(f,g)),e(function(e,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=e||q(b||"*",h.nodeType?[h]:h,[]),s=!a||!e&&b?p:r(p,m,a,h,i),t=c?f||(e?a:o||d)?[]:g:s;if(c&&c(s,t,h,i),d)for(j=r(t,n),d(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(e){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ca.call(e,l):m[k])>-1&&(e[j]=!(g[j]=l))}}else t=r(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):aa.apply(g,t)})}function t(a){for(var b,c,d,e=a.length,f=x.relative[a[0].type],g=f||x.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return ca.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];h<e;h++)if(c=x.relative[a[h].type])k=[o(p(k),c)];else{if(c=x.filter[a[h].type].apply(null,a[h].matches),c[O]){for(d=++h;d<e&&!x.relative[a[d].type];d++);return s(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ja,"$1"),c,h<d&&t(a.slice(h,d)),d<e&&t(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function u(a,b){var d=b.length>0,f=a.length>0,g=function(e,g,h,i,j){var k,l,m,n=0,o="0",p=e&&[],q=[],s=D,t=e||f&&x.find.TAG("*",j),u=Q+=null==s?1:Math.random()||.1,v=t.length;for(j&&(D=g!==H&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(Q=u)}d&&((k=!m&&k)&&n--,e&&p.push(k))}if(n+=o,d&&o!==n){for(l=0;m=b[l++];)m(p,q,g,h);if(e){if(n>0)for(;o--;)p[o]||q[o]||(q[o]=$.call(i));q=r(q)}aa.apply(i,q),j&&!e&&q.length>0&&n+b.length>1&&c.uniqueSort(i)}return j&&(Q=u,D=s),p};return d?e(g):g}var v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O="sizzle"+-new Date,P=a.document,Q=0,R=0,S=d(),T=d(),U=d(),V=function(a,b){return a===b&&(F=!0),0},W="undefined",X=1<<31,Y={}.hasOwnProperty,Z=[],$=Z.pop,_=Z.push,aa=Z.push,ba=Z.slice,ca=Z.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},da="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ea="[\\x20\\t\\r\\n\\f]",fa="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ga=fa.replace("w","w#"),ha="\\["+ea+"*("+fa+")"+ea+"*(?:([*^$|!~]?=)"+ea+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ga+")|)|)"+ea+"*\\]",ia=":("+fa+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ha.replace(3,8)+")*)|.*)\\)|)",ja=new RegExp("^"+ea+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ea+"+$","g"),ka=new RegExp("^"+ea+"*,"+ea+"*"),la=new RegExp("^"+ea+"*([>+~]|"+ea+")"+ea+"*"),ma=new RegExp("="+ea+"*([^\\]'\"]*?)"+ea+"*\\]","g"),na=new RegExp(ia),oa=new RegExp("^"+ga+"$"),pa={ID:new RegExp("^#("+fa+")"),CLASS:new RegExp("^\\.("+fa+")"),TAG:new RegExp("^("+fa.replace("w","w*")+")"),ATTR:new RegExp("^"+ha),PSEUDO:new RegExp("^"+ia),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ea+"*(even|odd|(([+-]|)(\\d*)n|)"+ea+"*(?:([+-]|)"+ea+"*(\\d+)|))"+ea+"*\\)|)","i"),bool:new RegExp("^(?:"+da+")$","i"),needsContext:new RegExp("^"+ea+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ea+"*((?:-\\d)?\\d*)"+ea+"*\\)|)(?=[^-]|$)","i")},qa=/^(?:input|select|textarea|button)$/i,ra=/^h\d$/i,sa=/^[^{]+\{\s*\[native \w/,ta=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ua=/[+~]/,va=/'|\\/g,wa=new RegExp("\\\\([\\da-f]{1,6}"+ea+"?|("+ea+")|.)","ig"),xa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{aa.apply(Z=ba.call(P.childNodes),P.childNodes),Z[P.childNodes.length].nodeType}catch(a){aa={apply:Z.length?function(a,b){_.apply(a,ba.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}w=c.support={},z=c.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},G=c.setDocument=function(a){var b,c=a?a.ownerDocument||a:P,d=c.defaultView;return c!==H&&9===c.nodeType&&c.documentElement?(H=c,I=c.documentElement,J=!z(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){G()},!1):d.attachEvent&&d.attachEvent("onunload",function(){G()})),w.attributes=f(function(a){return a.className="i",!a.getAttribute("className")}),w.getElementsByTagName=f(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),w.getElementsByClassName=sa.test(c.getElementsByClassName)&&f(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),w.getById=f(function(a){return I.appendChild(a).id=O,!c.getElementsByName||!c.getElementsByName(O).length}),w.getById?(x.find.ID=function(a,b){if(typeof b.getElementById!==W&&J){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},x.filter.ID=function(a){var b=a.replace(wa,xa);return function(a){return a.getAttribute("id")===b}}):(delete x.find.ID,x.filter.ID=function(a){var b=a.replace(wa,xa);return function(a){var c=typeof a.getAttributeNode!==W&&a.getAttributeNode("id");return c&&c.value===b}}),x.find.TAG=w.getElementsByTagName?function(a,b){if(typeof b.getElementsByTagName!==W)return b.getElementsByTagName(a)}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},x.find.CLASS=w.getElementsByClassName&&function(a,b){if(typeof b.getElementsByClassName!==W&&J)return b.getElementsByClassName(a)},L=[],K=[],(w.qsa=sa.test(c.querySelectorAll))&&(f(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&K.push("[*^$]="+ea+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||K.push("\\["+ea+"*(?:value|"+da+")"),a.querySelectorAll(":checked").length||K.push(":checked")}),f(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&K.push("name"+ea+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||K.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),K.push(",.*:")})),(w.matchesSelector=sa.test(M=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&f(function(a){w.disconnectedMatch=M.call(a,"div"),M.call(a,"[s!='']:x"),L.push("!=",ia)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=sa.test(I.compareDocumentPosition),N=b||sa.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=b?function(a,b){if(a===b)return F=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!w.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===P&&N(P,a)?-1:b===c||b.ownerDocument===P&&N(P,b)?1:E?ca.call(E,a)-ca.call(E,b):0:4&d?-1:1)}:function(a,b){if(a===b)return F=!0,0;var d,e=0,f=a.parentNode,g=b.parentNode,i=[a],j=[b];if(!f||!g)return a===c?-1:b===c?1:f?-1:g?1:E?ca.call(E,a)-ca.call(E,b):0;if(f===g)return h(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?h(i[e],j[e]):i[e]===P?-1:j[e]===P?1:0},c):H},c.matches=function(a,b){return c(a,null,null,b)},c.matchesSelector=function(a,b){if((a.ownerDocument||a)!==H&&G(a),b=b.replace(ma,"='$1']"),w.matchesSelector&&J&&(!L||!L.test(b))&&(!K||!K.test(b)))try{var d=M.call(a,b);if(d||w.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(a){}return c(b,H,null,[a]).length>0},c.contains=function(a,b){return(a.ownerDocument||a)!==H&&G(a),N(a,b)},c.attr=function(a,b){(a.ownerDocument||a)!==H&&G(a);var c=x.attrHandle[b.toLowerCase()],d=c&&Y.call(x.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:w.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},c.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},c.uniqueSort=function(a){var b,c=[],d=0,e=0;if(F=!w.detectDuplicates,E=!w.sortStable&&a.slice(0),a.sort(V),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return E=null,a},y=c.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=y(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=y(b);return c},x=c.selectors={cacheLength:50,createPseudo:e,match:pa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(wa,xa),a[3]=(a[4]||a[5]||"").replace(wa,xa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||c.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&c.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return pa.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&na.test(c)&&(b=A(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(wa,xa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+ea+")"+a+"("+ea+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==W&&a.getAttribute("class")||"")})},ATTR:function(a,b,d){return function(e){var f=c.attr(e,a);return null==f?"!="===b:!b||(f+="","="===b?f===d:"!="===b?f!==d:"^="===b?d&&0===f.indexOf(d):"*="===b?d&&f.indexOf(d)>-1:"$="===b?d&&f.slice(-d.length)===d:"~="===b?(" "+f+" ").indexOf(d)>-1:"|="===b&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[O]||(q[O]={}),j=k[a]||[],n=j[0]===Q&&j[1],m=j[0]===Q&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[Q,n,m];break}}else if(s&&(j=(b[O]||(b[O]={}))[a])&&j[0]===Q)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[O]||(l[O]={}))[a]=[Q,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var d,f=x.pseudos[a]||x.setFilters[a.toLowerCase()]||c.error("unsupported pseudo: "+a);return f[O]?f(b):f.length>1?(d=[a,a,"",b],x.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,c){for(var d,e=f(a,b),g=e.length;g--;)d=ca.call(a,e[g]),a[d]=!(c[d]=e[g])}):function(a){return f(a,0,d)}):f}},pseudos:{not:e(function(a){var b=[],c=[],d=B(a.replace(ja,"$1"));return d[O]?e(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:e(function(a){return function(b){return c(a,b).length>0}}),contains:e(function(a){return function(b){return(b.textContent||b.innerText||y(b)).indexOf(a)>-1}}),lang:e(function(a){return oa.test(a||"")||c.error("unsupported lang: "+a),a=a.replace(wa,xa).toLowerCase(),function(b){var c;do if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!x.pseudos.empty(a)},header:function(a){return ra.test(a.nodeName)},input:function(a){return qa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[c<0?c+b:c]}),even:k(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},x.pseudos.nth=x.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=i(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=j(v);m.prototype=x.filters=x.pseudos,x.setFilters=new m,A=c.tokenize=function(a,b){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=x.preFilter;h;){d&&!(e=ka.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=la.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ja," ")}),h=h.slice(d.length));for(g in x.filter)!(e=pa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return b?h.length:h?c.error(a):T(a,i).slice(0)},B=c.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=A(a)),c=b.length;c--;)f=t(b[c]),f[O]?d.push(f):e.push(f);f=U(a,u(e,d)),f.selector=a}return f},C=c.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,k=!d&&A(a=j.selector||a);if(c=c||[],1===k.length){if(f=k[0]=k[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&w.getById&&9===b.nodeType&&J&&x.relative[f[1].type]){if(b=(x.find.ID(g.matches[0].replace(wa,xa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=pa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!x.relative[h=g.type]);)if((i=x.find[h])&&(d=i(g.matches[0].replace(wa,xa),ua.test(f[0].type)&&l(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return aa.apply(c,d),c;break}}return(j||B(a,k))(d,b,!J,c,ua.test(a)&&l(b.parentNode)||b),c},w.sortStable=O.split("").sort(V).join("")===O,w.detectDuplicates=!!F,G(),w.sortDetached=f(function(a){return 1&a.compareDocumentPosition(H.createElement("div"))}),f(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||g("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),w.attributes&&f(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||g("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),f(function(a){return null==a.getAttribute("disabled")})||g(da,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b&&(b.Sizzle=c)}(window,window._agtjs),function(a){for(var b="2.35",c="agrantsem.com",d=document.getElementsByTagName("script"),e=0;e<d.length;e++){var f=d[e].src;if(f.indexOf("ang_tj=true")>0){c=f.replace(/^.*\/\//i,"").replace(/\/.*$/,"").replace(/:.*$/,"").replace(/^((t\.)|(static\.t\.))/i,"");break}}var g="//t."+c+"/tker.gif",h="//t4."+c+"/pv",i="//t.agrantsem.com/cmiframe.html?src=pv",j="__ag_cm_",k="ag_kwid",l="ag_mid",m="ag_fid",n={cm:"trackCm"},o="F",p="https://vid.agrant.cn",q="/store.html",r="agvid",s="agvidct",t=0,u=window,v=document,w=u.navigator,x=window.top||window.parent||window,y="",z="&agtjv="+b,A=function(a,b,c){var d="",e="/",f=new Date;f.setTime(f.getTime()+c);d=window.location.host||window.location.hostname;var g=/[-0-9a-z]+\.((com\.cn|net\.cn|org\.cn|gov\.cn)|[a-z]{2,5})($|\/)/gi;d=d.match(g),d&&d.length>0&&(d=d[0]),document.cookie=a+"="+b+";expires="+f.toGMTString()+";path="+e+";domain="+d},B=function(a){var b=document.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));return null!=b?unescape(b[2]):null},C=function(a){a=a||32;var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=b.length,d="";for(e=0;e<a;e++)d+=b.charAt(Math.floor(Math.random()*c));return d},D=function(){var a=B(m);return null!=a&&0!=a.length||(a=C(15)+o),A(m,a,31536e7),a},E=function(b,c,d){var e=function(b){var e=b.target||b.srcElement,f=a.Sizzle(c);for(var g in f)if(f[g].contains(e)){d();break}};c&&(v.attachEvent?v.attachEvent("on"+b,function(a){e(a)}):v.addEventListener&&v.addEventListener(b,function(a){e(a)}))},F=function(a){var b="";try{b=window.top.location.search}catch(a){b=window.location.search}try{if(b.indexOf("?")!=-1){var c=b.substr(1);strs=c.split("&");for(var d=0;d<strs.length;d++)if(strs[d].split("=")[0]==a){var e=strs[d].split("=");if(e.length>1)return e[1]}}}catch(a){return""}return""},G={isLocalStorage:!!window.localStorage,dataDom:null,initDom:function(){if(!this.dataDom)try{this.dataDom=document.createElement("input"),this.dataDom.type="hidden",this.dataDom.style.display="none",this.dataDom.addBehavior("#default#userData"),document.body.appendChild(this.dataDom);var a=new Date;a=new Date(a.getTime()+31536e6),this.dataDom.expires=a.toUTCString()}catch(a){return!1}return!0},set:function(a,b){this.isLocalStorage?window.localStorage.setItem(a,b):this.initDom()&&(this.dataDom.load(this.hname),this.dataDom.setAttribute(a,b),this.dataDom.save(this.hname))},get:function(a){return this.isLocalStorage?window.localStorage.getItem(a):this.initDom()?(this.dataDom.load(this.hname),this.dataDom.getAttribute(a)):void 0},remove:function(a){this.isLocalStorage?localStorage.removeItem(a):this.initDom()&&(this.dataDom.load(this.hname),this.dataDom.removeAttribute(a),this.dataDom.save(this.hname))},isSupport:function(){return this.isLocalStorage||this.initDom()}},H=function(){if(!G.isSupport())return"";var a=G.get(r),b=G.get(s);if(a||(a=""),!(a&&+new Date-1*b<6048e5)){if(t===-1)return a;if(0!=t)return a;t=1;var c=function(a){if(a.origin.indexOf(p)!=-1){var b=a.data;b&&16==b.length&&"V"==b.charAt(b.length-1)&&(G.set(r,b),G.set(s,+new Date),t=2)}};"function"==typeof window.addEventListener?window.addEventListener("message",c,!1):"function"==typeof window.attachEvent&&window.attachEvent("onmessage",c),I(function(){var a=document.createElement("iframe");a.src=p+q,a.style.display="none",a.width=a.height="0",document.body.appendChild(a)})}return a},I=function(a){var b=!1,c=!0,d=window,e=d.document,f=e.documentElement,g=e.addEventListener,h=g?"addEventListener":"attachEvent",i=g?"removeEventListener":"detachEvent",j=g?"":"on",k=function(c){"readystatechange"==c.type&&"complete"!=e.readyState||(("load"==c.type?d:e)[i](j+c.type,k,!1),!b&&(b=!0)&&a.call(d,c))},l=function(){try{f.doScroll("left")}catch(a){return void setTimeout(l,50)}k("poll")};if("complete"==e.readyState)a.call(d);else{if(!g&&f.doScroll){try{c=!d.frameElement}catch(a){}c&&l()}e[h](j+"DOMContentLoaded",k,!1),e[h](j+"readystatechange",k,!1),d[h](j+"load",k,!1)}},J={genUri:function(a,b){var c="";if(b)for(var d in b){var e="";e="function"==typeof b[d]?b[d]():b[d],c+="&"+d+"="+encodeURIComponent(e)}var f=a+"?"+z.substring(1)+c+"&atstime="+(new Date).getTime()+"&agfid="+D()+"&agvid="+H(),g=F(k),h=F(l);return g?f+="&atstd="+g+"&atstt="+k:h&&(f+="&atstd="+h+"&atstt="+l),f},send:function(a,b){var c=new Image;b&&"function"==typeof b&&b(c),c.src=a}},K=function(){var a=function(a){var b=!1;return a?"string"==typeof a?y.indexOf(a)!=-1&&(b=!0):b=!(a instanceof RegExp)||a.test(y):b=!0,b};return{trackAd:function(){var a=F(k),b=F(l);a&&J.send(J.genUri(g)),b&&J.send(J.genUri(g))},loadEvent:function(b){if(b.length>0){var c=!1;c=a(b[1]),c&&b[0]&&J.send(J.genUri(g,b[0]))}},clickEvent:function(b){if(b.length>0){var c=!1;c=a(b[2]),c&&b[0]&&b[1]&&E("click",b[0],function(){J.send(J.genUri(g,b[1]),b[3])})}},trackPv:function(a){a.length>0&&a[0]&&a[0].agvid===!1&&(t=-1),J.send(J.genUri(h))},noTrack:function(a){var b={};if(a.length>0)for(var c in a)b[a[c]]=!0;return b},trackCm:function(a){var b=B(j);if(!b){A(j,"1",864e5);var c=document.createElement("iframe");c.src=i,c.style.display="none",c.width=c.height="0",document.body.appendChild(c)}},init:function(a){if(a.length<2)return!1;try{"AG_104415_RTYQ"==a[0]&&(setTimeout(function(){document.cookie="refurl=''"},100),setTimeout(function(){document.cookie="refurl=''"},2e3),setTimeout(function(){document.cookie="refurl=''"},1e4))}catch(a){console.log("err: "+a)}try{return z+="&atscu="+a[0],!0}catch(a){return!1}}}}();if(function(a){var b="-",c=b,d=b;try{var e=navigator.appVersion,f=navigator.userAgent,g=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var h in g){var i=g[h];if(i.r.test(f)){c=i.s;break}}switch(/Windows/.test(c)&&(d=/Windows (.*)/.exec(c)[1],c="Windows"),c){case"Mac OS X":d=/Mac OS X (10[\.\_\d]+)/.exec(f)[1];break;case"Android":d=/Android ([\.\_\d]+)/.exec(f)[1];break;case"iOS":d=/OS (\d+)_(\d+)_?(\d+)?/.exec(e),d=d[1]+"."+d[2]+"."+(0|d[3])}}catch(a){console.log("err: "+a)}a.jscd={os:c,osVersion:d}}(this),function(){var a={};a.atsos=jscd.os+" "+jscd.osVersion,a.atsp=w.platform,a.atsl=w.language?w.language:w.browserLanguage;try{a.atsbr=v.body.clientWidth+"x"+v.body.clientHeight}catch(b){a.atsbr=b.message}a.atssr=u.screen.width+"x"+u.screen.height,a.atsc=v.charset||v.characterSet;try{if(self.frameElement&&"IFRAME"==self.frameElement.tagName){var b=parent.location.href;b&&(a.purl=b)}}catch(a){}try{y=x.location.href,a.atsrf=x.document.referrer}catch(a){y=v.referrer||u.location.href}for(var c in a)z+="&"+c+"="+encodeURIComponent(a[c])}(),void 0!==a){var L=a.ar,M=!1,N=!1;for(var e in L)if(L[e]=[].slice.apply(L[e]),L[e].length>0&&("init"==L[e][0]&&(K.init(L[e].slice(1)),M=!0),"noTrack"==L[e][0])){var O=L[e].slice(1),P=K.noTrack(O);for(var Q in n)K[n[Q]]&&!P[Q]&&K[n[Q]]();N=!0}if(!M)throw"Must add init method.";if(!N)for(var Q in n)K[n[Q]]&&K[n[Q]]();K.trackAd();for(var e in L){var R=[].slice.apply(L[e]);if(R.length>0){var O=R.slice(1);switch(R[0]){case"loadEvent":K.loadEvent(O);break;case"clickEvent":K.clickEvent(O);break;case"trackPv":K.trackPv(O)}}}a.ar.length=0,a.ar.push=function(){if(R=[].slice.apply(arguments[0]),R.length>0){var a=R.slice(1);switch(R[0]){case"loadEvent":K.loadEvent(a);break;case"clickEvent":K.clickEvent(a);break;case"trackPv":K.trackPv(a)}}}}}(window._agtjs);
//# sourceMappingURL=ag_track-2.35.map
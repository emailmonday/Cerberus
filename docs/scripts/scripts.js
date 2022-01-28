/*
  Toggle Mobile Menu
*/
function siteNav() {
  // Get the paragraph element
  const element = document.getElementById("sitenav-ul");
  // Add a class to the paragraph
  element.classList.toggle("open");
}

/*
  Table of contents: https://codepen.io/vj/pen/rNjeKpz
*/
var insertNode = document.querySelector(".on-this-page");
if(!insertNode) {
} else {
// Wrapper for Blog post
var wrappingElement = document.querySelector("article");
// Get all H1/H2 tags from the post
var allHtags = wrappingElement.querySelectorAll(":scope h2, :scope h3");
// Intersection Observer Options
var options = {
    root: null,
    rootMargin: "0px",
    threshold: [1],
};
// Each Intersection Observer runs setCurrent
var observeHtags = new IntersectionObserver(setCurrent, options);
// Build the DOM for the menu
function createTOC() {
    var frag = document.createDocumentFragment();
    var jsNav = document.createElement("nav");
    //jsNav.classList.add("toc-Wrapper");
    var tocTitle = document.createElement("h4");
    //tocTitle.classList.add("toc-Title");
    tocTitle.textContent = "On this page";
    jsNav.appendChild(tocTitle);
    allHtags.forEach((el, i) =>  {
        var links = document.createElement("a");
        links.setAttribute("href", "#h-" + el.tagName + "_" + i);
        links.classList.add("toc");
        links.classList.add("toc-" + el.tagName);
        var textContentOfLink = el.textContent;
        el.id = "h-" + el.tagName + "_" + i;
        links.textContent = textContentOfLink;
        frag.appendChild(links);
    });
    jsNav.appendChild(frag);
    insertNode.appendChild(jsNav);
    // Now
    allHtags.forEach(tag => {
        observeHtags.observe(tag);
    });
}
// Function that runs when the Intersection Observer fires
function setCurrent(e) {
    console.log(e);
    var allSectionLinks = document.querySelectorAll(".toc");
    e.map(i => {
        if (i.isIntersecting === true) {
            allSectionLinks.forEach(link => link.classList.remove("current"));
            document.querySelector(`a[href="#${i.target.id}"]`).classList.add("current");
        }
    })
}
(function setUp() {
    if (wrappingElement === null) {
        return;
    }
    createTOC();
})();
}

/*!
  Highlight.js v11.3.1 (git: 2a972d8658)
  (c) 2006-2021 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
return e instanceof Map?e.clear=e.delete=e.set=()=>{
throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
e.exports=t,e.exports.default=t;var n=e.exports;class i{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function r(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind
;class a{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=r(e)}openNode(e){if(!o(e))return;let t=e.kind
;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){
const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){
o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
return new a(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return f("(?=",e,")")}
function u(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}
function f(...e){return e.map((e=>g(e))).join("")}function p(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function E(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
const x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",O={
begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[O]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[O]},M=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},S=M("//","$"),R=M("/\\*","\\*/"),j=M("#","$");var A=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,
NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:v,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:O,APOS_STRING_MODE:k,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:j,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:_,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:v,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,
contains:[O]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function I(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function B(e,t){
Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function D(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function P(e,t){
void 0===e.relevance&&(e.relevance=1)}const H=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,d(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},C=["of","and","for","in","not","or","if","then","parent","list","value"]
;function $(e,t,n="keyword"){const i=Object.create(null)
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>C.includes(e.toLowerCase()))(e)?0:1}const z={},K=e=>{
console.error(e)},W=(e,...t)=>{console.log("WARN: "+e,...t)},X=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},G=Error();function Z(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=b(t[e-1])
;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function F(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
G;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
G;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(E(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function n(r,o){const a=r
;if(r.isCompiled)return a
;[T,D,F,H].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),
r.__beforeBegin=null,[L,B,P].forEach((e=>e(r,o))),r.isCompiled=!0;let c=null
;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
c=r.keywords.$pattern,
delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
o&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(a.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
r.end&&(a.endRe=t(a.end)),
a.terminatorEnd=g(a.end)||"",r.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),
r.illegal&&(a.illegalRe=t(r.illegal)),
r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{n(e,a)
})),r.starts&&n(r.starts,o),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=r,Q=s,ee=Symbol("nomatch");var te=(e=>{
const t=Object.create(null),r=Object.create(null),s=[];let o=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",c={
disableAutodetect:!0,name:"Plain text",contains:[]};let g={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:l};function b(e){
return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,r=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),
X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};N("before:highlight",s)
;const o=s.result?s.result:E(s.language,s.code,n)
;return o.code=s.code,N("after:highlight",o),o}function E(e,n,r,s){
const c=Object.create(null);function l(){if(!k.keywords)return void M.addText(S)
;let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(S),n=""
;for(;t;){n+=S.substring(e,t.index)
;const r=y.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,k.keywords[i]);if(s){
const[e,i]=s
;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0]
;e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(S)}var i
;n+=S.substr(e),M.addText(n)}function d(){null!=k.subLanguage?(()=>{
if(""===S)return;let e=null;if("string"==typeof k.subLanguage){
if(!t[k.subLanguage])return void M.addText(S)
;e=E(k.subLanguage,S,!0,N[k.subLanguage]),N[k.subLanguage]=e._top
}else e=x(S,k.subLanguage.length?k.subLanguage:null)
;k.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)
})():l(),S=""}function u(e,t){let n=1;for(;void 0!==t[n];){if(!e._emit[n]){n++
;continue}const i=y.classNameAliases[e[n]]||e[n],r=t[n]
;i?M.addKeyword(r,i):(S=r,l(),S=""),n++}}function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
S=""):e.beginScope._multi&&(u(e.beginScope,t),S="")),k=Object.create(e,{parent:{
value:k}}),k}function f(e,t,n){let r=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e)
;e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return f(e.parent,t,n)}function p(e){
return 0===k.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){
const t=e[0],i=n.substr(e.index),r=f(k,e,i);if(!r)return ee;const s=k
;k.endScope&&k.endScope._wrap?(d(),
M.addKeyword(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(d(),
u(k.endScope,e)):s.skip?S+=t:(s.returnEnd||s.excludeEnd||(S+=t),
d(),s.excludeEnd&&(S=t));do{
k.scope&&M.closeNode(),k.skip||k.subLanguage||(R+=k.relevance),k=k.parent
}while(k!==r.parent);return r.starts&&h(r.starts,e),s.returnEnd?0:t.length}
let m={};function w(t,s){const a=s&&s[0];if(S+=t,null==a)return d(),0
;if("begin"===m.type&&"end"===s.type&&m.index===s.index&&""===a){
if(S+=n.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=m.rule,t}return 1}
if(m=s,"begin"===s.type)return(e=>{
const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return p(t)
;return n.skip?S+=t:(n.excludeBegin&&(S+=t),
d(),n.returnBegin||n.excludeBegin||(S=t)),h(n,e),n.returnBegin?0:t.length})(s)
;if("illegal"===s.type&&!r){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(k.scope||"<unnamed>")+'"')
;throw e.mode=k,e}if("end"===s.type){const e=b(s);if(e!==ee)return e}
if("illegal"===s.type&&""===a)return 1
;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
;return S+=a,a.length}const y=v(e)
;if(!y)throw K(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const _=V(y);let O="",k=s||_;const N={},M=new g.__emitter(g);(()=>{const e=[]
;for(let t=k;t!==y;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let S="",R=0,j=0,A=0,I=!1;try{
for(k.matcher.considerAll();;){
A++,I?I=!1:k.matcher.considerAll(),k.matcher.lastIndex=j
;const e=k.matcher.exec(n);if(!e)break;const t=w(n.substring(j,e.index),e)
;j=e.index+t}return w(n.substr(j)),M.closeAllNodes(),M.finalize(),O=M.toHTML(),{
language:e,value:O,relevance:R,illegal:!1,_emitter:M,_top:k}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:j,
context:n.slice(j-100,j+100),mode:t.mode,resultSoFar:O},_emitter:M};if(o)return{
language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:k}
;throw t}}function x(e,n){n=n||g.languages||Object.keys(t);const i=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)}
;return t._emitter.addText(e),t})(e),r=n.filter(v).filter(k).map((t=>E(t,e,!1)))
;r.unshift(i);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(v(e.language).supersetOf===t.language)return 1
;if(v(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,l=o
;return l.secondBest=a,l}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=g.languageDetectRe.exec(t);if(n){const t=v(n[1])
;return t||(W(a.replace("{}",n[1])),
W("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||v(e)))})(e);if(b(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),
console.warn(e)),
g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,s=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,s.language),e.result={language:s.language,re:s.relevance,
relevance:s.relevance},s.secondBest&&(e.secondBest={
language:s.secondBest.language,relevance:s.secondBest.relevance
}),N("after:highlightElement",{el:e,result:s,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0
}function v(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}
function O(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
r[e.toLowerCase()]=t}))}function k(e){const t=v(e)
;return t&&!t.disableAutodetect}function N(e,t){const n=e;s.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(X("10.7.0","highlightBlock will be removed entirely in v12.0"),
X("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{g=Q(g,e)},
initHighlighting:()=>{
_(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(n,i)=>{let r=null;try{r=i(e)}catch(e){
if(K("Language definition for '{}' could not be registered.".replace("{}",n)),
!o)throw e;K(e),r=c}
r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&O(r.aliases,{
languageName:n})},unregisterLanguage:e=>{delete t[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(t),getLanguage:v,registerAliases:O,
autoDetection:k,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
}),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0
},e.versionString="11.3.1",e.regex={concat:f,lookahead:d,either:p,optional:h,
anyNumberOfTimes:u};for(const e in A)"object"==typeof A[e]&&n(A[e])
;return Object.assign(e,A),e})({});return te}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `plaintext` grammar compiled for Highlight.js 11.3.1 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Plain text",
aliases:["text","txt"],disableAutodetect:!0})})()
;hljs.registerLanguage("plaintext",t)})();/*! `css` grammar compiled for Highlight.js 11.3.1 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],r=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-height","max-width","min-height","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
;return a=>{const n=a.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(a),s=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",
case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{
begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{
className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{
className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
begin:":("+i.join("|")+")"},{begin:":(:)?("+o.join("|")+")"}]},l.CSS_VARIABLE,{
className:"attribute",begin:"\\b("+r.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,
contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{
begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]
},l.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,
illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{
begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:t.join(" ")},contains:[{
begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{
className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})()
;hljs.registerLanguage("css",e)})();/*! `xml` grammar compiled for Highlight.js 11.3.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=a.concat(/[A-Z_]/,a.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",
begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{
relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{
className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
})();hljs.registerLanguage("xml",e)})();

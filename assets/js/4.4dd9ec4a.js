(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(t,e,n){"use strict";var r=n(184),a=n(182),i=n(7),o=n(27),s=n(110),u=n(185),l=n(79),c=n(20),f=n(51),p=n(186),d=n(83),v=n(183),h=n(2),g=v.UNSUPPORTED_Y,m=[].push,b=Math.min;r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=c(o(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);for(var s,u,l,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,p+"g");(s=d.call(h,r))&&!((u=h.lastIndex)>v&&(f.push(r.slice(v,s.index)),s.length>1&&s.index<r.length&&m.apply(f,s.slice(1)),l=s[0].length,v=u,f.length>=i));)h.lastIndex===s.index&&h.lastIndex++;return v===r.length?!l&&h.test("")||f.push(""):f.push(r.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=o(this),i=null==e?void 0:f(e,t);return i?i.call(e,a,n):r.call(c(a),e,n)},function(t,a){var o=i(this),f=c(t),d=n(r,o,f,a,r!==e);if(d.done)return d.value;var v=s(o,RegExp),h=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),y=new v(g?"^(?:"+o.source+")":o,m),x=void 0===a?4294967295:a>>>0;if(0===x)return[];if(0===f.length)return null===p(y,f)?[f]:[];for(var _=0,w=0,T=[];w<f.length;){y.lastIndex=g?0:w;var D,k=p(y,g?f.slice(w):f);if(null===k||(D=b(l(y.lastIndex+(g?w:0)),f.length))===_)w=u(f,w,h);else{if(T.push(f.slice(_,w)),T.length===x)return T;for(var F=1;F<=k.length-1;F++)if(T.push(k[F]),T.length===x)return T;w=_=D}}return T.push(f.slice(_)),T}]}),!!h((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),g)},338:function(t,e,n){var r=n(8),a=n(52),i=n(16),o=n(81).f,s=function(t){return function(e){for(var n,s=i(e),u=a(s),l=u.length,c=0,f=[];l>c;)n=u[c++],r&&!o.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}};t.exports={entries:s(!0),values:s(!1)}},343:function(t,e,n){var r=n(1),a=n(338).entries;r({target:"Object",stat:!0},{entries:function(t){return a(t)}})},345:function(t,e,n){"use strict";var r=n(1),a=n(21),i=n(11),o=n(22),s=n(20),u=n(2),l=n(346),c=n(35),f=n(347),p=n(348),d=n(34),v=n(349),h=[],g=h.sort,m=u((function(){h.sort(void 0)})),b=u((function(){h.sort(null)})),y=c("sort"),x=!u((function(){if(d)return d<70;if(!(f&&f>3)){if(p)return!0;if(v)return v<603;var t,e,n,r,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)h.push({k:e+r,v:n})}for(h.sort((function(t,e){return e.v-t.v})),r=0;r<h.length;r++)e=h[r].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}}));r({target:"Array",proto:!0,forced:m||!b||!y||!x},{sort:function(t){void 0!==t&&a(t);var e=i(this);if(x)return void 0===t?g.call(e):g.call(e,t);var n,r,u=[],c=o(e);for(r=0;r<c;r++)r in e&&u.push(e[r]);for(n=(u=l(u,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:s(e)>s(n)?1:-1}}(t))).length,r=0;r<n;)e[r]=u[r++];for(;r<c;)delete e[r++];return e}})},346:function(t,e){var n=Math.floor,r=function(t,e){var o=t.length,s=n(o/2);return o<8?a(t,e):i(r(t.slice(0,s),e),r(t.slice(s),e),e)},a=function(t,e){for(var n,r,a=t.length,i=1;i<a;){for(r=i,n=t[i];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==i++&&(t[r]=n)}return t},i=function(t,e,n){for(var r=t.length,a=e.length,i=0,o=0,s=[];i<r||o<a;)i<r&&o<a?s.push(n(t[i],e[o])<=0?t[i++]:e[o++]):s.push(i<r?t[i++]:e[o++]);return s};t.exports=r},347:function(t,e,n){var r=n(49).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},348:function(t,e,n){var r=n(49);t.exports=/MSIE|Trident/.test(r)},349:function(t,e,n){var r=n(49).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},423:function(t,e,n){var r=n(15),a=Date.prototype,i=a.toString,o=a.getTime;"Invalid Date"!=String(new Date(NaN))&&r(a,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},424:function(t,e,n){var r=n(1),a=n(338).values;r({target:"Object",stat:!0},{values:function(t){return a(t)}})},431:function(t,e,n){"use strict";n.r(e);var r=n(54),a=n(105),i=(n(107),n(33),n(345),n(50),n(337),n(187),n(78),n(423),n(189),n(343),n(108),n(109),n(191),n(192),n(424),n(344)),o=n.n(i),s=(n(194),n(195),{name:"DataGapsYear",data:function(){return{data:[],organisationTypes:[],organisationType:"10 - Government",transactionTypeFields:[]}},computed:{filteredData:function(){var t=this;return this.data.filter((function(e){return e.publisher_type==t.organisationType}))},dataFields:function(){var t={commitments:0,disbursements:1,expenditure:2,budget:3},e=this.transactionTypeFields.sort((function(e,n){var r=e.split("_"),i=Object(a.a)(r,2),o=i[0],s=i[1],u=t[o],l=n.split("_"),c=Object(a.a)(l,2),f=c[0],p=c[1];return o==f?s>p?1:-1:u>t[f]}));return[{key:"publisher",sortable:!0}].concat(e.map((function(t){return{key:t,formatter:"valueFormatter",sortable:!0}})))}},methods:{valueFormatter:function(t){var e=t?t/1e6:0;return e=e.toLocaleString(void 0,{maximumFractionDigits:0}),"".concat(e," mn")}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://countrydata.iatistandard.org/data/summary_year.json");case 2:n=e.sent,r=(new Date).getFullYear(),t.data=Object.entries(n.data.summary).reduce((function(e,n){var a={publisher:n[0],publisher_type:n[1].type,_cellVariants:{}};return n[1].data.forEach((function(e){if("2 - Outgoing Commitment"==e.transaction_type){if((i=e.year)>r)return;var n="commitments_".concat(i)}else if("3 - Disbursement"==e.transaction_type){if((i=e.year)>r)return;n="disbursements_".concat(i)}else if("4 - Expenditure"==e.transaction_type){if((i=e.year)>r)return;n="expenditure_".concat(i)}else{if("budget - Budget"!=e.transaction_type)return;var i;if((i=e.year)<r)return;n="budget_".concat(i)}t.transactionTypeFields.includes(n)||t.transactionTypeFields.push(n),a[n]=e.value,0==e.value&&(a._cellVariants[n]="warning")})),e.push(a),e}),[]),t.organisationTypes=Object.values(n.data.summary).reduce((function(t,e){return t.includes(e.type)||t.push(e.type),t}),[]).sort();case 6:case"end":return e.stop()}}),e)})))()}}),u=n(48),l=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",[n("b-form-group",{attrs:{label:"Organisation Type"}},[n("b-select",{attrs:{options:t.organisationTypes},model:{value:t.organisationType,callback:function(e){t.organisationType=e},expression:"organisationType"}})],1)],1)],1),t._v(" "),n("b-row",[n("b-col",[n("b-table",{attrs:{responsive:"",fields:t.dataFields,items:t.filteredData}})],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);
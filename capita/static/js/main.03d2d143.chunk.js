(window.webpackJsonpcapita=window.webpackJsonpcapita||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(24)},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(4),s=n.n(i),u=n(7),l=n(1),p=(n(15),{a:{c:2},c:{a:2,d:1,f:4},b:{d:4,e:7},d:{b:4,c:1,f:1,g:2},f:{d:1,g:3},g:{d:2,f:3,h:4},e:{b:7,h:10},h:{g:4,e:10}});n(16);function m(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Capita React Coding Exercise"))}var d=n(8),f=n(3);function b(t){var e=t.width,n=t.height,a=t.pointKey,r=t.total,c=Object.keys(p).findIndex(function(t){return t===a}),o=2*Math.PI*(c+r/2)/r,i=(e>n?n:e)/2;return{left:e/2+Math.sin(o)*i,top:n/2+Math.cos(o)*i}}n(18);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function g(t){var e=t.onClick,n=t.selected,a=t.clickable,c=t.style,o=t.children;return n?r.a.createElement("div",{className:"point point--selected",style:c},o):a?r.a.createElement("button",{className:"point",onClick:e,style:c},o):r.a.createElement("div",{className:"point point--inactive",style:c},o)}function y(t){var e=t.pointKey,n=t.total,c=Object(l.a)(t.size,2),o=c[0],i=c[1],s=t.clickPoint,u=t.selected,p=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){Object(f.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({position:"absolute"},b({width:o,height:i,pointKey:e,total:n})),m=Object(a.useCallback)(function(){s&&s(e)},[s,e]);return o&&i?r.a.createElement(g,{selected:u,clickable:!!s,style:p,onClick:m},r.a.createElement("div",{className:"point__title"},e)):null}n(19);function O(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}function E(t){var e=t.name,n=t.source,a=t.dest,c=t.distance,o=t.total,i=Object(l.a)(t.size,2),s=i[0],u=i[1];if(!s||!u)return null;var p=b({width:s,height:u,pointKey:n,total:o}),m=b({width:s,height:u,pointKey:a,total:o}),d={position:"absolute",left:(p.left+m.left)/2,top:(p.top+m.top)/2},f=p.left,h=p.top,g=p.left-m.left,y=p.top-m.top,E=Math.sqrt(g*g+y*y),w=O(p.left,3)===O(m.left,3)?0:Math.asin(g/E),j=p.top>m.top?3*Math.PI/2-w:Math.PI/2+w,v={position:"absolute",left:f,top:h,width:E,transform:"translate(-".concat(E/2,"px,0) rotate(").concat(j,"rad) translate(").concat(E/2,"px,0)")};return r.a.createElement("div",{className:"connection"},r.a.createElement("div",{className:"connection__line",style:v}),r.a.createElement("div",{className:"connection__distance",style:d},e," ",c))}var w=n(2);function j(t,e){return function(n){return n.reduce(function(n,a){return a.reduce(function(n,r,c){return e(r)&&n.push({beenAt:[t].concat(Object(w.a)(0===c?[]:a.slice(0,c).map(function(t){return t.goingTowards}))),waypoint:r}),n},n)},[])}}n(20);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(f.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var N=.5;function k(t){var e=t.waypointRoute,n=Object(l.a)(t.size,2),c=n[0],o=n[1],i=t.total;return Object(a.useMemo)(function(){var t=b({width:c,height:o,pointKey:e.beenAt[e.beenAt.length-1],total:i}),n=b({width:c,height:o,pointKey:e.waypoint.goingTowards,total:i}),a=n.left-t.left,s=n.top-t.top,u="animate-".concat(e.beenAt.join("")).concat(e.waypoint.goingTowards,"-").concat(Math.round(a),"-").concat(Math.round(s)),l="@keyframes ".concat(u," {\n      0% {\n        transform: translate(0, 0);\n      }\n      100% {\n        transform: translate(").concat(a,"px, ").concat(s,"px);\n      }\n    }"),p=document.createElement("style");return p.type="text/css",p.appendChild(document.createTextNode(l)),document.getElementsByTagName("head")[0].appendChild(p),r.a.createElement("div",{className:"animating-route",key:"from".concat(e.beenAt.join(""),"to").concat(e.waypoint.goingTowards),style:_({position:"absolute",animationName:u,animationTimingFunction:"linear",animationDuration:"".concat(N*e.waypoint.distance,"s"),animationDelay:"0.0s",animationIterationCount:1,animationDirection:"normal",animationFillMode:"forwards"},t)})},[c,o,e.beenAt,e.waypoint.goingTowards,e.waypoint.distance,i])}var P=function(t){return!t.started},T=function(t){return t.started&&!t.completed};function A(t){var e=t.startAt,n=t.endAt,c=t.routes,o=t.dispatch,i=t.size,s=t.total;if(Object(a.useEffect)(function(){e&&n&&j(e,P)(c).forEach(function(t){o({type:"START",unstartedRoute:t}),setTimeout(function(){o({type:"END",unstartedRoute:t,targetPoint:n})},1e3*N*t.waypoint.distance)})},[o,n,c,e]),!e)return null;var u=j(e,T)(c);return r.a.createElement(r.a.Fragment,null,u.map(function(t){return r.a.createElement(k,{waypointRoute:t,key:"animating".concat(t.beenAt.join("")).concat(t.waypoint.goingTowards),size:i,total:s})}))}n(21);function C(t){var e=t.points,n=t.pointA,c=t.pointB,o=t.clickPoint,i=t.routes,s=t.dispatch,u=Object.keys(e),p=Object(a.useRef)(null),m=Object(a.useState)([0,0]),f=Object(l.a)(m,2),b=f[0],h=f[1];return Object(a.useEffect)(function(){var t=new d.a(function(t){var e=t[0].target;h([e.clientWidth,e.clientHeight])});return p.current&&t.observe(p.current),t.disconnect},[]),r.a.createElement("div",{className:"routes",ref:p},u.map(function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(y,{pointKey:t,total:u.length,size:b,clickPoint:t===n||t===c?void 0:o,selected:t===n||t===c}),Object.keys(e[t]).filter(function(e){return e.toString().charCodeAt(0)>t.toString().charCodeAt(0)}).map(function(n){return r.a.createElement(E,{key:"".concat(t,"\u2192").concat(n),name:"".concat(t,"\u2192").concat(n),source:t,dest:n,total:u.length,size:b,distance:e[t][n]})}))}),r.a.createElement(A,{startAt:n,endAt:c,routes:i,dispatch:s,size:b,total:u.length}))}var x={pointA:void 0,pointB:void 0,routes:[]},D=r.a.createContext(x);n(22);function R(t){var e=t.start,n=t.route,a=t.name;return r.a.createElement("span",{className:"route-detail"},r.a.createElement("span",{className:"route-detail__point"},e),n.map(function(t){return r.a.createElement(r.a.Fragment,{key:"".concat(a).concat(t.goingTowards)}," ","\u2192 ",r.a.createElement("span",{className:"route-detail__point"},t.goingTowards)," ",r.a.createElement("span",{className:"route-detail__distance"},t.distance))}))}function S(t){var e=t.name,n=t.start,a=t.routes;return 0===a.length?null:r.a.createElement("ul",{className:"route-details"},a.map(function(t,a){return r.a.createElement("li",{key:"".concat(e).concat(a),className:"route-details__detail"},r.a.createElement(R,{name:"".concat(e).concat(a),start:n,route:t}))}))}function M(t,e){if(0!==e.length&&e[e.length-1].goingTowards===t)return e.reduce(function(t,e){return t+e.distance},0)}n(23);function I(t){var e=t.busy,n=t.reset,c=t.cheeky,o=t.setCheeky,i=Object(a.useState)(!1),s=Object(l.a)(i,2),u=s[0],p=s[1],m=Object(a.useCallback)(function(){o(!1),p(!0)},[o]),d=Object(a.useCallback)(function(){p(!1),n()},[n]);return r.a.createElement(D.Consumer,null,function(t){var n=t.pointA,a=t.pointB,o=t.routes;if(!n)return r.a.createElement("div",{className:"instructions"},r.a.createElement("p",{className:"instructions__text"},"Click on your first point."));if(!a)return r.a.createElement("div",{className:"instructions"},r.a.createElement("p",{className:"instructions__text"},"Measuring the shortest distance from point"," ",r.a.createElement("span",{className:"instructions__selected-point"},n),"."),r.a.createElement("p",{className:"instructions__text"},"Now click on your second point."));if(!e){var i=function(t,e,n){return 0===n.length?[]:n.reduce(function(t,n){var a=t.distance,r=t.best,c=M(e,n);return void 0===c?{distance:a,best:r}:0===r.length||c<a?{distance:c,best:[n]}:c>a?{distance:a,best:r}:{distance:a,best:[].concat(Object(w.a)(r),[n])}},{distance:0,best:[]}).best}(0,a,o);return r.a.createElement("div",{className:"instructions"},r.a.createElement("p",{className:"instructions__text"},"Done!"),0===i.length&&r.a.createElement("p",{className:"instructions__text"},"Oh dear. There are no routes between"," ",r.a.createElement("span",{className:"instructions__selected-point"},n)," ","and"," ",r.a.createElement("span",{className:"instructions__selected-point"},a),".")," ",1===i.length&&r.a.createElement("p",{className:"instructions__text"},"The best route is:"," ",r.a.createElement(R,{name:"best",start:n,route:i[0]}),"with a distance of"," ",r.a.createElement("span",{className:"instructions__distance"},M(a,i[0])))," ",i.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"instructions__text"},"The best routes are:"),r.a.createElement(S,{start:n,name:"best",routes:i})),i.length>0&&c&&!u&&r.a.createElement("button",{className:"instructions__button",type:"button",onClick:m},"Would you like to view this solution using Dijkstra's algorithm?"),u&&r.a.createElement("p",{className:"instructions__cheeky"},"You best hire me, then"," ",r.a.createElement("span",{role:"img","aria-label":"Wink wink"},"\ud83d\ude09")),r.a.createElement("button",{className:"instructions__button",type:"button",onClick:d},"Click to reset"),!!o.length&&r.a.createElement("p",{className:"instructions__text"},"Here's the routes I tried:"),r.a.createElement(S,{start:n,name:"all",routes:o}))}return r.a.createElement("div",{className:"instructions"},r.a.createElement("p",{className:"instructions__text"},"Finding the shortest route from"," ",r.a.createElement("span",{className:"instructions__selected-point"},n)," to"," ",r.a.createElement("span",{className:"instructions__selected-point"},a),"..."),r.a.createElement(S,{start:n,name:"all",routes:o}))})}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach(function(e){Object(f.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function K(t,e){switch(e.type){case"RESET":return[];case"INIT":return Object(w.a)(e.routes);case"START":var n=[].concat(Object(w.a)(e.unstartedRoute.beenAt.slice(1)),[e.unstartedRoute.waypoint.goingTowards]);return t.map(function(t){var e=t.map(function(t){return t.goingTowards});return e.length!==n.length||e.some(function(t,e){return t!==n[e]})?t:t.map(function(t){return t.started?t:B({},t,{started:!0})})});case"END":var a=[].concat(Object(w.a)(e.unstartedRoute.beenAt.slice(1)),[e.unstartedRoute.waypoint.goingTowards]);return t.reduce(function(t,n){var r=n.map(function(t){return t.goingTowards});if(r.length!==a.length||r.some(function(t,e){return t!==a[e]}))return[].concat(Object(w.a)(t),[n]);var c=n.map(function(t){return t.completed?t:B({},t,{completed:!0})}),o=p[e.unstartedRoute.waypoint.goingTowards],i=Object.keys(o).filter(function(t){return!e.unstartedRoute.beenAt.some(function(e){return t===e})});return e.unstartedRoute.waypoint.goingTowards===e.targetPoint||0===i.length?[].concat(Object(w.a)(t),[c]):[].concat(Object(w.a)(t),Object(w.a)(i.map(function(t){return[].concat(Object(w.a)(c),[{goingTowards:t,distance:o[t],started:!1,completed:!1}])})))},[]);default:return t}}var F=function(t){return!t.completed};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){var t=Object(a.useState)(void 0),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(void 0),i=Object(l.a)(o,2),d=i[0],f=i[1],b=Object(a.useReducer)(K,[]),h=Object(l.a)(b,2),g=h[0],y=h[1],O=Object(a.useState)(!1),E=Object(l.a)(O,2),w=E[0],v=E[1],_=Object(a.useState)(!0),N=Object(l.a)(_,2),k=N[0],P=N[1],T=Object(a.useCallback)(function(){var t=Object(u.a)(s.a.mark(function t(e){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n?d||(f(e),v(!0),0===(a=Object.keys(p[n])).length?v(!1):y({type:"INIT",routes:a.map(function(t){return[{goingTowards:t,distance:p[n][t],completed:!1,started:!1}]})})):c(e);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),[n,d]),A=Object(a.useCallback)(function(){c(void 0),f(void 0),y({type:"RESET"}),v(!1)},[]);return Object(a.useEffect)(function(){w&&g.length&&n&&(0===j(n,F)(g).length&&v(!1))},[w,n,g]),r.a.createElement(D.Provider,{value:{pointA:n,pointB:d,routes:g}},r.a.createElement("article",{className:"app"},r.a.createElement("section",{className:"app__header"},r.a.createElement(m,null)),r.a.createElement("section",{className:"app__body"},r.a.createElement(C,{points:p,pointA:n,pointB:d,clickPoint:w||n&&d?void 0:T,routes:g,dispatch:y})),r.a.createElement("section",{className:"app__info"},r.a.createElement(I,{busy:w,reset:A,cheeky:k,setCheeky:P}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.03d2d143.chunk.js.map
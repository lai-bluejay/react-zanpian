(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/shell.js":function(t,e,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/react-redux/es/index.js"),u=function(t){return t.substr(1).split("&").reduce(function(t,e){if(e){var n=e.split("=");t[n[0]]=n[1]||""}return t},{})};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,n,o,r,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(o,r)}e.a=function(t){t.loadData||(t.loadData=function(t){return t.store,t.match,new Promise(function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function u(t){p(i,o,r,u,c,"next",t)}function c(t){p(i,o,r,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({code:200});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())});var e=function(e){function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,l(n).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,r.a.Component),function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(n,[{key:"componentWillMount",value:function(){var t=this.props.location.search;this.props.location.params=t?u(t):null}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(t,this.props))}}]),n}();!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(e,"defaultProps",{loadData:t.loadData||null}),e.contextTypes={},e.propTypes={};return Object(i.b)(function(t){return{}},function(t,e){return{}})(e)}},"./src/pages/list/index.js":function(t,e,n){"use strict";n.r(e);var o,r,i=n("./node_modules/react/index.js"),u=n.n(i),c=n("./node_modules/react-router-dom/es/withRouter.js"),a=n("./node_modules/redux/es/redux.js"),s=n("./node_modules/react-redux/es/index.js"),l=n("./src/actions/list.js"),f=n("./src/reducers/list.js");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,o,r,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(o,r)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var v,w=(o=Object(s.b)(function(t,e){return{list:Object(f.b)(t,"list")}},function(t){return{listLoad:Object(a.b)(l.a,t)}}),Object(c.a)(r=o(r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?h(t):e}(this,b(e).call(this,t))).state={limit:20,order:"addtime",day:365},n.load=n.load.bind(h(h(n))),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,u.a.Component),function(t,e,n){e&&d(t.prototype,e),n&&d(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.list,n=t.scrollLoad;e.data||this.load(),n&&ArriveFooter.add("list",this.load)}},{key:"componentWillUnmount",value:function(){this.props.scrollLoad&&ArriveFooter.remove("list")}},{key:"load",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function u(t){y(i,o,r,u,c,"next",t)}function c(t){y(i,o,r,u,c,"throw",t)}u(void 0)})}}(regeneratorRuntime.mark(function t(){var e,n,o,r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.listLoad,n=this.state,o=n.limit,r=n.order,i=n.day,t.next=4,e({id:"list",limit:o,order:r,day:i});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.list,e=t.data,n=void 0===e?[]:e;t.loading;return u.a.createElement("div",{className:"card"},u.a.createElement("h5",{className:"card-header"},"listlist"),n.map(function(t){return u.a.createElement("div",{key:t.id,style:{height:100}},t.title)}))}}]),e}())||r)||r),j=n("./src/components/shell.js");function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"BangumiList",function(){return x});var x=Object(j.a)(v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,P(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,u.a.Component),function(t,e,n){e&&_(t.prototype,e),n&&_(t,n)}(e,[{key:"render",value:function(){return[u.a.createElement(w,{key:"list",scrollLoad:!0})]}}]),e}())||v;e.default=x}}]);
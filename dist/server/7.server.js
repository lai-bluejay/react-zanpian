exports.ids=[7],exports.modules={47:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=(n(8),n(11)),a=function(t){return t.substr(1).split("&").reduce(function(t,e){if(e){var n=e.split("=");t[n[0]]=n[1]||""}return t},{})};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e,n,o,r,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(o,r)}e.a=function(t){t.loadData||(t.loadData=function(t){return t.store,t.match,new Promise(function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function a(t){s(i,o,r,a,u,"next",t)}function u(t){s(i,o,r,a,u,"throw",t)}a(void 0)})}}(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({code:200});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())});var e=function(e){function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,f(n).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,r.a.Component),function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(n,[{key:"componentWillMount",value:function(){var t=this.props.location.search;this.props.location.params=t?a(t):null}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(t,this.props))}}]),n}();!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(e,"defaultProps",{loadData:t.loadData||null}),e.contextTypes={},e.propTypes={};return Object(i.connect)(function(t){return{}},function(t,e){return{}})(e)}},48:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(27),a=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,o["Component"]),function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(e,[{key:"render",value:function(){var t={},e=this.props,n=e.title,o=e.description,i=e.canonical,u=e.meta;return n&&(t.title=n),o&&(t.description=o),i&&(t.canonical=i),u&&(t.title=u),r.a.createElement(a.a,t)}}]),e}();e.a=s},49:function(t,e,n){"use strict";var o,r,i=n(0),a=n.n(i),u=n(4),c=n(8),l=n(11),f=n(18),p=n(16);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=(o=Object(l.connect)(function(t,e){return{play:Object(p.b)(t,e.match.params.id)}},function(t){return{playlist:Object(c.bindActionCreators)(f.a,t)}}),Object(u.withRouter)(r=o(r=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,m(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,a.a.Component),function(t,e,n){e&&y(t.prototype,e),n&&y(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id,e=this.props,n=e.play,o=e.playlist;n&&n.data||o({id:t})}},{key:"render",value:function(){var t=this.props,e=t.play,n=e.data,o=void 0===n?{}:n,r=e.loading,i=t.match,c=(o.Data||{}).playurls||[],l=i.params,f=l.id,p=l.pid,s=(o.Vod||[])[0];return a.a.createElement("div",{className:"card"},a.a.createElement("h5",{className:"card-header"},"播放列表"),a.a.createElement("div",{className:"card-body"},r?a.a.createElement("div",null,"loading..."):null,a.a.createElement("ul",null,c.map(function(t){return a.a.createElement("li",{key:t[1]},p===t[1].toString()?a.a.createElement(u.Link,{style:{color:"red"},to:"/play/".concat(f,"/").concat(t[1])},s," ",t[0]):a.a.createElement(u.Link,{to:"/play/".concat(f,"/").concat(t[1])},s," ",t[0]))}))))}}]),e}())||r)||r);e.a=h},50:function(t,e,n){"use strict";var o,r,i=n(0),a=n.n(i),u=n(4),c=n(8),l=n(11),f=n(17),p=n(15),s=n(48);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=(o=Object(l.connect)(function(t,e){return{info:Object(p.b)(t,e.match.params.id)}},function(t){return{detail:Object(c.bindActionCreators)(f.a,t)}}),Object(u.withRouter)(r=o(r=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,d(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,a.a.Component),function(t,e,n){e&&b(t.prototype,e),n&&b(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id,e=this.props,n=e.info,o=e.detail;n&&n.data||o({id:t})}},{key:"render",value:function(){var t=this.props,e=t.info,n=e.data,o=void 0===n?{}:n,r=e.loading,i=t.isMeta,c=t.subTitle;return a.a.createElement("div",{className:"detail"},r?a.a.createElement("div",null,"loading..."):null,i?a.a.createElement(s.a,{title:o.name,keywords:o.name,description:o.name}):null,a.a.createElement(u.Link,{to:"/bangumi/".concat(o.id)},o.name),c?" ".concat(c):null)}}]),e}())||r)||r);e.a=v},60:function(t,e,n){"use strict";n.r(e),n.d(e,"Play",function(){return w});var o,r,i=n(0),a=n.n(i),u=n(8),c=n(11),l=n(29),f=n(20),p=n(49),s=n(50),y=n(47),b=n(48);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=(o=Object(c.connect)(function(t,e){return{player:Object(f.b)(t,e.match.params.id,e.match.params.pid)}},function(t){return{playerLoad:Object(u.bindActionCreators)(l.a,t)}}),Object(y.a)(r=o(r=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,v(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,a.a.Component),function(t,e,n){e&&d(t.prototype,e),n&&d(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params,e=t.id,n=t.pid,o=this.props,r=o.player,i=o.playerLoad;r&&r.data||i({id:e,pid:n})}},{key:"playName",value:function(t){var e=[];return e.tudou="土豆",e.youku="优酷",e.iqiyi="爱奇艺",e.letv="乐视",e.sohu="搜狐",e.pptv="聚力",e.qq="腾讯",e.letvyun="乐视云",e.bilibili="哔哩哔哩",e.acfun="A站",e.other="其他",e.pv="PV",e.bgm="BGM",e.ed="ED",e.cm="CM",e.op="OP",e.mad="MAD",e.other="其他A",e.otherB="其他B",e.otherC="其他C",e.otherD="其他D",e.nodel="未删减",e[t]}},{key:"player",value:function(t){for(var e=[],n=0;n<t.length;n++){var o=(t[n]||{}).playurls||[];o.length>0&&e.push({type:t[n].playname,vid:o[1],name:this.playName(t[n].playname),title:o[0],url:o[2]})}return e}},{key:"render",value:function(){var t=this.props.player,e=t.data,n=void 0===e?{}:e,o=t.loading,r=n.Data||[],i=this.player(r),u=(n.Vod||[])[0],c=((r[0]||{}).playurls||[])[0];return a.a.createElement("div",null,o?a.a.createElement("div",null,"loading..."):null,a.a.createElement(b.a,{title:"".concat(u," ").concat(c),keywords:u,description:u}),a.a.createElement(s.a,{subTitle:c}),i.map(function(t){return a.a.createElement("li",{key:t.type},t.title,"(",t.type,")",t.name,":",t.vid)}),a.a.createElement(p.a,null))}}]),e}())||r)||r);e.default=w}};
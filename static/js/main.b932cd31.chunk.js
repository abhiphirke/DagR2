(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{309:function(e,n,t){e.exports=t(768)},314:function(e,n,t){},315:function(e,n,t){},370:function(e,n){},372:function(e,n){},766:function(e,n,t){},767:function(e,n,t){},768:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(305),r=t.n(i),o=(t(314),t(55)),s=t(56),l=t(58),u=t(57),v=t(59),m=(t(315),t(306)),p=t.n(m),d=(t(765),t(766),function(e){function n(){return Object(o.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.link&&p()({domNode:this.docRef,url:this.props.link,plugins:[function(){return{statePlugins:{spec:{wrapSelectors:{allowTryItOutFor:function(){return function(){return!1}}}}}}}]})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"contents"},c.a.createElement("div",{ref:function(n){e.docRef=n}}))}}]),n}(a.Component)),f=(t(767),function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).state={navigator:null,activeApp:null,activeVersion:null,activeService:null},t.componentWillMount=function(){t.getNavigatorConfig()},t.componentDidUpdate=function(){},t.getNavigatorConfig=function(){fetch("docs/navigator.json").then(function(e){return e.json()}).then(function(e){return t.setState({navigator:e})})},t.appClicked=function(e){return t.state.activeApp!==e.name&&t.setState({activeApp:e.name,activeVersion:null,activeService:null})},t.versionClicked=function(e){return t.state.activeVersion!==e.name&&t.setState({activeVersion:e.name})},t.serviceClicked=function(e){return t.state.activeService!==e.name&&t.setState({activeService:e.name},function(){return t.props.onChange(e.jsonUrl)})},t.renderVersions=function(e){var n=t.state.activeVersion;return e.versions.map(function(e,a){return c.a.createElement("div",{key:"v".concat(a),className:"version"},c.a.createElement("div",{className:"version-title"+(e.name===n?" selected":""),onClick:function(){return t.versionClicked(e)}},e.name),c.a.createElement("div",{className:"version-children"},n===e.name&&t.renderServices(e)))})},t.renderServices=function(e){var n=t.state.activeService;return e.services.map(function(e,a){return c.a.createElement("div",{key:"s".concat(a),className:"service"+(e.name===n?" selected":""),onClick:function(){return t.serviceClicked(e)}},e.name)})},t}return Object(v.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.navigator,a=n.activeApp;return t?c.a.createElement("div",null,t.apps.map(function(n,t){return c.a.createElement("div",{key:"a".concat(t),className:"app"},c.a.createElement("div",{className:"app-title"+(n.name===a?" selected":""),onClick:function(){return e.appClicked(n)}},n.name),c.a.createElement("div",{className:"app-children"},a===n.name&&e.renderVersions(n)))})):null}}]),n}(a.Component)),h=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).onChange=function(e){return t.setState({link:e})},t.state={link:""},t}return Object(v.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.link;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("img",{className:"logo",src:"images/tieto-logo.png",alt:""}),c.a.createElement("p",{className:"pagetitle"},"Credit Solutions and Services"),c.a.createElement("img",{src:"images/collections.jpeg",alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"navbar"},c.a.createElement(f,{onChange:this.onChange})),c.a.createElement("div",{className:"apicontents"},c.a.createElement(d,{link:e}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[309,1,2]]]);
//# sourceMappingURL=main.b932cd31.chunk.js.map
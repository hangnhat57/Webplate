!function(e,t,o){function n(e){return"[object Function]"==m.call(e)}function c(e){return"string"==typeof e}function r(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function i(){var e=h.shift();y=1,e?e.t?d(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),i()):y=0}function l(e,o,n,c,r,l,a){function p(t){if(!j&&s(u.readyState)&&(v.r=j=1,!y&&i(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&d(function(){k.removeChild(u)},50);for(var n in w[o])w[o].hasOwnProperty(n)&&w[o][n].onload()}}var a=a||f.errorTimeout,u=t.createElement(e),j=0,m=0,v={t:n,s:o,e:r,a:l,x:a};1===w[o]&&(m=1,w[o]=[]),"object"==e?u.data=o:(u.src=o,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){p.call(this,m)},h.splice(c,0,v),"img"!=e&&(m||2===w[o]?(k.insertBefore(u,F?null:g),d(p,a)):w[o].push(u))}function a(e,t,o,n,r){return y=0,t=t||"j",c(e)?l("c"==t?b:P,e,t,this.i++,o,n,r):(h.splice(this.i++,0,e),1==h.length&&i()),this}function p(){var e=f;return e.loader={load:a,i:0},e}var u,f,j=t.documentElement,d=e.setTimeout,g=t.getElementsByTagName("script")[0],m={}.toString,h=[],y=0,v="MozAppearance"in j.style,F=v&&!!t.createRange().compareNode,k=F?j:g.parentNode,j=e.opera&&"[object Opera]"==m.call(e.opera),j=!!t.attachEvent&&!j,P=v?"object":j?"script":"img",b=j?"script":P,E=Array.isArray||function(e){return"[object Array]"==m.call(e)},R=[],w={},A={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,o,n,e=e.split("!"),c=R.length,r=e.pop(),s=e.length,r={url:r,origUrl:r,prefixes:e};for(o=0;o<s;o++)n=e[o].split("="),(t=A[n.shift()])&&(r=t(r,n));for(o=0;o<c;o++)r=R[o](r);return r}function s(e,c,r,s,i){var l=t(e),a=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(c&&(c=n(c)?c:c[e]||c[s]||c[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,c,r,s,i):(w[l.url]?l.noexec=!0:w[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":o,l.noexec,l.attrs,l.timeout),(n(c)||n(a))&&r.load(function(){p(),c&&c(l.origUrl,i,s),a&&a(l.origUrl,i,s),w[l.url]=2})))}function i(e,t){function o(e,o){if(e){if(c(e))o||(u=function(){var e=[].slice.call(arguments);f.apply(this,e),j()}),s(e,u,t,0,a);else if(Object(e)===e)for(l in i=function(){var t,o=0;for(t in e)e.hasOwnProperty(t)&&o++;return o}(),e)e.hasOwnProperty(l)&&(!o&&!--i&&(n(u)?u=function(){var e=[].slice.call(arguments);f.apply(this,e),j()}:u[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),j()}}(f[l])),s(e[l],u,t,l,a))}else!o&&j()}var i,l,a=!!e.test,p=e.load||e.both,u=e.callback||r,f=u,j=e.complete||r;o(a?e.yep:e.nope,!!p),p&&o(p)}var l,a,u=this.yepnope.loader;if(c(e))s(e,0,u,0);else if(E(e))for(l=0;l<e.length;l++)a=e[l],c(a)?s(a,0,u,0):E(a)?f(a):Object(a)===a&&i(a,u);else Object(e)===e&&i(e,u)},f.addPrefix=function(e,t){A[e]=t},f.addFilter=function(e){R.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=p(),e.yepnope.executeStack=i,e.yepnope.injectJs=function(e,o,n,c,l,a){var p,u,j=t.createElement("script"),c=c||f.errorTimeout;j.src=e;for(u in n)j.setAttribute(u,n[u]);o=a?i:o||r,j.onreadystatechange=j.onload=function(){!p&&s(j.readyState)&&(p=1,o(),j.onload=j.onreadystatechange=null)},d(function(){p||(p=1,o(1))},c),l?j.onload():g.parentNode.insertBefore(j,g)},e.yepnope.injectCss=function(e,o,n,c,s,l){var a,c=t.createElement("link"),o=l?i:o||r;c.href=e,c.rel="stylesheet",c.type="text/css";for(a in n)c.setAttribute(a,n[a]);s||(g.parentNode.insertBefore(c,g),d(o,0))}}(this,document),function(){"use strict";var e=!1,t=document.getElementById("rocket").getAttribute("src").replace("launch.js",""),o=document.getElementById("rocket-content"),n={config:t+"cockpit.json",engine:{css:t+"engine/css/",js:t+"engine/js/"},project:{component:t+"project/component/",css:t+"project/css/",iconFont:{fontAwesome:t+"project/font-awesome/css/font-awesome.min.css",icoMoon:t+"project/icomoon/style.css"},js:t+"project/js/"},root:t},c={engine:{files:[n.engine.css+"styles.min.css",n.engine.js+"scripts.min.js"],filesLight:[n.engine.css+"styles-light.min.css",n.engine.js+"scripts-light.min.js"]},project:{allowedFileTypes:["css","js"],componentsFirst:[],components:[],css:[],js:[],iconFont:!1}},r={activatePage:function(){null!==o?(o.removeAttribute("style"),document.getElementById("rocket-page-loader").parentNode.removeChild(document.getElementById("rocket-page-loader"))):Rocket.dom.body.removeAttribute("style"),r.log("Rocket: Page show...successful")},checkProjectExtension:function(e){return c.project.allowedFileTypes.indexOf(Rocket.string.lowercase.all(Rocket.get.extension(e)))>-1},log:function(t){return!!(window&&window.console&&e)&&void(e.engine&&"boolean"==typeof e.engine.log&&e.engine.log&&console.log(t))},getEngineFiles:function(){return e.engine&&"boolean"==typeof e.engine.light&&e.engine.light?c.engine.filesLight:c.engine.files},getJSON:function(e,t){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===this.readyState)return 0===this.status||this.status>=200&&this.status<300?t(!1,JSON.parse(this.responseText)):t(!0)},o.open("GET",e),o.send()},loadEngine:function(e){yepnope({load:r.getEngineFiles(),complete:function(){return r.log("Rocket: Engine files load...successful"),e()}})},loadIconFont:function(){c.project.iconFont&&("icomoon"==c.project.iconFont?yepnope({load:n.project.iconFont.icoMoon,complete:function(){r.log("Rocket: IcoMoon load...successful")}}):"font-awesome"==c.project.iconFont&&yepnope({load:n.project.iconFont.fontAwesome,complete:function(){r.log("Rocket: Font awesome load...successful")}}))},loadProject:function(){r.setProjectFileLoads(),r.loadIconFont(),c.project.componentsFirst.length>0?r.loadProjectComponentsFirst():c.project.components.length>0?r.loadProjectComponents():r.loadProjectFiles()},loadProjectComponent:function(e,t){r.getJSON(n.project.component+e+"/rocket.json",function(o,c){if(o)return t(!1);var s=[];if("object"==typeof c.files)for(var i=0,l=c.files.length;i<l;i++)r.checkProjectExtension(c.files[i])&&s.push(n.project.component+e+"/"+c.files[i]);else r.checkProjectExtension(c.files)&&s.push(n.project.component+e+"/"+c.files);return s.length<1?t(!1):void yepnope({load:s,complete:function(){t(!0)}})})},loadProjectComponents:function(){for(var e=c.project.components.length,t=0,o=c.project.components.length;t<o;t++)r.loadProjectComponent(c.project.components[t],function(){e--,0===e&&(r.log("Rocket: Components load...successful"),r.loadProjectFiles())})},loadProjectComponentsFirst:function(){for(var e=c.project.componentsFirst.length,t=0,o=c.project.componentsFirst.length;t<o;t++)r.loadProjectComponent(c.project.componentsFirst[t],function(){e--,0===e&&(r.log("Rocket: Components first load...successful"),c.project.components.length>0?r.loadProjectComponents():r.loadProjectFiles())})},loadProjectFiles:function(){var e=c.project.css.length,t=c.project.js.length;e<1&&t<1&&r.activatePage(),e>0&&yepnope({load:c.project.css,complete:function(){e=0,r.log("Rocket: Project CSS load...successful"),0===t&&r.activatePage()}}),t>0&&yepnope({load:c.project.js,complete:function(){t=0,r.log("Rocket: Project JS load...successful"),0===e&&r.activatePage()}})},pageLoader:function(){if(null!==o){var e=document.createElement("div"),t="Loading",n=0;o.style.display="none",e.id="rocket-page-loader",e.style.margin="0px auto",e.style.paddingTop="150px",e.style.color="#ccd1d9",e.style.fontSize="20px",e.style.fontFamily="Arial, Helvetica, sans-serif",e.style.textAlign="center",document.getElementsByTagName("body")[0].appendChild(e);var c=setInterval(function(){n++,null!==document.getElementById("rocket-page-loader")?document.getElementById("rocket-page-loader").innerHTML=t+new Array(n%5).join("."):clearInterval(c)},300)}},setProjectFileLoads:function(){if(!e.project)return!1;var t=!1,o="",r=Rocket.url.all();if(c.project.componentsFirst=Rocket.helper.setDefault(e.project.componentsFirst,[]),c.project.components=Rocket.helper.setDefault(e.project.components,[]),c.project.css=Rocket.helper.setDefault(e.project.css,[]),c.project.js=Rocket.helper.setDefault(e.project.js,[]),c.project.iconFont=Rocket.helper.setDefault(e.project.iconFont),e.project.page)for(var s=0,i=e.project.page.length;s<i;s++){var l=e.project.page[s];if(l.url.indexOf("*")>-1?r.current.indexOf(l.url.substring(0,l.url.length-1))>-1&&(t=!0):r.current===r.base+l.url&&(t=!0),t){c.project.iconFont=Rocket.helper.setDefault(l.iconFont,c.project.iconFont),l.overwrite===!0?(c.project.componentsFirst=Rocket.helper.setDefault(l.componentsFirst,[]),c.project.components=Rocket.helper.setDefault(l.components,[]),c.project.css=Rocket.helper.setDefault(l.css,[]),c.project.js=Rocket.helper.setDefault(l.js,[])):(Array.isArray(l.componentsFirst)&&(c.project.componentsFirst=c.project.componentsFirst.concat(l.componentsFirst)),Array.isArray(l.components)&&(c.project.components=c.project.components.concat(l.components)),Array.isArray(l.css)&&(c.project.css=c.project.css.concat(l.css)),Array.isArray(l.js)&&(c.project.js=c.project.js.concat(l.js)));break}}if(e.cache&&e.cache.bust&&(o="?ts="+e.cache.bust),c.project.css.length>0)for(var s=0,i=c.project.css.length;s<i;s++)c.project.css[s]=n.project.css+c.project.css[s]+o;if(c.project.js.length>0)for(var s=0,i=c.project.js.length;s<i;s++)c.project.js[s]=n.project.js+c.project.js[s]+o;return!0},init:function(){r.pageLoader(),r.getJSON(n.config,function(t,o){if(t)throw new Error("Rocket: Not initialised because the cockpit.json file was not found.");e=o,r.loadEngine(function(){r.loadProject()})})}};r.init()}();
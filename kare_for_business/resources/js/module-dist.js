!function(t){"use strict";t.detectMobile=t.detectMobile||function(){var t,o=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(o=!0),o},t.extend=t.extend||function(t,o){var e;for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e]);return t},t.throttle=t.throttle||function(t,o,e){var i,n;return o||(o=250),function(){var a=e||this,r=+new Date,l=arguments;i&&r<i+o?(clearTimeout(n),n=setTimeout((function(){i=r,t.apply(a,l)}),o)):(i=r,t.apply(a,l))}},t.debounce=t.debounce||function(t,o,e){var i;return function(){var n=this,a=arguments,r=function(){i=null,e||t.apply(n,a)},l=e&&!i;clearTimeout(i),i=setTimeout(r,o),l&&t.apply(n,a)}},t.random=t.random||function(){return Math.floor(1e3*Math.random())},t.round=t.round||function(t){return Math.round(1e4*t)/1e4},t.setUniqueId=t.setUniqueId||function(t){return"string"==typeof t?t.toLowerCase().replace(/[^a-z0-9)]/gi,""):Math.floor(1e3*Math.random())},t.hyphenate=t.hyphenate||function(t){var o={};return o[t]||(o[t]=t.replace(/([A-Z])/g,(function(t){return"-"+t[0].toLowerCase()})))}}(this),function(t,o,e,i){"use strict";var n=n||detectMobile(),a=function(i,a){var r={appId:"",$el:"string"==typeof i?t(i):i,length:0,scope:[],visible:[],window:{scrollTop:0}};if(!r.$el.length)return!1;r.appId=setUniqueId(r.$el.attr("id"))+random();t(e);var l=t(o),s=t("html"),c=(t("body"),r.$el.attr("data-plugin-options"));c=void 0!==c?t.parseJSON(c):{};var p={namespace:".app",countUpEl:".inview-countup",countUpRestart:!1,darkmode:!1,darkmodeToggleClass:!1,onInit:m,onResize:m,onScroll:m,thresholdTop:!0===n?0:.15,thresholdBottom:!0===n?0:.15,once:!1,onceAtMobile:!0,throttleScrollDelay:100},d={},u={scroll:null};function m(){}var h=function(){var t=function(t,o){return Math.floor(t*o)};r.window.height=o.innerHeight||e.documentElement.clientHeight||e.body.clientHeight||l.height(),r.window.thresholdTop=t(r.window.height,!0===n?0:d.thresholdTop),r.window.thresholdBottom=t(r.window.height,!0===n?0:d.thresholdBottom)},w=function(){r.scope=[];for(var t={},o=0;o<r.length;o++){var e=r.$el.eq(o),i=e.offset().top,n=e[0].offsetHeight||e.height(),a=i+.5*n;t={top:Math.ceil(i),middle:Math.round(a),bottom:Math.floor(i+n),countUp:!!e.find(d.countUpEl).length,dark:!0===d.darkmode&&e.attr("data-dark")||!1},r.scope.push(t)}},v=function(){r.$el=t(i),r.length=r.$el.length},f={scroll:function(){null!==u.scroll&&(clearTimeout(u.scroll),u.scroll=null),u.scroll=setTimeout((function(){var i=function(o,e){var i=o.find(d.countUpEl),n=function(t){t.prop("Counter",0).stop().text("0")};!1===e&&!0===d.countUpRestart?i.each((function(){var o=t(this);if(!0!==o.hasClass("is-count-upped"))return!1;n(o),o.removeClass("is-count-upped")})):i.each((function(o){var e=t(this),i=e.data("countup")||e.text();!function(){if(e.hasClass("is-count-upped"))return!1;n(e),e.addClass("is-count-upped").animate({Counter:i},{duration:1700,easing:"swing",step:function(t){e.text(Math.ceil(t))}})}()}))};r.window.top=o.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||l.scrollTop(),r.window.middle=r.window.top+.5*r.window.height,r.window.bottom=r.window.top+r.window.height,function(){r.visibleIdx=[],r.invisibleIdx=[];for(var t=r.window.height,o=0;o<r.scope.length;o++){var e=r.scope[o];r.$el.eq(o);e.containTop=r.window.bottom>=e.top,e.containBottom=r.window.top<=e.bottom,e.contain=e.containTop&&e.containBottom,e.inviewTop=r.window.bottom-r.window.thresholdTop>=e.top,e.inviewBottom=r.window.top+r.window.thresholdBottom<=e.bottom,e.inview=e.inviewTop&&e.inviewBottom;var i=Math.abs(e.middle-r.window.middle);if(i<=t&&(r.currentIdx=o,t=i),!0!==e.contain&&r.invisibleIdx.push(o),!0===e.inview&&r.visibleIdx.push(o),!0===d.darkmode){var n=e.top-40<=r.window.top&&e.bottom>=r.window.top+40,a=e.bottom+40>=r.window.bottom&&e.top<=r.window.bottom-40;r.topIdx=!0===n?o:r.topIdx,r.bottomIdx=!0===a?o:r.bottomIdx}}}(),function(){if(void 0===r.currentIdx)return!1;r.$active=r.$el.eq(r.currentIdx),r.$el.removeClass("in-current"),r.$active.addClass("in-current");for(var t=function(t){if(!t.length)return!1;t.removeClass("in").attr("data-scroll","out")},o=0;o<r.invisibleIdx.length;o++){var e=r.$el.eq(r.invisibleIdx[o]);!0===n?!0!==d.once&&!0!==d.onceAtMobile&&t(e):!0!==d.once&&t(e),1==r.scope[r.invisibleIdx[o]].countUp&&i(e,!1)}for(var a=0;a<r.visibleIdx.length;a++){var l=r.$el.eq(r.visibleIdx[a]);l.addClass("in inviewed").attr("data-scroll","in"),!0===r.scope[r.visibleIdx[a]].countUp&&i(l,!0)}!0===d.darkmode&&(void 0===r.topIdx&&(r.topIdx=0),void 0===r.bottomIdx&&(r.bottomIdx=r.length-1),s.toggleClass("is-dark-middle",r.scope[r.currentIdx].dark),s.toggleClass("is-dark-top",r.scope[r.topIdx].dark),s.toggleClass("is-dark-bottom",r.scope[r.bottomIdx].dark),!0===d.darkmodeToggleClass&&(r.$el.removeClass("in-top in-bottom"),r.$el.eq(r.topIdx).toggleClass("in-top"),r.$el.eq(r.bottomIdx).toggleClass("in-bottom")))}(),function(t,e){if(e=null===e?"":e,"function"!=typeof(t="string"==typeof t?o[t]:t))return!1;t.call(null,r,e)}(d.onScroll)}),10)},resize:function(){v(),h(),w(),this.scroll()},init:function(){f.resize();var t=debounce((function(){f.resize()}),300),o=throttle((function(){f.scroll()}),d.throttleScrollDelay);l.on("resize"+d.namespace,t),l.on("scroll"+d.namespace,o)},destroy:function(){l.off("scroll"+d.namespace,this.scroll)}};function g(){d=t.extend({},p,a,c),f.init()}return g(),{init:g,refresh:function(){console.log("refresh")}}};t.fn.plugin=function(t){return this.each((function(){new a(this,t)}))},o.BaseInView=a}(jQuery,window,document),$((function(){})),function(t){"use strict";t.detectMobile=t.detectMobile||function(){var t,o=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(o=!0),o}}(this),function(t,o,e,i){"use strict";var n=n||detectMobile(),a=a||t(e),r=function(e,i){var r=t.extend({},{wrapEl:".elastic-wrap",speedIn:.8,speedOut:1.2,distance:25},i),l={},s=null,c=!1,p=function(t){TweenMax.to(t,r.speedOut,{x:0,y:0})};function d(){for(var t=0;t<l.itemLength;t++)p(l.$el);!0===c&&l.$wrap.attr("data-elastic-wrap","out")}function u(t,o,e){if(!0!==(t.x<e.left-30||t.x>e.right+30||t.y<e.top-300||t.y>e.bottom+300)){var i={x:e.centerX-t.x+o.width()/2,y:e.centerY-t.y};l.$wrap.attr("data-elastic-wrap","in"),TweenMax.to(o,r.speedIn,{x:-Math.round(i.x),y:-Math.round(i.y)})}else l.$wrap.attr("data-elastic-wrap","out"),p(o)}function m(t,o){var e,i,n,a,l,s=o.data("elastic-distance")?o.data("elastic-distance"):r.distance,c=(i=(e=o).width(),n=e.height(),a=parseInt(e.width()/2,10),{x:(l=e.offset()).left+a,y:l.top+a,width:i,height:n}),d={x:c.x-t.x,y:c.y-t.y};Math.sqrt(d.x*d.x+d.y*d.y)<s?TweenMax.to(o,r.speedIn,{x:-Math.round(d.x),y:-Math.round(d.y)}):p(o)}var h=function(t){clearTimeout(s);for(var o,e,i={x:t.pageX,y:t.pageY},n=0;n<l.itemLength;n++){var a=l.$el.eq(n);!0===c?u(i,a,(o=void 0,e=void 0,o=l.$wrap,{top:(e=o.offset()).top,left:e.left,centerX:e.left+o.width()/2,centerY:e.top+o.height()/2,right:e.left+o.width(),bottom:e.top+o.height()})):m(i,a)}},w=function(t){(t.clientY<=0||t.clientX<=0||t.clientX>=o.innerWidth||t.clientY>=o.innerHeight)&&(s=setTimeout((function(){d()}),500))};function v(){return!0!==n&&((l={$el:"string"==typeof e?t(e):e,$wrap:null,isWrapEl:!1}).itemLength=l.$el.length,!!l.itemLength&&(l.$wrap="string"==typeof r.wrapEl?t(r.wrapEl):r.wrapEl,c=l.$wrap.length>0,a.on("mousemove",h),void a.on("mouseleave",w)))}return v(),{init:v,recover:d}};t.fn.plugin=function(t){return this.each((function(){new r(this,t)}))},o.BaseElasticMove=r}(jQuery,window,document),$((function(){$(document),$(window),$("html"),$("body"),new BaseElasticMove(".page-sub .follow",{wrapEl:$(".page-navigation"),distance:80})})),function(t){"use strict";t.throttle=t.throttle||function(t,o,e){var i,n;return o||(o=250),function(){var a=e||this,r=+new Date,l=arguments;i&&r<i+o?(clearTimeout(n),n=setTimeout((function(){i=r,t.apply(a,l)}),o)):(i=r,t.apply(a,l))}},t.debounce=t.debounce||function(t,o,e){var i;return function(){var n=this,a=arguments,r=function(){i=null,e||t.apply(n,a)},l=e&&!i;clearTimeout(i),i=setTimeout(r,o),l&&t.apply(n,a)}}}(this),function(t,o,e,i){"use strict";var n=o.$window||t(o),a=o.$document||t(e);o.$html||t("html");t.fn.relativeSticky=function(e){this.each((function(){var i,r,l,s,c,p=t(this),d=p.children(),u=t.extend({},{wrapEl:null,bottom:!1,marginTop:0,inlineCSS:!1},e),m=u.wrapEl,h={scrollTop:0,wrapHeight:0,wrapTop:0,wrapBottom:0,elHeight:0},w=function(){p.removeAttr("style"),p.addClass("js-sticky is-loaded"),h.scrollTop=n.scrollTop(),h.wrapHeight=m.height(),h.wrapTop=m.offset().top,h.wrapBottom=h.wrapTop+h.wrapHeight,h.elHeight=p.children().outerHeight(),h.marginTop=u.marginTop,h.boolTop=!1,h.boolBottom=!1,p.height(h.wrapHeight),v()},v=function(){h.scrollTop=o.pageYOffset||n.scrollTop(),h.boolTop=h.scrollTop+h.marginTop>=h.wrapTop,h.boolBottom=!!u.bottom&&h.scrollTop+h.elHeight>=h.wrapTop+h.wrapHeight,!1===h.boolBottom?(p.removeClass("is-bottom"),p.toggleClass("is-in",h.boolTop),p.toggleClass("is-out",!h.boolTop)):!0===u.bottom&&(p.removeClass("is-in"),p.removeClass("is-out"),p.addClass("is-bottom")),!0===u.inlineCSS&&(!0!==h.boolTop&&!0!==h.boolBottom?(p.css("position","relative"),d.css({position:"absolute",top:0,bottom:"auto"})):!0!==h.boolBottom?(p.css("position",""),d.css({position:"fixed",top:0,bottom:"auto"})):(p.css("position","relative"),d.css({position:"absolute",top:"auto",bottom:0})))};return w(),n.on("resize",debounce((function(){w()}),100)),a.on("click",(function(){w()})),n.on("scroll",(i=function(){v()},(r=50)||(r=250),function(){var t=l||this,o=+new Date,e=arguments;s&&o<s+r?(clearTimeout(c),c=setTimeout((function(){s=o,i.apply(t,e)}),r)):(s=o,i.apply(t,e))})),this}))}}(jQuery,window,document),$((function(){$(".page-sub #sticky").relativeSticky({wrapEl:$("#stickyWrap"),bottom:!0})})),$((function(){"use strict";var t=window.$window||$(window),o=window.$document||$(document),e=window.$html||$("html"),i=$("body");window.$container||$("#container"),window.$header||$("#header"),window.$footer||$("#footer"),i.attr("class");$.fn.timeline=function(i){return this.each((function(){$.extend({},{},i);var n=$(this),a={el:n,items:n.find(".section-history"),active:-1,activeEl:null,activeGroup:0,scope:[],scrollTop:0,windowHeight:0,inview:0},r=$("#historySticky li");a.length=a.items.length;var l=function(){a.scope=[],a.windowHeight=t.height();for(var o=0;o<a.length;o++){var e=a.items.eq(o),i=e.offset().top,n=[i,i+e.height(),e.data("group-idx")||0];a.scope.push(n)}},s=function(){a.activeEl=null,a.scrollTop=t.scrollTop(),a.inview=a.scrollTop+parseInt(a.windowHeight/2,10)+.05*a.windowHeight,a.active=-1;for(var i=0;i<a.scope.length;i++){var n=a.scope[i];a.inview+100>n[0]&&(a.active=i)}a.active<0&&(a.active=0),"object"==typeof a.scope[a.active]&&(a.activeGroup=a.scope[a.active][2]),a.activeEl=a.items.eq(a.active),a.items.removeClass("active"),a.activeEl.addClass("active"),r.removeClass("in").eq(a.activeGroup).addClass("in"),a.scrollTop>=1e3?e.addClass("is-history"):e.removeClass("is-history");var l=t.scrollTop()/(o.height()-t.height())*100;$("#historySticky .bar").children().width(l+"%")};t.on("load resize",(function(){l(),s()})),o.on("click",(function(){l()})),t.on("scroll",(function(){s()})),s(),o.on("click","#historySticky a",(function(t){t.preventDefault();var o=$(t.target);o=o.is("a")?o:o.closest("a");var e=$(o.attr("href")).offset().top-260;$("html, body").stop().animate({scrollTop:e},80)}))})),this},$("#timeline").timeline()}));
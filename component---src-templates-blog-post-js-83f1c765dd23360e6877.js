(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2bA9":function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"telegramSiteId":"zxyJ98F6"}}}}')},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("YZX3"),i=(a("q1tI"),a("9eSz")),n=a.n(i),s=a("p3AD"),o=a("qKvR");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t.social;return Object(o.c)("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},Object(o.c)(n.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),Object(o.c)("p",null,"Written by ",Object(o.c)("strong",null,a)," is a software developer."," ",Object(o.c)("a",{href:"https://ayan-b.github.io"},"Here's his profile.")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),b=function(e){var t=u(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(x,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},x=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,b=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,y=e.Tag,E=e.itemProp,O=e.loading,w=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:B?1:0,transition:L?"opacity "+h+"ms":"none"},o),N="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&Q,{},o,{},f),V={title:t,alt:this.state.isVisible?"":a,style:P,className:A,itemProp:E};if(p){var z=p,M=g(p);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),M.base64&&l.default.createElement(I,{ariaHidden:!0,src:M.base64,spreadProps:V,imageVariants:z,generateSources:v}),M.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,src:M.tracedSVG,spreadProps:V,imageVariants:z,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,S(z),l.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:O},M,{imageVariants:z}))}}))}if(b){var k=b,Y=g(b),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},N&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},L&&Q)}),Y.base64&&l.default.createElement(I,{ariaHidden:!0,src:Y.base64,spreadProps:V,imageVariants:k,generateSources:v}),Y.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:V,imageVariants:k,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,S(k),l.default.createElement(x,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:O},Y,{imageVariants:k}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:C,sizes:N,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=L;t.default=Q},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},YZX3:function(e){e.exports=JSON.parse('{"data":{"avatar":{"id":"8a57df08-b42a-55c7-932b-c5514774ac10","childImageSharp":{"id":"b2f141e4-d70d-56e2-9786-242a2b50c648","fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABm5HNM3FA55GiC1MOf//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwAREyH/2gAIAQEAAQUC6EBDWblxjHR8zeUc9L+SSrEf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIxEBH/2gAIAQMBAT8BSHRZn//EABgRAQEAAwAAAAAAAAAAAAAAAAEQAhEx/9oACAECAQE/AVdzLpP/xAAgEAABAwIHAAAAAAAAAAAAAAABABAxAgMREiEiQVFx/9oACAEBAAY/AtsntY1XRWDw2qgN4swlv//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExYRBR/9oACAEBAAE/IWmrdQ6HYN2SXzkQwTQJFAV5X7bWQC4MHEsbU//aAAwDAQACAAMAAAAQbPD9/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxBFbZRuQ//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8QMAm3P//EABsQAQEBAAIDAAAAAAAAAAAAAAERACFBMVFx/9oACAEBAAE/EOJ0gH0XwM23iLmmL6S5ys1rBke8pwJBOjzl3zgl4FD3cIEoPRugFtlk3//Z","width":50,"height":50,"src":"/blog/static/c8200cce63fc4e1467b52c3bb1278662/99438/profile-pic.jpg","srcSet":"/blog/static/c8200cce63fc4e1467b52c3bb1278662/99438/profile-pic.jpg 1x,\\n/blog/static/c8200cce63fc4e1467b52c3bb1278662/aba1d/profile-pic.jpg 1.5x,\\n/blog/static/c8200cce63fc4e1467b52c3bb1278662/b315d/profile-pic.jpg 2x"}}},"site":{"id":"Site","siteMetadata":{"author":"Ayan Banerjee","social":{"twitter":"ayanbn7"}}}}}')},yZlL:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("Wbzz"),i=a("6Gk8"),n=a("Bl7J"),s=a("vrFN"),o=a("2bA9"),d=a("qKvR"),l=function(){var e=o.data.site.siteMetadata.telegramSiteId;return Object(d.c)("script",{async:!0,src:"https://comments.app/js/widget.js?3","data-comments-app-website":e,"data-limit":"100"})},c=a("p3AD");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"pageQuery",(function(){return g}));t.default=function(e){var t=e.data,a=e.pageContext,o=e.location,u=t.markdownRemark,A=t.site.siteMetadata.title,g=a.previous,p=a.next;return Object(d.c)(n.a,{location:o,title:A},Object(d.c)(s.a,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),Object(d.c)("article",null,Object(d.c)("header",null,Object(d.c)("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},u.frontmatter.title),Object(d.c)("p",{style:f({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},u.frontmatter.date)),Object(d.c)("section",{dangerouslySetInnerHTML:{__html:u.html}}),Object(d.c)("hr",{style:{marginBottom:Object(c.a)(1)}}),Object(d.c)("footer",null,Object(d.c)(i.a,null))),Object(d.c)("nav",null,Object(d.c)("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},Object(d.c)("li",null,g&&Object(d.c)(r.Link,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),Object(d.c)("li",null,p&&Object(d.c)(r.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),Object(d.c)(l,null))};var g="2868899261"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-83f1c765dd23360e6877.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63],{63:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var t=a(893),r=a(294),o=a(686),i=a(95),l=a(368),c=a(155);function s(){return(0,t.jsx)("canvas",{ref:function(e){e&&function(e){var n=new c.Zc(e),a=new c.Op(n,{color:[1,.7,0,1]});n.add(a),e.addEventListener("click",(function(){a.red=Math.random(),a.green=Math.random(),a.blue=Math.random(),n.paint()})),n.paint()}(e)},style:{width:"100%",height:"128px",background:"#000"}})}var u=function(e,n){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var t,r,o=a.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i},d='function init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    canvas.addEventListener("click", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}',m='import { TgdContext, TgdPainterClear } from "@tolokoban/tgd"\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    canvas.addEventListener("click", () => {\n        clear.red = Math.random()\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (canvas) init(canvas)\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{\n                width: "100%",\n                height: "128px",\n                background: "#000",\n            }}\n        ></canvas>\n    )\n}\n';function p(){var e=u(r.useState(!1),2),n=e[0],a=e[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{align:"halfLeft",children:(0,t.jsx)(s,{})}),(0,t.jsxs)(i.Z,{align:"halfRight",children:[(0,t.jsx)("button",{style:{all:"inherit",display:"contents"},onClick:function(){return a(!n)},children:(0,t.jsxs)(o.Rf,{display:"flex",gap:".5em",children:[(0,t.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return a(!n)}}),(0,t.jsx)("label",{style:{cursor:"pointer"},children:"Afficher le code complet"})]})}),(0,t.jsx)(l.Z,{language:"tsx",value:n?m:d})]})]})}function f(e){const n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:(0,t.jsx)(n.a,{href:"docs/classes/TgdPainterClear.html",children:"TgdPainterClear"})}),"\n",(0,t.jsx)(n.p,{children:"How to fill all the pixels of the canvas with a unique color."}),"\n",(0,t.jsx)(n.h2,{children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Click the canvas (the rectangle below) to set an new random color."}),"\n",(0,t.jsx)(p,{})]})}const g=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},267:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(81),r=a.n(t),o=a(645),i=a.n(o)()(r());i.push([e.id,'.wG5Gt8UucKgObpD7Yp3g {\n    display: inline-block;\n    position: relative;\n    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n    font-size: 0.9rem;\n    margin: 0.5em;\n    background: #fff;\n    color: #000;\n}\n\n.WFvjeSIkQyiXg5gY8rSw {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    place-items: center;\n}\n\n.WFvjeSIkQyiXg5gY8rSw > div {\n    background: var(--theme-color-secondary-5);\n    color: var(--theme-color-on-secondary-5);\n}\n',""]),i.locals={CodeViewer:"wG5Gt8UucKgObpD7Yp3g",popup:"WFvjeSIkQyiXg5gY8rSw"};const l=i},828:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(81),r=a.n(t),o=a(645),i=a.n(o)()(r());i.push([e.id,".UBRtaKKI2IUt_yVh793e {\n    grid-column: 1/2;\n}\n\n.hlhvpGHYWp26ThNXqPYX {\n    grid-column: 4/5;\n}\n\n.f9M8EDimgo_3bSIFZ1Yy {\n    grid-column: 2/4;\n}\n\n.m6ZTzUAGZcAYbtG1q_Eo {\n    grid-column: 1/5;\n}\n\n._sfhqSZfSnXN1umfRFqQ {\n    grid-column: 1/3;\n}\n\n.f_AqYnpgZ1bR7IO_waX8 {\n    grid-column: 3/5;\n}\n\n@media (max-width: 1024px) {\n    .UBRtaKKI2IUt_yVh793e,\n    .hlhvpGHYWp26ThNXqPYX,\n    .f9M8EDimgo_3bSIFZ1Yy,\n    .m6ZTzUAGZcAYbtG1q_Eo,\n    ._sfhqSZfSnXN1umfRFqQ,\n    .f_AqYnpgZ1bR7IO_waX8 {\n        grid-column: 2/4;\n    }\n}\n",""]),i.locals={marginLeft:"UBRtaKKI2IUt_yVh793e",marginRight:"hlhvpGHYWp26ThNXqPYX",center:"f9M8EDimgo_3bSIFZ1Yy",full:"m6ZTzUAGZcAYbtG1q_Eo",halfLeft:"_sfhqSZfSnXN1umfRFqQ",halfRight:"f_AqYnpgZ1bR7IO_waX8"};const l=i},368:(e,n,a)=>{a.d(n,{Z:()=>_});var t=a(893),r=a(294),o=a(660),i=a.n(o);a(980),a(356),a(836),a(29),a(279),a(812);var l={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/g,lookbehind:!0,greedy:!0},{pattern:/^#.+$/g,lookbehind:!1,greedy:!0}],number:{pattern:/(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,lookbehind:!0},type:c(["bvec2","bvec3","bvec4","dmat2","dmat2x2","dmat2x3","dmat2x4","dmat3","dmat3x2","dmat3x3","dmat3x4","dmat4","dmat4x2","dmat4x3","dmat4x4","dvec2","dvec3","dvec4","float","fvec2","fvec3","fvec4","isampler1D","isampler1DArray","isampler2D","isampler2DArray","isampler2DMS","isampler2DMSArray","isampler2DRect","isampler3D","isamplerBuffer","isamplerCube","isamplerCubeArray","ivec2","ivec3","ivec4","mat2","mat2x2","mat2x3","mat2x4","mat3","mat3x2","mat3x3","mat3x4","mat4","mat4x2","mat4x3","mat4x4","sample","sampler1D","sampler1DArray","sampler1DArrayShadow","sampler1DShadow","sampler2D","sampler2DArray","sampler2DArrayShadow","sampler2DMS","sampler2DMSArray","sampler2DRect","sampler2DRectShadow","sampler2DShadow","sampler3D","samplerBuffer","samplerCube","samplerCubeArray","samplerCubeArrayShadow","samplerCubeShadow","usampler1D","usampler1DArray","usampler2D","usampler2DArray","usampler2DMS","usampler2DMSArray","usampler2DRect","usampler3D","usamplerBuffer","usamplerCube","usamplerCubeArray","uvec2","uvec3","uvec4","vec2","vec3","vec4","void"]),keyword:c(["centroid","const","discard","else","flat","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","smooth","subroutine","uniform","active","asm","cast","class","common","enum","extern","external","filter","fixed","goto","half","hvec2","hvec3","hvec4","iimage1D","iimage1DArray","iimage2D","iimage2DArray","iimage3D","iimageBuffer","iimageCube","image1D","image1DArray","image1DArrayShadow","image1DShadow","image2D","image2DArray","image2DArrayShadow","image2DShadow","image3D","imageBuffer","imageCube","inline","input","interface","long","namespace","noinline","output","packed","partition","public","row_major","sampler3DRect","short","sizeof","static","superp","template","this","typedef","uimage1D","uimage1DArray","uimage2D","uimage2DArray","uimage3D","uimageBuffer","uimageCube","union","unsigned","using","volatile"]),global:c(["gl_DepthRange","gl_DepthRange.diff","gl_DepthRange.far","gl_DepthRange.near","gl_FragCoord","gl_FragDepth","gl_FrontFacing","gl_InstanceID","gl_PointCoord","gl_PointSize","gl_Position","gl_VertexID"]),function:c(["abs","acos","acosh","all","any","asin","asinh","atan","atanh","ceil","clamp","cos","cosh","cross","degrees","determinant","dFdx","dFdy","distance","dot","equal","exp","exp2","faceforward","floatBitsToInt","floatBitsToUint","floor","fract","fwidth","greaterThan","greaterThanEqual","intBitsToFloat","inverse","inversesqrt","isinf","isnan","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","modf","normalize","not","notEqual","outerProduct","packHalf2x16","packSnorm2x16","packUnorm2x16","pow","radians","reflect","refract","round","roundEven","sign","sin","sinh","smoothstep","sqrt","step","tan","tanh","texelFetch","texelFetchOffset","texture","textureGrad","textureGradOffset","textureLod","textureLodOffset","textureOffset","textureProj","textureProjGrad","textureProjGradOffset","textureProjLod","textureProjLodOffset","textureProjOffset","textureSize","transpose","trunc","uintBitsToFloat","unpackHalf2x16","unpackSnorm2x16","unpackUnorm2x16"])};function c(e){return{pattern:new RegExp("(?:[^a-zA-Z0-9_])(".concat(e.join("|"),")(?=[^a-zA-Z0-9_])")),lookbehind:!1,greedy:!0}}a(922);var s=a(379),u=a.n(s),d=a(795),m=a.n(d),p=a(569),f=a.n(p),g=a(565),h=a.n(g),x=a(216),v=a.n(x),y=a(589),b=a.n(y),D=a(267),w={};w.styleTagTransform=b(),w.setAttributes=h(),w.insert=f().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=v(),u()(D.Z,w);const S=D.Z&&D.Z.locals?D.Z.locals:void 0;var A=function(e,n){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var t,r,o=a.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i};function _(e){var n=r.useRef(0),a=A(r.useState(!1),2),o=a[0],c=a[1],s=r.useRef(null);return r.useEffect((function(){window.setTimeout((function(){var n=s.current;if(n){var a=i().highlight(e.value,function(e){switch(e){case"ts":return i().languages.typescript;case"tsx":return i().languages.tsx;case"frag":case"vert":return i().languages.glsl;default:return l}}(e.language),e.language);n.innerHTML=a}}),100)}),[e.value,e.language]),(0,t.jsxs)("div",{className:j(e),onDoubleClick:function(){navigator.clipboard.writeText(e.value).then((function(){c(!0),window.clearTimeout(n.current),n.current=window.setTimeout((function(){return c(!1)}),7e3)}))},children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{ref:s,className:"language-".concat(e.language)})}),o&&(0,t.jsx)("div",{className:S.popup,onClick:function(){c(!1),window.clearTimeout(n.current),n.current=0},children:(0,t.jsx)("div",{children:"This code has been copied to the clipboard!"})})]})}function j(e){var n=[S.CodeViewer];return"string"==typeof e.className&&n.push(e.className),n.join(" ")}},95:(e,n,a)=>{a.d(n,{Z:()=>y});var t=a(893),r=a(379),o=a.n(r),i=a(795),l=a.n(i),c=a(569),s=a.n(c),u=a(565),d=a.n(u),m=a(216),p=a.n(m),f=a(589),g=a.n(f),h=a(828),x={};x.styleTagTransform=g(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=p(),o()(h.Z,x);const v=h.Z&&h.Z.locals?h.Z.locals:void 0;function y(e){var n=e.align,a=e.children;return(0,t.jsx)("div",{className:v[n],children:a})}}}]);
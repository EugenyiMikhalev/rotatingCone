(this["webpackJsonpreact-three"]=this["webpackJsonpreact-three"]||[]).push([[0],{40:function(e,a,t){e.exports=t(51)},44:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(21),o=t.n(c),s=t(10),l=t(7),m=t(23),i=t(16),h=function(e){var a=Object(r.useState)(!0),t=Object(s.a)(a,2),c=t[0],o=t[1];return n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},n.a.createElement("span",null,"ROTATING CONE")),n.a.createElement("div",{className:"header__form-wrapper"},n.a.createElement("form",{action:"#"},n.a.createElement("label",null,"radius:"),n.a.createElement("input",{type:"number",id:"radius",name:"radius",placeholder:e.coneParams.radius,onChange:function(a){var t=isNaN(a.target.valueAsNumber)?e.coneParams.radius:a.target.valueAsNumber;e.setConeParams(Object(i.a)(Object(i.a)({},e.coneParams),{},{radius:t}))}}),n.a.createElement("label",null,"height:"),n.a.createElement("input",{type:"number",id:"height",name:"height",placeholder:e.coneParams.height,onChange:function(a){isNaN(a.target.valueAsNumber)&&console.log(a.target.valueAsNumber);var t=isNaN(a.target.valueAsNumber)?e.coneParams.height:a.target.valueAsNumber;e.setConeParams(Object(i.a)(Object(i.a)({},e.coneParams),{},{height:t}))}}),n.a.createElement("span",{className:"labelRotate"},"rotate:"),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){e.setConeParams(Object(i.a)(Object(i.a)({},e.coneParams),{},{rotate:!e.coneParams.rotate})),o(!c)}}),n.a.createElement("span",{className:"slider round"})))))},u=(t(44),t(30));function d(e){var a=e.coneParams,t=e.position,c=e.color,o=e.setConeParams,h=e.args,d=e.rotate,b=Object(r.useRef)();Object(l.f)((function(){d&&(b.current.rotation.x=b.current.rotation.y+=.01)}));var p=Object(r.useState)(!1),g=Object(s.a)(p,2),E=g[0],f=(g[1],Object(u.b)({scale:E?[1.4,1.4,1.4]:[1,1,1]}));return n.a.createElement(u.a.mesh,{position:t,ref:b,onClick:function(){o(Object(i.a)(Object(i.a)({},a),{},{color:"#"+Math.floor(16777215*Math.random()).toString(16)}))},scale:f.scale,castShadow:!0},n.a.createElement("coneBufferGeometry",{attach:"geometry",args:h}),n.a.createElement(m.a,{color:c,attach:"material",factor:.6}))}Object(m.c)();var b=function(){var e=Object(r.useState)({radius:1,height:3,color:"pink",rotate:!0}),a=Object(s.a)(e,2),t=a[0],c=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{coneParams:t,setConeParams:c}),n.a.createElement("div",{className:"canvas-wrapper"},n.a.createElement(l.a,{className:"canvas",style:{height:"100%",outline:"none !important",border:"none !important"},colorManagement:!0,shadowMap:!0,camera:{position:[6,2,-6],fov:60}},n.a.createElement("ambientLight",{intensity:.3}),n.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),n.a.createElement("group",null,n.a.createElement("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-t.height,0],receiveShadow:!0},n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),n.a.createElement("shadowMaterial",{attach:"material",opacity:.25})),n.a.createElement(d,{position:[0,0,0],coneParams:t,color:t.color,setConeParams:c,args:[t.radius,t.height],rotate:t.rotate})),n.a.createElement(m.b,null))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d5b2d7e2.chunk.js.map
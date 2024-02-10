/*! For license information please see Components-SearchInput-SearchInput-stories.48aa4c40.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknvxreactui=self.webpackChunknvxreactui||[]).push([[443],{"./src/Components/SearchInput/SearchInput.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SearchInput",component:__webpack_require__("./src/Components/SearchInput/index.tsx").Z,parameters:{},tags:["autodocs"],argTypes:{}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Components/SearchInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Components_SearchInput});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),search_input=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SearchInput/search-input.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(search_input.Z,options);search_input.Z&&search_input.Z.locals&&search_input.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SearchInput=_ref=>{let{className,onSearch,debounceDelay,disabled=!1,...otherProps}=_ref;const[value,setValue]=(0,react.useState)("");(0,react.useEffect)((()=>{if(-1!==debounceDelay&&!disabled){const timerHandler=setTimeout((()=>{onSearch(value)}),500);return()=>{clearTimeout(timerHandler)}}}),[value,disabled,debounceDelay]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("rdc_control",{disabled:!!disabled}),onKeyUp:e=>{disabled||"Enter"===e.code&&onSearch(value)},children:[(0,jsx_runtime.jsx)("span",{className:"menu-icon icon-search"}),(0,jsx_runtime.jsx)("input",{className:classnames_default()("rdc-input_search",className),value,onChange:e=>{const newValue=e.target.value;setValue(newValue)},disabled,type:"text",...otherProps}),(0,jsx_runtime.jsx)("button",{onClick:()=>{setValue(""),disabled||-1!==debounceDelay||onSearch("")},className:classnames_default()({rdc_hidden:!value}),children:(0,jsx_runtime.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M20.1345 5.71859C20.6156 5.21508 20.6066 4.41946 20.1141 3.92699C19.6056 3.41846 18.7783 3.42785 18.2814 3.94778L12.3189 10.1871L5.71865 3.86731C5.21524 3.38529 4.41892 3.39393 3.9261 3.88676C3.41791 4.39495 3.42688 5.2216 3.94598 5.71864L10.5061 12L4.22535 18.2807C3.72474 18.7813 3.72474 19.593 4.22534 20.0936C4.72595 20.5942 5.5376 20.5942 6.0382 20.0936L12.3189 13.8129L18.5864 20.0804C19.0794 20.5733 19.8898 20.5343 20.3332 19.9963C20.7136 19.5347 20.6889 18.8615 20.2756 18.4291L14.1318 12L20.1345 5.71859Z",fill:"inherit"})})})]})};SearchInput.displayName="SearchInput";const Components_SearchInput=SearchInput;try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"Компонент поисковой строки",displayName:"SearchInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isDebounced:{defaultValue:null,description:"",name:"isDebounced",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(text: string) => void"}},debounceDelay:{defaultValue:null,description:"",name:"debounceDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/SearchInput/index.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/Components/SearchInput/index.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SearchInput/search-input.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rdc_control{display:flex;align-items:center;height:38px;padding:0 15px;border:1px solid #D1D5DF !important;border-radius:6px;background:linear-gradient(0deg, #F9FBFF, #F9FBFF),linear-gradient(0deg, #D1D5DF, #D1D5DF);font-size:16px;font-weight:400;line-height:24px;letter-spacing:-0.022em;text-align:left}.rdc_control.disabled{background:var(--secondary-text-color)}.rdc_control>.menu-icon{font-size:17px;color:var(--main-color)}.rdc_control>input{width:100%;padding:0 10px;color:var(--modal-c-font)}.rdc_control>input::-webkit-input-placeholder{color:var(--main-font-color-disable)}.rdc_control>button{fill:var(--main-color)}.rdc_control>button:hover{fill:var(--main-error-color)}.rdc_control>button:active{fill:var(--main-error-active-color)}\n","",{version:3,sources:["webpack://./src/Components/SearchInput/search-input.scss"],names:[],mappings:"AACA,aACC,YAAa,CACb,kBAAmB,CAEnB,WAAY,CACZ,cAAe,CAEf,mCAAoC,CACpC,iBAAkB,CAElB,0FACwC,CAExC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,uBAAwB,CACxB,eAAgB,CAjBjB,sBAoBE,sCAAuC,CApBzC,wBAwBE,cAAe,CACf,uBAAwB,CAzB1B,mBA6BE,UAAW,CACX,cAAe,CACf,yBAA0B,CA/B5B,8CAmCE,oCAAqC,CAnCvC,oBAuCE,sBAAuB,CAvCzB,0BA2CE,4BAA6B,CA3C/B,2BA+CE,mCAAoC",sourcesContent:["\r\n.rdc_control {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\r\n\theight: 38px;\r\n\tpadding: 0 15px;\r\n\r\n\tborder: 1px solid #D1D5DF !important;\r\n\tborder-radius: 6px;\r\n\r\n\tbackground: linear-gradient(0deg, #F9FBFF, #F9FBFF),\r\n\t\tlinear-gradient(0deg, #D1D5DF, #D1D5DF);\r\n\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 24px;\r\n\tletter-spacing: -0.022em;\r\n\ttext-align: left;\r\n\r\n\t&.disabled {\r\n\t\tbackground: var(--secondary-text-color);\r\n\t}\r\n\r\n\t& > .menu-icon {\r\n\t\tfont-size: 17px;\r\n\t\tcolor: var(--main-color);\r\n\t}\r\n\r\n\t& > input {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 10px;\r\n\t\tcolor: var(--modal-c-font);\r\n\t}\r\n\r\n\t& > input::-webkit-input-placeholder {\r\n\t\tcolor: var(--main-font-color-disable);\r\n\t}\r\n\r\n\t& > button {\r\n\t\tfill: var(--main-color);\r\n\t}\r\n\r\n\t& > button:hover {\r\n\t\tfill: var(--main-error-color);\r\n\t}\r\n\r\n\t& > button:active {\r\n\t\tfill: var(--main-error-active-color);\r\n\t}\r\n\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);
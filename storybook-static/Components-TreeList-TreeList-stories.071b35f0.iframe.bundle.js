"use strict";(self.webpackChunknvxreactui=self.webpackChunknvxreactui||[]).push([[28],{"./src/Components/TreeList/TreeList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TreeList_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),SearchInput=__webpack_require__("./src/Components/SearchInput/index.tsx"),IconButton=__webpack_require__("./src/Components/IconButton/IconButton.tsx");__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TreeListItem=_ref=>{let{item,activePreset,onClick,index}=_ref;const[exItem,setExItem]=(0,react.useState)(item);return(0,jsx_runtime.jsxs)("li",{className:(item=>classnames_default()("treelist_node",{treelist_node_end:!item.subItems?.length,open:item.isExpand,active:exItem.isActive||!!item.id&&activePreset===item.id,disable:exItem.isDisabled}))(exItem),id:exItem.id?exItem.id:index.toString(),onClick:e=>((e,item)=>{e.stopPropagation(),onClick&&!exItem.isDisabled&&onClick(item)})(e,exItem),children:[(0,jsx_runtime.jsxs)("div",{className:"treelist_node-mnu hint","data-hint":exItem.title,children:[(0,jsx_runtime.jsx)(IconButton.Z,{outline:!0,disabled:!exItem.subItems?.length,onClick:e=>{e.stopPropagation(),setExItem((prev=>({...prev,isExpand:!prev.isExpand})))},children:(0,jsx_runtime.jsx)(void 0,{className:"treelist-expand_icon","aria-hidden":!exItem.subItems?.length})}),(0,jsx_runtime.jsx)("span",{className:"treelist_node-title",children:exItem.title})]}),!!exItem.subItems?.length&&!!exItem.isExpand&&(0,jsx_runtime.jsx)("ul",{className:"treelist_node__sub_node",children:exItem.subItems.map(((i,index)=>(0,jsx_runtime.jsx)(TreeListItem,{item:i,index,activePreset,onClick},i.id+"_"+index)))})]},exItem.id)};TreeListItem.displayName="TreeListItem";const TreeListItem_TreeListItem=TreeListItem;try{TreeListItem.displayName="TreeListItem",TreeListItem.__docgenInfo={description:"",displayName:"TreeListItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ItemType"}},activePreset:{defaultValue:null,description:"",name:"activePreset",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(item: ItemType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/TreeList/TreeListItem/TreeListItem.tsx#TreeListItem"]={docgenInfo:TreeListItem.__docgenInfo,name:"TreeListItem",path:"src/Components/TreeList/TreeListItem/TreeListItem.tsx#TreeListItem"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TreeList_style=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/TreeList/TreeList.style.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TreeList_style.Z,options);TreeList_style.Z&&TreeList_style.Z.locals&&TreeList_style.Z.locals;const TreeList=_ref=>{let{items,selectedItem="",className,searchEnable=!1,onClick}=_ref;const[preparedItems,setPreparedItem]=(0,react.useState)([]),[activeItem,setActiveItem]=(0,react.useState)(selectedItem);(0,react.useEffect)((()=>setActiveItem(selectedItem)),[selectedItem]),(0,react.useEffect)((()=>{const pi=items.map((item=>({...item,isExpand:getIsExpanded(item,selectedItem)})));setPreparedItem(pi)}),[items,selectedItem]);const filtering=(list,value)=>list.flatMap(flatItem).filter((i=>-1!==i.title.toLowerCase().indexOf(value))),flatItem=item=>item.subItems?.length?[item,...item.subItems.flatMap((s=>flatItem(s)))]:[item],onClickHandler=item=>{item.id&&setActiveItem(item.id),onClick&&onClick(item)};return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("treelist-wrapper",className),children:[!!searchEnable&&(0,jsx_runtime.jsx)(SearchInput.Z,{placeholder:"Введите название реестра",onSearch:value=>{if(items.length)if(value){const filtered=filtering(items,value.toLowerCase());setPreparedItem(filtered)}else setPreparedItem(items)},debounceDelay:500}),(0,jsx_runtime.jsx)("ul",{className:"treelist",children:preparedItems.map(((i,index)=>(0,jsx_runtime.jsx)(TreeListItem_TreeListItem,{index,activePreset:activeItem,item:i,onClick:onClickHandler},i.id?i.id:index)))}),!preparedItems.length&&(0,jsx_runtime.jsx)("p",{className:"treelist-empty",children:"По вашему запросу ничего не найдено."})]})};TreeList.displayName="TreeList";const getIsExpanded=function(item){let activeNodeId=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(item.isExpand||item.id===activeNodeId)return!0;if(!item.subItems?.length)return!1;for(let i=0;i<item.subItems.length;i++){const subItem=item.subItems[i];if(getIsExpanded(subItem,activeNodeId))return subItem.isExpand=!0,item.isExpand=!0,!0}return!1},TreeList_TreeList=TreeList;try{TreeList.displayName="TreeList",TreeList.__docgenInfo={description:"Древовидный список",displayName:"TreeList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ItemType[]"}},selectedItem:{defaultValue:{value:""},description:"",name:"selectedItem",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},searchEnable:{defaultValue:{value:"false"},description:"",name:"searchEnable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(item: ItemType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/TreeList/TreeList.tsx#TreeList"]={docgenInfo:TreeList.__docgenInfo,name:"TreeList",path:"src/Components/TreeList/TreeList.tsx#TreeList"})}catch(__react_docgen_typescript_loader_error){}const TreeList_stories={title:"TreeList"},Default=()=>(0,jsx_runtime.jsx)(TreeList_TreeList,{items:[]});Default.displayName="Default",Default.story={name:"default"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <TreeList items={[]} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Components/SearchInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_SearchInput});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),search_input=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SearchInput/search-input.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(search_input.Z,options);search_input.Z&&search_input.Z.locals&&search_input.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SearchInput=_ref=>{let{className,onSearch,debounceDelay,disabled=!1,...otherProps}=_ref;const[value,setValue]=(0,react.useState)("");(0,react.useEffect)((()=>{if(-1!==debounceDelay&&!disabled){const timerHandler=setTimeout((()=>{onSearch(value)}),500);return()=>{clearTimeout(timerHandler)}}}),[value,disabled,debounceDelay]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("rdc_control",{disabled:!!disabled}),onKeyUp:e=>{disabled||"Enter"===e.code&&onSearch(value)},children:[(0,jsx_runtime.jsx)("span",{className:"menu-icon icon-search"}),(0,jsx_runtime.jsx)("input",{className:classnames_default()("rdc-input_search",className),value,onChange:e=>{const newValue=e.target.value;setValue(newValue)},disabled,type:"text",...otherProps}),(0,jsx_runtime.jsx)("button",{onClick:()=>{setValue(""),disabled||-1!==debounceDelay||onSearch("")},className:classnames_default()({rdc_hidden:!value}),children:(0,jsx_runtime.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M20.1345 5.71859C20.6156 5.21508 20.6066 4.41946 20.1141 3.92699C19.6056 3.41846 18.7783 3.42785 18.2814 3.94778L12.3189 10.1871L5.71865 3.86731C5.21524 3.38529 4.41892 3.39393 3.9261 3.88676C3.41791 4.39495 3.42688 5.2216 3.94598 5.71864L10.5061 12L4.22535 18.2807C3.72474 18.7813 3.72474 19.593 4.22534 20.0936C4.72595 20.5942 5.5376 20.5942 6.0382 20.0936L12.3189 13.8129L18.5864 20.0804C19.0794 20.5733 19.8898 20.5343 20.3332 19.9963C20.7136 19.5347 20.6889 18.8615 20.2756 18.4291L14.1318 12L20.1345 5.71859Z",fill:"inherit"})})})]})};SearchInput.displayName="SearchInput";const Components_SearchInput=SearchInput;try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"Компонент поисковой строки",displayName:"SearchInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isDebounced:{defaultValue:null,description:"",name:"isDebounced",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(text: string) => void"}},debounceDelay:{defaultValue:null,description:"",name:"debounceDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/SearchInput/index.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/Components/SearchInput/index.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/SearchInput/search-input.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rdc_control{display:flex;align-items:center;height:38px;padding:0 15px;border:1px solid #D1D5DF !important;border-radius:6px;background:linear-gradient(0deg, #F9FBFF, #F9FBFF),linear-gradient(0deg, #D1D5DF, #D1D5DF);font-size:16px;font-weight:400;line-height:24px;letter-spacing:-0.022em;text-align:left}.rdc_control.disabled{background:var(--secondary-text-color)}.rdc_control>.menu-icon{font-size:17px;color:var(--main-color)}.rdc_control>input{width:100%;padding:0 10px;color:var(--modal-c-font)}.rdc_control>input::-webkit-input-placeholder{color:var(--main-font-color-disable)}.rdc_control>button{fill:var(--main-color)}.rdc_control>button:hover{fill:var(--main-error-color)}.rdc_control>button:active{fill:var(--main-error-active-color)}\n","",{version:3,sources:["webpack://./src/Components/SearchInput/search-input.scss"],names:[],mappings:"AACA,aACC,YAAa,CACb,kBAAmB,CAEnB,WAAY,CACZ,cAAe,CAEf,mCAAoC,CACpC,iBAAkB,CAElB,0FACwC,CAExC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,uBAAwB,CACxB,eAAgB,CAjBjB,sBAoBE,sCAAuC,CApBzC,wBAwBE,cAAe,CACf,uBAAwB,CAzB1B,mBA6BE,UAAW,CACX,cAAe,CACf,yBAA0B,CA/B5B,8CAmCE,oCAAqC,CAnCvC,oBAuCE,sBAAuB,CAvCzB,0BA2CE,4BAA6B,CA3C/B,2BA+CE,mCAAoC",sourcesContent:["\r\n.rdc_control {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\r\n\theight: 38px;\r\n\tpadding: 0 15px;\r\n\r\n\tborder: 1px solid #D1D5DF !important;\r\n\tborder-radius: 6px;\r\n\r\n\tbackground: linear-gradient(0deg, #F9FBFF, #F9FBFF),\r\n\t\tlinear-gradient(0deg, #D1D5DF, #D1D5DF);\r\n\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 24px;\r\n\tletter-spacing: -0.022em;\r\n\ttext-align: left;\r\n\r\n\t&.disabled {\r\n\t\tbackground: var(--secondary-text-color);\r\n\t}\r\n\r\n\t& > .menu-icon {\r\n\t\tfont-size: 17px;\r\n\t\tcolor: var(--main-color);\r\n\t}\r\n\r\n\t& > input {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 10px;\r\n\t\tcolor: var(--modal-c-font);\r\n\t}\r\n\r\n\t& > input::-webkit-input-placeholder {\r\n\t\tcolor: var(--main-font-color-disable);\r\n\t}\r\n\r\n\t& > button {\r\n\t\tfill: var(--main-color);\r\n\t}\r\n\r\n\t& > button:hover {\r\n\t\tfill: var(--main-error-color);\r\n\t}\r\n\r\n\t& > button:active {\r\n\t\tfill: var(--main-error-active-color);\r\n\t}\r\n\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/TreeList/TreeList.style.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.treelist{display:flex;align-items:flex-start;flex-direction:column;padding:0;margin-bottom:0;font-family:Lato;font-size:18px;font-weight:400;line-height:24px;letter-spacing:-0.022em;text-align:left;color:var(--main-font-color, #173261)}.treelist-wrapper{margin-top:8px}.treelist-wrapper>.rdc_control{margin-bottom:8px}.treelist-empty{font-family:Lato;font-size:18px;font-weight:400;line-height:24px;letter-spacing:-0.022em;text-align:left;color:#828F9C}.treelist .treelist_node{width:100%}.treelist_node__sub_node{padding-left:24px}.treelist .treelist_node-mnu{display:flex;align-items:center;border-radius:4px;margin-bottom:6px}.treelist_node:not(.disable,.active)>.treelist_node-mnu:hover{background:var(--bgc-hover, rgba(130,143,156,0.1))}li.treelist_node:not(.disable).active>.treelist_node-mnu,li.treelist_node:not(.disable)>.treelist_node-mnu:active,li.treelist_node:not(.disable).active>.treelist_node-mnu>button>.treelist-expand_icon,li.treelist_node:not(.disable)>.treelist_node-mnu:active>button>.treelist-expand_icon{color:white;fill:white !important;background-color:var(--main-color, #2196F3) !important}.treelist .treelist_node.disable>.treelist_node-mnu{color:var(--main-text-c-disable, #D4D4D4)}.treelist .treelist_node .treelist-expand_icon{display:inline-block;width:32px;height:32px;background-position:center;border-radius:4px}.treelist .treelist_node .treelist-expand_icon[aria-hidden="true"]{opacity:0}.treelist .treelist_node:not(.treelist_node_end).open>.treelist_node-mnu .treelist-expand_icon{transform:rotate(90deg)}.treelist .treelist_node-title{max-width:85%;margin-left:4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\n',"",{version:3,sources:["webpack://./src/Components/TreeList/TreeList.style.scss"],names:[],mappings:"AAEA,UACC,YAAa,CACb,sBAAuB,CACvB,qBAAsB,CAEtB,SAAU,CACV,eAAgB,CAGhB,gBAAiB,CACjB,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,uBAAwB,CACxB,eAAgB,CAChB,qCAAuC,CAEvC,kBACC,cAAe,CACf,+BAGA,iBAAkB,CAClB,gBAIA,gBAAiB,CACjB,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,uBAAwB,CACxB,eAAgB,CAChB,aAAc,CACd,yBAKD,UAAW,CACX,yBAGA,iBAAkB,CAClB,6BAGA,YAAa,CACb,kBAAmB,CACnB,iBAAkB,CAClB,iBAAkB,CAClB,8DAGA,kDAAuD,CACvD,8RAMA,WAAY,CACZ,qBAAsB,CACtB,sDAAuD,CACvD,oDAGA,yCAA0C,CAC1C,+CAGA,oBAAqB,CACrB,UAAW,CACX,WAAY,CACZ,0BAA2B,CAC3B,iBAAkB,CAClB,mEAGA,SAAU,CACV,+FAGA,uBAAwB,CACxB,+BAGA,aAAc,CACd,eAAgB,CAChB,sBAAuB,CACpB,kBAAmB,CACnB,eAAgB",sourcesContent:['\r\n\r\n.treelist {\r\n\tdisplay: flex;\r\n\talign-items: flex-start;\r\n\tflex-direction: column;\r\n\t// gap: 6px;\r\n\tpadding: 0;\r\n\tmargin-bottom: 0;\r\n\r\n\t//styleName: Body large;\r\n\tfont-family: Lato;\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tline-height: 24px;\r\n\tletter-spacing: -0.022em;\r\n\ttext-align: left;\r\n\tcolor: var( --main-font-color, #173261);\r\n\r\n\t&-wrapper {\r\n\t\tmargin-top: 8px;\r\n\t}\r\n\r\n\t&-wrapper > .rdc_control {\r\n\t\tmargin-bottom: 8px;\r\n\t}\r\n\r\n\t&-empty {\r\n\t\t//styleName: Body large;\r\n\t\tfont-family: Lato;\r\n\t\tfont-size: 18px;\r\n\t\tfont-weight: 400;\r\n\t\tline-height: 24px;\r\n\t\tletter-spacing: -0.022em;\r\n\t\ttext-align: left;\r\n\t\tcolor: #828F9C;\r\n\t}\r\n}\r\n\r\n\r\n.treelist .treelist_node {\r\n\twidth: 100%;\r\n}\r\n\r\n.treelist_node__sub_node {\r\n\tpadding-left: 24px;\r\n}\r\n\r\n.treelist .treelist_node-mnu {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-radius: 4px;\r\n\tmargin-bottom: 6px;\r\n}\r\n\r\n.treelist_node:not(.disable,.active) > .treelist_node-mnu:hover {\r\n\tbackground: var(--bgc-hover, rgba(130, 143, 156, 0.10));\r\n}\r\n\r\nli.treelist_node:not(.disable).active > .treelist_node-mnu,\r\nli.treelist_node:not(.disable) > .treelist_node-mnu:active,\r\nli.treelist_node:not(.disable).active > .treelist_node-mnu > button > .treelist-expand_icon,\r\nli.treelist_node:not(.disable) > .treelist_node-mnu:active > button > .treelist-expand_icon {\r\n\tcolor: white;\r\n\tfill: white !important;\r\n\tbackground-color: var(--main-color, #2196F3) !important;\r\n}\r\n\r\n.treelist .treelist_node.disable > .treelist_node-mnu {\r\n\tcolor: var(--main-text-c-disable, #D4D4D4);\r\n}\r\n\r\n.treelist .treelist_node .treelist-expand_icon {\r\n\tdisplay: inline-block;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\tbackground-position: center;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.treelist .treelist_node .treelist-expand_icon[aria-hidden="true"] {\r\n\topacity: 0;\r\n}\r\n\r\n.treelist .treelist_node:not(.treelist_node_end).open > .treelist_node-mnu .treelist-expand_icon {\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.treelist .treelist_node-title {\r\n\tmax-width: 85%;\r\n\tmargin-left: 4px;\r\n\ttext-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n} \r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
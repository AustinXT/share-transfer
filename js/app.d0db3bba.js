(function(t){function e(e){for(var a,r,o=e[0],n=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);m&&m(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var t,e=0;e<s.length;e++){for(var l=s[e],a=!0,o=1;o<l.length;o++){var n=l[o];0!==i[n]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=l[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var l=a[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=t,r.c=a,r.d=function(t,e,l){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(l,a,function(e){return t[e]}.bind(null,a));return l},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/share-transfer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=n;s.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"034f":function(t,e,l){"use strict";l("85ec")},"125b":function(t,e,l){},"31f2":function(t,e,l){"use strict";l("ebce")},"56d7":function(t,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var a=l("2b0e"),i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("HelloWorld")],1)},s=[],r=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"layout"}},[l("div",{attrs:{id:"sider"}},[t._m(0),l("div",{attrs:{id:"tree"}},[l("el-card",[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",[t._v("公告类型")]),l("i",{staticClass:"el-icon-caret-left",staticStyle:{float:"right"}})]),l("el-input",{attrs:{placeholder:"输入关键字进行过滤",size:"small"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),l("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.docTree,props:t.defaultProps,"filter-node-method":t.filterNode,"highlight-current":!0,accordion:!0},on:{"node-click":t.addTab}})],1)],1)]),l("div",{attrs:{id:"content"}},[l("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":t.removeTab},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,(function(t){return l("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[l(t.content,{tag:"component"})],1)})),1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"logo"}},[a("img",{staticStyle:{height:"28px",margin:"7px 5px 6px 5px"},attrs:{src:l("b640"),alt:"logo"}}),a("div",{staticStyle:{color:"#C4CACF","font-size":"28px"}},[t._v("|")]),a("div",{staticStyle:{"font-size":"24px",color:"#3768A1","margin-left":"5px","font-family":"'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif"}},[t._v("Memect Editor")])])}],n=(l("4de4"),l("4160"),l("c975"),l("b0c0"),l("159b"),function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main"},[l("el-card",{staticClass:"form"},[l("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[l("div",[l("el-button",{staticStyle:{color:"#3768A1"},attrs:{type:"text"}},[t._v("信息填报")]),l("el-button",{staticStyle:{color:"#C0C4CC"},attrs:{type:"text"}},[t._v("XBRL")])],1),l("div",[l("el-upload",{staticClass:"header-button",attrs:{action:"http://yapi.austinxt.com:3001/mock/8/postFile","file-list":t.fileList,"on-success":t.getFormDoc}},[l("el-button",{attrs:{size:"mini"}},[t._v("导入")])],1),l("el-button",{attrs:{size:"mini"},on:{click:t.submitForm}},[t._v("提交")])],1)]),l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}}),l("el-collapse-item",{attrs:{title:"公告声明",name:"2"}}),l("el-collapse-item",{attrs:{title:"一、股东股权解除质押情况",name:"3"}},[l("el-form",{staticClass:"form3",attrs:{"label-position":"right","label-width":"200px",model:t.form}},[l("el-form-item",{attrs:{label:"解押股东解除质押情况："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value1,callback:function(e){t.$set(t.form,"value1",e)},expression:"form.value1"}})],1),l("el-form-item",{attrs:{label:"解除质押股数（股）："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value2,callback:function(e){t.$set(t.form,"value2",e)},expression:"form.value2"}})],1),l("el-form-item",{attrs:{label:"解押股份占公司股份的比例："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value3,callback:function(e){t.$set(t.form,"value3",e)},expression:"form.value3"}})],1),l("el-form-item",{attrs:{label:"股份性质："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value4,callback:function(e){t.$set(t.form,"value4",e)},expression:"form.value4"}})],1),l("el-form-item",{attrs:{label:"质押开始日期："}},[l("el-date-picker",{attrs:{size:"small",type:"date"},model:{value:t.form.value5,callback:function(e){t.$set(t.form,"value5",e)},expression:"form.value5"}})],1),t.validate?t._e():l("div",{staticStyle:{color:"red","margin-left":"200px"}},[t._v("质押日期大于解押日期")]),l("el-form-item",{attrs:{label:"质押解除日期："}},[l("el-date-picker",{attrs:{size:"small",type:"date"},model:{value:t.form.value6,callback:function(e){t.$set(t.form,"value6",e)},expression:"form.value6"}})],1),t.validate?t._e():l("div",{staticStyle:{color:"red","margin-left":"200px"}},[t._v("解押日期小于质押日期")]),l("div",{staticStyle:{margin:"10px auto 0 auto","text-align":"center"}},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.clearForm}},[t._v("重置")]),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.saveForm}},[t._v("保存")])],1)],1)],1),l("el-collapse-item",{attrs:{title:"二、股东持股及股权质押情况",name:"4"}}),l("el-collapse-item",{attrs:{title:" 三、备查文件目录",name:"4"}})],1)],1),0===t.rightPane?l("el-card",{staticClass:"preview"},[l("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[l("el-button",{staticStyle:{color:"#3768A1"},attrs:{type:"text"}},[t._v("预览")]),l("el-button",{staticStyle:{color:"#C0C4CC"},attrs:{type:"text"},on:{click:function(e){t.rightPane=1}}},[t._v("验证信息")])],1),l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}}),l("el-collapse-item",{attrs:{title:"公告声明",name:"2"}}),l("el-collapse-item",{attrs:{title:"一、股东股权解除质押情况",name:"3"}},[l("el-table",{staticStyle:{width:"100%",margin:"5px"},attrs:{data:t.tableData,border:"","header-cell-style":{"text-align":"center"}}},[l("el-table-column",{attrs:{prop:"value1",label:"股东名称","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value2",label:"解除质押股数（股）","min-width":"100"}}),l("el-table-column",{attrs:{prop:"value3",label:"解押股份占公司股份的比例","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value4",label:"股份性质","min-width":"60"}}),l("el-table-column",{attrs:{prop:"value5",label:"质押开始日期","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value6",label:"质押解除日期","min-width":"80"}})],1)],1),l("el-collapse-item",{attrs:{title:"二、股东持股及股权质押情况",name:"4"}}),l("el-collapse-item",{attrs:{title:" 三、备查文件目录",name:"4"}})],1)],1):l("el-card",{staticClass:"preview"},[l("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[l("el-button",{staticStyle:{color:"#C0C4CC"},attrs:{type:"text"},on:{click:function(e){t.rightPane=0}}},[t._v("预览")]),l("el-button",{staticStyle:{color:"#3768A1"},attrs:{type:"text"}},[t._v("验证信息")])],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol1,size:"mini","header-cell-style":{background:"#f5f7f9"}}},[l("el-table-column",{attrs:{prop:"item",label:"基本要素验证（6）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol2,size:"mini","header-cell-style":{background:"#f5f7f9"}}},[l("el-table-column",{attrs:{prop:"item",label:"XBRL实例文档结构验证（6）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol3,size:"mini","header-cell-style":{background:"#f5f7f9"}}},[l("el-table-column",{attrs:{prop:"item",label:"分类标准计算关系验证（0）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1)],1)],1)}),c=[],m={data:function(){return{form:{},tableData:[],formDoc:{value1:"李和鑫",value2:"10,000,000",value3:"7.75",value4:"限售",value5:"2018-5-31",value6:"2020-7-17"},rightPane:0,validate:!0,activeNames:[],fileList:[],validateCol1:[{item:"公告编号验证",state:1},{item:"公告名称验证",state:1},{item:"公告人验证",state:1},{item:"公告日期验证",state:1},{item:"证券代码验证",state:1},{item:"证券简称验证",state:1}],validateCol2:[{item:"抽象元素是否被实例化验证",state:1},{item:"单位定义验证",state:1},{item:"上下文定义验证",state:0},{item:"上下文引用验证",state:1},{item:"元素内容",state:1},{item:"证券简称验证",state:1}],validateCol3:[]}},methods:{submitForm:function(){var t=this;this.rightPane=2,setTimeout((function(){t.rightPane=1,t.validate=!1}),300)},saveForm:function(){this.tableData=[this.form]},clearForm:function(){this.form={},this.validate=!0},getFormDoc:function(){console.log(),this.form=this.formDoc}}},d=m,u=(l("8926"),l("2877")),b=Object(u["a"])(d,n,c,!1,null,null,null),f=b.exports,p=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main"},[l("el-card",{staticClass:"form"},[l("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[l("div",[l("el-button",{staticStyle:{color:"#3768A1"},attrs:{type:"text"}},[t._v("信息填报")]),l("el-button",{attrs:{type:"text",disabled:""}},[t._v("XBRL")])],1),l("div",[l("el-upload",{staticClass:"header-button",attrs:{action:"http://yapi.austinxt.com:3001/mock/8/postFile","file-list":t.fileList,"on-success":t.getFormDoc}},[l("el-button",{attrs:{size:"mini"}},[t._v("导入")])],1),l("el-button",{attrs:{size:"mini"},on:{click:t.submitForm}},[t._v("提交")])],1)]),l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}}),l("el-collapse-item",{attrs:{title:"公告声明",name:"2"}}),l("el-collapse-item",{attrs:{title:"一、股东股权解除质押情况",name:"3"}},[l("el-form",{staticClass:"form3",attrs:{"label-position":"right","label-width":"200px",model:t.form}},[l("el-form-item",{attrs:{label:"解押股东解除质押情况："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value1,callback:function(e){t.$set(t.form,"value1",e)},expression:"form.value1"}})],1),l("el-form-item",{attrs:{label:"解除质押股数（股）："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value2,callback:function(e){t.$set(t.form,"value2",e)},expression:"form.value2"}})],1),l("el-form-item",{attrs:{label:"解押股份占公司股份的比例："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value3,callback:function(e){t.$set(t.form,"value3",e)},expression:"form.value3"}})],1),l("el-form-item",{attrs:{label:"股份性质："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value4,callback:function(e){t.$set(t.form,"value4",e)},expression:"form.value4"}})],1),l("el-form-item",{attrs:{label:"质押开始日期："}},[l("el-date-picker",{attrs:{size:"small",type:"date"},model:{value:t.form.value5,callback:function(e){t.$set(t.form,"value5",e)},expression:"form.value5"}})],1),t.validate?t._e():l("div",{staticStyle:{color:"red","margin-left":"200px"}},[t._v("质押日期大于解押日期")]),l("el-form-item",{attrs:{label:"质押解除日期："}},[l("el-date-picker",{attrs:{size:"small",type:"date"},model:{value:t.form.value6,callback:function(e){t.$set(t.form,"value6",e)},expression:"form.value6"}})],1),t.validate?t._e():l("div",{staticStyle:{color:"red","margin-left":"200px"}},[t._v("解押日期小于质押日期")]),l("el-form-item",{attrs:{label:"质权人："}},[l("el-input",{attrs:{size:"small"},model:{value:t.form.value7,callback:function(e){t.$set(t.form,"value7",e)},expression:"form.value7"}})],1),l("el-button",{staticStyle:{display:"block",margin:"10px auto 0 auto"},attrs:{type:"primary",size:"mini"},on:{click:t.saveForm}},[t._v("保存")])],1)],1),l("el-collapse-item",{attrs:{title:"二、股东持股及股权质押情况",name:"4"}}),l("el-collapse-item",{attrs:{title:" 三、备查文件目录",name:"4"}})],1)],1),0===t.rightPane?l("el-card",{staticClass:"preview",attrs:{header:"预览"}},[l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}}),l("el-collapse-item",{attrs:{title:"公告声明",name:"2"}}),l("el-collapse-item",{attrs:{title:"一、股东股权解除质押情况",name:"3"}},[l("el-table",{staticStyle:{width:"100%",margin:"5px"},attrs:{data:t.tableData,border:"","header-cell-style":{"text-align":"center"}}},[l("el-table-column",{attrs:{prop:"value1",label:"股东名称","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value2",label:"解除质押股数（股）","min-width":"100"}}),l("el-table-column",{attrs:{prop:"value3",label:"解押股份占公司股份的比例","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value4",label:"股份性质","min-width":"60"}}),l("el-table-column",{attrs:{prop:"value5",label:"质押开始日期","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value6",label:"质押解除日期","min-width":"80"}}),l("el-table-column",{attrs:{prop:"value7",label:"质权人","min-width":"150"}})],1)],1),l("el-collapse-item",{attrs:{title:"二、股东持股及股权质押情况",name:"4"}}),l("el-collapse-item",{attrs:{title:" 三、备查文件目录",name:"4"}})],1)],1):l("el-card",{staticClass:"preview",attrs:{header:"验证信息"}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol1,size:"mini"}},[l("el-table-column",{attrs:{prop:"item",label:"基本要素验证（6）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol2,size:"mini"}},[l("el-table-column",{attrs:{prop:"item",label:"XBRL实例文档结构验证（6）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.validateCol3,size:"mini"}},[l("el-table-column",{attrs:{prop:"item",label:"分类标准计算关系验证（0）","min-width":"350"}}),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===t.rightPane?l("i",{staticClass:"el-icon-loading",staticStyle:{color:"#409EFF"}}):e.row.state?l("i",{staticClass:"el-icon-success",staticStyle:{color:"#67C23A"}}):l("i",{staticClass:"el-icon-error",staticStyle:{color:"#F56C6C"}}),l("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.state?"通过":"不通过"))])]}}])})],1)],1)],1)},v=[],h={data:function(){return{form:{},tableData:[],formDoc:{value1:"李和鑫",value2:"10,000,000",value3:"7.75",value4:"限售",value5:"2018-5-31",value6:"2020-7-17"},rightPane:0,validate:!0,activeNames:[],fileList:[],validateCol1:[{item:"公告编号验证",state:1},{item:"公告名称验证",state:1},{item:"公告人验证",state:1},{item:"公告日期验证",state:1},{item:"证券代码验证",state:1},{item:"证券简称验证",state:1}],validateCol2:[{item:"抽象元素是否被实例化验证",state:1},{item:"单位定义验证",state:1},{item:"上下文定义验证",state:0},{item:"上下文引用验证",state:1},{item:"元素内容",state:1},{item:"证券简称验证",state:1}],validateCol3:[]}},methods:{submitForm:function(){var t=this;this.rightPane=2,setTimeout((function(){t.rightPane=1,t.validate=!1}),300)},saveForm:function(){this.tableData=[this.form]},getFormDoc:function(){console.log(),this.form=this.formDoc}}},y=h,C=Object(u["a"])(y,p,v,!1,null,null,null),g=C.exports,x={name:"HelloWorld",components:{bulletin:f,"bulletin-edit":g},data:function(){return{editableTabsValue:"",editableTabs:[],filterText:"",docTree:[{id:"01",label:"01定期报告类",children:[{id:"101",label:"二级 1-1"}]},{id:"2",label:"02业绩预告、业绩快报类",children:[{id:"201",label:"二级 2-1"}]},{id:"3",label:"03公司治理类",children:[{id:"301",label:"二级 2-1"}]},{id:"4",label:"04公司经营类",children:[{id:"401",label:"二级 2-1"}]},{id:"5",label:"05日常业务办理类",children:[{id:"501",label:"二级 2-1"}]},{id:"6",label:"06公司信息变更类",children:[{id:"601",label:"二级 2-1"}]},{id:"7",label:"07定向发行及相关业务办理类",children:[{id:"701",label:"二级 2-1"}]},{id:"8",label:"08优先股及相关业务办理类",children:[{id:"801",label:"二级 2-1"}]},{id:"9",label:"09固定收益类",children:[{id:"901",label:"二级 2-1"}]},{id:"10",label:"10重大资产重组类",children:[{id:"1001",label:"二级 2-1"}]},{id:"11",label:"11收购类",children:[{id:"1101",label:"二级 2-1"}]},{id:"12",label:"12股权相关类",children:[{id:"1201",label:"1201股权解除质押公告",content:"bulletin"},{id:"1202",label:"1202股权解除质押公告修订",content:"bulletin-edit"},{id:"1203",label:"1203股权司法拍卖、托管、设定信托等其他类别公告"},{id:"1204",label:"1204股权受限解除公告"},{id:"1205",label:"1205股权异常波动公告"},{id:"1299",label:"1299其他股权相关公告"}]},{id:"13",label:"13股权激励类类",children:[{id:"1301",label:"二级 2-1"}]},{id:"14",label:"14员工持股计划类",children:[{id:"1401",label:"二级 2-1"}]},{id:"15",label:"15股份回购类",children:[{id:"1501",label:"二级 2-1"}]},{id:"16",label:"16风险事项类",children:[{id:"1601",label:"二级 2-1"}]},{id:"17",label:"17诚信情况类",children:[{id:"1701",label:"二级 2-1"}]},{id:"18",label:"18终止挂牌类公告",children:[{id:"1801",label:"二级 2-1"}]},{id:"19",label:"19做市类公告",children:[{id:"1901",label:"二级 2-1"}]},{id:"20",label:"20股票公开发行及相关业务办理类",children:[{id:"2001",label:"二级 2-1"}]},{id:"99",label:"99其他",children:[{id:"9901",label:"二级 2-1"}]},{id:"100",label:"00券商公告",children:[{id:"10001",label:"二级 2-1"}]},{id:"101",label:"AA首次信息披露"}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(t){this.$refs.tree.filter(t)}},methods:{addTab:function(t){!t.children&&t.content&&(this.editableTabs.push({title:t.label,name:t.id,content:t.content}),this.editableTabsValue=t.id)},removeTab:function(t){var e=this.editableTabs,l=this.editableTabsValue;l===t&&e.forEach((function(a,i){if(a.name===t){var s=e[i+1]||e[i-1];s&&(l=s.name)}})),this.editableTabsValue=l,this.editableTabs=e.filter((function(e){return e.name!==t}))},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)}}},S=x,w=(l("31f2"),Object(u["a"])(S,r,o,!1,null,null,null)),_=w.exports,k={name:"App",components:{HelloWorld:_}},F=k,z=(l("034f"),Object(u["a"])(F,i,s,!1,null,null,null)),P=z.exports,T=l("5c96"),$=l.n(T);l("0fae");a["default"].use($.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,l){},8926:function(t,e,l){"use strict";l("125b")},b640:function(t,e,l){t.exports=l.p+"img/logo.e3a9d2ea.jpg"},ebce:function(t,e,l){}});
//# sourceMappingURL=app.d0db3bba.js.map
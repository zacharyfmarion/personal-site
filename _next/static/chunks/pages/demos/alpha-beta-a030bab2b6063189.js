(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{6094:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos/alpha-beta",function(){return n(7652)}])},6522:function(t,e,n){"use strict";var r=n(2729),o=n(5893);n(7294);var i=n(1664),a=n.n(i),s=n(9821),c=n(964),l=n(565);function d(){let t=(0,r._)(["\n    flex-direction: column;\n    align-items: center;\n  "]);return d=function(){return t},t}let h=(0,c.default)(s.Flex).withConfig({componentId:"sc-4f0ebad0-0"})(["",";"],t=>t.dark&&"\n    background: ".concat(t.theme.colors.dark,";\n    color: #fff;\n  ")),f=(0,c.css)(["color:inherit;background-color:transparent;font-size:14px;font-weight:400;padding:8px;display:inline-flex;align-items:center;align-self:stretch;text-decoration:none;white-space:nowrap;cursor:pointer;"]),p=(0,c.default)(s.Flex).withConfig({componentId:"sc-4f0ebad0-1"})(["a{",";}"],f),u=c.default.a.withConfig({componentId:"sc-4f0ebad0-2"})(["",";"],f),x=(0,c.default)(s.Container).withConfig({componentId:"sc-4f0ebad0-3"})(["display:flex;justify-content:space-between;min-height:75px;flex:1 1 auto;",";"],l.Z.mobile(d()));e.Z=t=>{let{author:e,dark:n}=t;return(0,o.jsx)(h,{justifyContent:"center",px:4,py:4,dark:n,children:(0,o.jsxs)(x,{children:[(0,o.jsx)(s.Flex,{alignItems:"center",children:(0,o.jsxs)(s.Text,{fontSize:1,children:[(0,o.jsx)(u,{href:"http://zacharyfmarion.io",children:e}),"\xa9 ",new Date().getFullYear()]})}),(0,o.jsxs)(p,{alignItems:"center",children:[(0,o.jsx)(a(),{href:"/posts",children:"Latest Posts"}),(0,o.jsx)(u,{href:"https://github.com/zacharyfmarion",target:"_blank",children:"Github"}),(0,o.jsx)(u,{href:"https://twitter.com/zacfmarion",target:"_blank",children:"Twitter"})]})]})})}},147:function(t,e,n){"use strict";var r=n(5893);n(7294);var o=n(1664),i=n.n(o);let a=n(964).default.div.withConfig({componentId:"sc-49e8aa94-0"})(["display:inline-flex;cursor:pointer;a{text-decoration:none;color:",";}"],t=>t.color||"#fff");e.Z=t=>{let{color:e,...n}=t;return(0,r.jsx)(a,{color:e,children:(0,r.jsx)(i(),{...n})})}},4857:function(t,e,n){"use strict";n.d(e,{Z:function(){return E}});var r,o,i,a,s=n(2729),c=n(5893),l=n(7294),d=n(1664),h=n.n(d),f=n(964),p=n(9821),u=n(565);class x extends l.Component{componentDidMount(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){return this.props.children(this.state.offset)}constructor(...t){super(...t),this.state={offset:0},this.handleScroll=()=>{this.setState({offset:window.scrollY})}}}function g(){return(g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(){return(m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function b(){let t=(0,s._)(["\n    display: block;\n\n    fill: ",";\n  "]);return b=function(){return t},t}function w(){let t=(0,s._)(["\n    display: ",";\n    position: fixed;\n    top: 60px;\n    left: 0;\n    right: 0;\n    flex-direction: column;\n    background: #fff;\n    padding: 15px;\n    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);\n\n    & > div > a {\n      color: #000 !important;\n      width: 100%;\n    }\n  "]);return w=function(){return t},t}function j(){let t=(0,s._)(["\n    padding: 10px;\n    font-size: 1.3em;\n  "]);return j=function(){return t},t}class k extends l.Component{render(){let{light:t,dark:e}=this.props,n=n=>t||this.state.open||n>0?"light":e?"dark":"transparent";return(0,c.jsx)(x,{children:t=>(0,c.jsx)(M,{bg:"#fff",background:n(t),children:(0,c.jsxs)(_,{children:[(0,c.jsx)(p.Heading,{fontSize:18,children:(0,c.jsx)(Z,{children:(0,c.jsx)(h(),{href:"/",children:"Zachary Marion"})})}),!this.state.open&&(0,c.jsx)(C,{background:n(t),onClick:this.toggleMenu}),this.state.open&&(0,c.jsx)(y,{background:n(t),onClick:this.toggleMenu}),(0,c.jsxs)(I,{alignItems:"center",open:this.state.open,onClick:this.toggleMenu,children:[(0,c.jsx)(Z,{children:(0,c.jsx)(h(),{href:"/demos",children:"Demos"})}),(0,c.jsx)(Z,{children:(0,c.jsx)(h(),{href:"/posts",children:"Blog"})}),(0,c.jsx)(Z,{children:(0,c.jsx)(h(),{href:"/contact",children:"Contact"})})]})]})})})}constructor(...t){super(...t),this.state={open:!1},this.toggleMenu=()=>{this.setState({open:!this.state.open})}}}let v=(0,f.css)(["display:none;cursor:pointer;",";"],u.Z.mobile(b(),t=>{let{background:e}=t;switch(e){case"light":return"#000";case"dark":case"transparent":return"#fff"}})),C=(0,f.default)(function(t){return l.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},t),r||(r=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),o||(o=l.createElement("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})))}).withConfig({componentId:"sc-cbbb1914-0"})(["",";"],v),y=(0,f.default)(function(t){return l.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},t),i||(i=l.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),a||(a=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))}).withConfig({componentId:"sc-cbbb1914-1"})(["",";"],v),I=(0,f.default)(p.Flex).withConfig({componentId:"sc-cbbb1914-2"})(["",";"],u.Z.mobile(w(),t=>t.open?"block":"none")),Z=(0,f.default)(p.Flex).withConfig({componentId:"sc-cbbb1914-3"})(["a{text-decoration:none;margin:0 10px;padding-bottom:4px;cursor:pointer;&:hover{border-bottom:2px solid ",";}}",";"],t=>t.theme.colors.primary,u.Z.mobile(j())),M=(0,f.default)(p.Flex).withConfig({componentId:"sc-cbbb1914-4"})(["position:fixed;top:0;z-index:1;width:100%;"," transition:all 0.3s linear;"],t=>{let{background:e,theme:n}=t;switch(e){case"light":return"\n          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);\n          background: #fff;\n          a { color: #000 !important; }\n        ";case"dark":return"\n          box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);\n          background: ".concat(n.colors.dark,";\n          a { color: #fff !important; }\n        ");case"transparent":return"\n          background: transparent;\n          a { color: #fff !important; }\n        "}}),_=(0,f.default)(p.Container).withConfig({componentId:"sc-cbbb1914-5"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:60px;min-height:60px;flex:1 1 auto;"]);var E=k},3457:function(t,e,n){"use strict";var r=n(5893),o=n(7294),i=n(9821),a=n(964),s=n(4857),c=n(6522),l=n(147);n(565);class d extends o.Component{render(){let{title:t,baseLink:e,link:n,children:o}=this.props;return(0,r.jsxs)(x,{flexDirection:"column",children:[(0,r.jsx)(s.Z,{dark:!0}),(0,r.jsx)(f,{children:(0,r.jsx)(p,{p:3,children:(0,r.jsxs)("span",{children:[(0,r.jsx)(l.Z,{href:e,color:"black",children:"Demos"})," ",(0,r.jsx)(h,{children:"/"}),(0,r.jsx)(l.Z,{href:n,color:"black",children:t})]})})}),(0,r.jsx)(u,{children:o}),(0,r.jsx)(c.Z,{author:"Zachary Marion",dark:!0})]})}}let h=a.default.span.withConfig({componentId:"sc-48f2b137-0"})(["padding:0 8px;"]),f=(0,a.default)(i.Flex).withConfig({componentId:"sc-48f2b137-1"})(["background:#f4f8fb;margin-bottom:20px;"]),p=(0,a.default)(i.Container).withConfig({componentId:"sc-48f2b137-2"})(["text-align:left;width:100%;"]);(0,a.default)(i.Text).withConfig({componentId:"sc-48f2b137-3"})(["width:100%;"]),(0,a.default)(i.Heading).withConfig({componentId:"sc-48f2b137-4"})(["width:100%;"]);let u=(0,a.default)(i.Container).withConfig({componentId:"sc-48f2b137-5"})(["display:flex;flex-direction:column;align-items:center;text-align:left;flex:1 1 auto;width:100%;"]),x=(0,a.default)(i.Flex).withConfig({componentId:"sc-48f2b137-6"})(["padding-top:60px;min-height:100vh;"]);e.Z=d},7652:function(t,e,n){"use strict";n.r(e),n.d(e,{metadata:function(){return p}});var r=n(2729),o=n(5893),i=n(7294),a=n(964),s=n(7994),c=n(3457),l=n(6363),d=n(565),h=n(6746);function f(){let t=(0,r._)(["\n    margin-bottom: 15px; \n    width: 100%;\n    max-width: inherit;\n  "]);return f=function(){return t},t}let p={author:"Zachary Marion",title:"Alpha Beta Pruning",date:"09-23-2018",description:"Explore the Alpha-Beta Pruning algorithm using randomly generated svg trees",image:"https://images.unsplash.com/photo-1537998028529-0bb55c8a5b8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e98f803a6a3a9dbb1ae77c73e107749&auto=format&fit=crop&w=1950&q=80",link:"/demos/alpha-beta"};class u extends i.Component{componentDidMount(){this.getTree()}render(){let{tree:t,rewards:e}=this.state;return(0,o.jsxs)(c.Z,{baseLink:"/demos",...p,children:[(0,o.jsx)(x,{onClick:this.getTree,children:"Generate random tree"}),t&&(0,o.jsx)(s.Z,{alphaBeta:!0,rootNode:0,vertexMap:t,rewards:e,onError:this.handleError,treeOptions:{width:250,height:85}})]})}constructor(...t){super(...t),this.state={tree:null,rewards:null},this.getTree=()=>{let{tree:t,rewards:e}=(0,h.Z)({tree:new Map,rewards:new Map,node:0});this.setState({tree:t,rewards:e})},this.handleError=()=>{this.getTree()}}}let x=(0,a.default)(l.Z).withConfig({componentId:"sc-a22dc494-0"})(["max-width:300px;",";"],d.Z.mobile(f()));e.default=u},6746:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;let o=t=>{let{tree:e,rewards:n,node:i,highestIndex:a=0,depth:s=0}=t,c=r(0===s?1:0,3);if(e.set(i,[]),s>=3||0===c)return{tree:e,rewards:n,highestIndex:a};let l=i;for(let t=0;t<c;t++){let a=l+t+1;if(e.get(i).push(a),l=o({tree:e,rewards:n,node:a,highestIndex:a,depth:s+1}).highestIndex,0===e.get(a).length){let t=r(-10,10);n.set(a,t)}}return{tree:e,rewards:n,highestIndex:l}};var i=o},565:function(t,e,n){"use strict";var r=n(964);let[o,i,a,s]=n(1230).Z.breakpoints,c={mobile:o,tablet:i,desktop:a,giant:s};e.Z=Object.keys(c).reduce((t,e)=>(t[e]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(0,r.css)(["@media (max-width:","em){",";}"],c[e],(0,r.css)(...n))},t),{})}},function(t){t.O(0,[869,609,994,774,888,179],function(){return t(t.s=6094)}),_N_E=t.O()}]);
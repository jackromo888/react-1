(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"32T+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),o=n("NC8T");var l={},r={_frontmatter:l},i=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"PointerBox is a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"./BorderBox"}),"BorderBox")," component with a caret added to it."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PointerBox m={4} p={2} minHeight={100} bg="green.1" borderColor="green.5">\n  PointerBox\n</PointerBox>\n')),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"PointerBox components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON"),", ",Object(a.b)("inlineCode",{parentName:"p"},"LAYOUT"),", ",Object(a.b)("inlineCode",{parentName:"p"},"BORDER"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"FLEX")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"caret"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"bottom"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets the location of the caret. The format is ",Object(a.b)("inlineCode",{parentName:"td"},"[edge]-[position on edge]"),". For example, ",Object(a.b)("inlineCode",{parentName:"td"},"right-top")," will position the caret on the top of the right edge of the box. Use ",Object(a.b)("inlineCode",{parentName:"td"},"top"),", ",Object(a.b)("inlineCode",{parentName:"td"},"right"),", ",Object(a.b)("inlineCode",{parentName:"td"},"bottom"),", or ",Object(a.b)("inlineCode",{parentName:"td"},"left")," to position a caret in the center of that edge.")))))}c.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),o=n("oXiK"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("8gyx"),s=n("VhsB"),b=n("nkI/"),m=n("bWhc"),p=n("og4h"),d=n("sqpL"),u=Object(a.f)(o.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.Box,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(g,{items:e.items,depth:n+1}):null)})))}g.defaultProps={depth:0};var f=g,O=Object(a.f)(o.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),h=Object(a.f)(o.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(o.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),x=Object(a.f)(o.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(o.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,r=a.title,u=a.description,g=a.status,N=a.source,E=a.additionalContributors,C=void 0===E?[]:E;return i.a.createElement(o.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:r,description:u}),i.a.createElement(s.b,null),i.a.createElement(O,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.Box,{display:["none",null,null,"block"]},i.a.createElement(m.a,null)),i.a.createElement(h,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(j,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.Heading,null,r)),n.tableOfContents.items?i.a.createElement(x,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(y,null,g||N?i.a.createElement(o.Flex,{mb:3,alignItems:"center"},g?i.a.createElement(d.a,{status:g}):null,i.a.createElement(o.Box,{mx:"auto"}),N?i.a.createElement(p.a,{href:N}):null):null,n.tableOfContents.items?i.a.createElement(o.Box,{display:["block",null,"none"],mb:3},i.a.createElement(o.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(o.StyledOcticon,{icon:t?l.b:l.c,mr:2}),"Table of contents"),i.a.createElement(o.Box,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-pointer-box-md-794257e9575f1cb03fcf.js.map
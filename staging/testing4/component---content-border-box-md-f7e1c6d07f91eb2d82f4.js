(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{MzIs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),r=n("NC8T");var o={},l={_frontmatter:o},i=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"BorderBox is a Box component with a border. When no ",Object(a.b)("inlineCode",{parentName:"p"},"borderColor")," is present, the component defaults to a gray border."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<BorderBox>This is a BorderBox</BorderBox>\n")),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"BorderBox")," has default props set for ",Object(a.b)("inlineCode",{parentName:"p"},"borderWidth"),", ",Object(a.b)("inlineCode",{parentName:"p"},"borderStyle"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"borderColor"),". This means that you cannot use ",Object(a.b)("inlineCode",{parentName:"p"},"border={0} borderBottom={1}")," or similar patterns; instead, use individual properties like ",Object(a.b)("inlineCode",{parentName:"p"},"borderWidth={0} borderBottomWidth={1}"),"."),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"BorderBox components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON"),", ",Object(a.b)("inlineCode",{parentName:"p"},"LAYOUT"),", ",Object(a.b)("inlineCode",{parentName:"p"},"BORDER"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"FLEX")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Prop name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"borderWidth"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"'1px'"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets the border, use theme values or provide your own.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"borderStyle"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"'solid'"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets the border style, use theme values or provide your own.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"borderColor"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"'gray.2' (from theme)"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets the border color, use theme values or provide your own.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"borderRadius"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String or Number"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"2 (from theme)"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets the border radius, use theme values or provide your own.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"boxShadow"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Sets box shadow, use theme values or provide your own.")))))}b.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),r=n("oXiK"),o=n("aOgs"),l=n("q1tI"),i=n.n(l),b=n("8gyx"),c=n("VhsB"),s=n("nkI/"),d=n("bWhc"),m=n("og4h"),p=n("sqpL"),u=Object(a.f)(r.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function O(e){var t=e.items,n=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(r.Box,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(r.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var g=O,j=Object(a.f)(r.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),f=Object(a.f)(r.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),h=Object(a.f)(r.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),N=Object(a.f)(r.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),y=Object(a.f)(r.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,l=a.title,u=a.description,O=a.status,x=a.source,C=a.additionalContributors,B=void 0===C?[]:C;return i.a.createElement(r.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(b.a,{title:l,description:u}),i.a.createElement(c.b,null),i.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(r.Box,{display:["none",null,null,"block"]},i.a.createElement(d.a,null)),i.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(h,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(r.Heading,null,l)),n.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(r.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(g,{items:n.tableOfContents.items})):null,i.a.createElement(y,null,O||x?i.a.createElement(r.Flex,{mb:3,alignItems:"center"},O?i.a.createElement(p.a,{status:O}):null,i.a.createElement(r.Box,{mx:"auto"}),x?i.a.createElement(m.a,{href:x}):null):null,n.tableOfContents.items?i.a.createElement(r.Box,{display:["block",null,"none"],mb:3},i.a.createElement(r.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(r.StyledOcticon,{icon:t?o.b:o.c,mr:2}),"Table of contents"),i.a.createElement(r.Box,{pt:1},i.a.createElement(g,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-border-box-md-f7e1c6d07f91eb2d82f4.js.map
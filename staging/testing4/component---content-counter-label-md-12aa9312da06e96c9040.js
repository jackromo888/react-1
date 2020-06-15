(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3lxW":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var r={},o={_frontmatter:r},i=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the CounterLabel component to add a count to navigational elements and buttons."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<CounterLabel>12</CounterLabel>\n<CounterLabel scheme={'gray'}>13</CounterLabel>\n<CounterLabel scheme={'gray-light'}>13</CounterLabel>\n")),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"CounterLabel components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"scheme"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Pass in 'gray' for a darker gray background and white text, or 'gray-light' for a lighter gray background and dark text. Omitting the scheme prop renders the default counter scheme")))))}c.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),r=n("aOgs"),o=n("q1tI"),i=n.n(o),c=n("8gyx"),s=n("VhsB"),m=n("nkI/"),b=n("bWhc"),u=n("og4h"),p=n("sqpL"),d=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return i.a.createElement(d,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(g,{items:e.items,depth:n+1}):null)})))}g.defaultProps={depth:0};var f=g,h=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),O=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),y=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),j=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),x=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,d=a.description,g=a.status,E=a.source,C=a.additionalContributors,k=void 0===C?[]:C;return i.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:o,description:d}),i.a.createElement(s.b,null),i.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.Box,{display:["none",null,null,"block"]},i.a.createElement(b.a,null)),i.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(y,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.Heading,null,o)),n.tableOfContents.items?i.a.createElement(j,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(f,{items:n.tableOfContents.items})):null,i.a.createElement(x,null,g||E?i.a.createElement(l.Flex,{mb:3,alignItems:"center"},g?i.a.createElement(p.a,{status:g}):null,i.a.createElement(l.Box,{mx:"auto"}),E?i.a.createElement(u.a,{href:E}):null):null,n.tableOfContents.items?i.a.createElement(l.Box,{display:["block",null,"none"],mb:3},i.a.createElement(l.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),i.a.createElement(l.Box,{pt:1},i.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(k.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-counter-label-md-12aa9312da06e96c9040.js.map
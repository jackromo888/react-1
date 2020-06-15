(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/H2E":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),l=a("NC8T");var r={},o={_frontmatter:r},i=l.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(i,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Use StateLabel components to show the status of an issue or pull request."),Object(n.b)("h2",null,"Default example"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<StateLabel status="issueOpened">Open</StateLabel>\n<StateLabel status="issueClosed">Closed</StateLabel>\n<StateLabel status="pullOpened">Open</StateLabel>\n<StateLabel status="pullClosed">Closed</StateLabel>\n<StateLabel status="pullMerged">Merged</StateLabel>\n<StateLabel status="draft">Draft</StateLabel>\n')),Object(n.b)("h2",null,"System props"),Object(n.b)("p",null,"StateLabel components get ",Object(n.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(n.b)("h2",null,"Component props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"variant"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"'normal'"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"a value of ",Object(n.b)("inlineCode",{parentName:"td"},"small")," or ",Object(n.b)("inlineCode",{parentName:"td"},"normal")," results in a smaller or larger version of the StateLabel.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"status"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Can be one of ",Object(n.b)("inlineCode",{parentName:"td"},"issueOpened"),", ",Object(n.b)("inlineCode",{parentName:"td"},"issueClosed"),", ",Object(n.b)("inlineCode",{parentName:"td"},"pullOpened"),", ",Object(n.b)("inlineCode",{parentName:"td"},"pullClosed"),", ",Object(n.b)("inlineCode",{parentName:"td"},"pullMerged"),", or ",Object(n.b)("inlineCode",{parentName:"td"},"draft"),".")))))}s.isMDXComponent=!0},NC8T:function(e,t,a){"use strict";var n=a("UutA"),l=a("oXiK"),r=a("aOgs"),o=a("q1tI"),i=a.n(o),s=a("8gyx"),c=a("VhsB"),b=a("nkI/"),m=a("bWhc"),p=a("og4h"),d=a("sqpL"),u=Object(n.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,a=e.depth;return i.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.Box,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(g,{items:e.items,depth:a+1}):null)})))}g.defaultProps={depth:0};var O=g,f=Object(n.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),j=Object(n.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),h=Object(n.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),y=Object(n.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(n.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=a.frontmatter,o=n.title,u=n.description,g=n.status,x=n.source,C=n.additionalContributors,E=void 0===C?[]:C;return i.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:o,description:u}),i.a.createElement(c.b,null),i.a.createElement(f,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.Box,{display:["none",null,null,"block"]},i.a.createElement(m.a,null)),i.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(h,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.Heading,null,o)),a.tableOfContents.items?i.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:c.a+24,maxHeight:"calc(100vh - "+c.a+"px - 24px)"},i.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(O,{items:a.tableOfContents.items})):null,i.a.createElement(N,null,g||x?i.a.createElement(l.Flex,{mb:3,alignItems:"center"},g?i.a.createElement(d.a,{status:g}):null,i.a.createElement(l.Box,{mx:"auto"}),x?i.a.createElement(p.a,{href:x}):null):null,a.tableOfContents.items?i.a.createElement(l.Box,{display:["block",null,"none"],mb:3},i.a.createElement(l.Details,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},i.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),i.a.createElement(l.Box,{pt:1},i.a.createElement(O,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:a.editUrl,contributors:a.contributors.concat(E.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-state-label-md-9847b9cbb7cdcc15dd2b.js.map
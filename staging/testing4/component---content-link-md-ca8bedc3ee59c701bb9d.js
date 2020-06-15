(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("8gyx"),b=n("VhsB"),s=n("nkI/"),m=n("bWhc"),p=n("og4h"),d=n("sqpL"),u=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return o.a.createElement(u,{as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(g,{items:e.items,depth:n+1}):null)})))}g.defaultProps={depth:0};var O=g,j=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),f=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),h=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),y=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,i=a.title,u=a.description,g=a.status,k=a.source,x=a.additionalContributors,C=void 0===x?[]:x;return o.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:i,description:u}),o.a.createElement(b.b,null),o.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.Box,{display:["none",null,null,"block"]},o.a.createElement(m.a,null)),o.a.createElement(f,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(h,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.Heading,null,i)),n.tableOfContents.items?o.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:b.a+24,maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(O,{items:n.tableOfContents.items})):null,o.a.createElement(N,null,g||k?o.a.createElement(l.Flex,{mb:3,alignItems:"center"},g?o.a.createElement(d.a,{status:g}):null,o.a.createElement(l.Box,{mx:"auto"}),k?o.a.createElement(p.a,{href:k}):null):null,n.tableOfContents.items?o.a.createElement(l.Box,{display:["block",null,"none"],mb:3},o.a.createElement(l.Details,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},o.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),o.a.createElement(l.Box,{pt:1},o.a.createElement(O,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))})))))}},uLCD:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var r={},i={_frontmatter:r},o=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(o,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Link component styles anchor tags with default blue styling and hover text decoration. ",Object(a.b)("inlineCode",{parentName:"p"},"Link")," is used for destinations, or moving from one page to another."),Object(a.b)("p",null,"In special cases where you'd like a ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," styled like a ",Object(a.b)("inlineCode",{parentName:"p"},"Link"),", use ",Object(a.b)("inlineCode",{parentName:"p"},"<Link as='button'>"),". Make sure to provide a click handler with ",Object(a.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Important:")," When using the ",Object(a.b)("inlineCode",{parentName:"p"},"as")," prop, be sure to always render an accessible element type, like ",Object(a.b)("inlineCode",{parentName:"p"},"a"),", ",Object(a.b)("inlineCode",{parentName:"p"},"button"),", ",Object(a.b)("inlineCode",{parentName:"p"},"input"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"summary"),"."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link mb={1} href="https://github.com">\n  Link\n</Link>\n')),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"Link components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," and ",Object(a.b)("inlineCode",{parentName:"p"},"TYPOGRAPHY")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/testing4/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"href"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"URL to be used for the Link")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"muted"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"false"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Uses light gray for Link color, and blue on hover")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"underline"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"false"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Adds underline to the Link")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"as"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"'a'"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Can be 'a', 'button', 'input', or 'summary'")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-link-md-ca8bedc3ee59c701bb9d.js.map
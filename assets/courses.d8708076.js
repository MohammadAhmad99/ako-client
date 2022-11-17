import{u as h,C as c,o as m,a as E,D as I,b as F,c as B,d as L,M,A as H,e as P,L as $,B as O,f as _,P as f,g as j}from"./index-e603a9b3.js";import{r as C,aB as z,aq as U,ar as G,ah as q}from"./@chakra-ui/icons.2b06a178.js";import{j as e,m as d,n as K,d as n,o as N,p as A,b as V,aa as W,T as D,e as b,as as g,t as J,B as Q,M as X,v as Y,k as Z,w as ee,x,ai as te,I as ue,H as re}from"./@chakra-ui/react.8bdcb90e.js";import{L as oe}from"./LoadingList.f7d10c6d.js";import"./framer-motion.81a66f27.js";const se=t=>{const{userStore:{me:o},pageStore:{coursesStore:u}}=h();return C.exports.useEffect(()=>{u.setShowedStatus(void 0)},[]),o&&(o.isAdmin||o.isTeacher?e(d,{...t,children:e(K,{variant:"solid-rounded",children:n(N,{justifyContent:"center",...t,children:[e(A,{onClick:()=>u.setShowedStatus(void 0),children:"\u0627\u0644\u0643\u0644"}),e(A,{onClick:()=>u.setShowedStatus(c.PUBLISHED),children:"\u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629"}),e(A,{onClick:()=>u.setShowedStatus(c.DRAFT),children:"\u0627\u0644\u0645\u0633\u0648\u062F\u0627\u062A"})]})})}):null)},ie=({render:t,isMyCoursesPage:o})=>{const{userStore:{me:u},courseStore:s,pageStore:{coursesStore:r}}=h(),[i,l]=C.exports.useState(null),{onOpen:p,onClose:k,isOpen:v}=V(),{setCourseStatus:w}=E(),{courses:S,isLoading:R}=s,T=a=>{l(a),p()};if(C.exports.useEffect(()=>{var a;u!==null&&s.loadCourses({category_id:(a=r.selectedCategory)==null?void 0:a.id,status:u.isAdmin||u.isTeacher?r.showedStatus:c.PUBLISHED})},[s,r.selectedCategory,r.showedStatus]),S===null||R)return e(oe,{});var y=!1;return n(d,{children:[i&&e(I,{course:i,onClose:k,isOpen:v}),S.length!==0?n(W,{templateColumns:{sm:"repeat(auto-fill, minmax(400px, 1fr))"},gap:"4",children:[S.map(a=>{if(!(o===!0&&u&&!F(a,u.courses)))return y=!0,e(t,{course:a,onDelete:()=>T({id:a.id,title:a.title}),onSetStatus:w},a.id)}),!y&&e(d,{textAlign:"center",mt:"10",userSelect:"none",children:e(D,{color:"gray.500",children:"\u0644\u064A\u0633 \u0647\u0646\u0627\u0643 \u062F\u0648\u0631\u0627\u062A \u0645\u0634\u062A\u0631\u0643 \u0628\u0647\u0627 \u0628\u0639\u062F"})})]}):e(d,{textAlign:"center",mt:"10",userSelect:"none",children:n(D,{color:"gray.500",children:["\u0644\u064A\u0633 \u0647\u0646\u0627\u0643 \u062F\u0648\u0631\u0627\u062A \xA0",!r.selectedCategory&&!r.showedStatus?"\u0641\u064A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0628\u0639\u062F":`\u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u0639\u062F${r.showedStatus,""}`,"."]})})]})};var ne=m(ie);const ae=()=>n(b,{mb:"5",sx:{columnGap:"7px",rowGap:"5px"},children:[e(g,{height:"20px",width:"50px",borderRadius:"full"}),e(g,{height:"20px",width:"50px",borderRadius:"full"}),e(g,{height:"20px",width:"50px",borderRadius:"full"}),e(g,{height:"20px",width:"50px",borderRadius:"full"}),e(g,{height:"20px",width:"50px",borderRadius:"full"})]}),le=({render:t})=>{const{categoryStore:o,pageStore:{coursesStore:u}}=h(),s=B(),{categories:r,isLoading:i}=o;return C.exports.useEffect(()=>{o.loadCategories().catch(l=>s(l))},[o,s]),C.exports.useEffect(()=>u.setSelectedCategory(null),[]),r===null||i?e(ae,{}):e(J,{})};var de=m(le);const ce=({category:t})=>{var r,i,l,p;const{pageStore:{coursesStore:o}}=h(),u=((r=o.selectedCategory)==null?void 0:r.id)===t.id,s=()=>o.setSelectedCategory(t);return e(Q,{borderRadius:"full",variant:u?"solid":"outline",boxShadow:`inset 0 0 0px 1px ${(i=t.color)==null?void 0:i.hex}`,color:u?"white":(l=t.color)==null?void 0:l.hex,cursor:"pointer",transition:"all .1s",bg:u?`${(p=t.color)==null?void 0:p.hex}`:"none",_hover:{opacity:".8"},onClick:s,children:t.title})},he=({course:t,onDelete:o,onSetStatus:u})=>{const{userStore:{me:s}}=h(),{colorMode:r}=z(),i=L(),l=()=>i.push(`/courses/edit/${t.id}`);return s===null?null:n(d,{borderWidth:"1px",borderRadius:"lg",children:[(s.isAdmin||s.isTeacher)&&e(b,{justifyContent:"flex-end",children:e(d,{position:"absolute",zIndex:"1",padding:"10px",children:n(X,{isLazy:!0,children:[e(Y,{as:Z,backgroundColor:r==="dark"?"gray.700":"gray.100","aria-label":"Actions",icon:e(M,{size:"18px"}),_hover:{backgroundColor:r==="dark"?"gray.600":"gray.200"},_active:{backgroundColor:r==="dark"?"gray.600":"gray.200"}}),n(ee,{children:[e(x,{onClick:l,icon:e(U,{}),children:"\u062A\u0639\u062F\u064A\u0644"}),(()=>{switch(t.status){case c.DRAFT:return e(x,{onClick:()=>u(t.id,c.PUBLISHED),icon:e(P,{}),children:"\u0646\u0634\u0631"});case c.PUBLISHED:return e(x,{onClick:()=>u(t.id,c.DRAFT),icon:e(H,{}),children:"\u062D\u0641\u0638 \u0643\u0645\u0633\u0648\u062F\u0629"});default:return null}})(),e(x,{onClick:()=>o({id:t.id,title:t.title}),icon:e(G,{}),color:"red.500",children:"\u062D\u0630\u0641"})]})]})})}),n(te,{to:`/course/${t.id}`,as:$,display:"flex",flexDir:"column",h:"100%",textDecoration:"none",_visited:{textDecoration:"none"},_hover:{textDecoration:"none"},children:[e(d,{position:"relative",backgroundColor:q("gray.200","gray.700"),borderTopLeftRadius:"lg",borderTopRightRadius:"lg",children:t.image&&t.image.url&&e(ue,{fit:"cover",w:"100%",borderTopLeftRadius:"lg",borderTopRightRadius:"lg",src:t.image?`${O+t.image.url}`:void 0})}),e(b,{flexDir:"column",p:"0 10px",mt:"10px",pb:"20px",h:"100%",children:e(re,{as:"h2",fontSize:"xl",mt:"5px",children:t.title})})]})]})};var ge=m(he);const Ce=t=>{var i;const{userStore:{me:o}}=h(),u=L(),s=()=>u.push("/courses/create");if(o===null)return e(_,{});const r=(i=t==null?void 0:t.additionalOptions)==null?void 0:i.isMyCoursesPage;return n(f,{children:[e(f.Heading,{heading:r?"\u062F\u0648\u0631\u0627\u062A\u064A":"\u062C\u0645\u064A\u0639 \u0627\u0644\u062F\u0648\u0631\u0627\u062A",description:"",children:e(d,{mt:"5",children:(o.isAdmin||o.isTeacher)&&e(j,{onClick:s,ml:"auto",display:"block"})})}),n(f.Content,{mt:"10",children:[e(se,{mb:"7"}),e(de,{render:ce}),e(ne,{render:ge,isMyCoursesPage:r})]})]})};var Ae=m(Ce);export{Ae as default};
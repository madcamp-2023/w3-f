(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{673:function(e,t,l){Promise.resolve().then(l.bind(l,7524)),Promise.resolve().then(l.bind(l,1424))},1424:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var s=l(7437),a=l(3726),n=l(2173),r=l(2265),i=l(4010),c=e=>{let{columns:t,data:l,handleNoticeNumber:a}=e,{getTableProps:n,getTableBodyProps:c,headerGroups:d,rows:o,prepareRow:x}=(0,i.useTable)({columns:t,data:l});return(0,s.jsxs)("table",{...n(),children:[(0,s.jsx)("thead",{children:d.map((e,t)=>(0,r.createElement)("tr",{...e.getHeaderGroupProps(),key:t},e.headers.map((e,t)=>(0,r.createElement)("th",{...e.getHeaderProps(),key:t,className:"text-left align-top p-2"},e.render("Header")))))}),(0,s.jsx)("tbody",{...c(),children:o.map((e,t)=>(x(e),(0,r.createElement)("tr",{...e.getRowProps(),key:t},e.cells.map((e,l)=>(0,r.createElement)("td",{...e.getCellProps(),key:l,className:"text-left align-top p-2",onClick:()=>a(t)},e.render("Cell"))))))})]})},d=l(4873),o=l(8529),x=l.n(o),u=l(3368);let h=async e=>{let{title:t,content:l}=e;await n.Z.post(a.Jx+"/post",{title:t,content:l})};function m(e){let{isModalOpen:t,setIsModalOpen:l}=e,[a,n]=(0,r.useState)(""),[i,c]=(0,r.useState)("");return(0,s.jsx)(x(),{isOpen:t,style:{overlay:{backgroundColor:" rgba(0, 0, 0, 0.4)",width:"100%",height:"100vh",zIndex:"10",position:"fixed",top:"0",left:"0"},content:{width:"50vw",height:"75vh",zIndex:"150",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"10px",boxShadow:"2px 2px 2px rgba(0, 0, 0, 0.25)",backgroundColor:"white",justifyContent:"center",overflow:"auto"}},onRequestClose:()=>l(!1),shouldCloseOnOverlayClick:!1,children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-row w-full",children:[(0,s.jsx)("div",{className:"flex w-full justify-start items-center font-bold text-2xl ml-8",children:"게시판 작성"}),(0,s.jsx)("div",{className:"flex w-full justify-end items-center",children:(0,s.jsx)("button",{onClick:()=>l(!1),children:(0,s.jsx)(d.FMH,{size:30})})})]}),(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("input",{type:"text",id:"title",value:a,onChange:e=>n(e.target.value),className:"w-full border h-20 border-gray-500 p-4 mb-4 rounded-md",placeholder:"제목을 적어주세요."})}),(0,s.jsx)("div",{children:(0,s.jsx)("textarea",{id:"content",value:i,onChange:e=>c(e.target.value),className:"w-full border h-80 p-4 border-gray-500  mb-4 rounded-md",placeholder:"공지사항을 적어주세요."})}),(0,s.jsx)("div",{className:"flex justify-end mt-auto",children:(0,s.jsx)("button",{className:"bg-black text-white py-2 px-4 rounded",onClick:()=>{h({title:a,content:i}),n(""),c(""),(0,u.Z)({title:"게시판",text:"게시판을 작성하였습니다."}),l(!1)},children:"send"})})]})]})})}var f=l(8031),p=l(5883),j=l(210);async function b(e){let{page:t}=e;return(await n.Z.get(a.Jx+"/post",{params:{page:t}})).data}let v=e=>{let{text:t}=e,l=t.split("\n");return(0,s.jsx)("div",{className:"flex flex-row",children:(0,s.jsx)("div",{className:"mr-5",children:l.map((e,t)=>(0,s.jsx)("div",{className:"block pt-4 text-lg ",children:e},t))})})};function g(){var e,t;let[l,n]=(0,r.useState)(0),[i,d]=(0,r.useState)(1),[o,x]=(0,r.useState)(!1),[u,h]=(0,r.useState)(null),g=e=>{d(e)};(0,r.useEffect)(()=>{b({page:i}).then(e=>{h(e)}),n(0)},[i]);let N=(0,r.useMemo)(()=>[{accessor:"number",Header:"#",Cell:e=>{let{value:t}=e;return(0,s.jsx)("span",{className:"text-lg",children:t})}},{accessor:"title",Header:"제목",Cell:e=>{let{value:t}=e,l=t.length>30?t.substring(0,30)+"...":t;return(0,s.jsx)("span",{className:"text-lg hover:font-bold",children:l})}},{accessor:"createdDate",Header:"등록일",Cell:e=>{let{value:t}=e;return(0,s.jsx)("span",{className:"text-lg",children:t})}}],[]),w=(0,r.useMemo)(()=>u,[u]),y=(0,p.sJ)(j.K);return(0,s.jsx)("div",{className:"flex flex-col w-full justify-between",style:{height:"95vh"},children:(0,s.jsxs)("div",{className:"flex flex-row h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col basis-1/2 bg-white  p-12",children:[(0,s.jsx)("section",{className:"text-3xl font-bold mb-4",children:(0,s.jsx)("h1",{children:"게시판"})}),u&&(0,s.jsx)(c,{columns:N,data:w,handleNoticeNumber:e=>{n(e)}}),y&&"관리자"===y.name&&(0,s.jsxs)("section",{className:"flex justify-end mt-10 mr-10 items-end h-full",children:[(0,s.jsx)(f.K8d,{size:80,onClick:()=>x(!0)}),o&&(0,s.jsx)(m,{isModalOpen:o,setIsModalOpen:x})]}),(0,s.jsx)("section",{className:"mt-auto flex justify-center items-center",children:Array.from({length:a.Et},(e,t)=>t+1).map(e=>(0,s.jsx)("button",{onClick:()=>g(e),className:"p-2",style:{fontWeight:i===e?"bold":"normal"},children:e},e))})]}),(0,s.jsxs)("div",{className:"flex flex-col basis-1/2 bg-black text-white p-12",children:[(0,s.jsx)("div",{className:"text-3xl mb-4",children:u&&(null===(e=u[l])||void 0===e?void 0:e.title)}),(0,s.jsx)("div",{children:u&&(0,s.jsx)(v,{text:null===(t=u[l])||void 0===t?void 0:t.content})})]})]})})}}},function(e){e.O(0,[691,51,699,452,461,614,77,10,524,971,938,744],function(){return e(e.s=673)}),_N_E=e.O()}]);
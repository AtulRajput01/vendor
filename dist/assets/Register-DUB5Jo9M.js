import{u as f,r as a,j as e,L as b}from"./index-BVLntUA-.js";import{l as y}from"./tlogo1-w0QlOMSf.js";import{C as r}from"./index.esm-OMrcyoBq.js";import{a as w}from"./index-DTDyDBer.js";import{C as L,a as x}from"./CContainer-LIBSLkwT.js";import{C as k,a as i}from"./CRow-Cqaj2-K0.js";import{C as R,a as A}from"./CCardBody-BhP0jfyF.js";import{C as M}from"./CForm-CggMzn3e.js";import{C as t,a as o}from"./CInputGroupText-B1LFPW2N.js";import{c as S}from"./BillingInfo-b7LCQT_k.js";import{C as l}from"./CFormInput-CCvN3GNj.js";import{c as E}from"./cil-lock-locked-DmxpJbVL.js";var I=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M495.826,232a206.644,206.644,0,0,0-18.882-78.412,227.033,227.033,0,0,0-51.61-71.261C379.708,39.555,319.571,16,256,16A240,240,0,0,0,86.294,425.706a240,240,0,0,0,337.671,1.722l-22.4-22.856A206.824,206.824,0,0,1,256,464C141.309,464,48,370.691,48,256S141.309,48,256,48c112.748,0,208,87.925,208,192v36c0,28.673-25.122,52-56,52s-56-23.327-56-52V160H320v26.751a99.988,99.988,0,1,0,12.55,132.437C347.956,343.62,376.01,360,408,360c48.523,0,88-37.682,88-84V232ZM252,328a68,68,0,1,1,68-68A68.077,68.077,0,0,1,252,328Z' class='ci-primary'/>"],q=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z' class='ci-primary'/>"];const J=()=>{const h=f(),[c,u]=a.useState(""),[n,p]=a.useState(""),[m,C]=a.useState(""),[g,j]=a.useState(""),[v,d]=a.useState(""),N=async()=>{try{const s=await w.post("http://54.244.180.151:3002/api/auths/Register",{name:c,email:n,password:m,mobileNumber:g,role:"vendor"});d(s.data.message),s.status===200&&h("/login")}catch{d("Registration failed")}};return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:e.jsx(L,{children:e.jsx(k,{className:"justify-content-center",children:e.jsx(i,{md:9,lg:7,xl:6,children:e.jsx(R,{className:"p-4 bg-dark-gray image",style:{backgroundColor:"#FE3C00"},children:e.jsx(A,{className:"p-4",children:e.jsxs(M,{children:[e.jsx("div",{className:"mb-4 text-center",children:e.jsx("img",{src:y,alt:"Logo",style:{maxWidth:"30%",height:"auto"}})}),e.jsx("h1",{className:"text-center",children:"Register"}),e.jsx("p",{className:"text-center text-light",children:"Create your account"}),e.jsxs(t,{className:"mb-3",children:[e.jsx(o,{children:e.jsx(r,{icon:S})}),e.jsx(l,{placeholder:"Name",autoComplete:"name",value:c,onChange:s=>u(s.target.value),required:!0})]}),e.jsxs(t,{className:"mb-3",children:[e.jsx(o,{children:e.jsx(r,{icon:I})}),e.jsx(l,{placeholder:"Email",autoComplete:"email",value:n,onChange:s=>p(s.target.value),required:!0})]}),e.jsxs(t,{className:"mb-3",children:[e.jsx(o,{children:e.jsx(r,{icon:q})}),e.jsx(l,{placeholder:"Mobile Number",autoComplete:"mobile-number",onChange:s=>j(s.target.value),required:!0})]}),e.jsxs(t,{className:"mb-3",children:[e.jsx(o,{children:e.jsx(r,{icon:E})}),e.jsx(l,{type:"password",placeholder:"Password",autoComplete:"new-password",value:m,onChange:s=>C(s.target.value),required:!0})]}),e.jsxs("div",{className:"d-grid",children:[e.jsx(i,{className:"text-center",children:e.jsx(x,{style:{backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white"},className:"px-4",onClick:N,children:"Register"})}),e.jsx("p",{children:v}),e.jsx(i,{className:"text-center",children:e.jsx(b,{to:"/login",children:e.jsx(x,{color:"link",className:"px-0",style:{color:"white"},children:"Login"})})})]})]})})})})})})})};export{J as default};

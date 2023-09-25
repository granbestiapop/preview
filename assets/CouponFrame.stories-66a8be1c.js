import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{P as r}from"./index-8d47fad6.js";import{B as m}from"./Button-89d67dc1.js";import"./_commonjsHelpers-de833af9.js";const o=({primary:s,backgroundColor:u,size:i,label:d,title:c,subtitle:q,des:P,exp:N,tc:V,...w})=>e.jsxs("div",{className:"frame",children:[e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"title",children:c}),e.jsx("div",{className:"subtitle",children:q}),e.jsx("div",{className:"description",children:P}),e.jsx("div",{className:"expiration",children:N})]}),e.jsx("div",{className:"terms-container",children:e.jsx("div",{className:"terms",children:V})}),e.jsxs("div",{className:"buttons",children:[e.jsx(m,{label:"Ver Detalles",primary:!0,size:"large"}),e.jsx(m,{label:"Aplicar cupón",primary:!1,size:"large"})]})]});o.propTypes={primary:r.bool,backgroundColor:r.string,size:r.oneOf(["small","medium","large"]),label:r.string.isRequired,onClick:r.func};o.defaultProps={backgroundColor:null,primary:!1,size:"medium",title:"title",subtitle:"subtitle",des:"description",exp:"expiration",tc:"terms and conditions",onClick:void 0};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"CouponFrame",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},title:{defaultValue:{value:"'title'",computed:!1},required:!1},subtitle:{defaultValue:{value:"'subtitle'",computed:!1},required:!1},des:{defaultValue:{value:"'description'",computed:!1},required:!1},exp:{defaultValue:{value:"'expiration'",computed:!1},required:!1},tc:{defaultValue:{value:"'terms and conditions'",computed:!1},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};const R={title:"Example/CouponFrame",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},t={args:{primary:!0,label:"Button"}},l={args:{primary:!1,label:"Button"}},n={decorators:[s=>e.jsx("div",{style:{margin:"3em",backgroundColor:"red"},children:e.jsx(s,{})})]},a=()=>{const s=window.location.search,u=new URLSearchParams(s),i={};for(const[d,c]of u.entries())i[d]=c;return e.jsx(o,{...i})};var p,f,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,b,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,x,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    margin: '3em',
    backgroundColor: 'red'
  }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>]
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,C,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const allParams = {};
  for (const [key, value] of params.entries()) {
    allParams[key] = value;
  }
  return <CouponFrame {...allParams}></CouponFrame>;
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};a.__docgenInfo={description:"",methods:[],displayName:"Url"};const I=["Primary","Secondary","Mocked","Url"];export{n as Mocked,t as Primary,l as Secondary,a as Url,I as __namedExportsOrder,R as default};
//# sourceMappingURL=CouponFrame.stories-66a8be1c.js.map

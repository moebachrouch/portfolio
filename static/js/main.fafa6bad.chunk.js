(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{52:function(e,t,a){e.exports=a.p+"static/media/gustav.85933191.png"},53:function(e,t,a){e.exports=a.p+"static/media/selenium.23f5da3c.png"},58:function(e,t,a){e.exports=a(89)},63:function(e,t,a){},64:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),i=a.n(r),c=(a(63),a(7)),o=a(11),s=a(9),m=a(8),u=a(27),d=a(5),h=a(15),b=(a(64),a(28)),p=a(57),E=a(19),f=a(17);var g=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Moe Bachrouch"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:4},"Copyright \xa9 2020 - Moe Bachrouch. All Rights Reserved."))))},v=a(51);var y=function(e){return l.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center py-5"},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead front-weight-light"},e.text)))))},k=a(24),S=a(40);var C=function(e){var t=Object(S.b)({opacity:1,from:{opacity:0}});return l.a.createElement(S.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferred"},"View"))};var w=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},N=a(52),j=a.n(N),I=a(53),O=a.n(I),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(w,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Facebook Cleaner",subTitle:"Remove your Facebook History",imgSrc:O.a,link:"https://github.com/moebachrouch/facebook-cleaner",selected:!1},{id:1,title:"Root Finder",subTitle:"Incremental Search Root Finding Method",imgSrc:j.a,link:"https://github.com/MOEBACHROUCH/GRAPHIC-APPLICATION",selected:!1},{id:2,title:"Unison",subTitle:"Pure CSS, HTML, JS Website",link:"https://github.com/unison-inc-uottawa/unison",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var x=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(T,null))};var M=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var A=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(M,null,l.a.createElement("p",null,"Welcome,"),l.a.createElement("p",null,"My name is Moe and I'm a software developer."),l.a.createElement("p",null,"I have a Bachelor's degree in science, and I am now studying Software Engineering at the University of Ottawa. I enjoy coding and learning new software tools. I work with multiple languages including ",l.a.createElement("b",null,"Python")," and ",l.a.createElement("b",null,"Java"),"."),l.a.createElement("p",null,"Computers fascinate me, so I'm always learning new computer skills. I find both jardware and software interesting. Sometimes, I experiment with Arduinos. Other times, I do Web development using ",l.a.createElement("b",null,"HTML"),", ",l.a.createElement("b",null,"CSS"),", and ",l.a.createElement("b",null,"JavaScript"),"."),l.a.createElement("p",null,"When I'm not coding, I like to produce music using Logic Pro X, play with 3D printers, or go outside for a run. I'm a social guy and I like people, so I try to reconnect with friends on my free time."),l.a.createElement("p",null,"I'm always open to opportunities. Feel free to reach me at ",l.a.createElement("a",{href:"mailto: moe.bachrouch@gmail.com"},"moe.bachrouch@gmail.com")," for any inquiries."),l.a.createElement("p",null,"You can view my latest resume ",l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://drive.google.com/file/d/1Zd_RQ8mfPS9eTY8O_3Y0too1oS2nCsUZ/view?usp=sharing"},"here"),".")))},B=a(23),F=a(14),H=a(55),L=a(54),R=a.n(L),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(B.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),R.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,{title:this.props.title}),l.a.createElement(M,null,l.a.createElement(F.a,{onSubmit:this.handleSubmit},l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(F.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(F.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(F.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(H.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Moe Bachrouch",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Moe Bachrouch",subTitle:"Software Developer.",text:"Check out my projects below."},about:{title:"About"},contact:{title:l.a.createElement("p",null,"Let's Go for ",l.a.createElement("del",null,"Coffee")," Hot Chocolate")}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null,"Moe Bachrouch"),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(x,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(A,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(P,{title:e.state.contact.title})}}),l.a.createElement(g,null)))}}]),a}(l.a.Component);a(88);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.fafa6bad.chunk.js.map
import{SvelteComponent,append,attr,binding_callbacks,children,claim_element,claim_space,claim_text,detach,element,empty,init,insert,listen,noop,safe_not_equal,set_data,space,text,toggle_class}from"../web_modules/svelte/internal/index.mjs";function create_if_block_1(e){let n,i,f,m,s,t,h,r=e[0].type+"",l,d,u,o,a=(e[4]===e[2]?"copied":"copy")+"",c,p,g;return{c(){n=element("div"),i=element("span"),f=text("Layout:"),m=space(),s=element("pre"),t=element("code"),h=text("layouts/content/"),l=text(r),d=text(".svelte"),u=text(`
      `),o=element("button"),c=text(a),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var p,g,b,j,v=children(n);i=claim_element(v,"SPAN",{}),b=children(i),f=claim_text(b,"Layout:"),b.forEach(detach),m=claim_space(v),s=claim_element(v,"PRE",{class:!0}),p=children(s),t=claim_element(p,"CODE",{class:!0}),g=children(t),h=claim_text(g,"layouts/content/"),l=claim_text(g,r),d=claim_text(g,".svelte"),g.forEach(detach),u=claim_text(p,`
      `),o=claim_element(p,"BUTTON",{class:!0}),j=children(o),c=claim_text(j,a),j.forEach(detach),p.forEach(detach),v.forEach(detach),this.h()},h(){attr(t,"class","svelte-h385oz"),toggle_class(t,"selected",e[4]===e[2]),attr(o,"class","svelte-h385oz"),attr(s,"class","svelte-h385oz"),attr(n,"class","svelte-h385oz")},m(a,r){insert(a,n,r),append(n,i),append(i,f),append(n,m),append(n,s),append(s,t),append(t,h),append(t,l),append(t,d),e[6](t),append(s,u),append(s,o),append(o,c),p||(g=listen(o,"click",e[7]),p=!0)},p(e,n){n&1&&r!==(r=e[0].type+"")&&set_data(l,r),n&20&&toggle_class(t,"selected",e[4]===e[2]),n&20&&a!==(a=(e[4]===e[2]?"copied":"copy")+"")&&set_data(c,a)},d(t){t&&detach(n),e[6](null),p=!1,g()}}}function create_if_block(e){let n,i,p,f,s,t,m,r=(e[0].type==="index"?"":e[0].type+"/")+"",u,c=e[0].filename+"",l,h,o,a=(e[4]===e[3]?"copied":"copy")+"",d,g,v;return{c(){n=element("div"),i=element("span"),p=text("Content:"),f=space(),s=element("pre"),t=element("code"),m=text("content/"),u=text(r),l=text(c),h=text(`
      `),o=element("button"),d=text(a),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var g,v,j,y,b=children(n);i=claim_element(b,"SPAN",{}),j=children(i),p=claim_text(j,"Content:"),j.forEach(detach),f=claim_space(b),s=claim_element(b,"PRE",{class:!0}),g=children(s),t=claim_element(g,"CODE",{class:!0}),v=children(t),m=claim_text(v,"content/"),u=claim_text(v,r),l=claim_text(v,c),v.forEach(detach),h=claim_text(g,`
      `),o=claim_element(g,"BUTTON",{class:!0}),y=children(o),d=claim_text(y,a),y.forEach(detach),g.forEach(detach),b.forEach(detach),this.h()},h(){attr(t,"class","svelte-h385oz"),toggle_class(t,"selected",e[4]===e[3]),attr(o,"class","svelte-h385oz"),attr(s,"class","svelte-h385oz"),attr(n,"class","svelte-h385oz")},m(a,r){insert(a,n,r),append(n,i),append(i,p),append(n,f),append(n,s),append(s,t),append(t,m),append(t,u),append(t,l),e[8](t),append(s,h),append(s,o),append(o,d),g||(v=listen(o,"click",e[9]),g=!0)},p(e,n){n&1&&r!==(r=(e[0].type==="index"?"":e[0].type+"/")+"")&&set_data(u,r),n&1&&c!==(c=e[0].filename+"")&&set_data(l,c),n&24&&toggle_class(t,"selected",e[4]===e[3]),n&24&&a!==(a=(e[4]===e[3]?"copied":"copy")+"")&&set_data(d,a)},d(t){t&&detach(n),e[8](null),g=!1,v()}}}function create_fragment(e){let s,o,t=e[1].layout&&create_if_block_1(e),n=e[1].content&&create_if_block(e);return{c(){t&&t.c(),s=space(),n&&n.c(),o=empty()},l(e){t&&t.l(e),s=claim_space(e),n&&n.l(e),o=empty()},m(e,i){t&&t.m(e,i),insert(e,s,i),n&&n.m(e,i),insert(e,o,i)},p(e,[i]){e[1].layout?t?t.p(e,i):(t=create_if_block_1(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null),e[1].content?n?n.p(e,i):(n=create_if_block(e),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},i:noop,o:noop,d(e){t&&t.d(e),e&&detach(s),n&&n.d(e),e&&detach(o)}}}function instance(e,t,n){let{content:r}=t,{source:c}=t,s,o,i;const a=async e=>{if(!navigator.clipboard)return;try{await navigator.clipboard.writeText(e.innerHTML),n(4,i=e),setTimeout(()=>n(4,i=null),500)}catch(e){console.error("Failed to copy!",e)}};function l(e){binding_callbacks[e?"unshift":"push"](()=>{s=e,n(2,s)})}const d=()=>a(s);function u(e){binding_callbacks[e?"unshift":"push"](()=>{o=e,n(3,o)})}const h=()=>a(o);return e.$$set=e=>{"content"in e&&n(0,r=e.content),"source"in e&&n(1,c=e.source)},[r,c,s,o,i,a,l,d,u,h]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,source:1})}}export default Component
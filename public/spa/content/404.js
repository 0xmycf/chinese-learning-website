import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,space,text}from"../web_modules/svelte/internal/index.mjs";function create_fragment(){let n,o,s,t,i;return{c(){n=element("h1"),o=text("Oops... 404 not found"),s=space(),t=element("a"),i=text("Go home?"),this.h()},l(e){n=claim_element(e,"H1",{});var a,r=children(n);o=claim_text(r,"Oops... 404 not found"),r.forEach(detach),s=claim_space(e),t=claim_element(e,"A",{href:!0}),a=children(t),i=claim_text(a,"Go home?"),a.forEach(detach),this.h()},h(){attr(t,"href",".")},m(e,a){insert(e,n,a),append(n,o),insert(e,s,a),insert(e,t,a),append(t,i)},p:noop,i:noop,o:noop,d(e){e&&detach(n),e&&detach(s),e&&detach(t)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component
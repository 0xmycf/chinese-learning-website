import{SvelteComponent,append,attr,children,claim_element,detach,element,init,insert,noop,safe_not_equal}from"../web_modules/svelte/internal/index.mjs";function create_fragment(){let t,n;return{c(){t=element("div"),n=element("div"),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var s=children(t);n=claim_element(s,"DIV",{class:!0}),children(n).forEach(detach),s.forEach(detach),this.h()},h(){attr(n,"class","bouncingball svelte-1yqcart"),attr(t,"class","ball-wrapper svelte-1yqcart")},m(e,s){insert(e,t,s),append(t,n)},p:noop,i:noop,o:noop,d(e){e&&detach(t)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component
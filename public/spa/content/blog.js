import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Uses from"../components/source.js";import{count}from"../scripts/stores.js";import Incrementer from"../components/incrementer.js";import Decrementer from"../components/decrementer.js";function get_each_context(e,t,n){const s=e.slice();return s[11]=t[n].name,s}function get_each_context_1(e,t,n){const s=e.slice();return s[14]=t[n],s}function create_if_block_4(e){let n,t;return{c(){n=text("Written by "),t=text(e[2])},l(s){n=claim_text(s,"Written by "),t=claim_text(s,e[2])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&4&&set_data(t,e[2])},d(e){e&&detach(n),e&&detach(t)}}}function create_if_block_3(e){let n,t;return{c(){n=text(" on "),t=text(e[3])},l(s){n=claim_text(s," on "),t=claim_text(s,e[3])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&8&&set_data(t,e[3])},d(e){e&&detach(n),e&&detach(t)}}}function create_each_block_1(e){let t,n=e[14]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[14]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block_2(e){let t,c,i,a,n,r,s,o;return n=new Incrementer({}),s=new Decrementer({}),{c(){t=element("h3"),c=text("The count is "),i=text(e[9]),a=space(),create_component(n.$$.fragment),r=space(),create_component(s.$$.fragment)},l(o){t=claim_element(o,"H3",{});var l=children(t);c=claim_text(l,"The count is "),i=claim_text(l,e[9]),l.forEach(detach),a=claim_space(o),claim_component(n.$$.fragment,o),r=claim_space(o),claim_component(s.$$.fragment,o)},m(e,l){insert(e,t,l),append(t,c),append(t,i),insert(e,a,l),mount_component(n,e,l),insert(e,r,l),mount_component(s,e,l),o=!0},p(e,t){(!o||t&512)&&set_data(i,e[9])},i(e){if(o)return;transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),o=!0},o(e){transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),o=!1},d(e){e&&detach(t),e&&detach(a),destroy_component(n,e),e&&detach(r),destroy_component(s,e)}}}function create_if_block_1(e){let s,o,n=e[7],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,o){if(o&384){n=e[7];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_each_block(e){let t,s,o;var n=e[8]["layouts_components_"+e[11]+"_svelte"];function i(){return{}}return n&&(t=new n(i(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e){if(n!==(n=e[8]["layouts_components_"+e[11]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(i(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_if_block(e){let t,n;return t=new Uses({props:{content:e[6],source:e[5]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&64&&(s.content=e[6]),n&32&&(s.source=e[5]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let g,w,_,h,r,y,j,c,b,d,u,p,m,f,O,v,o=e[2]&&create_if_block_4(e),a=e[3]&&create_if_block_3(e),l=e[1],i=[];for(let t=0;t<l.length;t+=1)i[t]=create_each_block_1(get_each_context_1(e,l,t));let n=e[4]&&create_if_block_2(e),t=e[7]&&create_if_block_1(e),s=e[5]&&create_if_block(e);return{c(){g=element("h1"),w=text(e[0]),_=space(),h=element("p"),r=element("em"),o&&o.c(),y=empty(),a&&a.c(),j=space(),c=element("div");for(let e=0;e<i.length;e+=1)i[e].c();b=space(),n&&n.c(),d=space(),t&&t.c(),u=space(),s&&s.c(),p=space(),m=element("p"),f=element("a"),O=text("Back home"),this.h()},l(l){g=claim_element(l,"H1",{});var v,x,C,E,k,A=children(g);w=claim_text(A,e[0]),A.forEach(detach),_=claim_space(l),h=claim_element(l,"P",{}),x=children(h),r=claim_element(x,"EM",{}),v=children(r),o&&o.l(v),y=empty(),a&&a.l(v),v.forEach(detach),x.forEach(detach),j=claim_space(l),c=claim_element(l,"DIV",{}),C=children(c);for(let e=0;e<i.length;e+=1)i[e].l(C);C.forEach(detach),b=claim_space(l),n&&n.l(l),d=claim_space(l),t&&t.l(l),u=claim_space(l),s&&s.l(l),p=claim_space(l),m=claim_element(l,"P",{}),E=children(m),f=claim_element(E,"A",{href:!0}),k=children(f),O=claim_text(k,"Back home"),k.forEach(detach),E.forEach(detach),this.h()},h(){attr(f,"href",".")},m(e,l){insert(e,g,l),append(g,w),insert(e,_,l),insert(e,h,l),append(h,r),o&&o.m(r,null),append(r,y),a&&a.m(r,null),insert(e,j,l),insert(e,c,l);for(let e=0;e<i.length;e+=1)i[e].m(c,null);insert(e,b,l),n&&n.m(e,l),insert(e,d,l),t&&t.m(e,l),insert(e,u,l),s&&s.m(e,l),insert(e,p,l),insert(e,m,l),append(m,f),append(f,O),v=!0},p(e,[h]){if((!v||h&1)&&set_data(w,e[0]),e[2]?o?o.p(e,h):(o=create_if_block_4(e),o.c(),o.m(r,y)):o&&(o.d(1),o=null),e[3]?a?a.p(e,h):(a=create_if_block_3(e),a.c(),a.m(r,null)):a&&(a.d(1),a=null),h&2){l=e[1];let t;for(t=0;t<l.length;t+=1){const n=get_each_context_1(e,l,t);i[t]?i[t].p(n,h):(i[t]=create_each_block_1(n),i[t].c(),i[t].m(c,null))}for(;t<i.length;t+=1)i[t].d(1);i.length=l.length}e[4]?n?(n.p(e,h),h&16&&transition_in(n,1)):(n=create_if_block_2(e),n.c(),transition_in(n,1),n.m(d.parentNode,d)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros()),e[7]?t?(t.p(e,h),h&128&&transition_in(t,1)):(t=create_if_block_1(e),t.c(),transition_in(t,1),t.m(u.parentNode,u)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),e[5]?s?(s.p(e,h),h&32&&transition_in(s,1)):(s=create_if_block(e),s.c(),transition_in(s,1),s.m(p.parentNode,p)):s&&(group_outros(),transition_out(s,1,1,()=>{s=null}),check_outros())},i(){if(v)return;transition_in(n),transition_in(t),transition_in(s),v=!0},o(){transition_out(n),transition_out(t),transition_out(s),v=!1},d(e){e&&detach(g),e&&detach(_),e&&detach(h),o&&o.d(),a&&a.d(),e&&detach(j),e&&detach(c),destroy_each(i,e),e&&detach(b),n&&n.d(e),e&&detach(d),t&&t.d(e),e&&detach(u),s&&s.d(e),e&&detach(p),e&&detach(m)}}}function instance(e,t,n){let{title:s}=t,{body:o}=t,{author:i}=t,{date:a}=t,{store:r}=t,{source:c}=t,{content:l}=t,d;const m=count.subscribe(e=>{n(9,d=e)});let{components:u}=t,{allLayouts:h}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"body"in e&&n(1,o=e.body),"author"in e&&n(2,i=e.author),"date"in e&&n(3,a=e.date),"store"in e&&n(4,r=e.store),"source"in e&&n(5,c=e.source),"content"in e&&n(6,l=e.content),"components"in e&&n(7,u=e.components),"allLayouts"in e&&n(8,h=e.allLayouts)},[s,o,i,a,r,c,l,u,h,d]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,body:1,author:2,date:3,store:4,source:5,content:6,components:7,allLayouts:8})}}export default Component
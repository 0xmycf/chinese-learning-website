import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,set_data,space,text}from"../web_modules/svelte/internal/index.mjs";function create_fragment(e){let t,d,p,i,m,a,l,h,r,u,v,n,j,f,o,g,s,b,c;return{c(){t=element("head"),d=element("meta"),p=space(),i=element("meta"),m=space(),a=element("title"),l=text(e[0]),h=space(),r=element("base"),v=space(),n=element("script"),f=space(),o=element("link"),g=space(),s=element("link"),b=space(),c=element("link"),this.h()},l(u){t=claim_element(u,"HEAD",{});var y,_,j=children(t);d=claim_element(j,"META",{charset:!0}),p=claim_space(j),i=claim_element(j,"META",{name:!0,content:!0}),m=claim_space(j),a=claim_element(j,"TITLE",{}),y=children(a),l=claim_text(y,e[0]),y.forEach(detach),h=claim_space(j),r=claim_element(j,"BASE",{href:!0}),v=claim_space(j),n=claim_element(j,"SCRIPT",{type:!0,src:!0}),_=children(n),_.forEach(detach),f=claim_space(j),o=claim_element(j,"LINK",{href:!0,rel:!0}),g=claim_space(j),s=claim_element(j,"LINK",{rel:!0,type:!0,href:!0}),b=claim_space(j),c=claim_element(j,"LINK",{rel:!0,href:!0}),j.forEach(detach),this.h()},h(){attr(d,"charset","utf-8"),attr(i,"name","viewport"),attr(i,"content","width=device-width,initial-scale=1"),attr(r,"href",u=e[1].local?"/":e[1].baseurl),attr(n,"type","module"),n.src!==(j="spa/ejected/main.js")&&attr(n,"src",j),attr(o,"href","https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,700;1,300&display=swap"),attr(o,"rel","stylesheet"),attr(s,"rel","icon"),attr(s,"type","image/svg+xml"),attr(s,"href","assets/logo.svg"),attr(c,"rel","stylesheet"),attr(c,"href","spa/bundle.css")},m(e,u){insert(e,t,u),append(t,d),append(t,p),append(t,i),append(t,m),append(t,a),append(a,l),append(t,h),append(t,r),append(t,v),append(t,n),append(t,f),append(t,o),append(t,g),append(t,s),append(t,b),append(t,c)},p(e,[t]){t&1&&set_data(l,e[0]),t&2&&u!==(u=e[1].local?"/":e[1].baseurl)&&attr(r,"href",u)},i:noop,o:noop,d(e){e&&detach(t)}}}function instance(e,t,n){let{title:s}=t,{env:o}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"env"in e&&n(1,o=e.env)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,env:1})}}export default Component
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[383],{383:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(885),r=n(791),c=n(871),a=n(501),s=n(806),o=n(632),u=n(591),d="MovieDetails_containerMain__kR1mo",l="MovieDetails_movieInformation__vtfQL",h="MovieDetails_genresList__SVics",f=n(221),v=n(184),p=function(){var e,t,n,p,j,m=(0,r.useState)(""),g=(0,i.Z)(m,2),x=g[0],_=g[1],b=(0,r.useState)([]),k=(0,i.Z)(b,2),S=k[0],w=k[1],U=(0,r.useState)("https://via.placeholder.com/200x300"),Z=(0,i.Z)(U,2),y=Z[0],M=Z[1],D=(0,r.useState)(),C=(0,i.Z)(D,2),G=C[0],L=C[1],N=(0,r.useState)(""),R=(0,i.Z)(N,2),F=R[0],H=R[1],J=(0,r.useState)(""),O=(0,i.Z)(J,2),Q=O[0],T=O[1],q=(0,r.useState)(!1),z=(0,i.Z)(q,2),A=z[0],E=z[1],I=(0,c.UO)("").id,V=(0,c.TH)(),B=null===(e=V.state)||void 0===e?void 0:e.from;return(0,r.useEffect)((function(){(0,f.ZJ)(I).then((function(e){return e.json().then((function(t){var n=t.genres,i=t.poster_path,r=t.vote_average,c=t.overview,a=t.original_title,s=t.release_date;E(e.ok),w(n),M("https://image.tmdb.org/t/p/original".concat(i)),L(Math.ceil(10*r)),H(c),_(a),T(s.slice(0,4))}))}))}),[I]),(0,v.jsx)("div",{children:A&&(0,v.jsxs)("div",{children:[(0,v.jsxs)(a.rU,{to:B,children:[(0,v.jsx)(s.G,{icon:o.QHR}),"Go back"]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("img",{src:y,alt:"",width:"200px",height:"300px"}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsxs)("h2",{children:[x," (",Q,")"]}),(0,v.jsxs)("p",{children:["User Scope: ",G,"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:F}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("ul",{className:h,children:S.map((function(e){var t=e.id,n=e.name;return(0,v.jsx)("li",{children:n},t)}))})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.F,{to:"cast",state:{from:null!==(t=null===(n=V.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.F,{to:"reviews",state:{from:null!==(p=null===(j=V.state)||void 0===j?void 0:j.from)&&void 0!==p?p:"/"},children:"Reviews"})})]}),(0,v.jsx)("hr",{}),(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(c.j3,{})})]})})}},221:function(e,t,n){n.d(t,{DU:function(){return i},Ut:function(){return c},ZJ:function(){return a},il:function(){return r},zT:function(){return s}});var i=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US")).then((function(e){return e.json()}))},r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=d8a03c709b4adc0e172e0837e1f73c29").then((function(e){return e.json()}))},c=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()}))},a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US"))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=d8a03c709b4adc0e172e0837e1f73c29&language=en-US&page=1")).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=383.960efabf.chunk.js.map
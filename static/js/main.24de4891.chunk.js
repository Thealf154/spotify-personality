(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},61:function(e,t){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(23),o=n.n(i),s=(n(31),n(2)),r=(n(6),n(26)),l=n(67),u=n(1),d=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",id:"title-container",children:Object(u.jsx)("h1",{id:"title",children:"Spotify Personality"})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(u.jsxs)("div",{id:"log-in-container",children:[Object(u.jsx)(l.a,{variant:"primary",id:"log-in-button",onClick:function(){e.onLogIn(!0)},children:"Log in with Spotify"}),Object(u.jsx)("div",{id:"warning",children:Object(u.jsx)("p",{id:"warning-text",children:"This is not a real Personality test, don't take it seriously!"})})]})}),Object(u.jsx)("div",{className:"col-lg-6 col-xs-12",id:"image-container",children:Object(u.jsx)("img",{id:"spider-grid-example"})})]})]})},j=n(7),g=n.n(j),b=n(24),p=n.n(b),h=function(){return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)("div",{children:"Loading..."})})},f=n(25),O=n.n(f),v=(n(63),n(64),function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(),r=Object(s.a)(o,2),l=r[0],d=r[1],j=Object(c.useState)(),g=Object(s.a)(j,2),b=g[0],p=g[1],f=Object(c.useState)(),v=Object(s.a)(f,2),m=v[0],x=v[1],y=Object(c.useState)(!0),S=Object(s.a)(y,2),k=S[0],E=S[1],F={punk:"ISTP",jazz:"ENFJ",classical:"ENTJ",rock:"INTP",alt:"INFP",reggae:"ISFP",ambient:"ISFP",folk:"INFJ",pop:"ENFP",metal:"INTJ",hop:"ESTJ",electro:"ESTP",religious:"ISFJ",blues:"ENFP",country:"ESFJ",soul:"ESFP"},A=["punk","jazz","classical","rock","alt","reggae","ambient","folk","pop","metal","hop","electro","religious","blues","country","soul"],T=[{data:{mind:18,energy:14,nature:12,tactics:24},meta:{color:"blue"}}];return Object(c.useEffect)((function(){var t=T,n=function(e){var t=[],n=e.map((function(e){return e.genres}));return A.forEach((function(e){var c=0;n.forEach((function(t){t.every((function(t){return!new RegExp(e).test(t)||(c++,!1)}))}));var a={genre:e,matches:c};t.push(a)})),t}(e.topArtists.data),c=(function(e){var t=0,n=0;e.forEach((function(e){var c=e.explicit?1:0;n+=c,t++}))}(e.topSongs.data),function(e){var t={danceabilityAverage:0,energyAverage:0,loudnessAverage:0,valenceAverage:0,modeAverage:0};e.forEach((function(e){t.danceabilityAverage+=e.danceability,t.energyAverage+=e.energy,t.loudnessAverage+=e.loudness,t.valenceAverage+=e.valence,t.modeAverage+=e.mode})),e.map((function(t){return t/e.length}))}(e.audioAnalysis.data),function(e){var t={},n=0,c=0,a=0,i=0;return e.forEach((function(e){var n=F[e.genre];void 0===t[n]?t[n]=e.matches:t[n]+=e.matches})),Object.entries(t).forEach((function(e){var t=e[0],o=e[1],s="E"===t[0]?o:-o,r="N"===t[1]?o:-o,l="F"===t[2]?o:-o,u="P"===t[3]?o:-o;n+=s,c+=r,a+=l,i+=u})),{mind:n,energy:c,nature:a,tactics:i}}(n)),a=function(e,t){var n=t/2;return{mind:e.mind>n?"Extraversion":"Extroversion",energy:e.energy>n?"Intuitive":"Observant",nature:e.nature>n?"Feeling":"Thinking",tactics:e.tactics>n?"Prospection":"Judging"}}(c,n.length);x(a);var o=function(e){var t="";return t+(e.mind[0]+("s"===e.energy[2]?"S":"N"))+e.nature[0]+e.tactics[0]}(a);i(o),Object.entries(c).forEach((function(e){var t=e[0];c[t]=Math.abs(1.3*e[1])/100})),p(c),t[0].data=c,d(t),e.onPersonalityAnalysis(n),E(!1)}),[e.topArtists]),Object(u.jsx)("div",{children:k?Object(u.jsx)(h,{}):Object(u.jsxs)("div",{id:"analysis-container",children:[Object(u.jsx)(O.a,{captions:m,data:l,size:500,options:{captionMargin:30,scales:4,captionProps:function(){return{className:"caption",textAnchor:"middle",fontSize:15,fontFamily:"sans-serif"}}}}),Object(u.jsxs)("p",{id:"personality-type",children:["Personality: ",a]}),Object(u.jsxs)("p",{id:!0,children:["Mind: ",parseFloat(b.mind).toFixed(3)]}),Object(u.jsxs)("p",{id:!0,children:["Energy: ",parseFloat(b.energy).toFixed(3)]}),Object(u.jsxs)("p",{id:!0,children:["Nature: ",parseFloat(b.nature).toFixed(3)]}),Object(u.jsxs)("p",{id:!0,children:["Tactics: ",parseFloat(b.tactics).toFixed(3)]})]})})}),m=function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(),r=Object(s.a)(o,2),l=r[0],d=r[1],j=Object(c.useState)(),b=Object(s.a)(j,2),f=b[0],O=b[1],m=Object(c.useState)(),x=Object(s.a)(m,2),y=x[0],S=x[1],k=Object(c.useState)(),E=Object(s.a)(k,2),F=E[0],A=E[1],T=Object(c.useState)(!1),w=Object(s.a)(T,2),N=(w[0],w[1]),P=Object(c.useState)(!0),I=Object(s.a)(P,2),J=I[0],L=I[1];Object(c.useEffect)((function(){console.log("request");var t=new URLSearchParams;t.append("accessToken",e.token);var n={headers:{"Content-Type":"application/x-www-form-urlencoded"}};g.a.post("https://boiling-reaches-39573.herokuapp.com/getMe/",t,n).then((function(e){S(e)})).catch((function(e){console.log(e),N(!0)})),g.a.post("https://boiling-reaches-39573.herokuapp.com/getUsersTop/getTopArtists/",t,n).then((function(e){d(e)})).catch((function(e){console.log(e),N(!0)})),g.a.post("https://boiling-reaches-39573.herokuapp.com/getUsersTop/getTopSongs/",t,n).then((function(t){i(t);var n={},c=t.data.map((function(e){return{id:e.id.toString(),name:e.name}}));n.accessToken=e.token,n.tracks=c;var a={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:p.a.stringify(n),url:"https://boiling-reaches-39573.herokuapp.com/getUsersTop/getAudioAnalysis/"};g()(a).then((function(e){O(e)})).finally((function(){N(!1),L(!1)}))})).catch((function(e){console.log("Error: ",e),N(!0),console.log(e)}))}),[e.token]);return Object(u.jsx)(c.Fragment,{children:J?Object(u.jsx)(h,{}):Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-xl-4",children:Object(u.jsx)(v,{topArtists:l,topSongs:a,audioAnalysis:f,userInformation:y,onPersonalityAnalysis:function(e){A(e)}})}),Object(u.jsx)("div",{className:"col-xl-8",children:JSON.stringify(F)})]})})},x=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),o=Object(s.a)(i,2),l=o[0],j=o[1],g=function(e){e&&(window.location="https://boiling-reaches-39573.herokuapp.com/auth/login")};Object(c.useEffect)((function(){!function(){var e=document.location.hash,t=RegExp("access_token=[a-zA-Z0-9_-]*");if(e.match(t)){var n=e.match(t)[0].replace("access_token=","");(new r.a).set("accessToken",n,{path:"/"}),window.location="https://thealf154.github.io/spotify-personality/"}}();var e=function(e){var t=RegExp(e+"=[^;]+").exec(document.cookie);return!!t&&t[0].replace(e+"=","")}("accessToken");a(e),j(!!e)}),[]);var b=function(e){return e.isLoggedIn?Object(u.jsx)(m,{token:n}):Object(u.jsx)(d,{onLogIn:g})};return Object(u.jsx)(b,{isLoggedIn:l})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),y()}},[[65,1,2]]]);
//# sourceMappingURL=main.24de4891.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Bowser",image:"https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/375px-Bowser_SSBU.png",count:0},{id:2,name:"Kirby",image:"https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/375px-Kirby_SSBU.png",count:0},{id:3,name:"Dr. Mario",image:"https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/375px-Dr._Mario_SSBU.png",count:0},{id:4,name:"Ganondorf",image:"https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/375px-Ganondorf_SSBU.png",count:0},{id:5,name:"Ike",image:"https://www.ssbwiki.com/images/thumb/8/86/Ike_SSBU.png/375px-Ike_SSBU.png",count:0},{id:6,name:"Incineroar",image:"https://www.ssbwiki.com/images/thumb/c/c4/Incineroar_SSBU.png/375px-Incineroar_SSBU.png",count:0},{id:7,name:"Jigglypuff",image:"https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/375px-Jigglypuff_SSBU.png",count:0},{id:8,name:"Joker",image:"https://www.ssbwiki.com/images/thumb/5/5c/Joker_SSBU.png/375px-Joker_SSBU.png",count:0},{id:9,name:"King Dedede",image:"https://www.ssbwiki.com/images/thumb/f/f5/King_Dedede_SSBU.png/375px-King_Dedede_SSBU.png",count:0},{id:10,name:"Link",image:"https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/375px-Link_SSBU.png",count:0},{id:11,name:"R.O.B.",image:"https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/375px-R.O.B._%28JPN%29_SSBU.png",count:0},{id:12,name:"Piranha Plant",image:"https://www.ssbwiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/375px-Piranha_Plant_SSBU.png",count:0}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(3),c=n.n(o),s=(n(15),n(4)),r=n(5),m=n(7),g=n(6),u=n(8),p=(n(16),n(17),function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),w=(n(18),function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},e.children),a.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),h=(n(19),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),d=n(1),l=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={cardList:d,score:0,highscore:0},n.clickCount=function(e){n.state.cardList.find(function(t,i){if(t.id===e){if(0===d[i].count)return d[i].count=d[i].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cardList.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cardList.forEach(function(e){e.count=0}),alert("Game Over! \n Your score: ".concat(n.state.score)),n.setState({score:0}),!0},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(h,null,a.a.createElement(w,{score:this.state.score,highscore:this.state.highscore},"CLICK GAME"),this.state.cardList.map(function(t){return a.a.createElement(p,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.809e98b3.chunk.js.map
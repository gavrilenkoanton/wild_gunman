(this.webpackJsonpwild_gunman_game=this.webpackJsonpwild_gunman_game||[]).push([[0],[function(o,e,t){o.exports={wrapper:"App_wrapper__3TSS6",saloon:"App_saloon__3AP3O",dead:"App_dead__1DaJJ",doorShooter:"App_doorShooter__1JujR",doorShooterDead:"App_doorShooterDead__92qiv",doorShooterDisplayNone:"App_doorShooterDisplayNone__1dkZN",leftTopShooter:"App_leftTopShooter__Ai_AD",leftBottomShooter:"App_leftBottomShooter__g5hFh",rightTopShooter:"App_rightTopShooter__1Mc1g",rightBottomShooter:"App_rightBottomShooter__35l-D",score:"App_score__1GJTV",lifes:"App_lifes__-jRuN"}},,,,,,function(o,e,t){o.exports=t.p+"static/media/Shoot2.44427b3e.mp3"},function(o,e,t){o.exports=t.p+"static/media/Shoot3.73708a65.mp3"},function(o,e,t){o.exports=t.p+"static/media/main.5f8a0445.mp3"},function(o,e,t){o.exports=t.p+"static/media/GameOver.1b42057b.mp3"},,,function(o,e,t){o.exports=t(18)},,,,,function(o,e,t){},function(o,e,t){"use strict";t.r(e);var a=t(1),n=t.n(a),r=t(3),c=t.n(r),i=(t(17),t(4)),s=t(5),l=t(10),m=t(11),d=t(0),p=t.n(d),h=t(6),u=t.n(h),f=t(7),_=t.n(f),S=t(8),g=t.n(S),v=t(9),k=t.n(v),N=function(o){Object(m.a)(t,o);var e=Object(l.a)(t);function t(){var o;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=e.call.apply(e,[this].concat(r))).state={counter:0,random:10,score:"Score",timer:2,lifeCount:3,dead:!1,shooter:!0},o.main=new Audio(g.a),o.gameOver=new Audio(k.a),o.shoot2=new Audio(u.a),o.shoot3=new Audio(_.a),o.musicRun=function(){o.main.currentTime=0,o.main.play()},o.randomNum=function(){return Math.floor(2*Math.random())},o.checkTimer=function(){0===o.state.timer&&(o.setState({lifeCount:o.state.lifeCount-1,random:10,dead:!0}),alert("\u0422\u044b \u0443\u043c\u0435\u0440, \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?"))},o.lifeChecker=function(){0===o.state.lifeCount&&o.gameOver.play()},o.onImgClick=function(){o.shoot2.play(),o.shoot3.play(),o.shoot2.currentTime=0,o.shoot3.currentTime=0;"Score"===o.state.score?o.setState({score:100,random:10,timer:2,dead:!1,shooter:!1}):o.setState({score:o.state.score+100,random:10,timer:2,dead:!1,shooter:!1})},o.render=function(){return n.a.createElement("div",{className:p.a.wrapper},n.a.createElement("div",{className:"".concat(p.a.saloon," ").concat(!0===o.state.dead?p.a.dead:"")},n.a.createElement("div",{className:"".concat(p.a.doorShooter,"\n                     ").concat(0===o.state.random?"":p.a.doorShooterDisplayNone," \n                    ").concat(!1===o.state.shooter?p.a.doorShooterDisplayNone:"","\n                    ").concat(!1===o.state.shooter?p.a.doorShooterDead:"","\n                    "),onClick:o.onImgClick}),n.a.createElement("div",{className:"".concat(p.a.leftTopShooter," ").concat(1===o.state.random?"":p.a.doorShooterDisplayNone),onClick:o.onImgClick}),n.a.createElement("div",{className:"".concat(p.a.leftBottomShooter," ").concat(2===o.state.random?"":p.a.doorShooterDisplayNone),onClick:o.onImgClick}),n.a.createElement("div",{className:"".concat(p.a.rightTopShooter," ").concat(3===o.state.random?"":p.a.doorShooterDisplayNone),onClick:o.onImgClick}),n.a.createElement("div",{className:"".concat(p.a.rightBottomShooter," ").concat(4===o.state.random?"":p.a.doorShooterDisplayNone),onClick:o.onImgClick}),n.a.createElement("div",{className:p.a.score},o.state.score)),n.a.createElement("div",{className:p.a.lifes},"life ",o.state.lifeCount))},o}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var o=this;setInterval((function(){o.setState({random:o.randomNum(),shooter:!0})}),2e3),setInterval((function(){console.log(o.state.timer),o.checkTimer(),o.lifeChecker(),o.setState({timer:o.state.timer-1})}),1e3)}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()})).catch((function(o){console.error(o.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.e2af99bf.chunk.js.map
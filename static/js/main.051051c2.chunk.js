(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),u=(n(13),n(14),n(1)),d=n(2),c=n(4),s=n(3),m=(n(15),n(5)),p=(n(16),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).playSound=a.playSound.bind(Object(m.a)(a)),a.handleKey=a.handleKey.bind(Object(m.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillMount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"playSound",value:function(e){var t=document.getElementById("".concat(this.props.drum.innerText));t.currentTime=0,t.play(),this.setState({value:this.props.drum.id.replace(/-/g,"")}),this.props.updateDisplay(this.props.drum.id,2e3),console.log(this.props.drum.id.replace(/-/g,""))}},{key:"handleKey",value:function(e){e.keyCode===this.props.drum.unicode&&(this.playSound(),this.props.updateDisplay(this.props.drum.id,2e3))}},{key:"render",value:function(){return i.a.createElement("button",{id:this.props.drum.id,className:"pushbutton drum-pad",onClick:this.playSound},this.props.drum.innerText,i.a.createElement("audio",{className:"clip",id:this.props.drum.innerText,src:this.props.drum.audioLink}))}}]),n}(a.Component)),l=(n(17),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"display-component"},i.a.createElement("div",{id:"display"},i.a.createElement("h2",null,this.props.value)))}}]),n}(a.Component)),h=[{innerText:"Q",id:"Cymbal-Crash",unicode:81,audioLink:"http://www.percussionclinic.com/sounds/instrumentclips/chinacymbal.mp3"},{innerText:"W",id:"Hi-Hat",unicode:87,audioLink:"http://www.denhaku.com/r_box/sr16/sr16hat/sweethat.wav"},{innerText:"E",id:"Cymbal-Ride",unicode:69,audioLink:"http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Ride%2003-5850-Free-Loops.com.mp3"},{innerText:"A",id:"Rimshot",unicode:65,audioLink:"http://www.randomthink.net/labs/html5drums/drumkit/Rimshot.mp3"},{innerText:"S",id:"Snare-1",unicode:83,audioLink:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{innerText:"D",id:"Snare-2",unicode:68,audioLink:"http://www.denhaku.com/r_box/sr16/sr16sd/batterrm.wav"},{innerText:"Z",id:"Tom-Tom-1",unicode:90,audioLink:"http://www.denhaku.com/r_box/sr16/sr16tom/locan%20hl.wav"},{innerText:"X",id:"Tom-Tom-2",unicode:88,audioLink:"http://tipiwiki.free.fr/snd/Tamtam2.wav"},{innerText:"C",id:"Bass Drum",unicode:67,audioLink:"http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bass%20Drum%20Free%20002-1659-Free-Loops.com.mp3"}],y=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={data:h,value:"Sound",sliderVal:.3,currentId:""},a}return Object(d.a)(n,[{key:"updateDisplay",value:function(e){this.setState({value:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"drum-machine",className:"drum-container"},i.a.createElement("div",{id:"drum-pad",className:"drumpad-container"},h.map((function(t){return i.a.createElement(p,Object.assign({},e.state,{key:t.id,drum:t,unicode:e.state.unicode,updateDisplay:e.updateDisplay.bind(e)}))}))),i.a.createElement(l,{value:this.state.value}))}}]),n}(a.Component),v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.051051c2.chunk.js.map
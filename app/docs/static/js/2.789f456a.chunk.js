(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{41:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n(8),o=n(10),c=n(9),i=n(11),s=n(0),l=n.n(s),u=(n(41),function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(i)))).state={left:n.props.start-+new Date,intervalID:null},n.incrementTimer=function(){var t=n.state.left;t>0?n.setState({left:t-1e3}):clearInterval(n.state.intervalID)},n.getTimer=function(t){return{sec:Math.floor(t/=1e3)%60,min:Math.floor(t/=60)%60,hours:Math.floor(t/=60)%24,days:Math.floor(t/24)}},n}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=setInterval(this.incrementTimer,1e3);this.setState({intervalID:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalID)}},{key:"render",value:function(){var t=this.getTimer(this.state.left);return l.a.createElement("div",{className:"Timer"},"".concat(t.days," dni ").concat(t.hours,"h ").concat(t.min,"m ").concat(t.sec,"s"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{left:t.start-+new Date}}}]),e}(s.Component));n.d(e,"default",function(){return u})}}]);
//# sourceMappingURL=2.789f456a.chunk.js.map
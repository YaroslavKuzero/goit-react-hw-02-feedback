(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={statistics:"Statistics_statistics__2QFok",good:"Statistics_good__18zd4",neutral:"Statistics_neutral__3mDg3",bad:"Statistics_bad__1V8Qu",total:"Statistics_total__2pGqP",percentage:"Statistics_percentage__3inQt",canvas:"Statistics_canvas__28yF3"}},function(e,t,a){e.exports={section:"SectionHeader_section__3TW1a",header:"SectionHeader_header__3lISD"}},,,,,,function(e,t,a){e.exports={feedbackbtn:"Feedbackoptions_feedbackbtn__1ZKrq"}},function(e,t,a){e.exports={notification:"Notification_notification__1C7Ma"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),i=a.n(o),r=a(5),s=a(6),l=a(7),u=a(11),d=a(10),b=a(1),m=a.n(b),_=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,i=e.positivePercentage;return c.a.createElement("div",{className:m.a.statistics},c.a.createElement("span",{className:m.a.good}," Good: ",t," "),c.a.createElement("span",{className:m.a.neutral}," Neutral: ",a," "),c.a.createElement("span",{className:m.a.bad}," Bad: ",n," "),c.a.createElement("span",{className:m.a.total}," Total: ",o," "),c.a.createElement("span",{className:m.a.percentage}," Positive: ",i,"% "))},f=a(8),p=a.n(f),v=function(e){var t=e.options,a=e.onLeaveFeedback,n=Object.keys(t);return c.a.createElement(c.a.Fragment,null,n.map((function(e){return c.a.createElement("button",{className:p.a.feedbackbtn,key:e,type:"button",value:e,onClick:a},e)})))},k=a(2),g=function(e){var t=e.title,a=e.children;return c.a.createElement("div",{className:k.section},c.a.createElement("h2",{className:k.header},t),a)},h=a(9),E=function(e){var t=e.title;return c.a.createElement("p",{className:h.notification},t)},F=(a(17),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state,a=t.good,n=t.bad;return a+t.neutral+n},e.countPositiveFeedbackPercentage=function(){return Math.floor(100/e.countTotalFeedback()*e.state.good)},e.LeaveFeedback=function(t){var a=t.target.value;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{title:"Please leave feedback"},c.a.createElement(v,{options:this.state,onLeaveFeedback:this.LeaveFeedback})),c.a.createElement(g,{title:"Statistics"},this.countTotalFeedback()>0?c.a.createElement(_,Object.assign({},this.state,{total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})):c.a.createElement(E,{title:"No feedback given"})))}}]),a}(n.Component));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.30cf2a83.chunk.js.map
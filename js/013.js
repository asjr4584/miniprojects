// JavaScript Document
var el1=document.getElementById('ILEW1'),
    el2=document.getElementById('ILEW2'),
    el3=document.getElementById('ILEW3'),
    el4=document.getElementById('ILEW4');
   TweenMax.set(el2, {transformOrigin:"50% 50%"})
    timeline = new TimelineMax({paused:true});



timeline.to(el2, 10, 
  {
    rotation: 360, 
    transformOrigin:"center",
    scale:1.2,
    ease: Power0.easeNone,  
    repeat:-1
  },              
0);

timeline.play();
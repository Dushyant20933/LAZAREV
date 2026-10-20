// var newnav = document.querySelector("nav")
// newnav.addEventListener("mouseenter",function(){
//     var tl = gsap.timeline()
//     tl.to(".nav-bottom h5 span",{
//         display : "initial"
//     })
// })

console.log("JavaScript is working");


function navaimation(){
var newnav = document.querySelector("nav");
var navBottom = document.querySelector("#nav-bottom");
var bottomText = document.querySelectorAll("#nav-bottom h5 span");

// Starting position
gsap.set(navBottom, {
    height: "0%",
    bottom: "0%"
});

gsap.set(bottomText, {
    opacity: 0,
    y: 20
});

// Mouse navbar par aane par
newnav.addEventListener("mouseenter", function () {

    var tl = gsap.timeline();

    tl.to(navBottom, {
        height: "150%",
        bottom: "-150%",
        duration: 0.3
    });

    tl.to(bottomText, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.04
    }, "-=0.1");

});

// Mouse navbar se hatne par
newnav.addEventListener("mouseleave", function () {

    var tl = gsap.timeline();

    tl.to(bottomText, {
        opacity: 0,
        y: 10,
        duration: 0.10
    });

    tl.to(navBottom, {
        height: "0%",
        bottom: "0%",
        duration: 0.3
    });
});

}    
navaimation();

function page2animation(){
var relem= document.querySelectorAll(".right-elem")
relem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){

        // console.log(elem.childNodes[3]) 
        // console.log(elem.getBoundingClientRect())
        // elem.childNodes[3].style.opacity=1

        gsap.to(elem.childNodes[3],{
            opacity :1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        // console.log("not hello")
        // elem.childNodes[3].style.opacity=0 

         gsap.to(elem.childNodes[3],{
            opacity :1,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        // console.log(dets)
        //  console.log(elem.getBoundingClientRect().x)
         gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-50,
            y:dets.y-elem.getBoundingClientRect().y-90

         })     

        })
    })
}
page2animation();
function page3videoanimation(){
var page3center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");

page3center.addEventListener("click", function () {
    video.play();

    gsap.to(video, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.5
    });
});
  video.addEventListener("click", function () {
    video.pause()
     gsap.to(video, {
        scaleX: 0.7,
        scaleY: 0,
        opacity: 0,
        duration: 0.5
        
});
  });
}

page3videoanimation();
function page4animation(){
var sections =document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    // console.log(elem.childNodes[3]) // ye bat raha ki hamri childnodes 3 total kitin hai sab show kar de gya 
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity =1
        elem.childNodes[3].play()
      })


       elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity =1
        elem.childNodes[3].load()
      })



    })
}
page4animation();
function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page6Animations();

             







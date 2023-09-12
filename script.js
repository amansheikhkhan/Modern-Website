const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function baaribaari() {
  let tl  = gsap.timeline()

tl.from("#nav",{
  y:-10,
  duration:1,
  opacity:0,
  delay:0.5
})

tl.to(".boundingelem",{
  y:0,
  duration:0.8,
  opacity:1,
  stagger:0.1,
})

tl.from("#herofooter",{
  y:-10,
  duration:0.4,
  opacity:0,

})
}
baaribaari()


function circleChaptaKaro() {
  let  xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove', function(dets){
    clearTimeout(timeout);

    xdiff =  dets.clientX - xprev;
    ydiff = dets.clientY - yprev;

    xprev = dets.clientX;
    yprev = dets.clientY; 

    xscale = gsap.utils.clamp(.6, 1.3, xdiff)
    yscale = gsap.utils.clamp(.6, 1.3, ydiff)

    circleMouseFollower(xscale, yscale)

    var timeout = setTimeout(() => {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
    }, 100);
  })

}
circleChaptaKaro()

function circleMouseFollower(xscale, yscale) {
  window.addEventListener('mousemove', function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`; 
  })}

  circleMouseFollower()


document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0
  var diffrot = 0

  elem.addEventListener("mouseleave", function(dets){

    gsap.to(elem.querySelector("img"),{
      
        opacity:0,
        duration: 0.5,
        ease: Power4,
      
    })
  })


  elem.addEventListener("mousemove", function(dets){
    let diff = dets.clientY - elem.getBoundingClientRect().top
    diffrot = dets.clientX - rotate
    rotate = dets.clientX

    gsap.to(elem.querySelector("img"),{
      
        opacity:1,
        ease: Power4, 
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.99)
      
    })
  })
})


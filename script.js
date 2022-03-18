gsap.registerPlugin(ScrollTrigger);

const words = gsap.utils.toArray(".fd-txt");

var faders = gsap.utils.toArray(".sc-fd");

faders.forEach((fader)=>{
  gsap.from(fader, {
    opacity: 0,
    scrollTrigger: {
      trigger: fader,
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play pause resume none",
      scrub: true
    }
  })
})

var poppers = gsap.utils.toArray(".sc-pop");

poppers.forEach((popper)=>{
  gsap.from(popper, {
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
      trigger: popper,
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play pause resume none",
      scrub: true
    }
  })
})

const tl = gsap.timeline()

tl.to(words, {
  duration: 1,
  delay:0.5,
  opacity: 1,
  stagger: 0.5
});

tl.to('#tagline', {
  opacity: 1,
  duration: 1
});

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (isMobile) {
  var img = new Image();
  var box = document.getElementById("intro");
  img.src = "../img/web-bg.png";
  img.onload = function(){
    box.style.backgroundImage = "url('" + img.src + "')";
    tl.to("#intro-sntc", {
      top: "70%",
      duration: 1
    });
    tl.to("#tagline", {
      top: "70%",
      duration: 1
    }, "<");
    tl.to(".intro-box", {
      backgroundImage: 'linear-gradient(to top, rgba(30,59,112,1), rgba(30,59,112,0))',
      duration:1
    }, "<");
  }
} else {
    var img = new Image();
    var box = document.getElementById("intro");
    img.src = "../img/web-bg.png";
    img.onload = function(){
      box.style.backgroundImage = "url('" + img.src + "')";
      tl.add("fade");
      tl.to(".intro-box", {
        backgroundImage: 'linear-gradient(to right, rgba(30,59,112,1), rgba(30,59,112,0))',
        duration:2
      })
    }
}
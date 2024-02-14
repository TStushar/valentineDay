gsap.registerPlugin(TextPlugin);
var tl1 = gsap.timeline({ repeat: -1 });
tl1.to(".green", {
  text: "Happy Valentines Day",
  ease: "power1.out",
  duration: 4,
  repeat: 1,
  yoyo: true,
});

let loadTl = gsap
  .timeline({ delay: 1 })
  .from(".loadImg", {
    opacity: 0,
    scale: 0,
  })
  .from(".loadH1", {
    y: 32,
    opacity: 0,
  })
  .to(
    ".load",
    {
      opacity: 0,
      scale: 0,
    },
    "+2"
  )
  .set(".member-details-main", {
    display: "flex",
  })
  .from(".member-details-main", {
    opacity: 0,
  })
  .set(".load", {
    display: "none",
  });

loadTl.duration(4);

gsap.to(".page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
       
        trigger:".page2",
        scroller:"body",
        scrub:3,
        start:"top 0%",
        end:"top -50%",
        pin:true
    }
})
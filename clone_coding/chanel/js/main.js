$(function(){
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        (curr > 0) ? $('.header').addClass('fixed') : $('.header').removeClass('fixed')
    })
    $(window).trigger('scroll')
})

$(function(){


    gsap.to('.sc-natural .sc-title',{
        scrollTrigger:{
            trigger:'.sc-natural',
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // markers:true,
        },
        xPercent:-30,
    })




    const beautyMotion = gsap.timeline({
        defauts:{
            // duration:5,
        }
    })
    beautyMotion.addLabel('m1')
    .to('.sc_beauty .txt_wrap .title',{opacity:0,y:-100},'m1+=0.1')
    .to('.sc_beauty .txt_wrap .desc',{opacity:0,y:-100},'m1+=0.2')
    .to('.sc_beauty .prd-wrap',{
        // x:-window.innerWidth*2+($('.sc_beauty .prd-item').innerWidth()/2) - (window.innerWidth/2),
        xPercent:-118.7,
        duration:5,},'m1+=0.3')
    ScrollTrigger.create({
        animation:beautyMotion,
        trigger:'.sc_beauty',
        start:"top top",
        end:"+=400%",
        scrub:1,
        // markers:true,
        pin:true,
    })





    gsap.to('.sc_beauty .motion',5,{
        scrollTrigger:{
            trigger:'.sc_new',
            start:"top bottom",
            end:"bottom bottom",
            scrub:0.5,
            // markers:true,
            // pin:true,
        },
        y:'100vh'
    })


    const beauty2 = gsap.timeline({
        scrollTrigger:{
          trigger:".sc_new",
          start:'top top',
          end:'+=1000%',
          // markers:true,
          scrub:0.3,
          pin:true,
        }
      });


    beauty2.to('.motion',{'visibility':'hidden'})
    .to('.du_ori',{'visibility':'visible'},0)
    .to('.du',{'visibility':'visible'},0.1)
    .to('.du1',{rotation:30},0.1)
    .to('.du2',{rotation:60},0.1)
    .to('.du3',{rotation:90},0.1)
    .to('.du4',{rotation:120},0.1)
    .to('.du5',{rotation:150},0.1)
    .to('.du6',{rotation:180},0.1)
    .to('.du7',{rotation:210},0.1)
    .to('.du8',{rotation:240},0.1)
    .to('.du9',{rotation:270},0.1)
    .to('.du10',{rotation:300},0.1)
    .to('.du11',{rotation:330},0.1)
    .addLabel('m1')
    .to('.duouther img',{y:'20vw'},'m1')
    .to('.duouther img',{opacity:0},'m1')
  




   


    var bestSlide = new Swiper(".best-slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".sc_best .next",
            prevEl: ".sc_best .prev",
          },
      });

    //   touchEnd
    //   touchMove
    //   touchStart
      bestSlide.on('touchMove',function(){
        $('.best-slide .swiper-slide').addClass('on')
        gsap.to('.best-slide .swiper-slide',{scale:0.95,opacity:0.7})
      })
      bestSlide.on('touchEnd',function(){
        $('.best-slide .swiper-slide').removeClass('on')
        gsap.to('.best-slide .swiper-slide',{scale:1,opacity:1})
      })


      gsap.set('.sc-natural2 .title',{xPercent:-100})
      gsap.to('.sc-natural2 .title',{
        scrollTrigger:{
            trigger:'.sc-natural2',
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // markers:true,
        },
        xPercent:0,
    })




    gsap.utils.toArray('.detail-item img').forEach(element => {
        yVal = element.dataset.y;
        gsap.to(element,{
            scrollTrigger:{
                trigger:element,
                start:"top bottom",
                end:"bottom top",
                scrub:1,
                // markers:true,
            },
            yPercent:yVal
        })
    });

    gsap.utils.toArray('.detail-box .txt-box').forEach(element => {
        yVal = element.dataset.y;
        gsap.to(element,{
            scrollTrigger:{
                trigger:element,
                start:"top bottom",
                end:"bottom top",
                scrub:1,
                // markers:true,
            },
            yPercent:yVal
        })
    });



    gsap.to('.detail-box.item03 .detail-item',{
        scrollTrigger:{
            trigger:'.detail-box.item03 .detail-item',
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // markers:true,
        },
        width:'100vw'
    })


    var sns = new Swiper(".insta-slide", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        scrollbar: {
            el: ".swiper-scrollbar",
            // clickable: true,
          },
  
      });


      sns.on('touchMove',function(){
        $('.insta-slide .swiper-slide').addClass('on')
        gsap.to('.insta-slide .swiper-slide',{scale:0.95,opacity:0.7})
      })
      sns.on('touchEnd',function(){
        $('.insta-slide .swiper-slide').removeClass('on')
        gsap.to('.insta-slide .swiper-slide',{scale:1,opacity:1})
      })






})
import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Improved animation for chip
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
        toggleActions: 'play pause reverse restart'
      },
      opacity: 0,
      scale: 2,
      duration: 1.5,
      ease: 'power3.out'
    })

    // Enhanced fade-in animations
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, []);

  return (
    <section className="common-padding bg-black">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img 
            src={chipImg} 
            alt="A18 Pro Chip" 
            width={180} 
            height={180}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title text-center">
            A18 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="iPhone Frame"
                className="bg-transparent relative z-10 w-full"
              />
            </div>
            <div className="hiw-video">
              <video 
                className="pointer-events-none" 
                playsInline 
                preload="auto" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honey - Next-Gen Mobile Gaming
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              The A18 Pro processor is Apple's most powerful chip ever, delivering unprecedented performance with remarkable efficiency.{' '}
              <span className="text-white">
                Built on groundbreaking 3nm technology, it features enhanced AI capabilities, industry-leading graphics performance, and intelligent battery optimization for the most demanding applications.
              </span>
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Introducing</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 high-performance cores</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
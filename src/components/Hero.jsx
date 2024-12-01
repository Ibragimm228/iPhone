import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState, useCallback } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(() => 
    typeof window !== 'undefined' && window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = useCallback(() => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet); // Fixed typo in 'resize'
    };
  }, [handleVideoSrcSet]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('#hero', { 
      opacity: 1, 
      duration: 1,
      delay: 1
    })
    .to('#cta', { 
      opacity: 1, 
      y: -50,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title opacity-0">iPhone 16 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video 
            className="pointer-events-none w-full h-full object-cover" 
            autoPlay 
            muted 
            playsInline={true} 
            key={videoSrc}
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn hover:opacity-90 transition-opacity">Buy</a>
        <p className="font-normal text-xl">From $42/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
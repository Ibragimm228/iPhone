import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    // Animate title with improved easing
    gsap.to('#title', { 
      opacity: 1, 
      y: 0,
      duration: 1,
      ease: "power2.out"
    })

    // Animate links with improved stagger animation
    gsap.to('.link', { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)"
    })
  }, [])

  return (
    <section 
      id="highlights" 
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-10">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 translate-y-10 cursor-pointer hover:opacity-80 transition-opacity">
              Watch the film
              <img 
                src={watchImg} 
                alt="Watch film icon" 
                className="ml-2 w-5 h-5 object-contain" 
              />
            </p>
            <p className="link opacity-0 translate-y-10 cursor-pointer hover:opacity-80 transition-opacity">
              Watch the event
              <img 
                src={rightImg} 
                alt="Right arrow icon" 
                className="ml-2 w-5 h-5 object-contain" 
              />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
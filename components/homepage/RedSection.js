import React from 'react'
import Carousel from './Carousel'

const RedSection = () => {
  return (
    <div className="bg-PrairieSand">
      <div className="w-10/12 mx-auto py-8">
        <div className="flex flex-col xl:flex-col-reverse mt-8">
          <p className="text-white/90 text-center mb-4 md:text-xl lg:text-2xl xl:text-3xl max-w-[1000px] mx-auto">
            Your safety and security are the two ultimate priorities for us to
            consider. <br />
            We love to work on projects all year round. This is the very
            foundation of us building a thought-provoking community around the
            crypto yoyo club.
          </p>
          <p className="text-Frog text-center font-extrabold md:text-xl lg:text-2xl xl:text-5xl xl:mb-6">
            Hop on the Crypto Yoyo Flying Sauser and Breakaway from eerie
            rug-pulls, soft pulls, and doxed collection.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default RedSection

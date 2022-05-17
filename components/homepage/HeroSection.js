import Image from 'next/image'
import React from 'react'
import hero_bg from '../../assets/sections-images/hero-bg.png'
import Video from './Video'

const HeroSection = () => {
  return (
    <div className="text-Orchid mt-44 relative">
      <div className="flex flex-col gap-y-8 w-10/12 mx-auto lg:mt-10 2xl:ml-52 max-w-[1000px] z-20">
        <p className="text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl font-semibold z-20">
          <b className="text-Frog font-semibold">Crypto</b> Yoyo{' '}
          <b className="text-Frog font-semibold">Club</b> - Home of 2,222
          Game-Changing{' '}
          <b className="text-Frog font-semibold">Animated Video NTFs</b> to
          Grant <b className="text-Frog font-semibold">Free-Mint</b> Access to
          Upcoming Releases by{' '}
          <b className="text-Frog font-semibold">Artist Shoeb</b>.
        </p>
        <p className="text-md sm:text-lg lg:text-2xl lg:w-2/4 z-20">
          Become an alpha pass member of the{' '}
          <b className="text-Frog font-normal">fail-proof</b> club, unlock
          wonders and make decisions expanding the thrilling playground
          together!
        </p>
        <button className="text-VividViolet circle-button-mint relative bg-Frog z-20 py-3 w-40 mx-auto lg:ml-20 xl:ml-40 text-center rounded-full text-2xl lg:text-3xl 2xl:text-5xl 2xl:w-60 font-extrabold">
          Mint
        </button>
      </div>
      <div className="w-full absolute top-[350px] md:top-[300px] lg:top-[200px] xl:top-[150px] 2xl:top-0">
        <Image src={hero_bg} alt="" />
      </div>
      <Video />
    </div>
  )
}

export default HeroSection

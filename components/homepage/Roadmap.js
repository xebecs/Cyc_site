import Image from 'next/image'
import React, { useState } from 'react'
import roadmap_yoyo from '../../assets/sections-images/roadmap-yoyo.png'
import { FiTriangle } from 'react-icons/fi'

const Roadmap = () => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      id="roadmap"
      className="bg-Orchid h-[235vh] sm:h-[205vh] md:h-[110vh] lg:h-[150vh] xl:h-[190vh] 2xl:h-[200vh] 3xl:h-[190vh] relative"
    >
      <div className="text-white/80">
        <div className="absolute flex-col top-20 left-8 md:left-3/4 md:top-40 lg:top-52 xl:top-72 2xl:top-80 3xl:top-[500px] 3xl:left-[72%]">
          <div className="flex gap-x-2">
            <div className="rounded-full border-4 h-[30px] w-[30px]"></div>
            <h2 className="self-center">Task Duration</h2>
          </div>
          <div className="flex mt-2 gap-x-2">
            <div className="rounded-full bg-FlamePea border-4 h-[30px] w-[30px]"></div>
            <h2 className="self-center">Task Difficulty</h2>
          </div>
        </div>
        <div className="relative right-16 min-w-[650px] lg:w-[1000px] xl:w-[1200px] xl:right-0 2xl:top-0 2xl:w-[1400px] 2xl:left-46 3xl:left-20 3xl:w-[1600px] ">
          <Image src={roadmap_yoyo} alt="roadmap yoyo" />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-VividViolet absolute top-64 md:top-72 lg:top-80 xl:top-96 2xl:top-[450px] left-[10%] 2xl:left-[20%] 3xl:left-[25%] 3xl:top-[600px] w-9/12 md:w-10/12">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-4">
          <div className="bg-white/90 max-w-[500px] lg:h-[350px] rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              1. Double or Nothing
            </h2>
            <span className="ml-4 mr-2 lg:ml-8 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Short term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-6 py-1">
              Medium
            </span>
            <p className="mt-2 lg:text-2xl lg:mt-6 text-justify w-[90%] leading-5 font-bold mx-auto">
              Get ready to own a FREE mint NFT Banner for Twitter. All members
              quality for this, and art begins as soon as we sell out our
              whitelist spots.
            </p>
            <div className="flex justify-end items-star mr-2 mb-2 md:mt-7 2xl:mt-10">
              <small className="self-end lg:text-lg mr-2">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className="bg-white/90 max-w-[500px] lg:h-[350px] rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              2. Pop N Fresh
            </h2>
            <span className="ml-4 mr-2 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Short term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-9 py-1">
              Easy
            </span>
            <p className="mt-2 lg:mt-6 lg:text-2xl text-justify w-[90%] leading-5 font-bold mx-auto">
              Start gaining a $PINZ token even when walking the dog. Vote, earn
              rewards points and spend on future releases. Token rollouts after
              10% of public sale.
            </p>
            <div className="flex justify-end mr-2 md:pt-12 mb-2 lg:pt-0 2xl:mt-10">
              <small className="self-end lg:text-lg mr-2">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-4">
          <div className="bg-white/90 max-w-[500px] lg:h-[350px] rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              3. Hop the Fence
            </h2>
            <span className="ml-4 mr-2 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Mid term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-8 py-1">
              Hard
            </span>
            <p className="mt-2 lg:mt-6 lg:text-2xl text-justify w-[90%] leading-5 font-bold mx-auto">
              Get started directing a series of 2.5D Animated Shorts. Feature
              your ideas with the rest of the club memebers as soon we move 25%
              of our collection.
            </p>
            <div className="flex justify-end mr-2 mt-8 lg:-mt-8 mb-2 2xl:mt-10">
              <small className="self-end lg:text-lg mr-2">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className="bg-white/90 max-w-[500px] lg:h-[350px] rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              4. Barrel Rolls
            </h2>
            <span className="ml-4 mr-2 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Long term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-9 py-1">
              Easy
            </span>
            <p className="mt-2 lg:mt-6 lg:text-2xl text-justify w-[90%] leading-5 font-bold mx-auto">
              Secure your investment by creating a DAO Treasurt of Y Eth. Decide
              with the club memebers how and where we shall use this fund after
              half of our collection is mint.
            </p>
            <div className="flex justify-end mr-2 md:pt-7 lg:pt-0 mb-2 lg:-mt-7 2xl:mt-2">
              <small className="self-end lg:text-lg mr-2">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-4">
          <div className="bg-white/90 md:w-[1000px]  max-w-[500px] lg:h-[350px] rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              5. Split the Atom
            </h2>
            <span className="ml-4 mr-2 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Long term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-4 py-1">
              Very Hard
            </span>
            <p className="mt-2 lg:mt-6 lg:text-2xl text-justify w-[90%] leading-5 font-bold mx-auto">
              Cut the ribbon to kickstart the second collection of the 3d
              Animated Mecha/Ape line. Mint is FREE for all club members, and
              the project starts afterr selling 75% of the collection.
            </p>
            <div className="flex justify-end mb-2 md:mt-3 mr-2 2xl:mt-2">
              <small className="self-end lg:text-lg mr-2">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className="bg-white/90 max-w-[500px] lg:w-[1100px]  lg:h-[350px]  rounded-md">
            <h2 className="text-xl lg:text-4xl lg:my-4 my-2 px-4 h2">
              6. Throw Down
            </h2>
            <span className="ml-4 mr-2 text-sm bg-Orchid text-white/80 border border-black rounded-full px-4 py-1">
              Short term
            </span>
            <span className="text-white/80 bg-PrairieSand border border-black rounded-full px-9 py-1">
              Easy
            </span>
            <p className="mt-2 lg:mt-6 lg:text-2xl text-justify w-[90%] leading-5 font-bold mx-auto">
              Participate in charity donating 1% of our profit to help Ukraine
              War Victims and another 1% to Homeless Children of Bangladesh
              after declaring sold out.
            </p>
            <div className="flex relative justify-end mr-2 mb-2 pt-8 2xl:mt-2">
              <small className="self-end lg:text-lg mr-2 ">explain this</small>
              <div className="h-[50px] w-[50px] relative border border-Orchid rounded-full bg-Frog hover:scale-110 cursor-pointer">
                <FiTriangle
                  onClick={togglePopup}
                  style={{
                    transform: 'rotate(90deg)',
                    marginLeft: '13px',
                    marginTop: '12px',
                  }}
                  size={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

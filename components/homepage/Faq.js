import React from 'react'
import red_yoyo from '../../assets/sections-images/red-yoyo.png'
import Image from 'next/image'

const Faq = () => {
  return (
    <div
      id="faq"
      className="bg-Frog relative h-[87vh] md:h-[68.5vh] lg:h-[80vh] 3xl:h-[110vh] overflow-hidden"
    >
      <div className="pt-20">
        <div className="w-full left-3 md:left-0 md:rounded-r-3xl md:rounded-l-none md:w-3/4 py-4 text-PrairieSand max-w-[1000px] font-semibold bg-FlamePea absolute color-container-red">
          <h1 className="mx-6 pb-24 text-white text-3xl md:text-5xl md:pb-6 md:ml-32 md:mx-0 3xl:text-6xl 3xl:text-center 3xl:pt-6">
            FAQ
          </h1>
          <div className="mr-8 mb-4 faq-content">
            <div className="flex flex-col">
              <span className="faq-items">What is the total supply ?</span>
              <div className="bg-PrairieSand h-[10px]"></div>
              <span className="faq-items rounded-b-full md:rounded-bl-none !rounded-t-none md:rounded-tr-none">
                2,222
              </span>
            </div>
          </div>
          <div className="mr-8 faq-content mb-4">
            <div className="flex flex-col">
              <span className="bg-Frog rounded-t-full md:rounded-tl-none 3xl:pl-[290px] 3xl:pt-6  3xl:text-3xl md:mr-52 3xl:mr-16 pl-10 md:text-left md:pl-8 pt-2 h-10 3xl:h-20 lg:text-lg xl:text-xl">
                What is the public mint price ?
              </span>
              <div className="bg-PrairieSand h-[10px]"></div>
              <span className="faq-items rounded-b-full md:rounded-bl-none !rounded-t-none md:rounded-tr-none">
                0.03 ETH + low gas
              </span>
            </div>
          </div>
          <div className="mr-8 faq-content mb-4">
            <div className="flex flex-col">
              <span className="bg-Frog rounded-t-full md:rounded-tl-none 3xl:pt-6  3xl:text-3xl 3xl:pl-[290px] md:mr-52 3xl:mr-16 pl-10 md:text-left md:pl-8 pt-2 h-10 3xl:h-20 lg:text-lg xl:text-xl">
                What&apos;s the secondary royalty fees ?
              </span>
              <div className="bg-PrairieSand h-[10px]"></div>
              <span className="faq-items rounded-b-full md:rounded-bl-none !rounded-t-none md:rounded-tr-none">
                5%
              </span>
            </div>
          </div>
          <div className="mr-8 faq-content mb-14">
            <div className="flex flex-col">
              <span className="bg-Frog rounded-t-full pl-10 md:rounded-tl-none 3xl:pt-6 3xl:text-3xl 3xl:pl-[290px] md:mr-52 3xl:mr-16 md:text-left md:pl-8 pt-2 h-10 3xl:h-20 lg:text-lg xl:text-xl">
                Which smart contact is used ?
              </span>
              <div className="bg-PrairieSand h-[10px]"></div>
              <span className="faq-items rounded-b-full md:rounded-bl-none !rounded-t-none md:rounded-tr-none">
                ERC721A (Low Gas)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:top-20 lg:top-[5%] top-0 3xl:-mt-14">
        <Image src={red_yoyo} alt="Red Yoyo" />
      </div>
    </div>
  )
}

export default Faq

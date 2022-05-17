import Image from 'next/image'
import React from 'react'
import fans_image1 from '../../assets/fans/fans-image1.png'
import fans_image2 from '../../assets/fans/fans-image2.png'
import fans_image3 from '../../assets/fans/fans-image3.png'

const Fans = () => {
  return (
    <div className="bg-VividViolet">
      <div className="flex flex-col xl:flex-row-reverse pt-10 3xl:pt-20 3xl:pb-10">
        <div className="bg-Frog ml-6 xl:w-[1200px] 2xl:w-[2500px] color-container-frog py-4">
          <div className="flex justify-between">
            <div className="flex justify-between xl:flex-col md:w-full">
              <h1 className="text-VividViolet px-6 md:text-6xl 3xl:text-8xl 3xl:text-center md:ml-8">
                Only For Fans
              </h1>
              <h2 className="text-PrairieSand hidden md:block text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:mt-4 xl:text-center xl:w-full xl:mr-0 text-right mr-6 self-end">
                Merch Store
              </h2>
            </div>
          </div>
          <div className="bg-VividViolet flex gap-x-2 3xl:gap-x-6 w-full rounded-l-full p-3 pt-4 mr-5 ml-2 3xl:ml-10 3xl:pl-10">
            <div className="2xl:w-[300px]">
              <Image src={fans_image1} style={{ borderRadius: '50%' }} alt="" />
            </div>
            <div className="2xl:w-[300px]">
              <Image src={fans_image2} style={{ borderRadius: '50%' }} alt="" />
            </div>
            <div className="2xl:w-[300px]">
              <Image src={fans_image3} style={{ borderRadius: '50%' }} alt="" />
            </div>
          </div>
          <h2 className="text-PrairieSand md:hidden text-3xl text-right mt-1 mr-6 mb-4">
            Merch Store
          </h2>
          <h2 className="text-PrairieSand hidden text-right md:block text-3xl my-2 mr-6">
            Latest Update
          </h2>

          <div className="bg-VividViolet mr-6 md:rounded-r-none md:rounded-l-full md:w-full md:mr-0 md:ml-8 rounded-r-full 3xl:ml-10">
            <p className="leading-4 w-11/12 text-white/80 md:mx-auto pl-2 py-4 md:text-lg md:leading-5">
              Lorem ipsum eu augue ut lectus arcu bibendum at varius vel
              pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc
              aliquet bibendum enim facilisis gravida neque convallis a cras
              semper auctor neque vitae tempus quam pellentesque nec nam aliquam
              sem et tortor consequat id porta nibh venenatis cras sed felis
              eget velit aliquet sagittis id consectetur purus ut faucibus
              pulvinar elementum integer enim neque volutpat ac tincidunt vitae
              semper quis
            </p>
          </div>
          <h2 className="text-PrairieSand md:hidden text-3xl mt-1 ml-6">
            Latest Update
          </h2>
        </div>
        <h3 className="text-right hidden md:block text-white mr-20 text-4xl font-bold my-3 xl:hidden">
          VR Experience
        </h3>{' '}
        <div className="bg-Frog xl:mt-0 ml-6 md:w-10/12 md:mx-auto md:rounded-r-3xl color-container-frog overflow-x-auto mt-2">
          <div className="bg-VividViolet my-4 ml-4 md:mx-4 py-2 md:py-4 px-4 md:rounded-3xl color-container-frog">
            <div className="bg-white md:text-2xl text-Orchid font-extrabold p-4  md:px-8 md:py-6 rounded-3xl 3xl:text-3xl">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  className="w-full h-[400px] rounded-xl 3xl:h-[500px]"
                  title="Flippin Awesome Modified Crypto yoyo Club"
                  frameBorder="0"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay"
                  xr-spatial-tracking="true"
                  xr-spatial-tracking-execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="http://sketchfab.com/models/538c79269ef24145abaa19d33a6755ef/embed"
                ></iframe>
              </div>
            </div>
            <h3 className="text-center hidden xl:text-4xl xl:block text-white my-3 text-lg font-bold ">
              VR Experience
            </h3>
          </div>
        </div>
        <h3 className="text-right md:hidden text-white mr-6 mt-1 text-lg font-bold mb-8">
          VR Experience
        </h3>
      </div>
    </div>
  )
}

export default Fans

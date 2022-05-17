import Image from 'next/image'
import Navbar from '../components/homepage/Navbar'
import HeroSection from '../components/homepage/HeroSection'
import RedSection from '../components/homepage/RedSection'
import Roadmap from '../components/homepage/Roadmap'
import Faq from '../components/homepage/Faq'
import Head from 'next/head'
import Fans from '../components/homepage/Fans'
import Team from '../components/homepage/Team'
import Footer from '../components/homepage/Footer'
import discord_icon_sidebar from '../assets/icons/discord-icon-sidebar.png'
import twitter_icon_sidebar from '../assets/icons/twitter-icon-sidebar.png'
import tiktok_icon_sidebar from '../assets/icons/tiktok-icon-sidebar.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>CYC DAPP Website</title>
      </Head>
      <div className="overflow-x-hidden relative">
        <div className="hidden lg:flex lg:flex-col lg:gap-y-4 z-50 top-[600px] lg:left-6 lg:fixed">
          <Image
            src={discord_icon_sidebar}
            width={50}
            height={50}
            style={{ cursor: 'pointer', opacity: '.6' }}
            alt="discord-icon-sidebar"
          />
          <Image
            src={twitter_icon_sidebar}
            width={50}
            height={50}
            style={{ cursor: 'pointer', opacity: '.6' }}
            alt="twitter-icon-sidebar"
          />
          <Image
            src={tiktok_icon_sidebar}
            width={50}
            height={50}
            style={{ cursor: 'pointer', opacity: '.6' }}
            alt="tiktok-icon-sidebar"
          />
        </div>
        <Navbar />
        <HeroSection />
        <RedSection />
        <Roadmap />
        <Faq />
        <Fans />
        <Team />
        <Footer />
      </div>
    </>
  )
}

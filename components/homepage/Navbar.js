import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/logo/logo.png'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import tiktok_icon_sidebar from '../../assets/icons/tiktok-icon-sidebar.png'
import twitter_icon_sidebar from '../../assets/icons/twitter-icon-sidebar.png'
import discord_icon_sidebar from '../../assets/icons/discord-icon-sidebar.png'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      {isOpen ? (
        <motion.div
          className="bg-VividViolet flex justify-between w-full z-50 fixed top-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            id="menu-mobile"
            className="absolute top-[108px] flex flex-col bg-VividViolet h-screen w-full items-center gap-y-10"
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Crypto Yoyo Club Logo"
                width={120}
                height={120}
                style={{
                  cursor: 'pointer',
                }}
              />
            </Link>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-Frog font-bold text-4xl sm:text-5xl uppercase"
            >
              Connect Wallet
            </a>
            <a
              href="#roadmap"
              onClick={() => setOpen(false)}
              className="text-Frog font-bold text-4xl sm:text-5xl uppercase"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="text-Frog font-bold text-4xl sm:text-5xl uppercase"
            >
              FAQ
            </a>
            <a
              href="#team"
              onClick={() => setOpen(false)}
              className="text-Frog font-bold text-4xl sm:text-5xl uppercase"
            >
              Team
            </a>
            <Link href="/blog">
              <a className="text-Frog font-bold text-4xl sm:text-5xl uppercase">
                Blog
              </a>
            </Link>
            <div className="flex gap-x-8 mt-6">
              <Image
                className="hover:scale-105"
                src={tiktok_icon_sidebar}
                style={{ cursor: 'pointer', opacity: 0.8 }}
                width={60}
                height={60}
                alt="tiktok-icon-sidebar"
              />
              <Image
                className="hover:scale-105"
                src={discord_icon_sidebar}
                style={{ cursor: 'pointer', opacity: 0.8 }}
                width={60}
                height={60}
                alt="discord-icon-sidebar"
              />
              <Image
                className="hover:scale-105"
                src={twitter_icon_sidebar}
                style={{ cursor: 'pointer', opacity: 0.8 }}
                width={60}
                height={60}
                alt="twitter-icon-sidebar"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end pr-12 w-screen pb-20">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              rounded
              size={60}
            />
          </div>
        </motion.div>
      ) : (
        <div className="fixed z-50">
          <div className="bg-black lg:bg-VividViolet px-10 flex justify-between w-screen z-50 gap-x-16 lg:justify-center relative pt-10 md:pt-0">
            <div className="flex justify-between w-full lg:w-auto">
              <div className="mr-10 lg:flex lg:mr-16 xl:mr-32">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Crypto Yoyo Club Logo"
                    width={90}
                    height={90}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              </div>
              <div className="hidden lg:flex lg:items-center gap-x-16 xl:gap-x-20">
                <a
                  href="#roadmap"
                  className="text-Frog circle relative font-bold text-2xl uppercase"
                >
                  Roadmap
                </a>
                <a
                  href="#faq"
                  className="text-Frog circle relative font-bold text-2xl uppercase"
                >
                  FAQ
                </a>
                <a
                  href="#team"
                  className="text-Frog circle relative font-bold text-2xl uppercase"
                >
                  Team
                </a>
                <Link href="/blog">
                  <a className="text-Frog circle relative font-bold text-2xl uppercase">
                    Blog
                  </a>
                </Link>
                <a
                  href="#wallet"
                  className="text-VividViolet circle-button relative font-bold bg-Frog py-4 text-center rounded-full w-[300px] text-2xl uppercase"
                >
                  Connect Wallet
                </a>
              </div>
              <div className="self-center lg:hidden mr-4">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  color="white"
                  rounded
                  size={60}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

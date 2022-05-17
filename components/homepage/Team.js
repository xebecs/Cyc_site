import Image from 'next/image'
import React from 'react'
import team1 from '../../assets/team-members/team1.png'
import team2 from '../../assets/team-members/team2.png'

import twitter_icon_team from '../../assets/icons/twitter-icon-team.png'
import linkedin_icon_team from '../../assets/icons/linkedin-icon-team.png'

const Team = () => {
  return (
    <div id="team" className="bg-PrairieSand">
      <div className="flex-col text-white mx-auto text-center pt-14">
        <div className="3xl:ml-20">
          <h2 className="text-4xl 3xl:text-6xl">Team</h2>
          <span className="font-light 3xl:text-2xl">
            Say <b className="font-semibold">No</b> To <br />
          </span>
          <span className="text-2xl">Racism</span>
        </div>
        <div className="flex flex-col md:flex-row md:w-10/12 md:mx-auto">
          <div className="flex-col">
            <div className="w-9/12 md:w-11/12">
              <Image src={team1} alt="" />
            </div>
            <div className="md:ml-16">
              <h2 className="text-xl md:text-2xl 3xl:text-4xl">
                Shoeb Mohammad
              </h2>
              <span className="3xl:text-lg">Artist/Developer</span>
              <p className="mt-2 w-[70%] 3xl:w-[80%] mx-auto md:w-full 3xl:text-lg text-sm">
                Hi, I am Shoeb. I have 12 years of experience in the CF &
                Animation industry. I am devoting full time to web 3.0 tech,
                focusing on creating NFT content for my community.
              </p>
              <div className="mt-2">
                <Image
                  src={twitter_icon_team}
                  style={{ cursor: 'pointer' }}
                  width={50}
                  height={50}
                  alt=""
                />
                <Image
                  src={linkedin_icon_team}
                  style={{ cursor: 'pointer' }}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="w-9/12 md:w-full mx-auto">
              <Image src={team2} alt="" />
            </div>
            <div className="md:mt-3 3xl:mt-5">
              <h2 className="text-xl md:text-2xl 3xl:text-4xl">
                Israt Jahan Femi
              </h2>
              <span className="3xl:text-lg">Digital Marketer/Advisor</span>
              <p className="mt-2 3xl:mt-3 w-[70%]  md:w-[90%] 3xl:w-[75%] 3xl:text-lg mx-auto text-sm">
                Hello, my name is Femi. I am co-founding Crypto Yoyo Club to
                ensure providing maximum value to our community and increase the
                brand value through efficient outreach.
              </p>
              <div className="mt-2">
                <Image
                  src={twitter_icon_team}
                  style={{ cursor: 'pointer' }}
                  width={50}
                  height={50}
                  alt=""
                />
                <Image
                  src={linkedin_icon_team}
                  style={{ cursor: 'pointer' }}
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

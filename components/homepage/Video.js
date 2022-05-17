import React from 'react'

const Video = () => {
  return (
    <div className="mt-[210px] sm:mt-[350px] md:mt-[400px]">
      <video
        muted
        controls
        style={{
          width: '500px',
          height: '500px',
          width: '100%',
          height: '100%',
        }}
      >
        <source
          src={require('../../assets/sections-videos/section-bg-video.mp4')}
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Video

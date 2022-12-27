import React from 'react'
import { Link } from 'react-router-dom'
import { HomePageVideos } from '../Types'

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
    <div className="flex gap-3 bg-[#0f0f0f]">
      <div className="relative">
        <span className='absolute bottom-1 right-1 text-xs bg-[#0f0f0f] px-1 py-0.3 z-10 rounded-[4px] '>
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} className='h-[12.5rem] w-[22.5rem] rounded-xl' alt='thubmnail' />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className='max-w-2xl'>
          <a href="#" className='line-clamp-2'>
            {data.videoTitle}
          </a>
        </h3>
        <div className="text-xs text-gray-400">
          <div>
            <div>
              <span className="after:content-['*'] after:mx-1 ">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span> ago
            </div>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <a href="#" className='flex items-center gap-2 text-xs text-gray-400'>
            <img src={data.channelInfo.image} alt="channel" className='h-7 w-7 rounded-full' />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className='max-w-2xl line-clamp-2 text-xs text-gray-400'>
          <p>
            {
              data.videoDescription
            }
          </p>
        </div>
      </div>
    </div>
  )
}

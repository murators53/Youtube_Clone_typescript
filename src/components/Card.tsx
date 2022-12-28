import React from 'react'
import { Link } from 'react-router-dom'
import { HomePageVideos } from '../Types'

export default function Card({ data }: { data: HomePageVideos }) {
    return (
        <div className='w-[20%] md:w-[100%] h-60 flex gap-4 flex-col flex-shrink-0 pb-14 mr-[29px] mb-16 '>
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-[13px] bg-gray-900 px-1 py-0.3 z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} className='h-44 w-96 brightness-110 rounded-xl flex-shrink-0 object-cover object-center' alt='thubmnail' />
                </Link>
            </div>
            <div className='flex gap-2 flex-shrink'>
                <div className='flex-shrink-0'>
                    <a href="#">
                        <img src={data.channelInfo.image} alt="channel"
                            className='h-9 w-9 rounded-full' />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href="#" className='line-clamp-2'>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className='text-sm text-gray-400'>
                        <div>
                            <a href="#" className='hover:text-white'>
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className="after:content-['*'] after:mx-1 ">
                                {data.videoViews} views
                            </span>
                            <span>{data.videoAge}</span> ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

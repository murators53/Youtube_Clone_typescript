import React from "react";
import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";
import { FaRegClock } from 'react-icons/fa'
import { CgPlayList } from 'react-icons/cg'
import { BsThreeDotsVertical } from 'react-icons/bs'
export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-2 group">
      <div className="relative min-w-fit ">
        <span className="absolute bottom-1 right-1 text-xs bg-[#0f0f0f] px-1 py-0.3 z-10 rounded-[4px]">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`} className='relative '>
          <img
            src={data.videoThumbnail}
            className="h-24 w-44 rounded-xl object-cover"
            alt="thumbnail"
          />
        
        <FaRegClock className="absolute hidden group-hover:showedCard " />
        <CgPlayList className="absolute hidden group-hover:showedCard2 " />
          <BsThreeDotsVertical className="absolute hidden group-hover:showedCard3" />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2 ">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-xs text-grap-400">
          <div>
            <a href="#" className="hover:text-white text-[#8f8f8f]">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1 text-[#8f8f8f]">
                {data.videoViews} views
              </span>
              <span className="text-[#8f8f8f]">{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
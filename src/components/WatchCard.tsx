import React from "react";
import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-3 ">
      <div className="relative min-w-fit">
        <span className="absolute bottom-1 right-1 text-xs bg-[#0f0f0f] px-1 py-0.3 z-10 rounded-[4px]">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-24 w-40 rounded-xl"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-xs text-grap-400">
          <div>
            <a href="#" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
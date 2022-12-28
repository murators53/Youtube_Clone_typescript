import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'
import Minibar from '../components/Minibar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner'
import TopBar from '../components/TopBar'
import { clearVideos } from '../redux'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getHomePageVideos } from '../redux/reducers/getHomePageVideos'
import { HomePageVideos } from '../Types'

export default function Home() {
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) => state.youtubeApp.videos)
  const { slideMenu } = useAppSelector((state) => state.youtubeApp)
  let videos2=[]
  videos2.push(videos)
  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getHomePageVideos(false))
  }, [dispatch])

  return (
    <div className="max-h-screen overflow-hidden">
      <div className='w-[100%]' style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex h-[111vh] " style={{ height: "99.5vh" }}>
        {slideMenu ?
          <Sidebar /> :
          <Minibar />
        }

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={750}
            className='bg-[#0f0f0f] overflow-y-auto  pt-1'
          >
            <TopBar />
            <div className={`grid mr-7  gap-y-4  sm:grid-cols-2 gap-x-4 lg:grid-cols-4 grid-cols-4 pb-8 py-6 pl-8 flex-shrink-0 transform ease-in ${slideMenu ? 'ml-[15.3%] right-3' : ''} `}>
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

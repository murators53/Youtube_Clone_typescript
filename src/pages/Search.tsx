import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import Minibar from '../components/Minibar'
import Navbar from '../components/Navbar'
import SearchCard from '../components/SearchCard'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner'
import { changeSearchTerm, clearVideos } from '../redux'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getSearchPageVideos } from '../redux/reducers/getSearchPageVideos'
import { HomePageVideos } from '../Types'
import { VscSettings } from 'react-icons/vsc'

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) => state.youtubeApp.videos)
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)
  const {slideMenu} = useAppSelector((state) => state.youtubeApp)
  
  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/")
    } else {
      dispatch(getSearchPageVideos(false))
      
    }
    dispatch(clearVideos())
  }, [dispatch, navigate, searchTerm])

  return (
    <div className="max-h-screen overflow-hidden bg-[#0f0f0f]">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
      {slideMenu ?
          <Sidebar /> :
          <Minibar />
        }
        {videos.length ? (
          <div className={`${slideMenu ? 'ml-[15%] right-3' : ''} ml-14 py-6 pl-8 flex flex-col gap-5 w-full `}>
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={675}
            >
              <div className=' border-b-2 border-[#222222] pb-2 flex flex-row gap-2'>
              <VscSettings className='-rotate-90 text-xl'/>
                <span className='text-sm'>Filters</span>
              </div>
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                )
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

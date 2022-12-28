import React,{ useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { IoAppsSharp, IoSearchOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { changeSearchTerm, clearSearchTerm, clearVideos, showSlideMenu } from '../redux'
import { getSearchPageVideos } from '../redux/reducers/getSearchPageVideos'
import { getHomePageVideos } from '../redux/reducers/getHomePageVideos';



export default function Navbar () {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)
    const {slideMenu} = useAppSelector((state) => state.youtubeApp)
    const {searchHidden} = useAppSelector((state) => state.youtubeApp)
    const [control, setControl]=useState(false)
    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("search")
            // window.location.replace('/search')
        } else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }
    }

        const handleShowSlide = () => {
            dispatch(showSlideMenu(slideMenu))
        }
    useEffect(()=>{
    },[control])

    return (
        <div className=" overflow-y-scroll overflow-x-hidden flex-shrink-1 flex justify-between  items-center px-[16px] h-16 bg-[#0f0f0f] opacity-95 sticky top-0 z-40">
            <div className="flex gap-4 items-center flex-row text-2xl ">
                <button onClick={handleShowSlide}
                 className='text-white p-2 hover:bg-[#222222] hover:rounded-full hover:p-2'>
                    <AiOutlineMenu  />
                </button>
                <NavLink to='/' >
                    <div className='flex items-center justify-center flex-row '>
                        <button className='relative' onClick={() => {
                            dispatch(changeSearchTerm(''))
                             
                            setControl(true)
                            window.location.replace('/')}}>
                            <p className='absolute border-t-[4.5px] border-t-transparent border-l-[7.5px] text-white border-b-[4.5px] border-b-transparent top-[9px] left-[12px]'></p>
                            <BsYoutube className="text-3xl text-[#ff0000] w-[31px] h-[29px]" />
                        </button>
                        <span className='text-xl font-medium text-white tracking-[-1.3px] '>Youtube</span>
                    </div>
                </NavLink>
            </div>
            <div  className='flex flex-shrink-0  items-center justify-between flex-row hidden md:flex'>
                <form className='' onSubmit={e => {
                    e.preventDefault()
                    handleSearch();
                }}>
                    <div className='flex bg-[#0f0f0f] flex-shrink-0  border-[1px] border-[#2e2e2e] group items-center h-10 px-4 pr-0 rounded-l-full focus-within:border-[1px] focus-within:border-blue-500 focus-within:border-solid	'>
                        <div className="flex gap-4  items-center pr-5 min-w-0 ">
                            <div className={`${!searchHidden ? 'hidden':''} group-focus-within:flex `}>
                                <IoSearchOutline className={`text-xl w-[1.1rem] group-focus-within:flex  ${!searchHidden ? 'hidden':''} `} />
                            </div>
                            <input
                                className='w-[29rem] bg-[#0f0f0f]  text-white focus:outline-none border-none'
                                type="text"
                                placeholder='Search'
                                value={searchTerm}
                                // onChange={e => dispatch(changeSearchTerm(e.target.value))}
                                onChange={e => dispatch(changeSearchTerm(e.target.value))}
                            />
                            <AiOutlineClose className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : 'visible'}`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                    </div>
                </form>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full'>
                            <IoSearchOutline className='text-xl w-[1.8rem]' onClick={()=>handleSearch()}/>
                        </button>
                <div className='text-xl p-3 bg-zinc-900 rounded-full flex  mr-[16.9rem] ml-[.4rem] hover:bg-[#222222] hover:text-white'>
                    <TiMicrophone />
                </div>
                <div className='flex gap-6 items-center text-xl mr-4 '>
                    <HiOutlineVideoCamera size={25} />
                    <div className='relative'>
                        <BsBell />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                            +9
                        </span>
                    </div>
                    <img src="https://yt3.ggpht.com/yti/AJo0G0nbM7VH95VH-qsl7sv8_eoYCTuaPAOtgVaJeef1eA=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt="logo" className='w-8 h-8 rounded-full ml-4' />
                </div>
            </div>
        </div>
    )
}



/* 
style={{border:'1px solid yellow'}} 
<div className='relative flex items-center justify-center bg-[#ff0000] w-[35px] h-[23px] rounded-lg '>
                            <p className='absolute border-t-[4px] border-t-transparent border-l-[8px] text-white border-b-[4px] border-b-transparent'></p>
                        </div>
*/
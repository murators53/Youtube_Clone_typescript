import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../redux'
import { getSearchPageVideos } from '../redux/reducers/getSearchPageVideos'

export default function Navbar() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)
    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("search")
        } else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }
    }

    return (
        <div className="flex-shrink-0 flex justify-between  items-center px-[16px] h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-4 items-center flex-row text-2xl ">
                <div className='text-white p-2 hover:bg-gray-600 hover:rounded-full hover:p-2'>
                    <AiOutlineMenu  />
                </div>
                <Link to='/' >
                    <div className='flex items-center justify-center flex-row '>
                        <button className='relative'>
                            <p className='absolute border-t-[4.5px] border-t-transparent border-l-[7.5px] text-white border-b-[4.5px] border-b-transparent top-[9px] left-[12px]'></p>
                            <BsYoutube className="text-3xl text-[#ff0000] w-[31px] h-[29px]" />
                        </button>
                        <span className='text-xl font-medium text-white tracking-[-1.3px] '>Youtube</span>
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSearch();
                }}>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className='text-xl' />
                            </div>
                            <input
                                className='w-96 bg-zinc-900 text-white focus:outline-none border-none'
                                type="text"
                                value={searchTerm}
                                onChange={e => dispatch(changeSearchTerm(e.target.value))}
                            />
                            <AiOutlineClose className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : 'visible'}`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <TiMicrophone />
                </div>
                <div className='flex gap-5 items-center text-xl'>
                    <BsCameraVideo size={55} />
                    <div className='relative'>
                        <BsBell />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                            +9
                        </span>
                    </div>
                    <img src="https://yt3.ggpht.com/yti/AJo0G0nbM7VH95VH-qsl7sv8_eoYCTuaPAOtgVaJeef1eA=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt="logo" className='w-9 h-9 rounded-full' />
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
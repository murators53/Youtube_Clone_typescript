import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getSearchPageVideos } from '../redux/reducers/getSearchPageVideos';

export default function TopBar() {
    const { slideMenu } = useAppSelector((state) => state.youtubeApp)
    const array1 = ['All','Typescript','Redux Toolkit','React','Tailwind','Javascript','CSS','HTML','Youtube','Clone','Hooks','API','Murat Örsoğlu Zil Kale','React Developer','Frontend Developer']
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("search")
            dispatch(clearVideos())
        } else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }
    }

    const handleSearch1 = (item:string) => {
        if (item === "All") {
            dispatch(changeSearchTerm(''))
        } else {
            dispatch(changeSearchTerm(item))
        }
    }
    
    return (
        <div className={`flex flex-row gap-3 ml-4 items-center justify-center ${slideMenu ? 'ml-[15.3%] right-3 overflow-hidden' : ''}`}>
            {
                array1.map(item => {
                    return <form onSubmit={(e)=>{
                        e.preventDefault()
                        handleSearch();
                    }}>
                        <button type='submit' className='px-3 hover:bg-white hover:text-black py-2 bg-[#272727] rounded-xl flex items-center justify-center text-xs'
                            onClick={()=>handleSearch1(item)}
                        >
                            {item}
                        </button>
                    </form>
                })
            }
        </div>
    )
}
 
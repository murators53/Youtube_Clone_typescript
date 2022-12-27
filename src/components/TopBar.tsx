import React from 'react'
import { useAppSelector } from '../redux/hooks'

export default function TopBar() {
    const { slideMenu } = useAppSelector((state) => state.youtubeApp)
    const array1 = ['Typescript','Redux Toolkit','React','Tailwind','Javascript','CSS','HTML','Youtube','Clone','Hooks','API','Murat','Örsoğlu','React Developer','Frontend Developer']
    return (
        /* <div className={`grid mr-7 gap-x-[17px] gap-y-18 gap-x-2 grid-cols-4 pb-8 py-6 pl-8 transform ease-in ${slideMenu ? 'ml-[15.3%] right-3' : ''} `}> */
        <div className={`flex flex-row gap-3 ml-4 items-center justify-center ${slideMenu ? 'ml-[15.3%] right-3 overflow-hidden' : ''}`}>
            {
            array1.map(item=>{
                return(
                     
                    
                     
                        <p className='px-3 py-2 bg-[#272727] rounded-xl flex items-center justify-center text-xs'>{item}</p>
                        
                     
                )
            })
        }
        </div>
    )
}

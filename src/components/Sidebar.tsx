import { AiOutlineMenu } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { helpLinks, mainLinks, secondaryLinks, subscriptionLinks, textLinks } from "../Icons";
import { showSlideMenu } from "../redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
 

export default function Sidebar() {
    const dispatch = useAppDispatch()
    const {slideMenu} = useAppSelector((state) => state.youtubeApp)
    return (
        <div className={`pl-3 fixed transform transition-all duration-75 ${slideMenu === false ? 'translate-x-[-16rem]  ':''}  
        z-50 w-[15.3%] min-w-[15.3%] bg-[#0f0f0f] pr-5 hover:overflow-y-auto pb-8 sidebar flex-shrink-0 h-[95vh]`}>
            <ul className="flex flex-col border-b-2 border-[#222222] mt-[10px] ">
                {
                    mainLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-3 py-[10px] hover:bg-[#272727] rounded-xl  ${name === "Home" ? "bg-[#272727] hover:bg-[#3d3d3d]":''}`}
                            >
                                <a href="#" className="flex items-center gap-7">
                                    {icon}
                                    <span className="text-[13px] tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-[#222222] mt-[10px]">
                {
                    secondaryLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-3 py-[10px] hover:bg-[#272727] rounded-xl`}
                            >
                                <a href="#" className="flex items-center gap-7">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-[#222222] mt-[10px]">
                {
                    subscriptionLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-3 py-3  hover:bg-[#272727] rounded-xl ${name === "Home" ? "bg-slate-600" : ''} `}
                            >
                                <a href="#" className="flex items-center gap-7">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-[#222222] mt-[10px]">
                {
                    helpLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-3 py-3  hover:bg-[#272727] rounded-xl ${name === "Home" ? "bg-slate-600" : ''} `}
                            >
                                <a href="#" className="flex items-center gap-7">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {textLinks[0].map((name) => {
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {textLinks[1].map((name) => {
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google LLC</span>
            <br />
            
        </div>
    )
}

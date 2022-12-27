import React from 'react'
import { mainLinks } from '../Icons'

export default function Minibar() {
  return (
    <div>
        <ul className="flex flex-col bg-[#0f0f0f] border-b-2 border-[#222222] mt-[2px] ">
                {
                    mainLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`ml-1  py-[10px] hover:bg-[#272727] rounded-xl  ${name === "Home" ? "bg-[#272727] hover:bg-[#3d3d3d]":''}`}
                            >
                                <a href="#" className="flex flex-col justify-center items-center gap-1 py-2">
                                    {icon}
                                    <span className="text-[10px] tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
    </div>
  )
}

import { helpLinks, mainLinks, secondaryLinks, subscriptionLinks, textLinks } from "../Icons";

export default function Sidebar() {
    return (
        <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
            <ul className="flex flex-col border-b-2 border-gray-600">
                {
                    mainLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-6 py-3 hover:bg-zinc ${name === "Home" ? "bg-slate-600" : ''} `}
                            >
                                <a href="#" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-600">
                {
                    secondaryLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-6 py-3 hover:bg-zinc  `}
                            >
                                <a href="#" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-600">
                {
                    subscriptionLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-6 py-3 hover:bg-zinc ${name === "Home" ? "bg-slate-600" : ''} `}
                            >
                                <a href="#" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-600">
                {
                    helpLinks.map(({ icon, name }) => {
                        return (
                            <li key={name}
                                className={`pl-6 py-3 hover:bg-zinc ${name === "Home" ? "bg-slate-600" : ''} `}
                            >
                                <a href="#" className="flex items-center gap-5">
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

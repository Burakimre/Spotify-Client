import React from 'react'

function Banner(props: any) {
    return (
        <div className="flex items-center relative h-64 mb-8 rounded-xl lg:shadow-xl">
            <div className="hidden lg:block absolute w-full h-full rounded-xl z-0 overflow-hidden">
                <img className="w-full h-full object-cover rounded-xl blur-lg" src={ props.src } alt=""/>
                <div className="absolute top-0 w-full h-full bg-black/40"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-stretch space-x-0 lg:space-x-8 space-y-2 lg:space-y-0 w-full p-4 rounded-xl z-10">
                <img className="w-36 h-36 lg:w-56 lg:h-56 rounded-xl" src={ props.src } alt=""/>
                <div className="flex flex-col justify-center">
                    <div className="flex-1"></div>
                    <div className="flex flex-col">
                        <span className="text-white text-md lg:text-6xl font-bold">{ props.name }</span>
                        <span className="text-gray-300 text-sm lg:text-md">{ props.description }</span>
                    </div>
                    <div className="flex flex-1 justify-center lg:justify-start">
                        <span className="self-end text-gray-400 lg:text-white text-md">{ props.total + " " + (props.total == 1 ? "track" : "tracks") }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
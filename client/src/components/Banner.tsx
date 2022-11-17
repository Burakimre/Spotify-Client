import React from 'react'

function Banner(props: any) {
    return (
        <div className="flex items-center relative h-64 mb-8 rounded-xl sm:shadow-xl">
            <div className="hidden sm:block absolute w-full h-full rounded-xl z-0 overflow-hidden">
                <img className="w-full h-full object-cover rounded-xl blur-lg" src={ props.src } alt=""/>
                <div className="absolute top-0 w-full h-full bg-black/40"></div>
            </div>
            <div className="flex justify-center sm:justify-start space-x-8 w-full p-4 rounded-xl z-10">
                <img className="w-56 h-56 rounded-xl" src={ props.src } alt=""/>
                <div className="hidden sm:flex items-center">
                    <span className="text-white text-6xl font-bold">{ props.name }</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
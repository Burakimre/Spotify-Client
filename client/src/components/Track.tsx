import React from 'react'
import { getDurationFromMilliseconds } from '../utils/Time'
import { TrackModel } from '../interfaces'
import './Layout/Scrollbar.css'

type Props = {
    track: TrackModel;
    number: number;
}

function Track({ track, number }: Props) {
    return (
        <>
            <a target="_blank" rel="noreferrer" href={ track.url }>
                <div className="flex items-center space-x-5 text-neutral-400 hover:text-white select-none cursor-pointer transition-colors group">
                    <div className="w-4">
                        <span className="block group-hover:hidden">{ number }</span>
                        <span className="hidden group-hover:block"><i className="fa-solid fa-play"></i></span>
                    </div>
                    <div>
                        <img className="rounded-lg" src={ track.image } alt="track thumbnail" />
                    </div>
                    <div className="flex flex-col w-96">
                        <span>{ track.name }</span>
                        <span>{ track.artists.join(", ") }</span>
                    </div>
                    <div className="hidden lg:flex flex-1 overflow-hidden text-ellipsis">
                        <span>{ track.album }</span>
                    </div>
                    <div className="flex justify-end flex-1 text-right pr-0 lg:pr-4">
                        <span>{ getDurationFromMilliseconds(track.duration) }</span>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Track
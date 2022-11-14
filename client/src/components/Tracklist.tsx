import React from 'react'
import { getDurationFromMilliseconds } from '../utils/Time'
import './Layout/Scrollbar.css'

function Track(props: any) {


    return (
        <>
            <div className="flex items-center space-x-5 text-neutral-400 hover:text-white select-none cursor-pointer transition-colors">
                <div className="w-4">
                    <span>{ props.number }</span>
                </div>
                <div>
                    <img className="rounded-lg" src={ props.thumbnail } alt="track thumbnail" />
                </div>
                <div className="flex flex-col w-96">
                    <span>{ props.name }</span>
                    <span>{ props.artist }</span>
                </div>
                <div className="hidden sm:flex w-48 overflow-hidden text-ellipsis">
                    <span>{ props.album }</span>
                </div>
                <div className="flex justify-end flex-1 text-right pr-0 sm:pr-4">
                    <span>{ getDurationFromMilliseconds(props.duration) }</span>
                </div>
            </div>
        </>
    )
}

function Tracklist(props: any) {
    return (
        <>
            <div className="flex flex-col space-y-5 m-6 sm:m-12 mt-2 sm:mt-2 pr-3 sm:pr-0 overflow-x-hidden overflow-y-auto scrollbar">
                { props.tracks.items.map((item: any, index: number) => {
                    return <Track key={ item.track.id } number={ index += 1 } name={ item.track.name } album={ item.track.album.name } duration={ item.track.duration_ms } artist={ item.track.album.artists[0].name } thumbnail={ item.track.album.images[2].url }/>
                }) }
            </div>
        </>
    )
}

export default Tracklist
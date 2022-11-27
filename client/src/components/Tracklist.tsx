import React from 'react'
import { TrackModel } from '../interfaces'
import './Layout/Scrollbar.css'
import Track from './Track';

type Props = {
    tracks: TrackModel[];
}

function Tracklist({ tracks }: Props) {
    return (
        <>
            <div className="flex flex-col space-y-5 lg:m-4 mt-2 lg:mt-2 pr-3 lg:pr-0 overflow-x-hidden overflow-y-auto scrollbar">
                { tracks.map((track: TrackModel, index: number) => {
                    return <Track key={ track.id } track={ track } number={ index += 1 }/>
                }) }
            </div>
        </>
    )
}

export default Tracklist
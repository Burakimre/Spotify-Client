import React, { useState, useEffect } from 'react'
import { getCurrentUserPlaylist } from '../api/SpotifyAPI';

function Banner(props: any) {
    return (
        <div className="flex items-center relative w-full h-64 m-6 sm:m-12 rounded-xl sm:shadow-xl">
            <div className="hidden sm:block absolute w-full h-full rounded-xl z-0 overflow-hidden">
                <img className="w-full h-full object-cover rounded-xl blur-lg" src={ props.src } alt=""/>
                <div className="absolute top-0 w-full h-full bg-black/40"></div>
            </div>
            <div className="flex justify-center sm:justify-start space-x-8 w-full p-4 rounded-xl z-10">
                <img className="w-56 h-56 rounded-xl" src={ props.src } alt=""/>
                <div className="hidden sm:block">
                    <span className="text-white text-6xl font-bold">{ props.name }</span>
                </div>
            </div>
        </div>
    )
}

function Browse() {
    const [playlist, setPlaylist] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getCurrentUserPlaylist('5FbrEiHi012o7EZq27FZFQ');

            setPlaylist(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            { playlist ? (

                <div className="flex">
                    <Banner name={playlist.name} src={playlist.images[0].url}/>
                </div>

            ) : null }
        </React.Fragment>
    )
}

export default Browse
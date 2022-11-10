import React, { useState, useEffect } from 'react'
import { getCurrentUserPlaylist } from '../api/SpotifyAPI';

function Banner(props: any) {
    return (
        <div className="flex items-center relative w-full h-64 m-16 rounded-xl shadow-xl bg-cover bg-center" style={{ backgroundImage: `url(${props.src})` }}>
            <div className="w-full p-4 rounded-xl bg-black/50 backdrop-blur">
                <img className="w-56 h-56 rounded-xl" src={ props.src } alt=""/>
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
                    <Banner src={playlist.images[0].url}/>
                </div>

            ) : null }
        </React.Fragment>
    )
}

export default Browse
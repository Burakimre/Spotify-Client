import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getUserSavedTracks } from '../api/SpotifyAPI';
import Banner from './Banner';
import Tracklist from './Tracklist';

function Favourites(props: any) {
    const [playlist, setPlaylist] = useState<any>(null);
    const { playlistId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getUserSavedTracks();

            setPlaylist(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, [playlistId]);

    return (
        <React.Fragment>
            { playlist ? (

                <div className="flex flex-col w-full h-full">
                    <Banner name="Favourites" src="/images/favourites.png"/>
                    <Tracklist tracks={playlist.items}/>
                </div>

            ) : null }
        </React.Fragment>
    )
}

export default Favourites
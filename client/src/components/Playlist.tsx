import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCurrentUserPlaylist } from '../api/SpotifyAPI';
import Banner from './Banner';
import Tracklist from './Tracklist';

function Playlist() {
    const [playlist, setPlaylist] = useState<any>(null);
    const { playlistId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getCurrentUserPlaylist(playlistId);

            setPlaylist(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, [playlistId]);

    return (
        <React.Fragment>
            { playlist ? (
                <div className="flex flex-col w-full h-full">
                    <Banner name={playlist.name} src={playlist.images[0].url}/>
                    <Tracklist tracks={playlist.tracks.items}/>
                </div>
            ) : null }
        </React.Fragment>
    )
}

export default Playlist
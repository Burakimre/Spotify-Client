import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCurrentUserPlaylist } from '../api/SpotifyAPI';
import { TrackModel } from '../interfaces';
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
                    <Tracklist tracks={ playlist.tracks.items.map((item: any) => {
                        return {
                            id: item.track.id,
                            name: item.track.name,
                            artists: item.track.artists.map((artist: any) => artist.name),
                            album: item.track.album.name,
                            url: item.track.external_urls.spotify,
                            image: item.track.album.images[2].url,
                            duration: item.track.duration_ms
                        } as TrackModel
                    }) }/>
                </div>
            ) : null }
        </React.Fragment>
    )
}

export default Playlist
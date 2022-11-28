import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { getUserSavedTracks } from '../api/SpotifyAPI';
import { LoadingContext } from '../contexts/LoadingContext';
import { TrackModel } from '../interfaces';
import Banner from './Banner';
import Loading from './Loading';
import Tracklist from './Tracklist';

function Favourites() {
    const { setLoading } = useContext(LoadingContext);
    const [playlist, setPlaylist] = useState<any>(null);
    const { playlistId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getUserSavedTracks();

            setPlaylist(resp.data);
            setLoading(false);
        }

        fetchData()
            .catch(console.error);
    }, [playlistId, setLoading]);

    return (
        <React.Fragment>
            { playlist ? (

                <div className="flex flex-col w-full h-full">
                    <Banner name="Favourites" src="/images/favourites.png" total={ playlist.items.length }/>
                    <Tracklist tracks={ playlist.items.map((item: any) => {
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

            ) : <Loading/> }
        </React.Fragment>
    )
}

export default Favourites
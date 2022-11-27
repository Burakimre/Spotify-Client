import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCurrentUserPlaylists } from '../api/SpotifyAPI';
import Loading from './Loading';

function Playlist(props: any) {
    return (
        <>
            <Link to={"/playlists/" + props.id}>
                <div className="flex flex-col hover:bg-black/20 rounded-xl space-y-1 select-none cursor-pointer transition-colors">
                    <img className="m-4 rounded-xl" src={ props.src } alt="" draggable="false"/>
                    <span className="text-center m-4 text-white text-sm">{ props.name }</span>
                    <span className="text-center m-4 pb-4 text-gray-400 text-sm">{ props.total + " " + (props.total === 1 ? "track" : "tracks") }</span>
                </div>
            </Link>
        </>
    )
}

function Playlists() {
    const [playlists, setPlaylists] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getCurrentUserPlaylists();

            setPlaylists(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            { playlists ? (

                <div className="flex flex-col w-full h-full">
                    <h1 className="text-white text-4xl font-bold mt-4 mb-12">Playlists</h1>
                    
                    <div className="scrollbar grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-4" style={{ overflowX: "hidden", overflowY: "auto" }}>
                        { playlists.items.map((item: any, index: number) => {
                            return <Playlist key={ item.id } id={ item.id } name={ item.name } src={ item.images[0].url } total={ item.tracks.total }/>
                        }) }
                    </div>
                </div>

            ) : <Loading/> }
        </React.Fragment>
    )
}

export default Playlists
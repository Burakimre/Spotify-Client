import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCurrentUserPlaylists } from '../api/SpotifyAPI';

function Playlist(props: any) {
    return (
        <>
            <Link to={"/playlists/" + props.id}>
                <div className="flex flex-col hover:bg-black/20 rounded-xl space-y-1 select-none cursor-pointer transition-colors">
                    <img className="m-4 rounded-xl" src={ props.src } alt="" draggable="false"/>
                    <span className="m-4 pb-4 text-white text-xl">{ props.name }</span>
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
                    <h1 className="text-white text-4xl font-bold mb-12">Playlists</h1>
                    
                    <div className="scrollbar grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-6" style={{ overflowX: "hidden", overflowY: "auto" }}>
                        { playlists.items.map((item: any, index: number) => {
                            return <Playlist key={ item.id } id={ item.id } name={ item.name } src={ item.images[0].url }/>
                        }) }
                    </div>
                </div>

            ) : null }
        </React.Fragment>
    )
}

export default Playlists
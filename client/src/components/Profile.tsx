import React, { useEffect, useState } from "react"
import { getCurrentUserProfile, getCurrentUserTopArtists, getCurrentUserTopTracks } from "../api/SpotifyRoutes";
import { TrackModel } from "../interfaces";
import Loading from "./Loading";
import Tracklist from "./Tracklist";

function Artist(props: any) {
    return (
        <>
            <a href={ props.src } target="_blank" rel="noreferrer">
                <div className="flex flex-col p-4 hover:bg-black/20 rounded-xl space-y-1 select-none cursor-pointer transition-colors">
                    <img className="w-32 h-32 object-cover rounded-xl shadow-xl" src={ props.image } alt="" />
                    <span className="text-center w-32 pt-2 text-white text-sm">{ props.name }</span>
                </div>
            </a>
        </>
    )
}

function Profile() {
	const [profile, setProfile] = useState<any>(null);
    const [topArtists, setTopArtists] = useState<any>(null);
    const [topTracks, setTopTracks] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            let resp = await getCurrentUserProfile();
            setProfile(resp.data);

            resp = await getCurrentUserTopArtists();
            setTopArtists(resp.data);

            resp = await getCurrentUserTopTracks();
            setTopTracks(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            {
				(profile && topArtists && topTracks) ? (
					<div className="scrollbar flex flex-col h-full pr-2 space-y-10 overflow-y-auto">
                        <div className="flex items-center flex-col lg:flex-row mt-4 space-x-0 lg:space-x-8 space-y-6 lg:space-y-0">
                            <img className="w-56 h-56 object-cover rounded-xl" src={ profile.images[0].url } alt=""/>
                            <div className="flex items-center">
                                <div className="flex items-center lg:items-start content-between flex-col">
                                    <span className="text-white text-5xl font-bold">{ profile.display_name }</span>
                                    <span className="text-white text-md">{ profile.followers.total + " " + (profile.followers.total === 1 ? "follower" : "followers") }</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl text-center lg:text-left font-bold">Top Artists</span>
                            <div className="scrollbar flex flex-wrap gap-4 mt-4 overflow-y-auto">
                                { topArtists.items.map((item: any) => {
                                    return <Artist key={ item.id } name={ item.name } image={ item.images[2].url } src={ item.external_urls.spotify }/>
                                }) }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl text-center lg:text-left font-bold">Top Tracks</span>
                            <div className="scrollbar mt-4 overflow-y-auto">
                                <Tracklist tracks={ topTracks.items.map((item: any) => {
                                    return {
                                        id: item.id,
                                        name: item.name,
                                        artists: item.artists.map((artist: any) => artist.name),
                                        album: item.album.name,
                                        url: item.external_urls.spotify,
                                        image: item.album.images[2].url,
                                        duration: item.duration_ms
                                    } as TrackModel
                                }) }/>
                            </div>
                        </div>
                    </div>
				) : <Loading/>
			}
		</React.Fragment>
    )
}

export default Profile
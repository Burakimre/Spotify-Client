import React, { useContext, useEffect, useState } from "react"
import { getCurrentUserPlaylists, getCurrentUserProfile, getCurrentUserTopArtists, getCurrentUserTopTracks } from "../api/SpotifyRoutes";
import { LoadingContext } from "../contexts/LoadingContext";
import { TrackModel } from "../interfaces";
import Loading from "./Loading";
import Tracklist from "./Tracklist";

enum TimeRange {
    LongTerm = "long_term",
    MediumTerm = "medium_term",
    ShortTerm = "short_term"
}

function Artist(props: any) {
    return (
        <>
            <a href={ props.src } target="_blank" rel="noreferrer">
                <div className="flex flex-col p-4 hover:bg-black/20 rounded-xl space-y-1 select-none cursor-pointer transition-colors">
                    <div className="w-32 h-32">
                        <img className="w-full h-full object-cover rounded-xl shadow-xl" src={ props.image } alt="" />
                    </div>
                    <span className="text-center w-32 pt-2 text-white text-sm">{ props.name }</span>
                </div>
            </a>
        </>
    )
}

function Profile() {
    const { setLoading } = useContext(LoadingContext);
	const [profile, setProfile] = useState<any>(null);
    const [topArtists, setTopArtists] = useState<any>(null);
    const [topTracks, setTopTracks] = useState<any>(null);
    const [topArtistsActiveTimeRange, setTopArtistsActiveTimeRange] = useState<TimeRange>(TimeRange.LongTerm);
    const [topTracksActiveTimeRange, setTopTracksActiveTimeRange] = useState<TimeRange>(TimeRange.LongTerm);
    const [totalPlaylists, setTotalPlaylists] = useState<number>(0);

    const changeTopArtistsTimeRange = async (timeRange: TimeRange) => {
        try {
            let resp = await getCurrentUserTopArtists(timeRange);
            setTopArtists(resp.data);
            setTopArtistsActiveTimeRange(timeRange);
        } catch (err) {
            console.error(err);
        }
    }

    const changeTopTracksTimeRange = async (timeRange: TimeRange) => {
        try {
            let resp = await getCurrentUserTopTracks(timeRange);
            setTopTracks(resp.data);
            setTopTracksActiveTimeRange(timeRange);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            let resp = await getCurrentUserProfile();
            setProfile(resp.data);

            resp = await getCurrentUserTopArtists();
            setTopArtists(resp.data);

            resp = await getCurrentUserTopTracks();
            setTopTracks(resp.data);

            resp = await getCurrentUserPlaylists();
            setTotalPlaylists(resp.data.total);

            setLoading(false);
        }

        fetchData()
            .catch(console.error);
    }, [setLoading]);

    return (
        <React.Fragment>
            {
				(profile && topArtists && topTracks) ? (
					<div className="scrollbar flex flex-col h-full pr-2 space-y-10 overflow-y-auto">
                        <div className="flex items-center lg:items-stretch flex-col lg:flex-row mt-4 space-x-0 lg:space-x-8 space-y-6 lg:space-y-0">
                            <img className="w-56 h-56 object-cover rounded-xl" src={ profile.images[0].url } alt=""/>
                            <div className="flex flex-col justify-center">
                                <div className="flex-1"></div>
                                <div className="flex flex-col">
                                    <span className="text-white text-5xl font-bold">{ profile.display_name }</span>
                                </div>
                                <div className="flex flex-1 justify-center lg:justify-start space-x-2">
                                    <span className="self-end text-gray-400 text-md">{ profile.followers.total + " " + (profile.followers.total === 1 ? "follower" : "followers") }</span>
                                    <span className="self-end text-gray-400 text-md">•</span>
                                    <span className="self-end text-gray-400 text-md">{ totalPlaylists + " " + (totalPlaylists === 1 ? "playlist" : "playlists") }</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
                                <span className="flex-1 text-white text-3xl text-center lg:text-left font-bold">Top Artists</span>
                                <div className="flex space-x-4 justify-center lg:justify-start mt-4 lg:mt-0">
                                    <button onClick={ () => changeTopArtistsTimeRange(TimeRange.LongTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topArtistsActiveTimeRange === TimeRange.LongTerm ? "bg-white text-black" : "")}` }>All Time</button>
                                    <button onClick={ () => changeTopArtistsTimeRange(TimeRange.MediumTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topArtistsActiveTimeRange === TimeRange.MediumTerm ? "bg-white text-black" : "")}` }>Last 6 Months</button>
                                    <button onClick={ () => changeTopArtistsTimeRange(TimeRange.ShortTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topArtistsActiveTimeRange === TimeRange.ShortTerm ? "bg-white text-black" : "")}` }>Last 4 Weeks</button>
                                </div>
                            </div>
                            <div className="scrollbar grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] gap-4 mt-4">
                                { topArtists.items.map((item: any) => {
                                    return <Artist key={ item.id } name={ item.name } image={ item.images[2].url } src={ item.external_urls.spotify }/>
                                }) }
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
                                <span className="flex-1 text-white text-3xl text-center lg:text-left font-bold">Top Tracks</span>
                                <div className="flex space-x-4 justify-center lg:justify-start mt-4 lg:mt-0">
                                    <button onClick={ () => changeTopTracksTimeRange(TimeRange.LongTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topTracksActiveTimeRange === TimeRange.LongTerm ? "bg-white text-black" : "")}` }>All Time</button>
                                    <button onClick={ () => changeTopTracksTimeRange(TimeRange.MediumTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topTracksActiveTimeRange === TimeRange.MediumTerm ? "bg-white text-black" : "")}` }>Last 6 Months</button>
                                    <button onClick={ () => changeTopTracksTimeRange(TimeRange.ShortTerm) }
                                            className={ `min-h-[2.25rem] px-4 text-white border-2 border-white rounded-md transition-colors ${(topTracksActiveTimeRange === TimeRange.ShortTerm ? "bg-white text-black" : "")}` }>Last 4 Weeks</button>
                                </div>
                            </div>
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
import axios from "axios";
import { access_token } from "./SpotifyAPI";

// Library
export const getUserSavedTracks = () => axios.get('	https://api.spotify.com/v1/me/tracks', {headers: { Authorization: `Bearer ${access_token}` }});

// Playlists
export const getCurrentUserPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', {headers: { Authorization: `Bearer ${access_token}` }});
export const getCurrentUserPlaylist = (playlistId: string) => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {headers: { Authorization: `Bearer ${access_token}` }});

// User
export const getCurrentUserProfile = () => axios.get('https://api.spotify.com/v1/me', {headers: { Authorization: `Bearer ${access_token}` }});
export const getCurrentUserTopArtists = (timeRange: string = "long_term") => axios.get('https://api.spotify.com/v1/me/top/artists?time_range=' + timeRange, {headers: { Authorization: `Bearer ${access_token}` }});
export const getCurrentUserTopTracks = (timeRange: string = "long_term") => axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=' + timeRange, {headers: { Authorization: `Bearer ${access_token}` }});

// Other
export const getAvailableGenreSeeds = () => axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: { Authorization: `Bearer ${access_token}` }});
export const getSeveralBrowseCategories = () => axios.get('https://api.spotify.com/v1/browse/categories', {headers: { Authorization: `Bearer ${access_token}` }});
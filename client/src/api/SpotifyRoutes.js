import axios from "axios";
import { access_token } from "./SpotifyAPI";

export const getAvailableGenreSeeds = () => axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: { Authorization: `Bearer ${access_token}` }});
export const getSeveralBrowseCategories = () => axios.get('https://api.spotify.com/v1/browse/categories', {headers: { Authorization: `Bearer ${access_token}` }});

// Library
export const getUserSavedTracks = () => axios.get('	https://api.spotify.com/v1/me/tracks', {headers: { Authorization: `Bearer ${access_token}` }});

// Playlists
export const getCurrentUserPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', {headers: { Authorization: `Bearer ${access_token}` }});
export const getCurrentUserPlaylist = (playlistId) => axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {headers: { Authorization: `Bearer ${access_token}` }});
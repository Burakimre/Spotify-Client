import React, { useState, useEffect } from 'react'
import { getSeveralBrowseCategories } from '../api/SpotifyAPI';

function Browse() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getSeveralBrowseCategories();

            setCategories(resp.data.categories);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <div className="flex">
            
        </div>
    )
}

export default Browse
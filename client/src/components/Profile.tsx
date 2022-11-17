import React, { useEffect, useState } from "react"
import { getCurrentUserProfile } from "../api/SpotifyRoutes";

function Profile() {
	const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await getCurrentUserProfile();

            setProfile(resp.data);
			console.log(resp.data);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            {
				profile ? (
					<div className="flex">
						<img className="w-56 h-56 object-cover rounded-xl" src={ profile.images[0].url } alt=""/>
						<span className="text-white">{ profile.display_name }</span>
					</div>
				) : null
			}
		</React.Fragment>
    )
}

export default Profile
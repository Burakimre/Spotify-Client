const authenticationUrl = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "5f3149069e664d8b94fb7ce4ea1ce238";
const scopes = [
	"streaming",
	"user-read-email",
	"user-read-private",
];

export const loginUrl = `${authenticationUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}`;
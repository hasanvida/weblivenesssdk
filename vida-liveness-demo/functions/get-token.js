export async function handler() {
const clientId = process.env.VIDA_CLIENT_ID;
const clientSecret = process.env.VIDA_CLIENT_SECRET;
const signingKey = process.env.VIDA_SIGNING_KEY;

const params = new URLSearchParams();
params.append("grant_type", "client_credentials");
params.append("client_id", clientId);
params.append("client_secret", clientSecret);

const res = await fetch(
"https://qa-sso.vida.id/auth/realms/vida/protocol/openid-connect/token",
{
method: "POST",
headers: {
"Content-Type": "application/x-www-form-urlencoded"
},
body: params
}
);

const data = await res.json();

return {
statusCode: 200,
body: JSON.stringify({
access_token: data.access_token,
signing_key: signingKey
})
};
}


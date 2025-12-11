
export const MainData = {
    mainUrl: "http://109.205.183.105:8081",
    tokenUrl: "http://109.205.183.105:8080/realms/captain/protocol/openid-connect/token",
    uiURL: "http://109.205.183.105:8080/realms/captain/protocol/openid-connect/auth?client_id=captain-fe&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2F109.205.183.105%3A3000%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=hunyZl_F6t8bpnk6kguvfFmJl9RqmGPpjD_JJn3PQlg&code_challenge=WkCzBFMBhSOyrYZae6kFvgQDkyuSP-6GOAJBwZEWsYo&code_challenge_method=S256",
    username: "default.admin@tect.com",
    password: "0406Warsaw!@#",
    defaultPasswordOrgAdmin: "Qwerty12345!",
    testId: null,
}

// export const gettingToken: { Authorization: string } = {
//     Authorization: `Bearer ${tokenPlatformOwner}`,
// };




export class authLocatiors {
    private LoginField = '';
    private PasswordField = '';
    private LoginButton = '';
}
import { tokenPlatformOwner } from "../apiTests/1_auth.tests";

export class apiData {
    static tokenUrl: string = "http://109.205.183.105:8080/realms/captain/protocol/openid-connect/token";
    static username: string = "default.admin@tect.com";
    static password: string = "0406Warsaw!@#";
}

export const gettingToken: { Authorization: string } = {
    Authorization: `Bearer ${tokenPlatformOwner}`,
};

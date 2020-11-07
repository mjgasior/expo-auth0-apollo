import * as AuthSession from "expo-auth-session";
import JwtDecode from "jwt-decode";
import Constants from "expo-constants";

export const login = async () => {
  const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

  const params = {
    redirect_uri: redirectUrl,
    response_type: "token id_token",
    nonce: "nonce",
    rememberLastLogin: true,
    client_id: Constants.manifest.extra.clientId,
    scope: "openid profile",
    audience: "https://cracker.app",
  };

  const queryParams = toQueryString(params);
  const authUrl = `https://${Constants.manifest.extra.authDomain}/authorize${queryParams}`;

  const response = await AuthSession.startAsync({
    authUrl,
    showInRecents: true,
  });

  return handleLoginResponse(response);
};

const handleLoginResponse = (response) => {
  if (response.error || response.type !== "success") {
    return;
  }

  const decodedJwtIdToken = JwtDecode(response.params.id_token);

  return {
    idToken: decodedJwtIdToken,
    accessToken: response.params.access_token,
  };
};

const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

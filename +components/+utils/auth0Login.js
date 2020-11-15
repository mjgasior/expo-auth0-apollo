import { makeRedirectUri, startAsync } from "expo-auth-session";
import { handleLoginResponse, toQueryString } from "./authUtils";
import { Platform } from "react-native";
import Constants from "expo-constants";

export const auth0Login = async () => {
  const useProxy = Platform.select({ web: false, default: true });
  const redirectUrl = makeRedirectUri({ useProxy });

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

  const response = await startAsync({
    authUrl,
    showInRecents: true,
    useProxy: false,
    returnUrl: redirectUrl,
  });

  return handleLoginResponse(response);
};
